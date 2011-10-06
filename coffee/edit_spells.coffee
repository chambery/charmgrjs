edit_spells.recalc_spells_page = (level, spell_name, classname) ->
	spell_id = spells.first(name: spell_name)._id
	checked = $("input##{spell_id}_" + classname).attr("checked")
	clazz = classes.first(name: classname)
	spells_remaining_text = $("##{classname}_spells_remaining_" + level).text()
	spells_remaining = parseInt(spells_remaining_text.substring(spells_remaining_text.indexOf(":") + 2))
	bonus_spells_remaining_text = $("##{classname}_bonus_spells_remaining").text()
	bonus_spells_remaining = parseInt(bonus_spells_remaining_text)
	if clazz.name == "Sorcerer" or clazz.name == "Bard"
		if not checked or bonus_spells_remaining > 0 or spells_remaining > 0
			if bonus_spells_remaining > 0 or not checked
				$("##{classname}_spells_remaining").text bonus_spells_remaining + (if checked then -1 else 1)
			else
				$("##{classname}_spells_remaining_" + level).text "Spell selections remaining: " + (spells_remaining + (if checked then -1 else 1))
		else
			$("input##{spell_id}_" + classname).attr "checked", false
			alert "No spells selections remaining."
	if $("input##{spell_id}_" + classname).attr("checked")
		chardata.classes[classname].spells[level].push spell_name
	else
		if chardata.classes[classname].spells? and chardata.classes[classname].spells[level]
			spell_index = chardata.classes[classname].spells[level].indexOf(spell_name)
			remove chardata.classes[classname].spells[level], spell_index	if spell_index > -1
	save_character()

edit_spells.calc_spells_remaining = (clazz, spell_level, curr_spells_chosen_count) ->
	clazz.spells_known[chardata.classes[classname].level][spell_level] - curr_spells_chosen_count


edit_spells.build_spells_page = ->
	bonus_spells = do_class_functions("spells", "before_build", [])
	# TODO - WTF?
	bonus_spells = (if bonus_spells.length > 0 then bonus_spells[0] else null)
	set_links_part 3
	spellcaster_count = 0
	for classname of chardata.classes
		spellcaster_count++	if ~spellcasters.indexOf(classname) and natural_spellcasters.indexOf(classname) == -1
	$("#content").html ""
	for classname of chardata.classes
		if ~spellcasters.indexOf(classname)
			clazz = classes.first(name: classname)
			if clazz.spells_known.length > 0
				$("#content").append "<div id='spell_selections_#{classname}'><table id='spell_selection_#{classname}' style='width: 100%' border='0' margin='0'></table></div>"
				chardata.classes[classname].spells = []	unless chardata.classes[classname].spells?
				for spell_level of clazz.spells_known[chardata.classes[classname].level]
					unless clazz.spells_known[chardata.classes[classname].level][spell_level] == "-"
						curr_spells_chosen_count = (if not chardata.classes[classname].spells[spell_level]? then 0 else chardata.classes[classname].spells[spell_level].length)
						spell_selections_remaining = (if clazz.name == "Sorcerer" or clazz.name == "Bard" then "Spell selections remaining: " + edit_spells.calc_spells_remaining(clazz, spell_level, curr_spells_chosen_count, bonus_spells) + (if bonus_spells then " <span id=bonus_spells>Bonus Spells: <span id=" + classname + "_bonus_spells_remaining_#{spell_level}>#{bonus_spells[0]}</span></span>" else "") else "")
						$("table#spell_selection_" + classname).append "<tr id='" + classname + "_level_#{spell_level}' style='font-size: x-small; background-color: #8DC3E9'><td colspan=3 ><span id='#{classname}_spells_remaining_#{spell_level}' style='float: right;'>#{spell_selections_remaining} </span>Level #{spell_level}</td></tr>"
						$("tr##{classname}_level_" + spell_level).bind "click", 
							spell_level: spell_level
							classname: classname
						, (e) ->
							$("td[id='#{e.data.classname}_level_#{e.data.spell_level}_sub_']").toggle()
						
						$("table#spell_selection_" + classname).append "<tr id='" + classname + "_level_#{spell_level}_sub'><td id='#{classname}_level_#{spell_level}_sub_' style='border: 1px solid #D0D0D0'><table id='#{classname}_level_#{spell_level}_sub_' width='100%' border='0' margin='0'></table></td></tr>"
						for j of clazz.spells[spell_level].sort()
							$("table[id='#{classname}_level_#{spell_level}_sub_']").before "<tr id='#{classname}_level_#{spell_level}_sub_#{(j / 3) | 0}'></tr>"	if j % 3 == 0
							spell = spells.first(name: clazz.spells[spell_level][j])
							$("tr##{classname}_level_#{spell_level}_sub_" + ((j / 3) | 0)).append "<td><input id='#{spell._id}_#{classname}' type='checkbox'/><a id='spell_#{spell._id}' class='fake_link'>#{spell.name}</a></td>"
							$("input##{spell._id}_" + classname).bind "click", 
								spell_name: spell.name
								level: spell_level
								classname: classname
							, (e) ->
								recalc_spells_page e.data.level, e.data.spell_name, e.data.classname
							
							$("a#spell_" + spell._id).bind "click", 
								spells: spells
								spell_id: spell._id
							, (e) ->
								show_item_detail e.data.spells, e.data.spell_id
				if spellcaster_count > 1
					$("div#spell_selections_" + classname).wrapAll "<fieldset id='spell_selections_#{classname}' />"
					$("fieldset#spell_selections_" + classname).prepend "<legend class='fake_link' onclick=\"$('table#spell_selection_#{classname}').toggle();\">#{classname}#{if chardata.bloodline then "&nbsp;&nbsp;&nbsp;<i>#{chardata.bloodline}</i>" else ""}</legend>"
		$("#content").append "<div>&nbsp;</div>"
		for i, script of clazz?.custom?.spells?.after_spells
			script()


edit_spells.populate_spells_page = ->
	for classname of chardata.classes
		if ~spellcasters.indexOf(classname)
			clazz = classes.first(name: classname)
			for level of chardata.classes[classname].spells
				if classname == "Sorcerer" or classname == "Bard"
					curr_spells_chosen_count = (if not chardata.classes[classname].spells[level]? then 0 else chardata.classes[classname].spells[level].length)
					$("td[id='#{classname}_level_#{level}_sub_']").toggle clazz.spells_known[chardata.classes[classname].level][level] - curr_spells_chosen_count > 0
				for i of chardata.classes[classname].spells[level]
					spell_id = spells.first(name: chardata.classes[classname].spells[level][i])._id
					$("input##{spell_id}_#{classname}").attr "checked", true
