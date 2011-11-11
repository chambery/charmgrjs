nodeunit = require "nodeunit"
# testCase = require("nodeunit").testCase
assert = require "assert"
common = require "../web/common"
# skills = require ("../web/resources/skills").skills
console.log("\n   ****  local  ****\n")
local = require ("../lib/taffy")
console.log(local)
console.log(local.taffy)
ldb = local.taffy([{m: "f"}])
console.log(ldb())

console.log("\n   ****  npm  ****\n")
console.log "\n require ('taffy')"
npm = require ("taffy")
console.log(npm)

console.log "\n require ('taffy') \n \t\t\t ['taffy']"
npm = require ("taffy")
npm = npm.taffy
p = npm([{m: "f"}])
console.log p()

# console.log "\n require ('taffy').taffy"
# npm = require ("taffy")["taffy"]
# console.log(npm)
# console.log "\n   p = npm([{m: 'f'}]) "
# p = npm([{m: "f"}])
# console.log p()

# exports["calc_total_base_feats_count"] = (test) ->
# 	test.equal common.calc_total_base_feats_count("Not Human", { "Ranger":	{ level: 0 }}), 1, "Non human should have 1 base feat at first level"
# 	test.equal common.calc_total_base_feats_count("Not Human", { "Ranger":	{ level: 5 }}), 3, "Non human should have 3 base feats at sixth level"
# 	test.equal common.calc_total_base_feats_count("Not Human", { "Ranger":	{ level: 16 }}), 6, "Non human should have 6 base feats at seventeenth level"
# 	test.equal common.calc_total_base_feats_count("Human", { "Ranger":	{ level: 0 }}), 2, "Human should have 1 base feat at first level"
# 	test.equal common.calc_total_base_feats_count("Human", { "Ranger":	{ level: 5 }}), 4, "Human should have 4 base feats at sixth level"
# 	test.equal common.calc_total_base_feats_count("Human", { "Ranger":	{ level: 16 }}), 7, "Human should have 7 base feats at seventeenth level"
			
# 	test.done()

# exports["calc_total_class_feats_count"] = (test) ->
# 	test.equal common.calc_total_class_feats_count({ "Barbarian": { level: 0 }}), 0, "Barbarian should have no class feats at first level"
# 	test.equal common.calc_total_class_feats_count({ "Barbarian": { level: 18 }}), 3, "Barbarian should have 3 class feats at nineteenth level"
# 	test.equal common.calc_total_class_feats_count({ "Barbarian": { level: 18 }, "Sorcerer": { level: 3 } }), 4, "Multiclass should have 3 class feats at nineteenth level"
	
# 	test.done()

# exports["calc_armor_acp"] = (test) ->
# 	test.equal common.calc_armor_acp([{armor_name: "Studded leather"}]), -1, "Studded leather should have a -1 ACP"
# 	test.equal common.calc_armor_acp([{armor_name: "Studded leather"}, {armor_name: "Chain shirt"}]), -3, "Multiple armors should have a -3 ACP"
	
# 	test.done()
	
# exports["calc_shield_acp"] = (test) ->
# 	test.equal common.calc_shield_acp([{shield_name: "Buckler"}]), -1, "Buckler should have a -1 ACP"
# 	test.equal common.calc_shield_acp([{shield_name: "Buckler"}, {shield_name: "Shield, small, wooden"}]), -2, "Multiple shields should have a -2 ACP"
	
# 	test.done()

	
# exports.calc_skill_mod = testCase(
# 	{ 
# 		setUp: (callback) ->
# 			load_static_data()
			
# 			callback();

# 		get_class_feat_names: (test) ->
# 			{ "Ranger" : { level: 0 } }
# 			# { "Ranger" : { level: 4 } }
# 			# { "Sorcerer" : { level: 0 } }
# 			# { "Sorcerer" : { level: 4 } }
# 			test.equal common.get_class_feat_names({ "Ranger" : { level: 0 } }), ["Simple Weapon Proficiency"]
# 			test.done()
# 	})

# exports.calc_skill_mod = testCase({
# 		setUp:
			
# 		};
# 		suite.tearDown = function(test){
# 			// your stuff
# 		};
		
# 		suite.
		
		
# 		return testCase.super_.call(this, suite);
# 	}
# 	sys.inherits(testCase, nodeunit.testCase);
	
# 	exports["get_all_char_feats"] = (test) ->
		
# 		test.done()
	
# 	exports["get_class_feats"] = (test) ->
		
# 		test.done()
	

	
# exports["calc_skill_mod"] = (test) ->
# 	chardata = {}
# 	char_feats = TAFFY([{ feat_name: "Skill Focus"}])
# 	chardata.skills = TAFFY([{ skill_name: "Knowledge", subtype: "Dungeoneering", ranks: 4 }])
# 	skill = skills({ name: "Knowledge" }).first()
# 	test.equal common.calc_skill_mod(skill, 1, null, "Dungeoneering"), 1
# 	test.done()
	
