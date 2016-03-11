###
test/classes.coffee
###
Character = require("../web/character").Character
store = require "../web/store"
skills = require("../web/resources/skills").skills
classes = require("../web/resources/classes").classes
sorcerer_bloodlines = require("../web/resources/sorcerer_bloodlines").sorcerer_bloodlines
races = require("../web/resources/races").races
feats = require("../web/resources/feats").feats
TAFFY = require("taffydb")
$ = require("jquery")


store.load_static_data()

exports["calc_dr_saves"] = (test) ->
	sr = sr: 0
	sorcerer = classes(name: "Sorcerer").first()
	chardata = new Character
	chardata.race_name = "Gnome"
	chardata.classes = {
		Sorcerer:
			level: 14
			bloodline: "Aberrant"
	}
	chardata.abilities = {
		Str: 10
		Dex: 10
		Con: 10
	}

	chardata.equip_benes = {
		"skill:Acrobatics" : 10
		"save:pois" : 11
		"ability:Int" : 1
		"other:Ref" : 3
		"skill:Perception" : -4
		"other:sr" : 3
	}
	test.equal sorcerer.calc_dr_saves(sr, "sr", chardata.classes["Sorcerer"]).sr, 25, "Spell resistance for a Sorcerer with Aberrant bloodline, level 15, should be 25."
	chardata.classes["Sorcerer"].level = 7
	sr = sr: 0
	test.equal sorcerer.calc_dr_saves(sr, "sr", chardata.classes["Sorcerer"]).sr, 0, "Spell resistance for a Sorcerer with Aberrant bloodline, level 8, should be 0."

	test.done()
