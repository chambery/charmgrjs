var $, TAFFY, armors, classes, feats, races, shields, skills;

if (typeof exports === "object") {
  TAFFY = require("../lib/taffy").taffy;
  $ = require("jquery");
  classes = require("../web/resources/classes").classes;
  armors = require("../web/resources/armors").armors;
  shields = require("../web/resources/shields").shields;
  feats = require("../web/resources/feats").feats;
  skills = require("../web/resources/skills").skills;
  races = require("../web/resources/races").races;
}

this.races = function() {
  console.log("test . races");
  return console.log("" + (races().first().name));
};
