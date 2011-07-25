grapple_size_mod = { "colossal": 16, "gargantuan": 12, "huge": 8, "large": 4, "medium": 0, "small": -4, "tiny": -8, "diminutive": -12, "fine": -16 };

function load() {
	session={};
	// console.group("load");
	chardata = { log: [] };
	players_companion = TAFFY.JSON.parse(unescape(get_cookie_data("players_companion"))) || {};
	if (players_companion.last_character) {
		lod(players_companion.last_character);
		// find me a home
		for(var classname in chardata.classes) {
			char_classes.push(classname);
		}
		do_main();
	} else {
		chardata.options = {};
		load_static_data();
		chardata.options.owner = players_companion.owner;
		do_edit();
	}
	// console.groupEnd();
}

// TODO - boil this down; see switch_content(), set_view in common
function do_main() {
	if(!is_empty(chardata.classes)) {
		build_main_page();
		populate_main_page();
		recalc_main_page();
	} else {
		do_edit();
	}
}

function do_edit() {
	build_edit_page();
	populate_edit_page();
	recalc_edit_page();
}

function do_feats() {
	build_feats_page();
	populate_feats_page();
//	recalc_prereqs();
}

function do_spells() {
	build_spells_page();
	populate_spells_page();
	// recalc_spells_page();
}

function do_equipment() {
	build_equipment_page();
	populate_equipment_page();
	recalc_equipment_page();
}

function get_rogue_skill_selections() {
	var skill_selections = [];
	var rogue_special_abilities = chardata.rogue_special_abilities;
	for(var i in rogue_special_abilities) {
		if(rogue_special_abilities[i].special_id == 72) {
			skill_selections = skill_selections.concat(rogue_special_abilities[i].multi);
		}
	}
	
	return skill_selections;
}

function reset_ability_score(e) {
	$("input[id='ability_" + e.data.ability + "_score']").val($("#ability_score_full" + id).text());
	chardata.abilities["temp_" + e.data.ability] = parseInt($("#ability_score_full" + id).text());
	save_character();
	return recalc_main_page();
}

function recalc_ability_mod(e) {
	if(!isNaN($(this).val())) { 
		chardata.abilities["temp_" + e.data.ability] = $(this).val();
	}
	save_character();
	return recalc_main_page();
}
		
function show_skill_detail(e) {
	return show_item_detail(skills, e.data.skill_id);
}

function recalc_favored_enemy(e) { 
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

function build_main_page() {
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
	$('#content').html("<div id='topline'></div> <div id='topleceilft' class='dp66'> <div id='abilitiespart' class='dp40' style='float: left'> <table border=0 id='abilities_table'> <tr> <td id='char_name' colspan='4' style='font-weight: bold; color: blue'></td> </tr> <tr> <td><b>Str</b></td> <td id='ability_score_full_Str' nowrap></td> <td><input ability='Str' id='ability_Str_score' class='two_digit' value='' type='text'></td> <td id='ability_Str_mod' align='right' nowrap></td> </tr> <tr> <td><b>Dex</b></td> <td id='ability_score_full_Dex' nowrap></td> <td><input ability='Dex' id='ability_Dex_score' class='two_digit' value='' type='text'></td> <td id='ability_Dex_mod' align='right' nowrap></td> </tr> <tr> <td><b>Int</b></td> <td id='ability_score_full_Int' nowrap></td> <td><input ability='Int' id='ability_Int_score' class='two_digit' value='' type='text'></td> <td id='ability_Int_mod' align='right' nowrap></td> </tr> <tr> <td><b>Con</b></td> <td id='ability_score_full_Con' nowrap></td> <td><input ability='Con' id='ability_Con_score' class='two_digit' value='' type='text'></td> <td id='ability_Con_mod' align='right' nowrap></td> </tr> <tr> <td><b>Cha</b></td> <td id='ability_score_full_Cha' nowrap></td> <td><input ability='Cha' id='ability_Cha_score' class='two_digit' value='' type='text'></td> <td id='ability_Cha_mod' align='right' nowrap></td> </tr> <tr> <td><b>Wis</b></td> <td id='ability_score_full_Wis' nowrap></td> <td><input ability='Wis' id='ability_Wis_score' class='two_digit' value='' type='text'></td> <td id='ability_Wis_mod' align='right' nowrap></td> </tr><tr><td colspan=3>Speed: <span id='speed'></span></td></tr> </table> </div> <div id='middlepart' class='dp60' style='float: left;'> <table id='middle_table' style='table-layout: fixed; width: 100%'> <tr> <td colspan=4 style='padding: 0px;'> <table border=0 style='padding: 0px; width: 100%;'> <tr> <td align='left'>HP</td> <td id='hp' align='right'></td> <td align='right'><input id='temp_hp' style='width: 2em;text-align: center;' type='text' value='' /></td> <td align='right'>SD <input id='subdual_hp' style='width: 15px; text-align: center' type='text' value='' /></td> </tr> </table> </td> </tr> <tr> <td colspan='4'></td> </tr> <tr> <td>Fort</td> <td id='fort' class='box numeric' style='width: 30px;' nowrap></td> <td>AC</td> <td id='ac' class='box numeric' style='width: 30px;'></td> </tr> <tr> <td>Ref</td> <td id='ref' class='box numeric' nowrap></td> <td>Tch</td> <td id='touch' class='box numeric' nowrap></td> </tr> <tr> <td>Will</td> <td id='will' class='box numeric' nowrap></td> <td>Flat</td> <td id='flat' class='box numeric' nowrap></td> </tr> <tr> <td>SR</td> <td id='spell_resistance' class='box numeric' nowrap></td> <td>Init</td> <td id='init' class='box numeric'></td> </tr> <tr> <td>CMB</td> <td id='cmb' class='box' colspan=3></td> </tr><tr> <td>CMD</td> <td id='cmd' class='box' colspan=3></td> </tr> <tr> <td>BAB</td> <td id='base_attack_bonus' class='box' colspan=3></td> </tr> <tr> <td colspan='4'></td> </tr> <tr> <td>Att</td> <td id='attack_mod'>0</td> <td><a id='plus_att' class='btn box' style='font-family: monospace; font-size: larger; width: 20px'> + </a></td> <td style='text-align: right'><a id='minus_att' class='btn box' style='font-family: monospace; font-size: larger; width: 20px'> - </a></td> </tr> <tr> <td>Dam</td> <td id='damage_mod'>0</td> <td><a id='plus_dam' class='btn box' style='font-family: monospace; font-size: larger; width: 20px'> + </a></td> <td style='text-align: right'><a id='minus_dam' class='btn box' style='font-family: monospace; font-size: larger; width: 20px'> - </a></td> </tr> </table> </div> <div id='featspart' class='dp100'> <table width='100%' border='0' margin='0'> <tbody> <tr onclick=\"toggle_visible('conditional_feats')\"> <td colspan='3' bgcolor='#8DC3E9'><span id='conditional_feats_expand_flag' style='float: right; vertical-align: middle'><img src='images/collapsed.png' /></span><a class='fake_link'>Feats</a></td> </tr> </tbody> <tbody id='conditional_feats'></tbody> </table> </div> <div id='specialpart' class='dp100'> <table id='specials_table' style='width: 100%; border: 0px; margin: 0px;'> <tr id='specials_heading' style='background-color: #8DC3E9'> <td colspan='2'><span id='specials_expand_flag' style='float: right'><img src='images/collapsed.png' /></span><a class='fake_link'>Special Abilities</a></td> </tr> <tbody id='specials'></tbody> </table> </div> <div id='weaponspart' class='dp100'></div> <div id='armorpart' class='dp100'></div> <div id='shieldspart' class='dp100'></div> <div id='spellspart' class='dp100'></div> </div> <div id='skillspart' class='dp33'> <table border='0' id='skills_table'></table> </div>");
   
	// ability scores
	$("#ability_score_full0").bind('click', { ability: "Str", id: 0 }, function(e) { return reset_ability_score(e); });
	$("input[id='ability_Str_score']").bind('blur', { ability: "Str" }, function(e) { return recalc_ability_mod(e) });
	$("#ability_score_full1").bind('click', { ability: "Dex", id: 1 }, function(e) { return reset_ability_score(e); });
	$("input[id='ability_Dex_score']").bind('blur', { ability: "Dex" }, function(e) { return recalc_ability_mod(e) });
	$("#ability_score_full2").bind('click', { ability: "Int", id: 2 }, function(e) { return reset_ability_score(e); });
	$("input[id='ability_Int_score']").bind('blur', { ability: "Int" }, function(e) { return recalc_ability_mod(e) });
	$("#ability_score_full3").bind('click', { ability: "Con", id: 3 }, function(e) { return reset_ability_score(e); });
	$("input[id='ability_Con_score']").bind('blur', { ability: "Con" }, function(e) { return recalc_ability_mod(e) });
	$("#ability_score_full4").bind('click', { ability: "Cha", id: 4 }, function(e) { return reset_ability_score(e); });
	$("input[id='ability_Cha_score']").bind('blur', { ability: "Cha" }, function(e) { return recalc_ability_mod(e) });
	$("#ability_score_full5").bind('click', { ability: "Wis", id: 5 }, function(e) { return reset_ability_score(e); });
	$("input[id='ability_Wis_score']").bind('blur', { ability: "Wis" }, function(e) { return recalc_ability_mod(e) });
	
	// TODO - add utility
	// skills
	var allskills = skills.get();
	var rogue_skill_selections = get_rogue_skill_selections();
	for (skill_idx in allskills) {
		var skill = allskills[skill_idx];
		var skill_selection_ind_html = rogue_skill_selections.indexOf(skill._id) > -1 ? "<sup>+</sup>" : "";
		var skill_html = ["<tr id='skill_", skill._id, "_row'>", "<td><a id='skill_", skill._id, "' class='fake_link'>", allskills[skill_idx].name, skill_selection_ind_html, "</a></td>", "<td id='skill_", skill._id, "_ranks' align='right' valign='top' skill_id='", skill._id, "' nowrap></td></tr>"];
		$("#skills_table").append(skill_html.join(''));
		$("a[id='skill_" + skill._id + "']").bind("click", { skill_id: skill._id }, function(e) { return show_skill_detail(e) });
	}

	// AC, etc
	$("#temp_hp").bind('blur', function() { if(!isNaN($(this).val())) { chardata.temp_hp = $(this).val(); save_character(); } });
	$("#subdual_hp").bind('blur', function() { if(!isNaN($(this).val())) { chardata.subdual_hp = $(this).val(); save_character(); } });
	$("#plus_att").bind('click', function() { return adjust_mod('attack', 1) });
	$("#minus_att").bind('click', function() { return adjust_mod('attack', -1) });
	$("#plus_dam").bind('click', function() { return adjust_mod('damage', 1) });
	$("#minus_dam").bind('click', function() { return adjust_mod('damage', -1) });
	
	// conditional feats
	var feats_html = "";
	var conditional_feats = [];

	
	// custom class features
	for (var classname in chardata.classes) {
		var clazz = classes.first({ name : classname });
		if (clazz.custom && clazz.custom.main) {
			for (var script in clazz.custom.main) {
				eval(clazz.custom.main[script]);
			}
		}
	}	
	
	var char_feats = get_char_feats().get();	
	for (var i =0; i < char_feats.length; i++) {
		var feat = feats.first({
			name: char_feats[i].name
		});
		if(feat && feat.conditional) {
			conditional_feats.push(feat);
		}
	}
	if (conditional_feats.length > 0) {
		for ( var i in conditional_feats) {
			var checkbox = (conditional_feats[i].op != null ? 
					["<input id='feat_", conditional_feats[i]._id, "_conditional' type='checkbox' onclick=\"", conditional_feats[i].op, "\"/>"].join('')  : 
					"") ;
			$('#conditional_feats').append(["<tr id='feat_", conditional_feats[i]._id, "'><td>", checkbox, "</td><td valign='top'><a id='feat_", conditional_feats[i]._id, "'class='fake_link'>", conditional_feats[i].name, "</a></td><td style='width: 100%'>", conditional_feats[i].summary, "</td></tr>"].join(''));
			$("a[id='feat_" + conditional_feats[i]._id + "']").bind('click', { id: conditional_feats[i]._id }, function(e) { return show_item_detail(feats, e.data.id); });
		}
	} else {
		$("#featspart").hide();
	}
	$("tr[id^='feat']:odd").css("background-color", "#EFF1F1");
	$('#conditional_feats').hide();
	
	// class special abilities
	var class_specials = get_special_abilities();
	if (count_attrs(class_specials) > 0 || (chardata.favored_enemies && chardata.favored_enemies.length > 0)) {
		$('#specials_heading').bind('click', function(e) { return toggle_visible('specials'); });
		for (var i in class_specials) {
			if(class_specials[i]) {
				var checkbox = (class_specials[i].op != null ? 
						["<input id='special_", class_specials[i]._id, "' type='checkbox' onclick=\"", class_specials[i].op, "\"/>"].join('')  : "");
				$("#specials").append(["<tr id='special_", class_specials[i]._id, "'><td style='padding: 3px 0px;'>", checkbox, "</td><td valign='top' style='width: 100%; padding: 3px 0px;'><a class='fake_link' onclick='show_item_detail(specials, \"" + class_specials[i]._id + "\")'>", class_specials[i].name, (class_specials[i].mod == null ? "" : [" ", class_specials[i].mod, "</a></td></tr>"].join(''))].join(''));
				$("a[id='special_" + class_specials[i]._id + "']").bind('click', { id: class_specials[i]._id }, function(e) { return show_item_detail(specials, e.data.id); });				
			}
		}
	} else {
		$("#specialpart").hide();
	}
	
	$("tr[id^='special']:odd").css("background-color", "#EFF1F1");
	$('#specials').hide();
	
	// weapons
	// base attack information
	var html = [];	
	for (var j in chardata.weapons) {
		var weapon_data = weapons.first( {
			name : chardata.weapons[j]['weapon_name']
		});
		html.push(["<table width='100%' border='0' margin='0'><tr><td id='weapon_", j, "_name' weapon_id='", weapon_data._id, "' colspan='4' bgcolor='#C5C6F6'></td></tr><tr><td width='20px'>Att</td><td id='weapon_", j, "_att' class='box'></td><td  width='20px'>Crit</td><td id='weapon_", j, "_crit' class='box' width='50px'></td></tr><tr><td width='20px'>Dam</td><td id='weapon_", j, "_dam' class='box'></td><td width='20px'>Bon</td><td id='weapon_", j, "_bon' class='box'></td></tr><tr id='weapon_", j, "_note'><td valign='top'>Note</td><td id='weapon_", j, "_note' colspan='3' width='100%'></td></tr></table>"].join(''));
	}
	$('#weaponspart').html(html.join(''));
	$('#weaponspart').css('margin-top', '5px');
//	$('#weaponspart').addClass('box');
//	$('#weaponspart').css('border-color', '#D0D0D0');

	// armor
	html = [];
	for (var j in chardata.armors) {
		var armor_data = armors.first( {
			name : chardata.armors[j]['armor_name']
		});
		html.push(["<table width='100%' border='0' margin='0'><tr id='armor_", j, "' armor_idx='", j, "' onclick=\"var chk=$('#armor_", j, "_is_worn_check'); session['armor'][", j,"]['is_worn']=!session['armor'][",j,"]['is_worn']; chk.attr('src', 'images/'+ (session['armor'][", j,"]['is_worn'] ? 'checked' : 'unchecked') + '.png'); recalc_main_page();\"><td colspan='4' bgcolor='#C5C6F6'><img id='armor_", j, "_is_worn_check' armor_idx='", j, "' src='images/", session['armor'][j]['is_worn'] ? 'checked' : 'unchecked', ".png' style='float: right; margin-right: 3px; margin-left: 2px; margin-bottom: 1px; margin-top: 1px'/><label style='float: right; margin-bottom: 0px; margin-top: 1px; vertical-align: middle' class='fake_link'>worn:</label><span id='armor_", j, "_name'  class='fake_link'></span></td></tr><tr><td>Bon</td><td id='armor_", j, "_bon' class='box' width='50%'></td><td>ACP</td><td id='armor_", j, "_acp'  class='box' width='50%'></td></tr><tr id='armor_", j, "_note'><td valign='top'>Note</td><td colspan='3' id='armor_", j, "_note' width='100%'></td></tr></table>"].join(''));
	}
	$('#armorpart').html(html.join(''));
	$('#armorpart').css('margin-top', '5px');

	// armor
	html = [];
	for (var j in chardata.shields) {
		var shield_data = shields.first( {
			_id : chardata.shields[j]['shield_id']
		});
		html.push(["<table width='100%' border='0' margin='0'><tr id='shield_", j, "' shield_idx='", j, "' onclick=\"var chk=$('#shield_", j, "_is_worn_check'); session['shield'][", j,"]['is_worn']=!session['shield'][",j,"]['is_worn']; chk.attr('src', 'images/'+ (session['shield'][", j,"]['is_worn'] ? 'checked' : 'unchecked') + '.png'); recalc_main_page();\"><td colspan='4' bgcolor='#C5C6F6'><img id='shield_", j, "_is_worn_check' shield_idx='", j, "' src='images/", session['shield'][j]['is_worn'] ? 'checked' : 'unchecked', ".png' style='float: right; margin-right: 3px; margin-left: 2px; margin-bottom: 1px; margin-top: 1px;'/><label style='float: right; margin-bottom: 0px; margin-top: 1px; vertical-align: middle' class='fake_link'>worn:</label><span id='shield_", j, "_name'  class='fake_link'></span></td></tr><tr><td>Bon</td><td id='shield_", j, "_bon' class='box' width='50%'></td><td>ACP</td><td id='shield_", j, "_acp'  class='box' width='50%'></td></tr><tr id='shield_", j, "_note'><td valign='top'>Note</td><td colspan='3' id='shield_" + j + "_note' width='100%'></td></tr></table>"].join(''));
	}
	$("#shieldspart").html(html.join(""));
	$("#shieldspart").css("margin-top", "5px");
	// $("tr[id^='shield_']").click(function() {
		// session["shield"][this.shield_idx]["is_worn"] =! session["shield"][this.shield_idx]["is_worn"]; 
		// $(this.id).attr("src", (session["shield"][this.shield_idx]["is_worn"] ? "checked" : "unchecked") + ".png");
		// recalc_main_page();
		// alert($(this.id).attr("src"));
	// });
	// spells
	var char_domains = [];
	for (var domain in chardata.domains) {
		var domain = domains.first( {
			name : chardata.domains[domain]
		});
		char_domains.push(domain);
	}
	// TODO - what's the modifier for SPD?
	$('#spellspart').css('margin-top', '10px');
	$('#spellspart').html("");
	for (var classname in chardata.classes) {
		var clazz = classes.first( {
			name : classname
		});

		var all_spells = clazz.spells;
		var spells_per_day = clazz.spells_per_day[chardata.classes[classname].level];
		if (spells_per_day != null && spells_per_day.length > 0) {
				var spells_html = ["<table style='border: 1px solid #D0D0D0' width='100%' border='0' margin='0'><tr bgcolor='#8DC3E9'><td colspan='", (spells_per_day.length), "'><span id='turn' style='float: right'></span>Spells per day (",clazz.shortname,") &nbsp;"];
				if(classname == "Cleric") {
						spells_html.push("+1 ");
						for (var domain in char_domains) {
								spells_html.push(["<i><a class='fake_link' onclick=\"show_item_detail(domains, '", char_domains[domain]._id, "')\">", char_domains[domain].name, "</a></i> "].join(''));
						}
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
					var clazz_spells = clazz.spells[level].slice(0);
					if (level > 0) {
						// domain spells added 1st through 9th
						for (var domain in char_domains) { 								
							if(clazz_spells.indexOf(char_domains[domain].spells[level - 1]) == -1) {
								clazz_spells.push(spells.first({name: char_domains[domain].spells[level - 1]}).name);
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
						if ((clazz.name == "Cleric" || clazz.name == "Druid" || clazz.name == "Paladin" || clazz.name == "Ranger")
								|| ((chardata.classes[classname] != null) && (chardata.classes[classname].spells && chardata.classes[classname].spells[level])
										&& (clazz.name == "Sorceror" || clazz.name == "Wizard" || clazz.name == "Bard") && chardata.classes[classname].spells[level].indexOf(clazz_spells[i]) > -1)) {
							var spell = spells.first( {
								name : clazz_spells[i]
							});
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
									break
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
	
	// console.groupEnd();
}

function adjust_mod(type, magnitude) {
	var curr_val = parseInt($('#' + type + '_mod').text());
	$('#' + type + '_mod').text(curr_val + magnitude);
	recalc_main_page();
}

function populate_main_page() {
	// console.group("populate_main_page");
	var race = races.first( {
		name : chardata.race_name
	});
	$('#char_name').text(chardata.name);
//	$('#race').text(race ? race : '');
//	$('#clazz').text(clazz ? clazz : '');
	$('#hp').text(chardata.hp == null || chardata.hp.length <= 0 ? 0 : calc_hp(chardata.hp, chardata.feats));
	$('#temp_hp').val(chardata.temp_hp || $("#hp").text() || 0);
	$('#subdual_hp').val(chardata.subdual_hp || $("#subdual_hp").text() || 0);
	$("input[id='hp']").val(chardata.hp == null || chardata.hp.length <= 0 ? 0 : chardata.hp);
	$('#level').text(calc_level() + 1);
//	$('#attack_mod').spinner();
//	$('#damage_mod').spinner();
	
	// ability scores
	var allabilities = chardata.abilities;
	for (var ability in abilities) {
		var ability_score = calc_ability_score(ability, chardata.race_name);
		$('#ability_score_full_' + ability).text(ability_score);
		$('#ability_' + ability + '_score').val(chardata.abilities["temp_" + ability] || ability_score);
		var ability_mod = calc_ability_modifier($('#ability_' + ability + '_score').val());
		$('#ability_' + ability + '_mod').text(pos(ability_mod));
	}

	// weapons
	for (var j in chardata.weapons) {
		var weapon_data = weapons.first( {
			name : chardata.weapons[j].weapon_name
		});
		$('#weapon_' + j + '_name').text(chardata.weapons[j].name != null ? chardata.weapons[j].name + " (" + weapon_data.name + ")" : weapon_data.name);
		$('#weapon_' + j + '_crit').text(calc_critical(weapon_data.crit, chardata.weapons[j], chardata.feats));
		$('#weapon_' + j + '_bon').text(chardata.weapons[j].att != null ? chardata.weapons[j].att : "");
		$("td[id='weapon_" + j + "_note']").text(chardata.weapons[j].note);
		
		$("tr[id='weapon_" + j + "_note']").toggle(chardata.weapons[j].note != null && chardata.weapons[j].note.length > 0);
	}

	// armor
	for (var j in chardata.armors) {
		var armor_data = armors.first( {
			name : chardata.armors[j]['armor_name']
		});
		$('#armor_' + j + '_name').text(armor_data.name);
		// populate with char overrides
		$('#armor_' + j + '_bon').text(armor_data.bon);
		$('#armor_' + j + '_acp').text(armor_data.acp);
		$('#armor_' + j + '_note').text(chardata.armors[j]['notes']);
		$("tr[id='armor_" + j + "_note']").toggle(chardata.armors[j].note != null && chardata.armors[j].note.length > 0);
	}
	
	// shield
	for (var j in chardata.shields) {
		var shield_data = shields.first( {
			name : chardata.shields[j]['shield_name']
		});
		$('#shield_' + j + '_name').text(shield_data.name);
		// populate with char overrides
		$('#shield_' + j + '_bon').text(shield_data.bon);
		$('#shield_' + j + '_acp').text(shield_data.acp);
		$('#shield_' + j + '_note').text(chardata.shields[j]['notes']);
		$("tr[id='shield_" + j + "_note']").toggle(chardata.shields[j].note != null && chardata.shields[j].note.length > 0);
	}

	// speed
	// var speed = race.speed;
	// for (i in char_armor) {
	// 	armordata = armors.first( {
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


function recalc_main_page() {
	// console.group("recalc_main_page");
	var str_score = $('#ability_Str_score').val();
	var dex_score = $('#ability_Dex_score').val();
	var int_score = $('#ability_Int_score').val();
	var con_score = $('#ability_Con_score').val();
	var cha_score = $('#ability_Cha_score').val();
	var wis_score = $('#ability_Wis_score').val();
	var level = calc_level();

	update_ability("Str");
	update_ability("Dex");
	update_ability("Int");
	update_ability("Con");
	update_ability("Cha");
	update_ability("Wis");

	// weapons
	var base_attack_bonuses = calc_base_attack_bonus();
	for (var j in chardata.weapons) {
		var weapon = weapons.first( {
			_id : $('#weapon_' + j + '_name').attr('weapon_id')
		});

		$('#weapon_' + j + '_att').text(calc_attack(base_attack_bonuses, weapon, chardata.weapons[j], parseInt($('#ability_Str_score').val()), parseInt($('#ability_Dex_score').val()), parseInt($('#attack_mod').text())));
		$('#weapon_' + j + '_dam').text(calc_damage(weapon, str_score, chardata.feats, chardata.weapons[j]));
	}

	// armor
	for (var j in chardata.armors) {
		var armor_data = armors.first( {
			name : chardata.armors[j].armor_name
		});
		// populate with char overrides
		$('#armor_' + j + '_bon').text(armor_data.armor_bonus);
		$('#armor_' + j + '_acp').text(armor_data.armor_check_penalty);
	}

	// shield
	for (var j in chardata.shields) {
		var shield_data = shields.first( {
			name : chardata.shields[j].shield_name
		});
		// populate with char overrides
		$('#shield_' + j + '_bon').text(shield_data.shield_bonus);
		$('#shield_' + j + '_acp').text(shield_data.shield_check_penalty);
	}

	var acp = calc_armor_acp(chardata.armors);
    acp += calc_shield_acp(chardata.shields);

	// skills
	var allskills = skills.get().sort();
	for (var skill in allskills) {
		var skill_ability_score = $('#ability_' + allskills[skill].ability + '_score').val();
		var skill_mod = calc_skill_mod(allskills[skill], skill_ability_score, acp);
		$('#skill_' + allskills[skill]._id + '_ranks').text(pos(skill_mod));
		$('#skill_' + allskills[skill]._id + '_row').toggle(skill_mod != 0);
	}

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
//	$('#spell_resistance').text(calc_spell_resistance());
	
	// TODO - refactor to consolidate with calc_attack
	// recompose with modifiers thrown in
	for (var i in base_attack_bonuses) {
		base_attack_bonuses[i] = pos(base_attack_bonuses[i]);
	}
	$('#base_attack_bonus').text(base_attack_bonuses.join("/"));

	// spell
	// TODO - what's the modifier for SPD?
	for (var classname in chardata.classes) {
		var clazz = classes.first({ name: classname });
		var spells_per_day = clazz.spells_per_day[chardata.classes[classname].level];
		
		for (var i in spells_per_day) {
			$('#spd_count_' + clazz.shortname + i).text(spells_per_day[i]);
		}
	}
	// console.groupEnd();
}

function update_ability(id) {
	var ability_val = $('#ability_' + id + '_score').val();
	$('#ability_' + id + '_mod').text(pos(calc_ability_modifier(ability_val)));
}

function calc_turn( cha_score) {
	// A cleric may attempt to turn undead a number of times per day
	// equal to 3 + his Charisma modifier. A cleric with 5 or more ranks in
	// Knowledge (religion) gets a +2 bonus on turning checks against
	// undead.
	var know_religion = skills.first( {
		name : 'Knowledge (religion)'
	});
	var char_know_religion = false;
	if (chardata.skills != null) {
		char_know_religion = chardata.skills.first( {
			skill_name : know_religion.name
		});
	}
	var feat_mod = 0;
	var char_feats = get_char_feats();
	// have feats modify the attacks
	char_feats.get({ turn : { "!is": null } }).forEach( function(feat, i) {
			// TODO - can we do this by reference
		feat_mod = feat.critical(feat_mod);
		return feat_mod;
		});
	var char_know_rel_pnts = (char_know_religion ? char_know_religion.ranks : 0);
	var skill_bonus = (calc_ranks(chardata.class_name, char_know_rel_pnts, know_religion) >= 5 ? 2 : 0);
	var cha_score = $('#ability_4_score').val();

	return Math.max(3 + calc_ability_modifier(cha_score) + skill_bonus + feat_mod, 0);
}

function calc_spell_resistance() {
	return 0;
}
function calc_flat_footed_ac(char_armor) {
	// TODO - what else goes here 
	// TODO - make 0 armor bonus constant
	return 10 + calc_armor_bonus(char_armor, armors, "armor").bonus;
}
function calc_touch_ac(dex_score, race_name, char_feats) {
	// TODO - include feats
	return 10 + calc_ability_modifier(dex_score) + calc_size_mod(race_name);
}

function get_char_feats() {
	// get the class feats + char feats
	var char_feats = new TAFFY([]);
	if(chardata.feats) {
		chardata.feats.get().forEach( function(feat, i) {
			char_feats.insert(feats.first({ name: feat.feat_name }));
		});
	}
	char_feats.insert(get_class_feats());
	
	return char_feats;
}

function calc_hp(hp, char_feats) {
	var feat_mod = 0;
	var char_feats = get_char_feats();
	char_feats.get({ hp : { "!is": null } }).forEach( function(feat, i) {
			// TODO - can we do this by reference
		feat_mod = feat.hp(feat_mod);
		return feat_mod;
		});
	
	return parseInt(hp) + feat_mod;
}

function calc_critical(weapon_critical, char_weapon, char_feats) {
	var critical = char_weapon.crit == null ? weapon_critical : char_weapon.crit;

	var char_feats = get_char_feats();
	char_feats.get({ critical : { "!is": null } }).forEach( function(feat, i) {
			// TODO - can we do this by reference
		critical = feat.critical(critical);
		return critical;
	});
	
	return critical;
}

function update_weapon_attack(weapon_idx, mod) {
	var attacks = $('#weapon_' + weapon_idx + '_att').text();
	attacks = attacks.split('/');
	var updated_attacks = '';
	for (var j in attacks) {
		updated_attacks += pos(parseInt(attacks[j]) + mod);
		updated_attacks += (parseInt(j) + 1 < attacks.length ? '/' : '');
	}
	$('#weapon_' + weapon_idx + '_att').text(updated_attacks);
}

function update_weapon_damage(weapon_idx, mod) {
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

function update_skill_ranks(skills_) {
	for(var i in skills_) {
		var skill_id = skills.first({ name: skills_[i] })._id;
		var ranks = parseInt($("#skill_" + skill_id + "_ranks").text()) + 2;
		$("#skill_" + skill_id + "_ranks").text(pos(ranks));
	}
}

function calc_grapple() {
	var grapple = "";
	var race = races.first({ name: chardata.race_name });
	var str_score = calc_ability_modifier(parseInt($('#ability_Str_score').val()));
	var babs = calc_base_attack_bonus();
	
	var feat_mod = 0;
	var char_feats = get_char_feats();
	// have feats modify the attacks
	char_feats.get({ grapple : { "!is": null } }).forEach( function(feat, i) {
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

function calc_base_attack_bonus() {
	var bab = [];
	for (var classname in chardata.classes) {
		var class_babs = classes.first({ name: classname }).base_attack_bonus;
		var attacks = class_babs[chardata.classes[classname].level].split("/");
		for (var i=0; i<attacks.length; i++) {
			bab[i] = (bab[i] | 0) + parseInt(attacks[i]);
		}
	}
	return bab;
}
