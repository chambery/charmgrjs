classes = new TAFFY([{
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
	_id: "2c3d",
	spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	update_literacy: function (language_id) {
		var checked = $('#literacy_' + language_id + '_check').attr('checked');
		var language = languages.first({
			_id: language_id
		});
		if (!checked && chardata.classes['Barbarian'].literacy[language.name]) {
			delete chardata.classes['Barbarian'].literacy[language.name];
		} else {
			chardata.classes['Barbarian'].literacy[language.name] = true;
		}
		var skill_pts = calc_skill_points() - (count_attrs(chardata.classes['Barbarian'].literacy) * 2);
		$('#skill_pts_remaining').html(skill_pts < 0 ? ['<span class="alarm">', skill_pts, '</span>'].join('') : skill_pts);
		save_character();
	},
	custom: {
		edit: {
			0: [{
				script: function () {
					if (chardata.classes['Barbarian'].literacy == null) {
						chardata.classes['Barbarian'].literacy = [];
					}
					if ($('#literacy_header').length == 0) {
						$('#language_table').prepend('<td id="literacy_header" colspan=2></td><td>Lit</td>');
					}
					var langs = [];
					for (var classname in chardata.classes) {
						var clazz = classes.first({
							name: classname
						});
						langs = langs.concat(clazz.languages != null ? clazz.languages : []);
					}
					langs = langs.concat(race.languages);
					langs = langs.concat(chardata.languages);
					for (var i in langs) {
						var lang = languages.first({
							name: langs[i]
						});
						if ($('#literacy_' + lang._id).length == 0) {
							$('tr#language_' + lang._id).append('<td id="literacy_' + lang._id + '"><input id="literacy_' + lang._id + '_check" type="checkbox" /></td>');
							$('#literacy_' + lang._id + '_check').click(function () {
								return classes.first({
									name: "Barbarian"
								}).update_literacy(lang._id);
							});
							if (chardata.classes['Barbarian'].literacy[lang.name]) {
								$('#literacy_' + lang._id + '_check').attr('checked', 'checked');
							}
						}
					}
				}
			}]
		}
	},
	class_features: []
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
	_id: "246b",
	spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	class_features: ["Cast Arcane"]
}, {
	name: "Cleric",
	shortname: "Clr",
	base_attack_bonus: ['0', '1', '2', '3', '3', '4', '5', '6/1', '6/1', '7/2', '8/3', '9/4', '9/4', '10/5', '11/6/1', '12/7/2', '12/7/2', '13/8/3', '14/9/4', '15/10/5'],
	fort_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
	ref_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
	will_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
	spells_per_day: [[3, 1, '-', '-', '-', '-', '-', '-', '-', '-'], [4, 2, '-', '-', '-', '-', '-', '-', '-', '-'], [4, 2, 1, '-', '-', '-', '-', '-', '-', '-'], [5, 3, 2, '-', '-', '-', '-', '-', '-', '-'], [5, 3, 2, 1, '-', '-', '-', '-', '-', '-'], [5, 3, 3, 2, '-', '-', '-', '-', '-', '-'], [6, 4, 3, 2, 1, '-', '-', '-', '-', '-'], [6, 4, 3, 3, 2, '-', '-', '-', '-', '-'], [6, 4, 4, 3, 2, 1, '-', '-', '-', '-'], [6, 4, 4, 3, 3, 2, '-', '-', '-', '-'], [6, 5, 4, 4, 3, 2, 1, '-', '-', '-'], [6, 5, 4, 4, 3, 3, 2, '-', '-', '-'], [6, 5, 5, 4, 4, 3, 2, 1, '-', '-'], [6, 5, 5, 4, 4, 3, 3, 2, '-', '-'], [6, 5, 5, 5, 4, 4, 3, 2, 1, '-'], [6, 5, 5, 5, 4, 4, 3, 3, 2, '-'], [6, 5, 5, 5, 5, 4, 4, 3, 2, 1], [6, 5, 5, 5, 5, 4, 4, 3, 3, 2], [6, 5, 5, 5, 5, 5, 4, 4, 3, 3], [6, 5, 5, 5, 5, 5, 4, 4, 4, 4]],
	skill_points_per_level: 2,
	bonus_feats_levels: [3, 7, 11, 15, 19],
	languages: [0, 3, 14],
	hd: 8,
	type: "class",
	tags: ["pathfinder"],
	_id: "d577",
	spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	custom: {
		edit: {
			0: {
				domains: {
					ui: "<table id='domains' style='width: 100%;'><tr><td>Domains</td></tr><tr><td><table id='domain_selector' style='width: 100%'></table></td></tr></table>",
					script: function () {
						var set_domain = function (item, checked) {
								if (checked) {
									chardata.domains.push(item.name);
								} else {
									remove(chardata.domains, chardata.domains.indexOf(item.name));
								}
							};
						if (chardata.domains == null) {
							chardata.domains = [];
						}
						var available_domains = domains.get();
						if (chardata.deity) {
							var deity = deities.first({
								name: chardata.deity
							});
							console.log(deity.name);
							available_domains = domains.get({
								name: deity.domains
							});
						} else {
							available_domains = [];
						}
						console.log(available_domains);
						create_selector_grid(available_domains, 'table#domains', set_domain, chardata.domains, 4);
					}
				}
			}
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
	skill_points_per_level: 4,
	bonus_feats_levels: [],
	languages: [16],
	hd: 8,
	type: "class",
	tags: ["pathfinder"],
	_id: "6041",
	spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	class_features: ["Cast Divine"]
}, {
	name: "Fighter",
	shortname: "Ftr",
	base_attack_bonus: ['1', '2', '3', '4', '5', '6/1', '7/2', '8/3', '9/4', '10/5', '11/6/1', '12/7/2', '13/8/3', '14/9/4', '15/10/5', '16/11/6/1', '17/12/7/2', '18/13/8/3', '19/14/9/4', '20/15/10/5'],
	fort_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
	ref_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
	will_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
	spells_per_day: [],
	skill_points_per_level: 2,
	bonus_feats_levels: [0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
	hd: 10,
	type: "class",
	tags: ["pathfinder"],
	_id: "4b8c",
	spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	class_features: []
}, {
	name: "Monk",
	shortname: "Mnk",
	base_attack_bonus: ['0', '1', '2', '3', '3', '4', '5', '6/1', '6/1', '7/2', '8/3', '9/4', '9/4', '10/5', '11/6/1', '12/7/2', '12/7/2', '13/8/3', '14/9/4', '15/10/5'],
	fort_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
	ref_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
	will_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
	flurry_of_blows: ['-2/-2', '-1/-1', '0/0', '1/1', '2/2', '3/3', '4/4', '5/5/0', '6/6/1', '7/7/2', '8/8/8/3', '9/9/9/4', '9/9/9/4', '10/10/10/5', '11/11/11/6/1', '12/12/12/7/2', '12/12/12/7/2', '13/13/13/8/3', '14/14/14/9/4', '15/15/15/10/5'],
	flurry_weapons: [29, 30, 42, 43, 46, 55, 56, 57, 60, 61],
	flurry_damage: [['1d4', '1d6', '1d8'], ['1d4', '1d6', '1d8'], ['1d4', '1d6', '1d8'], ['1d6', '1d8', '2d6'], ['1d6', '1d8', '2d6'], ['1d6', '1d8', '2d6'], ['1d6', '1d8', '2d6'], ['1d8', '1d10', '2d8'], ['1d8', '1d10', '2d8'], ['1d8', '1d10', '2d8'], ['1d8', '1d10', '2d8'], ['1d10', '2d6', '3d6'], ['1d10', '2d6', '3d6'], ['1d10', '2d6', '3d6'], ['1d10', '2d6', '3d6'], ['2d6', '2d8', '3d8'], ['2d6', '2d8', '3d8'], ['2d6', '2d8', '3d8'], ['2d6', '2d8', '3d8'], ['2d8', '2d10', '4d8']],
	ac_bonus: [0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4],
	spells_per_day: [],
	skill_points_per_level: 4,
	bonus_feats_levels: [0, 1, 5],
	hd: 8,
	type: "class",
	tags: ["pathfinder"],
	_id: "4b46",
	spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	class_features: []
}, {
	// TODO - Impl turn undead (55)
	name: "Paladin",
	shortname: "Pal",
	base_attack_bonus: ['1', '2', '3', '4', '5', '6/1', '7/2', '8/3', '9/4', '10/5', '11/6/1', '12/7/2', '13/8/3', '14/9/4', '15/10/5', '16/11/6/1', '17/12/7/2', '18/13/8/3', '19/14/9/4', '20/15/10/5'],
	fort_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
	ref_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
	will_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
	spells_per_day: [[-',-', -',-'], ['-', '-', '-', '-'], ['-', '-', '-', '-'], [0, '-', '-', '-'], [0, '-', '-', '-'], [1, '-', '-', '-'], [1, '-', '-', '-'], [1, 0, '-', '-'], [1, 0, '-', '-'], [1, 1, '-', '-'], [1, 1, 0, '-'], [1, 1, 1, '-'], [1, 1, 1, '-'], [2, 1, 1, 0], [2, 1, 1, 1], [2, 2, 1, 1], [2, 2, 2, 1], [3, 2, 2, 1], [3, 3, 3, 2], [3, 3, 3, 3]],
	skill_points_per_level: 2,
	bonus_feats_levels: [4, 9, 15],
	hd: 1,
	type: "class",
	tags: ["pathfinder"],
	_id: "487f",
	spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	class_features: ["Channel Energy", "Cast Divine"]
}, {
	name: "Ranger",
	shortname: "Rng",
	base_attack_bonus: ['1', '2', '3', '4', '5', '6/1', '7/2', '8/3', '9/4', '10/5', '11/6/1', '12/7/2', '13/8/3', '14/9/4', '15/10/5', '16/11/6/1', '17/12/7/2', '18/13/8/3', '19/14/9/4', '20/15/10/5'],
	fort_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
	ref_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
	will_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
	spells_per_day: [['-', '-', '-', '-'], ['-', '-', '-', '-'], ['-', '-', '-', '-'], [0, '-', '-', '-'], [0, '-', '-', '-'], [1, '-', '-', '-'], [1, '-', '-', '-'], [1, 0, '-', '-'], [1, 0, '-', '-'], [1, 1, '-', '-'], [1, 1, 0, '-'], [1, 1, 1, '-'], [1, 1, 1, '-'], [2, 1, 1, 0], [2, 1, 1, 1], [2, 2, 1, 1], [2, 2, 2, 1], [3, 2, 2, 1], [3, 3, 3, 2], [3, 3, 3, 3]],
	skill_points_per_level: 6,
	bonus_feats_levels: [4, 9, 14, 19],
	hd: 8,
	type: "class",
	tags: ["pathfinder"],
	_id: "7226",
	spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	update_weapon_style: function () {
		chardata.weapon_style = $('#weapon_style_select').val();
		save_character();
	},
	edit_favored: function (favored_name, db, index) {
		if (!chardata[favored_name]) {
			chardata[favored_name] = [];
		}
		var favored = db.first({
			name: chardata[favored_name].length > index ? chardata[favored_name][index].name : ''
		});
		if (favored) {
			favored = favored._id;
		}
		var select = create_select(favored_name + '_' + index, db.get(), "chardata." + favored_name + "[" + index + "] = { name: $('#" + favored_name + "_" + index + "').val(), val: (parseInt($('#" + favored_name + "_" + index + "_bonus').val()) | 0) }; save_character();", false, "style='width: 100%;'", null, favored);
		$('#' + favored_name + 's').append('<tr><td>' + select + '</td><td><input id="' + favored_name + '_' + index + '_bonus" type="text" size="1"/></td></tr>');
		$('#' + favored_name + '_' + index + '_bonus').val(chardata[favored_name][index] ? chardata[favored_name][index].val : 0);
		$('#' + favored_name + '_' + index + '_bonus').blur(function () {
			chardata[favored_name][index] = {
				name: $('#' + favored_name + '_' + index).val(),
				val: (parseInt($('#' + favored_name + '_' + index + '_bonus').val()) | 0)
			};
			save_character();
		});
	},
	main_favored: function (favored_name, db, short_name, specials_id) {
		for (var i in chardata[favored_name]) {
			var f_e = db.first({
				name: chardata[favored_name][i].name
			});
			$('#specials').append('<tr id="special_' + favored_name + '_' + f_e._id + '"><td><input id="' + favored_name + '_' + f_e._id + '" type="checkbox"/></td><td><a class=fake_link onclick="show_item_detail(specials, \'' + specials_id + '\')">' + chardata[favored_name][i].name + ' ' + pos(chardata[favored_name][i].val) + ' (' + short_name + ')</a></td></tr>');
			$('input[id="' + favored_name + '_' + f_e._id + '"]').bind('click', {
				mod: chardata[favored_name][i].val
			}, function (e) {
				if ($(this).attr('checked')) {
					for (var j in chardata.weapons) {
						update_weapon_attack(j, e.data.mod);
						update_weapon_damage(j, e.data.mod);
					}
					update_skill_ranks(['Bluff', 'Knowledge', 'Perception', 'Sense Motive', 'Survival']);
				} else {
					recalc_main_page();
				}
			});
		}
	},
	custom: {
		edit: {
			0: [{
				ui: "<table id='favored_enemys' style='width: 100%;'><tr><td>Favored Enemies<span style='float:right'>Available Bonus:</span></td><td id='fe_bonus'></td></tr></table>",
				script: function () {
					classes.first({
						name: "Ranger"
					}).edit_favored("favored_enemy", favored_enemies, 0);
				}
			}
				           ],
			1: [{
				ui: "<table style='width: 100%;'><tr><td>Weapon Style</td><td id='weapon_style'></td></tr></table>",
				script: function () {
					var select = create_select('weapon_style_select', [{
						_id: 0,
						name: 'Two-handed fighting'
					}, {
						_id: 1,
						name: 'Archery'
					}], "classes.first({ name : 'Ranger' }).update_weapon_style()", false, "style='width: 100%;'", null, (chardata.weapon_style == 'Archery' ? 1 : 0));
					$('#weapon_style').append('<tr><td>' + select + '</td></tr>');
				}
			}],
			2: [{
				ui: "<table id='favored_terrains' style='width: 100%;'><tr><td>Favored Terrain <span style='float:right'>Available Bonus: </span></td><td id='ft_bonus'></td></tr></table>",
				script: function () {
					classes.first({
						name: "Ranger"
					}).edit_favored("favored_terrain", favored_terrains, 0);
				}
			}],
			4: [{
				script: function () {
					classes.first({
						name: "Ranger"
					}).edit_favored("favored_enemy", favored_enemies, 1);
				}
			}],
			7: [{
				script: function () {
					classes.first({
						name: "Ranger"
					}).edit_favored("favored_terrain", favored_terrains, 1);
				}
			}],
			9: [{
				script: function () {
					classes.first({
						name: "Ranger"
					}).edit_favored("favored_enemy", favored_enemies, 2);
				}
			}],
			12: [{
				script: function () {
					classes.first({
						name: "Ranger"
					}).edit_favored("favored_terrain", favored_terrains, 2);
				}
			}],
			14: [{
				script: function () {
					classes.first({
						name: "Ranger"
					}).edit_favored("favored_enemy", favored_enemies, 3);
				}
			}],
			17: [{
				script: function () {
					classes.first({
						name: "Ranger"
					}).edit_favored("favored_terrain", favored_terrains, 3);
				}
			}],
			19: [{
				script: function () {
					classes.first({
						name: "Ranger"
					}).edit_favored("favored_enemy", favored_enemies, 4);
				}
			}],
		},
		main: {
			before_specials: [
				function () {
				classes.first({
					name: "Ranger"
				}).main_favored("favored_enemy", favored_enemies, "Fav. Enemy", "90c3");
			},
				function () {
				classes.first({
					name: "Ranger"
				}).main_favored("favored_terrain", favored_terrains, "Fav. Terr.", "9dc3");
			}
			]
		},
		feats: {
			1: {
				script: function (bonus) {
					bonus.count += 1;
					if (chardata.weapon_style == 'Archery') {
						bonus.feats['Far Shot'] = true;
						bonus.feats['Point-Blank Shot'] = true;
						bonus.feats['Precise Shot'] = true;
						bonus.feats['Rapid Shot'] = true;
					} else {
						bonus.feats['Double Slice'] = true;
						bonus.feats['Improved Shield Bash'] = true;
						bonus.feats['Quick Draw'] = true;
						bonus.feats['Two-Weapon Fighting'] = true;
					}
				}
			},
			5: {
				script: function (bonus) {
					bonus.count += 1;
					if (chardata.weapon_style == 'Archery') {
						bonus.feats['Improved Precise Shot'] = true;
						bonus.feats['Manyshot'] = true;
					} else {
						bonus.feats['Improved Two-Weapon Fighting'] = true;
						bonus.feats['Two-Weapon Defense'] = true;
					}
				}
			},
			9: {
				script: function (bonus) {
					bonus.count += 1;
					if (chardata.weapon_style == 'Archery') {
						bonus.feats['Pinpoint Targeting'] = true;
						bonus.feats['Shot on the Run'] = true;
					} else {
						bonus.feats['Greater Two-Weapon Fighting'] = true;
						bonus.feats['Two-Weapon Rend'] = true;
					}
				}
			}
		}
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
	skill_points_per_level: 8,
	bonus_feats_levels: [4, 9, 14, 19],
	special_abilities_levels: [9, 12, 15, 19],
	hd: 6,
	type: "class",
	tags: ["pathfinder"],
	_id: "3410",
	spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	class_features: []
}, {
	name: "Sorcerer",
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
	_id: "9c80",
	spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	modify_bloodline_power_detail: function (power) {
		var detail = power.detail;
		var special_level = null;
		for (var level in power.levels) {
			if (level <= chardata.classes['Sorcerer'].level) {
				special_level = level;
			}
		}
		if (special_level) {
			for (var j in power.levels[special_level].vals) {
				detail = detail.replace("_$" + j, power.levels[special_level].vals[j]);
			}
		}
		return detail;
	},
	merge_bloodline_weapons: function (char_weapons) {
		var bloodline = sorcerer_bloodlines.first({
			name: chardata.bloodline
		});
		if (bloodline) {
			var bloodlines_weapons = undefined;
			for (var i in bloodline.powers) {
				var power = bloodline_powers.first({
					name: bloodline.powers[i]
				});
				if (power) {
					var power_weapons = undefined;
					for (var level in power.levels) {
						if (level <= chardata.classes['Sorcerer'].level && power.levels[level].weapons) {
							for (var i in power.levels[level].weapons) {
								console.log(power.levels[level].weapons[i].name);
								if (!weapons.first({
									name: power.levels[level].weapons[i].name
								})) {
									weapons.insert(power.levels[level].weapons[i])
								} else {
									weapons.update(power.levels[level].weapons[i], { 
											name: power.levels[level].weapons[i].name 
										});
								}
							}
							power_weapons = [];
							$.merge(power_weapons, power.levels[level].weapons);
						} else {
							break;
						}
					}
					if (power_weapons) {
						if(!bloodlines_weapons) {
							bloodlines_weapons = [];
						}
						$.merge(bloodlines_weapons, power_weapons);
					}
				}
			}
			if (bloodlines_weapons) {
				$.merge(char_weapons, bloodlines_weapons);
			}
		}
	},
	calc_dr_saves: function(save, type) {
				var bloodline = sorcerer_bloodlines.first({
					name: chardata.bloodline
				});
				if (bloodline) {
					for (var i in bloodline.powers) {
						var power = bloodline_powers.first({
							name: bloodline.powers[i]
						});
						var dr_fn = null;
						for(var level in power.levels) {
							if (level <= chardata.classes['Sorcerer'].level && power.levels[level][type]) {
								dr_fn = power.levels[level][type];
							}				
						}
						if(dr_fn) {
							dr_fn(save);
						}
					}
				}
			},

	custom: {
		all: {
			calc_sr: [
				function(save) {
					classes.first({ name: "Sorcerer" }).calc_dr_saves(save, "sr");
				}
			]
		},
		edit: {
			0: [{
				ui: "<table style='width: 100%;border-collapse: collapse;'><tr style='background-color: #E2F0F9'><td>Bloodline: </td><td id='bloodline'></td></tr></table>",
				script: function () {
					var char_bloodline = sorcerer_bloodlines.first({
						name: chardata.bloodline
					});
					var char_draconic_type = null
					if(chardata.draconic_type) {
						char_draconic_type = draconic_types.first({
							name: chardata.draconic_type
						});						
					}
					update_bloodline = function () {
						chardata.bloodline = $('#bloodline_select').val();
						$('#draconic_type').toggle(chardata.bloodline == "Draconic");						
						chardata.draconic_type = chardata.bloodline == "Draconic" ? $("#draconic_select").val() : null;  
						save_character();
					};
					var select = create_select('bloodline_select', sorcerer_bloodlines.get(), "update_bloodline(); recalc_edit_page();", false, "style='width: 100%;'", null, (char_bloodline ? char_bloodline._id : ''));
					var draconic_select = create_select('draconic_select', draconic_types.get(), "update_bloodline(); recalc_edit_page();", false, "style='width: 100%;'", null, (char_draconic_type ? char_draconic_type._id : ''));							
					$('#bloodline').append('<tr><td></td><td>' + select + '</td></tr>');
					$('#bloodline').append('<tr id="draconic_type"><td>type:</td><td>' + draconic_select + '</td></tr>');
					$('#draconic_type').toggle(chardata.bloodline == "Draconic");						
					if (!chardata.bloodline) {
						update_bloodline();
					}
				}
			}
				           ]
		},
		skills: [
			function (class_skills) {
			var char_bloodline = sorcerer_bloodlines.first({
				name: chardata.bloodline
			});
			class_skills.push(char_bloodline.skill);
		}
		],
		main: {
			before_weapons_build: [
				function(char_weapons) {
					classes.first({ name: "Sorcerer" }).merge_bloodline_weapons(char_weapons);
				}
				],
			before_weapons_populate: [
				function(char_weapons) {
					classes.first({ name: "Sorcerer" }).merge_bloodline_weapons(char_weapons);
				}
			],
			before_weapons_recalc: [
				function(char_weapons) {
					classes.first({ name: "Sorcerer" }).merge_bloodline_weapons(char_weapons);
				}
				],
			before_spells: [
				function (all_spells) {
				var bloodline = sorcerer_bloodlines.first({
					name: chardata.bloodline
				});
				if (bloodline) {
					// some bloodline spells are not "naturally" available to Sorcerers (eg Spell Resistance)
					var class_spell_lvl = 0;
					for (var bloodline_level in bloodline.spells) {
						var spell = spells.first({
							name: bloodline.spells[bloodline_level]
						});
						if (!all_spells[spell.classes['Sorcerer']]) {
							all_spells[spell.classes['Sorcerer']] = [];
						}
						if (chardata.classes['Sorcerer'].level >= bloodline_level && 
								all_spells[class_spell_lvl].indexOf(bloodline.spells[bloodline_level]) == -1) {
							all_spells[class_spell_lvl].push(bloodline.spells[bloodline_level]);
						}
						class_spell_lvl++;
					}
				}
			}
			],
			after_spells: [
				function () {
				var bloodline = sorcerer_bloodlines.first({
					name: chardata.bloodline
				});
				if (bloodline) {
					for (var level in bloodline.spells) {
						if (chardata.classes['Sorcerer'].level >= level) {
							var spell = spells.first({
								name: bloodline.spells[level]
							});
							$('#spell_' + spell._id).wrap('<i />');
						}
					}
					$('#etc').append("<i>" + chardata.bloodline + " &nbsp;</i>");
				}
			}
			],
			before_specials: [
				function () {
				var bloodline = sorcerer_bloodlines.first({
					name: chardata.bloodline
				});
				if (bloodline) {
					for (var i in bloodline.powers) {
						var power = bloodline_powers.first({
							name: bloodline.powers[i]
						});
						var special = null;
						for (var level in power.levels) {
							if (level <= chardata.classes['Sorcerer'].level) {
								special = power;
							}
						}
						if (special) {
							$("#specials").append("<tr><td></td><td><a class=fake_link onclick='show_item_detail(bloodline_powers, \"" + special._id + "\", classes.first({ name: \"Sorcerer\"}).modify_bloodline_power_detail)'>" + special.name + "</a></td></tr>");
						}
					}
				}
			}
			],
			damage_reduction: [
				function(dr) { classes.first({ name: "Sorcerer" }).calc_dr_saves(dr, "dr"); }
			],
			save: [
				function(save) { classes.first({ name: "Sorcerer" }).calc_dr_saves(save, "save"); }				
			],
			Str: [
				function(mod) { classes.first({ name: "Sorcerer" }).calc_dr_saves(mod, "Str"); }
			]
		},
		feats: {
			6: {
				script: function (bonus) {
					bonus.count += 1;
					var bloodline = sorcerer_bloodlines.first({
						name: chardata.bloodline
					});
					if (bloodline) {
						for (var i in bloodline.feats) {
							bonus.feats[bloodline.feats[i]] = true;
						}
					}
				}
			},
			12: {
				script: function (bonus) {
					bonus.count += 1;
				}
			},
			18: {
				script: function (bonus) {
					bonus.count += 1;
				}
			}
		},
		spells: {
			before_build: [
				function (spells_known) {
					var bloodline = sorcerer_bloodlines.first({
						name: chardata.bloodline
					});
					if (bloodline) {
						for (var i in bloodline.powers) {
							var power = bloodline_powers.first({
								name: bloodline.powers[i]
							});
							var spells_known_fn = null;
							for (var level in power.levels) {
								if (level <= chardata.classes['Sorcerer'].level && power.levels[level].spells_known) {
									spells_known_fn = power.levels[level].spells_known;
								}
							}
							if(spells_known_fn) {
								spells_known_fn(spells_known);
							}
						}
					}
				}
			],
			after_spells: [
				function () {
				var bloodline = sorcerer_bloodlines.first({
					name: chardata.bloodline
				});
				if (bloodline) {
					for (var bloodline_level in bloodline.spells) {
						if (chardata.classes['Sorcerer'].level >= bloodline_level) {
							var spell = spells.first({
								name: bloodline.spells[bloodline_level]
							});
							$('#spell_' + spell._id).wrap('<i />');
							$('#' + spell._id + '_Sorcerer').attr('disabled', true);
							if (chardata.classes['Sorcerer'].spells[spell.classes['Sorcerer']]) {
								var idx = chardata.classes['Sorcerer'].spells[spell.classes['Sorcerer']].indexOf(spell.name);
								if (idx > -1) {
									remove(chardata.classes['Sorcerer'].spells[spell.classes['Sorcerer']], idx);
								}
							}
						}
					}
				}
			}
			]
		}
	},
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
	_id: "d1b5",
	spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
	class_features: ["Cast Arcane"]
}]);
