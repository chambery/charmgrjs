var edit_spells, recalc_spells_page;

edit_spells = function() {};

recalc_spells_page = function(level, spell_name, classname) {
  var bonus_spells_remaining, bonus_spells_remaining_text, checked, clazz, spell_id, spell_index, spells_remaining, spells_remaining_text;
  spell_id = spells.first({
    name: spell_name
  })._id;
  checked = $("input#" + spell_id + "_" + classname).attr("checked");
  clazz = classes.first({
    name: classname
  });
  spells_remaining_text = $("#" + classname + "_spells_remaining_" + level).text();
  spells_remaining = parseInt(spells_remaining_text.substring(spells_remaining_text.indexOf(":") + 2));
  bonus_spells_remaining_text = $("#" + classname + "_bonus_spells_remaining").text();
  bonus_spells_remaining = parseInt(bonus_spells_remaining_text);
  if (clazz.name === "Sorcerer" || clazz.name === "Bard") {
    if (!checked || bonus_spells_remaining > 0 || spells_remaining > 0) {
      if (bonus_spells_remaining > 0 || !checked) {
        $("#" + classname + "_spells_remaining").text(bonus_spells_remaining + (checked ? -1 : 1));
      } else {
        $("#" + classname + "_spells_remaining_" + level).text("Spell selections remaining: " + (spells_remaining + (checked ? -1 : 1)));
      }
    } else {
      $("input#" + spell_id + "_" + classname).attr("checked", false);
      alert("No spells selections remaining.");
    }
  }
  if ($("input#" + spell_id + "_" + classname).attr("checked")) {
    chardata.classes[classname].spells[level].push(spell_name);
  } else {
    if ((chardata.classes[classname].spells != null) && chardata.classes[classname].spells[level]) {
      spell_index = chardata.classes[classname].spells[level].indexOf(spell_name);
      if (spell_index > -1) {
        remove(chardata.classes[classname].spells[level], spell_index);
      }
    }
  }
  return save_character();
};

edit_spells.calc_spells_remaining = function(clazz, spell_level, curr_spells_chosen_count) {
  return clazz.spells_known[chardata.classes[classname].level][spell_level] - curr_spells_chosen_count;
};

edit_spells.build_spells_page = function() {
  var bonus_spells, classname, clazz, curr_spells_chosen_count, i, j, spell, spell_level, spell_selections_remaining, spellcaster_count, _results;
  bonus_spells = do_class_functions("spells", "before_build", []);
  bonus_spells = (bonus_spells.length > 0 ? bonus_spells[0] : null);
  set_links_part(3);
  spellcaster_count = 0;
  for (classname in chardata.classes) {
    if (spellcasters.indexOf(classname) > -1 && natural_spellcasters.indexOf(classname) === -1) {
      spellcaster_count++;
    }
  }
  $("#content").html("");
  _results = [];
  for (classname in chardata.classes) {
    if (spellcasters.indexOf(classname) > -1) {
      clazz = classes.first({
        name: classname
      });
      if (clazz.spells_known.length > 0) {
        $("#content").append("<div id='spell_selections_" + classname + "'><table id='spell_selection_" + classname + "' style='width: 100%' border='0' margin='0'></table></div>");
        if (chardata.classes[classname].spells == null) {
          chardata.classes[classname].spells = [];
        }
        for (spell_level in clazz.spells_known[chardata.classes[classname].level]) {
          if (clazz.spells_known[chardata.classes[classname].level][spell_level] !== "-") {
            curr_spells_chosen_count = (!(chardata.classes[classname].spells[spell_level] != null) ? 0 : chardata.classes[classname].spells[spell_level].length);
            spell_selections_remaining = (clazz.name === "Sorcerer" || clazz.name === "Bard" ? "Spell selections remaining: " + edit_spells.calc_spells_remaining(clazz, spell_level, curr_spells_chosen_count, bonus_spells) + (bonus_spells ? " <span id=bonus_spells>Bonus Spells: <span id=" + classname + "_bonus_spells_remaining_" + spell_level + ">" + bonus_spells + "</span></span>" : "") : "");
            $("table#spell_selection_" + classname).append("<tr id='" + classname + "_level_" + spell_level + "' style='font-size: x-small; background-color: #8DC3E9'><td colspan=3 ><span id='" + classname + "_spells_remaining_" + spell_level + "' style='float: right;'>" + spell_selections_remaining + " </span>Level " + spell_level + "</td></tr>");
            $("tr#" + classname + "_level_" + spell_level).bind("click", {
              spell_level: spell_level,
              classname: classname
            }, function(e) {
              return $("td[id='" + e.data.classname + "_level_" + e.data.spell_level + "_sub_']").toggle();
            });
            $("table#spell_selection_" + classname).append("<tr id='" + classname + "_level_" + spell_level + "_sub'><td id='" + classname + "_level_" + spell_level + "_sub_' style='border: 1px solid #D0D0D0'><table id='" + classname + "_level_" + spell_level + "_sub_' width='100%' border='0' margin='0'></table></td></tr>");
            for (j in clazz.spells[spell_level].sort()) {
              if (j % 3 === 0) {
                $("table[id='" + classname + "_level_" + spell_level + "_sub_']").before("<tr id='" + classname + "_level_" + spell_level + "_sub_" + ((j / 3) | 0) + "'></tr>");
              }
              spell = spells.first({
                name: clazz.spells[spell_level][j]
              });
              $("tr#" + classname + "_level_" + spell_level + "_sub_" + ((j / 3) | 0)).append("<td><input id='" + spell._id + "_" + classname + "' type='checkbox'/><a id='spell_" + spell._id + "' class='fake_link'>" + spell.name + "</a></td>");
              $("input#" + spell._id + "_" + classname).bind("click", {
                spell_name: spell.name,
                level: spell_level,
                classname: classname
              }, function(e) {
                return recalc_spells_page(e.data.level, e.data.spell_name, e.data.classname);
              });
              $("a#spell_" + spell._id).bind("click", {
                spells: spells,
                spell_id: spell._id
              }, function(e) {
                return show_item_detail(e.data.spells, e.data.spell_id);
              });
            }
          }
        }
        if (spellcaster_count > 1) {
          $("div#spell_selections_" + classname).wrapAll("<fieldset id='spell_selections_" + classname + "' />");
          $("fieldset#spell_selections_" + classname).prepend("<legend class='fake_link' onclick=\"$('table#spell_selection_" + classname + "').toggle();\">" + classname + (chardata.bloodline ? "&nbsp;&nbsp;&nbsp;<i>" + chardata.bloodline + "</i>" : "") + "</legend>");
        }
      }
    }
    $("#content").append("<div>&nbsp;</div>");
    if (clazz.custom && clazz.custom.spells && clazz.custom.spells.after_spells) {
      _results.push((function() {
        var _results2;
        _results2 = [];
        for (i in clazz.custom.spells.after_spells) {
          _results2.push(clazz.custom.spells.after_spells[i]());
        }
        return _results2;
      })());
    } else {
      _results.push(void 0);
    }
  }
  return _results;
};

edit_spells.populate_spells_page = function() {
  var classname, clazz, curr_spells_chosen_count, i, level, spell_id, _results;
  _results = [];
  for (classname in chardata.classes) {
    if (spellcasters.indexOf(classname) > -1) {
      clazz = classes.first({
        name: classname
      });
      if (chardata.classes[classname].spells == null) {
        chardata.classes[classname].spells = [[], [], [], [], [], [], [], [], []];
      }
      _results.push((function() {
        var _results2;
        _results2 = [];
        for (level in chardata.classes[classname].spells) {
          if (classname === "Sorcerer" || classname === "Bard") {
            curr_spells_chosen_count = (!(chardata.classes[classname].spells[level] != null) ? 0 : chardata.classes[classname].spells[level].length);
            $("td[id='" + classname + "_level_" + level + "_sub_']").toggle(clazz.spells_known[chardata.classes[classname].level][level] - curr_spells_chosen_count > 0);
          }
          _results2.push((function() {
            var _results3;
            _results3 = [];
            for (i in chardata.classes[classname].spells[level]) {
              spell_id = spells.first({
                name: chardata.classes[classname].spells[level][i]
              })._id;
              _results3.push($("input#" + spell_id + "_" + classname).attr("checked", true));
            }
            return _results3;
          })());
        }
        return _results2;
      })());
    } else {
      _results.push(void 0);
    }
  }
  return _results;
};
