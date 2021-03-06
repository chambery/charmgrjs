function calc_skill_points() {
	// total skill points
	var int_mod = calc_ability_modifier("Int");
	var is_human = races({
			name : 'Human'
		}).first().name == $('#race').val();

	var total_skill_points = 0;
	// hang on to a random class to calculate first level skill points
	var class_skills_per_level = 0;
	for (var classname in chardata.classes) {
		class_skills_per_level = classes({
				name : classname
			}).first().skill_points_per_level + int_mod;
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

	$('#content').html("<div class='dp100' style='padding-bottom: 5px;'><span style='float: right;'>XP&nbsp;&nbsp;<input type='text' onblur='recalc_edit_page()' size='5' value='' name='xp' id='xp'></span><input id='charname' value='' size='12' type='text' onblur='save_character()' />&nbsp;<span id='race_select'></span></div><div id='moralitypart' class='dp100' style='padding-bottom: 5px;'><select id='alignment' onchange='recalc_edit_page()' style='float: right;'></select>HP&nbsp;&nbsp;<input id='hp' value='' type='text' style='width: 25px' onblur='recalc_edit_page()' />&nbsp;&nbsp;<select id='deity' style='width: 105px;vertical-align: top;' onchange='recalc_edit_page()'></select></div><div id='middlepart'><div id='abilitiespart' class='dp25' style='padding-bottom: 5px; float: left'><table border='0'><tbody><tr><td align='center'><b><a class='fake_link' onclick=\"show_item_detail(abilities,'Str')\">Str</a></b></td><td align='center'><input type='text'onblur='recalc_edit_page()' value='' name='Strscore'class='two_digit' id='ability_Str'></td><td align='center' id='race_Str_mod'></td></tr><tr><td align='center'><b><a class='fake_link' onclick=\"show_item_detail(abilities,'Dex')\">Dex</a></b></td><td align='center'><input type='text'onblur='recalc_edit_page()' value='' name='Dexscore'class='two_digit' id='ability_Dex'></td><td align='center' id='race_Dex_mod'></td></tr><tr><td align='center'><b><a class='fake_link' onclick=\"show_item_detail(abilities,'Int')\">Int</a></b></td><td align='center'><input type='text'onblur='recalc_edit_page()' value='' name='Intscore'class='two_digit' id='ability_Int'></td><td align='center' id='race_Int_mod'></td></tr><tr><td align='center'><b><a class='fake_link' onclick=\"show_item_detail(abilities,'Con')\">Con</a></b></td><td align='center'><input type='text'onblur='recalc_edit_page()' value='' name='Conscore'class='two_digit' id='ability_Con'></td><td align='center' id='race_Con_mod'></td></tr><tr><td align='center'><b><a class='fake_link' onclick=\"show_item_detail(abilities,'Int')\">Cha</a></b></td><td align='center'><input type='text'onblur='recalc_edit_page()' value='' name='Chascore'class='two_digit' id='ability_Cha'></td><td align='center' id='race_Cha_mod'></td></tr>	<tr><td align='center'><b><a class='fake_link' onclick=\"show_item_detail(abilities,'Wis')\">Wis</a></b></td><td align='center'><input type='text'onblur='recalc_edit_page()' value='' name='Wisscore'class='two_digit' id='ability_Wis'></td><td align='center' id='race_Wis_mod'></td></tr></tbody></table></div><div id='classespart' class='dp75'></div></div><br style='clear: both' /><div class='dp100'><div id='skillspart' class='dp45' style='float: right'><table id='skills_table' border='0'><tr><td colspan='3'><span style='float: right;'>Pts left: <span id='skill_pts_remaining'>0</span></span>Max ranks: <span id='max_ranks'></span></td></tr><tr onclick=\"toggle_visible('languages')\" bgcolor='#8DC3E9'><td colspan=3 style='vertical-align: middle;'><a class='fake_link'><span id='languages_expand_flag' style='float: right'><img src='images/collapsed.png'/></span>Languages</a></td></tr><tr id='languages'><td colspan=3><table id='language_table' width='100%'style='border-collapse: collapse;'></table></td></tr></table></div><div id='waspart' class='dp50'><div id='weaponspart' class='dp100'><div id='char_weapons'></div><div id='new_weapon' class='new_weapon'></div><hr width='80%' /></div><div id='armorpart' class='dp100'><div id='char_armors'></div><div id='new_armor' class='new_weapon'></div><hr width='80%' /></div><div id='shieldpart' class='dp100'><div id='char_shields'></div><div id='new_shield' class='new_weapon'></div></div></div></div><div class='clear'></div>");
	if(chardata.abilities == null) {
		chardata.abilities = {};
	}

	// topline
	var race_html = create_select('race', races().get(), 'recalc_edit_page()', false, "style='width: 75px;'");
	$("#race_select").html(race_html);
	// alignment and deity
	var align_html = [];
	alignments().each( function(alignment, i) {
		goodness().each( function(good, j) {
			align_html.push(["<option id='alignment_option_", alignment.name, "_", good.name, "' data_id='", i, ",", j, "' value='", alignment.name, ",", good.name, "'>", alignment.name, " ", good.name, "</option>"].join(''));
		});
	});
	$("#alignment").html(align_html.join(''));

	$("#alignment").change(function() {
		console.group("deity - ALIGNMENT_CHANGED");

		align_html = [];
		align_html.push("<option id='deity_option_-1' data_id='' value=''></option>");
		$.each(get_deities_for_alignment(chardata.alignment, chardata.goodness), function(i, deity) {
			console.log(deity.name + " : " + deity.alignment + " " + deity.goodness);
			align_html.push(["<option id='deity_option_" + deity.name + "' data_id='" + deity._id + "' value='" + deity.name + "'>" + deity.name + " (" + deity.alignment[0] + deity.goodness[0] + ")</option>"]);
		});
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
	align_html.push("<option id='deity_option_-1' data_id='' value=''></option>");
	$.each(get_deities_for_alignment(chardata.alignment, chardata.goodness), function(i, deity) {
			align_html.push(["<option id='deity_option_" + deity.name + "' data_id='" + deity._id + "' value='" + deity.name + "'>" + deity.name + "</option>"]);
		});
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
	// 			align_range.push(alignments[align_idx - 1] + " " + chardata.goodness);			if() {

	// 		}			if() {			if() {


	// 		if(good_idx+1 < 3) {
	// 			align_range.push(chardata.alignment + " " + goodness[good_idx + 1]);
	// 		}
	// 		if(good_idx-1 > -1) {
	// 			align_range.push(chardata.alignment + " " + goodness[good_idx - 1]);
	// 		}

	// 		for(var foo in align_range) {
	// 				console.log(align_range[foo]);
	// 		}
	// 		var available_deities = deities().get({ alignment: align_range });
	// 		for(var foo in available_deities) {
	// 				console.log(available_deities[foo].name + " : " + available_deities[foo].alignment);
	// 		}
	// 		align_html = [];
	// 		align_html.push("<option id='deity_option_-1' data_id='' value=''></option>");
	// 		for (var i=0; i<available_deities().length; i++) {
	// 			align_html.push(["<option id='deity_option_" + available_deities[i].name + "' data_id='" + available_deities[i]._id + "' value='" + available_deities[i].name + "'>" + available_deities[i].name + "</option>"]);
	// 		}
	// 		$("#deity").html(align_html.join(''));
	// });

	// move to classes.js
	// $('#abilitiespart').append(domain_select);

	// language
	$("#language_table").html(create_languages());
	$('#languages').hide();
	// skills
	var skill_html = [];
	skills().each(function(skill, i) {
		if(skill.subtypes) {
			skill_html.push(["<tr onclick=\"toggle_visible('" + skill.name + "')\" bgcolor='#E2F0F9'><td colspan=3 style='vertical-align: middle;'><a class='fake_link' id='skill_", skill._id, "'><span id='", skill.name,"_expand_flag' style='float: right'><img src='images/collapsed.png'/></span>", skill.name ,"</a></td></tr><tr id='",skill.name,"'><td colspan=3><table id='",skill.name,"_table' width='100%'style='border-collapse: collapse;'>"].join(''));
			for(var subtype in skill.subtypes) {
				if(!chardata.skills || !chardata.skills({ skill_name: skill.name }).first() || !chardata.skills({ skill_name: skill.name }).first().subtypes[subtype]) {
					skill_html.push(["<tr><td style='vertical-align: top;'><a id='skill_", skill._id, "' class='fake_link' onclick='show_item_detail(skills, \"", skill._id, "\")' subtype='" + subtype + "'>", skill.name," (",subtype,")</a></td><td style='vertical-align: top;'><input id='skill_", skill._id, "_input' subtype='",subtype,"' class='two_digit' value='' onblur='recalc_edit_page()'></td><td style='font-size: xx-small; vertical-align: top;'>", skill.ability, "<br><span id='", skill._id, "_mods' style='font-size: xx-small;'></span></td></tr>"].join(''));
				}
			}
			skill_html.push("</table></td></tr>");
			// show ranked subtypes outside the expandy
			if(chardata.skills) {
				var char_skill = chardata.skills({ skill_name: skill.name }).first();
				if(char_skill) {
					for(var subtype in char_skill.subtypes) {
						skill_html.push(["<tr><td style='vertical-align: top;'><a id='skill_", skill._id, "' class='fake_link' onclick='show_item_detail(skills, \"", skill._id, "\")' subtype='" + subtype + "'>", skill.name," (",subtype,")</a></td><td style='vertical-align: top;'><input id='skill_", skill._id, "_input' subtype='",subtype,"' class='two_digit' value='' onblur='recalc_edit_page()'></td><td style='font-size: xx-small; vertical-align: top;'>", skill.ability, "<br><span id='", skill._id, "_mods' style='font-size: xx-small;'></span></td></tr>"].join(''));
					}
				}
			}
		} else {
			skill_html.push(["<tr><td style='vertical-align: top;'><a id='skill_", skill._id, "' class='fake_link' onclick='show_item_detail(skills, \"", skill._id, "\")'>", skill.name,"</a></td><td style='vertical-align: top;'><input id='skill_", skill._id, "_input' class='two_digit' value='' onblur='recalc_edit_page()'></td><td style='font-size: xx-small; vertical-align: top;'>", skill.ability, "<br><span id='", skill._id, "_mods' style='font-size: xx-small;'></span></td></tr>"].join(''));
		}
	});
	$('#skills_table').append(skill_html.join(''));
	$('#skills_table').css("width", "100%");
	skills({ subtypes : { "!is" : null } }).each( function(skill, i) {
		$("#" + skill.name).hide();
	});

	// weapons
	build_data_part( "weapons", "weapon");

	// armor
	build_data_part( "armors", "armor");

	// shields
	build_data_part( "shields", "shield");

	if (is_empty(chardata.classes)) {
		chardata.classes = {};
		var level = $("#xp").val() == "" ? 0 : parseInt($("#xp").val());
		show_class_dialog(calc_level(level)+1, 0);
	}
}

function create_languages() {
	var language_html = [];
	var langs = languages().get();
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
	var race = races({
		name : race_name
	}).first();
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
	if (chardata.skills != null)
	{
		skills().each(function(skill, i)
		{
			var char_skill = chardata.skills({
				skill_name: skill.name
			}).first();
			if (char_skill != false)
			{
				if (char_skill.subtypes)
				{
					for (var subtype in char_skill.subtypes)
					{
						$("input[id=skill_" + skill._id + "_input][subtype='" + subtype + "']").val(char_skill.subtypes[subtype]);
					}
				}
				else
				{
					$("#skill_" + skill._id + "_input").val(char_skill.ranks);
				}
			}
		});
	}
}

function recalc_edit_page() {
	chardata.name = $('#charname').val();
	var acp = calc_armor_acp(chardata.armors);
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

	if (chardata.abilities == null)
	{
		chardata.abilities = {};
	}

	var race = races({name : chardata.race_name}).first();

	// abilities
	for (var ability in abilities)
	{
			chardata.abilities[ability] = $("#ability_" + ability).val();
			var mod = race.abilities[ability] == null ? ' ' : race.abilities[ability];
			$('#race_' + ability + '_mod').text(pos(mod));
	}

//	var ability_mods = {};
//	for (ability in abilities) {
//		ability_mods[ability] = calc_ability_modifier(parseInt($("#ability_" + ability).val()));
//	}

	var langs = languages().get();
	var char_langs = chardata.languages || [];
	var class_langs = [];
	for (var classname in chardata.classes) {
		var clazz = classes({ name : classname }).first();
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

	skills().each(function(skill, i) {
		// TODO - factor out? calc skill poitns
		var race_mod = (race.skills[skill.name] != null ? race.skills[skill.name] : 0);
		var mods = race_mod > 0 ? "r:" + pos(race_mod) : "";
		var feat_mod = 0;
		get_all_char_feats().forEach( function(char_feat, j) {
			var feat = feats({ name: char_feat.feat_name }).first();
			if(feat.skills && feat.skills[skill.name]) {
				feat_mod += feat.skills[skill.name];
			}
			// iterate over all mobility feats and undo the above negatives
			if(skill.mobility && feat.mobility) {
				acp = feat.mobility(acp);
			}
		});
		feat_mod += calc_equip_mod(skill.name);
		mods += feat_mod > 0 ? " o:" + pos(feat_mod) : "";
		var ability_mod = calc_ability_modifier(skill.ability);
		mods += ability_mod != 0 ? " a:" + pos(ability_mod) : "";

		$("#" + skill._id + "_mods").text(mods);

		if(skill.subtypes) {
			for(var subtype in skill.subtypes) {
				update_skills(skill, subtype);
			}
		} else {
			update_skills(skill);
		}
	});

	var skill_pts = calc_skill_points();
	$('#skill_pts_remaining').html(skill_pts < 0 ? ["<span class='alarm'>", skill_pts, "</span>"].join('') : skill_pts);

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
		$("#classespart").append("<fieldset id='" + classname + "' style='padding-left: 3px;border: 1px solid LightGray'><legend>" + classname + "</legend></fieldset>");
		var clazz = classes({ name : classname }).first();
		if (clazz.custom && clazz.custom.edit) {
			for (level in  clazz.custom.edit) {
				if (chardata.classes[classname].level >= level) {
					for(var feature in clazz.custom.edit[level]) {
						feature_count++;
						$("fieldset[id='" + classname + "']").append(clazz.custom.edit[level][feature].ui);
						clazz.custom.edit[level][feature].script();
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

function update_skills(skill, subtype) {
	var class_skill = is_class_skill(skill, subtype);

	var skill_text = $("input[id='skill_" + skill._id + "_input']" + (subtype ? "[subtype='" + subtype +"']" : ""));
	if (skill_text.val() != '' && parseInt(skill_text.val()) > 0) {
		// TODO - ugly, need a "save()" function
		if (chardata.skills == null) {
			chardata.skills = TAFFY();
		}

		var char_skill = chardata.skills({
			skill_name : skill.name
		}).first();
		if (!char_skill) {
			chardata.skills.insert( {
				skill_name : skill.name
			});
		}
		 var updata = {};
		if(subtype) {
			updata.subtypes = $.extend({}, chardata.skills({ skill_name: skill.name }).first().subtypes);
			updata.subtypes[subtype] = skill_text.val();
		} else {
			updata.ranks = skill_text.val();
		}

		// TODO - should use db.merge(): 
		chardata.skills({ skill_name: skill.name }).update( updata );
	}
	var skill_link = $("a[id='skill_" + skill._id + "']" + (subtype ? "[subtype='" + subtype +"']" : ""));
	if(skill_link && class_skill) {
		skill_link.attr("style", "font-weight: bold;");
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
	var language = languages({ _id: language_id }).first();
	var char_lang_idx = chardata.languages.indexOf(language.name);
	if(!checked && char_lang_idx > -1) {
		remove(chardata.languages, char_lang_idx);
	} else {
		chardata.languages.push(language.name);
	}
}
