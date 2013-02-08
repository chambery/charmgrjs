# root = exports ? exports : window

if typeof(exports) == "object"
	TAFFY = require("taffydb")
	JSON = require("../lib/json2").json
	$ = require("jquery")
	common = require("./common")
	classes = require("./resources/classes").classes
	armors = require("./resources/armors").armors
	shields = require("./resources/shields").shields
	feats = require("./resources/feats").feats
	skills = require("./resources/skills").skills
	races = require("./resources/races").races
	spells = require("./resources/spells-pf").spells
	specials = require("./resources/specials").specials
	alignments = require("./resources/alignments").alignments
	goodness = require("./resources/alignments").goodness
	weapons = require("./resources/weapons").weapons
	jsdom = require("jsdom")
	window = require "../web/window"


this.import_character = (options, char_name) ->
	# no import without owner and name
	if not options or not options.owner
		throw "Owner string is required to load character data."
	if not char_name or char_name.length == 0
		throw "Character name required to load character data."
		# options = {}
		# options.owner = prompt("Owner string is required to load character data.")
	# data = prompt("Enter character name (owner: " + chardata.options.owner + ") :")
	data = null
	try
		char_name = data
		$.ajax
			type: "GET"
			url: "character/" + chardata.options.owner + "/" + char_name
			dataType: "json"
			success: (cdata, status) ->
				chardata = cdata
				console.log status
				console.log cdata

			error: (jqXHR, textStatus, errorThrown) ->
				alert data + " not found on the server."
				console.log jqXHR
				console.log textStatus
				console.log errorThrown
				throw "Not found"

			data: {}
			async: false

		console.log "parsing taffy data"
		chardata.skills = new TAFFY(chardata.skills)
		chardata.feats = new TAFFY(chardata.feats)
		save_character()
		need_new_data = false
		if chardata.options and chardata.options.ext_data and loaded_static_data_tags.length == chardata.options.ext_data.length
			for i of loaded_static_data_tags
				need_new_data = true	if chardata.options.ext_data.indexOf(loaded_static_data_tags[i]) == -1
		if need_new_data
			window.location.reload()
		else
			switch_content 0, chardata
	catch e
		owner = (if (players_companion and players_companion.owner) then players_companion.owner else null)
		alert "No character data found for " + data + (if owner then " with owner " + owner + "." else ". You must specify an owner in opt->owner to store and retrieve character data from the server.")

this.lod = (char_name) ->
	if char_name
		cookie_data = get_cookie_data("ch_" + char_name)
		window.chardata = new Character(cookie_data)	if cookie_data
		remote_data = undefined
		if chardata.options and chardata.options.owner
			$.ajax
				type: "GET"
				url: "character/" + chardata.options.owner + "/" + char_name
				dataType: "json"
				success: (cdata, status) ->
					remote_data = cdata
					console.log remote_data
					console.log status

				data: {}
				async: false

			window.chardata = new Character(remote_data)	if remote_data and remote_data.last_mod > chardata.last_mod
			sync_logs()
	load_static_data()

this.sav = (data, local_name, remote_name) ->
	if local_name and local_name.length > 0
		data.last_mod = (new Date()).getTime()
		save_local data, local_name
		remote_name = local_name	unless remote_name
		save_remote data, remote_name	if chardata.name and chardata.options and chardata.options.owner and chardata.options.owner.length > 0

this.save_remote = (data, name) ->
	if data?
		$.ajax
			type: "POST"
			url: "/" + data.type + "/" + chardata.options.owner + "/" + name
			data: JSON.stringify(data)
			success: (data, status) ->
				console.log data
				console.log "status"

			contentType: "application/json; charset=utf-8"
			dataType: "json"

###
Sets a cookie with the supplied name and returns cookie string, in the form of:
	name=data;expires=[supplied or new Date]
###
this.save_local = (data, name, expires) ->
	expires = if expires then expires else (new Date(2020, 02, 02)).toUTCString()
	# console.log data.taffy( name: "taffy" ).first()

	data = escape(JSON.stringify(data))
	cookie = name + "=" + data + ";expires=" + expires
	window.document.cookie = cookie

	cookie

###
Saves the supplied character data locally and remotely (if possible), and returns the saved character name (eg. for use with last_character).  If the character has no name a default name (which is not unique) is created.
###
this.save_character = (chardata) ->
	name = chardata.name
	name = create_default_name(chardata.race_name, chardata.classes)	if not name or name.length == 0
	window.players_companion = {} if not window.document.players_companion
	window.players_companion.last_character = name
	window.document.cookie = @save_local players_companion, "players_companion"

	save_data = $.extend(true, {}, chardata)
	save_data.skills = save_data.skills()	if save_data.skills?
	save_data.feats = save_data.feats()	if save_data.feats?
	save_data.type = "character"
	console.log "save_character: #{JSON.stringify(save_data, null, 2)}"
	sav save_data, "ch_" + name, name
	name

this.get_cookie_data = (cookie_name) ->
	data = null
	if cookie_name and cookie_name.length > 0 and document.cookie.length > 0
		c_start = document.cookie.indexOf(cookie_name + "=")
		unless c_start == -1
			c_start = c_start + cookie_name.length + 1
			c_end = document.cookie.indexOf(";", c_start)
			c_end = document.cookie.length	if c_end == -1
			data = document.cookie.substring(c_start, c_end)
	data

this.parse_taffy_data = (data) ->
	data = []	unless data?
	TAFFY(data)

this.load_static_data = ->
	console.log "loading spells..."
	spells().each (spell, n) ->
		for classname of spell.classes
			clazz = classes(name: classname).first()
			clazz.spells[spell.classes[classname]].push spell.name

	console.log "loading specials..."
	specials().each (special, n) ->
		for classname of special.classes
			clazz = classes(name: classname).first()
			i = 0

			while i < special.classes[classname].length
				clazz.specials[special.classes[classname][i].level].push
					special_name: special.name
					mod: special.mod
				i++

	# console.log "loading feats..."
	feats().each (feat, n) ->
	# 	if feat.multi
	# 		feat.multi.db = eval(feat.multi.db)
	# 		feat.multi.type = eval(feat.multi.type)
	# 	feat.collection.db = eval(feat.collection.db)	if feat.collection
	# 	# feat.attack = new Function("attacks", "weapon", feat.attack)	if feat.attack
	# 	# feat.damage = new Function("damages", "weapon", feat.damage)	if feat.damage
	# 	feat.critical = new Function("critical", feat.critical)	if feat.critical
	# 	# feat.init = new Function("init", feat.init)	if feat.init
	# 	feat.fort = new Function("fort", feat.fort)	if feat.fort
	# 	feat.ref = new Function("ref", feat.ref)	if feat.ref
	# 	feat.will = new Function("will", feat.will)	if feat.will
	# 	feat.ac = new Function("ac", feat.ac)	if feat.ac
	# 	feat.mobility = new Function("acp", feat.mobility)	if feat.mobility
		for classname of feat.classes
			clazz = classes(name: classname).first()
			clazz.feats[feat.classes[classname]].push feat.name
		feat

	console.log "sorting data..."
	races.sort "name"
	classes.sort "name"
	weapons.sort "name"
	armors.sort "name"
	skills.sort "name"

this.delete_character = ->
	prompt_name = (if chardata.name then chardata.name else "the current character")
	answer = confirm("Are you sure you want to delete " + prompt_name + "?")
	if answer
		name = (if chardata.name then chardata.name else ("ch_" + create_default_name()))
		save_local {}, name, "Thu, 01-Jan-1970 00:00:01 GMT"
		if chardata.options.owner and chardata.name
			$.ajax
				type: "GET"
				url: "/delete/" + chardata.options.owner + "/" + name
				data: {}
				success: (data, status) ->
					console.log data
					console.log "status: " + status
					alert "Deleted character data: " + data

				contentType: "application/json; charset=utf-8"
				async: false
		create_new_character()

###
Returns a string constructed from the shortnames of supplied race and classes.
###
this.create_default_name = (char_race, char_classes) ->
	race_name = races(name: char_race).first().shortname
	class_name = ""
	for classname of char_classes
		console.log classname
		class_name += classes(name: classname).first().shortname + "_"
	race_name + "_" + class_name
