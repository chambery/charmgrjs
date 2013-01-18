var edit;

edit = function() {};

edit.calc_skill_points = function() {
  var char_lang_count, class_skills_per_level, classname, int_mod, int_score, is_human, level_1_points, total_skill_points;
  int_score = $("#ability_Int").val();
  int_mod = calc_ability_modifier(int_score);
  is_human = races({
    name: "Human"
  }).first().name === $("#race").val();
  total_skill_points = 0;
  class_skills_per_level = 0;
  for (classname in chardata.classes) {
    class_skills_per_level = classes().first({
      name: classname
    }).skill_points_per_level + int_mod;
    level_1_points = (class_skills_per_level * 4) + (is_human ? 4 : 0);
    total_skill_points += level_1_points + ((class_skills_per_level + (is_human ? 1 : 0)) * chardata.classes[classname].level);
  }
  $("input[id*=skill]").each(function(i, element) {
    return total_skill_points -= (isNaN(parseInt($(element).val())) ? 0 : parseInt($(element).val()));
  });
  char_lang_count = (!(chardata.languages != null) ? 0 : chardata.languages.length);
  total_skill_points -= Math.abs(Math.min(int_mod - char_lang_count, 0));
  return total_skill_points;
};

edit.build_edit_page = function() {
  var align_html, race_html, skill_html;
  set_links_part(1);
  $("#content").html("<div class='dp100' style='padding-bottom: 5px;'><span style='float: right;'>XP&nbsp;&nbsp;<input type='text' size='5' value='' name='xp' id='xp'></span><input id='charname' value='' size='12' type='text' />&nbsp;<span id='race_select'></span></div><div id='moralitypart' class='dp100' style='padding-bottom: 5px;'><select id='alignment' style='float: right;'></select>HP&nbsp;&nbsp;<input id='hp' value='' type='text' style='width: 25px' />&nbsp;&nbsp;<select id='deity' style='width: 105px;vertical-align: top;'></select></div><div id='middlepart'><div id='abilitiespart' class='dp25' style='padding-bottom: 5px; float: left'><table border='0'><tbody><tr><td align='center'><b><a class='fake_link' onclick=\"show_item_detail(abilities,'Str')\">Str</a></b></td><td align='center'><input type='text'onblur='edit.recalc_edit_page()' value='' name='Strscore'class='two_digit' id='ability_Str'></td><td align='center' id='race_Str_mod'></td></tr><tr><td align='center'><b><a class='fake_link' onclick=\"show_item_detail(abilities,'Dex')\">Dex</a></b></td><td align='center'><input type='text'onblur='edit.recalc_edit_page()' value='' name='Dexscore'class='two_digit' id='ability_Dex'></td><td align='center' id='race_Dex_mod'></td></tr><tr><td align='center'><b><a class='fake_link' onclick=\"show_item_detail(abilities,'Int')\">Int</a></b></td><td align='center'><input type='text'onblur='edit.recalc_edit_page()' value='' name='Intscore'class='two_digit' id='ability_Int'></td><td align='center' id='race_Int_mod'></td></tr><tr><td align='center'><b><a class='fake_link' onclick=\"show_item_detail(abilities,'Con')\">Con</a></b></td><td align='center'><input type='text'onblur='edit.recalc_edit_page()' value='' name='Conscore'class='two_digit' id='ability_Con'></td><td align='center' id='race_Con_mod'></td></tr><tr><td align='center'><b><a class='fake_link' onclick=\"show_item_detail(abilities,'Int')\">Cha</a></b></td><td align='center'><input type='text'onblur='edit.recalc_edit_page()' value='' name='Chascore'class='two_digit' id='ability_Cha'></td><td align='center' id='race_Cha_mod'></td></tr> <tr><td align='center'><b><a class='fake_link' onclick=\"show_item_detail(abilities,'Wis')\">Wis</a></b></td><td align='center'><input type='text'onblur='edit.recalc_edit_page()' value='' name='Wisscore'class='two_digit' id='ability_Wis'></td><td align='center' id='race_Wis_mod'></td></tr></tbody></table></div><div id='classespart' class='dp75'></div></div><br style='clear: both' /><div class='dp100'><div id='skillspart' class='dp45' style='float: right'><table id='skills_table' style='width: 100%' border='0'><tr><td colspan='3'><span style='float: right;'>Pts left: <span id='skill_pts_remaining'>0</span></span>Max ranks: <span id='max_ranks'></span></td></tr><tr onclick=\"toggle_visible('languages')\" bgcolor='#8DC3E9'><td colspan=3 style='vertical-align: middle;'><a class='fake_link'><span id='languages_expand_flag' style='float: right'><img src='/charmgr/images/collapsed.png'/></span>Languages</a></td></tr><tr id='languages'><td colspan=3><table id='language_table' width='100%'style='border-collapse: collapse;'></table></td></tr></table></div><div id='waspart' class='dp50'><div id='weaponspart' class='dp100'><div id='char_weapons'></div><div id='new_weapon' class='new_weapon'></div><hr width='80%' /></div><div id='armorpart' class='dp100'><div id='char_armors'></div><div id='new_armor' class='new_weapon'></div><hr width='80%' /></div><div id='shieldpart' class='dp100'><div id='char_shields'></div><div id='new_shield' class='new_weapon'></div></div></div></div><div class='clear'></div>");
  if (chardata.abilities == null) chardata.abilities = {};
  race_html = create_select("race", races().get(), "edit.recalc_edit_page()", false, "style='width: 75px;'");
  $("#race_select").html(race_html);
  align_html = [];
  alignments.forEach(function(alignment, i) {
    return goodness.forEach(function(good, j) {
      return align_html.push(["<option id='alignment_option_", alignment, "_", good, "' data_id='", i, ",", j, "' value='", alignment, ",", good, "'>", alignment, " ", good, "</option>"].join(""));
    });
  });
  $("#alignment").html(align_html.join(""));
  align_html = [];
  align_html.push("<option id='deity_option_-1' data_id='' value=''></option>");
  $.each(get_deities_for_alignment(chardata.alignment, chardata.goodness), function(i, deity) {
    console.log("[" + i + "]  " + deity.name + " : " + deity.alignment + " " + deity.goodness);
    return align_html.push(["<option id='deity_option_" + deity.name + "' data_id='" + deity._id + "' value='" + deity.name + "'>" + deity.name + "</option>"]);
  });
  $("#deity").html(align_html.join(""));
  $("#language_table").html(edit.create_languages());
  $("#languages").hide();
  skill_html = [];
  window.skills().each(function(skill, i) {
    var char_skill, subtype, _results;
    if (skill.subtypes) {
      skill_html.push(["<tr onclick=\"toggle_visible('" + skill.name + "')\" bgcolor='#E2F0F9'><td colspan=3 style='vertical-align: middle;'><a class='fake_link' id='skill_", skill._id, "'><span id='", skill.name, "_expand_flag' style='float: right'><img src='/charmgr/images/collapsed.png'/></span>", skill.name, "</a></td></tr><tr id='", skill.name, "'><td colspan=3><table id='", skill.name, "_table' width='100%'style='border-collapse: collapse;'>"].join(""));
      for (subtype in skill.subtypes) {
        if (!chardata.skills || !chardata.skills.first({
          skill_name: skill.name
        }) || !chardata.skills.first({
          skill_name: skill.name
        }).subtypes[subtype]) {
          skill_html.push(["<tr><td style='vertical-align: top;width:100%'><a id='skill_", skill._id, "' class='fake_link' onclick='show_item_detail(skills, \"", skill._id, "\")' subtype='" + subtype + "'>", skill.name, " (", subtype, ")</a></td><td style='vertical-align: top;'><input id='skill_", skill._id, "_input' subtype='", subtype, "' class='two_digit' value='' onblur='edit.recalc_edit_page()'></td><td style='font-size: xx-small; vertical-align: top;'>", skill.ability, "<br><span id='", skill._id, "_mods' style='font-size: xx-small;'></span></td></tr>"].join(""));
        }
      }
      skill_html.push("</table></td></tr>");
      if (chardata.skills) {
        char_skill = chardata.skills.first({
          skill_name: skill.name
        });
        if (char_skill) {
          _results = [];
          for (subtype in char_skill.subtypes) {
            _results.push(skill_html.push(["<tr><td style='vertical-align: top;'><a id='skill_", skill._id, "' class='fake_link' onclick='show_item_detail(skills, \"", skill._id, "\")' subtype='" + subtype + "'>", skill.name, " (", subtype, ")</a></td><td style='vertical-align: top;'><input id='skill_", skill._id, "_input' subtype='", subtype, "' class='two_digit' value='' onblur='edit.recalc_edit_page()'></td><td style='font-size: xx-small; vertical-align: top;'>", skill.ability, "<br><span id='", skill._id, "_mods' style='font-size: xx-small;'></span></td></tr>"].join("")));
          }
          return _results;
        }
      }
    } else {
      return skill_html.push(["<tr><td style='vertical-align: top;'><a id='skill_", skill._id, "' class='fake_link' onclick='show_item_detail(skills, \"", skill._id, "\")'>", skill.name, "</a></td><td style='vertical-align: top;'><input id='skill_", skill._id, "_input' class='two_digit' value='' onblur='edit.recalc_edit_page()'></td><td style='font-size: xx-small; vertical-align: top;'>", skill.ability, "<br><span id='", skill._id, "_mods' style='font-size: xx-small;'></span></td></tr>"].join(""));
    }
  });
  $("#skills_table").append(skill_html.join(""));
  skills({
    subtypes: {
      isNull: false
    }
  }).get().forEach(function(skill, i) {
    return $("#" + skill.name).hide();
  });
  build_data_part("weapons", "weapon");
  build_data_part("armors", "armor");
  build_data_part("shields", "shield");
  if (is_empty(chardata.classes)) {
    chardata.classes = {};
    show_class_dialog(calc_level(chardata.xp) + 1, 0);
  }
  return edit.bind_controls();
};

edit.bind_controls = function() {
  var ability, race, _results;
  $("#xp").blur(function() {
    chardata.xp = $("#xp").val;
    return save_character(chardata);
  });
  $("input[id='hp']").blur(function() {
    chardata.hp = $("input[id='hp']").val;
    return save_character(chardata);
  });
  $("#race").change(function() {
    var race;
    console.log("" + chardata.race_name + " -> " + ($("#race").val()));
    chardata.race_name = $("#race").val();
    race = races({
      name: chardata.race_name
    }).first();
    $("#char_race").text(race.shortname);
    return save_character(chardata);
  });
  $("#alignment").change(function() {
    var align_html;
    chardata.alignment = $("#alignment").val.split(",")[0];
    chardata.goodness = $("#alignment").val.split(",")[1];
    console.group("deity - ALIGNMENT_CHANGED");
    align_html = [];
    align_html.push("<option id='deity_option_-1' data_id='' value=''></option>");
    $.each(get_deities_for_alignment(chardata.alignment, chardata.goodness), function(i, deity) {
      console.log(deity.name + " : " + deity.alignment + " " + deity.goodness);
      return align_html.push(["<option id='deity_option_" + deity.name + "' data_id='" + deity._id + "' value='" + deity.name + "'>" + deity.name + "</option>"]);
    });
    $("#deity").html(align_html.join(""));
    if ($("#deity").containsOption(chardata.deity)) {
      $("#deity").val(chardata.deity);
    } else {
      chardata.deity = "";
      chardata.domains = null;
    }
    console.groupEnd();
    return save_character(chardata);
  });
  $("#deity").change(function() {
    chardata.deity = $("#deity").val;
    return save_character(chardata);
  });
  $("#domain").change(function() {
    chardata.domain = $("#domain").val;
    return save_character(chardata);
  });
  $("#charname").blur(function() {
    chardata.name = $("#charname").val;
    return save_character(chardata);
  });
  _results = [];
  for (ability in abilities) {
    race = races({
      name: chardata.race_name
    }).first();
    chardata.abilities[ability] = $("#ability_" + ability).val();
    if (race.abilities[ability]) {
      _results.push($("#race_" + ability + "_mod").val(pos(race.abilities[ability])));
    } else {
      _results.push(void 0);
    }
  }
  return _results;
};

edit.create_languages = function() {
  var i, langs, language_html, len;
  language_html = [];
  langs = languages().get();
  i = 0;
  len = langs.length;
  while (i < len) {
    language_html.push(["<tr id='language_", langs[i]._id, "'><td><input id='language_", langs[i]._id, "_check' onclick='update_language(\"", langs[i]._id, "\"); edit.recalc_edit_page();' type='checkbox'/></td><td><label for='language_", langs[i]._id, "_check'>", langs[i].name, "</label></td>"].join(""));
    i++;
  }
  return language_html.join("");
};

edit.populate_edit_page = function() {
  var race;
  if (chardata.name) $("#charname").val(chardata.name);
  race = races({
    name: chardata.race_name
  }).first();
  $("#race option[id='race_option_" + race._id + "']").attr("selected", true);
  $("input[id='hp']").val(chardata.hp || "");
  $("#xp").val(chardata.xp || "");
  $("#weapon_style").selectOptions(chardata.weapon_style || "two_weapon_combat");
  $("#alignment option[id='alignment_option_" + chardata.alignment + "_" + chardata.goodness + "']").attr("selected", true);
  $("#deity option[id='deity_option_" + chardata.deity + "']").attr("selected", true);
  $("#domain option[id='domain_option_" + chardata.domain_name + "']").attr("selected", true);
  if (chardata.abilities) {
    $("#ability_Str").val(chardata.abilities["Str"]);
    $("#ability_Dex").val(chardata.abilities["Dex"]);
    $("#ability_Int").val(chardata.abilities["Int"]);
    $("#ability_Con").val(chardata.abilities["Con"]);
    $("#ability_Cha").val(chardata.abilities["Cha"]);
    $("#ability_Wis").val(chardata.abilities["Wis"]);
  }
  if (chardata.languages == null) chardata.languages = [];
  if (chardata.skills != null) {
    return skills.forEach(function(skill, i) {
      var char_skill, subtype, _results;
      char_skill = chardata.skills.first({
        skill_name: skill.name
      });
      if (char_skill !== false) {
        if (char_skill.subtypes) {
          _results = [];
          for (subtype in char_skill.subtypes) {
            _results.push($("input[id=skill_" + skill._id + "_input][subtype='" + subtype + "']").val(char_skill.subtypes[subtype]));
          }
          return _results;
        } else {
          return $("#skill_" + skill._id + "_input").val(char_skill.ranks);
        }
      }
    });
  }
};

edit.recalc_edit_page = function() {
  var ability, ability_increase, calcd_level, char_langs, checked, class_langs, classname, clazz, feature, feature_count, i, is_class_language, is_race_language, lang_idx, langs, len, level, level_diff, race, skill_pts;
  calcd_level = calc_level(chardata.xp);
  if (calcd_level < chardata.level) {
    level_diff = calcd_level - chardata.level;
    ability_increase = (chardata.level + 1) % 4 === 0;
    show_class_dialog(level_diff, ability_increase);
  }
  $("#max_ranks").text(calcd_level + 1 + 3);
  if (chardata.abilities == null) chardata.abilities = {};
  race = races({
    name: chardata.race_name
  }).first();
  for (ability in abilities) {
    chardata.abilities[ability] = $("#ability_" + ability).val();
    if (race.abilities[ability]) {
      $("#race_" + ability + "_mod").val(pos(race.abilities[ability]));
    }
  }
  langs = languages().get();
  char_langs = chardata.languages || [];
  class_langs = [];
  for (classname in chardata.classes) {
    clazz = classes().first({
      name: classname
    });
    class_langs.concat((clazz.languages != null ? clazz.languages : []));
  }
  i = 0;
  len = langs.length;
  while (i < len) {
    is_race_language = race.languages.indexOf(langs[i].name) > -1;
    is_class_language = class_langs.indexOf(langs[i].name) > -1;
    checked = char_langs.indexOf(langs[i].name) > -1 || is_race_language || is_class_language;
    $("#language_" + langs[i]._id + "_check").attr("checked", checked);
    $("[id^='language_" + langs[i]._id + "']").toggleClass("disabled class_feat", is_class_language || is_race_language);
    if (is_class_language || is_race_language) {
      $("#language_" + langs[i]._id + "_check").attr("disabled", "disabled");
      lang_idx = chardata.languages.indexOf(langs[i].name);
      if ((chardata.languages != null) && lang_idx > -1) {
        remove(chardata.languages, lang_idx);
      }
    } else {
      $("#language_" + langs[i]._id + "_check").removeAttr("disabled");
    }
    i++;
  }
  skills().each(function(skill, i) {
    var ability_mod, char_feats, feat_mod, mods, race_mod, skill_ability_score, subtype, _results;
    race_mod = (race.skills[skill.name] != null ? race.skills[skill.name] : 0);
    mods = (race_mod > 0 ? "r:" + pos(race_mod) : "");
    feat_mod = 0;
    char_feats = chardata.get_all_char_feats();
    char_feats().each(function(char_feat, j) {
      var acp, feat;
      console.log(char_feat.name);
      feat = feats({
        name: char_feat.name
      }).first();
      console.log(feat.name);
      if (feat.skills && feat.skills[skill.name]) {
        feat_mod += feat.skills[skill.name];
      }
      if (skill.mobility && feat.mobility) return acp = feat.mobility(acp);
    });
    feat_mod += chardata.calc_equip_mod(skill.name);
    mods += (feat_mod > 0 ? " o:" + pos(feat_mod) : "");
    skill_ability_score = $("input#ability_" + skill.ability).val();
    ability_mod = calc_ability_modifier(parseInt(skill_ability_score));
    mods += (ability_mod !== 0 ? " a:" + pos(ability_mod) : "");
    $("#" + skill._id + "_mods").text(mods);
    if (skill.subtypes) {
      _results = [];
      for (subtype in skill.subtypes) {
        _results.push(edit.update_skills(skill, subtype));
      }
      return _results;
    } else {
      return edit.update_skills(skill);
    }
  });
  skill_pts = edit.calc_skill_points();
  $("#skill_pts_remaining").html((skill_pts < 0 ? ["<span class='alarm'>", skill_pts, "</span>"].join("") : skill_pts));
  edit.update_race_mods();
  build_data_part("weapons", "weapon");
  build_data_part("armors", "armor");
  build_data_part("shields", "shield");
  $("#classespart").html("");
  for (classname in chardata.classes) {
    feature_count = 0;
    $("#classespart").append("<fieldset id='" + classname + "'><legend>" + classname + "</legend></fieldset>");
    clazz = classes({
      name: classname
    }).first();
    if (clazz.custom && clazz.custom.edit) {
      for (level in clazz.custom.edit) {
        if (chardata.classes[classname].level >= level) {
          for (feature in clazz.custom.edit[level]) {
            feature_count++;
            $("fieldset[id='" + classname + "']").append(clazz.custom.edit[level][feature].ui);
            clazz.custom.edit[level][feature].script();
          }
        } else {
          break;
        }
      }
    }
    if (feature_count === 0) $("fieldset[id='" + classname + "']").remove();
  }
  save_character(chardata);
  return set_links_part(1);
};

edit.update_skills = function(skill, subtype) {
  var char_skill, class_skill, skill_link, skill_text, updata;
  class_skill = is_class_skill(skill, subtype);
  skill_text = $("input[id='skill_" + skill._id + "_input']" + (subtype ? "[subtype='" + subtype + "']" : ""));
  if (skill_text.val() !== "" && parseInt(skill_text.val()) > 0) {
    if (chardata.skills == null) {
      chardata.skills = TAFFY([
        {
          skill_name: skill.name
        }
      ]);
    }
    char_skill = chardata.skills.first({
      skill_name: skill.name
    });
    chardata.skills.insert({
      skill_name: !char_skill ? skill.name : void 0
    });
    updata = {};
    if (subtype) {
      updata.subtypes = $.extend({}, chardata.skills.first({
        skill_name: skill.name
      }).subtypes);
      updata.subtypes[subtype] = skill_text.val();
    } else {
      updata.ranks = skill_text.val();
    }
    chardata.skills.update(updata, {
      skill_name: skill.name
    });
  }
  skill_link = $("a[id='skill_" + skill._id + "']" + (subtype ? "[subtype='" + subtype + "']" : ""));
  if (skill_link && class_skill) {
    return skill_link.attr("style", "font-weight: bold;");
  }
};

edit.update_race_mods = function() {
  var ability, mod, race, _results;
  race = races({
    name: $("#race").val()
  }).first();
  if (race) {
    _results = [];
    for (ability in abilities) {
      mod = (!(race.abilities[ability] != null) ? " " : race.abilities[ability]);
      _results.push($("#race_" + ability + "_mod").text(pos(mod)));
    }
    return _results;
  }
};

edit.update_language = function(language_id) {
  var char_lang_idx, checked, language;
  checked = $("#language_" + language_id + "_check").attr("checked");
  language = languages().first({
    _id: language_id
  });
  char_lang_idx = chardata.languages().indexOf(language.name);
  if (!checked && char_lang_idx > -1) {
    return remove(chardata.languages, char_lang_idx);
  } else {
    return chardata.languages().push(language.name);
  }
};
