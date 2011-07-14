loaded_static_data_tags = [];
// static data
spells = new TAFFY([]);
feats = new TAFFY([]);
races = new TAFFY([]);
domains = new TAFFY([]);
classes = new TAFFY([]);
schools = new TAFFY([]);
weapons = new TAFFY([]);
armors = new TAFFY([]);
skills = new TAFFY([]);
languages = new TAFFY([]);
deitys = new TAFFY([]);
specials = new TAFFY([]);
favored_enemys = new TAFFY([]);

shield_types = new TAFFY([]);
shields = new TAFFY([]);
damage_types = new TAFFY([]);

simple_weapons = [];
martial_weapons = [];
exotic_weapons = [];
// TODO - export                             
spellcasters = ["Bard","Cleric","Druid","Paladin","Ranger","Sorceror","Wizard"];
natural_spellcasters = ["Cleric", "Druid", "Paladin", "Ranger"];
spellpickers = ["Bard", "Sorceror", "Wizard"];
armor_edit_data =  [ "bon", "acp", "note" ];
shield_edit_data =  [ "bon", "acp", "note" ];
curr_xp = 0;
char_classes = [];
equipment_benefits = [];

$.extend({
    keys: function(obj){
        var a = [];
        $.each(obj, function(k){ a.push(k); });
        return a;
    }
});

function update_weapon(name, index) {
	var weapon = weapons.first( {
		name : name
	});
	$('#' + name + index + 'dam').value = weapon.damage;
	$('#' + name + index + 'crit').value = weapon.critical;
}

var weapon_edit_data = ["name", "att", "dam", "crit", "note" ];

function calc_total_base_feats_count(race_name, xp) {
	// humans get +1 feat
	var base_feat_count = race_name == "Human" ? 1 : 0;
	// actually 1, 3, ...
	var base_feats = [0, 2, 5, 8, 11, 14, 17];
	// TODO - do this elegantly
	for(var classname in chardata.classes) {
		for(var i=0; i <= chardata.classes[classname].level; i++) {
			base_feat_count += base_feats.indexOf(i) > -1 ? 1 : 0; 
		}
	}
	return base_feat_count;
}

function calc_total_class_feats_count(xp) {
	var class_feat_count = 0;
	for (var classname in chardata.classes) {
		var class_feats = classes.first({
			name: classname
		}).bonus_feats_levels;
		// TODO - do this elegantly
		for(var i=0; i <= chardata.classes[classname].level; i++) {
			class_feat_count += class_feats.indexOf(i) > -1 ? 1 : 0; 	
		}
	}
	
	return class_feat_count;
}

function calc_armor_acp(char_armors) {
	var acp = 0;
	for(var i in char_armors) {
		var armor = armors.first({ name: char_armors[i].armor_name });
		acp += armor.acp;
	}	
	return acp;
}

function calc_shield_acp(char_shields) {
	var acp = 0;
	for(var i in char_shields) {
		var shield = shields.first({ name: char_shields[i].shield_name });
		acp += shield.acp;
	}
	return acp;
}

function calc_skill_mod(skill, skill_ability_score, acp){
	// console.group("calc_skill_mod");
	// console.log(skill.name);
	acp = acp | 0;
    var char_skill_points = 0;
    // has the character spent points for this skill
    var char_skill = false;
    if (chardata.skills != null) {
        char_skill = chardata.skills.first({
            skill_name: skill.name
        });
    }
    
    if (char_skill) {
        char_skill_points = char_skill.ranks;
    }
    
    var race = races.first({
        name: chardata.race_name
    });
    var feat_mod = 0;
    
        
		get_all_char_feats().forEach( function(char_feat, i) {
			var feat = feats.first({ name: char_feat.feat_name });
			// console.log(feat.name);
			if(feat.skills && feat.skills[skill.name]) {
				feat_mod += feat.skills[skill.name];
			}
			// iterate over all mobility feats and undo the above negatives
			if(skill.mobility && feat.mobility) {
				acp = feat.mobility(acp);
			}
		});
	
		// TODO - move to feat definition
		if(chardata.feats) {
			var skill_focus = chardata.feats.first({ feat_name: "Skill Focus"}); 
			if(skill_focus && skill_focus.multi && jQuery.inArray(skill.name, skill_focus.multi) > -1) {
				feat_mod += 3;
			}
		}
    
    var race_mod = (race.skills[skill.name] != null ? race.skills[skill.name] : 0);
    
    var ranks = calc_ranks(char_skill_points, skill);
    
    var synergy_mod = calc_synergies(skill);
        
    // level + 1 + 3
    var max_ranks = calc_ranks(calc_level() + 4, skill);
    // console.groupEnd();
    return Math.min(Math.floor(max_ranks), ranks) + calc_ability_modifier(parseInt(skill_ability_score)) + synergy_mod + race_mod + feat_mod + (skill.mobility ? acp : 0) + calc_equip_mod(skill.name) | 0;
}

function calc_ranks(char_skill_points, skill){
	var class_skill = false;
	for (var classname in chardata.classes) {
		if (skill.skill_classes.indexOf(classname) > -1) {
			class_skill = true;
			break;
		}
	}
  var multiplier = class_skill ? 1 : .5;
  return multiplier * char_skill_points;
}

function calc_synergies(skill){
    // TODO - cook up some mechanism for the "soft" synergies (Survival, bardic knowledge)
    var synergy_mod = 0;
    for (var i in skill.synergies) {
        var char_synergy_skill = false;
        if (chardata.skills) {
            char_synergy_skill = chardata.skills.first({
                skill_id: skill.synergies[i]
            });
        }
        if (char_synergy_skill) {
            synergy_skill = skills.first({
                id: skill.synergies[i]
            });
            // calculate the ranks for the synergy skill
            synergy_mod = (calc_ranks(class_id, char_synergy_skill.ranks, synergy_skill) >= 5 ? 2 : 0);
        }
    }
    
    return synergy_mod;
}

options = new TAFFY([{
	name: "owner",
	description: "Owner",
	note: "prevents character overwrites",
	type: "string",
	op: "if(chardata.options == null) { chardata.options = {}; } if($(this).attr(\"value\").length > 0) { chardata.options.owner = $(this).attr(\"value\"); players_companion.owner = $(this).attr(\"value\"); } else { chardata.options.owner = null; players_companion.owner = null; }"
}, {
	name: "ext_data",
	description: "Extended data",
	note: "space-separated tag names, eg. phb2 monkey cheetah",
	type: "string",
	op: "if(chardata.options == null) { chardata.options = {}; } if($(this).attr(\"value\").length > 0) { chardata.options.ext_data = $(this).attr(\"value\"); } else { chardata.options.ext_data = null; }"
}]);
players_companion = {};
abilities = {
	"Str": { 
		name: "Strength",
		detail: "Strength measures your character's muscle and physical power. This ability is especially important for Fighters, barbarians, paladins, rangers, and monks because it helps them prevail in combat. Strength also limits the amount of equipment your character can carry.<p class=sub>You apply your character's Strength modifier to:<ul><li>Melee attack rolls.</li><li>Damage rolls when using a melee weapon or a thrown weapon (including a sling). (<i>Exceptions:</i> Off-hand attacks receive only one-half the character's Strength bonus, while two-handed attacks receive one and a half times the Strength bonus. A Strength penalty, but not a bonus, applies to attacks made with a bow that is not a composite bow.)</li><li>Climb, Jump, and Swim checks. These are the skills that have Strength as their key ability.</li><li>Strength checks (for breaking down doors and the like).</li></ul></p><p class=sub>Any creature that can physically manipulate other objects has at least 1 point of Strength. A creature with no Strength score can't exert force, usually because it has no physical body or because it doesn't move. The creature automatically fails Strength checks. If the creature can attack, it applies its Dexterity modifier to its base attack bonus instead of a Strength modifier.</p>"
	},
	"Dex": {
		name: "Dexterity",
		detail: "Dexterity measures hand-eye coordination, agility, reflexes, and balance. This ability is the most important one for rogues, but it's also high on the list for characters who typically wear light or medium armor (rangers and barbarians) or no armor at all (monks, wizards, and sorcerers), and for anyone who wants to be a skilled archer.<p class=sub>You apply your character's Dexterity modifier to:<ul><li>Ranged attack rolls, including those for attacks made with bows, crossbows, throwing axes, and other ranged weapons.</li><li>Armor Class (AC), provided that the character can react to the attack.</li><li>Reflex saving throws, for avoiding fireballs and other attacks that you can escape by moving quickly.</li><li>Balance, Escape Artist, Hide, Move Silently, Open Lock, Ride, Sleight of Hand, Tumble, and Use Rope checks. These are the skills that have Dexterity as their key ability.</li></ul></p><p class=sub>Any creature that can move has at least 1 point of Dexterity. A creature with no Dexterity score can't move. If it can perform actions (such as casting spells), it applies its Intelligence modifier to initiative checks instead of a Dexterity modifier. The creature automatically fails Reflex saves and Dexterity checks.</p>"
	},
	"Int": {
		name: "Intelligence",
		detail: "Intelligence determines how well your character learns and reasons. This ability is important for wizards because it affects how many spells they can cast, how hard their spells are to resist, and how powerful their spells can be. It's also important for any character who wants to have a wide assortment of skills.<p class=sub>You apply your character's Intelligence modifier to:<ul><li>The number of languages your character knows at the start of the game.</li><li>The number of skill points gained each level. (But your character always gets at least 1 skill point per level.)</li><li>Appraise, Craft, Decipher Script, Disable Device, Forgery, Knowledge, Search, and Spellcraft checks. These are the skills that have Intelligence as their key ability.</li></ul></p><p class=sub>A wizards gains bonus spells based on her Intelligence score. The minimum Intelligence score needed to cast a wizard spell is 10 + the spell's level.</p><p class=sub>An animal has an Intelligence score of 1 or 2. A creature of humanlike intelligence has a score of at least 3.</p><p class=sub>A character does not retroactively get additional skill points for previous levels if she increases her intelligence.</p><p class=sub>Any creature that can think, learn, or remember has at least 1 point of Intelligence. A creature with no Intelligence score is mindless, an automaton operating on simple instincts or programmed instructions. It has immunity to mind-affecting effects (charms, compulsions, phantasms, patterns, and morale effects) and automatically fails Intelligence checks.</p><p class=sub>Mindless creatures do not gain feats or skills, although they may have bonus feats or racial skill bonuses.</p>"
	},
	"Con": {
		name: "Constitution",
		detail: "Constitution represents your character's health and stamina. A Constitution bonus increases a character's hit points, so the ability is important for all classes.<p class=sub>You apply your character's Constitution modifier to:<ul><li>Each roll of a Hit Die (though a penalty can never drop a result below 1—that is, a character always gains at least 1 hit point each time he or she advances in level).</li><li>Fortitude saving throws, for resisting poison and similar threats.</li><li>Concentration checks. Concentration is a skill, important to spellcasters, that has Constitution as its key ability.</li></ul></p><p class=sub>If a character's Constitution score changes enough to alter his or her Constitution modifier, the character's hit points also increase or decrease accordingly.</p><p class=sub>Any living creature has at least 1 point of Constitution. A creature with no Constitution has no body or no metabolism. It is immune to any effect that requires a Fortitude save unless the effect works on objects or is harmless. The creature is also immune to ability damage, ability drain, and energy drain, and automatically fails Constitution checks. A creature with no Constitution cannot tire and thus can run indefinitely without tiring (unless the creature's detail says it cannot run).</p>"
	},
	"Cha": {
		name: "Charisma",
		detail: "Charisma measures a character's force of personality, persuasiveness, personal magnetism, ability to lead, and physical attractiveness. This ability represents actual strength of personality, not merely how one is perceived by others in a social setting. Charisma is most important for paladins, sorcerers, and bards. It is also important for clerics, since it affects their ability to turn undead. Every creature has a Charisma score.<p class=sub>You apply your character's Charisma modifier to:<ul><li>Bluff, Diplomacy, Disguise, Gather Information, Handle Animal, Intimidate, Perform, and Use Magic Device checks. These are the skills that have Charisma as their key ability.</li><li>Checks that represent attempts to influence others.</li><li>Turning checks for clerics and paladins attempting to turn zombies, vampires, and other undead.</li></ul></p><p class=sub>Sorcerers and bards get bonus spells based on their Charisma scores. The minimum Charisma score needed to cast a sorcerer or bard spell is 10 + the spell's level.</p><p class=sub>Any creature capable of telling the difference between itself and things that are not itself has at least 1 point of Charisma. Anything with no Charisma score is an object, not a creature. Anything without a Charisma score also has no Wisdom score.</p>"
	},
	"Wis": {
		name: "Wisdom",
		detail: "Wisdom describes a character's willpower, common sense, perception, and intuition. While Intelligence  represents one's ability to analyze information, Wisdom represents being in tune with and aware of one's surroundings. Wisdom is the most important ability for clerics and druids, and it is also important for paladins and rangers. If you want your character to have acute senses, put a high score in Wisdom. Every creature has a Wisdom score.<p class=sub>You apply your character's Wisdom modifier to:<ul><li>Will saving throws (for negating the effect of charm person and other spells).</li><li>Heal, Listen, Profession, Sense Motive, Spot, and Survival checks. These are the skills that have Wisdom as their key ability.</li></ul></p><p class=sub>Clerics, druids, paladins, and rangers get bonus spells based on their Wisdom scores. The minimum Wisdom score needed to cast a cleric, druid, paladin, or ranger spell is 10 + the spell's level.</p><p class=sub>Any creature that can perceive its environment in any fashion has at least 1 point of Wisdom. Anything with no Wisdom score is an object, not a creature. Anything without a Wisdom score also has no Charisma score.</p>"
	}
};
alignments = [ 'Lawful', 'Neutral', 'Chaotic' ];
goodness = [ 'Good', 'Neutral', 'Evil' ];
function calc_ability_score(ability, race_name) {
	var race = races.first( {
		name : race_name
	});
	var race_mod = race.abilities[ability];
	var ability_score = chardata['abilities'] != null && chardata['abilities'][ability] != null && chardata['abilities'][ability].length > 0 ? chardata['abilities'][ability] : 0;
	return parseInt(ability_score) + parseInt(race != false && race_mod != null ? race_mod : 0) + calc_equip_mod(ability);
}

function calc_equip_mod(key) {
	return parseInt(equipment_benefits[key] == null ? 0 : equipment_benefits[key]);
}

// TODO - move to prototype
function remove(arr, index) {
	if(index > -1) {
		arr.splice(index, 1);
		arr = arr.slice();
	}
}

/**
 * @return large number id as hex string
 */
function generate_id(){return Math.floor(Math.random()*4294967295).toString(16);}

function toggle_visible(section, hide) {
	$("#" + section).toggle(hide);
	var hidden = $('#' + section).is(":hidden");
	$("#" + section + '_expand_flag').html(hidden ? "<img src='images/collapsed.png'/>" : "<img src='images/expanded.png'/>");	
}

function calc_ability_modifier(score) {
	return Math.ceil((score - 11) / 2) | 0;
}

function set_links_part(page_id) {
//	// console.group("set_links_part");
	var classes_html = "";
	var is_spellpicker = false;
	for (var classname in chardata.classes) {
		is_spellpicker = spellpickers.indexOf(classname) > -1 ? true : is_spellpicker;
		var class_shortname = classes.first( {
			name : classname
		}).shortname;
		classes_html += "<td id='view_class_" + classname + "' style='color: blue;text-align: right; vertical-align: top' nowrap><a class='fake_link view' onclick='var level_diff=(calc_level()+1)-calc_current_level(); show_class_dialog(level_diff,0);'>" + class_shortname + "</a><sub>" + (chardata.classes[classname].level + 1) + "</sub></td>";
	}

	var race = races.first( {
		name : chardata.race_name
	});
//	// console.log("skills length (before): %d", chardata.skills ? chardata.skills.get().length : 0);
	links_html = "<table padding='0' cellpadding='1' margin='0'><tr>";
	allviews = views.get();
	for (k in allviews) {
		// exclude spells link if class doesn't have any
		if (allviews[k].name == 'spells' && !is_spellpicker) {
			continue;
		}

		if (allviews[k].id == page_id) {
			links_html += "<td class='view'><b>" + allviews[k].name + "</b></td>";
			document.title = allviews[k].title;
		} else {
			links_html += "<td class='view' style='vertical-align: top'><a id='view_" + allviews[k].id + "' class='view' onclick='switch_content(" + allviews[k].id + ", chardata)'>" + allviews[k].name + "</a></td>";
		}
	}
	var characters = get_all_characters();
	var existing_chars_html = "";
	for(var i in characters) {
		if(characters[i].name != null && characters[i].name.length > 0 && characters[i].name != chardata.name) {
			// TODO - save selected character as last used and reload
			existing_chars_html += "<li id='" + characters[i].name + "' onclick=\"players_companion.last_character='" + characters[i].name + "'; sav(players_companion, 'players_companion'); window.location.reload();\" >" + characters[i].name + "</li>";			
		}
	}
	if(existing_chars_html.length > 0) {
		existing_chars_html = "<li class='sep'><hr /></li>" + existing_chars_html;
	}
	//<a id='save' class='btn box' onclick='import_character()'>&nbsp;load&nbsp;</a></td>
			// 
	$('#linkspart').html(links_html	+ "<td class='view'>" + 
			"<td class='view'><ul id='file'><li class='btn box'>&nbsp;char&nbsp;<ul><li id='load'>load</li><li></li><li id='new'>new</li><li></li><li id='log'>log</li><li></li><li id='options'>options</li><li></li><li id='sheet'>sheet</li><li></li>" + existing_chars_html + "</ul></ul></td>" +
			"<td class='view' style='color: blue;width: 100%;text-align: right;' nowrap>" + race.shortname + "</td>" +
			classes_html +
			"</tr></table>");
	if (calc_level() - calc_current_level() > 0) {
		$("td[id^='view_class']").css("font-weight", "bold");
	} else {
		$("td[id^='view_class']").css("font-weight", "");
	}
	$("#file").clickMenu();
	$("#load").bind("click", function(e){
		return import_character();
	});
//	// console.log("skills length (after): %d", chardata.skills ? chardata.skills.get().length : 0);

	$("#new").bind("click", function(e){
		// document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString()
		char_classes = [];
		equipment_benefits = [];
		chardata = {
			options: {}
		};
		players_companion.last_character = "";
		chardata.options.owner = players_companion.owner;
		sav(players_companion, 'players_companion');
		do_edit();	
	});
	$("#log").bind("click", function(e){
		return update_log();
	});
	$("#options").bind("click", function(e){
		return update_options();
	});
	$("#sheet").click(function(e){
		set_links_part(-1);
		$("#root_container").css("width", "768px");
		$("#content").html(character_sheet);
		populate_character_sheet();
	});
//	for (var i in characters) {
//		var nam = characters[i].name;
//		if(nam.length == 0) {
//			var race_name = races.first({ name: characters[i].race_name }).shortname;
//			var class_name = classes.first({ name: characters[i].class_name }).shortname;
//			nam = race_name + "_" + class_name;

	
//		}
//		$("#" + nam).bind("click", {nam: nam}, function(e){
//			return lod("ch_" + nam);
//		});
//	}
//	// console.groupEnd();
}

function switch_content(view_id, chardata) {
	if (view_id == 0) {
		do_main();
	} else if (view_id == 1) {
		do_edit();
	} else if (view_id == 2) {
		do_feats();
	} else if (view_id == 3) {
		do_spells();
	} else if (view_id == 4) {
		do_equipment();
	}
}

function populate_object(obj, name, value) {
	obj[name] = value;
	return obj;
}

function count_attrs(obj) {
	var count = 0;
	for (k in obj) { if (obj.hasOwnProperty(k)) { count++; } }
	return count;
}

// TODO - this is a mess, as you knew it would be
function create_select(name, items, onchange_action, include_empty, extra_data, category_filter, selected_value) {
	var html = "<select id='" + name + "' onchange=\"" + onchange_action + "\" " + (extra_data || "") + ">";
	if (include_empty) {
		html += "<option id='add_new' value='-1'>Add new " + name.substring(0, name.indexOf('_')) + "</option>";
	}
	for (var i in items) {
		if(category_filter == null || items[i].category == category_filter) {
			var selected = (selected_value != null && selected_value == items[i]._id ? " selected" : "");
			html += "<option id='" + name + "_option_" + items[i]._id + "' value='" + items[i].name + "'" + selected + ">" + items[i].name + "</option>";
		}
	}
	html += "</select>";

	return html;
}

function create_select1(name, items, onchange_action, selected_value, extra_data) {
	var html = "<select id='" + name + "' onchange='" + onchange_action + "' " + (extra_data ? extra_data : "") + ">";
	for (var i in items) {
		var selected = (selected_value != null && selected_value == items[i]._id ? " selected" : "");
		html += "<option id='" + name + "_option_" + items[i]._id + "' value='" + items[i]._id + "'" + selected + ">" + items[i].name + "</option>";
	}
	html += "</select>";

	return html;
}

function pos(number) {
	return (isFinite(number)) && (number > 0) ? "+" + number : number;
}

function calc_level(xp) {
	if(xp == null) {
		xp = chardata.xp == null ? 0 : chardata.xp;
	} 
	// calcluates the "functional" level (for array offsets)
	var level = (Math.floor((1 + Math.sqrt(xp / 125 + 1)) / 2)) - 1;
	return level;
}

function calc_init(dex_score) {
	init = 0;
	var char_feats = get_char_feats();
	char_feats.get({ init : { "!is": null } }).forEach( function(feat, i) {
		init = feat.init(init);
		return init;
	});

	return calc_ability_modifier(dex_score) + init;
}

function calc_ref(dex_score, class_name, xp, char_feats) {
	var class_ref_score = calc_save("ref_save");	
	
	var ref = 0;
	var char_feats = get_char_feats();
	char_feats.get({ ref : { "!is": null } }).forEach( function(feat, i) {
		ref = feat.ref(ref);
		return ref;
	});
	
	return calc_ability_modifier(dex_score) + class_ref_score + ref + calc_equip_mod('Ref');
}

function calc_will(wis_score, class_name, xp, char_feats) {
	var class_will_score = calc_save("will_save");	

	var feat_mod = 0;
	var char_feats = get_char_feats();
	char_feats.get({ will : { "!is": null } }).forEach( function(feat, i) {
		feat_mod = feat.will(feat_mod);
		return feat_mod;
	});
	
	return calc_ability_modifier(wis_score) + class_will_score + feat_mod + calc_equip_mod('Will');
}

function calc_fort(con_score) {
	var class_fort_score = calc_save("fort_save");	
	var feat_mod = 0;
	var char_feats = get_char_feats();
	char_feats.get({ fort : { "!is": null } }).forEach( function(feat, i) {
		feat_mod = feat.fort(feat_mod);
		return feat_mod;
	});
	return calc_ability_modifier(con_score) + class_fort_score + feat_mod + calc_equip_mod('Fort');
}

function calc_ac(dex_score) {
	// TODO - include feats
	var ac = 0;
	var char_feats = get_char_feats();
	char_feats.get({ ac : { "!is": null } }).forEach( function(feat, i) {
		ac = feat.ac(ac);
		return ac;
	});
	var armor_bonus = calc_armor_bonus(chardata.armors, armors, "armor");
	var shield_bonus = calc_armor_bonus(chardata.shields, shields, "shield");
	// TODO - move to ac: in classes
	var monk_mod = chardata.classes["Monk"] != null ? classes.first({ name: "Monk" }).ac_bonus[calc_level()] : 0;
	return 10 + armor_bonus.bonus + Math.min(calc_ability_modifier(dex_score), armor_bonus.max_dex_bonus) + shield_bonus.bonus + calc_size_mod(chardata.race_name) + monk_mod + calc_equip_mod('AC') + ac;
}

/**
 * Returns the aggregated armor bonus of all character's armor, and the minimum
 *  max_dex_bonus of all armor pieces
 * @param char_armor
 * @return [armor_bonus, max_dex_bonus]
 */
function calc_armor_bonus(char_armor, db, dammit) {
	var max_dex_bonus = null;
	var armor_bonus = 0;
	if (char_armor != null) {
		for (i in char_armor) {
			armordata = db.first( {
				name : char_armor[i][dammit + "_name"]
			});

			if(armordata.bon != '-') {
				armor_bonus += parseInt(armordata.bon);
			}
			if(armordata.max_dex_bonus != '-') {
				max_dex_bonus = (max_dex_bonus == null ? parseInt(armordata.max_dex_bonus) : Math.min(max_dex_bonus, parseInt(armordata.max_dex_bonus)));
			}
		}
	}
	return {bonus: armor_bonus, max_dex_bonus: (max_dex_bonus == null ? 50 : max_dex_bonus)};
}

function calc_size_mod(race_name) {
	size = races.first( {
		name : race_name
	}).size;

	return (size == "small" ? 1 : 0);
}

function calc_damage(weapon, ability_score, char_feats, char_weapon) {
	// console.group("calc_damage");
	/*
	 * When your attack succeeds, you deal damage. The type of weapon used (see
	 * Table 7-5: Weapons, page 116) determines the amount of damage you deal.
	 * Effects that modify weapon damage apply to unarmed strikes and the
	 * natural physical attack forms of creatures. Damage reduces a target's
	 * current hit points. Minimum Damage: If penalties reduce the damage result
	 * to less than 1, a hit still deals 1 point of damage. Strength Bonus: When
	 * you hit with a melee or thrown weapon, including a sling, add your
	 * Strength modifier to the damage result. A Strength penalty, but not a
	 * bonus, applies on attacks made with a bow that is not a composite bow.
	 * Off-Hand Weapon: When you deal damage with a weapon in your off hand, you
	 * add only 1/2 your Strength bonus. Wielding a Weapon Two-Handed: When you
	 * deal damage with a weapon that you are wielding two-handed, you add 1-1/2
	 * times your Strength bonus. However, you don't get this higher Strength
	 * bonus when using a light weapon with two hands (see Light, One-Handed,
	 * and Two-Handed Melee Weapons, page 113). Multiplying Damage: Sometimes
	 * you multiply damage by some factor, such as on a critical hit. Roll the
	 * damage (with all modifiers) multiple times and total the results. Note:
	 * When you multiply damage more than once, each multiplier works off the
	 * original, unmultiplied damage (see Multiplying, page 304). Exception:
	 * Extra damage dice over and above a weapon's normal damage, such as that
	 * dealt by a sneak attack or the special ability of a flaming sword, are
	 * never multiplied. For example, Krusk the half-orc barbarian has a
	 * Strength bonus of +3. That means he gets a +3 bonus on damage rolls when
	 * using a longsword, a +4 bonus on damage when using a greataxe (two-
	 * handed), and a +1 bonus to damage when using a weapon in his off hand.
	 * His critical multiplier with a greataxe is -3, so if he scores a critical
	 * hit with that weapon, he would roll 1d12+4 points of damage three times
	 * (the same as rolling 3d12+12). Ability Damage: Certain creatures and
	 * magical effects can cause temporary ability damage (a reduction to an
	 * ability score). The Dungeon Master's Guide has details on ability damage.
	 */
	var damages = [];
	var weapon_damage = (char_weapon != null && char_weapon.dam != null ? char_weapon.dam.toString() : weapon.dam.toString()).split('/');
	for(var i in weapon_damage) {
		var dam_components = weapon_damage[i].split(/\+|-/);
		var die = dam_components[0];
		var weapon_mod = dam_components.length > 1 ? parseInt(dam_components[1]) : 0;
		damages.push({ die: die, mod: weapon_mod });
	}
	
	var char_feats = get_char_feats();
	char_feats.get({ damage : { "!is": null } }).forEach( function(feat, i) {
		// console.log("damage: " + feat.name);
		damages = feat.damage(damages, weapon);
		return damages;
	});

	var damage = '';
	var strength_damage = calc_ability_modifier(ability_score);
	// Strength penalty, but not a bonus, applies on attacks made with a bow that is not a composite bow.
	if(weapon.name == "Shortbow" || weapon.name == "Longbow") {
		strength_damage = Math.min(strength_damage, 0);
	}
	for(var i in damages) {
		var foo = pos(Math.max(strength_damage + damages[i].mod + parseInt($('#damage_mod').text()) + calc_equip_mod('Dam')), 1);
		damage += damages[i].die + (foo > 0 ? foo : "");
		damage += (parseInt(i) + 1 < damages.length ? '/' : '');
	}
	// console.groupEnd();
	return damage;
}

function show_dialog(title, content, save_on_close, close_fn, opts) {
	// close dialog when clicking outside of it
	$(".ui-widget-overlay").live("click", function() {  $("#mydialog").dialog("close"); } );
	if(save_on_close) {
		$("#mydialog").bind('dialogclose', function() { save_character(); });
	}
	if(close_fn) {
		$("#mydialog").bind('dialogclose', function() { eval(close_fn); });		
	} else {
		$("#mydialog").unbind('dialogclose');
	}
	$("#mydialog").html(content);
	var options = {
		modal: true,
		autoOpen: false,
		title: title,
		position: [50,50],
		width:320
	};
	$.extend(options, opts)
	$("#mydialog").dialog(options);
	$("tr[class='detail'][class!='header']:even").addClass("even_row");
	//	$(".editinplace").editInPlace({});
	$("#mydialog").dialog('open');
	$("tr[class='detail']:even").removeClass("even_row");
	return false;
}

function show_item_detail(table, obj_id) {
	var obj = null;
	if(table.hasOwnProperty("find")) {
		obj = table.first( {
			_id : obj_id
		});
	} else {
		obj = table[obj_id];
	}
	var content = '';
	var title = obj.name;
	jQuery.each(obj, function(name, value) {
		if (value == null || value.toString().length == 0 || name == "_id" || name == "_rev" || name ==  "classes" || name ==  "type" || name ==  "prereqs" || name ==  "benefit" || name ==  "conditional" || name == "multi" || name == "inform" || name == "abbrev" || name == "skill_classes" || name == "attack" || name == "damage" || name == "spells") {
			return;
		} else if (name != 'detail' && name != 'name' && name != 'class_data' && name != 'description' && name != 'op') {
			if (name == 'ability_id') {
				name = "Ability";
				value = abilities[value].name;
			} else if (name == "synergies") {
				if (value.length > 0) {
					value = value.join(", ");
				}
			} else if (name == "feats") {
				var count = 0;
				var related_feats = '';
				for (var i in value) {
					related_feats += i;
					count++;
				}
				value = related_feats;
			} else if (name == "tags") {
				if (value.length > 0) {
					value = value.join(", ");
				}
			} else if (name == "skills") {
				var skill_data = "";
				var i=0;
				var skills_count = count_attrs(value);
				for(skill_name in value) {
					skill_data += skill_name + " " + pos(value[skill_name]);
					i++;
					skill_data += i < skills_count ? ", " : "";
				}
				value = skill_data;
			}

			content += '<b>' + capitalize(name).replace(/_/g, ' ') + '</b>: ' + value + '<br/>';
		}
	});
	if(obj.detail != null) {
		// TODO - get a better way
		content += '<br/>' + obj.detail.replace(/%class%/g, "class");
	}

	show_dialog(title, content);
}

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function klone(o) {
	if (typeof (o) != 'object') return o;
	if (o == null) return o;

	var newO = new Object();

	for ( var i in o)
		newO[i] = klone(o[i]);
	return newO;
}

function htmlize(text)  {
	if(text) {
		var replacement_text = text.replace(/\n/g,'<br/>');
		replacement_text = replacement_text.replace(/--/g, "&ndash;");
	}
	return replacement_text || "";
}
function dehtmlize(text)  {
	if(text) {
		var replacement_text = text.replace(/<br\/>/g,'\n');
		replacement_text = replacement_text.replace(/&ndash;/g, "--");
	}
	return replacement_text || "";
}

function parse_character_data(data) {
	if(!TAFFY.isObject(data)) {
		// strip off the log entries
		var log_data = null;
		var log_separator = data.indexOf('``');
		if(log_separator > 0) {
			log_data = data.substring(data.indexOf('``') + 2);
			data = data.substring(0, data.indexOf('``'));
		} 
		data = TAFFY.JSON.parse(unescape(data)) || {};
	}
	parse_taffy_data(data);
	// all arrays have to be reconstituted manually
	// armor
	if (data.armors) {
		var char_armor = [];
		for (var armor_idx in data.armors) {
			char_armor.push(data.armors[armor_idx]);
		}
		data.armors = char_armor;
	}
	// shields
	if (data.shields) {
		var char_shields = [];
		for (var shield_idx in data.shields) {
			char_shields.push(data.shields[shield_idx]);
		}
		data.shields = char_shields;
	}
	// weapons
	if (data.weapons) {
		var char_weapons = [];
		for (var weapon_idx in data.weapons) {
			char_weapons.push(data.weapons[weapon_idx]);
		}
		data.weapons = char_weapons;
	}
	// abilities
	if (data.abilities) {
		var char_abilities = [];
		for (ability_idx in data.abilities) {
			char_abilities.push(data.abilities[ability_idx]);
		}
	}
	
	// log
	if(data.log) {
		var log = [];
		for(var entry in data.log) {
			log.push(data.log[entry]);
		}
		data.log = log;
	}
	
	// rogue special abilities
	if(data.rogue_special_abilities) {
		var rogue_special_abilities = [];
		for(var i in data.rogue_special_abilities) {
			rogue_special_abilities.push(data.rogue_special_abilities[i]);
			if(data.rogue_special_abilities[i].multi) {
				var multi = [];
				for(var j in data.rogue_special_abilities[i].multi) {
					multi.push(data.rogue_special_abilities[i].multi[j]);
				}
				rogue_special_abilities[i].multi = multi;
			}
		}
		data.rogue_special_abilities = rogue_special_abilities;
	}
	
	// languages
	if (data.languages) {
		var char_languages = [];
		for (var lang_idx in data.languages) {
			char_languages.push(data.languages[lang_idx]);
		}
		data.languages = char_languages;
	}
	
	// equipment
	if(data.equipment) {
		var char_equipment = [];
		for(var i in data.equipment) {
			char_equipment.push(data.equipment[i]);
			if(data.equipment[i].benefits) {
				var benefits = [];
				for(var j in data.equipment[i].benefits) {
					benefits.push(data.equipment[i].benefits[j]);
				}
				char_equipment[i].benefits = benefits;
			}
		}
		data.equipment = char_equipment;
	}

	// favored enemies
	if (data.favored_enemies) {
		var favored_enemies = [];
		for (var f_e_idx in data.favored_enemies) {
			favored_enemies.push(data.favored_enemies[f_e_idx]);
		}
		data.favored_enemies = favored_enemies;
	}
 
	// favored enemies
	if (data.domains) {
		var char_domains = [];
		for (var domain_idx in data.domains) {
			char_domains.push(data.domains[domain_idx]);
		}
		data.domains = char_domains;
	}
	
	// classes
	// data.classes = reconstitute_array(data.classes);
	if (data.classes) {
		for (var classname in data.classes) {
			// spells
			if (data.classes[classname].spells) {
				var char_spells = [];
				for (var spell_lvl_idx in data.classes[classname].spells) {
					char_spells.push( []);
					for (var char_spell in data.classes[classname].spells[spell_lvl_idx]) {
						char_spells[parseInt(spell_lvl_idx)].push(data.classes[classname].spells[spell_lvl_idx][char_spell]);
					}
				}
			}
			data.classes[classname].spells = char_spells;
		}
	}
	
	if (log_data) {
		var log_entries = log_data.split('`');
		for (var i = 0; i < log_entries.length; i++) {
			var entry = TAFFY.JSON.parse(unescape(log_entries[i]));
			sav(entry, "log_" + data.name + "_" + entry.id);
		}
	}
	
	return data;
}

function reconstitute_array(array_obj, attr_name) {
	var array = null;
	if(array_obj) {
		var array = [];
		for (var i in array_obj) {
			array.push(array_obj[i]);
		}
	}
	return array;		
}

function export_character() {

	var cookie_data = get_cookie_data("ch_" + chardata.name);
	if (cookie_data.length > 0) {
		if(chardata.log != undefined && chardata.log.length > 0) {
			// add log entries delimiter
			cookie_data += "``";
			for ( var i = 0; i < chardata.log.length; i++) {
				cookie_data += TAFFY.JSON.stringify(get_log_entry(chardata.log[i])) + (i + 1 < chardata.log.length ? "," : "");
			}
		}
		show_dialog("character export", "Copy the below string to save your character:\n" + cookie_data);
	} else {
		alert("No character data to export");
	}
}

function get_all_characters() {
	var characters = [];
	if (document.cookie.length > 0) {
		var cookies = document.cookie.split("; ");
		for(var i in cookies) {
			if(cookies[i].indexOf("ch_") == 0) {
				var data = cookies[i].substring(cookies[i].indexOf("=") + 1);
				characters.push(parse_character_data(data));
			}
		}
	}
	
	return characters;
}
/*function save(table, obj, key) {
	var row = table.first({
		id: key
	});
	
	if(row) {		
		table.update(obj, { id: key });
	} else {
		table.insert(obj);
	}
}*/

function intersection(setA, setB) {
	var setA_seen = {};
	var setB_seen = {};
	for ( var i = 0; i < setB.length; i++) {
		setB_seen[setB[i]] = true;
	}

	var intersection = [];
	for ( var i = 0; i < setA.length; i++) {
		if (!setA_seen[setA[i]]) {
			setA_seen[setA[i]] = true;
			if (setB_seen[setA[i]]) {
				intersection.push(setA[i]);
			}
		}
	}
	return intersection;
};

function update_options(message) {
	var curr_opts = chardata['options'];
	var title = "Options";
	var content = "<table>";
	var string_options = options.get({ type: "string" });
	if(string_options.length > 0) {
		content += "<table>";
		if(message) {
			content += "<tr><td colspan=2>" + message + "</td></tr>";
		}
		for(var option in string_options) {
			content += "<tr><td rowspan=2 valign=top>" + string_options[option].description + ":</td><td valign=top><input id='option_" + string_options[option].name + "' type='text' onblur='" + string_options[option].op + "'" + (chardata['options'] != null && chardata['options'][string_options[option].name] != null ? " value='" + chardata['options'][string_options[option].name] + "'" : "") + "</td></tr><tr><td valign=top style='color: #D0D0D0'>" + (string_options[option].note || "") + "</td></tr>";
		}
		content += "</table>";
	}
	var boolean_options = options.get({ type: "boolean" });
	if(boolean_options.length > 0) {
		content += "<table>";
		for(var option in boolean_options) {
			content += "<tr><td><input id='option_" + boolean_options[option].name + "' type='checkbox' onclick='" + boolean_options[option].op + "'" + (chardata['options'] != null && chardata['options'][boolean_options[option].name] == true ? ' checked' : '') + " style='vertical-align: top;'/></td><td>" + boolean_options[option].description + "</td></tr>";			
		}
		content += "</table>";
	}
	content += "</table><hr style='width: 0px'/><center style='font-size: xx-small;'><fieldset>If you enjoy this tool, please leave a comment on the blog (bugs + feature requests most welcome)</fieldset></center><br>";
	content += "<a href='http://charactermanager.blogspot.com/' target='_blank' style='float: right;font-size: xx-small;'>Player's Companion Blog</a><a href='http://code.google.com/p/charactermanager/issues' target='_blank' style='font-size: xx-small;'>Project Page</a><span style='font-size: xx-small;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v0.6</span>";
	show_dialog(title, content, true);
	return false;
}
function is_class_feat(feat_name) {
	return get_class_feat_names().indexOf(feat_name) > -1;
}

function get_class_feat_names() {
	var class_feats = [];
	for (var classname in chardata.classes) {
		var clazz = classes.first({ name : classname });
		for (var level in clazz.feats) {
			if(chardata.classes[classname].level >= level) {
				class_feats = class_feats.concat(clazz.feats[level]);
			}
		}
	}
	return class_feats;
}

function get_class_feats() {
	var class_feats = [];
	var feat_names = get_class_feat_names();
	for(var i in feat_names) {
		class_feats = class_feats.concat(feats.first({ name: feat_names[i] }));
	}
	return class_feats;
}

function get_all_char_feats() {
	return chardata.feats ? chardata.feats.get().concat(get_class_feats()) : get_class_feats();
}

function get_special_abilities() {
	var special_abilities = [];
	for (var classname in chardata.classes) {
		var class_specials = classes.first({ name: classname }).specials;
		for(var level=0; level<=chardata.classes[classname].level; level++) {
			for(var item=0; item<class_specials[level].length; item++) {
				var class_special = specials.first({ name: class_specials[level][item].special_name });
				if(class_special.supersedes) {
					// remove specials that are superseded
					for(var supersede in class_special.supersedes) {
						special_abilities[class_special.supersedes[supersede]] = null;
					}
				}
				// overwrite improved special abilities
				special_abilities[class_specials[level][item].special_name] = class_special;
				special_abilities[class_specials[level][item].special_name].mod = class_specials[level][item].mod;
			}
		}
	}
	// add in rogue specials
	var rogue_special_abilities = chardata.rogue_special_abilities;
	for(var i in rogue_special_abilities) {
		if(rogue_special_abilities[i].special_name != "Skill Mastery") {
			var class_special = specials.first({ name: rogue_special_abilities[i].special_name });
			special_abilities[rogue_special_abilities[i].special_name] = class_special; 
		}
	}
	return special_abilities;
}

function create_selector_grid(items, anchor_table, click_fn, populate_data, cols, use_text_link) {
	if(cols == null) {
		cols = 2;
	}
	if(use_text_link == null) {
		use_text_link = true;
	}
	if(items.length == 0) {
		$(anchor_table).html("");
	} else {
		for (var i = 0; i < items.length; i++) {
			if (i % cols == 0) {
				$(anchor_table).append("<tr id='" + items[i].type + "_" + ((i / cols) | 0) + "'></tr>");
			}
			display_name = use_text_link ? "<a class='fake_link' onclick=\"show_item_detail(" + items[i].type + "s, '" + items[i]._id + "')\">" + items[i].name + "</a>" : "<label for='" + items[i]._id + "'>" + items[i].name + "</label>";
	
			$("tr#" + items[i].type + "_" + ((i / cols) | 0)).append("<td><input id='" + items[i]._id + "' type='checkbox'/>" + display_name + "</td>");
			if(populate_data.indexOf(items[i].name) > -1) {
				$("input#" + items[i]._id).attr("checked", "checked");
			}
																														
			
			$("input#" + items[i]._id).bind('click', {
					item: items[i]
			}, function(e){
				return click_fn(e.data.item, $(this).attr('checked'));
			});
		}
	}
}

function create_selector_group(item, title, all_options, option_db, cols, click_fn){
	var html = "<tr id='" + item._id + "_sub_'><td colspan='" + cols + "'></td><td><table id='" + item._id + "_sub_'></table></td></tr>";
	$("#" + item._id + "_sub").after(html);
	
	// layout options 2-per-row	
	for (var i = 0; i < all_options.length; i++) {
		if (i % cols == 0) {
			$("table[id='" + item._id + "_sub_']").append("<tr id='" + item._id + "_sub_" + ((i / cols) | 0) + "'></tr>");
		}
		// use the abbreviation if available
		//		var display_name = all_options[i].abbrev ? all_options[i].abbrev : all_options[i].name;
		display_name = "<label for='" + item._id + "_" + all_options[i]._id + "'>" + all_options[i].name + "</label>";
		
		$("tr#" + item._id + "_sub_" + ((i / cols) | 0)).append("<td><input id='" + item._id + "_" + all_options[i]._id + "' type='checkbox'/>" + display_name + "</td>");
		
		$("input#" + item._id + "_" + all_options[i]._id).bind('click', {
			item: item,
			name: all_options[i].name
		}, function(e){
			return click_fn(e.data.item, $(this).attr('checked'), e.data.name, option_db);
		});
	}
}

function calc_current_level() {
	var curr_level = 0;
	for (var classname in chardata.classes) {
		curr_level += chardata.classes[classname].level + 1;
	}
	return curr_level;
}

function calc_save(type) {
	var save = 0;
	for (var classname in chardata.classes) {
		save += classes.first({ name: classname })[type][chardata.classes[classname].level];
	}
	
	return save;
}

function is_empty(object) { for(var i in object) { return false; } return true; }

function calc_attack(base_attack_bonuses, weapon, char_weapon, str_score, dex_score, other_mod) {
	// console.group("calc_attack");
	var attack_override = 0;
	if(char_weapon && char_weapon.att) {
		attack_override = parseInt(char_weapon.att);
	}
		
	// TODO - maybe remove weapon proficiency and just modify the BAB
	var attacks = {
		base: base_attack_bonuses,
		weapon_proficiency: -4,
		acp: 0
	};

	// apply strength score to composite weapons if strength > dex
	if(weapon.usage == 'ranged') {
		if(weapon.name.indexOf('Composite') > -1) {
			attacks.ability_score = Math.max(str_score, dex_score);
		} else {
			attacks.ability_score = dex_score;
		}                             
	} else {
		attacks.ability_score = str_score;
	}

	
	attacks.acp = calc_armor_acp(chardata.armors);
	attacks.acp += calc_shield_acp(chardata.shields);
	
	var char_feats = get_char_feats();
	// have feats modify the attacks
	char_feats.get({ attack : { "!is": null } }).forEach( function(feat, i) {
			// TODO - can we do this by reference
		// console.log("attack: " + feat.name);
		attacks = feat.attack(attacks, weapon);
		return attacks;
	});

	attacks.base = calc_base_attack(base_attack_bonuses, attacks.ability_score, other_mod);

	// Melee Attack Roll: 1d20 + base attack bonus + Strength modifier + size modifier.
	// Ranged Attack Roll: 1d20 + Base attack bonus + Dexterity modifier + size modifier + range penalty

	// recompose with modifiers thrown in
	var modified_attacks = [];
	for (var i in attacks.base) {
		modified_attacks.push(pos(attack_override + parseInt(attacks.base[i]) + attacks.weapon_proficiency + attacks.acp));
	}

	// console.groupEnd();
	return modified_attacks.join("/");
}

function calc_base_attack(base_attack_bonuses, ability_score, other_mod) {
		other_mod = other_mod ? parseInt(other_mod) : 0;
		return base_attack_bonuses.map(function(x) { return x + calc_ability_modifier(ability_score) + calc_size_mod(chardata.race_name) + other_mod + calc_equip_mod('Att'); });
}

function calc_cmb(base_attack_bonuses, other_mod) {
	var cmb = "";
	other_mod = other_mod ? parseInt(other_mod) : 0;
	var babs = base_attack_bonuses.map(function(x) { return x + calc_ability_modifier(chardata.abilities["Str"]) + calc_size_mod(chardata.race_name) + other_mod + calc_equip_mod('Att'); });
	for(var i=0; i<babs.length; i++) {
		cmb += i + 1 < babs.length ? "/" : "";
	}
	return cmb;
}

function calc_cmd(base_attack_bonuses, other_mod) {
	var cmd = "";
	other_mod = other_mod ? parseInt(other_mod) : 0;
	var babs = base_attack_bonuses.map(function(x) { return x + calc_ability_modifier(chardata.abilities["Str"]) + calc_ability_modifier(chardata.abilities["Dex"]) + calc_size_mod(chardata.race_name) + other_mod + 10; });
	for(var i=0; i<babs.length; i++) {
		cmd += i + 1 < babs.length ? "/" : "";
	}
	return cmd
}
