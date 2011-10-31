var $, TAFFY, classes;

if (typeof exports === "object") {
  TAFFY = require("../lib/taffy").taffy;
  $ = require("jquery");
  classes = require("./resources/classes");
}

this.update_weapon = function(name, index) {
  var weapon;
  weapon = weapons.first({
    name: name
  });
  $("#" + name + index + "dam").value = weapon.damage;
  return $("#" + name + index + "crit").value = weapon.critical;
};

this.calc_total_base_feats_count = function(race_name, char_classes) {
  var base_feat_count, base_feats, classdata, classname, level, _ref;
  base_feat_count = (race_name === "Human" ? 1 : 0);
  base_feats = [0, 2, 5, 8, 11, 14, 17];
  for (classname in char_classes) {
    classdata = char_classes[classname];
    for (level = 0, _ref = classdata.level; 0 <= _ref ? level <= _ref : level >= _ref; 0 <= _ref ? level++ : level--) {
      base_feat_count += (base_feats.indexOf(level) > -1 ? 1 : 0);
    }
  }
  return base_feat_count;
};

this.calc_total_class_feats_count = function(char_classes) {
  var class_feat_count, class_feats, classdata, classname, level, _ref;
  console.log(classes);
  class_feat_count = 0;
  for (classname in char_classes) {
    classdata = char_classes[classname];
    class_feats = classes({
      name: classname
    }).first().bonus_feats_levels;
    for (level = 0, _ref = classdata.level; 0 <= _ref ? level <= _ref : level >= _ref; 0 <= _ref ? level++ : level--) {
      class_feat_count += (~class_feats.indexOf(level) ? 1 : 0);
    }
  }
  return class_feat_count;
};

this.calc_armor_acp = function(char_armors) {
  var acp, armor, i;
  acp = 0;
  for (i in char_armors) {
    armor = armors.first({
      name: char_armors[i].armor_name
    });
    acp += armor.acp;
  }
  return acp;
};

this.calc_shield_acp = function(char_shields) {
  var acp, i, shield;
  acp = 0;
  for (i in char_shields) {
    shield = shields.first({
      name: char_shields[i].shield_name
    });
    acp += shield.acp;
  }
  return acp;
};

this.calc_skill_mod = function(skill, skill_ability_score, acp, subtype) {
  var char_skill, char_skill_points, feat_mod, max_ranks, race, race_mod, ranks, skill_focus, synergy_mod;
  acp = acp | 0;
  char_skill_points = 0;
  char_skill = false;
  if (chardata.skills != null) {
    char_skill = chardata.skills.first({
      skill_name: skill.name
    });
  }
  if (char_skill) {
    char_skill_points = char_skill.ranks;
    if (subtype && char_skill.subtypes) {
      char_skill_points = char_skill.subtypes[subtype];
    }
  }
  race = races.first({
    name: chardata.race_name
  });
  feat_mod = 0;
  get_all_char_feats().forEach(function(char_feat, i) {
    var feat;
    feat = feats.first({
      name: char_feat.feat_name
    });
    if (feat.skills && feat.skills[skill.name]) {
      feat_mod += feat.skills[skill.name];
    }
    if (skill.mobility && feat.mobility) return acp = feat.mobility(acp);
  });
  if (chardata.feats) {
    skill_focus = chardata.feats.first({
      feat_name: "Skill Focus"
    });
    if (skill_focus && skill_focus.multi && jQuery.inArray(skill.name, skill_focus.multi) > -1) {
      feat_mod += 3;
    }
  }
  race_mod = (race.skills[skill.name] != null ? race.skills[skill.name] : 0);
  ranks = calc_ranks(char_skill_points, skill, subtype);
  synergy_mod = calc_synergies(skill);
  max_ranks = calc_ranks(calc_level() + 4, skill, subtype);
  return Math.min(Math.floor(max_ranks), ranks) + calc_ability_modifier(parseInt(skill_ability_score)) + synergy_mod + race_mod + feat_mod + (skill.mobility ? acp : 0) + calc_equip_mod(skill.name) | 0;
};

this.is_class_skill = function(skill, subtype) {
  var classname;
  for (classname in chardata.classes) {
    if (skill.skill_classes) {
      if (skill.skill_classes.indexOf(classname) > -1) return true;
    } else {
      if (skill.subtypes[subtype].indexOf(classname) > -1) return true;
    }
  }
  return false;
};

this.calc_ranks = function(char_skill_points, skill, subtype) {
  var class_skill, multiplier;
  class_skill = is_class_skill(skill, subtype);
  multiplier = (class_skill ? 1 : .5);
  return multiplier * char_skill_points;
};

this.calc_synergies = function(skill) {
  var char_synergy_skill, i, synergy_mod, synergy_skill;
  synergy_mod = 0;
  for (i in skill.synergies) {
    char_synergy_skill = false;
    if (chardata.skills) {
      char_synergy_skill = chardata.skills.first({
        skill_id: skill.synergies[i]
      });
    }
    if (char_synergy_skill) {
      synergy_skill = skills.first({
        id: skill.synergies[i]
      });
      synergy_mod = (calc_ranks(class_id, char_synergy_skill.ranks, synergy_skill) >= 5 ? 2 : 0);
    }
  }
  return synergy_mod;
};

this.calc_ability_score = function(ability) {
  var ability_score, race, race_mod;
  race = races.first({
    name: chardata.race_name
  });
  race_mod = race.abilities[ability];
  ability_score = ((chardata["abilities"] != null) && (chardata["abilities"][ability] != null) && chardata["abilities"][ability].length > 0 ? chardata["abilities"][ability] : 0);
  return parseInt(ability_score) + parseInt((race !== false && (race_mod != null) ? race_mod : 0)) + calc_equip_mod(ability);
};

this.calc_equip_mod = function(key) {
  return parseInt((!(equipment_benefits[key] != null) ? 0 : equipment_benefits[key]));
};

this.remove = function(arr, index) {
  if (index > -1) {
    arr.splice(index, 1);
    return arr = arr.slice();
  }
};

this.generate_id = function() {
  return Math.floor(Math.random() * 4294967295).toString(16);
};

this.toggle_visible = function(section, hide) {
  var hidden;
  $("#" + section).toggle(hide);
  hidden = $("#" + section).is(":hidden");
  return $("#" + section + "_expand_flag").html((hidden ? "<img src='images/collapsed.png'/>" : "<img src='images/expanded.png'/>"));
};

this.calc_ability_modifier = function(score) {
  return Math.ceil((score - 11) / 2) | 0;
};

this.set_links_part = function(page_id) {
  var allviews, characters, class_shortname, classes_html, classname, existing_chars_html, i, is_spellpicker, k, links_html, race;
  classes_html = "";
  is_spellpicker = false;
  for (classname in chardata.classes) {
    is_spellpicker = (spellpickers.indexOf(classname) > -1 ? true : is_spellpicker);
    class_shortname = classes.first({
      name: classname
    }).shortname;
    classes_html += "<td id='view_class_" + classname + "' style='color: blue;text-align: right; vertical-align: top' nowrap><a class='fake_link view' onclick='var level_diff=(calc_level()+1)-calc_current_level(); show_class_dialog(level_diff,0);'>" + class_shortname + "</a><sub>" + (chardata.classes[classname].level + 1) + "</sub></td>";
  }
  race = races.first({
    name: chardata.race_name
  });
  links_html = "<table padding='0' cellpadding='1' margin='0'><tr>";
  allviews = views.get();
  for (k in allviews) {
    if (allviews[k].name === "spells" && !is_spellpicker) continue;
    if (allviews[k].id === page_id) {
      links_html += "<td class='view'><b>" + allviews[k].name + "</b></td>";
      document.title = allviews[k].title;
    } else {
      links_html += "<td class='view' style='vertical-align: top'><a id='view_" + allviews[k].id + "' class='view' onclick='switch_content(" + allviews[k].id + ", chardata)'>" + allviews[k].name + "</a></td>";
    }
  }
  characters = get_all_characters();
  existing_chars_html = "";
  for (i in characters) {
    if ((characters[i].name != null) && characters[i].name.length > 0 && characters[i].name !== chardata.name) {
      existing_chars_html += "<li id='" + characters[i].name + "' onclick=\"players_companion.last_character='" + characters[i].name + "'; sav(players_companion, 'players_companion'); window.location.reload();\" >" + characters[i].name + "</li>";
    }
  }
  if (existing_chars_html.length > 0) {
    existing_chars_html = "<li class='sep'><hr /></li>" + existing_chars_html;
  }
  $("#linkspart").html(links_html + "<td class='view'>" + "<td class='view'><ul id='file'><li class='btn box'>&nbsp;char&nbsp;<ul><li id='load'>load</li><li></li><li id='new'>new</li><li></li><li id='log'>log</li><li></li><li id='options'>options</li><li></li><li id='sheet'>sheet</li><li></li>" + existing_chars_html + "</ul></ul></td>" + "<td class='view' style='color: blue;width: 100%;text-align: right;' nowrap>" + race.shortname + "</td>" + classes_html + "</tr></table>");
  if (calc_level() - calc_current_level() > 0) {
    $("td[id^='view_class']").css("font-weight", "bold");
  } else {
    $("td[id^='view_class']").css("font-weight", "");
  }
  $("#file").clickMenu();
  $("#load").bind("click", function(e) {
    return import_character();
  });
  $("#new").bind("click", function(e) {
    return create_new_character();
  });
  $("#log").bind("click", function(e) {
    return update_log();
  });
  $("#options").bind("click", function(e) {
    return update_options();
  });
  return $("#sheet").click(function(e) {
    set_links_part(-1);
    $("#root_container").css("width", "768px");
    $("#content").html(character_sheet);
    return populate_character_sheet();
  });
};

this.switch_content = function(view_id, chardata) {
  if (view_id === 0) {
    return main.do_main();
  } else if (view_id === 1) {
    return main.do_edit();
  } else if (view_id === 2) {
    return main.do_feats();
  } else if (view_id === 3) {
    return main.do_spells();
  } else {
    if (view_id === 4) return main.do_equipment();
  }
};

this.populate_object = function(obj, name, value) {
  obj[name] = value;
  return obj;
};

this.count_attrs = function(obj) {
  var count, k;
  count = 0;
  for (k in obj) {
    if (obj.hasOwnProperty(k)) count++;
  }
  return count;
};

this.create_select = function(name, items, onchange_action, include_empty, extra_data, category_filter, selected_value, id_as_value) {
  var html, i, selected;
  html = "<select id='" + name + "' onchange=\"" + onchange_action + "\" " + (extra_data || "") + ">";
  if (include_empty) {
    html += "<option id='add_new' value='-1'>Add new " + name.substring(0, name.indexOf("_")) + "</option>";
  }
  for (i in items) {
    if (!(category_filter != null) || items[i].category === category_filter) {
      selected = ((selected_value != null) && selected_value === items[i]._id ? " selected" : "");
      html += "<option id='" + name + "_option_" + items[i]._id + "' value='" + (id_as_value ? items[i].id : items[i].name) + "'" + selected + ">" + items[i].name + "</option>";
    }
  }
  html += "</select>";
  return html;
};

this.create_select1 = function(name, items, onchange_action, selected_value, extra_data) {
  var html, i, selected;
  html = "<select id='" + name + "' onchange='" + onchange_action + "' " + (extra_data ? extra_data : "") + ">";
  for (i in items) {
    selected = ((selected_value != null) && selected_value === items[i]._id ? " selected" : "");
    html += "<option id='" + name + "_option_" + items[i]._id + "' value='" + items[i]._id + "'" + selected + ">" + items[i].name + "</option>";
  }
  html += "</select>";
  return html;
};

this.pos = function(number) {
  if ((isFinite(number)) && (number > 0)) {
    return "+" + number;
  } else {
    return number;
  }
};

this.calc_level = function(xp) {
  var level;
  if (xp == null) xp = (!(chardata.xp != null) ? 0 : chardata.xp);
  level = (Math.floor((1 + Math.sqrt(xp / 125 + 1)) / 2)) - 1;
  return level;
};

this.calc_init = function(dex_score) {
  var char_feats, init;
  init = 0;
  char_feats = get_char_feats();
  char_feats.get({
    init: {
      "!is": null
    }
  }).forEach(function(feat, i) {
    init = feat.init(init);
    return init;
  });
  return calc_ability_modifier(dex_score) + init;
};

this.calc_ref = function(dex_score, class_name, xp, char_feats) {
  var class_ref_score, ref;
  class_ref_score = calc_save("ref_save");
  ref = 0;
  char_feats = get_char_feats();
  char_feats.get({
    ref: {
      "!is": null
    }
  }).forEach(function(feat, i) {
    ref = feat.ref(ref);
    return ref;
  });
  return calc_ability_modifier(dex_score) + class_ref_score + ref + calc_equip_mod("Ref");
};

this.calc_will = function(wis_score, class_name, xp, char_feats) {
  var class_will_score, feat_mod;
  class_will_score = calc_save("will_save");
  feat_mod = 0;
  char_feats = get_char_feats();
  char_feats.get({
    will: {
      "!is": null
    }
  }).forEach(function(feat, i) {
    feat_mod = feat.will(feat_mod);
    return feat_mod;
  });
  return calc_ability_modifier(wis_score) + class_will_score + feat_mod + calc_equip_mod("Will");
};

this.calc_fort = function(con_score) {
  var char_feats, class_fort_score, feat_mod;
  class_fort_score = calc_save("fort_save");
  feat_mod = 0;
  char_feats = get_char_feats();
  char_feats.get({
    fort: {
      "!is": null
    }
  }).forEach(function(feat, i) {
    feat_mod = feat.fort(feat_mod);
    return feat_mod;
  });
  return calc_ability_modifier(con_score) + class_fort_score + feat_mod + calc_equip_mod("Fort");
};

this.calc_spell_resistance = function() {
  var char_feats, class_sr_score, feat_mod, sr;
  sr = do_class_functions("all", "calc_sr", {
    sr: 0
  }).sr;
  class_sr_score = calc_save("sr_save");
  feat_mod = 0;
  char_feats = get_char_feats();
  char_feats.get({
    sr: {
      "!is": null
    }
  }).forEach(function(feat, i) {
    feat_mod = feat.fort(feat_mod);
    return feat_mod;
  });
  return sr + class_sr_score + feat_mod + calc_equip_mod("SR");
};

this.calc_dr = function(dr) {
  if (equipment_benefits[dr]) {
    return equipment_benefits[dr];
  } else {
    return 0;
  }
};

this.calc_ac = function(dex_score) {
  var ac, armor_bonus, char_feats, monk_mod, shield_bonus;
  ac = 0;
  char_feats = get_char_feats();
  char_feats.get({
    ac: {
      "!is": null
    }
  }).forEach(function(feat, i) {
    ac = feat.ac(ac);
    return ac;
  });
  armor_bonus = calc_armor_bonus(chardata.armors, armors, "armor");
  shield_bonus = calc_armor_bonus(chardata.shields, shields, "shield");
  monk_mod = (chardata.classes["Monk"] != null ? classes.first({
    name: "Monk"
  }).ac_bonus[calc_level()] : 0);
  return 10 + armor_bonus.bonus + Math.min(calc_ability_modifier(dex_score), armor_bonus.max_dex_bonus) + shield_bonus.bonus + calc_size_mod(chardata.race_name) + monk_mod + calc_equip_mod("AC") + ac;
};

this.calc_armor_bonus = function(char_armor, db, dammit) {
  var armor_bonus, armordata, i, max_dex_bonus;
  max_dex_bonus = null;
  armor_bonus = 0;
  if (char_armor != null) {
    for (i in char_armor) {
      if (session["armor"][i]["is_worn"]) {
        armordata = db.first({
          name: char_armor[i][dammit + "_name"]
        });
        if (armordata.bon !== "-") armor_bonus += parseInt(armordata.bon);
        if (armordata.max_dex_bonus !== "-") {
          max_dex_bonus = (!(max_dex_bonus != null) ? parseInt(armordata.max_dex_bonus) : Math.min(max_dex_bonus, parseInt(armordata.max_dex_bonus)));
        }
      }
    }
  }
  return {
    bonus: armor_bonus,
    max_dex_bonus: (!(max_dex_bonus != null) ? 50 : max_dex_bonus)
  };
};

this.calc_size_mod = function(race_name) {
  var size;
  size = races.first({
    name: race_name
  }).size;
  if (size === "small") {
    return 1;
  } else {
    return 0;
  }
};

this.calc_damage = function(weapon, char_feats, char_weapon) {
  var ability_mod, dam_components, damage, damages, die, foo, i, weapon_damage, weapon_mod;
  damages = [];
  weapon = $.extend({}, weapon, char_weapon);
  if ($.isFunction(weapon.dam)) weapon.dam = weapon.dam();
  weapon_damage = weapon.dam.split("/");
  for (i in weapon_damage) {
    dam_components = weapon_damage[i].split(/\+|-/);
    die = dam_components[0];
    weapon_mod = (dam_components.length > 1 ? parseInt(dam_components[1]) : 0);
    damages.push({
      die: die,
      mod: weapon_mod
    });
  }
  char_feats = get_char_feats();
  char_feats.get({
    damage: {
      "!is": null
    }
  }).forEach(function(feat, i) {
    damages = feat.damage(damages, weapon);
    return damages;
  });
  damage = "";
  ability_mod = 0;
  if (!weapon.ability) weapon.ability = "Str";
  if (weapon.ability !== "none") {
    ability_mod = calc_ability_modifier(chardata.abilities[weapon.ability]);
  }
  if (weapon.name === "Shortbow" || weapon.name === "Longbow") {
    ability_mod = Math.min(ability_mod, 0);
  }
  for (i in damages) {
    foo = pos(Math.max(ability_mod + damages[i].mod + parseInt($("#damage_mod").text()) + calc_equip_mod("Dam")), 1);
    damage += damages[i].die + (foo ? foo : "");
    damage += (parseInt(i) + 1 < damages.length ? "/" : "");
  }
  return damage;
};

this.show_dialog = function(title, content, save_on_close, close_fn, opts) {
  var options;
  $(".ui-widget-overlay").live("click", function() {
    return $("#mydialog").dialog("close");
  });
  if (save_on_close) {
    $("#mydialog").bind("dialogclose", function() {
      return save_character();
    });
  }
  if (close_fn) {
    $("#mydialog").bind("dialogclose", function() {
      return eval(close_fn);
    });
  } else {
    $("#mydialog").unbind("dialogclose");
  }
  $("#mydialog").html(content);
  options = {
    modal: true,
    autoOpen: false,
    title: title,
    offset: [50, 50],
    width: 320
  };
  $.extend(options, opts);
  $("#mydialog").dialog(options);
  $("tr[class='detail'][class!='header']:even").addClass("even_row");
  $("#mydialog").dialog("open");
  $("tr[class='detail']:even").removeClass("even_row");
  return false;
};

this.show_item_detail = function(table, obj_id, modify_detail) {
  var content, detail, obj, title;
  obj = null;
  if (table.hasOwnProperty("find")) {
    obj = table.first({
      _id: obj_id
    });
  } else {
    obj = table[obj_id];
  }
  content = "";
  title = obj.name;
  jQuery.each(obj, function(name, value) {
    var count, i, related_feats, skill_data, skill_name, skills_count;
    if (!(value != null) || value.toString().length === 0 || show_detail_ignore.indexOf(name) > -1) {} else if (name !== "detail" && name !== "name" && name !== "class_data" && name !== "description" && name !== "op") {
      if (name === "ability_id") {
        name = "Ability";
        value = abilities[value].name;
      } else if (name === "synergies") {
        if (value.length > 0) value = value.join(", ");
      } else if (name === "feats") {
        count = 0;
        related_feats = "";
        for (i in value) {
          related_feats += i;
          count++;
        }
        value = related_feats;
      } else if (name === "skills") {
        skill_data = "";
        i = 0;
        skills_count = count_attrs(value);
        for (skill_name in value) {
          skill_data += skill_name + " " + pos(value[skill_name]);
          i++;
          skill_data += (i < skills_count ? ", " : "");
        }
        value = skill_data;
      }
      return content += "<b>" + capitalize(name).replace(/_/g, " ") + "</b>: " + value + "<br/>";
    }
  });
  detail = obj.detail;
  if (modify_detail) detail = modify_detail(obj);
  if (detail) content += "<br/>" + detail.replace(/%class%/g, "class");
  return show_dialog(title, content);
};

this.capitalize = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

this.klone = function(o) {
  var i, newO;
  if (typeof o !== "object") return o;
  if (o == null) return o;
  newO = new Object();
  for (i in o) {
    newO[i] = klone(o[i]);
  }
  return newO;
};

this.htmlize = function(text) {
  var replacement_text;
  if (text) {
    replacement_text = text.replace(/\n/g, "<br/>");
    replacement_text = replacement_text.replace(/--/g, "&ndash;");
  }
  return replacement_text || "";
};

this.dehtmlize = function(text) {
  var replacement_text;
  if (text) {
    replacement_text = text.replace(/<br\/>/g, "\n");
    replacement_text = replacement_text.replace(/&ndash;/g, "--");
  }
  return replacement_text || "";
};

this.parse_character_data = function(data) {
  var entry, i, log_data, log_entries, log_separator;
  if (!TAFFY.isObject(data)) {
    log_data = null;
    log_separator = data.indexOf("``");
    if (log_separator > 0) {
      log_data = data.substring(data.indexOf("``") + 2);
      data = data.substring(0, data.indexOf("``"));
    }
    data = TAFFY.JSON.parse(unescape(data)) || {};
  }
  data.skills = parse_taffy_data(data.skills);
  data.feats = parse_taffy_data(data.feats);
  if (log_data) {
    log_entries = log_data.split("`");
    i = 0;
    while (i < log_entries.length) {
      entry = TAFFY.JSON.parse(unescape(log_entries[i]));
      sav(entry, "log_" + data.name + "_" + entry.id);
      i++;
    }
  }
  return data;
};

this.reconstitute_array = function(array_obj, attr_name) {
  var array, i;
  array = null;
  if (array_obj) {
    array = [];
    for (i in array_obj) {
      array.push(array_obj[i]);
    }
  }
  return array;
};

this.export_character = function() {
  var cookie_data, i;
  cookie_data = get_cookie_data("ch_" + chardata.name);
  if (cookie_data.length > 0) {
    if (chardata.log !== void 0 && chardata.log.length > 0) {
      cookie_data += "``";
      i = 0;
      while (i < chardata.log.length) {
        cookie_data += TAFFY.JSON.stringify(get_log_entry(chardata.log[i])) + (i + 1 < chardata.log.length ? "," : "");
        i++;
      }
    }
    return show_dialog("character export", "Copy the below string to save your character:\n" + cookie_data);
  } else {
    return alert("No character data to export");
  }
};

this.get_all_characters = function() {
  var characters, cookies, data, i;
  characters = [];
  if (document.cookie.length > 0) {
    cookies = document.cookie.split("; ");
    for (i in cookies) {
      if (cookies[i].indexOf("ch_") === 0) {
        data = cookies[i].substring(cookies[i].indexOf("=") + 1);
        characters.push(parse_character_data(data));
      }
    }
  }
  return characters;
};

this.intersection = function(setA, setB) {
  var i, intersection, setA_seen, setB_seen;
  setA_seen = {};
  setB_seen = {};
  i = 0;
  while (i < setB.length) {
    setB_seen[setB[i]] = true;
    i++;
  }
  intersection = [];
  i = 0;
  while (i < setA.length) {
    if (!setA_seen[setA[i]]) {
      setA_seen[setA[i]] = true;
      if (setB_seen[setA[i]]) intersection.push(setA[i]);
    }
    i++;
  }
  return intersection;
};

this.update_options = function(message) {
  var boolean_options, content, curr_opts, option, string_options, title;
  curr_opts = chardata["options"];
  title = "Options";
  content = "<table>";
  string_options = options.get({
    type: "string"
  });
  if (string_options.length > 0) {
    content += "<table>";
    if (message) content += "<tr><td colspan=2>" + message + "</td></tr>";
    for (option in string_options) {
      content += "<tr><td rowspan=2 valign=top>" + string_options[option].description + ":</td><td valign=top><input id='option_" + string_options[option].name + "' type='text' onblur='" + string_options[option].op + "'" + ((chardata["options"] != null) && (chardata["options"][string_options[option].name] != null) ? " value='" + chardata["options"][string_options[option].name] + "'" : "") + "</td></tr><tr><td valign=top style='color: #D0D0D0'>" + (string_options[option].note || "") + "</td></tr>";
    }
    content += "</table>";
  }
  boolean_options = options.get({
    type: "boolean"
  });
  if (boolean_options.length > 0) {
    content += "<table>";
    for (option in boolean_options) {
      content += "<tr><td><input id='option_" + boolean_options[option].name + "' type='checkbox' onclick='" + boolean_options[option].op + "'" + ((chardata["options"] != null) && chardata["options"][boolean_options[option].name] === true ? " checked" : "") + " style='vertical-align: top;'/></td><td>" + boolean_options[option].description + "</td></tr>";
    }
    content += "</table>";
  }
  content += "</table><center><a class=fake_link onclick=\"delete_character()\">Delete this character</a></center><hr style='width: 0px'/><center style='font-size: xx-small;'><fieldset>If you enjoy this tool, please leave a comment on the blog (bugs + feature requests most welcome)</fieldset></center><br>";
  content += "<a href='http://charactermanager.blogspot.com/' target='_blank' style='float: right;font-size: xx-small;'>Player's Companion Blog</a><a href='http://code.google.com/p/charactermanager/issues' target='_blank' style='font-size: xx-small;'>Project Page</a><span style='font-size: xx-small;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v0.7</span>";
  show_dialog(title, content, true);
  return false;
};

this.is_class_feat = function(feat_name) {
  return get_class_feat_names().indexOf(feat_name) > -1;
};

this.get_class_feat_names = function() {
  var class_feats, classname, clazz, level;
  class_feats = [];
  for (classname in chardata.classes) {
    clazz = classes.first({
      name: classname
    });
    for (level in clazz.feats) {
      if (chardata.classes[classname].level >= level) {
        class_feats = class_feats.concat(clazz.feats[level]);
      }
    }
  }
  return class_feats;
};

this.get_class_feats = function() {
  var class_feats, feat_names, i;
  class_feats = [];
  feat_names = get_class_feat_names();
  for (i in feat_names) {
    class_feats = class_feats.concat(feats.first({
      name: feat_names[i]
    }));
  }
  return class_feats;
};

this.get_all_char_feats = function() {
  if (chardata.feats) {
    return chardata.feats.get().concat(get_class_feats());
  } else {
    return get_class_feats();
  }
};

this.get_special_abilities = function() {
  var class_special, class_specials, classname, i, item, level, rogue_special_abilities, special_abilities, supersede;
  special_abilities = [];
  for (classname in chardata.classes) {
    class_specials = classes.first({
      name: classname
    }).specials;
    level = 0;
    while (level <= chardata.classes[classname].level) {
      item = 0;
      while (item < class_specials[level].length) {
        class_special = specials.first({
          name: class_specials[level][item].special_name
        });
        if (class_special.supersedes) {
          for (supersede in class_special.supersedes) {
            special_abilities[class_special.supersedes[supersede]] = null;
          }
        }
        special_abilities[class_specials[level][item].special_name] = class_special;
        special_abilities[class_specials[level][item].special_name].mod = class_specials[level][item].mod;
        item++;
      }
      level++;
    }
  }
  rogue_special_abilities = chardata.rogue_special_abilities;
  for (i in rogue_special_abilities) {
    if (rogue_special_abilities[i].special_name !== "Skill Mastery") {
      class_special = specials.first({
        name: rogue_special_abilities[i].special_name
      });
      special_abilities[rogue_special_abilities[i].special_name] = class_special;
    }
  }
  return special_abilities;
};

this.create_selector_grid = function(items, anchor_table, click_fn, populate_data, cols, use_text_link) {
  var display_name, i, _results;
  if (cols == null) cols = 2;
  if (use_text_link == null) use_text_link = true;
  if (items.length === 0) {
    return $(anchor_table).html("");
  } else {
    i = 0;
    _results = [];
    while (i < items.length) {
      if (i % cols === 0) {
        $(anchor_table).append("<tr id='" + items[i].type + "_" + ((i / cols) | 0) + "'></tr>");
      }
      display_name = (use_text_link ? "<a class='fake_link' onclick=\"show_item_detail(" + items[i].type + "s, '" + items[i]._id + "')\">" + items[i].name + "</a>" : "<label for='" + items[i]._id + "'>" + items[i].name + "</label>");
      $("tr#" + items[i].type + "_" + ((i / cols) | 0)).append("<td><input id='" + items[i]._id + "' type='checkbox'/>" + display_name + "</td>");
      if (populate_data.indexOf(items[i].name) > -1) {
        $("input#" + items[i]._id).attr("checked", "checked");
      }
      $("input#" + items[i]._id).bind("click", {
        item: items[i]
      }, function(e) {
        return click_fn(e.data.item, $(this).attr("checked"));
      });
      _results.push(i++);
    }
    return _results;
  }
};

this.create_selector_group = function(item, title, all_options, option_db, cols, click_fn) {
  var display_name, html, i, _results;
  html = "<tr id='" + item._id + "_sub_'><td colspan='" + cols + "'></td><td><table id='" + item._id + "_sub_'></table></td></tr>";
  $("#" + item._id + "_sub").after(html);
  i = 0;
  _results = [];
  while (i < all_options.length) {
    if (i % cols === 0) {
      $("table[id='" + item._id + "_sub_']").append("<tr id='" + item._id + "_sub_" + ((i / cols) | 0) + "'></tr>");
    }
    display_name = "<label for='" + item._id + "_" + all_options[i]._id + "'>" + all_options[i].name + "</label>";
    $("tr#" + item._id + "_sub_" + ((i / cols) | 0)).append("<td><input id='" + item._id + "_" + all_options[i]._id + "' type='checkbox'/>" + display_name + "</td>");
    $("input#" + item._id + "_" + all_options[i]._id).bind("click", {
      item: item,
      name: all_options[i].name
    }, function(e) {
      return click_fn(e.data.item, $(this).attr("checked"), e.data.name, option_db);
    });
    _results.push(i++);
  }
  return _results;
};

this.calc_current_level = function() {
  var classname, curr_level;
  curr_level = 0;
  for (classname in chardata.classes) {
    curr_level += chardata.classes[classname].level + 1;
  }
  return curr_level;
};

this.calc_save = function(type) {
  var classname, save;
  save = 0;
  for (classname in chardata.classes) {
    if (classes.first({
      name: classname
    })[type]) {
      save += classes.first({
        name: classname
      })[type][chardata.classes[classname].level];
    }
  }
  return save;
};

this.is_empty = function(object) {
  var i;
  for (i in object) {
    return false;
  }
  return true;
};

this.calc_attack = function(base_attack_bonuses, weapon, char_weapon, other_mod) {
  var attack_override, attacks, char_feats, i, modified_attacks;
  attack_override = 0;
  if (char_weapon && char_weapon.att) attack_override = parseInt(char_weapon.att);
  attacks = {
    base: base_attack_bonuses,
    weapon_proficiency: -4,
    acp: 0
  };
  if (weapon && weapon.usage === "ranged") {
    if (weapon.name.indexOf("Composite") > -1) {
      attacks.ability_score = Math.max(chardata.abilities["Str_curr"], chardata.abilities["Dex_curr"]);
    } else {
      attacks.ability_score = chardata.abilities["Dex_curr"];
    }
  } else {
    attacks.ability_score = chardata.abilities["Str_curr"];
  }
  attacks.acp = calc_armor_acp(chardata.armors);
  attacks.acp += calc_shield_acp(chardata.shields);
  char_feats = get_char_feats();
  char_feats.get({
    attack: {
      "!is": null
    }
  }).forEach(function(feat, i) {
    attacks = feat.attack(attacks, weapon);
    return attacks;
  });
  attacks.base = calc_base_attack(base_attack_bonuses, attacks.ability_score, other_mod);
  modified_attacks = [];
  for (i in attacks.base) {
    modified_attacks.push(pos(attack_override + parseInt(attacks.base[i]) + attacks.weapon_proficiency + attacks.acp));
  }
  return modified_attacks.join("/");
};

this.calc_base_attack = function(base_attack_bonuses, ability_score, other_mod) {
  other_mod = (other_mod ? parseInt(other_mod) : 0);
  return base_attack_bonuses.map(function(x) {
    return x + calc_ability_modifier(ability_score) + calc_size_mod(chardata.race_name) + other_mod + calc_equip_mod("Att");
  });
};

this.calc_cmb = function(base_attack_bonuses, other_mod) {
  var babs, cmb, i;
  cmb = "";
  other_mod = (other_mod ? parseInt(other_mod) : 0);
  babs = base_attack_bonuses.map(function(x) {
    return x + calc_ability_modifier(chardata.abilities["Str"]) + calc_size_mod(chardata.race_name) + other_mod + calc_equip_mod("Att");
  });
  i = 0;
  while (i < babs.length) {
    cmb += pos(babs[i]) + (i + 1 < babs.length ? "/" : "");
    i++;
  }
  return cmb;
};

this.calc_cmd = function(base_attack_bonuses, other_mod) {
  var babs, cmd, i;
  cmd = "";
  other_mod = (other_mod ? parseInt(other_mod) : 0);
  babs = base_attack_bonuses.map(function(x) {
    return x + calc_ability_modifier(chardata.abilities["Str"]) + calc_ability_modifier(chardata.abilities["Dex"]) + calc_size_mod(chardata.race_name) + other_mod + 10;
  });
  i = 0;
  while (i < babs.length) {
    cmd += pos(babs[i]) + (i + 1 < babs.length ? "/" : "");
    i++;
  }
  return cmd;
};

this.is_number = function(o) {
  return !isNaN(o - 0);
};

this.create_new_character = function() {
  var char_classes, chardata, equipment_benefits;
  char_classes = [];
  equipment_benefits = [];
  chardata = {
    options: {}
  };
  players_companion.last_character = "";
  chardata.options.owner = players_companion.owner;
  sav(players_companion, "players_companion");
  return main.do_edit();
};

this.do_class_functions = function(page, location, obj) {
  var classname, clazz, script;
  if (obj instanceof Array) {
    obj = $.merge([], obj);
  } else {
    obj = $.extend({}, obj);
  }
  for (classname in chardata.classes) {
    clazz = classes.first({
      name: classname
    });
    if (clazz.custom && clazz.custom[page] && clazz.custom[page][location]) {
      for (script in clazz.custom[page][location]) {
        clazz.custom[page][location][script](obj);
      }
    }
  }
  return obj;
};

this.get_char_feats = function() {
  var char_feats;
  char_feats = new TAFFY([]);
  if (chardata.feats) {
    chardata.feats.get().forEach(function(feat, i) {
      return char_feats.insert(feats.first({
        name: feat.feat_name
      }));
    });
  }
  char_feats.insert(get_class_feats());
  return char_feats;
};

this.calc_touch_ac = function(dex_score, race_name, char_feats) {
  return 10 + calc_ability_modifier(dex_score) + calc_size_mod(race_name);
};

this.calc_flat_footed_ac = function(char_armor) {
  return 10 + calc_armor_bonus(char_armor, armors, "armor").bonus;
};

this.calc_base_attack_bonus = function() {
  var attacks, bab, class_babs, classname, i;
  bab = [];
  for (classname in chardata.classes) {
    class_babs = classes.first({
      name: classname
    }).base_attack_bonus;
    attacks = class_babs[chardata.classes[classname].level].split("/");
    i = 0;
    while (i < attacks.length) {
      bab[i] = (bab[i] | 0) + parseInt(attacks[i]);
      i++;
    }
  }
  return bab;
};

this.loaded_static_data_tags = [];

this.simple_weapons = [];

this.martial_weapons = [];

this.exotic_weapons = [];

this.show_detail_ignore = ["id", "_rev", "classes", "type", "prereqs", "mobility", "conditional", "multi", "inform", "abbrev", "skill_classes", "attack", "damage", "spells", "levels", "tags", "id", "_id"];

this.spellcasters = ["Bard", "Cleric", "Druid", "Paladin", "Ranger", "Sorcerer", "Wizard"];

this.natural_spellcasters = ["Cleric", "Druid", "Paladin", "Ranger"];

this.spellpickers = ["Bard", "Sorcerer", "Wizard"];

this.armor_edit_data = ["bon", "acp", "note"];

this.shield_edit_data = ["bon", "acp", "note"];

this.grapple_size_mod = {
  colossal: 16,
  gargantuan: 12,
  huge: 8,
  large: 4,
  medium: 0,
  small: -4,
  tiny: -8,
  diminutive: -12,
  fine: -16
};

this.damage_reductions = ["fire", "cold", "acid", "pois", "elec", "base"];

this.save_against = ["pois", "petr"];

this.sizes = ["fine", "diminutive", "tiny", "small", "medium", "large", "huge", "gargantuan", "colossal"];

this.draconic_types = new TAFFY([
  {
    name: "Black",
    _id: "xxca1",
    breath: "Acid - 60ft line"
  }, {
    name: "Blue",
    _id: "xxca2",
    breath: "Electricity - 60ft line"
  }, {
    name: "Green",
    _id: "xxca3",
    breath: "Acid - 30ft cone"
  }, {
    name: "Red",
    _id: "xxca4",
    breath: "Fire - 30ft cone"
  }, {
    name: "White",
    _id: "xxca5",
    breath: "Cold - 30ft cone"
  }, {
    name: "Brass",
    _id: "xxca6",
    breath: "Fire - 60ft line"
  }, {
    name: "Bronze",
    _id: "xxca7",
    breath: "Electricity - 60ft line"
  }, {
    name: "Copper",
    _id: "xxca8",
    breath: "Acid - 60ft line"
  }, {
    name: "Gold",
    _id: "xxca9",
    breath: "Fire - 30ft cone"
  }, {
    name: "Silver",
    _id: "xxcaa",
    breath: "Cold - 30ft cone"
  }
]);

this.curr_xp = 0;

this.char_classes = [];

this.equipment_benefits = [];

this.alignments = new TAFFY([
  {
    name: "Lawful"
  }, {
    name: "Neutral"
  }, {
    name: "Chaotic"
  }
]);

this.goodness = new TAFFY([
  {
    name: "Good"
  }, {
    name: "Neutral"
  }, {
    name: "Evil"
  }
]);

$.extend({
  keys: function(obj) {
    var a;
    a = [];
    $.each(obj, function(k) {
      return a.push(k);
    });
    return a;
  }
});

this.weapon_edit_data = ["name", "att", "dam", "crit", "note"];

this.options = new TAFFY([
  {
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
  }
]);

this.players_companion = {};

this.abilities = {
  Str: {
    name: "Strength",
    detail: "Strength measures your character's muscle and physical power. This ability is especially important for Fighters, barbarians, paladins, rangers, and monks because it helps them prevail in combat. Strength also limits the amount of equipment your character can carry.<p class=sub>You apply your character's Strength modifier to:<ul><li>Melee attack rolls.</li><li>Damage rolls when using a melee weapon or a thrown weapon (including a sling). (<i>Exceptions:</i> Off-hand attacks receive only one-half the character's Strength bonus, while two-handed attacks receive one and a half times the Strength bonus. A Strength penalty, but not a bonus, applies to attacks made with a bow that is not a composite bow.)</li><li>Climb, Jump, and Swim checks. These are the skills that have Strength as their key ability.</li><li>Strength checks (for breaking down doors and the like).</li></ul></p><p class=sub>Any creature that can physically manipulate other objects has at least 1 point of Strength. A creature with no Strength score can't exert force, usually because it has no physical body or because it doesn't move. The creature automatically fails Strength checks. If the creature can attack, it applies its Dexterity modifier to its base attack bonus instead of a Strength modifier.</p>"
  },
  Dex: {
    name: "Dexterity",
    detail: "Dexterity measures hand-eye coordination, agility, reflexes, and balance. This ability is the most important one for rogues, but it's also high on the list for characters who typically wear light or medium armor (rangers and barbarians) or no armor at all (monks, wizards, and sorcerers), and for anyone who wants to be a skilled archer.<p class=sub>You apply your character's Dexterity modifier to:<ul><li>Ranged attack rolls, including those for attacks made with bows, crossbows, throwing axes, and other ranged weapons.</li><li>Armor Class (AC), provided that the character can react to the attack.</li><li>Reflex saving throws, for avoiding fireballs and other attacks that you can escape by moving quickly.</li><li>Balance, Escape Artist, Hide, Move Silently, Open Lock, Ride, Sleight of Hand, Tumble, and Use Rope checks. These are the skills that have Dexterity as their key ability.</li></ul></p><p class=sub>Any creature that can move has at least 1 point of Dexterity. A creature with no Dexterity score can't move. If it can perform actions (such as casting spells), it applies its Intelligence modifier to initiative checks instead of a Dexterity modifier. The creature automatically fails Reflex saves and Dexterity checks.</p>"
  },
  Int: {
    name: "Intelligence",
    detail: "Intelligence determines how well your character learns and reasons. This ability is important for wizards because it affects how many spells they can cast, how hard their spells are to resist, and how powerful their spells can be. It's also important for any character who wants to have a wide assortment of skills.<p class=sub>You apply your character's Intelligence modifier to:<ul><li>The number of languages your character knows at the start of the game.</li><li>The number of skill points gained each level. (But your character always gets at least 1 skill point per level.)</li><li>Appraise, Craft, Decipher Script, Disable Device, Forgery, Knowledge, Search, and Spellcraft checks. These are the skills that have Intelligence as their key ability.</li></ul></p><p class=sub>A wizards gains bonus spells based on her Intelligence score. The minimum Intelligence score needed to cast a wizard spell is 10 + the spell's level.</p><p class=sub>An animal has an Intelligence score of 1 or 2. A creature of humanlike intelligence has a score of at least 3.</p><p class=sub>A character does not retroactively get additional skill points for previous levels if she increases her intelligence.</p><p class=sub>Any creature that can think, learn, or remember has at least 1 point of Intelligence. A creature with no Intelligence score is mindless, an automaton operating on simple instincts or programmed instructions. It has immunity to mind-affecting effects (charms, compulsions, phantasms, patterns, and morale effects) and automatically fails Intelligence checks.</p><p class=sub>Mindless creatures do not gain feats or skills, although they may have bonus feats or racial skill bonuses.</p>"
  },
  Con: {
    name: "Constitution",
    detail: "Constitution represents your character's health and stamina. A Constitution bonus increases a character's hit points, so the ability is important for all classes.<p class=sub>You apply your character's Constitution modifier to:<ul><li>Each roll of a Hit Die (though a penalty can never drop a result below 1—that is, a character always gains at least 1 hit point each time he or she advances in level).</li><li>Fortitude saving throws, for resisting poison and similar threats.</li><li>Concentration checks. Concentration is a skill, important to spellcasters, that has Constitution as its key ability.</li></ul></p><p class=sub>If a character's Constitution score changes enough to alter his or her Constitution modifier, the character's hit points also increase or decrease accordingly.</p><p class=sub>Any living creature has at least 1 point of Constitution. A creature with no Constitution has no body or no metabolism. It is immune to any effect that requires a Fortitude save unless the effect works on objects or is harmless. The creature is also immune to ability damage, ability drain, and energy drain, and automatically fails Constitution checks. A creature with no Constitution cannot tire and thus can run indefinitely without tiring (unless the creature's detail says it cannot run).</p>"
  },
  Cha: {
    name: "Charisma",
    detail: "Charisma measures a character's force of personality, persuasiveness, personal magnetism, ability to lead, and physical attractiveness. This ability represents actual strength of personality, not merely how one is perceived by others in a social setting. Charisma is most important for paladins, sorcerers, and bards. It is also important for clerics, since it affects their ability to turn undead. Every creature has a Charisma score.<p class=sub>You apply your character's Charisma modifier to:<ul><li>Bluff, Diplomacy, Disguise, Gather Information, Handle Animal, Intimidate, Perform, and Use Magic Device checks. These are the skills that have Charisma as their key ability.</li><li>Checks that represent attempts to influence others.</li><li>Turning checks for clerics and paladins attempting to turn zombies, vampires, and other undead.</li></ul></p><p class=sub>Sorcerers and bards get bonus spells based on their Charisma scores. The minimum Charisma score needed to cast a sorcerer or bard spell is 10 + the spell's level.</p><p class=sub>Any creature capable of telling the difference between itself and things that are not itself has at least 1 point of Charisma. Anything with no Charisma score is an object, not a creature. Anything without a Charisma score also has no Wisdom score.</p>"
  },
  Wis: {
    name: "Wisdom",
    detail: "Wisdom describes a character's willpower, common sense, perception, and intuition. While Intelligence	represents one's ability to analyze information, Wisdom represents being in tune with and aware of one's surroundings. Wisdom is the most important ability for clerics and druids, and it is also important for paladins and rangers. If you want your character to have acute senses, put a high score in Wisdom. Every creature has a Wisdom score.<p class=sub>You apply your character's Wisdom modifier to:<ul><li>Will saving throws (for negating the effect of charm person and other spells).</li><li>Heal, Listen, Profession, Sense Motive, Spot, and Survival checks. These are the skills that have Wisdom as their key ability.</li></ul></p><p class=sub>Clerics, druids, paladins, and rangers get bonus spells based on their Wisdom scores. The minimum Wisdom score needed to cast a cleric, druid, paladin, or ranger spell is 10 + the spell's level.</p><p class=sub>Any creature that can perceive its environment in any fashion has at least 1 point of Wisdom. Anything with no Wisdom score is an object, not a creature. Anything without a Wisdom score also has no Charisma score.</p>"
  }
};
