
/*
src/character.coffee
*/

var $, Character, TAFFY, alignments, armors, classes, common, feats, goodness, races, shields, skills, _;

if (typeof exports === "object") {
  TAFFY = require("taffydb");
  $ = require("jquery");
  _ = require("underscore");
  common = require("./common");
  classes = require("./resources/classes").classes;
  armors = require("./resources/armors").armors;
  shields = require("./resources/shields").shields;
  feats = require("./resources/feats").feats;
  skills = require("./resources/skills").skills;
  races = require("./resources/races").races;
  alignments = require("./resources/alignments").alignments;
  goodness = require("./resources/alignments").goodness;
}

Character = (function() {

  function Character() {}

  Character.prototype.name = "";

  Character.prototype.race_name = "";

  Character.prototype.abilities = {
    "Str": 0,
    "Int": 0,
    "Dex": 0,
    "Cha": 0,
    "Con": 0,
    "Wis": 0
  };

  /*
  		"Fighter": 
  			"level": 3
  		"Wizard":
  			"level": 4
  */

  Character.prototype.calc_total_base_feats_count = function() {
    var base_feat_count, base_feats, classdata, classname, level, _ref, _ref2;
    console.log("\ncalc_total_base_feats_count");
    base_feat_count = (this.race_name === "Human" ? 1 : 0);
    base_feats = [0, 2, 5, 8, 11, 14, 17];
    _ref = this.classes;
    for (classname in _ref) {
      classdata = _ref[classname];
      for (level = 0, _ref2 = classdata.level; 0 <= _ref2 ? level <= _ref2 : level >= _ref2; 0 <= _ref2 ? level++ : level--) {
        base_feat_count += (base_feats.indexOf(level) > -1 ? 1 : 0);
      }
    }
    return base_feat_count;
  };

  Character.prototype.calc_total_class_feats_count = function() {
    var class_feat_count, class_feats, classdata, classname, level, _ref, _ref2;
    console.log("\ncalc_total_class_feats_count");
    class_feat_count = 0;
    _ref = this.classes;
    for (classname in _ref) {
      classdata = _ref[classname];
      class_feats = classes({
        name: classname
      }).first().bonus_feats_levels;
      for (level = 0, _ref2 = classdata.level; 0 <= _ref2 ? level <= _ref2 : level >= _ref2; 0 <= _ref2 ? level++ : level--) {
        class_feat_count += (~class_feats.indexOf(level) ? 1 : 0);
      }
    }
    return class_feat_count;
  };

  Character.prototype.calc_armor_acp = function(char_armors) {
    var acp, armor, i, _ref;
    console.log("\ncalc_armor_acp");
    acp = 0;
    _ref = this.armors;
    for (i in _ref) {
      armor = _ref[i];
      acp += armors({
        name: armor.armor_name
      }).first().acp;
    }
    return acp;
  };

  Character.prototype.calc_shield_acp = function() {
    var acp, i, shield, _ref;
    console.log("\ncalc_shield_acp");
    acp = 0;
    _ref = this.shields;
    for (i in _ref) {
      shield = _ref[i];
      acp += shields({
        name: shield.shield_name
      }).first().acp;
    }
    return acp;
  };

  /*
  	Returns the DC for the supplied skill (subtype) taking all factors into consideration.
  */

  Character.prototype.calc_skill_mod = function(skill, subtype) {
    var acp, char_feat, char_skill, char_skill_points, feat, feat_mod, i, mods, race, race_mod, ranks, skill_ability_score, _ref, _ref2, _ref3, _ref4;
    console.log("\ncalc_skill_mod");
    mods = {};
    acp = acp | 0;
    char_skill_points = 0;
    char_skill = typeof this.skills === "function" ? this.skills({
      skill_name: skill.name
    }).first() : void 0;
    console.log("\tchar_skill: " + (char_skill != null ? char_skill.skill_name : void 0));
    if (subtype) {
      console.log("\t\tsubtype: " + subtype + " : " + (char_skill != null ? char_skill.subtypes[subtype] : void 0));
      char_skill_points = (_ref = char_skill.subtypes) != null ? _ref[subtype] : void 0;
    } else {
      console.log("\t\tranks: " + char_skill.ranks);
      char_skill_points = char_skill.ranks;
    }
    console.log("\tchar_skill_points: " + char_skill_points);
    race = races({
      name: this.race_name
    }).first();
    feat_mod = 0;
    _ref2 = this.get_all_char_feats();
    for (i in _ref2) {
      char_feat = _ref2[i];
      console.log("\tevaluating " + char_feat.name);
      feat = feats({
        name: char_feat.name
      }).first();
      if (feat != null ? (_ref3 = feat.skills) != null ? _ref3.mod : void 0 : void 0) {
        feat_mod += feat.skills.mod(skill, subtype, char_skill_points, feat_mod, this.feats);
      }
      console.log("\tmod: " + feat_mod);
      if (skill.mobility && feat.mobility) acp = feat.mobility(acp);
    }
    race_mod = race.skills[skill.name] | 0;
    ranks = this.calc_ranks(skill, subtype);
    skill_ability_score = this.abilities[skill.ability] | 0;
    console.log("\tskill - " + skill.name + " " + (subtype ? "(" + subtype + ")" : void 0) + "\n\tskill points - " + char_skill_points + " : " + ranks + "\n\trace - " + race.name + " : " + race_mod + "\n\tranks: " + ranks + "		\n\tfeat mod : " + feat_mod + "\n\tability mod : " + (common.calc_ability_modifier(parseInt(skill_ability_score))));
    return ranks + common.calc_ability_modifier(parseInt(skill_ability_score)) + race_mod + feat_mod + (skill.mobility ? acp : 0) + parseInt(((_ref4 = this.equip_benes) != null ? _ref4["skill:" + skill.name] : void 0) | 0) | 0;
  };

  /*
  	Returns the ability score (not mod) modified by race and equipment
  */

  Character.prototype.calc_ability_score = function(ability) {
    var ability_score, equip_bene, race, race_mod, _ref;
    console.log("\ncalc_ability_score");
    race = races({
      name: this.race_name
    }).first();
    race_mod = race.abilities[ability] | 0;
    ability_score = this.abilities[ability] | 0;
    equip_bene = ((_ref = this.equip_benes) != null ? _ref["ability:" + ability] : void 0) | 0;
    console.log("\tequip_benes for " + ability + ": " + (parseInt(equip_bene)));
    console.log("\trace_mod: " + race_mod + "   ability_score: " + ability_score);
    return parseInt(ability_score + parseInt(race_mod + parseInt(equip_bene)));
  };

  /*
  	Returns true if the supplied skill (or subtype, if applicable) contains any of the supplied character classes.
  */

  Character.prototype.is_class_skill = function(skill, subtype) {
    var classname, _ref, _ref2, _ref3;
    console.log("\nis_class_skill");
    for (classname in this.classes) {
      if ((skill != null ? (_ref = skill.skill_classes) != null ? _ref.indexOf(classname) : void 0 : void 0) > -1) {
        console.log("\t" + skill.name + " " + skill.skill_classes + " : " + classname);
        return true;
      }
      if ((skill != null ? (_ref2 = skill.subtypes) != null ? (_ref3 = _ref2[subtype]) != null ? _ref3.indexOf(classname) : void 0 : void 0 : void 0) > -1) {
        console.log("\t" + skill.name + " (" + subtype + ") " + skill.subtypes[subtype] + " : " + classname);
        return true;
      }
    }
    return false;
  };

  /*
  	Returns the class-modified ranks for the supplied skill and skill points, or the max ranks for the character's level, whichever is lower.
  */

  Character.prototype.calc_ranks = function(skill, subtype) {
    var char_skill, classname, clazz, is_class_skill, level, max_ranks, multiplier, points, ranks, _ref;
    console.log("\ncalc_ranks");
    is_class_skill = this.is_class_skill(skill, subtype);
    console.log("\t" + skill.name + " (" + subtype + ") - " + (is_class_skill ? "class" : "cross-class"));
    multiplier = (is_class_skill ? 1 : .5);
    level = 0;
    _ref = this.classes;
    for (classname in _ref) {
      clazz = _ref[classname];
      level += clazz.level + 1;
    }
    points = 0;
    char_skill = this.skills({
      skill_name: skill.name
    }).first();
    if (char_skill) {
      if (char_skill.subtypes) {
        points = char_skill.subtypes[subtype] | 0;
      } else if (char_skill.ranks) {
        points = char_skill.ranks;
      }
    }
    ranks = multiplier * points;
    console.log("\tranks: " + multiplier + " * " + points + " = " + ranks);
    max_ranks = multiplier * (level + 3);
    console.log("\tmax ranks: " + multiplier + " * " + (level + 3) + " = " + max_ranks);
    return Math.min(Math.floor(max_ranks), ranks);
  };

  /*
  	Returns an array of feat names collected from class feats of the supplied character classes.
  */

  Character.prototype.get_class_feat_names = function() {
    var char_class, class_feats, classname, clazz, level, these_class_feats, _ref, _ref2;
    console.log("\nget_class_feat_names");
    class_feats = [];
    _ref = this.classes;
    for (classname in _ref) {
      char_class = _ref[classname];
      clazz = classes({
        name: classname
      }).first();
      _ref2 = clazz.feats;
      for (level in _ref2) {
        these_class_feats = _ref2[level];
        $.each(these_class_feats, function(i, feat_name) {
          if (char_class.level >= level && class_feats.indexOf(feat_name) === -1) {
            return class_feats.push(feat_name);
          }
        });
      }
    }
    return class_feats;
  };

  /*
  	Returns an array of the class feats collected from the supplied character classes.
  */

  Character.prototype.get_class_feats = function() {
    var class_feats, feat, feat_names, i, name;
    console.log("\nget_class_feats");
    class_feats = [];
    feat_names = this.get_class_feat_names();
    for (i in feat_names) {
      name = feat_names[i];
      feat = feats({
        name: name
      }).first();
      if (class_feats.indexOf(feat) === -1) {
        class_feats.push(feats({
          name: name
        }).first());
      }
    }
    return class_feats;
  };

  /*
  	Returns an array of the class feats collected from the supplied character classes and character-selected feats.
  */

  Character.prototype.get_all_char_feats = function() {
    var all_char_feats, feat, i;
    console.log("\nget_all_char_feats");
    all_char_feats = this.get_class_feats();
    if (typeof this.feats === "function") {
      this.feats().each(function(char_feat, i) {
        var feat;
        feat = feats({
          name: char_feat.feat_name
        }).first();
        if (all_char_feats.indexOf(feat) === -1) {
          console.log("\tadding \"" + feat.name + "\"");
          return all_char_feats.push(feat);
        }
      });
    }
    console.log("\tall_char_feats count: " + all_char_feats.length);
    for (i in all_char_feats) {
      feat = all_char_feats[i];
      console.log("\t" + feat.name);
    }
    return all_char_feats;
  };

  /*
  	Returns the initiative modifier calculated from all relevant factors:
  		feats
  		dexterity
  */

  Character.prototype.calc_init = function() {
    var char_feats, init;
    console.log("calc_init");
    init = 0;
    char_feats = this.get_char_feats();
    console.log("\tinit feats: " + (char_feats({
      "init": {
        isNull: false
      }
    }).count()));
    char_feats({
      init: {
        isFunction: true
      }
    }).each(function(feat) {
      init = feat.init(init);
      return init;
    });
    return common.calc_ability_modifier(this.abilities["Dex"]) + init;
  };

  /*
  	Returns a TAFFY db of feat objects for this character's chosen feats.
  */

  Character.prototype.get_char_feats = function() {
    var char_feats;
    console.log("\tget_char_feats - src");
    char_feats = TAFFY([]);
    if (this.feats) {
      this.feats().each(function(feat) {
        return char_feats.insert(feats({
          name: feat.feat_name
        }).first());
      });
    }
    char_feats.insert(this.get_class_feats());
    return char_feats;
  };

  Character.prototype.calc_dr = function(dr) {
    var _ref;
    return ((_ref = this.equip_benes) != null ? _ref[dr] : void 0) | 0;
  };

  /*
  	Returns the AC for all relevant factors:
  		feats
  		armor/shields
  		classes
  		race
  		abilities
  */

  Character.prototype.calc_ac = function() {
    var ac, armor_bonus, char_feats, dex_bonus, monk_mod, shield_bonus;
    console.log("\ncalc_ac - src");
    ac = 0;
    char_feats = this.get_char_feats();
    char_feats({
      ac: {
        isFunction: true
      }
    }).each(function(feat, i) {
      ac = feat.ac(ac);
      return ac;
    });
    armor_bonus = common.calc_armor_bonus(this.armors, armors, "armor");
    console.log("\tarmor bonus: " + (armor_bonus != null ? armor_bonus.bonus : void 0) + " (" + (armor_bonus != null ? armor_bonus.max_dex_bonus : void 0) + ")");
    shield_bonus = common.calc_armor_bonus(this.shields, shields, "shield");
    console.log("\tshield bonus: " + (shield_bonus != null ? shield_bonus.bonus : void 0));
    monk_mod = (this.classes["Monk"] != null ? classes.first({
      name: "Monk"
    }).ac_bonus[common.calc_level()] : 0);
    dex_bonus = common.calc_ability_modifier(this.abilities["Dex"]);
    if (armor_bonus.max_dex_bonus !== "-") {
      dex_bonus = Math.min(armor_bonus.max_dex_bonus, dex_bonus);
    }
    console.log("\tbase: 10\n\tarmor bonus: " + (armor_bonus != null ? armor_bonus.bonus : void 0) + " (" + (armor_bonus != null ? armor_bonus.max_dex_bonus : void 0) + ")\n\tshield bonus: " + (shield_bonus != null ? shield_bonus.bonus : void 0) + " (" + (shield_bonus != null ? shield_bonus.max_dex_bonus : void 0) + ")\n\tability (Dex): " + (common.calc_ability_modifier(this.abilities["Dex"])) + "\n\tmin(max dex bonus, dex): " + (Math.min(common.calc_ability_modifier(this.abilities["Dex"]), armor_bonus.max_dex_bonus)) + "\n\tsize mod: " + (this.calc_size_mod(this.race_name)) + "\n\tequip bene: " + ((typeof this.equip_bene === "function" ? this.equip_bene("other:ac") : void 0) | 0) + "\n\tfeat modified: " + ac);
    return 10 + armor_bonus.bonus + shield_bonus.bonus + dex_bonus + this.calc_size_mod(this.race_name) + monk_mod + ((typeof this.equip_bene === "function" ? this.equip_bene("other:ac") : void 0) | 0) + ac;
  };

  /*
  	Returns the touch ac for all relevant factors:
  		dexterity
  		race
  		feats
  */

  Character.prototype.calc_touch_ac = function() {
    console.log("\ncalc_touch_ac");
    console.log("\tdex mod: " + (common.calc_ability_modifier(this.abilities["Dex"])) + "\n\tsize mod: " + (this.calc_size_mod(this.race_name)));
    return 10 + common.calc_ability_modifier(this.abilities["Dex"]) + this.calc_size_mod(this.race_name);
  };

  /*
  	Returns the flat-footed ac for all relevant factors: 
  		armor
  */

  Character.prototype.calc_flat_footed_ac = function() {
    return 10 + common.calc_armor_bonus(char_armor, armors, "armor").bonus;
  };

  /*
  	Returns the modifier for this character's size
  */

  Character.prototype.calc_size_mod = function() {
    var size;
    console.log("\ncalc_size_mod");
    size = races({
      name: this.race_name
    }).first().size;
    console.log("\t" + this.race_name + " - " + size);
    if (size === "small") {
      return 1;
    } else {
      return 0;
    }
  };

  return Character;

})();

if (typeof exports === "object") this.Character = Character;
