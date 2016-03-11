var assert, bloodline_powers, chardata, classes, nodeunit;

nodeunit = require("nodeunit");

classes = require("../web/resources/classes").classes;

bloodline_powers = require("../web/resources/sorcerer_bloodlines").bloodline_powers;

assert = require("assert");

chardata = {};

chardata.classes = {};

chardata.classes["Sorcerer"] = {};

chardata.classes["Sorcerer"].level = 0;

exports["Acidic Ray"] = function(test) {
  var level, ray, ray_power;
  ray_power = bloodline_powers({
    name: "Acidic Ray"
  }).first();
  test.ok(ray_power, "should not be null");
  ray = ray_power["levels"][0].weapons["Acidic Ray"];
  test.ok(ray, "should not be null");
  for (level = 0; level <= 20; level++) {
    test.equal(ray.dam(level), "1d6+" + (Math.round((level + 1) / 2)));
  }
  return test.done();
};
