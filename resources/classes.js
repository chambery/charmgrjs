classes = new TAFFY ([{
    name: "Barbarian",
    shortname: "Brb",
    base_attack_bonus: ['1', '2', '3', '4', '5', '6/1', '7/2', '8/3', '9/4', '10/5', '11/6/1', '12/7/2', '13/8/3', '14/9/4', '15/10/5', '16/11/6/1', '17/12/7/2', '18/13/8/3', '19/14/9/4', '20/15/10/5'],
    fort_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    ref_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    will_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    spells_per_day: [],
    spells_known: [],
    skill_points_per_level: 4,
    bonus_feats_levels: [6, 12, 18],
	hd: 12, 
	type: "class", 
	tags: ["pathfinder"],
    spells: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    feats: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    specials: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    custom: {
    	edit: {
    		0: [{
    				script: "function update_literacy(language_id) {\n var checked = $('#literacy_' + language_id + '_check').attr('checked');\n var language = languages.first( {\n _id : language_id }\n);\n if (!checked && chardata.classes['Barbarian'].literacy[language.name]) {\n delete chardata.classes['Barbarian'].literacy[language.name];\n }\n else {\n chardata.classes['Barbarian'].literacy[language.name]=true;\n }\n var skill_pts = calc_skill_points() - (count_attrs(chardata.classes['Barbarian'].literacy) * 2);\n $('#skill_pts_remaining').html(skill_pts < 0 ? [ '<span class=\"alarm\">', skill_pts, '</span>' ].join('') : skill_pts);\n save_character();\n }\n if (chardata.classes['Barbarian'].literacy == null) {\n chardata.classes['Barbarian'].literacy = [];\n }\n if ($('#literacy_header').length == 0) {\n $('#language_table').prepend('<tr><td id=\"literacy_header\" colspan=2></td><td>Lit</td>');\n }\n var langs = [];\n for ( var classname in chardata.classes) {\n var clazz = classs.first( {\n name : classname }\n);\n langs = langs.concat(clazz.languages != null ? clazz.languages : []);\n }\n langs = langs.concat(race.languages);\n langs = langs.concat(chardata.languages);\n for ( var i in langs) {\n var lang = languages.first( {\n name : langs[i] }\n);\n if ($('#literacy_' + lang._id).length == 0) {\n $('tr#language_' + lang._id).append('<td id=\"literacy_' + lang._id + '\"><input id=\"literacy_' + lang._id + '_check\" type=\"checkbox\" /></td>');\n $('#literacy_' + lang._id + '_check').click(function() {\n return update_literacy(lang._id);\n }\n);\n if (chardata.classes['Barbarian'].literacy[lang.name]) {\n $('#literacy_' + lang._id + '_check').attr('checked', 'checked');\n }\n }\n }"
    		}]
    	}
    }
}, {
    name: "Bard",
    shortname: "Brd",
    base_attack_bonus: ['0', '1', '2', '3', '3', '4', '5', '6/1', '6/1', '7/2', '8/3', '9/4', '9/4', '10/5', '11/6/1', '12/7/2', '12/7/2', '13/8/3', '14/9/4', '15/10/5'],
    fort_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    ref_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    will_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    spells_per_day: [[2, '-', '-', '-', '-', '-', '-'], [3, '-', '-', '-', '-', '-', '-'], [3, 1, '-', '-', '-', '-', '-'], [3, 2, '-', '-', '-', '-', '-'], [3, 3, 1, '-', '-', '-', '-'], [3, 3, 2, '-', '-', '-', '-'], [3, 3, 2, '-', '-', '-', '-'], [3, 3, 3, 1, '-', '-', '-'], [3, 3, 3, 2, '-', '-', '-'], [3, 3, 3, 2, '-', '-', '-'], [3, 3, 3, 3, 1, '-', '-'], [3, 3, 3, 3, 2, '-', '-'], [3, 3, 3, 3, 2, '-', '-'], [4, 3, 3, 3, 3, 1, '-'], [4, 4, 3, 3, 3, 2, '-'], [4, 4, 4, 3, 3, 2, '-'], [4, 4, 4, 4, 3, 3, 1], [4, 4, 4, 4, 4, 3, 2], [4, 4, 4, 4, 4, 4, 3], [4, 4, 4, 4, 4, 4, 4]],
    spells_known: [[4, '-', '-', '-', '-', '-', '-'], [5, 2, '-', '-', '-', '-', '-'], [6, 3, '-', '-', '-', '-', '-'], [6, 3, 2, '-', '-', '-', '-'], [6, 4, 3, '-', '-', '-', '-'], [6, 4, 3, '-', '-', '-', '-'], [6, 4, 4, 2, '-', '-', '-'], [6, 4, 4, 3, '-', '-', '-'], [6, 4, 4, 3, '-', '-', '-'], [6, 4, 4, 4, 2, '-', '-'], [6, 4, 4, 4, 3, '-', '-'], [6, 4, 4, 4, 3, '-', '-'], [6, 4, 4, 4, 4, 2, '-'], [6, 4, 4, 4, 4, 3, '-'], [6, 4, 4, 4, 4, 3, '-'], [6, 5, 4, 4, 4, 4, 2], [6, 5, 5, 4, 4, 4, 3], [6, 5, 5, 5, 4, 4, 3], [6, 5, 5, 5, 5, 4, 4], [6, 5, 5, 5, 5, 5, 4]],
    skill_points_per_level: 6,
    bonus_feats_levels: [5, 10],
	hd: 6, 
	type: "class", 
	tags: ["pathfinder"],
    spells: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    feats: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    specials: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
	class_features: ["Cast Arcane"]
}, {
    name: "Cleric",
    shortname: "Clr",
    base_attack_bonus: ['0', '1', '2', '3', '3', '4', '5', '6/1', '6/1', '7/2', '8/3', '9/4', '9/4', '10/5', '11/6/1', '12/7/2', '12/7/2', '13/8/3', '14/9/4', '15/10/5'],
    fort_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    ref_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    will_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    spells_per_day: [[3, 1, '-', '-', '-', '-', '-', '-', '-', '-'], [4, 2, '-', '-', '-', '-', '-', '-', '-', '-'], [4, 2, 1, '-', '-', '-', '-', '-', '-', '-'], [5, 3, 2, '-', '-', '-', '-', '-', '-', '-'], [5, 3, 2, 1, '-', '-', '-', '-', '-', '-'], [5, 3, 3, 2, '-', '-', '-', '-', '-', '-'], [6, 4, 3, 2, 1, '-', '-', '-', '-', '-'], [6, 4, 3, 3, 2, '-', '-', '-', '-', '-'], [6, 4, 4, 3, 2, 1, '-', '-', '-', '-'], [6, 4, 4, 3, 3, 2, '-', '-', '-', '-'], [6, 5, 4, 4, 3, 2, 1, '-', '-', '-'], [6, 5, 4, 4, 3, 3, 2, '-', '-', '-'], [6, 5, 5, 4, 4, 3, 2, 1, '-', '-'], [6, 5, 5, 4, 4, 3, 3, 2, '-', '-'], [6, 5, 5, 5, 4, 4, 3, 2, 1, '-'], [6, 5, 5, 5, 4, 4, 3, 3, 2, '-'], [6, 5, 5, 5, 5, 4, 4, 3, 2, 1], [6, 5, 5, 5, 5, 4, 4, 3, 3, 2], [6, 5, 5, 5, 5, 5, 4, 4, 3, 3], [6, 5, 5, 5, 5, 5, 4, 4, 4, 4]],
    spells_known: [],
    skill_points_per_level: 2,
    bonus_feats_levels: [3, 7, 11, 15, 19],
	languages: [0, 3, 14],
	hd: 8, 
	type: "class", 
	tags: ["pathfinder"],
    spells: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    feats: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    specials: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    custom: {
    	edit: {
				0: [{
						ui: "<table id='domains' style='width: 100%;'><tr><td>Domains</td></tr><tr><td><table id='domain_selector' style='width: 100%'></table></td></tr></table>",
					script: "var set_domain = function(item, checked) { if(checked) {chardata.domains.push(item.name);} else {remove(chardata.domains, chardata.domains.indexOf(item.name));}}; if(chardata.domains == null) { chardata.domains = []; } var available_domains = domains.get(); if(chardata.deity) { var deity = deitys.first({ name: chardata.deity }); available_domains = domains.get({ name: deity.domains }); } else { available_domains = []; } create_selector_grid(available_domains, 'table#domains', set_domain, chardata.domains, 4);"
				}]
			}
    },
	class_features: ["Channel Energy", "Cast Divine"]
}, {
    name: "Druid",
    shortname: "Drd",
    base_attack_bonus: ['0', '1', '2', '3', '3', '4', '5', '6/1', '6/1', '7/2', '8/3', '9/4', '9/4', '10/5', '11/6/1', '12/7/2', '12/7/2', '13/8/3', '14/9/4', '15/10/5'],
    fort_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    ref_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    will_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    spells_per_day: [[3, 1, '-', '-', '-', '-', '-', '-', '-', '-'], [4, 2, '-', '-', '-', '-', '-', '-', '-', '-'], [4, 2, 1, '-', '-', '-', '-', '-', '-', '-'], [5, 3, 2, '-', '-', '-', '-', '-', '-', '-'], [5, 3, 2, 1, '-', '-', '-', '-', '-', '-'], [5, 3, 3, 2, '-', '-', '-', '-', '-', '-'], [6, 4, 3, 2, 1, '-', '-', '-', '-', '-'], [6, 4, 3, 3, 2, '-', '-', '-', '-', '-'], [6, 4, 4, 3, 2, 1, '-', '-', '-', '-'], [6, 4, 4, 3, 3, 2, '-', '-', '-', '-'], [6, 5, 4, 4, 3, 2, 1, '-', '-', '-'], [6, 5, 4, 4, 3, 3, 2, '-', '-', '-'], [6, 5, 5, 4, 4, 3, 2, 1, '-', '-'], [6, 5, 5, 4, 4, 3, 3, 2, '-', '-'], [6, 5, 5, 5, 4, 4, 3, 2, 1, '-'], [6, 5, 5, 5, 4, 4, 3, 3, 2, '-'], [6, 5, 5, 5, 5, 4, 4, 3, 2, 1], [6, 5, 5, 5, 5, 4, 4, 3, 3, 2], [6, 5, 5, 5, 5, 5, 4, 4, 3, 3], [6, 5, 5, 5, 5, 5, 4, 4, 4, 4]],
    spells_known: [],
    skill_points_per_level: 4,
    bonus_feats_levels: [],
    languages: [16],
	hd: 8, 
	type: "class", 
	tags: ["pathfinder"],
    spells: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    feats: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    specials: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
	class_features: ["Cast Divine"]

}, {
    name: "Fighter",
    shortname: "Ftr",
    base_attack_bonus: ['1', '2', '3', '4', '5', '6/1', '7/2', '8/3', '9/4', '10/5', '11/6/1', '12/7/2', '13/8/3', '14/9/4', '15/10/5', '16/11/6/1', '17/12/7/2', '18/13/8/3', '19/14/9/4', '20/15/10/5'],
    fort_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    ref_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    will_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    spells_per_day: [],
    spells_known: [],
    skill_points_per_level: 2,
    bonus_feats_levels: [0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
	hd: 10, 
	type: "class", 
	tags: ["pathfinder"],
    spells: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    feats: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    specials: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
}, {
    name: "Monk",
    shortname: "Mnk",
    base_attack_bonus: ['0', '1', '2', '3', '3', '4', '5', '6/1', '6/1', '7/2', '8/3', '9/4', '9/4', '10/5', '11/6/1', '12/7/2', '12/7/2', '13/8/3', '14/9/4', '15/10/5'],
    fort_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    ref_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    will_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    flurry_of_blows: ['-2/-2','-1/-1','0/0','1/1','2/2','3/3','4/4','5/5/0','6/6/1','7/7/2','8/8/8/3','9/9/9/4','9/9/9/4','10/10/10/5','11/11/11/6/1','12/12/12/7/2','12/12/12/7/2','13/13/13/8/3','14/14/14/9/4','15/15/15/10/5'],
    flurry_weapons: [29, 30, 42, 43, 46, 55, 56, 57, 60, 61],
    flurry_damage: [['1d4','1d6','1d8'],['1d4','1d6','1d8'],['1d4','1d6','1d8'],['1d6','1d8','2d6'],['1d6','1d8','2d6'],['1d6','1d8','2d6'],['1d6','1d8','2d6'],['1d8','1d10','2d8'],['1d8','1d10','2d8'],['1d8','1d10','2d8'],['1d8','1d10','2d8'],['1d10','2d6','3d6'],['1d10','2d6','3d6'],['1d10','2d6','3d6'],['1d10','2d6','3d6'],['2d6','2d8','3d8'],['2d6','2d8','3d8'],['2d6','2d8','3d8'],['2d6','2d8','3d8'],['2d8','2d10','4d8']],
    ac_bonus: [0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4],
    spells_per_day: [],
    spells_known: [],
    skill_points_per_level: 4,
    bonus_feats_levels: [0, 1, 5],
	hd: 8, 
	type: "class", 
	tags: ["pathfinder"],
    spells: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    feats: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    specials: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
}, {
	// TODO - Impl turn undead (55)
    name: "Paladin",
    shortname: "Pal",
    base_attack_bonus: ['1', '2', '3', '4', '5', '6/1', '7/2', '8/3', '9/4', '10/5', '11/6/1', '12/7/2', '13/8/3', '14/9/4', '15/10/5', '16/11/6/1', '17/12/7/2', '18/13/8/3', '19/14/9/4', '20/15/10/5'],
    fort_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    ref_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    will_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    spells_per_day: [[-',-', -',-'], ['-', '-', '-', '-'], ['-', '-', '-', '-'], [0, '-', '-', '-'], [0, '-', '-', '-'], [1, '-', '-', '-'], [1, '-', '-', '-'], [1, 0, '-', '-'], [1, 0, '-', '-'], [1, 1, '-', '-'], [1, 1, 0, '-'], [1, 1, 1, '-'], [1, 1, 1, '-'], [2, 1, 1, 0], [2, 1, 1, 1], [2, 2, 1, 1], [2, 2, 2, 1], [3, 2, 2, 1], [3, 3, 3, 2], [3, 3, 3, 3]],
    spells_known: [],
    skill_points_per_level: 2,
    bonus_feats_levels: [4, 9, 15],
	hd: 1, 
	type: "class", 
	tags: ["pathfinder"],
    spells: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    feats: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    specials: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
	class_features: ["Channel Energy", "Cast Divine"]
}, {
    name: "Ranger",
    shortname: "Rng",
    base_attack_bonus: ['1', '2', '3', '4', '5', '6/1', '7/2', '8/3', '9/4', '10/5', '11/6/1', '12/7/2', '13/8/3', '14/9/4', '15/10/5', '16/11/6/1', '17/12/7/2', '18/13/8/3', '19/14/9/4', '20/15/10/5'],
    fort_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    ref_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    will_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    spells_per_day: [['-', '-', '-', '-'], ['-', '-', '-', '-'], ['-', '-', '-', '-'], [0, '-', '-', '-'], [0, '-', '-', '-'], [1, '-', '-', '-'], [1, '-', '-', '-'], [1, 0, '-', '-'], [1, 0, '-', '-'], [1, 1, '-', '-'], [1, 1, 0, '-'], [1, 1, 1, '-'], [1, 1, 1, '-'], [2, 1, 1, 0], [2, 1, 1, 1], [2, 2, 1, 1], [2, 2, 2, 1], [3, 2, 2, 1], [3, 3, 3, 2], [3, 3, 3, 3]],
    spells_known: [],
    skill_points_per_level: 6,
    bonus_feats_levels: [4, 9, 14, 19],
	hd: 8, 
	type: "class", 
	tags: ["pathfinder"],
    spells: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    feats: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    specials: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    custom: {
		edit: {
			0: [{
    			ui: "<table id='favored_enemies' style='width: 100%;'><tr><td>Favored Enemies</td></tr></table>", 
    			script: "if(!chardata.favored_enemies){ chardata.favored_enemies = []; } var favored_enemy = favored_enemys.first({ name: chardata.favored_enemies.length > 0 ? chardata.favored_enemies[0].name : '' }); if(favored_enemy) { favored_enemy = favored_enemy._id; } var select = create_select('favored_enemy_0', favored_enemys.get(), \"chardata.favored_enemies[0] = { name: $('#favored_enemy_0').val(), val: (parseInt($('#favored_enemy_0_bonus').val()) | 0) }; save_character();\", false, \"style='width: 100%;'\", null, favored_enemy); $('#favored_enemies').append('<tr><td>' + select + '</td><td><input id=\"favored_enemy_0_bonus\" type=\"text\" size=\"1\"/></td></tr>'); $('#favored_enemy_0_bonus').val(chardata.favored_enemies[0] ? chardata.favored_enemies[0].val : 0); $('#favored_enemy_0_bonus').blur(function() { chardata.favored_enemies[0] = { name: $('#favored_enemy_0').val(), val: (parseInt($('#favored_enemy_0_bonus').val()) | 0) }; save_character(); });" 
    		}],
    	1: [{
    			ui: "<table style='width: 100%;'><tr><td>Weapon Style</td><td id='weapon_style'></td></tr></table>",
    			script: "update_weapon_style = function () { var ranger = classs.first({ name: 'Ranger'}); remove(ranger.feats[1], ranger.feats[1].indexOf('Rapid Shot'));	remove(ranger.feats[1], ranger.feats[1].indexOf('Two-Weapon Fighting')); chardata.weapon_style = $('#weapon_style_select').val(); var weapon_style_feat = (chardata.weapon_style == 'Archery' ? 'Rapid Shot' : 'Two-Weapon Fighting'); ranger.feats[1].push(weapon_style_feat); chardata.weapon_style = $('#weapon_style_select').val(); save_character(); }; var select = create_select('weapon_style_select', [{_id: 0, name: 'Two-handed fighting'}, {_id: 1, name: 'Archery'}], \"update_weapon_style()\" , false, \"style='width: 100%;'\", null, (chardata.weapon_style == 'Archery' ? 1 : 0)); $('#weapon_style').append('<tr><td>' + select + '</td></tr>');"
    		}],
    	4: [{
    			script: "var favored_enemy = favored_enemys.first({ name: chardata.favored_enemies.length > 1 ? chardata.favored_enemies[1].name : '' }); if(favored_enemy) { favored_enemy = favored_enemy._id; } var select = create_select('favored_enemy_1', favored_enemys.get(), \"chardata.favored_enemies[1] = { name: $('#favored_enemy_1').val(), val: (parseInt($('#favored_enemy_1_bonus').val()) | 0) }; save_character();\", false, \"style='width: 100%;'\", null, favored_enemy); $('#favored_enemies').append('<tr><td>' + select + '</td><td><input id=\"favored_enemy_1_bonus\" type=\"text\" size=\"1\"/></td></tr>'); $('#favored_enemy_1_bonus').val(chardata.favored_enemies[1] ? chardata.favored_enemies[1].val : 0); $('#favored_enemy_1_bonus').blur(function() { chardata.favored_enemies[1] = { name: $('#favored_enemy_1').val(), val: (parseInt($('#favored_enemy_1_bonus').val()) | 0) }; save_character(); });" 
    		}],
   		9: [{
    			script: "var favored_enemy = favored_enemys.first({ name: chardata.favored_enemies.length > 2 ? chardata.favored_enemies[2].name : '' }); if(favored_enemy) { favored_enemy = favored_enemy._id; } var select = create_select('favored_enemy_2', favored_enemys.get(), \"chardata.favored_enemies[2] = { name: $('#favored_enemy_2').val(), val: (parseInt($('#favored_enemy_2_bonus').val()) | 0) }; save_character();\", false, \"style='width: 100%;'\", null, favored_enemy); $('#favored_enemies').append('<tr><td>' + select + '</td><td><input id=\"favored_enemy_2_bonus\" type=\"text\" size=\"1\"/></td></tr>'); $('#favored_enemy_2_bonus').val(chardata.favored_enemies[2] ? chardata.favored_enemies[2].val : 0); $('#favored_enemy_2_bonus').blur(function() { chardata.favored_enemies[2] = { name: $('#favored_enemy_2').val(), val: (parseInt($('#favored_enemy_2_bonus').val()) | 0) }; save_character(); });" 
    		}]
		},
		main: [
			"for (var i in chardata.favored_enemies) {var f_e = favored_enemys.first({ name : chardata.favored_enemies[i].name }); $('#specials').append('<tr id=\"special_favored_enemy_' + f_e._id	+ '\"><td><input id=\"favored_enemy_' + f_e._id + '\" type=\"checkbox\"/></td><td>' + chardata.favored_enemies[i].name + ' ' + pos(chardata.favored_enemies[i].val) + ' (Fav. Enemy)</td></tr>'); $('input[id=\"favored_enemy_' + f_e._id + '\"]').bind('click', { mod : chardata.favored_enemies[i].val }, function(e) { if ($(this).attr('checked')) { for ( var j in chardata.weapons) { update_weapon_attack(j, e.data.mod);	update_weapon_damage(j, e.data.mod); } update_skill_ranks( [ 'Bluff', 'Knowledge (arcana)', 'Knowledge (architecture and engineering)',	'Knowledge (dungeoneering)','Knowledge (geography)', 'Knowledge (history)',	'Knowledge (local)', 'Knowledge (nature)', 'Knowledge (nobility and royalty)', 'Knowledge (religion)', 'Knowledge (the planes)', 'Perception', 'Sense Motive', 'Survival' ]);	} else { recalc_main_page(); } }); }",
			"if (chardata.weapon_style) { var ranger = classs.first({ name: 'Ranger'}); var weapon_style_feat = (chardata.weapon_style == 'Archery' ? 'Rapid Shot' : 'Two-Weapon Fighting'); if (ranger.feats[1].indexOf(weapon_style_feat) == -1) { ranger.feats[1].push(weapon_style_feat); } }"
		]
		
		// feats: [
		// 		"if(chardata.weapon_style) { var weapon_style = (chardata.weapon_style == 'Archery' ? 'Rapid Shot' : 'Two-Weapon Fighting'); var feat = feats.first({ name: weapon_style });\n$('input#' + feat._id).attr('checked', true);\n disable_feat(feat, true);\n$('tr#' + feat._id).addClass('class_feat'); }"
		// ]
    },
	class_features: ["Cast Divine"]
}, {
	// TODO - handle rogue special ability(s) (how to?)  (not listed below)
    name: "Rogue",
    shortname: "Rog",
    base_attack_bonus: ['0', '1', '2', '3', '3', '4', '5', '6/1', '6/1', '7/2', '8/3', '9/4', '9/4', '10/5', '11/6/1', '12/7/2', '12/7/2', '13/8/3', '14/9/4', '15/10/5'],
    fort_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    ref_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    will_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    spells_per_day: [],
    spells_known: [],
    skill_points_per_level: 8,
    bonus_feats_levels: [4, 9, 14, 19],
    special_abilities_levels: [9, 12, 15, 19],
	hd: 6, 
	type: "class", 
	tags: ["pathfinder"],
    spells: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    feats: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    specials: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
}, {
    name: "Sorceror",
    shortname: "Sor",
    base_attack_bonus: ['0', '1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6/1', '6/1', '7/2', '7/2', '8/3', '8/3', '9/4', '9/4', '10/5'],
    fort_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    ref_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    will_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    spells_per_day: [[5, 3, '-', '-', '-', '-', '-', '-', '-', '-'], [6, 4, '-', '-', '-', '-', '-', '-', '-', '-'], [6, 5, '-', '-', '-', '-', '-', '-', '-', '-'], [6, 6, 3, '-', '-', '-', '-', '-', '-', '-'], [6, 6, 4, '-', '-', '-', '-', '-', '-', '-'], [6, 6, 5, 3, '-', '-', '-', '-', '-', '-'], [6, 6, 6, 4, '-', '-', '-', '-', '-', '-'], [6, 6, 6, 5, 3, '-', '-', '-', '-', '-'], [6, 6, 6, 6, 4, '-', '-', '-', '-', '-'], [6, 6, 6, 6, 5, 3, '-', '-', '-', '-'], [6, 6, 6, 6, 6, 4, '-', '-', '-', '-'], [6, 6, 6, 6, 6, 5, 3, '-', '-', '-'], [6, 6, 6, 6, 6, 6, 4, '-', '-', '-'], [6, 6, 6, 6, 6, 6, 5, 3, '-', '-'], [6, 6, 6, 6, 6, 6, 6, 4, '-', '-'], [6, 6, 6, 6, 6, 6, 6, 5, 3, '-'], [6, 6, 6, 6, 6, 6, 6, 6, 4, '-'], [6, 6, 6, 6, 6, 6, 6, 6, 5, 3], [6, 6, 6, 6, 6, 6, 6, 6, 6, 4], [6, 6, 6, 6, 6, 6, 6, 6, 6, 6]],
    spells_known: [[4, 2, '-', '-', '-', '-', '-', '-', '-', '-'], [5, 2, '-', '-', '-', '-', '-', '-', '-', '-'], [5, 3, '-', '-', '-', '-', '-', '-', '-', '-'], [6, 3, 1, '-', '-', '-', '-', '-', '-', '-'], [6, 4, 2, '-', '-', '-', '-', '-', '-', '-'], [7, 4, 2, 1, '-', '-', '-', '-', '-', '-'], [7, 5, 3, 2, '-', '-', '-', '-', '-', '-'], [8, 5, 3, 2, 1, '-', '-', '-', '-', '-'], [8, 5, 4, 3, 2, '-', '-', '-', '-', '-'], [9, 5, 4, 3, 2, 1, '-', '-', '-', '-'], [9, 5, 5, 4, 3, 2, '-', '-', '-', '-'], [9, 5, 5, 4, 3, 2, 1, '-', '-', '-'], [9, 5, 5, 4, 4, 3, 2, '-', '-', '-'], [9, 5, 5, 4, 4, 3, 2, 1, '-', '-'], [9, 5, 5, 4, 4, 4, 3, 2, '-', '-'], [9, 5, 5, 4, 4, 4, 3, 2, 1, '-'], [9, 5, 5, 4, 4, 4, 3, 3, 2, '-'], [9, 5, 5, 4, 4, 4, 3, 3, 2, 1], [9, 5, 5, 4, 4, 4, 3, 3, 3, 2], [9, 5, 5, 4, 4, 4, 3, 3, 3, 3]],
    skill_points_per_level: 2,
    bonus_feats_levels: [2, 5, 8, 11, 14, 17],
	hd: 4, 
	type: "class", 
	tags: ["pathfinder"],
    spells: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    feats: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    specials: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
	class_features: ["Cast Arcane"]
}, {
    name: "Wizard",
    shortname: "Wiz",
    base_attack_bonus: ['0', '1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6/1', '6/1', '7/2', '7/2', '8/3', '8/3', '9/4', '9/4', '10/5'],
    fort_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    ref_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    will_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    spells_per_day: [[3, 1, '-', '-', '-', '-', '-', '-', '-', '-'], [4, 2, '-', '-', '-', '-', '-', '-', '-', '-'], [4, 2, 1, '-', '-', '-', '-', '-', '-', '-'], [4, 3, 2, '-', '-', '-', '-', '-', '-', '-'], [4, 3, 2, 1, '-', '-', '-', '-', '-', '-'], [4, 3, 3, 2, '-', '-', '-', '-', '-', '-'], [4, 4, 3, 2, 1, '-', '-', '-', '-', '-'], [4, 4, 3, 3, 2, '-', '-', '-', '-', '-'], [4, 4, 4, 3, 2, 1, '-', '-', '-', '-'], [4, 4, 4, 3, 3, 2, '-', '-', '-', '-'], [4, 4, 4, 4, 3, 2, 1, '-', '-', '-'], [4, 4, 4, 4, 3, 3, 2, '-', '-', '-'], [4, 4, 4, 4, 4, 3, 2, 1, '-', '-'], [4, 4, 4, 4, 4, 3, 3, 2, '-', '-'], [4, 4, 4, 4, 4, 4, 3, 2, 1, '-'], [4, 4, 4, 4, 4, 4, 3, 3, 2, '-'], [4, 4, 4, 4, 4, 4, 4, 3, 2, 1], [4, 4, 4, 4, 4, 4, 4, 3, 3, 2], [4, 4, 4, 4, 4, 4, 4, 4, 3, 3], [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]],
    spells_known: [[3, 1, '-', '-', '-', '-', '-', '-', '-', '-'], [4, 2, '-', '-', '-', '-', '-', '-', '-', '-'], [4, 2, 1, '-', '-', '-', '-', '-', '-', '-'], [4, 3, 2, '-', '-', '-', '-', '-', '-', '-'], [4, 3, 2, 1, '-', '-', '-', '-', '-', '-'], [4, 3, 3, 2, '-', '-', '-', '-', '-', '-'], [4, 4, 3, 2, 1, '-', '-', '-', '-', '-'], [4, 4, 3, 3, 2, '-', '-', '-', '-', '-'], [4, 4, 4, 3, 2, 1, '-', '-', '-', '-'], [4, 4, 4, 3, 3, 2, '-', '-', '-', '-'], [4, 4, 4, 4, 3, 2, 1, '-', '-', '-'], [4, 4, 4, 4, 3, 3, 2, '-', '-', '-'], [4, 4, 4, 4, 4, 3, 2, 1, '-', '-'], [4, 4, 4, 4, 4, 3, 3, 2, '-', '-'], [4, 4, 4, 4, 4, 4, 3, 2, 1, '-'], [4, 4, 4, 4, 4, 4, 3, 3, 2, '-'], [4, 4, 4, 4, 4, 4, 4, 3, 2, 1], [4, 4, 4, 4, 4, 4, 4, 3, 3, 2], [4, 4, 4, 4, 4, 4, 4, 4, 3, 3], [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]],
    skill_points_per_level: 2,
    bonus_feats_levels: [4, 9, 14, 19],
    languages: [16],
	hd: 4, 
	type: "class", 
	tags: ["pathfinder"],
    spells: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    feats: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    specials: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
	class_features: ["Cast Arcane"]
}]);