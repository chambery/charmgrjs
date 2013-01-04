if typeof(exports) == "object"
	window = require("./window")

this.test_exports = ->
	console.log window.foo
	window.foo
