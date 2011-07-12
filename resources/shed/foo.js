function update_literacy(language_id) {
	var checked = $('#literacy_' + language_id + '_check').attr('checked');
	var language = languages.first( {
		_id : language_id
	});
	if (!checked && chardata.classes['Barbarian'].literacy[language.name]) {
		delete chardata.classes['Barbarian'].literacy[language.name];
	} else {
		chardata.classes['Barbarian'].literacy[language.name]=true;
	}
	var skill_pts = calc_skill_points() - (count_attrs(chardata.classes['Barbarian'].literacy) * 2);
	$('#skill_pts_remaining').html(skill_pts < 0 ? [ '<span class="alarm">', skill_pts, '</span>' ].join('') : skill_pts);
	save_character();
} 
if (chardata.classes['Barbarian'].literacy == null) {
	chardata.classes['Barbarian'].literacy = [];
}
if ($('#literacy_header').length == 0) {
	$('#language_table').prepend('<tr><td id="literacy_header" colspan=2></td><td>Lit</td>');
}
var langs = [];
for ( var classname in chardata.classes) {
	var clazz = classs.first( {
		name : classname
	});
	langs = langs.concat(clazz.languages != null ? clazz.languages : []);
}
langs = langs.concat(race.languages);
langs = langs.concat(chardata.languages);
for ( var i in langs) {
	var lang = languages.first( {
		name : langs[i]
	});  
	if ($('#literacy_' + lang._id).length == 0) {
		$('tr#language_' + lang._id).append('<td id="literacy_' + lang._id + '"><input id="literacy_' + lang._id + '_check" type="checkbox" /></td>');
		$('#literacy_' + lang._id + '_check').click(function() {
			return update_literacy(lang._id);
		});
		if (chardata.classes['Barbarian'].literacy[lang.name]) {
			$('#literacy_' + lang._id + '_check').attr('checked', 'checked');
		}
	}
}