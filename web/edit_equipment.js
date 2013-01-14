var edit_equipment;

edit_equipment = function() {};

edit_equipment.build_equipment_page = function() {
  set_links_part(4);
  $("#content").html("<div id='equipment' style='border: 1px solid #8DC3E9;'></div>");
  if (chardata.log === void 0) return chardata.log = [];
};

edit_equipment.populate_equipment_page = function() {};

edit_equipment.get_benefit_name = function(id) {
  var name;
  name = id;
  if (id.match("^[0-9]+")) {
    name = skills.first({
      id: id
    }).name;
  }
  return name;
};

edit_equipment.create_benefits_table = function(equipment, index) {
  var html, j;
  html = "<table id='benefits_table_edit' style='width: 100%;'>";
  for (j in equipment.benefits) {
    html += "<tr id='edit_" + equipment.benefits[j].id + "' onclick=\"$('#edit_" + equipment.benefits[j].id + "').remove()\">";
    html += "<td><input type='hidden' value='" + equipment.benefits[j].id + "' benefit_type='" + equipment.benefits[j].id + "' benefit_mod='" + equipment.benefits[j].mod + "' />";
    html += edit_equipment.get_benefit_name(equipment.benefits[j].id) + "</td><td style='text-align: right;'>" + pos(equipment.benefits[j].mod) + "</td></tr>";
  }
  html += "</table>";
  return html;
};

edit_equipment.recalc_equipment_page = function() {
  var html, i, j, notes, _results;
  $("#equipment").html("<table id='equipment_table' width='100%' margin='0'><tbody><tr style='background-color: #8DC3E9'><td colspan='5'><a class='fake_link' onclick='edit_equipment.add_bene()' style='float: right'>add</a><b>Equipment</b></td></tr></table>");
  if (chardata.equipment === void 0) chardata.equipment = {};
  _results = [];
  for (i in chardata.equipment) {
    html = "<tr><td colspan='5'><table style='width: 100%;border: 1px solid #D0D0D0' rules='cols'><tr><td colspan='2'><span style='float: right;color: #D0D0D0'><a class='fake_link' onclick=\"edit_equipment.add_bene('" + i + "')\" onhover=''>edit</a> &nbsp;<a id='edit_equipment.delete_equipment_" + chardata.equipment[i].id + "' class='fake_link' onclick=\"edit_equipment.delete_bene('" + chardata.equipment[i].id + "')\">delete</a></span>" + chardata.equipment[i].name + "</td></tr>";
    if ((chardata.equipment[i].notes && chardata.equipment[i].notes.length > 0) || (chardata.equipment[i].benefits && chardata.equipment[i].benefits.length > 0)) {
      notes = "<tr style='border: 1px solid #D0D0D0'>";
      notes += "<td valign='top' style='width: 100%;border: 1px solid #D0D0D0; padding-left: 15px;' " + (!(chardata.equipment[i].benefits != null) || chardata.equipment[i].benefits.length === 0 ? "colspan=2" : "") + ">" + (chardata.equipment[i].notes ? chardata.equipment[i].notes : "") + "</td>";
      if (chardata.equipment[i].benefits && chardata.equipment[i].benefits.length > 0) {
        notes += "<td valign='top' style='padding: 0px'>";
        notes += "<table id='benefits_table' style='width: 100%;'>";
        for (j in chardata.equipment[i].benefits) {
          notes += "<tr onclick=\"edit_equipment.remove(chardata.equipment[" + i + "].benefits, " + j + ");$('#equipment_benefits').html(edit_equipment.create_benefits_table(chardata.equipment[" + i + "]))\">";
          notes += "<td><input type='hidden' value='" + chardata.equipment[i].benefits[j].id + "' benefit_type='" + chardata.equipment[i].benefits[j].id + "' benefit_mod='" + chardata.equipment[i].benefits[j].mod + "' />";
          notes += edit_equipment.get_benefit_name(chardata.equipment[i].benefits[j].id) + "</td><td style='text-align: right;'>" + pos(chardata.equipment[i].benefits[j].mod) + "</td></tr>";
        }
        notes += "</table>";
        notes += "</td>";
      }
      html += notes + "</tr>";
    }
    html += "</table></td></tr>";
    _results.push($("#equipment_table").append(html));
  }
  return _results;
};

edit_equipment.delete_bene = function(id) {
  delete chardata.equipment[id];
  save_character();
  return edit_equipment.recalc_equipment_page();
};

edit_equipment.add_bene = function(index) {
  var dialog_html, equipment, type;
  equipment = (index !== void 0 ? chardata.equipment[index] : false);
  dialog_html = "<table><tr><td>Name:</td><td colspan='4'><input id='equipment_id' type='hidden' value='" + (equipment ? equipment.id : "") + "'/><input id='equipment_index' type='hidden' value='" + (index !== void 0 ? index : "") + "'/>";
  dialog_html += "<input id='equipment_name' type='text' style='width: 95%' value='" + (equipment ? equipment.name : "") + "'/></td><td style='text-align: right'><a class='box btn' style='width: 30px;' onclick='edit_equipment.save_equipment(" + (index !== void 0 ? true : "") + ")'>save</a></td></tr><tr><td colspan=6><hr width='80%'/></td></tr>";
  type = create_select("benefit_type", [
    {
      name: "Skills",
      id: "skill_id"
    }, {
      name: "Abilities",
      id: "ability_id"
    }, {
      name: "Other",
      id: "other"
    }, {
      name: "DR",
      id: "dr"
    }, {
      name: "Save",
      id: "save"
    }
  ], "edit_equipment.update_bene_detail($('#benefit_type').val())");
  dialog_html += "<tr><td>Benefit:</td><td colspan='2'>" + type + "</td><td id='benefit_detail' colspan='3'>" + create_select("benefit_detail", skills.get(), "", false, "") + "</td>";
  dialog_html += "<tr><td valign='bottom' colspan='3'>Notes:</td><td valign='bottom'>Bonus:</td><td><input id='benefit_mod' class='three_digit' type='text'/></td><td style='text-align: right' nowrap><a class='box btn' style='width: 30px; padding: 1px 2px;' onclick=\"edit_equipment.add_benefit($('select[id=benefit_detail]').val(), $('select[id=benefit_detail] option:selected').text(), $('#benefit_mod').val() )\">add&darr;</a></td></tr>";
  dialog_html += "<tr><td colspan='3' valign='top'><textarea id='equipment_notes' style='width: 95%'>" + (equipment ? equipment.notes : "") + "</textarea></td><td colspan='3' valign='top' style='border: 1px solid #D0D0D0;'><div id='equipment_benefits' >" + edit_equipment.create_benefits_table(equipment, index) + "</div></td></tr></table>";
  return show_dialog((index === void 0 ? "Add" : "Edit") + " Equipment", dialog_html, true, null);
};

edit_equipment.add_benefit = function(id, name, bene) {
  var display;
  if (bene && is_number(bene)) {
    display = (name === "SR" ? (bene.indexOf("%") > -1 ? bene : bene + "%") : pos(bene));
    return $("#benefits_table_edit").append("<tr id='" + (id + "_" + bene) + "' onclick=\"$('#" + (id + "_" + bene) + "').remove()\"><td style='width: 100%'><input type='hidden' value='" + id + "' benefit_type='" + id + "' benefit_mod='" + bene + "' />" + name + "</td><td style='text-align: right;'>" + display + "</td></tr>");
  }
};

edit_equipment.save_equipment = function(close_after_save) {
  var benefits, id;
  benefits = [];
  $("#equipment_benefits input").each(function() {
    return benefits.push({
      id: this.getAttribute("benefit_type"),
      mod: this.getAttribute("benefit_mod")
    });
  });
  if ($("#equipment_index").val().length > 0) {
    chardata.equipment[$("#equipment_index").val()] = {
      id: $("#equipment_id").val(),
      name: $("#equipment_name").val(),
      notes: htmlize($("#equipment_notes").val()),
      benefits: benefits
    };
  } else {
    id = generate_id();
    chardata.equipment[id] = {
      id: id,
      name: $("#equipment_name").val(),
      notes: $("#equipment_notes").val(),
      benefits: benefits
    };
  }
  save_character();
  edit_equipment.recalc_equipment_page();
  $("#equipment_index").val("");
  $("#equipment_id").val("");
  $("#equipment_name").val("");
  $("#equipment_notes").val("");
  $("#equipment_benefits").html("<table id='benefits_table_edit' style='width: 100%;'></table>");
  if (close_after_save) return $("#mydialog").dialog("close");
};

edit_equipment.update_bene_detail = function(type) {
  var ability, items;
  items = [];
  if (type === "Skills") {
    items = skills.get();
  } else if (type === "Abilities") {
    for (ability in abilities) {
      items.push({
        name: ability,
        id: ability
      });
    }
  } else if (type === "Other") {
    items[0] = {
      name: "Fortitude",
      id: "Fort"
    };
    items[1] = {
      name: "Reflex",
      id: "Ref"
    };
    items[2] = {
      name: "Will",
      id: "Will"
    };
    items[3] = {
      name: "Attack",
      id: "Att"
    };
    items[4] = {
      name: "Damage",
      id: "Dam"
    };
    items[5] = {
      name: "AC",
      id: "AC"
    };
    items[5] = {
      name: "SR",
      id: "SR"
    };
  } else if (type === "DR") {
    items[0] = {
      name: "Base",
      id: "base"
    };
    items[1] = {
      name: "Cold",
      id: "cold"
    };
    items[2] = {
      name: "Fire",
      id: "fire"
    };
    items[3] = {
      name: "Electricity",
      id: "elec"
    };
    items[4] = {
      name: "Acid",
      id: "acid"
    };
    items[5] = {
      name: "Poison",
      id: "pois"
    };
  } else if (type === "Save") {
    items[0] = {
      name: "Poison",
      id: "pois"
    };
    items[1] = {
      name: "Petrification",
      id: "petr"
    };
  }
  return $("#benefit_detail").html(create_select("benefit_detail", items, "", false, "'style='width: 55px'", null, null, true));
};
