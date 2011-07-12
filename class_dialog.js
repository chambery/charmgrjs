function show_class_dialog(level_diff, ability_increase) {
	var html = "<table>" + (chardata.xp > 0 ? "" : "<tr><td colspan=4>Please select a starting class:<td></tr>") + "<tr><td>Available Levels:</td><td id='level_diff' style='width: 40%;text-align: left;'>" + level_diff + "</td><td style='text-align: right;'>XP</td><td><input type='text' id='xp_input' name='xp_input' value='" + (chardata.xp ? chardata.xp : 0) + "' onblur=\"\" size='5' disabled='disabled' /></td></tr></table><table>";
	var classnames = [];
	var level_selection_total = 0;
	for (var classname in chardata.classes) {
		level_selection_total += chardata.classes[classname].level + 1;
		var options = "";
		for(var i=chardata.classes[classname].level+1; i<=level_diff+chardata.classes[classname].level+1; i++) { 
			options += '<option>' + i + '</option>';
		} 
		classnames.push(classname);
		html += "<tr><td><input type='checkbox' id='class_dialog_" + classname + "' name='" + classname + "' checked='true' classname='" + classname + "' onclick=\"do_checkbox( $(this).attr('classname') )\" /></td><td colspan='2'>" + classname + "</td><td id=''><select id='class_dialog_" + classname + "' classname='" + classname + "' onchange=\"var classname = $(this).attr('classname'); chardata.classes[classname].level = parseInt($(this).val())-1; repopulate_linked_class_selects();\" >" + options + "</select></td></tr>";
	}
	options = "";
	for(var i=1; i<=level_diff; i++) { 
		options += '<option>' + i + '</option>'; 
	}
	var classes = classs.get();
	for (var i in classes) {
		if(classnames.indexOf(classes[i].name) == -1) {
			html += "<tr><td><input type='checkbox' id='class_dialog_" + classes[i].name + "' name='" + classes[i].name + "' classname='" + classes[i].name + "' onclick=\"do_checkbox( $(this).attr('classname'))\" /></td><td colspan='2'>" + classes[i].name + "</td><td id=''><select id='class_dialog_" + classes[i].name + "' disabled='true' style='width: 100%' classname='" + classes[i].name + "' onchange=\"var classname = $(this).attr('classname'); chardata.classes[classname].level = parseInt($(this).val())-1; repopulate_linked_class_selects();\" >" + options + "</select></td></tr>";			
		} 
	}
	html += "</table><input type='hidden' id='level_selection_total' name='level_selection_total' value='" + level_selection_total + "' />";
	show_dialog("Classes", html, true, "char_classes = chardata.classes.keys; switch_content(1, chardata)");
}

function do_checkbox(classname) {
	if(chardata.classes[classname] == null) {
		chardata.classes[classname] = {};
	}
	// check
	if(chardata.classes[classname].level == null) {
		var level_diff = parseInt($('#level_diff').text());
		if (level_diff > 0) {
			chardata.classes[classname].level = 0;
			var options='';
			for(var i=1; i<=level_diff; i++) { 
				options += '<option>' + i + '</option>'; 
			} 
			$("select[id='class_dialog_" + classname + "']").removeAttr('disabled');
			$("select[id='class_dialog_" + classname + "']").html(options);
			$("select[id='class_dialog_" + classname + "']").val(chardata.classes[classname].level  + 1);
		} else {
			// uncheck it, though we should never get here
			$(this).removeAttr("checked");
		}
	} else {
		// completely remove this class/level from the character
		delete chardata.classes[classname];
		
		// remove options, disable select
		$("select[id='class_dialog_" + classname + "']").html("");
		$("select[id='class_dialog_" + classname + "']").attr("disabled", "disabled");		
	}
	repopulate_linked_class_selects();
}	

function repopulate_linked_class_selects() {
	var previous_total = parseInt($("#level_selection_total").val());
	var curr_total = calc_current_total();
	// re-populate selects
	var level_diff = parseInt($('#level_diff').text()) - (curr_total - previous_total);
	if (level_diff == 0) {
		// disable all unchecked checkboxes
		$('input:not(:checked)').attr("disabled","disabled");
	} else {
		$('input:not(:checked)').removeAttr("disabled");		
	}
	
	$("#level_diff").text(level_diff);
	
	// re-populate selects
	$("select[id^='class_dialog']:not(:disabled)").each(function () {
		var selected_val = $(this).val();
		var options = "";
		for(var i=1; i<=level_diff+parseInt($(this).val()); i++) { 
			options += '<option>' + i + '</option>'; 
		} 
		// make sure original selection is selected
		$(this).html(options);
		$(this).val(selected_val);
	});
	
	// sum the current total
	$("#level_selection_total").val(calc_current_total);
}

function calc_current_total() {
	var total = 0;
	$("select[id^='class_dialog']:not(:disabled)").each(function () {
			total += parseInt($(this).val());
	});
	return total;
}

function calc_available_levels() {
	var current_level=calc_level()+1;
	var new_level=calc_level(parseInt($('#xp_input').val())); 
	chardata.xp=parseInt($('#xp_input').val());
	var level_diff = new_level-current_level;
	if(level_diff < 0) {
		level_diff = 0;
		chardata.xp = 0;
		$('#xp_input').val(0)
	}
	$('#level_diff').text(level_diff); 
	repopulate_linked_class_selects();
}