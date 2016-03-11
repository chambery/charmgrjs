show_class_dialog = (level_diff, ability_increase) ->
  html = "<table>" + (if chardata.xp > 0 then "" else "<tr><td colspan=4>Please select a starting class:<td></tr>") + "<tr><td colspan='2'>Available Levels:</td><td id='level_diff' style='width: 40%;text-align: left;'>" + level_diff + "</td><td></td></tr></table><table>"
  classnames = []
  level_selection_total = 0
  for classname of chardata.classes
    level_selection_total += chardata.classes[classname].level + 1
    options = ""
    i = chardata.classes[classname].level + 1
    
    while i <= level_diff + chardata.classes[classname].level + 1
      options += "<option>" + i + "</option>"
      i++
    classnames.push classname
    html += "<tr><td><input type='checkbox' id='class_dialog_" + classname + "' name='" + classname + "' checked='true' classname='" + classname + "' onclick=\"do_checkbox( $(this).attr('classname') )\" /></td><td colspan='2'>" + classname + "</td><td id=''><select id='class_dialog_" + classname + "' classname='" + classname + "' onchange=\"var classname = $(this).attr('classname'); chardata.classes[classname].level = parseInt($(this).val())-1; repopulate_linked_class_selects();\" >" + options + "</select></td></tr>"
  options = ""
  i = 1
  
  while i <= level_diff
    options += "<option>" + i + "</option>"
    i++
  classes.forEach (clazz, n) ->
    html += "<tr><td><input type='checkbox' id='class_dialog_" + clazz.name + "' name='" + clazz.name + "' classname='" + clazz.name + "' onclick=\"do_checkbox( $(this).attr('classname'))\" /></td><td colspan='2'>" + clazz.name + "</td><td id=''><select id='class_dialog_" + clazz.name + "' disabled='true' style='width: 100%' classname='" + clazz.name + "' onchange=\"var classname = $(this).attr('classname'); chardata.classes[classname].level = parseInt($(this).val())-1; repopulate_linked_class_selects();\" >" + options + "</select></td></tr>"  if classnames.indexOf(clazz.name) == -1
  
  html += "</table><input type='hidden' id='level_selection_total' name='level_selection_total' value='" + level_selection_total + "' />"
  show_dialog "Classes", html, true, "char_classes = chardata.classes.keys; switch_content(1, chardata)", width: 190
do_checkbox = (classname) ->
  chardata.classes[classname] = {}  unless chardata.classes[classname]?
  unless chardata.classes[classname].level?
    level_diff = parseInt($("#level_diff").text())
    if level_diff > 0
      chardata.classes[classname].level = 0
      options = ""
      i = 1
      
      while i <= level_diff
        options += "<option>" + i + "</option>"
        i++
      $("select[id='class_dialog_" + classname + "']").removeAttr "disabled"
      $("select[id='class_dialog_" + classname + "']").html options
      $("select[id='class_dialog_" + classname + "']").val chardata.classes[classname].level + 1
    else
      $(this).removeAttr "checked"
  else
    delete chardata.classes[classname]
    
    $("select[id='class_dialog_" + classname + "']").html ""
    $("select[id='class_dialog_" + classname + "']").attr "disabled", "disabled"
  repopulate_linked_class_selects()
repopulate_linked_class_selects = ->
  previous_total = parseInt($("#level_selection_total").val())
  curr_total = calc_current_total()
  level_diff = parseInt($("#level_diff").text()) - (curr_total - previous_total)
  if level_diff == 0
    $("input:not(:checked)").attr "disabled", "disabled"
  else
    $("input:not(:checked)").removeAttr "disabled"
  $("#level_diff").text level_diff
  $("select[id^='class_dialog']:not(:disabled)").each ->
    selected_val = $(this).val()
    options = ""
    i = 1
    
    while i <= level_diff + parseInt($(this).val())
      options += "<option>" + i + "</option>"
      i++
    $(this).html options
    $(this).val selected_val
  
  $("#level_selection_total").val calc_current_total
calc_current_total = ->
  total = 0
  $("select[id^='class_dialog']:not(:disabled)").each ->
    total += parseInt($(this).val())
  
  total
calc_available_levels = ->
  current_level = calc_level() + 1
  new_level = calc_level(parseInt($("#xp_input").val()))
  chardata.xp = parseInt($("#xp_input").val())
  level_diff = new_level - current_level
  if level_diff < 0
    level_diff = 0
    chardata.xp = 0
    $("#xp_input").val 0
  $("#level_diff").text level_diff
  repopulate_linked_class_selects()
