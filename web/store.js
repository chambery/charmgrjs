var $, TAFFY, alignments, armors, classes, feats, goodness, races, shields, skills, specials, spells, weapons;

if (typeof exports === "object") {
  TAFFY = require("taffydb");
  $ = require("jquery");
  classes = require("./resources/classes").classes;
  armors = require("./resources/armors").armors;
  shields = require("./resources/shields").shields;
  feats = require("./resources/feats").feats;
  skills = require("./resources/skills").skills;
  races = require("./resources/races").races;
  spells = require("./resources/spells-pf").spells;
  specials = require("./resources/specials").specials;
  alignments = require("./resources/alignments").alignments;
  goodness = require("./resources/alignments").goodness;
  weapons = require("./resources/weapons").weapons;
}

this.import_character = function() {
  var char_name, chardata, data, i, need_new_data, owner;
  while (!chardata.options || !chardata.options.owner) {
    chardata.options = {};
    chardata.options.owner = prompt("Owner string is required to load character data.");
  }
  data = prompt("Enter character name (owner: " + chardata.options.owner + ") :");
  if ((data != null) && jQuery.trim(data).length > 0) {
    try {
      if (data.charAt(0) === "{") {
        chardata = parse_character_data(data);
      } else {
        char_name = data;
        $.ajax({
          type: "GET",
          url: "character/" + chardata.options.owner + "/" + char_name,
          dataType: "json",
          success: function(cdata, status) {
            chardata = cdata;
            console.log(status);
            return console.log(cdata);
          },
          error: function(jqXHR, textStatus, errorThrown) {
            alert(data + " not found on the server.");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            throw "Not found";
          },
          data: {},
          async: false
        });
        console.log("parsing taffy data");
        chardata.skills = parse_taffy_data(chardata.skills);
        chardata.feats = parse_taffy_data(chardata.feats);
      }
      save_character();
      need_new_data = false;
      if (chardata.options && chardata.options.ext_data && loaded_static_data_tags.length === chardata.options.ext_data.length) {
        for (i in loaded_static_data_tags) {
          if (chardata.options.ext_data.indexOf(loaded_static_data_tags[i]) === -1) {
            need_new_data = true;
          }
        }
      }
      if (need_new_data) {
        return window.location.reload();
      } else {
        return switch_content(0, chardata);
      }
    } catch (e) {
      owner = (players_companion && players_companion.owner ? players_companion.owner : null);
      return alert("No character data found for " + data + (owner ? " with owner " + owner + "." : ". You must specify an owner in opt->owner to store and retrieve character data from the server."));
    }
  }
};

this.lod = function(char_name) {
  var chardata, cookie_data, remote_data;
  if (char_name) {
    cookie_data = get_cookie_data("ch_" + char_name);
    if (cookie_data) chardata = parse_character_data(cookie_data);
    remote_data = void 0;
    if (chardata.options && chardata.options.owner) {
      $.ajax({
        type: "GET",
        url: "character/" + chardata.options.owner + "/" + char_name,
        dataType: "json",
        success: function(cdata, status) {
          remote_data = cdata;
          console.log(remote_data);
          return console.log(status);
        },
        data: {},
        async: false
      });
      if (remote_data && remote_data.last_mod > chardata.last_mod) {
        chardata = parse_character_data(remote_data);
      }
      sync_logs();
    }
  }
  return load_static_data();
};

this.sav = function(data, local_name, remote_name) {
  if (local_name && local_name.length > 0) {
    data.last_mod = (new Date()).getTime();
    save_local(data, local_name);
    if (!remote_name) remote_name = local_name;
    if (chardata.name && chardata.options && chardata.options.owner && chardata.options.owner.length > 0) {
      return save_remote(data, remote_name);
    }
  }
};

this.save_remote = function(data, name) {
  if (data != null) {
    return $.ajax({
      type: "POST",
      url: "/" + data.type + "/" + chardata.options.owner + "/" + name,
      data: JSON.stringify(data),
      success: function(data, status) {
        console.log(data);
        return console.log("status");
      },
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    });
  }
};

this.save_local = function(data, name, expires) {
  expires = expires | (new Date(2020, 02, 02)).toUTCString();
  data = escape(TAFFY.JSON.stringify(data));
  return document.cookie = name + "=" + data + ";expires=" + expires;
};

this.save_character = function() {
  var name, save_data;
  name = chardata.name;
  if (!(name != null) || name.length === 0) name = create_default_name();
  players_companion.last_character = name;
  save_local(players_companion, "players_companion");
  save_data = jQuery.extend(true, {}, chardata);
  if (save_data.skills != null) save_data.skills = save_data.skills.get();
  if (save_data.feats != null) save_data.feats = save_data.feats.get();
  save_data.type = "character";
  return sav(save_data, "ch_" + name, name);
};

this.get_cookie_data = function(cookie_name) {
  var c_end, c_start, data;
  data = null;
  if (cookie_name && cookie_name.length > 0 && document.cookie.length > 0) {
    c_start = document.cookie.indexOf(cookie_name + "=");
    if (c_start !== -1) {
      c_start = c_start + cookie_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end === -1) c_end = document.cookie.length;
      data = document.cookie.substring(c_start, c_end);
    }
  }
  return data;
};

this.parse_taffy_data = function(data) {
  if (data == null) data = [];
  return TAFFY(data);
};

this.load_static_data = function() {
  console.log("loading spells...");
  spells().each(function(spell, n) {
    var classname, clazz, _results;
    _results = [];
    for (classname in spell.classes) {
      clazz = classes({
        name: classname
      }).first();
      _results.push(clazz.spells[spell.classes[classname]].push(spell.name));
    }
    return _results;
  });
  console.log("loading specials...");
  specials().each(function(special, n) {
    var classname, clazz, i, _results;
    _results = [];
    for (classname in special.classes) {
      clazz = classes({
        name: classname
      }).first();
      i = 0;
      _results.push((function() {
        var _results2;
        _results2 = [];
        while (i < special.classes[classname].length) {
          clazz.specials[special.classes[classname][i].level].push({
            special_name: special.name,
            mod: special.mod
          });
          _results2.push(i++);
        }
        return _results2;
      })());
    }
    return _results;
  });
  console.log("loading feats...");
  feats().each(function(feat, n) {
    var classname, clazz;
    if (feat.multi) {
      feat.multi.db = eval(feat.multi.db);
      feat.multi.type = eval(feat.multi.type);
    }
    if (feat.collection) feat.collection.db = eval(feat.collection.db);
    if (feat.damage) feat.damage = new Function("damages", "weapon", feat.damage);
    if (feat.critical) feat.critical = new Function("critical", feat.critical);
    if (feat.fort) feat.fort = new Function("fort", feat.fort);
    if (feat.ref) feat.ref = new Function("ref", feat.ref);
    if (feat.will) feat.will = new Function("will", feat.will);
    if (feat.ac) feat.ac = new Function("ac", feat.ac);
    if (feat.mobility) feat.mobility = new Function("acp", feat.mobility);
    for (classname in feat.classes) {
      clazz = classes({
        name: classname
      }).first();
      clazz.feats[feat.classes[classname]].push(feat.name);
    }
    return feat;
  });
  console.log("sorting data...");
  races.sort("name");
  classes.sort("name");
  weapons.sort("name");
  armors.sort("name");
  return skills.sort("name");
};

this.delete_character = function() {
  var answer, name, prompt_name;
  prompt_name = (chardata.name ? chardata.name : "the current character");
  answer = confirm("Are you sure you want to delete " + prompt_name + "?");
  if (answer) {
    name = (chardata.name ? chardata.name : "ch_" + create_default_name());
    save_local({}, name, "Thu, 01-Jan-1970 00:00:01 GMT");
    if (chardata.options.owner && chardata.name) {
      $.ajax({
        type: "GET",
        url: "/delete/" + chardata.options.owner + "/" + name,
        data: {},
        success: function(data, status) {
          console.log(data);
          console.log("status: " + status);
          return alert("Deleted character data: " + data);
        },
        contentType: "application/json; charset=utf-8",
        async: false
      });
    }
    return create_new_character();
  }
};

this.create_default_name = function() {
  var class_name, classname, race_name;
  race_name = races.first({
    name: chardata.race_name
  }).shortname;
  class_name = "";
  for (classname in chardata.classes) {
    class_name += classes.first({
      name: classname
    }).shortname + "_";
  }
  return race_name + "_" + class_name;
};
