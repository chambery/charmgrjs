var TAFFY;

if (typeof exports === "object") TAFFY = require("../../lib/taffy").taffy;

this.shield_types = [
  {
    name: "buckler",
    type: "shield_type",
    tags: ["pathfinder"],
    _id: "e80c"
  }, {
    name: "light",
    type: "shield_type",
    tags: ["pathfinder"],
    _id: "f761"
  }, {
    name: "heavy",
    type: "shield_type",
    tags: ["pathfinder"],
    _id: "1831"
  }, {
    name: "tower",
    type: "shield_type",
    tags: ["pathfinder"],
    _id: "9e74"
  }
];

this.shields = new TAFFY([
  {
    name: "Buckler",
    cost: "15 gp",
    bon: 1,
    max_dex_bonus: "-",
    acp: -1,
    spell_fail: "5%",
    speed30: "-",
    speed20: "-",
    weight: 5,
    category: "buckler",
    type: "shield",
    tags: ["pathfinder"],
    _id: "69dc"
  }, {
    name: "Shield, small, wooden",
    cost: "3 gp",
    bon: 1,
    max_dex_bonus: "-",
    acp: -1,
    spell_fail: "5%",
    speed30: "-",
    speed20: "-",
    weight: 5,
    category: "light",
    type: "shield",
    tags: ["pathfinder"],
    _id: "5a6a"
  }, {
    name: "Shield, small, steel",
    cost: "9 gp",
    bon: 1,
    max_dex_bonus: "-",
    acp: -1,
    spell_fail: "5%",
    speed30: "-",
    speed20: "-",
    weight: 6,
    category: "light",
    type: "shield",
    tags: ["pathfinder"],
    _id: "1f64"
  }, {
    name: "Shield, large, wooden",
    cost: "7 gp",
    bon: 2,
    max_dex_bonus: "-",
    acp: -2,
    spell_fail: "15%",
    speed30: "-",
    speed20: "-",
    weight: 10,
    category: "heavy",
    type: "shield",
    tags: ["pathfinder"],
    _id: "70ac"
  }, {
    name: "Shield, large, steel",
    cost: "20 gp",
    bon: 2,
    max_dex_bonus: "-",
    acp: -2,
    spell_fail: "15%",
    speed30: "-",
    speed20: "-",
    weight: 15,
    category: "heavy",
    type: "shield",
    tags: ["pathfinder"],
    _id: "74dd"
  }, {
    name: "Shield, tower",
    cost: "30 gp",
    bon: 4,
    max_dex_bonus: "-",
    acp: -10,
    spell_fail: "50%",
    speed30: "-",
    speed20: "-",
    weight: 45,
    category: "tower",
    type: "shield",
    tags: ["pathfinder"],
    _id: "9408"
  }
]);
