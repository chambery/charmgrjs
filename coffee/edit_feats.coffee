edit_feats.build_feats_page = ->
	char_classes = []
	for classname of chardata.classes
		char_classes.push classname
	is_spellcaster = false
	for classname of chardata.classes
		if spellcasters.indexOf(classname) > -1 and classes.first(name: classname).spells_per_day[calc_current_level()][0] != "-"
			is_spellcaster = true
			break
	set_links_part 2
	chardata.feats = new TAFFY([])	unless chardata.feats?
	feats_page_layout = "<div id='rogue_special_abilities'></div><div id='feats'></div>"
	$("#content").html feats_page_layout
	$("#feats").html "<table width=100% style='border: 1px solid #8DC3E9; border-collapse: collapse;'><tr style='background: #8DC3E9;'><td style='text-align: left'>" + "<span id='feats_available' style='float: right'>Base: <span id='feats_remaining'></span> Bonus: <span id='bonus_feats_remaining'></span></span>Feats</td></tr></table>" + "<table id='feats_table' style='border: 1px solid #D0D0D0; border-collapse: collapse; width: 100%;'></table>"
	allfeats = new TAFFY(feats.get())
	allfeats.orderBy (a, b) ->
		(if (not a.prereqs? or not a.prereqs.feats?) and (a.name < b.name) then -1 else 1)
	
	temp_feats = allfeats.get()
	for i of temp_feats
		removed = false
		prereqs = temp_feats[i].prereqs
		if prereqs and prereqs.class_features
			for classname of chardata.classes
				break	if removed
				clazz = classes.first(name: classname)
				for l of prereqs.class_features
					if not clazz.class_features.indexOf(prereqs.class_features[l]) > -1
						allfeats.remove name: temp_feats[i].name
						removed = true
						break
		if not removed and prereqs and prereqs.classes
			for classname of chardata.classes
				unless prereqs.classes[classname]
					allfeats.remove name: temp_feats[i].name
					break
	allfeats.forEach (feat, n) ->
		create_feat_listing feat, 1	unless feat.hidden

edit_feats.create_feat_listing = (feat, indent) ->
	indent = (if not indent? then 0 else indent)
	count = indent
	if feat.prereqs and feat.prereqs.feats
		prereq = allfeats.first(name: feat.prereqs.feats[0])
		indent = create_feat_listing(prereq, indent + 1)	if prereq
	html = "<tr id='" + feat._id + "' class='feat'><td class='feat'><input id='" + feat._id + "' type='checkbox' class='feat' /><td id='" + feat._id + "' class='feat' valign='top'><a id='" + feat._id + "' class='fake_link'>" + feat.name + "</a></td><td class='feat' valign='top'>" + feat.summary + "</td></tr>"
	if $("#" + feat._id).length == 0
		if feat.prereqs and feat.prereqs.feats
			prereq = feats.first(name: feat.prereqs.feats[0])
			multi = (if prereq.multi then "_sub_" else "")
			$("#" + prereq._id + multi).after html
			$("td[id='" + feat._id + "']").css "padding-left", (10 * (indent - count)) + "px"
		else
			$("#feats_table").append html
		$("a[id='" + feat._id + "']").bind "click", feat_id: feat._id, (e) ->
			show_item_detail feats, e.data.feat_id
		
		if feat.multi and feat.multi != "count"
			$("input[id='" + feat._id + "']").remove()
			db = feat.multi.db or feat.multi.type
			all_options = filter_options(feat, db)
			expand_bar = "<tr id='" + feat._id + "_sub'><td colspan='2'></td><td style='width: 100%' bgcolor='#8DC3E9'><a class='fake_link'><span id='" + feat._id + "_sub__expand_flag' style='float: right; vertical-align: middle;'><img src='images/collapsed.png' /></span>" + feat.name + " options</a></td></tr>"
			$("tr#" + feat._id).after expand_bar
			$("tr#" + feat._id + "_sub").bind "click", feat_id: feat._id, (e) ->
				toggle_visible e.data.feat_id + "_sub_"
			
			db = feat.multi.db or feat.multi.type
			create_selector_group feat, "", all_options, db, 2, update_feat
			$("#" + feat._id + "_sub_").hide()
			disable_feat feat, true	if all_options.length == 0
		else
			$("input[id='" + feat._id + "']").bind "click", feat: feat, (e) ->
				update_feat e.data.feat, $(this).attr("checked")
	indent

edit_feats.populate_feats_page = ->
	allfeats.forEach (feat, i) ->
		if feat.multi
			char_feat = false
			char_feat = chardata.feats.first(feat_name: feat.name)	if chardata.feats?
			unless feat.multi == "count"
				char_multi = (if char_feat and char_feat.multi? then char_feat.multi else [])
				i = 0
				
				while i < char_multi.length
					multi_id = feat.multi.type.first(name: char_multi[i])._id
					$("input#" + feat._id + "_" + multi_id).attr "checked", true
					i++
			else
				$("span#" + feat._id + "_count").text (if char_feat then char_feat.multi else 1)
				$("tr#" + feat._id + "_sub").toggle checked
		else
			checked = chardata.feats? and chardata.feats.first(feat_name: feat.name)
			if is_class_feat(feat.name)
				checked = true
				disable_feat feat, true
			$("input[id='" + feat._id + "']").attr "checked", checked
			$("tr#" + feat._id).addClass "class_feat"	if checked and $("input[id='" + feat._id + "']").attr("disabled")
	
	update_feats_remaining()
	calc_prereqs()

edit_feats.disable_feat = (feat, disabled) ->
	if disabled
		$("input[id='" + feat._id + "']").attr "disabled", "disabled"
	else
		$("input[id='" + feat._id + "']").removeAttr "disabled"
	$("#" + feat._id).removeClass((if disabled then "enabled" else "disabled")).addClass (if disabled then "disabled" else "enabled")
	checked = $("input[id='" + feat._id + "']").attr("checked")
	$("tr#" + feat._id + "_sub").toggle feat.multi and not disabled	if feat.multi

edit_feats.update_feats_remaining = ->
	count = calc_feats_remaining()
	$("#feats_remaining").text count.base_feats_remaining
	$("#bonus_feats_remaining").text count.bonus_feats.count

edit_feats.calc_prereqs = ->
	allfeats.forEach (feat, i) ->
		prereqs_met = false
		unless is_class_feat(feat.name)
			if feat.prereqs
				prereqs_met = is_prereqs_met(feats._id, feat.prereqs) or prereqs_met
			else
				prereqs_met = true
			disable_feat feat, not prereqs_met

edit_feats.is_prereqs_met = (feat_id, prereqs) ->
	char_feats = get_char_feats()
	prereqs_met = true
	if prereqs.or
		for j of prereqs.or
			prereqs_met = is_prereqs_met(feat_id, prereqs.or[j])
			break	if prereqs_met
		return false	unless prereqs_met
	if prereqs.level
		for k of chardata.classes
			return false	if chardata.classes[k].level < prereqs.level
	if prereqs.classes
		for clazz of chardata.classes
			return false	if prereqs.classes[clazz] > chardata.classes[clazz].level
	if prereqs.pick
		handle_pick prereqs.pick.feats, prereqs.pick.count	if prereqs.pick.feats
		if prereqs.pick.group
			group_feats = feats.get(group: has: prereqs.pick.group)
			handle_pick group_feats, prereqs.pick.count
	if prereqs.feats
		for k of prereqs.feats
			return false	if (not chardata.feats? or chardata.feats.first(feat_name: prereqs.feats[k]) == false) and not is_class_feat(prereqs.feats[k])
	if prereqs.multi
		for k of prereqs.multi
			for l of prereqs.multi[k]
				return false	if chardata.feats or not chardata.feats.first(name: k) or not (chardata.feats.first(name: k).multi.indexOf(prereqs.multi[k][l]) > -1)
	if prereqs.abilities
		for k of prereqs.abilities
			return false	if chardata.abilities[k] < prereqs.abilities[k]
	if prereqs.skills
		for k of prereqs.skills
			char_skill = chardata.skills and chardata.skills.first(name: k)
			return false	if char_skill and char_skill.ranks < prereqs.skills[k]
	true

edit_feats.calc_feats_remaining = ->
	bonus = 
		count: 0
		groups: {}
		feats: {}
	
	for classname of chardata.classes
		clazz = classes.first(name: classname)
		if clazz.custom and clazz.custom.feats
			for level of clazz.custom.feats
				if calc_current_level() >= level
					clazz.custom.feats[level].script bonus
				else
					break
	char_feats = (if not chardata.feats? then [] else chardata.feats.get())
	base_feats_remaining = calc_total_base_feats_count(chardata.race_name, chardata.xp)
	for i of char_feats
		feat = feats.first(name: char_feats[i].feat_name)
		if char_feats[i].multi
			if jQuery.isArray(char_feats[i].multi)
				if is_bonus_eligible(feat, bonus)
					bonus.count -= char_feats[i].multi.length
					if bonus.count < 0
						base_feats_remaining += bonus.count
						bonus.count = 0
				else
					base_feats_remaining -= char_feats[i].multi.length
			else
				if is_bonus_eligible(feat, bonus)
					bonus.count -= parseInt(char_feats[i].multi)
				else
					base_feats_remaining -= parseInt(char_feats[i].multi)
		else
			if is_bonus_eligible(feat, bonus)
				bonus.count -= 1
			else
				base_feats_remaining -= 1
	base_feats_remaining: base_feats_remaining
	bonus_feats: bonus

edit_feats.filter_options = (feat, options_db) ->
	filtered_options = []
	filtered_options = filtered_options.concat(feat.multi.db.get(feat.multi.filter))	if feat.multi.db
	if feat.multi.feats
		for i of feat.multi.feats
			multi_feat = feats.first(name: feat.multi.feats[i])
			char_feat = get_char_feats().first(name: multi_feat.name)
			if multi_feat.collection
				filtered_options = filtered_options.concat(multi_feat.collection.db.get(multi_feat.collection.filter))	if char_feat
			else
				if char_feat and char_feat.multi? and chardata.feats
					char_feat_ref = chardata.feats.first(feat_name: multi_feat.name)
					for j of char_feat_ref.multi
						option = feat.multi.type.first(name: char_feat_ref.multi[j])
						if multi_feat.multi.filter
							for k of multi_feat.multi.filter
								filtered_options.push option	if option[k]
						else
							filtered_options.push option
	filtered_options.sort (a, b) ->
		(if a.name > b.name then 1 else -1)
	
	filtered_options

edit_feats.update_count = (feat) ->
	count = calc_feats_remaining()
	if count.base_feats_remaining == 0 and not is_bonus_eligible(feat, count.bonus_feats)
		alert "No feat selections remaining."
		return
	char_feat = chardata.feats.first(feat_name: feat_name)
	char_feat.multi += 1
	$("span[id='feat_" + feat_id + "_count']").text char_feat.multi
	save_character()
	update_feats_remaining()

edit_feats.update_feat = (feat, is_selected, multi_item, multi_type) ->
	multi = (if multi_item then "_" + multi_type.first(name: multi_item)._id else "")
	count = calc_feats_remaining()
	total_feats_remaining = count.bonus_feats.count + count.base_feats_remaining
	char_feat = chardata.feats.first(feat_name: feat.name)
	if is_selected
		if total_feats_remaining == 0 or (count.base_feats_remaining == 0 and chardata.class_name == "Fighter" and not combat_feats.indexOf(feat.name) > -1)
			$("input[id='" + feat._id + multi + "']").attr "checked", false
			alert "No feat selections remaining."
		else
			unless char_feat
				count = chardata.feats.insert(feat_name: feat.name)
				char_feat = chardata.feats.first(feat_name: feat.name)
			if multi_item
				char_feat.multi = []	unless char_feat.multi?
				char_feat.multi.push multi_item
	else
		if multi_item
			char_feat.multi.splice char_feat.multi.indexOf(multi_item), 1
			chardata.feats.remove feat_name: feat.name	if char_feat.multi.length == 0
		else
			chardata.feats.remove feat_name: feat.name
	save_character()
	inform_dependents feat, multi_item
	update_feats_remaining()
	calc_prereqs()

edit_feats.inform_dependents = (feat) ->
	feats.get(multi: "!is": null).forEach (dependent, i) ->
		if dependent.multi.feats and dependent.multi.feats.indexOf(feat.name) > -1
			inform_dependents dependent	if dependent.multi and dependent.multi.feats
			db = dependent.multi.db or dependent.multi.type
			all_options = filter_options(dependent, db)
			hidden = $("#" + dependent._id).hasClass("disabled")
			$("tr[id='" + dependent._id + "_sub_']").html ""
			create_selector_group dependent, "", all_options, db, 2, update_feat
			$("#" + dependent._id + "_sub__expand_flag").text (if hidden then "+" else "-")
			$("#" + dependent._id + "_sub_").hide hidden

edit_feats.create_rogue_special_abilities = (level, clazz) ->
	rogue_specials = []
	for i of rogue_special_abilities
		rogue_specials.push special_abilities.first(name: rogue_special_abilities[i])
	count = 0
	for i of clazz.special_abilities_levels
		count++	if level >= clazz.special_abilities_levels[i]
	special_html = ""
	$("#rogue_special_abilities").html "<table id='rogue_specials_table' style='border: 1px solid #D0D0D0' width='100%' border='0' margin='0'>"
	$("#rogue_specials_table").append "<tbody><tr id='rogue_specials'><td colspan='2' bgcolor='#8DC3E9'><span id='rogue_specials_expand_flag' style='font-family: Monospace; float: right'>+</span><a class='fake_link'>Rogue Special Abilities</a></td></tr></tbody>"
	$("tr[id='rogue_specials']").bind "click", (e) ->
		toggle_visibility "rogue_specials"
	
	i = 0
	
	while i < count
		selected = (if chardata.rogue_special_abilities and chardata.rogue_special_abilities[i]? then chardata.rogue_special_abilities[i].special_id else null)
		selected_special = special_abilities.first(name: selected)
		special_html += "<tr id='special_" + i + "'><td valign='top'>"
		special_html += create_select1("special_" + i, rogue_specials, "update_rogue_special_ability( " + i + ")", selected)
		special_html += "</a></td><td id='special_" + i + "_description'><a class='fake_link' onclick='show_item_detail(special_abilities, " + (if selected_special then selected_special._id else rogue_specials[i]._id) + ")'>" + (if selected_special then selected_special.description else rogue_specials[i].description) + "</a></td></tr>"
		special_html += create_skill_selection_matrix(i)	if selected == "Skill Mastery"
		i++
	special_html += "</tbody></table>"
	$("#rogue_special_abilities").html special_html
	$("tr[id^='special']:odd").css "background-color", "#EFF1F1"
	$("#rogue_specials").hide()

edit_feats.handle_pick = (group, count) ->
	matches = 0
	for i of group
		if char_feats.first(name: group[i])
			matches++
			break	if matches == count
	false	if matches < count

edit_feats.find_match = (o1, o2) ->
	for prop of o1
		return true	if o2[prop]
	false

edit_feats.is_bonus_eligible = (feat, bonus_feats) ->
	bonus_feats.count > 0 and (bonus_feats.feats[feat.name] or find_match(bonus_feats.groups, feat.groups))

edit_feats.allfeats = null
