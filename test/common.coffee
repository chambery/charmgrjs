###
test/common.coffee
###
# nodeunit = require "nodeunit"
# testCase = nodeunit.testCase
# assert = require "assert"
common = require "../web/common"
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

exports["calc_ability_modifier"] = (test) ->
	test.equal common.calc_ability_modifier(0), -5
	test.equal common.calc_ability_modifier(9), -1
	test.equal common.calc_ability_modifier(10), 0
	test.equal common.calc_ability_modifier(20), 5
	test.equal common.calc_ability_modifier(21), 5
	test.equal common.calc_ability_modifier(22), 6

	test.done()

exports["calc_level"] = (test) ->
	test.equal common.calc_level(1200), 1, "Should return level 1 for 1200 xp (this would level 2 by the book)"
	test.equal common.calc_level(100), 0, "Should return level 0 for 100 xp (this would level 1 by the book)"
	test.done()
