(function() {
  var $, TAFFY, assert, common, feats, nodeunit, races, skills, store, testCase;

  nodeunit = require("nodeunit");

  testCase = nodeunit.testCase;

  assert = require("assert");

  common = require("../web/common");

  store = require("../web/store");

  skills = require("../web/resources/skills").skills;

  races = require("../web/resources/races").races;

  feats = require("../web/resources/feats").feats;

  TAFFY = require("taffy").taffy;

  $ = require("jquery");

  store.load_static_data;

  exports["calc_total_base_feats_count"] = function(test) {
    test.equal(common.calc_total_base_feats_count("Not Human", {
      "Ranger": {
        level: 0
      }
    }), 1, "Non human should have 1 base feat at first level");
    test.equal(common.calc_total_base_feats_count("Not Human", {
      "Ranger": {
        level: 5
      }
    }), 3, "Non human should have 3 base feats at sixth level");
    test.equal(common.calc_total_base_feats_count("Not Human", {
      "Ranger": {
        level: 16
      }
    }), 6, "Non human should have 6 base feats at seventeenth level");
    test.equal(common.calc_total_base_feats_count("Human", {
      "Ranger": {
        level: 0
      }
    }), 2, "Human should have 1 base feat at first level");
    test.equal(common.calc_total_base_feats_count("Human", {
      "Ranger": {
        level: 5
      }
    }), 4, "Human should have 4 base feats at sixth level");
    test.equal(common.calc_total_base_feats_count("Human", {
      "Ranger": {
        level: 16
      }
    }), 7, "Human should have 7 base feats at seventeenth level");
    return test.done();
  };

  exports["calc_total_class_feats_count"] = function(test) {
    test.equal(common.calc_total_class_feats_count({
      "Barbarian": {
        level: 0
      }
    }), 0, "Barbarian should have no class feats at first level");
    test.equal(common.calc_total_class_feats_count({
      "Barbarian": {
        level: 18
      }
    }), 3, "Barbarian should have 3 class feats at nineteenth level");
    test.equal(common.calc_total_class_feats_count({
      "Barbarian": {
        level: 18
      },
      "Sorcerer": {
        level: 3
      }
    }), 4, "Multiclass should have 3 class feats at nineteenth level");
    return test.done();
  };

  exports["calc_armor_acp"] = function(test) {
    test.equal(common.calc_armor_acp([
      {
        armor_name: "Studded leather"
      }
    ]), -1, "Studded leather should have a -1 ACP");
    test.equal(common.calc_armor_acp([
      {
        armor_name: "Studded leather"
      }, {
        armor_name: "Chain shirt"
      }
    ]), -3, "Multiple armors should have a -3 ACP");
    return test.done();
  };

  exports["calc_shield_acp"] = function(test) {
    test.equal(common.calc_shield_acp([
      {
        shield_name: "Buckler"
      }
    ]), -1, "Buckler should have a -1 ACP");
    test.equal(common.calc_shield_acp([
      {
        shield_name: "Buckler"
      }, {
        shield_name: "Shield, small, wooden"
      }
    ]), -2, "Multiple shields should have a -2 ACP");
    return test.done();
  };

  exports["get_class_feat_names"] = function(test) {
    var char_classes, class_feat_names;
    store.load_static_data();
    char_classes = {
      "Ranger": {
        "level": 2
      },
      "Sorcerer": {
        "level": 7
      }
    };
    class_feat_names = {
      'Simple Weapon Proficiency': void 0,
      'Armor Proficiency, Light': void 0,
      'Martial Weapon Proficiency': void 0,
      'Endurance': void 0,
      'Simple Weapon Proficiency': void 0
    };
    test.deepEqual(common.get_class_feat_names(char_classes), class_feat_names);
    char_classes = {
      "Fighter": {
        "level": 17
      },
      "Rogue": {
        "level": 7
      }
    };
    class_feat_names = {
      'Simple Weapon Proficiency': void 0,
      'Armor Proficiency, Light': void 0,
      'Armor Proficiency, Medium': void 0,
      'Martial Weapon Proficiency': void 0,
      'Armor Proficiency, Heavy': void 0
    };
    console.log(common.get_class_feat_names(char_classes));
    test.deepEqual(common.get_class_feat_names(char_classes), class_feat_names);
    return test.done();
  };

  exports["get_class_feats"] = function(test) {
    var char_classes, class_feats, my_feats;
    char_classes = {
      "Fighter": {
        "level": 17
      },
      "Rogue": {
        "level": 7
      }
    };
    class_feats = {};
    class_feats[feats({
      name: "Simple Weapon Proficiency"
    }).first()] = void 0;
    class_feats[feats({
      name: "Armor Proficiency, Light"
    }).first()] = void 0;
    class_feats[feats({
      name: "Armor Proficiency, Medium"
    }).first()] = void 0;
    class_feats[feats({
      name: "Martial Weapon Proficiency"
    }).first()] = void 0;
    class_feats[feats({
      name: "Armor Proficiency, Heavy"
    }).first()] = void 0;
    my_feats = common.get_class_feats(char_classes);
    $.each(my_feats, function(feat, undef) {
      return console.log(feat);
    });
    test.deepEqual(my_feats, class_feats);
    return test.done();
  };

  exports["get_all_char_feats"] = function(test) {
    var all_char_feats, char_classes, char_feats, expected_feats, test_feats;
    char_feats = TAFFY([
      {
        feat_name: "Acrobatic Steps"
      }, {
        feat_name: "Command Undead"
      }, {
        feat_name: "Elemental Channel"
      }
    ]);
    char_feats().each(function(feat, i) {
      return console.log("" + i + " : " + feat.name);
    });
    char_classes = {
      "Fighter": {
        "level": 17
      },
      "Rogue": {
        "level": 7
      }
    };
    all_char_feats = common.get_all_char_feats(char_feats, char_classes);
    expected_feats = {};
    expected_feats[feats({
      name: "Acrobatic Steps"
    }).first()] = void 0;
    expected_feats[feats({
      name: "Command Undead"
    }).first()] = void 0;
    expected_feats[feats({
      name: "Elemental Channel"
    }).first()] = void 0;
    expected_feats[feats({
      name: "Simple Weapon Proficiency"
    }).first()] = void 0;
    expected_feats[feats({
      name: "Armor Proficiency, Light"
    }).first()] = void 0;
    expected_feats[feats({
      name: "Armor Proficiency, Medium"
    }).first()] = void 0;
    expected_feats[feats({
      name: "Martial Weapon Proficiency"
    }).first()] = void 0;
    expected_feats[feats({
      name: "Acrobatic Steps"
    }).first()] = void 0;
    test_feats = common.get_all_char_feats(char_feats, char_classes);
    test.deepEqual(common.get_all_char_feats(char_feats, char_classes), expected_feats);
    return test.done();
  };

  exports["is_class_skill"] = function(test) {
    var char_classes, disguise, knowledge;
    char_classes = {
      "Fighter": {
        "level": 17
      },
      "Rogue": {
        "level": 7
      }
    };
    disguise = skills({
      name: "Disguise"
    }).first();
    knowledge = skills({
      name: "Knowledge"
    }).first();
    test.ok(common.is_class_skill(disguise, null, char_classes), "Rogue should have Disguise as a class skill");
    test.ok(!(common.is_class_skill(knowledge, "Arcana", char_classes)), "Rogue or Fighter should _not_ have Knowledge (Arcana) as a class skill");
    char_classes = {
      "Fighter": {
        "level": 17
      },
      "Wizard": {
        "level": 7
      }
    };
    test.ok(!(common.is_class_skill(disguise, null, char_classes)), "Fighter or Wizard should _not_ have Disguise as a class skill");
    char_classes = {
      "Fighter": {
        "level": 17
      },
      "Wizard": {
        "level": 7
      }
    };
    test.ok(common.is_class_skill(knowledge, "Engineering", char_classes), "Fighter or Wizard should have Knowledge (Engineering) as a class skill");
    return test.done();
  };

  exports["calc_ranks"] = function(test) {
    return test.done();
  };

  exports["calc_skill_mod"] = function(test) {
    var chardata, skill;
    chardata = {};
    chardata.feats = TAFFY([
      {
        feat_name: "Skill Focus"
      }
    ]);
    chardata.skills = TAFFY([
      {
        skill_name: "Knowledge",
        subtype: "Dungeoneering",
        ranks: 4
      }
    ]);
    chardata.race_name = "Dwarf";
    skill = skills({
      name: "Knowledge"
    }).first();
    test.equal(common.calc_skill_mod(skill, 1, null, "Dungeoneering", chardata.skills, chardata.race_name, chardata.feats), 1);
    return test.done();
  };

}).call(this);
