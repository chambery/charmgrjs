function save_remote(db, data, key, view, filter) {
	var remote_data = get_remote_item(db, view, key, filter);
	if(remote_data[0]) {
		// TODO - handle name conflicts?
		data._id = remote_data[0]._id;
		data._rev = remote_data[0]._rev;
	}	
	db.save(data);
}

// TODO - WTF with the owner business?
function get_remote_item(db, view, name, filter) {
	// console.group("get_remote_item");
	var items = [];
    var matches = $.couch.db(db).view(view, { key: name });
	// TODO - clean this business up
	if(matches) {
	    var results = matches.rows.map(function(e) {
			return e.value;
	    });
	    if(results) {
		    if(filter) {
		    		for(var i in results) {
		    			if(filter(results[i])) {
		    				items.push(results[i]);
		    			}	
				}
			} else {
				items = results;
			}    	
		}
	}
	// console.groupEnd();
    return items;
}

function import_character(db) {
	if(chardata.options.owner == null) {
		update_options("Owner string is required to load character data.");
	}
	var data = prompt("Enter character name (owner: " + chardata.options.owner + ") :");
	if (data != null && jQuery.trim(data).length > 0) {
		var curr_char = chardata;
		if(data.charAt(0) == "{") {
			chardata = parse_character_data(data);
		} else {
			chardata = get_remote_item(db, "chars/all_chars", data, filter_owner)[0];
			parse_taffy_data(chardata);
		}
		if(chardata != null) {
			// save last used character
			save_character();
			// don't reload all the static_data if the character data req is the same
			var need_new_data = false;
			if(chardata.options && chardata.options.ext_data && loaded_static_data_tags.length == chardata.options.ext_data.length) {
				for(var i in loaded_static_data_tags) {
					if(chardata.options.ext_data.indexOf(loaded_static_data_tags[i]) == -1) {
						need_new_data = true;
					}
				}
			}
			if(need_new_data) {
				window.location.reload();
			} else {
				switch_content(0, chardata);
			}
		} else {
			var owner = (players_companion && players_companion.owner) ? players_companion.owner : null;
			alert("No character data found for " + data + (owner ? " with owner " + owner + "." : ". You must specify an owner in opt->owner to store and retrieve character data from the server."));
			chardata = curr_char;
		}
	}
}

function lod(db, cookie_name) {
	// TODO - refactor for scoping issues
	var cookie_data = get_cookie_data("ch_" + cookie_name);
	if(cookie_data) {
		chardata = parse_character_data(cookie_data);
	}
	if(cookie_name) {			
		var owner = chardata.options ? chardata.options.owner : null;
		var remote = get_remote_item(db, "chars/all_chars", cookie_name, filter_owner)[0];
		if(remote && remote.last_mod > chardata.last_mod) {
			chardata = parse_character_data(remote);
		}
		// for(var classname in chardata.classes) {
		// 	var clazz = classs.first({ name: classname });
		// 		for (var i in clazz.spells) {
		// 			class_spells.concat(clazz.spells[i])
		// 		}
		// 	 = clazz.spells;
		// }
	}
	load_static_data();
}
function filter_owner(character) {
	return character && character.options && character.options.owner && chardata && chardata.options && chardata.options.owner && chardata.options.owner == character.options.owner;
}

function sav(data, cookie_name, view) {
	if (data != null) {
		data.last_mod = new Date();
		if(view) {
			var remote_name = cookie_name;
			var filter;
			if(data.type == "character") { 
				remote_name = cookie_name.substring(3); 
				filter = has_same_owner;
			}
			save_remote(data, remote_name, view, filter);
		}
		
		data = escape(TAFFY.JSON.stringify(data));

		var d = new Date(2020, 02, 02);
		document.cookie = cookie_name + "=" + data + ";expires=" + d.toUTCString();
	}
}

function has_same_owner(item) {
	return item.owner == chardata.owner;
}

function save_character() {
	chardata.type = "character";
	var name = chardata.name;
	if(name == null || name.length == 0) {
		var race_name = races.first({ name: chardata.race_name }).shortname;
		var class_name = "";
		for(var classname in chardata.classes) {
			class_name += classs.first({ name: classname }).shortname + "_";
		}
		name = race_name + "_" + class_name;
	}
	players_companion.last_character = name;
	sav(players_companion, "players_companion");
	
	var save_data = klone(chardata);
	if (save_data.skills != null) {
		save_data.skills = save_data.skills.get();
	}
	if (save_data.feats != null) {
		save_data.feats = save_data.feats.get();
	}
	save_data.type = "character";
	var view;
	if(chardata.name && chardata.name.length > 0 && save_data.options && save_data.options.owner && save_data.options.owner.length > 0) {
		// don't save owner-less, name-less characters remotely
		view = "chars/all_chars";
	}
	sav(save_data, "ch_" + name, view);
}

function get_cookie_data(cookie_name) {
	var data = null;
	if (cookie_name && cookie_name.length > 0 && document.cookie.length > 0) {
		var c_start = document.cookie.indexOf(cookie_name + "=");
		if (c_start != -1) {
			c_start = c_start + cookie_name.length + 1; // c_name.length + 1
			c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1) {
				c_end = document.cookie.length;
			}
			data = document.cookie.substring(c_start, c_end);	

		}
	}
	
	return data;

}

function parse_taffy_data(data) {
	if(data != null) {
		if (data.skills != null) {
			data.skills = TAFFY(data.skills);
		}
		if (data.feats != null) {
			data.feats = TAFFY(data.feats);
		}
	}
}

function load_static_data() {
	var db = new CouchDB("cm-dev", {"X-Couch-Full-Commit":"false"});
	// classes come first

	// set(key, value)
	
	// $.jStorage.set(key, value)
	// Saves a value to local storage. key needs to be string otherwise an exception is thrown. value can be any JSONeable value, including objects and arrays.
	
	// get(key[, default])
	
	// value = $.jStorage.get(key)
	// value = $.jStorage.get(key, "default value")
		
	// get retrieves the value if key exists, or default if it doesn't. key needs to be string otherwise an exception is thrown. default can be any value.
	
	// deleteKey(key)
	
	// $.jStorage.deleteKey(key)
	// Removes a key from the storage. key needs to be string otherwise an exception is thrown.
	
	// flush()
	
	// $.jStorage.flush()
	// Clears the cache.
	
	var items = get_remote_item(db, "ext_data/by_type", "class");
	for(var j=0; j<items.length; j++) {
		eval(items[j].type + "s").insert(items[j]);
	}
	
	// TODO ugh..
	var tags = ["pathfinder"];
	if(chardata.options && chardata.options.ext_data && chardata.options.ext_data.length > 0) {
		tags = tags.concat(chardata.options.ext_data.split(" "));
	}
	
	for(var i in tags) {
		var items = localStorage && localStorage[tags[i]] ? $.evalJSON(localStorage[tags[i]]) : null;
		var items_timestamp = localStorage[tags[i] + "_timestamp"];
		var tag_timestamp = db.open(tags[i] + "_timestamp");
		if(items == null || items.length == 0 || items_timestamp == null || items_timestamp < tag_timestamp.timestamp) {
			items = get_remote_item(db, "ext_data/by_tag", tags[i]);
			localStorage[tags[i]] = $.toJSON(items);
			localStorage[tags[i] + "_timestamp"] = new Date().getTime();
		}
		
		while(items.length > 0) {
			var item = items.pop();
			// item.type maps to a TAFFY db
			if(item.type != "class") {
				eval(item.type + "s").insert(item);
			}
			// populate class relational data
			if(item.classes) {
				for(var classname in item.classes) {
					var clazz = classs.first({ name: classname });
					if(item.type != "special") {
						// Druid - spells [ [..] [..] ]
						// level data is 1-based 
						var level = item.classes[classname] - 1;
						// TODO - add to clazz prototype
//						if(!clazz[item.type + "s"]) { clazz[item.type + "s"] = [] };
//						if(!clazz[item.type + "s"][level]) { clazz[item.type + "s"][level] = []; }
						clazz[item.type + "s"][level].push(item.name);
					} else {
						for(var k in item.classes[classname]) {
							var special = { special_name: item.name };
							if(item.classes[classname][k].mod) {
								special.mod = item.classes[classname][k].mod;
							}
							clazz[item.type + "s"][item.classes[classname][k].level - 1].push(special);
						}
					}

				}
			}
		}
	}
		
	feats.forEach(function(feat, n) {
		if(feat.multi) {
			feat.multi.db = eval(feat.multi.db);
			feat.multi.type = eval(feat.multi.type);
		}
		if(feat.collection) {
			feat.collection.db = eval(feat.collection.db);
		}
		if(feat.attack) {
			feat.attack = new Function("attacks", "weapon", feat.attack); 
		}
		if(feat.damage) {
			feat.damage = new Function("damages", "weapon", feat.damage); 			
		}
		if(feat.critical) {
			feat.critical = new Function("critical", feat.critical); 
		}
		if(feat.init) {
			feat.init = new Function("init", feat.init); 
		}
		if(feat.fort) {
			feat.fort = new Function("fort", feat.fort); 
		}
		if(feat.ref) {
			feat.ref = new Function("ref", feat.ref); 
		}
		if(feat.will) {
			feat.will = new Function("will", feat.will); 
		}
		if(feat.ac) {
			feat.ac = new Function("ac", feat.ac); 
		}
		if(feat.mobility) {
			feat.mobility = new Function("acp", feat.mobility); 
		}
		
		return feat;
	});
	
	// TODO - elegance?
	// spells.orderBy({name:"logical"});
	// feats.orderBy({name:"logical"});
	races.orderBy({name:"logical"});
	// domains.orderBy({name:"logical"});
	classs.orderBy({name:"logical"});
	// schools.orderBy({name:"logical"});
	weapons.orderBy({name:"logical"});
	armors.orderBy({name:"logical"});
	skills.orderBy({name:"logical"});
	// languages.orderBy({name:"logical"});
	// deitys.orderBy({name:"logical"});
	// specials.orderBy({name:"logical"});
	// favored_enemys.orderBy({name:"logical"});	
}