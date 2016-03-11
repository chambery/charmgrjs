feats = [{
	name: "Acrobatic",
	tags: ["pathfinder"],
	type: "feat",
	description: "You have excellent body awareness and coordination.",
	detail: "You have excellent body awareness and coordination.<p class=sub><b>Benefit</b>: You get a +2 bonus on all Jump checks and Tumble checks.</p>",
	benefit: "+2 bonus on Jump and Tumble checks",
	skills: {
		"Jump" : 2,
		"Tumble" : 2
	},
	prereqs: {}
},{
	name: "Agile",
	tags: ["phb", "pathfinder"],
	type: "feat",
	description: "You are particularly flexible and poised.",
	detail: "You are particularly flexible and poised. <p class=sub><b>Benefit</b>: You get a +2 bonus on all Balance checks and Escape Artist checks. ",
	benefit: "+2 bonus on Balance and Escape Artist checks",
	skills: {
		"Balance" : 2,
		"Escape Artist" : 2
	},
	prereqs: {}
},{
	name: "Alertness",
	tags: ["phb", "pathfinder"],
	type: "feat",
	description: "You have finely tuned senses.",
	detail: "You have finely tuned senses. <p class=sub><b>Benefit</b>: You get a +2 bonus on all Listen checks and Spot checks. <p class=sub><b>Special</b>: The master of a familiar (see the Familiars sidebar, page 52) gains the benefit of the Alertness feat whenever the familiar is within arm&apos;s reach. ",
	benefit: "+2 bonus on Listen and Spot checks",
	skills: {
		"Listen" : 2,
		"Spot" : 2
	},
	prereqs: {}
},{
	name: "Animal Affinity",
	tags: ["phb", "pathfinder"],
	type: "feat",
	description: "You are good with animals.",
	detail: "You are good with animals. <p class='sub'><b>Benefit</b>: You get a +2 bonus on all Handle Animal checks and Ride checks.",
	benefit: "+2 bonus on Handle Animal and Ride checks",
	skills: {
		"Handle Animal" : 2,
		"Ride" : 2
	},
	prereqs: {}
},{
	name: "Armor Proficiency (heavy)",
	tags: ["phb", "pathfinder"],
	type: "feat",
	description: "You are proficient with heavy armor.",
	detail: "You are proficient with heavy armor (see Table 7-6: Armor and Shields, page 123). <p class=sub><b>Prerequisites</b>: Armor Proficiency (light), Armor Proficiency (medium). <p class=sub><b>Benefit</b>: See Armor Proficiency (light). <p class=sub><b>Normal</b>: See Armor Proficiency (light). <p class=sub><b>Special</b>: Fighters, paladins, and clerics automatically have Armor Proficiency (heavy) as a bonus feat. They need not select it.",
	benefit: "No armor check penalty on attack rolls",
	attack: "if(chardata.armors){ for(var i in chardata.armors) { var armor = armors({ name: chardata.armors[i].armor_name }).first(); if(armor.category == 'heavy') { attacks.acp += Math.abs(armor.acp) } } } return attacks;",
	mobility: "if(chardata.armors){ for(var i in chardata.armors) {	var armor = armors({ name: chardata.armors[i].armor_name }).first(); if(armor.category == 'heavy') { acp += Math.abs(armor.acp) } } } return acp; ",
	classes: {
		"Cleric": 2,
		"Fighter": 2,
		"Paladin": 1
	},
	collection: {
		db: "armors",
		filter: { category : "heavy" }
	},
	prereqs: {
		feats: ["Armor Proficiency (medium)"]
	}
},{
	name: "Armor Proficiency (light)",
	tags: ["phb", "pathfinder"],
	type: "feat",
	description: "You are proficient with light armor.",
	detail: "You are proficient with light armor (see Table 7-6: Armor and Shields, page 123). <p class=sub><b>Benefit</b>: When you wear a type of armor with which you are proficient, the armor check penalty for that armor applies only to Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Pick Pocket, and Tumble checks. <p class=sub><b>Normal</b>: A character who is wearing armor with which she is not proficient applies its armor check penalty to attack rolls and to all skill checks that involve moving, including Ride. <p class=sub><b>Special</b>: All characters except wizards, sorcerers, and monks automatically have Armor Proficiency (light) as a bonus feat. They need not select it.",
	benefit: "No armor check penalty on attack rolls",
	attack: "if(chardata.armors){ for(var i in chardata.armors) { var armor = armors({ name: chardata.armors[i].armor_name }).first(); if(armor.category == 'light') { attacks.acp += Math.abs(armor.acp) } } } return attacks;",
	mobility: "if(chardata.armors){ for(var i in chardata.armors) {	var armor = armors({ name: chardata.armors[i].armor_name }).first(); if(armor.category == 'light') { acp += Math.abs(armor.acp) } } } return acp;",
	classes: {
		"Barbarian": 1,
		"Bard": 1,
		"Cleric": 1,
		"Druid": 1,
		"Fighter": 1,
		"Paladin": 1,
		"Ranger": 1,
		"Rogue": 1
	},
	collection: {
		db: "armors",
		filter: { category: "light" }
	},
	prereqs: {}
},{
	name: "Armor Proficiency (medium)",
	tags: ["phb", "pathfinder"],
	type: "feat",
	description: "You are proficient with medium armor.",
	detail: "You are proficient with medium armor (see Table 7-6: Armor and Shields, page 123). <p class=sub><b>Prerequisite</b>: Armor Proficiency (light). <p class=sub><b>Benefit</b>: See Armor Proficiency (light). <p class=sub><b>Normal</b>: See Armor Proficiency (light). <p class=sub><b>Special</b>: Fighters, barbarians, paladins, clerics, druids, and bards automatically have Armor Proficiency (medium) as a bonus feat. They need not select it.",
	benefit: "No armor check penalty on attack rolls",
	attack: "if(chardata.armors){ for(var i in chardata.armors) {	var armor = armors({ name: chardata.armors[i].armor_name }).first(); if(armor.category == 'medium') { attacks.acp += Math.abs(armor.acp) } } } return attacks; ",
	mobility: "if(chardata.armors){ for(var i in chardata.armors) {	var armor = armors({ name: chardata.armors[i].armor_name }).first(); if(armor.category == 'medium') { acp += Math.abs(armor.acp) } } } return acp;",
	prereqs: {
		feats: ["Armor Proficiency (light)"]
	},
	classes: {
		"Barbarian": 1,
		"Cleric": 1,
		"Druid": 1,
		"Fighter": 1,
		"Paladin": 1
	},
	collection: {
		db: "armors",
		filter: { category: "medium" }
	}
},{
	name: "Athletic",
	tags: ["phb", "pathfinder"],
	type: "feat",
	description: "You have a knack for athletic endeavors.",
	detail: "You have a knack for athletic endeavors. <p class='sub'><b>Benefit</b>: You get a +2 bonus on all Climb checks and Swim checks.",
	benefit: "+2 bonus on Climb and Swim check",
	prereqs: {},
	fighter_bonus_feat: true
},{
	name: "Augment Summoning",
	tags: ["phb", "pathfinder"],
	type: "feat",
	description: "Your summoned creatures are more powerful than normal.",
	detail: "Your summoned creatures are more powerful than normal. <p class=sub><b>Prerequisite</b>: Spell Focus (conjuration). <p class=sub><b>Benefit</b>: Each creature you conjure with any summon spell gains a +4 enhancement bonus to Strength and Constitution for the duration of the spell that summoned it.",
	benefit: "Summoned creatures gain +4 Str, +4 Con",
	prereqs: {
		feats: ["Spell Focus"]
	},
	spell_related: true,
	conditional: true
},{
	name: "Blind-Fight",
	tags: ["phb", "pathfinder"],
	type: "feat",
	description: "You know how to fight in melee without being able to see your foes.",
	detail: "You know how to fight in melee without being able to see your foes. <p class=sub><b>Benefit</b>: In melee, every time you miss because of concealment, you can reroll your miss chance percentile roll one time to see if you actually hit (see Concealment, page 152). <p class=sub>An invisible attacker gets no advantages related to hitting you in melee. That is, you don&apos;t lose your Dexterity bonus to Armor Class, and the attacker doesn&apos;t get the usual +2 bonus for being invisible (see Table 8-5: Attack Roll Modifiers and Table 8-6: Armor Class Modifiers, page 151). The invisible attacker&apos;s bonuses do still apply for ranged attacks, however. <p class=sub>You take only half the usual penalty to speed for being unable to see. Darkness and poor visibility in general reduces your speed to three-quarters normal, instead of one-half (see Table 9-4: Hampered Movement, page 163). <p class=sub><b>Normal</b>: Regular attack roll modifiers for invisible attackers trying to hit you (see Table 8-5: Attack Roll Modifiers, page 151) apply, and you lose your Dexterity bonus to AC. The speed reduction for darkness and poor visibility (see Table 9-4: Hampered Movement, page 163) also applies. <p class=sub><b>Special</b>: The Blind-Fight feat is of no use against a character who is the subject of a <i>blink</i> spell (see page 206). <p class=sub>A fighter may select Blind-Fight as one of his fighter bonus feats (see page 38).",
	benefit: "Reroll miss chance for concealment",
	prereqs: {},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Brew Potion",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can create potions, which carry spells within themselves.",
	detail: "You can create potions, which carry spells within themselves. See the <i>Dungeon Master&apos;s Guide</i> for rules on potions. <p class=sub><b>Prerequisite</b>: Caster level 3rd. <p class=sub><b>Benefit</b>: You can create a potion of any 3rd-level or lower spell that you know and that targets one or more creatures. Brewing a potion takes one day. When you create a potion, you set the caster level, which must be sufficient to cast the spell in question and no higher than your own level. The base price of a potion is its spell level x its caster level x 50 gp. To brew a potion, you must spend 1/25 of this base price in XP and use up raw materials costing one half this base price. <p class=sub>When you create a potion, you make any choices that you would normally make when casting the spell. Whoever drinks the potion is the target of the spell. <p class=sub>Any potion that stores a spell with a costly material component or an XP cost also carries a commensurate cost. In addition to the costs derived from the base price, you must expend the material component or pay the XP when creating the potion.",
	benefit: "Create magic potions",
	prereqs: {
		abilities: {
			"Int": 13
		},
		level: 3
	},
	spell_related: true,
	conditional: true
},{
	name: "Cleave",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can follow through with powerful blows.",
	detail: "You can follow through with powerful blows. <p class=sub><b>Prerequisites</b>: Str 13, Power Attack. <p class=sub><b>Benefit</b>: If you deal a creature enough damage to make it drop (typically by dropping it to below 0 hit points or killing it), you get an immediate, extra melee attack against another creature within reach. You cannot take a 5-foot step before making this extra attack. The extra attack is with the same weapon and at the same bonus as the attack that dropped the previous creature. You can use this ability once per round. <p class=sub><b>Special</b>: A fighter may select Cleave as one of his fighter bonus feats (see page 38).",
	benefit: "Extra melee attack after dropping target",
	prereqs: {
		feats: ["Power Attack"]
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Combat Casting",
	tags: ["phb", "pathfinder"],
	type: "feat",
	description: "You are adept at casting spells in combat.",
	detail: "You are adept at casting spells in combat. <p class=sub><b>Benefit</b>: You get a +4 bonus on Concentration checks made to cast a spell or use a spell-like ability while on the defensive (see Casting on the Defensive, page 140) or while you are grappling or pinned. ",
	benefit: "+4 bonus on Concentration checks for defensive casting",
	prereqs: {},
	spell_related: true,
	conditional: true
},{
	name: "Combat Expertise",
	tags: ["phb", "pathfinder"],
	type: "feat",
	description: "You are trained at using your combat skill for defense as well as offense.",
	detail: "You are trained at using your combat skill for defense as well as offense. <p class=sub><b>Prerequisite</b>: Int 13. <p class=sub><b>Benefit</b>: When you use the attack action or the full attack action in melee, you can take a penalty of as much as -5 on your attack roll and add the same number (+5 or less) as a dodge bonus to your Armor Class. This number may not exceed your base attack bonus. The changes to attack rolls and Armor Class last until your next action. <p class=sub><b>Normal</b>: A character without the Combat Expertise feat can fight defensively while using the attack or full attack action to take a -4 penalty on attack rolls and gain a +2 dodge bonus to Armor Class. <p class=sub><b>Special</b>: A fighter may select Combat Expertise as one of his fighter bonus feats (see page 38).",
	benefit: "Trade attack bonus for AC (max 5 points)",
	prereqs: {
		abilities: {
			"Int": 13
		}
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Combat Reflexes",
	tags: ["phb", "pathfinder"],
	type: "feat",
	description: "You can respond quickly and repeatedly to opponents who let their defenses down.",
	detail: "You can respond quickly and repeatedly to opponents who let their defenses down. <p class=sub><b>Benefit</b>: When foes leave themselves open, you may make a number of additional attacks of opportunity equal to your Dexterity bonus. For example, a fighter with a Dexterity of 15 can make a total of three attacks of opportunity in 1 round—the one attack of opportunity any character is entitled to, plus two more because of his +2 Dexterity bonus. If four goblins move out of the character&apos;s threatened squares, he can make one attack of opportunity each against three of the four. You can still make only one attack of opportunity per opportunity. <p class=sub>With this feat, you may also make attacks of opportunity while flat-footed. <p class=sub><b>Normal</b>: A character without this feat can make only one attack of opportunity per round and can&apos;t make attacks of opportunity while flat-footed. <p class=sub><b>Special</b>: The Combat Reflexes feat does not allow a rogue to use her opportunist ability (see page 51) more than once per round. <p class=sub>A fighter may select Combat Reflexes as one of his fighter bonus feats (see page 38) <p class=sub>A monk may select Combat Reflexes as a bonus feat at 2nd level.",
	benefit: "Additional attacks of opportunity",
	prereqs: {},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Craft Magic Arms and Armor",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can create magic weapons, armor, and shields.",
	detail: "You can create magic weapons, armor, and shields. <p class=sub><b>Prerequisite</b>: Caster level 5th. <p class=sub><b>Benefit</b>: You can create any magic weapon, armor, or shield whose prerequisites you meet (see the  Dungeon Master&apos;s Guide for prerequisites and other information on these items). Enhancing a weapon, suit of armor, or shield takes one day for each 1,000 gp in the price of its magical features. To enhance a weapon, suit of armor, or shield, you must spend 1/25 of its features&apos; total price in XP and use up raw materials costing one-half of this total price. <p class=sub>The weapon, armor, or shield to be enhanced must be a masterwork item that you provide. Its cost is not included in the above cost. <p class=sub>You can also mend a broken magic weapon, suit of armor, or shield if it is one that you could make. Doing so costs half the XP, half the raw materials, and half the time it would take to craft that item in the first place.",
	benefit: "Create magic arms and armor",
	prereqs: {
		level: 5
	},
	spell_related: true,
	conditional: true
},{
	name: "Craft Rod",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can create magic rods, which have varied magical effects.",
	detail: "You can create magic rods, which have varied magical effects. <p class=sub><b>Prerequisite</b>: Caster level 9th. <p class=sub><b>Benefit</b>: You can create any rod whose prerequisites you meet (see the <i>Dungeon Master&apos;s Guide</i> for prerequisites and other information on rods). Crafting a rod takes one day for each 1,000 gp in its base price. To craft a rod, you must spend 1/25 of its base price in XP and use up raw materials costing one-half of its base price. <p class=sub>Some rods incur extra costs in material components or XP, as noted in their descriptions. These costs are in addition to those derived from the rod&apos;s base price.",
	benefit: "Create magic rods",
	prereqs: {
		level: 9
	},
	spell_related: true,
	conditional: true
},{
	name: "Craft Staff",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can create magic staffs, each of which has multiple magical effects.",
	detail: "You can create magic staffs, each of which has multiple magical effects. <p class=sub><b>Prerequisite</b>: Caster level 12th. <p class=sub><b>Benefit</b>: You can create any staff whose prerequisites you meet (see the <i>Dungeon Master&apos;s Guide</i> for prerequisites and other information on staffs). Crafting a staff takes one day for each 1,000 gp in its base price. To craft a staff, you must spend 1/25 of its base price in XP and use up raw materials costing one-half of its base price. A newly created staff has 50 charges. <p class=sub>Some staffs incur extra costs in material components or XP, as noted in their descriptions. These costs are in addition to those derived from the staff &apos;s base price.",
	benefit: "Create staffs",
	prereqs: {
		level: 12
	},
	spell_related: true,
	conditional: true
},{
	name: "Craft Wand",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can create wands, which hold spells.",
	detail: "You can create wands, which hold spells (see the <i>Dungeon Master&apos;s Guide</i> for rules on wands). <p class='sub'><b>Prerequisite</b>: Caster level 5th. <p class='sub'><b>Benefit</b>: You can create a wand of any 4th-level or lower spell that you know. Crafting a wand takes one day for each 1,000 gp in its base price. The base price of a wand is its caster level x the spell level x 750 gp. To craft a wand, you must spend 1/25 of this base price in XP and use up raw materials costing one-half of this base price. A newly created wand has 50 charges. <p class='sub'>Any wand that stores a spell with a costly material component or an XP cost also carries a commensurate cost. In addition to the cost derived from the base price, you must expend fifty copies of the material component or pay fifty times the XP cost.",
	benefit: "Create wands",
	prereqs: {
		level: 5
	},
	spell_related: true,
	conditional: true
},{
	name: "Craft Wondrous Item",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can create a wide variety of magic items, such as a crystal ball or a flying carpet.",
	detail: "You can create a wide variety of magic items, such as a crystal ball or a flying carpet. <p class=sub><b>Prerequisite</b>: Caster level 3rd.<p class=sub><b>Benefit</b>: You can create any wondrous item whose prerequisites you meet (see the <i>Dungeon Master&apos;s Guide</i> for prerequisites and other information on wondrous items). Enchanting a wondrous item takes one day for each 1,000 gp in its price. To enchant a wondrous item, you must spend 1/25 of the item&apos;s price in XP and use up raw materials costing half of this price. <p class=sub>You can also mend a broken wondrous item if it is one that you could make. Doing so costs half the XP, half the raw materials, and half the time it would take to craft that item in the first place. <p class=sub>Some wondrous items incur extra costs in material components or XP, as noted in their descriptions. These costs are in addition to those derived from the item&apos;s base price. You must pay such a cost to create an item or to mend a broken one. ",
	benefit: "Create wondrous items",
	prereqs: {
		level: 3
	},
	spell_related: true,
	conditional: true
},{
	name: "Deceitful",
	tags: ["pathfinder"],
	type: "feat",
	description: "You have a knack for disguising the truth.",
	detail: "You have a knack for disguising the truth. <p class=sub><b>Benefit</b>: You get a +2 bonus on all Disguise checks and Forgery checks.",
	benefit: "+2 bonus on Disguise and Forgery checks",
	skills: {
		"Disguise" : 2,
		"Forgery" : 2
	},
	prereqs: {}
},{
	name: "Deflect Arrows",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can deflect incoming arrows, as well as crossbow bolts, spears, and other projectile or thrown weapons.",
	detail: "You can deflect incoming arrows, as well as crossbow bolts, spears, and other projectile or thrown weapons. <p class=sub><b>Prerequisites</b>: Dex 13, Improved Unarmed Strike. <p class=sub><b>Benefit</b>: You must have at least one hand free (holding nothing) to use this feat. Once per round when you would normally be hit with a ranged weapon, you may deflect it so that you take no damage from it. You must be aware of the attack and not flat-footed. <p class=sub>Attempting to deflect a ranged weapon doesn&apos;t count as an action. Unusually massive ranged weapons, such as boulders hurled by giants, and ranged attacks generated by spell effects, such as <i>Melf&apos;s acid arrow</i>, can&apos;t be deflected. <p class=sub><b>Special</b>: A monk may select Deflect Arrows as a bonus feat at 2nd level, even if she does not meet the prerequisites. <p class=sub>A fighter may select Deflect Arrows as one of his fighter bonus feats (see page 38). ",
	benefit: "Deflect one ranged attack per round",
	prereqs: {
		abilities: {
			"Dex": 13
		},
		feats: ["Improved Unarmed Strike"]
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Deft Hands",
	tags: ["pathfinder"],
	type: "feat",
	description: "You have exceptional manual dexterity.",
	detail: "You have exceptional manual dexterity. <p class=sub><b>Benefit</b>: You get a +2 bonus on all Sleight of Hand checks and Use Rope checks. ",
	benefit: "+2 bonus on Sleight of Hand and Use Rope checks",
	skills: {
		"Sleight of Hand" : 2,
		"Use Rope" : 2
	},
	prereqs: {}
},{
	name: "Diehard",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can remain conscious after attacks that would fell others.",
	detail: "You can remain conscious after attacks that would fell others. <p class=sub><b>Prerequisite</b>: Endurance. <p class=sub><b>Benefit</b>: When reduced to between -1 and -9 hit points, you automatically become stable. You don&apos;t have to roll d% to see if you lose 1 hit point each round. <p class=sub>When reduced to negative hit points, you may choose to act as if you were disabled, rather than dying. You must make this decision as soon as you are reduced to negative hit points (even if it isn&apos;t your turn). If you do not choose to act as if you were disabled, you immediately fall unconscious. <p class=sub>When using this feat, you can take either a single move or standard action each turn, but not both, and you cannot take a full-round action. You can take a move action without further injuring yourself, but if you perform any standard action (or any other action the DM deems as strenuous, including some free actions, such as casting a quickened spell) you take 1 point of damage after completing the act. If you reach -10 hit points, you immediately die. <p class=sub><b>Normal</b>: A character without this feat who is reduced to between -1 and -9 hit points is unconscious and dying, as described in Chapter 8: Combat.",
	benefit: "Remain conscious at -1 to -9 hp",
	prereqs: {
		feats: ["Endurance"]
	},
	conditional: true
},{
	name: "Diligent",
	tags: ["pathfinder"],
	type: "feat",
	description: "Your meticulousness allows you to analyze minute details that others miss.",
	detail: "Your meticulousness allows you to analyze minute details that others miss. <p class=sub><b>Benefit</b>: You get a +2 bonus on all Appraise checks and Decipher Script checks.",
	benefit: "+2 bonus on Appraise and Decipher Script checks",
	skills: {
		"Appraise" : 2,
		"Decipher Script" : 2
	},
	prereqs: {}
},{
	name: "Dodge",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are adept at dodging blows.",
	detail: "You are adept at dodging blows. <p class=sub><b>Prerequisite</b>: Dex 13. <p class=sub><b>Benefit</b>: During your action, you designate an opponent and receive a +1 dodge bonus to Armor Class against attacks from that opponent. You can select a new opponent on any action. <p class=sub>A condition that makes you lose your Dexterity bonus to Armor Class (if any) also makes you lose dodge bonuses. Also, dodge bonuses (such as this one and a dwarf&apos;s racial bonus on dodge attempts against giants) stack with each other, unlike most other types of bonuses. <p class=sub><b>Special</b>: A fighter may select Dodge as one of his fighter bonus feats (see page 38).",
	benefit: "+1 dodge bonus to AC against selected target",
	prereqs: {
		abilities: {
			"Dex": 13
		}
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Empower Spell",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can cast spells to greater effect.",
	detail: "You can cast spells to greater effect.<p class=sub><b>Benefit</b>: All variable, numeric effects of an empowered spell are increased by one-half. An empowered spell deals half again as much damage as normal, cures half again as many hit points, affects half again as many targets, and so forth, as appropriate. For example, an empowered <i>magic missile</i> deals 1-1/2 times its normal damage (roll 1d4+1 and multiply the result by 1-1/2 for each missile). Saving throws and opposed rolls (such as the one you make when you cast <i>dispel magic</i>) are not affected, nor are spells without random variables. An empowered spell uses up a spell slot two levels higher than the spell&apos;s actual level. ",
	benefit: "Increase spell's variable, numeric effects by 50%",
	prereqs: {},
	spell_related: true,
	conditional: true
},{
	name: "Endurance",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are capable of amazing feats of stamina.",
	detail: "You are capable of amazing feats of stamina. <p class=sub><b>Benefit</b>: You gain a +4 bonus on the following checks and saves: Swim checks made to resist nonlethal damage (see page 84), Constitution checks made to continue running (see page 144), Constitution checks made to avoid nonlethal damage from a forced march (see page 164), Constitution checks made to hold your breath (see page 84), Constitution checks made to avoid nonlethal damage from starvation or thirst (see page 304 of the  <i>Dungeon Master&apos;s Guide</i>), Fortitude saves made to avoid nonlethal damage from hot or cold environments (see pages 302 and 303 of the <i>Dungeon Master&apos;s Guide</i>), and Fortitude saves made to resist damage from suffocation (see page 304 of the  <i>Dungeon Master&apos;s</i> Guide). Also, you may sleep in light or medium armor without becoming fatigued. <p class=sub><b>Normal</b>: A character without this feat who sleeps in medium or heavier armor is automatically fatigued the next day. <p class=sub><b>Special</b>: A ranger automatically gains Endurance as a bonus feat at 3rd level (see page 48). He need not select it.",
	benefit: "+4 bonus on checks or saves to resist nonlethal damage",
	prereqs: {},
	classes: {
		"Ranger": 3
	},
	conditional: true
},{
	name: "Enlarge Spell",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can cast spells farther than normal.",
	detail: "You can cast spells farther than normal. <p class=sub><b>Benefit</b>: You can alter a spell with a range of close, medium, or long to increase its range by 100%. An enlarged spell with a range of close now has a range of 50 ft. + 5 ft./level, while medium-range spells have a range of 200 ft. + 20 ft./level and long-range spells have a range of 800 ft. + 80 ft./level. An enlarged spell uses up a spell slot one level higher than the spell&apos;s actual level. <p class=sub>Spells whose ranges are not defined by distance, as well as spells whose ranges are not close, medium, or long, do not have increased ranges.",
	benefit: "Double spell's range",
	prereqs: {},
	spell_related: true,
	conditional: true
},{
	name: "Eschew Materials",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can cast spells without relying on material components.",
	detail: "You can cast spells without relying on material components. <p class=sub><b>Benefit</b>: You can cast any spell that has a material component costing 1 gp or less without needing that component. (The casting of the spell still provokes attacks of opportunity as normal.) If the spell requires a material component that costs more than 1 gp, you must have the material component at hand to cast the spell, just as normal.",
	benefit: "Cast spells without material components",
	prereqs: {},
	spell_related: true,
	conditional: true
},{
	name: "Exotic Weapon Proficiency",
	tags: ["pathfinder"],
	type: "feat",
	description: "You understand how to use an exotic weapon (eg. dire flail or shuriken) in combat.",
	detail: "Choose a type of exotic weapon, such as dire flail or shuriken (see Table 7-5: Weapons, page 116, for a list of exotic weapons). You understand how to use that type of exotic weapon in combat. <p class=sub><b>Prerequisite</b>: Base attack bonus +1 (plus Str 13 for bastard sword or dwarven waraxe). <p class=sub><b>Benefit</b>: You make attack rolls with the weapon normally. <p class=sub><b>Normal</b>: A character who uses a weapon with which he or she is not proficient takes a -4 penalty on attack rolls. <p class=sub><b>Special</b>: You can gain Exotic Weapon Proficiency multiple times. Each time you take the feat, it applies to a new type of exotic weapon. Proficiency with the bastard sword or the dwarven waraxe has an additional prerequisite of Str 13. <p class=sub>A fighter may select Exotic Weapon Proficiency as one of his fighter bonus feats (see page 38) ",
	benefit: "No penalty on attacks with specific exotic weapon",
	prereqs: {
		base_attack_bonus: 1,
		feats: ["Martial Weapon Proficiency"]
	},
	multi: {
		type: "weapons",
		db: "weapons",
		filter: { category: "exotic" }
	},
	attack: "if(weapon.category == 'exotic') { attacks.weapon_proficiency = 0; } return attacks;",
	fighter_bonus_feat: true
},{
	name: "Extend Spell",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can cast spells that last longer than normal.",
	detail: "You can cast spells that last longer than normal. <p class=sub><b>Benefit</b>: An extended spell lasts twice as long as normal. A spell with a duration of concentration, instantaneous, or permanent is not affected by this feat. An extended spell uses up a spell slot one level higher than the spell&apos;s actual level. ",
	benefit: "Double spell's duration",
	prereqs: {},
	spell_related: true,
	conditional: true
},{
	name: "Extra Turning",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can turn or rebuke creatures more often than normal.",
	detail: "You can turn or rebuke creatures more often than normal. <p class=sub><b>Prerequisite</b>: Ability to turn or rebuke creatures. <p class=sub><b>Benefit</b>: Each time you take this feat, you can use your ability to turn or rebuke creatures four more times per day than normal. If you have the ability to turn or rebuke more than one kind of creature (such as a good-aligned cleric with access to the Fire domain, who can turn undead and water creatures and can also rebuke fire creatures), each of your turning or rebuking abilities gains four additional uses per day. <p class=sub><b>Normal</b>: Without this feat, a character can typically turn or rebuke undead (or other creatures) a number of times per day equal to 3 + his or her Charisma modifier. <p class=sub><b>Special</b>: You can gain Extra Turning multiple times. Its effects stack. Each time you take the feat, you can use each of your turning or rebuking abilities four additional times per day. ",
	prereqs: {
		classes: {
			"Cleric": 1,
			"Paladin": 1
		}
	},
	benefit: "Can turn or rebuke 4 more times per day",
	turn: "turn += 4; return turn;"
//	multi: {
//		data: "count"
//	}
},{
	name: "Far Shot",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can get greater distance out of a ranged weapon.",
	detail: "You can get greater distance out of a ranged weapon. <p class=sub><b>Prerequisite</b>: Point Blank Shot. <p class=sub><b>Benefit</b>: When you use a projectile weapon, such as a bow, its range increment increases by one-half (multiply by 1-1/2). When you use a thrown weapon, its range increment is doubled. <p class=sub><b>Special</b>: A fighter may select Far Shot as one of his fighter bonus feats (see page 38).",
	benefit: "Increase range increment by 50% or 100%",
	prereqs: {
		feats: ["Point Blank Shot"]
	},
	fighter_bonus_feat: true
},{
	name: "Forge Ring",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can create magic rings, which have varied magical effects.",
	detail: "You can create magic rings, which have varied magical effects. <p class=sub><b>Prerequisite</b>: Caster level 12th. <p class=sub><b>Benefit</b>: You can create any ring whose prerequisites you meet (see the  <i>Dungeon Master&apos;s Guide</i> for prerequisites and other information on rings). Crafting a ring takes one day for each 1,000 gp in its base price. To craft a ring, you must spend 1/25 of its base price in XP and use up raw materials costing one-half of its base price. <p class=sub>You can also mend a broken ring if it is one that you could make. Doing so costs half the XP, half the raw materials, and half the time it would take to forge that ring in the first place. <p class=sub>Some magic rings incur extra costs in material components or XP, as noted in their descriptions. For example, a ring of three wishes costs 15,000 XP in addition to costs derived from its base price (as many XP as it costs to cast wish three times). You must pay such a cost to forge such a ring or to mend a broken one.",
	benefit: "Create magic rings",
	prereqs: {
		level: 12
	},
	spell_related: true,
	conditional: true
},{
	name: "Great Cleave",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can wield a melee weapon with such power that you can strike multiple times when you fell your foes.",
	detail: "You can wield a melee weapon with such power that you can strike multiple times when you fell your foes. <p class=sub><b>Prerequisites</b>: Str 13, Cleave, Power Attack, base attack bonus +4. <p class=sub><b>Benefit</b>: This feat works like Cleave, except that there is no limit to the number of times you can use it per round. <p class=sub><b>Special</b>: A fighter may select Great Cleave as one of his fighter bonus feats (see page 38). ",
	benefit: "No limit to cleave attacks each round",
	prereqs: {
		feats: ["Cleave"],
		base_attack_bonus: 4
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Great Fortitude",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are tougher than normal.",
	detail: "You are tougher than normal. <p class=sub><b>Benefit</b>: You get a +2 bonus on all Fortitude saving throws. ",
	benefit: "+2 bonus on Fortitude saves",
	fort: "fort += 2; return fort;",
	prereqs: {}
},{
	name: "Greater Spell Focus",
	tags: ["pathfinder"],
	type: "feat",
	description: "Your spells of a given school to which you have already applied the Spell Focus feat are now even more potent than before.",
	detail: "Choose a school of magic to which you already have applied the Spell Focus feat. Your spells of that school are now even more potent than before. <p class=sub><b>Benefit</b>: Add +1 to the Difficulty Class for all saving throws against spells from the school of magic you select. This bonus stacks with the bonus from Spell Focus. <p class=sub><b>Special</b>: You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new school of magic to which you already have applied the Spell Focus feat. ",
	benefit: "+1 bonus on save DCs against specific school of magic",
	multi: {
		type: "schools",
		feats: ["Spell Focus"]
	},
	prereqs: {
		feats: ["Spell Focus"]
	},
	spell_related: true,
	conditional: true
},{
	name: "Greater Spell Penetration",
	tags: ["pathfinder"],
	type: "feat",
	description: "Your spells are remarkably potent, breaking through spell resistance more readily than normal.",
	detail: "Your spells are remarkably potent, breaking through spell resistance more readily than normal.<p class=sub><b>Prerequisite</b>: Spell Penetration. <p class=sub><b>Benefit</b>: You get a +2 bonus on caster level checks (1d20 + caster level) made to overcome a creature&apos;s spell resistance. This bonus stacks with the one from Spell Penetration (see page 100).",
	benefit: "+4 to caster level checks to defeat spell resistance",
	prereqs: {
		feats: ["Spell Penetration"]
	},
	spell_related: true,
	conditional: true
},{
	name: "Greater Two-weapon Fighting",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are a master at fighting two-handed.",
	detail: "You are a master at fighting two-handed. <p class=sub><b>Prerequisites</b>: Dex 19, Improved Two-Weapon Fighting, Two-Weapon Fighting, base attack bonus +11. <p class=sub><b>Benefit</b>: You get a third attack with your off-hand weapon, albeit at a -10 penalty. <p class=sub><b>Special</b>: A fighter may select Greater Two-Weapon Fighting as one of his fighter bonus feats (see page 38). <p class=sub>An 11th-level ranger who has chosen the two-weapon combat style is treated as having Greater Two-Weapon Fighting, even if he does not have the prerequisites for it, but only when he is wearing light or no armor (see page 48). ",
	benefit: "Gain third off-hand attack",
	prereqs: {
		abilities: {
			"Dex": 19
		},
		feats: ["Improved Two-Weapon Fighting"],
		base_attack_bonus: 11
	}
},{
	name: "Greater Weapon Focus",
	tags: ["pathfinder"],
	type: "feat",
	description: "Improves your proficiency with a weapon for which you have selected Weapon Focus.",
	detail: "Choose one type of weapon, such as greataxe, for which you have already selected Weapon Focus. You can also choose unarmed strike or grapple as your weapon for purposes of this feat. You are especially good at using this weapon. <p class=sub><b>Prerequisites</b>: Proficiency with selected weapon, Weapon Focus with selected weapon, fighter level 8th. <p class=sub><b>Benefit</b>: You gain a +1 bonus on all attack rolls you make using the selected weapon. This bonus stacks with other bonuses on attack rolls, including the one from Weapon Focus (see below). <p class=sub><b>Special</b>: You can gain Greater Weapon Focus multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon. <p class=sub>A fighter must have Greater Weapon Focus with a given weapon to gain the Greater Weapon Specialization feat for that weapon.  <p class=sub>A fighter may select Greater Weapon Focus as one of his fighter bonus feats (see page 38).",
	benefit: "+2 bonus on attack rolls with selected weapon",
	attack: "if(chardata.feats({ feat_name: 'Greater Weapon Focus' }).first().multi.indexOf(weapon.name) > -1) { for(var i in attacks.base) { attacks.base[i] = parseInt(attacks.base[i]) + 1; }} return attacks;",
	multi: {
		type: "weapons",
		feats: ["Weapon Focus"]
	},
	prereqs: {
		feats: ["Weapon Focus"],
		classes: {
			"Fighter": 8
		}
	},
	fighter_bonus_feat: true
},{
	name: "Greater Weapon Specialization",
	tags: ["pathfinder"],
	type: "feat",
	description: "Increases damage for a weapon for which you have selected Weapon Specialization.",
	detail: "Choose one type of weapon, such as greataxe, for which you have already selected Weapon Specialization. You can also choose unarmed strike or grapple as your weapon for purposes of this feat. You deal extra damage when using this weapon. <p class=sub><b>Prerequisites</b>: Proficiency with selected weapon, Greater Weapon Focus with selected weapon, Weapon Focus with selected weapon, Weapon Specialization with selected weapon, fighter level 12th. <p class=sub><b>Benefit</b>: You gain a +2 bonus on all damage rolls you make using the selected weapon. This bonus stacks with other bonuses on damage rolls, including the one from Weapon Specialization (see below). <p class=sub><b>Special</b>: You can gain Greater Weapon Specialization multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon. <p class=sub>A fighter may select Greater Weapon Specialization as one of his fighter bonus feats (see page 38).",
	benefit: "+4 bonus on damage rolls with selected weapon",
	damage: "if(chardata.feats({ feat_name: 'Greater Weapon Specialization' }).first().multi.indexOf(weapon.name) > -1) { for(var i in damages) { damages[i].mod += 2; } } return damages;",
	multi: {
		type: "weapons",
		feats: ["Weapon Specialization"]
		// feats: {
		// 	type: intersection,
		// 	from: ["Weapon Specialization", "Greater Weapon Focus"]
		// }
	},
	prereqs: {
		feats: ["Weapon Specialization", "Greater Weapon Focus"],
		classes: {
			"Fighter": 12
		}
	},
	fighter_bonus_feat: true
},{
	name: "Heighten Spell",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can cast a spell as if it were a higher-level spell than it actually is.",
	detail: "You can cast a spell as if it were a higher-level spell than it actually is. <p class=sub><b>Benefit</b>: A heightened spell has a higher spell level than normal (up to a maximum of 9th level). Unlike other metamagic feats, Heighten Spell actually increases the effective level of the spell that it modifies. All effects dependent on spell level (such as saving throw DCs and ability to penetrate a lesser globe of invulnerability) are calculated according to the heightened level. The heightened spell is as difficult to prepare and cast as a spell of its effective level. For example, a cleric could prepare  hold person as a 4th-level spell (instead of a 2nd-level spell), and it would in all ways be treated as a 4th-level spell. ",
	benefit: "Cast spells as higher level",
	prereqs: {},
	spell_related: true,
	conditional: true
},{
	name: "Improved Bull Rush",
	tags: ["pathfinder"],
	type: "feat",
	description: "You know how to push opponents back.",
	detail: "You know how to push opponents back. <p class=sub><b>Prerequisites</b>: Str 13, Power Attack. <p class=sub><b>Benefit</b>: When you perform a bull rush (page 154), you do not provoke an attack of opportunity from the defender. You also gain a +4 bonus on the opposed Strength check you make to push back the defender. <p class=sub><b>Special</b>: A fighter may select Improved Bull Rush as one of his fighter bonus feats (see page 38). ",
	benefit: "+4 bonus on bull rush attempts; no attack of opportunity",
	prereqs: {
		feats: ["Power Attack"]
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Improved Counterspell",
	tags: ["pathfinder"],
	type: "feat",
	description: "You understand the nuances of magic to such an extent that you can counter your opponent&apos;s spells with great efficiency.",
	detail: "You understand the nuances of magic to such an extent that you can counter your opponent&apos;s spells with great efficiency. <p class=sub><b>Benefit</b>: When counterspelling, you may use a spell of the same school that is one or more spell levels higher than the target spell. <p class=sub><b>Normal</b>: Without this feat, you may counter a spell only with the same spell or with a spell specifically designated as countering the target spell.",
	benefit: "Counterspell with spell of same school",
	prereqs: {},
	spell_related: true,
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Improved Critical",
	tags: ["pathfinder"],
	type: "feat",
	description: "For one type of weapon, you know how to hit where it hurts.",
	detail: "Choose one type of weapon, such as longsword or greataxe. With that weapon, you know how to hit where it hurts. <p class=sub><b>Prerequisite</b>: Proficient with weapon, base attack bonus +8. <p class=sub><b>Benefit</b>: When using the weapon you selected, your threat range is doubled. For example, a longsword usually threatens a critical hit on a roll of 19-20 (two numbers). If a character using a longsword has Improved Critical (longsword), the threat range becomes 17-20 (four numbers). <p class=sub><b>Special</b>: You can gain Improved Critical multiple times. The effects do not stack. Each time you take the feat, it applies to a new type of weapon. <p class=sub>This effect doesn&apos;t stack with any other effect that expands the threat range of a weapon (such as the keen edge spell). <p class=sub>A fighter may select Improved Critical as one of his fighter bonus feats (see page 38). ",
	benefit: "Double threat range of weapon",
	prereqs: {
		base_attack_bonus: 8
	},
	multi: {
		type: "weapons",
		feats: ["Simple Weapon Proficiency", "Martial Weapon Proficiency", "Exotic Weapon Proficiency"]
	},
	critical: "	var multiplier = critical.substring(critical.indexOf('x')); if(critical[0] == 'x') { critical = '19-20/' + critical;	} else { var lower = parseInt(critical.substring(0, critical.indexOf('-'))); var upper = parseInt(critical.substring(critical.indexOf('-') + 1, critical.indexOf('/'))); var threat_range = ((upper - lower) * 2) + 1; critical = (20 - threat_range) + '-20/' + multiplier; } return critical;"
},{
	name: "Improved Disarm",
	tags: ["pathfinder"],
	type: "feat",
	description: "You know how to disarm opponents in melee combat.",
	detail: "You know how to disarm opponents in melee combat. <p class=sub><b>Prerequisites</b>: Int 13, Combat Expertise. <p class=sub><b>Benefit</b>: You do not provoke an attack of opportunity when you attempt to disarm an opponent, nor does the opponent have a chance to disarm you. You also gain a +4 bonus on the opposed attack roll you make to disarm your opponent. <p class=sub><b>Normal</b>: See the normal disarm rules, page 155. <p class=sub><b>Special</b>: A fighter may select Improved Disarm as one of his fighter bonus feats (see page 38). <p class=sub>A monk may select Improved Disarm as a bonus feat at 6th level, even if she does not meet the prerequisites.",
	benefit: "+4 bonus on disarm attempts; no attack of opportunity",
	prereqs: {
		feats: ["Combat Expertise"]
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Improved Feint",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are skilled at misdirecting your opponent&apos;s attention in combat.",
	detail: "You are skilled at misdirecting your opponent&apos;s attention in combat. <p class=sub><b>Prerequisites</b>: Int 13, Combat Expertise. <p class=sub><b>Benefit</b>: You can make a Bluff check to feint in combat as a move action. <p class=sub><b>Normal</b>: Feinting in combat is a standard action. <p class=sub>A fighter may select Improved Feint as one of his fighter bonus feats (see page 38).",
	benefit: "Feint in combat as move action",
	prereqs: {
		feats: ["Combat Expertise"]
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Improved Grapple",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are skilled at grappling opponents.",
	detail: "You are skilled at grappling opponents. <p class=sub><b>Prerequisites</b>: Dex 13, Improved Unarmed Strike. <p class=sub><b>Benefit</b>: You do not provoke an attack of opportunity when you make a touch attack to start a grapple. You also gain a +4 bonus on all grapple checks, regardless of whether you started the grapple. <p class=sub><b>Normal</b>: Without this feat, you provoke an attack of opportunity when you make a touch attack to start a grapple. <p class=sub><b>Special</b>: A fighter may select Improved Grapple as one of his fighter bonus feats (see page 38). <p class=sub>A monk may select Improved Grapple as a bonus feat at 1st level, even if she does not meet the prerequisites.",
	benefit: "+4 bonus on grapple checks; no attack of opportunity",
	grapple: "for(var i in grapples) { grapples[i].base += 4 } return grapples;",
	prereqs: {
		abilities: {
			"Dex": 13
		},
		feats: ["Improved Unarmed Strike"]
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Improved Initiative",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can react more quickly than normal in a fight.",
	detail: "You can react more quickly than normal in a fight. <p class=sub><b>Benefit</b>: You get a +4 bonus on initiative checks. <p class=sub><b>Special</b>: A fighter may select Improved Initiative as one of his fighter bonus feats (see page 38).",
	benefit: "+4 bonus on initiative checks",
	init: "init += 4; return init;",
	prereqs: {},
	fighter_bonus_feat: true
},{
	name: "Improved Overrun",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are skilled at knocking down opponents.",
	detail: "You are skilled at knocking down opponents. <p class=sub><b>Prerequisites</b>: Str 13, Power Attack. <p class=sub><b>Benefit</b>: When you attempt to overrun an opponent, the target may not choose to avoid you. You also gain a +4 bonus on your Strength check to knock down your opponent. <p class=sub><b>Normal</b>: Without this feat, the target of an overrun can choose to avoid you or to block you. <p class=sub><b>Special</b>: A fighter may select Improved Overrun as one of his fighter bonus feats (see page 38). ",
	benefit: "+4 bonus on overrun attempts; no attack of opportunity",
	prereqs: {
		feats: ["Power Attack"]
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Improved Precise Shot",
	tags: ["pathfinder"],
	type: "feat",
	description: "Your ranged attacks can ignore the effects of cover or concealment.",
	detail: "Your ranged attacks can ignore the effects of cover or concealment. <p class=sub><b>Prerequisites</b>: Dex 19, Point Blank Shot, Precise Shot, base attack bonus +11. <p class=sub><b>Benefit</b>: Your ranged attacks ignore the AC bonus granted to targets by anything less than total cover, and the miss chance granted to targets by anything less than total concealment. Total cover and total concealment provide their normal benefits against your ranged attacks. <p class=sub>In addition, when you shoot or throw ranged weapons at a grappling opponent, you automatically strike at the opponent you have chosen. <p class=sub><b>Normal</b>: See pages 150-152 for rules on the effects of cover and concealment. Without this feat, a character who shoots or throws a ranged weapon at a target involved in a grapple must roll randomly to see which grappling combatant the attack strikes. <p class=sub><b>Special</b>: A fighter may select Improved Precise Shot as one of his fighter bonus feats (see page 38). <p class=sub>An 11th-level ranger who has chosen the archery combat style is treated as having Improved Precise Shot, even if he does not have the prerequisites for it, but only when he is wearing light or no armor (see page 48).",
	benefit: "Ignore less than total cover/concealment on ranged attack",
	prereqs: {
		abilities: {
			"Dex": 19
		},
		feats: ["Precise Shot"],
		base_attack_bonus: 11
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Improved Shield Bash",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can bash with a shield while retaining its shield bonus to your Armor Class.",
	detail: "You can bash with a shield while retaining its shield bonus to your Armor Class. <p class=sub><b>Prerequisite</b>: Shield Proficiency. <p class=sub><b>Benefit</b>: When you perform a shield bash, you may still apply the shield&apos;s shield bonus to your AC. <p class=sub><b>Normal</b>: Without this feat, a character who performs a shield bash loses the shield&apos;s shield bonus to AC until his or her next turn. <p class=sub><b>Special</b>: A fighter may select Improved Shield Bash as one of his fighter bonus feats (see page 38).",
	benefit: "Retain shield bonus to AC when shield bashing",
	prereqs: {
		feats: ["Shield Proficiency"]
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Improved Sunder",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are skilled at attacking your opponents&apos; weapons and shields, as well as other objects.",
	detail: "You are skilled at attacking your opponents&apos; weapons and shields, as well as other objects. <p class=sub><b>Prerequisites</b>: Str 13, Power Attack. <p class=sub><b>Benefit</b>: When you strike at an object held or carried by an opponent (such as a weapon or shield), you do not provoke an attack of opportunity (see Sunder, page 158). <p class=sub>You also gain a +4 bonus on any attack roll made to attack an object held or carried by another character. <p class=sub><b>Normal</b>: Without this feat, you provoke an attack of opportunity when you strike at an object held or carried by another character. <p class=sub><b>Special</b>: A fighter may select Improved Sunder as one of his fighter bonus feats (see page 38).",
	benefit: "+4 bonus on sunder attempts; no attack of opportunity",
	prereqs: {
		feats: ["Power Attack"]
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Improved Trip",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are trained not only in tripping opponents safely but also in following through with an attack.",
	detail: "You are trained not only in tripping opponents safely but also in following through with an attack. <p class=sub><b>Prerequisites</b>: Int 13, Combat Expertise. <p class=sub><b>Benefit</b>: You do not provoke an attack of opportunity when you attempt to trip an opponent while you are unarmed. You also gain a +4 bonus on your Strength check to trip your opponent. <p class=sub>If you trip an opponent in melee combat, you immediately get a melee attack against that opponent as if you hadn&apos;t used your attack for the trip attempt. For example, at 11th level, Tordek gets three attacks at bonuses of +11, +6, and +1. In the current round, he attempts to trip his opponent. His first attempt fails (using up his first attack). His second attempt succeeds, and he immediately makes a melee attack against his opponent with a bonus of +6. Finally, he takes his last attack at a bonus of +1. <p class=sub><b>Normal</b>: Without this feat, you provoke an attack of opportunity when you attempt to trip an opponent while you are unarmed. See Trip, page 158. <p class=sub><b>Special</b>: At 6th level, a monk may select Improved Trip as a bonus feat, even if she does not have the prerequisites. <p class=sub>A fighter may select Improved Trip as one of his fighter bonus feats (see page 38). ",
	benefit: "+4 bonus on trip attempts; no attack of opportunity",
	prereqs: {
		feats: ["Combat Expertise"]
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Improved Turning",
	tags: ["pathfinder"],
	type: "feat",
	description: "Your turning or rebuking attempts are more powerful than normal.",
	detail: "Your turning or rebuking attempts are more powerful than normal. <p class=sub><b>Prerequisite</b>: Ability to turn or rebuke creatures. <p class=sub><b>Benefit</b>: You turn or rebuke creatures as if you were one level higher than you are in the class that grants you the ability.",
	benefit: "+1 level for turning checks",
	prereqs: {
		classes: {
			"Cleric": 1,
			"Paladin": 1
		}
	}
},{
	name: "Improved Two-Weapon Fighting",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are an expert in fighting two-handed.",
	detail: "You are an expert in fighting two-handed. <p class=sub><b>Prerequisites</b>: Dex 17, Two-Weapon Fighting, base attack bonus +6. <p class=sub><b>Benefit</b>: In addition to the standard single extra attack you get with an off-hand weapon, you get a second attack with it, albeit at a -5 penalty (see Table 8-10, page 160). <p class=sub><b>Normal</b>: Without this feat, you can only get a single extra attack with an off-hand weapon. <p class=sub><b>Special</b>: A fighter may select Improved Two-Weapon Fighting as one of his fighter bonus feats. <p class=sub>A 6th-level ranger who has chosen the two-weapon combat style is treated as having Improved Two-Weapon Fighting, even if he does not have the prerequisites for it, but only when he is wearing light or no armor (see page 48).",
	benefit: "Gain second off-hand attack",
	prereqs: {
		abilities: {
			"Dex": 17
		},
		feats: ["Two-Weapon Fighting"],
		base_attack_bonus: 6
	},
	fighter_bonus_feat: true
},{
	name: "Improved Unarmed Strike",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are skilled at fighting while unarmed.",
	detail: "You are skilled at fighting while unarmed. <p class=sub><b>Benefit</b>: You are considered to be armed even when unarmed �that is, you do not provoke attacks or opportunity from armed opponents when you attack them while unarmed. However, you still get an attack of opportunity against any opponent who makes an unarmed attack on you. <p class=sub>In addition, your unarmed strikes can deal lethal or nonlethal damage, at your option. <p class=sub><b>Normal</b>: Without this feat, you are considered unarmed when attacking with an unarmed strike, and you can deal only nonlethal damage with such an attack. <p class=sub><b>Special</b>: A monk automatically gains Improved Unarmed Strike as a bonus feat at 1st level. She need not select it. <p class=sub>A fighter may select Improved Unarmed Strike as one of his fighter bonus feats (see page 38).",
	benefit: "Considered armed even when unarmed",
	prereqs: {},
	fighter_bonus_feat: true
},{
	name: "Investigator",
	tags: ["pathfinder"],
	type: "feat",
	description: "You have a knack for finding information.",
	detail: "You have a knack for finding information. <p class=sub><b>Benefit</b>: You get a +2 bonus on all Gather Information checks and Search checks.",
	benefit: "+2 bonus on Gather Information and Search checks",
	skills: {
		"Gather Information": 2,
		"Search": 2
	},
	prereqs: {}
},{
	name: "Iron Will",
	tags: ["pathfinder"],
	type: "feat",
	description: "You have a stronger will than normal.",
	detail: "You have a stronger will than normal. <p class=sub><b>Benefit</b>: You get a +2 bonus on all Will saving throws. ",
	benefit: "+2 bonus on Will saves",
	will: "will += 2; return will;",
	prereqs: {}
},{
	name: "Leadership",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are the sort of person others want to follow, and you have done some work attempting to recruit cohorts and followers.",
	detail: "You are the sort of person others want to follow, and you have done some work attempting to recruit cohorts and followers. <p class=sub><b>Prerequisite</b>: Character level 6th. <p class=sub><b>Benefit</b>: You can attract loyal companions and devoted followers, subordinates who assist you. Your DM has information on what sort of cohort and how many followers you can recruit. <p class=sub><b>Special</b>: Check with your DM before selecting this feat, and work with your DM to determine an appropriate cohort and followers for your character (the <i>Dungeon Master&apos;s Guide</i> has more information on cohorts and followers).",
	benefit: "Attract cohort and followers",
	prereqs: {
		level: 6
	},
	conditional: true
},{
	name: "Lightning Reflexes",
	tags: ["pathfinder"],
	type: "feat",
	description: "You have faster than normal reflexes.",
	detail: "You have faster than normal reflexes. <p class=sub><b>Benefit</b>: You get a +2 bonus on all Reflex saving throws. ",
	benefit: "+2 bonus on Reflex saves",
	ref: "ref += 2; return ref;",
	prereqs: {}
},{
	name: "Magical Aptitude",
	tags: ["pathfinder"],
	type: "feat",
	description: "You have a knack for magical endeavors.",
	detail: "You have a knack for magical endeavors. <p class=sub><b>Benefit</b>: You get a +2 bonus on all Spellcraft checks and Use Magic Device checks",
	benefit: "+2 bonus on all Spellcraft and Use Magic Device checks",
	prereqs: {}
},{
	name: "Manyshot",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can fire multiple arrows simultaneously against a nearby target.",
	detail: "You can fire multiple arrows simultaneously against a nearby target. <p class=sub><b>Prerequisites</b>: Dex 17, Point Blank Shot, Rapid Shot, base attack bonus +6 <p class=sub><b>Benefit</b>: As a standard action, you may fire two arrows at a single opponent within 30 feet. Both arrows use the same attack roll (with a -4 penalty) to determine success and deal damage normally (but see Special). <p class=sub>For every five points of base attack bonus you have above +6, you may add one additional arrow to this attack, to a maximum of four arrows at a base attack bonus of +16. However, each arrow after the second adds a cumulative -2 penalty on the attack roll (for a total penalty of -6 for three arrows and -8 for four). <p class=sub>Damage reduction and other resistances apply separately against each arrow fired. <p class=sub><b>Special</b>: Regardless of the number of arrows you fire, you apply precision-based damage (such as sneak attack damage) only once. If you score a critical hit, only the first arrow fired deals critical damage; all others deal regular damage. <p class=sub>A fighter may select Manyshot as one of his fighter bonus feats (see page 38). <p class=sub>A 6th-level ranger who has chosen the archery combat style is treated as having Manyshot even if he does not have the prerequisites for it, but only when he is wearing light or no armor (see page 48).",
	benefit: "Shoot two or more arrows simultaneously",
	prereqs: {
		abilities: {
			"Dex": 17
		},
		feats: ["Rapid Shot"],
		base_attack_bonus: 6
	},
	conditional: true,
	op: "if ($(this).attr('checked')) {if ($('#feat_54_conditional').attr('checked')) {$('#feat_54_conditional').removeAttr('checked');recalc_main_page();}for ( var i in chardata.weapons) {var weapon = weapons({ id: chardata.weapons[i].weapon_id }).first();if (weapon.subcategory == 'ranged') { var attacks = $('#weapon_' + i + '_att').text().split('/');var base_attack_bonus = parseInt(attacks[0]);var arrows = Math.min(Math.ceil(Math.abs(base_attack_bonus - 6) / 5), 4) + 1;var manyshot_penalty = (arrows * 2);var many_shot_atts = '';for (var j=0; j<arrows; j++) {many_shot_atts += pos(base_attack_bonus - manyshot_penalty);many_shot_atts += ((j+1) < arrows ? '/' : '');}$('#weapon_' + i + '_att').text(many_shot_atts);}}} else {recalc_main_page();}",
	fighter_bonus_feat: true
},{
	name: "Martial Weapon Proficiency",
	tags: ["pathfinder"],
	type: "feat",
	description: "You understand how to use a type of martial weapon (eg. longbow) in combat.",
	detail: "Choose a type of martial weapon, such as a longbow (see Table 7-5: Weapons, page 116, for a list of martial weapons). You understand how to use that type of martial weapon in combat. <p class=sub>Use this feat to expand the list of weapons with which you are proficient beyond the basic list in your class description. <p class=sub><b>Benefit</b>: You make attack rolls with the selected weapon normally. <p class=sub><b>Normal</b>: When using a weapon with which you are not proficient, you take a -4 penalty on attack rolls. <p class=sub><b>Special</b>: Barbarians, fighters, paladins, and rangers are proficient with all martial weapons. They need not select this feat. <p class=sub>You can gain Martial Weapon Proficiency multiple times. Each time you take the feat, it applies to a new type of weapon.  <p class=sub>A cleric who chooses the War domain automatically gains the Martial Weapon Proficiency feat related to his deity&apos;s favored weapon as a bonus feat, if the weapon is a martial one. He need not select it. <p class=sub>A sorcerer or wizard who casts the spell Tenser&apos;s transformation on himself or herself gains proficiency with all martial weapons for the duration of the spell.",
	benefit: "No penalty on attacks with specific martial weapon",
	classes: {
		"Barbarian": 1,
		"Fighter": 1,
		"Paladin": 1,
		"Ranger": 1
	},
	prereqs: {
		feats: ["Simple Weapon Proficiency"]
	},
	attack: "if(weapon.category == 'martial') { attacks.weapon_proficiency = 0;	} return attacks;",
	collection: {
		db: "weapons",
		filter: { category: "martial" }
	}
},{
	name: "Maximize Spell",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can cast spells to maximum effect.",
	detail: "You can cast spells to maximum effect. <p class=sub><b>Benefit</b>: All variable, numeric effects of a spell modified by this feat are maximized. A maximized spell deals maximum damage, cures the maximum number of hit points, affects the maximum number of targets, etc., as appropriate. For example, a maximized fireball deals 6 points of damage per caster level (up to a maximum of 60 points of damage at 10th caster level). Saving throws and opposed rolls (such as the one you make when you cast dispel magic) are not affected, nor are spells without random variables. A maximized spell uses up a spell slot three levels higher than the spell&apos;s actual level. <p class=sub><b>An empowered, maximized spell gains the separate benefits of each feat</b>: the maximum result plus one-half the normally rolled result. An empowered, maximized fireball cast by a 15th-level wizard deals points of damage equal to 60 plus one half of 10d6.",
	benefit: "Maximize spell's variable, numeric effects",
	prereqs: {},
	spell_related: true,
	conditional: true
},{
	name: "Mobility",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are skilled at dodging past opponents and avoiding blows.",
	detail: "You are skilled at dodging past opponents and avoiding blows. <p class=sub><b>Prerequisites</b>: Dex 13, Dodge. <p class=sub><b>Benefit</b>: You get a +4 dodge bonus to Armor Class against attacks of opportunity caused when you move out of or within a threatened area. A condition that makes you lose your Dexterity bonus to Armor Class (if any) also makes you lose dodge bonuses. Dodge bonuses (such as this one and a dwarf&apos;s racial bonus on dodge attempts against giants) stack with each other, unlike most types of bonuses. <p class=sub><b>Special</b>: A fighter may select Mobility as one of his fighter bonus feats (see page 38).",
	benefit: "+4 dodge bonus to AC against some attacks of opportunity",
	prereqs: {
		feats: ["Dodge"]
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Mounted Archery",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are skilled at using ranged weapons while mounted.",
	detail: "You are skilled at using ranged weapons while mounted. <p class=sub><b>Prerequisites</b>: Ride 1 rank, Mounted Combat. <p class=sub><b>Benefit</b>: The penalty you take when using a ranged weapon while mounted is halved: -2 instead of -4 if your mount is taking a double move, and -4 instead of -8 if your mount is running (see Mounted Combat, page 157). <p class=sub><b>Special</b>: A fighter may select Mounted Archery as one of his fighter bonus feats (see page 38).",
	benefit: "Half penalty for ranged attacks while mounted",
	prereqs: {
		feats: ["Mounted Combat"]
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Mounted Combat",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are skilled in mounted combat.",
	detail: "You are skilled in mounted combat. <p class=sub><b>Prerequisite</b>: Ride 1 rank. <p class=sub><b>Benefit</b>: Once per round when your mount is hit in combat, you may attempt a Ride check (as a reaction) to negate the hit. The hit is negated if your Ride check result is greater than the opponent&apos;s attack roll. (Essentially, the Ride check result becomes the mount&apos;s Armor Class if it&apos;s higher than the mount&apos;s regular AC.) <p class=sub><b>Special</b>: A fighter may select Mounted Combat as one of his fighter bonus feats (see page 38).",
	benefit: "Negate hits on mount with Ride check",
	prereqs: {
		skills: {
			"Ride": 1
		}
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Natural Spell",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can cast spells while in a wild shape.",
	detail: "You can cast spells while in a wild shape. <p class=sub><b>Prerequisites</b>: Wis 13, wild shape ability. <p class=sub><b>Benefit</b>: You can complete the verbal and somatic components of spells while in a wild shape. For example, while in the form of a hawk, you could substitute screeches and gestures with your talons for the normal verbal and somatic components of a spell. You can also use any material components or focuses you possess, even if such items are melded within your current form. This feat does not permit the use of magic items while you are in a form that could not ordinarily use them, and you do not gain the ability to speak while in a wild shape.",
	benefit: "Cast spells while in wild shape",
	spell_related: true,
	prereqs: {
		classes: {
			"Druid": 5
		},
		abilities: {
			"Wis": 13
		}
	},
	conditional: true
},{
	name: "Negotiator",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are good at gauging and swaying attitudes.",
	detail: "You are good at gauging and swaying attitudes. <p class=sub><b>Benefit</b>: You get a +2 bonus on all Diplomacy checks and Sense Motive checks",
	benefit: "+2 bonus on Diplomacy and Sense Motive checks",
	skills: {
		"Diplomacy": 2,
		"Sense Motive": 2
	},
	prereqs: {}
},{
	name: "Nimble Fingers",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are adept at manipulating small, delicate objects.",
	detail: "You are adept at manipulating small, delicate objects. <p class=sub><b>Benefit</b>: You get a +2 bonus on all Disable Device checks and Open Lock checks.",
	benefit: "+2 bonus on Disable Device and Open Lock checks",
	skills: {
		"Disable Device": 2,
		"Sense Motive": 2
	},
	prereqs: {}
},{
	name: "Persuasive",
	tags: ["pathfinder"],
	type: "feat",
	description: "You have a way with words and body language.",
	detail: "You have a way with words and body language. <p class=sub><b>Benefit</b>: You get a +2 bonus on all Bluff checks and Intimidate checks.",
	benefit: "+2 bonus on Bluff checks and Intimidate checks",
	skills: {
		"Bluff": 2,
		"Intimidate": 2
	},
	prereqs: {}
},{
	name: "Point Blank Shot",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are skilled at making well-placed shots with ranged weapons at close range.",
	detail: "You are skilled at making well-placed shots with ranged weapons at close range. <p class=sub><b>Benefit</b>: You get a +1 bonus on attack and damage rolls with ranged weapons at ranges of up to 30 feet. <p class=sub><b>Special</b>: A fighter may select Point Blank Shot as one of his fighter bonus feats (see page 38).",
	benefit: "+1 bonus on ranged attack and damage within 30 ft.",
	prereqs: {},
	conditional: true,
	op: "if ($(this).attr('checked')) { for ( var i in chardata.weapons) { var weapon = weapons( { name : chardata.weapons[i].weapon_name }).first(); if (weapon.usage == 'ranged') { var att = $('#weapon_' + i + '_att').text(); var attacks = att.split('/'); var point_blank_shot_atts = ''; for (var j in attacks) { point_blank_shot_atts += pos(parseInt(attacks[j]) + 1); point_blank_shot_atts += (parseInt(j) + 1 < attacks.length ? '/' : ''); } $('#weapon_' + i + '_att').text(point_blank_shot_atts);  var dam = $('#weapon_' + i + '_dam').text(); var point_blank_shot_dam = ''; var damages = dam.split('/'); for(var j in damages) { var dam_components = damages[j].split('+'); var die = dam_components[0]; var weapon_mod = dam_components.length > 1 ? parseInt(dam_components[1]) : 0; point_blank_shot_dam += die + pos(weapon_mod + 1); point_blank_shot_dam += (parseInt(j) + 1 < damages.length ? ' / ' : ''); } $('#weapon_' + i + '_dam').text(point_blank_shot_dam); } } } else { recalc_main_page(); }",
	fighter_bonus_feat: true
},{
	name: "Power Attack",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can make exceptionally powerful melee attacks.",
	detail: "You can make exceptionally powerful melee attacks. <p class=sub><b>Prerequisite</b>: Str 13. <p class=sub><b>Benefit</b>: On your action, before making attack rolls for a round, you may choose to subtract a number from all melee attack rolls and add the same number to all melee damage rolls. This number may not exceed your base attack bonus. The penalty on attacks and bonus on damage apply until your next turn. <p class=sub><b>Special</b>: If you attack with a two-handed weapon, or with a one-handed weapon wielded in two hands, instead add twice the number subtracted from your attack rolls. You can&apos;t add the bonus from Power Attack to the damage dealt with a light weapon (except with unarmed strikes or natural weapon attacks), even though the penalty on attack rolls still applies. (Normally, you treat a double weapon as a one-handed weapon and a light weapon. If you choose to use a double weapon like a two-handed weapon, attacking with only one end of it in a round, you treat it as a two-handed weapon.) <p class=sub>A fighter may select Power Attack as one of his fighter bonus feats (see page 38).",
	benefit: "Trade attack bonus for damage (up to base attack bonus)",
	prereqs: {
		abilities: {
			"Str": 13
		}
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Precise Shot",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are skilled at timing and aiming ranged attacks.",
	detail: "You are skilled at timing and aiming ranged attacks. <p class=sub><b>Prerequisite</b>: Point Blank Shot. <p class=sub><b>Benefit</b>: You can shoot or throw ranged weapons at an opponent engaged in melee without taking the standard -4 penalty on your attack roll (see Shooting or Throwing into a Melee, page 140). <p class=sub><b>Special</b>: A fighter may select Precise Shot as one of his fighter bonus feats (see page 38).",
	benefit: "No -4 penalty for shooting into melee",
	prereqs: {
		feats: ["Point Blank Shot"]
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Quick Draw",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can draw weapons with startling speed.",
	detail: "You can draw weapons with startling speed. <p class=sub><b>Prerequisite</b>: Base attack bonus +1. <p class=sub><b>Benefit</b>: You can draw a weapon as a free action instead of as a move action. You can draw a hidden weapon (see the Sleight of Hand skill, page 81) as a move action. <p class=sub>A character who has selected this feat may throw weapons at his full normal rate of attacks (much like a character with a bow). <p class=sub><b>Normal</b>: Without this feat, you may draw a weapon as a move action, or (if your base attack bonus is +1 or higher) as a free action as part of movement (see page 142). Without this feat, you can draw a hidden weapon as a standard action. <p class=sub><b>Special</b>: A fighter may select Quick Draw as one of his fighter bonus feats (see page 38).",
	benefit: "Draw weapon as free action",
	prereqs: {
		base_attack_bonus: 1
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Quicken Spell",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can cast a spell with a moment&apos;s thought.",
	detail: "You can cast a spell with a moment&apos;s thought. <p class=sub><b>Benefit</b>: Casting a quickened spell is a free action. You can perform another action, even casting another spell, in the same round as you cast a quickened spell. You may cast only one quickened spell per round. A spell whose casting time is more than 1 full-round action cannot be quickened. A quickened spell uses up a spell slot four levels higher than the spell&apos;s actual level. Casting a quickened spell doesn&apos;t provoke an attack of opportunity. <p class=sub><b>Special</b>: This feat can&apos;t be applied to any spell cast spontaneously (including sorcerer spells, bard spells, and cleric or druid spells cast spontaneously), since applying a metamagic feat to a spontaneously cast spell automatically increases the casting time to a full-round action.",
	benefit: "Cast spells as free action",
	prereqs: {},
	spell_related: true,
	conditional: true
},{
	name: "Rapid Reload",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can reload a crossbow of a given type (hand, light, or heavy) more quickly than normal.",
	detail: "Choose a type of crossbow (hand, light, or heavy). You can reload a crossbow of that type more quickly than normal. <p class=sub><b>Prerequisite</b>: Weapon Proficiency (crossbow type chosen). <p class=sub><b>Benefit</b>: The time required for you to reload your chosen type of crossbow is reduced to a free action (for a hand or light crossbow) or a move action (for a heavy crossbow). Reloading a crossbow still provokes an attack of opportunity. <p class=sub>If you have selected this feat for hand crossbow or light crossbow, you may fire that weapon as many times in a full attack action as you could attack if you were using a bow. <p class=sub><b>Normal</b>: A character without this feat needs a move action to reload a hand or light crossbow, or a full-round action to reload a heavy crossbow.  <p class=sub><b>Special</b>: You can gain Rapid Reload multiple times. Each time you take the feat, it applies to a new type of crossbow. <p class=sub>A fighter may select Rapid Reload as one of his fighter bonus feats (see page 38). ",
	benefit: "Reload crossbow more quickly",
	prereqs: {
		// TODO - is this even worth it?
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Rapid Shot",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can use ranged weapons with exceptional speed.",
	detail: "You can use ranged weapons with exceptional speed. <p class=sub><b>Prerequisites</b>: Dex 13, Point Blank Shot. <p class=sub><b>Benefit</b>: You can get one extra attack per round with a ranged weapon. The attack is at your highest base attack bonus, but each attack you make in that round (the extra one and the normal ones) takes a -2 penalty. You must use the full attack action (see page 143) to use this feat. <p class=sub><b>Special</b>: A fighter may select Rapid Shot as one of his fighter bonus feats (see page 38). <p class=sub>A 2nd-level ranger who has chosen the archery combat style is treated as having Rapid Shot, even if he does not have the prerequisites for it, but only when he is wearing light or no armor (see page 48). ",
	benefit: "One extra ranged attack each round",
	prereqs: {
		abilities: {
			"Dex": 13
		},
		feats: ["Point Blank Shot"]
	},
	conditional: true,
	op: "if($(this).attr('checked')) { if($('#feat_45_conditional').attr('checked')) { $('#feat_45_conditional').removeAttr('checked'); recalc_main_page(); } for (var i in chardata.weapons) { var weapon = weapons({ name: chardata.weapons[i].weapon_name }).first();if (weapon.usage == 'ranged') { var att = $('#weapon_' + i + '_att').text(); var attacks = att.split('/'); attacks.push(attacks[0]); var rapid_shot_atts = ''; for(j in attacks) { rapid_shot_atts += pos(parseInt(attacks[j]) - 2);	rapid_shot_atts += (parseInt(j) + 1 < attacks.length ? '/' : ''); }	$('#weapon_' + i + '_att').text(rapid_shot_atts); } } } else { recalc_main_page(); }",
	fighter_bonus_feat: true
},{
	name: "Ride-By Attack",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are skilled at making fast attacks for your mount.",
	detail: "You are skilled at making fast attacks for your mount. <p class=sub><b>Prerequisites</b>: Ride 1 rank, Mounted Combat. <p class=sub><b>Benefit</b>: When you are mounted and use the charge action, you may move and attack as if with a standard charge and then move again (continuing the straight line of the charge). Your total movement for the round can&apos;t exceed double your mounted speed. You and your mount do not provoke an attack of opportunity from the opponent that you attack. <p class=sub><b>Special</b>: A fighter may select Ride-By Attack as one of his fighter bonus feats (see page 38).",
	benefit: "Move before and after a mounted charge",
	prereqs: {
		feats: ["Mounted Combat"]
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Run",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are fleet of foot.",
	detail: "You are fleet of foot. <p class=sub><b>Benefit</b>: When running, you move five times your normal speed (if wearing light or no armor and carrying no more than a light load) or four times your speed (if wearing medium or heavy armor or carrying a medium or heavy load). If you make a jump after a running start (see the Jump skill description, page 77), you gain a +4 bonus on your Jump check. While running, you retain your Dexterity bonus to AC. <p class=sub><b>Normal</b>: You move four times your speed while running (if wearing light or no armor and carrying no more than a light load) or three times your speed (if wearing medium or heavy armor or carrying a medium or heavy load), and you lose your Dexterity bonus to AC.",
	benefit: "Run 5 times normal speed, +4 bonus on Jump checks made after a running start",
	prereqs: {},
	conditional: true
},{
	name: "Scribe Scroll",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can create scrolls, from which you or another spellcaster can cast the scribed spells.",
	detail: "You can create scrolls, from which you or another spellcaster can cast the scribed spells. See the <i>Dungeon Master&apos;s Guide</i> for rules on scrolls. <p class=sub><b>Prerequisite</b>: Caster level 1st. <p class=sub><b>Benefit</b>: You can create a scroll of any spell that you know. Scribing a scroll takes one day for each 1,000 gp in its base price. The base price of a scroll is its spell level x its caster level x 25 gp. To scribe a scroll, you must spend 1/25 of this base price in XP and use up raw materials costing one-half of this base price. <p class=sub>Any scroll that stores a spell with a costly material component or an XP cost also carries a commensurate cost. In addition to the costs derived from the Mialee casts a spell froma scroll she scribed. base price, you must expend the material component or pay the XP when scribing the scroll. <p class=sub> ",
	benefit: "Create magic scrolls",
	prereqs: {},
	spell_related: true,
	conditional: true
},{
	name: "Self-sufficient",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can take care of yourself in harsh environments and situations.",
	detail: "You can take care of yourself in harsh environments and situations. <p class=sub><b>Benefit</b>: You get a +2 bonus on all Heal checks and Survival checks.",
	benefit: "+2 bonus on Heal and Survival checks",
	skills: {
		"Heal": 2,
		"Survival": 2
	},
	prereqs: {}
},{
	name: "Shield Proficiency",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are proficient with bucklers, small shields, and large shields.",
	detail: "You are proficient with bucklers, small shields, and large shields. <p class=sub><b>Benefit</b>: You can use a shield and take only the standard penalties (see Table 7-6: Armor and Shields, page 123). <p class=sub><b>Normal</b>: When you are using a shield with which you are not proficient, you take the shield&apos;s armor check penalty on attack rolls and on all skill checks that involve moving, including Ride checks. <p class=sub><b>Special</b>: Barbarians, bards, clerics, druids, fighters, paladins, and rangers automatically have Shield Proficiency as a bonus feat. They need not select it.",
	benefit: "No armor check penalty on attack rolls",
	attack: "if(chardata.shields){ for(var i in chardata.shields) { var shield = shields({ name: chardata.shields[i].shield_name }).first(); if(shield.category == 'buckler' || shield.category == 'light' || shield.category == 'heavy') { attacks.acp += Math.abs(shield.acp) } } } return attacks; ",
	mobility: "if(chardata.shields){ for(var i in chardata.shields) {	var shield = shields({ name: chardata.shields[i].shield_name }).first(); if(shield.category == 'buckler' || shield.category == 'light' || shield.category == 'heavy') { acp += Math.abs(shield.acp) } } } return acp; ",
	prereqs: {},
	classes: {
		"Barbarian": 1,
		"Bard": 1,
		"Cleric": 1,
		"Fighter": 1,
		"Paladin": 1,
		"Ranger": 1
	}
},{
	name: "Shot on the Run",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are highly trained in skirmish ranged weapon tactics.",
	detail: "You are highly trained in skirmish ranged weapon tactics. <p class=sub><b>Prerequisites</b>: Dex 13, Dodge, <p class=sub>Mobility, Point Blank Shot, base attack bonus +4. <p class=sub><b>Benefit</b>: When using the attack action with a ranged weapon, you can move both before and after the attack, provided that your total distance moved is not greater than your speed. <p class=sub><b>Special</b>: A fighter may select Shot on the Run as one of his fighter bonus feats (see page 38).",
	benefit: "Move before and after ranged attack",
	prereqs: {
		abilities: {
			"Dex": 13
		},
		feats: ["Point Blank Shot", "Mobility"],
		base_attack_bonus: 4
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Silent Spell",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can cast spells silently.",
	detail: "You can cast spells silently. <p class=sub><b>Benefit</b>: A silent spell can be cast with no verbal components. Spells without verbal components are not affected. A silent spell uses up a spell slot one level higher than the spell's actual level. <p class=sub><b>Special</b>: Bard spells cannot be enhanced by this metamagic feat.",
	benefit: "Cast spells without verbal components",
	prereqs: {},
	spell_related: true,
	conditional: true
},{
	name: "Simple Weapon Proficiency",
	tags: ["pathfinder"],
	type: "feat",
	description: "You understand how to use all types of simple weapons in combat.",
	detail: "You understand how to use all types of simple weapons in combat (see Table 7-5: Weapons, page 116, for a list of simple weapons). <p class=sub><b>Benefit</b>: You make attack rolls with simple weapons normally. <p class=sub><b>Normal</b>: When using a weapon with which you are not proficient, you take a -4 penalty on attack rolls. <p class=sub><b>Special</b>: All characters except for druids, monks, rogues, and wizards are automatically proficient with all simple weapons. They need not select this feat. <p class=sub>A sorcerer or wizard who casts the spell <i>Tenser's transformation</i> on himself or herself gains proficiency with all simple weapons for the duration of the spell.",
	benefit: "No -4 penalty on attack rolls with simple weapons",
	attack: "if(weapon.category == 'simple') { attacks.weapon_proficiency = 0; } return attacks;",
	prereqs: {},
	classes: {
		"Barbarian": 1,
		"Bard": 1,
		"Cleric": 1,
		"Fighter": 1,
		"Paladin": 1,
		"Ranger": 1
	},
	collection: {
		db: "weapons",
		filter: { category: "simple" }
	}
},{
	name: "Skill Focus",
	tags: ["pathfinder"],
	type: "feat",
	description: "Choose a skill, such as Move Silently. You have a special knack with that skill.",
	detail: "Choose a skill, such as Move Silently. You have a special knack with that skill. <p class=sub><b>Benefit</b>: You get a +3 bonus on all checks involving that skill. <p class=sub><b>Special</b>: You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new skill.",
	benefit: "+3 bonus on checks with selected skill",
	prereqs: {},
	multi: {
		type: "skills",
		db: "skills"
	}
},{
	name: "Snatch Arrows",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are adept at grabbing incoming arrows, as well as crossbow bolts, spears, and other projectile or thrown weapons.",
	detail: "You are adept at grabbing incoming arrows, as well as crossbow bolts, spears, and other projectile or thrown weapons. <p class=sub><b>Prerequisites</b>: Dex 15, Deflect Arrows, Improved Unarmed Strike. <p class=sub><b>Benefit</b>: When using the Deflect Arrows feat (page 93), you may catch the weapon instead of just deflecting it. Thrown weapons, such as spears or axes, can immediately be thrown back at the original attacker (even though it isn&39;t your turn) or kept for later use. <p class=sub>You must have at least one hand free (holding nothing) to use this feat. <p class=sub><b>Special</b>: A fighter may select Snatch Arrows as one of his fighter bonus feats (see page 38).",
	benefit: "Catch a deflected ranged attack",
	prereqs: {
		abilities: {
			"Dex": 15
		},
		feats: ["Deflect Arrows", "Improved Unarmed Strike"]
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Spell Focus",
	tags: ["pathfinder"],
	type: "feat",
	description: "Choose a school of magic, such as illusion. Your spells of that school are more potent than normal.",
	detail: "Choose a school of magic, such as illusion. Your spells of that school are more potent than normal. <p class=sub><b>Benefit</b>: Add +1 to the Difficulty Class for all saving throws against spells from the school of magic you select. <p class=sub><b>Special</b>: You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new school of magic.",
	benefit: "+1 bonus on save DCs against specific school of magic",
	prereqs: {},
	multi: {
		type: "schools",
		db: "schools"
	},
	spell_related: true,
	conditional: true
},{
	name: "Spell Mastery",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are so intimately familiar with certain spells that you don&apos;t need a spellbook to prepare them anymore.",
	detail: "You are so intimately familiar with certain spells that you don&apos;t need a spellbook to prepare them anymore. <p class=sub><b>Prerequisite</b>: Wizard level 1st. <p class=sub><b>Benefit</b>: Each time you take this feat, choose a number of spells equal to your Intelligence modifier that you already know. From that point on, you can prepare these spells without referring to a spellbook. <p class=sub><b>Normal</b>: Without this feat, you must use a spellbook to prepare all your spells, except <i>read magic</i>.",
	benefit: "Can prepare some spells without spellbook",
	prereqs: {},
	prereqs: {
		classes: {
			"Wizard": 1
		}
	},
	spell_related: true,
	conditional: true
},{
	name: "Spell Penetration",
	tags: ["pathfinder"],
	type: "feat",
	description: "Your spells are especially potent, breaking through spell resistance more readily than normal.",
	detail: "Your spells are especially potent, breaking through spell resistance more readily than normal. <p class=sub><b>Benefit</b>: You get a +2 bonus on caster level checks (1d20 + caster level) made to overcome a creature&apos;s spell resistance.",
	benefit: "+2 bonus on caster level checks to defeat spell resistance",
	prereqs: {},
	spell_related: true,
	conditional: true
},{
	name: "Spirited Charge",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are trained at making a devastating mounted charge.",
	detail: "You are trained at making a devastating mounted charge. <p class=sub><b>Prerequisites</b>: Ride 1 rank, Mounted Combat, Ride-By Attack. <p class=sub><b>Benefit</b>: When mounted and using the charge action, you deal double damage with a melee weapon (or triple damage with a lance). <p class=sub><b>Special</b>: A fighter may select Spirited Charge as one of his fighter bonus feats (see page 38).",
	benefit: "Double damage with mounted charge",
	prereqs: {
		feats: ["Ride-By Attack"]
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Spring Attack",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are trained in fast melee attacks and fancy footwork.",
	detail: "You are trained in fast melee attacks and fancy footwork. <p class=sub><b>Prerequisites</b>: Dex 13, Dodge, Mobility, base attack bonus +4. <p class=sub><b>Benefit</b>: When using the attack action with a melee weapon, you can move both before and after the attack, provided that your total distance moved is not greater than your speed. Moving in this way does not provoke an attack of opportunity from the defender you attack, though it might provoke attacks of opportunity from other creatures, if appropriate. You can&apos;t use this feat if you are wearing heavy armor. <p class=sub>You must move at least 5 feet both before and after you make your attack in order to utilize the benefits of Spring Attack.<p class=sub><b>Special</b>: A fighter may select Spring Attack as one of his fighter bonus feats (see page 38).",
	benefit: "Move before and after melee attack",
	prereqs: {
		feats: ["Mobility"],
		base_attack_bonus: 4
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Stealthy",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are particularly good at avoiding notice.",
	detail: "You are particularly good at avoiding notice. <p class=sub><b>Benefit</b>: You get a +2 bonus on all Hide checks and Move Silently checks",
	benefit: "+2 bonus on Hide and Move Silently checks",
	skills: {
		"Hide": 2,
		"Move Silently": 2
	},
	prereqs: {}
},{
	name: "Still Spell",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can cast spells without gestures.",
	detail: "You can cast spells without gestures. <p class=sub><b>Benefit</b>: A stilled spell can be cast with no somatic components. <p class=sub>Spells without somatic components are not affected. A stilled spell uses up a spell slot one level higher than the spell&apos;s actual level.",
	benefit: "Cast spells without somatic components",
	prereqs: {},
	spell_related: true,
	conditional: true
},{
	name: "Stunning Fist",
	tags: ["pathfinder"],
	type: "feat",
	description: "You know how to strike opponents in vulnerable areas.",
	detail: "You know how to strike opponents in vulnerable areas. <p class=sub><b>Prerequisites</b>: Dex 13, Wis 13, Improved Unarmed Strike, base attack bonus +8. <p class=sub><b>Benefit</b>: You must declare that you are using this feat before you make your attack roll (thus, a failed attack roll ruins the attempt). Stunning Fist forces a foe damaged by your unarmed attack to make a Fortitude saving throw (DC 10 + 1/2 your character level + your Wis modifier), in addition to dealing damage normally. A defender who fails this saving throw is stunned for 1 round (until just before your next action). A stunned character can&apos;t act, loses any Dexterity bonus to AC, and takes a -2 penalty to AC. You may attempt a stunning attack once per day for every four levels you have attained (but see Special), and no more than once per round. Constructs, oozes, plants, undead, incorporeal creatures, and creatures immune to critical hits cannot be stunned. <p class=sub><b>Special</b>: A monk may select Stunning Fist as a bonus feat at 1st level, even if she does not meet the prerequisites. A monk who selects this feat may attempt a stunning attack a number of times per day equal to her monk level, plus one more time per day for every four levels she has in classes other than monk. <p class=sub>A fighter may select Stunning Fist as one of his fighter bonus feats (see page 38).",
	benefit: "Stun opponent with unarmed strike",
	prereqs: {
		abilities: {
			"Dex": 13,
			"Wis": 13
		},
		feats: ["Improved Unarmed Strike"],
		base_attack_bonus: 8
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Toughness",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are tougher than normal.",
	detail: "You are tougher than normal. <p class=sub><b>Benefit</b>: You gain +3 hit points. <p class=sub><b>Special</b>: A character may gain this feat multiple times. Its effects stack. <p class=sub> ",
	benefit: "+3 hit points",
	hp: "hp += chardata.feats({ feat_name: 'Toughness' }).first().multi * 3; return hp;",
	prereqs: {}
//	multi: {
//		data: "count"
//	}
},{
	name: "Tower Shield Proficiency",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are proficient with tower shields.",
	detail: "You are proficient with tower shields. <p class=sub><b>Prerequisite</b>: Shield Proficiency. <p class=sub><b>Benefit</b>: You can use a tower shield and suffer only the standard penalties (see Table 7-6: Armor and Shields, page 123). <p class=sub><b>Normal</b>: A character who is using a shield with which he or she is not proficient takes the shield&apos;s armor check penalty on attack rolls and on all skill checks that involve moving, including Ride. <p class=sub><b>Special</b>: Fighters automatically have Tower Shield Proficiency as a bonus feat. They need not select it.",
	benefit: "No armor check penalty on attack rolls",
	attack: "if(chardata.shields){ for(var i in chardata.shields) { var shield = shields({ name: chardata.shields[i].shield_name }).first(); if(shield.category == 'tower') { attacks.acp += Math.abs(shield.acp) } } return attacks; }",
	mobility: "if(chardata.shields){ for(var i in chardata.shields) {	var shield = shields({ name: chardata.shields[i].shield_name }).first(); if(shield.category == 'tower') { acp += Math.abs(armor.acp) } } return acp; }",
	prereqs: {
		feats: ["Shield Proficiency"]
	}
},{
	name: "Track",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can follow the trails of creatures and characters across most types of terrain.",
	detail: "You can follow the trails of creatures and characters across most types of terrain.<p class=sub><b>Benefit</b>: To find tracks or to follow them for 1 mile requires a successful Survival check. You must make another Survival check every time the tracks become difficult to follow, such as when other tracks cross them or when the tracks backtrack and diverge. <p class=sub>You move at half your normal speed (or at your normal speed with a -5 penalty on the check, or at up to twice your normal speed with a -20 penalty on the check). The DC depends on the surface and the prevailing conditions, as given on the table below: <table class=box><tr class=header><td>Surface</td><td>Survival DC</td><td></td><td>Surface</td><td>Survival DC</td></tr><tr class=detail><td>Very soft ground</td><td align=center>5</td><td></td><td>Firm ground</td><td align=center>15</td></tr> <tr class=detail><td>Soft ground</td><td align=center>10</td><td></td><td>Hard ground</td><td align=center>20</td></tr> </table><p class=sub><i>Very Soft Ground</i>: Any surface (fresh snow, thick dust, wet mud) that holds deep, clear impressions of footprints. <p class=sub><i>Soft Ground</i>: Any surface soft enough to yield to pressure, but firmer than wet mud or fresh snow, in which a creature leaves frequent but shallow footprints. <p class=sub><i>Firm Ground</i>: Most normal outdoor surfaces (such as lawns, fields, woods, and the like) or exceptionally soft or dirty indoor surfaces (thick rugs and very dirty or dusty floors). The creature might leave some traces (broken branches or tufts of hair), but it leaves only occasional or partial footprints. <p class=sub><i>Hard Ground</i>: Any surface that doesn&apos;t hold footprints at all, such as bare rock or an indoor floor. Most streambeds fall into this category, since any footprints left behind are obscured or washed away. The creature leaves only traces (scuff marks or displaced pebbles).  <p class=sub>Several modifiers may apply to the Survival check, as given on the table below. <table class=box><tr class=header><td>Condition</td><td>Survival DC Modifier</td></tr><tr class=detail><td>Every three creatures in the group being tracked</td><td align=center>-1</td></tr><tr class=detail><td colspan=2>Size of creature or creatures being tracked<sup>1</sup>:</td></tr><tr class=detail><td class=indent>Fine</td><td align=center>+8</td></tr><tr class=detail><td class=indent>Diminutive</td><td align=center>+4</td></tr><tr class=detail><td class=indent>Tiny</td><td align=center>+2</td></tr><tr class=detail><td class=indent>Small</td><td align=center>+1</td></tr><tr class=detail><td class=indent>Medium</td><td align=center>+0</td></tr><tr class=detail><td class=indent>Large</td><td align=center>-1</td></tr><tr class=detail><td class=indent>Huge</td><td align=center>-2</td></tr><tr class=detail><td class=indent>Gargantuan</td><td align=center>-4</td></tr><tr class=detail><td class=indent>Colossal</td><td align=center>-8</td></tr><tr class=detail><td>Every 24 hours since the trail was made</td><td align=center>+1</td></tr><tr class=detail><td>Every hour of rain since the trail was made</td><td align=center>+1</td></tr><tr class=detail><td>Fresh snow cover since the trail was made</td><td align=center>+10</td></tr><tr class=detail><td colspan=2>Poor visibility<sup>2</sup>:</td></tr><tr class=detail><td class=indent>Overcast or moonless night</td><td align=center>+6</td></tr><tr class=detail><td class=indent>Moonlight</td><td align=center>+3</td></tr><tr class=detail><td class=indent>Fog or precipitation</td><td align=center>+3</td></tr><tr class=detail><td>Tracked party hides trail (and moves at half speed)</td><td align=center>+5</td></tr></table><sup>1</sup> For a group of mixed sizes, apply only the modifier for the largest size category.<br /><sup>2</sup> Apply only the largest modifier from this category.<br/>If you fail a Survival check, you can retry after 1 hour (outdoors) or 10 minutes (indoors) of searching. <p class=sub><b>Normal</b>: Without this feat, you can use the Survival skill to find tracks, but you can follow them only if the DC for the task is 10 or lower. Alternatively, you can use the Search skill to find a footprint or similar sign of a creature&apos;s passage using the DCs given above, but you can&apos;t use Search to follow tracks, even if someone else has already found them. <p class=sub><b>Special</b>: A ranger automatically has Track as a bonus feat. He need not select it. <p class=sub>This feat does not allow you to find or follow the tracks made by a subject of a <i>pass without trace</i> spell.",
	benefit: "Use Survival skill to track",
	prereqs: {},
	classes: {
		"Ranger": 1
	},
	conditional: true
},{
	name: "Trample",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are trained in using your mount to knock down opponents.",
	detail: "You are trained in using your mount to knock down opponents. <p class=sub><b>Prerequisites</b>: Ride 1 rank, Mounted Combat. <p class=sub><b>Benefit</b>: When you attempt to overrun an opponent while mounted, your target may not choose to avoid you. Your mount may make one hoof attack against any target you knock down, gaining the standard +4 bonus on attack rolls against prone targets (see Overrun, page 157). <p class=sub><b>Special</b>: A fighter may select Trample as one of his fighter bonus feats (see page 38). ",
	benefit: "Target cannot avoid mounted overrun",
	prereqs: {
		feats: ["Mounted Combat"]
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Two-Weapon Defense",
	tags: ["pathfinder"],
	type: "feat",
	description: "Your two-weapon fighting style bolsters your defense as well as your offense.",
	detail: "Your two-weapon fighting style bolsters your defense as well as your offense. <p class=sub><b>Prerequisites</b>: Dex 15, Two-Weapon Fighting. <p class=sub><b>Benefit</b>: When wielding a double weapon or two weapons (not including natural weapons or unarmed strikes), you gain a +1 shield bonus to your AC. <p class=sub>When you are fighting defensively or using the total defense action, this shield bonus increases to +2. <p class=sub><b>Special</b>: A fighter may select Two-Weapon Defense as one of his fighter bonus feats.",
	benefit: "Off-hand weapon grants +1 shield bonus to AC",
	// TODO - if no shield?
	ac: "ac += 1; return ac;",
	prereqs: {
		feats: ["Two-Weapon Fighting"]
	},
	fighter_bonus_feat: true
},{
	name: "Two-Weapon Fighting",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can fight with a weapon in each hand. You can make one extra attack each round with the second weapon.",
	detail: "You can fight with a weapon in each hand. You can make one extra attack each round with the second weapon. <p class=sub><b>Prerequisite</b>: Dex 15. <p class=sub><b>Benefit</b>: Your penalties on attack rolls for fighting with two weapons are reduced. The penalty for your primary hand lessens by 2 and the one for your off hand lessens by 6. <p class=sub><b>Normal</b>: See Two-Weapon Fighting, page 160, and Table 8-10: Two-Weapon Fighting Penalties, page 160. <p class=sub><b>Special</b>: A 2nd-level ranger who has chosen the two-weapon combat style is treated as having Two-Weapon Fighting, even if he does not have the prerequisite for it, but only when he is wearing light or no armor (see page 48). <p class=sub>A fighter may select Two-Weapon Fighting as one of his fighter bonus feats (see page 38). ",
	benefit: "Reduce two-weapon fighting penalties by 2",
	prereqs: {
		abilities: {
			"Dex": 15
		}
	},
	fighter_bonus_feat: true
},{
	name: "Weapon Finesse",
	tags: ["pathfinder"],
	type: "feat",
	description: "You are especially skilled at using weapons that can benefit as much from Dexterity as from Strength.",
	detail: "You are especially skilled at using weapons that can benefit as much from Dexterity as from Strength. <p class=sub><b>Prerequisite</b>: Base attack bonus +1. <p class=sub><b>Benefit</b>: With a light weapon, rapier, whip, or spiked chain made for a creature of your size category, you may use your Dexterity modifier instead of your Strength modifier on attack rolls. If you carry a shield, its armor check penalty applies to your attack rolls. <p class=sub><b>Special</b>: A fighter may select Weapon Finesse as one of his fighter bonus feats (see page 38). Natural weapons are always considered light weapons.",
	benefit: "Use Dex modifier instead of Str modifier on attack rolls with light melee weapons",
	prereqs: {},
	attack: "if (weapon.usage == 'light' || weapon.name == 'Whip' || weapon.name == 'Chain, spiked' || weapon.name == 'Rapier') {  var dex_score = calc_ability_modifier(chardata.abilities['Dex']);  var str_score = calc_ability_modifier(chardata.abilities['Str']);  if ($('#ability_Str_score')) {   str_score = parseInt($('#ability_Str_score').val());  } if ($('#ability_Dex_score')) {  dex_score = parseInt($('#ability_Dex_score').val()); } attacks.ability_score = Math.max(str_score, dex_score); } return attacks;",
	fighter_bonus_feat: true
},{
	name: "Weapon Focus",
	tags: ["pathfinder"],
	type: "feat",
	description: "You gain a +1 bonus on all attack rolls you make using the selected weapon.",
	detail: "Choose one type of weapon, such as greataxe. You can also choose unarmed strike or grapple (or ray, if you are a spellcaster) as your weapon for purposes of this feat. You are especially good at using this weapon. (If you have chosen ray, you are especially good with rays, such as the one produced by the <i>ray of frost</i> spell.) <p class=sub><b>Prerequisites</b>: Proficiency with selected weapon, base attack bonus +1. <p class=sub><b>Benefit</b>: You gain a +1 bonus on all attack rolls you make using the selected weapon. <p class=sub><b>Special</b>: You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon. <p class=sub>A fighter may select Weapon Focus as one of his fighter bonus feats (see page 38). He must have Weapon Focus with a weapon to gain the Weapon Specialization feat for that weapon.",
	benefit: "+1 bonus on attack rolls with selected weapon",
	attack: "if(chardata.feats({ feat_name: 'Weapon Focus' }).first().multi.indexOf(weapon.name) > -1) { for(var i in attacks.base) { attacks.base[i] = parseInt(attacks.base[i]) + 1; }} return attacks;",
	prereqs: {
		base_attack_bonus: 1
	},
	multi: {
		type: "weapons",
   		feats: ["Simple Weapon Proficiency", "Martial Weapon Proficiency", "Exotic Weapon Proficiency"]
	},
	fighter_bonus_feat: true
},{
	name: "Weapon Specialization",
	tags: ["pathfinder"],
	type: "feat",
	description: "You gain a +2 bonus on all damage rolls you make using the selected weapon.",
	detail: "Choose one type of weapon, such as greataxe, for which you have already selected the Weapon Focus feat. You can also choose unarmed strike or grapple as your weapon for purposes of this feat. You deal extra damage when using this weapon. <p class=sub><b>Prerequisites</b>: Proficiency with selected weapon, Weapon Focus with selected weapon, fighter level 4th. <p class=sub><b>Benefit</b>: You gain a +2 bonus on all damage rolls you make using the selected weapon. <p class=sub><b>Special</b>: You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon. <p class=sub>A fighter may select Weapon Specialization as one of his fighter bonus feats (see page 38).",
	benefit: "+2 bonus on damage rolls with selected weapon",
	damage: "if(chardata.feats({ feat_name: 'Weapon Specialization' }).first().multi.indexOf(weapon.name) > -1) { for(var i in damages) { damages[i].mod += 2; }} return damages;",
	prereqs: {
		feats: ["Weapon Focus"]
	},
	multi: {
		type: "weapons",
		feats: ["Weapon Focus"]
	},
	fighter_bonus_feat: true
},{
	name: "Whirlwind Attack",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can strike nearby opponents in an amazing, spinning attack.",
	detail: "You can strike nearby opponents in an amazing, spinning attack. <p class=sub><b>Prerequisites</b>: Dex 13, Int 13, Combat Expertise, Dodge, Mobility, Spring Attack, base attack bonus +4. <p class=sub><b>Benefit</b>: When you use the full attack action, you can give up your regular attacks and instead make one melee attack at your full base attack bonus against each opponent within reach. When you use the Whirlwind Attack feat, you also forfeit any bonus or extra attacks granted by other feats, spells, or abilities (such as the Cleave feat or the haste spell). <p class=sub><b>Special</b>: A fighter may select Whirlwind Attack as one of his fighter bonus feats.",
	benefit: "One melee attack against each opponent within reach",
	prereqs: {
		feats: ["Combat Expertise", "Dodge", "Mobility", "Spring Attack"]
	},
	conditional: true,
	fighter_bonus_feat: true
},{
	name: "Widen Spell",
	tags: ["pathfinder"],
	type: "feat",
	description: "You can increase the area of your spells.",
	detail: "You can increase the area of your spells. <p class=sub><b>Benefit</b>: You can alter a burst, emanation, line, or spread shaped spell to increase its area. Any numeric measurements of the spell&apos;s area increase by 100%. For example, a fireball spell (which normally produces a 20-foot-radius spread) that is widened now fills a 40-foot-radius spread. A widened spell uses up a spell slot three levels higher than the spell's actual level. <p class=sub>Spells that do not have an area of one of these four sorts are not affected by this feat.",
	benefit: "Double spell's area",
	prereqs: {},
	spell_related: true,
	conditional: true
},{
	name: "Light Weapon Proficiency",
	tags: ["pathfinder"],
	type: "feat",
	hidden: true,
	description: "You are proficient in light weapons.",
	detail: "You understand how to use a longsword, rapier, sap, short sword, shortbow, and whip.<p class=sub><b>Benefit</b>: You make attack rolls with these weapons normally. <p class=sub><b>Normal</b>: When using a weapon with which you are not proficient, you take a -4 penalty on attack rolls.",
	benefit: "No -4 penalty on attack rolls with light weapons.",
	attack: "if(['Longsword', 'Rapier', 'Sap', 'Short Sword', 'Shortbow', 'Whip'].indexOf(weapon.name) > -1 ) { attacks.weapon_proficiency = 0; } return attacks;",
	classes: {
		"Bard": 1
	},
	prereqs: {}
	// this is hidden, so don't need to specify a collection
	// collection: {
	// 	db: "weapons",
	// 	filter: { name: ["Longsword", "Rapier", "Sap", "Short Sword", "Shortbow", "Whip"] }
	// }
}];
