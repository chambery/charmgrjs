var calc_available_levels, calc_current_total, do_checkbox, repopulate_linked_class_selects, show_class_dialog;

show_class_dialog = function(level_diff, ability_increase) {
  var classname, classnames, html, i, level_selection_total, options;
  html = "<table>" + (chardata.xp > 0 ? "" : "<tr><td colspan=4>Please select a starting class:<td></tr>") + "<tr><td colspan='2'>Available Levels:</td><td id='level_diff' style='width: 40%;text-align: left;'>" + level_diff + "</td><td></td></tr></table><table>";
  classnames = [];
  level_selection_total = 0;
  for (classname in chardata.classes) {
    level_selection_total += chardata.classes[classname].level + 1;
    options = "";
    i = chardata.classes[classname].level + 1;
    while (i <= level_diff + chardata.classes[classname].level + 1) {
      options += "<option>" + i + "</option>";
      i++;
    }
    classnames.push(classname);
    html += "<tr><td><input type='checkbox' id='class_dialog_" + classname + "' name='" + classname + "' checked='true' classname='" + classname + "' onclick=\"do_checkbox( $(this).attr('classname') )\" /></td><td colspan='2'>" + classname + "</td><td id=''><select id='class_dialog_" + classname + "' classname='" + classname + "' onchange=\"var classname = $(this).attr('classname'); chardata.classes[classname].level = parseInt($(this).val())-1; repopulate_linked_class_selects();\" >" + options + "</select></td></tr>";
  }
  options = "";
  i = 1;
  while (i <= level_diff) {
    options += "<option>" + i + "</option>";
    i++;
  }
  classes().each(function(clazz, n) {
    if (classnames.indexOf(clazz.name) === -1) {
      return html += "<tr><td><input type='checkbox' id='class_dialog_" + clazz.name + "' name='" + clazz.name + "' classname='" + clazz.name + "' onclick=\"do_checkbox( $(this).attr('classname'))\" /></td><td colspan='2'>" + clazz.name + "</td><td id=''><select id='class_dialog_" + clazz.name + "' disabled='true' style='width: 100%' classname='" + clazz.name + "' onchange=\"var classname = $(this).attr('classname'); chardata.classes[classname].level = parseInt($(this).val())-1; repopulate_linked_class_selects();\" >" + options + "</select></td></tr>";
    }
  });
  html += "</table><input type='hidden' id='level_selection_total' name='level_selection_total' value='" + level_selection_total + "' />";
  return show_dialog("Classes", html, true, "char_classes = chardata.classes.keys; switch_content(1, chardata)", {
    width: 190
  });
};

do_checkbox = function(classname) {
  var i, level_diff, options;
  if (chardata.classes[classname] == null) chardata.classes[classname] = {};
  if (chardata.classes[classname].level == null) {
    level_diff = parseInt($("#level_diff").text());
    if (level_diff > 0) {
      chardata.classes[classname].level = 0;
      options = "";
      i = 1;
      while (i <= level_diff) {
        options += "<option>" + i + "</option>";
        i++;
      }
      $("select[id='class_dialog_" + classname + "']").removeAttr("disabled");
      $("select[id='class_dialog_" + classname + "']").html(options);
      $("select[id='class_dialog_" + classname + "']").val(chardata.classes[classname].level + 1);
    } else {
      $(this).removeAttr("checked");
    }
  } else {
    delete chardata.classes[classname];
    $("select[id='class_dialog_" + classname + "']").html("");
    $("select[id='class_dialog_" + classname + "']").attr("disabled", "disabled");
  }
  return repopulate_linked_class_selects();
};

repopulate_linked_class_selects = function() {
  var curr_total, level_diff, previous_total;
  previous_total = parseInt($("#level_selection_total").val());
  curr_total = calc_current_total();
  level_diff = parseInt($("#level_diff").text()) - (curr_total - previous_total);
  if (level_diff === 0) {
    $("input:not(:checked)").attr("disabled", "disabled");
  } else {
    $("input:not(:checked)").removeAttr("disabled");
  }
  $("#level_diff").text(level_diff);
  $("select[id^='class_dialog']:not(:disabled)").each(function() {
    var i, options, selected_val;
    selected_val = $(this).val();
    options = "";
    i = 1;
    while (i <= level_diff + parseInt($(this).val())) {
      options += "<option>" + i + "</option>";
      i++;
    }
    $(this).html(options);
    return $(this).val(selected_val);
  });
  return $("#level_selection_total").val(calc_current_total);
};

calc_current_total = function() {
  var total;
  total = 0;
  $("select[id^='class_dialog']:not(:disabled)").each(function() {
    return total += parseInt($(this).val());
  });
  return total;
};

calc_available_levels = function() {
  var current_level, level_diff, new_level;
  current_level = calc_level() + 1;
  new_level = calc_level(parseInt($("#xp_input").val()));
  chardata.xp = parseInt($("#xp_input").val());
  level_diff = new_level - current_level;
  if (level_diff < 0) {
    level_diff = 0;
    chardata.xp = 0;
    $("#xp_input").val(0);
  }
  $("#level_diff").text(level_diff);
  return repopulate_linked_class_selects();
};
