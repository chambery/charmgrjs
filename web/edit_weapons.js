var add_data, build_data_part, c_s, populate_data_part, update_data, update_override;

update_data = function(select_id, data_name, id_name) {
  var foo, item_id, item_idx, item_name, item_select;
  item_select = $("#" + select_id);
  item_id = $("#" + select_id).val();
  item_idx = select_id.substring(select_id.lastIndexOf("_") + 1);
  if ((chardata[data_name] != null) && item_idx < chardata[data_name].length && item_id === -1) {
    chardata[data_name].splice(item_idx, 1);
    foo = chardata[data_name].slice();
    chardata[data_name] = foo;
    $("#" + select_id + "_div").remove();
    build_data_part(data_name, id_name);
  } else if (item_id !== -1) {
    item_name = eval(data_name).first({
      _id: item_id
    }).name;
    populate_object(chardata[data_name][item_idx], id_name + "_name", item_name);
  }
  populate_data_part(data_name, id_name);
  return save_character();
};

add_data = function(data_name, id_name) {
  var VERY_TEMPORARY, item_id;
  if (chardata[data_name] == null) chardata[data_name] = [];
  item_id = $("#" + id_name + "_new").val();
  VERY_TEMPORARY = eval(data_name).first({
    name: item_id
  }).name;
  chardata[data_name].push(populate_object(new Object(), id_name + "_name", VERY_TEMPORARY));
  build_data_part(data_name, id_name);
  return save_character();
};

build_data_part = function(data_name, id_name) {
  var char_data_html, i, items, name, new_select, selected_id;
  char_data_html = "";
  if (chardata[data_name] && chardata[data_name].length > 0) {
    for (i in chardata[data_name]) {
      char_data_html += "<div id='" + id_name + "_" + i + "_div'>";
      name = id_name + "_" + i;
      items = eval(data_name)().get();
      selected_id = window[data_name].first({
        name: chardata[data_name][i][id_name + "_name"]
      })._id;
      char_data_html += c_s(data_name + "part", name, items, "update_data( '" + name + "', '" + data_name + "', '" + id_name + "')", "update_override( " + i + ", '" + data_name + "', '" + id_name + "')", window[id_name + "_edit_data"], true, selected_id);
      char_data_html += "</div>";
    }
  } else {
    $("#char_" + data_name).removeClass("box");
  }
  $("#char_" + data_name).html(char_data_html);
  name = id_name + "_new";
  items = eval(data_name)().get();
  new_select = create_select(name, items, "add_data( '" + data_name + "', '" + id_name + "')", true, "style='width: 150px;'");
  $("#new_" + id_name).html(new_select);
  return populate_data_part(data_name, id_name);
};

populate_data_part = function(data_name, id_name) {
  var edit_attr_name, i, item, j, value, _results;
  _results = [];
  for (j in chardata[data_name]) {
    item = window[data_name].first({
      name: chardata[data_name][j][id_name + "_name"]
    });
    $("#" + id_name + "_" + j + " option[id='" + id_name + "_" + j + "_option_" + item.id + "']").attr("selected", true);
    _results.push((function() {
      var _results2;
      _results2 = [];
      for (i in window[id_name + "_edit_data"]) {
        edit_attr_name = window[id_name + "_edit_data"][i];
        value = (!(chardata[data_name][j][edit_attr_name] != null) ? item[edit_attr_name] : chardata[data_name][j][edit_attr_name]);
        _results2.push($("#" + id_name + "_" + j + edit_attr_name).val((!(value != null) ? "" : value)));
      }
      return _results2;
    })());
  }
  return _results;
};

update_override = function(item_index, data_name, id_name) {
  var edit_attr_name, i, item, value;
  for (i in window[id_name + "_edit_data"]) {
    item = window[data_name].first({
      name: chardata[data_name][item_index][id_name + "_name"]
    });
    edit_attr_name = window[id_name + "_edit_data"][i];
    value = $("#" + id_name + "_" + item_index + edit_attr_name).val();
    if ((value != null) && jQuery.trim(value).length > 0 && value !== item[edit_attr_name]) {
      chardata[data_name][item_index][edit_attr_name] = value;
    } else {
      delete chardata[data_name][item_index][edit_attr_name];
    }
  }
  return save_character();
};

c_s = function(part_id, name, items, onchange_action, onblur_action, addl_data, include_empty, selected_value) {
  var i, select, table_html;
  addl_data = (!(addl_data != null) ? [] : addl_data);
  table_html = "<table border='0'><tr>";
  select = create_select(name, items, onchange_action, include_empty, "style='width: 150px;'", null, selected_value);
  table_html += "<td colspan='2'>" + select + "</td></tr>";
  for (i in addl_data) {
    table_html += "<tr><td>" + capitalize(addl_data[i]) + "</td><td><input id='" + name + addl_data[i] + "' class='weapon_text' type='text' onblur=\"" + onblur_action + "\" value='' style='width: 115px;'/></td></tr>";
  }
  return table_html + "</table>";
};
