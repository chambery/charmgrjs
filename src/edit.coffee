edit = ->

edit.calc_skill_points = ->
  int_score = $("#ability_Int").val()
  int_mod = calc_ability_modifier(int_score)
  is_human = races({ name: "Human" }).first().name == $("#race").val()
  total_skill_points = 0
  class_skills_per_level = 0
  for classname of chardata.classes
    class_skills_per_level = classes().first(name: classname).skill_points_per_level + int_mod
    level_1_points = (class_skills_per_level * 4) + (if is_human then 4 else 0)
    total_skill_points += level_1_points + ((class_skills_per_level + (if is_human then 1 else 0)) * chardata.classes[classname].level)
  $("input[id*=skill]").each (i, element) ->
    total_skill_points -= (if isNaN(parseInt($(element).val())) then 0 else parseInt($(element).val()))

  char_lang_count = (if not chardata.languages? then 0 else chardata.languages.length)
  total_skill_points -= Math.abs(Math.min(int_mod - char_lang_count, 0))
  total_skill_points

edit.build_edit_page = ->
  set_links_part 1
  $.ajax(
    url: "web/edit.html",
    dataType: "html",
    async: false,
    success: (data) ->
      $("#content").html data
  )
  # $("#content").html "<div class='dp100' style='padding-bottom: 5px;'><span style='float: right;'>XP&nbsp;&nbsp;<input type='text' size='5' value='' name='xp' id='xp'></span><input id='charname' value='' size='12' type='text' />&nbsp;<span id='race_select'></span></div><div id='moralitypart' class='dp100' style='padding-bottom: 5px;'><select id='alignment' style='float: right;'></select>HP&nbsp;&nbsp;<input id='hp' value='' type='text' style='width: 25px' />&nbsp;&nbsp;<select id='deity' style='width: 105px;vertical-align: top;'></select></div><div id='middlepart'><div id='abilitiespart' class='dp25' style='padding-bottom: 5px; float: left'><table border='0'></table></div><div id='classespart' class='dp75'></div></div><br style='clear: both' /><div class='dp100'><div id='skillspart' class='dp45' style='float: right'><table id='skills_table' style='width: 100%' border='0'><tr><td colspan='3'><span style='float: right;'>Pts left: <span id='skill_pts_remaining'>0</span></span>Max ranks: <span id='max_ranks'></span></td></tr><tr onclick=\"toggle_visible('languages')\" bgcolor='#8DC3E9'><td colspan=3 style='vertical-align: middle;'><a class='fake_link'><span id='languages_expand_flag' style='float: right'><img src='/charmgr/images/collapsed.png'/></span>Languages</a></td></tr><tr id='languages'><td colspan=3><table id='language_table' width='100%'style='border-collapse: collapse;'></table></td></tr></table></div><div id='waspart' class='dp50'><div id='weaponspart' class='dp100'><div id='char_weapons'></div><div id='new_weapon' class='new_weapon'></div><hr width='80%' /></div><div id='armorpart' class='dp100'><div id='char_armors'></div><div id='new_armor' class='new_weapon'></div><hr width='80%' /></div><div id='shieldpart' class='dp100'><div id='char_shields'></div><div id='new_shield' class='new_weapon'></div></div></div></div><div class='clear'></div>"
  # $("#content").html "<div class='dp100' style='padding-bottom: 5px;'><span style='float: right;'>XP&nbsp;&nbsp;<input type='text' size='5' value='' name='xp' id='xp'></span><input id='charname' value='' size='12' type='text' />&nbsp;<span id='race_select'></span></div><div id='moralitypart' class='dp100' style='padding-bottom: 5px;'><select id='alignment' style='float: right;'></select>HP&nbsp;&nbsp;<input id='hp' value='' type='text' style='width: 25px' />&nbsp;&nbsp;<select id='deity' style='width: 105px;vertical-align: top;'></select></div><div id='middlepart'><div id='abilitiespart' class='dp25' style='padding-bottom: 5px; float: left'><table id='abilities_table' border='0'></table></div><div id='classespart' class='dp75'></div></div><br style='clear: both' /><div class='dp100'><div id='skillspart' class='dp45' style='float: right'><table id='skills_table' style='width: 100%' border='0'><tr><td colspan='3'><span style='float: right;'>Pts left: <span id='skill_pts_remaining'>0</span></span>Max ranks: <span id='max_ranks'></span></td></tr><tr onclick=\"toggle_visible('languages')\" bgcolor='#8DC3E9'><td colspan=3 style='vertical-align: middle;'><a class='fake_link'><span id='languages_expand_flag' style='float: right'><img src='/charmgr/images/collapsed.png'/></span>Languages</a></td></tr><tr id='languages'><td colspan=3><table id='language_table' width='100%'style='border-collapse: collapse;'></table></td></tr></table></div><div id='waspart' class='dp50'><div id='weaponspart' class='dp100'><div id='char_weapons'></div><div id='new_weapon' class='new_weapon'></div><hr width='80%' /></div><div id='armorpart' class='dp100'><div id='char_armors'></div><div id='new_armor' class='new_weapon'></div><hr width='80%' /></div><div id='shieldpart' class='dp100'><div id='char_shields'></div><div id='new_shield' class='new_weapon'></div></div></div></div><div class='clear'></div>"

  for ability of abilities
    $("#abilities_table").append "<tr><td align='center'><b><a class='fake_link' onclick=\"show_item_detail(abilities,'#{ability}')\">#{ability}</a></b></td><td align='center'><input type='text' value='' name='#{ability}score'class='two_digit' id='ability_#{ability}'></td>"

  chardata.abilities = {}  unless chardata.abilities?
  race_html = create_select("race", races().get(), "", false, "style='width: 75px;'")
  $("#race_select").html race_html
  align_html = []
  alignments.forEach (alignment, i) ->
    goodness.forEach (good, j) ->
      align_html.push [ "<option id='alignment_option_", alignment, "_", good, "' data_id='", i, ",", j, "' value='", alignment, ",", good, "'>", alignment, " ", good, "</option>" ].join("")

  $("#alignment").html align_html.join("")

  align_html = []
  align_html.push "<option id='deity_option_-1' data_id='' value=''></option>"
  $.each get_deities_for_alignment(chardata.alignment, chardata.goodness), (i, deity) ->
    console.log "[" + i + "]  " + deity.name + " : " + deity.alignment + " " + deity.goodness
    align_html.push [ "<option id='deity_option_" + deity.name + "' data_id='" + deity._id + "' value='" + deity.name + "'>" + deity.name + "</option>" ]

  $("#deity").html align_html.join("")

  $("#language_table").html edit.create_languages()
  $("#languages").hide()
  skill_html = []
  window.skills().each (skill, i) ->
    if skill.subtypes
      skill_html.push [ "<tr onclick=\"toggle_visible('" + skill.name + "')\" bgcolor='#E2F0F9'><td colspan=3 style='vertical-align: middle;'><a class='fake_link' id='skill_", skill._id, "'><span id='", skill.name, "_expand_flag' style='float: right'><img src='/charmgr/images/collapsed.png'/></span>", skill.name, "</a></td></tr><tr id='", skill.name, "'><td colspan=3><table id='", skill.name, "_table' width='100%'style='border-collapse: collapse;'>" ].join("")
      for subtype of skill.subtypes
        skill_html.push [ "<tr><td style='vertical-align: top;width:100%'><a id='skill_", skill._id, "' class='fake_link' onclick='show_item_detail(skills, \"", skill._id, "\")' subtype='" + subtype + "'>", skill.name, " (", subtype, ")</a></td><td style='vertical-align: top;'><input id='skill_", skill._id, "_input' subtype='", subtype, "' class='two_digit' value='' onblur='edit.recalc_edit_page()'></td><td style='font-size: xx-small; vertical-align: top;'>", skill.ability, "<br><span id='", skill._id, "_mods' style='font-size: xx-small;'></span></td></tr>" ].join("")  if not chardata.skills or not chardata.skills(skill_name: skill.name).first() or not chardata.skills(skill_name: skill.name).first().subtypes[subtype]
      skill_html.push "</table></td></tr>"
      if chardata.skills
        char_skill = chardata.skills(skill_name: skill.name).first()
        if char_skill
          for subtype of char_skill.subtypes
            skill_html.push [ "<tr><td style='vertical-align: top;'><a id='skill_", skill._id, "' class='fake_link' onclick='show_item_detail(skills, \"", skill._id, "\")' subtype='" + subtype + "'>", skill.name, " (", subtype, ")</a></td><td style='vertical-align: top;'><input id='skill_", skill._id, "_input' subtype='", subtype, "' class='two_digit' value='' onblur='edit.recalc_edit_page()'></td><td style='font-size: xx-small; vertical-align: top;'>", skill.ability, "<br><span id='", skill._id, "_mods' style='font-size: xx-small;'></span></td></tr>" ].join("")
    else
      skill_html.push [ "<tr><td style='vertical-align: top;'><a id='skill_", skill._id, "' class='fake_link' onclick='show_item_detail(skills, \"", skill._id, "\")'>", skill.name, "</a></td><td style='vertical-align: top;'><input id='skill_", skill._id, "_input' class='two_digit' value='' onblur='edit.recalc_edit_page()'></td><td style='font-size: xx-small; vertical-align: top;'>", skill.ability, "<br><span id='", skill._id, "_mods' style='font-size: xx-small;'></span></td></tr>" ].join("")

  $("#skills_table").append skill_html.join("")
  skills(subtypes: isNull: false).get().forEach (skill, i) ->
    $("#" + skill.name).hide()

  build_data_part "weapons", "weapon"
  build_data_part "armors", "armor"
  build_data_part "shields", "shield"
  if is_empty(chardata.classes)
    chardata.classes = {}
    show_class_dialog calc_level(chardata.xp) + 1, 0
  edit.bind_controls()

edit.bind_controls = ->
  $("#xp").blur ->
    chardata.xp = $("#xp").val
    save_character chardata

  $("input[id='hp']").blur ->
    chardata.hp = $("input[id='hp']").val
    save_character chardata

  $("#race").change ->
    console.log "#{chardata.race_name} -> #{$("#race").val()}"
    chardata.race_name = $("#race").val()
    race = races({name: chardata.race_name}).first()
    $("#char_race").text race.shortname
    save_character chardata

  $("#alignment").change ->
    chardata.alignment = $("#alignment").val.split(",")[0]
    chardata.goodness = $("#alignment").val.split(",")[1]
    console.group "deity - ALIGNMENT_CHANGED"
    align_html = []
    align_html.push "<option id='deity_option_-1' data_id='' value=''></option>"
    $.each get_deities_for_alignment(chardata.alignment, chardata.goodness), (i, deity) ->
      console.log deity.name + " : " + deity.alignment + " " + deity.goodness
      align_html.push [ "<option id='deity_option_" + deity.name + "' data_id='" + deity._id + "' value='" + deity.name + "'>" + deity.name + "</option>" ]

    $("#deity").html align_html.join ""
    if $("#deity").containsOption(chardata.deity)
      $("#deity").val chardata.deity
    else
      chardata.deity = ""
      chardata.domains = null

    console.groupEnd()

    save_character chardata

  $("#deity").change ->
    chardata.deity = $("#deity").val
    save_character chardata

  $("#domain").change ->
    chardata.domain = $("#domain").val
    save_character chardata

  $("#charname").blur ->
    chardata.name = $("#charname").val
    save_character chardata

  for ability of abilities
    console.log "binding click -> #{ability}"
    $("input#ability_" + ability).blur ->
      chardata.abilities[ability] = $("#ability_" + ability).val
      race = races( name: chardata.race_name ).first
      $("#race_" + ability + "_mod").val(pos(race.abilities[ability]))  if race.abilities[ability]
    $("#ability_" + ability).click ->
      show_item_detail abilities, ability


edit.create_languages = ->
  language_html = []
  langs = languages().get()
  i = 0
  len = langs.length

  while i < len
    language_html.push [ "<tr id='language_", langs[i]._id, "'><td><input id='language_", langs[i]._id, "_check' onclick='update_language(\"", langs[i]._id, "\"); edit.recalc_edit_page();' type='checkbox'/></td><td><label for='language_", langs[i]._id, "_check'>", langs[i].name, "</label></td>" ].join("")
    i++
  language_html.join ""

edit.populate_edit_page = ->
  $("#charname").val chardata.name  if chardata.name
  race = races({name: chardata.race_name}).first()
  $("#race option[id='race_option_" + race._id + "']").attr "selected", true
  $("input[id='hp']").val chardata.hp or ""
  $("#xp").val chardata.xp or ""
  $("#weapon_style").selectOptions chardata.weapon_style or "two_weapon_combat"
  $("#alignment option[id='alignment_option_" + chardata.alignment + "_" + chardata.goodness + "']").attr "selected", true
  $("#deity option[id='deity_option_" + chardata.deity + "']").attr "selected", true
  $("#domain option[id='domain_option_" + chardata.domain_name + "']").attr "selected", true
  if chardata.abilities
    $("#ability_Str").val chardata.abilities["Str"]
    $("#ability_Dex").val chardata.abilities["Dex"]
    $("#ability_Int").val chardata.abilities["Int"]
    $("#ability_Con").val chardata.abilities["Con"]
    $("#ability_Cha").val chardata.abilities["Cha"]
    $("#ability_Wis").val chardata.abilities["Wis"]
  chardata.languages = []  unless chardata.languages?
  if chardata.skills?
    skills().each (skill, i) ->
      char_skill = chardata.skills(skill_name: skill.name).first()
      unless char_skill == false
        if char_skill.subtypes
          for subtype of char_skill.subtypes
            $("input[id=skill_" + skill._id + "_input][subtype='" + subtype + "']").val char_skill.subtypes[subtype]
        else
          $("#skill_" + skill._id + "_input").val char_skill.ranks

edit.recalc_edit_page = ->
  calcd_level = calc_level chardata.xp
  if calcd_level < chardata.level
    level_diff =  calcd_level - chardata.level
    ability_increase = (chardata.level + 1) % 4 == 0
    show_class_dialog level_diff, ability_increase

  $("#max_ranks").text calcd_level + 1 + 3
  chardata.abilities = {}  unless chardata.abilities?
  race = races({name: chardata.race_name}).first()
  for ability of abilities
    chardata.abilities[ability] = $("#ability_" + ability).val()
    $("#race_" + ability + "_mod").val pos(race.abilities[ability])  if race.abilities[ability]
  langs = languages().get()
  char_langs = chardata.languages or []
  class_langs = []
  for classname of chardata.classes
    clazz = classes().first(name: classname)
    class_langs.concat (if clazz.languages? then clazz.languages else [])
  i = 0
  len = langs.length

  while i < len
    is_race_language = race.languages.indexOf(langs[i].name) > -1
    is_class_language = class_langs.indexOf(langs[i].name) > -1
    checked = char_langs.indexOf(langs[i].name) > -1 or is_race_language or is_class_language
    $("#language_" + langs[i]._id + "_check").attr "checked", checked
    $("[id^='language_" + langs[i]._id + "']").toggleClass "disabled class_feat", is_class_language or is_race_language
    if is_class_language or is_race_language
      $("#language_" + langs[i]._id + "_check").attr "disabled", "disabled"
      lang_idx = chardata.languages.indexOf(langs[i].name)
      remove chardata.languages, lang_idx  if chardata.languages? and lang_idx > -1
    else
      $("#language_" + langs[i]._id + "_check").removeAttr "disabled"
    i++
  skills().each (skill, i) ->
    race_mod = (if race.skills[skill.name]? then race.skills[skill.name] else 0)
    mods = (if race_mod > 0 then "r:" + pos(race_mod) else "")
    feat_mod = 0
    char_feats = chardata.get_all_char_feats()
    char_feats().each (char_feat, j) ->
      console.log char_feat.name
      # why do this?
      feat = feats( name: char_feat.name ).first()
      console.log feat.name
      feat_mod += feat.skills[skill.name]  if feat.skills and feat.skills[skill.name]
      acp = feat.mobility(acp)  if skill.mobility and feat.mobility

    feat_mod += chardata.calc_equip_mod(skill.name)
    mods += (if feat_mod > 0 then " o:" + pos(feat_mod) else "")
    skill_ability_score = $("input#ability_" + skill.ability).val()
    ability_mod = calc_ability_modifier(parseInt(skill_ability_score))
    mods += (if ability_mod != 0 then " a:" + pos(ability_mod) else "")
    $("#" + skill._id + "_mods").text mods
    if skill.subtypes
      for subtype of skill.subtypes
        edit.update_skills skill, subtype
    else
      edit.update_skills skill

  skill_pts = edit.calc_skill_points()
  $("#skill_pts_remaining").html (if skill_pts < 0 then [ "<span class='alarm'>", skill_pts, "</span>" ].join("") else skill_pts)
  edit.update_race_mods()
  build_data_part "weapons", "weapon"
  build_data_part "armors", "armor"
  build_data_part "shields", "shield"
  $("#classespart").html ""
  for classname of chardata.classes
    feature_count = 0
    $("#classespart").append "<fieldset id='" + classname + "'><legend>" + classname + "</legend></fieldset>"
    clazz = classes( name: classname ).first()
    if clazz.custom and clazz.custom.edit
      for level of clazz.custom.edit
        if chardata.classes[classname].level >= level
          for feature of clazz.custom.edit[level]
            feature_count++
            $("fieldset[id='" + classname + "']").append clazz.custom.edit[level][feature].ui
            clazz.custom.edit[level][feature].script()
        else
          break
    $("fieldset[id='" + classname + "']").remove()  if feature_count == 0
  save_character(chardata)
  set_links_part 1

edit.update_skills = (skill, subtype) ->
  class_skill = is_class_skill(skill, subtype)
  skill_text = $("input[id='skill_" + skill._id + "_input']" + (if subtype then "[subtype='" + subtype + "']" else ""))
  if skill_text.val() != "" and parseInt(skill_text.val()) > 0
    chardata.skills = TAFFY([ skill_name: skill.name ])  unless chardata.skills?
    char_skill = chardata.skills(skill_name: skill.name).first()
    chardata.skills.insert skill_name: skill.name  unless char_skill
    updata = {}
    if subtype
      updata.subtypes = $.extend({}, chardata.skills(skill_name: skill.name).first().subtypes)
      updata.subtypes[subtype] = skill_text.val()
    else
      updata.ranks = skill_text.val()
    chardata.skills.update updata, skill_name: skill.name
  skill_link = $("a[id='skill_" + skill._id + "']" + (if subtype then "[subtype='" + subtype + "']" else ""))
  skill_link.attr "style", "font-weight: bold;"  if skill_link and class_skill

edit.update_race_mods = ->
  race = races( name: chardata.race_name ).first()
  for ability of abilities
    mod = (if not race.abilities[ability]? then " " else race.abilities[ability])
    $("#race_" + ability + "_mod").text pos(mod)

edit.update_language = (language_id) ->
  checked = $("#language_" + language_id + "_check").attr("checked")
  language = languages().first(_id: language_id)
  char_lang_idx = chardata.languages().indexOf(language.name)
  if not checked and char_lang_idx > -1
    remove chardata.languages, char_lang_idx
  else
    chardata.languages().push language.name
