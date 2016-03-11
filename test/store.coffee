###
test/store.coffee
###
Character = require("../web/character").Character
store = require "../web/store"
window = require "../web/window"
skills = require("../web/resources/skills").skills
races = require("../web/resources/races").races
classes = require("../web/resources/classes").classes
feats = require("../web/resources/feats").feats
TAFFY = require("taffydb")
$ = require("jquery")
jsdom = require("jsdom")
window = require "../web/window"
common = require "../web/common"

end_requires = new Date()
store.load_static_data()
end_load_static = new Date()
console.log "+ store.load_static_data: #{end_load_static - end_requires}"


exports["parse_taffy_data"] = (test) ->

	test.done()

exports["create_default_name"] = (test) ->
	classes =
		Fighter:
			level: 4
		Wizard:
			level: 7

	test.equal store.create_default_name("Dwarf", classes), "Dwf_Ftr_Wiz_"
	test.done()

exports["save_local"] = (test) ->
	# exports.document = new (jsdom.dom.level3.core.Document)();
	# console.log exports.document
	window.players_companion = {}
	window.document = {}
	data =
		level_1:
			level_2:
				data: "monkey"

	test.equal store.save_local(data, "test"), "test=%7B%22level_1%22%3A%7B%22level_2%22%3A%7B%22data%22%3A%22monkey%22%7D%7D%7D;expires=#{(new Date(2020, 02, 02)).toUTCString()}"
	test.done()

exports["save_character"] = (test) ->
	window.players_companion = {}
	window.document = {}
	chardata = new Character
	chardata.race_name = "Halfling"
	chardata.classes = {
		"Fighter":
			"level": 4
		"Wizard":
			"level": 7
	}
	chardata.abilities = { Dex: 10 }
	chardata.armors = TAFFY([
		armor_name: "Studded leather"
		is_worn: true
	])
	chardata.weapons = TAFFY([
		name: "My Long Bow"
		weapon_name: "Longbow"
	])
	chardata.shields = TAFFY([
		shield_name: "Shield, small, wooden"
		is_worn: true
	])
	chardata.feats = TAFFY([
		feat_name: "Skill Focus"
		multi: [
			"Knowledge (Dungeoneering)"
			"Disguise"
		]
	,
		feat_name: "Augment Summoning"
	,
		feat_name: "Animal Affinity"
	])
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

	data =
		level_1:
			level_2:
				data: "monkey"
		taffy: TAFFY([
			name: "taffy"
			])

	test.equal store.save_character()
	test.done()

exports["sav"] = (test) ->

	test.done()

exports["import_character"] = (test) ->
	# err = null
	# try
	#   store.import_character()
	# catch error
	# 	err = error

	# test.equal err, "Owner string is required to load character data."
	# options =
	# 	owner: "owner"
	# err = null
	# try
	#   store.import_character(options)
	# catch error
	# 	err = error
	# test.equal err, "Character name required to load character data."

	test.done()
