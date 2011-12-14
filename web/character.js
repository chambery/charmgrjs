
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
    var acp, armor, i;
    acp = 0;
    for (i in char_armors) {
      armor = char_armors[i];
      acp += armors({
        name: armor.armor_name
      }).first().acp;
    }
    return acp;
  };

  Character.prototype.calc_shield_acp = function(char_shields) {
    var acp, i, shield;
    acp = 0;
    for (i in char_shields) {
      shield = char_shields[i];
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
    _ref2 = this.get_all_char_feats(this.feats, this.classes);
    for (i in _ref2) {
      char_feat = _ref2[i];
      console.log("\tevaluating " + char_feat.name);
      feat = feats({
        name: char_feat.name
      }).first();
      if ((feat != null ? (_ref3 = feat.skills) != null ? _ref3.mod : void 0 : void 0) != null) {
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
    console.log("calc_ability_score - src");
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

  Character.prototype.get_class_feat_names = function(char_classes) {
    var char_class, class_feats, classname, clazz, level, these_class_feats, _ref;
    console.log("get_class_feat_names - src");
    class_feats = [];
    for (classname in char_classes) {
      char_class = char_classes[classname];
      clazz = classes({
        name: classname
      }).first();
      _ref = clazz.feats;
      for (level in _ref) {
        these_class_feats = _ref[level];
        $.each(these_class_feats, function(i, feat_name) {
          console.log("\t- " + feat_name + " : " + i);
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

  Character.prototype.get_class_feats = function(char_classes) {
    var class_feats, feat, feat_names, i, name;
    console.log("get_class_feats - src");
    class_feats = [];
    feat_names = this.get_class_feat_names(char_classes);
    console.log(feat_names);
    for (i in feat_names) {
      name = feat_names[i];
      feat = feats({
        name: name
      }).first();
      console.log("\t+ " + i + " : " + feat.name);
      if (class_feats.indexOf(feat) === -1) {
        class_feats.push(feats({
          name: name
        }).first());
      }
      console.log("\t+ length: " + class_feats.length);
    }
    console.log("" + class_feats);
    return class_feats;
  };

  /*
  	Returns an array of the class feats collected from the supplied character classes and character-selected feats.
  */

  Character.prototype.get_all_char_feats = function(char_feats, char_classes) {
    var all_char_feats, feat, i;
    console.log("get_all_char_feats - src");
    all_char_feats = this.get_class_feats(char_classes);
    if (typeof char_feats === "function") {
      char_feats().each(function(char_feat, i) {
        var feat;
        feat = feats({
          name: char_feat.feat_name
        }).first();
        if (all_char_feats.indexOf(feat) === -1) {
          console.log("adding \"" + feat.name + "\"");
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

  return Character;

})();

if (typeof exports === "object") this.Character = Character;
