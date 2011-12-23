###
test/common.coffee
###
# nodeunit = require "nodeunit"
# testCase = nodeunit.testCase
# assert = require "assert"
common = require "../web/common"
store = require "../web/store"
Character = require("../web/Character").Character
skills = require("../web/resources/skills").skills
races = require("../web/resources/races").races
feats = require("../web/resources/feats").feats
armors = require("../web/resources/armors").armors
TAFFY = require("taffydb")
$ = require("jquery")
end_requires = new Date()
store.load_static_data()
end_load_static = new Date()
console.log "store.load_static_data: #{end_load_static - end_requires}"
# console.log "\n require ('taffy').taffy"
# npm = require ("taffy")["taffy"]
# console.log(npm)
# console.log "\n   p = npm([{m: 'f'}]) "
# p = npm([{m: "f"}])
# console.log p()

exports["remove"] = (test) ->
	array = [1, "2", 3, 4]
	array = common.remove array, 2
	test.equals array.length, 3
	test.equals array[2], 4

	test.done()

exports["calc_level"] = (test) ->
	test.equal common.calc_level(1200), 1, "Should return level 1 for 1200 xp (this would level 2 by the book)"
	test.equal common.calc_level(100), 0, "Should return level 0 for 100 xp (this would level 1 by the book)"
	test.done()

exports["calc_armor_bonus"] = (test) ->
	chardata = new Character
	chardata.armors = TAFFY([
		armor_name: "Half-plate"
		is_worn: true
	])
	
	test.equals common.calc_armor_bonus(chardata.armors, armors, "armor").bonus, 7, "Half-plate should have an armor bonus of 7"
	chardata.armors.insert { armor_name: "Studded leather" }
	test.equals common.calc_armor_bonus(chardata.armors, armors, "armor").bonus, 7, "Half-plate worn and Studded leather not worn should have an armor bonus of 7"
	chardata.armors( armor_name: "Studded leather" ).update { is_worn: true }
	test.equals common.calc_armor_bonus(chardata.armors, armors, "armor").bonus, 10, "Half-plate worn and Studded leather worn should have an armor bonus of 10"
	test.equals common.calc_armor_bonus(chardata.armors, armors, "armor").max_dex_bonus, 0, "Max dex bonus should be 0 (the lesser of half-plate [0] and studded leather [5]"

	test.equals common.calc_armor_bonus(chardata.undefd, armors, "armor").bonus, 0, "null armor should return 0 bonus and no errors"

	test.done()

