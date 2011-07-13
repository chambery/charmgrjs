function calc_skill_points() {
	// total skill points
	var int_score = $('#ability_Int').val();
	var int_mod = calc_ability_modifier(int_score);
	var is_human = races.first( {
		name : 'Human'
	}).name == $('#race').val();

	var total_skill_points = 0;
	// hang on to a random class to calculate first level skill points
	var class_skills_per_level = 0;
	for (var classname in chardata.classes) {
		class_skills_per_level = classes.first( {
			name : classname
		}).skill_points_per_level + int_mod;
		var level_1_points = (class_skills_per_level * 4) + (is_human ? 4 : 0);
		total_skill_points += level_1_points + ((class_skills_per_level + (is_human ? 1 : 0)) * chardata.classes[classname].level);
	}
	
	// used_skill_points = 0
	$('input[id*=skill]').each( function(i, element) {
			total_skill_points -= isNaN(parseInt($(element).val())) ? 0 : parseInt($(element).val());
	}); 

	// only subtract skill points after int mod languages are used up
	var char_lang_count = chardata.languages == null ? 0 : chardata.languages.length;
	total_skill_points -= Math.abs(Math.min(int_mod - char_lang_count, 0));

	return total_skill_points;
}

function build_edit_page() {
	set_links_part( 1);

	$('#content').html("<div class='dp100' style='padding-bottom: 5px;'><span style='float: right;'>XP&nbsp;&nbsp;<input type='text' onblur='recalc_edit_page()' size='5' value='' name='xp' id='xp'></span><input id='charname' value='' size='12' type='text' />&nbsp;<span id='race_select'></span></div><div id='moralitypart' class='dp100' style='padding-bottom: 5px;'><select id='alignment' onchange='recalc_edit_page()' style='float: right;'></select>HP&nbsp;&nbsp;<input id='hp' value='' type='text' style='width: 25px' />&nbsp;&nbsp;<select id='deity' style='width: 105px;vertical-align: top;' onchange='recalc_edit_page()'></select></div><div id='middlepart'><div id='abilitiespart' class='dp25' style='padding-bottom: 5px; float: left'><table border='0'><tbody><tr><td align='center'><b><a class='fake_link' onclick=\"show_item_detail(abilities,'Str')\">Str</a></b></td><td align='center'><input type='text'onblur='recalc_edit_page()' value='' name='Strscore'class='two_digit' id='ability_Str'></td><td align='center' id='race_Str_mod'></td></tr><tr><td align='center'><b><a class='fake_link' onclick=\"show_item_detail(abilities,'Dex')\">Dex</a></b></td><td align='center'><input type='text'onblur='recalc_edit_page()' value='' name='Dexscore'class='two_digit' id='ability_Dex'></td><td align='center' id='race_Dex_mod'></td></tr><tr><td align='center'><b><a class='fake_link' onclick=\"show_item_detail(abilities,'Int')\">Int</a></b></td><td align='center'><input type='text'onblur='recalc_edit_page()' value='' name='Intscore'class='two_digit' id='ability_Int'></td><td align='center' id='race_Int_mod'></td></tr><tr><td align='center'><b><a class='fake_link' onclick=\"show_item_detail(abilities,'Con')\">Con</a></b></td><td align='center'><input type='text'onblur='recalc_edit_page()' value='' name='Conscore'class='two_digit' id='ability_Con'></td><td align='center' id='race_Con_mod'></td></tr><tr><td align='center'><b><a class='fake_link' onclick=\"show_item_detail(abilities,'Int')\">Cha</a></b></td><td align='center'><input type='text'onblur='recalc_edit_page()' value='' name='Chascore'class='two_digit' id='ability_Cha'></td><td align='center' id='race_Cha_mod'></td></tr>	<tr><td align='center'><b><a class='fake_link' onclick=\"show_item_detail(abilities,'Wis')\">Wis</a></b></td><td align='center'><input type='text'onblur='recalc_edit_page()' value='' name='Wisscore'class='two_digit' id='ability_Wis'></td><td align='center' id='race_Wis_mod'></td></tr></tbody></table></div><div id='classespart' class='dp75'></div></div><br style='clear: both' /><div class='dp100'><div id='skillspart' class='dp45' style='float: right'><table id='skills_table' border='0'><tr><td colspan='3'><span style='float: right;'>Pts left: <span id='skill_pts_remaining'>0</span></span>Max ranks: <span id='max_ranks'></span></td></tr><tr onclick=\"toggle_visible('languages')\" bgcolor='#8DC3E9'><td colspan=3 style='vertical-align: middle;'><a class='fake_link'><span id='languages_expand_flag' style='float: right'><img src='collapsed.png'/></span>Languages</a></td></tr><tr id='languages'><td colspan=3><table id='language_table' width='100%'style='border-collapse: collapse;'></table></td></tr></table></div><div id='waspart' class='dp50'><div id='weaponspart' class='dp100'><div id='char_weapons'></div><div id='new_weapon' class='new_weapon'></div><hr width='80%' /></div><div id='armorpart' class='dp100'><div id='char_armors'></div><div id='new_armor' class='new_weapon'></div><hr width='80%' /></div><div id='shieldpart' class='dp100'><div id='char_shields'></div><div id='new_shield' class='new_weapon'></div></div></div></div><div class='clear'></div>");
	if(chardata.abilities == null) {
		chardata.abilities = [];
	}
	
	// topline
	var race_html = create_select('race', races.get(), 'recalc_edit_page()', false, "style='width: 75px;'");
	$("#race_select").html(race_html);
	// alignment and deity
	var align_html = [];
	for ( var i in alignments) {
		for ( var j in goodness) {
			align_html.push(["<option id='alignment_option_", alignments[i], "_", goodness[j], "' data_id='", i, ",", j, "' value='", alignments[i], ",", goodness[j], "'>", alignments[i], " ", goodness[j], "</option>"].join(''));
		}
	}
	$("#alignment").html(align_html.join(''));

	$("#alignment").change(function() {
		console.group("deity - ALIGNMENT_CHANGED");
		var align_range = [chardata.alignment + " " + chardata.goodness];
		var good_idx = goodness.indexOf(chardata.goodness);
		var align_idx = alignments.indexOf(chardata.alignment);
		if(align_idx+1 < 3) {
			align_range.push(alignments[align_idx + 1] + " " + chardata.goodness);
		}
		if(align_idx-1 > -1) { 
			align_range.push(alignments[align_idx - 1] + " " + chardata.goodness);
		}
		if(good_idx+1 < 3) {
			align_range.push(chardata.alignment + " " + goodness[good_idx + 1]);
		}
		if(good_idx-1 > -1) {
			align_range.push(chardata.alignment + " " + goodness[good_idx - 1]);				
		}
		
		for(var foo in align_range) {
				console.log(align_range[foo]);
		}
		var available_deities = deitys.get({ alignment: align_range });
		for(var foo in available_deities) {
			console.log(available_deities[foo].name + " : " + available_deities[foo].alignment);
		}
		align_html = [];
		align_html.push("<option id='deity_option_-1' data_id='' value=''></option>");
		for (var i=0; i<available_deities.length; i++) {
			align_html.push(["<option id='deity_option_" + available_deities[i].name + "' data_id='" + available_deities[i]._id + "' value='" + available_deities[i].name + "'>" + available_deities[i].name + "</option>"]);
		}
		$("#deity").html(align_html.join(''));
		if($("#deity").containsOption(chardata.deity)) {
			$("#deity").val(chardata.deity);
		} else {
			// if your alignment change eliminated your deity, lose your deity/domains
			chardata.deity = "";
			chardata.domains = null;
		}
		chardata.alignment = $('#alignment').val().split(' ')[0];
		chardata.goodness = $('#alignment').val().split(' ')[1];
		console.groupEnd();
	});

	align_html = [];
	var deities = deitys.get();
	align_html.push("<option id='deity_option_-1' data_id='' value=''></option>");
	for (var i=0; i<deities.length; i++) {
		align_html.push(["<option id='deity_option_" + deities[i].name + "' data_id='" + deities[i]._id + "' value='" + deities[i].name + "'>" + deities[i].name + "</option>"]);
	}
	$("#deity").html(align_html.join(''));
	
	$("#deity").change(function() {
		chardata.domains = [];
		return $("#deity").trigger('DEITY_CHANGED');								 
	});

	// the misdirection did not work
	// $("#deity").bind("ALIGNMENT_CHANGED", function() {
	// 	console.group("deity - ALIGNMENT_CHANGED");
	// 		var align_range = [chardata.alignment + " " + chardata.goodness];
	// 		var good_idx = goodness.indexOf(chardata.goodness);
	// 		var align_idx = alignments.indexOf(chardata.alignment);
	// 		if(align_idx+1 < 3) {
	// 			align_range.push(alignments[align_idx + 1] + " " + chardata.goodness);
	// 		}
	// 		if(align_idx-1 > -1) { 
	// 			align_range.push(alignments[align_idx - 1] + " " + chardata.goodness);
	// 		}
	// 		if(good_idx+1 < 3) {
	// 			align_range.push(chardata.alignment + " " + goodness[good_idx + 1]);
	// 		}
	// 		if(good_idx-1 > -1) {
	// 			align_range.push(chardata.alignment + " " + goodness[good_idx - 1]);				
	// 		}
			
	// 		for(var foo in align_range) {
	// 				console.log(align_range[foo]);
	// 		}
	// 		var available_deities = deities.get({ alignment: align_range });
	// 		for(var foo in available_deities) {
	// 				console.log(available_deities[foo].name + " : " + available_deities[foo].alignment);
	// 		}
	// 		align_html = [];
	// 		align_html.push("<option id='deity_option_-1' data_id='' value=''></option>");
	// 		for (var i=0; i<available_deities.length; i++) {
	// 			align_html.push(["<option id='deity_option_" + available_deities[i].name + "' data_id='" + available_deities[i]._id + "' value='" + available_deities[i].name + "'>" + available_deities[i].name + "</option>"]);
	// 		}
	// 		$("#deity").html(align_html.join(''));
	// });

	// move to classes.js
	// $('#abilitiespart').append(domain_select);

	// skills
	var allskills = skills.get().sort();
	// language
	$("#language_table").html(create_languages());
	$('#languages').hide();
	var skill_html = [];
	for (skill in allskills) {
		skill_html.push(["<tr><td style='vertical-align: top;'><a id='skill_", allskills[skill]._id, "' class='fake_link' onclick='show_item_detail(skills, \"", allskills[skill]._id, "\")'>", allskills[skill].name,"</a></td><td style='vertical-align: top;'><input id='skill_", allskills[skill]._id, "_input' class='two_digit' value='' onblur='recalc_edit_page()'></td><td style='font-size: xx-small; vertical-align: top;'>", allskills[skill].ability, "<br><span id='", allskills[skill]._id, "_mods' style='font-size: xx-small;'></span></td></tr>"].join(''));
	}
	$('#skills_table').append(skill_html.join(''));

	// weapons
	build_data_part( "weapons", "weapon");

	// armor
	build_data_part( "armors", "armor");

	// shields
	build_data_part( "shields", "shield");

	if (is_empty(chardata.classes)) {
		chardata.classes = [];
		var level = $("#xp").val() == "" ? 0 : parseInt($("#xp").val());
		show_class_dialog(calc_level(level)+1, 0);
	}
}

function create_languages() {
	var language_html = [];
	var langs = languages.get();
	for(var i=0, len=langs.length; i<len; i++) {
		language_html.push(["<tr id='language_", langs[i]._id, "'><td><input id='language_", langs[i]._id, "_check' onclick='update_language(\"", langs[i]._id, "\"); recalc_edit_page();' type='checkbox'/></td><td><label for='language_", langs[i]._id, "_check'>", langs[i].name, "</label></td>"].join(''));
	}

	return language_html.join('');
}

// Populates the form from char data. SHOULD ONLY BE CALLED ON load().
function populate_edit_page() {
	if (chardata.name) {
		$('#charname').val(chardata.name);
	}
	var race_name = chardata.race_name || $('#race').val();
	var race = races.first( {
		name : race_name
	});
	$("#race option[id='race_option_" + race._id + "']").attr("selected", true);

	$("input[id='hp']").val(chardata.hp || '');
	$('#xp').val(chardata.xp || '');

	
	$('#weapon_style').selectOptions(chardata.weapon_style || 'two_weapon_combat');
	
	var alignment_name = chardata.alignment || $('#alignment').val().split(' ')[0];
	var goodness_name = chardata.goodness || $('#alignment').val().split(' ')[1];
	$("#alignment option[id='alignment_option_" + alignment_name + "_" + goodness_name + "']").attr("selected", true);

	var deity_name = chardata.deity || $('#deity').val();
	$("#deity option[id='deity_option_" + deity_name + "']").attr("selected", true);

	var domain_name = chardata.domain_name || $('#domain').val();
	$("#domain option[id='domain_option_" + domain_name + "']").attr("selected", true);
	
	if(chardata.abilities) {
		$("#ability_Str").val(chardata.abilities['Str']);
		$("#ability_Dex").val(chardata.abilities['Dex']);
		$("#ability_Int").val(chardata.abilities['Int']);
		$("#ability_Con").val(chardata.abilities['Con']);
		$("#ability_Cha").val(chardata.abilities['Cha']);
		$("#ability_Wis").val(chardata.abilities['Wis']);
	}
	if(chardata.languages == null) {
		chardata.languages = [];
	}
//	for ( var i = 0; i < languages.length; i++) {
//		var is_race_language = (race.languages != null && (race.languages.indexOf(languages[i]) > -1));
//		var is_class_language = (clazz.languages != null && (clazz.languages.indexOf(languages[i]) > -1));
//		var checked = (chardata.languages != null && (chardata.languages.indexOf(languages[i]) > -1)) || is_race_language || is_class_language;rdata.xp 
//		$('#language_' + i + '_check').attr('checked', checked);
//		if (is_class_language || is_race_language) {
//			$('#language_' + i + '_check').attr('disabled', 'disabled');
//			$("tr[id='language_" + i + "']").addClass('disabled class_feat');
//		}
//	}

	// TODO - move to recalc_edit_page()?
	if (chardata.skills != null) {
		var allskills = skills.get().sort();
		for ( var skill in allskills) {
			var char_skill = chardata.skills.first( {
				skill_name : allskills[skill].name
			});
			if (char_skill != false) {
				$('#skill_' + allskills[skill]._id + "_input").val(char_skill.ranks);
			}
		}
	}
}

function recalc_edit_page() {
	chardata.name = $('#charname').val();
	// change your class, lose your feat, spell selections
	// if (chardata.class_name != $('#clazz').val()) {
	// 	chardata.feats = null;
	// 	chardata.spells = null;
	// 	chardata.favored_enemies = null;
	// 	chardata.ranger_weapon_style = null;
	// }
	// class_spells = clazz.spells;
	var curr_level = calc_level(chardata.xp);
	var new_level = calc_level($('#xp').val());
	chardata.xp = $('#xp').val();
	// up a level
	if (curr_level < new_level) {
		var level_diff = new_level - curr_level;
		var ability_increase = (new_level + 1) % 4 == 0;
//		// hp increase of at least 1
//		var hp_increase = 0;
//		for (var i in level_diff) {
//			hp_increase += ((Math.floor(Math.random() * clazz.hd)) + 1)
//		}
//		var hp_increase = (Math.max(((Math.floor(Math.random() * clazz.hd)) + 1) + calc_ability_modifier($('ability_Con').val()), 1) * level_diff);
		show_class_dialog(level_diff, ability_increase);
	}
	curr_level = new_level;
	$("#max_ranks").text(curr_level + 1 + 3);
	chardata.hp = $("input[id='hp']").val();

	chardata.race_name = $('#race').val();

	chardata.alignment = $('#alignment').val().split(',')[0];
	chardata.goodness = $('#alignment').val().split(',')[1];
	chardata.deity = $('#deity').val();
	chardata.domain = $('#domain').val();
	// chardata.weapon_style = $('#weapon_style').val();

	// move to class features
	// $("#domain").toggle(chardata.class_name == "Cleric");

	if (chardata.abilities == null) {
		chardata.abilities = [];
	}

	var race = races.first( {
		name : chardata.race_name
	});
	
	// abilities
	for (var ability in abilities) {
		chardata.abilities[ability] = $("#ability_" + ability).val();
		if (race.abilities[ability]) {
			$("#race_" + ability + "_mod").val(pos(race.abilities[ability]));
		}
	}
	
//	var ability_mods = {};
//	for (ability in abilities) {
//		ability_mods[ability] = calc_ability_modifier(parseInt($("#ability_" + ability).val()));
//	}
	
	var langs = languages.get();
	var char_langs = chardata.languages || [];
	var class_langs = [];
	for (var classname in chardata.classes) {
		var clazz = classes.first({ name : classname });
		class_langs.concat(clazz.languages != null ? clazz.languages : []);
	}
	for(var i=0, len=langs.length; i<len; i++) {
		var is_race_language = race.languages.indexOf(langs[i].name) > -1;
		var is_class_language = class_langs.indexOf(langs[i].name) > -1;
		var checked = char_langs.indexOf(langs[i].name) > -1 || is_race_language || is_class_language;
		$('#language_' + langs[i]._id + '_check').attr('checked', checked);
		
		// TODO - clean up logic
		$("[id^='language_" + langs[i]._id + "']").toggleClass("disabled class_feat", is_class_language || is_race_language);
		if (is_class_language || is_race_language) {
			$('#language_' + langs[i]._id + '_check').attr('disabled', 'disabled');
			var lang_idx = chardata.languages.indexOf(langs[i].name);
			if(chardata.languages != null && lang_idx > -1) {
				// remove previously selected language if it's now free
				remove(chardata.languages, lang_idx);
			} 
		} else {
			$('#language_' + langs[i]._id + '_check').removeAttr('disabled');
		}	
	}

	var all_skills = skills.get().sort();
	for(var i=0, len=all_skills.length; i<len; i++) {
		var is_class_skill = false;
		for (var classname in chardata.classes) {
			if(all_skills[i].skill_classes.indexOf(classname) > -1) {
				is_class_skill = true;
				break;
			}
		}
		// TODO - factor out? calc skill poitns
		var race_mod = (race.skills[all_skills[i].name] != null ? race.skills[all_skills[i].name] : 0);
		var mods = race_mod > 0 ? "r:" + pos(race_mod) : "";
		var feat_mod = 0;
		get_all_char_feats().forEach( function(char_feat, j) {
			var feat = feats.first({ name: char_feat.feat_name });
			if(feat.skills && feat.skills[all_skills[i].name]) {
				feat_mod += feat.skills[all_skills[i].name];
			}
			// iterate over all mobility feats and undo the above negatives
			if(all_skills[i].mobility && feat.mobility) {
				acp = feat.mobility(acp);
			}
		});
		feat_mod += calc_equip_mod(all_skills[i].name);
		mods += feat_mod > 0 ? " o:" + pos(feat_mod) : "";
		var skill_ability_score = $("input#ability_" + all_skills[i].ability).val();
		var ability_mod = calc_ability_modifier(parseInt(skill_ability_score));
		mods += ability_mod != 0 ? " a:" + pos(ability_mod) : "";
		
		$("#" + all_skills[i]._id + "_mods").text(mods);
		
		$("a#skill_" + all_skills[i]._id).attr("style", (is_class_skill ? 'font-weight: bold' : ''));
		var skill_text = $("input[id='skill_" + all_skills[i]._id + "_input']");
		if (skill_text.val() != '' && parseInt(skill_text.val()) > 0) {
			// TODO - ugly, need a "save()" function
			if (chardata.skills == null) {
				chardata.skills = new TAFFY( [ {
					skill_name : all_skills[i].name,
					ranks : skill_text.val()
				} ]);
			}
			var char_skill = chardata.skills.first( {
				skill_name : all_skills[i].name
			});
			if (!char_skill) {
				chardata.skills.insert( {
					skill_name : all_skills[i].name,
					ranks : skill_text.val()
				});
			} else {
				chardata.skills.update( {
					ranks : skill_text.val()
				}, {
					skill_name : all_skills[i].name
				});
			}
		}
	}
	
	var skill_pts = calc_skill_points();
	$('#skill_pts_remaining').html(skill_pts < 0 ? ["<span class='alarm'>", skill_pts, "</span>"].join('') : skill_pts);

	update_race_mods();
	
	// update available weapons (for class change)
	build_data_part( "weapons", "weapon");
	build_data_part( "armors", "armor");
	build_data_part( "shields", "shield");
	
	// clear classes section
	$("#classespart").html("");
	// build out classes section
	for (var classname in chardata.classes) {
		// if no features, don't show the fieldset
		var feature_count = 0;
		$("#classespart").append("<fieldset id='" + classname + "'><legend>" + classname + "</legend></fieldset>");
		var clazz = classes.first({ name : classname });
		if (clazz.custom && clazz.custom.edit) {
			for (level in  clazz.custom.edit) {
				if (chardata.classes[classname].level >= level) {
					for(var feature in clazz.custom.edit[level]) {
						feature_count++;
						$("fieldset[id='" + classname + "']").append(clazz.custom.edit[level][feature].ui);
						eval(clazz.custom.edit[level][feature].script);
					}
				} else {
					break;
				}
			}
		}
		if(feature_count == 0) {
			$("fieldset[id='" + classname + "']").remove();
		}
	}


	save_character();
	set_links_part(1);
}

function update_race_mods() {
	var race = races.first( {
		name : $('#race').val()
	});
	if (race) {
		for (var ability in abilities) {
			var mod = race.abilities[ability] == null ? ' ' : race.abilities[ability];
			$('#race_' + ability + '_mod').text(pos(mod));
		}
	}
}

//function create_selector(part_id, name, table, onchange_action, addl_data, include_empty) {
//	var addl_data = (addl_data == null ? [] : addl_data);
// var table_html = "<table id='" + name + "' style='display: none'
// border='0'><tr>";
// var select = create_select(name, table.get(), onchange_action, include_empty,
// "width: 185px;");
// table_html += "<td colspan='2'>" + select + "</td></tr>";
// for (i in addl_data) {
// table_html += "<tr><td>" + addl_data[i] + "</td><td><input id='" + name +
// addl_data[i]
// + "' type='text' value='' /></td></tr>";
// }
// table_html += "</table>";
// $('#' + part_id).append(table_html);
// $('table#' + name).show();
// }

function update_language(language_id) {
	var checked = $('#language_' + language_id + '_check').attr('checked');
	var language = languages.first({ _id: language_id });
	var char_lang_idx = chardata.languages.indexOf(language.name);
	if(!checked && char_lang_idx > -1) {
		remove(chardata.languages, char_lang_idx);
	} else {
		chardata.languages.push(language.name);
	}
}