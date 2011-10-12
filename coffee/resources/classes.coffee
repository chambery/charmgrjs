classes = new TAFFY([ 
	name: "Barbarian"
	shortname: "Brb"
	base_attack_bonus: [ "1", "2", "3", "4", "5", "6/1", "7/2", "8/3", "9/4", "10/5", "11/6/1", "12/7/2", "13/8/3", "14/9/4", "15/10/5", "16/11/6/1", "17/12/7/2", "18/13/8/3", "19/14/9/4", "20/15/10/5" ]
	fort_save: [ 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12 ]
	ref_save: [ 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6 ]
	will_save: [ 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6 ]
	spells_per_day: []
	spells_known: []
	skill_points_per_level: 4
	bonus_feats_levels: [ 6, 12, 18 ]
	hd: 12
	type: "class"
	tags: [ "pathfinder" ]
	_id: "2c3d"
	spells: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	feats: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	specials: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	update_literacy: (language_id) ->
		checked = $("#literacy_" + language_id + "_check").attr("checked")
		language = languages.first(_id: language_id)
		if not checked and chardata.classes["Barbarian"].literacy[language.name]
			delete chardata.classes["Barbarian"].literacy[language.name]
		else
			chardata.classes["Barbarian"].literacy[language.name] = true
		skill_pts = calc_skill_points() - (count_attrs(chardata.classes["Barbarian"].literacy) * 2)
		$("#skill_pts_remaining").html (if skill_pts < 0 then [ "<span class=\"alarm\">", skill_pts, "</span>" ].join("") else skill_pts)
		save_character()
	
	custom: edit: 0: [ script: ->
		chardata.classes["Barbarian"].literacy = []	unless chardata.classes["Barbarian"].literacy?
		$("#language_table").prepend "<td id=\"literacy_header\" colspan=2></td><td>Lit</td>"	if $("#literacy_header").length == 0
		langs = []
		for classname of chardata.classes
			clazz = classes.first(name: classname)
			langs = langs.concat((if clazz.languages? then clazz.languages else []))
		langs = langs.concat(race.languages)
		langs = langs.concat(chardata.languages)
		for i of langs
			lang = languages.first(name: langs[i])
			if $("#literacy_" + lang._id).length == 0
				$("tr#language_" + lang._id).append "<td id=\"literacy_" + lang._id + "\"><input id=\"literacy_" + lang._id + "_check\" type=\"checkbox\" /></td>"
				$("#literacy_" + lang._id + "_check").click ->
					classes.first(name: "Barbarian").update_literacy lang._id
				
				$("#literacy_" + lang._id + "_check").attr "checked", "checked"	if chardata.classes["Barbarian"].literacy[lang.name]
	 ]
	class_features: []
, 
	name: "Bard"
	shortname: "Brd"
	base_attack_bonus: [ "0", "1", "2", "3", "3", "4", "5", "6/1", "6/1", "7/2", "8/3", "9/4", "9/4", "10/5", "11/6/1", "12/7/2", "12/7/2", "13/8/3", "14/9/4", "15/10/5" ]
	fort_save: [ 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6 ]
	ref_save: [ 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12 ]
	will_save: [ 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12 ]
	spells_per_day: [ [ 2, "-", "-", "-", "-", "-", "-" ], [ 3, "-", "-", "-", "-", "-", "-" ], [ 3, 1, "-", "-", "-", "-", "-" ], [ 3, 2, "-", "-", "-", "-", "-" ], [ 3, 3, 1, "-", "-", "-", "-" ], [ 3, 3, 2, "-", "-", "-", "-" ], [ 3, 3, 2, "-", "-", "-", "-" ], [ 3, 3, 3, 1, "-", "-", "-" ], [ 3, 3, 3, 2, "-", "-", "-" ], [ 3, 3, 3, 2, "-", "-", "-" ], [ 3, 3, 3, 3, 1, "-", "-" ], [ 3, 3, 3, 3, 2, "-", "-" ], [ 3, 3, 3, 3, 2, "-", "-" ], [ 4, 3, 3, 3, 3, 1, "-" ], [ 4, 4, 3, 3, 3, 2, "-" ], [ 4, 4, 4, 3, 3, 2, "-" ], [ 4, 4, 4, 4, 3, 3, 1 ], [ 4, 4, 4, 4, 4, 3, 2 ], [ 4, 4, 4, 4, 4, 4, 3 ], [ 4, 4, 4, 4, 4, 4, 4 ] ]
	spells_known: [ [ 4, "-", "-", "-", "-", "-", "-" ], [ 5, 2, "-", "-", "-", "-", "-" ], [ 6, 3, "-", "-", "-", "-", "-" ], [ 6, 3, 2, "-", "-", "-", "-" ], [ 6, 4, 3, "-", "-", "-", "-" ], [ 6, 4, 3, "-", "-", "-", "-" ], [ 6, 4, 4, 2, "-", "-", "-" ], [ 6, 4, 4, 3, "-", "-", "-" ], [ 6, 4, 4, 3, "-", "-", "-" ], [ 6, 4, 4, 4, 2, "-", "-" ], [ 6, 4, 4, 4, 3, "-", "-" ], [ 6, 4, 4, 4, 3, "-", "-" ], [ 6, 4, 4, 4, 4, 2, "-" ], [ 6, 4, 4, 4, 4, 3, "-" ], [ 6, 4, 4, 4, 4, 3, "-" ], [ 6, 5, 4, 4, 4, 4, 2 ], [ 6, 5, 5, 4, 4, 4, 3 ], [ 6, 5, 5, 5, 4, 4, 3 ], [ 6, 5, 5, 5, 5, 4, 4 ], [ 6, 5, 5, 5, 5, 5, 4 ] ]
	skill_points_per_level: 6
	bonus_feats_levels: [ 5, 10 ]
	hd: 6
	type: "class"
	tags: [ "pathfinder" ]
	_id: "246b"
	spells: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	feats: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	specials: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	class_features: [ "Cast Arcane" ]
, 
	name: "Cleric"
	shortname: "Clr"
	base_attack_bonus: [ "0", "1", "2", "3", "3", "4", "5", "6/1", "6/1", "7/2", "8/3", "9/4", "9/4", "10/5", "11/6/1", "12/7/2", "12/7/2", "13/8/3", "14/9/4", "15/10/5" ]
	fort_save: [ 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12 ]
	ref_save: [ 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6 ]
	will_save: [ 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12 ]
	spells_per_day: [ [ 3, 1, "-", "-", "-", "-", "-", "-", "-", "-" ], [ 4, 2, "-", "-", "-", "-", "-", "-", "-", "-" ], [ 4, 2, 1, "-", "-", "-", "-", "-", "-", "-" ], [ 5, 3, 2, "-", "-", "-", "-", "-", "-", "-" ], [ 5, 3, 2, 1, "-", "-", "-", "-", "-", "-" ], [ 5, 3, 3, 2, "-", "-", "-", "-", "-", "-" ], [ 6, 4, 3, 2, 1, "-", "-", "-", "-", "-" ], [ 6, 4, 3, 3, 2, "-", "-", "-", "-", "-" ], [ 6, 4, 4, 3, 2, 1, "-", "-", "-", "-" ], [ 6, 4, 4, 3, 3, 2, "-", "-", "-", "-" ], [ 6, 5, 4, 4, 3, 2, 1, "-", "-", "-" ], [ 6, 5, 4, 4, 3, 3, 2, "-", "-", "-" ], [ 6, 5, 5, 4, 4, 3, 2, 1, "-", "-" ], [ 6, 5, 5, 4, 4, 3, 3, 2, "-", "-" ], [ 6, 5, 5, 5, 4, 4, 3, 2, 1, "-" ], [ 6, 5, 5, 5, 4, 4, 3, 3, 2, "-" ], [ 6, 5, 5, 5, 5, 4, 4, 3, 2, 1 ], [ 6, 5, 5, 5, 5, 4, 4, 3, 3, 2 ], [ 6, 5, 5, 5, 5, 5, 4, 4, 3, 3 ], [ 6, 5, 5, 5, 5, 5, 4, 4, 4, 4 ] ]
	skill_points_per_level: 2
	bonus_feats_levels: [ 3, 7, 11, 15, 19 ]
	languages: [ 0, 3, 14 ]
	hd: 8
	type: "class"
	tags: [ "pathfinder" ]
	_id: "d577"
	spells: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	feats: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	specials: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	custom: edit: 0: domains: 
		ui: "<table id='domains' style='width: 100%;'><tr><td>Domains</td></tr><tr><td><table id='domain_selector' style='width: 100%'></table></td></tr></table>"
		script: ->
			set_domain = (item, checked) ->
				if checked
					chardata.domains.push item.name
				else
					remove chardata.domains, chardata.domains.indexOf(item.name)
			
			chardata.domains = []	unless chardata.domains?
			available_domains = domains.get()
			if chardata.deity
				deity = deities.first(name: chardata.deity)
				console.log deity.name
				available_domains = domains.get(name: deity.domains)
			else
				available_domains = []
			console.log available_domains
			create_selector_grid available_domains, "table#domains", set_domain, chardata.domains, 4
	
	class_features: [ "Channel Energy", "Cast Divine" ]
, 
	name: "Druid"
	shortname: "Drd"
	base_attack_bonus: [ "0", "1", "2", "3", "3", "4", "5", "6/1", "6/1", "7/2", "8/3", "9/4", "9/4", "10/5", "11/6/1", "12/7/2", "12/7/2", "13/8/3", "14/9/4", "15/10/5" ]
	fort_save: [ 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12 ]
	ref_save: [ 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6 ]
	will_save: [ 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12 ]
	spells_per_day: [ [ 3, 1, "-", "-", "-", "-", "-", "-", "-", "-" ], [ 4, 2, "-", "-", "-", "-", "-", "-", "-", "-" ], [ 4, 2, 1, "-", "-", "-", "-", "-", "-", "-" ], [ 5, 3, 2, "-", "-", "-", "-", "-", "-", "-" ], [ 5, 3, 2, 1, "-", "-", "-", "-", "-", "-" ], [ 5, 3, 3, 2, "-", "-", "-", "-", "-", "-" ], [ 6, 4, 3, 2, 1, "-", "-", "-", "-", "-" ], [ 6, 4, 3, 3, 2, "-", "-", "-", "-", "-" ], [ 6, 4, 4, 3, 2, 1, "-", "-", "-", "-" ], [ 6, 4, 4, 3, 3, 2, "-", "-", "-", "-" ], [ 6, 5, 4, 4, 3, 2, 1, "-", "-", "-" ], [ 6, 5, 4, 4, 3, 3, 2, "-", "-", "-" ], [ 6, 5, 5, 4, 4, 3, 2, 1, "-", "-" ], [ 6, 5, 5, 4, 4, 3, 3, 2, "-", "-" ], [ 6, 5, 5, 5, 4, 4, 3, 2, 1, "-" ], [ 6, 5, 5, 5, 4, 4, 3, 3, 2, "-" ], [ 6, 5, 5, 5, 5, 4, 4, 3, 2, 1 ], [ 6, 5, 5, 5, 5, 4, 4, 3, 3, 2 ], [ 6, 5, 5, 5, 5, 5, 4, 4, 3, 3 ], [ 6, 5, 5, 5, 5, 5, 4, 4, 4, 4 ] ]
	skill_points_per_level: 4
	bonus_feats_levels: []
	languages: [ 16 ]
	hd: 8
	type: "class"
	tags: [ "pathfinder" ]
	_id: "6041"
	spells: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	feats: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	specials: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	class_features: [ "Cast Divine" ]
, 
	name: "Fighter"
	shortname: "Ftr"
	base_attack_bonus: [ "1", "2", "3", "4", "5", "6/1", "7/2", "8/3", "9/4", "10/5", "11/6/1", "12/7/2", "13/8/3", "14/9/4", "15/10/5", "16/11/6/1", "17/12/7/2", "18/13/8/3", "19/14/9/4", "20/15/10/5" ]
	fort_save: [ 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12 ]
	ref_save: [ 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6 ]
	will_save: [ 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6 ]
	spells_per_day: []
	skill_points_per_level: 2
	bonus_feats_levels: [ 0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]
	hd: 10
	type: "class"
	tags: [ "pathfinder" ]
	_id: "4b8c"
	spells: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	feats: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	specials: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	class_features: []
, 
	name: "Monk"
	shortname: "Mnk"
	base_attack_bonus: [ "0", "1", "2", "3", "3", "4", "5", "6/1", "6/1", "7/2", "8/3", "9/4", "9/4", "10/5", "11/6/1", "12/7/2", "12/7/2", "13/8/3", "14/9/4", "15/10/5" ]
	fort_save: [ 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12 ]
	ref_save: [ 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12 ]
	will_save: [ 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12 ]
	flurry_of_blows: [ "-2/-2", "-1/-1", "0/0", "1/1", "2/2", "3/3", "4/4", "5/5/0", "6/6/1", "7/7/2", "8/8/8/3", "9/9/9/4", "9/9/9/4", "10/10/10/5", "11/11/11/6/1", "12/12/12/7/2", "12/12/12/7/2", "13/13/13/8/3", "14/14/14/9/4", "15/15/15/10/5" ]
	flurry_weapons: [ 29, 30, 42, 43, 46, 55, 56, 57, 60, 61 ]
	flurry_damage: [ [ "1d4", "1d6", "1d8" ], [ "1d4", "1d6", "1d8" ], [ "1d4", "1d6", "1d8" ], [ "1d6", "1d8", "2d6" ], [ "1d6", "1d8", "2d6" ], [ "1d6", "1d8", "2d6" ], [ "1d6", "1d8", "2d6" ], [ "1d8", "1d10", "2d8" ], [ "1d8", "1d10", "2d8" ], [ "1d8", "1d10", "2d8" ], [ "1d8", "1d10", "2d8" ], [ "1d10", "2d6", "3d6" ], [ "1d10", "2d6", "3d6" ], [ "1d10", "2d6", "3d6" ], [ "1d10", "2d6", "3d6" ], [ "2d6", "2d8", "3d8" ], [ "2d6", "2d8", "3d8" ], [ "2d6", "2d8", "3d8" ], [ "2d6", "2d8", "3d8" ], [ "2d8", "2d10", "4d8" ] ]
	ac_bonus: [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4 ]
	spells_per_day: []
	skill_points_per_level: 4
	bonus_feats_levels: [ 0, 1, 5 ]
	hd: 8
	type: "class"
	tags: [ "pathfinder" ]
	_id: "4b46"
	spells: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	feats: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	specials: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	class_features: []
, 
	name: "Paladin"
	shortname: "Pal"
	base_attack_bonus: [ "1", "2", "3", "4", "5", "6/1", "7/2", "8/3", "9/4", "10/5", "11/6/1", "12/7/2", "13/8/3", "14/9/4", "15/10/5", "16/11/6/1", "17/12/7/2", "18/13/8/3", "19/14/9/4", "20/15/10/5" ]
	fort_save: [ 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12 ]
	ref_save: [ 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6 ]
	will_save: [ 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6 ]
	spells_per_day: [ [ -",-", -",-" ], [ "-", "-", "-", "-" ], [ "-", "-", "-", "-" ], [ 0, "-", "-", "-" ], [ 0, "-", "-", "-" ], [ 1, "-", "-", "-" ], [ 1, "-", "-", "-" ], [ 1, 0, "-", "-" ], [ 1, 0, "-", "-" ], [ 1, 1, "-", "-" ], [ 1, 1, 0, "-" ], [ 1, 1, 1, "-" ], [ 1, 1, 1, "-" ], [ 2, 1, 1, 0 ], [ 2, 1, 1, 1 ], [ 2, 2, 1, 1 ], [ 2, 2, 2, 1 ], [ 3, 2, 2, 1 ], [ 3, 3, 3, 2 ], [ 3, 3, 3, 3 ] ]
	skill_points_per_level: 2
	bonus_feats_levels: [ 4, 9, 15 ]
	hd: 1
	type: "class"
	tags: [ "pathfinder" ]
	_id: "487f"
	spells: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	feats: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	specials: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	class_features: [ "Channel Energy", "Cast Divine" ]
, 
	name: "Ranger"
	shortname: "Rng"
	base_attack_bonus: [ "1", "2", "3", "4", "5", "6/1", "7/2", "8/3", "9/4", "10/5", "11/6/1", "12/7/2", "13/8/3", "14/9/4", "15/10/5", "16/11/6/1", "17/12/7/2", "18/13/8/3", "19/14/9/4", "20/15/10/5" ]
	fort_save: [ 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12 ]
	ref_save: [ 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12 ]
	will_save: [ 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6 ]
	spells_per_day: [ [ "-", "-", "-", "-" ], [ "-", "-", "-", "-" ], [ "-", "-", "-", "-" ], [ 0, "-", "-", "-" ], [ 0, "-", "-", "-" ], [ 1, "-", "-", "-" ], [ 1, "-", "-", "-" ], [ 1, 0, "-", "-" ], [ 1, 0, "-", "-" ], [ 1, 1, "-", "-" ], [ 1, 1, 0, "-" ], [ 1, 1, 1, "-" ], [ 1, 1, 1, "-" ], [ 2, 1, 1, 0 ], [ 2, 1, 1, 1 ], [ 2, 2, 1, 1 ], [ 2, 2, 2, 1 ], [ 3, 2, 2, 1 ], [ 3, 3, 3, 2 ], [ 3, 3, 3, 3 ] ]
	skill_points_per_level: 6
	bonus_feats_levels: [ 4, 9, 14, 19 ]
	hd: 8
	type: "class"
	tags: [ "pathfinder" ]
	_id: "7226"
	spells: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	feats: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	specials: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	update_weapon_style: ->
		chardata.weapon_style = $("#weapon_style_select").val()
		save_character()
	
	edit_favored: (favored_name, db, index) ->
		chardata[favored_name] = []	unless chardata[favored_name]
		favored = db.first(name: (if chardata[favored_name].length > index then chardata[favored_name][index].name else ""))
		favored = favored._id	if favored
		select = create_select(favored_name + "_" + index, db.get(), "chardata." + favored_name + "[" + index + "] = { name: $('#" + favored_name + "_" + index + "').val(), val: (parseInt($('#" + favored_name + "_" + index + "_bonus').val()) | 0) }; save_character();", false, "style='width: 100%;'", null, favored)
		$("#" + favored_name + "s").append "<tr><td>" + select + "</td><td><input id=\"" + favored_name + "_" + index + "_bonus\" type=\"text\" size=\"1\"/></td></tr>"
		$("#" + favored_name + "_" + index + "_bonus").val (if chardata[favored_name][index] then chardata[favored_name][index].val else 0)
		$("#" + favored_name + "_" + index + "_bonus").blur ->
			chardata[favored_name][index] = 
				name: $("#" + favored_name + "_" + index).val()
				val: (parseInt($("#" + favored_name + "_" + index + "_bonus").val()) | 0)
			
			save_character()
	
	main_favored: (favored_name, db, short_name, specials_id) ->
		for i of chardata[favored_name]
			f_e = db.first(name: chardata[favored_name][i].name)
			$("#specials").append "<tr id=\"special_" + favored_name + "_" + f_e._id + "\"><td><input id=\"" + favored_name + "_" + f_e._id + "\" type=\"checkbox\"/></td><td><a class=fake_link onclick=\"show_item_detail(specials, '" + specials_id + "')\">" + chardata[favored_name][i].name + " " + pos(chardata[favored_name][i].val) + " (" + short_name + ")</a></td></tr>"
			$("input[id=\"" + favored_name + "_" + f_e._id + "\"]").bind "click", mod: chardata[favored_name][i].val, (e) ->
				if $(this).attr("checked")
					for j of chardata.weapons
						update_weapon_attack j, e.data.mod
						update_weapon_damage j, e.data.mod
					update_skill_ranks [ "Bluff", "Knowledge", "Perception", "Sense Motive", "Survival" ]
				else
					recalc_main_page()
	
	custom: 
		edit: 
			0: [ 
				ui: "<table id='favored_enemys' style='width: 100%;'><tr><td>Favored Enemies<span style='float:right'>Available Bonus:</span></td><td id='fe_bonus'></td></tr></table>"
				script: ->
					classes.first(name: "Ranger").edit_favored "favored_enemy", favored_enemies, 0
			 ]
			1: [ 
				ui: "<table style='width: 100%;'><tr><td>Weapon Style</td><td id='weapon_style'></td></tr></table>"
				script: ->
					select = create_select("weapon_style_select", [ 
						_id: 0
						name: "Two-handed fighting"
					, 
						_id: 1
						name: "Archery"
					 ], "classes.first({ name : 'Ranger' }).update_weapon_style()", false, "style='width: 100%;'", null, (if chardata.weapon_style == "Archery" then 1 else 0))
					$("#weapon_style").append "<tr><td>" + select + "</td></tr>"
			 ]
			2: [ 
				ui: "<table id='favored_terrains' style='width: 100%;'><tr><td>Favored Terrain <span style='float:right'>Available Bonus: </span></td><td id='ft_bonus'></td></tr></table>"
				script: ->
					classes.first(name: "Ranger").edit_favored "favored_terrain", favored_terrains, 0
			 ]
			4: [ script: ->
				classes.first(name: "Ranger").edit_favored "favored_enemy", favored_enemies, 1
			 ]
			7: [ script: ->
				classes.first(name: "Ranger").edit_favored "favored_terrain", favored_terrains, 1
			 ]
			9: [ script: ->
				classes.first(name: "Ranger").edit_favored "favored_enemy", favored_enemies, 2
			 ]
			12: [ script: ->
				classes.first(name: "Ranger").edit_favored "favored_terrain", favored_terrains, 2
			 ]
			14: [ script: ->
				classes.first(name: "Ranger").edit_favored "favored_enemy", favored_enemies, 3
			 ]
			17: [ script: ->
				classes.first(name: "Ranger").edit_favored "favored_terrain", favored_terrains, 3
			 ]
			19: [ script: ->
				classes.first(name: "Ranger").edit_favored "favored_enemy", favored_enemies, 4
			 ]
		
		main: before_specials: [ ->
			classes.first(name: "Ranger").main_favored "favored_enemy", favored_enemies, "Fav. Enemy", "90c3"
		, ->
			classes.first(name: "Ranger").main_favored "favored_terrain", favored_terrains, "Fav. Terr.", "9dc3"
		 ]
		feats: 
			1: script: (bonus) ->
				bonus.count += 1
				if chardata.weapon_style == "Archery"
					bonus.feats["Far Shot"] = true
					bonus.feats["Point-Blank Shot"] = true
					bonus.feats["Precise Shot"] = true
					bonus.feats["Rapid Shot"] = true
				else
					bonus.feats["Double Slice"] = true
					bonus.feats["Improved Shield Bash"] = true
					bonus.feats["Quick Draw"] = true
					bonus.feats["Two-Weapon Fighting"] = true
			
			5: script: (bonus) ->
				bonus.count += 1
				if chardata.weapon_style == "Archery"
					bonus.feats["Improved Precise Shot"] = true
					bonus.feats["Manyshot"] = true
				else
					bonus.feats["Improved Two-Weapon Fighting"] = true
					bonus.feats["Two-Weapon Defense"] = true
			
			9: script: (bonus) ->
				bonus.count += 1
				if chardata.weapon_style == "Archery"
					bonus.feats["Pinpoint Targeting"] = true
					bonus.feats["Shot on the Run"] = true
				else
					bonus.feats["Greater Two-Weapon Fighting"] = true
					bonus.feats["Two-Weapon Rend"] = true
	
	class_features: [ "Cast Divine" ]
, 
	name: "Rogue"
	shortname: "Rog"
	base_attack_bonus: [ "0", "1", "2", "3", "3", "4", "5", "6/1", "6/1", "7/2", "8/3", "9/4", "9/4", "10/5", "11/6/1", "12/7/2", "12/7/2", "13/8/3", "14/9/4", "15/10/5" ]
	fort_save: [ 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6 ]
	ref_save: [ 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12 ]
	will_save: [ 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6 ]
	spells_per_day: []
	skill_points_per_level: 8
	bonus_feats_levels: [ 4, 9, 14, 19 ]
	special_abilities_levels: [ 9, 12, 15, 19 ]
	hd: 6
	type: "class"
	tags: [ "pathfinder" ]
	_id: "3410"
	spells: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	feats: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	specials: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	class_features: []
, 
	name: "Sorcerer"
	shortname: "Sor"
	base_attack_bonus: [ "0", "1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6/1", "6/1", "7/2", "7/2", "8/3", "8/3", "9/4", "9/4", "10/5" ]
	fort_save: [ 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6 ]
	ref_save: [ 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6 ]
	will_save: [ 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12 ]
	spells_per_day: [ [ 5, 3, "-", "-", "-", "-", "-", "-", "-", "-" ], [ 6, 4, "-", "-", "-", "-", "-", "-", "-", "-" ], [ 6, 5, "-", "-", "-", "-", "-", "-", "-", "-" ], [ 6, 6, 3, "-", "-", "-", "-", "-", "-", "-" ], [ 6, 6, 4, "-", "-", "-", "-", "-", "-", "-" ], [ 6, 6, 5, 3, "-", "-", "-", "-", "-", "-" ], [ 6, 6, 6, 4, "-", "-", "-", "-", "-", "-" ], [ 6, 6, 6, 5, 3, "-", "-", "-", "-", "-" ], [ 6, 6, 6, 6, 4, "-", "-", "-", "-", "-" ], [ 6, 6, 6, 6, 5, 3, "-", "-", "-", "-" ], [ 6, 6, 6, 6, 6, 4, "-", "-", "-", "-" ], [ 6, 6, 6, 6, 6, 5, 3, "-", "-", "-" ], [ 6, 6, 6, 6, 6, 6, 4, "-", "-", "-" ], [ 6, 6, 6, 6, 6, 6, 5, 3, "-", "-" ], [ 6, 6, 6, 6, 6, 6, 6, 4, "-", "-" ], [ 6, 6, 6, 6, 6, 6, 6, 5, 3, "-" ], [ 6, 6, 6, 6, 6, 6, 6, 6, 4, "-" ], [ 6, 6, 6, 6, 6, 6, 6, 6, 5, 3 ], [ 6, 6, 6, 6, 6, 6, 6, 6, 6, 4 ], [ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6 ] ]
	spells_known: [ [ 4, 2, "-", "-", "-", "-", "-", "-", "-", "-" ], [ 5, 2, "-", "-", "-", "-", "-", "-", "-", "-" ], [ 5, 3, "-", "-", "-", "-", "-", "-", "-", "-" ], [ 6, 3, 1, "-", "-", "-", "-", "-", "-", "-" ], [ 6, 4, 2, "-", "-", "-", "-", "-", "-", "-" ], [ 7, 4, 2, 1, "-", "-", "-", "-", "-", "-" ], [ 7, 5, 3, 2, "-", "-", "-", "-", "-", "-" ], [ 8, 5, 3, 2, 1, "-", "-", "-", "-", "-" ], [ 8, 5, 4, 3, 2, "-", "-", "-", "-", "-" ], [ 9, 5, 4, 3, 2, 1, "-", "-", "-", "-" ], [ 9, 5, 5, 4, 3, 2, "-", "-", "-", "-" ], [ 9, 5, 5, 4, 3, 2, 1, "-", "-", "-" ], [ 9, 5, 5, 4, 4, 3, 2, "-", "-", "-" ], [ 9, 5, 5, 4, 4, 3, 2, 1, "-", "-" ], [ 9, 5, 5, 4, 4, 4, 3, 2, "-", "-" ], [ 9, 5, 5, 4, 4, 4, 3, 2, 1, "-" ], [ 9, 5, 5, 4, 4, 4, 3, 3, 2, "-" ], [ 9, 5, 5, 4, 4, 4, 3, 3, 2, 1 ], [ 9, 5, 5, 4, 4, 4, 3, 3, 3, 2 ], [ 9, 5, 5, 4, 4, 4, 3, 3, 3, 3 ] ]
	skill_points_per_level: 2
	bonus_feats_levels: [ 2, 5, 8, 11, 14, 17 ]
	hd: 4
	type: "class"
	tags: [ "pathfinder" ]
	_id: "9c80"
	spells: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	feats: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	specials: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	modify_bloodline_power_detail: (power) ->
		detail = power.detail
		special_level = null
		for level of power.levels
			special_level = level	if level <= chardata.classes["Sorcerer"].level
		if special_level
			for j of power.levels[special_level].vals
				detail = detail.replace("_$" + j, power.levels[special_level].vals[j])
		detail
	
	merge_bloodline_weapons: (char_weapons) ->
		bloodline = sorcerer_bloodlines.first(name: chardata.bloodline)
		if bloodline
			bloodlines_weapons = undefined
			for i of bloodline.powers
				power = bloodline_powers.first(name: bloodline.powers[i])
				if power
					power_weapons = undefined
					for level of power.levels
						if level <= chardata.classes["Sorcerer"].level and power.levels[level].weapons
							for i of power.levels[level].weapons
								console.log power.levels[level].weapons[i].name
								unless weapons.first(name: power.levels[level].weapons[i].name)
									weapons.insert power.levels[level].weapons[i]
								else
									weapons.update power.levels[level].weapons[i], name: power.levels[level].weapons[i].name
							power_weapons = []
							$.merge power_weapons, power.levels[level].weapons
						else
							break
					if power_weapons
						bloodlines_weapons = []	unless bloodlines_weapons
						$.merge bloodlines_weapons, power_weapons
			$.merge char_weapons, bloodlines_weapons	if bloodlines_weapons
	
	calc_dr_saves: (save, type) ->
		bloodline = sorcerer_bloodlines.first(name: chardata.bloodline)
		if bloodline
			for i of bloodline.powers
				power = bloodline_powers.first(name: bloodline.powers[i])
				dr_fn = null
				for level of power.levels
					dr_fn = power.levels[level][type]	if level <= chardata.classes["Sorcerer"].level and power.levels[level][type]
				dr_fn save	if dr_fn
	
	custom: 
		all: calc_sr: [ (save) ->
			classes.first(name: "Sorcerer").calc_dr_saves save, "sr"
		 ]
		edit: 0: [ 
			ui: "<table style='width: 100%;border-collapse: collapse;'><tr style='background-color: #E2F0F9'><td>Bloodline: </td><td id='bloodline'></td></tr></table>"
			script: ->
				char_bloodline = sorcerer_bloodlines.first(name: chardata.bloodline)
				char_draconic_type = null
				char_draconic_type = draconic_types.first(name: chardata.draconic_type)	if chardata.draconic_type
				update_bloodline = ->
					chardata.bloodline = $("#bloodline_select").val()
					$("#draconic_type").toggle chardata.bloodline == "Draconic"
					chardata.draconic_type = (if chardata.bloodline == "Draconic" then $("#draconic_select").val() else null)
					save_character()
				
				select = create_select("bloodline_select", sorcerer_bloodlines.get(), "update_bloodline(); edit.recalc_edit_page();", false, "style='width: 100%;'", null, (if char_bloodline then char_bloodline._id else ""))
				draconic_select = create_select("draconic_select", draconic_types.get(), "update_bloodline(); edit.recalc_edit_page();", false, "style='width: 100%;'", null, (if char_draconic_type then char_draconic_type._id else ""))
				$("#bloodline").append "<tr><td></td><td>" + select + "</td></tr>"
				$("#bloodline").append "<tr id=\"draconic_type\"><td>type:</td><td>" + draconic_select + "</td></tr>"
				$("#draconic_type").toggle chardata.bloodline == "Draconic"
				update_bloodline()	unless chardata.bloodline
		 ]
		skills: [ (class_skills) ->
			char_bloodline = sorcerer_bloodlines.first(name: chardata.bloodline)
			class_skills.push char_bloodline.skill
		 ]
		main: 
			before_weapons_build: [ (char_weapons) ->
				classes.first(name: "Sorcerer").merge_bloodline_weapons char_weapons
			 ]
			before_weapons_populate: [ (char_weapons) ->
				classes.first(name: "Sorcerer").merge_bloodline_weapons char_weapons
			 ]
			before_weapons_recalc: [ (char_weapons) ->
				classes.first(name: "Sorcerer").merge_bloodline_weapons char_weapons
			 ]
			before_spells: [ (all_spells) ->
				bloodline = sorcerer_bloodlines.first(name: chardata.bloodline)
				if bloodline
					class_spell_lvl = 0
					for bloodline_level of bloodline.spells
						spell = spells.first(name: bloodline.spells[bloodline_level])
						all_spells[spell.classes["Sorcerer"]] = []	unless all_spells[spell.classes["Sorcerer"]]
						all_spells[class_spell_lvl].push bloodline.spells[bloodline_level]	if chardata.classes["Sorcerer"].level >= bloodline_level and all_spells[class_spell_lvl].indexOf(bloodline.spells[bloodline_level]) == -1
						class_spell_lvl++
			 ]
			after_spells: [ ->
				bloodline = sorcerer_bloodlines.first(name: chardata.bloodline)
				if bloodline
					for level of bloodline.spells
						if chardata.classes["Sorcerer"].level >= level
							spell = spells.first(name: bloodline.spells[level])
							$("#spell_" + spell._id).wrap "<i />"
					$("#etc").append "<i>" + chardata.bloodline + " &nbsp;</i>"
			 ]
			before_specials: [ ->
				bloodline = sorcerer_bloodlines.first(name: chardata.bloodline)
				if bloodline
					for i of bloodline.powers
						power = bloodline_powers.first(name: bloodline.powers[i])
						special = null
						for level of power.levels
							special = power	if level <= chardata.classes["Sorcerer"].level
						$("#specials").append "<tr><td></td><td><a class=fake_link onclick='show_item_detail(bloodline_powers, \"" + special._id + "\", classes.first({ name: \"Sorcerer\"}).modify_bloodline_power_detail)'>" + special.name + "</a></td></tr>"	if special
			 ]
			damage_reduction: [ (dr) ->
				classes.first(name: "Sorcerer").calc_dr_saves dr, "dr"
			 ]
			save: [ (save) ->
				classes.first(name: "Sorcerer").calc_dr_saves save, "save"
			 ]
			Str: [ (mod) ->
				classes.first(name: "Sorcerer").calc_dr_saves mod, "Str"
			 ]
		
		feats: 
			6: script: (bonus) ->
				bonus.count += 1
				bloodline = sorcerer_bloodlines.first(name: chardata.bloodline)
				if bloodline
					for i of bloodline.feats
						bonus.feats[bloodline.feats[i]] = true
			
			12: script: (bonus) ->
				bonus.count += 1
			
			18: script: (bonus) ->
				bonus.count += 1
		
		spells: 
			before_build: [ (spells_known) ->
				bloodline = sorcerer_bloodlines.first(name: chardata.bloodline)
				if bloodline
					for i of bloodline.powers
						power = bloodline_powers.first(name: bloodline.powers[i])
						spells_known_fn = null
						for level of power.levels
							spells_known_fn = power.levels[level].spells_known	if level <= chardata.classes["Sorcerer"].level and power.levels[level].spells_known
						spells_known_fn spells_known	if spells_known_fn
			 ]
			after_spells: [ ->
				bloodline = sorcerer_bloodlines.first(name: chardata.bloodline)
				if bloodline
					for bloodline_level of bloodline.spells
						if chardata.classes["Sorcerer"].level >= bloodline_level
							spell = spells.first(name: bloodline.spells[bloodline_level])
							$("#spell_" + spell._id).wrap "<i />"
							$("#" + spell._id + "_Sorcerer").attr "disabled", true
							if chardata.classes["Sorcerer"].spells[spell.classes["Sorcerer"]]
								idx = chardata.classes["Sorcerer"].spells[spell.classes["Sorcerer"]].indexOf(spell.name)
								remove chardata.classes["Sorcerer"].spells[spell.classes["Sorcerer"]], idx	if idx > -1
			 ]
	
	class_features: [ "Cast Arcane" ]
, 
	name: "Wizard"
	shortname: "Wiz"
	base_attack_bonus: [ "0", "1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6/1", "6/1", "7/2", "7/2", "8/3", "8/3", "9/4", "9/4", "10/5" ]
	fort_save: [ 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6 ]
	ref_save: [ 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6 ]
	will_save: [ 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12 ]
	spells_per_day: [ [ 3, 1, "-", "-", "-", "-", "-", "-", "-", "-" ], [ 4, 2, "-", "-", "-", "-", "-", "-", "-", "-" ], [ 4, 2, 1, "-", "-", "-", "-", "-", "-", "-" ], [ 4, 3, 2, "-", "-", "-", "-", "-", "-", "-" ], [ 4, 3, 2, 1, "-", "-", "-", "-", "-", "-" ], [ 4, 3, 3, 2, "-", "-", "-", "-", "-", "-" ], [ 4, 4, 3, 2, 1, "-", "-", "-", "-", "-" ], [ 4, 4, 3, 3, 2, "-", "-", "-", "-", "-" ], [ 4, 4, 4, 3, 2, 1, "-", "-", "-", "-" ], [ 4, 4, 4, 3, 3, 2, "-", "-", "-", "-" ], [ 4, 4, 4, 4, 3, 2, 1, "-", "-", "-" ], [ 4, 4, 4, 4, 3, 3, 2, "-", "-", "-" ], [ 4, 4, 4, 4, 4, 3, 2, 1, "-", "-" ], [ 4, 4, 4, 4, 4, 3, 3, 2, "-", "-" ], [ 4, 4, 4, 4, 4, 4, 3, 2, 1, "-" ], [ 4, 4, 4, 4, 4, 4, 3, 3, 2, "-" ], [ 4, 4, 4, 4, 4, 4, 4, 3, 2, 1 ], [ 4, 4, 4, 4, 4, 4, 4, 3, 3, 2 ], [ 4, 4, 4, 4, 4, 4, 4, 4, 3, 3 ], [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ] ]
	spells_known: [ [ 3, 1, "-", "-", "-", "-", "-", "-", "-", "-" ], [ 4, 2, "-", "-", "-", "-", "-", "-", "-", "-" ], [ 4, 2, 1, "-", "-", "-", "-", "-", "-", "-" ], [ 4, 3, 2, "-", "-", "-", "-", "-", "-", "-" ], [ 4, 3, 2, 1, "-", "-", "-", "-", "-", "-" ], [ 4, 3, 3, 2, "-", "-", "-", "-", "-", "-" ], [ 4, 4, 3, 2, 1, "-", "-", "-", "-", "-" ], [ 4, 4, 3, 3, 2, "-", "-", "-", "-", "-" ], [ 4, 4, 4, 3, 2, 1, "-", "-", "-", "-" ], [ 4, 4, 4, 3, 3, 2, "-", "-", "-", "-" ], [ 4, 4, 4, 4, 3, 2, 1, "-", "-", "-" ], [ 4, 4, 4, 4, 3, 3, 2, "-", "-", "-" ], [ 4, 4, 4, 4, 4, 3, 2, 1, "-", "-" ], [ 4, 4, 4, 4, 4, 3, 3, 2, "-", "-" ], [ 4, 4, 4, 4, 4, 4, 3, 2, 1, "-" ], [ 4, 4, 4, 4, 4, 4, 3, 3, 2, "-" ], [ 4, 4, 4, 4, 4, 4, 4, 3, 2, 1 ], [ 4, 4, 4, 4, 4, 4, 4, 3, 3, 2 ], [ 4, 4, 4, 4, 4, 4, 4, 4, 3, 3 ], [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ] ]
	skill_points_per_level: 2
	bonus_feats_levels: [ 4, 9, 14, 19 ]
	languages: [ 16 ]
	hd: 4
	type: "class"
	tags: [ "pathfinder" ]
	_id: "d1b5"
	spells: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	feats: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	specials: [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ]
	class_features: [ "Cast Arcane" ]
 ])
