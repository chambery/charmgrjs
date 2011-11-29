nodeunit = require "nodeunit"
testCase = nodeunit.testCase
assert = require "assert"
common = require "../web/common"
store = require "../web/store"
skills = require("../web/resources/skills").skills
races = require("../web/resources/races").races
feats = require("../web/resources/feats").feats
TAFFY = require("taffy").taffy
$ = require("jquery")
# Set = require("../lib/set").set

# console.log "\n require ('taffy').taffy"
# npm = require ("taffy")["taffy"]
# console.log(npm)
# console.log "\n   p = npm([{m: 'f'}]) "
# p = npm([{m: "f"}])
# console.log p()

exports["calc_total_base_feats_count"] = (test) ->
	test.equal common.calc_total_base_feats_count("Not Human", { "Ranger":	{ level: 0 }}), 1, "Non human should have 1 base feat at first level"
	test.equal common.calc_total_base_feats_count("Not Human", { "Ranger":	{ level: 5 }}), 3, "Non human should have 3 base feats at sixth level"
	test.equal common.calc_total_base_feats_count("Not Human", { "Ranger":	{ level: 16 }}), 6, "Non human should have 6 base feats at seventeenth level"
	test.equal common.calc_total_base_feats_count("Human", { "Ranger":	{ level: 0 }}), 2, "Human should have 1 base feat at first level"
	test.equal common.calc_total_base_feats_count("Human", { "Ranger":	{ level: 5 }}), 4, "Human should have 4 base feats at sixth level"
	test.equal common.calc_total_base_feats_count("Human", { "Ranger":	{ level: 16 }}), 7, "Human should have 7 base feats at seventeenth level"
			
	test.done()

exports["calc_total_class_feats_count"] = (test) ->
	test.equal common.calc_total_class_feats_count({ "Barbarian": { level: 0 }}), 0, "Barbarian should have no class feats at first level"
	test.equal common.calc_total_class_feats_count({ "Barbarian": { level: 18 }}), 3, "Barbarian should have 3 class feats at nineteenth level"
	test.equal common.calc_total_class_feats_count({ "Barbarian": { level: 18 }, "Sorcerer": { level: 3 } }), 4, "Multiclass should have 3 class feats at nineteenth level"
	
	test.done()

exports["calc_armor_acp"] = (test) ->
	test.equal common.calc_armor_acp([{armor_name: "Studded leather"}]), -1, "Studded leather should have a -1 ACP"
	test.equal common.calc_armor_acp([{armor_name: "Studded leather"}, {armor_name: "Chain shirt"}]), -3, "Multiple armors should have a -3 ACP"
	
	test.done()
	
exports["calc_shield_acp"] = (test) ->
	test.equal common.calc_shield_acp([{shield_name: "Buckler"}]), -1, "Buckler should have a -1 ACP"
	test.equal common.calc_shield_acp([{shield_name: "Buckler"}, {shield_name: "Shield, small, wooden"}]), -2, "Multiple shields should have a -2 ACP"
	
	test.done()
	

# exports.calc_skill_mod = testCase(
	# { 
		# setUp: (callback) ->
			# load_static_data()
# 			
			# callback();
# 
		# get_class_feat_names: (test) ->
			# { "Ranger" : { level: 0 } }
			# # { "Ranger" : { level: 4 } }
			# # { "Sorcerer" : { level: 0 } }
			# # { "Sorcerer" : { level: 4 } }
			# test.equal common.get_class_feat_names({ "Ranger" : { level: 0 } }), ["Simple Weapon Proficiency"]
			# test.done()
	# })

# exports.calc_skill_mod = testCase({
		# suite.setUp:
# 			
		# suite.tearDown: (test) ->
			# // your stuff
		# })
		# suite.
# 		
# 		
		# return testCase.super_.call(this, suite);
	# }
	# sys.inherits(testCase, nodeunit.testCase);
# 	io
	# exports["get_all_char_feats"] = (test) ->
# 		
		# test.done()
# 	
	# exports["get_class_feats"] = (test) ->
# 		
		# test.done()
		
exports["get_class_feat_names"] = (test) ->
	store.load_static_data()
	char_classes = {
		"Ranger": 
			"level": 2
		"Sorcerer":
			"level": 7
	}
	class_feat_names = 
		'Simple Weapon Proficiency' : undefined,
		'Armor Proficiency, Light' : undefined, 
		'Martial Weapon Proficiency' : undefined, 
		'Endurance' : undefined, 
		'Simple Weapon Proficiency' : undefined

	test.deepEqual common.get_class_feat_names(char_classes), class_feat_names

	char_classes = {
		"Fighter": 
			"level": 17
		"Rogue":
			"level": 7
	}
	class_feat_names = 
		'Simple Weapon Proficiency' : undefined,
		'Armor Proficiency, Light' : undefined,
		'Armor Proficiency, Medium' : undefined,
		'Martial Weapon Proficiency' : undefined,
		'Armor Proficiency, Heavy' : undefined

	test.deepEqual common.get_class_feat_names(char_classes), class_feat_names

	test.done()
		
exports["get_class_feats"] = (test) ->
	char_classes = {
		"Fighter": 
			"level": 17
		"Rogue":
			"level": 7
	}
	class_feats = {}

	class_feats[feats(name: "Simple Weapon Proficiency").first()] = undefined
	class_feats[feats(name: "Armor Proficiency, Light").first()] = undefined
	class_feats[feats(name: "Armor Proficiency, Medium").first()] = undefined
	class_feats[feats(name: "Martial Weapon Proficiency").first()] = undefined
	class_feats[feats(name: "Armor Proficiency, Heavy").first()] = undefined

	my_feats = common.get_class_feats(char_classes)
	test.deepEqual my_feats, class_feats

	test.done()	

exports["get_all_char_feats"] = (test) ->
	char_feats = TAFFY([
		{ feat_name: "Acrobatic Steps" }, 
		{ feat_name: "Command Undead" },
		{ feat_name: "Elemental Channel" }
	])

	char_classes = {
		"Fighter": 
			"level": 17
		"Rogue":
			"level": 7
	}

	all_char_feats = common.get_all_char_feats(char_feats, char_classes)
	expected_feats = {}
	expected_feats[feats(name: "Acrobatic Steps").first()] = undefined
	expected_feats[feats(name: "Command Undead").first()] = undefined
	expected_feats[feats(name: "Elemental Channel").first()] = undefined
	expected_feats[feats(name: "Simple Weapon Proficiency").first()] = undefined
	expected_feats[feats(name: "Armor Proficiency, Light").first()] = undefined
	expected_feats[feats(name: "Armor Proficiency, Medium").first()] = undefined
	expected_feats[feats(name: "Martial Weapon Proficiency").first()] = undefined
	expected_feats[feats(name: "Acrobatic Steps").first()] = undefined

	test_feats = common.get_all_char_feats(char_feats, char_classes)
	test.deepEqual common.get_all_char_feats(char_feats, char_classes), expected_feats
	test.done()

exports["is_class_skill"] = (test) ->
	char_classes = {
		"Fighter": 
			"level": 17
		"Rogue":
			"level": 7
	}	
	disguise = skills(name: "Disguise").first()
	# has subtype
	knowledge = skills(name: "Knowledge").first()
	test.ok (common.is_class_skill disguise, null, char_classes), "Rogue should have Disguise as a class skill"
	test.ok not(common.is_class_skill knowledge, "Arcana", char_classes), "Rogue or Fighter should _not_ have Knowledge (Arcana) as a class skill"

	char_classes = {
		"Fighter": 
			"level": 17
		"Wizard":
			"level": 7
	}	
	test.ok not(common.is_class_skill disguise, null, char_classes), "Fighter or Wizard should _not_ have Disguise as a class skill"
	
	char_classes = {
		"Fighter": 
			"level": 17
		"Wizard":
			"level": 7
	}
	test.ok (common.is_class_skill knowledge, "Engineering", char_classes), "Fighter or Wizard should have Knowledge (Engineering) as a class skill"
	
	test.done()

exports["calc_ranks"] = (test) ->
	char_classes = {
		"Fighter": 
			"level": 17
		"Rogue":
			"level": 7
	}	
	disguise = skills(name: "Disguise").first()
	# has subtype
	knowledge = skills(name: "Knowledge").first()
	test.equal (common.calc_ranks 4, disguise, null, char_classes), 4, "Disguise is a Rogue class skill"
	test.equal (common.calc_ranks 4, knowledge, "Arcana", char_classes), 2, "Knowledge (Arcana) is a cross-class skill for Fighter or Rogue"

	char_classes = {
		"Fighter": 
			"level": 17
		"Wizard":
			"level": 7
	}	
	test.equal (common.calc_ranks 4, disguise, null, char_classes), 2, "Disguise is a cross-class skill for Fighter or Wizard"
	
	char_classes = {
		"Fighter": 
			"level": 17
		"Wizard":
			"level": 7
	}
	test.equal (common.calc_ranks 4, knowledge, "Engineering", char_classes), 4, "Knowledge (Engineering) is a Fighter or Wizard class skill"

	test.done()


exports["calc_level"] = (test) ->
	test.equal common.calc_level(1200), 1, "Should return level 1 for 1200 xp (this would level 2 by the book)"
	test.equal common.calc_level(100), 0, "Should return level 0 for 100 xp (this would level 1 by the book)"
	test.done()



exports["calc_skill_mod"] = (test) ->
	chardata = {}
	chardata.abilities = {
		"Str" : 10,
		"Int" : 10,
		"Dex" : 10,
		"Cha" : 10,
		"Con" : 10,
		"Wis" : 10,
	}
	chardata.classes = {
		"Fighter": 
			"level": 3
		"Wizard":
			"level": 4
	}		
	chardata.feats = TAFFY([{ feat_name: "Skill Focus", multi: ["Knowledge (Dungeoneering)"]}])
	chardata.skills = TAFFY([
		{ skill_name: "Disguise", ranks: 7 },
		{ skill_name: "Knowledge", subtype: "Dungeoneering", ranks: 2 },
		{ skill_name: "Knowledge", subtype: "Engineering", ranks: 4 },		
	])
	chardata.race_name = "Dwarf"
	skill = skills({ name: "Knowledge" }).first()
	test.equal common.calc_skill_mod(skill, 10, null, "Dungeoneering", chardata.skills, chardata.race_name, chardata.feats), 2

	test.done()

