# nodeunit = require "nodeunit"
# testCase = nodeunit.testCase
# assert = require "assert"
start = new Date()
console.log "before requires"
common = require "../web/common"
store = require "../web/store"
skills = require("../web/resources/skills").skills
races = require("../web/resources/races").races
feats = require("../web/resources/feats").feats
TAFFY = require("taffydb")
$ = require("jquery")
end_requires = new Date()
console.log "after requires: #{end_requires - start}"
store.load_static_data()
end_load_static = new Date()
console.log "store.load_static_data: #{end_load_static - end_requires}"
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
	
exports["get_class_feat_names"] = (test) ->
	char_classes = {
		"Ranger": 
			"level": 2
		"Sorcerer":
			"level": 7
	}
	class_feat_names = [
		'Simple Weapon Proficiency',
		'Armor Proficiency, Light',
		'Martial Weapon Proficiency',
		'Endurance'
	]

	test.deepEqual common.get_class_feat_names(char_classes), class_feat_names
	my_feat_names = common.get_class_feat_names char_classes
	for i, feat_name of my_feat_names
		test.ok class_feat_names.indexOf(feat_name) > -1

	char_classes = {
		"Fighter": 
			"level": 17
		"Rogue":
			"level": 7
	}
	class_feat_names = [
		'Simple Weapon Proficiency',
		'Armor Proficiency, Light',
		'Armor Proficiency, Medium',
		'Martial Weapon Proficiency',
		'Armor Proficiency, Heavy'
	]

	my_feat_names = common.get_class_feat_names char_classes
	for i, feat_name of my_feat_names
		test.ok class_feat_names.indexOf(feat_name) > -1

	test.done()
		
exports["get_class_feats"] = (test) ->
	char_classes = {
		"Fighter": 
			"level": 17
		"Rogue":
			"level": 7
	}
	class_feats = []

	class_feats.push feats(name: "Simple Weapon Proficiency").first()
	class_feats.push feats(name: "Armor Proficiency, Light").first()
	class_feats.push feats(name: "Armor Proficiency, Medium").first()
	class_feats.push feats(name: "Martial Weapon Proficiency").first()
	class_feats.push feats(name: "Armor Proficiency, Heavy").first()

	my_feats = common.get_class_feats(char_classes)
	console.log "get_class_feats - test"
	console.log "\n\tmy_feats length: #{my_feats.length}"
	for i, feat of my_feats
		console.log "\t#{i} : #{feat.name}"
	console.log "\n\tclass_feats"
	for i, feat of class_feats
		console.log "\t#{i} : #{feat.name}"

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
	expected_feats = []
	expected_feats.push feats(name: "Acrobatic Steps").first()
	expected_feats.push feats(name: "Command Undead").first()
	expected_feats.push feats(name: "Elemental Channel").first()
	expected_feats.push feats(name: "Simple Weapon Proficiency").first()
	expected_feats.push feats(name: "Armor Proficiency, Light").first()
	expected_feats.push feats(name: "Armor Proficiency, Medium").first()
	expected_feats.push feats(name: "Martial Weapon Proficiency").first()
	expected_feats.push feats(name: "Acrobatic Steps").first()
	expected_feats.push feats(name: "Armor Proficiency, Heavy").first()

	test_feats = common.get_all_char_feats(char_feats, char_classes)
	console.log "test_feats length: #{test_feats.length}"
	for i, feat of test_feats
		test.ok expected_feats.indexOf(feat) > -1

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

	test.ok (common.is_class_skill knowledge, "Dungeoneering", char_classes), "Fighter or Wizard should have Knowledge (Dungeoneering) as a class skill"
	
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

exports["calc_ability_modifier"] = (test) ->
	test.equal common.calc_ability_modifier(0), -5
	test.equal common.calc_ability_modifier(9), -1
	test.equal common.calc_ability_modifier(10), 0
	test.equal common.calc_ability_modifier(20), 5
	test.equal common.calc_ability_modifier(21), 5
	test.equal common.calc_ability_modifier(22), 6

	test.done()

exports["calc_equip_mod"] = (test) ->
	equip_bene = {
		poison: 4
	}

	test.equal common.calc_equip_mod(equip_bene, "poison"), 4
	test.done()

exports["calc_skill_mod"] = (test) ->
	chardata = {}
	chardata.skills = TAFFY([
		skill_name: "Disguise"
		ranks: 12
	,
		skill_name: "Knowledge"
		subtypes: [
			"Dungeoneering" : 2
			"Engineering" : 4
		]
	])

	chardata.xp = 35000

	chardata.abilities = {
		"Str" : 10,
		"Int" : 10,
		"Dex" : 10,
		"Cha" : 10,
		"Con" : 10,
		"Wis" : 10
	}
	chardata.classes = {
		"Fighter": 
			"level": 3
		"Wizard":
			"level": 4
	}
	chardata.feats = TAFFY([
		feat_name: "Skill Focus"
		multi: [
			"Knowledge (Dungeoneering)" 
			"Disguise"
		]
	])

	chardata.race_name = "Dwarf"

	skill = skills({ name: "Disguise" }).first()
	test.equal common.calc_skill_mod(skill, null, chardata), 11, "Disguise has 12 points, max ranks of 5 (for Fighter/Wizard cross-class), + 6 for Skill Focus"
	skill = skills({ name: "Knowledge" }).first()
	test.equal common.calc_skill_mod(skill, "Dungeoneering", chardata), 5, "Knowledge (Dungeoneering) has 2 points, max ranks of 10 (for Fighter/Wizard), + 3 for Skill Focus"
	test.equal common.calc_skill_mod(skill, "Engineering", chardata), 4, "Knowledge (Engineering) has 4 points, max ranks of 10 (for Fighter/Wizard)"

	test.done()

