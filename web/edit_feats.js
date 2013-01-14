
edit_feats.build_feats_page = function() {
  var allfeats, char_classes, classname, clazz, feats_page_layout, i, is_spellcaster, l, prereqs, removed, temp_feats;
  char_classes = [];
  for (classname in chardata.classes) {
    char_classes.push(classname);
  }
  is_spellcaster = false;
  for (classname in chardata.classes) {
    if (spellcasters.indexOf(classname) > -1 && classes.first({
      name: classname
    }).spells_per_day[calc_current_level()][0] !== "-") {
      is_spellcaster = true;
      break;
    }
  }
  set_links_part(2);
  if (chardata.feats == null) chardata.feats = TAFFY([]);
  feats_page_layout = "<div id='rogue_special_abilities'></div><div id='feats'></div>";
  $("#content").html(feats_page_layout);
  $("#feats").html("<table width=100% style='border: 1px solid #8DC3E9; border-collapse: collapse;'><tr style='background: #8DC3E9;'><td style='text-align: left'>" + "<span id='feats_available' style='float: right'>Base: <span id='feats_remaining'></span> Bonus: <span id='bonus_feats_remaining'></span></span>Feats</td></tr></table>" + "<table id='feats_table' style='border: 1px solid #D0D0D0; border-collapse: collapse; width: 100%;'></table>");
  allfeats = TAFFY(feats.get());
  allfeats.orderBy(function(a, b) {
    if ((!(a.prereqs != null) || !(a.prereqs.feats != null)) && (a.name < b.name)) {
      return -1;
    } else {
      return 1;
    }
  });
  temp_feats = allfeats.get();
  for (i in temp_feats) {
    removed = false;
    prereqs = temp_feats[i].prereqs;
    if (prereqs && prereqs.class_features) {
      for (classname in chardata.classes) {
        if (removed) break;
        clazz = classes.first({
          name: classname
        });
        for (l in prereqs.class_features) {
          if (!clazz.class_features.indexOf(prereqs.class_features[l]) > -1) {
            allfeats.remove({
              name: temp_feats[i].name
            });
            removed = true;
            break;
          }
        }
      }
    }
    if (!removed && prereqs && prereqs.classes) {
      for (classname in chardata.classes) {
        if (!prereqs.classes[classname]) {
          allfeats.remove({
            name: temp_feats[i].name
          });
          break;
        }
      }
    }
  }
  return allfeats.forEach(function(feat, n) {
    if (!feat.hidden) return create_feat_listing(feat, 1);
  });
};

edit_feats.create_feat_listing = function(feat, indent) {
  var all_options, count, db, expand_bar, html, multi, prereq;
  indent = (!(indent != null) ? 0 : indent);
  count = indent;
  if (feat.prereqs && feat.prereqs.feats) {
    prereq = allfeats.first({
      name: feat.prereqs.feats[0]
    });
    if (prereq) indent = create_feat_listing(prereq, indent + 1);
  }
  html = "<tr id='" + feat._id + "' class='feat'><td class='feat'><input id='" + feat._id + "' type='checkbox' class='feat' /><td id='" + feat._id + "' class='feat' valign='top'><a id='" + feat._id + "' class='fake_link'>" + feat.name + "</a></td><td class='feat' valign='top'>" + feat.summary + "</td></tr>";
  if ($("#" + feat._id).length === 0) {
    if (feat.prereqs && feat.prereqs.feats) {
      prereq = feats.first({
        name: feat.prereqs.feats[0]
      });
      multi = (prereq.multi ? "_sub_" : "");
      $("#" + prereq._id + multi).after(html);
      $("td[id='" + feat._id + "']").css("padding-left", (10 * (indent - count)) + "px");
    } else {
      $("#feats_table").append(html);
    }
    $("a[id='" + feat._id + "']").bind("click", {
      feat_id: feat._id
    }, function(e) {
      return show_item_detail(feats, e.data.feat_id);
    });
    if (feat.multi && feat.multi !== "count") {
      $("input[id='" + feat._id + "']").remove();
      db = feat.multi.db || feat.multi.type;
      all_options = filter_options(feat, db);
      expand_bar = "<tr id='" + feat._id + "_sub'><td colspan='2'></td><td style='width: 100%' bgcolor='#8DC3E9'><a class='fake_link'><span id='" + feat._id + "_sub__expand_flag' style='float: right; vertical-align: middle;'><img src='images/collapsed.png' /></span>" + feat.name + " options</a></td></tr>";
      $("tr#" + feat._id).after(expand_bar);
      $("tr#" + feat._id + "_sub").bind("click", {
        feat_id: feat._id
      }, function(e) {
        return toggle_visible(e.data.feat_id + "_sub_");
      });
      db = feat.multi.db || feat.multi.type;
      create_selector_group(feat, "", all_options, db, 2, update_feat);
      $("#" + feat._id + "_sub_").hide();
      if (all_options.length === 0) disable_feat(feat, true);
    } else {
      $("input[id='" + feat._id + "']").bind("click", {
        feat: feat
      }, function(e) {
        return update_feat(e.data.feat, $(this).attr("checked"));
      });
    }
  }
  return indent;
};

edit_feats.populate_feats_page = function() {
  allfeats.forEach(function(feat, i) {
    var char_feat, char_multi, checked, multi_id, _results;
    if (feat.multi) {
      char_feat = false;
      if (chardata.feats != null) {
        char_feat = chardata.feats.first({
          feat_name: feat.name
        });
      }
      if (feat.multi !== "count") {
        char_multi = (char_feat && (char_feat.multi != null) ? char_feat.multi : []);
        i = 0;
        _results = [];
        while (i < char_multi.length) {
          multi_id = feat.multi.type.first({
            name: char_multi[i]
          })._id;
          $("input#" + feat._id + "_" + multi_id).attr("checked", true);
          _results.push(i++);
        }
        return _results;
      } else {
        $("span#" + feat._id + "_count").text((char_feat ? char_feat.multi : 1));
        return $("tr#" + feat._id + "_sub").toggle(checked);
      }
    } else {
      checked = (chardata.feats != null) && chardata.feats.first({
        feat_name: feat.name
      });
      if (is_class_feat(feat.name)) {
        checked = true;
        disable_feat(feat, true);
      }
      $("input[id='" + feat._id + "']").attr("checked", checked);
      if (checked && $("input[id='" + feat._id + "']").attr("disabled")) {
        return $("tr#" + feat._id).addClass("class_feat");
      }
    }
  });
  update_feats_remaining();
  return calc_prereqs();
};

edit_feats.disable_feat = function(feat, disabled) {
  var checked;
  if (disabled) {
    $("input[id='" + feat._id + "']").attr("disabled", "disabled");
  } else {
    $("input[id='" + feat._id + "']").removeAttr("disabled");
  }
  $("#" + feat._id).removeClass((disabled ? "enabled" : "disabled")).addClass((disabled ? "disabled" : "enabled"));
  checked = $("input[id='" + feat._id + "']").attr("checked");
  if (feat.multi) {
    return $("tr#" + feat._id + "_sub").toggle(feat.multi && !disabled);
  }
};

edit_feats.update_feats_remaining = function() {
  var count;
  count = calc_feats_remaining();
  $("#feats_remaining").text(count.base_feats_remaining);
  return $("#bonus_feats_remaining").text(count.bonus_feats.count);
};

edit_feats.calc_prereqs = function() {
  return allfeats.forEach(function(feat, i) {
    var prereqs_met;
    prereqs_met = false;
    if (!is_class_feat(feat.name)) {
      if (feat.prereqs) {
        prereqs_met = is_prereqs_met(feats._id, feat.prereqs) || prereqs_met;
      } else {
        prereqs_met = true;
      }
      return disable_feat(feat, !prereqs_met);
    }
  });
};

edit_feats.is_prereqs_met = function(feat_id, prereqs) {
  var char_feats, char_skill, clazz, group_feats, j, k, l, prereqs_met;
  char_feats = get_char_feats();
  prereqs_met = true;
  if (prereqs.or) {
    for (j in prereqs.or) {
      prereqs_met = is_prereqs_met(feat_id, prereqs.or[j]);
      if (prereqs_met) break;
    }
    if (!prereqs_met) return false;
  }
  if (prereqs.level) {
    for (k in chardata.classes) {
      if (chardata.classes[k].level < prereqs.level) return false;
    }
  }
  if (prereqs.classes) {
    for (clazz in chardata.classes) {
      if (prereqs.classes[clazz] > chardata.classes[clazz].level) return false;
    }
  }
  if (prereqs.pick) {
    if (prereqs.pick.feats) handle_pick(prereqs.pick.feats, prereqs.pick.count);
    if (prereqs.pick.group) {
      group_feats = feats.get({
        group: {
          has: prereqs.pick.group
        }
      });
      handle_pick(group_feats, prereqs.pick.count);
    }
  }
  if (prereqs.feats) {
    for (k in prereqs.feats) {
      if ((!(chardata.feats != null) || chardata.feats.first({
        feat_name: prereqs.feats[k]
      }) === false) && !is_class_feat(prereqs.feats[k])) {
        return false;
      }
    }
  }
  if (prereqs.multi) {
    for (k in prereqs.multi) {
      for (l in prereqs.multi[k]) {
        if (chardata.feats || !chardata.feats.first({
          name: k
        }) || !(chardata.feats.first({
          name: k
        }).multi.indexOf(prereqs.multi[k][l]) > -1)) {
          return false;
        }
      }
    }
  }
  if (prereqs.abilities) {
    for (k in prereqs.abilities) {
      if (chardata.abilities[k] < prereqs.abilities[k]) return false;
    }
  }
  if (prereqs.skills) {
    for (k in prereqs.skills) {
      char_skill = chardata.skills && chardata.skills.first({
        name: k
      });
      if (char_skill && char_skill.ranks < prereqs.skills[k]) return false;
    }
  }
  return true;
};

edit_feats.calc_feats_remaining = function() {
  var base_feats_remaining, bonus, char_feats, classname, clazz, feat, i, level;
  bonus = {
    count: 0,
    groups: {},
    feats: {}
  };
  for (classname in chardata.classes) {
    clazz = classes.first({
      name: classname
    });
    if (clazz.custom && clazz.custom.feats) {
      for (level in clazz.custom.feats) {
        if (calc_current_level() >= level) {
          clazz.custom.feats[level].script(bonus);
        } else {
          break;
        }
      }
    }
  }
  char_feats = (!(chardata.feats != null) ? [] : chardata.feats.get());
  base_feats_remaining = calc_total_base_feats_count(chardata.race_name, chardata.xp);
  for (i in char_feats) {
    feat = feats.first({
      name: char_feats[i].feat_name
    });
    if (char_feats[i].multi) {
      if (jQuery.isArray(char_feats[i].multi)) {
        if (is_bonus_eligible(feat, bonus)) {
          bonus.count -= char_feats[i].multi.length;
          if (bonus.count < 0) {
            base_feats_remaining += bonus.count;
            bonus.count = 0;
          }
        } else {
          base_feats_remaining -= char_feats[i].multi.length;
        }
      } else {
        if (is_bonus_eligible(feat, bonus)) {
          bonus.count -= parseInt(char_feats[i].multi);
        } else {
          base_feats_remaining -= parseInt(char_feats[i].multi);
        }
      }
    } else {
      if (is_bonus_eligible(feat, bonus)) {
        bonus.count -= 1;
      } else {
        base_feats_remaining -= 1;
      }
    }
  }
  return {
    base_feats_remaining: base_feats_remaining,
    bonus_feats: bonus
  };
};

edit_feats.filter_options = function(feat, options_db) {
  var char_feat, char_feat_ref, filtered_options, i, j, k, multi_feat, option;
  filtered_options = [];
  if (feat.multi.db) {
    filtered_options = filtered_options.concat(feat.multi.db.get(feat.multi.filter));
  }
  if (feat.multi.feats) {
    for (i in feat.multi.feats) {
      multi_feat = feats.first({
        name: feat.multi.feats[i]
      });
      char_feat = get_char_feats().first({
        name: multi_feat.name
      });
      if (multi_feat.collection) {
        if (char_feat) {
          filtered_options = filtered_options.concat(multi_feat.collection.db.get(multi_feat.collection.filter));
        }
      } else {
        if (char_feat && (char_feat.multi != null) && chardata.feats) {
          char_feat_ref = chardata.feats.first({
            feat_name: multi_feat.name
          });
          for (j in char_feat_ref.multi) {
            option = feat.multi.type.first({
              name: char_feat_ref.multi[j]
            });
            if (multi_feat.multi.filter) {
              for (k in multi_feat.multi.filter) {
                if (option[k]) filtered_options.push(option);
              }
            } else {
              filtered_options.push(option);
            }
          }
        }
      }
    }
  }
  filtered_options.sort(function(a, b) {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });
  return filtered_options;
};

edit_feats.update_count = function(feat) {
  var char_feat, count;
  count = calc_feats_remaining();
  if (count.base_feats_remaining === 0 && !is_bonus_eligible(feat, count.bonus_feats)) {
    alert("No feat selections remaining.");
    return;
  }
  char_feat = chardata.feats.first({
    feat_name: feat_name
  });
  char_feat.multi += 1;
  $("span[id='feat_" + feat_id + "_count']").text(char_feat.multi);
  save_character();
  return update_feats_remaining();
};

edit_feats.update_feat = function(feat, is_selected, multi_item, multi_type) {
  var char_feat, count, multi, total_feats_remaining;
  multi = (multi_item ? "_" + multi_type.first({
    name: multi_item
  })._id : "");
  count = calc_feats_remaining();
  total_feats_remaining = count.bonus_feats.count + count.base_feats_remaining;
  char_feat = chardata.feats.first({
    feat_name: feat.name
  });
  if (is_selected) {
    if (total_feats_remaining === 0 || (count.base_feats_remaining === 0 && chardata.class_name === "Fighter" && !combat_feats.indexOf(feat.name) > -1)) {
      $("input[id='" + feat._id + multi + "']").attr("checked", false);
      alert("No feat selections remaining.");
    } else {
      if (!char_feat) {
        count = chardata.feats.insert({
          feat_name: feat.name
        });
        char_feat = chardata.feats.first({
          feat_name: feat.name
        });
      }
      if (multi_item) {
        if (char_feat.multi == null) char_feat.multi = [];
        char_feat.multi.push(multi_item);
      }
    }
  } else {
    if (multi_item) {
      char_feat.multi.splice(char_feat.multi.indexOf(multi_item), 1);
      chardata.feats.remove({
        feat_name: char_feat.multi.length === 0 ? feat.name : void 0
      });
    } else {
      chardata.feats.remove({
        feat_name: feat.name
      });
    }
  }
  save_character();
  inform_dependents(feat, multi_item);
  update_feats_remaining();
  return calc_prereqs();
};

edit_feats.inform_dependents = function(feat) {
  return feats.get({
    multi: {
      "!is": null
    }
  }).forEach(function(dependent, i) {
    var all_options, db, hidden;
    if (dependent.multi.feats && dependent.multi.feats.indexOf(feat.name) > -1) {
      if (dependent.multi && dependent.multi.feats) inform_dependents(dependent);
      db = dependent.multi.db || dependent.multi.type;
      all_options = filter_options(dependent, db);
      hidden = $("#" + dependent._id).hasClass("disabled");
      $("tr[id='" + dependent._id + "_sub_']").html("");
      create_selector_group(dependent, "", all_options, db, 2, update_feat);
      $("#" + dependent._id + "_sub__expand_flag").text((hidden ? "+" : "-"));
      return $("#" + dependent._id + "_sub_").hide(hidden);
    }
  });
};

edit_feats.create_rogue_special_abilities = function(level, clazz) {
  var count, i, rogue_specials, selected, selected_special, special_html;
  rogue_specials = [];
  for (i in rogue_special_abilities) {
    rogue_specials.push(special_abilities.first({
      name: rogue_special_abilities[i]
    }));
  }
  count = 0;
  for (i in clazz.special_abilities_levels) {
    if (level >= clazz.special_abilities_levels[i]) count++;
  }
  special_html = "";
  $("#rogue_special_abilities").html("<table id='rogue_specials_table' style='border: 1px solid #D0D0D0' width='100%' border='0' margin='0'>");
  $("#rogue_specials_table").append("<tbody><tr id='rogue_specials'><td colspan='2' bgcolor='#8DC3E9'><span id='rogue_specials_expand_flag' style='font-family: Monospace; float: right'>+</span><a class='fake_link'>Rogue Special Abilities</a></td></tr></tbody>");
  $("tr[id='rogue_specials']").bind("click", function(e) {
    return toggle_visibility("rogue_specials");
  });
  i = 0;
  while (i < count) {
    selected = (chardata.rogue_special_abilities && (chardata.rogue_special_abilities[i] != null) ? chardata.rogue_special_abilities[i].special_id : null);
    selected_special = special_abilities.first({
      name: selected
    });
    special_html += "<tr id='special_" + i + "'><td valign='top'>";
    special_html += create_select1("special_" + i, rogue_specials, "update_rogue_special_ability( " + i + ")", selected);
    special_html += "</a></td><td id='special_" + i + "_description'><a class='fake_link' onclick='show_item_detail(special_abilities, " + (selected_special ? selected_special._id : rogue_specials[i]._id) + ")'>" + (selected_special ? selected_special.description : rogue_specials[i].description) + "</a></td></tr>";
    if (selected === "Skill Mastery") {
      special_html += create_skill_selection_matrix(i);
    }
    i++;
  }
  special_html += "</tbody></table>";
  $("#rogue_special_abilities").html(special_html);
  $("tr[id^='special']:odd").css("background-color", "#EFF1F1");
  return $("#rogue_specials").hide();
};

edit_feats.handle_pick = function(group, count) {
  var i, matches;
  matches = 0;
  for (i in group) {
    if (char_feats.first({
      name: group[i]
    })) {
      matches++;
      if (matches === count) break;
    }
  }
  if (matches < count) return false;
};

edit_feats.find_match = function(o1, o2) {
  var prop;
  for (prop in o1) {
    if (o2[prop]) return true;
  }
  return false;
};

edit_feats.is_bonus_eligible = function(feat, bonus_feats) {
  return bonus_feats.count > 0 && (bonus_feats.feats[feat.name] || find_match(bonus_feats.groups, feat.groups));
};

edit_feats.allfeats = null;
