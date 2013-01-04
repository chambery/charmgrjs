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

exports["get_class_feats"] = function(test) {
  var char_classes, class_feats, i, j, key, my_feats, val, _len;
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
  console.log("get_class_feats");
  for (key in my_feats) {
    val = my_feats[key];
    for (j = 0, _len = key.length; j < _len; j++) {
      i = key[j];
      console.log("\t" + i + " : " + j);
    }
  }
  test.deepEqual(my_feats, class_feats);
  return test.done();
};
