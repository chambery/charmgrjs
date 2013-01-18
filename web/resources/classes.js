var TAFFY, bloodline_powers, is_class_skill, sorcerer_bloodlines;

if (typeof exports === "object") {
  TAFFY = require("../../lib/taffy").taffy;
  sorcerer_bloodlines = require("./sorcerer_bloodlines").sorcerer_bloodlines;
  bloodline_powers = require("./sorcerer_bloodlines").bloodline_powers;
}

this.classes = TAFFY([
  {
    name: "Barbarian",
    shortname: "Brb",
    base_attack_bonus: ["1", "2", "3", "4", "5", "6/1", "7/2", "8/3", "9/4", "10/5", "11/6/1", "12/7/2", "13/8/3", "14/9/4", "15/10/5", "16/11/6/1", "17/12/7/2", "18/13/8/3", "19/14/9/4", "20/15/10/5"],
    fort_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    ref_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    will_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    spells_per_day: [],
    spells_known: [],
    skill_points_per_level: 4,
    bonus_feats_levels: [6, 12, 18],
    hd: 12,
    type: "class",
    tags: ["pathfinder"],
    _id: "2c3d",
    spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    update_literacy: function(language_id) {
      var checked, language, skill_pts;
      checked = $("#literacy_" + language_id + "_check").attr("checked");
      language = languages({
        _id: language_id
      }).first();
      if (!checked && chardata.classes["Barbarian"].literacy[language.name]) {
        delete chardata.classes["Barbarian"].literacy[language.name];
      } else {
        chardata.classes["Barbarian"].literacy[language.name] = true;
      }
      skill_pts = calc_skill_points() - (count_attrs(chardata.classes["Barbarian"].literacy) * 2);
      $("#skill_pts_remaining").html((skill_pts < 0 ? ["<span class=\"alarm\">", skill_pts, "</span>"].join("") : skill_pts));
      return save_character();
    },
    custom: {
      edit: {
        0: [
          {
            script: function() {
              var classname, clazz, i, lang, langs, race, _results;
              if (chardata.classes["Barbarian"].literacy == null) {
                chardata.classes["Barbarian"].literacy = [];
              }
              if ($("#literacy_header").length === 0) {
                $("#language_table").prepend("<td id=\"literacy_header\" colspan=2></td><td>Lit</td>");
              }
              langs = [];
              for (classname in chardata.classes) {
                clazz = classes({
                  name: classname
                }).first();
                langs = langs.concat((clazz.languages != null ? clazz.languages : []));
              }
              race = races({
                name: chardata.race_name
              }).first();
              langs = langs.concat(race.languages);
              langs = langs.concat(chardata.languages);
              _results = [];
              for (i in langs) {
                lang = languages({
                  name: langs[i]
                }).first();
                if ($("#literacy_" + lang._id).length === 0) {
                  $("tr#language_" + lang._id).append("<td id=\"literacy_" + lang._id + "\"><input id=\"literacy_" + lang._id + "_check\" type=\"checkbox\" /></td>");
                  $("#literacy_" + lang._id + "_check").click(function() {
                    return classes({
                      name: "Barbarian"
                    }).first().update_literacy(lang._id);
                  });
                  if (chardata.classes["Barbarian"].literacy[lang.name]) {
                    _results.push($("#literacy_" + lang._id + "_check").attr("checked", "checked"));
                  } else {
                    _results.push(void 0);
                  }
                } else {
                  _results.push(void 0);
                }
              }
              return _results;
            }
          }
        ],
        class_features: []
      }
    }
  }, {
    name: "Bard",
    shortname: "Brd",
    base_attack_bonus: ["0", "1", "2", "3", "3", "4", "5", "6/1", "6/1", "7/2", "8/3", "9/4", "9/4", "10/5", "11/6/1", "12/7/2", "12/7/2", "13/8/3", "14/9/4", "15/10/5"],
    fort_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    ref_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    will_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    spells_per_day: [[2, "-", "-", "-", "-", "-", "-"], [3, "-", "-", "-", "-", "-", "-"], [3, 1, "-", "-", "-", "-", "-"], [3, 2, "-", "-", "-", "-", "-"], [3, 3, 1, "-", "-", "-", "-"], [3, 3, 2, "-", "-", "-", "-"], [3, 3, 2, "-", "-", "-", "-"], [3, 3, 3, 1, "-", "-", "-"], [3, 3, 3, 2, "-", "-", "-"], [3, 3, 3, 2, "-", "-", "-"], [3, 3, 3, 3, 1, "-", "-"], [3, 3, 3, 3, 2, "-", "-"], [3, 3, 3, 3, 2, "-", "-"], [4, 3, 3, 3, 3, 1, "-"], [4, 4, 3, 3, 3, 2, "-"], [4, 4, 4, 3, 3, 2, "-"], [4, 4, 4, 4, 3, 3, 1], [4, 4, 4, 4, 4, 3, 2], [4, 4, 4, 4, 4, 4, 3], [4, 4, 4, 4, 4, 4, 4]],
    spells_known: [[4, "-", "-", "-", "-", "-", "-"], [5, 2, "-", "-", "-", "-", "-"], [6, 3, "-", "-", "-", "-", "-"], [6, 3, 2, "-", "-", "-", "-"], [6, 4, 3, "-", "-", "-", "-"], [6, 4, 3, "-", "-", "-", "-"], [6, 4, 4, 2, "-", "-", "-"], [6, 4, 4, 3, "-", "-", "-"], [6, 4, 4, 3, "-", "-", "-"], [6, 4, 4, 4, 2, "-", "-"], [6, 4, 4, 4, 3, "-", "-"], [6, 4, 4, 4, 3, "-", "-"], [6, 4, 4, 4, 4, 2, "-"], [6, 4, 4, 4, 4, 3, "-"], [6, 4, 4, 4, 4, 3, "-"], [6, 5, 4, 4, 4, 4, 2], [6, 5, 5, 4, 4, 4, 3], [6, 5, 5, 5, 4, 4, 3], [6, 5, 5, 5, 5, 4, 4], [6, 5, 5, 5, 5, 5, 4]],
    skill_points_per_level: 6,
    bonus_feats_levels: [5, 10],
    hd: 6,
    type: "class",
    tags: ["pathfinder"],
    _id: "246b",
    spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    class_features: ["Cast Arcane"]
  }, {
    name: "Cleric",
    shortname: "Clr",
    base_attack_bonus: ["0", "1", "2", "3", "3", "4", "5", "6/1", "6/1", "7/2", "8/3", "9/4", "9/4", "10/5", "11/6/1", "12/7/2", "12/7/2", "13/8/3", "14/9/4", "15/10/5"],
    fort_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    ref_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    will_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    spells_per_day: [[3, 1, "-", "-", "-", "-", "-", "-", "-", "-"], [4, 2, "-", "-", "-", "-", "-", "-", "-", "-"], [4, 2, 1, "-", "-", "-", "-", "-", "-", "-"], [5, 3, 2, "-", "-", "-", "-", "-", "-", "-"], [5, 3, 2, 1, "-", "-", "-", "-", "-", "-"], [5, 3, 3, 2, "-", "-", "-", "-", "-", "-"], [6, 4, 3, 2, 1, "-", "-", "-", "-", "-"], [6, 4, 3, 3, 2, "-", "-", "-", "-", "-"], [6, 4, 4, 3, 2, 1, "-", "-", "-", "-"], [6, 4, 4, 3, 3, 2, "-", "-", "-", "-"], [6, 5, 4, 4, 3, 2, 1, "-", "-", "-"], [6, 5, 4, 4, 3, 3, 2, "-", "-", "-"], [6, 5, 5, 4, 4, 3, 2, 1, "-", "-"], [6, 5, 5, 4, 4, 3, 3, 2, "-", "-"], [6, 5, 5, 5, 4, 4, 3, 2, 1, "-"], [6, 5, 5, 5, 4, 4, 3, 3, 2, "-"], [6, 5, 5, 5, 5, 4, 4, 3, 2, 1], [6, 5, 5, 5, 5, 4, 4, 3, 3, 2], [6, 5, 5, 5, 5, 5, 4, 4, 3, 3], [6, 5, 5, 5, 5, 5, 4, 4, 4, 4]],
    skill_points_per_level: 2,
    bonus_feats_levels: [3, 7, 11, 15, 19],
    languages: [0, 3, 14],
    hd: 8,
    type: "class",
    tags: ["pathfinder"],
    _id: "d577",
    spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    custom: {
      edit: {
        0: {
          domains: {
            ui: "<table id='domains' style='width: 100%;'><tr><td>Domains</td></tr><tr><td><table id='domain_selector' style='width: 100%'></table></td></tr></table>",
            script: function() {
              var available_domains, deity, set_domain;
              set_domain = function(item, checked) {
                if (checked) {
                  return chardata.domains.push(item.name);
                } else {
                  return remove(chardata.domains, chardata.domains.indexOf(item.name));
                }
              };
              if (chardata.domains == null) chardata.domains = [];
              available_domains = [];
              if (chardata.deity) {
                deity = deities({
                  name: chardata.deity
                }).first();
                console.log(deity.name);
                available_domains = domains({
                  name: deity.domains
                }).get();
              }
              console.log(available_domains);
              return create_selector_grid(available_domains, "table#domains", set_domain, chardata.domains, 4);
            }
          },
          class_features: ["Channel Energy", "Cast Divine"]
        }
      }
    }
  }, {
    name: "Druid",
    shortname: "Drd",
    base_attack_bonus: ["0", "1", "2", "3", "3", "4", "5", "6/1", "6/1", "7/2", "8/3", "9/4", "9/4", "10/5", "11/6/1", "12/7/2", "12/7/2", "13/8/3", "14/9/4", "15/10/5"],
    fort_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    ref_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    will_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    spells_per_day: [[3, 1, "-", "-", "-", "-", "-", "-", "-", "-"], [4, 2, "-", "-", "-", "-", "-", "-", "-", "-"], [4, 2, 1, "-", "-", "-", "-", "-", "-", "-"], [5, 3, 2, "-", "-", "-", "-", "-", "-", "-"], [5, 3, 2, 1, "-", "-", "-", "-", "-", "-"], [5, 3, 3, 2, "-", "-", "-", "-", "-", "-"], [6, 4, 3, 2, 1, "-", "-", "-", "-", "-"], [6, 4, 3, 3, 2, "-", "-", "-", "-", "-"], [6, 4, 4, 3, 2, 1, "-", "-", "-", "-"], [6, 4, 4, 3, 3, 2, "-", "-", "-", "-"], [6, 5, 4, 4, 3, 2, 1, "-", "-", "-"], [6, 5, 4, 4, 3, 3, 2, "-", "-", "-"], [6, 5, 5, 4, 4, 3, 2, 1, "-", "-"], [6, 5, 5, 4, 4, 3, 3, 2, "-", "-"], [6, 5, 5, 5, 4, 4, 3, 2, 1, "-"], [6, 5, 5, 5, 4, 4, 3, 3, 2, "-"], [6, 5, 5, 5, 5, 4, 4, 3, 2, 1], [6, 5, 5, 5, 5, 4, 4, 3, 3, 2], [6, 5, 5, 5, 5, 5, 4, 4, 3, 3], [6, 5, 5, 5, 5, 5, 4, 4, 4, 4]],
    skill_points_per_level: 4,
    bonus_feats_levels: [],
    languages: [16],
    hd: 8,
    type: "class",
    tags: ["pathfinder"],
    _id: "6041",
    spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    class_features: ["Cast Divine"]
  }, {
    name: "Fighter",
    shortname: "Ftr",
    base_attack_bonus: ["1", "2", "3", "4", "5", "6/1", "7/2", "8/3", "9/4", "10/5", "11/6/1", "12/7/2", "13/8/3", "14/9/4", "15/10/5", "16/11/6/1", "17/12/7/2", "18/13/8/3", "19/14/9/4", "20/15/10/5"],
    fort_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    ref_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    will_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    spells_per_day: [],
    skill_points_per_level: 2,
    bonus_feats_levels: [0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
    hd: 10,
    type: "class",
    tags: ["pathfinder"],
    _id: "4b8c",
    spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    class_features: []
  }, {
    name: "Monk",
    shortname: "Mnk",
    base_attack_bonus: ["0", "1", "2", "3", "3", "4", "5", "6/1", "6/1", "7/2", "8/3", "9/4", "9/4", "10/5", "11/6/1", "12/7/2", "12/7/2", "13/8/3", "14/9/4", "15/10/5"],
    fort_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    ref_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    will_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    flurry_of_blows: ["-2/-2", "-1/-1", "0/0", "1/1", "2/2", "3/3", "4/4", "5/5/0", "6/6/1", "7/7/2", "8/8/8/3", "9/9/9/4", "9/9/9/4", "10/10/10/5", "11/11/11/6/1", "12/12/12/7/2", "12/12/12/7/2", "13/13/13/8/3", "14/14/14/9/4", "15/15/15/10/5"],
    flurry_weapons: [29, 30, 42, 43, 46, 55, 56, 57, 60, 61],
    flurry_damage: [["1d4", "1d6", "1d8"], ["1d4", "1d6", "1d8"], ["1d4", "1d6", "1d8"], ["1d6", "1d8", "2d6"], ["1d6", "1d8", "2d6"], ["1d6", "1d8", "2d6"], ["1d6", "1d8", "2d6"], ["1d8", "1d10", "2d8"], ["1d8", "1d10", "2d8"], ["1d8", "1d10", "2d8"], ["1d8", "1d10", "2d8"], ["1d10", "2d6", "3d6"], ["1d10", "2d6", "3d6"], ["1d10", "2d6", "3d6"], ["1d10", "2d6", "3d6"], ["2d6", "2d8", "3d8"], ["2d6", "2d8", "3d8"], ["2d6", "2d8", "3d8"], ["2d6", "2d8", "3d8"], ["2d8", "2d10", "4d8"]],
    ac_bonus: [0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4],
    spells_per_day: [],
    skill_points_per_level: 4,
    bonus_feats_levels: [0, 1, 5],
    hd: 8,
    type: "class",
    tags: ["pathfinder"],
    _id: "4b46",
    spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    class_features: []
  }, {
    name: "Paladin",
    shortname: "Pal",
    base_attack_bonus: ["1", "2", "3", "4", "5", "6/1", "7/2", "8/3", "9/4", "10/5", "11/6/1", "12/7/2", "13/8/3", "14/9/4", "15/10/5", "16/11/6/1", "17/12/7/2", "18/13/8/3", "19/14/9/4", "20/15/10/5"],
    fort_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    ref_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    will_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    spells_per_day: [[-",-", -",-"], ["-", "-", "-", "-"], ["-", "-", "-", "-"], [0, "-", "-", "-"], [0, "-", "-", "-"], [1, "-", "-", "-"], [1, "-", "-", "-"], [1, 0, "-", "-"], [1, 0, "-", "-"], [1, 1, "-", "-"], [1, 1, 0, "-"], [1, 1, 1, "-"], [1, 1, 1, "-"], [2, 1, 1, 0], [2, 1, 1, 1], [2, 2, 1, 1], [2, 2, 2, 1], [3, 2, 2, 1], [3, 3, 3, 2], [3, 3, 3, 3]],
    skill_points_per_level: 2,
    bonus_feats_levels: [4, 9, 15],
    hd: 1,
    type: "class",
    tags: ["pathfinder"],
    _id: "487f",
    spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    class_features: ["Channel Energy", "Cast Divine"]
  }, {
    name: "Ranger",
    shortname: "Rng",
    base_attack_bonus: ["1", "2", "3", "4", "5", "6/1", "7/2", "8/3", "9/4", "10/5", "11/6/1", "12/7/2", "13/8/3", "14/9/4", "15/10/5", "16/11/6/1", "17/12/7/2", "18/13/8/3", "19/14/9/4", "20/15/10/5"],
    fort_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    ref_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    will_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    spells_per_day: [["-", "-", "-", "-"], ["-", "-", "-", "-"], ["-", "-", "-", "-"], [0, "-", "-", "-"], [0, "-", "-", "-"], [1, "-", "-", "-"], [1, "-", "-", "-"], [1, 0, "-", "-"], [1, 0, "-", "-"], [1, 1, "-", "-"], [1, 1, 0, "-"], [1, 1, 1, "-"], [1, 1, 1, "-"], [2, 1, 1, 0], [2, 1, 1, 1], [2, 2, 1, 1], [2, 2, 2, 1], [3, 2, 2, 1], [3, 3, 3, 2], [3, 3, 3, 3]],
    skill_points_per_level: 6,
    bonus_feats_levels: [4, 9, 14, 19],
    hd: 8,
    type: "class",
    tags: ["pathfinder"],
    _id: "7226",
    spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    update_weapon_style: function() {
      chardata.weapon_style = $("#weapon_style_select").val();
      return save_character();
    },
    edit_favored: function(favored_name, db, index) {
      var favored, select;
      if (!chardata[favored_name]) chardata[favored_name] = [];
      favored = db({
        name: (chardata[favored_name].length > index ? chardata[favored_name][index].name : "")
      }).first();
      if (favored) favored = favored._id;
      select = create_select(favored_name + "_" + index, db().get(), "chardata." + favored_name + "[" + index + "] = { name: $('#" + favored_name + "_" + index + "').val(), val: (parseInt($('#" + favored_name + "_" + index + "_bonus').val()) | 0) }; save_character();", false, "style='width: 100%;'", null, favored);
      $("#" + favored_name + "s").append("<tr><td>" + select + "</td><td><input id=\"" + favored_name + "_" + index + "_bonus\" type=\"text\" size=\"1\"/></td></tr>");
      $("#" + favored_name + "_" + index + "_bonus").val((chardata[favored_name][index] ? chardata[favored_name][index].val : 0));
      return $("#" + favored_name + "_" + index + "_bonus").blur(function() {
        chardata[favored_name][index] = {
          name: $("#" + favored_name + "_" + index).val(),
          val: parseInt($("#" + favored_name + "_" + index + "_bonus").val()) | 0
        };
        return save_character();
      });
    },
    main_favored: function(favored_name, db, short_name, specials_id) {
      var f_e, i, _results;
      _results = [];
      for (i in chardata[favored_name]) {
        f_e = db({
          name: chardata[favored_name][i].name
        }).first();
        $("#specials").append("<tr id=\"special_" + favored_name + "_" + f_e._id + "\"><td><input id=\"" + favored_name + "_" + f_e._id + "\" type=\"checkbox\"/></td><td><a class=fake_link onclick=\"show_item_detail(specials, '" + specials_id + "')\">" + chardata[favored_name][i].name + " " + pos(chardata[favored_name][i].val) + " (" + short_name + ")</a></td></tr>");
        _results.push($("input[id=\"" + favored_name + "_" + f_e._id + "\"]").bind("click", {
          mod: chardata[favored_name][i].val
        }, function(e) {
          var j;
          if ($(this).attr("checked")) {
            for (j in chardata.weapons) {
              update_weapon_attack(j, e.data.mod);
              update_weapon_damage(j, e.data.mod);
            }
            return update_skill_ranks(["Bluff", "Knowledge", "Perception", "Sense Motive", "Survival"]);
          } else {
            return recalc_main_page();
          }
        }));
      }
      return _results;
    },
    custom: {
      edit: {
        0: [
          {
            ui: "<table id='favored_enemys' style='width: 100%;'><tr><td>Favored Enemies<span style='float:right'>Available Bonus:</span></td><td id='fe_bonus'></td></tr></table>",
            script: function() {
              return classes({
                name: "Ranger"
              }).first().edit_favored("favored_enemy", favored_enemies, 0);
            }
          }
        ],
        1: [
          {
            ui: "<table style='width: 100%;'><tr><td>Weapon Style</td><td id='weapon_style'></td></tr></table>",
            script: function() {
              var select, selected;
              selected = chardata.weapon_style === "Archery" ? 1 : 0;
              select = create_select("weapon_style_select", [
                {
                  _id: 0,
                  name: "Two-handed fighting"
                }, {
                  _id: 1,
                  name: "Archery"
                }
              ], "classes( { name : 'Ranger' } ).first().update_weapon_style()", false, "style='width: 100%;'", null, selected);
              return $("#weapon_style").append("<tr><td>" + select + "</td></tr>");
            }
          }
        ],
        2: [
          {
            ui: "<table id='favored_terrains' style='width: 100%;'><tr><td>Favored Terrain <span style='float:right'>Available Bonus: </span></td><td id='ft_bonus'></td></tr></table>",
            script: function() {
              return classes({
                name: "Ranger"
              }).first().edit_favored("favored_terrain", favored_terrains, 0);
            }
          }
        ],
        4: [
          {
            script: function() {
              return classes({
                name: "Ranger"
              }).first().edit_favored("favored_enemy", favored_enemies, 1);
            }
          }
        ],
        7: [
          {
            script: function() {
              return classes({
                name: "Ranger"
              }).first().edit_favored("favored_terrain", favored_terrains, 1);
            }
          }
        ],
        9: [
          {
            script: function() {
              return classes({
                name: "Ranger"
              }).first().edit_favored("favored_enemy", favored_enemies, 2);
            }
          }
        ],
        12: [
          {
            script: function() {
              return classes({
                name: "Ranger"
              }).first().edit_favored("favored_terrain", favored_terrains, 2);
            }
          }
        ],
        14: [
          {
            script: function() {
              return classes({
                name: "Ranger"
              }).first().edit_favored("favored_enemy", favored_enemies, 3);
            }
          }
        ],
        17: [
          {
            script: function() {
              return classes({
                name: "Ranger"
              }).first().edit_favored("favored_terrain", favored_terrains, 3);
            }
          }
        ],
        19: [
          {
            script: function() {
              return classes({
                name: "Ranger"
              }).first().edit_favored("favored_enemy", favored_enemies, 4);
            }
          }
        ]
      },
      main: {
        before_specials: [
          function() {
            return classes({
              name: "Ranger"
            }).first().main_favored("favored_enemy", favored_enemies, "Fav. Enemy", "90c3");
          }, function() {
            return classes({
              name: "Ranger"
            }).first().main_favored("favored_terrain", favored_terrains, "Fav. Terr.", "9dc3");
          }
        ],
        feats: {
          1: {
            script: function(bonus) {
              bonus.count += 1;
              if (chardata.weapon_style === "Archery") {
                bonus.feats["Far Shot"] = true;
                bonus.feats["Point-Blank Shot"] = true;
                bonus.feats["Precise Shot"] = true;
                return bonus.feats["Rapid Shot"] = true;
              } else {
                bonus.feats["Double Slice"] = true;
                bonus.feats["Improved Shield Bash"] = true;
                bonus.feats["Quick Draw"] = true;
                return bonus.feats["Two-Weapon Fighting"] = true;
              }
            },
            5: {
              script: function(bonus) {
                bonus.count += 1;
                if (chardata.weapon_style === "Archery") {
                  bonus.feats["Improved Precise Shot"] = true;
                  return bonus.feats["Manyshot"] = true;
                } else {
                  bonus.feats["Improved Two-Weapon Fighting"] = true;
                  return bonus.feats["Two-Weapon Defense"] = true;
                }
              },
              9: {
                script: function(bonus) {
                  bonus.count += 1;
                  if (chardata.weapon_style === "Archery") {
                    bonus.feats["Pinpoint Targeting"] = true;
                    return bonus.feats["Shot on the Run"] = true;
                  } else {
                    bonus.feats["Greater Two-Weapon Fighting"] = true;
                    return bonus.feats["Two-Weapon Rend"] = true;
                  }
                }
              }
            }
          }
        }
      }
    },
    class_features: ["Cast Divine"]
  }, {
    name: "Rogue",
    shortname: "Rog",
    base_attack_bonus: ["0", "1", "2", "3", "3", "4", "5", "6/1", "6/1", "7/2", "8/3", "9/4", "9/4", "10/5", "11/6/1", "12/7/2", "12/7/2", "13/8/3", "14/9/4", "15/10/5"],
    fort_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    ref_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    will_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    spells_per_day: [],
    skill_points_per_level: 8,
    bonus_feats_levels: [4, 9, 14, 19],
    special_abilities_levels: [9, 12, 15, 19],
    hd: 6,
    type: "class",
    tags: ["pathfinder"],
    _id: "3410",
    spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    class_features: []
  }, {
    name: "Sorcerer",
    shortname: "Sor",
    base_attack_bonus: ["0", "1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6/1", "6/1", "7/2", "7/2", "8/3", "8/3", "9/4", "9/4", "10/5"],
    fort_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    ref_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    will_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    spells_per_day: [[5, 3, "-", "-", "-", "-", "-", "-", "-", "-"], [6, 4, "-", "-", "-", "-", "-", "-", "-", "-"], [6, 5, "-", "-", "-", "-", "-", "-", "-", "-"], [6, 6, 3, "-", "-", "-", "-", "-", "-", "-"], [6, 6, 4, "-", "-", "-", "-", "-", "-", "-"], [6, 6, 5, 3, "-", "-", "-", "-", "-", "-"], [6, 6, 6, 4, "-", "-", "-", "-", "-", "-"], [6, 6, 6, 5, 3, "-", "-", "-", "-", "-"], [6, 6, 6, 6, 4, "-", "-", "-", "-", "-"], [6, 6, 6, 6, 5, 3, "-", "-", "-", "-"], [6, 6, 6, 6, 6, 4, "-", "-", "-", "-"], [6, 6, 6, 6, 6, 5, 3, "-", "-", "-"], [6, 6, 6, 6, 6, 6, 4, "-", "-", "-"], [6, 6, 6, 6, 6, 6, 5, 3, "-", "-"], [6, 6, 6, 6, 6, 6, 6, 4, "-", "-"], [6, 6, 6, 6, 6, 6, 6, 5, 3, "-"], [6, 6, 6, 6, 6, 6, 6, 6, 4, "-"], [6, 6, 6, 6, 6, 6, 6, 6, 5, 3], [6, 6, 6, 6, 6, 6, 6, 6, 6, 4], [6, 6, 6, 6, 6, 6, 6, 6, 6, 6]],
    spells_known: [[4, 2, "-", "-", "-", "-", "-", "-", "-", "-"], [5, 2, "-", "-", "-", "-", "-", "-", "-", "-"], [5, 3, "-", "-", "-", "-", "-", "-", "-", "-"], [6, 3, 1, "-", "-", "-", "-", "-", "-", "-"], [6, 4, 2, "-", "-", "-", "-", "-", "-", "-"], [7, 4, 2, 1, "-", "-", "-", "-", "-", "-"], [7, 5, 3, 2, "-", "-", "-", "-", "-", "-"], [8, 5, 3, 2, 1, "-", "-", "-", "-", "-"], [8, 5, 4, 3, 2, "-", "-", "-", "-", "-"], [9, 5, 4, 3, 2, 1, "-", "-", "-", "-"], [9, 5, 5, 4, 3, 2, "-", "-", "-", "-"], [9, 5, 5, 4, 3, 2, 1, "-", "-", "-"], [9, 5, 5, 4, 4, 3, 2, "-", "-", "-"], [9, 5, 5, 4, 4, 3, 2, 1, "-", "-"], [9, 5, 5, 4, 4, 4, 3, 2, "-", "-"], [9, 5, 5, 4, 4, 4, 3, 2, 1, "-"], [9, 5, 5, 4, 4, 4, 3, 3, 2, "-"], [9, 5, 5, 4, 4, 4, 3, 3, 2, 1], [9, 5, 5, 4, 4, 4, 3, 3, 3, 2], [9, 5, 5, 4, 4, 4, 3, 3, 3, 3]],
    skill_points_per_level: 2,
    bonus_feats_levels: [2, 5, 8, 11, 14, 17],
    hd: 4,
    type: "class",
    tags: ["pathfinder"],
    _id: "9c80",
    spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    sr: function(sr, chardata) {
      return this.calc_dr_saves(sr, "sr", chardata);
    },
    update_bloodline: function() {
      chardata.bloodline = $("#bloodline_select").val();
      $("#draconic_type").toggle(chardata.bloodline === "Draconic");
      chardata.draconic_type = (chardata.bloodline === "Draconic" ? $("#draconic_select").val() : null);
      return save_character();
    },
    modify_bloodline_power_detail: function(power) {
      var detail, j, level, special_level;
      detail = power.detail;
      special_level = null;
      for (level in power.levels) {
        if (level <= chardata.classes["Sorcerer"].level) special_level = level;
      }
      if (special_level) {
        for (j in power.levels[special_level].vals) {
          detail = detail.replace("_$" + j, power.levels[special_level].vals[j]);
        }
      }
      return detail;
    },
    merge_bloodline_weapons: function(char_weapons) {
      var bloodline, bloodline_weapons, i, level, name, power, power_weapons, weapon, _ref;
      bloodline = sorcerer_bloodlines({
        name: chardata.bloodline
      }).first();
      if (bloodline) {
        power_weapons = {};
        for (i in bloodline.powers) {
          power = bloodline_powers({
            name: bloodline.powers[i]
          }).first();
          if (power) {
            for (level in power.levels) {
              if (level <= chardata.classes["Sorcerer"].level && power.levels[level].weapons) {
                console.log("level: " + level);
                _ref = power.levels[level].weapons;
                for (name in _ref) {
                  weapon = _ref[name];
                  console.log("name: " + name + ", weapon: " + weapon.note);
                  weapon["name"] = name;
                  if (!weapons({
                    name: name
                  }).first()) {
                    console.log("Adding ");
                    weapons.insert(weapon);
                  } else {
                    console.log("Updating ");
                    weapons.update(weapon, {
                      name: weapon.name
                    });
                  }
                  if (!power_weapons[name]) {
                    power_weapons[name] = power.levels[level].weapons[name];
                  } else {
                    $.extend(power_weapons[name], power.levels[level].weapons[name]);
                  }
                  console.log(name);
                }
              } else {
                break;
              }
            }
          }
        }
        bloodline_weapons = [];
        $.each(power_weapons, function(name, weapon) {
          return bloodline_weapons.push(weapon);
        });
        $.merge(char_weapons, bloodline_weapons);
      }
    },
    calc_dr_saves: function(save, type, char_class) {
      var bloodline, dr_fn, i, level, power;
      console.log("\t\tcalc_dr_saves");
      bloodline = sorcerer_bloodlines({
        name: char_class.bloodline
      }).first();
      if (bloodline) {
        for (i in bloodline.powers) {
          power = bloodline_powers({
            name: bloodline.powers[i]
          }).first();
          console.log("\t\t\tpower: " + power.name + " ");
          dr_fn = null;
          for (level in power.levels) {
            if (level <= char_class.level && power.levels[level][type]) {
              dr_fn = power.levels[level][type];
            }
            console.log("\t\t\tcalling: " + dr_fn + " ");
            if (dr_fn) dr_fn(save, char_class);
            console.log(save);
          }
        }
      }
      return save;
    },
    custom: {
      all: {
        calc_sr: [
          function(save) {
            return classes({
              name: "Sorcerer"
            }).first().calc_dr_saves(save, "sr");
          }
        ]
      },
      edit: {
        0: [
          {
            ui: "<table style='width: 100%;border-collapse: collapse;'><tr style='background-color: #E2F0F9'><td>Bloodline: </td><td id='bloodline'></td></tr></table>",
            script: function() {
              var char_bloodline, char_draconic_type, draconic_select, select;
              char_bloodline = sorcerer_bloodlines.first({
                name: chardata.bloodline
              });
              char_draconic_type = null;
              if (chardata.draconic_type) {
                char_draconic_type = draconic_types.first({
                  name: chardata.draconic_type
                });
              }
              select = create_select("bloodline_select", sorcerer_bloodlines.get(), "classes( {name: 'Sorcerer'} ).first().update_bloodline(); edit.recalc_edit_page();", false, "style='width: 100%;'", null, (char_bloodline ? char_bloodline._id : ""));
              draconic_select = create_select("draconic_select", draconic_types.get(), "classes( {name: 'Sorcerer'} ).first().update_bloodline(); edit.recalc_edit_page();", false, "style='width: 100%;'", null, (char_draconic_type ? char_draconic_type._id : ""));
              $("#bloodline").append("<tr><td></td><td>" + select + "</td></tr>");
              $("#bloodline").append("<tr id=\"draconic_type\"><td>type:</td><td>" + draconic_select + "</td></tr>");
              $("#draconic_type").toggle(chardata.bloodline === "Draconic");
              if (!chardata.bloodline) {
                return classes({
                  name: "Sorcerer"
                }).first().update_bloodline();
              }
            }
          }
        ]
      },
      skills: [
        function(class_skills) {
          var char_bloodline;
          char_bloodline = sorcerer_bloodlines.first({
            name: chardata.bloodline
          });
          return class_skills.push(char_bloodline.skill);
        }
      ],
      main: {
        before_weapons_build: [
          function(char_weapons) {
            return classes({
              name: "Sorcerer"
            }).first().merge_bloodline_weapons(char_weapons);
          }
        ],
        before_weapons_populate: [
          function(char_weapons) {
            return classes({
              name: "Sorcerer"
            }).first().merge_bloodline_weapons(char_weapons);
          }
        ],
        before_weapons_recalc: [
          function(char_weapons) {
            return classes({
              name: "Sorcerer"
            }).first().merge_bloodline_weapons(char_weapons);
          }
        ],
        before_spells: [
          function(all_spells) {
            var bloodline, bloodline_level, class_spell_lvl, spell, _results;
            bloodline = sorcerer_bloodlines.first({
              name: chardata.bloodline
            });
            if (bloodline) {
              class_spell_lvl = 0;
              _results = [];
              for (bloodline_level in bloodline.spells) {
                spell = spells.first({
                  name: bloodline.spells[bloodline_level]
                });
                if (!all_spells[class_spell_lvl]) all_spells[class_spell_lvl] = [];
                if (chardata.classes["Sorcerer"].level >= bloodline_level && all_spells[class_spell_lvl].indexOf(bloodline.spells[bloodline_level]) === -1) {
                  all_spells[class_spell_lvl].push(bloodline.spells[bloodline_level]);
                }
                _results.push(class_spell_lvl++);
              }
              return _results;
            }
          }
        ],
        after_spells: [
          function() {
            var bloodline, level, spell;
            bloodline = sorcerer_bloodlines.first({
              name: chardata.bloodline
            });
            if (bloodline) {
              for (level in bloodline.spells) {
                if (chardata.classes["Sorcerer"].level >= level) {
                  spell = spells.first({
                    name: bloodline.spells[level]
                  });
                  $("#spell_" + spell._id).wrap("<i />");
                }
              }
              return $("#etc").append("<i>" + chardata.bloodline + " &nbsp;</i>");
            }
          }
        ],
        before_specials: [
          function() {
            var bloodline, i, level, power, special;
            bloodline = sorcerer_bloodlines.first({
              name: chardata.bloodline
            });
            if (bloodline) {
              for (i in bloodline.powers) {
                power = bloodline_powers.first({
                  name: bloodline.powers[i]
                });
                special = null;
                for (level in power.levels) {
                  if (level <= chardata.classes["Sorcerer"].level) special = power;
                }
                if (special) {
                  $("#specials").append("<tr><td></td><td><a class=fake_link onclick='show_item_detail(bloodline_powers, \"" + special._id + "\", classes( { name: \"Sorcerer\"} ).first().modify_bloodline_power_detail)'>" + special.name + "</a></td></tr>");
                }
              }
            }
          }
        ],
        damage_reduction: [
          function(dr) {
            return classes({
              name: "Sorcerer"
            }).first().calc_dr_saves(dr, "dr");
          }
        ],
        save: [
          function(save) {
            return classes({
              name: "Sorcerer"
            }).first().calc_dr_saves(save, "save");
          }
        ],
        Str: [
          function(mod) {
            return classes({
              name: "Sorcerer"
            }).first().calc_dr_saves(mod, "Str");
          }
        ]
      },
      feats: {
        6: {
          script: function(bonus) {
            var bloodline, i, _results;
            bonus.count += 1;
            bloodline = sorcerer_bloodlines.first({
              name: chardata.bloodline
            });
            if (bloodline) {
              _results = [];
              for (i in bloodline.feats) {
                _results.push(bonus.feats[bloodline.feats[i]] = true);
              }
              return _results;
            }
          },
          12: {
            script: function(bonus) {
              return bonus.count += 1;
            },
            18: {
              script: function(bonus) {
                return bonus.count += 1;
              }
            }
          }
        }
      },
      spells: {
        before_build: [
          function(spells_known) {
            var bloodline, i, level, power, spells_known_fn, _results;
            bloodline = sorcerer_bloodlines.first({
              name: chardata.bloodline
            });
            if (bloodline) {
              _results = [];
              for (i in bloodline.powers) {
                power = bloodline_powers.first({
                  name: bloodline.powers[i]
                });
                spells_known_fn = null;
                for (level in power.levels) {
                  if (level <= chardata.classes["Sorcerer"].level && power.levels[level].spells_known) {
                    spells_known_fn = power.levels[level].spells_known;
                  }
                }
                if (spells_known_fn) {
                  _results.push(spells_known_fn(spells_known));
                } else {
                  _results.push(void 0);
                }
              }
              return _results;
            }
          }
        ],
        after_spells: [
          function() {
            var bloodline, bloodline_level, idx, spell, _results;
            bloodline = sorcerer_bloodlines.first({
              name: chardata.bloodline
            });
            if (bloodline) {
              _results = [];
              for (bloodline_level in bloodline.spells) {
                if (chardata.classes["Sorcerer"].level >= bloodline_level) {
                  spell = spells.first({
                    name: bloodline.spells[bloodline_level]
                  });
                  $("#spell_" + spell._id).wrap("<i />");
                  $("#" + spell._id + "_Sorcerer").attr("disabled", true);
                  if (chardata.classes["Sorcerer"].spells[spell.classes["Sorcerer"]]) {
                    idx = chardata.classes["Sorcerer"].spells[spell.classes["Sorcerer"]].indexOf(spell.name);
                    if (idx > -1) {
                      _results.push(remove(chardata.classes["Sorcerer"].spells[spell.classes["Sorcerer"]], idx));
                    } else {
                      _results.push(void 0);
                    }
                  } else {
                    _results.push(void 0);
                  }
                } else {
                  _results.push(void 0);
                }
              }
              return _results;
            }
          }
        ]
      }
    },
    class_features: ["Cast Arcane"]
  }, {
    name: "Wizard",
    shortname: "Wiz",
    base_attack_bonus: ["0", "1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6/1", "6/1", "7/2", "7/2", "8/3", "8/3", "9/4", "9/4", "10/5"],
    fort_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    ref_save: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    will_save: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    spells_per_day: [[3, 1, "-", "-", "-", "-", "-", "-", "-", "-"], [4, 2, "-", "-", "-", "-", "-", "-", "-", "-"], [4, 2, 1, "-", "-", "-", "-", "-", "-", "-"], [4, 3, 2, "-", "-", "-", "-", "-", "-", "-"], [4, 3, 2, 1, "-", "-", "-", "-", "-", "-"], [4, 3, 3, 2, "-", "-", "-", "-", "-", "-"], [4, 4, 3, 2, 1, "-", "-", "-", "-", "-"], [4, 4, 3, 3, 2, "-", "-", "-", "-", "-"], [4, 4, 4, 3, 2, 1, "-", "-", "-", "-"], [4, 4, 4, 3, 3, 2, "-", "-", "-", "-"], [4, 4, 4, 4, 3, 2, 1, "-", "-", "-"], [4, 4, 4, 4, 3, 3, 2, "-", "-", "-"], [4, 4, 4, 4, 4, 3, 2, 1, "-", "-"], [4, 4, 4, 4, 4, 3, 3, 2, "-", "-"], [4, 4, 4, 4, 4, 4, 3, 2, 1, "-"], [4, 4, 4, 4, 4, 4, 3, 3, 2, "-"], [4, 4, 4, 4, 4, 4, 4, 3, 2, 1], [4, 4, 4, 4, 4, 4, 4, 3, 3, 2], [4, 4, 4, 4, 4, 4, 4, 4, 3, 3], [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]],
    spells_known: [[3, 1, "-", "-", "-", "-", "-", "-", "-", "-"], [4, 2, "-", "-", "-", "-", "-", "-", "-", "-"], [4, 2, 1, "-", "-", "-", "-", "-", "-", "-"], [4, 3, 2, "-", "-", "-", "-", "-", "-", "-"], [4, 3, 2, 1, "-", "-", "-", "-", "-", "-"], [4, 3, 3, 2, "-", "-", "-", "-", "-", "-"], [4, 4, 3, 2, 1, "-", "-", "-", "-", "-"], [4, 4, 3, 3, 2, "-", "-", "-", "-", "-"], [4, 4, 4, 3, 2, 1, "-", "-", "-", "-"], [4, 4, 4, 3, 3, 2, "-", "-", "-", "-"], [4, 4, 4, 4, 3, 2, 1, "-", "-", "-"], [4, 4, 4, 4, 3, 3, 2, "-", "-", "-"], [4, 4, 4, 4, 4, 3, 2, 1, "-", "-"], [4, 4, 4, 4, 4, 3, 3, 2, "-", "-"], [4, 4, 4, 4, 4, 4, 3, 2, 1, "-"], [4, 4, 4, 4, 4, 4, 3, 3, 2, "-"], [4, 4, 4, 4, 4, 4, 4, 3, 2, 1], [4, 4, 4, 4, 4, 4, 4, 3, 3, 2], [4, 4, 4, 4, 4, 4, 4, 4, 3, 3], [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]],
    skill_points_per_level: 2,
    bonus_feats_levels: [4, 9, 14, 19],
    languages: [16],
    hd: 4,
    type: "class",
    tags: ["pathfinder"],
    _id: "d1b5",
    spells: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    feats: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    specials: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
    class_features: ["Cast Arcane"]
  }
]);

is_class_skill = function(skill, subtype) {
  var classname, _i, _len, _ref;
  _ref = chardata.classes;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    classname = _ref[_i];
    if (skill.skill_classes) {
      if (skill.skill_classes(classname).indexOf() > -1) return true;
    } else if (skill.subtypes[subtype].indexOf(classname) > -1) {
      return true;
    }
  }
  return false;
};
