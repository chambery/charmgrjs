###
src/common.coffee
###
start = new Date()
if typeof(exports) == "object"
	TAFFY = require("taffydb")
	$ = require("jquery")
	_ = require("underscore")
	common = require("./common")
	classes = require("./resources/classes").classes
	armors = require("./resources/armors").armors
	shields = require("./resources/shields").shields
	feats = require("./resources/feats").feats
	skills = require("./resources/skills").skills
	races = require("./resources/races").races
	alignments = require("./resources/alignments").alignments
	goodness = require("./resources/alignments").goodness

global = exports ? this

console.log new Date() - start
# TODO - inline
this.update_weapon = (name, index) ->
	weapon = weapons.first(name: name)
	$("#" + name + index + "dam").value = weapon.damage
	$("#" + name + index + "crit").value = weapon.critical

this.remove = (arr, index) ->
	if index > -1
		arr.splice index, 1
		console.log "\t#{arr} #{arr.length}"
		arr = arr.slice()
		console.log "\t#{arr} #{arr.length}"

	arr

this.generate_id = ->
	Math.floor(Math.random() * 4294967295).toString 16

this.toggle_visible = (section, hide) ->
	$("#" + section).toggle hide
	hidden = $("#" + section).is(":hidden")
	$("#" + section + "_expand_flag").html (if hidden then "<img src='images/collapsed.png'/>" else "<img src='images/expanded.png'/>")

this.set_links_part = (page_id) ->
	classes_html = ""
	is_spellpicker = false
	for classname of chardata.classes
		is_spellpicker = (if spellpickers.indexOf(classname) > -1 then true else is_spellpicker)
		class_shortname = classes({name: classname}).first().shortname
		classes_html += "<td id='view_class_" + classname + "' style='color: blue;text-align: right; vertical-align: top' nowrap><a class='fake_link view' onclick='var level_diff=(calc_level()+1)-calc_current_level(); show_class_dialog(level_diff,0);'>" + class_shortname + "</a><sub>" + (chardata.classes[classname].level + 1) + "</sub></td>"
			# set a default race if null
	race = races({name: chardata.race_name}).first()
	links_html = "<table padding='0' cellpadding='1' margin='0'><tr>"
	allviews = views().get()
	for k of allviews
		continue	if allviews[k].name == "spells" and not is_spellpicker
		if allviews[k].id == page_id
			links_html += "<td class='view'><b>" + allviews[k].name + "</b></td>"
			document.title = allviews[k].title
		else
			links_html += "<td class='view' style='vertical-align: top'><a id='view_" + allviews[k].id + "' class='view' onclick='switch_content(" + allviews[k].id + ", chardata)'>" + allviews[k].name + "</a></td>"
	characters = get_all_characters()
	existing_chars_html = ""
	for i of characters
		existing_chars_html += "<li id='" + characters[i].name + "' onclick=\"players_companion.last_character='" + characters[i].name + "'; sav(players_companion, 'players_companion'); window.location.reload();\" >" + characters[i].name + "</li>"	if characters[i].name? and characters[i].name.length > 0 and characters[i].name != chardata.name
	existing_chars_html = "<li class='sep'><hr /></li>" + existing_chars_html	if existing_chars_html.length > 0
	$("#linkspart").html links_html + "<td class='view'>" + "<td class='view'><ul id='file'><li class='btn box'>&nbsp;char&nbsp;<ul><li id='load'>load</li><li></li><li id='new'>new</li><li></li><li id='log'>log</li><li></li><li id='options'>options</li><li></li><li id='sheet'>sheet</li><li></li>" + existing_chars_html + "</ul></ul></td>" + "<td class='view' style='color: blue;width: 100%;text-align: right;' nowrap>" + race.shortname + "</td>" + classes_html + "</tr></table>"
	if this.calc_level() - window.chardata.calc_current_level() > 0
		$("td[id^='view_class']").css "font-weight", "bold"
	else
		$("td[id^='view_class']").css "font-weight", ""
	$("#file").clickMenu()
	$("#load").bind "click", (e) ->
		import_character()

	$("#new").bind "click", (e) ->
		create_new_character()

	$("#log").bind "click", (e) ->
		update_log()

	$("#options").bind "click", (e) ->
		update_options()

	$("#sheet").click (e) ->
		set_links_part -1
		$("#root_container").css "width", "768px"
		$("#content").html character_sheet
		populate_character_sheet()

this.switch_content = (view_id, chardata) ->
	if view_id == 0
		main.do_main()
	else if view_id == 1
		main.do_edit()
	else if view_id == 2
		main.do_feats()
	else if view_id == 3
		main.do_spells()
	else main.do_equipment()	if view_id == 4

this.populate_object = (obj, name, value) ->
	obj[name] = value
	obj

this.count_attrs = (obj) ->
	count = 0
	for k of obj
		count++	if obj.hasOwnProperty(k)
	count

this.create_select = (name, items, onchange_action, include_empty, extra_data, category_filter, selected_value, id_as_value) ->
	html = "<select id='" + name + "' onchange=\"" + onchange_action + "\" " + (extra_data or "") + ">"
	html += "<option id='add_new' value='-1'>Add new " + name.substring(0, name.indexOf("_")) + "</option>"	if include_empty
	for i of items
		if not category_filter? or items[i].category == category_filter
			selected = (if selected_value? and selected_value == items[i]._id then " selected" else "")
			html += "<option id='" + name + "_option_" + items[i]._id + "' value='" + (if id_as_value then items[i].id else items[i].name) + "'" + selected + ">" + items[i].name + "</option>"
	html += "</select>"
	html

this.create_select1 = (name, items, onchange_action, selected_value, extra_data) ->
	html = "<select id='" + name + "' onchange='" + onchange_action + "' " + (if extra_data then extra_data else "") + ">"
	for i of items
		selected = (if selected_value? and selected_value == items[i]._id then " selected" else "")
		html += "<option id='" + name + "_option_" + items[i]._id + "' value='" + items[i]._id + "'" + selected + ">" + items[i].name + "</option>"
	html += "</select>"
	html

this.pos = (number) ->
	(if (isFinite(number)) and (number > 0) then "+" + number else number)

###
Returns the 0-based level for the supplied xp.  Eg. xp = 100 -> 0, xp = 1200 -> 1
###
this.calc_level = (xp) ->
	xp = xp | 0

	(Math.floor((1 + Math.sqrt(xp / 125 + 1)) / 2)) - 1

this.calc_ability_modifier = (score) ->
	Math.ceil((score - 11) / 2)

###
Returns the armor bonus for any "armor-like" object
###
this.calc_armor_bonus = (char_armor, db, equip_type) ->
	console.log "\ncalc_armor_bonus"
	max_dex_bonus = "-"
	armor_bonus = 0
	char_armor?().each (type) ->
		console.log "\t#{type[equip_type + "_name"]}  #{type.is_worn}"
		if type.is_worn
			armordata = db( {name: type[equip_type + "_name"]} ).first()
			console.log "\tarmordata: #{armordata.max_dex_bonus}"
			# common.print armordata
			armor_bonus += parseInt(armordata.bon)	unless armordata.bon == "-"
			if max_dex_bonus == "-" and common.is_number(armordata.max_dex_bonus)
				max_dex_bonus =	armordata.max_dex_bonus
			else
				max_dex_bonus = Math.min(parseInt(max_dex_bonus, armordata.max_dex_bonus))	unless armordata.max_dex_bonus == "-"

	bonus: armor_bonus
	max_dex_bonus: max_dex_bonus


this.show_dialog = (title, content, save_on_close, close_fn, opts) ->
	$(".ui-widget-overlay").live "click", ->
		$("#mydialog").dialog "close"

	if save_on_close
		$("#mydialog").bind "dialogclose", ->
			save_character(chardata)
	if close_fn
		$("#mydialog").bind "dialogclose", ->
			eval close_fn
	else
		$("#mydialog").unbind "dialogclose"
	$("#mydialog").html content
	options =
		modal: true
		autoOpen: false
		title: title
		offset: [ 50, 50 ]
		width: 320

	$.extend options, opts
	$("#mydialog").dialog options
	$("tr[class='detail'][class!='header']:even").addClass "even_row"
	$("#mydialog").dialog "open"
	$("tr[class='detail']:even").removeClass "even_row"
	false

this.show_item_detail = (table, obj_id, modify_detail) ->
	obj = null
	if table.hasOwnProperty("find")
		obj = table.first(_id: obj_id)
	else
		obj = table[obj_id]
	content = ""
	title = obj.name
	jQuery.each obj, (name, value) ->
		if not value? or value.toString().length == 0 or show_detail_ignore.indexOf(name) > -1
			return
		else if name != "detail" and name != "name" and name != "class_data" and name != "description" and name != "op"
			if name == "ability_id"
				name = "Ability"
				value = abilities[value].name
			else if name == "synergies"
				value = value.join(", ")	if value.length > 0
			else if name == "feats"
				count = 0
				related_feats = ""
				for i of value
					related_feats += i
					count++
				value = related_feats
			else if name == "skills"
				skill_data = ""
				i = 0
				skills_count = count_attrs(value)
				for skill_name of value
					skill_data += skill_name + " " + pos(value[skill_name])
					i++
					skill_data += (if i < skills_count then ", " else "")
				value = skill_data
			content += "<b>" + capitalize(name).replace(/_/g, " ") + "</b>: " + value + "<br/>"

	detail = obj.detail
	detail = modify_detail(obj)	if modify_detail
	content += "<br/>" + detail.replace(/%class%/g, "class")	if detail
	show_dialog title, content

this.capitalize = (string) ->
	string.charAt(0).toUpperCase() + string.slice(1)

this.klone = (o) ->
	return o	unless typeof (o) == "object"
	return o	unless o?
	newO = new Object()
	for i of o
		newO[i] = klone(o[i])
	newO

this.htmlize = (text) ->
	if text
		replacement_text = text.replace(/\n/g, "<br/>")
		replacement_text = replacement_text.replace(/--/g, "&ndash;")
	replacement_text or ""

this.dehtmlize = (text) ->
	if text
		replacement_text = text.replace(/<br\/>/g, "\n")
		replacement_text = replacement_text.replace(/&ndash;/g, "--")
	replacement_text or ""

this.parse_character_data = (data) ->
	unless TAFFY.isObject(data)
		log_data = null
		log_separator = data.indexOf("``")
		if log_separator > 0
			log_data = data.substring(data.indexOf("``") + 2)
			data = data.substring(0, data.indexOf("``"))
		data = JSON.parse(unescape(data)) or {}
	data.skills = parse_taffy_data(data.skills)
	data.feats = parse_taffy_data(data.feats)
	if log_data
		log_entries = log_data.split("`")
		i = 0

		while i < log_entries.length
			entry = JSON.parse(unescape(log_entries[i]))
			sav entry, "log_" + data.name + "_" + entry.id
			i++
	data

this.reconstitute_array = (array_obj, attr_name) ->
	array = null
	if array_obj
		array = []
		for i of array_obj
			array.push array_obj[i]
	array

this.export_character = ->
	cookie_data = get_cookie_data("ch_" + chardata.name)
	if cookie_data.length > 0
		if chardata.log != undefined and chardata.log.length > 0
			cookie_data += "``"
			i = 0

			while i < chardata.log.length
				cookie_data += JSON.stringify(get_log_entry(chardata.log[i])) + (if i + 1 < chardata.log.length then "," else "")
				i++
		show_dialog "character export", "Copy the below string to save your character:\n" + cookie_data
	else
		alert "No character data to export"

this.get_all_characters = ->
	characters = []
	if document.cookie.length > 0
		cookies = document.cookie.split("; ")
		for i of cookies
			if cookies[i].indexOf("ch_") == 0
				data = cookies[i].substring(cookies[i].indexOf("=") + 1)
				characters.push parse_character_data(data)
	characters

this.intersection = (setA, setB) ->
	setA_seen = {}
	setB_seen = {}
	i = 0

	while i < setB.length
		setB_seen[setB[i]] = true
		i++
	intersection = []
	i = 0

	while i < setA.length
		unless setA_seen[setA[i]]
			setA_seen[setA[i]] = true
			intersection.push setA[i]	if setB_seen[setA[i]]
		i++
	intersection

this.update_options = (message) ->
	curr_opts = chardata["options"]
	title = "Options"
	content = "<table>"
	string_options = options({ type: "string" }).get()
	if string_options.length > 0
		content += "<table>"
		content += "<tr><td colspan=2>" + message + "</td></tr>"	if message
		for option of string_options
			content += "<tr><td rowspan=2 valign=top>" + string_options[option].description + ":</td><td valign=top><input id='option_" + string_options[option].name + "' type='text' onblur='" + string_options[option].op + "'" + (if chardata["options"]? and chardata["options"][string_options[option].name]? then " value='" + chardata["options"][string_options[option].name] + "'" else "") + "</td></tr><tr><td valign=top style='color: #D0D0D0'>" + (string_options[option].note or "") + "</td></tr>"
		content += "</table>"
	boolean_options = options.get(type: "boolean")
	if boolean_options.length > 0
		content += "<table>"
		for option of boolean_options
			content += "<tr><td><input id='option_" + boolean_options[option].name + "' type='checkbox' onclick='" + boolean_options[option].op + "'" + (if chardata["options"]? and chardata["options"][boolean_options[option].name] == true then " checked" else "") + " style='vertical-align: top;'/></td><td>" + boolean_options[option].description + "</td></tr>"
		content += "</table>"
	content += "</table><center><a class=fake_link onclick=\"delete_character()\">Delete this character</a></center><hr style='width: 0px'/><center style='font-size: xx-small;'><fieldset>If you enjoy this tool, please leave a comment on the blog (bugs + feature requests most welcome)</fieldset></center><br>"
	content += "<a href='http://charactermanager.blogspot.com/' target='_blank' style='float: right;font-size: xx-small;'>Player's Companion Blog</a><a href='http://code.google.com/p/charactermanager/issues' target='_blank' style='font-size: xx-small;'>Project Page</a><span style='font-size: xx-small;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v0.7</span>"
	show_dialog title, content, true
	false


this.get_special_abilities = ->
	special_abilities = []
	for classname of chardata.classes
		class_specials = classes({name: classname}).first().specials
		level = 0

		while level <= chardata.classes[classname].level
			item = 0

			while item < class_specials[level].length
				class_special = specials.first(name: class_specials[level][item].special_name)
				if class_special.supersedes
					for supersede of class_special.supersedes
						special_abilities[class_special.supersedes[supersede]] = null
				special_abilities[class_specials[level][item].special_name] = class_special
				special_abilities[class_specials[level][item].special_name].mod = class_specials[level][item].mod
				item++
			level++
	rogue_special_abilities = chardata.rogue_special_abilities
	for i of rogue_special_abilities
		unless rogue_special_abilities[i].special_name == "Skill Mastery"
			class_special = specials.first(name: rogue_special_abilities[i].special_name)
			special_abilities[rogue_special_abilities[i].special_name] = class_special
	special_abilities

this.create_selector_grid = (items, anchor_table, click_fn, populate_data, cols, use_text_link) ->
	cols = 2	unless cols?
	use_text_link = true	unless use_text_link?
	if items.length == 0
		$(anchor_table).html ""
	else
		i = 0

		while i < items.length
			$(anchor_table).append "<tr id='" + items[i].type + "_" + ((i / cols) | 0) + "'></tr>"	if i % cols == 0
			display_name = (if use_text_link then "<a class='fake_link' onclick=\"show_item_detail(" + items[i].type + "s, '" + items[i]._id + "')\">" + items[i].name + "</a>" else "<label for='" + items[i]._id + "'>" + items[i].name + "</label>")
			$("tr#" + items[i].type + "_" + ((i / cols) | 0)).append "<td><input id='" + items[i]._id + "' type='checkbox'/>" + display_name + "</td>"
			$("input#" + items[i]._id).attr "checked", "checked"	if populate_data.indexOf(items[i].name) > -1
			$("input#" + items[i]._id).bind "click", item: items[i], (e) ->
				click_fn e.data.item, $(this).attr("checked")
			i++

this.create_selector_group = (item, title, all_options, option_db, cols, click_fn) ->
	html = "<tr id='" + item._id + "_sub_'><td colspan='" + cols + "'></td><td><table id='" + item._id + "_sub_'></table></td></tr>"
	$("#" + item._id + "_sub").after html
	i = 0

	while i < all_options.length
		$("table[id='" + item._id + "_sub_']").append "<tr id='" + item._id + "_sub_" + ((i / cols) | 0) + "'></tr>"	if i % cols == 0
		display_name = "<label for='" + item._id + "_" + all_options[i]._id + "'>" + all_options[i].name + "</label>"
		$("tr#" + item._id + "_sub_" + ((i / cols) | 0)).append "<td><input id='" + item._id + "_" + all_options[i]._id + "' type='checkbox'/>" + display_name + "</td>"
		$("input#" + item._id + "_" + all_options[i]._id).bind "click",
			item: item
			name: all_options[i].name
		, (e) ->
			click_fn e.data.item, $(this).attr("checked"), e.data.name, option_db
		i++

this.is_empty = (object) ->
	for i of object
		return false
	true


this.is_number = (o) ->
	not isNaN(o - 0)

this.create_new_character = ->
	char_classes = []
	equipment_benefits = []
	chardata = options: {}
	players_companion.last_character = ""
	chardata.options.owner = players_companion.owner
	sav players_companion, "players_companion"
	main.do_edit()

this.do_class_functions = (page, location, obj) ->
	if obj instanceof Array
		obj = $.merge([], obj)
	else
		obj = $.extend({}, obj)
	for classname of chardata.classes
		clazz = classes({name: classname}).first()
		if clazz.custom and clazz.custom[page] and clazz.custom[page][location]
			for script of clazz.custom[page][location]
				clazz.custom[page][location][script] obj
	obj


this.print = (o) ->
	console.log "print - src"
	for key, value of o
		console.log "\t\t#{key} : #{value}"

this.loaded_static_data_tags = []

this.simple_weapons = []

this.martial_weapons = []

this.exotic_weapons = []

this.show_detail_ignore = [ "id", "_rev", "classes", "type", "prereqs", "mobility", "conditional", "multi", "inform", "abbrev", "skill_classes", "attack", "damage", "spells", "levels", "tags", "id", "_id" ]

this.spellcasters = [ "Bard", "Cleric", "Druid", "Paladin", "Ranger", "Sorcerer", "Wizard" ]

this.natural_spellcasters = [ "Cleric", "Druid", "Paladin", "Ranger" ]

this.spellpickers = [ "Bard", "Sorcerer", "Wizard" ]

this.armor_edit_data = [ "bon", "acp", "note" ]

this.shield_edit_data = [ "bon", "acp", "note" ]

this.grapple_size_mod =
	colossal: 16
	gargantuan: 12
	huge: 8
	large: 4
	medium: 0
	small: -4
	tiny: -8
	diminutive: -12
	fine: -16


this.damage_reductions = [ "fire", "cold", "acid", "pois", "elec", "base" ]

this.save_against = [ "pois", "petr" ]

this.sizes = [ "fine", "diminutive", "tiny", "small", "medium", "large", "huge", "gargantuan", "colossal" ]

this.draconic_types = TAFFY([
	name: "Black"
	_id: "xxca1"
	breath: "Acid - 60ft line"
,
	name: "Blue"
	_id: "xxca2"
	breath: "Electricity - 60ft line"
,
	name: "Green"
	_id: "xxca3"
	breath: "Acid - 30ft cone"
,
	name: "Red"
	_id: "xxca4"
	breath: "Fire - 30ft cone"
,
	name: "White"
	_id: "xxca5"
	breath: "Cold - 30ft cone"
,
	name: "Brass"
	_id: "xxca6"
	breath: "Fire - 60ft line"
,
	name: "Bronze"
	_id: "xxca7"
	breath: "Electricity - 60ft line"
,
	name: "Copper"
	_id: "xxca8"
	breath: "Acid - 60ft line"
,
	name: "Gold"
	_id: "xxca9"
	breath: "Fire - 30ft cone"
,
	name: "Silver"
	_id: "xxcaa"
	breath: "Cold - 30ft cone"
 ])

this.curr_xp = 0

this.char_classes = []

this.equipment_benefits = []

alignments = [ "Lawful", "Neutral", "Chaotic" ]
goodness = [ "Good", "Neutral", "Evil" ]

$.extend keys: (obj) ->
	a = []
	$.each obj, (k) ->
		a.push k

	a


this.weapon_edit_data = [ "name", "att", "dam", "crit", "note" ]

this.options = TAFFY([
	name: "owner"
	description: "Owner"
	note: "prevents character overwrites"
	type: "string"
	op: "if(chardata.options == null) { chardata.options = {}; } if($(this).attr(\"value\").length > 0) { chardata.options.owner = $(this).attr(\"value\"); players_companion.owner = $(this).attr(\"value\"); } else { chardata.options.owner = null; players_companion.owner = null; }"

,
	name: "ext_data"
	description: "Extended data"
	note: "space-separated tag names, eg. phb2 monkey cheetah"
	type: "string"
	op: "if(chardata.options == null) { chardata.options = {}; } if($(this).attr(\"value\").length > 0) { chardata.options.ext_data = $(this).attr(\"value\"); } else { chardata.options.ext_data = null; }"
 ])

this.players_companion = {}

this.abilities =
	Str:
		name: "Strength"
		detail: "Strength measures your character's muscle and physical power. This ability is especially important for Fighters, barbarians, paladins, rangers, and monks because it helps them prevail in combat. Strength also limits the amount of equipment your character can carry.<p class=sub>You apply your character's Strength modifier to:<ul><li>Melee attack rolls.</li><li>Damage rolls when using a melee weapon or a thrown weapon (including a sling). (<i>Exceptions:</i> Off-hand attacks receive only one-half the character's Strength bonus, while two-handed attacks receive one and a half times the Strength bonus. A Strength penalty, but not a bonus, applies to attacks made with a bow that is not a composite bow.)</li><li>Climb, Jump, and Swim checks. These are the skills that have Strength as their key ability.</li><li>Strength checks (for breaking down doors and the like).</li></ul></p><p class=sub>Any creature that can physically manipulate other objects has at least 1 point of Strength. A creature with no Strength score can't exert force, usually because it has no physical body or because it doesn't move. The creature automatically fails Strength checks. If the creature can attack, it applies its Dexterity modifier to its base attack bonus instead of a Strength modifier.</p>"

	Dex:
		name: "Dexterity"
		detail: "Dexterity measures hand-eye coordination, agility, reflexes, and balance. This ability is the most important one for rogues, but it's also high on the list for characters who typically wear light or medium armor (rangers and barbarians) or no armor at all (monks, wizards, and sorcerers), and for anyone who wants to be a skilled archer.<p class=sub>You apply your character's Dexterity modifier to:<ul><li>Ranged attack rolls, including those for attacks made with bows, crossbows, throwing axes, and other ranged weapons.</li><li>Armor Class (AC), provided that the character can react to the attack.</li><li>Reflex saving throws, for avoiding fireballs and other attacks that you can escape by moving quickly.</li><li>Balance, Escape Artist, Hide, Move Silently, Open Lock, Ride, Sleight of Hand, Tumble, and Use Rope checks. These are the skills that have Dexterity as their key ability.</li></ul></p><p class=sub>Any creature that can move has at least 1 point of Dexterity. A creature with no Dexterity score can't move. If it can perform actions (such as casting spells), it applies its Intelligence modifier to initiative checks instead of a Dexterity modifier. The creature automatically fails Reflex saves and Dexterity checks.</p>"

	Int:
		name: "Intelligence"
		detail: "Intelligence determines how well your character learns and reasons. This ability is important for wizards because it affects how many spells they can cast, how hard their spells are to resist, and how powerful their spells can be. It's also important for any character who wants to have a wide assortment of skills.<p class=sub>You apply your character's Intelligence modifier to:<ul><li>The number of languages your character knows at the start of the game.</li><li>The number of skill points gained each level. (But your character always gets at least 1 skill point per level.)</li><li>Appraise, Craft, Decipher Script, Disable Device, Forgery, Knowledge, Search, and Spellcraft checks. These are the skills that have Intelligence as their key ability.</li></ul></p><p class=sub>A wizards gains bonus spells based on her Intelligence score. The minimum Intelligence score needed to cast a wizard spell is 10 + the spell's level.</p><p class=sub>An animal has an Intelligence score of 1 or 2. A creature of humanlike intelligence has a score of at least 3.</p><p class=sub>A character does not retroactively get additional skill points for previous levels if she increases her intelligence.</p><p class=sub>Any creature that can think, learn, or remember has at least 1 point of Intelligence. A creature with no Intelligence score is mindless, an automaton operating on simple instincts or programmed instructions. It has immunity to mind-affecting effects (charms, compulsions, phantasms, patterns, and morale effects) and automatically fails Intelligence checks.</p><p class=sub>Mindless creatures do not gain feats or skills, although they may have bonus feats or racial skill bonuses.</p>"

	Con:
		name: "Constitution"
		detail: "Constitution represents your character's health and stamina. A Constitution bonus increases a character's hit points, so the ability is important for all classes.<p class=sub>You apply your character's Constitution modifier to:<ul><li>Each roll of a Hit Die (though a penalty can never drop a result below 1—that is, a character always gains at least 1 hit point each time he or she advances in level).</li><li>Fortitude saving throws, for resisting poison and similar threats.</li><li>Concentration checks. Concentration is a skill, important to spellcasters, that has Constitution as its key ability.</li></ul></p><p class=sub>If a character's Constitution score changes enough to alter his or her Constitution modifier, the character's hit points also increase or decrease accordingly.</p><p class=sub>Any living creature has at least 1 point of Constitution. A creature with no Constitution has no body or no metabolism. It is immune to any effect that requires a Fortitude save unless the effect works on objects or is harmless. The creature is also immune to ability damage, ability drain, and energy drain, and automatically fails Constitution checks. A creature with no Constitution cannot tire and thus can run indefinitely without tiring (unless the creature's detail says it cannot run).</p>"

	Cha:
		name: "Charisma"
		detail: "Charisma measures a character's force of personality, persuasiveness, personal magnetism, ability to lead, and physical attractiveness. This ability represents actual strength of personality, not merely how one is perceived by others in a social setting. Charisma is most important for paladins, sorcerers, and bards. It is also important for clerics, since it affects their ability to turn undead. Every creature has a Charisma score.<p class=sub>You apply your character's Charisma modifier to:<ul><li>Bluff, Diplomacy, Disguise, Gather Information, Handle Animal, Intimidate, Perform, and Use Magic Device checks. These are the skills that have Charisma as their key ability.</li><li>Checks that represent attempts to influence others.</li><li>Turning checks for clerics and paladins attempting to turn zombies, vampires, and other undead.</li></ul></p><p class=sub>Sorcerers and bards get bonus spells based on their Charisma scores. The minimum Charisma score needed to cast a sorcerer or bard spell is 10 + the spell's level.</p><p class=sub>Any creature capable of telling the difference between itself and things that are not itself has at least 1 point of Charisma. Anything with no Charisma score is an object, not a creature. Anything without a Charisma score also has no Wisdom score.</p>"

	Wis:
		name: "Wisdom"
		detail: "Wisdom describes a character's willpower, common sense, perception, and intuition. While Intelligence	represents one's ability to analyze information, Wisdom represents being in tune with and aware of one's surroundings. Wisdom is the most important ability for clerics and druids, and it is also important for paladins and rangers. If you want your character to have acute senses, put a high score in Wisdom. Every creature has a Wisdom score.<p class=sub>You apply your character's Wisdom modifier to:<ul><li>Will saving throws (for negating the effect of charm person and other spells).</li><li>Heal, Listen, Profession, Sense Motive, Spot, and Survival checks. These are the skills that have Wisdom as their key ability.</li></ul></p><p class=sub>Clerics, druids, paladins, and rangers get bonus spells based on their Wisdom scores. The minimum Wisdom score needed to cast a cleric, druid, paladin, or ranger spell is 10 + the spell's level.</p><p class=sub>Any creature that can perceive its environment in any fashion has at least 1 point of Wisdom. Anything with no Wisdom score is an object, not a creature. Anything without a Wisdom score also has no Charisma score.</p>"
