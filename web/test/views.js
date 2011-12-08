var assert, nodeunit, views;

nodeunit = require("nodeunit");

views = require("../web/views").views;

assert = require("assert");

exports["views order"] = function(test) {
  test.ok(views({
    name: "main"
  }).first().id === 0, "main is not the first page");
  test.ok(views({
    name: "edit"
  }).first({
    name: "edit"
  }).id === 1, "edit is not the second page");
  test.ok(views({
    name: "feats"
  }).first().id === 2, "feats is not the third page");
  test.ok(views({
    name: "spells"
  }).first().id === 3, "spells is not the fourth page");
  test.ok(views({
    name: "equip"
  }).first().id === 4, "equip is not the fifth page");
  return test.done();
};
