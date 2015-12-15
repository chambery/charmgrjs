pathfinder_feats = [{
    name: "Agile Maneuvers",
    description: "You have excellent body awareness and coordination.",
    detail: "You have excellent body awareness and coordination.<p class=sub><b>Benefit</b>: You get a +2 bonus on all Jump checks and Tumble checks.</p>",
    benefit: "Use your Dex bonus when calculating your CMB",
	prereqs: {},
	tags: ["pathfinder"],
    type: "feat"
}, {
    name: "Alignment Channel",
    description: "You have excellent body awareness and coordination.",
    detail: "You have excellent body awareness and coordination.<p class=sub><b>Benefit</b>: You get a +2 bonus on all Jump checks and Tumble checks.</p>",
    benefit: "Channel energy can heal or harm outsiders",
	prereqs: {},
	tags: ["pathfinder"],
    type: "feat"
}, {
    name: "Arcane Armor Training",
    description: "You have excellent body awareness and coordination.",
    detail: "You have excellent body awareness and coordination.<p class=sub><b>Benefit</b>: You get a +2 bonus on all Jump checks and Tumble checks.</p>",
    benefit: "Reduce your arcane spell failure chance by 10%",
	prereqs: {
		feats: ["Armor Proficiency, light"],
		level: 3
	},
	tags: ["pathfinder"],
    type: "feat",
    spell_related: true
}, {
    name: "Arcane Armor Mastery",
    description: "You have excellent body awareness and coordination.",
    detail: "You have excellent body awareness and coordination.<p class=sub><b>Benefit</b>: You get a +2 bonus on all Jump checks and Tumble checks.</p>",
    benefit: "Reduce your arcane spell failure chance by 20%",
	prereqs: {
		feats: ["Armor Proficiency, medium", "Arcane Armor Training"],
		level: 7
	},
	tags: ["pathfinder"],
    type: "feat",
    spell_related: true
}, {
    name: "Catch Off-Guard",
    description: "You have excellent body awareness and coordination.",
    detail: "You have excellent body awareness and coordination.<p class=sub><b>Benefit</b>: You get a +2 bonus on all Jump checks and Tumble checks.</p>",
    benefit: "No penalties for improvised melee weapons",
	prereqs: {
		feats: ["Armor Proficiency, medium", "Arcane Armor Training"],
		level: 7
	},
	tags: ["pathfinder"],
    type: "feat",
    spell_related: true
}, {
    name: "Channel Smite",
    description: "You have excellent body awareness and coordination.",
    detail: "You have excellent body awareness and coordination.<p class=sub><b>Benefit</b>: You get a +2 bonus on all Jump checks and Tumble checks.</p>",
    benefit: "Channel energy through your attack",
	prereqs: {
		feats: ["Armor Proficiency, medium", "Arcane Armor Training"],
		level: 7
	},
	tags: ["pathfinder"],
    type: "feat",
    spell_related: true
}, {
    name: "Command Undead",
    description: "You have excellent body awareness and coordination.",
    detail: "You have excellent body awareness and coordination.<p class=sub><b>Benefit</b>: You get a +2 bonus on all Jump checks and Tumble checks.</p>",
    benefit: "Channel energy can be used to control undead",
	prereqs: {
		feats: ["Armor Proficiency, medium", "Arcane Armor Training"],
		level: 7
	},
	tags: ["pathfinder"],
    type: "feat",
    spell_related: true
}, {
    name: "Critical Focus",
    description: "You have excellent body awareness and coordination.",
    detail: "You have excellent body awareness and coordination.<p class=sub><b>Benefit</b>: You get a +2 bonus on all Jump checks and Tumble checks.</p>",
    benefit: "+4 bonus on attack rolls made to confrm critical hits",
	prereqs: {
		base_attack_bonus: 9
	},
	tags: ["pathfinder"],
    type: "feat",
    spell_related: true
}]
