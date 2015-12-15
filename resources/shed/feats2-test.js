feats2 = [{
	name: "Armor Specialization",
	description: "Through long wear and hours of combat, you have trained your body to believe in its armor. Where others flinch, you confront. When the sword falls, your instincts, born of bruises and rent flesh, present your cuirass, cuisse, helm, or gorget to meet the blade at the perfect angle, causing it to skitter off harmlessly.",
	detail: "Choose one type of medium or heavy armor with which you are proficient. When wearing masterwork armor (including magic armor) of that type, you gain damage reduction 2/-. Any time you lose your Dexterity bonus to Armor Class, you lose the benefit of this feat, because you cannot properly deflect the blows of the enemy.",
	benefit: "DR 2/- with chosen armor",
	prereqs: {
		base_attack_bonus: 12
	},
	multi: {
		type: "armors",
		feats: ["Armor Proficiency (light)", "Armor Proficiency (medium)", "Armor Proficiency (heavy)"]
	},
	type: "feat",
	tags: ["phb2"],
	fighter_bonus_feat: true
},{
	name: "Bounding Assault",
	description: "You can move and attack with superior speed and power.",
	detail: "When using the Spring Attack feat, you designate two foes rather than one. Your movement does not provoke attacks of opportunity from either of these foes. While using an attack action with the Spring Attack feat, you can make a second attack with a -5 penalty. You can use both attacks against one of the opponents targeted with this feat, or split your attacks between them.",
	benefit: "Attack twice while using Spring Attack",
	prereqs: {
		abilities: {
			"Dex": 13
		},
		feats: ["Spring Attack"],
		base_attack_bonus: 12
	},
	type: "feat",
	tags: ["phb2"]
},{
	name: "Shield Specialization",
	description: "You are skilled in using a shield, allowing you to gain greater defensive benefits from it.",
	detail: "Choose one type of shield from the following list: buckler, heavy, or light. When using a shield of the appropriate type, you increase its shield bonus to AC by 1.",
	benefit: "Increase shield bonus by +1",
	// TODO - armors needs to be a TAFFYDB
	ac: "if(chardata.shields) { console.log('Shield Specialization'); var shield_spec = chardata.feats({ feat_name: 'Shield Specialization' }).first(); for(var i in chardata.shields) { console.log(i + ':' + chardata.shields[i].shield_name); var char_shield = shields.first({ name: chardata.shields[i].shield_name }); console.log(shield_spec.multi[0] + ' : ' + char_shield.category + '   ' + (shield_spec.multi.indexOf(char_shield.category) > -1 ? 'match' : 'no match')); if(shield_spec.multi.indexOf(char_shield.category) > -1) { ac += 1; } } } return ac;",
	special: "You can take this feat more than once. Each time you select it, choose a different type of shield.<p class=sub>A fighter can select Shield Specialization as one of his fighter bonus feats.",
	prereqs: {
		feats: ["Shield Proficiency"]
	},
	// TODO - PHEW!
    multi: {
    	type: "shield_types",
    	db: "shield_types",
    	filter: { name: {"!is" : "tower"}}
    },
	type: "feat",
	tags: ["phb2"],
	fighter_bonus_feat: true
}];
