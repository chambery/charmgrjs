nodeunit = require "nodeunit"
assert = require "assert"
common = require "../web/common"

exports["calc_total_base_feats_count"] = (test) ->
	test.equal common.calc_total_base_feats_count("Not Human", { "Ranger":	{ level: 0 }}), 1, "Non human should have 1 base feat at first level"
	test.equal common.calc_total_base_feats_count("Not Human", { "Ranger":	{ level: 5 }}), 3, "Non human should have 3 base feats at sixth level"
	test.equal common.calc_total_base_feats_count("Not Human", { "Ranger":	{ level: 16 }}), 6, "Non human should have 6 base feats at seventeenth level"
	test.equal common.calc_total_base_feats_count("Human", { "Ranger":	{ level: 0 }}), 2, "Human should have 1 base feat at first level"
	test.equal common.calc_total_base_feats_count("Human", { "Ranger":	{ level: 5 }}), 4, "Human should have 4 base feats at sixth level"
	test.equal common.calc_total_base_feats_count("Human", { "Ranger":	{ level: 16 }}), 7, "Human should have 7 base feats at seventeenth level"
			
	test.done()

exports["calc_total_class_feats_count"] = (test) ->
	console.log(classes)
	test.equal common.calc_total_class_feats_count({ "Barbarian": { level: 0 }}), 0, "Barbarian should have no class feats at first level"
	test.equal common.calc_total_class_feats_count({ "Barbarian": { level: 18 }}), 3, "Barbarian should have 3 class feats at nineteenth level"
	

