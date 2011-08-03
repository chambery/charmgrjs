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
	tags: ["pathfinder"], _id: "2c3d",
    spells: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    feats: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    specials: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    custom: {
    	edit: {
    		0: [{
			            script : function() {
				                    function update_literacy(language_id) {
					                    var checked = $('#literacy_' + language_id + '_check').attr('checked');
					                    var language = languages.first({
						                    _id : language_id
					                    });
					                    if (!checked && chardata.classes['Barbarian'].literacy[language.name]) {
						                    delete chardata.classes['Barbarian'].literacy[language.name];
					                    } else {
						                    chardata.classes['Barbarian'].literacy[language.name] = true;
					                    }
					                    var skill_pts = calc_skill_points() - (count_attrs(chardata.classes['Barbarian'].literacy) * 2);
					                    $('#skill_pts_remaining').html(skill_pts < 0 ? [ '<span class="alarm">', skill_pts, '</span>' ].join('') : skill_pts);
					                    save_character();
				                    }
				                    if (chardata.classes['Barbarian'].literacy == null) {
					                    chardata.classes['Barbarian'].literacy = [];
				                    }
				                    if ($('#literacy_header').length == 0) {
					                    $('#language_table').prepend('<tr><td id="literacy_header" colspan=2></td><td>Lit</td>');
				                    }
				                    var langs = [];
				                    for ( var classname in chardata.classes) {
					                    var clazz = classes.first({
						                    name : classname
					                    });
					                    langs = langs.concat(clazz.languages != null ? clazz.languages : []);
				                    }
				                    langs = langs.concat(race.languages);
				                    langs = langs.concat(chardata.languages);
				                    for ( var i in langs) {
					                    var lang = languages.first({
						                    name : langs[i]
					                    });
					                    if ($('#literacy_' + lang._id).length == 0) {
						                    $('tr#language_' + lang._id).append('<td id="literacy_' + lang._id + '"><input id="literacy_' + lang._id + '_check" type="checkbox" /></td>');
						                    $('#literacy_' + lang._id + '_check').click(function() {
							                    return update_literacy(lang._id);
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
	tags: ["pathfinder"], _id: "246b",
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
	tags: ["pathfinder"], _id: "d577",
    spells: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    feats: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    specials: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    custom: {
    	edit: {
    		0: {
    			domains: {
					ui: "<table id='domains' style='width: 100%;'><tr><td>Domains</td></tr><tr><td><table id='domain_selector' style='width: 100%'></table></td></tr></table>",
                     script : function() {
				                        var set_domain = function(item, checked) {
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
						                        name : chardata.deity
					                        });
					                        console.log(deity.name);
					                        available_domains = domains.get({
						                        name : deity.domains
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
    spells_known: [],
    skill_points_per_level: 4,
    bonus_feats_levels: [],
    languages: [16],
	hd: 8,
	type: "class",
	tags: ["pathfinder"], _id: "6041",
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
	tags: ["pathfinder"], _id: "4b8c",
    spells: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    feats: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    specials: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    class_features: []
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
	tags: ["pathfinder"], _id: "4b46",
    spells: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    feats: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    specials: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
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
    spells_known: [],
    skill_points_per_level: 2,
    bonus_feats_levels: [4, 9, 15],
	hd: 1,
	type: "class",
	tags: ["pathfinder"], _id: "487f",
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
	tags: ["pathfinder"], _id: "7226",
    spells: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    feats: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    specials: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    custom: {
		edit: {
			0: [{
					ui: "<table id='favored_enemies' style='width: 100%;'><tr><td>Favored Enemies<span style='float:right'>Available Bonus:</span></td><td id='fe_bonus'></td></tr></table>",
					script: function() {
						if(!chardata.favored_enemies){
							chardata.favored_enemies = [];
							}
						var favored_enemy = favored_enemies.first({ name: chardata.favored_enemies.length > 0 ? chardata.favored_enemies[0].name : '' });
						if(favored_enemy) {
							favored_enemy = favored_enemy._id;
						}
						var select = create_select('favored_enemy_0', favored_enemies.get(), "chardata.favored_enemies[0] = { name: $('#favored_enemy_0').val(), val: (parseInt($('#favored_enemy_0_bonus').val()) | 0) }; save_character();", false, "style='width: 100%;'", null, favored_enemy); $('#favored_enemies').append('<tr><td>' + select + '</td><td><input id="favored_enemy_0_bonus" type="text" size="1"/></td></tr>'); $('#favored_enemy_0_bonus').val(chardata.favored_enemies[0] ? chardata.favored_enemies[0].val : 0); $('#favored_enemy_0_bonus').blur(function() { chardata.favored_enemies[0] = { name: $('#favored_enemy_0').val(), val: (parseInt($('#favored_enemy_0_bonus').val()) | 0) }; save_character(); }); }
				}
    		],
			1: [{
				ui: "<table style='width: 100%;'><tr><td>Weapon Style</td><td id='weapon_style'></td></tr></table>",
                                				script : function() {
	                                update_weapon_style = function() {

	                                };
	                                var select = create_select('weapon_style_select', [ {
	                                    _id : 0,
	                                    name : 'Two-handed fighting'
	                                }, {
	                                    _id : 1,
	                                    name : 'Archery'
	                                } ], "update_weapon_style()", false, "style='width: 100%;'", null, (chardata.weapon_style == 'Archery' ? 1 : 0));
	                                $('#weapon_style').append('<tr><td>' + select + '</td></tr>');
                                }
				}],
			2: [{
				ui: "<table id='favored_terrains' style='width: 100%;'><tr><td>Favored Terrain <span style='float:right'>Available Bonus: </span></td><td id='ft_bonus'></td></tr></table>",
                                script : function() {
                                }
				}],
			4: [{
                            				script : edit_favored("favored_enemy", favored_enemies, 1)
				}],
			7: [{
                            				script : function() {
		                            var favored_terrain = favored_terrains.first({
			                            name : chardata.favored_terrains.length > 1 ? chardata.favored_terrains[1].name : ''
		                            });
		                            if (favored_terrain) {
			                            favored_terrain = favored_terrain._id;
		                            }
		                            var select = create_select('favored_terrain_1', favored_terrains.get(),
		                                    "chardata.favored_terrains[1] = { name: $('#favored_terrain_1').val(), val: (parseInt($('#favored_terrain_1_bonus').val()) | 0) }; save_character();",
		                                    false, "style='width: 100%;'", null, favored_terrain);
		                            $('#favored_terrains').append('<tr><td>' + select + '</td><td><input id="favored_terrain_1_bonus" type="text" size="1"/></td></tr>');
		                            $('#favored_terrain_1_bonus').val(chardata.favored_terrains[1] ? chardata.favored_terrains[1].val : 0);
		                            $('#favored_terrain_1_bonus').blur(function() {
			                            chardata.favored_terrains[1] = {
			                                name : $('#favored_terrain_1').val(),
			                                val : (parseInt($('#favored_terrain_1_bonus').val()) | 0)
			                            };
			                            save_character();
		                            });
	                            }
				}],
			9: [{
                    				script : function() {
		                    var favored_enemy = favored_enemies.first({
			                    name : chardata.favored_enemies.length > 2 ? chardata.favored_enemies[2].name : ''
		                    });
		                    if (favored_enemy) {
			                    favored_enemy = favored_enemy._id;
		                    }
		                    var select = create_select('favored_enemy_2', favored_enemies.get(),
		                            "chardata.favored_enemies[2] = { name: $('#favored_enemy_2').val(), val: (parseInt($('#favored_enemy_2_bonus').val()) | 0) }; save_character();", false,
		                            "style='width: 100%;'", null, favored_enemy);
		                    $('#favored_enemies').append('<tr><td>' + select + '</td><td><input id="favored_enemy_2_bonus" type="text" size="1"/></td></tr>');
		                    $('#favored_enemy_2_bonus').val(chardata.favored_enemies[2] ? chardata.favored_enemies[2].val : 0);
		                    $('#favored_enemy_2_bonus').blur(function() {
			                    chardata.favored_enemies[2] = {
			                        name : $('#favored_enemy_2').val(),
			                        val : (parseInt($('#favored_enemy_2_bonus').val()) | 0)
			                    };
			                    save_character();
		                    });
	                    }
				}],
			12: [{
                    				script : function() {
		                    var favored_terrain = favored_terrains.first({
			                    name : chardata.favored_terrains.length > 2 ? chardata.favored_terrains[2].name : ''
		                    });
		                    if (favored_terrain) {
			                    favored_terrain = favored_terrain._id;
		                    }
		                    var select = create_select('favored_terrain_2', favored_terrains.get(),
		                            "chardata.favored_terrains[2] = { name: $('#favored_terrain_2').val(), val: (parseInt($('#favored_terrain_2_bonus').val()) | 0) }; save_character();", false,
		                            "style='width: 100%;'", null, favored_terrain);
		                    $('#favored_terrains').append('<tr><td>' + select + '</td><td><input id="favored_terrain_2_bonus" type="text" size="1"/></td></tr>');
		                    $('#favored_terrain_2_bonus').val(chardata.favored_terrains[2] ? chardata.favored_terrains[2].val : 0);
		                    $('#favored_terrain_2_bonus').blur(function() {
			                    chardata.favored_terrains[2] = {
			                        name : $('#favored_terrain_2').val(),
			                        val : (parseInt($('#favored_terrain_2_bonus').val()) | 0)
			                    };
			                    save_character();
		                    });
	                    }
				}],
			17: [{
                    				script : function() {
		                    var favored_terrain = favored_terrains.first({
			                    name : chardata.favored_terrains.length > 3 ? chardata.favored_terrains[3].name : ''
		                    });
		                    if (favored_terrain) {
			                    favored_terrain = favored_terrain._id;
		                    }
		                    var select = create_select('favored_terrain_3', favored_terrains.get(),
		                            "chardata.favored_terrains[3] = { name: $('#favored_terrain_3').val(), val: (parseInt($('#favored_terrain_3_bonus').val()) | 0) }; save_character();", false,
		                            "style='width: 100%;'", null, favored_terrain);
		                    $('#favored_terrains').append('<tr><td>' + select + '</td><td><input id="favored_terrain_3_bonus" type="text" size="1"/></td></tr>');
		                    $('#favored_terrain_3_bonus').val(chardata.favored_terrains[3] ? chardata.favored_terrains[3].val : 0);
		                    $('#favored_terrain_3_bonus').blur(function() {
			                    chardata.favored_terrains[3] = {
			                        name : $('#favored_terrain_3').val(),
			                        val : (parseInt($('#favored_terrain_3_bonus').val()) | 0)
			                    };
			                    save_character();
		                    });
	                    }
				}]
			},
		main: {
			before_specials: [
                                				function() {
		                                for ( var i in chardata.favored_enemies) {
			                                var f_e = favored_enemies.first({
				                                name : chardata.favored_enemies[i].name
			                                });
			                                $('#specials').append(
			                                        '<tr id="special_favored_enemy_' + f_e._id + '"><td><input id="favored_enemy_' + f_e._id
			                                                + '" type="checkbox"/></td><td><a class=fake_link onclick="show_item_detail(specials, \'90c3\')">' + chardata.favored_enemies[i].name + ' '
			                                                + pos(chardata.favored_enemies[i].val) + ' (Fav. Enemy)</a></td></tr>');
			                                $('input[id="favored_enemy_' + f_e._id + '"]').bind('click', {
				                                mod : chardata.favored_enemies[i].val
			                                }, function(e) {
				                                if ($(this).attr('checked')) {
					                                for ( var j in chardata.weapons) {
						                                update_weapon_attack(j, e.data.mod);
						                                update_weapon_damage(j, e.data.mod);
					                                }
					                                update_skill_ranks([ 'Bluff', 'Knowledge', 'Perception', 'Sense Motive', 'Survival' ]);
				                                } else {
					                                recalc_main_page();
				                                }
			                                });
		                                }
	                                },
	                                function() {
		                                for ( var i in chardata.favored_terrains) {
			                                var f_t = favored_terrains.first({
				                                name : chardata.favored_terrains[i].name
			                                });
			                                $('#specials').append(
			                                        '<tr id="special_favored_terrain_' + f_t._id + '"><td><input id="favored_terrain_' + f_t._id
			                                                + '" type="checkbox"/></td><td><a class=fake_link onclick="show_item_detail(specials, \'9dc3\')">' + chardata.favored_terrains[i].name
			                                                + ' ' + pos(chardata.favored_terrains[i].val) + ' (Fav. Terrain)</a></td></tr>');
			                                $('input[id="favored_terrain_' + f_t._id + '"]').bind('click', {
				                                mod : chardata.favored_terrains[i].val
			                                }, function(e) {
				                                if ($(this).attr('checked')) {
					                                for ( var j in chardata.weapons) {
						                                update_weapon_attack(j, e.data.mod);
						                                update_weapon_damage(j, e.data.mod);
					                                }
					                                update_skill_ranks([ 'Knowledge', 'Perception', 'Stealth', 'Survival' ]);
				                                } else {
					                                recalc_main_page();
				                                }
			                                });
		                                }
	                                }
			]
		},
		feats: {
				1: {
                            	script : function(bonus) {
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
                            	script : function(bonus) {
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
                            	script : function(bonus) {
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
	class_features: ["Cast Divine"],
	update_weapon_style : function() {
		chardata.weapon_style = $('#weapon_style_select').val();
        save_character();
	},
	edit_favored : function(favored_name, db, index) {
        if (!chardata[favored_name]) {
            chardata[favored_name] = [];
        }
        var favored = db.first({
            name : chardata[favored_name].length > index ? chardata[favored_name][index].name : ''
        });
        if (favored) {
            favored = favored._id;
        }
        var select = create_select(favored_name + '_' + index, db.get(),
                "chardata." + favored_name + "[" + index + "] = { name: $('#" + favored_name + "_" + index + "').val(), val: (parseInt($('#" + favored_name + "_" + index + "_bonus').val()) | 0) }; save_character();",
                false, "style='width: 100%;'", null, favored_terrain);
        $('#' + favored_name + 's').append('<tr><td>' + select + '</td><td><input id="' + favored_name + '_' + index + '_bonus" type="text" size="1"/></td></tr>');
        $('#' + favored_name + '_' + index + '_bonus').val(chardata[favored_name][index] ? chardata[favored_name][index].val : 0);
        $('#' + favored_name + '_' + index + '_bonus').blur(function() {
            chardata[favored_name][index] = {
                name : $('#' + favored_name + '_' + index).val(),
                val : (parseInt($('#' + favored_name + '_' + index + '_bonus').val()) | 0)
            };
            save_character();
        });

	}
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
	tags: ["pathfinder"], _id: "3410",
    spells: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    feats: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    specials: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
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
	tags: ["pathfinder"], _id: "9c80",
    spells: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    feats: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    specials: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    custom: {
		edit: {
			0: [{
					ui: "<table style='width: 100%;'><tr><td>Bloodline: </td><td id='bloodline'></td></tr></table>",
                    script : function() {
		                            var char_bloodline = sorcerer_bloodlines.first({
			                            name : chardata.bloodline
		                            });
		                            update_bloodline = function() {
			                            chardata.bloodline = $('#bloodline_select').val();
			                            save_character();
		                            };
		                            var select = create_select('bloodline_select', sorcerer_bloodlines.get(), "update_bloodline(); recalc_edit_page();", false, "style='width: 100%;'", null,
		                                    (char_bloodline ? char_bloodline._id : ''));
		                            $('#bloodline').append('<tr><td>' + select + '</td></tr>');
	                            }
    			}
    		]
    	},
    	main: {
    		before_spells: [
     			function() {
	                            var bloodline = sorcerer_bloodlines.first({
		                            name : chardata.bloodline
	                            });
	                            if (bloodline) {
		                            for ( var level in bloodline.spells) {
			                            var spell = spells.first({
				                            name : bloodline.spells[level]
			                            });
			                            if (chardata.classes['Sorcerer'].level >= level && all_spells[spell.classes['Sorcerer']].indexOf(bloodline.spells[level]) == -1) {
				                            all_spells[spell.classes['Sorcerer']].push(bloodline.spells[level]);
			                            }
		                            }
	                            }
                            }
    		],
    		after_spells: [
     			function() {
	                            var bloodline = sorcerer_bloodlines.first({
		                            name : chardata.bloodline
	                            });
	                            if (bloodline) {
		                            for ( var level in bloodline.spells) {
			                            if (chardata.classes['Sorcerer'].level >= level) {
				                            var spell = spells.first({
					                            name : bloodline.spells[level]
				                            });
				                            $('#spell_' + spell._id).wrap('<i />');
			                            }
		                            }
		                            $('#etc').append('<i>Bloodline &nbsp;</i>');
	                            }
                            }
    		],
    		before_specials: [
     		    function() {
	                            var bloodline = sorcerer_bloodlines.first({
		                            name : chardata.bloodline
	                            });
	                            if (bloodline) {
		                            for ( var i in bloodline.powers) {
			                            var power = bloodline_powers.first({
				                            name : bloodline.powers[i]
			                            });
			                            for ( var level in power.levels) {
				                            if (level <= chardata.classes['Sorcerer'].level) {
					                            $("#specials").append(
					                                    "<tr><td><input id='bloodline_power_" + power._id
					                                            + "' type='checkbox'/></td><td><a class=fake_link onclick='show_item_detail(bloodline_powers, " + power._id + ")'>" + power.name
					                                            + "</a></td></tr>");
				                            }
			                            }
		                            }
	                            }
                            }
    		]
    	},
		feats: {
				6: {
					script : function(bonus) {
                        bonus.count += 1;
                        var bloodline = sorcerer_bloodlines.first({
                            name : chardata.bloodline
                        });
                        if (bloodline) {
                            for ( var feat in bloodline.feats) {
	                            bonus.feats[feat] = true;
                            }
                        }
                        return bonus;
                    }
				},
				12: {
					script: function(bonus) { bonus.count += 1; }
				},
				18: {
					script: function(bonus) { bonus.count += 1; }
				}
			},
		spells: {
			// before_spells: [
			// 	"var bloodline = sorcerer_bloodlines.first({ name: chardata.bloodline }); if(bloodline) { for(var level in bloodline.spells) { if(chardata.classes['Sorcerer'].level >= level) { var spell = spells.first({ name: bloodline.spells[level] }); } } }"
			// ],
			after_spells: [
 				function() {
                        var bloodline = sorcerer_bloodlines.first({
	                        name : chardata.bloodline
                        });
                        if (bloodline) {
	                        for ( var level in bloodline.spells) {
		                        if (chardata.classes['Sorcerer'].level >= level) {
			                        var spell = spells.first({
				                        name : bloodline.spells[level]
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
	tags: ["pathfinder"], _id: "d1b5",
    spells: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    feats: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
    specials: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
	class_features: ["Cast Arcane"]
}]);