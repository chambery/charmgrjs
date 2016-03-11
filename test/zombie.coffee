###
test/character.coffee
###
Character = require("../web/character").Character
store = require "../web/store"
skills = require("../web/resources/skills").skills
races = require("../web/resources/races").races
classes = require("../web/resources/classes").classes
feats = require("../web/resources/feats").feats
TAFFY = require("taffydb")
$ = require("jquery")
zombie = require("zombie")
end_requires = new Date()
store.load_static_data()
end_load_static = new Date()
console.log "+ store.load_static_data: #{end_load_static - end_requires}"

export["import_character"] = (test) ->
	zombie.visit "http://localhost:1860/", (err, browser) ->
  		assert.ok browser.success
		if browser.error
			console.log "Errors reported: #{browser.errors}"

	test.done()
