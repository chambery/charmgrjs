rogue_special_abilities = ["Crippling Strike","Defensive Roll","Improved Evasion","Opportunist","Slippery Mind"];
chardata = [];
function load() {
	build_rogue_specials(14);
}

function build_rogue_specials(level) {
	
	$("#content").html("<table id='rogue_specials' class='box' style='width: 100%'><tr bgcolor='#8DC3E9'><td colspan='3'>Rogue Special Abilities</td></tr></table>");
	$("#rogue_specials").append("<tr><td colspan='3'><table id='rogue_specials_sub' style='width: 100%'></table></td></tr>");
	
	rogue_special_abilities = special_abilities.get({ name : rogue_special_abilities });
	create_selector_group({id: "rogue_specials"}, "Rogue Special Abilities", rogue_special_abilities, special_abilities, 3, update_rogue_specials, true);
	$("#rogue_specials").append("<tr id='skill_mastery' bgcolor='#BFDEF4'><td colspan='2'><span style='float: right;'>Selections Remaining</span><span style='vertical-align:top;'>Skill Mastery</span><input id='skill_mastery0' type='checkbox' /><input id='skill_mastery_1' type='checkbox' /><input id='skill_mastery_2' type='checkbox' /></td><td><span style='float: right;font-family: monospace'>+</span></td></tr>");
	$("input[id^='skill_mastery']").bind("click", function(e){
		return update_skill_mastery_selections();
	});
	$("#rogue_specials").append("<tr><td colspan='3'><table id='skill_mastery_sub' style='width: 100%'></table></td></tr>");
	create_selector_group({id: "skill_mastery"}, "Skill Mastery", skills(), skills, 3, update_skill_mastery, true);
	$("#skill_mastery_sub_").hide();
}

function update_rogue_specials() {

}

function update_skill_mastery() {
	
}

function update_skill_mastery_selections() {
	
}
