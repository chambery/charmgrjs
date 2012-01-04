###
test/classes.coffee
###
Character = require("../web/character").Character
store = require "../web/store"
skills = require("../web/resources/skills").skills
weapons = require("../web/resources/weapons").weapons
classes = require("../web/resources/classes").classes
races = require("../web/resources/races").races
feats = require("../web/resources/feats").feats
TAFFY = require("taffydb")
$ = require("jquery")


store.load_static_data()

exports["ability"] = (test) ->
	chardata = new Character
	chardata.race_name = "Gnome"
	chardata.classes = {
		Sorcerer:
			level: 14
			bloodline: "Aberrant"
	}
	chardata.abilities = {
		Str: 20
		Dex: 15
		Con: 10
	}
	weapons( { usage: { "!has": "light" }}, { usage: { has: "two-handed" }}).each (weapon) ->
		test.equal weapon.ability(chardata.abilities), 7, "#{weapon.name} should have an ability mod of 7 for Strength of 20"
	weapons( { usage: { has: "light" }}, { usage: { has: "two-handed" }}).each (weapon) ->
		test.equal weapon.ability(chardata.abilities), 5, "#{weapon.name} should have an ability mod of 5 for Strength of 20"
	test.equal weapons(name: "Longbow, composite").first().ability(chardata.abilities), 5, "Longbow, composite should have an ability mod of 5 for Strength of 20"
	test.equal weapons(name: "Longbow").first().ability(chardata.abilities), 0, "Longbow should have an ability mod of 0 for Strength of 20"
	chardata.abilities["Str"] = 8
	weapons(usage: has: "two-handed").each (weapon) ->
		test.equal weapon.ability(chardata.abilities), -1, "#{weapon.name} should have an ability mod of 0 for Strength of 8"
	test.equal weapons(name: "Longbow, composite").first().ability(chardata.abilities), -1, "Longbow, composite should have an ability mod of -1 for Strength of 8"
	test.equal weapons(name: "Longbow").first().ability(chardata.abilities), -1, "Longbow should have an ability mod of -1 for Strength of 8"


	test.done()
