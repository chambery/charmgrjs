###
test/feats.coffee
###
nodeunit = require "nodeunit"
# testCase = nodeunit.testCase
# assert = require "assert"
common = require "../web/common"
store = require "../web/store"
skills = require("../web/resources/skills").skills
races = require("../web/resources/races").races
feats = require("../web/resources/feats").feats
TAFFY = require("taffydb")
$ = require("jquery")

store.load_static_data

exports["Skill Focus - skill mod"] = (test) ->

	skill_focus = feats(name: "Skill Focus").first()

	chardata = {}
	chardata.feats = TAFFY([{
		feat_name: "Skill Focus",
		multi: [ "Disguise", "Knowledge (Dungeoneering)" ]
	}])
	ranks = 2
	disguise = skills(name: "Disguise").first()
	mod = 0
	mod = skill_focus.skills.mod(disguise, ranks, mod, null, chardata.feats)
	test.equal mod, 3, "For 2 ranks, the mod for a Skill Focus skill selection Disguise should be 3"

	knowledge = skills(name: "Knowledge").first()
	mod = 0
	mod = skill_focus.skills.mod(knowledge, ranks, mod, "Dungeoneering", chardata.feats)

	test.equal mod, 3, "For 2 ranks, the mod for a Skill Focus skill selection Knowledge (Dungeoneering) should be 3"

	ranks = 10
	mod = 0
	mod = skill_focus.skills.mod(disguise, ranks, mod, null, chardata.feats)
	test.equal mod, 6, "For 10 ranks, the mod for a Skill Focus skill selection Disguise should be 6"

	mod = 0
	mod = skill_focus.skills.mod(knowledge, ranks, mod, "Dungeoneering", chardata.feats)
	test.equal mod, 6, "For 10 ranks, the mod for a Skill Focus skill selection Knowledge (Dungeoneering) should be 6"

	test.done()

exports["Improved Initiative - init"] = () ->
	test.done