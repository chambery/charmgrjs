var TAFFY;

if (typeof exports === 'object') TAFFY = require('../lib/taffy').taffy;

this.views = new TAFFY([
  {
    id: 0,
    name: "main",
    title: "Pathfinder Player's Companion"
  }, {
    id: 1,
    name: "edit",
    title: "Edit Character"
  }, {
    id: 2,
    name: "feats",
    title: "Edit Feats"
  }, {
    id: 3,
    name: "spells",
    title: "Edit Spells"
  }, {
    id: 4,
    name: "equip",
    title: "Edit Equipment"
  }
]);

this.views.sort("id");
