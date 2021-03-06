function main() {
}

main.load = function() {
	session={};
	// console.group("load");
	chardata = { log: [] };
	players_companion = JSON.parse(unescape(get_cookie_data("players_companion"))) || {};
	if (players_companion.last_character) {
		lod(players_companion.last_character);
		// find me a home
		for(var classname in chardata.classes) {
			char_classes.push(classname);
		}
		main.do_main();
	} else {
		chardata.options = chardata.options ? chardata.options : {};
		load_static_data();
		chardata.options.owner = players_companion.owner;
		main.do_edit();
	}
	// console.groupEnd();
}

// TODO - boil this down; see switch_content(), set_view in common
main.do_main = function() {
	if(!is_empty(chardata.classes)) {
		main.build_main_page();
		main.populate_main_page();
		main.recalc_main_page();
	} else {
		main.do_edit();
	}
}

main.do_edit = function() {
	build_edit_page();
	populate_edit_page();
	recalc_edit_page();
}

main.do_feats = function() {
	build_feats_page();
	populate_feats_page();
//	recalc_prereqs();
}

main.do_spells = function() {
	edit_spells.build_spells_page();
	edit_spells.populate_spells_page();
	// recalc_spells_page();
}

main.do_equipment = function() {
	edit_equipment.build_equipment_page();
	edit_equipment.populate_equipment_page();
	edit_equipment.recalc_equipment_page();
}

main.get_rogue_skill_selections = function() {
	var skill_selections = [];
	var rogue_special_abilities = chardata.rogue_special_abilities;
	for(var i in rogue_special_abilities) {
		if(rogue_special_abilities[i].special_id == 72) {
			skill_selections = skill_selections.concat(rogue_special_abilities[i].multi);
		}
	}

	return skill_selections;
}

main.reset_ability_score = function(e) {
	$("input[id='ability_" + e.data.ability + "_score']").val($("#ability_score_full" + id).text());
	chardata.abilities["temp_" + e.data.ability] = parseInt($("#ability_score_full" + id).text());
	save_character();
	return main.recalc_main_page();
}

main.recalc_ability_mod = function(e) {
	if(!isNaN($(this).val())) {
		chardata.abilities["temp_" + e.data.ability] = $(this).val();
	}
	save_character();
	return main.recalc_main_page();
}

main.show_skill_detail = function(e) {
	return show_item_detail(skills, e.data.skill_id);
}

main.recalc_favored_enemy = function(e) {
	if ($(this).attr('checked')) {
		for (var j in chardata.weapons) {
			update_weapon_attack(j, e.data.mod);
			update_weapon_damage(j, e.data.mod);
		}
		update_skill_ranks(["Bluff", "Knowledge (arcana)", "Knowledge (architecture and engineering)", "Knowledge (dungeoneering)", "Knowledge (geography)", "Knowledge (history)", "Knowledge (local)", "Knowledge (nature)", "Knowledge (nobility and royalty)", "Knowledge (religion)", "Knowledge (the planes)", "Perception", "Sense Motive", "Survival"]);
	} else {
		recalc_main_page();
	}
}

main.build_main_page = function() {
	// console.group("build_main_page");
	equipment_benefits = {};
	for(var i in chardata.equipment) {
		if(chardata.equipment[i].benefits != null && chardata.equipment[i].benefits.length > 0) {
			for(var j in chardata.equipment[i].benefits) {
				if(equipment_benefits[chardata.equipment[i].benefits[j].id] == null) {
					equipment_benefits[chardata.equipment[i].benefits[j].id] = 0;
				}
				equipment_benefits[chardata.equipment[i].benefits[j].id] += parseInt(chardata.equipment[i].benefits[j].mod);
			}
		}
	}
	session["armor"] = [];
	for(var i in chardata.armors) {
		session["armor"][i] = {};
		session["armor"][i]["is_worn"] = true;
	}

	session["shield"] = [];
	for(var i in chardata.shields) {
		session["shield"][i] = {};
		session["shield"][i]["is_worn"] = true;
	}

	set_links_part( 0);
	// build the div structure
	$('#content').html("<div id='topline'></div> <div id='topleceilft' class='dp66'> <div id='abilitiespart' class='dp40' style='float: left'> <table border=0 id='abilities_table'> <tr> <td id='char_name' colspan='4' style='font-weight: bold; color: blue'></td> </tr> <tr> <td><b>Str</b></td> <td id='ability_score_full_Str' nowrap></td> <td><input ability='Str' id='ability_Str_score' class='two_digit' value='' type='text'></td> <td id='ability_Str_mod' align='right' nowrap></td> </tr> <tr> <td><b>Dex</b></td> <td id='ability_score_full_Dex' nowrap></td> <td><input ability='Dex' id='ability_Dex_score' class='two_digit' value='' type='text'></td> <td id='ability_Dex_mod' align='right' nowrap></td> </tr> <tr> <td><b>Int</b></td> <td id='ability_score_full_Int' nowrap></td> <td><input ability='Int' id='ability_Int_score' class='two_digit' value='' type='text'></td> <td id='ability_Int_mod' align='right' nowrap></td> </tr> <tr> <td><b>Con</b></td> <td id='ability_score_full_Con' nowrap></td> <td><input ability='Con' id='ability_Con_score' class='two_digit' value='' type='text'></td> <td id='ability_Con_mod' align='right' nowrap></td> </tr> <tr> <td><b>Cha</b></td> <td id='ability_score_full_Cha' nowrap></td> <td><input ability='Cha' id='ability_Cha_score' class='two_digit' value='' type='text'></td> <td id='ability_Cha_mod' align='right' nowrap></td> </tr> <tr> <td><b>Wis</b></td> <td id='ability_score_full_Wis' nowrap></td> <td><input ability='Wis' id='ability_Wis_score' class='two_digit' value='' type='text'></td> <td id='ability_Wis_mod' align='right' nowrap></td> </tr><tr><td colspan=3>Speed: <span id='speed'></span></td></tr> </table> </div> <div id='middlepart' class='dp60' style='float: left;'> <table id='middle_table' style='table-layout: fixed; width: 100%'> <tr> <td colspan=4 style='padding: 0px;'> <table border=0 style='padding: 0px; width: 100%;'> <tr> <td align='left'>HP</td> <td id='hp' align='right'></td> <td align='right'><input id='temp_hp' style='width: 2em;text-align: center;' type='text' value='' /></td> <td align='right'>SD <input id='subdual_hp' style='width: 15px; text-align: center' type='text' value='' /></td> </tr> </table> </td> </tr> <tr> <td colspan='4'></td> </tr> <tr> <td>Fort</td> <td id='fort' class='box numeric' style='width: 30px;' nowrap></td> <td>AC</td> <td id='ac' class='box numeric' style='width: 30px;'></td> </tr> <tr> <td>Ref</td> <td id='ref' class='box numeric' nowrap></td> <td>Tch</td> <td id='touch' class='box numeric' nowrap></td> </tr> <tr> <td>Will</td> <td id='will' class='box numeric' nowrap></td> <td>Flat</td> <td id='flat' class='box numeric' nowrap></td> </tr> <tr> <td>SR</td> <td id='spell_resistance' class='box numeric' nowrap></td> <td>Init</td> <td id='init' class='box numeric'></td> </tr><tr><td colspan=4><table id='dr' style='border: 1px LightGrey solid; width: 100%; margin-top: 3px; margin-bottom: 3px;'></table></td></tr><tr><td colspan=4><table id='saves' style='border: 1px LightGrey solid; width: 100%; margin-top: 3px; margin-bottom: 3px;'></table></td></tr><tr> <td>CMB</td> <td id='cmb' class='box' colspan=3></td> </tr><tr> <td>CMD</td> <td id='cmd' class='box' colspan=3></td> </tr> <tr> <td>BAB</td> <td id='base_attack_bonus' class='box' colspan=3></td> </tr> <tr> <td colspan='4'></td> </tr> <tr> <td>Att</td> <td id='attack_mod'>0</td> <td><a id='plus_att' class='btn box' style='font-family: monospace; font-size: larger; width: 20px'> + </a></td> <td style='text-align: right'><a id='minus_att' class='btn box' style='font-family: monospace; font-size: larger; width: 20px'> - </a></td> </tr> <tr> <td>Dam</td> <td id='damage_mod'>0</td> <td><a id='plus_dam' class='btn box' style='font-family: monospace; font-size: larger; width: 20px'> + </a></td> <td style='text-align: right'><a id='minus_dam' class='btn box' style='font-family: monospace; font-size: larger; width: 20px'> - </a></td> </tr> </table> </div> <div id='featspart' class='dp100'> <table style='width: 100%; margin: 0px 0px 5px 0px; border-collapse: collapse;' border='0'> <tbody> <tr onclick=\"toggle_visible('conditional_feats')\"> <td colspan='3' bgcolor='#8DC3E9'><span id='conditional_feats_expand_flag' style='float: right; vertical-align: middle'><img src='images/collapsed.png' /></span><a class='fake_link'>Feats</a></td> </tr> </tbody> <tbody id='conditional_feats'></tbody> </table> </div> <div id='specialpart' class='dp100'> <table id='specials_table' style='width: 100%; border: 0px; margin: 0px 0px 5px 0px; border-collapse: collapse;'> <tr id='specials_heading' style='background-color: #8DC3E9'> <td colspan='2'><span id='specials_expand_flag' style='float: right'><img src='images/collapsed.png' /></span><a class='fake_link'>Special Abilities</a></td> </tr> <tbody id='specials'></tbody> </table> </div> <div id='weaponspart' class='dp100'></div> <div id='armorpart' class='dp100'></div> <div id='shieldspart' class='dp100'></div> <div id='spellspart' class='dp100'></div> </div> <div id='skillspart' class='dp33'> <table border='0' id='skills_table'></table> </div>");

	// ability scores
	$("#ability_score_full0").bind('click', { ability: "Str", id: 0 }, function(e) { return main.reset_ability_score(e); });
	$("input[id='ability_Str_score']").bind('blur', { ability: "Str" }, function(e) { return main.recalc_ability_mod(e) });
	$("#ability_score_full1").bind('click', { ability: "Dex", id: 1 }, function(e) { return main.reset_ability_score(e); });
	$("input[id='ability_Dex_score']").bind('blur', { ability: "Dex" }, function(e) { return main.recalc_ability_mod(e) });
	$("#ability_score_full2").bind('click', { ability: "Int", id: 2 }, function(e) { return main.reset_ability_score(e); });
	$("input[id='ability_Int_score']").bind('blur', { ability: "Int" }, function(e) { return main.recalc_ability_mod(e) });
	$("#ability_score_full3").bind('click', { ability: "Con", id: 3 }, function(e) { return main.reset_ability_score(e); });
	$("input[id='ability_Con_score']").bind('blur', { ability: "Con" }, function(e) { return main.recalc_ability_mod(e) });
	$("#ability_score_full4").bind('click', { ability: "Cha", id: 4 }, function(e) { return main.reset_ability_score(e); });
	$("input[id='ability_Cha_score']").bind('blur', { ability: "Cha" }, function(e) { return main.recalc_ability_mod(e) });
	$("#ability_score_full5").bind('click', { ability: "Wis", id: 5 }, function(e) { return main.reset_ability_score(e); });
	$("input[id='ability_Wis_score']").bind('blur', { ability: "Wis" }, function(e) { return main.recalc_ability_mod(e) });

	// TODO - add utility
	// skills
	if (chardata.skills == null) {
		chardata.skills = TAFFY([]);
	}
	// TODO - kick out to classes.js
	var rogue_skill_selections = main.get_rogue_skill_selections();
	skills().each(function(skill, i) {
		var skill_selection_ind_html = rogue_skill_selections.indexOf(skill._id) > -1 ? "<sup>+</sup>" : "";
		if(skill.subtypes) {
			var char_skill = chardata.skills({ skill_name: skill.name }).first();
			if(char_skill) {
				for(var subtype in char_skill.subtypes) {
					main.build_skill_entry(skill, skill_selection_ind_html, subtype);
				}
			}
		} else {
			main.build_skill_entry(skill, skill_selection_ind_html);
		}
	});

	// AC, etc
	$("#temp_hp").bind('blur', function() { if(!isNaN($(this).val())) { chardata.temp_hp = $(this).val(); save_character(); } });
	$("#subdual_hp").bind('blur', function() { if(!isNaN($(this).val())) { chardata.subdual_hp = $(this).val(); save_character(); } });
	$("#plus_att").bind('click', function() { return main.adjust_mod('attack', 1) });
	$("#minus_att").bind('click', function() { return main.adjust_mod('attack', -1) });
	$("#plus_dam").bind('click', function() { return main.adjust_mod('damage', 1) });
	$("#minus_dam").bind('click', function() { return main.adjust_mod('damage', -1) });

	// conditional feats
	var feats_html = "";
	var conditional_feats = [];


	// custom class features
	for (var classname in chardata.classes) {
		var clazz = classes({ name : classname }).first();
		if (clazz.custom && clazz.custom.main && clazz.custom.main.before_specials) {
			for (var script in clazz.custom.main.before_specials) {
				clazz.custom.main.before_specials[script]();
			}
		}
	}

	var char_feats = get_char_feats()();
	for (var i =0; i < char_feats.length; i++) {
		var feat = feats({
			name: char_feats[i].name
		}).first();
		if(feat && feat.conditional) {
			conditional_feats.push(feat);
		}
	}
	if (conditional_feats.length > 0) {
		for ( var i in conditional_feats) {
			var checkbox = (conditional_feats[i].op != null ?
					["<input id='feat_", conditional_feats[i]._id, "_conditional' type='checkbox' onclick=\"", conditional_feats[i].op, "\"/>"].join('')  :
					"") ;
			$('#conditional_feats').append(["<tr id='feat_", conditional_feats[i]._id, "'><td>", checkbox, "</td><td class='seamless' valign='top'><a id='feat_", conditional_feats[i]._id, "'class='fake_link'>", conditional_feats[i].name, "</a></td><td  class='seamless' style='width: 100%'>", conditional_feats[i].summary, "</td></tr>"].join(''));
			$("a[id='feat_" + conditional_feats[i]._id + "']").bind('click', { id: conditional_feats[i]._id }, function(e) { return show_item_detail(feats, e.data.id); });
		}
	} else {
		$("#featspart").hide();
	}
	$("tr[id^='feat']:odd").css("background-color", "#EFF1F1");
	$('#conditional_feats').hide();

	// class special abilities
	var class_specials = get_special_abilities();
	if (count_attrs(class_specials) > 0) {
		$('#specials_heading').bind('click', function(e) { return toggle_visible('specials'); });
		for (var i in class_specials) {
			if(class_specials[i] && !class_specials[i].hide) {
				var checkbox = (class_specials[i].op != null ?
						["<input id='special_", class_specials[i]._id, "' type='checkbox' onclick=\"", class_specials[i].op, "\"/>"].join('')  : "");
				$("#specials").append(["<tr id='special_", class_specials[i]._id, "'><td style='padding: 3px 0px;'>", checkbox, "</td><td class='seamless' style='width: 100%;'><a class='fake_link' onclick='show_item_detail(specials, \"" + class_specials[i]._id + "\")'>", class_specials[i].name, (class_specials[i].mod == null ? "" : [" ", class_specials[i].mod, "</a></td></tr>"].join(''))].join(''));
				$("a[id='special_" + class_specials[i]._id + "']").bind('click', { id: class_specials[i]._id }, function(e) { return show_item_detail(specials, e.data.id); });
			}
		}
	} else {
		$("#specialpart").hide();
	}

	$("tr[id^='special']:odd").css("background-color", "#EFF1F1");
	$('#specials').hide();

	// weapons
	if(!chardata.weapons) {
		chardata.weapons = [];
	}
	var char_weapons = do_class_functions("main", "before_weapons_build", chardata.weapons);
	// base attack information
	var html = [];
	for (var j in char_weapons) {
		var weapon_data = weapons({name: char_weapons[j].weapon_name}).first();
		html.push(["<table width='100%' border='0' margin='0'><tr><td id='weapon_", j, "_name' weapon_id='", weapon_data._id, "' colspan='4' bgcolor='#C5C6F6'></td></tr><tr><td width='22px'>Att</td><td id='weapon_", j, "_att' class='box'></td><td  width='20px'>Crit</td><td id='weapon_", j, "_crit' class='box' width='50px'></td></tr><tr><td width='22px'>Dam</td><td id='weapon_", j, "_dam' class='box'></td><td width='20px'>Bon</td><td id='weapon_", j, "_bon' class='box'></td></tr><tr id='weapon_", j, "_note'><td id='weapon_", j, "_note' colspan='4' width='100%' style='padding-left: 10px'></td></tr></table>"].join(''));
	}

	$('#weaponspart').html(html.join(''));
	$('#weaponspart').css('margin-top', '5px');
//	$('#weaponspart').addClass('box');
//	$('#weaponspart').css('border-color', '#D0D0D0');

	// armor
	html = [];
	for (var j in chardata.armors) {
		var armor_data = armors({name : chardata.armors[j]['armor_name']}).first();
		html.push(["<table width='100%' border='0' margin='0'><tr id='armor_", j, "' armor_idx='", j, "' onclick=\"var chk=$('#armor_", j, "_is_worn_check'); session['armor'][", j,"]['is_worn']=!session['armor'][",j,"]['is_worn']; chk.attr('src', 'images/'+ (session['armor'][", j,"]['is_worn'] ? 'checked' : 'unchecked') + '.png'); main.recalc_main_page();\"><td colspan='4' bgcolor='#C5C6F6'><img id='armor_", j, "_is_worn_check' armor_idx='", j, "' src='images/", session['armor'][j]['is_worn'] ? 'checked' : 'unchecked', ".png' style='float: right; margin-right: 3px; margin-left: 2px; margin-bottom: 1px; margin-top: 1px'/><label style='float: right; margin-bottom: 0px; margin-top: 1px; vertical-align: middle' class='fake_link'>worn:</label><span id='armor_", j, "_name'  class='fake_link'></span></td></tr><tr><td>Bon</td><td id='armor_", j, "_bon' class='box' width='50%'></td><td>ACP</td><td id='armor_", j, "_acp'  class='box' width='50%'></td></tr><tr id='armor_", j, "_note'><td valign='top'>Note</td><td colspan='3' id='armor_", j, "_note' width='100%'></td></tr></table>"].join(''));
	}
	$('#armorpart').html(html.join(''));
	$('#armorpart').css('margin-top', '5px');

	// armor
	html = [];
	for (var j in chardata.shields) {
		var shield_data = shields({_id : chardata.shields[j]['shield_id']}).first();
		html.push(["<table width='100%' border='0' margin='0'><tr id='shield_", j, "' shield_idx='", j, "' onclick=\"var chk=$('#shield_", j, "_is_worn_check'); session['shield'][", j,"]['is_worn']=!session['shield'][",j,"]['is_worn']; chk.attr('src', 'images/'+ (session['shield'][", j,"]['is_worn'] ? 'checked' : 'unchecked') + '.png'); main.recalc_main_page();\"><td colspan='4' bgcolor='#C5C6F6'><img id='shield_", j, "_is_worn_check' shield_idx='", j, "' src='images/", session['shield'][j]['is_worn'] ? 'checked' : 'unchecked', ".png' style='float: right; margin-right: 3px; margin-left: 2px; margin-bottom: 1px; margin-top: 1px;'/><label style='float: right; margin-bottom: 0px; margin-top: 1px; vertical-align: middle' class='fake_link'>worn:</label><span id='shield_", j, "_name'  class='fake_link'></span></td></tr><tr><td>Bon</td><td id='shield_", j, "_bon' class='box' width='50%'></td><td>ACP</td><td id='shield_", j, "_acp'  class='box' width='50%'></td></tr><tr id='shield_", j, "_note'><td valign='top'>Note</td><td colspan='3' id='shield_" + j + "_note' width='100%'></td></tr></table>"].join(''));
	}
	$("#shieldspart").html(html.join(""));
	$("#shieldspart").css("margin-top", "5px");
	// $("tr[id^='shield_']").click(function() {
		// session["shield"][this.shield_idx]["is_worn"] =! session["shield"][this.shield_idx]["is_worn"];
		// $(this.id).attr("src", (session["shield"][this.shield_idx]["is_worn"] ? "checked" : "unchecked") + ".png");
		// main.recalc_main_page();
		// alert($(this.id).attr("src"));
	// });
	// spells
	var char_domains = [];
	for (var domain in chardata.domains) {
		var domain = domains({
			name : chardata.domains[domain]
		}).first();
		char_domains.push(domain);
	}

	for (var classname in chardata.classes) {
		var clazz = classes({ name : classname }).first();
	}

	// TODO - what's the modifier for SPD?
	$('#spellspart').css('margin-top', '10px');
	$('#spellspart').html("");
	for (var classname in chardata.classes) {
		var clazz = classes( {
			name : classname
		}).first();
		if (clazz.spells_known && !chardata.classes[classname].spells) {
			chardata.classes[classname].spells = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
		}
		var all_spells = $.merge([], (clazz.spells_known ? chardata.classes[classname].spells : clazz.spells));
		if (clazz.custom && clazz.custom.main && clazz.custom.main.before_spells) {
			for (var script in clazz.custom.main.before_spells) {
				clazz.custom.main.before_spells[script](all_spells);
			}
		}
		var spells_per_day = clazz.spells_per_day[chardata.classes[classname].level];
		if (spells_per_day != null && spells_per_day.length > 0) {
				var spells_html = ["<table style='border: 1px solid #D0D0D0' width='100%' border='0' margin='0'><tr bgcolor='#8DC3E9'><td colspan='", (spells_per_day.length), "'><span id='etc_",clazz.shortname,"' style='float: right'></span>Spells per day (",clazz.shortname,") &nbsp;"];
				if(classname == "Cleric") {
					spells_html.push("<span style='float: right; padding-right: 3px;'>+1 ");
						for (var domain in char_domains) {
								spells_html.push(["<i><a class='fake_link' onclick=\"show_item_detail(domains, '", char_domains[domain]._id, "')\">", char_domains[domain].name, "</a></i> "].join(''));
						}
					spells_html.push("</span>");
				}
			spells_html.push("</td></tr></table><table style='border: 1px solid #D0D0D0' width='100%' border='0' margin='0'><tr>");
			for (var i in spells_per_day) {
				spells_html.push(["<td id='spd_level_",clazz.shortname, i, "' align='center'>", i, "</td>"].join(''));
			}
			spells_html.push("</tr><tr>");
			for (var i in spells_per_day) {
				spells_html.push(["<td id='spd_count_",clazz.shortname,i, "' align='center'></td>"].join(''));
			}

			// selected spells do not change
			spells_html.push("</tr></table><table style='border: 1px solid #D0D0D0' width='100%' border='0' margin='0'>");
			// this gives us the level of spells available
			for (var level in spells_per_day) {
				var spells_printed = 0;
				// only print spells if they're available
				if (spells_per_day[level] != '-') {
					spells_html.push(["<tr onclick=\"toggle_visible('spell_lvl_", clazz.shortname, level, "')\"><td bgcolor='#8DC3E9' colspan='2'><span id='spell_lvl_", clazz.shortname, level, "_expand_flag' style='float: right'><img src='images/expanded.png'/></span>", level, "</td></tr><tbody id='spell_lvl_",clazz.shortname, level, "'><tr>"].join(''));
					// insert the current level domain spell into the list, if it doesn't exist
					var clazz_spells = all_spells[level] ? all_spells[level].slice(0) : [];
					if (level > 0) {
						// domain spells added 1st through 9th
						for (var domain in char_domains) {
							if(clazz_spells.indexOf(char_domains[domain].spells[level - 1]) == -1) {
								clazz_spells.push(spells({name: char_domains[domain].spells[level - 1]}).first().name);
							}
						}
					}
					clazz_spells.sort();

					class_spells_loop:
					// loop over all class spells
					for ( var i in clazz_spells) {
						// clerics, druids and related have 0 spells_known
						// wizards print it if the spell id is in their character
						// list of spells
						if(!clazz.spells_known || chardata.classes[classname].spells[level].indexOf(clazz_spells[i]) > -1) {
							var spell = spells( {
								name : clazz_spells[i]
							}).first();
							// TODO - this does not come close to handling the general case
							// don't print the spell if the descriptor is counter to alignment
							for ( var j in spell.descriptors) {
								if (spell.descriptors[j] != chardata.alignment && goodness.find(spell.descriptors[j]) != chardata.goodness) {
									continue class_spells_loop;
								}
							}
							// TODO - should I be doing the filtering a lot earlier?
							var domain_highlight = false;
							for (var domain in char_domains) {
								if((classname == "Paladin" || classname == "Cleric") && spell.name == char_domains[domain].spells[level - 1]) {
									domain_highlight = true;
									break;
								}
							}
							spells_html.push(["<td><a id='spell_",spell._id, "' class='fake_link' onclick='show_item_detail(spells, \"", spell._id, "\")'>",(domain_highlight ? '<i>' : ''), spell.name, (domain_highlight ? '</i>' : ''), "</a></td>"].join(''));
							if (spells_printed % 2 == 1) {
								spells_html.push("</tr><tr>");
							}
							spells_printed++;
						}
					}
					spells_html.push("</tr></tbody>");
				}
			}
			spells_html.push("</tr></table>");
			$('#spellspart').append(spells_html.join(''));

		}
	}
	for (var classname in chardata.classes) {
		var clazz = classes({ name : classname }).first();
		if (clazz.custom && clazz.custom.main && clazz.custom.main.before_spells) {
			for (var script in clazz.custom.main.after_spells) {
				clazz.custom.main.after_spells[script]();
			}
		}
	}
	// console.groupEnd();
}

main.build_skill_entry = function(skill, skill_selection_ind_html, subtype) {
	var skill_html = ["<tr id='skill_", skill._id, "_row'" + (subtype ? " subtype='" + subtype + "'" : "") + ">", "<td><a id='skill_", skill._id, "' class='fake_link'>", skill.name, (subtype ? " (" + subtype + ")" : ""), skill_selection_ind_html, "</a></td>", "<td id='skill_", skill._id, "_ranks' align='right' valign='top' skill_id='", skill._id, "'" + (subtype ? " subtype='" + subtype + "'" : "") + " nowrap></td></tr>"];
	$("#skills_table").append(skill_html.join(''));
	$("a[id='skill_" + skill._id + "']").bind("click", { skill_id: skill._id }, function(e) { return main.show_skill_detail(e); });
}

main.adjust_mod = function(type, magnitude) {
	var curr_val = parseInt($('#' + type + '_mod').text());
	$('#' + type + '_mod').text(pos(curr_val + magnitude));
	main.recalc_main_page();
}

main.populate_main_page = function() {
	// console.group("populate_main_page");
	var race = races({
		name : chardata.race_name
	}).first();
	$('#char_name').text(chardata.name);
//	$('#race').text(race ? race : '');
//	$('#clazz').text(clazz ? clazz : '');
	$('#hp').text(chardata.hp == null || chardata.hp.length <= 0 ? 0 : main.calc_hp(chardata.hp, chardata.feats));
	$('#temp_hp').val(chardata.temp_hp || $("#hp").text() || 0);
	$('#subdual_hp').val(chardata.subdual_hp || $("#subdual_hp").text() || 0);
	$("input[id='hp']").val(chardata.hp == null || chardata.hp.length <= 0 ? 0 : chardata.hp);
	$('#level').text(calc_level() + 1);
//	$('#attack_mod').spinner();
//	$('#damage_mod').spinner();

	// ability scores
	var allabilities = chardata.abilities;
	for (var ability in abilities) {
		var ability_score = calc_ability_score(ability, chardata.race_name, chardata.abilities[ability]);
		$('#ability_score_full_' + ability).text(ability_score);
		var temp_score = chardata.abilities[ability + "_curr"] || ability_score;
		$('#ability_' + ability + '_score').val(temp_score);
		/* mod is always determined by the temp score */
		var ability_mod = calc_ability_modifier(ability);
		$('#ability_' + ability + '_mod').text(pos(ability_mod));
	}

	// weapons
	var char_weapons = do_class_functions("main","before_weapons_populate", chardata.weapons);
	for (var j in char_weapons) {
		var weapon_data = weapons({
			name : char_weapons[j].weapon_name
		}).first();
		$('#weapon_' + j + '_name').text(char_weapons[j].name != null ? char_weapons[j].name + (char_weapons[j].name.indexOf(weapon_data.name) == -1 ? " (" + weapon_data.name + ")" : "") : weapon_data.name);
		$('#weapon_' + j + '_crit').text(main.calc_critical(weapon_data.crit, char_weapons[j], chardata.feats));
		$('#weapon_' + j + '_bon').text(char_weapons[j].att != null ? char_weapons[j].att : "");
		$("td[id='weapon_" + j + "_note']").text(char_weapons[j].note);
		var note = char_weapons[j].note;
		if($.isFunction(note)) {
			note = note();
		}
		$("tr[id='weapon_" + j + "_note']").toggle(note && note.length > 0);
	}

	// armor
	for (var j in chardata.armors) {
		var armor_data = armors({
			name : chardata.armors[j]['armor_name']
		}).first();
		$('#armor_' + j + '_name').text(chardata.armors[j].name != null ? chardata.armors[j].name + (chardata.armors[j].name.indexOf(armor_data.name) == -1 ? " (" + armor_data.name + ")" : "") : armor_data.name);
		// populate with char overrides
		$('#armor_' + j + '_bon').text(armor_data.bon);
		$('#armor_' + j + '_acp').text(armor_data.acp);
		$('#armor_' + j + '_note').text(chardata.armors[j]['notes']);
		$("tr[id='armor_" + j + "_note']").toggle(chardata.armors[j].note != null && chardata.armors[j].note.length > 0);
	}

	// shield
	for (var j in chardata.shields) {
		var shield_data = shields({
			name : chardata.shields[j]['shield_name']
		}).first();
		$('#shield_' + j + '_name').text(chardata.shields[j].name != null ? chardata.shields[j].name + (chardata.shields[j].name.indexOf(shield_data.name) == -1 ? " (" + shield_data.name + ")" : "") : shield_data.name);
		// populate with char overrides
		$('#shield_' + j + '_bon').text(shield_data.bon);
		$('#shield_' + j + '_acp').text(shield_data.acp);
		$('#shield_' + j + '_note').text(chardata.shields[j]['notes']);
		$("tr[id='shield_" + j + "_note']").toggle(chardata.shields[j].note != null && chardata.shields[j].note.length > 0);
	}

	// TODO - refactor along with saves (below)
	var drs = do_class_functions("main", "damage_reduction", chardata.dr);
	var dr_count = count_attrs(drs);
	var row_cnt = 0;
	var col_cnt = 0;
	$("#dr").append("<tr id='dr_0'>");
	for(var dr in damage_reductions) {
		console.log(damage_reductions[dr] + ": " + drs[damage_reductions[dr]] + " ____  " + equipment_benefits[damage_reductions[dr]]);
		if(drs[damage_reductions[dr]] || equipment_benefits[damage_reductions[dr]]) {
			col_cnt++;
			console.log(row_cnt + ": " + $("#dr"+row_cnt));
			$("#dr_" +  row_cnt).append("<td style='width: 25%;'>" + capitalize(damage_reductions[dr]) + "</td><td id='" + damage_reductions[dr] + "' style='width: 25%;' class='box numeric' nowrap>" + pos((drs[damage_reductions[dr]] ? drs[damage_reductions[dr]] : 0) + calc_dr(damage_reductions[dr])) + "</td>");
			if(col_cnt && col_cnt % 2 == 0) {
				$("#dr").append("</tr>");
				row_cnt++;
				// if(dr_count / 2 > row_cnt) {
					$("#dr").append("<tr id='dr_" + (row_cnt) + "'>");
				// }
			}
		}
	}
	if(col_cnt % 2 != 0) {
		$("#dr_" + (row_cnt)).append("<td style='width: 25%'>&nbsp;</td><td style='width: 25%'>&nbsp;</td>");
	}
	$("#dr").append("</tr>");

	if(!$("#dr_" + (row_cnt)).children().length) {
		$("#dr_" + row_cnt).remove();
	}
	if(!col_cnt) {
		$("#dr").hide();
	}
	var saves = do_class_functions("main", "save", chardata.save);
	var saves_count = count_attrs(saves);
	var row_cnt = 0;
	var col_cnt = 0;
	$("#saves").append("<tr id='save_0'>");
	for(var save in save_against) {
		console.log(save_against[save] + ": " + saves[save_against[save]] + " ____  " + equipment_benefits[save_against[save]]);
		if(saves[save_against[save]] || equipment_benefits[save_against[save]]) {
			col_cnt++;
			console.log(row_cnt + ": " + $("#save_"+row_cnt));
			var val = (saves[save_against[save]] == "imm" ? "imm" : pos((saves[save_against[save]] ? saves[save_against[save]] : 0) + calc_dr(save_against[save])))
			$("#save_" +  row_cnt).append("<td style='width: 25%;'>" + capitalize(save_against[save]) + "</td><td id='" + save_against[save] + "' style='width: 25%;' class='box numeric' nowrap>" + val + "</td>");
			if(col_cnt && col_cnt % 2 == 0) {
				$("#save").append("</tr>");
				row_cnt++;
				// if(save_count / 2 > row_cnt) {
					$("#save").append("<tr id='save_" + (row_cnt) + "'>");
				// }
			}
		}
	}
	if(col_cnt % 2 != 0) {
		$("#save_" + (row_cnt)).append("<td style='width: 25%'>&nbsp;</td><td style='width: 25%'>&nbsp;</td>");
	}
	$("#saves").append("</tr>");

	if(!$("#save_" + (row_cnt)).children().length) {
		$("#save_" + row_cnt).remove();
	}
	if(!col_cnt) {
		$("#saves").hide();
	}

	// speed
	// var speed = race.speed;
	// for (i in char_armor) {
	// 	armordata = armors().first( {
	// 		name : char_armor[i].armor_name
	// 	});
	// 	if(char_armor[i].speed) {
	// 		// speed = speed > parseInt(armordata["speed" + race.speed]) ? parseInt(armordata["speed" + race.speed]) : speed;
	// 	} else {
	// 		speed = speed > parseInt(armordata["speed" + race.speed]) ? parseInt(armordata["speed" + race.speed]) : speed;
	// 	}
	// }
	// $("#speed").text(speed + " ft");
}

main.recalc_main_page = function() {
	// console.group("recalc_main_page");
	var str_score = chardata.abilities["Str_curr"] = $('#ability_Str_score').val();
	var dex_score = chardata.abilities["Dex_curr"] = $('#ability_Dex_score').val();
	var int_score = chardata.abilities["Int_curr"] = $('#ability_Int_score').val();
	var con_score = chardata.abilities["Con_curr"] = $('#ability_Con_score').val();
	var cha_score = chardata.abilities["Cha_curr"] = $('#ability_Cha_score').val();
	var wis_score = chardata.abilities["Wis_curr"] = $('#ability_Wis_score').val();
	var level = calc_level();

	//main.update_ability("Str");
	//main.update_ability("Dex");
	//main.update_ability("Int");
	//main.update_ability("Con");
	//main.update_ability("Cha");
	//main.update_ability("Wis");

	// weapons

	var base_attack_bonuses = calc_base_attack_bonus();
	var char_weapons = do_class_functions("main", "before_weapons_recalc", chardata.weapons);
	for (var j in char_weapons) {
		var weapon = weapons({
			_id : $('#weapon_' + j + '_name').attr('weapon_id')
		}).first();

		$('#weapon_' + j + '_att').text(calc_attack(base_attack_bonuses, weapon, chardata.weapons[j], parseInt($('#attack_mod').text())));
		$('#weapon_' + j + '_dam').text(calc_damage(weapon, chardata.feats, chardata.weapons[j]));
	}

	// armor
	for (var j in chardata.armors) {
		var armor_data = armors({
			name : chardata.armors[j].armor_name
		}).first();
		// populate with char overrides
		$('#armor_' + j + '_bon').text(armor_data.armor_bonus);
		$('#armor_' + j + '_acp').text(armor_data.armor_check_penalty);
	}

	// shield
	for (var j in chardata.shields) {
		var shield_data = shields({
			name : chardata.shields[j].shield_name
		}).first();
		// populate with char overrides
		$('#shield_' + j + '_bon').text(shield_data.shield_bonus);
		$('#shield_' + j + '_acp').text(shield_data.shield_check_penalty);
	}

	var acp = calc_armor_acp(chardata.armors);
    acp += calc_shield_acp(chardata.shields);

	// skills
	skills().each(function(skill, i) {
		if(skill.subtypes) {
			var char_skill = chardata.skills({ skill_name: skill.name }).first();
			if(char_skill) {
				for(var subtype in char_skill.subtypes) {
					main.populate_skill_entry(skill, acp, subtype);
				}
			}
		} else {
			main.populate_skill_entry(skill, acp);
		}
	});


	// update AC
	$('#ac').text(calc_ac(dex_score));
	$('#init').text(calc_init(dex_score));
	$('#fort').text(calc_fort(con_score, chardata.class_name, chardata.xp, chardata.feats));
	$('#ref').text(calc_ref(dex_score, chardata.class_name, chardata.xp, chardata.feats));
	$('#will').text(calc_will(wis_score, chardata.class_name, chardata.xp, chardata.feats));
	$('#turn').text((chardata.class_id == 2 ? 'Turn: ' + calc_turn( cha_score) : ''));
	$('#touch').text(calc_touch_ac(dex_score, chardata.race_id, chardata.feats));
	$('#flat').text(calc_flat_footed_ac(chardata.armors));
	$('#cmb').text(calc_cmb(calc_base_attack_bonus()));
	$('#cmd').text(calc_cmd(calc_base_attack_bonus()));
//	$("#dr").text();
-	$('#spell_resistance').text(calc_spell_resistance() + "%");

	// TODO - refactor to consolidate with calc_attack
	// recompose with modifiers thrown in
	for (var i in base_attack_bonuses) {
		base_attack_bonuses[i] = pos(base_attack_bonuses[i]);
	}
	$('#base_attack_bonus').text(base_attack_bonuses.join("/"));

	// spell
	// TODO - what's the modifier for SPD?
	for (var classname in chardata.classes) {
		var clazz = classes({ name: classname }).first();
		var spells_per_day = clazz.spells_per_day[chardata.classes[classname].level];

		for (var i in spells_per_day) {
			$('#spd_count_' + clazz.shortname + i).text(spells_per_day[i]);
		}
	}
	// console.groupEnd();
}

main.populate_skill_entry = function(skill, acp, subtype) {
	var subtype_selector = "";
	if(subtype) {
		subtype_selector = "][subtype='" + subtype + "'";
	}
	var skill_ability_score = $('#ability_' + skill.ability + '_score').val();
	var skill_mod = calc_skill_mod(skill, skill_ability_score, acp, subtype);
	$("[id='skill_" + skill._id + "_ranks'" + subtype_selector + "]").text(pos(skill_mod));
	$("[id='skill_" + skill._id + "_row'" + subtype_selector + "]").toggle(skill_mod != 0);
}

main.update_ability = function(ability) {
	var class_val = {};
	class_val[ability] = { base: 0 };
	class_val = do_class_functions("main", ability, class_val);
	var mod = calc_ability_modifier(ability);
    var score = calc_ability_score(ability);
	$('#ability_' + ability + '_mod').text(pos(mod));
//    $('#ability_score_full_' + ability).text((chardata.abilities[ability]| 0) + (class_val[ability].base | 0));
    $('#ability_score_full_' + ability).text(score);
}



main.calc_turn = function( cha_score) {
	// A cleric may attempt to turn undead a number of times per day
	// equal to 3 + his Charisma modifier. A cleric with 5 or more ranks in
	// Knowledge (religion) gets a +2 bonus on turning checks against
	// undead.
	var know_religion = skills({
		name : 'Knowledge (religion)'
	}).first();
	var char_know_religion = false;
	if (chardata.skills != null) {
		char_know_religion = chardata.skills({
			skill_name : know_religion.name
		}).first();
	}
	var feat_mod = 0;
	var char_feats = get_char_feats();
	// have feats modify the attacks
	char_feats({ turn : { "!is": null } }).each( function(feat, i) {
			// TODO - can we do this by reference
		feat_mod = feat.critical(feat_mod);
		return feat_mod;
		});
	var char_know_rel_pnts = (char_know_religion ? char_know_religion.ranks : 0);
	var skill_bonus = (calc_ranks(chardata.class_name, char_know_rel_pnts, know_religion) >= 5 ? 2 : 0);

	return Math.max(3 + calc_ability_modifier("Cha") + skill_bonus + feat_mod, 0);
}

main.calc_hp = function(hp, char_feats) {
	var feat_mod = 0;
	var char_feats = get_char_feats();
	char_feats({ hp : { "!is": null } }).each( function(feat, i) {
			// TODO - can we do this by reference
		feat_mod = feat.hp(feat_mod);
		return feat_mod;
		});

	return parseInt(hp) + feat_mod;
}

main.calc_critical = function(weapon_critical, char_weapon, char_feats) {
	var critical = char_weapon.crit == null ? weapon_critical : char_weapon.crit;

	var char_feats = get_char_feats();
	char_feats({ critical : { "!is": null } }).each( function(feat, i) {
			// TODO - can we do this by reference
		critical = feat.critical(critical);
		return critical;
	});

	return critical;
}

main.update_weapon_attack = function(weapon_idx, mod) {
	var attacks = $('#weapon_' + weapon_idx + '_att').text();
	attacks = attacks.split('/');
	var updated_attacks = '';
	for (var j in attacks) {
		updated_attacks += pos(parseInt(attacks[j]) + mod);
		updated_attacks += (parseInt(j) + 1 < attacks.length ? '/' : '');
	}
	$('#weapon_' + weapon_idx + '_att').text(updated_attacks);
}

main.update_weapon_damage = function(weapon_idx, mod) {
	var damage = "";
	// TODO - copied from common.js calc_damage
	var weapon_damage = $('#weapon_' + weapon_idx + '_dam').text().split('/');
	for(var i in weapon_damage) {
		// scrape out the mod
		var pos_neg = weapon_damage[i].match(/\+|-/);
		var dam_components = weapon_damage[i].split(/\+|-/);
		var die = dam_components[0];
		var weapon_mod = dam_components.length > 1 ? parseInt((pos_neg != -1 ? pos_neg : "")+ dam_components[1]) : 0;
		damage += die + pos(mod + weapon_mod);
		damage += (parseInt(i) + 1 < weapon_damage.length ? '/' : '');
	}
	$('#weapon_' + weapon_idx + '_dam').text(damage);
}

main.update_skill_ranks = function(skills_) {
	for(var i in skills_) {
		var skill_id = skills({ name: skills_[i] }).first()._id;
		var ranks = parseInt($("#skill_" + skill_id + "_ranks").text()) + 2;
		$("#skill_" + skill_id + "_ranks").text(pos(ranks));
	}
}

main.calc_grapple = function() {
	var grapple = "";
	var race = races({ name: chardata.race_name }).first();
	var str_score = calc_ability_modifier("Str");
	var babs = calc_base_attack_bonus();

	var feat_mod = 0;
	var char_feats = get_char_feats();
	// have feats modify the attacks
	char_feats({ grapple : { "!is": null } }).each( function(feat, i) {
		// TODO - can we do this by reference
		feat_mod = feat.grapple(feat_mod);
		return feat_mod;
	});

	for(var i=0; i<babs.length; i++) {
		grapple += pos(str_score + babs[i] + grapple_size_mod[race.size] + feat_mod);
		grapple += i + 1 < babs.length ? '/' : '';
	}

	return grapple;
}
