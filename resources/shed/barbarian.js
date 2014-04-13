function update_literacy(language_id) { if(chardata.classes['Barbarian'].literacy == null) { chardata.classes['Barbarian'].literacy = []; } var checked = $('#literacy_' + language_id + '_check').attr('checked'); var language = languages.first({ _id: language_id }); var char_lang_idx = chardata.classes['Barbarian'].literacy.indexOf(language.name); if(!checked && char_lang_idx > -1) { remove(chardata.classes['Barbarian'].literacy, char_lang_idx); } else { chardata.classes['Barbarian'].literacy.push(language.name); } var skill_pts = calc_skill_points() - (chardata.classes['Barbarian'].literacy.length * 2); $('#skill_pts_remaining').html(skill_pts < 0 ? ['<span class=\"alarm\">', skill_pts, '</span>'].join('') : skill_pts); save_character(); }
if($('#literacy_header').length == 0) {
	$('#language_table').prepend('<tr><td id=\"literacy_header\" colspan=2></td><td>Lit</td>');
}
var langs = [];
for (var classname in chardata.classes) {
	var clazz = classes({ name : classname }).first();
	langs = langs.concat(clazz.languages != null ? clazz.languages : []);
}
langs = langs.concat(race.languages);
langs = langs.concat(chardata.languages);
for (var i in langs) {
	if($('#literacy_' + lang._id).length == 0) {
		var lang = languages({ name: langs[i] }).first()
		$('tr#language_' + lang._id).append('<input id=\"literacy_' + lang._id + '_check\" type=\"checkbox\" onclick=\"update_literacy(' + lang._id + ')\"/>);
	}
}
