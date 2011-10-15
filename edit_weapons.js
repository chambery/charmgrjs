function update_data( select_id, data_name, id_name) {

	var item_select = $('#' + select_id);

	var item_id = $('#' + select_id).val();

	var item_idx = select_id.substring(select_id.lastIndexOf('_') + 1);



	// delete if the weapon was in the list, and the value was changed to 'Add New Weapon'

	if (chardata[data_name] != null && item_idx < chardata[data_name].length && item_id == -1) {

		// delete the item, then create a new array 

		chardata[data_name].splice(item_idx, 1);

		var foo = chardata[data_name].slice();

		chardata[data_name] = foo;

		// remove the div

		// TODO - insert blind effect

		// $('#' + select_id + '_div').hide("blind", { direction: "up" }, 3000);

		$('#' + select_id + '_div').remove();

		// rewrite the whole weapons part

		build_data_part( data_name, id_name);

	}



	// weapon changed

	else if (item_id != -1) {

		var item_name = eval(data_name).first({ _id: item_id }).name;

		populate_object(chardata[data_name][item_idx], id_name + '_name', item_name);

	}

	

	// populate_data_part( weapons, "weapons", "weapon")

	populate_data_part(data_name, id_name);



	save_character();

}



function add_data ( data_name, id_name) {

	if (chardata[data_name] == null) {

		chardata[data_name] = [];

	}

	var item_id = $('#' + id_name + '_new').val();

	// TODO - fix this up to be consistent across all selectors

	// gets the id for the name value on the options

	var VERY_TEMPORARY = eval(data_name).first({ name: item_id }).name;

	chardata[data_name].push(populate_object(new Object(), id_name + '_name', VERY_TEMPORARY));

	build_data_part( data_name, id_name);

	

	save_character();

}



function build_data_part( data_name, id_name) {

	var char_data_html = "";

	// create containers for each of the character's data

	if (chardata[data_name] && chardata[data_name].length > 0) {

//		$('char_data').addClass('box');

		for ( var i in chardata[data_name]) {

			char_data_html += "<div id='" + id_name +"_" + i + "_div'>";

			var name = id_name +'_' + i;

			var items = eval(data_name).get();

			var selected_id = window[data_name].first({ name: chardata[data_name][i][id_name + '_name'] })._id;

			char_data_html += c_s(data_name + 'part', name, items, "update_data( '" + name + "', '" + data_name + "', '" + id_name + "')", "update_override( " + i + ", '" + data_name + "', '" + id_name + "')", window[id_name + "_edit_data"], true, selected_id);

			char_data_html += "</div>";

		}

	} else {

		$("#char_" + data_name).removeClass('box');		

	}

	$("#char_" + data_name).html(char_data_html);

	

	// create the add new select

	var name = id_name + '_new';

	var items = eval(data_name).get();

	var new_select = create_select(name, items, "add_data( '" + data_name + "', '" + id_name + "')", true, "style='width: 150px;'");

	$('#new_' + id_name).html(new_select);

	

	populate_data_part( data_name, id_name);

}



function populate_data_part( data_name, id_name) {

	for (var j in chardata[data_name]) {

		var item = window[data_name].first( {

			name : chardata[data_name][j][id_name + '_name']

		});

		$("#" + id_name + "_" + j + " option[id='" + id_name + "_" + j + "_option_" + item.id + "']").attr("selected", true);

		// TODO - this part might be better in recalc

		for(var i in window[id_name + "_edit_data"]) {

			var edit_attr_name = window[id_name + "_edit_data"][i];

			var value = chardata[data_name][j][edit_attr_name] == null ? item[edit_attr_name] : chardata[data_name][j][edit_attr_name];

			$("#" + id_name + "_" + j + edit_attr_name).val(value == null ? "" : value);

		}

	}

}



function update_override( item_index, data_name, id_name) {

	for(var i in window[id_name + "_edit_data"]) {

		var item = window[data_name].first({ name: chardata[data_name][item_index][id_name + '_name'] });

		var edit_attr_name = window[id_name + "_edit_data"][i];

		var value = $("#" + id_name + "_" + item_index + edit_attr_name).val();

		if(value != null && jQuery.trim(value).length > 0 && value != item[edit_attr_name]) {

			chardata[data_name][item_index][edit_attr_name] = value;

		} else {

			delete chardata[data_name][item_index][edit_attr_name];

		}

	}



	save_character();

}



function c_s(part_id, name, items, onchange_action, onblur_action, addl_data, include_empty, selected_value) {

	var addl_data = (addl_data == null ? [] : addl_data);

	var table_html = "<table border='0'><tr>";

	var select = create_select(name, items, onchange_action, include_empty, "style='width: 150px;'", null, selected_value);

	table_html += "<td colspan='2'>" + select + "</td></tr>";

	for (i in addl_data) {

		table_html += "<tr><td>" + capitalize(addl_data[i]) + "</td><td><input id='" + name + addl_data[i] + "' class='weapon_text' type='text' onblur=\"" + onblur_action + "\" value='' style='width: 115px;'/></td></tr>";

	}

	return table_html + "</table>";

}

