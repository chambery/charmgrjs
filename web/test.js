var $, TAFFY, races;

if (typeof exports === "object") {
  TAFFY = require("../lib/taffy").taffy;
  $ = require("jquery");
  races = require("./resources/races").races;
}

this.races = function() {
  console.log("test . races");
  return console.log("" + (races().first().name));
};
