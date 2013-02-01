
/*
src/character.coffee
*/

var $, Character, TAFFY, alignments, armors, classes, common, feats, goodness, races, shields, skills, weapons, _;

if (typeof exports === "object") {
  TAFFY = require("taffydb");
  $ = require("jquery");
  _ = require("underscore");
  common = require("./common");
  classes = require("./resources/classes").classes;
  armors = require("./resources/armors").armors;
  shields = require("./resources/shields").shields;
  weapons = require("./resources/weapons").weapons;
  feats = require("./resources/feats").feats;
  skills = require("./resources/skills").skills;
  races = require("./resources/races").races;
  alignments = require("./resources/alignments").alignments;
  goodness = require("./resources/alignments").goodness;
}

Character = (function() {

  function Character(data) {
    var default_class, entry, i, log_data, log_entries, log_separator;
    data = data || {};
    if (!TAFFY.isObject(data)) {
      log_data = null;
      log_separator = data.indexOf("``");
      if (log_separator > 0) {
        log_data = data.substring(data.indexOf("``") + 2);
        data = data.substring(0, data.indexOf("``"));
      }
      data = JSON.parse(unescape(data)) || {};
    }
    this.name = data.name || "";
    this.race_name = data.race_name || races().first().name;
    this.abilities = data.abilities || {};
    default_class = classes().first().name;
    if (data.classes) {
      this.classes = data.classes;
    } else {
      this.classes[default_class] = {
        level: 0
      };
    }
    this.alignment = data.alignment || alignments[0];
    this.goodness = data.goodness || goodness[0];
    this.languages = [];
    this.equipment_benefits = {};
    if (data.skills) {
      this.skills = parse_taffy_data(data.skills);
    } else {
      this.skills = new TAFFY([]);
    }
    if (data.feats) {
      this.feats = parse_taffy_data(data.feats);
    } else {
      this.feats = new TAFFY([]);
    }
    if (log_data) {
      log_entries = log_data.split("`");
      i = 0;
      while (i < log_entries.length) {
        entry = JSON.parse(unescape(log_entries[i]));
        sav(entry, "log_" + data.name + "_" + entry.id);
        i++;
      }
    }
    console.log("Character(data): " + (JSON.stringify(data, null, 2)));
  }

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

  Character.prototype.classes = {};

  Character.prototype.alignment = alignments[0];

  Character.prototype.goodness = goodness[0];

  Character.prototype.languages = [];

  Character.prototype.equipment_benefits = {};

  Character.prototype.feats = new TAFFY([]);

  /*
  	Returns the count of base feats provided by the character's classes for the current class levels
  */

  Character.prototype.total_base_feats_count = function() {
    var base_feat_count, base_feats, classdata, classname, level, _ref, _ref2;
    console.log("\ntotal_base_feats_count");
    base_feat_count = (this.race_name === "Human" ? 1 : 0);
    base_feats = [0, 2, 5, 8, 11, 14, 17];
    _ref = this.classes;
    for (classname in _ref) {
      classdata = _ref[classname];
      for (level = 0, _ref2 = classdata.level; 0 <= _ref2 ? level <= _ref2 : level >= _ref2; 0 <= _ref2 ? level++ : level--) {
        base_feat_count += (~base_feats.indexOf(level) ? 1 : 0);
      }
    }
    return base_feat_count;
  };

  /*
  	Returns the count of (bonus?) feats provided by the character's classes for the current class levels
  */

  Character.prototype.total_class_feats_count = function() {
    var class_feat_count, class_feats, classdata, classname, level, _ref, _ref2;
    console.log("\ntotal_class_feats_count");
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

  /*
  	Returns the Armor Class Penalty for all worn armor
  */

  Character.prototype.armor_acp = function() {
    var acp;
    console.log("\narmor_acp");
    acp = 0;
    if (typeof this.armors === "function") {
      this.armors({
        is_worn: true
      }).each(function(armor) {
        acp += armors({
          name: armor.armor_name
        }).first().acp;
        return console.log("\t" + armor.armor_name + ": " + (armors({
          name: armor.armor_name
        }).first().acp) + " (" + armor.is_worn + ")");
      });
    }
    return acp;
  };

  /*
  	Returns the Armor Class Penalty for all worn shields
  */

  Character.prototype.shield_acp = function() {
    var acp;
    console.log("\nshield_acp");
    acp = 0;
    if (typeof this.shields === "function") {
      this.shields({
        is_worn: true
      }).each(function(shield) {
        acp += shields({
          name: shield.shield_name
        }).first().acp;
        return console.log("\t" + shield.shield_name + ": " + (shields({
          name: shield.shield_name
        }).first().acp) + " (" + shield.is_worn + ")");
      });
    }
    return acp;
  };

  /*
  	Returns the DC for the supplied skill (subtype) taking all factors into consideration.
  */

  Character.prototype.calc_skill_mod = function(skill, subtype) {
    var acp, char_feat, char_skill, char_skill_points, feat, feat_mod, i, mods, race, race_mod, ranks, _ref, _ref2, _ref3, _ref4;
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
    ranks = this.ranks(skill, subtype);
    console.log("\tskill - " + skill.name + " " + (subtype ? "(" + subtype + ")" : void 0) + "\n\tskill points - " + char_skill_points + " : " + ranks + "\n\trace - " + race.name + " : " + race_mod + "\n\tranks: " + ranks + "\n\tfeat mod : " + feat_mod + "\n\tability mod : " + (this.ability_modifier(skill.ability)));
    return ranks + this.ability_modifier(skill.ability) + race_mod + feat_mod + (skill.mobility ? acp : 0) + parseInt(((_ref4 = this.equip_benes) != null ? _ref4["skill:" + skill.name] : void 0) | 0) | 0;
  };

  /*
  	Returns the ability score (not mod) modified by race and equipment
  */

  Character.prototype.ability_score = function(ability) {
    var ability_score, equip_bene, race, race_mod, _ref, _ref2;
    race = races({
      name: this.race_name
    }).first();
    race_mod = ((_ref = race.abilities) != null ? _ref[ability] : void 0) | 0;
    ability_score = this.abilities[ability] | 0;
    equip_bene = ((_ref2 = this.equip_benes) != null ? _ref2["ability:" + ability] : void 0) | 0;
    return parseInt(ability_score + parseInt(race_mod + parseInt(equip_bene)));
  };

  /*
  	Returns the modifier for the supplied ability
  */

  Character.prototype.ability_modifier = function(ability) {
    return calc_ability_modifier(this.ability_score(ability));
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

  Character.prototype.ranks = function(skill, subtype) {
    var char_skill, classname, clazz, is_class_skill, level, max_ranks, multiplier, points, ranks, _ref;
    console.log("\nranks");
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
  	Returns true feat name is found in the list of feats compiled from character classes.
  */

  Character.prototype.is_class_feat = function(feat_name) {
    return ~this.get_class_feat_names().indexOf(feat_name);
  };

  /*
  	Returns a Taffy db of feat objects for this character's chosen feats. Does not include class-supplied feats.
  */

  Character.prototype.get_feats = function() {
    var char_feats;
    console.log("\tget_feats");
    char_feats = TAFFY([]);
    if (this.feats) {
      this.feats().each(function(feat) {
        var full_feat;
        full_feat = feats({
          name: feat.feat_name
        }).first();
        $.extend(full_feat, feat);
        return char_feats.insert(feat);
      });
    }
    return char_feats;
  };

  /*
  	Returns an Taffy db of the class feats collected from the supplied character classes. Does not include character feat selections.
  */

  Character.prototype.get_class_feats = function() {
    var class_feats, feat, feat_names, i, name;
    console.log("\nget_class_feats");
    class_feats = TAFFY([]);
    feat_names = this.get_class_feat_names();
    console.log("\t" + feat_names);
    for (i in feat_names) {
      name = feat_names[i];
      feat = feats({
        name: name
      }).first();
      class_feats.insert(feat);
    }
    return class_feats;
  };

  /*
  	Returns a Taffy db of the class feats collected from the supplied character classes and character-selected feats.
  */

  Character.prototype.get_all_char_feats = function() {
    var all_char_feats, char_feats;
    console.log("\nget_all_char_feats");
    all_char_feats = this.get_class_feats();
    console.log("\tall count: " + (all_char_feats().count()));
    char_feats = new TAFFY(chardata.feats().get());
    console.log("\tchar feats count: " + (char_feats().count()));
    if (typeof all_char_feats === "function") {
      all_char_feats().each(function(feat) {
        var char_feat;
        char_feat = chardata.feats({
          name: feat.name
        }).first();
        if (!char_feat) return char_feats.insert(feat);
      });
    }
    all_char_feats().each(function(feat) {
      return console.log("\t" + feat.name);
    });
    return char_feats;
  };

  /*
  	Returns the initiative modifier calculated from all relevant factors:
  		feats
  		dexterity
  */

  Character.prototype.init = function() {
    var char_feats, init;
    console.log("init");
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
    return this.ability_modifier("Dex") + init;
  };

  Character.prototype.dr = function(dr) {
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

  Character.prototype.ac = function() {
    var ac, armor_bonus, char_feats, dex_bonus, monk_mod, shield_bonus;
    console.log("\nac - src");
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
    }).ac_bonus[common.level()] : 0);
    dex_bonus = this.ability_modifier("Dex");
    if (armor_bonus.max_dex_bonus !== "-") {
      dex_bonus = Math.min(armor_bonus.max_dex_bonus, dex_bonus);
    }
    console.log("\tbase: 10\n\tarmor bonus: " + (armor_bonus != null ? armor_bonus.bonus : void 0) + " (" + (armor_bonus != null ? armor_bonus.max_dex_bonus : void 0) + ")\n\tshield bonus: " + (shield_bonus != null ? shield_bonus.bonus : void 0) + " (" + (shield_bonus != null ? shield_bonus.max_dex_bonus : void 0) + ")\n\tability (Dex): " + (this.ability_modifier("Dex")) + "\n\tmin(max dex bonus, dex): " + (Math.min(this.ability_modifier("Dex"), common.is_number(armor_bonus.max_dex_bonus) | 0)) + "\n\tsize mod: " + (this.size_mod(this.race_name)) + "\n\tequip bene: " + ((typeof this.equip_bene === "function" ? this.equip_bene("other:ac") : void 0) | 0) + "\n\tfeat modified: " + ac);
    return 10 + armor_bonus.bonus + shield_bonus.bonus + dex_bonus + this.size_mod(this.race_name) + monk_mod + ((typeof this.equip_bene === "function" ? this.equip_bene("other:ac") : void 0) | 0) + ac;
  };

  /*
  	Returns the touch ac for all relevant factors:
  		dexterity
  		race
  		feats
  */

  Character.prototype.touch_ac = function() {
    console.log("\ntouch_ac");
    console.log("\tdex mod: " + (this.ability_modifier(this.abilities["Dex"])) + "\n\tsize mod: " + (this.size_mod(this.race_name)));
    return 10 + this.ability_modifier("Dex") + this.size_mod(this.race_name);
  };

  /*
  	Returns the flat-footed ac for all relevant factors:
  		armor
  */

  Character.prototype.flat_footed_ac = function() {
    return 10 + common.calc_armor_bonus(this.armors, armors, "armor").bonus;
  };

  /*
  	Returns the modifier for this character's size
  */

  Character.prototype.size_mod = function() {
    var size;
    console.log("\nsize_mod");
    size = races({
      name: this.race_name
    }).first().size;
    console.log("\t" + this.race_name + " - " + size);
    console.log("\n");
    if (size === "small") {
      return 1;
    } else {
      return 0;
    }
  };

  /*
  	Returns the reflex save DC
  */

  Character.prototype.ref = function() {
    var class_ref_score, equip_mod, ref;
    console.log("\nref");
    class_ref_score = this.save("ref");
    ref = 0;
    equip_mod = this.equip_benes["other:Ref"] | 0;
    this.get_char_feats()({
      ref: {
        isFunction: true
      }
    }).each(function(feat) {
      ref = feat.ref(ref);
      return ref;
    });
    console.log("\tDex mod: " + (this.ability_modifier("Dex")));
    console.log("\tclass ref: " + class_ref_score);
    console.log("\tfeat mod: " + ref);
    console.log("\tequip_benes: " + equip_mod + " ");
    console.log("\n");
    return this.ability_modifier("Dex") + class_ref_score + ref + equip_mod;
  };

  /*
  	Returns the will save DC
  */

  Character.prototype.will = function() {
    var class_will_score, feat_mod;
    class_will_score = this.save("will");
    feat_mod = 0;
    this.get_char_feats()({
      will: {
        isFunction: true
      }
    }).each(function(feat) {
      feat_mod = feat.will(feat_mod);
      return feat_mod;
    });
    return this.ability_modifier("Wis") + class_will_score + feat_mod + (this.equip_benes["other:Will"] | 0);
  };

  /*
  	Returns the fortitude save DC
  */

  Character.prototype.fort = function() {
    var class_fort_score, feat_mod;
    class_fort_score = this.save("fort");
    feat_mod = 0;
    this.get_char_feats()({
      fort: {
        isFunction: true
      }
    }).each(function(feat) {
      feat_mod = feat.fort(feat_mod);
      return feat_mod;
    });
    return this.ability_modifier("Con") + class_fort_score + feat_mod + (this.equip_benes["other:Fort"] | 0);
  };

  /*
  	Returns the base attack bonus as an array of integers
  */

  Character.prototype.base_attack_bonus = function() {
    var attacks, bab, class_babs, classname, clazz, i, _ref;
    console.log("\nbase_attack_bonus");
    bab = [];
    _ref = this.classes;
    for (classname in _ref) {
      clazz = _ref[classname];
      class_babs = classes({
        name: classname
      }).first().base_attack_bonus;
      console.log("\t" + classname + " : " + class_babs[clazz.level]);
      attacks = class_babs[clazz.level].split("/");
      i = 0;
      while (i < attacks.length) {
        bab[i] = (bab[i] | 0) + parseInt(attacks[i]);
        i++;
      }
    }
    console.log("\n");
    return bab;
  };

  /*
  	Returns the Combat M Bonus
  */

  Character.prototype.cmb = function() {
    var babs;
    var _this = this;
    console.log("\ncmb");
    console.log("\tbase attack bonus: " + (this.base_attack_bonus()));
    babs = this.base_attack_bonus().map(function(x) {
      return common.pos(x + _this.ability_modifier("Str") + _this.size_mod() + (_this.equip_benes["other:Att"] | 0));
    });
    console.log("\t" + babs);
    return babs.join("/");
  };

  /*
  	Returns the Combat M Defense
  */

  Character.prototype.cmd = function() {
    var babs;
    var _this = this;
    console.log("\ncmd");
    console.log("\tbase attack bonus: " + (this.base_attack_bonus()));
    babs = this.base_attack_bonus().map(function(x) {
      return common.pos(x + _this.ability_modifier("Str") + _this.ability_modifier("Dex") + _this.size_mod() + 10);
    });
    console.log("\t" + babs);
    return babs.join("/");
  };

  /*
  	Returns an array of attacks for the supplied
  */

  Character.prototype.attack = function(char_weapon) {
    var attacks, weapon, weapon_bonus;
    var _this = this;
    console.log("\nattack");
    console.log("\tchar_weapon: " + char_weapon.weapon_name);
    weapon_bonus = parseInt(char_weapon.att) | 0;
    weapon = weapons({
      name: char_weapon.weapon_name
    }).first();
    attacks = {
      weapon_proficiency: -4,
      acp: 0
    };
    attacks.acp = this.armor_acp() + this.shield_acp();
    this.get_all_char_feats()({
      attack: {
        isFunction: true
      }
    }).each(function(feat) {
      console.log("\t" + feat.name);
      attacks = feat.attack(attacks, weapon, feat);
      return attacks;
    });
    attacks.weapon = weapon != null ? weapon.att(this.abilities) : void 0;
    return attacks.base = this.base_attack_bonus().map(function(x) {
      console.log("\tbase: " + x);
      console.log("\tability mod: " + attacks.weapon);
      console.log("\toverride: " + weapon_bonus);
      console.log("\tsize mod: " + (_this.size_mod()));
      console.log("\tweapon_proficiency: " + attacks.weapon_proficiency);
      console.log("\tacp: " + attacks.acp);
      console.log("\tequip_benes: " + (_this.equip_benes["Att"] | 0));
      return x + attacks.weapon + weapon_bonus + _this.size_mod() + attacks.weapon_proficiency + attacks.acp + (_this.equip_benes["Att"] | 0);
    });
  };

  Character.prototype.spell_resistance = function() {
    var char_class, class_sr_score, classname, clazz, feat_mod, sr, _ref;
    console.log("\nspell_resistance");
    sr = {
      sr: 0
    };
    _ref = this.classes;
    for (classname in _ref) {
      char_class = _ref[classname];
      clazz = classes({
        name: classname
      }).first();
      if (clazz != null) {
        if (typeof clazz.sr === "function") clazz.sr(sr, char_class);
      }
    }
    class_sr_score = this.save("sr");
    feat_mod = 0;
    this.get_char_feats()({
      sr: {
        isFunction: true
      }
    }).each(function(feat) {
      feat_mod = feat.fort(feat_mod);
      return feat_mod;
    });
    console.log("\tequip_benes: " + (this.equip_benes["other:SR"] | 0));
    return sr.sr + class_sr_score + feat_mod + (this.equip_benes["other:SR"] | 0);
  };

  /*
  	Returns the class save DC for the supplied save type
  */

  Character.prototype.save = function(type) {
    var classname, clazz, save, _ref;
    console.log("\nsave");
    type = type + "_save";
    save = 0;
    _ref = this.classes;
    for (classname in _ref) {
      clazz = _ref[classname];
      if (classes({
        name: classname
      }).first()[type]) {
        save += classes({
          name: classname
        }).first()[type][clazz.level];
      }
    }
    console.log("\n");
    return save;
  };

  /*
  	Returns calculated damage for the supplied character weapon, considering all factors:
  		weapon
  		ability
  		race
  		feats
  		equipment
  */

  Character.prototype.damage = function(char_weapon) {
    var dam_components, damage, damages, die, dmg, i, mod, weapon, weapon_dam, weapon_damage, weapon_mod, _ref;
    console.log("\ndamage");
    damages = [];
    weapon = $.extend({}, weapons({
      name: char_weapon.weapon_name
    }).first(), char_weapon);
    weapon_damage = typeof weapon.dam === 'function' ? weapon.dam() : weapon.dam;
    _ref = weapon_damage.split("/");
    for (i in _ref) {
      weapon_dam = _ref[i];
      dam_components = weapon_dam.split(/\+|-/);
      die = dam_components[0];
      weapon_mod = (dam_components.length > 1 ? parseInt(dam_components[1]) : 0);
      damages.push({
        die: die,
        mod: weapon_mod
      });
    }
    console.log("\tdamages: " + damages);
    this.get_char_feats()({
      damage: {
        isFunction: true
      }
    }).each(function(feat) {
      damages = feat.damage(damages, weapon, feat);
      return damages;
    });
    console.log("\tability mod: " + (weapon.ability(this.abilities)));
    damage = "";
    for (i in damages) {
      dmg = damages[i];
      mod = common.pos(weapon.ability(this.abilities) + dmg.mod + (this.equip_benes["Dam"] | 0));
      console.log("\tmod: " + mod);
      damage += dmg.die + (mod ? mod : "");
      console.log("\tdamage: " + damage);
      damage += (parseInt(i) + 1 < damages.length ? "/" : "");
    }
    return damage;
  };

  /*
  	Returns the current level calculated from character class levels.
  */

  Character.prototype.level = function() {
    var classname, clazz, curr_level, _ref;
    curr_level = 0;
    _ref = this.classes;
    for (classname in _ref) {
      clazz = _ref[classname];
      curr_level += clazz.level;
    }
    return curr_level;
  };

  Character.prototype.calc_equip_mod = function(key) {
    var _ref;
    return parseInt((_ref = equipment_benefits[key] === null) != null ? _ref : {
      0: equipment_benefits[key]
    });
  };

  return Character;

})();

if (typeof exports === "object") this.Character = Character;
