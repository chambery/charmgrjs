var allfeats = null;

function build_feats_page() {
  // TODO - FIX ME!!
  char_classes = []
  for (var classname in chardata.classes) {
    char_classes.push(classname);
  }
  // // console.group("build_feats_page");
  var is_spellcaster = false;
  for (var classname in chardata.classes) {
    if (spellcasters.indexOf(classname) > -1 && classes({ name : classname }).first()
            .spells_per_day[calc_current_level()][0] != '-')
    {
      is_spellcaster = true;
      break;
    }
  }

  set_links_part(2);
  if (chardata.feats == null)
  {
    chardata.feats = TAFFY( []);
  }
  var feats_page_layout = "<div id='rogue_special_abilities'></div><div id='feats'></div>";
  $('#content').html(feats_page_layout);
  $('#feats').html(
      "<table width=100% style='border: 1px solid #8DC3E9; border-collapse: collapse;'><tr style='background: #8DC3E9;'><td style='text-align: left'>"
      + "<span id='feats_available' style='float: right'>Base: <span id='feats_remaining'></span> Bonus: <span id='bonus_feats_remaining'></span></span>Feats</td></tr></table>"
          + "<table id='feats_table' style='border: 1px solid #D0D0D0; border-collapse: collapse; width: 100%;'></table>");

  allfeats = TAFFY(feats().get());
  allfeats.sort("name");

  var temp_feats = allfeats().get();
  for ( var i in temp_feats) {
    var removed = false;
    // weed out the impossible feats
    // class features, eg "Channel enabledergy"
    var prereqs = temp_feats[i].prereqs;
    if(prereqs && prereqs.class_features) {
      for(var classname in chardata.classes) {
        if(removed) { break; }
        var clazz = classes({ name: classname }).first();
        for(var l in prereqs.class_features) {
          if(!clazz.class_features.indexOf(prereqs.class_features[l]) > -1) {
            allfeats({ name: temp_feats[i].name }).remove();
            removed = true;
            break;
          }
        }
      }
    }
    // remove class-restricted feats
    if (!removed && prereqs && prereqs.classes) {
      for (var classname in chardata.classes) {
        if (!prereqs.classes[classname]) {
          allfeats({ name: temp_feats[i].name }).remove();
          break;
        }
      }
    }
  }

  var filtered_feats = allfeats().get();
  filtered_feats.sort(function(a, b) {
    // console.log(a.name + ((a.prereqs == null || a.prereqs.feats == null) && (a.name < b.name) ? " < " : " > ") + b.name);
    return (a.prereqs != null && a.prereqs.feats != null) ? 1 : -1;  // && (a.name < b.name)
  });

  filtered_feats.forEach( function(feat, n) {
    if (!feat.hidden) {
      create_feat_listing(feat, 1);
    }
  });
  // // console.groupEnd();
}

function create_feat_listing(feat, indent) {
  // console.group("create_feat_listing");
  var foo = "";
  for (var i = indent - 2; i >= 0; i--) {
    foo += "\t";
  };
  for(var p in feat.prereqs)
  {
    if(p.feats != null)
    {
      for(var fp in prereqs.feats)
      {
      }

    }

  }
  indent = indent == null ? 0 : indent;
  var count = indent;
  if (feat.prereqs && feat.prereqs.feats) {
    /* if there are multiple prereqs, nest it under the first one */
    var prereq = allfeats({ name : feat.prereqs.feats[0] }).first();
    if(prereq) {
      indent = create_feat_listing(prereq, indent + 1);
    }
  }
  var html = "<tr id='" + feat._id + "' class='feat'><td class='feat'><input id='" + feat._id + "' type='checkbox' class='feat' /><td id='" + feat._id + "' class='feat' valign='top'><a id='"
      + feat._id + "' class='fake_link'>" + feat.name + "</a></td><td class='feat' valign='top'>" + feat.summary + "</td></tr>";

  // ignore already printed feats
  if ($('#' + feat._id).length == 0) {
    if (feat.prereqs && feat.prereqs.feats) {
      var prereq = feats().first( {
        name : feat.prereqs.feats[0]
      });
      var multi = prereq.multi ? "_sub_" : "";
      $('#' + prereq._id + multi).after(html);
      $("td[id='" + feat._id + "']").css('padding-left', (10 * (indent - count)) + 'px');
    } else {
      $('#feats_table').append(html);
    }
    $("a[id='" + feat._id + "']").bind("click", {
      feat_id : feat._id
    }, function(e) {
      return show_item_detail(feats, e.data.feat_id);
    });

    if (feat.multi && feat.multi != "count") {
      $("input[id='" + feat._id + "']").remove();

      var db = feat.multi.db || feat.multi.type;
      var all_options = filter_options(feat, db);
      var expand_bar = "<tr id='" + feat._id + "_sub'><td colspan='2'></td><td style='width: 100%' bgcolor='#8DC3E9'><a class='fake_link'><span id='" + feat._id
          + "_sub__expand_flag' style='float: right; vertical-align: middle;'><img src='images/collapsed.png' /></span>" + feat.name + " options</a></td></tr>";
      $("tr#" + feat._id).after(expand_bar);
      $("tr#" + feat._id + "_sub").bind('click', {
        feat_id : feat._id
      }, function(e) {
        toggle_visible(e.data.feat_id + "_sub_");
      });
      var db = feat.multi.db || feat.multi.type;
      create_selector_group(feat, "", all_options, db, 2, update_feat);
      $("#" + feat._id + "_sub_").hide();

      if (all_options.length == 0) {
        disable_feat(feat, true);
      }

    } else {
      $("input[id='" + feat._id + "']").bind('click', {
        feat : feat
      }, function(e) {
        return update_feat(e.data.feat, $(this).attr('checked'));
      });
    }

  }

  // console.groupEnd();
  return indent;
}

function populate_feats_page() {
  // // console.group("populate_feats_page");
  // apply class customizations
//  for (var classname in chardata.classes) {
//    var clazz = classes({ name : classname }).first();
//    if (clazz.custom && clazz.custom.feats) {
//      for(var feature in clazz.custom.feats) {
//        clazz.custom.feats[feature]();
//      }
//    }
//  }

  // TODO - before looping set up all class feats
  allfeats().each( function(feat, i) {
        // console.log(feat.name);
        // console.log("element: " + $("input[id='" + feat._id + "']").length);
    if (feat.multi) {
      var char_feat = false;
      if (chardata.feats != null) {
        var char_feat = chardata.feats().first( {
          feat_name : feat.name
        });
      }
      if (feat.multi != "count") {
        var char_multi = (char_feat && char_feat.multi != null ? char_feat.multi : []);

        // put a check for each of the multi selections
        for ( var i = 0; i < char_multi.length; i++) {
          var multi_id = feat.multi.type.first( {
            name : char_multi[i]
          })._id;
          $("input#" + feat._id + "_" + multi_id).attr('checked', true);
        }
      } else {
        // count
        $("span#" + feat._id + "_count").text((char_feat ? char_feat.multi : 1));
        $("tr#" + feat._id + "_sub").toggle(checked);
      }
    } else {

      var checked = chardata.feats != null && chardata.feats({ feat_name : feat.name }).first();

      //  class feats (something more efficient)
      if(is_class_feat(feat.name)) {
        checked = true;
        // prevent unchecking since an auto-added class feat
        disable_feat(feat, true);
      }

      $("input[id='" + feat._id + "']").attr('checked', checked);

      if (checked && $("input[id='" + feat._id + "']").attr('disabled')) {
        $("tr#" + feat._id).addClass('class_feat');
      }
    }
  });

  // TODO - Rogue Special Abilities
  // var level = calc_current_level();
  // var spec_abil_min_lvl = clazz.special_abilities_levels != null ? clazz.special_abilities_levels[0] : 0;
  // if(clazz.name == 'Rogue' && (level >= spec_abil_min_lvl)) {
  // create_rogue_special_abilities( level, clazz);
  // }

  update_feats_remaining();

  calc_prereqs();

  // // console.groupEnd();
}

function disable_feat(feat, disabled) {
  if (disabled) {
    $("input[id='" + feat._id + "']").attr("disabled", "disabled");

  } else {
    $("input[id='" + feat._id + "']").removeAttr('disabled');
  }
  $("#" + feat._id).removeClass((disabled ? 'enabled' : 'disabled')).addClass((disabled ? 'disabled' : 'enabled'));
  // $('#' + feat._id + '_name').removeClass((disabled ? 'enabled' : 'disabled')).addClass((disabled ? 'disabled' :
  // 'enabled'));
  // $('#' + feat._id + '_desc').removeClass((disabled ? 'enabled' : 'disabled')).addClass((disabled ? 'disabled' :
  // 'enabled'));

  var checked = $("input[id='" + feat._id + "']").attr('checked');

  if (feat.multi) {
    $("tr#" + feat._id + "_sub").toggle(feat.multi && !disabled);
  }
}

function update_feats_remaining() {
  // // console.group("update_feats_remaining");
  var count = calc_feats_remaining();
  $('#feats_remaining').text(count.base_feats_remaining);
  // if(count.bonus_feats.groups.length == 0 && count.bonus_feats.feats.length == 0) {
  // } else
  $('#bonus_feats_remaining').text(count.bonus_feats.count);
  // // console.groupEnd();
}

function calc_prereqs() {
  // var allfeats = feats();
  // TODO - move to recalc (don't loop over all)?
  // // console.group("calc_prereqs");
  allfeats().each( function( feat, i ) {
    // // console.log(allfeats[i].name);
    var prereqs_met = false;

    if(!is_class_feat(feat.name)) {
      if(feat.prereqs) {
    // // // console.group("is_prereqs_met");
        prereqs_met = is_prereqs_met(feats._id, feat.prereqs) || prereqs_met;
      } else {
        prereqs_met = true;
      }
    // // // console.groupEnd();
      disable_feat(feat, !prereqs_met);
    }


    // if(allfeats[i].multi && allfeats[i].multi != "count") {
    // repopulate_multi(allfeats[i]);
    // }

  });
  // // console.groupEnd();
}

/**
 * TODO - find a way around passing in the feat id
 */
function is_prereqs_met(feat_id, prereqs) {
    var char_feats = get_char_feats();
    var prereqs_met = true;
    // handle or's separately
    if (prereqs.or) {
        // // console.group(" : or");
        for (var j in prereqs.or) {
            prereqs_met = is_prereqs_met(feat_id, prereqs.or[j]);
            // // console.log(j + " : " + prereqs.or[j] + " = " + prereqs_met);
            if (prereqs_met) {
                // if we get one true, move on
                break;
            }
        }
        // // console.groupEnd();
        if (!prereqs_met) {
            // got through all without a match, fail
            return false;
        }
    }
    // level
    if (prereqs.level) {
        for (var k in chardata.classes) {
            if (chardata.classes[k].level < prereqs.level) {
                return false;
            }
        }
    }

    if (prereqs.classes) {
        for (var clazz in chardata.classes) {
            if (prereqs.classes[clazz] > chardata.classes[clazz].level) {
                return false;
            }
        }
    }

    if (prereqs.pick) {
        // // console.group(" : pick");
        if (prereqs.pick.feats) {
            handle_pick(prereqs.pick.feats, prereqs.pick.count);
        }

        if (prereqs.pick.group) {
            var group_feats = feats({
                group: {
                    has: prereqs.pick.group
                }
            });
            handle_pick(group_feats, prereqs.pick.count);
        }
    }

    // if feat prereqs contain another feat, and that feat has not been selected...
    if (prereqs.feats) {
        for (var k in prereqs.feats) {
            // if it's not a char feat or a class feat
            if ((chardata.feats == null || chardata.feats().first({
                feat_name: prereqs.feats[k]
            }) == false) && !is_class_feat(prereqs.feats[k])) {
                // console.log("feat fail: " + prereqs.feats[k]);
                return false;
            }
        }
    }

    if (prereqs.multi) {
        for (var k in prereqs.multi) {
            for (var l in prereqs.multi[k]) {
                if (chardata.feats || !chardata.feats().first({
                    name: k
                }) || !(chardata.feats().first({
                    name: k
                }).multi.indexOf(prereqs.multi[k][l]) > -1)) {
                    // // console.log("multi fail: " + k + " - " + prereqs.multi[k][l]);
                    return false;
                }
            }
        }
    }

    if (prereqs.abilities) {
        for (var k in prereqs.abilities) {
            if (chardata.abilities[k] < prereqs.abilities[k]) {
                // // console.log("ability fail: " + chardata.abilities[k] + " < " + prereqs.abilities[k]);
                return false;
            }
        }
    }

    if (prereqs.skills) {
        for (var k in prereqs.skills) {
            var char_skill = chardata.skills && chardata.skills().first({
                name: k
            });
            if (char_skill && char_skill.ranks < prereqs.skills[k]) {
                // // console.log("skill fail: " + char_skill.ranks + " < " + prereqs.skills[k]);
                return false;
            }
        }
    }

    return true;
}

function calc_feats_remaining() {
  var bonus = {
    count: 0,
    groups: {},
    feats: {}
  };
  // collect the number and constraints of the bonus feats
  for (var classname in chardata.classes) {
    var clazz = classes({ name: classname }).first();
    if (clazz.custom && clazz.custom.feats) {
      for (var level in clazz.custom.feats) {
        if (calc_current_level() >= level) {
          clazz.custom.feats[level].script(bonus);
            // $.merge(bonus_feats.groups, bonus.groups);
          // }
          // if (bonus.feats) {
          // }
        } else {
          break;
        }
      }
    }
  }

  var char_feats = chardata.feats == null ? [] : chardata.feats().get();
  var base_feats_remaining = calc_total_base_feats_count(chardata.race_name, chardata.xp);

  for (var i in char_feats) {
    var feat = feats({ name: char_feats[i].feat_name }).first();
    if (char_feats[i].multi) {
      if (jQuery.isArray(char_feats[i].multi)) {
        // selectable
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
        // stackable count
        if (is_bonus_eligible(feat, bonus)) {
          bonus.count -= parseInt(char_feats[i].multi);
        } else {
          base_feats_remaining -= parseInt(char_feats[i].multi);
        }
      }
    } else {
      // single
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
}

function filter_options(feat, options_db) {
  // // console.group("filter_options");
  // // console.log("feat: " + feat.name);
  var filtered_options = [];
  // multi options are supplied by db or prereq feats
  if (feat.multi.db) {
    filtered_options = filtered_options.concat(feat.multi.db.get(feat.multi.filter));
  }
  if (feat.multi.feats) {
    for ( var i in feat.multi.feats) {
      var multi_feat = feats().first( {
        name : feat.multi.feats[i]
      });
      // TODO - clumsy, but need a TaffyDB ref?
      var char_feats = get_char_feats();
      var char_feat = char_feats({ name : multi_feat.name }).first();
      if (multi_feat.collection) {
        if (char_feat) {
          filtered_options = filtered_options.concat(multi_feat.collection.db.get(multi_feat.collection.filter));
        }
      // } else if (multi_feat.multi.filter) {

      } else {
        // TODO - REFACTOR!!!!
        // multi_feat: Weapon Focus
        // chardata.feats [{Exotic Weapon Proficiency, multi: ["Battleaxe"]}]
        if (char_feat && char_feat.multi != null && chardata.feats) {
          char_feat_ref = chardata.feats().first( {
            feat_name : multi_feat.name
          });
          for ( var j in char_feat_ref.multi) {
            // // console.group("options");
            var option = feat.multi.type.first( {
              name : char_feat_ref.multi[j]
            });
            // // console.log(option.name);
            // if you're filtering the list of multis...
            if (multi_feat.multi.filter) {
              for ( var k in multi_feat.multi.filter) {
                if (option[k]) {
                  filtered_options.push(option);
                }
              }
            } else {
              filtered_options.push(option);
            }
            // // console.groupEnd();
          }
        }
      }
    }
  }

  filtered_options.sort(function(a, b) {
    return a.name > b.name ? 1 : -1;
  });

  // // console.groupEnd();
  return filtered_options;
}

function update_count(feat) {
  var count = calc_feats_remaining();
  if (count.base_feats_remaining == 0 &&  !is_bonus_eligible(feat, count.bonus_feats)) {
    alert('No feat selections remaining.');
    return;
  }
  char_feat = chardata.feats().first( {
    feat_name : feat_name
  });
  char_feat.multi += 1;
  $("span[id='feat_" + feat_id + "_count']").text(char_feat.multi);
  save_character();
  update_feats_remaining();
}

function update_feat(feat, is_selected, multi_item, multi_type) {
  var multi = multi_item ? "_" + multi_type.first( {
    name : multi_item
  })._id : "";
  var count = calc_feats_remaining();
  var total_feats_remaining = count.bonus_feats.count + count.base_feats_remaining;
  var char_feat = chardata.feats({ feat_name : feat.name }).first();
  if (is_selected) {
    // undo selection if none remaining
    // TODO - handle other classes (besides fighter)
    if (total_feats_remaining == 0 || (count.base_feats_remaining == 0 && chardata.class_name == "Fighter" && !combat_feats.indexOf(feat.name) > -1)) {
      $("input[id='" + feat._id + multi + "']").attr('checked', false);
      alert('No feat selections remaining.');
    } else {
      if (!char_feat) {
        var count = chardata.feats.insert( {
          feat_name : feat.name
        });
        char_feat = chardata.feats().first( {
          feat_name : feat.name
        });
      }
      if (multi_item) {
        if (char_feat.multi == null) {
          char_feat.multi = [];
        }
        char_feat.multi.push(multi_item);
      }
    }
  } else {
    // remove
    // TODO - cascading remove
    if (multi_item) {
      char_feat.multi.splice(char_feat.multi.indexOf(multi_item), 1);
      if (char_feat.multi.length == 0) {
        chardata.feats.remove( {
          feat_name : feat.name
        });
      }
    } else {
      chardata.feats.remove( {
        feat_name : feat.name
      });
    }
  }

  save_character();

  inform_dependents(feat, multi_item);

  update_feats_remaining();
  // recalc prereqs to enable feats with this feat as a dependency
  calc_prereqs();
}

// TODO - should be a callback
function inform_dependents(feat) {
  // // console.group("inform_dependents");
  // // console.log(feat.name);
  feats( {
    multi : {
      "!is" : null
    }
  }).each(function(dependent, i) {
    if (dependent.multi.feats && dependent.multi.feats.indexOf(feat.name) > -1) {
      if (dependent.multi && dependent.multi.feats) {
        inform_dependents(dependent);
      }

      var db = dependent.multi.db || dependent.multi.type;
      var all_options = filter_options(dependent, db);
      var hidden = $("#" + dependent._id).hasClass('disabled');
      // // console.log("dependent: " + $("#" + dependent._id + "_sub_"));
      $("tr[id='" + dependent._id + "_sub_']").html("");
      create_selector_group(dependent, "", all_options, db, 2, update_feat);
      $("#" + dependent._id + "_sub__expand_flag").text(hidden ? '+' : '-');
      $("#" + dependent._id + "_sub_").hide(hidden);
    }
  });
  // // console.groupEnd();
}

function create_rogue_special_abilities(level, clazz) {

  var rogue_specials = [];
  for ( var i in rogue_special_abilities) {
    rogue_specials.push(special_abilities.first( {
      name : rogue_special_abilities[i]
    }));
  }

  // get the number of special abilities selectors
  var count = 0;
  for ( var i in clazz.special_abilities_levels) {
    if (level >= clazz.special_abilities_levels[i]) {
      count++;
    }
  }
  var special_html = "";
  $("#rogue_special_abilities").html("<table id='rogue_specials_table' style='border: 1px solid #D0D0D0' width='100%' border='0' margin='0'>");
  $("#rogue_specials_table")
      .append(
          "<tbody><tr id='rogue_specials'><td colspan='2' bgcolor='#8DC3E9'><span id='rogue_specials_expand_flag' style='font-family: Monospace; float: right'>+</span><a class='fake_link'>Rogue Special Abilities</a></td></tr></tbody>");
  $("tr[id='rogue_specials']").bind("click", function(e) {
    return toggle_visibility("rogue_specials");
  });
  for ( var i = 0; i < count; i++) {
    var selected = chardata.rogue_special_abilities && chardata.rogue_special_abilities[i] != null ? chardata.rogue_special_abilities[i].special_id : null;
    var selected_special = special_abilities.first( {
      name : selected
    });
    special_html += "<tr id='special_" + i + "'><td valign='top'>";
    special_html += create_select1('special_' + i, rogue_specials, 'update_rogue_special_ability( ' + i + ')', selected);
    special_html += "</a></td><td id='special_" + i + "_description'><a class='fake_link' onclick='show_item_detail(special_abilities, "
        + (selected_special ? selected_special._id : rogue_specials[i]._id) + ")'>" + (selected_special ? selected_special.description : rogue_specials[i].description) + "</a></td></tr>";
    if (selected == "Skill Mastery") {
      // expand skill mastery bit
      special_html += create_skill_selection_matrix(i);
    }
  }
  special_html += "</tbody></table>";
  $('#rogue_special_abilities').html(special_html);
  $("tr[id^='special']:odd").css("background-color", "#EFF1F1");
  $('#rogue_specials').hide();

}

function handle_pick(group, count) {
  var matches = 0;
  for ( var i in group) {
    if (char_feats().first( {
      name : group[i]
    })) {
      // // console.log("match " + matches + " of " + prereqs.pick.count);
      matches++;
      if (matches == count) {
        break;
      }
    }
  }
  // // console.groupEnd();
  if (matches < count) {
    return false;
  }
}

function find_match(o1, o2) {
  for(var prop in o1) {
    if(o2[prop]) {
      return true;
    }
  }
  return false;
}

function is_bonus_eligible(feat, bonus_feats) {
  return bonus_feats.count > 0 && (bonus_feats.feats[feat.name] || find_match(bonus_feats.groups, feat.groups));
}
