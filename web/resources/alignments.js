var TAFFY;

if (typeof exports === "object") TAFFY = require("taffydb");

this.alignments = TAFFY([
  {
    name: "Lawful"
  }, {
    name: "Neutral"
  }, {
    name: "Chaotic"
  }
]);

this.goodness = TAFFY([
  {
    name: "Good"
  }, {
    name: "Neutral"
  }, {
    name: "Evil"
  }
]);
