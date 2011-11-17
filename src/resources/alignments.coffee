if typeof(exports) == "object"
	TAFFY = require("taffy").taffy

this.alignments = TAFFY([ 
	{ name: "Lawful" },
	{ name: "Neutral" },
	{ name: "Chaotic" } 
])

this.goodness = TAFFY([ 
	{ name: "Good" }, 
	{ name: "Neutral" }, 
	{ name: "Evil" }
])