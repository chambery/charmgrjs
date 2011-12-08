if typeof(exports) == "object"
	TAFFY = require("../../lib/taffy").taffy
	common = require("../common")

this.sorcerer_bloodlines = TAFFY([ 
	name: "Aberrant"
	description: "There is a taint in your blood, one that is alien and bizarre. You tend to think in odd ways, approaching problems from an angle that most would not expect. Over time, this taint manifests itself in your physical form."
	skill: "Knowledge (dungeoneering)"
	spells: 
		2: "Enlarge Person"
		4: "See Invisibility"
		6: "Tongues"
		8: "Black Tentacles"
		10: "Feeblemind"
		12: "Veil"
		14: "Plane Shift"
		16: "Mind Blank"
		18: "Shapechange"
	
	feats: [ "Combat Casting", "Improved Disarm", "Improved Grapple", " Improved Initiative", " Improved Unarmed Strike", " Iron Will", " Silent Spell", "Skill Focus (Knowledge [dungeoneering])" ]
	arcana: "Whenever you cast a spell of the polymorph subschool, increase the duration of the spell by 50% (minimum 1 round). This bonus does not stack with the increase granted by the Extend Spell feat."
	powers: [ "Acidic Ray", "Long Limbs", "Unusual Anatomy", "Alien Resistance", "Aberrant Form" ]
	_id: "qw33"
, 
	name: "Abyssal"
	description: "Generations ago, a demon spread its filth into your heritage. While it does not manifest in all of your kin, for you it is particularly strong. You might sometimes have urges to chaos or evil, but your destiny (and alignment) is up to you."
	skill: "Knowledge (planes)"
	spells: 
		2: "Cause Fear"
		4: "Bull's Strength"
		6: "Rage"
		8: "Stoneskin"
		10: "Dismissal"
		12: "Transformation"
		14: "Teleport, Greater"
		16: "Unholy Aura"
		18: "Summon Monster IX"
	
	feats: [ "Augment Summoning", "Cleave", "Empower Spell", "Great Fortitude", "Improved Bull Rush", "Improved Sunder", "Power Attack", "Skill Focus (Knowledge [planes])" ]
	arcana: "Whenever you cast a spell of the summoning subschool, the creatures summoned gain DR/good equal to 1/2 your sorcerer level (minimum 1). This does not stack with any DR the creature might have."
	powers: [ "Claws", "Demon Resistances", "Strength of the Abyss", "Added Summoning", "Demonic Might" ]
	_id: "qw32"
, 
	name: "Arcane"
	description: "Your family has always been skilled in the eldritch art of magic. While many of your relatives were accomplished wizards, your powers developed without the need for study and practice."
	skill: "Knowledge (any one)"
	spells: 
		2: "Identify"
		4: "Invisibility"
		6: "Dispel Magic"
		8: "Dimension Door"
		10: "Overland Flight"
		12: "True Seeing"
		14: "Teleport, Greater"
		16: "Power Word, Stun"
		18: "Wish"
	
	feats: [ "Combat Casting", "Improved Counterspell", "Improved Initiative", "Iron Will", "Scribe Scroll", "Skill Focus (Knowledge [arcana])", "Spell Focus", "Still Spell" ]
	arcana: "Whenever you apply a metamagic feat to a spell that increases the slot used by at least one level, increase the spell&apos;s DC by +1. This bonus does not stack with itself and does not apply to spells modified by the Heighten Spell feat."
	powers: [ "Arcane Bond", "Metamagic Adept", "New Arcana", "School Power", "Arcane Apotheosis" ]
	_id: "qq33"
, 
	name: "Celestial"
	description: "Your bloodline is blessed by a celestial power, either from a celestial ancestor or through divine intervention. Although this power drives you along the path of good, your fate (and alignment) is your own to determine."
	skill: "Heal"
	spells: 
		2: "Bless"
		4: "Resist Energy"
		6: "Magic Circle against Evil"
		8: "Remove Curse"
		10: "Flame Strike"
		12: "Dispel Magic, Greater"
		14: "Banishment"
		16: "Sunburst"
		18: "Gate"
	
	feats: [ "Dodge", " Extend Spell", " Iron Will", " Mobility", " Mounted Combat", " Ride-By Attack", " Skill Focus (Knowledge [religion])", "Weapon Finesse" ]
	arcana: "Whenever you cast a spell of the summoning subschool, the creatures summoned gain DR/evil equal to 1/2 your sorcerer level (minimum 1). This does not stack with any DR the creature might have.Bloodline Powers: Your celestial heritage grants you a great many powers, but they come at a price. The lords of the higher planes are watching you and your actions closely."
	powers: [ "Celestial Resistances", "Heavenly Fire", "Wings of Heaven", "Conviction", "Ascension" ]
	_id: "qw61"
, 
	name: "Destined"
	description: "Your family is destined for greatness in some way. Your birth could have been foretold in prophecy, or perhaps it occurred during an especially auspicious event, such as a solar eclipse. Regardless of your bloodline's origin, you have a great future ahead."
	skill: "Knowledge (history)"
	spells: 
		2: "Alarm"
		4: "Blur"
		6: "Protection from Energy"
		8: "Freedom of Movement"
		10: "Break Enchantment"
		12: "Mislead"
		14: "Spell Turning"
		16: "Moment of Prescience"
		18: "Foresight"
	
	feats: [ "Arcane Strike", "Diehard", "Endurance", "Leadership", "Lightning Reflexes", "Maximize Spell", "Skill Focus (Knowledge [history])", "Weapon Focus" ]
	arcana: "Whenever you cast a spell with a range of &quot;personal&quot;, you gain a luck bonus equal to the spell&apos;s level on all your saving throws for 1 round."
	powers: [ "Touch of Destiny", "Fated", "It Was Meant To Be", "Within Reach", "Destiny Realized" ]
	_id: "qw63"
, 
	name: "Draconic"
	description: "At some point in your family's history, a dragon interbred with your bloodline, and now its ancient power flows through your veins."
	skill: "Perception"
	spells: 
		2: "Mage Armor"
		4: "Resist Energy"
		6: "Fly"
		8: "Fear"
		10: "Spell Resistance"
		12: "Form of the Dragon I"
		14: "Form of the Dragon II"
		16: "Form of the Dragon III"
		18: "Wish"
	
	feats: [ "Blind-Fight", "Great Fortitude", "Improved Initiative", "Power Attack", "Quicken Spell", "Skill Focus (Fly)", "Skill Focus (Knowledge [arcana])", "Toughness" ]
	arcana: "Whenever you cast a spell with an energy descriptor that matches your draconic bloodline's energy type, that spell deals +1 point of damage per die rolled."
	powers: [ "Dragon Type", "Claws", "Dragon Resistances", "Breath Weapon", "Wings", "Power of Wyrms" ]
	_id: "qa33"
, 
	name: "Elemental"
	detail: "The power of the elements resides in you, and at times you can hardly control its fury. This influence comes from an elemental outsider in your family history or a time when you or your relatives were exposed to a powerful elemental force.One of the four elements infuses your being, and you can draw upon its power in times of need. At first level, you must select one of the four elements: air, earth, fire, or water. This choice cannot be changed. A number of your abilities grant resistances and deal damage based on your element, as noted below.<table><tr><th>Element </th><th>Energy Type </th><th>Elemental Movement</th></tr><tr><td>Air </td><td>Electricity </td><td>Fly 60 feet (average)</td></tr><tr><td>Earth </td><td>Acid </td><td>Burrow 30 feet</td></tr><tr><td>Fire </td><td>Fire </td><td>+30 feet base speed</td></tr><tr><td>Water </td><td>Cold </td><td>Swim 60 feet</td></tr></table>"
	skill: "Knowledge (planes)"
	spells: 
		2: "Burning Hands"
		4: "Scorching Ray"
		6: "Protection from Energy"
		8: "Elemental Body I"
		10: "Elemental Body II"
		12: "Elemental body III"
		14: "Elemental body IV"
		16: "Summon Monster VIII (elementals only)"
		18: "Elemental Swarm"
	
	feats: [ "Dodge", "Empower Spell", "Great Fortitude", "Improved Initiative", "Lightning Reflexes", "Power Attack", "Skill Focus (Knowledge [planes])", "Weapon Finesse" ]
	arcana: "Whenever you cast a spell that deals energy damage, you can change the type of damage tomatch the type of your bloodline. This also changes the spell's type to match the type of your bloodline."
	powers: [ "Elemental Ray", "Elemental Resistance", "Elemental Blast", "Elemental Movement", "Elemental Body" ]
	_id: "2w33"
, 
	name: "Fey"
	description: "The capricious nature of the fey runs in your family due to some intermingling of fey blood or magic. You are more emotional than most, prone to bouts of joy and rage."
	skill: "Knowledge (nature)"
	spells: 
		2: "Entangle"
		4: "Hideous Laughter"
		6: "Deep Slumber"
		8: "Poison"
		10: "Tree Stride"
		12: "Mislead"
		14: "Phase Door"
		16: "Irresistible Dance"
		18: "Shapechange"
	
	feats: [ "Dodge", "Improved Initiative", "Lightning Reflexes", "Mobility", "Point Blank Shot", "Precise Shot", "Quicken Spell", "Skill Focus (Knowledge [nature])" ]
	arcana: "Whenever you cast a spell of the compulsion subschool, increase the spell's DC by +2."
	powers: [ "Laughing Touch", "Woodland Stride", "Fleeting Glance", "Fey Magic", "Soul of the Fey" ]
	_id: "7w33"
, 
	name: "Infernal"
	description: "Somewhere in your family's history, a relative made a deal with a devil, and that pact has influenced your family line ever since. In you, it manifests in direct and obvious ways, granting you powers and abilities. While your fate is still your own, you can't help but wonder if your ultimate reward is bound to the Pit."
	skill: "Diplomacy"
	spells: 
		2: "Protection from Good"
		4: "Scorching Ray"
		6: "Suggestion"
		8: "Charm Monster"
		10: "Dominate Person"
		12: "Planar Pinding (devils and creatures with the fiendish template only)"
		14: "Greater Teleport"
		16: "Power Word Stun"
		18: "Meteor Swarm"
	
	feats: [ "Blind-Fight", "Combat Expertise", "Deceitful", "Extend Spell", "Improved Disarm", "Iron Will", "Skill Focus (Knowledge [planes])", "Spell Penetration" ]
	arcana: "Whenever you cast a spell of the charm subschool, increase the spell's DC by +2."
	powers: [ "Corrupting Touch", "Infernal Resistances", "Hellfire", "On Dark Wings", "Power of the Pit" ]
	_id: "7233"
, 
	name: "Undead"
	description: "The taint of the grave runs through your family. Perhaps one of your ancestors became a powerful lich or vampire, or maybe you were born dead before suddenly returning to life. Either way, the forces of death move through you and touch your every action."
	skill: "Knowledge (religion)"
	spells: 
		2: "Chill Touch"
		4: "False Life"
		6: "Vampiric Touch"
		8: "Animate Dead"
		10: "Waves of Fatigue"
		12: "Undeath to Death"
		14: "Finger of Death"
		16: "Horrid Wilting"
		18: "Energy Drain"
	
	feats: [ "Combat Casting", "Diehard", "Endurance", "Iron Will", "Skill Focus (Knowledge [religion])", "Spell Focus", "Still Spell", "Toughness" ]
	arcana: "Some undead are susceptible to your mind-affecting spells. Corporeal undead that were once humanoids are treated as humanoids for the purposes of determining which spells affect them."
	powers: [ "Grave Touch", "Death's Gift", "Grasp of the Dead", "Incorporeal Form", "One of Us" ]
	_id: "1w33"
 ])
this.bloodline_powers = TAFFY([ 
	name: "Acidic Ray"
	detail: "You can fire an acidic ray as a standard action, targeting any foe within 30 feet as a ranged touch attack. The acidic ray deals 1d6 points of acid damage + 1 for every two sorcerer levels you possess. You can use this ability a number of times per day equal to 3 + your Charisma modifier."
	levels:
		0: 
			weapons:
				"Acidic Ray":
					_id: "80b72"
					name: "Acidic Ray"
					weapon_name: "Acidic Ray"
					dam: (level) ->
						"1d6" + common.pos(Math.round((level + 1) / 2))
					
					note: ->
						times = (3 + (calc_ability_modifier(chardata.abilities["Cha"])))
						(if times > 0 then times + " times/day" else null)
					
					usage: "ranged"
	_id: "338a"
, 
	name: "Long Limbs"
	detail: "Your reach increases by _$0 feet whenever you are making a melee touch attack. This ability does not otherwise increase your threatened area."
	levels: {
		2: { vals: [ "5" ] }
		10: { vals: [ "10" ] }
		16: { vals: [ "15" ] }
	}
	_id: "33a9"
, 
	name: "Unusual Anatomy"
	detail: "Your anatomy changes, giving you a _$0 chance to ignore any critical hit or sneak attack scored against you."
	levels: {
		8: { vals: [ "25%" ] }
		12: { vals: [ "50%" ] }
	}
	_id: "3389"
, 
	name: "Alien Resistance"
	detail: "You gain spell resistance equal to your sorcerer level + 10."
	levels: {
		14: sr: (sr) ->
			sr.sr = (sr.sr | 0) + (chardata.classes["Sorcerer"].level + 1) + 10
			sr
	}
	_id: "3a89"
, 
	name: "Aberrant Form"
	detail: "Your body becomes truly unnatural. You are immune to critical hits and sneak attacks. In addition, you gain blindsight with a range of 60 feet and damage reduction 5/-."
	levels: {
		9: dr: (drs) ->
			drs["base"] = (if drs["base"] then drs["base"] else 0) + 5
			drs
	}
	_id: "a389"
, 
	name: "Claws"
	detail: "You can grow claws as a free action. These claws are treated as natural weapons, allowing you to make two claw attacks as a full attack action using your full base attack bonus. These attacks deal 1d4 points of damage each (1d3 if you are Small) plus your Strength modifier."
	levels: {
		0: 
			# only have to specify what's changed between levels
			weapons: 
				"Claws":
					category: "simple"
					weapon_name: "Claws"
					dam: ->
						dam = "1d3/1d3"
						size = sizes.indexOf(races.first(name: chardata.race).size)
						dam = "1d4/1d4"	if size > 3
						dam			
					note: "You can grow claws as a free action. "
					_id: "a389d"
			
		4: 
			weapons: 
				"Claws":
					note: "Your claws are considered magic weapons for the purpose of overcoming DR."
			
		6: 
			detail: "Claw damage increases by one step to 1d6 points of damage (1d4 if you are Small)."
			weapons: 
				"Claws":
					dam: ->
						dam = "1d4/1d4"
						size = sizes.indexOf(races.first(name: chardata.race).size)
						dam = "1d6/1d6"	if size > 3
						dam
			
		10: 
			detail: "Your claws become flaming weapons, each dealing an additional 1d6 points of fire damage on a successful hit. This is a supernatural ability. You can use your claws for a number of rounds per day equal to 3 + your Charisma modifier."
			weapons: 
				"Claws":
					note: ->
						rounds = (3 + calc_ability_modifier(chardata.abilities["Cha"]))
						(if rounds > 0 then "+1d6 fire " + rounds + " rounds/day" else "")
			
	},
	_id: "a389d"
, 
	name: "Demon Resistances"
	detail: "You gain resist electricity _$0 and a +_$1 bonus on saving throws made against poison."
	levels: {
		2: 
			dr: (dr) ->
				dr["elec"] = (if dr["elec"] then dr["elec"] else 0) + 5
				dr
			
			save: (save) ->
				save["pois"] = (if save["pois"] then save["pois"] else 0) + 2
				save
			
			vals: [ "5", "2" ]
		
		8: 
			dr: (dr) ->
				dr["elec"] = (if dr["elec"] then dr["elec"] else 0) + 10
				dr
				
			save: (save) ->
				save["pois"] = (if save["pois"] then save["pois"] else 0) + 4
				save
				
			vals: [ "10", "4" ]
	}
	_id: "d8843"
, 
	name: "Strength of the Abyss"
	detail: "You gain a +_$0 inherent bonus to your Strength."
	levels: {
		8: 
			Str: (abilities) ->
				abilities["Str"].base += 2
				abilities
				
			vals: [ "2" ]
		
		12: 
			Str: (abilities) ->
				abilities["Str"].base += 4
				abilities
				
			vals: [ "4" ]
		
		16: 
			Str: (abilities) ->
				abilities["Str"].base += 6
				abilities
				
			vals: [ "6" ]
	}
	_id: "24f37"
, 
	name: "Added Summoning"
	detail: "Whenever you summon a creature with the demon subtype or the fiendish template using a summon monster spell, you summon one additional creature of the same kind."
	levels: { 14: {} }
	_id: "24f37"
, 
	name: "Demonic Might"
	detail: "The power of the Abyss flows through you. You gain immunity to electricity and poison. You also gain resistance to acid +10, cold +10, and fire +10, and gain telepathy with a range of 60 feet (allowing you to communicate with any creature that can speak a language)."
	levels: {
		19: dr: (dr) ->
			dr["acid"] = (if dr["acid"] then dr["acid"] else 0) + 10
			dr["fire"] = (if dr["fire"] then dr["fire"] else 0) + 10
			dr["cold"] = (if dr["cold"] then dr["cold"] else 0) + 10
			dr["pois"] = "imm"
			dr["elec"] = "imm"
			dr
	}
	_id: "8f098"
, 
	name: "Heavenly Fire"
	detail: "You can unleash a ray of heavenly fire as a standard action, targeting any foe within 30 feet as a ranged touch attack. Against evil creatures, this ray deals 1d4 points of damage + 1 for every two sorcerer levels you possess. This damage is divine and not subject to energy resistance or immunity. This ray heals good creatures of 1d4 points of damage + 1 for every two sorcerer levels you possess. A good creature cannot benefit from your heavenly fire more than once per day. Neutral creatures are neither harmed nor healed by this effect. You can use this ability a number of times per day equal to 3 + your Charisma modifier."
	_id: "efa25"
, 
	name: "Celestial Resistances"
	detail: "You gain resist acid $_0 and resist cold $_0."
	levels: {
		2: 
			dr: (dr) ->
				dr["acid"] = (if dr["acid"] then dr["acid"] else 0) + 5
				dr["cold"] = (if dr["cold"] then dr["cold"] else 0) + 5
			
			vals: [ "5" ]
		
		8: 
			dr: (dr) ->
				dr["acid"] = (if dr["acid"] then dr["acid"] else 0) + 10
				dr["cold"] = (if dr["cold"] then dr["cold"] else 0) + 10
			
			vals: [ "10" ]
	}
	_id: "942e0"
, 
	name: "Wings of Heaven"
	detail: "You can sprout feathery wings and fly for a number of minutes per day equal to your sorcerer level, with a speed of 60 feet and good maneuverability. This duration does not need to be consecutive, but it must be used in 1 minute increments."
	levels: { 8: {} }
	_id: "5c171"
, 
	name: "Conviction"
	detail: "You can reroll any one ability check, attack roll, skill check, or saving throw you just made. You must decide to use this ability after the die is rolled, but before the results are revealed by the GM. You must take the second result, even if it is worse. You can use this ability once per day."
	levels: { 14: {} }
	_id: "5812"
, 
	name: "Ascension"
	detail: "You become infused with the power of the heavens. You gain immunity to acid, cold, and petrification. You also gain resist electricity 10, resist fire 10, and a +4 racial bonus on saves against poison. Finally, you gain unlimited use of the wings of heaven ability. Finally, you gain the ability to speak with any creature that has a language (as per the tongues spell)."
	levels: {
		19: 
			dr: (dr) ->
				dr["elec"] = (if dr["elec"] then dr["elec"] else 0) + 10
				dr["fire"] = (if dr["fire"] then dr["fire"] else 0) + 10
				dr["cold"] = "imm"
				dr["acid"] = "imm"
			
			save: (save) ->
				save["petr"] = "imm"
	}
	_id: "9f43e"
, 
	name: "Arcane Bond"
	detail: "You gain an arcane bond, as a wizard equal to your sorcerer level. Your sorcerer levels stack with any wizard levels you possess when determining the powers of your familiar or bonded object. This ability does not allow you to have both a familiar and a bonded item. Rules for arcane bonds appear on page 78."
	levels: { 0: {} }
	_id: "bd95a"
, 
	name: "Metamagic Adept"
	detail: "You can apply any one metamagic feat you know to a spell you are about to cast without increasing the casting time. You must still expend a higher-level spell slot to cast this spell. You can use this ability once per day at 3rd level and one additional time per day for every four sorcerer levels you possess beyond 3rd, up to five times per day at 19th level."
	levels: { 2: {} }
	_id: "5146b"
, 
	name: "New Arcana"
	detail: "You can add any one spell from the sorcerer/wizard spell list to your list of spells known. This spell must be of a level that you are capable of casting."
	levels: {
		8: 
			spells_known: (spells_known) ->
				spells_known.push 1
		
		12: 
			spells_known: (spells_known) ->
				spells_known.push 2
		
		16: 
			spells_known: (spells_known) ->
				spells_known.push 3
	}
	_id: "a5c4"
, 
	name: "School Power"
	detail: "Your body surges with arcane power. You can add any metamagic feats that you know to your spells without increasing their casting time, although you must still expend higher-level spell slots. Whenever you use magic items that require charges, you can instead expend spell slots to power the item. For every three levels of spell slots that you expend, you consume one less charge when using a magic item that expends charges. Pick one school of magic. The DC for any spells you cast from that school increases by +2. This bonus stacks with the bonus granted by Spell Focus."
	levels: { 14: {} }
	_id: "961c0"
, 
	name: "Arcane Apotheosis"
	detail: "Your body surges with arcane power. You can add any metamagic feats that you know to your spells without increasing their casting time, although you must still expend higher-level spell slots. Whenever you use magic items that require charges, you can instead expend spell slots to power the item. For every three levels of spell slots that you expend, you consume one less charge when using a magic item that expends charges."
	levels: { 
		19: supersedes: "Metamagic Adept"
	}
	_id: "ef704"
, 
	name: "Touch of Destiny"
	detail: "You can touch a creature as a standard action, giving it an insight bonus on attack rolls, skill checks, ability checks, and saving throws equal to 1/2 your sorcerer level (minimum 1) for 1 round. You can use this ability a number of times per day equal to 3 + your Charisma modifier."
	levels: { 0: {} }
	_id: "ffd41"
, 
	name: "Fated"
	detail: "You gain a +_$0 luck bonus on all of your saving throws and to your AC during surprise rounds (see Chapter 8) and when you are otherwise unaware of an attack."
	levels: {
		2: { vals: [ "1" ] }
		6: { vals: [ "2" ] }
		10: { vals: [ "3" ] }
		14: { vals: [ "4" ] }
		18: { vals: [ "5" ] }
	}
	_id: "26a91"
, 
	name: "It Was Meant To Be"
	detail: "_$0, you may reroll any one attack roll, critical hit confirmation roll, or level check made to overcome spell resistance. You must decide to use this ability after the first roll is made but before the results are revealed by the GM. You must take the second result, even if it is worse. At 9th level, you can use this ability once per day. At 17th level, you can use this ability twice per day."
	levels: {
		8: { vals: [ "Once per day" ] }
		16: { vals: [ "Twice per day" ] }
	}
	_id: "ffd41"
, 
	name: "Within Reach"
	detail: "Your ultimate destiny is drawing near. Once per day, when an attack or spell that causes damage would result in your death, you may attempt a DC 20 Will save. If successful, you are instead reduced to 1 hit points and are automatically stabilized. The bonus from your fated ability applies to this save."
	levels: { 14: {} }
	_id: "765e3"
, 
	name: "Destiny Realized"
	detail: "Your moment of destiny is at hand. Any critical threats made against you only confirm if the second roll results in a natural 20 on the die. Any critical threats you score with a spell are automatically confirmed. Once per day, you can automatically succeed at one caster level check made to overcome spell resistance. You must use this ability before making the roll."
	levels: { 19: {} }
	_id: "6ae8b"
, 
	name: "Dragon Type"
	detail: "The power of dragons flows through you and manifests in a number of ways. You must select one of the chromatic or metallic dragon types (see the Pathfinder RPG Bestiary). This choice cannot be changed. A number of your abilities grant resistances and deal damage based on your dragon type, as noted on the following table.<p><table class=pftable><tr class=pftable><th class=pftable>Dragon Type </th><th class=pftable>Energy Type </th><th class=pftable>Breath Shape</th></tr><tr class=pftable><td class=pftable>Black </td><td class=pftable>Acid </td><td class=pftable>60-foot line</td></tr><tr class=pftable><td class=pftable>Blue </td><td class=pftable>Electricity </td><td class=pftable>60-foot line</td></tr><td class=pftable>Green </td><td class=pftable>Acid </td><td class=pftable>30-foot cone</td><tr class=pftable><td class=pftable>Red </td><td class=pftable>Fire </td><td class=pftable>30-foot cone</td></tr><tr class=pftable><td class=pftable>White </td><td class=pftable>Cold </td><td class=pftable>30-foot cone</td></tr><tr class=pftable><td class=pftable>Brass </td><td class=pftable>Fire </td><td class=pftable>60-foot line</td></tr><tr class=pftable><td class=pftable>Bronze </td><td class=pftable>Electricity </td><td class=pftable>60-foot line</td></tr><tr class=pftable><td class=pftable>Copper </td><td class=pftable>Acid </td><td class=pftable>60-foot line</td></tr><tr class=pftable><td class=pftable>Gold </td><td class=pftable>Fire </td><td class=pftable>30-foot cone</td></tr><tr class=pftable><td class=pftable>Silver </td><td class=pftable>Cold </td><td class=pftable>30-foot cone</td></tr></table>"
	levels: { 0: {} }
	_id: "de55d"
, 
	name: "Dragon Resistances"
	detail: "You gain resist 5 against your energy type and a +1 natural armor bonus. At 9th level, your energy resistance increases to 10 and natural armor bonus increases to +2. At 15th level, your natural armor bonus increases to +4."
	levels: { 2: {} }
	_id: "bb33d"
, 
	name: "Breath Weapon"
	detail: "_$0, you can use your breath weapon for 1d6 points of damage of your energy type per sorcerer level. Those caught in the area of the breath receive a Reflex save for half damage. The DC of this save is equal to 10 + 1/2 your sorcerer level + your Charisma modifier. The shape of the breath weapon depends on your dragon type (as indicated on the above chart)."
	levels:
		8: 
			vals: [ "Once per day" ]
			weapons: 
				"Breath Weapon":
					weapon_name: "Breath Weapon"
					dam: ->
						(chardata.classes["Sorcerer"].level + 1) + "d6"
					
					note: ->
						draconic_types.first(name: chardata.draconic_type).breath + ", 1 time/day"
					
					usage: "ranged"
					_id: "be924"
			
		
		16: 
			vals: [ "Twice per day" ]
			weapons: 
				"Breath Weapon":
					note: ->
						draconic_types.first(name: chardata.draconic_type).breath + ", 2 times/day"
			
		
		19: 
			vals: [ "Three times per day" ]
			weapons:	
				"Breath Weapon":
					note: ->
						draconic_types.first(name: chardata.draconic_type).breath + ", 3 times/day"
	_id: "be924"
, 
	name: "Wings"
	detail: "Leathery dragon wings grow from your back as a standard action, giving you a fly speed of 60 feet with average maneuverability. You can dismiss the wings as a free action."
	levels: { 14: {} }
	_id: "d0cd3"
, 
	name: "Power of Wyrms"
	detail: "Your draconic heritage becomes manifest. You gain immunity to paralysis, sleep, and damage of your energy type. You also gain blindsense 60 feet."
	levels: {
		19: 
			dr: (dr) ->
				dr[draconic_energy_type] = -1	if draconic_energy_type
			
			save: (save) ->
				save["para"] = "imm"
				save["sleep"] = "imm"
	}	
	_id: "cfd77"
, 
	name: "Elemental Ray"
	detail: "You can unleash an elemental ray as a standard action, targeting any foe within 30 feet as a ranged touch attack. This ray deals 1d6 points of damage of your energy type + 1 for every two sorcerer levels you possess. You can use this ability a number of times per day equal to 3 + your Charisma modifier."
	levels: {
		0: 
			weapons: [ 
				_id: "80a62"
				name: "Elemental Ray"
				weapon_name: "Elemental Ray"
				dam: "1d6"
				note: ""
			]
	}		
	_id: "80a62"
, 
	name: "Elemental Resistance"
	detail: "You gain energy resistance 10 against your energy type. At 9th level, your energy resistance increases to 20."
	levels: {
		2: 
			dr: (dr) ->
				dr[chardata.bloodline_energy_type] = (if dr[chardata.bloodline_energy_type] then dr[chardata.bloodline_energy_type] else 0) + 10	if chardata.bloodline_energy_type
	}
	_id: "c3265"
, 
	name: "Elemental Blast"
	detail: "You can unleash a blast of elemental power _$0 per day. This 20-foot-radius burst does 1d6 points of damage of your energy type per sorcerer level. Those caught in the area of your blast receive a Reflex save for half damage. Creatures that fail their saves gain vulnerability to your energy type until the end of your next turn. The DC of this save is equal to 10 + 1/2 your sorcerer level + your Charisma modifier. This power has a range of 60 feet."
	levels: {
		8: { vals: [ "once" ] }
		16: { vals: [ "twice" ] }
		19: { vals: [ "three times" ] }
	}
	_id: "d9319"
, 
	name: "Elemental Movement"
	detail: "You gain a special movement type or bonus. This ability is based on your chosen element, as indicated on the above chart."
	levels: { 14: {} }
	_id: "f6100"
, 
	name: "Elemental Body"
	detail: "Elemental power surges through your body. You gain immunity to sneak attacks, critical hits, and damage from your energy type."
	levels: { 19: {} }
	_id: "8fc32"
, 
	name: "Laughing Touch"
	detail: "AYou can cause a creature to burst out laughing for 1 round as a melee touch attack. A laughing creature can only take a move action but can defend itself normally. Once a creature has been affected by laughing touch, it is immune to its effects for 24 hours. You can use this ability a number of times per day equal to 3 + your Charisma modifier."
	levels: { 0: {} }
	_id: "99564"
, 
	name: "Woodland Stride"
	detail: "You can move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at your normal speed and without taking damage or suffering any other impairment. Thorns, briars, and overgrown areas that have been magically manipulated to impede motion, however, still affect you."
	levels: { 2: {} }
	_id: "6e666"
, 
	name: "Fleeting Glance"
	detail: "You can turn invisible for a number of rounds per day equal to your sorcerer level. This ability functions as greater invisibility. These rounds need not be consecutive."
	levels: { 8: {} }
	_id: "99506"
, 
	name: "Fey Magic"
	detail: "You may reroll any caster level check made to overcome spell resistance. You must decide to use this ability before the results are revealed by the GM. You must take the second result, even if it is worse. You can use this ability at will."
	levels: { 14: {} }
	_id: "6a0fc"
, 
	name: "Soul of the Fey"
	detail: "Your soul becomes one with the world of the fey. You gain immunity to poison and DR 10/cold iron. Creatures of the animal type do not attack you unless compelled to do so through magic. Once per day, you can cast shadow walk as a spell-like ability using your sorcerer level as your caster level."
	levels: { 19: {} }
	_id: "f8956"
, 
	name: "Corrupting Touch"
	detail: "You can cause a creature to become shaken (see page 568) as a melee touch attack. This effect persists for a number of rounds equal to 1/2 your sorcerer level (minimum 1). Creatures shaken by this ability radiate an aura of evil, as if they were an evil outsider (see detect evil). Multiple touches do not stack, but they do add to the duration. You can use this ability a number of times per day equal to 3 + your Charisma modifier."
	levels: { 0: {} }
	_id: "f3eb8"
, 
	name: "Infernal Resistances"
	detail: "You gain resist fire 5 and a +2 bonus on saving throws made against poison. At 9th level, your resistance to fire increases to 10 and your bonus on poison saving throws increases to +4."
	levels: { 2: {} }
	_id: "f1437"
, 
	name: "Hellfire"
	detail: "_$0 per day, you can call down a column of hellfire. This 10-foot-radius burst does 1d6 points of fire damage per sorcerer level. Those caught in the area of your blast receive a Reflex save for half damage. Good creatures that fail their saves are shaken for a number of rounds equal to your sorcerer level. The DC of this save is equal to 10 + 1/2 your sorcerer level + your Charisma modifier. At 9th level, you can use this ability once per day. At 17th level, you can use this ability twice per day. At 20th level, you can use this ability three times per day. This power has a range of 60 feet."
	levels: {
		8: { vals: [ "once" ] }
		16: { vals: [ "twice" ] }
		19: { vals: [ "three times" ] }
	}
	_id: "79297"
, 
	name: "On Dark Wings"
	detail: "You can grow fearsome bat wings as a standard action, giving you a fly speed of 60 feet with average maneuverability. The wings can be dismissed as a free action."
	levels: { 14: {} }
	_id: "f571a"
, 
	name: "Power of the Pit"
	detail: "Your form becomes infused with vile power. You gain immunity to fire and poison. You also gain resistance to acid 10 and cold 10, and the ability to see perfectly in darkness of any kind to a range of 60 feet."
	levels: { 19: {} }
	_id: "63b42"
, 
	name: "Grave Touch"
	detail: " You can make a melee touch attack as a standard action that causes a living creature to become shaken for a number of rounds equal to 1/2 your sorcerer level (minimum 1). If you touch a shaken creature with this ability, it becomes frightened	(see page 567) for 1 round if it has fewer Hit Dice than your sorcerer level. You can use this ability a number of times per day equal to 3 + your Charisma modifier."
	levels: { 0: {} }
	_id: "24c88"
, 
	name: "Death's Gift"
	detail: " You gain resist cold 5 and DR 5/&mdash; against nonlethal damage. At 9th level, your resistance to cold increases to 10 and your DR increases to 10/&mdash; against nonlethal damage."
	levels: { 2: {} }
	_id: "597c"
, 
	name: "Grasp of the Dead"
	detail: "_$0 you can cause a swarm of skeletal arms to burst from the ground to rip and tear at your foes. The skeletal arms erupt from the ground in a 20-foot-radius burst. Anyone in this area takes 1d6 points of slashing damage per sorcerer level. Those caught in the area receive a Reflex save for half damage. Those who fail the save are unable to move for 1 round. The DC of this save is equal to 10 + 1/2 your sorcerer level + your Charisma modifier. The skeletal arms disappear after 1 round. The arms must burst up from a solid surface. This power has a range of 60 feet."
	levels: {
		8: { vals: [ "once" ] }
		16: { vals: [ "twice" ] }
		19: { vals: [ "three times" ] }
	}
	_id: "4b5f4"
, 
	name: "Incorporeal Form"
	detail: "You can become incorporeal for 1 round per sorcerer level. While in this form, you gain the incorporeal subtype. You only take half damage from corporeal sources as long as they are magic (you take no damage from non-magic weapons and objects). Likewise, your spells deal only half damage to corporeal creatures. Spells and other effects that do not deal damage function normally. You can use this ability once per day."
	levels: { 14: {} }
	_id: "9739f"
, 
	name: "One of Us"
	detail: "Your form begins to rot (the appearance of this decay is up to you) and undead see you as one of them. You gain immunity to cold, nonlethal damage, paralysis, and sleep. You also gain DR 5/&mdash;. Unintelligent undead do not notice you unless you attack them. You receive a +4 morale bonus on saving throws made against spells and spell-like abilities cast by undead."
	levels: { 19: {} }
	_id: "8939e"
 ])
