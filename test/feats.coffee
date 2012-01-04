###
test/feats.coffee
###
Character = require("../web/character").Character
store = require "../web/store"
skills = require("../web/resources/skills").skills
races = require("../web/resources/races").races
classes = require("../web/resources/classes").classes
feats = require("../web/resources/feats").feats
weapons = require("../web/resources/weapons").weapons
TAFFY = require("taffydb")
$ = require("jquery")
end_requires = new Date()
store.load_static_data()
end_load_static = new Date()
console.log "+ store.load_static_data: #{end_load_static - end_requires}"

# exports["Skill Focus - skill mod"] = (test) ->

# 	skill_focus = feats(name: "Skill Focus").first()

# 	chardata = {}
# 	chardata.feats = TAFFY([{
# 		feat_name: "Skill Focus",
# 		multi: [ "Disguise", "Knowledge (Dungeoneering)" ]
# 	}])
# 	ranks = 2
# 	disguise = skills(name: "Disguise").first()
# 	mod = 0
# 	mod = skill_focus.skills.mod(disguise, ranks, mod, null, chardata.feats)
# 	test.equal mod, 3, "For 2 ranks, the mod for a Skill Focus skill selection Disguise should be 3"

# 	knowledge = skills(name: "Knowledge").first()
# 	mod = 0
# 	mod = skill_focus.skills.mod(knowledge, ranks, mod, "Dungeoneering", chardata.feats)

# 	test.equal mod, 3, "For 2 ranks, the mod for a Skill Focus skill selection Knowledge (Dungeoneering) should be 3"

# 	ranks = 10
# 	mod = 0
# 	mod = skill_focus.skills.mod(disguise, ranks, mod, null, chardata.feats)
# 	test.equal mod, 6, "For 10 ranks, the mod for a Skill Focus skill selection Disguise should be 6"

# 	mod = 0
# 	mod = skill_focus.skills.mod(knowledge, ranks, mod, "Dungeoneering", chardata.feats)
# 	test.equal mod, 6, "For 10 ranks, the mod for a Skill Focus skill selection Knowledge (Dungeoneering) should be 6"

# 	test.done()

# exports["Improved Initiative - init"] = (test) ->
# 	test.done

exports["Weapon Focus"] = (test) ->
	chardata = {}
	chardata.classes =
		"Fighter":
			"level": 4
		"Wizard":
			"level": 7

	chardata.feats = TAFFY([
		feat_name: "Weapon Focus"
		multi: [ "Warhammer" ]
	])

	chardata.weapons = TAFFY([
		weapon_name: "Warhammer"
	])
	attacks =
		base: [12, 4]

	feats( name: "Weapon Focus" ).first().attack(attacks, weapons( name: "Warhammer" ).first(), chardata.feats( feat_name: "Weapon Focus" ).first())
	test.deepEqual attacks.base, [13, 5], "Weapon Focus should add 1 to the attack base, [13, 4]"

	feats( name: "Weapon Focus" ).first().attack(attacks, weapons( name: "Foochin" ), chardata.feats( feat_name: "Weapon Focus" ).first())
	test.deepEqual attacks.base, [13, 5], "Weapon Focus should not modify weapon \"Foochin\""

	test.done()

# exports["Weapon Specialization"] = (test) ->
# 	chardata = {}
# 	chardata.classes = {
# 		"Fighter":
# 			"level": 4
# 		"Wizard":
# 			"level": 7
# 	}
# 	chardata.feats = TAFFY([
# 		feat_name: "Weapon Focus"
# 		multi: [ "Warhammer" ]
# 	])

# 	chardata.weapons = TAFFY([
# 		weapon_name: "Warhammer"
# 	])

# 	damage =
# 		mod: 0
# 	feats( name: "Weapon Specialization" ).first().damage(damage, chardata.weapons( weapon_name: "Warhammer" ), chardata.feats( feat_name: "Weapon Specialization" ))
# 	test.equal , 2, "Weapon Specialization should add 2 to the damage mod, +2"

# 	damage =
# 		mod: 0
# 	feats( name: "Weapon Specialization" ).first().damage(damage, chardata.weapons( weapon_name: "Foochin" ), chardata.feats( feat_name: "Weapon Specialization" ))
# 	test.equal damage, 0, "Weapon Specialization should not modify weapon \"Foochin\""

# 	test.done
