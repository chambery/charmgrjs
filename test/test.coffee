test_file = require "../web/test"
Set = require "../lib/set"

exports["test"] = (test) ->
	test_file.races()
	test.done()

