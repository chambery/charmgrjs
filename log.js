function edit_log_metadata(element_id, string) {
	$('#' + element_id).html("<input id='temp' type='text' value='" + string + "' style='width: " + $("#" + element_id).width() + "px;' />");
	$('#temp').bind('blur', function(){ $('#' + element_id).html("<span onclick=\"edit_log_metadata('" + element_id + "', $('#" + element_id + "').text())\">" + ($('#temp').val().length() > 0 ? $('#temp').val() : string) + "</span>"); });
	$('#temp').focus();
}

function save_log() {
	if($('#log_note').val() != null && $('#log_note').val().length > 0) {
		if(chardata.log == null) {
			chardata.log = [];
		}
		var entry_id = $('#entry_id').val();
		// new entry
		if(entry_id == '') {
			entry_id = generate_id();
			chardata.log.push(entry_id);
		}
		// edit entry
		sav({id: entry_id, name: get_log_name(entry_id), type: "log", xp: $("#log_xp").text(), hp:  $("#log_hp").text(), date:  Date.parse($("#log_date").text()), note: htmlize($("#log_note").val())}, "log_" + chardata.name + "_" + entry_id, "logs/all_logs");

		$('#entry_id').val('');
		$('#save_log').val('save');
		$('#log_date').text((new Date()).toDateString());
		$('#log_xp').text(chardata.xp);
		$('#log_hp').text(chardata.temp_hp || chardata.hp);

		save_character();
		$('#history:hidden').show();
		$('#history').html(populate_log_history());
		$('#log_note').val('');
	}
}


function update_log() {
	// get number of entries
    if (chardata.log == null) {
        chardata.log = [];
    }
    var title = "Log";
    // hide this bit if there are no entries
    var hidden = (chardata.log == undefined || chardata.log.length == 0) ? "display: none;" : "";
    var content = "<div id='history' class='box' style='max-height: 320px; overflow: auto; border-color: #D0D0D0;" + hidden + "'>" + populate_log_history() + "</div>";
    // TODO - use the "live" hp value if it's populated
    var log_hp = chardata.temp_hp || chardata.hp || 0;
    content += "<div id='new_entry' style='height: 50%'><input id='entry_id' type='hidden' value='' /><table style='width: 100%; border-spacing: 1px;'>";
    content += "<tr><td id='log_date' style='font-size: xx-small'><span onclick=\"edit_log_metadata('log_date', $('#log_date').text())\">" + (new Date()).toDateString() + "</span></td><td id='log_hp' class='numeric' style='font-size: xx-small'><span onclick=\"edit_log_metadata('log_hp', $('#log_hp').text())\">" + log_hp + "</span></td><td id='log_xp' class='numeric' style='font-size: xx-small'><span onclick=\"edit_log_metadata('log_xp', $('#log_xp').text())\">" + (chardata.xp || 0) + "</span></td><td style='padding: 0px'><a id='save_log' class='btn box' style='float: right;width: 30px;' onclick='save_log()'>save</a></td></tr>";
    content += "<tr><td colspan=4><textarea id='log_note' style='width: 100%'/></td></tr></table>";
    show_dialog(title, content);
	$("#log_note").focus();

    return false;
}

function populate_log_history() {
	var history = "<table style='width: 100%; border-spacing: 0px'>";
	var entries = [];
	for(var i=0; i<chardata.log.length; i++) {
		var log = get_log_entry(chardata.log[i]);
		if(log) { entries.push(log); }
	}
	entries.sort(function(a, b) {
		return a.date > b.date ? -1 : 1;
	});
	
	for(var i=0; i<entries.length; i++) {
		var d = new Date();
		d.setTime(entries[i].date);
        history += "<tr style='background-color: #EFF1F1;'><td style='font-size: xx-small' nowrap>" + d.toDateString() + "</td>";
        history += "<td class='numeric' style='font-size: xx-small'>" + entries[i].hp + "</td>";
        history += "<td class='numeric' style='font-size: xx-small'>" + entries[i].xp + "</td>";
        history += "<td style='text-align: right; font-size: xx-small' nowrap>";
        var path = window.location.pathname.split( '/' );
        path = path.slice(0, path.length-2);
        history += "<a href='" + window.location.protocol + "//" + window.location.host + "/" + path.join("/") + "/_design/logs/_show/note/" + entries[i]._id + "' target='_blank' style='color: #B4B5B5; text-decoration: none;')\">link &nbsp;</a> ";
        history += "<a class='fake_link' onclick=\"edit_log_entry('" + entries[i].id + "')\")\">edit</a> ";
        history += "<a class='fake_link' onclick=\"delete_log_entry('" + entries[i].id + "')\">delete</a></td></tr>";
        history += "<tr><td colspan=4 style='border: 1px solid; padding: 5px;' >" + entries[i].note + "</td></tr>";
        history += "<tr><td colspan=4 style='padding-bottom: 1em;'></td></tr>";
    }
    history += "</table>";
    	
    return history;
}

function delete_log_entry(entry) {
	var entry_idx = jQuery.inArray(entry, chardata.log);
	chardata.log.splice(entry_idx, 1);
	document.cookie = get_log_name(entry.id) + '=foo;expires=Fri, 31 Dec 1999 23:00:00 GMT;';
	save_character();
	$('#history').html(populate_log_history());
	if(chardata.log.length > 0) {
		$('#history').hide();
	} 
}

function edit_log_entry(entry_id) {
	var log = get_log_entry(entry_id);
	
	$('#entry_id').val(entry_id);
	var d = new Date();
	d.setTime(log.date);
	$('#log_date').text(d.toDateString());
	$('#log_hp').text(log.hp);
	$('#log_xp').text(log.xp);
	$('#log_note').val(dehtmlize(log.note));
	$('#save_log').val('update');
}

function get_log_entry(entry_id) {
	var log_data = get_cookie_data(get_log_name(entry_id));
	var log = TAFFY.JSON.parse(unescape(log_data));
	var db = new CouchDB("cm-dev", {"X-Couch-Full-Commit":"false"});
	var remote_log = get_remote_item(db, "logs/all_logs", get_log_name(entry_id))[0];
	log = remote_log && (log == null || remote_log.last_mod > log.last_mod) ? remote_log : log;

	return log;
}

function get_log_name(entry_id) {
	return "log_" + chardata.name + "_" + entry_id;
}