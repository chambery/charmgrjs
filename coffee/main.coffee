main = exports ? this
load = ->
	session = {}
	window.chardata = log: []
	players_companion = TAFFY.JSON.parse(unescape(get_cookie_data("players_companion"))) or {}
	if players_companion.last_character
		lod players_companion.last_character
		for classname of chardata.classes
			char_classes.push classname
		do_main()
	else
		chardata.options = {}
		load_static_data()
		chardata.options.owner = players_companion.owner
		do_edit()
do_main = ->
	unless is_empty(chardata.classes)
		build_main_page()
		populate_main_page()
		recalc_main_page()
	else
		do_edit()
		
do_edit = ->
	build_edit_page()
	populate_edit_page()
	recalc_edit_page()
	
do_feats = ->
	build_feats_page()
	populate_feats_page()
	
do_spells = ->
	build_spells_page()
	populate_spells_page()
	
do_equipment = ->
	build_equipment_page()
	populate_equipment_page()
	recalc_equipment_page()
	
get_rogue_skill_selections = ->
	skill_selections = []
	rogue_special_abilities = chardata.rogue_special_abilities
	for i of rogue_special_abilities
		skill_selections = skill_selections.concat(rogue_special_abilities[i].multi)	if rogue_special_abilities[i].special_id == 72
	skill_selections
	
reset_ability_score = (e) ->
	$("input[id='ability_#{e.data.ability}_score']").val $("#ability_score_full" + id).text()
	chardata.abilities["temp_" + e.data.ability] = parseInt($("#ability_score_full" + id).text())
	save_character()
	recalc_main_page()
	
recalc_ability_mod = (e) ->
	chardata.abilities["temp_" + e.data.ability] = $(this).val() unless isNaN($(this).val())
	save_character()
	recalc_main_page()
	
show_skill_detail = (e) ->
	show_item_detail skills, e.data.skill_id
	
recalc_favored_enemy = (e) ->
	if $(this).attr("checked")
		for j of chardata.weapons
			update_weapon_attack j, e.data.mod
			update_weapon_damage j, e.data.mod
		update_skill_ranks [ "Bluff", "Knowledge (arcana)", "Knowledge (architecture and engineering)", "Knowledge (dungeoneering)", "Knowledge (geography)", "Knowledge (history)", "Knowledge (local)", "Knowledge (nature)", "Knowledge (nobility and royalty)", "Knowledge (religion)", "Knowledge (the planes)", "Perception", "Sense Motive", "Survival" ]
	else
		recalc_main_page()
		
build_main_page = ->
	equipment_benefits = {}
	for i, equipment of chardata.equipment
		for j, benefit of equipment.benefits
			equipment_benefits[benefit.id] = 0	unless equipment_benefits[benefit.id]?
			equipment_benefits[benefit.id] += parseInt(benefit.mod)

	session["armor"] = []
	for i of chardata.armors
		session["armor"][i] = {}
		session["armor"][i]["is_worn"] = true
		
	session["shield"] = []
	for i of chardata.shields
		session["shield"][i] = {}
		session["shield"][i]["is_worn"] = true

	set_links_part 0
	$("#content").html "
		<div id='topline'></div> 
		<div id='topleceilft' class='dp66'> 
			<div id='abilitiespart' class='dp40' style='float: left'> 
				<table border=0 id='abilities_table'> 
					<tr> <td id='char_name' colspan='4' style='font-weight: bold; color: blue'></td> </tr> 
					<tr> <td><b>Str</b></td> <td id='ability_score_full_Str' nowrap></td> <td><input ability='Str' id='ability_Str_score' class='two_digit' value='' type='text'></td> <td id='ability_Str_mod' align='right' nowrap></td> </tr>
					<tr> <td><b>Dex</b></td> <td id='ability_score_full_Dex' nowrap></td> <td><input ability='Dex' id='ability_Dex_score' class='two_digit' value='' type='text'></td> <td id='ability_Dex_mod' align='right' nowrap></td> </tr>
					<tr> <td><b>Int</b></td> <td id='ability_score_full_Int' nowrap></td> <td><input ability='Int' id='ability_Int_score' class='two_digit' value='' type='text'></td> <td id='ability_Int_mod' align='right' nowrap></td> </tr>
					<tr> <td><b>Con</b></td> <td id='ability_score_full_Con' nowrap></td> <td><input ability='Con' id='ability_Con_score' class='two_digit' value='' type='text'></td> <td id='ability_Con_mod' align='right' nowrap></td> </tr>
					<tr> <td><b>Cha</b></td> <td id='ability_score_full_Cha' nowrap></td> <td><input ability='Cha' id='ability_Cha_score' class='two_digit' value='' type='text'></td> <td id='ability_Cha_mod' align='right' nowrap></td> </tr>
					<tr> <td><b>Wis</b></td> <td id='ability_score_full_Wis' nowrap></td> <td><input ability='Wis' id='ability_Wis_score' class='two_digit' value='' type='text'></td> <td id='ability_Wis_mod' align='right' nowrap></td> </tr>
					<tr><td colspan=3>Speed: <span id='speed'></span></td></tr> 
				</table> 
			</div> 
			<div id='middlepart' class='dp60' style='float: left;'> 
				<table id='middle_table' style='table-layout: fixed; width: 100%'> 
					<tr> <td colspan=4 style='padding: 0px;'> <table border=0 style='padding: 0px; width: 100%;'> 
							<tr> <td align='left'>HP</td> <td id='hp' align='right'></td> <td align='right'><input id='temp_hp' style='width: 2em;text-align: center;' type='text' value='' /></td> <td align='right'>SD <input id='subdual_hp' style='width: 15px; text-align: center' type='text' value='' /></td> </tr>
					</table> </td> </tr> 
					<tr> <td colspan='4'></td> </tr> 
					<tr> <td>Fort</td> <td id='fort' class='box numeric' style='width: 30px;' nowrap></td> <td>AC</td> <td id='ac' class='box numeric' style='width: 30px;'></td> </tr>
					<tr> <td>Ref</td> <td id='ref' class='box numeric' nowrap></td> <td>Tch</td> <td id='touch' class='box numeric' nowrap></td> </tr>
					<tr> <td>Will</td> <td id='will' class='box numeric' nowrap></td> <td>Flat</td> <td id='flat' class='box numeric' nowrap></td> </tr> 
					<tr> <td>SR</td> <td id='spell_resistance' class='box numeric' nowrap></td> <td>Init</td> <td id='init' class='box numeric'></td> </tr>
					<tr><td colspan=4><table id='dr' style='border: 1px LightGrey solid; width: 100%; margin-top: 3px; margin-bottom: 3px;'></table></td></tr>
					<tr><td colspan=4><table id='saves' style='border: 1px LightGrey solid; width: 100%; margin-top: 3px; margin-bottom: 3px;'></table></td></tr>
					<tr> <td>CMB</td> <td id='cmb' class='box' colspan=3></td> </tr><tr> <td>CMD</td> <td id='cmd' class='box' colspan=3></td> </tr> 
					<tr> <td>BAB</td> <td id='base_attack_bonus' class='box' colspan=3></td> </tr>
					<tr> <td colspan='4'></td> </tr> 
					<tr> <td>Att</td> <td id='attack_mod'>0</td> <td><a id='plus_att' class='btn box' style='font-family: monospace; font-size: larger; width: 20px'> + </a></td> <td style='text-align: right'><a id='minus_att' class='btn box' style='font-family: monospace; font-size: larger; width: 20px'> - </a></td> </tr>
					<tr> <td>Dam</td> <td id='damage_mod'>0</td> <td><a id='plus_dam' class='btn box' style='font-family: monospace; font-size: larger; width: 20px'> + </a></td> <td style='text-align: right'><a id='minus_dam' class='btn box' style='font-family: monospace; font-size: larger; width: 20px'> - </a></td> </tr> 
				</table> 
			</div> 
			<div id='featspart' class='dp100'> 
				<table style='width: 100%; margin: 0px 0px 5px 0px; border-collapse: collapse;' border='0'> <tbody> 
					<tr onclick=\"toggle_visible('conditional_feats')\"> <td colspan='3' bgcolor='#8DC3E9'><span id='conditional_feats_expand_flag' style='float: right; vertical-align: middle'><img src='images/collapsed.png' /></span><a class='fake_link'>Feats</a></td> </tr>
				</tbody> 
				<tbody id='conditional_feats'></tbody> </table>
			</div> 
			<div id='specialpart' class='dp100'> 
				<table id='specials_table' style='width: 100%; border: 0px; margin: 0px 0px 5px 0px; border-collapse: collapse;'> 
					<tr id='specials_heading' style='background-color: #8DC3E9'> <td colspan='2'><span id='specials_expand_flag' style='float: right'><img src='images/collapsed.png' /></span><a class='fake_link'>Special Abilities</a></td> </tr>
					<tbody id='specials'></tbody> 
				</table> 
			</div> 
			<div id='weaponspart' class='dp100'></div> 
			<div id='armorpart' class='dp100'></div> 
			<div id='shieldspart' class='dp100'></div> 
			<div id='spellspart' class='dp100'></div> 
		</div> 
		<div id='skillspart' class='dp33'> 
			<table border='0' id='skills_table'></table> 
		</div>"
	$("#ability_score_full0").bind "click", 
		ability: "Str"
		id: 0
	, (e) ->
		reset_ability_score e
	
	$("input[id='ability_Str_score']").bind "blur", ability: "Str", (e) ->
		recalc_ability_mod e
	
	$("#ability_score_full1").bind "click", 
		ability: "Dex"
		id: 1
	, (e) ->
		reset_ability_score e
	
	$("input[id='ability_Dex_score']").bind "blur", ability: "Dex", (e) ->
		recalc_ability_mod e
	
	$("#ability_score_full2").bind "click", 
		ability: "Int"
		id: 2
	, (e) ->
		reset_ability_score e
	
	$("input[id='ability_Int_score']").bind "blur", ability: "Int", (e) ->
		recalc_ability_mod e
	
	$("#ability_score_full3").bind "click", 
		ability: "Con"
		id: 3
	, (e) ->
		reset_ability_score e
	
	$("input[id='ability_Con_score']").bind "blur", ability: "Con", (e) ->
		recalc_ability_mod e
	
	$("#ability_score_full4").bind "click", 
		ability: "Cha"
		id: 4
	, (e) ->
		reset_ability_score e
	
	$("input[id='ability_Cha_score']").bind "blur", ability: "Cha", (e) ->
		recalc_ability_mod e
	
	$("#ability_score_full5").bind "click", 
		ability: "Wis"
		id: 5
	, (e) ->
		reset_ability_score e
	
	$("input[id='ability_Wis_score']").bind "blur", ability: "Wis", (e) ->
		recalc_ability_mod e
	
	allskills = skills.get()
	rogue_skill_selections = get_rogue_skill_selections()
	for skill_idx of allskills
		skill = allskills[skill_idx]
		skill_selection_ind_html = (if ~rogue_skill_selections.indexOf(skill._id) then "<sup>+</sup>" else "")
		skill_html = [ "<tr id='skill_#{skill._id}_row'><td><a id='skill_#{skill._id}' class='fake_link'>#{allskills[skill_idx].name}#{skill_selection_ind_html}</a></td><td id='skill_#{skill._id}_ranks' align='right' valign='top' skill_id='#{skill._id}' nowrap></td></tr>" ]
		$("#skills_table").append skill_html.join("")
		$("a[id='skill_#{skill._id}']").bind "click", skill_id: skill._id, (e) ->
			show_skill_detail e

	$("#temp_hp").bind "blur", ->
		unless isNaN($(this).val())
			chardata.temp_hp = $(this).val()
			save_character()
	
	$("#subdual_hp").bind "blur", ->
		unless isNaN($(this).val())
			chardata.subdual_hp = $(this).val()
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
	for classname of chardata.classes
		clazz = classes.first(name: classname)
		for i, script of clazz?.custom?.main
			script
			
	char_feats = get_char_feats().get()

	for i, char_feat in char_feats
		feat = feats.first(name: char_feat.name)
		conditional_feats.push feat	if feat?.conditional

	if conditional_feats.length > 0
		for i, conditional_feat of conditional_feats
			checkbox = if conditional_feat.op then "<input id='feat_#{conditional_feat._id}_conditional' type='checkbox' onclick=\"#{conditional_feat.op}\"/>" else ""
			$("#conditional_feats").append "<tr id='feat_#{conditional_feat._id}'><td>#{checkbox}</td><td class='seamless' valign='top'><a id='feat_#{conditional_feat._id}'class='fake_link'>#{conditional_feat.name}</a></td><td	class='seamless' style='width: 100%'>#{conditional_feat.summary}</td></tr>"
			$("a[id='feat_#{conditional_feat._id}']").bind "click", id: conditional_feat._id, (e) ->
				show_item_detail feats, e.data.id
	else
		$("#featspart").hide()

	$("tr[id^='feat']:odd").css "background-color", "#EFF1F1"
	$("#conditional_feats").hide()
	class_specials = get_special_abilities()
	if count_attrs(class_specials) > 0
		$("#specials_heading").bind "click", (e) ->
			toggle_visible "specials"
		
		for i, special of class_specials
				checkbox = if special.op? then "<input id='special_#{special._id}' type='checkbox' onclick=\"#{special.op}\"/>" else ""
				$("#specials").append "<tr class=data id='special_#{special._id}'><td style='padding: 3px 0px;'>#{checkbox}</td><td class='seamless' valign='top' style='width: 100%;'><a class='fake_link' onclick='show_item_detail(specials, \"#{special._id}\")'>#{special.name}#{if not special.mod? then "" else " "}#{special.mod}</a></td></tr>"
				$("a[id='special_#{special._id}']").bind "click", id: special._id, (e) ->
					show_item_detail specials, e.data.id
	else
		$("#specialpart").hide()

	$("#specials").hide()
	
	for i, char_weapon of chardata.weapons
		weapon_data = weapons.first(name: char_weapon["weapon_name"])
		$("#weaponspart").html "
			<table width='100%' border='0' margin='0'>
				<tr><td id='weapon_#{j}_name' weapon_id='#{weapon_data._id}' colspan='4' bgcolor='#C5C6F6'></td></tr>
				<tr><td width='20px'>Att</td><td id='weapon_#{j}_att' class='box'></td><td	width='20px'>Crit</td><td id='weapon_#{j}_crit' class='box' width='50px'></td></tr>
				<tr><td width='20px'>Dam</td><td id='weapon_#{j}_dam' class='box'></td><td width='20px'>Bon</td><td id='weapon_#{j}_bon' class='box'></td></tr><tr id='weapon_#{j}_note'><td valign='top'>Note</td><td id='weapon_#{j}_note' colspan='3' width='100%'></td></tr></table>"
	$("#weaponspart").css "margin-top", "5px"

	for j, char_armor of chardata.armors
		armor_data = armors.first(name: char_armor["armor_name"])
		$("#armorpart").html "
			<table width='100%' border='0' margin='0'>
				<tr id='armor_#{j}' armor_idx='#{j}' onclick=\"var chk=$('#armor_#{j}_is_worn_check'); session['armor'][#{j}]['is_worn']=!session['armor'][#{j}]['is_worn']; chk.attr('src', 'images/'+ (session['armor'][#{j}]['is_worn'] ? 'checked' : 'unchecked') + '.png'); recalc_main_page();\">
					<td colspan='4' bgcolor='#C5C6F6'>
						<img id='armor_#{j}_is_worn_check' armor_idx='#{j}' src='images/#{(if session["armor"][j]["is_worn"] then "checked" else "unchecked")}.png' style='float: right; margin-right: 3px; margin-left: 2px; margin-bottom: 1px; margin-top: 1px'/>
						<label style='float: right; margin-bottom: 0px; margin-top: 1px; vertical-align: middle' class='fake_link'>worn:</label>
						<span id='armor_#{j}_name'	class='fake_link'></span></td></tr>
				<tr><td>Bon</td><td id='armor_#{j}_bon' class='box' width='50%'></td><td>ACP</td><td id='armor_#{j}_acp'	class='box' width='50%'></td></tr>
				<tr id='armor_#{j}_note'><td valign='top'>Note</td><td colspan='3' id='armor_#{j}_note' width='100%'></td></tr></table>"
	$("#armorpart").css "margin-top", "5px"
	
	for j of chardata.shields
		shield_data = shields.first(_id: char_shield["shield_id"])
		$("#shieldspart").html "
			<table width='100%' border='0' margin='0'>
				<tr id='shield_#{j}' shield_idx='#{j}' onclick=\"var chk=$('#shield_#{j}_is_worn_check'); session['shield'][#{j}]['is_worn']=!session['shield'][#{j}]['is_worn']; chk.attr('src', 'images/'+ (session['shield'][#{j}]['is_worn'] ? 'checked' : 'unchecked') + '.png'); recalc_main_page();\">
					<td colspan='4' bgcolor='#C5C6F6'>
						<img id='shield_#{j}_is_worn_check' shield_idx='#{j}' src='images/#{(if session["shield"][j]["is_worn"] then "checked" else "unchecked")}.png' style='float: right; margin-right: 3px; margin-left: 2px; margin-bottom: 1px; margin-top: 1px;'/>
						<label style='float: right; margin-bottom: 0px; margin-top: 1px; vertical-align: middle' class='fake_link'>worn:</label>
						<span id='shield_#{j}_name'	class='fake_link'></span></td></tr>
				<tr><td>Bon</td><td id='shield_#{j}_bon' class='box' width='50%'></td><td>ACP</td><td id='shield_#{j}_acp'	class='box' width='50%'></td></tr>
				<tr id='shield_#{j}_note'><td valign='top'>Note</td><td colspan='3' id='shield_#{j}_note' width='100%'></td></tr></table>"

	$("#shieldspart").css "margin-top", "5px"

	char_domains = []
	for i, domain of chardata.domains
		domain = domains.first(name: domain)
		char_domains.push domain if domain?

	$("#spellspart").css "margin-top", "10px"
	$("#spellspart").html ""
	for classname of chardata.classes
		clazz = classes.first(name: classname)
		all_spells = clazz.spells
		spells_per_day = clazz.spells_per_day[chardata.classes[classname].level]
		if spells_per_day?.length
			spells_html = "
				<table style='border: 1px solid #D0D0D0' width='100%' border='0' margin='0'>
					<tr bgcolor='#8DC3E9'><td colspan='#{(spells_per_day.length)}'>
						<span id='turn' style='float: right'></span>Spells per day (#{clazz.shortname}) &nbsp;"
			if classname == "Cleric"
				spells_html += "<span style='float: right; padding-right: 3px;'>+1 "
				for i, domain of char_domains
					spells_html += "<i><a class='fake_link' onclick=\"show_item_detail(domains, '#{domain._id}')\">#{domain.name}</a></i> "
				spells_html += "</span>"
			spells_html += "</td></tr></table><table style='border: 1px solid #D0D0D0' width='100%' border='0' margin='0'><tr>"
			for i of spells_per_day
				spells_html += "<td id='spd_level_#{clazz.shortname}#{i}' align='center'>#{i}</td>"
				
			spells_html += "</tr><tr>"
			for i of spells_per_day
				spells_html += "<td id='spd_count_#{clazz.shortname}#{i}' align='center'></td>"
				
			spells_html += "</tr></table><table style='border: 1px solid #D0D0D0' width='100%' border='0' margin='0'>"
			
			for level of spells_per_day
				spells_printed = 0
				unless spells_per_day[level] == "-"
					spells_html += "
						<tr onclick=\"toggle_visible('spell_lvl_#{clazz.shortname}#{level}')\">
							<td bgcolor='#8DC3E9' colspan='2'>
								<span id='spell_lvl_#{clazz.shortname}#{level}_expand_flag' style='float: right'><img src='images/expanded.png'/></span>#{level}</td></tr>
						<tbody id='spell_lvl_#{clazz.shortname}#{level}'><tr>"
					clazz_spells = clazz.spells[level].slice(0)
					if level > 0
						for i, domain of char_domains
							clazz_spells.push spells.first(name: domain.spells[level - 1]).name	if clazz_spells.indexOf(domain.spells[level - 1]) == -1
					clazz_spells.sort()
					for i, spell_name of clazz_spells
						if (clazz.name == "Cleric" or clazz.name == "Druid" or clazz.name == "Paladin" or clazz.name == "Ranger") or ((chardata.classes[classname]?) and (chardata.classes[classname].spells and chardata.classes[classname].spells[level]) and (clazz.name == "Sorceror" or clazz.name == "Wizard" or clazz.name == "Bard") and ~chardata.classes[classname].spells[level].indexOf(spell_name))
							spell = spells.first(name: spell_name)
							domain_highlight = false
							for j, domain of char_domains
								if (classname == "Paladin" or classname == "Cleric") and spell.name == domain.spells[level - 1]
									domain_highlight = true
									break
							spells_html += "
								<td><a id='spell_#{spell._id}' class='fake_link' onclick='show_item_detail(spells, \"#{spell._id}\")'>#{if domain_highlight then "<i>" else ""}#{spell.name}#{if domain_highlight then "</i>" else ""}</a></td>"
							spells_html += "</tr><tr>"	if spells_printed % 2 == 1
							spells_printed++
					spells_html += "</tr></tbody>"
			spells_html += "</tr></table>"
			$("#spellspart").append spells_html
			
adjust_mod = (type, magnitude) ->
	curr_val = parseInt($("##{type}_mod").text())
	$("##{type}_mod").text curr_val + magnitude
	recalc_main_page()
	
populate_main_page = ->
	race = races.first(name: chardata.race_name)
	$("#char_name").text chardata.name
	$("#hp").text (if not chardata.hp? or chardata.hp.length <= 0 then 0 else calc_hp(chardata.hp, chardata.feats))
	$("#temp_hp").val chardata.temp_hp or $("#hp").text() or 0
	$("#subdual_hp").val chardata.subdual_hp or $("#subdual_hp").text() or 0
	$("input[id='hp']").val chardata.hp or 0
	$("#level").text calc_level() + 1
	allabilities = chardata.abilities
	for ability, data of abilities
		ability_score = calc_ability_score(ability, chardata.race_name)
		$("#ability_score_full_" + ability).text ability_score
		$("#ability_#{ability}_score").val chardata.abilities["temp_#{ability}"] or ability_score
		ability_mod = calc_ability_modifier($("#ability_#{ability}_score").val())
		$("#ability_#{ability}_mod").text pos(ability_mod)

	for j, char_weapon of chardata.weapons
		weapon_data = weapons.first(name: char_weapon.weapon_name)
		$("#weapon_#{j}_name").text (if char_weapon.name? then "#{char_weapon.name} (#{weapon_data.name})" else weapon_data.name)
		$("#weapon_#{j}_crit").text calc_critical(weapon_data.crit, char_weapon, chardata.feats)
		$("#weapon_#{j}_bon").text (char_weapon.att or "")
		$("td[id='weapon_#{j}_note']").text char_weapon.note
		$("tr[id='weapon_#{j}_note']").toggle char_weapon.note?.length > 0
		
	for j, char_armor of chardata.armors
		armor_data = armors.first(name: char_armor["armor_name"])
		$("#armor_#{j}_name").text armor_data.name
		$("#armor_#{j}_bon").text armor_data.bon
		$("#armor_#{j}_acp").text armor_data.acp
		$("#armor_#{j}_note").text char_armor["notes"]
		$("tr[id='armor_#{j}_note']").toggle char_armor.note?.length > 0
		
	for j, char_shield of chardata.shields
		shield_data = shields.first(name: char_shield["shield_name"])
		$("#shield_#{j}_name").text shield_data.name
		$("#shield_#{j}_bon").text shield_data.bon
		$("#shield_#{j}_acp").text shield_data.acp
		$("#shield_#{j}_note").text char_shield["notes"]
		$("tr[id='shield_#{j}_note']").toggle char_shield.note?.length > 0
		
recalc_main_page = ->
	str_score = $("#ability_Str_score").val()
	dex_score = $("#ability_Dex_score").val()
	int_score = $("#ability_Int_score").val()
	con_score = $("#ability_Con_score").val()
	cha_score = $("#ability_Cha_score").val()
	wis_score = $("#ability_Wis_score").val()
	level = calc_level()
	update_ability "Str"
	update_ability "Dex"
	update_ability "Int"
	update_ability "Con"
	update_ability "Cha"
	update_ability "Wis"

	base_attack_bonuses = calc_base_attack_bonus()
	for j, char_weapon of chardata.weapons
		weapon = weapons.first(_id: $("#weapon_#{j}_name").attr("weapon_id"))
		$("#weapon_#{j}_att").text calc_attack(base_attack_bonuses, weapon, char_weapon, parseInt($("#ability_Str_score").val()), parseInt($("#ability_Dex_score").val()), parseInt($("#attack_mod").text()))
		$("#weapon_#{j}_dam").text calc_damage(weapon, str_score, chardata.feats, char_weapon)

	for j, char_armor of chardata.armors
		armor_data = armors.first(name: char_armor.armor_name)
		$("#armor_#{j}_bon").text armor_data.armor_bonus
		$("#armor_#{j}_acp").text armor_data.armor_check_penalty

	for j, char_shield of chardata.shields
		shield_data = shields.first(name: char_shield.shield_name)
		$("#shield_#{j}_bon").text shield_data.shield_bonus
		$("#shield_#{j}_acp").text shield_data.shield_check_penalty
		
	acp = calc_armor_acp(chardata.armors)
	acp += calc_shield_acp(chardata.shields)

	allskills = skills.get().sort()
	for i, skill of allskills
		skill_ability_score = $("#ability_#{skill.ability}_score").val()
		skill_mod = calc_skill_mod(skill, skill_ability_score, acp)
		$("#skill_#{skill._id}_ranks").text pos(skill_mod)
		$("#skill_#{skill._id}_row").toggle skill_mod
		
	$("#ac").text calc_ac(dex_score)
	$("#init").text calc_init(dex_score)
	$("#fort").text calc_fort(con_score, chardata.class_name, chardata.xp, chardata.feats)
	$("#ref").text calc_ref(dex_score, chardata.class_name, chardata.xp, chardata.feats)
	$("#will").text calc_will(wis_score, chardata.class_name, chardata.xp, chardata.feats)
	$("#turn").text (if chardata.class_id == 2 then "Turn: " + calc_turn(cha_score) else "")
	$("#touch").text calc_touch_ac(dex_score, chardata.race_id, chardata.feats)
	$("#flat").text calc_flat_footed_ac(chardata.armors)
	$("#cmb").text calc_cmb(calc_base_attack_bonus())
	$("#cmd").text calc_cmd(calc_base_attack_bonus())
	for i, bab of base_attack_bonuses
		base_attack_bonuses[i] = pos(bab)

	$("#base_attack_bonus").text base_attack_bonuses.join("/")
	for classname, char_class of chardata.classes
		clazz = classes.first(name: classname)
		spells_per_day = clazz.spells_per_day[char_class.level]
		for i of spells_per_day
			$("#spd_count_#{clazz.shortname}#{i}").text spells_per_day[i]
			
update_ability = (id) ->
	ability_val = $("#ability_#{id}_score").val()
	$("#ability_#{id}_mod").text pos(calc_ability_modifier(ability_val))
	
calc_turn = (cha_score) ->
	know_religion = skills.first(name: "Knowledge (religion)")
	char_know_religion = false
	char_know_religion = chardata.skills.first(skill_name: know_religion.name)	if chardata.skills?
	feat_mod = 0
	char_feats = get_char_feats()
	char_feats.get(turn: "!is": null).forEach (feat, i) ->
		feat_mod = feat.critical(feat_mod)
		feat_mod
	
	char_know_rel_pnts = char_know_religion?.ranks | 0
	skill_bonus = (if calc_ranks(chardata.class_name, char_know_rel_pnts, know_religion) >= 5 then 2 else 0)
	cha_score = $("#ability_Cha_score").val()
	Math.max 3 + calc_ability_modifier(cha_score) + skill_bonus + feat_mod, 0

calc_spell_resistance = ->
	0

calc_flat_footed_ac = (char_armor) ->
	10 + calc_armor_bonus(char_armor, armors, "armor").bonus
	
calc_touch_ac = (dex_score, race_name, char_feats) ->
	10 + calc_ability_modifier(dex_score) + calc_size_mod(race_name)
	
get_char_feats = ->
	char_feats = new TAFFY([])
	if chardata.feats
		chardata.feats.get().forEach (feat, i) ->
			char_feats.insert feats.first(name: feat.feat_name)
	char_feats.insert get_class_feats()
	char_feats
	
calc_hp = (hp, char_feats) ->
	feat_mod = 0
	char_feats = get_char_feats()
	char_feats.get(hp: "!is": null).forEach (feat, i) ->
		feat_mod = feat.hp(feat_mod)
		feat_mod
	
	parseInt(hp) + feat_mod
	
calc_critical = (weapon_critical, char_weapon, char_feats) ->
	critical = char_weapon.crit or weapon_critical
	char_feats = get_char_feats()
	char_feats.get(critical: "!is": null).forEach (feat, i) ->
		critical = feat.critical(critical)
		critical
	
	critical
	
update_weapon_attack = (weapon_idx, mod) ->
	attacks = $("#weapon_#{weapon_idx}_att").text()
	attacks = attacks.split("/")
	updated_attacks = ""
	for j of attacks
		updated_attacks += pos(parseInt(attacks[j]) + mod)
		updated_attacks += (if parseInt(j) + 1 < attacks.length then "/" else "")
	$("#weapon_#{weapon_idx}_att").text updated_attacks

update_weapon_damage = (weapon_idx, mod) ->
	damage = ""
	weapon_damage = $("#weapon_#{weapon_idx}_dam").text().split("/")
	for i of weapon_damage
		pos_neg = weapon_damage[i].match(/\+|-/)
		dam_components = weapon_damage[i].split(/\+|-/)
		die = dam_components[0]
		weapon_mod = (if dam_components.length then parseInt((if pos_neg != -1 then pos_neg else "") + dam_components[1]) else 0)
		damage += die + pos(mod + weapon_mod)
		damage += (if parseInt(i) + 1 < weapon_damage.length then "/" else "")
	$("#weapon_#{weapon_idx}_dam").text damage

update_skill_ranks = (skills_) ->
	for i, skill_name of skills_
		skill = skills.first(name: skill_name)
		ranks = parseInt($("#skill_#{skill._id}_ranks").text()) + 2
		$("#skill_#{skill._id}_ranks").text pos(ranks)

calc_grapple = ->
	grapple = ""
	race = races.first(name: chardata.race_name)
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

calc_base_attack_bonus = ->
	bab = []
	for classname of chardata.classes
		class_babs = classes.first(name: classname).base_attack_bonus
		attacks = class_babs[chardata.classes[classname].level].split("/")
		i = 0
		
		while i < attacks.length
			bab[i] = (bab[i] | 0) + parseInt(attacks[i])
			i++
	bab
	
grapple_size_mod = 
	colossal: 16
	gargantuan: 12
	huge: 8
	large: 4
	medium: 0
	small: -4
	tiny: -8
	diminutive: -12
	fine: -16