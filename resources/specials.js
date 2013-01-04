var specials = new TAFFY([
{
	name: "Fast movement",
	detail: "A %class%'s land speed is faster than the norm for his race by +10 feet. This benefit applies only when he is wearing no armor, light armor, or medium armor and not carrying a heavy load. Apply this bonus before modifying the %class%'s speed because of any load carried or armor worn. For example, a human %class% has a speed of 40 feet, rather than 30 feet, when wearing light or no armor. When wearing medium armor or carrying a medium load, his speed drops to 30 feet. A halfling %class% has a speed of 30 feet, rather than 20 feet, in light or no armor. When wearing medium armor or carrying a medium load, his speed drops to 20 feet.", 
	type: "special", 
	tags: ["pathfinder"], _id: "634c",
	classes: {
		Barbarian: [{level: 0}]
	}
}, {
	name: "Illiteracy",
	detail: "%class%s are the only characters who do not automatically know how to read and write. A %class% may spend 2 skill points to gain the ability to read and write all languages he is able to speak. <p class=sub>A %class% who gains a level in any other class automatically gains literacy. Any other character who gains a %class% level does not lose the literacy he or she already had.", 
	type: "special", 
	tags: ["pathfinder"], _id: "a564",
	classes: {
		Barbarian: [{level: 0}]
	}
}, {
	name: "Rage",
	detail: "A %class% can fly into a screaming blood frenzy a certain number of times per day. In a rage, a %class% gains phenomenal strength and durability but becomes reckless and less able to defend himself. He temporarily gains a +4 bonus to Strength, a +4 bonus to Constitution, and a +2 morale bonus on Will saves, but he takes a -2 penalty to Armor Class. <p class=sub>The increase in Constitution increases the %class%'s hit points by 2 points per level, but these hit points go away at the end of the rage when his Constitution score drops back to normal. (These extra hit points are not lost first the way temporary hit points are; see Temporary Hit Points, page 146.) While raging, a %class% cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except for Balance, Escape Artist, Intimidate, and Ride), the Concentration skill, or any abilities that require patience or concentration, nor can he cast spells or activate magic items that require a command word, a spell trigger (such as a wand), or spell completion (such as a scroll) to function. He can use any feat he has except Combat Expertise, item creation feats, and metamagic feats. A fit of rage lasts for a number of rounds equal to 3 +the character's (newly improved) Constitution modifier. A %class% may prematurely end his rage. At the end of the rage, the %class% loses the rage modifiers and restrictions and becomes fatigued (-2 penalty to Strength, -2 penalty to Dexterity, can't charge or run) for the duration of the current encounter(unless he is a 17th-level %class%, at which point this limitation no longer applies; see below). <p class=sub>A %class% can fly into a rage only once per encounter. At 1st level he can use his rage ability once per day. At 4th level and every four levels there after, he can use it one additional time per day (to a maximum of six times per day at 20th level). Entering a rage takes no time itself, but a %class% can do it only during his action (see Initiative, page 136), not in response to someone else's action. <p class=sub>A %class% can't, for example, fly into a rage whenstruck down by an arrow in order to get the extra hit points from the increased Constitution, although the extra hit points would be of benefit if he had gone into a rage earlier in the round, before the arrow struck.", 
	type: "special", 
	tags: ["pathfinder"], _id: "c05b",
	classes: {
		Barbarian: [{level: 0, mod: "1/day"}, {level: 3, mod: "2/day"}, {level: 7, mod: "3/day"}, {level: 11, mod: "4/day"}, {level: 15, mod: "5/day"}, {level: 19, mod: "6/day"}]
	},
	//+4 bonus to Strength, a +4 bonus to Constitution, and a +2 morale bonus on Will saves, but he takes a â€“2 penalty to Armor Class.  The increase in Constitution increases the %class%â€™s hit points by 2 points per level
	op: "if ($(this).attr('checked')) { var specials = get_special_abilities(chardata.class_id, chardata.xp); var ability_mod = 4; var will_mod = 2; if(specials[10]) {  ability_mod = 8;  will_mod = 4; } else if (specials[7]) {  ability_mod = 6;  will_mod = 3; } var str_score = parseInt($('#ability_Str_score').val()); $('#ability_Str_score').val(str_score + ability_mod); var con_score = parseInt($('#ability_Con_score').val()); $('#ability_Con_score').val(con_score + ability_mod);  recalc_main_page();  var ac = parseInt($('#ac').text()); $('#ac').text(ac - 2); var will = parseInt($('#will').text()); $('#will').text(will + will_mod); } else { var str_score = parseInt($('#ability_score_full0').text()); $('#ability_Str_score').val(str_score); var con_score = parseInt($('#ability_score_full3').text()); $('#ability_Con_score').val(con_score); recalc_main_page(); }"
}, {
	name: "Uncanny Dodge",
	detail: "At 2nd level, a %class% gains the ability to react to danger before his senses would normally allow him to do so. He retains his Dexterity bonus to AC (if any) even if he is caught flat-footed or struck by an invisible attacker. However, he still loses his Dexterity bonus to AC if immobilized. <p class=sub>If a %class% already has uncanny dodge from a different class (a %class% with at least four levels of %class%, for example), he automatically gains improved uncanny dodge (see below) instead.", 
	type: "special", 
	tags: ["pathfinder"], _id: "6f7a",
	classes: {
		Barbarian: [{level: 1}]
	}
}, {
	name: "Trap Sense",
	detail: "Starting at 3rd level, a %class% has an intuitive sense that alerts him to danger from traps, giving him a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise by +1 every three %class% levels thereafter (6th, 9th, 12th, 15th, and 18th level). Trap sense bonuses gained from multiple classes stack.", 
	type: "special", 
	tags: ["pathfinder"], _id: "12e3",
	classes: {
		Barbarian: [{level: 2, mod: '1' }, {level: 5, mod: '2' }, {level: 8, mod: '3' }, {level: 11, mod: '4' }, {level: 14, mod: '5' }, {level: 17, mod: '6' }],
	    Rogue: [{level: 2, mod: '1' }, {level: 5, mod: '2' }, {level: 8, mod: '3' }, {level: 11, mod: '4' }, {level: 14, mod: '5' }, {level: 17, mod: '6' }]
	}
}, {
	name: "Improved Uncanny Dodge",
	detail: "At 5th level and higher, a %class% can no longer be flanked; he can react to opponents on opposite sides of him as easily as he can react to a single attacker. This defense denies a %class% the ability to sneak attack the %class% by flanking him, unless the attacker has at least four more %class% levels than the target has %class% levels. <p class=sub>If a character already has uncanny dodge (see above) from a second class, the character automatically gains improved uncanny dodge instead, and the levels from the classes that grant uncanny dodge stack to determine the minimum level a %class% must be to flank the character.", 
	type: "special", 
	tags: ["pathfinder"], _id: "664",
	supersedes: ["Uncanny Dodge"],
	classes: {
		Barbarian: [{level: 4}],
		Rogue: [{level: 3}]
	}
}, {
	name: "Damage Reduction",
	detail: "At 7th level, a %class% gains the ability to shrug off some amount of injury from each blow or attack. Subtract 1 from the damage the %class% takes each time he is dealt damage from a weapon or a natural attack. At 10th level, and every three %class% levels thereafter (13th, 16th, and 19th level), this damage reduction rises by 1 point. Damage reduction can reduce damage to 0 but not below 0.", 
	type: "special", 
	tags: ["pathfinder"], _id: "2359", 
	classes: {
		Barbarian: [{level: 6, mod: "1/-"}, {level: 9, mod: "2/-"}, {level: 12, mod: "3/-" }, {level: 15, mod: "4/-" }, {level: 18, mod: "5/-" }]
	}
}, {
	name: "Greater Rage",
	detail: "At 11th level, a %class%'s bonuses to Strength and Constitution during his rage each increase to +6, and his morale bonus on Will saves increases to +3. The penalty to AC remains at -2.", 
	type: "special", 
	tags: ["pathfinder"], _id: "5e9c",
	classes: {
		Barbarian: [{level: 10}]
	}
}, {
	id: 8, 
	name: "Indomitable Will",
	detail: "While in a rage, a %class% of 14th level or higher gains a +4 bonus on Will saves to resist enchantment spells. This bonus stacks with all other modifiers, including the morale bonus on Will saves he also receives during his rage.", 
	type: "special", 
	tags: ["pathfinder"], _id: "f10c",
	classes: {
		Barbarian: [{level: 13}]
	}
}, {
	name: "Tireless Rage",
	detail: "At 17th level and higher, a %class% no longer becomes fatigued at the end of his rage.", 
	type: "special", 
	tags: ["pathfinder"], _id: "212a",
	supersedes: ["Greater Rage"],
	classes: {
		Barbarian: [{level: 16}]
	}
}, {
	name: "Mighty Rage",
	detail: "At 20th level, a %class%'s bonuses to Strength and Constitution during his rage each increase to +8, and his morale bonus on Will saves increases to +4. The penalty to AC remains at -2.", 
	type: "special", 
	tags: ["pathfinder"], _id: "13c8",
	supersedes: ["Greater Rage", "Tireless Rage"],
	classes: {
		Barbarian: [{level: 19}]
	}
}, {
	name: "Bardic Music",
	detail: "", 
	type: "special", 
	tags: ["pathfinder"], _id: "30e5",
	classes: {
		Bard: [{level: 0}]
	}	
}, {
	name: "Bardic Knowledge",
	detail: "A bard picks up a lot of stray knowledge while wandering the land and learning stories from other bards. He may make a special bardic knowledge check with a bonus equal to his bard level + his Intelligence modifier to see whether he knows some relevant information about local notable people, legendary items, or noteworthy places. (If the bard has 5 or more ranks in Knowledge (history), he gains a +2 bonus on this check.) <table class=box><tr class=header><td>DC</td><td>Type of Knowledge</td><td>Examples</td></tr> <tr><td>10</td><td>Common, known by at least a substantial minority of the local population.</td><td>A local mayor's reputation for drinking; common legends about a powerful place of mystery.</td></tr> <tr><td>20</td><td>Uncommon but available, known by only a few people in the area.</td><td>A local priest's shady past; legends about a powerful magic item.</td></tr> <tr><td>25</td><td>Obscure, known by few, hard to come by</td><td>A knight's family history; legends about a minor place of mystery or magic item</td></tr><tr><td>30</td><td>Extremely obscure, known by very few, possibly forgotten by most who once knew it, possibly known only by those who don't understand the significance of the knowledge.</td><td>A mighty %class%'s childhood nickname; the history of a petty magic item.</td></tr></table><p class=sub>A successful bardic knowledge check will not reveal the powers of a magic item but may give a hint as to its general function. A bard may not take 10 or take 20 on this check; this sort of knowledge is essentially random. The DM can determine the Difficulty Class of the check by referring to the table above.", 
	type: "special", 
	tags: ["pathfinder"], _id: "dbd4",
	classes: {
		Bard: [{level: 0}]
	}
}, {
	name: "Countersong",
	detail: "A bard with 3 or more ranks in a Perform skill can use his music or poetics to counter magical effects that depend on sound (but not spells that simply have verbal components). Each round of the countersong, he makes a Perform check. Any creature within 30 feet of the bard (including the bard himself ) that is affected by a sonic or language-dependent magical attack (such as a <i>sound burst</i> or <i>command</i> spell) may use the bard's Perform check result in place of its saving throw if, after the saving throw is rolled, the Perform check result proves to be higher. If a creature within range of the countersong is already under the effect of a noninstantaneous sonic or language-dependent magical attack, it gains another saving throw against the effect each round it hears the countersong, but it must use the bard's Perform check result for the save. Countersong has no effect against effects that don't allow saves. The bard may keep up the countersong for 10 rounds.", 
	type: "special", 
	tags: ["pathfinder"], _id: "369f",
	classes: {
		Bard: [{level: 0}]
	}
}, {
	name: "Fascinate",
	detail: "A bard with 3 or more ranks in a Perform skill can use his music or poetics to cause one or more creatures to become fascinated with him. Each creature to be fascinated must be within 90 feet, able to see and hear the bard, and able to pay attention to him. The bard must also be able to see the creature. The distraction of a nearby combat or other dangers prevents the ability from working. For every three levels a bard attains beyond 1st, he can target one additional creature with a single use of this ability (two at 4th level, three at 7th level, and so on). <p class=sub>To use the ability, a bard makes a Perform check. His check result is the DC for each affected creature's Will save against the effect. If a creature's saving throw succeeds, the bard cannot attempt to fascinate that creature again for 24 hours. If its saving throw fails, the creature sits quietly and listens to the song, taking no other actions, for as long as the bard continues to play and concentrate (up to a maximum of 1 round per bard level). While fascinated, a target takes a -4 penalty on skill checks made as reactions, such as Listen and Spot checks. Any potential threat requires the bard to make another Perform check and allows the creature a new saving throw against a DC equal to the new Perform check result. Any obvious threat, such as someone drawing a weapon, casting a spell, or aiming a ranged weapon at the target, automatically breaks the effect. Fascinate is an enchantment (compulsion), mind-affecting ability.", 
	type: "special", 
	tags: ["pathfinder"], _id: "8a26",
	classes: {
		Bard: [{level: 0}]
	}
}, {
	name: "Inspire Courage",
	detail: "A bard with 3 or more ranks in a Perform skill can use song or poetics to inspire courage in his allies (including himself), bolstering them against fear and improving their combat abilities. To be affected, an ally must be able to hear the bard sing. The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. An affected ally receives a +1 morale bonus on saving throws against charm and fear effects and a +1 morale bonus on attack and weapon damage rolls. At 8th level, and every six bard levels thereafter, this bonus increases by 1 (+2 at 8th, +3 at 14th, and +4 at 20th). Inspire courage is a mind-affecting ability.", 
	type: "special", 
	tags: ["pathfinder"], _id: "9c60",
	classes: {
		Bard: [{level: 0, mod: 1},{level: 7, mod: 2}, {level: 13, mod: 3}, {level: 19, mod: 4}]
	}
}, {
	name: "Inspire Competence",
	detail: "A bard of 3rd level or higher with 6 or more ranks in a Perform skill can use his music or poetics to help an ally succeed at a task. The ally must be within 30 feet and able to see and hear the bard. The bard must also be able to see the ally. Depending on the task that the ally has at hand, the bard may use his bardic music to lift the ally's spirits, to help him or her focus mentally, or in some other way. The ally gets a +2 competence bonus on skill checks with a particular skill as long as he or she continues to hear the bard's music. The DM may rule that certain uses of this ability are infeasible—chanting to make a %class% move more quietly, for example, is self-defeating. The effect lasts as long as the bard concentrates, up to a maximum of 2 minutes. A bard can't inspire competence in himself. Inspire competence is a mind-affecting ability.", 
	type: "special", 
	tags: ["pathfinder"], _id: "764c",
	classes: {
		Bard: [{level: 2}]
	}
}, {
	name: "Inspire Greatness",
	description: "Grants 2 bonus Hit Dice, +2 attack, and +1 Fortitude",
	detail: "A bard of 9th level or higher with 12 or more ranks in a Perform skill can use music or poetics to inspire greatness in himself or a single willing ally within 30 feet, granting him or her extra fighting capability. For every three levels a bard attains beyond 9th, he can target one additional ally with a single use of this ability (two at 12th level, three at 15th, four at 18th). To inspire greatness, a bard must sing and an ally must hear him sing. The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. A creature inspired with greatness gains 2 bonus Hit Dice (d10s), the commensurate number of temporary hit points (apply the target's Constitution modifier, if any, to these bonus Hit Dice), a +2 competence bonus on attack rolls, and a +1 competence bonus on Fortitude saves. The bonus Hit Dice count as regular Hit Dice for determining the effect of spells such as <i>sleep</i>. Inspire greatness is a mind-affecting ability.", 
	type: "special", 
	tags: ["pathfinder"], _id: "e2b6",
	classes: {
		Bard: [{level: 8}]
	}
}, {
	name: "Song of Freedom",
	description: "Break enchantment as the spell",
	detail: "A bard of 12th level or higher with 15 or more ranks in a Perform skill can use music or poetics to create an effect equivalent to the <i>break enchantment</i> spell (caster level equals the character's bard level). Using this ability requires 1 minute of uninterrupted concentration and music, and it functions on a single target within 30 feet. A bard can't use <i>song of freedom</i> on himself.", 
	type: "special", 
	tags: ["pathfinder"], _id: "c196",
	classes: {
		Bard: [{level: 11}]
	}
}, {
	name: "Inspire Heroics",
	description: "Grants listeners a +4 to AC and +4 to saving throws",
	detail: "A bard of 15th level or higher with 18 or more ranks in a Perform skill can use music or poetics to inspire tremendous heroism in himself or a single willing ally within 30 feet, allowing that creature to fight bravely even against overwhelming odds. For every three bard levels the character attains beyond 15th, he can inspire heroics in one additional creature. To inspire heroics, a bard must sing and an ally must hear the bard sing for a full round. A creature so inspired gains a +4 morale bonus on saving throws and a +4 dodge bonus to AC. The effect lasts for as long as the ally hears the bard sing and for up to 5 rounds thereafter. Inspire heroics is a mind-affecting ability.", 
	type: "special", 
	tags: ["pathfinder"], _id: "3299",
	classes: {
		Bard: [{level: 14}]
	}
}, {
	name: "Mass Suggestion",
	detail: "This ability functions like <i>suggestion</i>, above, except that a bard of 18th level or higher with 21 or more ranks in a Perform skill can make the <i>suggestion</i> simultaneously to any number of creatures that he has already fascinated (see above). <i>Mass suggestion</i> is an enchantment (compulsion), mind-affecting, language-dependent ability.", 
	type: "special", 
	tags: ["pathfinder"], _id: "8d55",
	classes: {
		Bard: [{level: 17}]
	}
}, {
	name: "Animal Companion",
	description: "Keep an animal buddy",
	detail: "A %class% may begin play with an animal companion selected from the following list: badger, camel, dire rat, dog, riding dog, eagle, hawk, horse (light or heavy), owl, pony, snake (Small or Medium viper), or wolf. If the DM's campaign takes place wholly or partly in an aquatic environment, the DM may add the following creatures to the %class%'s list of options: crocodile, porpoise, Medium shark, and squid. This animal is a loyal companion that accompanies the %class% on her adventures as appropriate for its kind.<p class=sub>A 1st-level %class%'s companion is completely typical for its kind except as noted in the sidebar on page 36. As a %class% advances in level, the animal's power increases as shown on the table in the sidebar. <p class=sub>If a %class% releases her companion from service, she may gain a new one by performing a ceremony requiring 24 uninterrupted hours of prayer. This ceremony can also replace an animal companion that has perished. <p class=sub>A %class% of 4th level or higher may select from alternative lists of animals (see the sidebar). Should she select an animal companion from one of these alternative lists, the creature gains abilities as if the character's %class% level were lower than it actually is. Subtract the value indicated in the appropriate list header from the character's %class% level and compare the result with the %class% level entry on the table in the sidebar to determine the animal companion's powers. (If this adjustment would reduce the %class%'s effective level to 0 or lower, she can't have that animal as a companion.) For example, a 6th-level %class% could select a leopard as an animal companion. The leopard would have characteristics and special abilities as if the %class% were 3rd level (taking into account the -3 adjustment) instead of 6th level.", 
	type: "special", 
	tags: ["pathfinder"], _id: "8312",
	classes: {
		Druid: [{level: 0}],
		Ranger: [{level: 3}]
	}
}, {
	name: "Nature Sense",
	description: "+2 on Knowledge (nature) and Survival checks",
	detail: "A %class% gains a +2 bonus on Knowledge (nature) and Survival checks.", 
	type: "special", 
	tags: ["pathfinder"], _id: "6ed8",
	classes: {
		Druid: [{level: 0}]
	}
}, {
	name: "Wild Empathy",
	description: "Improve an animals attitude",
	detail: "A %class% can use body language, vocalizations, and demeanor to improve the attitude of an animal (such as a bear or a monitor lizard). This ability functions just like a Diplomacy check made to improve the attitude of a person (see Chapter 4: Skills). The %class% rolls 1d20 and adds her %class% level and her Charisma modifier to determine the wild empathy check result. The typical domestic animal has a starting attitude of indifferent, while wild animals are usually unfriendly. <p class=sub>To use wild empathy, the %class% and the animal must be able to study each other, which means that they must be within 30 feet of one another under normal conditions. Generally, influencing an animal in this way takes 1 minute but, as with influencing people, it might take more or less time. <p class=sub>A %class% can also use this ability to influence a magical beast with an Intelligence score of 1 or 2 (such as a basilisk or a girallon), but she takes a -4 penalty on the check.",
	type: "special", 
	tags: ["pathfinder"], _id: "e7ab",
	classes: {
		Druid: [{level: 0}],
		Ranger: [{level: 0}]
	}
}, {
	name: "Woodland Stride",
	description: "Move through natural undergrowth at normal speed",
	detail: "Starting at 2nd level, a %class% may move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at her normal speed and without taking damage or suffering any other impairment. However, thorns, briars, and overgrown areas that have been magically manipulated to impede motion still affect her.", 
	type: "special", 
	tags: ["pathfinder"], _id: "d5d7",
	classes: {
		Druid: [{level: 1}],
	  	Ranger: [{level: 6}]
	}
}, {
	name: "Trackless Step",
	description: "Move with no trace of passage",
	detail: "Starting at 3rd level, a %class% leaves no trail in natural surroundings and cannot be tracked. She may choose to leave a trail if so desired.", 
	type: "special", 
	tags: ["pathfinder"], _id: "73fe",
	classes: {
		Druid: [{level: 2}]
	}
}, {
	name: "Resist Nature's Lure",
	description: "Immunity to fey spells",
	detail: "Starting at 4th level, a %class% gains a +4 bonus on saving throws against the spell-like abilities of fey (such as dryads, pixies, and sprites). ", 
	type: "special", 
	tags: ["pathfinder"], _id: "32ca",
	classes: {
		Druid: [{level: 3}]
	}
}, {
	name: "Wild Shape",
	description: "Change into wild creature",
	detail: "A %class% gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type (see the <i>Monster Manual</i>). This ability functions like the polymorph spell, except as noted here. The effect lasts for 1 hour per %class% level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. <p class=sub>The form chosen must be that of an animal the %class% is familiar with. For example, a %class% who has never been outside a temperate forest could not become a polar bear. <p class=sub>A %class% loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.) <p class=sub><i>A %class% can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table 3-8</i>: The %class%. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's %class% level. For instance, a %class% can't take the form of a dire bear (a Large creature that always has at least 12 HD) until 12th level, even though she can begin taking Large forms at 8th level. <p class=sub>At 12th level, a %class% becomes able to use wild shape to change into a plant creature, such as a shambling mound, with the same size restrictions as for animal forms. (A %class% can't use this ability to take the form of a plant that isn't a creature, such as a tree or a rose bush.) <p class=sub>At 16th level, a %class% becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the %class% gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type (humanoid, in most cases). <p class=sub>At 18th level, a %class% becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a %class% may use this wild shape ability to change into a Huge elemental.", 
	type: "special", 
	tags: ["pathfinder"], _id: "25ef",
	classes: {
		Druid: [{level: 4, mod: "1/day"}, {level: 5, mod: "2/day"}, {level: 6, mod: "3/day"},{level: 7, mod: "Large"},{level: 9, mod: "4/day"},{level: 10, mod: "Tiny"},{level: 11, mod: "plant"},{level: 13, mod: "5/day"},{level: 14, mod: "Huge"},{level: 15, mod: "elemental 1/day"},{level: 17, mod: "6/day, elemental 2/day"},{level: 19, mod: "elemental 3/day, Huge elemental"}] 
	}
}, {
	name: "Venom Immunity",
	description: "Immunity to poison",
	detail: "A %class% gains immunity to all poisons. ", 
	type: "special", 
	tags: ["pathfinder"], _id: "3120",
	classes: {
		Druid: [{level: 8}]
	}
}, {
	name: "A Thousand Faces",
	description: "Change appearance as with <i>alter self</i>",
	detail: "A %class% gains the ability to change her appearance at will, as if using the <i>alter self</i> spell (page 197), but only while in her normal form.", 
	type: "special", 
	tags: ["pathfinder"], _id: "134e",
	classes: {
		Druid: [{level: 12}]
	}
}, {
	name: "Timeless body",
	description: "",
	detail: "A %class% no longer takes ability score penalties for aging (see Table 6-5: Aging Effects, page 109) and cannot be magically aged. Any penalties she may have already incurred, however, remain in place. Bonuses still accrue, and the %class% still dies of old age when her time is up.", 
	type: "special", 
	tags: ["pathfinder"], _id: "3f4a",
	classes: {
		Druid: [{level: 14}]
	}
}, {
	name: "Flurry of Blows",
	detail: "When unarmored, a %class% may strike with a flurry of blows at the expense of accuracy. When doing so, she may make one extra attack in a round at her highest base attack bonus, but this attack takes a -2 penalty, as does each other attack made that round. The resulting modified base attack bonuses are shown in the Flurry of Blows Attack Bonus column on Table 3-10: The %class%. This penalty applies for 1 round, so it also affects attacks of opportunity the %class% might make before her next action. When a %class% reaches 5th level, the penalty lessens to -1, and at 9th level it disappears. A %class% must use a full attack action (see page 143) to strike with a flurry of blows. <p class=sub>When using flurry of blows, a %class% may attack only with unarmed strikes or with special %class% weapons (kama, nunchaku, quarterstaff, sai, shuriken, and siangham). She may attack with unarmed strikes and special %class% weapons interchangeably as desired. For example, at 6th level, the %class% Ember could make one attack with her unarmed strike at an attack bonus of +3 and one attack with a special %class% weapon at an attack bonus of +3. When using weapons as part of a flurry of blows, a %class% applies her Strength bonus (not Str bonus x 1-1/2 or x 1/2) to her damage rolls for all successful attacks, whether she wields a weapon in one or both hands. The %class% can't use any weapon other than a special %class% weapon as part of a flurry of blows. <p class=sub>In the case of the quarterstaff, each end counts as a separate weapon for the purpose of using the flurry of blows ability. Even though the quarterstaff requires two hands to use, a %class% may still intersperse unarmed strikes with quarterstaff strikes, assuming that she has enough attacks in her flurry of blows routine to do so. For example, an 8th-level %class% could make two attacks with the quarterstaff (one with each end) at a +5 attack bonus and one with an unarmed strike at a +0 attack bonus, or she could attack with one end of the quarterstaff and one unarmed strike each at a +5 attack bonus, and with the other end of the quarterstaff at a +0 attack bonus, or she could attack with one end of the quarterstaff and one unarmed strike at a +5 attack bonus each, and with the other end of the quarterstaff at a +0 attack bonus. She cannot, however, wield any other weapon at the same time that she uses a quarterstaff. <p class=sub>When a %class% reaches 11th level, her flurry of blows ability improves. In addition to the standard single extra attack she gets from flurry of blows, she gets a second extra attack at her full base attack bonus.", 
	type: "special", 
	tags: ["pathfinder"], _id: "84e0",
	classes: {
		Monk: [{level: 0}]
	},
	op: "if ($(this).attr('checked')) {var level = calc_level(chardata.xp);var clazz = classes.first( {name : chardata.class_name});var size = races.first( {name : chardata.race_name}).size;var temp = clazz.base_attack_bonus[level];var base_attack_bonus = temp.split('/')[0];var flurry_attack = clazz.flurry_of_blows[level];var attacks = flurry_attack.split('/');var flurry_atts = '';for ( var j in attacks) {flurry_atts += pos(parseInt(attacks[j]) + parseInt(base_attack_bonus));flurry_atts += (parseInt(j) + 1 < attacks.length ? '/' : '');}for ( var i in chardata.weapons) {var weapon = weapons.first( {id : chardata.weapons[i].weapon_id});if (jQuery.inArray(weapon.id, clazz.flurry_weapons) > -1) {var att = $('#weapon_' + i + '_att').text();$('#weapon_' + i + '_att').text(calc_attack(flurry_atts, weapon, chardata.weapons[i]));if (weapon.id == 60 || weapon.id == 61) {var damage = clazz.flurry_damage[level][size];$('#weapon_' + i + '_dam').text(damage + pos(calc_ability_modifier(chardata.abilities[0])));}}}} else {recalc_main_page();}"
}, {
	name: "Unarmed Strike",
	detail: "%class%s are highly trained in fighting unarmed, giving them considerable advantages when doing so. At 1st level, a %class% gains Improved Unarmed Strike as a bonus feat. A %class%'s attacks may be with either fist interchangeably or even from elbows, knees, and feet. This means that a %class% may even make unarmed strikes with her hands full. There is no such thing as an off-hand attack for a %class% striking unarmed. A %class% may thus apply her full Strength bonus on damage rolls for all her unarmed strikes. Usually a %class%'s unarmed strikes deal lethal damage, but she can choose to deal nonlethal damage instead with no penalty on her attack roll. She has the same choice to deal lethal or nonlethal damage while grappling. A %class%'s unarmed strike is treated both as a manufactured weapon and a natural weapon for the purpose of spells and effects that enhance or improve either manufactured weapons or natural weapons (such as the <i>magic fang</i> and <i>magic weapon</i> spells). A %class% also deals more damage with her unarmed strikes than a normal person would, as shown on Table 3-10: The %class%. The unarmed damage on Table 3-10 is for Medium %class%s. A Small %class% deals less damage than the amount given there with her unarmed attacks, while a Large %class% deals more damage: <table><tr><td colspan=3 class=header>Small or Large %class% Unarmed Damage</td></tr> <tr><td>Level</td><td>Damage (Small %class%)</td><td>Damage(Large %class%)</td></tr> <tr><td>1st-3rd</td><td>1d4</td><td>1d8</td></tr> <tr><td>4th-7th</td><td>1d6</td><td>2d6</td></tr> <tr><td>8th-11th</td><td>1d8</td><td>2d8</td></tr> <tr><td>12th-15th</td><td>1d10</td><td>3d6</td></tr> <tr><td>16th-19th</td><td>2d6</td><td>3d8</td></tr> <tr><td>20th</td><td>2d8</td><td>4d8</td></tr></table>", 
	type: "special", 
	tags: ["pathfinder"], _id: "ba6e",
	classes: {
		Monk: [{level: 0}]
	}
}, {
	name: "Evasion",
	detail: "A %class% can avoid even magical and unusual attacks with great agility. If she makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save (such as a red dragon's fiery breath or a <i>fireball</i>), she instead takes no damage. Evasion can be used only if a %class% is wearing light armor or no armor. A helpless %class% (such as one who is unconscious or paralysed) does not gain the benefit of evasion.", 
	type: "special", 
	tags: ["pathfinder"], _id: "18f9",
	classes: {
		Monk: [{level: 1}],
		Rogue: [{level: 1}],
		Ranger: [{level: 8}]
	}
}, {
	name: "Still Mind",
	detail: "A %class% of 3rd level or higher gains a +2 bonus on saving throws against spells and effects from the school of enchantment, since her meditation and training improve her resistance to mind-affecting attacks.", 
	type: "special", 
	tags: ["pathfinder"], _id: "5fa2",
	classes: {
		Monk: [{level: 2}]
	}
}, {
	name: "Ki Strike",
	detail: "At 4th level, a %class%'s unarmed attacks are empowered with  <i>ki</i>. Her unarmed attacks are treated as magic weapons for the purpose of dealing damage to creatures with damage reduction (see Damage Reduction, page 291 of the <i>Dungeon Master's Guide</i>).  Ki strike improves with the character's %class% level. At 10th level, her unarmed attacks are also treated as lawful weapons for the purpose of dealing damage to creatures with damage reduction. At 16th level, her unarmed attacks are treated as adamantine weapons for the purpose of dealing damage to creatures with damage reduction and bypassing hardness (see Smashing an Object, page 165).", 
	type: "special", 
	tags: ["pathfinder"], _id: "9e4c",
	classes: {
		Monk: [{level: 3, mod: "(magic)"}, {level: 9, mod: "(magic, lawful)"}, {level: 15, mod: "(magic, lawful, adamantine)"}]
	}
}, {
	name: "Slow Fall",
	detail: "A %class% within arm's reach of a wall can use it to slow her descent. When first using this ability, she takes damage as if the fall were 20 feet shorter than it actually is. The %class%'s ability to slow her fall (that is, to reduce the effective distance of the fall when next to a wall) improves with her %class% level until at 20th level she can use a nearby wall to slow her descent and fall any distance without harm.", 
	type: "special", 
	tags: ["pathfinder"], _id: "7efa",
	classes: {
		Monk: [{level: 3, mod: "20 ft."},{level: 5, mod: "30 ft."},{level: 7, mod: "40 ft."},{level: 9, mod: "50 ft."},{level: 11, mod: "60 ft."},{level: 13, mod: "70 ft."},{level: 15, mod: "80 ft."},{level: 17, mod: "90 ft."},{level: 19, mod: "any distance"},]
	}
}, {
	name: "Purity of Body",
	detail: "A %class% gains control over her body's immune system. She gains immunity to all diseases except for supernatural and magical diseases (such as mummy rot and lycanthropy).", 
	type: "special", 
	tags: ["pathfinder"], _id: "3d80",
	classes: {
		Monk: [{level: 4}]
	}
}, {
	name: "Wholeness of Body",
	detail: "A %class% can heal her own wounds. She can heal a number of hit points of damage equal to twice her current %class% level each day, and she can spread this healing out among several uses.", 
	type: "special", 
	tags: ["pathfinder"], _id: "d7dd",
	classes: {
		Monk: [{level: 6}]
	}
}, {
	name: "Improved Evasion",
	detail: "A %class%'s evasion ability improves. She still takes no damage on a successful Reflex saving throw against attacks such as a dragon's breath weapon or a <i>fireball</i>, but henceforth she takes only half damage on a failed save. A help-less %class% (such as one who is unconscious or paralysed) does not gain the benefit of improved evasion.", 
	type: "special", 
	tags: ["pathfinder"], _id: "28e8",
	classes: {
		Monk: [{level: 8}]
	}
}, {
	name: "Diamond Body",
	detail: "At 11th level, a %class% is in such firm control of her own metabolism that she gains immunity to poisons of all kinds. ", 
	type: "special", 
	tags: ["pathfinder"], _id: "e7df",
	classes: {
		Monk: [{level: 10}]
	}
}, {
	name: "Greater Flurry of Blows",
	detail: "In addition to the standard single extra attack she gets from flurry of blows, she gets a second extra attack at her full base attack bonus.", 
	type: "special", 
	tags: ["pathfinder"], _id: "566b",
	classes: {
		Monk: [{level: 10}]
	}
}, {
	name: "Diamond Soul",
	detail: "A %class% gains spell resistance equal to her current %class% level + 10. In order to affect the %class% with a spell, a spellcaster must get a result on a caster level check (1d20 + caster level; see Spell Resistance, page 177) that equals or exceeds the %class%'s spell resistance.", 
	type: "special", 
	tags: ["pathfinder"], _id: "d8a7",
	classes: {
		Monk: [{level: 12}]
	}
}, {
	name: "Abundant Step",
	detail: "A %class% can slip magically between spaces, as if using the spell <i>dimension door</i>, once per day. Her caster level for this effect is one-half her %class% level (rounded down).", 
	type: "special", 
	tags: ["pathfinder"], _id: "73be",
	classes: {
		Monk: [{level: 11}]
	}
}, {
	name: "Quivering Palm",
	detail: "Starting at 15th level, a %class% can set up vibrations within the body of another creature that can thereafter be fatal if the %class% so desires. She can use this quivering palm attack once a week, and she must announce her intent before making her attack roll. Constructs, oozes, plants, undead, incorporeal creatures, and creatures immune to critical hits cannot be affected. Otherwise, if the %class% strikes successfully and the target takes damage from the blow, the quivering palm attack succeeds. Thereafter the %class% can try to slay the victim at any later time, as long as the attempt is made within a number of days equal to her %class% level. To make such an attempt, the %class% merely wills the target to die (a free action), and unless the target makes a Fortitude saving throw (DC 10 + 1/2 the %class%'s level + the %class%'s Wis modifier), it dies. If the saving throw is successful, the target is no longer in danger from that particular quivering palm attack, but it may still be affected by another one at a later time.", 
	type: "special", 
	tags: ["pathfinder"], _id: "8bc8",
	classes: {
		Monk: [{level: 14}]
	}
}, {
	name: "Tongue of the Sun and Moon",
	detail: "A %class% can speak with any living creature.", 
	type: "special", 
	tags: ["pathfinder"], _id: "97f",
	classes: {
		Monk: [{level: 16}]
	}
}, {
	name: "Empty Body",
	detail: "A %class% gains the ability to assume an ethereal state for 1 round per %class% level per day, as though using the spell etherealness. She may go ethereal on a number of different occasions during any single day, as long as the total number of rounds spent in an ethereal state does not exceed her %class% level.", 
	type: "special", 
	tags: ["pathfinder"], _id: "979d",
	classes: {
		Monk: [{level: 18}]
	}
}, {
	name: "Perfect Self",
	detail: "A %class% has tuned her body with skill and quasi-magical abilities to the point that she becomes a magical creature. She is forevermore treated as an outsider (an extraplanar creature) rather than as a humanoid for the purpose of spells and magical effects. For instance, <i>charm</i> person does not affect her. Additionally, the %class% gains damage reduction 10/magic, which allows her to ignore the first 10 points of damage from any attack made by a nonmagical weapon or by any natural attack made by a creature that doesn't have similar damage reduction (see Damage Reduction, page 291 of the <i>Dungeon Master's Guide</i>). Unlike other outsiders, the %class% can still be brought back from the dead as if she were a member of her previous creature type.", 
	type: "special", 
	tags: ["pathfinder"], _id: "9a37",
	classes: {
		Monk: [{level: 19}]
	}
}, {
	name: "Aura of Good",
	detail: "The power of a %class%'s aura of good (see the detect good spell) is equal to her %class% level, just like the aura of a %class% of a good deity.", 
	type: "special", 
	tags: ["pathfinder"], _id: "544c",
	classes: {
		Paladin: [{level: 0}]
	}
}, {
	name: "Detect Evil",
	detail: "At will, a %class% can use <i>detect evil</i>, as the spell.", 
	type: "special", 
	tags: ["pathfinder"], _id: "f76b",
	classes: {
		Paladin: [{level: 0}]
	}
}, {
	name: "Smite Evil",
	detail: "Once per day, a %class% may attempt to smite evil with one normal melee attack. She adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per %class% level. For example, a 13th-level %class% armed with a longsword would deal 1d8+13 points of damage, plus any additional bonuses for high Strength or magical affects that would normally apply. If the %class% accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day. <p class=sub><i>At 5th level, and at every five levels thereafter, the %class% may smite evil one additional time per day, as indicated on Table 3-12</i>: The %class%, to a maximum of five times per day at 20th level.", 
	type: "special", 
	tags: ["pathfinder"], _id: "7626",
	classes: {
		Paladin: [{level: 0, mod: "1/day"},{level: 4, mod: "2/day"},{level: 9, mod: "3/day"},{level: 14, mod: "4/day"},{level: 19, mod: "5/day"}]
	}
}, {
	name: "Divine Grace",
	detail: "At 2nd level, a %class% gains a bonus equal to <p class=sub>her Charisma bonus (if any) on all saving throws.", 
	type: "special", 
	tags: ["pathfinder"], _id: "4c9d",
	classes: {
		Paladin: [{level: 1}]
	}
}, {
	name: "Lay on Hands",
	detail: "A %class% with a Charisma score of 12 or higher can heal wounds (her own or those of others) by touch. Each day she can heal a total number of hit points of damage equal to her %class% level x her Charisma bonus. For example, a 7th-level %class% with a 16 Charisma (+3 bonus) can heal 21 points of damage per day. A %class% may choose to divide her healing among multiple recipients, and she doesn't have to use it all at once. Using lay on hands is a standard action.<p class=sub>Alternatively, a %class% can use any or all of this healing power to deal damage to undead creatures. Using lay on hands in this way requires a successful melee touch attack and doesn't provoke an attack of opportunity. The %class% decides how many of her daily allotment of points to use as damage after successfully touching an undead creature.", 
	type: "special", 
	tags: ["pathfinder"], _id: "a141",
	classes: {
		Paladin: [{level: 1}]
	}
}, {
	name: "Aura of Courage",
	detail: "A %class% is immune to fear (magical or otherwise). Each ally within 10 feet of her gains a +4 morale bonus on saving throws against fear effects. This ability functions while the %class% is conscious, but not if she is unconscious or dead.", 
	type: "special", 
	tags: ["pathfinder"], _id: "c714",
	classes: {
		Paladin: [{level: 2}]
	}
}, {
	name: "Divine Health",
	detail: "A %class% gains immunity to all diseases, including supernatural and magical diseases (such as mummy rot and lycanthropy).", 
	type: "special", 
	tags: ["pathfinder"], _id: "347",
	classes: {
		Paladin: [{level: 2}]
	}
}, {
	name: "Turn Undead",
	detail: "A %class% gains the supernatural ability to turn undead. She may use this ability a number of times per day equal to 3 + her Charisma modifier. She turns undead as a %class% of three levels lower would. (See Turn or Rebuke Undead, page 159.)", 
	type: "special", 
	tags: ["pathfinder"], _id: "d553",
	classes: {
		Paladin: [{level: 3}]
	}
}, {
	name: "Special Mount",
	detail: "Upon reaching 5th level, a %class% gains the service of an unusually intelligent, strong, and loyal steed to serve her in her crusade against evil (see the sidebar). This mount is usually a heavy warhorse (for a Medium %class%) or a warpony (for a Small %class%). <p class=sub>Once per day, as a full-round action, a %class% may magically call her mount from the celestial realms in which it resides. The mount immediately appears adjacent to the %class% and remains for 2 hours per %class% level; it may be dismissed at any time as a free action. The mount is the same creature each time it is summoned, though the %class% may release a particular mount from service (if it has grown too old to join her crusade, for instance). Each time the mount is called, it appears in full health, regardless of any damage it may have taken previously. The mount also appears wearing or carrying any gear it had when it was last dismissed )including barding, saddle, saddlebags, and the like). Calling a mount is a conjuration (calling) effect. <p class=sub>Should the %class%'s mount die, it immediately disappears, leav-ing behind any equipment it was carrying. The %class% may not summon another mount for thirty days or until she gains a %class% level, whichever comes first, even if the mount is somehow returned from the dead. During this thirty-day period, the %class% takes a -1 penalty on attack and weapon damage rolls.", 
	type: "special", 
	tags: ["pathfinder"], _id: "5a93",
	classes: {
		Paladin: [{level: 4}]
	}
}, {
	name: "Remove Disease",
	detail: "A %class% can produce a  <i>remove disease</i> effect, as the spell, once per week. She can use this ability one additional time per week for every three levels after 6th (twice per week at 9th, three times at 12th, and so forth).", 
	type: "special", 
	tags: ["pathfinder"], _id: "cab8",
	classes: {
		Paladin: [{level: 5, mod: "1/week"},{level: 8, mod: "2/week"},{level: 11, mod: "3/week"},{level: 14, mod: "4/week"},{level: 17, mod: "5/week"}]
	}
}, {
	name: "Swift Tracker",
	detail: "A %class% can move at his normal speed while following tracks without taking the normal -5 penalty. He takes only a -10 penalty (instead of the normal -20) when moving at up to twice normal speed while tracking.", 
	type: "special", 
	tags: ["pathfinder"], _id: "f01",
	classes: {
		Ranger: [{level: 7}]
	}
}, {
	name: "Camouflage",
	detail: "A %class% can use the Hide skill in any sort of natural terrain, even if the terrain doesn't grant cover or concealment.", 
	type: "special", 
	tags: ["pathfinder"], _id: "1739",
	classes: {
		Ranger: [{level: 12}]
	}
}, {
	name: "Hide in plain sight",
	detail: "While in any sort of natural terrain, a %class% of 17th level or higher can use the Hide skill even while being observed.", 
	type: "special", 
	tags: ["pathfinder"], _id: "af49",
	classes: {
		Ranger: [{level: 16}]
	}
}, {
	name: "Hunter\'s Bond",
	detail: "At 4th level, a %class% forms a bond with his hunting companions. This bond can take one of two forms. Once the form is chosen, it cannot be changed. The first is a bond to his companions. This bond allows him to spend a move action to grant half his favored enemy bonus against a single target of the appropriate type to all allies within 30 feet who can see or hear him. This bonus lasts for a number of rounds equal to the ranger&apos;s Wisdom modifier (minimum 1). This bonus does not stack with any favored enemy bonuses possessed by his allies; they use whichever bonus is higher.<p class=sub>The second option is to form a close bond with an animal companion. A ranger who selects an animal companion can choose from the following list: badger, bird, camel, cat (small), dire rat, dog, horse, pony, snake (viper or constrictor), or wolf. If the campaign takes place wholly or partly in an aquatic environment, the ranger may choose a shark instead. This animal is a loyal companion that accompanies the ranger on his adventures as appropriate for its kind. A ranger&apos;s animal companion shares his favored enemy and favored terrain bonuses.<p class=sub>This ability functions like the druid animal companion ability (which is part of the Nature Bond class feature), except that the ranger&apos;s effective druid level is equal to his ranger level – 3.",
	type: "special", 
	tags: ["pathfinder"], _id: "109f",
	classes: {
		Ranger: [{level: 3}]
	}
}, {
	name: "Quarry",
	detail: "At 11th level, a %class% can, as a standard action, denote one target within his line of sight as his quarry. Whenever he is following the tracks of his quarry, a ranger can take 10 on his Survival skill checks while moving at normal speed, without penalty. In addition, he receives a +2 insight bonus on attack rolls made against his quarry, and all critical threats are automatically confirmed. A ranger can have no more than one quarry at a time and the creature's type must correspond to one of his favored enemy types. He can dismiss this effect at any time as a free action, but he cannot select a new quarry for 24 hours. If the ranger sees proof that his quarry is dead, he can select a new quarry after waiting 1 hour.",
	classes: {
		Ranger: [{level: 10}]
	},
	op: "", // +2 to attack
	type: "special", 
	tags: ["pathfinder"], _id: "18fa"
}, {
	name: "Sneak Attack",
	detail: "If a %class% can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage. Basically, the %class%'s attack deals extra damage any time her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the %class% flanks her target. This extra damage is 1d6 at 1st level, and it increases by 1d6 every two %class% levels thereafter. Should the %class% score a critical hit with a sneak attack, this extra damage is not multiplied. (See Table 8-5: Attack Roll Modifiers and Table 8-6: Armor Class Modifiers, page 151, for combat situations in which the %class% flanks an opponent or the opponent loses his Dexterity bonus to AC.) <p class=sub>Ranged attacks can count as sneak attacks only if the target is within 30 feet. A %class% can't strike with deadly accuracy from beyond that range. With a sap (blackjack) or an unarmed strike, a %class% can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual -4 penalty, because she must make optimal use of her weapon in order to execute a sneak attack. (See Nonlethal Damage, page 146.) <p class=sub>A %class% can sneak attack only living creatures with discernible anatomies—undead, constructs, oozes, plants, and incorporeal creatures lack vital areas to attack. Any creature that is immune to critical hits is not vulnerable to sneak attacks. The %class% must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A %class% cannot sneak attack while striking a creature with concealment (see page 152) or striking the limbs of a creature whose vitals are beyond reach.", 
	type: "special", 
	tags: ["pathfinder"], _id: "1092",
	classes: {
		Rogue: [{level: 0, mod: "1d6"},{level: 2, mod: "2d6"},{level: 4, mod: "3d6"},{level: 6, mod: "4d6"},{level: 8, mod: "5d6"},{level: 10, mod: "6d6"},{level: 12, mod: "7d6"},{level: 14, mod: "8d6"},{level: 16, mod: "9d6"},{level: 18, mod: "10d6"}]
	}
}, {
	name: "Trapfinding",
	detail: "%class%s (and only %class%s) can use thle Search skill to locate traps when the task has a Difficulty Class higher than 20. Finding a nonmagical trap has a DC of at least 20, or higher if it is well hidden. Finding a magic trap has a DC of 25 + the level of the spell used to create it. %class%s (and only %class%s) can use the Disable Device skill to disarm magic traps. A magic trap generally has a DC of 25 + the level of the spell used to create it. <p class=sub>A %class% who beats a trap's DC by 10 or more with a Disable Device check can study a trap, figure out how it works, and bypass it (with her party) without disarming it.", 
	type: "special", 
	tags: ["pathfinder"], _id: "7830",
	classes: {
		Rogue: [{level: 0}]
	}
}, {
	name: "Summon Familiar",
	detail: "A sorcerer can obtain a familiar. Doing so takes 24 hours and uses up magical materials that cost 100 gp. A familiar is a magical beast that resembles a small animal and is unusually tough and intelligent. The creature serves as a companion and servant. <p class=sub>The sorcerer chooses the kind of familiar he gets. As the sorcerer advances in level, his familiar also increases in power. <p class=sub>If the familiar dies or is dismissed by the sorcerer, the sorcerer must attempt a DC 15 Fortitude saving throw. Failure means he loses 200 experience points per sorcerer level; success reduces the loss to one-half that amount. However, a sorcerer's experience point total can never go below 0 as the result of a familiar's demise or dismissal. For example, suppose that Hennet is a 3rd-level sorcerer with 3,230 XP when his owl familiar is killed by a bugbear. Hennet makes a successful saving throw, so he loses 300 XP, dropping him below 3,000 XP and back to 2nd level (see the <i>Dungeon Master's Guide</i> for rules for losing levels). A slain or dismissed familiar cannot be replaced for a year and day. A slain familiar can be raised from the dead just as a character can be, and it does not lose a level or a Constitution point when this happy event occurs. <p class=sub>A character with more than one class that grants a familiar may have only one familiar at a time.", 
	type: "special", 
	tags: ["pathfinder"], _id: "9ddb",
	classes: {
		Sorcerer: [{level: 0}],
		Wizard: [{level: 0}]
	}
}, {
	name: "Scribe Scroll",
	detail: "At 1st level, a %class% gains Scribe Scroll as a bonus feat. This feats enables her to create magic schools (see Scribe Scroll, page 99, and Creating Magic Items, page 282 of the <i>Dungeon Master's Guide</i>).", 
	type: "special", 
	tags: ["pathfinder"], _id: "96db",
	classes: {
		Wizard: [{level: 0}]
	}
}, {
	name: "Suggestion",
	description: "Make a suggestion as the spell",
	detail: "A bard of 6th level or higher with 9 or more ranks in a Perform skill can make a <i>suggestion</i> (as the spell) to a creature that he has already fascinated (see above). Using this ability does not break the bard's concentration on the <i>fascinate</i> effect, nor does it allow a second saving throw against the <i>fascinate</i> effect. Making a <i>suggestion</i> doesn't count against a bard's daily limit on bardic music performances. A Will saving throw (DC 10 + 1/2 bard's level + bard's Cha modifier) negates the effect. This ability affects only a single creature (but see <i>mass suggestion</i>, below). <i>Suggestion</i> is an enchantment (compulsion), mind-affecting, language dependent ability.", 
	type: "special", 
	tags: ["pathfinder"]
}, {
	name: "Favored Enemy",
	detail: "A %class% may select a type of creature from among those given on Table 3-14: %class% Favored Enemies. Due to his extensive study on his chosen type of foe and training in the proper techniques for combating such creatures, the %class% gains a +2 bonus on Bluff, Listen, Sense Motive, Spot, and Survival checks when using these skills against creatures of this type. Likewise, he gets a +2 bonus on weapon damage rolls against such creatures. <p class=sub>At 5th level and every five levels thereafter (10th, 15th, and 20th level), the %class% may select an additional favored enemy from those given on the table. In addition, at each such interval, the bonus against any one favored enemy (including the one just selected, if so desired) increases by 2. For example, a 5th-level %class% has two favored enemies; against one he gains a +4 bonus on Bluff, Listen, Sense Motive, Spot, and Survival checks and weapon damage rolls, and against the other he has a +2 bonus. At 10th level, he has three favored enemies, and he gains an additional +2 bonus, which he can allocate to the bonus against any one of his three favored enemies. Thus, his bonuses could be either +4, +4, +2 or +6, +2, +2. If the %class% chooses humanoids or outsiders as a favored enemy, he must also choose an associated subtype, as indicated on the table. <p class=sub>If a specific creature falls into more than one category of favored enemy (for instance, devils are both evil outsiders and lawful outsiders), the %class%'s bonuses do not stack; he simply uses whichever bonus is higher. See the <i>Monster Manual</i> for more information on types of creatures.", 
	type: "special", 
	tags: ["pathfinder"], _id: "90c3", hide: true,
	classes: {
		Ranger: [{level: 0}]
	}
}, {
	name: "Favored Terrain",
	detail: "At 3rd level, a ranger may select a type of terrain from the Favored Terrains table. The ranger gains a +2 bonus on initiative checks and Knowledge (geography), Perception, Stealth, and Survival skill checks when he is in this terrain. A ranger traveling through his favored terrain normally leaves no trail and cannot be tracked (though he may leave a trail if he so chooses).<p class=sub>At 8th level and every five levels thereafter, the ranger may select an additional favored terrain. In addition, at each such interval, the skill bonus and initiative bonus in any one favored terrain (including the one just selected, if so desired), increases by +2.<p class=sub>If a specific terrain falls into more than one category of favored terrain, the ranger's bonuses do not stack; he simply uses whichever bonus is higher", 
	type: "special", 
	tags: ["pathfinder"], _id: "9dc3", hide: true,
	classes: {
		Ranger: [{level: 0}]
	}
}, {
	name: "Crippling Strike",
	description: "Sneak attacks inflict 2 points of Strength damage.",
	detail: "A %class% with this ability can sneak attack opponents with such precision that her blows weaken and hamper them. An opponent damaged by one of her sneak attacks also takes 2 points of Strength damage. Ability points lost to damage return on their own at the rate of 1 point per day for each damaged ability.", type: "special", tags: ["pathfinder"]
}, {
	name: "Defensive Roll",
	description: "Take less damage from lethal blow.",
	detail: "The %class% can roll with a potentially lethal blow to take less damage from it than she otherwise would. Once per day, when she would be reduced to 0 or fewer hit points by damage in combat (from a weapon or other blow, not a spell or special ability), the %class% can attempt to roll with the damage. To use this ability, the %class% must attempt a Reflex saving throw (DC = damage dealt). If the save succeeds, she takes only half damage from the blow; if it fails, she takes full damage. She must be aware of the attack and able to react to it in order to execute her defensive roll--if she is denied her Dexterity bonus to AC, she can't use this ability. Since this effect would not normally allow a character to make a Reflex save for half damage, the %class%'s evasion ability does not apply to the defensive roll.", type: "special", tags: ["pathfinder"]
},  {
	name: "Opportunist",
	description: "Attack of opportunity against another enemy.",
	detail: "Once per round, the %class% can make an attack of opportunity against an opponent who has just been struck for damage in melee by another character. This attack counts as the %class%'s attack of opportunity for that round. Even a %class% with the Combat Reflexes feat can't use the opportunist ability more than once per round.", type: "special", tags: ["pathfinder"]
}, {
	name: "Skill Mastery",
	description: "Take 10 on selected skills under adverse conditions.",
	detail: "The %class% becomes so certain in the use of certain skills that she can use them reliably even under adverse conditions. Upon gaining this ability, she selects a number of skills equal to 3 + her Intelligence modifier. When making a skill check with one of these skills, she may take 10 even if stress and distractions would normally prevent her from doing so. A %class% may gain this special ability multiple times, selecting additional skills for it to apply to each time.", type: "special", tags: ["pathfinder"]
}, {
	name: "Slippery Mind",
	description: "Escape magical control",
	detail: "This ability represents the %class%'s ability to wriggle free from magical effects that would otherwise control or compel her. If a %class% with slippery mind is affected by an enchantment spell or effect and fails her saving throw, she can attempt it again 1 round later at the same DC. She gets only this one extra chance to succeed on her saving throw.", type: "special", tags: ["pathfinder"]
}]);