Character = require("../web/character").Character
store = require "../web/store"
skills = require("../web/resources/skills").skills
races = require("../web/resources/races").races
feats = require("../web/resources/feats").feats
TAFFY = require("taffydb")
$ = require("jquery")
end_requires = new Date()
store.load_static_data()
end_load_static = new Date()
console.log "store.load_static_data: #{end_load_static - end_requires}"

exports["calc_skill_mod"] = (test) ->
	chardata = new Character
	chardata.race_name = "Dwarf"
	chardata.skills = TAFFY([
		skill_name: "Disguise"
		ranks: 12
	,
		skill_name: "Knowledge"
		subtypes:
			"Dungeoneering" : 2
			"Engineering" : 4
	])
	chardata.feats = TAFFY([
		feat_name: "Skill Focus"
		multi: [
			"Knowledge (Dungeoneering)" 
			"Disguise"
		]	
	])
	chardata.race_name = "Dwarf"
	chardata.classes = {
		"Fighter": 
			"level": 3
		"Wizard":
			"level": 4
	}

	chardata.abilities = {
		"Str" : 10
		"Int" : 10
		"Dex" : 10
		"Cha" : 10
		"Con" : 10
		"Wis" : 10
	}

	skill = skills({ name: "Disguise" }).first()
	test.equal chardata.calc_skill_mod(skill, null), 12, "Disguise has 12 points, max ranks of 6 (for Fighter/Wizard cross-class), + 6 for Skill Focus"
	skill = skills({ name: "Perception" }).first()
	test.equal chardata.calc_skill_mod(skill, null, chardata), 0, "Perception has no points assigned"

	skill = skills({ name: "Knowledge" }).first()
	test.equal chardata.calc_skill_mod(skill, "Dungeoneering", chardata), 5, "Knowledge (Dungeoneering) has 2 points, max ranks of 12 (for Fighter/Wizard), + 3 for Skill Focus"
	test.equal chardata.calc_skill_mod(skill, "Engineering", chardata), 4, "Knowledge (Engineering) has 4 points, max ranks of 12 (for Fighter/Wizard)"

	test.done()

exports["calc_ability_score"] = (test) ->
	chardata = new Character
	chardata.race_name = "Dwarf"
	chardata.abilities = {
		"Str" : 10
		"Int" : 10
		"Dex" : 10
		"Con" : 10
		"Wis" : 10
	}
	chardata.equip_benes = {
		"skill:Acrobatics" : 10
		"save:pois" : 11
		"ability:Int" : 1
		"dr:Ref" : 3
		"skill:Perception" : -4
		"other:ac" : -3
	}
	test.equal chardata.calc_ability_score("Str"), 10, "Strength should be unmodified for Dwarf"
	test.equal chardata.calc_ability_score("Int"), 11, "Intelligence should be +1 for equipment"
	test.equal chardata.calc_ability_score("Con"), 12, "Constitution should be +2 for Dwarf"
	test.equal chardata.calc_ability_score("Cha"), -2, "Charisma should be -2 for Dwarf"
	test.done()

exports["calc_ranks"] = (test) ->
	chardata = new Character
	chardata.classes = {
		"Fighter": 
			"level": 17
		"Rogue":
			"level": 7
	}
	chardata.skills = TAFFY([
		skill_name: "Disguise"
		ranks: 6
	,
		skill_name: "Knowledge"
		subtypes:
			"Arcana" : 4
			"Dungeoneering" : 20
			"Engineering" : 6
	])
	disguise = skills(name: "Disguise").first()
	# has subtype
	knowledge = skills(name: "Knowledge").first()
	test.equal (chardata.calc_ranks disguise, null), 6, "Disguise is a Rogue class skill"
	test.equal (chardata.calc_ranks knowledge, "Arcana"), 2, "Knowledge (Arcana) is a cross-class skill for Fighter or Rogue"
	chardata.classes = {
		"Fighter": 
			"level": 1
		"Rogue":
			"level": 0
	}
	test.equal (chardata.calc_ranks knowledge, "Dungeoneering"), 6, "Knowledge (Dungeoneering) is class skill for Fighter or Rogue, max ranks 6 for 3rd level"

	chardata.classes = {
		"Fighter": 
			"level": 1
		"Wizard":
			"level": 0
	}
	test.equal (chardata.calc_ranks disguise, null), 3, "Disguise is a cross-class skill for Fighter or Wizard"
	
	chardata.classes = {
		"Fighter": 
			"level": 1
		"Wizard":
			"level": 0
	}
	test.equal (chardata.calc_ranks knowledge, "Engineering"), 6, "Knowledge (Engineering) is a Fighter or Wizard class skill"

	test.done()

exports["calc_total_base_feats_count"] = (test) ->
	chardata = new Character
	chardata.race_name = "Not Human"
	chardata.classes = { "Ranger" : { "level" : 0 }}
	test.equal chardata.calc_total_base_feats_count(), 1, "Non human should have 1 base feat at 1st level"
	chardata.race_name = "Human"
	test.equal chardata.calc_total_base_feats_count(), 2, "Human should have 2 base feat at 1st level"
	chardata.classes = { "Ranger" : { "level" : 5 }}
	test.equal chardata.calc_total_base_feats_count(), 4, "Human should have 4 base feats at 6th level"
	chardata.race_name = "Not Human"
	test.equal chardata.calc_total_base_feats_count(), 3, "Non human should have 3 base feats at 6th level"
	chardata.classes = { "Ranger":	{ level: 16 }}
	test.equal chardata.calc_total_base_feats_count(), 6, "Non human should have 6 base feats at 17th level"
	chardata.race_name = "Human"
	test.equal chardata.calc_total_base_feats_count(), 7, "Human should have 7 base feats at 17th level"
			
	test.done()

exports["calc_total_class_feats_count"] = (test) ->
	chardata = new Character
	chardata.classes = { "Barbarian": { level: 0 }}
	test.equal chardata.calc_total_class_feats_count(), 0, "Barbarian should have no class feats at first level"
	chardata.classes = { "Barbarian": { level: 18 }}
	test.equal chardata.calc_total_class_feats_count(), 3, "Barbarian should have 3 class feats at nineteenth level"
	chardata.classes = { "Barbarian": { level: 18 }, "Sorcerer": { level: 3 } }
	test.equal chardata.calc_total_class_feats_count(), 4, "Multiclass should have 3 class feats at nineteenth level"
	
	test.done()
 
exports["is_class_skill"] = (test) ->
	chardata = new Character
	chardata.classes = {
		"Fighter": 
			"level": 17
		"Rogue":
			"level": 7
	}	
	disguise = skills(name: "Disguise").first()
	# has subtype
	knowledge = skills(name: "Knowledge").first()
	test.ok (chardata.is_class_skill disguise, null), "Rogue should have Disguise as a class skill"
	test.ok not(chardata.is_class_skill knowledge, "Arcana"), "Rogue or Fighter should _not_ have Knowledge (Arcana) as a class skill"

	chardata.classes = {
		"Fighter": 
			"level": 17
		"Wizard":
			"level": 7
	}	
	test.ok not(chardata.is_class_skill disguise, null), "Fighter or Wizard should _not_ have Disguise as a class skill"
	
	chardata.classes = {
		"Fighter": 
			"level": 17
		"Wizard":
			"level": 7
	}
	test.ok (chardata.is_class_skill knowledge, "Engineering"), "Fighter or Wizard should have Knowledge (Engineering) as a class skill"

	test.ok (chardata.is_class_skill knowledge, "Dungeoneering"), "Fighter or Wizard should have Knowledge (Dungeoneering) as a class skill"
	
	test.done()


create_character = () ->
	chardata = new Character
	chardata.skills = TAFFY([
		skill_name: "Disguise"
		ranks: 12
	,
		skill_name: "Knowledge"
		subtypes:
			"Dungeoneering" : 2
			"Engineering" : 4
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

	# chardata.skills().each (i, j) ->
		# console.log "#{i}, #{j}"for the 
	# chardata.classes = {
	# 	"Fighter": 
	# 		"level": 3
	# 	"Wizard":
	# 		"level": 4
	# }

	# chardata.feats = TAFFY([
	# 	feat_name: "Skill Focus"
	# 	multi: [
	# 		"Knowledge (Dungeoneering)" 
	# 		"Disguise"
	# 	]
	# ])

	chardata.race_name = "Dwarf"

	# chardata.equipment = TAFFY([
	# 	id: "jh23422k"
	# 	name: "ruby bird"
	# 	notes: "some notes"
	# 	benefits: [
	# 		id: "skill:Acrobatics"
	# 		mod: 10
	# 	,
	# 		id: "save:pois"
	# 		mod: 2
	# 	,
	# 		id: "ability:Int"
	# 		mod: 1
	# 	,
	# 		id: "dr:Ref"
	# 		mod: 3
	# 	]
	# ,
	# 	id: "asdf333"
	# 	name: "bad ring"
	# 	notes: "some notes"
	# 	benefits: [
	# 		id: "skill:Perception"
	# 		mod: -4
	# 	,
	# 		id: "save:pois"
	# 		mod: 9
	# 	,
	# 		id: "other:ac"
	# 		mod: -3
	# 	]
	# ])
	
	# chardata.equip_benes = {
	# 	"skill:Acrobatics" : 10
	# 	"save:pois" : 11
	# 	"ability:Int" : 1
	# 	"dr:Ref" : 3
	# 	"skill:Perception" : -4
	# 	"other:ac" : -3
	# }

	chardata
