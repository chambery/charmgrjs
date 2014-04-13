pf_feats = [
		{
			name : "Acrobatic",
			summary : "+2 bonus on Acrobatics and Fly checks",
			description : "You are skilled at leaping, jumping, and flying. <p class=sub><b>Benefit: </b>You get a +2 bonus on all Acrobatics and Fly skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
			benefit : {
				skills : {
					"Acrobatics" : {
						1 : 2,
						10 : 4
					},
					"Fly" : {
						1 : 2,
						10 : 4
					}
				}
			},
			prereqs : {},
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Acrobatic Steps",
			summary : "Ignore 20 feet of difficult terrain when you move",
			description : "You can easily move over and through obstacles. <b>Prerequisites: </b>Dex 15, Nimble Moves. <b>Benefit: </b>Whenever you move, you may move through up to 15 feet of difficult terrain each round as if it were normal terrain. The effects of this feat stack with those provided by Nimble Moves (allowing you to move normally through a total of 20 feet of difficult terrain each round). ",
			benefit : "Use your Dex bonus when calculating your CMB",
			cmb : "",
			prereqs : {
				feats : [ "Nimble Moves" ],
				abilities : {
					"Dex" : 15
				}
			},
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Agile Maneuvers",
			summary : "Use your Dex bonus when calculating your CMB",
			description : "You�ve learned to use your quickness in place of brute force when performing combat maneuvers.<p class=sub><b>Benefit: </b>You add your Dexterity bonus to your base attack bonus and size bonus when determining your Combat Maneuver Bonus (see Chapter 8) instead of your Strength bonus. <p class=sub><b>Normal: </b>You add your Strength bonus to your base attack bonus and size bonus when determining your Combat Maneuver Bonus.",
			benefit : "Use your Dex bonus when calculating your CMB",
			cmb : "",
			prereqs : {},
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Alertness",
			summary : "+2 bonus on Perception and Sense Motive checks",
			description : "You often notice things that others might miss.<p class=sub><b>Benefit: </b>You get a +2 bonus on Perception and Sense Motive skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
			benefit : {
				skills : {
					"Sense Motive" : {
						1 : 2,
						10 : 4
					},
					"Perception" : {
						1 : 2,
						10 : 4
					}
				}
			},
			prereqs : {},
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Alignment Channel",
			summary : "Channel energy can heal or harm outsiders",
			description : "Choose chaos, evil, good, or law. You can channel divine energy to affect outsiders that possess this subtype.<p class=sub><b>Prerequisites: </b>Ability to channel energy.<p class=sub><b>Benefit: </b>Instead of its normal effect, you can choose to have your ability to channel energy heal or harm outsiders of the chosen alignment subtype. You must make this choice each time you channel energy. If you choose to heal or harm creatures of the chosen alignment subtype, your channel energy has no effect on other creatures. The amount of damage healed or dealt and the DC to halve the damage is otherwise unchanged.<p class=sub><b>Special: </b>You can gain this feat multiple times. Its effects do not stack. Each time you take this feat, it applies to a new alignment subtype. Whenever you channel energy, you must choose which type to effect.",
			benefit : {},
			multi : {
				type : "alignments",
				db : "alignments"
			},
			prereqs : {
				class_features : [ "Channel Energy" ]
			},
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Animal Affinity",
			summary : "+2 bonus on Handle Animal and Ride checks",
			description : "You are skilled at working with animals and mounts.<p class=sub><b>Benefit: </b>You get a +2 bonus on all Handle Animal and Ride skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill. ",
			benefit : {
				skills : {
					"Handle Animal" : {
						1 : 2,
						10 : 4
					},
					"Ride" : {
						1 : 2,
						10 : 4
					}
				}
			},
			prereqs : {},
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Arcane Armor Mastery",
			summary : "Reduce your arcane spell failure chance by 20%",
			description : "You have mastered the ability to cast spells while wearing armor.<p class=sub><b>Prerequisites: </b>Arcane Armor Training, Medium Armor Proficiency, caster level 7th<p class=sub><b>Benefit: </b>As a swift action, reduce the arcane spell failure chance due to the armor you are wearing by 20% for any spells you cast this round. This bonus replaces, and does not stack with, the bonus granted by Arcane Armor Training.",
			benefit : {},
			prereqs : {
				level : 7,
				feats : [ "Arcane Armor Training", "Medium Armor Proficiency" ]
			},
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Arcane Armor Training",
			summary : "Reduce your arcane spell failure chance by 10%",
			description : "You have learned how to cast spells while wearing armor.<p class=sub><b>Prerequisites: </b>Light Armor Proficiency, caster level 3rd<p class=sub><b>Benefit: </b>As a swift action, reduce the arcane spell failure chance due to the armor you are wearing by 10% for any spells you cast this round.",
			benefit : {},
			prereqs : {
				level : 3,
				feats : [ "Armor Proficiency, Light" ]
			},
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Arcane Strike",
			summary : "+1 damage and weapons are considered magic",
			description : "You draw upon your arcane power to enhance your weapons with magical energy.<p class=sub><b>Prerequisites: </b>Ability to cast arcane spells<p class=sub><b>Benefit: </b>As a swift action, you can imbue your weapons with a fraction of your power. For 1 round, your weapons deal +1 damage and are treated as magic for the purpose of overcoming damage reduction. For every five caster levels you possess, this bonus increases by +1, to a maximum of +5 at 20th level.",
			benefit : {},
			prereqs : {
				class_features : [ "Cast Arcane" ]
			},
			arcane : true,
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Armor Proficiency, Heavy",
			summary : "No penalties on attack rolls while wearing heavy armor",
			description : "You are skilled at wearing heavy armor.<p class=sub><b>Prerequisites: </b>Armor Proficiency, Medium<p class=sub><b>Benefit: </b>See Armor Proficiency, Light. <p class=sub><b>Normal: </b>See Armor Proficiency, Light. <p class=sub><b>Special: </b>Fighters and paladins automatically have Heavy Armor Proficiency as a bonus feat. They need not select it.",
			benefit : {
				attack : "if(chardata.armors){ for(var i in chardata.armors) { var armor = armors({ name: chardata.armors[i].armor_name }).first(); if(armor.category == 'heavy') { attacks.acp += Math.abs(armor.acp) } } } return attacks;",
				mobility : "if(chardata.armors){ for(var i in chardata.armors) {	var armor = armors({ name: chardata.armors[i].armor_name }).first(); if(armor.category == 'heavy') { acp += Math.abs(armor.acp) } } } return acp; "
			},
			collection : {
				db : "armors",
				filter : {
					category : "heavy"
				}
			},
			prereqs : {
				feats : [ "Armor Proficiency, Medium" ]
			},
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Armor Proficiency, Light",
			summary : "No penalties on attack rolls while wearing light armor",
			description : "You are skilled at wearing light armor.<p class=sub><b>Benefit: </b>When you wear a type of armor with which you are proficient, the armor check penalty for that armor applies only to Dexterity- and Strength-based skill checks. <b>Normal: </b>A character who is wearing armor with which he is not proficient applies its armor check penalty to attack rolls and to all skill checks that involve moving. <b>Special: </b>All characters except monks, sorcerers, and wizards automatically have Light Armor Proficiency as a bonus feat. They need not select it.",
			benefit : {
				attack : "if(chardata.armors){ for(var i in chardata.armors) { var armor = armors({ name: chardata.armors[i].armor_name }).first(); if(armor.category == 'light') { attacks.acp += Math.abs(armor.acp) } } } return attacks;",
				mobility : "if(chardata.armors){ for(var i in chardata.armors) {	var armor = armors({ name: chardata.armors[i].armor_name }).first(); if(armor.category == 'light') { acp += Math.abs(armor.acp) } } } return acp;"
			},
			collection : {
				db : "armors",
				filter : {
					category : "light"
				}
			},
			prereqs : {},
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Armor Proficiency, Medium",
			summary : "No penalties on attack rolls while wearing medium armor",
			description : "You are skilled at wearing medium armor.<p class=sub><b>Prerequisites: </b>Armor Proficiency, Light<p class=sub><b>Benefit: </b>See Armor Proficiency, Light. <p class=sub><b>Normal: </b>See Armor Proficiency, Light. <p class=sub><b>Special: </b>Fighters, paladins, and rangers automatically have Medium Armor Proficiency as a bonus feat. They need not select it.",
			benefit : {
				attack : "if(chardata.armors){ for(var i in chardata.armors) {	var armor = armors({ name: chardata.armors[i].armor_name }).first(); if(armor.category == 'medium') { attacks.acp += Math.abs(armor.acp) } } } return attacks; ",
				mobility : "if(chardata.armors){ for(var i in chardata.armors) {	var armor = armors({ name: chardata.armors[i].armor_name }).first(); if(armor.category == 'medium') { acp += Math.abs(armor.acp) } } } return acp;"
			},
			collection : {
				db : "armors",
				filter : {
					category : "medium"
				}
			},
			prereqs : {
				feats : [ "Armor Proficiency, Light" ]
			},
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Athletic",
			summary : "+2 bonus on Climb and Swim checks",
			description : "You possess inherent physical prowess.<p class=sub><b>Benefit: </b>You get a +2 bonus on Climb and Swim skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
			benefit : {
				skills : {
					"Climb" : {
						1 : 2,
						10 : 4
					},
					"Swim" : {
						1 : 2,
						10 : 4
					}
				}
			},
			prereqs : {},
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Augment Summoning",
			summary : "Summoned creatures gain +4 Str and Con",
			description : "Your summoned creatures are more powerful and robust.<p class=sub><b>Prerequisites: </b>Spell Focus (conjuration)<p class=sub><b>Benefit: </b>Each creature you conjure with any summon spell gains a +4 enhancement bonus to Strength and Constitution for the duration of the spell that summoned it.",
			benefit : {},
			prereqs : {
				or : [ {
					class_features : [ "Cast Arcane" ]
				}, {
					class_features : [ "Cast Divine" ]
				} ],
				feats : [ "Spell Focus" ]
			},
			conditional : true,
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Bleeding Critical",
			summary : "Whenever you score a critical hit, the target takes 2d6 bleed",
			description : "Your critical hits cause opponents to bleed profusely<p class=sub><b>Prerequisites: </b>Critical Focus, base attack bonus +11. <p class=sub><b>Benefit: </b>Whenever you score a critical hit with a slashing or piercing weapon, your opponent takes 2d6 points of bleed damage (see Appendix 2) each round on his turn, in addition to the damage dealt by the critical hit. Bleed damage can be stopped by a DC 15 Heal skill check or through any magical healing. The effects of this feat stack. <p class=sub><b>Special: </b>You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.",
			benefit : {},
			prereqs : {
				feats : [ "Critical Focus" ],
				base_attack_bonus : 11
			},
			conditional : true,
			groups : [ "Combat", "Critical" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Blind-Fight",
			summary : "Reroll miss chances for concealment",
			description : "You are skilled at attacking opponents that you cannot clearly perceive.<p class=sub><b>Benefit: </b>In melee, every time you miss because of concealment (see Chapter 8), you can reroll your miss chance percentile roll one time to see if you actually hit. <p class=sub>An invisible attacker gets no advantages related to hitting you in melee. That is, you don�t lose your Dexterity bonus to Armor Class, and the attacker doesn�t get the usual +2 bonus for being invisible. The invisible attacker�s bonuses do still apply for ranged attacks, however. <p class=sub>You do not need to make Acrobatics skill checks to move at full speed while blinded. <p class=sub><b>Normal: </b>Regular attack roll modifiers for invisible attackers trying to hit you apply, and you lose your Dexterity bonus to AC. The speed reduction for darkness and poor visibility also applies. <p class=sub><b>Special: </b>The Blind-Fight feat is of no use against a character who is the subject of a blink spell.",
			benefit : {},
			prereqs : {},
			conditional : true,
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Blinding Critical",
			summary : "Whenever you score a critical hit, the target is blinded",
			description : "Your critical hits blind your opponents.<p class=sub><b>Prerequisites: </b>Critical Focus, base attack bonus +15. <p class=sub><b>Benefit: </b>Whenever you score a critical hit, your opponent is permanently blinded. A successful Fortitude save reduces this to dazzled for 1d4 rounds. The DC of this Fortitude save is equal to 10 + your base attack bonus. This feat has no effect on creatures that do not rely on eyes for sight or creatures with more than two eyes (although multiple critical hits might cause blindness, at the GM�s discretion). Blindness can be cured by <i>heal, regeneration, remove blindness</i>, or similar abilities. <p class=sub><b>Special: </b>You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.",
			benefit : {},
			prereqs : {
				feats : [ "Critical Focus" ],
				base_attack_bonus : 15
			},
			conditional : true,
			groups : [ "Combat", "Critical" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Brew Potion",
			summary : "Create magic potions",
			description : "You can create magic potions.<p class=sub><b>Prerequisite: </b>Caster level 3rd. <p class=sub><b>Benefit: </b>You can create a potion of any 3rd-level or lower spell that you know and that targets one or more creatures. Brewing a potion takes 2 hours if its base price is 250 gp or less, otherwise brewing a potion takes 1 day for each 1,000 gp in its base price. When you create a potion, you set the caster level, which must be sufficient to cast the spell in question and no higher than your own level. To brew a potion, you must use up raw materials costing one half this base price. See the magic item creation rules in Chapter 15 for more information. <p class=sub>When you create a potion, you make any choices that you would normally make when casting the spell. Whoever drinks the potion is the target of the spell.",
			benefit : {},
			prereqs : {
				or : [ {
					class_features : [ "Cast Arcane" ]
				}, {
					class_features : [ "Cast Divine" ]
				} ],
				level : 3
			},
			spell_related : true,
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Catch Off-Guard",
			summary : "No penalties for improvised melee weapons",
			description : "Foes are surprised by your skilled use of unorthodox and improvised weapons.<p class=sub><b>Benefit: </b>You do not suffer any penalties for using an improvised melee weapon. Unarmed opponents are flatfooted against any attacks you make with an improvised melee weapon. <p class=sub><b>Normal: </b>You take a �4 penalty on attack rolls made with an improvised weapon. ",
			benefit : {},
			prereqs : {},
			conditional : true,
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Channel Smite",
			summary : "Channel energy through your attack",
			description : "You can channel your divine energy through a melee weapon you wield.<p class=sub><b>Prerequisite: </b>Channel energy class feature.<p class=sub><b>Benefit: </b>Before you make a melee attack roll, you can choose to spend one use of your channel energy ability as a swift action. If you channel positive energy and you hit an undead creature, that creature takes an amount of additional damage equal to the damage dealt by your channel positive energy ability. If you channel negative energy and you hit a living creature, that creature takes an amount of additional damage equal to the damage dealt by your channel negative energy ability. Your target can make a Will save, as normal, to halve this additional damage. If your attack misses, the channel energy ability is still expended with no effect.",
			benefit : {},
			prereqs : {
				class_features : [ "Channel Energy" ]
			},
			conditional : true,
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Cleave",
			summary : "Make an additional attack if the first one hits",
			description : "You can strike two adjacent foes with a single swing.<p class=sub><b>Prerequisites: </b>Str 13, Power Attack, base attack bonus +1. <p class=sub><b>Benefit: </b>As a standard action, you can make a single attack at your full base attack bonus against a foe within reach. If you hit, you deal damage normally and can make an additional attack (using your full base attack bonus) against a foe that is adjacent to the first and also within reach. You can only make one additional attack per round with this feat. When you use this feat, you take a �2 penalty to your Armor Class until your next turn. ",
			benefit : {},
			prereqs : {
				abilities : {
					Str : 13
				},
				base_attack_bonus : 1,
				feats : [ "Power Attack" ]
			},
			conditional : true,
			op : "",
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Combat Casting",
			summary : "+4 bonus on concentration checks for defensive casting",
			description : "You are adept at spellcasting when threatened or distracted.<p class=sub><b>Benefit: </b>You get a +4 bonus on concentration checks made to cast a spell or use a spell-like ability when casting on the defensive or while grappled.",
			benefit : {},
			prereqs : {
				or : [ {
					class_features : [ "Cast Arcane" ]
				}, {
					class_features : [ "Cast Divine" ]
				} ]
			},
			conditional : true,
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Combat Expertise",
			summary : "Trade attack bonus for AC bonus",
			description : "You can increase your defense at the expense of your accuracy.<p class=sub><b>Prerequisites: </b>Int 13<p class=sub><b>Benefit: </b>You can choose to take a �1 penalty on melee attack rolls and combat maneuver checks to gain a +1 dodge bonus to your Armor Class. When your base attack bonus reaches +4, and every +4 thereafter, the penalty increases by �1 and the dodge bonus increases by +1. You can only choose to use this feat when you declare that you are making an attack or a full-attack action with a melee weapon. The effects of this feat last until your next turn.",
			benefit : {},
			prereqs : {
				abilities : {
					Int : 13
				}
			},
			conditional : true,
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Combat Reflexes",
			summary : "Make additional attacks of opportunity",
			description : "You can make additional attacks of opportunity.<p class=sub><b>Benefit: </b>You may make a number of additional attacks of opportunity per round equal to your Dexterity bonus. With this feat, you may also make attacks of opportunity while flat-footed.<p class=sub><b>Normal: </b>A character without this feat can make only one attack of opportunity per round and can�t make attacks of opportunity while f lat-footed. <p class=sub><b>Special: </b>The Combat Ref lexes feat does not allow a rogue to use her opportunist ability more than once per round.",
			benefit : {},
			prereqs : {},
			conditional : true,
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Command Undead",
			summary : "Channel energy can be used to control undead",
			description : "Using foul powers of necromancy, you can command undead creatures, making them into your servants.<p class=sub><b>Prerequisites: </b>Channel negative energy class feature. <p class=sub><b>Benefit: </b>As a standard action, you can use one of your uses of channel negative energy to enslave undead within 30 feet. Undead receive a Will save to negate the effect. The DC for this Will save is equal to 10 + 1/2 your caster level + your Charisma modifier. Undead that fail their saves fall under your control, obeying your commands to the best of their ability, as if under the effects of control undead. Intelligent undead receive a new saving throw each day to resist your command. You can control any number of undead, so long as their total Hit Dice do not exceed your cleric level. If you use channel energy in this way, it has no other effect (it does not heal or harm nearby creatures). If an undead creature is under the control of another creature, you must make an opposed Charisma check whenever your orders conflict.",
			benefit : {},
			prereqs : {
				class_features : [ "Channel Energy" ],
				goodness : [ "Neutral", "Evil" ]
			},
			conditional : true,
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Craft Magic Arms and Armor",
			summary : "Create magic armors, shields, and weapons",
			description : "You can create magic armor, shields, and weapons.<p class=sub><b>Prerequisites: </b>Caster level 5th<p class=sub><b>Benefit: </b>You can create magic weapons, armor, or shields. Enhancing a weapon, suit of armor, or shield takes 1 day for each 1,000 gp in the price of its magical features. To enhance a weapon, suit of armor, or shield, you must use up raw materials costing half of this total price. See the magic item creation rules in Chapter 15 for more information. The weapon, armor, or shield to be enhanced must be a masterwork item that you provide. Its cost is not included in the above cost. You can also mend a broken magic weapon, suit of armor, or shield if it is one that you could make. Doing so costs half the raw materials and half the time it would take to craft that item in the first place. ",
			benefit : {},
			prereqs : {
				or : [ {
					class_features : [ "Cast Arcane" ]
				}, {
					class_features : [ "Cast Divine" ]
				} ],
				level : 5
			},
			spell_related : false,
			conditional : true,
			groups : [ "Item Creation" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Craft Rod",
			summary : "Create magic rods",
			description : "You can create magic armor, shields, and weapons.<p class=sub><b>Prerequisites: </b>Caster level 9th<p class=sub><b>Benefit: </b>You can create magic rods. Crafting a rod takes 1 day for each 1,000 gp in its base price. To craft a rod, you must use up raw materials costing half of its base price. See the magic item creation rules in Chapter 15 for more information. ",
			benefit : {},
			prereqs : {
				or : [ {
					class_features : [ "Cast Arcane" ]
				}, {
					class_features : [ "Cast Divine" ]
				} ],
				level : 9
			},
			conditional : false,
			groups : [ "Item Creation" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Craft Staff",
			summary : "Create magic staves",
			description : "You can create magic staves.<p class=sub><b>Prerequisites: </b>Caster level 11th<p class=sub><b>Benefit: </b>You can create any staff whose prerequisites you meet. Crafting a staff takes 1 day for each 1,000 gp in its base price. To craft a staff, you must use up raw materials costing half of its base price. A newly created staff has 10 charges. See the magic item creation rules in Chapter 15 for more information. ",
			benefit : {},
			prereqs : {
				or : [ {
					class_features : [ "Cast Arcane" ]
				}, {
					class_features : [ "Cast Divine" ]
				} ],
				level : 11
			},
			conditional : false,
			groups : [ "Item Creation" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Craft Wand",
			summary : "Create magic wands",
			description : "You can create magic wands.<p class=sub><b>Prerequisites: </b>Caster level 5th<p class=sub><b>Benefit: </b>You can create a wand of any 4th-level or lower spell that you know. Crafting a wand takes 1 day for each 1,000 gp in its base price. To craft a wand, you must use up raw materials costing half of this base price. A newly created wand has 50 charges. See the magic item creation rules in Chapter 15 for more information. ",
			benefit : {},
			prereqs : {
				or : [ {
					class_features : [ "Cast Arcane" ]
				}, {
					class_features : [ "Cast Divine" ]
				} ],
				level : 5
			},
			conditional : false,
			groups : [ "Item Creation" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Craft Wondrous Item",
			summary : "Create magic wondrous items",
			description : "You can create wondrous items, a type of magic item.<p class=sub><b>Prerequisites: </b>Caster level 3rd<p class=sub><b>Benefit: </b>You can create a wide variety of magic wondrous items. Crafting a wondrous item takes 1 day for each 1,000 gp in its price. To create a wondrous item, you must use up raw materials costing half of its base price. See the magic item creation rules in Chapter 15 for more information. <p class=sub>You can also mend a broken wondrous item if it is one that you could make. Doing so costs half the raw materials and half the time it would take to craft that item.",
			benefit : {},
			prereqs : {
				or : [ {
					class_features : [ "Cast Arcane" ]
				}, {
					class_features : [ "Cast Divine" ]
				} ],
				level : 3
			},
			groups : [ "Item Creation" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Critical Focus",
			summary : "+4 bonus on attack rolls made to confirm critical hits",
			description : "You are trained in the art of causing pain.<p class=sub><b>Prerequisites: </b>Base attack bonus +9<p class=sub><b>Benefit: </b>You receive a +4 circumstance bonus on attack rolls made to confirm critical hits.",
			benefit : {},
			prereqs : {
				base_attack_bonus : 9
			},
			conditional : true,
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Critical Mastery",
			summary : "Apply two effects to your critical hits",
			description : "Your critical hits cause two additional effects.<p class=sub><b>Prerequisites: </b>Critical Focus, any two critical feats, 14th level fighter.<p class=sub><b>Benefit: </b>You receive a +4 circumstance bonus on attack rolls made to confirm critical hits.",
			benefit : {},
			prereqs : {
				feats : [ "Critical Focus" ],
				pick : {
					count : 2,
					group : "Critical"
				},
				classes : {
					Fighter : 14
				}
			},
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Dazzling Display",
			summary : "Intimidate all foes within 30 feet",
			description : "Your skill with your favored weapon can frighten enemies.<p class=sub><b>Prerequisites: </b>Weapon Focus, proficiency with the selected weapon.<p class=sub><b>Benefit: </b>While wielding the weapon in which you have Weapon Focus, you can perform a bewildering show of prowess as a full-round action. Make an Intimidate check to demoralize all foes within 30 feet who can see your display.",
			benefit : {},
			prereqs : {
				feats : [ "Weapon Focus" ]
			},
			multi : {
				type : "weapons",
				feats : [ "Weapon Focus" ]
			},
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Deadly Aim",
			summary : "Trade ranged attack bonus for damage",
			description : "You can make exceptionally deadly ranged attacks by pinpointing a foe�s weak spot, at the expense of making the attack less likely to succeed.<p class=sub><b>Prerequisites: </b>Dex 13, base attack bonus +1<p class=sub><b>Benefit: </b>You can choose to take a �1 penalty on all ranged attack rolls to gain a +2 bonus on all ranged damage rolls. When your base attack bonus reaches +4, and every +4 thereafter, the penalty increases by �1 and the bonus to damage increases by +2. You must choose to use this feat before making an attack roll and its effects last until your next turn. The bonus damage does not apply to touch attacks or effects that do not deal hit point damage.",
			benefit : {},
			prereqs : {
				abilities : {
					"Dex" : 13
				},
				base_attack_bonus : 1
			},
			conditional : true,
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Deadly Stroke",
			summary : "Deal double damage plus 1 Con bleed ",
			description : "With a well-placed strike, you can bring a swift and painful end to most foes.<p class=sub><b>Prerequisites: </b>Dazzling Display, Greater Weapon Focus, Shatter Defenses, Weapon Focus, proficiency with the selected weapon, base attack bonus +11<p class=sub><b>Benefit: </b>As a standard action, make a single attack with the weapon for which you have Greater Weapon Focus against a stunned or flat-footed opponent. If you hit, you deal double the normal damage and the target takes 1 point of Constitution bleed (see Appendix 2). The additional damage and bleed is not multiplied on a critical hit.",
			benefit : {},
			prereqs : {
				feats : [ "Dazzling Display", "Greater Weapon Focus", "Shatter Defenses" ],
				base_attack_bonus : 11
			},
			conditional : true,
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Deafening Critical",
			summary : "Whenever you score a critical hit, the target is deafened",
			description : "Your critical hits cause enemies to lose their hearing.<p class=sub><b>Prerequisites: </b>Critical Focus, base attack bonus +13<p class=sub><b>Benefit: </b>Whenever you score a critical hit against an opponent, the victim is permanently deafened. A successful Fortitude save reduces the deafness to 1 round. The DC of this Fortitude save is equal to 10 + your base attack bonus. This feat has no effect on deaf creatures. This deafness can be cured by <b>heal</b>, <b>regeneration</b>, <b>remove deafness</b>, or a similar ability. <p class=sub><b>Special: </b>You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery. ",
			benefit : {},
			prereqs : {
				feats : [ "Critical Focus" ],
				base_attack_bonus : 13
			},
			conditional : true,
			groups : [ "Combat", "Critical" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Deceitful",
			summary : "+2 bonus on Bluff and Disguise checks",
			description : "You are skilled at deceiving others, both with the spoken word and with physical disguises.<p class=sub><b>Benefit: </b>You get a +2 bonus on all Bluff and Disguise skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
			benefit : {
				skills : {
					"Bluff" : {
						1 : 2,
						10 : 4
					},
					"Disguise" : {
						1 : 2,
						10 : 4
					}
				}
			},
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Defensive Combat Training",
			summary : "Use your total Hit Dice as your base attack bonus for CMD",
			description : "You excel at defending yourself from all manner of combat maneuvers.<p class=sub><b>Benefit: </b>You treat your total Hit Dice as your base attack bonus when calculating your Combat Maneuver Defense (see Chapter 8). ",
			benefit : {},
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Deflect Arrows",
			summary : "Avoid one ranged attack per round",
			description : "You can knock arrows and other projectiles off course, preventing them from hitting you.<p class=sub><b>Prerequisites: </b>Dex 13, Improved Unarmed Defense<p class=sub><b>Benefit: </b>You must have at least one hand free (holding nothing) to use this feat. Once per round when you would normally be hit with an attack from a ranged weapon, you may deflect it so that you take no damage from it. You must be aware of the attack and not flat-footed. Attempting to deflect a ranged attack doesn�t count as an action. Unusually massive ranged weapons (such as boulders or ballista bolts) and ranged attacks generated by natural attacks or spell effects can�t be deflected. ",
			benefit : {},
			prereqs : {
				abilities : {
					Dex : 13
				},
				feats : [ "Improved Unarmed Defense" ]
			},
			conditional : true,
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Deft Hands",
			summary : "+2 bonus on Disable Device and Sleight of Hand checks",
			description : "You have exceptional manual dexterity.<p class=sub><b>Benefit: </b>You get a +2 bonus on Disable Device and Sleight of Hand skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
			benefit : {
				skills : {
					"Disable Device" : {
						1 : 2,
						10 : 4
					},
					"Sleight of Hand" : {
						1 : 2,
						10 : 4
					}
				}
			},
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Diehard",
			summary : "Automatically stabilize and remain conscious below 0 hp",
			description : "You are especially hard to kill. Not only do your wounds automatically stabilize when grievously injured, but you can remain conscious and continue to act even at death�s door.<p class=sub><b>Benefit: </b>When your hit point total is below 0, but you are not dead, you automatically stabilize. You do not need to make a Constitution check each round to avoid losing additional hit points. You may choose to act as if you were disabled, rather than dying. You must make this decision as soon as you are reduced to negative hit points (even if it isn�t your turn). If you do not choose to act as if you were disabled, you immediately fall unconscious. When using this feat, you are staggered. You can take a move action without further injuring yourself, but if you perform any standard action (or any other action deemed as strenuous, including some swift actions, such as casting a quickened spell) you take 1 point of damage after completing the act. If your negative hit points are equal to or greater than your Constitution score, you immediately die. <p class=sub><b>Normal: </b>A character without this feat who is reduced to negative hit points is unconscious and dying.",
			prereqs : {
				feats : [ "Endurance" ]
			},
			benefit : {},
			conditional : true,
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Disruptive",
			summary : "Increases the DC to cast spells adjacent to you",
			description : "Your training makes it difficult for enemy spellcasters to safely cast spells near you.<p class=sub><b>Prerequisites: 6th-level fighter</b><p class=sub><b>Benefit: </b>The DC to cast spells defensively increases by +4 for all enemies that are within your threatened area. This increase to casting spells defensively only applies if you are aware of the enemy�s location and are capable of taking an attack of opportunity. If you can only take one attack of opportunity per round and have already used that attack, this increase does not apply. ",
			prereqs : {
				classes : {
					Fighter : 6
				}
			},
			benefit : {},
			conditional : true,
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Dodge",
			summary : "+1 dodge bonus to AC",
			description : "Your training and reflexes allow you to react swiftly to avoid an opponents� attacks.<p class=sub><b>Prerequisites: </b>Dex 13<p class=sub><b>Benefit: </b>You gain a +1 dodge bonus to your AC. A condition that makes you lose your Dex bonus to AC also makes you lose the benefits of this feat.",
			prereqs : {
				abilities : {
					Dex : 13
				}
			},
			benefit : {},
			conditional : true,
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Double Slice",
			summary : "Add your Str bonus to off-hand damage rolls",
			description : "Your off-hand weapon while dual-wielding strikes with greater power.<p class=sub><b>Prerequisites: Dex 15, Two-Weapon Fighting</b><p class=sub><b>Benefit: </b>Add your Strength bonus to damage rolls made with your off-hand weapon. <p class=sub><b>Normal: </b>You normally add only half of your Strength modifier to damage rolls made with a weapon wielded in your off-hand.",
			prereqs : {
				abilities : {
					Dex : 15
				},
				feats : [ "Two-Weapon Fighting" ]
			},
			benefit : {},
			conditional : true,
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Elemental Channel",
			summary : "Channel energy can harm or heal elementals",
			description : "Choose one elemental subtype, such as air, earth, fire, or water. You can channel your divine energy to harm or heal outsiders that possess your chosen elemental subtype.<p class=sub><b>Prerequisites: Channel energy class feature</b><p class=sub><b>Benefit: </b>Instead of its normal effect, you can choose to have your ability to channel energy heal or harm outsiders of your chosen elemental subtype. You must make this choice each time you channel energy. If you choose to heal or harm creatures of your elemental subtype, your channel energy has no affect on other creatures. The amount of damage healed or dealt and the DC to halve the damage is otherwise unchanged. <p class=sub><b>Special: </b>You can gain this feat multiple times. Its effects do not stack. Each time you take this feat, it applies to a new elemental subtype.",
			prereqs : {
				class_features : [ "Channel Energy" ]
			},
			benefit : {},
			conditional : true,
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Empower Spell",
			summary : "Increase spell variables by 50%",
			description : "You can increase the power of your spells, causing them to deal more damage.<p class=sub><b>Prerequisites: </b>Channel energy class feature<p class=sub><b>Benefit: </b>All variable, numeric effects of an empowered spell are increased by half. <p class=sub>Saving throws and opposed rolls are not affected, nor are spells without random variables. An empowered spell uses up a spell slot two levels higher than the spell�s actual level.",
			prereqs : {
				class_features : [ "Channel Energy" ]
			},
			benefit : {},
			conditional : true,
			groups : [ "Metamagic" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Endurance",
			summary : "+4 bonus on checks to avoid nonlethal damage",
			description : "Harsh conditions or long exertions do not easily tire you.<p class=sub><b>Benefit: </b>All variable, numeric effects of an empowered spell are increased by half. <p class=sub>Saving throws and opposed rolls are not affected, nor are spells without random variables. An empowered spell uses up a spell slot two levels higher than the spell�s actual level.You gain a +4 bonus on the following checks and saves: Swim checks made to resist nonlethal damage from exhaustion; Constitution checks made to continue running; Constitution checks made to avoid nonlethal damage from a forced march; Constitution checks made to hold your breath; Constitution checks made to avoid nonlethal damage from starvation or thirst; Fortitude saves made to avoid nonlethal damage from hot or cold environments; and Fortitude saves made to resist damage from suffocation.<p class=sub>You may sleep in light or medium armor without becoming fatigued.<p class=sub><b>Normal: </b>A character without this feat who sleeps in medium or heavier armor is fatigued the next day.",

			benefit : {},
			conditional : true,
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Enlarge Spell",
			summary : "Double spell range",
			description : "You can increase the range of your spells.<p class=sub><b>Benefit: </b>You can alter a spell with a range of close, medium, or long to increase its range by 100%. An enlarged spell with a range of close now has a range of 50 ft. + 5 ft./ level, while medium-range spells have a range of 200 ft. + 20 ft./level and long-range spells have a range of 800 ft. + 80 ft./level. An enlarged spell uses up a spell slot one level higher than the spell�s actual level.<p class=sub>Spells whose ranges are not defined by distance, as well as spells whose ranges are not close, medium, or long, do not benefit from this feat.",
			prereqs : {
				or : [ {
					class_features : [ "Cast Arcane" ]
				}, {
					class_features : [ "Cast Divine" ]
				} ]
			},
			benefit : {
			// TODO - op to modify spell description
			},
			conditional : true,
			groups : [ "Metamagic" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Eschew Materials",
			summary : "Cast spells without material components",
			description : "You can cast many spells without needing to utilize minor material components.<p class=sub><b>Benefit: </b>You can cast any spell with a material component costing 1 gp or less without needing that component. The casting of the spell still provokes attacks of opportunity as normal. If the spell requires a material component that costs more than 1 gp, you must have the material component on hand to cast the spell, as normal.",
			prereqs : {
				or : [ {
					class_features : [ "Cast Arcane" ]
				}, {
					class_features : [ "Cast Divine" ]
				} ]
			},
			benefit : {},
			conditional : true,
			groups : [ "Metamagic" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Exhausting Critical",
			summary : "Whenever you score a critical hit, the target is exhausted",
			description : "Your critical hits cause opponents to become exhausted.<p class=sub><b>Prerequisites: </b>Critical Focus, Tiring Critical, base attack bonus +15<p class=sub><b>Benefit: </b>When you score a critical hit on a foe, your target immediately becomes exhausted. This feat has no effect on exhausted creatures. <p class=sub><b>Special: </b>You can only apply the effects of one critical feat to a given critical hit unless you possess the Critical Mastery feat.",
			prereqs : {
				feats : [ "Tiring Critical" ],
				base_attack_bonus : 15
			},
			benefit : {},
			conditional : true,
			groups : [ "Combat", "Critical" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Exotic Weapon Proficiency",
			summary : "No penalty on attacks made with one exotic weapon",
			description : "<p class=sub><b>Prerequisites: </b>Base attack bonus +1<p class=sub><b>Benefit: </b>You make attack rolls with the weapon normally. <p class=sub><b>Normal: </b>A character who uses a weapon with which he is not proficient takes a �4 penalty on attack rolls. <p class=sub><b>Special: </b>You can gain Exotic Weapon Proficiency multiple times. Each time you take the feat, it applies to a new type of exotic weapon.",
			prereqs : {
				base_attack_bonus : 1
			},
			benefit : {},
			groups : [ "Combat" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Extend Spell",
			summary : "Double spell duration",
			description : "You can make your spells last twice as long.<p class=sub><b>Benefit: </b>An extended spell lasts twice as long as normal. A spell with a duration of concentration, instantaneous, or permanent is not affected by this feat. An extended spell uses up a spell slot one level higher than the spell�s actual level.",
			prereqs : {
				or : [ {
					class_features : [ "Cast Arcane" ]
				}, {
					class_features : [ "Cast Divine" ]
				} ]
			},
			benefit : {
			// TODO - op to modify spell description
			},
			conditional : true,
			groups : [ "Metamagic" ],
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Extra Channel",
			summary : "Channel energy two additional times per day",
			description : "You can channel divine energy more often.<p class=sub><b>Prerequisites: </b>Channel energy class feature<p class=sub><b>Benefit: </b>You can channel energy two additional times per day. <p class=sub><b>Special: </b>If a paladin with the ability to channel positive energy takes this feat, she can use lay on hands four additional times a day, but only to channel positive energy.",
			prereqs : {
				class_features : [ "Channel Energy" ]
			},
			benefit : {},
			conditional : true,
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Extra Ki",
			summary : "Increase your ki pool by 2 points",
			description : "You can use your ki pool more times per day than most.<p class=sub><b>Prerequisites: </b>Ki pool class feature<p class=sub><b>Benefit: </b>Your ki pool increases by 2.<p class=sub><b>Special: </b>You can gain Extra Ki multiple times. Its effects stack.",
			prereqs : {
				class_features : [ "Ki Pool" ]
			},
			benefit : {},
			conditional : true,
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Extra Lay On Hands",
			summary : "Use lay on hands two additional times per day",
			description : "You can use your lay on hands ability more often.<p class=sub><b>Prerequisites: </b>Lay on hands class feature<p class=sub><b>Benefit: </b>You can use your lay on hands ability two additional times per day.<p class=sub><b>Special: </b>You can gain Extra Lay On Hands multiple times. Its effects stack.",
			prereqs : {
				class_features : [ "Lay On Hands" ]
			},
			benefit : {},
			conditional : true,
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Extra Mercy",
			summary : "Your lay on hands benefits from one additional mercy",
			description : "You can use your lay on hands ability more often.<p class=sub><b>Prerequisites: </b>Lay on hands class feature, mercy class feature<p class=sub><b>Benefit: </b>Select one additional mercy for which you qualify. When you use lay on hands to heal damage to one target, it also receives the additional effects of this mercy.<p class=sub><b>Special: </b>You can gain this feat multiple times. Its effects do not stack. Each time you take this feat, select a new mercy.",
			prereqs : {
				class_features : [ "Lay On Hands", "Mercy" ]
			},
			benefit : {},
			conditional : true,
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Extra Performance",
			summary : "Use bardic performance for 6 additional rounds per day",
			description : "You can use your bardic performance ability more often than normal.<p class=sub><b>Prerequisites: </b>Bardic performance class feature.<p class=sub><b>Benefit: </b>You can use bardic performance for 6 additional rounds per day.<p class=sub><b>Special: </b>You can gain Extra Performance multiple times. Its effects stack.",
			prereqs : {
				class_features : [ "Bardic Performance" ]
			},
			benefit : {},
			conditional : true

			,
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Extra Rage",
			summary : "Use rage for 6 additional rounds per day",
			description : "You can use your rage ability more than normal. <p class=sub><b>Prerequisite: </b>Rage class feature <p class=sub><b>Benefit: </b>You can rage for 6 additional rounds per day. <p class=sub><b>Special: </b>You can gain Extra Rage multiple times. Its effects stack.",
			prereqs : {},
			benefit : {},
			summary : "Use rage for 6 additional rounds per day",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Far Shot",
			summary : "Decrease ranged penalties by half",
			description : "You are more accurate at longer ranges. <p class=sub><b>Prerequisites: </b>Point-Blank Shot <p class=sub><b>Benefit: </b>You only suffer a -1 penalty per full range increment between you and your target when using a ranged weapon. <p class=sub><b>Normal: </b>You suffer a -2 penalty per full range increment between you and your target.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Decrease ranged penalties by half",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Fleet",
			summary : "Your base speed increases by 5 feet",
			description : "You are faster than most. <p class=sub><b>Benefit: </b>While you are wearing light or no armor, your base speed increases by 5 feet. You lose the benefits of this feat if you carry a medium or heavy load. <p class=sub><b>Special: </b>You can take this feat multiple times. The effects stack.",
			prereqs : {},
			benefit : {},
			summary : "Your base speed increases by 5 feet",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Forge Ring",
			summary : "Create magic rings.",
			description : "You can create magic rings. <p class=sub><b>Prerequisite: </b>Caster level 7th <p class=sub><b>Benefit: </b>You can create magic rings. Crafting a ring takes 1 day for each 1,000 gp in its base price. To craft a ring, you must use up raw materials costing half of the base price. See the magic item creation rules in Chapter 15 for more information. <p class=sub>You can also mend a broken ring if it is one that you could make. Doing so costs half the raw materials and half the time it would take to forge that ring in the first place.",
			prereqs : {},
			benefit : {},
			groups : [ "Item Creation" ],
			summary : "Create magic rings",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Gorgon&apos;s Fist",
			summary : "Stagger a foe whose speed is reduced",
			description : "With one well-placed blow, you leave your target reeling. <p class=sub><b>Prerequisites: </b>Improved Unarmed Strike, Scorpion Style, base attack bonus +6. <p class=sub><b>Benefit: </b>As a standard action, make a single unarmed melee attack against a foe whose speed is reduced (such as from Scorpion Style). If the attack hits, you deal damage normally and the target is staggered until the end of your next turn unless it makes a Fortitude saving throw (DC 10 + 1/2 your character level + your Wis modifier). This feat has no effect on targets that are staggered.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Stagger a foe whose speed is reduced",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Great Cleave",
			summary : "Make an additional attack after each attack hits",
			description : "You can strike many adjacent foes with a single blow. <p class=sub><b>Prerequisites: </b>Str 13, Cleave, Power Attack, base attack bonus +4. <p class=sub><b>Benefit: </b>As a standard action, you can make a single attack at your full base attack bonus against a foe within reach. If you hit, you deal damage normally and can make an additional attack (using your full base attack bonus) against a foe that is adjacent to the previous foe and also within reach. If you hit, you can continue to make attacks against foes adjacent to the previous foe, so long as they are within your reach. You cannot attack an individual foe more than once during this attack action. When you use this feat, you take a -2 penalty to your Armor Class until your next turn.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Make an additional attack after each attack hits",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Great Fortitude",
			summary : "+2 on Fortitude saves ",
			description : "You are resistant to poisons, diseases, and other maladies. <p class=sub><b>Benefit: </b>You get a +2 bonus on all Fortitude saving throws.",
			prereqs : {},
			benefit : {},
			summary : "+2 on Fortitude saves",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Greater Bull Rush",
			summary : "Enemies you bull rush provoke attacks of opportunity",
			description : "Your bull rush attacks throw enemies off balance. <p class=sub><b>Prerequisites: </b>Improved Bull Rush, Power Attack, base attack bonus +6, Str 13. <p class=sub><b>Benefit: </b>You receive a +2 bonus on checks made to bull rush a foe. This bonus stacks with the bonus granted by Improved Bull Rush. Whenever you bull rush an opponent, his movement provokes attacks of opportunity from all of your allies (but not you). <p class=sub><b>Normal: </b>Creatures moved by bull rush do not provoke attacks of opportunity.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Enemies you bull rush provoke attacks of opportunity",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Greater Disarm",
			summary : "Disarmed weapons are knocked away from your enemy",
			description : "You can knock weapons far from an enemy&apos;s grasp. <p class=sub><b>Prerequisites: </b>Combat Expertise, Improved Disarm, base attack bonus +6, Int 13. <p class=sub><b>Benefit: </b>You receive a +2 bonus on checks made to disarm a foe. This bonus stacks with the bonus granted by Improved Disarm. Whenever you successfully disarm an opponent, the weapon lands 15 feet away from its previous wielder, in a random direction. <p class=sub><b>Normal: </b>Disarmed weapons and gear land at the feet of the disarmed creature.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Disarmed weapons are knocked away from your enemy",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Greater Feint",
			summary : "Enemies you feint lose their Dex bonus for 1 round",
			description : "You are skilled at making foes overreact to your attacks. <p class=sub><b>Prerequisites: </b>Combat Expertise, Improved Feint, base attack bonus +6, Int 13. <p class=sub><b>Benefit: </b>Whenever you use feint to cause an opponent to lose his Dexterity bonus, he loses that bonus until the beginning of your next turn, in addition to losing his Dexterity bonus against your next attack. <p class=sub><b>Normal: </b>A creature you feint loses its Dexterity bonus against your next attack.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Enemies you feint lose their Dex bonus for 1 round",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Greater Grapple",
			summary : "Maintain your grapple as a move action",
			description : "Maintaining a grapple is second nature to you. <p class=sub><b>Prerequisites: </b>Improved Grapple, Improved Unarmed Strike, base attack bonus +6, Dex 13. <p class=sub><b>Benefit: </b>You receive a +2 bonus on checks made to grapple a foe. This bonus stacks with the bonus granted by Improved Grapple. Once you have grappled a creature, maintaining the grapple is a move action. This feat allows you to make two grapple checks each round (to move, harm, or pin your opponent), but you are not required to make two checks. You only need to succeed at one of these checks to maintain the grapple. <p class=sub><b>Normal: </b>Maintaining a grapple is a standard action.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Maintain your grapple as a move action",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Greater Overrun",
			summary : "Enemies you overrun provoke attacks of opportunity",
			description : "Enemies must dive to avoid your dangerous move. <p class=sub><b>Prerequisites: </b>Improved Overrun, Power Attack, base attack bonus +6, Str 13. <p class=sub><b>Benefit: </b>You receive a +2 bonus on checks made to overrun a foe. This bonus stacks with the bonus granted by Improved Overrun. Whenever you overrun opponents, they provoke attacks of opportunity if they are knocked prone by your overrun. <p class=sub><b>Normal: </b>Creatures knocked prone by your overrun do not provoke an attack of opportunity.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Enemies you overrun provoke attacks of opportunity",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Greater Penetrating Strike",
			summary : "Your attacks ignore 10 points of damage reduction",
			description : "Your attacks penetrate the defenses of most foes. Choose a weapon that you have selected for Penetrating Strike. <p class=sub><b>Prerequisites: </b>Penetrating Strike, Weapon Focus, 16thlevel fighter. <p class=sub><b>Benefit: </b>Your attacks with the selected weapon ignore up to 10 points of damage reduction. This amount is reduced to 5 points for damage reduction without a type (such as DR 10/-).",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Your attacks ignore 10 points of damage reduction",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Greater Shield Focus",
			summary : "Gain a +1 bonus to your AC when using a shield",
			description : "You are skilled at deflecting blows with your shield. <p class=sub><b>Prerequisites: </b>Shield Focus, Shield Proficiency, base attack bonus +1, 8th-level fighter. <p class=sub><b>Benefit: </b>Increase the AC bonus granted by any shield you are using by 1. This bonus stacks with the bonus granted by Shield Focus.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Gain a +1 bonus to your AC when using a shield",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Greater Spell Focus",
			summary : "+1 bonus on save DCs for one school",
			description : "Choose a school of magic to which you have already applied the Spell Focus feat. Any spells you cast of this school are very hard to resist. <p class=sub><b>Prerequisite: </b>Spell Focus <p class=sub><b>Benefit: </b>Add +1 to the Difficulty Class for all saving throws against spells from the school of magic you select. This bonus stacks with the bonus from Spell Focus. <p class=sub><b>Special: </b>You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new school to which you already have applied the Spell Focus feat.",
			prereqs : {},
			benefit : {},
			summary : "+1 bonus on save DCs for one school",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Greater Spell Penetration",
			summary : "+2 bonus on level checks to beat spell resistance",
			description : "Your spells break through spell resistance much more easily than most. <p class=sub><b>Prerequisite: </b>Spell Penetration <p class=sub><b>Benefit: </b>You get a +2 bonus on caster level checks (1d20 + caster level) made to overcome a creature&apos;s spell resistance. This bonus stacks with the one from Spell Penetration.",
			prereqs : {},
			benefit : {},
			summary : "+2 bonus on level checks to beat spell resistance",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Greater Sunder",
			summary : "Damage from sunder attempts transfers to your enemy",
			description : "Your devastating strikes cleave through weapons and armor and into their wielders, damaging both item and wielder alike in a single terrific strike. <p class=sub><b>Prerequisites: </b>Improved Sunder, Power Attack, base attack bonus +6, Str 13. <p class=sub><b>Benefit: </b>You receive a +2 bonus on checks made to sunder an item. This bonus stacks with the bonus granted by Improved Sunder. Whenever you sunder to destroy a weapon, shield, or suit of armor, any excess damage is applied to the item&apos;s wielder. No damage is transferred if you decide to leave the item with 1 hit point.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Damage from sunder attempts transfers to your enemy",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Greater Trip",
			summary : "Enemies you trip provoke attacks of opportunity ",
			description : "You can make free attacks on foes that you knock down. <p class=sub><b>Prerequisites: </b>Combat Expertise, Improved Trip, base attack bonus +6, Int 13. <p class=sub><b>Benefit: </b>You receive a +2 bonus on checks made to trip a foe. This bonus stacks with the bonus granted by Improved Trip. Whenever you successfully trip an opponent, that opponent provokes attacks of opportunity. <p class=sub><b>Normal: </b>Creatures do not provoke attacks of opportunity from being tripped.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Enemies you trip provoke attacks of opportunity",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Greater Two-Weapon Fighting",
			summary : "Gain a third off-hand attack",
			description : "You are incredibly skilled at fighting with two weapons at the same time. <p class=sub><b>Prerequisites: </b>Dex 19, Improved Two-Weapon Fighting, Two-Weapon Fighting, base attack bonus +11. <p class=sub><b>Benefit: </b>You get a third attack with your off-hand weapon, albeit at a -10 penalty.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Gain a third off-hand attack  ",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Greater Vital Strike",
			summary : "Deal four times the normal damage on a single attack",
			description : "You can make a single attack that deals incredible damage. <p class=sub><b>Prerequisites: </b>Improved Vital Strike, Vital Strike, base attack bonus +16. <p class=sub><b>Benefit: </b>When you use the attack action, you can make one attack at your highest base attack bonus that deals additional damage. Roll the damage dice for the attack four times and add the results together, but do not multiply damage bonuses from Strength, weapon abilities (such as f laming), or precision-based damage (such as sneak attack). This bonus damage is not multiplied on a critical hit (although other damage bonuses are multiplied normally).",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "6 Deal four times the normal damage on a single attack",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Greater Weapon Focus",
			summary : "+1 bonus on attack rolls with one weapon",
			description : "Choose one type of weapon (including unarmed strike or grapple) for which you have already selected Weapon Focus. You are a master at your chosen weapon. <p class=sub><b>Prerequisites: </b>Proficiency with selected weapon, Weapon Focus with selected weapon, base attack bonus +1, 8th-level fighter. <p class=sub><b>Benefit: </b>You gain a +1 bonus on attack rolls you make using the selected weapon. This bonus stacks with other bonuses on attack rolls, including those from Weapon Focus. <p class=sub><b>Special: </b>You can gain Greater Weapon Focus multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "+1 bonus on attack rolls with one weapon",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Greater Weapon Specialization",
			summary : "+2 bonus on damage rolls with one weapon",
			description : "Choose one type of weapon (including unarmed strike or grapple) for which you possess the Weapon Specialization feat. Your attacks with the chosen weapon are more devastating than normal. <p class=sub><b>Prerequisites: </b>Proficiency with selected weapon, Greater Weapon Focus with selected weapon, Weapon Focus with selected weapon, Weapon Specialization with selected weapon, 12th-level fighter. <p class=sub><b>Benefit: </b>You gain a +2 bonus on all damage rolls you make using the selected weapon. This bonus to damage stacks with other damage roll bonuses, including any you gain from Weapon Specialization. <p class=sub><b>Special: </b>You can gain Greater Weapon Specialization multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "+2 bonus on damage rolls with one weapon ",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Heighten Spell",
			summary : "Treat spell as a higher level",
			description : "You can cast spells as if they were a higher level. <p class=sub><b>Benefit: </b>A heightened spell has a higher spell level than normal (up to a maximum of 9th level). Unlike other metamagic feats, Heighten Spell actually increases the effective level of the spell that it modifies. All effects dependent on spell level (such as saving throw DCs and ability to penetrate a lesser globe of invulnerability) are calculated according to the heightened level. The heightened spell is as difficult to prepare and cast as a spell of its effective level.",
			prereqs : {},
			benefit : {},
			groups : [ "Metamagic" ],
			summary : "Treat spell as a higher level",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Bull Rush",
			summary : "+2 bonus on bull rush attempts, no attack of opportunity",
			description : "You are skilled at pushing your foes around. <p class=sub><b>Prerequisite: </b>Str 13, Power Attack, base attack bonus +1 <p class=sub><b>Benefit: </b>You do not provoke an attack of opportunity when performing a bull rush combat maneuver. In addition, you receive a +2 bonus on checks made to bull rush a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to bull rush you. <p class=sub><b>Normal: </b>You provoke an attack of opportunity when performing a bull rush combat maneuver.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "+2 bonus on bull rush attempts, no attack of opportunity",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Channel",
			summary : "+2 bonus on channel energy DC",
			description : "Your channeled energy is harder to resist. <p class=sub><b>Prerequisite: </b>Channel energy class feature <p class=sub><b>Benefit: </b>Add 2 to the DC of saving throws made to resist the effects of your channel energy ability.",
			prereqs : {},
			benefit : {},
			summary : "+2 bonus on channel energy DC",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Counterspell",
			summary : "Counterspell with spell of the same school",
			description : "You are skilled at countering the spells of others using similar spells. <p class=sub><b>Benefit: </b>When counterspelling, you may use a spell of the same school that is one or more spell levels higher than the target spell. <p class=sub><b>Normal: </b>Without this feat, you may counter a spell only with the same spell or with a spell specifically designated as countering the target spell.",
			prereqs : {},
			benefit : {},
			summary : "Counterspell with spell of the same school",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Critical",
			summary : "Double the threat range of one weapon",
			description : "Attacks made with your chosen weapon are quite deadly. <p class=sub><b>Prerequisite: </b>Proficient with weapon, base attack bonus +8 <p class=sub><b>Benefit: </b>When using the weapon you selected, your threat range is doubled. <p class=sub><b>Special: </b>You can gain Improved Critical multiple times. <p class=sub>The effects do not stack. Each time you take the feat, it applies to a new type of weapon. <p class=sub>This effect doesn&apos;t stack with any other effect that expands the threat range of a weapon.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Double the threat range of one weapon ",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Disarm",
			summary : "+2 bonus on disarm attempts, no attack of opportunity",
			description : "You are skilled at knocking weapons from a foe&apos;s grasp. <p class=sub><b>Prerequisite: </b>Int 13, Combat Expertise <p class=sub><b>Benefit: </b>You do not provoke an attack of opportunity when performing a disarm combat maneuver. In addition, you receive a +2 bonus on checks made to disarm a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to disarm you. <p class=sub><b>Normal: </b>You provoke an attack of opportunity when performing a disarm combat maneuver.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "+2 bonus on disarm attempts, no attack of opportunity",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Familiar",
			summary : "Gain a more powerful familiar",
			description : "This feat allows you to acquire a powerful familiar, but only when you could normally acquire a new familiar. <p class=sub><b>Prerequisites: </b>Ability to acquire a new familiar, compatible alignment, sufficiently high level (see below) <p class=sub><b>Benefit: </b>When choosing a familiar, the creatures listed below are also available to you (see the Pathfinder RPG Bestiary for statistics on these creatures). You may choose a familiar with an alignment up to one step away on each alignment axis (lawful through chaotic, good through evil). <table><tr><th>Familiar</th><th>Alignment</th><th>Arcane Spellcaster Level</th></tr> <tr><td>Celestial hawk<sup>1</sup> </td><td>Neutral Good </td><td>3rd</td></tr> <tr><td>Dire rat </td><td>Neutral </td><td>3rd</td></tr> <tr><td>Fiendish viper<sup>2</sup> </td><td>Neutral Evil </td><td>3rd</td></tr> <tr><td>Elemental, Small (any type) </td><td>Neutral <td>5th</td></tr> <tr><td>Stirge </td><td>Neutral </td><td>5th</td></tr> <tr><td>Homunculus<sup>3</sup> </td><td>Any </td><td>7th</td></tr> <tr><td>Imp </td><td>Lawful Evil </td><td>7th</td></tr> <tr><td>Mephit (any type) </td><td>Neutral </td><td>7th</td></tr> <tr><td>Pseudodragon </td><td>Neutral Good </td><td>7th</td></tr> <tr><td>Quasit </td><td>Chaotic Evil </td><td>7th</td></tr></table><p class=sub>1 Or other celestial animal from the standard familiar list. <p class=sub>2 Or other fiendish animal from the standard familiar list. <p class=sub>3 The master must first create the homunculus. <p class=sub>Improved familiars otherwise use the rules for regular familiars, with two exceptions: if the creature&apos;s type is something other than animal, its type does not change; and improved familiars do not gain the ability to speak with other creatures of their kind (although many of them already have the ability to communicate).",
			prereqs : {},
			benefit : {},
			summary : "Gain a more powerful familiar",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Feint",
			summary : "Feint as a move action",
			description : "You are skilled at fooling your opponents in combat. <p class=sub><b>Prerequisites: </b>Int 13, Combat Expertise <p class=sub><b>Benefit: </b>You can make a Bluff check to feint in combat as a move action. <p class=sub><b>Normal: </b>Feinting in combat is a standard action.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Feint as a move action",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Grapple",
			summary : "+2 bonus on grapple attempts, no attack of opportunity",
			description : "You are skilled at grappling opponents. <p class=sub><b>Prerequisite: </b>Dex 13, Improved Unarmed Strike <p class=sub><b>Benefit: </b>You do not provoke an attack of opportunity when performing a grapple combat maneuver. In addition, you receive a +2 bonus on checks made to grapple a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to grapple you. <p class=sub><b>Normal: </b>You provoke an attack of opportunity when performing a grapple combat maneuver.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "+2 bonus on grapple attempts, no attack of opportunity",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Great Fortitude",
			summary : "Once per day, you may reroll a Fortitude save",
			description : "You can draw upon an inner reserve to resist diseases, poisons, and other grievous harm. <p class=sub><b>Prerequisites: </b>Great Fortitude <p class=sub><b>Benefit: </b>Once per day, you may reroll a Fortitude save. <p class=sub>You must decide to use this ability before the results are revealed. You must take the second roll, even if it is worse.",
			prereqs : {},
			benefit : {},
			summary : "Once per day, you may reroll a Fortitude save",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Initiative",
			summary : "+4 bonus on initiative checks",
			description : "Your quick reflexes allow you to react rapidly to danger. <p class=sub><b>Benefit: </b>You get a +4 bonus on initiative checks.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "+4 bonus on initiative checks",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Iron Will",
			summary : "Once per day, you may reroll a Will save ",
			description : "Your clarity of thought allows you to resist mental attacks. <p class=sub><b>Prerequisites: </b>Iron Will <p class=sub><b>Benefit: </b>Once per day, you may reroll a Will save. You must decide to use this ability before the results are revealed. You must take the second roll, even if it is worse.",
			prereqs : {},
			benefit : {},
			summary : "Once per day, you may reroll a W ll save",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Lightning Reflexes",
			summary : "Once per day, you may reroll a Reflex save  ",
			description : "You have a knack for avoiding danger all around you. <p class=sub><b>Prerequisites: </b>Lightning reflexes <p class=sub><b>Benefit: </b>Once per day, you may reroll a reflex save. You must decide to use this ability before the results are revealed. You must take the second roll, even if it is worse.",
			prereqs : {},
			benefit : {},
			summary : "Once per day, you may reroll a Reflex save",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Overrun",
			summary : "+2 bonus on overrun attempts, no attack of opportunity",
			description : "You are skilled at running down your foes. <p class=sub><b>Prerequisite: </b>Str 13, Power Attack, base attack bonus +1 <p class=sub><b>Benefit: </b>You do not provoke an attack of opportunity when performing an overrun combat maneuver. In addition, you receive a +2 bonus on checks made to overrrun a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to overrun you. Targets of your overrun attempt may not chose to avoid you. <p class=sub><b>Normal: </b>You provoke an attack of opportunity when performing an overrun combat maneuver.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "+2 bonus on overrun attempts, no attack of opportunity",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Precise Shot",
			summary : "No cover or concealment chance on ranged attacks",
			description : "Your ranged attacks ignore anything but total concealment and cover. <p class=sub><b>Prerequisites: </b>Dex 19, Point-Blank Shot, Precise Shot, base attack bonus +11. <p class=sub><b>Benefit: </b>Your ranged attacks ignore the AC bonus granted to targets by anything less than total cover, and the miss chance granted to targets by anything less than total concealment. Total cover and total concealment provide their normal benefits against your ranged attacks. <p class=sub><b>Normal: </b>See the normal rules on the effects of cover and concealment in Chapter 8.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "No cover or concealment chance on ranged attacks",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Shield Bash",
			summary : "Keep your shield bonus when shield bashing",
			description : "You can protect yourself with your shield, even if you use it to attack. <p class=sub><b>Prerequisite: </b>Shield Proficiency <p class=sub><b>Benefit: </b>When you perform a shield bash, you may still apply the shield&apos;s shield bonus to your AC. <p class=sub><b>Normal: </b>Without this feat, a character that performs a shield bash loses the shield&apos;s shield bonus to AC until his next turn (see Chapter 6).",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Keep your shield bonus when shield bashing",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Sunder",
			summary : "+2 bonus on sunder attempts, no attack of opportunity",
			description : "You are skilled at damaging your foes&apos; weapons and armor. <p class=sub><b>Prerequisite: </b>Str 13, Power Attack, base attack bonus +1 <p class=sub><b>Benefit: </b>You do not provoke an attack of opportunity when performing a sunder combat maneuver. In addition, you receive a +2 bonus on checks made to sunder an item. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to sunder your gear. <p class=sub><b>Normal: </b>You provoke an attack of opportunity when performing a sunder combat maneuver.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "+2 bonus on sunder attempts, no attack of opportunity",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Trip",
			summary : "+2 bonus on trip attempts, no attack of opportunity",
			description : "You are skilled at sending your opponents to the ground. <p class=sub><b>Prerequisite: </b>Int 13, Combat Expertise <p class=sub><b>Benefit: </b>You do not provoke an attack of opportunity when performing a trip combat maneuver. In addition, you receive a +2 bonus on checks made to trip a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to trip you. <p class=sub><b>Normal: </b>You provoke an attack of opportunity when performing a trip combat maneuver.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "+2 bonus on trip attempts, no attack of opportunity",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Two-Weapon Fighting",
			summary : "Gain additional off-hand attack",
			description : "You are skilled at fighting with two weapons. <p class=sub><b>Prerequisites: </b>Dex 17, Two-Weapon Fighting, base attack bonus +6. <p class=sub><b>Benefit: </b>In addition to the standard single extra attack you get with an off-hand weapon, you get a second attack with it, albeit at a -5 penalty. <p class=sub><b>Normal: </b>Without this feat, you can only get a single extra attack with an off-hand weapon.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Gain additional off-hand attack ",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Unarmed Strike",
			summary : "Always considered armed",
			description : "You are skilled at fighting while unarmed. <p class=sub><b>Benefit: </b>You are considered to be armed even when unarmed-you do not provoke attacks of opportunity when you attack foes while unarmed. Your unarmed strikes can deal lethal or nonlethal damage, at your choice. <p class=sub><b>Normal: </b>Without this feat, you are considered unarmed when attacking with an unarmed strike, and you can deal only nonlethal damage with such an attack.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Always considered armed",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improved Vital Strike",
			summary : "Deal three times the normal damage on a single attack",
			description : "You can make a single attack that deals a large amount of damage. <p class=sub><b>Prerequisites: </b>Vital Strike, base attack bonus +11 <p class=sub><b>Benefit: </b>When you use the attack action, you can make one attack at your highest base attack bonus that deals additional damage. Roll the damage dice for the attack three times and add the results together, but do not multiply damage bonuses from Strength, weapon abilities (such as f laming), or precision-based damage (such as sneak attack). <p class=sub>This bonus damage is not multiplied on a critical hit (although other damage bonuses are multiplied normally).",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Deal three times the normal damage on a single attack",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Improvised Weapon Mastery",
			summary : "Make an improvised weapon deadly",
			description : "You can turn nearly any object into a deadly weapon, from a razor-sharp chair leg to a sack of f lour. <p class=sub><b>Prerequisites: </b>Catch Off-Guard or Throw Anything, base attack bonus +8. <p class=sub><b>Benefit: </b>You do not suffer any penalties for using an improvised weapon. Increase the amount of damage dealt by the improvised weapon by one step (for example, 1d4 becomes 1d6) to a maximum of 1d8 (2d6 if the improvised weapon is two-handed). The improvised weapon has a critical threat range of 19-20, with a critical multiplier of +2.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Make an improvised weapon deadly ",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Intimidating Prowess",
			summary : "Add Str to Intimidate  in addition to Cha",
			description : "Your physical might is intimidating to others. <p class=sub><b>Benefit: </b>Add your Strength modifier to Intimidate skill checks in addition to your Charisma modifier. Iron Will You are more resistant to mental effects. <p class=sub><b>Benefit: </b>You get a +2 bonus on all Will saving throws.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Add Str to Intimidate in addition to Cha",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Iron Will",
			summary : "+2 bonus on Will saves ",
			description : "null",
			prereqs : {},
			benefit : {},
			summary : "+2 bonus on Will saves",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Leadership",
			summary : "Gain a cohort and followers",
			description : "You attract followers to your cause and a companion to join you on your adventures. <p class=sub><b>Prerequisite: </b>Character level 7th <p class=sub><b>Benefits: </b>This feat enables you to attract a loyal cohort and a number of devoted subordinates who assist you. A cohort is generally an NPC with class levels, while followers are typically lower level NPCs. See Table 5-2 for what level of cohort and how many followers you can recruit. <p class=sub><b>Leadership Modifiers: </b>Several factors can affect your Leadership score, causing it to vary from the base score (character level + Cha modifier). Your reputation (from the point of view of the cohort or follower you are trying to attract) raises or lowers your Leadership score: <table><tr><th>Leader&apos;s Reputation</th> <th>Modifier</th></tr> <tr><td>Great renown</td> <td>+2</td></tr> <tr><td>Fairness and generosity</td> <td>+1</td></tr> <tr><td>Special power</td> <td>+1</td></tr> <tr><td>Failure</td> <td>-1</td></tr> <tr><td>Aloofness</td> <td>-1</td></tr> <tr><td>Cruelty</td> <td>-2</td></tr></table> <p class=sub>Other modifiers may apply when you try to attract a cohort, as listed below. <table><tr><th>The Leader... </th><th>Modifier</th></tr> <tr><td>Has a familiar, special mount, or animal companion</td> <td>-2</td></tr> <tr><td>Recruits a cohort of a different alignment</td> <td>-1</td> </tr> <tr><td>Caused the death of a cohort</td> <td>-2<sup>*</sup></td> </tr></table> <p class=sub>* Cumulative per cohort killed. <p class=sub>Followers have different priorities from cohorts. When you try to attract a follower, use the following modifiers. <table><tr><th>The Leader...</th> <th>Modifier</th></tr> <tr><td>Has a stronghold, base of operations, guildhouse, etc.</td> <td>+2</td></tr> <tr><td>Moves around a lot </td> <td>-1</td></tr> <tr><td>Caused the death of other followers </td> <td>-1</td></tr></table> <p class=sub><i>Leadership Score: </i>Your base Leadership score equals your level plus your Charisma modifier. In order to take into account negative Charisma modifiers, this table allows for very low Leadership scores, but you must still be 7th level or higher in order to gain the Leadership feat. Outside factors can affect your Leadership score, as detailed above. <p class=sub><i>Cohort Level: You can attract a cohort of up to this level. Regardless of your Leadership score, you can only recruit a cohort who is two or more levels lower than yourself. The cohort should be equipped with gear appropriate for its level (see Chapter 14). A cohort can be of any race or class. The cohort&apos;s alignment may not be opposed to your alignment on either the law/chaos or good/evil axis, and you take a -1 penalty to your Leadership score if you recruit a cohort of an alignment different from your own. <p class=sub>A cohort does not count as a party member when determining the party&apos;s XP. Instead, divide the cohort&apos;s level by your level. Multiply this result by the total XP awarded to you, then add that number of experience points to the cohort&apos;s total. <p class=sub>If a cohort gains enough XP to bring it to a level one lower than your level, the cohort does not gain the new level-its new XP total is 1 less than the amount needed to attain the next level. <p class=sub><i>Number of Followers by Level: </i>You can lead up to the indicated number of characters of each level. Followers are similar to cohorts, except they&apos;re generally low-level NPCs. Because they&apos;re usually 5 or more levels behind you, they&apos;re rarely effective in combat. <p class=sub>Followers don&apos;t earn experience and thus don&apos;t gain levels. When you gain a new level, consult Table 5-2 to determine if you acquire more followers, some of whom may be higher level than the existing followers. Don&apos;t consult the table to see if your cohort gains levels, however, because cohorts earn experience on their own.<table><tr><th rowspan=2>Leadership Score</th><th rowspan=2>Cohort Level</th><td colspan=6>Cohort Number of Followers by Level</td></tr> <tr><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th><th>5th</th><th>6th</th></tr> <tr><td>1 or lower</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr> <tr><td>2</td><td>1st</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr> <tr><td>3</td><td>2nd</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr> <tr><td>4</td><td>3rd</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr> <tr><td>5</td><td>3rd</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr> <tr><td>6</td><td>4th</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr> <tr><td>7</td><td>5th</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr> <tr><td>8</td><td>5th</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr> <tr><td>9</td><td>6th</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr> <tr><td>10</td><td>7th</td><td>5</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr> <tr><td>11</td><td>7th</td><td>6</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr> <tr><td>12</td><td>8th</td><td>8</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr> <tr><td>13</td><td>9th</td><td>10</td><td>1</td><td>-</td><td>-</td><td>-</td><td>-</td></tr> <tr><td>14</td><td>10th</td><td>15</td><td>1</td><td>-</td><td>-</td><td>-</td><td>-</td></tr> <tr><td>15</td><td>10th</td><td>20</td><td>2</td><td>1</td><td>-</td><td>-</td><td>-</td></tr> <tr><td>16</td><td>11th</td><td>25</td><td>2</td><td>1</td><td>-</td><td>-</td><td>-</td></tr> <tr><td>17</td><td>12th</td><td>30</td><td>3</td><td>1</td><td>1</td><td>-</td><td>-</td></tr> <tr><td>18</td><td>12th</td><td>35</td><td>3</td><td>1</td><td>1</td><td>-</td><td>-</td></tr> <tr><td>19</td><td>13th</td><td>40</td><td>4</td><td>2</td><td>1</td><td>1</td><td>-</td></tr> <tr><td>20</td><td>14th</td><td>50</td><td>5</td><td>3</td><td>2</td><td>1</td><td>-</td></tr> <tr><td>21</td><td>15th</td><td>60</td><td>6</td><td>3</td><td>2</td><td>1</td><td>1</td></tr> <tr><td>22</td><td>15th</td><td>75</td><td>7</td><td>4</td><td>2</td><td>2</td><td>1</td></tr> <tr><td>23</td><td>16th</td><td>90</td><td>9</td><td>5</td><td>3</td><td>2</td><td>1</td></tr> <tr><td>24</td><td>17th</td><td>110</td><td>11</td><td>6</td><td>3</td><td>2</td><td>1</td></tr> <tr><td>25 or higher</td><td>17th</td><td>135</td><td>13</td><td>7</td><td>4</td><td>2</td><td>2</td></tr></table>",
			prereqs : {},
			benefit : {},
			summary : "Gain a cohort and followers",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Lightning Reflexes",
			summary : "+2 bonus on Reflex saves ",
			description : "You have faster reflexes than normal. <p class=sub><b>Benefit: </b>You get a +2 bonus on all reflex saving throws.",
			prereqs : {},
			benefit : {},
			summary : "+2 bonus on Reflex saves",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Lightning Stance",
			summary : "Gain 50% concealment if you move",
			description : "The speed at which you move makes it nearly impossible for opponents to strike you. <p class=sub><b>Prerequisites: </b>Dex 17, Dodge, Wind Stance, base attack bonus +11. <p class=sub><b>Benefit: </b>If you take two actions to move or a withdraw action in a turn, you gain 50% concealment for 1 round.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Gain 50% concealment if you move",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Lunge",
			summary : "Take a G��2 penalty to your AC to attack with reach",
			description : "You can strike foes that would normally be out of reach. <p class=sub><b>Prerequisites: </b>Base attack bonus +6 <p class=sub><b>Benefit: </b>You can increase the reach of your melee attacks by 5 feet until the end of your turn by taking a -2 penalty to your AC until your next turn. You must decide to use this ability before any attacks are made.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Take a �2 penalty to your AC to attack with reach",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Magical Aptitude",
			summary : "+2 bonus on Spellcraft  and Use Magic Device checks ",
			description : "You are skilled at spellcasting and using magic items. <p class=sub><b>Benefit: </b>You get a +2 bonus on all Spellcraft checks and Use Magic Device checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
			prereqs : {},
			benefit : {},
			summary : "+2 bonus on Spellcraft and Use Magic Device checks",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Manyshot",
			summary : "Shoot two arrows simultaneously",
			description : "You can fire multiple arrows at a single target. <p class=sub><b>Prerequisites: </b>Dex 17, Point-Blank Shot, Rapid Shot, base attack bonus +6. <p class=sub><b>Benefit: </b>When making a full-attack action with a bow, your first attack fires two arrows. If the attack hits, both arrows hit. Apply precision-based damage (such as sneak attack) and critical hit damage only once for this attack. Damage bonuses from using a composite bow with a high Strength bonus apply to each arrow, as do other damage bonuses, such as a ranger&apos;s favored enemy bonus. Damage reduction and resistances apply separately to each arrow.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Shoot two arrows simultaneously",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Martial Weapon Proficiency",
			summary : "No penalty on attacks made with one martial weapon",
			description : "Choose a type of martial weapon. You understand how to use that type of martial weapon in combat. <p class=sub><b>Benefit: </b>You make attack rolls with the selected weapon normally (without the non-proficient penalty). <p class=sub><b>Normal: </b>When using a weapon with which you are not proficient, you take a -4 penalty on attack rolls. <p class=sub><b>Special: </b>Barbarians, fighters, paladins, and rangers are proficient with all martial weapons. They need not select this feat. <p class=sub>You can gain Martial Weapon Proficiency multiple times. Each time you take the feat, it applies to a new type of weapon.",
			prereqs : {},
			benefit : {},
			summary : "No penalty on attacks made with one martial weapon",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Master Craftsman",
			summary : "You can craft magic items without being a spellcaster",
			description : "Your superior crafting skills allow you to create simple magic items. <p class=sub><b>Prerequisites: </b>5 ranks in any Craft or Profession skill <p class=sub><b>Benefit: </b>Choose one Craft or Profession skill in which you possess at least 5 ranks. You receive a +2 bonus on your chosen Craft or Profession skill. Ranks in your chosen skill count as your caster level for the purposes of qualifying for the Craft Magic Arms and Armor and Craft Wondrous Item feats. You can create magic items using these feats, substituting your ranks in the chosen skill for your total caster level. You must use the chosen skill for the check to create the item. The DC to create the item still increases for any necessary spell requirements (see the magic item creation rules in Chapter 15). You cannot use this feat to create any spell-trigger or spell-activation item. <p class=sub><b>Normal: </b>Only spellcasters can qualify for the Craft Magic Arms and Armor and Craft Wondrous Item feats.",
			prereqs : {},
			benefit : {},
			summary : "You can craft magic items without being a spellcaster",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Maximize Spell",
			summary : "Maximize spell variables",
			description : "Your spells have the maximum possible effect. <p class=sub><b>Benefit: </b>All variable, numeric effects of a spell modified by this feat are maximized. Saving throws and opposed rolls are not affected, nor are spells without random variables. <p class=sub>A maximized spell uses up a spell slot three levels higher than the spell&apos;s actual level. <p class=sub>An empowered, maximized spell gains the separate benefits of each feat: the maximum result plus half the normally rolled result.",
			prereqs : {},
			benefit : {},
			groups : [ "Metamagic" ],
			summary : "Maximize spell variables",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Medusa&apos;s Wrath",
			summary : "Make 2 extra attacks against a hindered foe",
			description : "You can take advantage of your opponent&apos;s confusion, delivering multiple blows. <p class=sub><b>Prerequisites: </b>Improved Unarmed Strike, Gorgon&apos;s Fist, Scorpion Style, base attack bonus +11. <p class=sub><b>Benefit: </b>Whenever you use the full-attack action and make at least one unarmed strike, you can make two additional unarmed strikes at your highest base attack bonus. These bonus attacks must be made against a dazed, f lat-footed, paralyzed, staggered, stunned, or unconscious foe.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Make 2 extra attacks against a hindered foe",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Mobility",
			summary : "+4 AC against attacks of opportunity from movement",
			description : "You can easily move through a dangerous melee. <p class=sub><b>Prerequisites: </b>Dex 13, Dodge <p class=sub><b>Benefit: </b>You get a +4 dodge bonus to Armor Class against attacks of opportunity caused when you move out of or within a threatened area. A condition that makes you lose your Dexterity bonus to Armor Class (if any) also makes you lose dodge bonuses. <p class=sub>Dodge bonuses stack with each other, unlike most types of bonuses.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "+4 AC against attacks of opportunity from movement",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Mounted Archery",
			summary : "Halve the penalty for ranged attacks while mounted",
			description : "You are skilled at making ranged attacks while mounted. <p class=sub><b>Prerequisites: </b>Ride 1 rank, Mounted Combat <p class=sub><b>Benefit: </b>The penalty you take when using a ranged weapon while mounted is halved: -2 instead of -4 if your mount is taking a double move, and -4 instead of -8 if your mount is running.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Halve the penalty for ranged attacks while mounted",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Mounted Combat",
			summary : "Avoid attacks on mount with Ride  check ",
			description : "You are adept at guiding your mount through combat. <p class=sub><b>Prerequisite: </b>Ride 1 rank <p class=sub><b>Benefit: </b>Once per round when your mount is hit in combat, you may attempt a Ride check (as an immediate action) to negate the hit. The hit is negated if your Ride check result is greater than the opponent&apos;s attack roll.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Avoid attacks on mount with Ride check",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Natural Spell",
			summary : "Cast spells while using wild shape",
			description : "You can cast spells even while in a form that cannot normally cast spells. <p class=sub><b>Prerequisites: </b>Wis 13, wild shape class feature <p class=sub><b>Benefit: </b>You can complete the verbal and somatic components of spells while using wild shape. You substitute various noises and gestures for the normal verbal and somatic components of a spell. <p class=sub>You can also use any material components or focuses you possess, even if such items are melded within your current form. This feat does not permit the use of magic items while you are in a form that could not ordinarily use them, and you do not gain the ability to speak while using wild shape.",
			prereqs : {},
			benefit : {},
			summary : "Cast spells while using wild shape",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Nimble Moves",
			summary : "Ignore 5 feet of difficult terrain when you move",
			description : "You can move across a single obstacle with ease.<p class=sub><b>Prerequisites: </b>Dex 13 <p class=sub><b>Benefit: </b>Whenever you move, you may move through 5 feet of difficult terrain each round as if it were normal terrain. This feat allows you to take a 5-foot step into difficult terrain.",
			prereqs : {},
			benefit : {},
			summary : "Ignore 5 feet of difficult terrain when you move",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Penetrating Strike",
			summary : "Your attacks ignore 5 points of damage reduction",
			description : "Your attacks are capable of penetrating the defenses of some creatures. Choose one type of weapon that you have already selected for Weapon Focus. <p class=sub><b>Prerequisites: </b>Weapon Focus, base attack bonus +1, 12thlevel fighter, proficiency with weapon. <p class=sub><b>Benefit: </b>Your attacks with the selected weapon ignore up to 5 points of damage reduction. This feat does not apply to damage reduction without a type (such as DR 10/-).",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Your attacks ignore 5 points of damage reduction",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Persuasive",
			summary : "+2 bonus on Diplomacy and Intimidate checks",
			description : "You are skilled at swaying attitudes and intimidating others into your way of thinking. <p class=sub><b>Benefit: </b>You get a +2 bonus on Diplomacy and Intimidate skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
			prereqs : {},
			benefit : {},
			summary : "+2 bonus on Diplomacy and Intimidate checks",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Pinpoint Targeting",
			summary : "No armor or shield bonus on one ranged attack",
			description : "You can target the weak points in your opponent&apos;s armor. <p class=sub><b>Prerequisites: </b>Dex 19, Improved Precise Shot, Point- Blank Shot, Precise Shot, base attack bonus +16. <p class=sub><b>Benefit: </b>As a standard action, make a single ranged attack. The target does not gain any armor, natural armor, or shield bonuses to its Armor Class. You do not gain the benefit of this feat if you move this round.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "No armor or shield bonus on one ranged attack",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Point-Blank Shot",
			summary : "+1 attack and damage on targets within 30 feet",
			description : "You are especially accurate when making ranged attacks against close targets. <p class=sub><b>Benefit: </b>You get a +1 bonus on attack and damage rolls with ranged weapons at ranges of up to 30 feet.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "+1 attack and damage on targets within 30 feet",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Power Attack",
			summary : "Trade melee attack bonus for damage",
			description : "You can make exceptionally deadly melee attacks by sacrificing accuracy for strength. <p class=sub><b>Prerequisites: </b>Str 13, base attack bonus +1 <p class=sub><b>Benefit: </b>You can choose to take a -1 penalty on all melee attack rolls and combat maneuver checks to gain a +2 bonus on all melee damage rolls. This bonus to damage is increased by half (+50%) if you are making an attack with a two-handed weapon, a one handed weapon using two hands, or a primary natural weapon that adds 1-1/2 times your Strength modif ier on damage rolls. This bonus to damage is halved (-50%) if you are making an attack with an off-hand weapon or secondary natural weapon. When your base attack bonus reaches +4, and every 4 points thereafter, the penalty increases by -1 and the bonus to damage increases by +2. You must choose to use this feat before making an attack roll, and its effects last until your next turn. The bonus damage does not apply to touch attacks or effects that do not deal hit point damage.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Trade melee attack bonus for damage",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Precise Shot",
			summary : "No penalty for shooting into melee",
			description : "You are adept at firing ranged attacks into melee. <p class=sub><b>Prerequisite: </b>Point-Blank Shot <p class=sub><b>Benefit: </b>You can shoot or throw ranged weapons at an opponent engaged in melee without taking the standard -4 penalty on your attack roll.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "No penalty for shooting into melee",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Quick Draw",
			summary : "Draw weapon as a free action",
			description : "You can draw weapons faster than most. <p class=sub><b>Prerequisite: </b>Base attack bonus +1 <p class=sub><b>Benefit: </b>You can draw a weapon as a free action instead of as a move action. You can draw a hidden weapon (see the Sleight of Hand skill) as a move action. <p class=sub>A character who has selected this feat may throw weapons at his full normal rate of attacks (much like a character with a bow). <p class=sub>Alchemical items, potions, scrolls, and wands cannot be drawn quickly using this feat. <p class=sub><b>Normal: </b>Without this feat, you may draw a weapon as a move action, or (if your base attack bonus is +1 or higher) as a free action as part of movement. Without this feat, you can draw a hidden weapon as a standard action.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Draw weapon as a free action",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Quicken Spell",
			summary : "Cast spell as a swift action",
			description : "You can cast spells in a fraction of the normal time. <p class=sub><b>Benefit: </b>Casting a quickened spell is a swift action. You can perform another action, even casting another spell, in the same round as you cast a quickened spell. A spell whose casting time is more than 1 full-round action cannot be quickened. <p class=sub>A quickened spell uses up a spell slot four levels higher than the spell&apos;s actual level. Casting a quickened spell doesn&apos;t provoke an attack of opportunity. <p class=sub><b>Special: </b>You can apply the effects of this feat to a spell cast spontaneously, so long as it has a casting time that is not more than 1 full-round action, without increasing the spell&apos;s casting time.",
			prereqs : {},
			benefit : {},
			groups : [ "Metamagic" ],
			summary : "Cast spell as a swift action",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Rapid Reload",
			summary : "Reload crossbow quickly",
			description : "Choose a type of crossbow (hand, light, or heavy). You can reload such weapons quickly. <p class=sub><b>Prerequisite: </b>Weapon Proficiency (crossbow type chosen) <p class=sub><b>Benefit: </b>The time required for you to reload your chosen type of crossbow is reduced to a free action (for a hand or light crossbow) or a move action (for a heavy crossbow). Reloading a crossbow still provokes an attack of opportunity. <p class=sub>If you have selected this feat for hand crossbow or light crossbow, you may fire that weapon as many times in a full-attack action as you could attack if you were using a bow. <p class=sub><b>Normal: </b>A character without this feat needs a move action to reload a hand or light crossbow, or a full-round action to reload a heavy crossbow. <p class=sub><b>Special: </b>You can gain Rapid Reload multiple times. Each time you take the feat, it applies to a new type of crossbow.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Reload crossbow quickly",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Rapid Shot",
			summary : "Make one extra ranged attack",
			description : "You can make an additional ranged attack. <p class=sub><b>Prerequisites: </b>Dex 13, Point-Blank Shot <p class=sub><b>Benefit: </b>When making a full-attack action with a ranged weapon, you can fire one additional time this round. All of your attack rolls take a -2 penalty when using Rapid Shot.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Make one extra ranged attack",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Ride-By Attack",
			summary : "Move before and after a charge attack while mounted",
			description : "While mounted and charging, you can move, strike at a foe, and then continue moving. <p class=sub><b>Prerequisites: </b>Ride 1 rank, Mounted Combat <p class=sub><b>Benefit: </b>When you are mounted and use the charge action, you may move and attack as if with a standard charge and then move again (continuing the straight line of the charge). Your total movement for the round can&apos;t exceed double your mounted speed. You and your mount do not provoke an attack of opportunity from the opponent that you attack.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Move before and after a charge attack while mounted",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Run",
			summary : "Run at 5 times your normal speed",
			description : "You are swift of foot. <p class=sub><b>Benefit: </b>When running, you move five times your normal speed (if wearing medium, light, or no armor and carrying no more than a medium load) or four times your speed (if wearing heavy armor or carrying a heavy load). If you make a jump after a running start (see the Acrobatics skill description), you gain a +4 bonus on your Acrobatics check. While running, you retain your Dexterity bonus to your Armor Class. <p class=sub><b>Normal: </b>You move four times your speed while running (if wearing medium, light, or no armor and carrying no more than a medium load) or three times your speed (if wearing heavy armor or carrying a heavy load), and you lose your Dexterity bonus to AC.",
			prereqs : {},
			benefit : {},
			summary : "Run at 5 times your normal speed",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Scorpion Style",
			summary : "Reduce target&apos;s speed to 5 ft.",
			description : "You can perform an unarmed strike that greatly hampers your target&apos;s movement. <p class=sub><b>Prerequisite: </b>Improved Unarmed Strike <p class=sub><b>Benefit: </b>To use this feat, you must make a single unarmed attack as a standard action. If this unarmed attack hits, you deal damage normally, and the target&apos;s base land speed is reduced to 5 feet for a number of rounds equal to your Wisdom modifier unless it makes a Fortitude saving throw (DC 10 + 1/2 your character level + your Wis modifier).",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Reduce target�s speed to 5 ft.",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Scribe Scroll",
			summary : "Create magic scrolls",
			description : "You can create magic scrolls. <p class=sub><b>Prerequisite: </b>Caster level 1st <p class=sub><b>Benefit: </b>You can create a scroll of any spell that you know. Scribing a scroll takes 2 hours if its base price is 250 gp or less, otherwise scribing a scroll takes 1 day for each 1,000 gp in its base price. To scribe a scroll, you must use up raw materials costing half of this base price. See the magic item creation rules in Chapter 15 for more information.",
			prereqs : {},
			benefit : {},
			groups : [ "Item Creation" ],
			summary : "Create magic scrolls",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Selective Channeling",
			summary : "Choose whom to affect with channel energy",
			description : "You can choose whom to affect when you channel energy. <p class=sub><b>Prerequisite: </b>Cha 13, channel energy class feature <p class=sub><b>Benefit: </b>When you channel energy, you can choose a number of targets in the area up to your Charisma modifier. These targets are not affected by your channeled energy. <p class=sub><b>Normal: </b>All targets in a 30-foot burst are affected when you channel energy. You can only choose whether or not you are affected.",
			prereqs : {},
			benefit : {},
			summary : "Choose whom to affect with channel energy",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Self-Sufficient",
			summary : "+2 bonus on Heal and Survival  checks ",
			description : "You know how to get along in the wild and how to effectively treat wounds. <p class=sub><b>Benefit: </b>You get a +2 bonus on all Heal checks and Survival checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
			prereqs : {},
			benefit : {},
			summary : "+2 bonus on Heal and Survival checks",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Shatter Defenses",
			summary : "Hindered foes are flat-footed",
			description : "Your skill with your chosen weapon leaves opponents unable to defend themselves if you strike them when their defenses are already compromised. <p class=sub><b>Prerequisites: </b>Weapon Focus, Dazzling Display, base attack bonus +6, proficiency with weapon. <p class=sub><b>Benefit: </b>Any shaken, frightened, or panicked opponent hit by you this round is f lat-footed to your attacks until the end of your next turn. This includes any additional attacks you make this round.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Hindered foes are flat-footed",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Shield Focus",
			summary : "Gain a +1 bonus to your AC when using a shield",
			description : "You are skilled at deflecting blows with your shield. <p class=sub><b>Prerequisites: </b>Shield Proficiency, base attack bonus +1 <p class=sub><b>Benefit: </b>Increase the AC bonus granted by any shield you are using by 1.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Gain a +1 bonus to your AC when using a shield",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Shield Master",
			summary : "No two-weapon penalties when attacking with a shield",
			description : "Your mastery of the shield allows you to fight with it without hindrance. <p class=sub><b>Prerequisites: </b>Improved Shield Bash, Shield Proficiency, Shield Slam, Two-Weapon Fighting, base attack bonus +11. <p class=sub><b>Benefit: </b>You do not suffer any penalties on attack rolls made with a shield while you are wielding another weapon. Add your shield&apos;s shield bonus to attacks and damage rolls made with the shield as if it was an enhancement bonus.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "No two-weapon penalties when attacking with a shield",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Shield Proficiency",
			summary : "No penalties on attack rolls when using a shield",
			description : "You are trained in how to properly use a shield. <p class=sub><b>Benefit: </b>When you use a shield (except a tower shield), the shield&apos;s armor check penalty only applies to Strength- and Dexterity-based skills. <p class=sub><b>Normal: </b>When you are using a shield with which you are not proficient, you take the shield&apos;s armor check penalty on attack rolls and on all skill checks that involve moving. <p class=sub><b>Special: </b>Barbarians, bards, clerics, druids, fighters, paladins, and rangers all automatically have Shield Proficiency as a bonus feat. They need not select it.",
			prereqs : {},
			benefit : {},
			summary : "No penalties on attack rolls when using a shield",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Shield Slam",
			summary : "Free bull rush with a bash attack",
			description : "In the right position, your shield can be used to send opponents flying. <p class=sub><b>Prerequisites: </b>Improved Shield Bash, Shield Proficiency, Two-Weapon Fighting, base attack bonus +6. <p class=sub><b>Benefit: </b>Any opponents hit by your shield bash are also hit with a free bull rush attack, substituting your attack roll for the combat maneuver check (see Chapter 8). This bull rush does not provoke an attack of opportunity. Opponents who cannot move back due to a wall or other surface are knocked prone after moving the maximum possible distance. You may choose to move with your target if you are able to take a 5-foot step or to spend an action to move this turn.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Free bull rush with a bash attack ",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Shot on the Run",
			summary : "Make ranged attack at any point during movement",
			description : "You can move, fire a ranged weapon, and move again before your foes can react. <p class=sub><b>Prerequisites: </b>Dex 13, Dodge, Mobility, Point-Blank Shot, base attack bonus +4. <p class=sub><b>Benefit: </b>As a full-round action, you can move up to your speed and make a single ranged attack at any point during your movement. <p class=sub><b>Normal: </b>You cannot move before and after an attack with a ranged weapon.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Make ranged attack at any point during movement ",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Sickening Critical",
			summary : "Whenever you score a critical hit, the target is sickened",
			description : "Your critical hits cause opponents to become sickened. <p class=sub><b>Prerequisites: </b>Critical Focus, base attack bonus +11 <p class=sub><b>Benefit: </b>Whenever you score a critical hit, your opponent becomes sickened for 1 minute. The effects of this feat do not stack. Additional hits instead add to the effect&apos;s duration. <p class=sub><b>Special: </b>You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.",
			prereqs : {},
			benefit : {},
			groups : [ "Critical", "Combat" ],
			summary : "Whenever you score a critical hit, the target is sickened",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Silent Spell",
			summary : "Cast spell without verbal components",
			description : "You can cast your spells without making any sound. <p class=sub><b>Benefit: </b>A silent spell can be cast with no verbal components. Spells without verbal components are not affected. A silent spell uses up a spell slot one level higher than the spell&apos;s actual level. <p class=sub><b>Special: </b>Bard spells cannot be enhanced by this feat.",
			prereqs : {},
			benefit : {},
			groups : [ "Metamagic" ],
			summary : "Cast spell without verbal components",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Simple Weapon Proficiency",
			summary : "No penalty on attacks made with simple weapons",
			description : "You are trained in the use of basic weapons. <p class=sub><b>Benefit: </b>You make attack rolls with simple weapons without penalty. <p class=sub><b>Normal: </b>When using a weapon with which you are not proficient, you take a -4 penalty on attack rolls. <p class=sub><b>Special: </b>All characters except for druids, monks, and wizards are automatically proficient with all simple weapons. They need not select this feat.",
			prereqs : {},
			benefit : {},
			summary : "No penalty on attacks made with simple weapons",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Skill Focus",
			summary : "+3 bonus on one skill (+6 at 10 ranks)",
			description : "Choose a skill. You are particularly adept at that skill. <p class=sub><b>Benefit: </b>You get a +3 bonus on all checks involving the chosen skill. If you have 10 or more ranks in that skill, this bonus increases to +6. <p class=sub><b>Special: </b>You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new skill.",
			prereqs : {},
			benefit : {},
			summary : "+3 bonus on one skill (+6 at 10 ranks)",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Snatch Arrows",
			summary : "Catch one ranged attack per round",
			description : "Instead of knocking an arrow or ranged attack aside, you can catch it in mid-flight. <p class=sub><b>Prerequisites: </b>Dex 15, Deflect Arrows, Improved Unarmed Strike. <p class=sub><b>Benefit: </b>When using the Deflect Arrows feat you may choose to catch the weapon instead of just deflecting it. Thrown weapons can immediately be thrown back as an attack against the original attacker (even though it isn&apos;t your turn) or kept for later use. <p class=sub>You must have at least one hand free (holding nothing) to use this feat.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Catch one ranged attack per round",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Spell Focus",
			summary : "+1 bonus on save DCs for one school",
			description : "Choose a school of magic. Any spells you cast of that school are more difficult to resist. <p class=sub><b>Benefit: </b>Add +1 to the Difficulty Class for all saving throws against spells from the school of magic you select. <p class=sub><b>Special: </b>You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new school of magic.",
			prereqs : {},
			benefit : {},
			summary : "+1 bonus on save DCs for one school",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Spell Mastery",
			summary : "Prepare some spells without a spellbook",
			description : "You have mastered a small handful of spells, and can prepare these spells without referencing your spellbooks at all. <p class=sub><b>Prerequisite: </b>1st-level wizard <p class=sub><b>Benefit: </b>Each time you take this feat, choose a number of spells that you already know equal to your Intelligence modifier. From that point on, you can prepare these spells without referring to a spellbook. <p class=sub><b>Normal: </b>Without this feat, you must use a spellbook to prepare all your spells, except read magic.",
			prereqs : {},
			benefit : {},
			summary : "Prepare some spells without a spellbook",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Spell Penetration",
			summary : "+2 bonus on level checks to beat spell resistance",
			description : "Your spells break through spell resistance more easily than most. <p class=sub><b>Benefit: </b>You get a +2 bonus on caster level checks (1d20 + caster level) made to overcome a creature&apos;s spell resistance. Spellbreaker (Combat) You can strike at enemy spellcasters who fail to cast defensively when you threaten them. <p class=sub><b>Prerequisites: </b>Disruptive, 10th-level fighter <p class=sub><b>Benefit: </b>Enemies in your threatened area that fail their checks to cast spells defensively provoke attacks of opportunity from you. <p class=sub><b>Normal: </b>Enemies that fail to cast spells defensively do not provoke attacks of opportunity. ",
			prereqs : {},
			benefit : {},
			summary : "+2 bonus on level checks to beat spell resistance",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Spellbreaker",
			summary : "Enemies provoke attacks if their spells fail",
			description : "null",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Enemies provoke attacks if their spells fail",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Spirited Charge",
			summary : "Double damage on a mounted charge",
			description : "Your mounted charge attacks deal a tremendous amount of damage. <p class=sub><b>Prerequisites: </b>Ride 1 rank, Mounted Combat, Ride- By Attack. <p class=sub><b>Benefit: </b>When mounted and using the charge action, you deal double damage with a melee weapon (or triple damage with a lance).",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Double damage on a mounted charge",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Spring Attack",
			summary : "Move before and after melee attack",
			description : "You can deftly move up to a foe, strike, and withdraw before he can react. <p class=sub><b>Prerequisites: </b>Dex 13, Dodge, Mobility, base attack bonus +4. <p class=sub><b>Benefit: </b>You can move up to your speed and make a single melee attack without provoking any attacks of opportunity from the target of your attack. You can move both before and after the attack, but you must move at least 10 feet before the attack and the total distance that you move cannot be greater than your speed. You cannot use this ability to attack a foe that is adjacent to you at the start of your turn. <p class=sub><b>Normal: </b>You cannot move before and after an attack.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Move before and after melee attack",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Staggering Critical",
			summary : "Whenever you score a critical hit, the target is staggered",
			description : "Your critical hits cause opponents to slow down. <p class=sub><b>Prerequisites: </b>Critical Focus, base attack bonus +13 <p class=sub><b>Benefit: </b>Whenever you score a critical hit, your opponent becomes staggered for 1d4+1 rounds. A successful Fortitude save reduces the duration to 1 round. The DC of this Fortitude save is equal to 10 + your base attack bonus. The effects of this feat do not stack. Additional hits instead add to the duration. <p class=sub><b>Special: </b>You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.",
			prereqs : {},
			benefit : {},
			groups : [ "Critical", "Combat" ],
			summary : "Whenever you score a critical hit, the target is staggered",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Stand Still",
			summary : "Stop enemies from moving past you",
			description : "You can stop foes that try to move past you. <p class=sub><b>Prerequisites: </b>Combat reflexes <p class=sub><b>Benefit: </b>When a foe provokes an attack of opportunity due to moving through your adjacent squares, you can make a combat maneuver check as your attack of opportunity. If successful, the enemy cannot move for the rest of his turn. An enemy can still take the rest of his action, but cannot move. This feat also applies to any creature that attempts to move from a square that is adjacent to you if such movement provokes an attack of opportunity",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Stop enemies from moving past you",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Stealthy",
			summary : "+2 bonus on Escape Artist and Stealth checks",
			description : "You are good at avoiding unwanted attention and slipping out of bonds. <p class=sub><b>Benefit: </b>You get a +2 bonus on all Escape Artist and Stealth skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
			prereqs : {},
			benefit : {},
			summary : "+2 bonus on Escape Artist and Stealth checks",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Step Up",
			summary : "Take a 5-foot step as an immediate action",
			description : "You can close the distance when a foe tries to move away. <p class=sub><b>Prerequisite: </b>Base attack bonus +1 <p class=sub><b>Benefit: </b>Whenever an adjacent foe attempts to take a 5-foot step away from you, you may also make a 5-foot step as an immediate action so long as you end up adjacent to the foe that triggered this ability. If you take this step, you cannot take a 5-foot step during your next turn. If you take an action to move during your next turn, subtract 5 feet from your total movement.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Take a 5-foot step as an immediate action",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Still Spell",
			summary : "Cast spell without somatic components",
			description : "You can cast spells without moving. <p class=sub><b>Benefit: </b>A stilled spell can be cast with no somatic components. Spells without somatic components are not affected. A stilled spell uses up a spell slot one level higher than the spell&apos;s actual level.",
			prereqs : {},
			benefit : {},
			groups : [ "Metamagic" ],
			summary : "Cast spell without somatic components",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Strike Back",
			summary : "Attack foes that strike you while using reach",
			description : "You can strike at foes that attack you using their superior reach, by targeting their limbs or weapons as they come at you. <p class=sub><b>Prerequisite: </b>Base attack bonus +11 <p class=sub><b>Benefit: </b>You can ready an action to make a melee attack against any foe that attacks you in melee, even if the foe is outside of your reach.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Attack foes that strike you while using reach",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Stunning Critical",
			summary : "Whenever you score a critical hit, the target is stunned",
			description : "Your critical hits cause opponents to become stunned. <p class=sub><b>Prerequisites: </b>Critical Focus, Staggering Critical, base attack bonus +17. <p class=sub><b>Benefit: </b>Whenever you score a critical hit, your opponent becomes stunned for 1d4 rounds. A successful Fortitude save reduces this to staggered for 1d4 rounds. The DC of this Fortitude save is equal to 10 + your base attack bonus. The effects of this feat do not stack. Additional hits instead add to the duration. <p class=sub><b>Special: </b>You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.",
			prereqs : {},
			benefit : {},
			groups : [ "Critical", "Combat" ],
			summary : "Whenever you score a critical hit, the target is stunned",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Stunning Fist",
			summary : "Stun opponent with an unarmed strike",
			description : "You know just where to strike to temporarily stun a foe. <p class=sub><b>Prerequisites: </b>Dex 13, Wis 13, Improved Unarmed Strike, base attack bonus +8. <p class=sub><b>Benefit: </b>You must declare that you are using this feat before you make your attack roll (thus, a failed attack roll ruins the attempt). Stunning Fist forces a foe damaged by your unarmed attack to make a Fortitude saving throw (DC 10 + 1/2 your character level + your Wis modifier), in addition to dealing damage normally. A defender who fails this saving throw is stunned for 1 round (until just before your next turn). A stunned character can&apos;t take actions, loses any Dexterity bonus to AC, and takes a -2 penalty to AC. You may attempt a stunning attack once per day for every four levels you have attained (but see Special), and no more than once per round. Constructs, oozes, plants, undead, incorporeal creatures, and creatures immune to critical hits cannot be stunned. <p class=sub><b>Special: </b>A monk receives Stunning Fist as a bonus feat at 1st level, even if he does not meet the prerequisites. A monk may attempt a stunning attack a number of times per day equal to his monk level, plus one more time per day for every four levels he has in classes other than monk.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : ", Stun opponent with an unarmed strike ",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Throw Anything",
			summary : "No penalties for improvised ranged weapons",
			description : "You are used to throwing things you have on hand. <p class=sub><b>Benefit: </b>You do not suffer any penalties for using an improvised ranged weapon. You receive a +1 circumstance bonus on attack rolls made with thrown splash weapons. <p class=sub><b>Normal: </b>You take a -4 penalty on attack rolls made with an improvised weapon.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "No penalties for improvised ranged weapons",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Tiring Critical",
			summary : "Whenever you score a critical hit, the target is fatigued",
			description : "Your critical hits cause opponents to become fatigued. <p class=sub><b>Prerequisites: </b>Critical Focus, base attack bonus +13 <p class=sub><b>Benefit: </b>Whenever you score a critical hit, your opponent becomes fatigued. This feat has no additional effect on a fatigued or exhausted creature. <p class=sub><b>Special: </b>You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.",
			prereqs : {
				base_attack_bonus : 13,
				feats : [ "Critical Focus" ]
			},
			benefit : {},
			groups : [ "Critical", "Combat" ],
			summary : "Whenever you score a critical hit, the target is fatigued",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Toughness",
			summary : "+3 hit points, +1 per Hit Die beyond 3",
			description : "You have enhanced physical stamina. <p class=sub><b>Benefit: </b>You gain +3 hit points. For every Hit Die you possess beyond 3, you gain an additional +1 hit point. If you have more than 3 Hit Dice, you gain +1 hit points whenever you gain a Hit Die (such as when you gain a level).",
			prereqs : {},
			benefit : {},
			summary : "+3 hit points, +1 per Hit Die beyond 3",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Tower Shield Proficiency",
			summary : "No penalties on attack rolls when using a tower shield",
			description : "You are trained in how to properly use a tower shield. <p class=sub><b>Prerequisite: </b>Shield Proficiency <p class=sub><b>Benefit: </b>When you use a tower shield, the shield&apos;s armor check penalty only applies to Strength and Dexterity-based skills. <p class=sub><b>Normal: </b>A character using a shield with which he is not proficient takes the shield&apos;s armor check penalty on attack rolls and on all skill checks that involve moving, including Ride <p class=sub><b>Special: </b>Fighters automatically have Tower Shield Proficiency as a bonus feat. They need not select it.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "No penalties on attack rolls when using a tower shield",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Trample",
			summary : "Overrun targets while mounted",
			description : "While mounted, you can ride down opponents and trample them under your mount. <p class=sub><b>Prerequisites: </b>Ride 1 rank, Mounted Combat <p class=sub><b>Benefit: </b>When you attempt to overrun an opponent while mounted, your target may not choose to avoid you. Your mount may make one hoof attack against any target you knock down, gaining the standard +4 bonus on attack rolls against prone targets.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Overrun targets while mounted",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Turn Undead",
			summary : "Channel energy can be used to make undead flee",
			description : "Calling upon higher powers, you cause undead to flee from the might of your unleashed divine energy. <p class=sub><b>Prerequisites: </b>Channel positive energy class feature <p class=sub><b>Benefit: </b>You can, as a standard action, use one of your uses of channel positive energy to cause all undead within 30 feet of you to flee, as if panicked. Undead receive a Will save to negate the effect. The DC for this Will save is equal to 10 + 1/2 your cleric level + your Charisma modif ier. Undead that fail their save flee for 1 minute. Intelligent undead receive a new saving throw each round to end the effect. If you use channel energy in this way, it has no other effect (it does not heal or harm nearby creatures).",
			prereqs : {},
			benefit : {},
			summary : "Channel energy can be used to make undead flee",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Two-Weapon Defense",
			summary : "Gain +1 shield bonus when fighting with two weapons",
			description : "You are skilled at defending yourself while dual-wielding. <p class=sub><b>Prerequisites: </b>Dex 15, Two-Weapon Fighting <p class=sub><b>Benefit: </b>When wielding a double weapon or two weapons (not including natural weapons or unarmed strikes), you gain a +1 shield bonus to your AC. When you are fighting defensively or using the total defense action, this shield bonus increases to +2.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Gain +1 shield bonus when fighting with two weapons",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Two-Weapon Fighting",
			summary : "Reduce two-weapon fighting penalties",
			description : "You can fight with a weapon wielded in each of your hands. You can make one extra attack each round with the secondary weapon. <p class=sub><b>Prerequisite: </b>Dex 15 <p class=sub><b>Benefit: </b>Your penalties on attack rolls for fighting with two weapons are reduced. The penalty for your primary hand lessens by 2 and the one for your off hand lessens by 6. See Two-Weapon Fighting in Chapter 8. <p class=sub><b>Normal: </b>If you wield a second weapon in your off hand, you can get one extra attack per round with that weapon. When fighting in this way you suffer a -6 penalty with your regular attack or attacks with your primary hand and a -10 penalty to the attack with your off hand. If your offhand weapon is light, the penalties are reduced by 2 each. An unarmed strike is always considered light.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Reduce two-weapon fighting penalties",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Two-Weapon Rend",
			summary : "Rend a foe hit by both your weapons",
			description : "Striking with both of your weapons simultaneously, you can use them to deliver devastating wounds. <p class=sub><b>Prerequisites: </b>Dex 17, Double Slice, Improved Two-Weapon Fighting, Two-Weapon Fighting, base attack bonus +11. <p class=sub><b>Benefit: </b>If you hit an opponent with both your primary hand and your off-hand weapon, you deal an additional 1d10 points of damage plus 1-1/2 times your Strength modifier. You can only deal this additional damage once each round.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Rend a foe hit by both your weapons ",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Unseat",
			summary : "Knock opponents from their mounts",
			description : "You are skilled at unseating your mounted opponents. <p class=sub><b>Prerequisites: </b>Str 13, Ride 1 rank, Mounted Combat, Power Attack, Improved Bull Rush, base attack bonus +1. <p class=sub><b>Benefits: </b>When charging an opponent while mounted and wielding a lance, resolve the attack as normal. If it hits, you may immediately make a free bull rush attempt in addition to the normal damage. If successful, the target is knocked off his horse and lands prone in a space adjacent to his mount that is directly away from you.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Knock opponents from their mounts",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Vital Strike",
			summary : "Deal twice the normal damage on a single attack",
			description : "You make a single attack that deals significantly more damage than normal. <p class=sub><b>Prerequisites: </b>Base attack bonus +6 <p class=sub><b>Benefit: </b>When you use the attack action, you can make one attack at your highest base attack bonus that deals additional damage. Roll the damage dice for the attack twice and add the results together, but do not multiply damage bonuses from Strength, weapon abilities (such as f laming), or precision-based damage (such as sneak attack). This bonus damage is not multiplied on a critical hit (although other damage bonuses are multiplied normally).",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Deal twice the normal damage on a single attack",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Weapon Finesse",
			summary : "Use Dex instead of Str on attack rolls with light weapons",
			description : "You are trained in using your agility in melee combat, as opposed to brute strength. <p class=sub><b>Benefit: </b>With a light weapon, rapier, whip, or spiked chain made for a creature of your size category, you may use your Dexterity modifier instead of your Strength modifier on attack rolls. If you carry a shield, its armor check penalty applies to your attack rolls. <p class=sub><b>Special: </b>Natural weapons are considered light weapons.",
			prereqs : {},
			benefit : {
				attack : "if (weapon.usage == 'light' || weapon.name == 'Whip' || weapon.name == 'Chain, spiked' || weapon.name == 'Rapier') {  var dex_score = calc_ability_modifier(chardata.abilities['Dex']);  var str_score = calc_ability_modifier(chardata.abilities['Str']);  if ($('#ability_Str_score')) {   str_score = parseInt($('#ability_Str_score').val());  } if ($('#ability_Dex_score')) {  dex_score = parseInt($('#ability_Dex_score').val()); } attacks.ability_score = Math.max(str_score, dex_score); } return attacks;"
			},
			groups : [ "Combat" ],
			summary : "Use Dex instead of Str on attack rolls with light weapons",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Weapon Focus",
			summary : "+1 bonus on attack rolls with one weapon",
			description : "Choose one type of weapon. You can also choose unarmed strike or grapple (or ray, if you are a spellcaster) as your weapon for the purposes of this feat. <p class=sub><b>Prerequisites: </b>Proficiency with selected weapon, base attack bonus +1. <p class=sub><b>Benefit: </b>You gain a +1 bonus on all attack rolls you make using the selected weapon. <p class=sub><b>Special: </b>You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "+1 bonus on attack rolls with one weapon ",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Weapon Specialization",
			summary : "+2 bonus on damage rolls with one weapon",
			description : "You are skilled at dealing damage with one weapon. Choose one type of weapon (including unarmed strike or grapple) for which you have already selected the Weapon Focus feat. You deal extra damage when using this weapon. <p class=sub><b>Prerequisites: </b>Proficiency with selected weapon, Weapon Focus with selected weapon, fighter level 4th. <p class=sub><b>Benefit: </b>You gain a +2 bonus on all damage rolls you make using the selected weapon. <p class=sub><b>Special: </b>You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "+2 bonus on damage rolls with one weapon",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Whirlwind Attack",
			summary : "Make one melee attack against all foes within reach",
			description : "You can strike out at every foe within reach. <p class=sub><b>Prerequisites: </b>Dex 13, Int 13, Combat Expertise, Dodge, Mobility, Spring Attack, base attack bonus +4. <p class=sub><b>Benefit: </b>When you use the full-attack action, you can give up your regular attacks and instead make one melee attack at your highest base attack bonus against each opponent within reach. You must make a separate attack roll against each opponent. When you use the Whirlwind Attack feat, you also forfeit any bonus or extra attacks granted by other feats, spells, or abilities.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Make one melee attack against all foes within reach ",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Widen Spell",
			summary : "Double spell area",
			description : "You can cast your spells so that they occupy a larger space. <p class=sub><b>Benefit: </b>You can alter a burst, emanation, line, or spread-shaped spell to increase its area. Any numeric measurements of the spell&apos;s area increase by 100%. A widened spell uses up a spell slot three levels higher than the spell&apos;s actual level. <p class=sub>Spells that do not have an area of one of these four sorts are not affected by this feat.",
			prereqs : {},
			benefit : {},
			groups : [ "Metamagic" ],
			summary : "Double spell area",
			tags : [ "pathfinder" ],
			type : "feat"
		},
		{
			name : "Wind Stance",
			summary : "Gain 20% concealment if you move",
			description : "Your erratic movements make it difficult for enemies to pinpoint your location. <p class=sub><b>Prerequisites: </b>Dex 15, Dodge, base attack bonus +6 <p class=sub><b>Benefit: </b>If you move more than 5 feet this turn, you gain 20% concealment for 1 round against ranged attacks.",
			prereqs : {},
			benefit : {},
			groups : [ "Combat" ],
			summary : "Gain 20% concealment if you move",
			tags : [ "pathfinder" ],
			type : "feat"
		} ];
