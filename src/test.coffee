if typeof(exports) == "object"
	TAFFY = require("../lib/taffy").taffy
	$ = require("jquery")
	# classes = require("./resources/classes").classes
	# armors = require("./resources/armors").armors
	# shields = require("./resources/shields").shields
	# feats = require("./resources/feats").feats
	# skills = require("./resources/skills").skills
	races = require("./resources/races").races
	
this.races = () ->
	console.log "test . races"
	console.log "#{races().first().name}"
