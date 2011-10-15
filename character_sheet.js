function populate_character_sheet() {

	$("#char_name").text(chardata.name);

	$("#race").text(chardata.race_name);

	var count = count_attrs(chardata.classes);

	var i = 0;

	for ( var classname in chardata.classes) {

		$("#classes").append(classname + "<sub>" + (chardata.classes[classname].level + 1) + "</sub>" + (i + 1 < count ? " / " : ""));

		i++;

	}

	$("#alignment").text(chardata.alignment + " " + chardata.goodness);

	$("#deity").text(chardata.deity ? chardata.deity : "");

	var xp = (chardata.xp | 0);

	$("#xp").text(xp);

	var level = calc_level() + 1;

	var levels = [ 0, 1000, 3000, 6000, 10000, 15000, 21000, 28000, 36000, 45000, 55000, 66000, 78000, 91000, 105000, 120000, 136000, 153000, 171000, 190000 ];

	var next_level = 1;

	for ( var i in levels) {

		if (xp <= levels[i]) {

			next_level = levels[i];

			break;

		}

	}

	$("#next_level_xp").text(next_level);

	$("input#gender").val(chardata.gender ? chardata.gender : "");

	$("input#age").val(chardata.age ? chardata.age : "");

	$("input#size").val(chardata.size ? chardata.size : "");

	$("input#height").val(chardata.height ? chardata.height : "");

	$("input#weight").val(chardata.weight ? chardata.weight : "");

	$("input#skin").val(chardata.skin ? chardata.skin : "");

	$("input#hair").val(chardata.hair ? chardata.hair : "");

	$("input#eyes").val(chardata.eyes ? chardata.eyes : "");

	$("input#handedness").val(chardata.handedness ? chardata.handedness : "");



	var all_skills = skills.get();

	var rows = parseInt(all_skills.length / 3) + (all_skills.length % 3 ? 1 : 0);



	for (ability in chardata.abilities) {

		$("#" + ability + "_score").text(chardata.abilities[ability]);

		$("[id=" + ability + "_mod]").text(calc_ability_modifier(chardata.abilities[ability]));

	}



	for ( var i = 0; i < rows - 1; i++) {

		var row = [ "<tr>" ];

		for ( var j = 0; j < 3; j++) {

			// if(i*rows+j <all_skills.length) {

			var is_class_skill = false;

			for ( var classname in chardata.classes) {

				if (all_skills[j * rows + i].skill_classes.indexOf(classname) > -1) {

					is_class_skill = true;

					break;

				}

			}

			row = row.concat( [ "<td", (is_class_skill ? " style='font-weight: bold'" : ""), ">", all_skills[j * rows + i].name, "</td><td style='text-align: right'>",

					(all_skills[j * rows + i].mobility ? "&dagger;" : ""), (all_skills[j * rows + i].untrained == "Yes" ? "&diams;" : ""),

					"</td><td></td><td class='entry_box' style='text-align: center'>", calc_skill_mod(all_skills[j * rows + i], chardata.abilities[all_skills[j * rows + i].ability]),

					"</td><td style='text-align: center'>=</td><td class='entry_box' style='text-align: center'>", (chardata.skills ? chardata.skills.first( {

						skill_name : all_skills[j * rows + i].name

					}).ranks : ""), "</td><td style='text-align: center'>+</td><td class='entry_box' style='text-align: center'>",

					calc_ability_modifier(chardata.abilities[all_skills[j * rows + i].ability]),

					"</td><td style='text-align: center'>+</td><td class='entry_box'><!-- misc mod --></td><td style='text-align: center'>", all_skills[j * rows + i].ability,

					"</td><td class='cell_spacer'></td>" ]);

			// }

		}

		row = row.concat( [ "</tr>" ]);

		$("#skills").append(row.join(''));

	}



	for ( var i in chardata.armors) {

		var armor = armors.first( {

			name : chardata.armors[i].armor_name

		});

		var html = [ "<tr><td class='user-entry-box'>", armor.name, "</td><td class='user-entry-box'>", armor.category, "</td><td class='user-entry-box'>", armor.bon,

				"</td><td class='user-entry-box'>", armor.max_dex_bonus, "</td><td class='user-entry-box'>", armor.acp, "</td><td class='user-entry-box'>", armor.spell_fail,

				"</td><td class='user-entry-box'>", armor.speed30, " / ", armor.speed20, "</td><td class='user-entry-box'>", armor.weight, "</td></tr>" ];

		$("#armor_header").after(html.join(''));



	}

	var ap = is_class_feat("Armor Proficiency (light)") || chardata.feats.first( {

		name : "Armor Proficiency (light)"

	}) ? "checked" : "";

	$("#light_armor_proficiency").attr("checked", ap);

	ap = is_class_feat("Armor Proficiency (medium)") || chardata.feats.first( {

		name : "Armor Proficiency (medium)"

	}) ? "checked" : "";

	$("#medium_armor_proficiency").attr("checked", ap);

	ap = is_class_feat("Armor Proficiency (heavy)") || chardata.feats.first( {

		name : "Armor Proficiency (heavy)"

	}) ? "checked" : "";

	$("#heavy_armor_proficiency").attr("checked", ap);

	ap = is_class_feat("Simple Weapon Proficiency") || chardata.feats.first( {

		name : "Simple Weapon Proficiency"

	}) ? "checked" : "";

	$("#simple_weapon_proficiency").attr("checked", ap);

	ap = is_class_feat("Martial Weapon Proficiency") || chardata.feats.first( {

		name : "Martial Weapon Proficiency"

	}) ? "checked" : "";

	$("#martial_weapon_proficiency").attr("checked", ap);

	

	var base_attack_bonuses = calc_base_attack_bonus();

	for ( var i in chardata.weapons) {

		var weapon = weapons.first( {

			name : chardata.weapons[i].weapon_name

		});

		var html = [ "<tr><td class='user-entry-box'>", chardata.weapons[i].name != null ? chardata.weapons[i].name + " (" + weapon.name + ")" : weapon.name, "</td><td class='user-entry-box'>", chardata.weapons[i].att, "</td><td class='user-entry-box'>", calc_damage(weapon, chardata.abilities["Str"], chardata.feats, chardata.weapons[i]),

				"</td><td class='user-entry-box'>",calc_critical(weapon.crit, chardata.weapons[i], chardata.feats), "</td><td class='user-entry-box'>", weapon.range, "</td><td class='user-entry-box'>", weapon.usage,

		"</td><td class='user-entry-box'>", weapon.category, "</td><td class='user-entry-box'>", weapon.weight, "</td><td class='user-entry-box'>", (chardata.weapons[i].note ? chardata.weapons[i].note : ""), "</td></tr>" ];

		$("#weapons_header").after(html.join(''));



	}

	var init = calc_init(chardata.abilities["Dex"]);

	$("#init_total").text(init);

	$("#init_misc_mod").text(init - calc_ability_modifier(chardata.abilities["Dex"]));

	

	var fort = calc_fort(chardata.abilities["Con"]);

	$("#fort_total").text(pos(fort));

	var fort_base = calc_save("fort_save");

	$("#fort_base").text(fort_base);

	$("#fort_misc_mod").text(fort - (fort_base + calc_ability_modifier(chardata.abilities["Con"])));



	var will = calc_will(chardata.abilities["Wis"]);

	$("#will_total").text(pos(will));

	var will_base = calc_save("will_save");

	$("#will_base").text(pos(will_base));

	$("#will_misc_mod").text(pos(will - (will_base + calc_ability_modifier(chardata.abilities["Wis"]))));



	var ref = calc_ref(chardata.abilities["Dex"]);

	$("#ref_total").text(pos(ref));

	var ref_base = calc_save("ref_save");

	$("#ref_base").text(pos(ref_base));

	$("#ref_misc_mod").text(pos(ref - (ref_base + calc_ability_modifier(chardata.abilities["Dex"]))));

	

	var ac = calc_ac(chardata.abilities["Dex"]);

	$("#ac_total").text(ac);

	var armor_bonus = calc_armor_bonus(chardata.armors, armors, "armor");

	$("#armor_bonus").text(pos(armor_bonus.bonus));

	var shield_bonus = calc_armor_bonus(chardata.shields, shields, "shield");

	$("#shield_bonus").text(pos(shield_bonus.bonus));

	var size_mod = calc_size_mod(chardata.race_name);

	$("[id=size_mod]").text(pos(size_mod));

	$("#ac_misc_mod").text(pos(ac - (armor_bonus.bonus + shield_bonus.bonus + size_mod + calc_ability_modifier(chardata.abilities["Dex"]) + 10)));

	

	$("#touch").text(pos(10 + calc_ability_modifier(chardata.abilities["Dex"]) + size_mod));

	$("#flat").text(pos(10 + armor_bonus.bonus));

	

	$("[id=base_attack_bonus]").text(base_attack_bonuses.map(function(x){ return pos(x); }).join("/"));

	$("#armor_check_penalty").text(calc_armor_acp(chardata.armors) + calc_shield_acp(chardata.shields));

	

	$("#melee_total").text(calc_base_attack(base_attack_bonuses, parseInt(chardata.abilities["Str"])).map(function(x){ return pos(x); }).join("/"));

	$("#melee_misc_mod").text();

	$("#ranged_total").text(calc_base_attack(base_attack_bonuses, parseInt(chardata.abilities["Dex"])).map(function(x){ return pos(x); }).join("/"));

	$("#ranged_misc_mod").text();

	

	var wp = "";

	var c = 0;

	var weapon_proficiencies = chardata.feats.get({ name: [ "Exotic Weapon Proficiency", "Weapon Specialization", "Weapon Focus", "Greater Weapon Specialization", "Greater Weapon Focus" ] })

	for(var i in weapon_proficiencies) {

		$("#weapon_proficiencies").after("<tr><td colspan=2>" + weapon_proficiencies[i].name + "</td></tr>");

		wp = "<tr>";

		for(var j in weapon_proficiencies[i].multi) {

			wp += "<td class='user-entry-box'>" + weapon_proficiencies[i].multi[j] + "</td>";

			c++;

			if(c % 2 == 0) {

				$("#weapon_proficiencies").after(wp + "</tr>");

				wp = "<tr>";

			}

		}

		wp += "</tr>";

	};

}



character_sheet = "<div> <table style='width: 100%'> <tr> <td style='width: 662px; height: 58px;'> <table style='width: 100%' class='auto-style1'> <tr> <td id='char_name' class='entry_box' style='width: 245px; height: 25px;'></td> <td class='cell_spacer'></td> <td id='race' class='entry_box' style='width: 116px; height: 25px;'></td> <td class='cell_spacer'></td> <td id='classes' class='entry_box' style='width: 231px; height: 25px;'></td> </tr> <tr> <td>Character</td> <td>&nbsp;</td> <td>Race</td>                                                  <td>&nbsp;</td> <td>Class</td> </tr> </table> </td> <td rowspan='2' class='auto-style4'><img style='float: right' src='img26.jpg' /></td> </tr> <tr> <td> <table style='width: 100%'> <tr> <td id='alignment' class='entry_box' style='width: 179px; height: 25px;'></td> <td class='cell_spacer'></td> <td id='deity' class='entry_box' style='width: 272px; height: 25px;'></td> <td class='cell_spacer'></td> <!--  td id='level' class='entry_box' style='width: 49px; height: 25px;'></td> <td class='cell_spacer'></td --> <td style='width: 240px; height: 25px; text-align: center' class='entry_box'><span id='xp'></span> / <span id='next_level_xp'></span></td> <td class='cell_spacer'></td> <td id='penalty' style='width: 97px; height: 25px;' class='entry_box'><input type='text' style='width: 6em' onblur=\"chardata.penalty=$( '#penalty').val(); save_character();\" /></td> </tr> <tr> <td>Alignment</td> <td class='cell_spacer'>&nbsp;</td> <td>Deity</td> <td class='cell_spacer'>&nbsp;</td> <td>Experience</td> <td class='cell_spacer'>&nbsp;</td> <td>Penalty</td> </tr> </table> </td> </tr> </table> <table style='width: 100%'> <tr> <td id='gender' class='entry_box'><input id='gender' type='text' onblur=\"chardata.gender=$('input#gender').val(); save_character();\" style='width: 100%' /></td> <td class='cell_spacer'></td> <td id='age' class='entry_box'><input id='age' type='text' onblur=\"chardata.age=$('input#age').val(); save_character();\" style='width: 100%' /></td> <td class='cell_spacer'></td> <td id='size' class='entry_box'><input id='size' type='text' onblur=\"chardata.size=$('input#size').val(); save_character();\" style='width: 100%' /></td> <td class='cell_spacer'></td> <td id='height' class='entry_box'><input id='height' type='text' onblur=\"chardata.height=$('input#height').val(); save_character();\" style='width: 100%' /></td> <td class='cell_spacer'></td> <td id='weight' class='entry_box'><input id='weight' type='text' onblur=\"chardata.weight=$('input#weight').val(); save_character();\" style='width: 100%' /></td> <td class='cell_spacer'></td> <td id='skin' class='entry_box'><input id='skin' type='text' onblur=\"chardata.skin=$('input#skin').val(); save_character();\" style='width: 100%' /></td> <td class='cell_spacer'></td> <td id='hair' class='entry_box'><input id='hair' type='text' onblur=\"chardata.hair=$('input#hair').val(); save_character();\" style='width: 100%' /></td> <td class='cell_spacer'></td> <td id='eyes' class='entry_box'><input id='eyes' type='text' onblur=\"chardata.eyes=$('input#eyes').val(); save_character();\" style='width: 100%' /></td> <td class='cell_spacer'></td> <td id='handedness' class='entry_box'><input id='handedness' style='width: 6em' type='text' onblur=\"chardata.handedness=$('input#handedness').val(); save_character();\" /></td> </tr> <tr> <td>Gender</td> <td class='cell_spacer'></td> <td>Age</td> <td class='cell_spacer'></td> <td>Size</td> <td class='cell_spacer'></td> <td>Height</td> <td class='cell_spacer'>&nbsp;</td> <td>Weight</td> <td class='cell_spacer'>&nbsp;</td> <td>Skin</td> <td>&nbsp;</td> <td>Hair</td> <td>&nbsp;</td> <td>Eyes</td> <td class='cell_spacer'>&nbsp;</td> <td>Handedness</td> </tr> </table> <table style='width: 100%'> <tr> <td style='vertical-align: top;'> <table style='width: 100%; height: 100%'> <tr class='group_header'> <td colspan='6' class='group_header'>ABILITY SCORES</td> </tr> <tr> <td style='height: 23px; width: 46px;'></td> <td style='height: 23px; width: 46px;' class='top_header'>SCORE</td> <td style='height: 23px; width: 46px;' class='top_header'>MOD</td> <td class='cell_spacer'></td> <td style='height: 23px; width: 46px;' class='top_header'>TEMP<br /> SCORE</td> <td style='height: 23px; width: 46px;' class='top_header'>TEMP<br /> MOD</td> </tr> <tr> <td class='group_header'>STR</td> <td id='Str_score'  class='user-entry-box'>&nbsp;</td> <td id='Str_mod'  class='user-entry-box'></td> <td class='cell_spacer'></td> <td id='Str_temp_score'  class='temp_entry_box'></td> <td id='Str_temp_mod'  class='temp_entry_box'></td> </tr> <tr> <td class='group_header'>DEX</td> <td id='Dex_score' class='user-entry-box'>&nbsp;</td> <td id='Dex_mod' class='user-entry-box'>&nbsp;</td> <td class='cell_spacer'>&nbsp;</td> <td id='Dex_temp_score' class='temp_entry_box'>&nbsp;</td> <td id='Str_temp_mod' class='temp_entry_box'>&nbsp;</td> </tr> <tr> <td class='group_header'>CON</td> <td id='Con_score'  class='user-entry-box'></td> <td id='Con_mod'  class='user-entry-box'></td> <td class='cell_spacer'></td> <td id='Con_temp_score' class='temp_entry_box'></td> <td id='Con_temp_mod' class='temp_entry_box'></td> </tr> <tr> <td class='group_header'>INT</td> <td id='Int_score' class='user-entry-box'>&nbsp;</td> <td id='Int_mod' class='user-entry-box'>&nbsp;</td> <td class='cell_spacer'></td> <td id='Int_temp_score' class='temp_entry_box'>&nbsp;</td> <td id='Int_temp_mod' class='temp_entry_box'>&nbsp;</td> </tr> <tr> <td class='group_header'>WIS</td> <td id='Wis_score' class='user-entry-box'>&nbsp;</td> <td id='Wis_mod' class='user-entry-box'>&nbsp;</td> <td class='cell_spacer'>&nbsp;</td> <td id='Wis_temp_score' class='temp_entry_box'>&nbsp;</td> <td id='Wis_temp_mod' class='temp_entry_box'>&nbsp;</td> </tr> <tr> <td class='group_header'>CHA</td> <td id='Cha_score' class='user-entry-box'>&nbsp;</td> <td id='Cha_mod' class='user-entry-box'>&nbsp;</td> <td class='cell_spacer'>&nbsp;</td> <td id='Cha_temp_score' class='temp_entry_box'>&nbsp;</td> <td id='Cha_temp_mod' class='temp_entry_box'>&nbsp;</td> </tr> </table> </td> <td class='cell_spacer' style='width: 20px; height: 239px;'></td> <td valign='top'> <table style='width: 100%;'> <tr class='group_header'> <td class='group_header' colspan='10'>SAVING THROWS</td> </tr> <tr> <td>&nbsp;</td> <td class='top_header'>TOTAL</td> <td class='top_header'>&nbsp;</td> <td class='top_header'>BASE<br /> SAVE</td> <td class='top_header'>&nbsp;</td> <td class='top_header'>ABILITY<br /> MOD</td> <td class='top_header'>&nbsp;</td> <td class='top_header'>MISC<br /> MOD</td> <td class='top_header'>&nbsp;</td> <td class='top_header'>TEMP<br /> SAVE</td> </tr> <tr> <td class='group_header'>FORT</td> <td id='fort_total' class='user-entry-box'>&nbsp;</td> <td>=</td> <td id='fort_base' class='user-entry-box'>&nbsp;</td> <td>+</td> <td id='Con_mod' class='user-entry-box'>&nbsp;</td> <td>+</td> <td id='fort_misc_mod' class='user-entry-box'>&nbsp;</td> <td>&nbsp;</td> <td class='temp_entry_box'>&nbsp;</td> </tr> <tr> <td class='group_header'>REF</td> <td id='ref_total' class='user-entry-box'>&nbsp;</td> <td>=</td> <td id='ref_base' class='user-entry-box'>&nbsp;</td> <td>+</td> <td id='Dex_mod' class='user-entry-box'>&nbsp;</td> <td>+</td> <td id='ref_misc_mod' class='user-entry-box'>&nbsp;</td> <td>&nbsp;</td> <td class='temp_entry_box'>&nbsp;</td> </tr> <tr> <td class='group_header'>WILL</td> <td id='will_total' class='user-entry-box'>&nbsp;</td> <td>=</td> <td id='will_base' class='user-entry-box'>&nbsp;</td> <td>+</td> <td id='Wis_mod' class='user-entry-box'>&nbsp;</td> <td>+</td> <td id='will_misc_mod' class='user-entry-box'>&nbsp;</td> <td>&nbsp;</td> <td class='temp_entry_box'>&nbsp;</td> </tr> <tr class='user-entry-box'> <td colspan='10' class='top_header'>SAVING THROW MODIFIERS</td> </tr> <tr class='user-entry-box'> <td class='user-entry-box' colspan='10'>&nbsp;</td> </tr> <tr class='user-entry-box'> <td class='entry_box user-entry-box' colspan='10'>&nbsp;</td> </tr> </table> </td> <td class='cell_spacer'></td> <td style='height: 239px; vertical-align: top; width: 236px;'> <table style='width: 100%; height: 237px;'> <tr> <td class='group_header'>INITIATIVE</td> <td id='init_total' class='user-entry-box'>&nbsp;</td> <td>=</td> <td id='Dex_mod' class='user-entry-box'>&nbsp;</td> <td>+</td> <td id='init_misc_mod' class='user-entry-box'>&nbsp;</td> <td>&nbsp;</td> <td class='temp_entry_box'>&nbsp;</td> </tr> <tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td class='bottom_annotation'>DEX<br /> MOD</td> <td>&nbsp;</td> <td class='bottom_annotation'>MISC<br /> MOD</td> <td>&nbsp;</td> <td class='bottom_annotation'>TEMP<br /> INIT</td> </tr> <tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td colspan='8' class='top_header'>&nbsp; INITIATIVE MODIFIERS&nbsp;</td> </tr> <tr> <td class='user-entry-box' colspan='8'>&nbsp;</td> </tr> <tr> <td class='user-entry-box' colspan='8'>&nbsp;</td> </tr> <tr> <td colspan='8'> <table style='width: 100%; text-align: right; font-size: small'> <tr> <td>&nbsp;</td> <td>&nbsp;</td> <td class='top_header'>&nbsp;</td> <td class='top_header'>SPEED</td> <td class='top_header'>MAX<br /> LOAD</td> <td class='top_header'>MAX<br /> DEX</td> <td class='top_header'>CHK<br /> PEN</td> <td class='top_header'>RUN</td> </tr> <tr> <td class='group_header'>SPEED</td> <td class='user-entry-box'>&nbsp;</td> <td>L</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='group_header'>-</td> <td class='group_header'>-</td> <td class='group_header'>-</td> </tr> <tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>M</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='group_header'>+3</td> <td class='group_header'>-3</td> <td class='group_header'>x4</td> </tr> <tr> <td class='group_header'>LOAD</td> <td class='user-entry-box'>&nbsp;</td> <td>H</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='group_header'>+1</td> <td class='group_header'>-6</td> <td class='group_header'>x3</td> </tr> </table> </td> </tr> </table> </td> <td style='height: 239px; vertical-align: top;'> <table> <tr> <td class='top_header'>LIFT OVER HEAD</td> </tr> <tr> <td class='user-entry-box'></td> </tr> <tr class='bottom_annotation'> <td>1X MAX LOAD</td> </tr> <tr> <td class='top_header'>LIFT OFF GROUND</td> </tr> <tr> <td class='user-entry-box'></td> </tr> <tr class='bottom_annotation'> <td>2X MAX LOAD</td> </tr> <tr> <td class='top_header'>PUSH OR DRAG</td> </tr> <tr> <td class='user-entry-box'></td> </tr> <tr class='bottom_annotation'> <td>5X MAX LOAD</td> </tr> </table> </td> </tr> </table> <table style='width: 100%'> <tr> <td style='height: 23px; width: 510px;'></td> <td></td> </tr> <tr> <td> <table> <tr> <td class='group_header' colspan='2'>ARMOR CLASS</td> <td id='ac_total' class='user-entry-box'>&nbsp;</td> <td>&nbsp;= 10 +&nbsp;</td> <td id='armor_bonus' class='user-entry-box'>&nbsp;</td> <td>+</td> <td id='shield_bonus' class='user-entry-box'>&nbsp;</td> <td>+</td> <td id='Dex_mod' class='user-entry-box'>&nbsp;</td> <td>+</td> <td id='size_mod' class='user-entry-box'>&nbsp;</td> <td>+</td> <td id='ac_misc_mod' class='user-entry-box'>&nbsp;</td> </tr> <tr> <td></td> <td></td> <td></td> <td></td> <td class='bottom_annotation'>ARMOR<br /> BONUS</td> <td></td> <td class='bottom_annotation'>SHIELD<br /> BONUS</td> <td></td> <td class='bottom_annotation'>DEX<br /> MOD</td> <td></td> <td class='bottom_annotation'>SIZE<br /> MOD</td> <td></td> <td class='bottom_annotation' style='height: 28px; width: 25px;'>MISC<br /> MOD</td> </tr> <tr> <td id='touch' class='user-entry-box'>&nbsp;</td> <td id='flat' class='user-entry-box'>&nbsp;</td> <td id='temp_ac' class='temp_entry_box'>&nbsp;</td> <td>&nbsp;</td> <td colspan='9' class='top_header'>ARMOR CLASS MODIFIERS</td> </tr> <tr> <td id='touch' class='bottom_annotation'>VS TOUCH</td> <td id='flat' class='bottom_annotation'>FLAT-FOOTED</td> <td class='bottom_annotation'>TEMP<br /> AC</td> <td></td> <td class='user-entry-box' colspan='9'></td> </tr> <tr> <td id='arcane_spell_failure' class='user-entry-box'>&nbsp;</td> <td class='bottom_annotation'>&nbsp;</td> <td id='armor_check_penalty' class='user-entry-box'>&nbsp;</td> <td>&nbsp;</td> <td class='user-entry-box' colspan='9'>&nbsp;</td> </tr> <tr> <td class='bottom_annotation'>ARCANE SPELL<br /> FAILURE</td> <td class='bottom_annotation'>&nbsp;</td> <td class='bottom_annotation'>ARMOR CHECK<br /> PENALTY</td> <td>&nbsp;</td> <td class='user-entry-box' colspan='9'>&nbsp;</td> </tr> </table> </td> <td style='vertical-align: top'> <table id='armor' style='width: 100%'> <tr id='armor_header'> <td class='group_header'>ARMOR &amp; PROTECTION</td> <td class='top_header'>TYPE</td> <td class='top_header'>ARMOR<br /> BONUS</td> <td class='top_header'>MAX<br /> DEX</td> <td class='top_header'>ACP</td> <td class='top_header'>SR</td> <td class='top_header'>SPD</td> <td class='top_header'>WT</td> </tr> <tr> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> </tr> <tr> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> </tr> <tr> <td class='auto-style4' colspan='8'><span style='font-size: x-small'>PROFICIENT WITH </span> <input id='light_armor_proficiency' type='checkbox' /><span style='font-size: x-small'> LIGHT ARMOR </span> <input id='medium_armor_proficiency' type='checkbox' /><span style='font-size: x-small'> MEDIUM ARMOR </span> <input id='heavy_armor_proficiency' type='checkbox' /><span style='font-size: x-small'> HEAVY ARMOR </span> <input id='shield_proficiency' type='checkbox' /><span style='font-size: x-small'> SHIELDS </span></td> </tr> </table> </td> </tr> </table> <table style='width: 100%'> <tr> <td> <table> <tr id='weapon_proficiencies'> <td class='group_header'>WEAPON PROFICIENCIES</td> <td class='top_header'><input id='simple_weapon_proficiency' type='checkbox' /><span style='font-size: x-small'>ALL SIMPLE </span> <input id='martial_weapon_proficiency' type='checkbox' /><span style='font-size: x-small'>ALL MARTIAL</span></td> </tr> </table> </td> <td class='cell_spacer'></td> <td> <table style='width: 100%'> <tr> <td class='group_header' colspan='2'>BASE ATTACK BONUS</td> <td id='base_attack_bonus' class='user-entry-box' colspan='8'>&nbsp;</td> </tr> <tr> <td>&nbsp;</td> <td class='top_header'>TOTAL<br /> ATTACK BONUS</td> <td>&nbsp;</td> <td class='top_header'>BASE<br /> ATTACK BONUS</td> <td>&nbsp;</td> <td class='top_header'>ABI<br /> MOD</td> <td>&nbsp;</td> <td class='top_header'>SIZE<br /> MOD</td> <td>&nbsp;</td> <td class='top_header'>MISC<br /> MOD</td> </tr> <tr> <td class='group_header'>MELEE</td> <td id='melee_total' class='user-entry-box'>&nbsp;</td> <td>=</td> <td id='base_attack_bonus' class='user-entry-box'>&nbsp;</td> <td>+</td> <td id='Str_mod' class='user-entry-box'>&nbsp;</td> <td>+</td> <td id='size_mod' class='user-entry-box'>&nbsp;</td> <td>+</td> <td id='melee_misc_mod' class='user-entry-box'>&nbsp;</td> </tr> <tr> <td class='group_header'>RANGED</td> <td id='ranged_total' class='user-entry-box'>&nbsp;</td> <td>=</td> <td id='base_attack_bonus' class='user-entry-box'>&nbsp;</td> <td>+</td> <td id='Dex_mod' class='user-entry-box'>&nbsp;</td> <td>+</td> <td id='size_mod' class='user-entry-box'>&nbsp;</td> <td>+</td> <td id='ranged_misc_mod' class='user-entry-box'>&nbsp;</td> </tr> <tr> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td>=</td> <td class='user-entry-box'>&nbsp;</td> <td>+</td> <td class='user-entry-box'>&nbsp;</td> <td>+</td> <td class='user-entry-box'>&nbsp;</td> <td>+</td> <td class='user-entry-box'>&nbsp;</td> </tr> </table> </td> <td class='cell_spacer'>&nbsp;</td> <td> <table style='width: 100%'> <tr> <td class='top_header'>COMBAT MODIFIERS</td> </tr> <tr> <td class='user-entry-box'>&nbsp;</td> </tr> <tr> <td class='user-entry-box'>&nbsp;</td> </tr> <tr> <td class='user-entry-box'>&nbsp;</td> </tr> <tr> <td class='user-entry-box'>&nbsp;</td> </tr> <tr> <td class='user-entry-box'>&nbsp;</td> </tr> <tr> <td class='user-entry-box'>&nbsp;</td> </tr> </table> </td> </tr> </table> <table style='width: 100%'> <tr id='weapons_header'> <td class='group_header'>WEAPONS</td> <td class='top_header'>ATTACK BONUS</td> <td class='top_header'>DAMAGE</td> <td class='top_header'>CRITICAL</td> <td class='top_header'>RANGE</td> <td class='top_header'>SIZE</td> <td class='top_header'>TYPE</td> <td class='top_header'>WEIGHT</td> <td class='top_header'>NOTES</td> </tr> <tr> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> </tr> <tr> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> <td class='user-entry-box'>&nbsp;</td> </tr> </table> <table style='width: 100%'> <tr> <td class='group_header'>SKILLS</td> <td> <table> <tr> <td style='font-size: xx-small'>&dagger; Armor Check Penalty applies</td> </tr> <tr> <td style='font-size: xx-small'>&diams; Can be used untrained</td> </tr> </table> </td> </tr> </table> <table id='skills' style='width: 100%'> <tr class='top_header'> <td colspan='2'>SKILL<br /> TYPE</td> <td></td> <td>TOTAL</td> <td></td> <td>RANKS</td> <td></td> <td>ABI<br /> MOD</td> <td></td> <td>MISC<br /> MOD</td> <td>ABI</td> <td class='cell_spacer'></td> <td colspan='2'>SKILL<br /> TYPE</td> <td></td> <td>TOTAL</td> <td></td> <td>RANKS</td> <td></td> <td>ABI<br /> MOD</td> <td></td> <td>MISC<br /> MOD</td> <td>ABI</td> <td class='cell_spacer'></td> <td colspan='2'>SKILL<br /> TYPE</td> <td></td> <td>TOTAL</td> <td></td> <td>RANKS</td> <td></td> <td>ABI<br /> MOD</td> <td></td> <td>MISC<br /> MOD</td> <td>ABI</td> </tr> </table> </div>";

