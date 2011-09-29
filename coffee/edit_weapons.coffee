update_data = (select_id, data_name, id_name) ->
	item_select = $("##{select_id}")
	item_id = $("##{select_id}").val()
	item_idx = select_id.substring(select_id.lastIndexOf('_') + 1)

	# delete if the weapon was in the list, and the value was changed to 'Add New Weapon'
	if chardata[data_name]?.length > item_idx and item_id == -1
		# delete the item, then create a new array
		chardata[data_name].remove(item_idx)
		# remove the div
		# TODO - insert blind effect
		# $('#' + select_id + '_div').hide("blind", { direction: "up" }, 3000)
		$("##{select_id}_div").remove()
		# rewrite the whole weapons part
		build_data_part(data_name, id_name)

	# weapon changed
	else if item_id != -1
		item_name = eval(data_name).first({
			_id: item_id
		}).name
		populate_object(chardata[data_name][item_idx], "#{id_name}_name'", item_name)

	# populate_data_part( weapons, "weapons", "weapon")
	populate_data_part(data_name, id_name)

	save_character()

add_data = (data_name, id_name) ->

	chardata[data_name] = chardata[data_name] | []

	item_id = $("#{id_name}_new").val()
	# TODO - fix this up to be consistent across all selectors
	# gets the id for the name value on the options
	VERY_TEMPORARY = eval(data_name).first({
		name: item_id
	}).name
	chardata[data_name].push(populate_object(new Object(), "#{id_name}_name", VERY_TEMPORARY))
	build_data_part(data_name, id_name)

	save_character()

build_data_part = (data_name, id_name) ->
	char_data_html = ""
	#  create containers for each of the character's data
	if chardata[data_name]?.length > 0
		for i in chardata[data_name]
			char_data_html += "<div id='#{id_name}_#{i}_div'>"
			name = "#{id_name}_#{i}"
			items = eval(data_name).get()
			selected_id = window[data_name].first({
				name: chardata[data_name][i]["#{id_name}_name"]
			})._id
			char_data_html += c_s("#{data_name}part", name, items, "update_data( '#{name}', '#{data_name}', '#{id_name}')", "update_override( #{i}, '#{data_name}', '#{id_name}')", window["#{id_name}_edit_data"], true, selected_id)
			char_data_html += "</div>"
	else
		$("#char_#{data_name}").removeClass('box')

	$("#char_#{data_name}").html(char_data_html)

	# create the "add new" select
	name = "#{id_name}_new"
	items = eval(data_name).get()
	new_select = create_select(name, items, "add_data( '#{data_name}', '#{id_name}')", true, "style='width: 150px;'")
	$("#new_#{id_name}").html(new_select)

	populate_data_part(data_name, id_name)



populate_data_part = (data_name, id_name) ->
	for j, obj in chardata[data_name]
		item = window[data_name].first({
			name: obj["#{id_name}_name"]
		})
		$("##{id_name}_#{j} option[id='#{id_name}_#{j}_option_#{item.id}']").attr("selected", true)
		# TODO - this part might be better in recalc
		for i, edit_attr_name in window["#{id_name}_edit_data"]
			value = if obj[edit_attr_name] then obj[edit_attr_name] else item[edit_attr_name]
			$("##{id_name}_#{j}#{edit_attr_name}").val(value | "")


update_override = (item_index, data_name, id_name) ->
	for i in window["#{id_name}_edit_data"]
		item = window[data_name].first({
			name: chardata[data_name][item_index]["#{id_name}_name"]
		})
		edit_attr_name = window["#{id_name}_edit_data"][i]
		value = $("##{id_name}_" + item_index + edit_attr_name).val()
		if value and $.trim(value).length > 0 and value != item[edit_attr_name]
			chardata[data_name][item_index][edit_attr_name] = value
		else
			delete chardata[data_name][item_index][edit_attr_name]

	save_character()


c_s = (part_id, name, items, onchange_action, onblur_action, addl_data, include_empty, selected_value) ->
	addl_data = addl_data | []
	table_html = "<table border='0'><tr>"
	select = create_select(name, items, onchange_action, include_empty, "style='width: 150px;'", null, selected_value)
	table_html += "<td colspan='2'>#{select}</td></tr>"
	for i, datum in addl_data
		table_html += "<tr><td>#{capitalize(datum)}</td><td><input id='#{name}#{datum}' class='weapon_text' type='text' onblur=\"#{onblur_action}\" value='' style='width: 115px;'/></td></tr>"

	return "#{table_html}</table>"

