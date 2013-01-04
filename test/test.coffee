test_file = require "../web/test"
start = new Date()
console.log "before requires"
if typeof(exports) == "object"
	TAFFY = require("taffydb")
	$ = require("jquery")
	_ = require("underscore")
	window = require "../web/window"
	classes = require("../web/resources/classes").classes
	armors = require("../web/resources/armors").armors
	shields = require("../web/resources/shields").shields
	feats = require("../web/resources/feats").feats
	skills = require("../web/resources/skills").skills
	races = require("../web/resources/races").races
	alignments = require("../web/resources/alignments").alignments
	goodness = require("../web/resources/alignments").goodness

console.log "after requires: #{new Date() - start}"

exports["test"] = (test) ->
	window.foo = "test"
	test.equal test_file.test_exports(), "test"
	console.log "no test"
	test.done()

