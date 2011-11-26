window.session = {}
window.chardata = {}
main = ->
main.load = ->
	window.chardata = log: []
	players_companion = TAFFY.JSON.parse(unescape(get_cookie_data("players_companion"))) or {}
	if players_companion.last_character
		lod players_companion.last_character
		for classname of window.chardata.classes
			char_classes.push classname
		main.do_main()
	else
		window.chardata.options = (if window.chardata.options then window.chardata.options else {})
		load_static_data()
		window.chardata.options.owner = players_companion.owner
		main.do_edit()

main.do_main = ->
	unless is_empty(chardata.classes)
		main.build_main_page()
		main.populate_main_page()
		main.recalc_main_page()
	else
		main.do_edit()

main.do_edit = ->
	edit.build_edit_page()
	edit.populate_edit_page()
	edit.recalc_edit_page()

main.do_feats = ->
	build_feats_page()
	populate_feats_page()

main.do_spells = ->
	edit_spells.build_spells_page()
	edit_spells.populate_spells_page()

main.do_equipment = ->
	edit_equipment.build_equipment_page()
	edit_equipment.populate_equipment_page()
	edit_equipment.recalc_equipment_page()

main.get_rogue_skill_selections = ->
	skill_selections = []
	rogue_special_abilities = window.chardata.rogue_special_abilities
	for i of rogue_special_abilities
		skill_selections = skill_selections.concat(rogue_special_abilities[i].multi)	if rogue_special_abilities[i].special_id == 72
	skill_selections

main.reset_ability_score = (e) ->
	$("input[id='ability_" + e.data.ability + "_score']").val $("#ability_score_full" + id).text()
	window.chardata.abilities["temp_" + e.data.ability] = parseInt($("#ability_score_full" + id).text())
	save_character()
	main.recalc_main_page()

main.recalc_ability_mod = (e) ->
	window.chardata.abilities["temp_" + e.data.ability] = $(this).val()	unless isNaN($(this).val())
	save_character()
	main.recalc_main_page()

main.show_skill_detail = (e) ->
	show_item_detail skills, e.data.skill_id

main.recalc_favored_enemy = (e) ->
	if $(this).attr("checked")
		for j of window.chardata.weapons
			update_weapon_attack j, e.data.mod
			update_weapon_damage j, e.data.mod
		update_skill_ranks [ "Bluff", "Knowledge (arcana)", "Knowledge (architecture and engineering)", "Knowledge (dungeoneering)", "Knowledge (geography)", "Knowledge (history)", "Knowledge (local)", "Knowledge (nature)", "Knowledge (nobility and royalty)", "Knowledge (religion)", "Knowledge (the planes)", "Perception", "Sense Motive", "Survival" ]
	else
		recalc_main_page()

main.build_main_page = ->
	equipment_benefits = {}
	for i of window.chardata.equipment
		if window.chardata.equipment[i].benefits? and window.chardata.equipment[i].benefits.length > 0
			for j of window.chardata.equipment[i].benefits
				equipment_benefits[chardata.equipment[i].benefits[j].id] = 0	unless equipment_benefits[chardata.equipment[i].benefits[j].id]?
				equipment_benefits[chardata.equipment[i].benefits[j].id] += parseInt(chardata.equipment[i].benefits[j].mod)
	session["armor"] = []
	for i of window.chardata.armors
		session["armor"][i] = {}
		session["armor"][i]["is_worn"] = true
	session["shield"] = []
	for i of window.chardata.shields
		session["shield"][i] = {}
		session["shield"][i]["is_worn"] = true
	set_links_part 0
	$("#content").html $.ajax(
		url: "main.html",
		dataType: "html"
	)
	$("#ability_score_full0").bind "click", 
		ability: "Str"
		id: 0
	, (e) ->
		main.reset_ability_score e
	
	$("input[id='ability_Str_score']").bind "blur", ability: "Str", (e) ->
		main.recalc_ability_mod e
	
	$("#ability_score_full1").bind "click", 
		ability: "Dex"
		id: 1
	, (e) ->
		main.reset_ability_score e
	
	$("input[id='ability_Dex_score']").bind "blur", ability: "Dex", (e) ->
		main.recalc_ability_mod e
	
	$("#ability_score_full2").bind "click", 
		ability: "Int"
		id: 2
	, (e) ->
		main.reset_ability_score e
	
	$("input[id='ability_Int_score']").bind "blur", ability: "Int", (e) ->
		main.recalc_ability_mod e
	
	$("#ability_score_full3").bind "click", 
		ability: "Con"
		id: 3
	, (e) ->
		main.reset_ability_score e
	
	$("input[id='ability_Con_score']").bind "blur", ability: "Con", (e) ->
		main.recalc_ability_mod e
	
	$("#ability_score_full4").bind "click", 
		ability: "Cha"
		id: 4
	, (e) ->
		main.reset_ability_score e
	
	$("input[id='ability_Cha_score']").bind "blur", ability: "Cha", (e) ->
		main.recalc_ability_mod e
	
	$("#ability_score_full5").bind "click", 
		ability: "Wis"
		id: 5
	, (e) ->
		main.reset_ability_score e
	
	$("input[id='ability_Wis_score']").bind "blur", ability: "Wis", (e) ->
		main.recalc_ability_mod e
	
	window.chardata.skills = new TAFFY([])	unless window.chardata.skills?
	rogue_skill_selections = main.get_rogue_skill_selections()
	skills.forEach (skill, i) ->
		skill_html = []
		skill_selection_ind_html = (if rogue_skill_selections.indexOf(skill._id) > -1 then "<sup>+</sup>" else "")
		if skill.subtypes
			char_skill = window.chardata.skills.first(skill_name: skill.name)
			if char_skill
				for subtype of char_skill.subtypes
					skill_html = main.build_skill_entry skill, skill_selection_ind_html, subtype
		else
			skill_html = main.build_skill_entry skill, skill_selection_ind_html
			
		$("#skills_table").append skill_html.join("")
		$("a[id='skill_" + skill._id + "']").bind "click", skill_id: skill._id, (e) -> 
			main.show_skill_detail e

	
	$("#temp_hp").bind "blur", ->
		unless isNaN($(this).val())
			window.chardata.temp_hp = $(this).val()
			save_character()
	
	$("#subdual_hp").bind "blur", ->
		unless isNaN($(this).val())
			window.chardata.subdual_hp = $(this).val()
			save_character()
	
	$("#plus_att").bind "click", ->
		adjust_mod "attack", 1
	
	$("#minus_att").bind "click", ->
		adjust_mod "attack", -1
	
	$("#plus_dam").bind "click", ->
		adjust_mod "damage", 1
	
	$("#minus_dam").bind "click", ->
		adjust_mod "damage", -1
	
	feats_html = ""
	conditional_feats = []
	for classname of window.chardata.classes
		clazz = classes.first(name: classname)
		if clazz.custom and clazz.custom.main and clazz.custom.main.before_specials
			for script of clazz.custom.main.before_specials
				clazz.custom.main.before_specials[script]()
	char_feats = get_char_feats().get()
	i = 0
	
	while i < char_feats.length
		feat = feats.first(name: char_feats[i].name)
		conditional_feats.push feat	if feat and feat.conditional
		i++
	if conditional_feats.length > 0
		for i of conditional_feats
			checkbox = (if conditional_feats[i].op? then [ "<input id='feat_", conditional_feats[i]._id, "_conditional' type='checkbox' onclick=\"", conditional_feats[i].op, "\"/>" ].join("") else "")
			$("#conditional_feats").append [ "<tr id='feat_", conditional_feats[i]._id, "'><td>", checkbox, "</td><td class='seamless' valign='top'><a id='feat_", conditional_feats[i]._id, "'class='fake_link'>", conditional_feats[i].name, "</a></td><td	class='seamless' style='width: 100%'>", conditional_feats[i].summary, "</td></tr>" ].join("")
			$("a[id='feat_" + conditional_feats[i]._id + "']").bind "click", id: conditional_feats[i]._id, (e) ->
				show_item_detail feats, e.data.id
	else
		$("#featspart").hide()
	$("tr[id^='feat']:odd").css "background-color", "#EFF1F1"
	$("#conditional_feats").hide()

	class_specials = get_special_abilities()
	# do_class_functions("main", "before_specials", window.chardata.weapons)
	if count_attrs(class_specials) > 0
		$("#specials_heading").bind "click", (e) ->
			toggle_visible "specials"
		
		for i of class_specials
			if class_specials[i] and not class_specials[i].hide
				checkbox = (if class_specials[i].op? then [ "<input id='special_", class_specials[i]._id, "' type='checkbox' onclick=\"", class_specials[i].op, "\"/>" ].join("") else "")
				$("#specials").append [ "<tr id='special_", class_specials[i]._id, "'><td style='padding: 3px 0px;'>", checkbox, "</td><td class='seamless' style='width: 100%;'><a class='fake_link' onclick='show_item_detail(specials, \"" + class_specials[i]._id + "\")'>", class_specials[i].name, (if not class_specials[i].mod? then "" else [ " ", class_specials[i].mod, "</a></td></tr>" ].join("")) ].join("")
				$("a[id='special_" + class_specials[i]._id + "']").bind "click", id: class_specials[i]._id, (e) ->
					show_item_detail specials, e.data.id
	else
		$("#specialpart").hide()
	$("tr[id^='special']:odd").css "background-color", "#EFF1F1"
	$("#specials").hide()
	window.chardata.weapons = []	unless window.chardata.weapons
	char_weapons = do_class_functions("main", "before_weapons_build", window.chardata.weapons)
	html = []
	for j of char_weapons
		weapon_data = weapons.first(name: char_weapons[j]["weapon_name"])
		html.push [ "<table width='100%' border='0' margin='0'><tr><td id='weapon_", j, "_name' weapon_id='", weapon_data._id, "' colspan='4' bgcolor='#C5C6F6'></td></tr><tr><td width='22px'>Att</td><td id='weapon_", j, "_att' class='box'></td><td	width='20px'>Crit</td><td id='weapon_", j, "_crit' class='box' width='50px'></td></tr><tr><td width='22px'>Dam</td><td id='weapon_", j, "_dam' class='box'></td><td width='20px'>Bon</td><td id='weapon_", j, "_bon' class='box'></td></tr><tr id='weapon_", j, "_note'><td id='weapon_", j, "_note' colspan='4' width='100%' style='padding-left: 10px'></td></tr></table>" ].join("")
	$("#weaponspart").html html.join("")
	$("#weaponspart").css "margin-top", "5px"
	html = []
	for j of window.chardata.armors
		armor_data = armors.first(name: window.chardata.armors[j]["armor_name"])
		html.push [ "<table width='100%' border='0' margin='0'><tr id='armor_", j, "' armor_idx='", j, "' onclick=\"var chk=$('#armor_", j, "_is_worn_check'); session['armor'][", j, "]['is_worn']=!session['armor'][", j, "]['is_worn']; chk.attr('src', 'images/'+ (session['armor'][", j, "]['is_worn'] ? 'checked' : 'unchecked') + '.png'); recalc_main_page();\"><td colspan='4' bgcolor='#C5C6F6'><img id='armor_", j, "_is_worn_check' armor_idx='", j, "' src='images/", (if session["armor"][j]["is_worn"] then "checked" else "unchecked"), ".png' style='float: right; margin-right: 3px; margin-left: 2px; margin-bottom: 1px; margin-top: 1px'/><label style='float: right; margin-bottom: 0px; margin-top: 1px; vertical-align: middle' class='fake_link'>worn:</label><span id='armor_", j, "_name'	class='fake_link'></span></td></tr><tr><td>Bon</td><td id='armor_", j, "_bon' class='box' width='50%'></td><td>ACP</td><td id='armor_", j, "_acp'	class='box' width='50%'></td></tr><tr id='armor_", j, "_note'><td valign='top'>Note</td><td colspan='3' id='armor_", j, "_note' width='100%'></td></tr></table>" ].join("")
	$("#armorpart").html html.join("")
	$("#armorpart").css "margin-top", "5px"
	html = []
	for j of window.chardata.shields
		shield_data = shields.first(_id: window.chardata.shields[j]["shield_id"])
		html.push [ "<table width='100%' border='0' margin='0'><tr id='shield_", j, "' shield_idx='", j, "' onclick=\"var chk=$('#shield_", j, "_is_worn_check'); session['shield'][", j, "]['is_worn']=!session['shield'][", j, "]['is_worn']; chk.attr('src', 'images/'+ (session['shield'][", j, "]['is_worn'] ? 'checked' : 'unchecked') + '.png'); recalc_main_page();\"><td colspan='4' bgcolor='#C5C6F6'><img id='shield_", j, "_is_worn_check' shield_idx='", j, "' src='images/", (if session["shield"][j]["is_worn"] then "checked" else "unchecked"), ".png' style='float: right; margin-right: 3px; margin-left: 2px; margin-bottom: 1px; margin-top: 1px;'/><label style='float: right; margin-bottom: 0px; margin-top: 1px; vertical-align: middle' class='fake_link'>worn:</label><span id='shield_", j, "_name'	class='fake_link'></span></td></tr><tr><td>Bon</td><td id='shield_", j, "_bon' class='box' width='50%'></td><td>ACP</td><td id='shield_", j, "_acp'	class='box' width='50%'></td></tr><tr id='shield_", j, "_note'><td valign='top'>Note</td><td colspan='3' id='shield_" + j + "_note' width='100%'></td></tr></table>" ].join("")
	$("#shieldspart").html html.join("")
	$("#shieldspart").css "margin-top", "5px"
	char_domains = []
	for domain of window.chardata.domains
		domain = domains.first(name: window.chardata.domains[domain])
		char_domains.push domain
	for classname of window.chardata.classes
		clazz = classes.first(name: classname)
	$("#spellspart").css "margin-top", "10px"
	$("#spellspart").html ""
	for classname of window.chardata.classes
		clazz = classes.first(name: classname)
		window.chardata.classes[classname].spells = [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]	if clazz.spells_known and not window.chardata.classes[classname].spells
		all_spells = $.merge([], (if clazz.spells_known then window.chardata.classes[classname].spells else clazz.spells))
		if clazz.custom and clazz.custom.main and clazz.custom.main.before_spells
			for script of clazz.custom.main.before_spells
				clazz.custom.main.before_spells[script] all_spells
		spells_per_day = clazz.spells_per_day[chardata.classes[classname].level]
		if spells_per_day? and spells_per_day.length > 0
			spells_html = [ "<table style='border: 1px solid #D0D0D0' width='100%' border='0' margin='0'><tr bgcolor='#8DC3E9'><td colspan='", (spells_per_day.length), "'><span id='etc' style='float: right'></span>Spells per day (", clazz.shortname, ") &nbsp;" ]
			if classname == "Cleric"
				spells_html.push "<span style='float: right; padding-right: 3px;'>+1 "
				for domain of char_domains
					spells_html.push [ "<i><a class='fake_link' onclick=\"show_item_detail(domains, '", char_domains[domain]._id, "')\">", char_domains[domain].name, "</a></i> " ].join("")
				spells_html.push "</span>"
			spells_html.push "</td></tr></table><table style='border: 1px solid #D0D0D0' width='100%' border='0' margin='0'><tr>"
			for i of spells_per_day
				spells_html.push [ "<td id='spd_level_", clazz.shortname, i, "' align='center'>", i, "</td>" ].join("")
			spells_html.push "</tr><tr>"
			for i of spells_per_day
				spells_html.push [ "<td id='spd_count_", clazz.shortname, i, "' align='center'></td>" ].join("")
			spells_html.push "</tr></table><table style='border: 1px solid #D0D0D0' width='100%' border='0' margin='0'>"
			for level of spells_per_day
				unless spells_per_day[level] == "-"
					spells_html.push [ "<tr onclick=\"toggle_visible('spell_lvl_", clazz.shortname, level, "')\"><td bgcolor='#8DC3E9' colspan='2'><span id='spell_lvl_", clazz.shortname, level, "_expand_flag' style='float: right'><img src='images/expanded.png'/></span>", level, "</td></tr><tbody id='spell_lvl_", clazz.shortname, level, "'><tr>" ].join("")
					clazz_spells = (if all_spells[level] then all_spells[level].slice(0) else [])
					if level > 0
						for domain of char_domains
							clazz_spells.push spells.first(name: char_domains[domain].spells[level - 1]).name	if clazz_spells.indexOf(char_domains[domain].spells[level - 1]) == -1
					clazz_spells.sort()
					main.print_spells clazz_spells, clazz, spells_html, level, char_domains
					spells_html.push "</tr></tbody>"
			spells_html.push "</tr></table>"
			$("#spellspart").append spells_html.join("")
	for classname of window.chardata.classes
		clazz = classes.first(name: classname)
		if clazz.custom and clazz.custom.main and clazz.custom.main.before_spells
			for script of clazz.custom.main.after_spells
				clazz.custom.main.after_spells[script]()

main.print_spells = (spell_list, clazz, spells_html, level, char_domains) ->
	spells_printed = 0
	for i of spell_list
		if not clazz.spells_known or window.chardata.classes[classname].spells[level].indexOf(spell_list[i]) > -1
			spell = spells.first(name: spell_list[i])
			for j of spell.descriptors
				return	if spell.descriptors[j] != window.chardata.alignment and goodness.find(spell.descriptors[j]) != window.chardata.goodness
			domain_highlight = false
			for domain of char_domains
				if (classname == "Paladin" or classname == "Cleric") and spell.name == char_domains[domain].spells[level - 1]
					domain_highlight = true
					break
			spells_html.push [ "<td><a id='spell_", spell._id, "' class='fake_link' onclick='show_item_detail(spells, \"", spell._id, "\")'>", (if domain_highlight then "<i>" else ""), spell.name, (if domain_highlight then "</i>" else ""), "</a></td>" ].join("")
			spells_html.push "</tr><tr>"	if spells_printed % 2 == 1
			spells_printed++
	spells_html

main.build_skill_entry = (skill, skill_selection_ind_html, subtype) ->
	return [ "<tr id='skill_", skill._id, "_row'" + (if subtype then " subtype='" + subtype + "'" else "") + ">", "<td><a id='skill_", skill._id, "' class='fake_link'>", skill.name, (if subtype then " (" + subtype + ")" else ""), skill_selection_ind_html, "</a></td>", "<td id='skill_", skill._id, "_ranks' align='right' valign='top' skill_id='", skill._id, "'" + (if subtype then " subtype='" + subtype + "'" else "") + " nowrap></td></tr>" ]

main.adjust_mod = (type, magnitude) ->
	curr_val = parseInt($("#" + type + "_mod").text())
	$("#" + type + "_mod").text pos(curr_val + magnitude)
	recalc_main_page()

main.populate_main_page = ->
	race = races.first(name: window.chardata.race_name)
	$("#char_name").text window.chardata.name
	$("#hp").text (if not window.chardata.hp? or window.chardata.hp.length <= 0 then 0 else calc_hp(chardata.hp, window.chardata.feats))
	$("#temp_hp").val window.chardata.temp_hp or $("#hp").text() or 0
	$("#subdual_hp").val window.chardata.subdual_hp or $("#subdual_hp").text() or 0
	$("input[id='hp']").val (if not window.chardata.hp? or window.chardata.hp.length <= 0 then 0 else window.chardata.hp)
	$("#level").text calc_level() + 1
	allabilities = window.chardata.abilities
	for ability of abilities
		ability_score = calc_ability_score(ability, window.chardata.race_name)
		$("#ability_score_full_" + ability).text ability_score
		$("#ability_" + ability + "_score").val window.chardata.abilities["temp_" + ability] or ability_score
		ability_mod = calc_ability_modifier($("#ability_" + ability + "_score").val())
		$("#ability_" + ability + "_mod").text pos(ability_mod)
	char_weapons = do_class_functions("main", "before_weapons_populate", window.chardata.weapons)
	for j of char_weapons
		weapon_data = weapons.first(name: char_weapons[j].weapon_name)
		$("#weapon_" + j + "_name").text (if char_weapons[j].name? then char_weapons[j].name + (if char_weapons[j].name.indexOf(weapon_data.name) == -1 then " (" + weapon_data.name + ")" else "") else weapon_data.name)
		$("#weapon_" + j + "_crit").text main.calc_critical(weapon_data.crit, char_weapons[j], window.chardata.feats)
		$("#weapon_" + j + "_bon").text (if char_weapons[j].att? then char_weapons[j].att else "")
		$("td[id='weapon_" + j + "_note']").text char_weapons[j].note
		note = char_weapons[j].note
		note = note()	if $.isFunction(note)
		$("tr[id='weapon_" + j + "_note']").toggle note and note.length > 0
	for j of window.chardata.armors
		armor_data = armors.first(name: window.chardata.armors[j]["armor_name"])
		$("#armor_" + j + "_name").text (if window.chardata.armors[j].name? then window.chardata.armors[j].name + (if window.chardata.armors[j].name.indexOf(armor_data.name) == -1 then " (" + armor_data.name + ")" else "") else armor_data.name)
		$("#armor_" + j + "_bon").text armor_data.bon
		$("#armor_" + j + "_acp").text armor_data.acp
		$("#armor_" + j + "_note").text window.chardata.armors[j]["notes"]
		$("tr[id='armor_" + j + "_note']").toggle window.chardata.armors[j].note? and window.chardata.armors[j].note.length > 0
	for j of window.chardata.shields
		shield_data = shields.first(name: window.chardata.shields[j]["shield_name"])
		$("#shield_" + j + "_name").text (if window.chardata.shields[j].name? then window.chardata.shields[j].name + (if window.chardata.shields[j].name.indexOf(shield_data.name) == -1 then " (" + shield_data.name + ")" else "") else shield_data.name)
		$("#shield_" + j + "_bon").text shield_data.bon
		$("#shield_" + j + "_acp").text shield_data.acp
		$("#shield_" + j + "_note").text window.chardata.shields[j]["notes"]
		$("tr[id='shield_" + j + "_note']").toggle window.chardata.shields[j].note? and window.chardata.shields[j].note.length > 0
	drs = do_class_functions("main", "damage_reduction", window.chardata.dr)
	dr_count = count_attrs(drs)
	row_cnt = 0
	col_cnt = 0
	$("#dr").append "<tr id='dr_0'>"
	for dr of damage_reductions
		console.log damage_reductions[dr] + ": " + drs[damage_reductions[dr]] + " ____	" + equipment_benefits[damage_reductions[dr]]
		if drs[damage_reductions[dr]] or equipment_benefits[damage_reductions[dr]]
			col_cnt++
			console.log row_cnt + ": " + $("#dr" + row_cnt)
			$("#dr_" + row_cnt).append "<td style='width: 25%;'>" + capitalize(damage_reductions[dr]) + "</td><td id='" + damage_reductions[dr] + "' style='width: 25%;' class='box numeric' nowrap>" + pos((if drs[damage_reductions[dr]] then drs[damage_reductions[dr]] else 0) + calc_dr(damage_reductions[dr])) + "</td>"
			if col_cnt and col_cnt % 2 == 0
				$("#dr").append "</tr>"
				row_cnt++
				$("#dr").append "<tr id='dr_" + (row_cnt) + "'>"
	$("#dr_" + (row_cnt)).append "<td style='width: 25%'>&nbsp;</td><td style='width: 25%'>&nbsp;</td>"	unless col_cnt % 2 == 0
	$("#dr").append "</tr>"
	$("#dr_" + row_cnt).remove()	unless $("#dr_" + (row_cnt)).children().length
	$("#dr").hide()	unless col_cnt
	saves = do_class_functions("main", "save", window.chardata.save)
	saves_count = count_attrs(saves)
	row_cnt = 0
	col_cnt = 0
	$("#saves").append "<tr id='save_0'>"
	for save of save_against
		console.log save_against[save] + ": " + saves[save_against[save]] + " ____	" + equipment_benefits[save_against[save]]
		if saves[save_against[save]] or equipment_benefits[save_against[save]]
			col_cnt++
			console.log row_cnt + ": " + $("#save_" + row_cnt)
			val = (if saves[save_against[save]] == "imm" then "imm" else pos((if saves[save_against[save]] then saves[save_against[save]] else 0) + calc_dr(save_against[save])))
			$("#save_" + row_cnt).append "<td style='width: 25%;'>" + capitalize(save_against[save]) + "</td><td id='" + save_against[save] + "' style='width: 25%;' class='box numeric' nowrap>" + val + "</td>"
			if col_cnt and col_cnt % 2 == 0
				$("#save").append "</tr>"
				row_cnt++
				$("#save").append "<tr id='save_" + (row_cnt) + "'>"
	$("#save_" + (row_cnt)).append "<td style='width: 25%'>&nbsp;</td><td style='width: 25%'>&nbsp;</td>"	unless col_cnt % 2 == 0
	$("#saves").append "</tr>"
	$("#save_" + row_cnt).remove()	unless $("#save_" + (row_cnt)).children().length
	$("#saves").hide()	unless col_cnt

main.recalc_main_page = ->
	str_score = window.chardata.abilities["Str_curr"] = $("#ability_Str_score").val()
	dex_score = window.chardata.abilities["Dex_curr"] = $("#ability_Dex_score").val()
	int_score = window.chardata.abilities["Int_curr"] = $("#ability_Int_score").val()
	con_score = window.chardata.abilities["Con_curr"] = $("#ability_Con_score").val()
	cha_score = window.chardata.abilities["Cha_curr"] = $("#ability_Cha_score").val()
	wis_score = window.chardata.abilities["Wis_curr"] = $("#ability_Wis_score").val()
	level = calc_level()
	main.update_ability "Str"
	main.update_ability "Dex"
	main.update_ability "Int"
	main.update_ability "Con"
	main.update_ability "Cha"
	main.update_ability "Wis"
	base_attack_bonuses = calc_base_attack_bonus()
	char_weapons = do_class_functions("main", "before_weapons_recalc", window.chardata.weapons)
	for j of char_weapons
		weapon = weapons.first(_id: $("#weapon_" + j + "_name").attr("weapon_id"))
		$("#weapon_" + j + "_att").text calc_attack(base_attack_bonuses, weapon, window.chardata.weapons[j], parseInt($("#attack_mod").text()))
		$("#weapon_" + j + "_dam").text calc_damage(weapon, window.chardata.feats, window.chardata.weapons[j])
	for j of window.chardata.armors
		armor_data = armors.first(name: window.chardata.armors[j].armor_name)
		$("#armor_" + j + "_bon").text armor_data.armor_bonus
		$("#armor_" + j + "_acp").text armor_data.armor_check_penalty
	for j of window.chardata.shields
		shield_data = shields.first(name: window.chardata.shields[j].shield_name)
		$("#shield_" + j + "_bon").text shield_data.shield_bonus
		$("#shield_" + j + "_acp").text shield_data.shield_check_penalty
	acp = calc_armor_acp(chardata.armors)
	acp += calc_shield_acp(chardata.shields)
	skills.forEach (skill, i) ->
		if skill.subtypes
			char_skill = window.chardata.skills.first(skill_name: skill.name)
			if char_skill
				for subtype of char_skill.subtypes
					populate_skill_entry skill, acp, subtype
		else
			main.populate_skill_entry skill, acp
	
	$("#ac").text calc_ac(dex_score)
	$("#init").text calc_init(dex_score)
	$("#fort").text calc_fort(con_score, window.chardata.class_name, window.chardata.xp, window.chardata.feats)
	$("#ref").text calc_ref(dex_score, window.chardata.class_name, window.chardata.xp, window.chardata.feats)
	$("#will").text calc_will(wis_score, window.chardata.class_name, window.chardata.xp, window.chardata.feats)
	$("#turn").text (if window.chardata.class_id == 2 then "Turn: " + calc_turn(cha_score) else "")
	$("#touch").text calc_touch_ac(dex_score, window.chardata.race_id, window.chardata.feats)
	$("#flat").text calc_flat_footed_ac(chardata.armors)
	$("#cmb").text calc_cmb(calc_base_attack_bonus())
	$("#cmd").text calc_cmd(calc_base_attack_bonus())
	-$("#spell_resistance").text(calc_spell_resistance() + "%")
	for i of base_attack_bonuses
		base_attack_bonuses[i] = pos(base_attack_bonuses[i])
	$("#base_attack_bonus").text base_attack_bonuses.join("/")
	for classname of window.chardata.classes
		clazz = classes.first(name: classname)
		spells_per_day = clazz.spells_per_day[chardata.classes[classname].level]
		for i of spells_per_day
			$("#spd_count_" + clazz.shortname + i).text spells_per_day[i]

main.populate_skill_entry = (skill, acp, subtype) ->
	subtype_selector = ""
	subtype_selector = "][subtype='" + subtype + "'"	if subtype
	skill_ability_score = $("#ability_" + skill.ability + "_score").val()
	skill_mod = calc_skill_mod(skill, skill_ability_score, acp, subtype)
	$("[id='skill_" + skill._id + "_ranks'" + subtype_selector + "]").text pos(skill_mod)
	$("[id='skill_" + skill._id + "_row'" + subtype_selector + "]").toggle skill_mod != 0

main.update_ability = (id) ->
	class_val = {}
	class_val[id] = base: 0
	class_val = do_class_functions("main", id, class_val)
	ability_val = calc_ability_score(id)
	mod = calc_ability_modifier(ability_val + (class_val[id].base | 0)) + (class_val[id].mod | 0)
	$("#ability_" + id + "_mod").text pos(mod)
	$("#ability_score_full_" + id).text ability_val + (class_val[id].base | 0)

main.calc_turn = (cha_score) ->
	know_religion = skills.first(name: "Knowledge (religion)")
	char_know_religion = false
	char_know_religion = window.chardata.skills.first(skill_name: know_religion.name)	if window.chardata.skills?
	feat_mod = 0
	char_feats = get_char_feats()
	char_feats.get(turn: "!is": null).forEach (feat, i) ->
		feat_mod = feat.critical(feat_mod)
		feat_mod
	
	char_know_rel_pnts = (if char_know_religion then char_know_religion.ranks else 0)
	skill_bonus = (if calc_ranks(chardata.class_name, char_know_rel_pnts, know_religion) >= 5 then 2 else 0)
	cha_score = $("#ability_4_score").val()
	Math.max 3 + calc_ability_modifier(cha_score) + skill_bonus + feat_mod, 0

main.calc_hp = (hp, char_feats) ->
	feat_mod = 0
	char_feats = get_char_feats()
	char_feats.get(hp: "!is": null).forEach (feat, i) ->
		feat_mod = feat.hp(feat_mod)
		feat_mod
	
	parseInt(hp) + feat_mod

main.calc_critical = (weapon_critical, char_weapon, char_feats) ->
	critical = (if not char_weapon.crit? then weapon_critical else char_weapon.crit)
	char_feats = get_char_feats()
	char_feats.get(critical: "!is": null).forEach (feat, i) ->
		critical = feat.critical(critical)
		critical
	
	critical

main.update_weapon_attack = (weapon_idx, mod) ->
	attacks = $("#weapon_" + weapon_idx + "_att").text()
	attacks = attacks.split("/")
	updated_attacks = ""
	for j of attacks
		updated_attacks += pos(parseInt(attacks[j]) + mod)
		updated_attacks += (if parseInt(j) + 1 < attacks.length then "/" else "")
	$("#weapon_" + weapon_idx + "_att").text updated_attacks

main.update_weapon_damage = (weapon_idx, mod) ->
	damage = ""
	weapon_damage = $("#weapon_" + weapon_idx + "_dam").text().split("/")
	for i of weapon_damage
		pos_neg = weapon_damage[i].match(/\+|-/)
		dam_components = weapon_damage[i].split(/\+|-/)
		die = dam_components[0]
		weapon_mod = (if dam_components.length > 1 then parseInt((if pos_neg != -1 then pos_neg else "") + dam_components[1]) else 0)
		damage += die + pos(mod + weapon_mod)
		damage += (if parseInt(i) + 1 < weapon_damage.length then "/" else "")
	$("#weapon_" + weapon_idx + "_dam").text damage

main.update_skill_ranks = (skills_) ->
	for i of skills_
		skill_id = skills.first(name: skills_[i])._id
		ranks = parseInt($("#skill_" + skill_id + "_ranks").text()) + 2
		$("#skill_" + skill_id + "_ranks").text pos(ranks)

main.calc_grapple = ->
	grapple = ""
	race = races.first(name: window.chardata.race_name)
	str_score = calc_ability_modifier(parseInt($("#ability_Str_score").val()))
	babs = calc_base_attack_bonus()
	feat_mod = 0
	char_feats = get_char_feats()
	char_feats.get(grapple: "!is": null).forEach (feat, i) ->
		feat_mod = feat.grapple(feat_mod)
		feat_mod
	
	i = 0
	
	while i < babs.length
		grapple += pos(str_score + babs[i] + grapple_size_mod[race.size] + feat_mod)
		grapple += (if i + 1 < babs.length then "/" else "")
		i++
	grapple
