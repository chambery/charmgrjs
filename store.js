function import_character() {

	while(!chardata.options || !chardata.options.owner) {

		chardata.options = {};

		chardata.options.owner = prompt("Owner string is required to load character data.");

	}

	

	var data = prompt("Enter character name (owner: " + chardata.options.owner + ") :");

	if (data != null && jQuery.trim(data).length > 0) {

		try {

			if(data.charAt(0) == "{") {

				// data is a cookie string

				chardata = parse_character_data(data);

			} else {

				var char_name = data;

				// TODO - move to lod

				$.ajax({

					type: "GET",

					url: "character/" + chardata.options.owner + "/" + char_name,

					dataType: "json",

					success: function(cdata, status) {

						chardata = cdata;

						console.log(status);

						console.log(cdata);

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



		} catch(e) {

			var owner = (players_companion && players_companion.owner) ? players_companion.owner : null;

			alert("No character data found for " + data + (owner ? " with owner " + owner + "." : ". You must specify an owner in opt->owner to store and retrieve character data from the server."));

		}

	}

}



function lod(char_name) {

	if(char_name) {

		// TODO - refactor for scoping issues

		// TODO - call import_character()

		var cookie_data = get_cookie_data("ch_" + char_name);

		if(cookie_data) {

			chardata = parse_character_data(cookie_data);

		}

		var remote_data = undefined;

		if(chardata.options && chardata.options.owner) {

			$.ajax({

				type: "GET",

				url: "character/" + chardata.options.owner + "/" + char_name,

				dataType: "json",

				success: function(cdata, status) {

					remote_data = cdata;

					console.log(remote_data);

					console.log(status);

				},

				data: {},

				async: false

			});

			

			if(remote_data && remote_data.last_mod > chardata.last_mod) {

				chardata = parse_character_data(remote_data);

			}

			// for(var classname in chardata.classes) {

			// 	var clazz = classes.first({ name: classname });

			// 		for (var i in clazz.spells) {

			// 			class_spells.concat(clazz.spells[i])

			// 		}

			// 	 = clazz.spells;

			// }

			sync_logs();

		}

	}

	load_static_data();

}



function sav(data, local_name, remote_name) {

	if(local_name && local_name.length > 0) {

		data.last_mod = (new Date()).getTime();

		save_local(data, local_name);

		

		if(!remote_name) {

			remote_name = local_name;

		}

		if(chardata.name && chardata.options && chardata.options.owner && chardata.options.owner.length > 0) {

			save_remote(data, remote_name);

		}

	}

}



function save_remote(data, name) {

	if (data != null) {

		$.ajax({

		  type: "POST",

		  url: "/" + data.type + "/" + chardata.options.owner + "/" + name,

		  data: JSON.stringify(data),

		  success: function(data, status) {

		  	  console.log(data);

		  	  console.log("status");

		  },

		  contentType: "application/json; charset=utf-8",

		  dataType: "json"

		});

	}

}



function save_local(data, name, expires) {

	expires = expires | (new Date(2020, 02, 02)).toUTCString();

	data = escape(TAFFY.JSON.stringify(data));

	document.cookie = name + "=" + data + ";expires=" + expires;

}



function save_character() {

	var name = chardata.name;

	if(name == null || name.length == 0) {

		name = create_default_name();

	}

	players_companion.last_character = name;

	save_local(players_companion, "players_companion");

	

	var save_data = jQuery.extend(true, {}, chardata);

	if (save_data.skills != null) {

		save_data.skills = save_data.skills.get();

	}

	if (save_data.feats != null) {

		save_data.feats = save_data.feats.get();

	}

	save_data.type = "character";

	

	sav(save_data, "ch_" + name, name);

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

	if(data == null) {

		data = [];

	}

	return new TAFFY(data);

}



function load_static_data() {

	spells.forEach(function(spell, n) {

		for(var classname in spell.classes) {

			var clazz = classes.first({ name: classname });

			// level listed starting from 1

			clazz.spells[spell.classes[classname]].push(spell.name);

		}

	});

	// TODO - maybe move to the classes

	specials.forEach(function(special, n) {

		for(var classname in special.classes) {

			var clazz = classes.first({ name: classname });

			for(var i=0; i<special.classes[classname].length; i++) {

				clazz.specials[special.classes[classname][i].level].push({special_name: special.name, mod: special.mod});

			}

		}

	});



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



		for(classname in feat.classes) {

			var clazz = classes.first({ name: classname });

			clazz.feats[feat.classes[classname]].push(feat.name);

		}

		

		return feat;

	});

	

	// TODO - elegance?

	// spells.orderBy({name:"logical"});

	// feats.orderBy({name:"logical"});

	races.orderBy({name:"logical"});

	// domains.orderBy({name:"logical"});

	classes.orderBy({name:"logical"});

	// schools.orderBy({name:"logical"});

	weapons.orderBy({name:"logical"});

	armors.orderBy({name:"logical"});

	skills.orderBy({name:"logical"});

	// languages.orderBy({name:"logical"});

	// deitys.orderBy({name:"logical"});

	// specials.orderBy({name:"logical"});

	// favored_enemys.orderBy({name:"logical"});	

}



function delete_character() {

	var prompt_name = chardata.name ? chardata.name : "the current character";

	var answer = confirm("Are you sure you want to delete " + prompt_name + "?");

	if(answer) {

		var name = chardata.name ? chardata.name : ("ch_" + create_default_name());

		save_local({}, name, "Thu, 01-Jan-1970 00:00:01 GMT");

		if(chardata.options.owner && chardata.name) {

			$.ajax({

			  type: "GET",

			  url: "/delete/" + chardata.options.owner + "/" + name,

			  data: {},

			  success: function(data, status) {

				  console.log(data);

				  console.log("status: " + status);

				  alert("Deleted character data: " + data);

			  },

			  contentType: "application/json; charset=utf-8",

			  async: false

			});		

		}

		create_new_character();

	}

}



function create_default_name() {

	var race_name = races.first({ name: chardata.race_name }).shortname;

	var class_name = "";

	for(var classname in chardata.classes) {

		class_name += classes.first({ name: classname }).shortname + "_";

	}

	return race_name + "_" + class_name;	

}