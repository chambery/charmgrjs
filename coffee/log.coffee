edit_log_metadata = (element_id, string) ->
  $("#" + element_id).html "<input id='temp' type='text' value='" + string + "' style='width: " + $("#" + element_id).width() + "px;' />"
  $("#temp").bind "blur", ->
    $("#" + element_id).html "<span onclick=\"edit_log_metadata('" + element_id + "', $('#" + element_id + "').text())\">" + (if $("#temp").val().length > 0 then $("#temp").val() else string) + "</span>"
  
  $("#temp").focus()
save_log = ->
  if $("#log_note").val()? and $("#log_note").val().length > 0
    chardata.log = []  unless chardata.log?
    entry_id = $("#entry_id").val()
    if entry_id == ""
      entry_id = generate_id()
      chardata.log.push entry_id
    log = 
      id: entry_id
      name: get_log_name(entry_id)
      type: "log"
      xp: $("#log_xp").text()
      hp: $("#log_hp").text()
      date: Date.parse($("#log_date").text())
      note: htmlize($("#log_note").val())
      char_name: chardata.name
    
    sav log, "log_" + chardata.name + "_" + entry_id
    $("#entry_id").val ""
    $("#save_log").val "save"
    $("#log_date").text (new Date()).toDateString()
    $("#log_xp").text chardata.xp
    $("#log_hp").text chardata.temp_hp or chardata.hp
    save_character()
    $("#history:hidden").show()
    $("#history").html populate_log_history()
    $("#log_note").val ""
update_log = ->
  chardata.log = []  unless chardata.log?
  title = "Log"
  hidden = (if (chardata.log == undefined or chardata.log.length == 0) then "display: none;" else "")
  content = "<div id='history' class='box' style='max-height: 320px; overflow: auto; border-color: #D0D0D0;" + hidden + "'>" + populate_log_history() + "</div>"
  log_hp = chardata.temp_hp or chardata.hp or 0
  content += "<div id='new_entry' style='height: 50%'><input id='entry_id' type='hidden' value='' /><table style='width: 100%; border-spacing: 1px;'>"
  content += "<tr><td id='log_date' style='font-size: xx-small'><span onclick=\"edit_log_metadata('log_date', $('#log_date').text())\">" + (new Date()).toDateString() + "</span></td><td id='log_hp' class='numeric' style='font-size: xx-small'><span onclick=\"edit_log_metadata('log_hp', $('#log_hp').text())\">" + log_hp + "</span></td><td id='log_xp' class='numeric' style='font-size: xx-small'><span onclick=\"edit_log_metadata('log_xp', $('#log_xp').text())\">" + (chardata.xp or 0) + "</span></td><td style='padding: 0px'><a id='save_log' class='btn box' style='float: right;width: 30px;' onclick='save_log()'>save</a></td></tr>"
  content += "<tr><td colspan=4><textarea id='log_note' style='width: 100%'/></td></tr></table>"
  show_dialog title, content
  $("#log_note").focus()
  false
populate_log_history = ->
  history = "<table style='width: 100%; border-spacing: 0px'>"
  entries = []
  i = 0
  
  while i < chardata.log.length
    log = get_log_entry(chardata.log[i])
    entries.push log  if log
    i++
  entries.sort (a, b) ->
    (if a.date > b.date then -1 else 1)
  
  i = 0
  
  while i < entries.length
    d = new Date()
    d.setTime entries[i].date
    history += "<tr style='background-color: #EFF1F1;'><td style='font-size: xx-small' nowrap>" + d.toDateString() + "</td>"
    history += "<td class='numeric' style='font-size: xx-small'>" + entries[i].hp + "</td>"
    history += "<td class='numeric' style='font-size: xx-small'>" + entries[i].xp + "</td>"
    history += "<td style='text-align: right; font-size: xx-small' nowrap>"
    history += "<a href='" + window.location.protocol + "//" + window.location.host + "/log/" + chardata.options.owner + "/" + chardata.name + "/" + entries[i].id + "' target='_blank' style='color: #B4B5B5; text-decoration: none;')\">link &nbsp;</a> "  if chardata.options and chardata.options.owner and chardata.options.owner.length > 0 and chardata.name and chardata.name.length > 0
    history += "<a class='fake_link' onclick=\"edit_log_entry('" + entries[i].id + "')\")\">edit</a> "
    history += "<a class='fake_link' onclick=\"delete_log_entry('" + entries[i].id + "')\">delete</a></td></tr>"
    history += "<tr><td colspan=4 style='border: 1px solid; padding: 5px;' >" + entries[i].note + "</td></tr>"
    history += "<tr><td colspan=4 style='padding-bottom: 1em;'></td></tr>"
    i++
  history += "</table>"
  history
delete_log_entry = (entry) ->
  entry_idx = jQuery.inArray(entry, chardata.log)
  chardata.log.splice entry_idx, 1
  document.cookie = get_log_name(entry.id) + "=foo;expires=Fri, 31 Dec 1999 23:00:00 GMT;"
  save_character()
  $("#history").html populate_log_history()
  $("#history").hide()  if chardata.log.length > 0
edit_log_entry = (entry_id) ->
  log = get_log_entry(entry_id)
  $("#entry_id").val entry_id
  d = new Date()
  d.setTime log.date
  $("#log_date").text d.toDateString()
  $("#log_hp").text log.hp
  $("#log_xp").text log.xp
  $("#log_note").val dehtmlize(log.note)
  $("#save_log").val "update"
get_log_entry = (entry_id) ->
  console.log "log id: " + entry_id
  log_data = get_cookie_data(get_log_name(entry_id))
  log = TAFFY.JSON.parse(unescape(log_data))
  log = (if chardata.log[entry_id] and chardata.log[entry_id].last_mod and (not log? or chardata.log[entry_id].last_mod > log.last_mod) then chardata.log[entry_id] else log)
  log
get_log_name = (entry_id) ->
  "log_" + chardata.name + "_" + entry_id
sync_logs = ->
  if chardata.log and chardata.options and chardata.options.owner and chardata.options.owner.length > 0 and chardata.name and chardata.name.length > 0
    logs = {}
    i = 0
    
    while i < chardata.log.length
      remote = {}
      $.getJSON "log/" + chardata.options.owner + "/" + chardata.name + "/" + chardata.log[i], (data) ->
        remote = data
      
      local = get_log_entry(chardata.log[i])
      if not local and not remote.id
        console.log "Log " + chardata.log[i] + " not found."
      else if (not remote.id and local) or (local and remote.last_mod < local.last_mod)
        console.log "Saving log " + chardata.log[i] + " to remote"
        save_remote local, local.id
      else if (not local and remote.id) or (local and remote and remote.last_mod > local.last_mod)
        console.log "Saving log " + chardata.log[i] + " to local"
        save_local remote, "log_" + chardata.name + "_" + remote.id
      i++
