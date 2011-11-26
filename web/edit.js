var edit;

edit = function() {};

edit.calc_skill_points = function() {
  var char_lang_count, class_skills_per_level, classname, int_mod, int_score, is_human, level_1_points, total_skill_points;
  int_score = $("#ability_Int").val();
  int_mod = calc_ability_modifier(int_score);
  is_human = races.first({
    name: "Human"
  }).name === $("#race").val();
  total_skill_points = 0;
  class_skills_per_level = 0;
  for (classname in chardata.classes) {
    class_skills_per_level = classes.first({
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
  var align_html, level, race_html, skill_html;
  set_links_part(1);
  $("#content").html;
  if (chardata.abilities == null) chardata.abilities = {};
  race_html = create_select("race", races.get(), "edit.recalc_edit_page()", false, "style='width: 75px;'");
  $("#race_select").html(race_html);
  align_html = [];
  alignments.forEach(function(alignment, i) {
    return goodness.forEach(function(good, j) {
      return align_html.push(["<option id='alignment_option_", alignment.name, "_", good.name, "' data_id='", i, ",", j, "' value='", alignment.name, ",", good.name, "'>", alignment.name, " ", good.name, "</option>"].join(""));
    });
  });
  $("#alignment").html(align_html.join(""));
  $("#alignment").change(function() {
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
    chardata.alignment = $("#alignment").val().split(" ")[0];
    chardata.goodness = $("#alignment").val().split(" ")[1];
    return console.groupEnd();
  });
  align_html = [];
  align_html.push("<option id='deity_option_-1' data_id='' value=''></option>");
  $.each(get_deities_for_alignment(chardata.alignment, chardata.goodness), function(i, deity) {
    return align_html.push(["<option id='deity_option_" + deity.name + "' data_id='" + deity._id + "' value='" + deity.name + "'>" + deity.name + "</option>"]);
  });
  $("#deity").html(align_html.join(""));
  $("#deity").change(function() {
    chardata.domains = [];
    return $("#deity").trigger("DEITY_CHANGED");
  });
  $("#language_table").html(edit.create_languages());
  $("#languages").hide();
  skill_html = [];
  skills.forEach(function(skill, i) {
    var char_skill, subtype, _results;
    if (skill.subtypes) {
      skill_html.push(["<tr onclick=\"toggle_visible('" + skill.name + "')\" bgcolor='#E2F0F9'><td colspan=3 style='vertical-align: middle;'><a class='fake_link' id='skill_", skill._id, "'><span id='", skill.name, "_expand_flag' style='float: right'><img src='images/collapsed.png'/></span>", skill.name, "</a></td></tr><tr id='", skill.name, "'><td colspan=3><table id='", skill.name, "_table' width='100%'style='border-collapse: collapse;'>"].join(""));
      for (subtype in skill.subtypes) {
        if (!chardata.skills || !chardata.skills.first({
          skill_name: skill.name
        }) || !chardata.skills.first({
          skill_name: skill.name
        }).subtypes[subtype]) {
          skill_html.push(["<tr><td style='vertical-align: top;'><a id='skill_", skill._id, "' class='fake_link' onclick='show_item_detail(skills, \"", skill._id, "\")' subtype='" + subtype + "'>", skill.name, " (", subtype, ")</a></td><td style='vertical-align: top;'><input id='skill_", skill._id, "_input' subtype='", subtype, "' class='two_digit' value='' onblur='edit.recalc_edit_page()'></td><td style='font-size: xx-small; vertical-align: top;'>", skill.ability, "<br><span id='", skill._id, "_mods' style='font-size: xx-small;'></span></td></tr>"].join(""));
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
  skills.get({
    subtypes: {
      "!is": null
    }
  }).forEach(function(skill, i) {
    return $("#" + skill.name).hide();
  });
  build_data_part("weapons", "weapon");
  build_data_part("armors", "armor");
  build_data_part("shields", "shield");
  if (is_empty(chardata.classes)) {
    chardata.classes = {};
    level = ($("#xp").val() === "" ? 0 : parseInt($("#xp").val()));
    return show_class_dialog(calc_level(level) + 1, 0);
  }
};

edit.create_languages = function() {
  var i, langs, language_html, len;
  language_html = [];
  langs = languages.get();
  i = 0;
  len = langs.length;
  while (i < len) {
    language_html.push(["<tr id='language_", langs[i]._id, "'><td><input id='language_", langs[i]._id, "_check' onclick='update_language(\"", langs[i]._id, "\"); edit.recalc_edit_page();' type='checkbox'/></td><td><label for='language_", langs[i]._id, "_check'>", langs[i].name, "</label></td>"].join(""));
    i++;
  }
  return language_html.join("");
};

edit.populate_edit_page = function() {
  var alignment_name, deity_name, domain_name, goodness_name, race, race_name;
  if (chardata.name) $("#charname").val(chardata.name);
  race_name = chardata.race_name || $("#race").val();
  race = races.first({
    name: race_name
  });
  $("#race option[id='race_option_" + race._id + "']").attr("selected", true);
  $("input[id='hp']").val(chardata.hp || "");
  $("#xp").val(chardata.xp || "");
  $("#weapon_style").selectOptions(chardata.weapon_style || "two_weapon_combat");
  alignment_name = chardata.alignment || $("#alignment").val().split(" ")[0];
  goodness_name = chardata.goodness || $("#alignment").val().split(" ")[1];
  $("#alignment option[id='alignment_option_" + alignment_name + "_" + goodness_name + "']").attr("selected", true);
  deity_name = chardata.deity || $("#deity").val();
  $("#deity option[id='deity_option_" + deity_name + "']").attr("selected", true);
  domain_name = chardata.domain_name || $("#domain").val();
  $("#domain option[id='domain_option_" + domain_name + "']").attr("selected", true);
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
  var ability, ability_increase, char_langs, checked, class_langs, classname, clazz, curr_level, feature, feature_count, i, is_class_language, is_race_language, lang_idx, langs, len, level, level_diff, new_level, race, skill_pts;
  chardata.name = $("#charname").val();
  curr_level = calc_level(chardata.xp);
  new_level = calc_level($("#xp").val());
  chardata.xp = $("#xp").val();
  if (curr_level < new_level) {
    level_diff = new_level - curr_level;
    ability_increase = (new_level + 1) % 4 === 0;
    show_class_dialog(level_diff, ability_increase);
  }
  curr_level = new_level;
  $("#max_ranks").text(curr_level + 1 + 3);
  chardata.hp = $("input[id='hp']").val();
  chardata.race_name = $("#race").val();
  chardata.alignment = $("#alignment").val().split(",")[0];
  chardata.goodness = $("#alignment").val().split(",")[1];
  chardata.deity = $("#deity").val();
  chardata.domain = $("#domain").val();
  if (chardata.abilities == null) chardata.abilities = {};
  race = races.first({
    name: chardata.race_name
  });
  for (ability in abilities) {
    chardata.abilities[ability] = $("#ability_" + ability).val();
    if (race.abilities[ability]) {
      $("#race_" + ability + "_mod").val(pos(race.abilities[ability]));
    }
  }
  langs = languages.get();
  char_langs = chardata.languages || [];
  class_langs = [];
  for (classname in chardata.classes) {
    clazz = classes.first({
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
  skills.forEach(function(skill, i) {
    var ability_mod, feat_mod, mods, race_mod, skill_ability_score, subtype, _results;
    race_mod = (race.skills[skill.name] != null ? race.skills[skill.name] : 0);
    mods = (race_mod > 0 ? "r:" + pos(race_mod) : "");
    feat_mod = 0;
    get_all_char_feats().forEach(function(char_feat, j) {
      var acp, feat;
      feat = feats.first({
        name: char_feat.feat_name
      });
      if (feat.skills && feat.skills[skill.name]) {
        feat_mod += feat.skills[skill.name];
      }
      if (skill.mobility && feat.mobility) return acp = feat.mobility(acp);
    });
    feat_mod += calc_equip_mod(skill.name);
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
    clazz = classes.first({
      name: classname
    });
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
  save_character();
  return set_links_part(1);
};

edit.update_skills = function(skill, subtype) {
  var char_skill, class_skill, skill_link, skill_text, updata;
  class_skill = is_class_skill(skill, subtype);
  skill_text = $("input[id='skill_" + skill._id + "_input']" + (subtype ? "[subtype='" + subtype + "']" : ""));
  if (skill_text.val() !== "" && parseInt(skill_text.val()) > 0) {
    if (chardata.skills == null) {
      chardata.skills = new TAFFY([
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
  race = races.first({
    name: $("#race").val()
  });
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
  language = languages.first({
    _id: language_id
  });
  char_lang_idx = chardata.languages.indexOf(language.name);
  if (!checked && char_lang_idx > -1) {
    return remove(chardata.languages, char_lang_idx);
  } else {
    return chardata.languages.push(language.name);
  }
};
