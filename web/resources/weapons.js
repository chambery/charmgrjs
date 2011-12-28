var TAFFY, common;

if (typeof exports === "object") {
  TAFFY = require("taffydb");
  common = require("../../web/common");
}

this.damage_types = TAFFY([
  {
    name: "bludgeoning",
    tags: ["pathfinder"],
    _id: "b0fe",
    type: "damage_type"
  }, {
    name: "slashing",
    tags: ["pathfinder"],
    _id: "ec4",
    type: "damage_type"
  }, {
    name: "piercing",
    tags: ["pathfinder"],
    _id: "c497",
    type: "damage_type"
  }
]);

this.weapons = TAFFY([
  {
    id: 0,
    name: "Axe, orc double",
    category: "exotic",
    usage: ["two-handed"],
    dam: "1d8/1d8",
    crit: "x3",
    range: "-",
    weight: "25 lb.",
    damage_type: "slashing",
    type: "Axe",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "3a88"
  }, {
    id: 1,
    name: "Axe, throwing",
    category: "martial",
    usage: ["light"],
    dam: "1d6",
    crit: "x2",
    range: "10 ft.",
    weight: "4 lb.",
    damage_type: "slashing",
    type: "Axe",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "62a8"
  }, {
    id: 2,
    name: "Battleaxe",
    category: "martial",
    usage: ["one-handed"],
    dam: "1d8",
    crit: "x3",
    range: "-",
    weight: "7 lb.",
    damage_type: "slashing",
    type: "Axe",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "d1bd"
  }, {
    id: 3,
    name: "Chain, spiked",
    category: "exotic",
    usage: ["light", "two-handed"],
    dam: "2d4",
    crit: "x2",
    range: "-",
    weight: "15 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "492e"
  }, {
    id: 4,
    name: "Club",
    category: "simple",
    usage: ["one-handed"],
    dam: "1d6",
    crit: "x2",
    range: "10 ft.",
    weight: "3 lb.",
    damage_type: "bludgeoning",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "71fe"
  }, {
    id: 5,
    name: "Crossbow, hand",
    category: "exotic",
    usage: ["ranged"],
    dam: "1d4",
    crit: "19-20/ x 2",
    range: "30 ft.",
    weight: "3 lb.",
    damage_type: "piercing",
    type: "Crossbow",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Dex"]);
    },
    tags: ["pathfinder"],
    _id: "281"
  }, {
    id: 6,
    name: "Crossbow, heavy",
    category: "simple",
    usage: ["ranged"],
    dam: "1d10",
    crit: "19-20/x2",
    range: "120 ft.",
    weight: "9 lb.",
    damage_type: "piercing",
    type: "Crossbow",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Dex"]);
    },
    tags: ["pathfinder"],
    _id: "8328"
  }, {
    id: 7,
    name: "Crossbow, light",
    category: "simple",
    usage: ["ranged"],
    dam: "1d8",
    crit: "19-20/x2",
    range: "80 ft.",
    weight: "6 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Dex"]);
    },
    tags: ["pathfinder"],
    _id: "257"
  }, {
    id: 8,
    name: "Crossbow, repeating",
    category: "exotic",
    usage: ["ranged"],
    dam: "1d8",
    crit: "19-20/ x 2",
    range: "80 ft.",
    weight: "16 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Dex"]);
    },
    tags: ["pathfinder"],
    _id: "fb3"
  }, {
    id: 9,
    name: "Dagger",
    category: "simple",
    usage: ["light"],
    dam: "1d4",
    crit: "19-20/x2",
    range: "10 ft.",
    weight: "1 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "fcd0"
  }, {
    id: 10,
    name: "Dagger, punching",
    category: "simple",
    usage: ["light"],
    dam: "1d4",
    crit: "x3",
    range: "-",
    weight: "2 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "572a"
  }, {
    id: 11,
    name: "Dart",
    category: "simple",
    usage: ["ranged"],
    dam: "1d4",
    crit: "x2",
    range: "20 ft.",
    weight: "1/2 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Dex"]);
    },
    tags: ["pathfinder"],
    _id: "d733"
  }, {
    id: 12,
    name: "Falchion",
    category: "martial",
    usage: ["two-handed"],
    dam: "2d4",
    crit: "18-20/x2",
    range: "-",
    weight: "16 lb.",
    damage_type: "slashing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "84da"
  }, {
    id: 13,
    name: "Flail, dire",
    category: "exotic",
    usage: ["two-handed"],
    dam: "1d8/1d8",
    crit: "x2",
    range: "-",
    weight: "20 lb.",
    damage_type: "bludgeoning",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "2743"
  }, {
    id: 14,
    name: "Flail, heavy",
    category: "martial",
    usage: ["two-handed"],
    dam: "1d10",
    crit: "19-20/x2",
    range: "-",
    weight: "20 lb.",
    damage_type: "bludgeoning",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "1693"
  }, {
    id: 15,
    name: "Flail, light",
    category: "martial",
    usage: ["one-handed"],
    dam: "1d8",
    crit: "x2",
    range: "-",
    weight: "5 lb.",
    damage_type: "bludgeoning",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "ade0"
  }, {
    id: 16,
    name: "Gauntlet",
    category: "simple",
    usage: ["unarmed"],
    dam: "*",
    crit: "*",
    range: "-",
    weight: "2 lb.",
    damage_type: "bludgeoning",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "6478"
  }, {
    id: 17,
    name: "Gauntlet, spiked",
    category: "simple",
    usage: ["light"],
    dam: "1d4",
    crit: "x2",
    range: "-",
    weight: "2 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "d5eb"
  }, {
    id: 18,
    name: "Glaive",
    category: "martial",
    usage: ["two-handed"],
    dam: "1d10",
    crit: "x3",
    range: "-",
    weight: "15 lb.",
    damage_type: "slashing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "f04"
  }, {
    id: 19,
    name: "Greataxe",
    category: "martial",
    usage: ["two-handed"],
    dam: "1d12",
    crit: "x3",
    range: "-",
    weight: "20 lb.",
    damage_type: "slashing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "2780"
  }, {
    id: 20,
    name: "Greatclub",
    category: "martial",
    usage: ["two-handed"],
    dam: "1d10",
    crit: "x2",
    range: "-",
    weight: "10 lb.",
    damage_type: "bludgeoning",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "c20"
  }, {
    id: 21,
    name: "Greatsword",
    category: "martial",
    usage: ["two-handed"],
    dam: "2d6",
    crit: "19-20/x2",
    range: "-",
    weight: "15 lb.",
    damage_type: "slashing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "1c29"
  }, {
    id: 22,
    name: "Guisarme",
    category: "martial",
    usage: ["two-handed"],
    dam: "2d4",
    crit: "x3",
    range: "-",
    weight: "15 lb.",
    damage_type: "slashing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "93c8"
  }, {
    id: 23,
    name: "Halberd",
    category: "martial",
    usage: ["two-handed"],
    dam: "1d10",
    crit: "x3",
    range: "-",
    weight: "15 lb.",
    damage_type: "piercing and slashing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "8045"
  }, {
    id: 24,
    name: "Halfspear",
    category: "",
    usage: [""],
    dam: "1d6",
    crit: "x3",
    range: "20 ft.",
    weight: "3 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "402c"
  }, {
    id: 25,
    name: "Hammer, gnome hooked",
    category: "exotic",
    usage: ["two-handed"],
    dam: "1d6/1d4",
    crit: "x3/x4",
    range: "-",
    weight: "6 lb.",
    damage_type: "bludgeoning and piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "e33e"
  }, {
    id: 26,
    name: "Hammer, light",
    category: "martial",
    usage: ["light"],
    dam: "1d4",
    crit: "x2",
    range: "20 ft.",
    weight: "2 lb.",
    damage_type: "bludgeoning",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "9107"
  }, {
    id: 27,
    name: "Handaxe",
    category: "martial",
    usage: ["light"],
    dam: "1d6",
    crit: "x3",
    range: "-",
    weight: "5 lb.",
    damage_type: "slashing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "b98b"
  }, {
    id: 28,
    name: "Javelin",
    category: "simple",
    usage: ["ranged"],
    dam: "1d6",
    crit: "x2",
    range: "30 ft.",
    weight: "2 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Dex"]);
    },
    tags: ["pathfinder"],
    _id: "664e"
  }, {
    id: 29,
    name: "Kama",
    category: "exotic",
    usage: ["light"],
    dam: "1d6",
    crit: "x2",
    range: "-",
    weight: "2 lb.",
    damage_type: "slashing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "1ace"
  }, {
    id: 30,
    name: "Kama, halfling",
    category: "",
    usage: [""],
    dam: "1d4",
    crit: "x2",
    range: "-",
    weight: "1 lb.",
    damage_type: "slashing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "774e"
  }, {
    id: 31,
    name: "Kukri",
    category: "martial",
    usage: ["light"],
    dam: "1d4",
    crit: "18-20/x2",
    range: "-",
    weight: "3 lb.",
    damage_type: "slashing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "3230"
  }, {
    id: 32,
    name: "Lance, heavy",
    category: "martial",
    usage: ["two-handed"],
    dam: "1d8",
    crit: "x3",
    range: "-",
    weight: "10 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "d17d"
  }, {
    id: 33,
    name: "Lance, light",
    category: "martial",
    usage: ["two-handed"],
    dam: "1d6",
    crit: "x3",
    range: "-",
    weight: "5 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "e99a"
  }, {
    id: 34,
    name: "Longbow",
    category: "martial",
    usage: ["ranged"],
    dam: "1d8",
    crit: "x3",
    range: "100 ft.",
    weight: "3 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Dex"]);
    },
    tags: ["pathfinder"],
    _id: "d19b"
  }, {
    id: 35,
    name: "Longbow, composite",
    category: "martial",
    usage: ["ranged"],
    dam: "1d8",
    crit: "x3",
    range: "110 ft.",
    weight: "3 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(Math.max(abilities["Str"], abilities["Dex"]));
    },
    tags: ["pathfinder"],
    _id: "57b9"
  }, {
    id: 36,
    name: "Longspear",
    category: "simple",
    usage: ["two-handed"],
    dam: "1d8",
    crit: "x3",
    range: "-",
    weight: "9 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "229a"
  }, {
    id: 37,
    name: "Longsword",
    category: "martial",
    usage: ["one-handed"],
    dam: "1d8",
    crit: "19-20/x2",
    range: "-",
    weight: "4 lb.",
    damage_type: "slashing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "6f25"
  }, {
    id: 38,
    name: "Mace, heavy",
    category: "simple",
    usage: ["one-handed"],
    dam: "1d8",
    crit: "x2",
    range: "-",
    weight: "12 lb.",
    damage_type: "bludgeoning",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "2c62"
  }, {
    id: 39,
    name: "Mace, light",
    category: "simple",
    usage: ["one-handed"],
    dam: "1d6",
    crit: "x2",
    range: "-",
    weight: "6 lb.",
    damage_type: "bludgeoning",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "290d"
  }, {
    id: 40,
    name: "Morningstar",
    category: "simple",
    usage: ["light"],
    dam: "1d8",
    crit: "x2",
    range: "-",
    weight: "8 lb.",
    damage_type: "bludgeoning and piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "1959"
  }, {
    id: 41,
    name: "Net",
    category: "exotic",
    usage: ["ranged"],
    dam: "*",
    crit: "*",
    range: "10 ft.",
    weight: "10 lb.",
    damage_type: "*",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "5916"
  }, {
    id: 42,
    name: "Nunchaku",
    category: "exotic",
    usage: ["light"],
    dam: "1d6",
    crit: "x2",
    range: "-",
    weight: "2 lb.",
    damage_type: "bludgeoning",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "9030"
  }, {
    id: 43,
    name: "Nunchaku, halfling",
    category: "",
    usage: [""],
    dam: "1d4",
    crit: "x2",
    range: "-",
    weight: "1 lb.",
    damage_type: "bludgeoning",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "d9b0"
  }, {
    id: 44,
    name: "Pick, heavy",
    category: "martial",
    usage: ["one-handed"],
    dam: "1d6",
    crit: "x4",
    range: "-",
    weight: "6 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "514b"
  }, {
    id: 45,
    name: "Pick, light",
    category: "martial",
    usage: ["light"],
    dam: "1d4",
    crit: "x4",
    range: "-",
    weight: "4 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "498b"
  }, {
    id: 46,
    name: "Quarterstaff",
    category: "simple",
    usage: ["two-handed"],
    dam: "1d6/1d6",
    crit: "x2",
    range: "-",
    weight: "4 lb.",
    damage_type: "bludgeoning",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "b6f5"
  }, {
    id: 47,
    name: "Ranseur",
    category: "martial",
    usage: ["two-handed"],
    dam: "2d4",
    crit: "x3",
    range: "-",
    weight: "15 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "2dc"
  }, {
    id: 48,
    name: "Rapier",
    category: "martial",
    usage: ["light", "one-handed"],
    dam: "1d6",
    crit: "18-20/x2",
    range: "-",
    weight: "3 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "4f0a"
  }, {
    id: 49,
    name: "Sap",
    category: "martial",
    usage: ["light"],
    dam: "1d6",
    crit: "x2",
    range: "-",
    weight: "3 lb.",
    damage_type: "bludgeoning",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "cdac"
  }, {
    id: 50,
    name: "Scimitar",
    category: "martial",
    usage: ["one-handed"],
    dam: "1d6",
    crit: "18-20/x2",
    range: "-",
    weight: "4 lb.",
    damage_type: "slashing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "4f13"
  }, {
    id: 51,
    name: "Scythe",
    category: "martial",
    usage: ["two-handed"],
    dam: "2d4",
    crit: "x4",
    range: "-",
    weight: "12 lb.",
    damage_type: "piercing and slashing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "75df"
  }, {
    id: 52,
    name: "Shortbow",
    category: "martial",
    usage: ["ranged"],
    dam: "1d6",
    crit: "x3",
    range: "60 ft.",
    weight: "2 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Dex"]);
    },
    tags: ["pathfinder"],
    _id: "f1e7"
  }, {
    id: 53,
    name: "Shortbow, composite",
    category: "martial",
    usage: ["ranged"],
    dam: "1d6",
    crit: "x3",
    range: "70 ft.",
    weight: "2 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(Math.max(abilities["Str"], abilities["Dex"]));
    },
    tags: ["pathfinder"],
    _id: "6e34"
  }, {
    id: 54,
    name: "Shortspear",
    category: "simple",
    usage: ["one-handed"],
    dam: "1d8",
    crit: "x3",
    range: "20 ft.",
    weight: "5 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "13aa"
  }, {
    id: 55,
    name: "Shuriken",
    category: "exotic",
    usage: ["ranged"],
    dam: 1,
    crit: "x 2",
    range: "10 ft.",
    weight: "1/10 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Dex"]);
    },
    tags: ["pathfinder"],
    _id: "f19c"
  }, {
    id: 56,
    name: "Siangham",
    category: "exotic",
    usage: ["light"],
    dam: "1d6",
    crit: "x2",
    range: "-",
    weight: "1 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "d6a7"
  }, {
    id: 57,
    name: "Siangham, halfling",
    category: "exotic",
    usage: ["light"],
    dam: "1d4",
    crit: "x2",
    range: "-",
    weight: "1 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "35be"
  }, {
    id: 58,
    name: "Sickle",
    category: "simple",
    usage: ["light"],
    dam: "1d6",
    crit: "x2",
    range: "-",
    weight: "3 lb.",
    damage_type: "slashing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "3dd9"
  }, {
    id: 59,
    name: "Sling",
    category: "simple",
    usage: ["ranged"],
    dam: "1d4",
    crit: "x2",
    range: "50 ft.",
    weight: "0 lb.",
    damage_type: "bludgeoning",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Dex"]);
    },
    tags: ["pathfinder"],
    _id: "b31b"
  }, {
    id: 60,
    name: "Strike, unarmed (Medium-size being)",
    category: "simple",
    usage: ["unarmed"],
    dam: "1d3",
    crit: "x2",
    range: "-",
    weight: "-",
    damage_type: "bludgeoning",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "781d"
  }, {
    id: 61,
    name: "Strike, unarmed (Small being)",
    category: "simple",
    usage: ["unarmed"],
    dam: "1d2",
    crit: "x2",
    range: "-",
    weight: "-",
    damage_type: "bludgeoning",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "e305"
  }, {
    id: 62,
    name: "Sword, bastard",
    category: "exotic",
    usage: ["one-handed"],
    dam: "1d10",
    crit: "19-20/x2",
    range: "-",
    weight: "10 lb.",
    damage_type: "slashing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "d6da"
  }, {
    id: 63,
    name: "Sword, short",
    category: "martial",
    usage: ["light"],
    dam: "1d6",
    crit: "19-20/x2",
    range: "-",
    weight: "3 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "176c"
  }, {
    id: 64,
    name: "Sword, two-bladed",
    category: "exotic",
    usage: ["two-handed"],
    dam: "1d8/1d8",
    crit: "19-20/x2",
    range: "-",
    weight: "15 lb.",
    damage_type: "slashing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "e2bc"
  }, {
    id: 65,
    name: "Trident",
    category: "martial",
    usage: ["one-handed"],
    dam: "1d8",
    crit: "x2",
    range: "10 ft.",
    weight: "5 lb.",
    damage_type: "piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "df7a"
  }, {
    id: 66,
    name: "Urgrosh, dwarven",
    category: "exotic",
    usage: ["two-handed"],
    dam: "1d8/1d6",
    crit: "x3",
    range: "-",
    weight: "15 lb.",
    damage_type: "slashing and piercing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "bf3d"
  }, {
    id: 67,
    name: "Waraxe, dwarven",
    category: "exotic",
    usage: ["one-handed"],
    dam: "1d10",
    crit: "x3",
    range: "-",
    weight: "15 lb.",
    damage_type: "slashing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "4b6f"
  }, {
    id: 68,
    name: "Warhammer",
    category: "martial",
    usage: ["one-handed"],
    dam: "1d8",
    crit: "x3",
    range: "-",
    weight: "8 lb.",
    damage_type: "bludgeoning",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "a06e"
  }, {
    id: 69,
    name: "Whip",
    category: "exotic",
    usage: ["light", "one-handed"],
    dam: "1d2",
    crit: "x 2",
    range: "15 ft.",
    weight: "2 lb.",
    damage_type: "slashing",
    type: "weapon",
    att: function(abilities) {
      return common.calc_ability_modifier(abilities["Str"]);
    },
    tags: ["pathfinder"],
    _id: "fcc8"
  }
]);
