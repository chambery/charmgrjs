sorcerer_bloodlines = new TAFFY([
		{
			name: "Aberrant",
			description: "There is a taint in your blood, one that is alien and bizarre. You tend to think in odd ways, approaching problems from an angle that most would not expect. Over time, this taint manifests itself in your physical form.",
			skill: "Knowledge (dungeoneering)",
			spells: {
				3: "Enlarge Person",
				5: "See Invisibility",
				7: "Tongues",
				9: "Black Tentacles",
				11: "Feeblemind",
				13: "Veil",
				15: "Plane Shift",
				17: "Mind Blank",
				19: "Shapechange"
			},
			feats: [ "Combat Casting", "Improved Disarm", "Improved Grapple", " Improved Initiative", " Improved Unarmed Strike", " Iron Will", " Silent Spell",
					"Skill Focus (Knowledge [dungeoneering])" ],
			arcana: "Whenever you cast a spell of the polymorph subschool, increase the duration of the spell by 50% (minimum 1 round). This bonus does not stack with the increase granted by the Extend Spell feat.",
			powers: {
				"Acidic Ray": {
					1: "You can fire an acidic ray as a standard action, targeting any foe within 30 feet as a ranged touch attack. The acidic ray deals 1d6 points of acid damage + 1 for every two sorcerer levels you possess. You can use this ability a number of times per day equal to 3 + your Charisma modifier."
				},
				"Long Limbs": {
					description: "Your reach increases by _$0 feet whenever you are making a melee touch attack. This ability does not otherwise increase your threatened area.",
					3: {
						vals: [ "5" ]
					},
					11: {
						vals: [ "10" ]
					},
					17: {
						vals: [ "15" ]
					}
				},
				"Unusual Anatomy": {
					description: "Your anatomy changes, giving you a _$0 chance to ignore any critical hit or sneak attack scored against you.",
					9: {
						vals: [ "25%" ]
					},
					13: {
						vals: [ "50%" ]
					}
				},
				"Alien Resistance": {
					description: "You gain spell resistance equal to your sorcerer level + 10.",
					levels: {
						15: {
							sr: "return (chardata.classes['Sorceror'].level + 1) + 10"
						}
					}
				},
				"Aberrant Form": {
					description: "Your body becomes truly unnatural. You are immune to critical hits and sneak attacks. In addition, you gain blindsight with a range of 60 feet and damage reduction 5/-.",
					10: {}
				}
			},
			_id: "qw33"
		},
		{
			name: "Abyssal",
			description: "Generations ago, a demon spread its filth into your heritage. While it does not manifest in all of your kin, for you it is particularly strong. You might sometimes have urges to chaos or evil, but your destiny (and alignment) is up to you.",
			skill: "Knowledge (planes)",
			spells: {
				3: "Cause Fear",
				5: "Bull's Strength",
				7: "Rage",
				9: "Stoneskin",
				11: "Dismissal",
				13: "Transformation",
				15: "Greater Teleport",
				17: "Unholy Aura",
				19: "Summon Monster IX"
			},
			feats: [ "Augment Summoning", "Cleave", "Empower Spell", "Great Fortitude", "Improved Bull Rush", "Improved Sunder", "Power Attack", "Skill Focus (Knowledge [planes])" ],
			arcana: "Whenever you cast a spell of the summoning subschool, the creatures summoned gain DR/good equal to 1/2 your sorcerer level (minimum 1). This does not stack with any DR the creature might have.",
			powers: {
				"Claws": {
					levels: {
						1: {
							description: "You can grow claws as a free action. These claws are treated as natural weapons, allowing you to make two claw attacks as a full attack action using your full base attack bonus. These attacks deal 1d4 points of damage each (1d3 if you are Small) plus your Strength modifier.",
							weapons: [ {
								name: "Claws",
								damage: "1d4/1d4",
								notes: "You can use your claws for a number of rounds per day equal to 3 + your Charisma modifier."
							} ]
						},
						5: {
							description: "Your claws are considered magic weapons for the purpose of overcoming DR."
						},
						7: {
							description: "Claw damage increases by one step to 1d6 points of damage (1d4 if you are Small).",
							weapons: [ {
								name: "Claws",
								damage: "1d6/1d6",
								notes: "You can use your claws for a number of rounds per day equal to 3 + your Charisma modifier."

							} ]
						},
						11: {
							description: "Your claws become flaming weapons, each dealing an additional 1d6 points of fire damage on a successful hit. This is a supernatural ability. You can use your claws for a number of rounds per day equal to 3 + your Charisma modifier.",
							weapons: [ {
								name: "Claws",
								damage: "1d6/1d6",
								notes: "You can use your claws for a number of rounds per day equal to 3 + your Charisma modifier."
							} ]
						}
					}
				},
				"Demon Resistances": {
					description: "You gain resist electricity _$0 and a +_$1 bonus on saving throws made against poison.",
					levels: {
						3: {
							vals: [ "5", "2" ]
						},
						9: {
							vals: [ "10", "4" ]
						}
					}
				},
				"Strength of the Abyss": {
					description: "You gain a +_$0 inherent bonus to your Strength.",
					levels: {
						9: {
							vals: [ "2" ]
						},
						13: {
							vals: [ "4" ]
						},
						17: {
							vals: [ "6" ]
						}
					}
				},
				"Added Summoning": {
					description: "Whenever you summon a creature with the demon subtype or the fiendish template using a summon monster spell, you summon one additional creature of the same kind.",
					levels: {
						15: {}
					}
				},
				"Demonic Might": {
					description: "The power of the Abyss flows through you. You gain immunity to electricity and poison. You also gain resistance to acid 10, cold 10, and fire 10, and gain telepathy with a range of 60 feet (allowing you to communicate with any creature that can speak a language).",
					levels: {
						20: {}
					}
				}
			},
			_id: "qw32"
		},
		{
			name: "Arcane",
			description: "Your family has always been skilled in the eldritch art of magic. While many of your relatives were accomplished wizards, your powers developed without the need for study and practice.",
			skill: "Knowledge (any one)",
			spells: {
				3: "Identify",
				5: "Invisibility",
				7: "Dispel Magic",
				9: "Dimension Door",
				11: "Overland Flight",
				13: "True Seeing",
				15: "Greater Teleport",
				17: "Power Word Stun",
				19: "Wish"
			},
			feats: [ "Combat Casting", "Improved Counterspell", "Improved Initiative", "Iron Will", "Scribe Scroll", "Skill Focus (Knowledge [arcana])", "Spell Focus", "Still Spell" ],
			arcana: "Whenever you apply a metamagic feat to a spell that increases the slot used by at least one level, increase the spell&apos;s DC by +1. This bonus does not stack with itself and does not apply to spells modified by the Heighten Spell feat.",
			powers: {
				"Arcane Bond": {
					1: "You gain an arcane bond, as a wizard equal to your sorcerer level. Your sorcerer levels stack with any wizard levels you possess when determining the powers of your familiar or bonded object. This ability does not allow you to have both a familiar and a bonded item. Rules for arcane bonds appear on page 78."
				},
				"Metamagic Adept": {
					3: "You can apply any one metamagic feat you know to a spell you are about to cast without increasing the casting time. You must still expend a higher-level spell slot to cast this spell. You can use this ability once per day at 3rd level and one additional time per day for every four sorcerer levels you possess beyond 3rd, up to five times per day at 19th level.",
					20: "Metamagic adept is replaced by arcane apotheosis."
				},
				"New Arcana": {
					description: "You can add any one spell from the sorcerer/wizard spell list to your list of spells known. This spell must be of a level that you are capable of casting. You can also add one additional spell at 13th level and 17th level.",
					9: {
						spells_known: 1
					},
					13: {
						spells_known: 1
					},
					17: {
						spells_known: 1
					}
				},
				"School Power": {
					15: "pick one school of magic. The DC for any spells you cast from that school increases by +2. This bonus stacks with the bonus granted by Spell Focus."
				},
				"Arcane Apotheosis": {
					20: "Your body surges with arcane power. You can add any metamagic feats that you know to your spells without increasing their casting time, although you must still expend higher-level spell slots. Whenever you use magic items that require charges, you can instead expend spell slots to power the item. For every three levels of spell slots that you expend, you consume one less charge when using a magic item that expends charges."
				}
			},
			_id: "qq33"
		},
		{
			name: "Celestial",
			description: "Your bloodline is blessed by a celestial power, either from a celestial ancestor or through divine intervention. Although this power drives you along the path of good, your fate (and alignment) is your own to determine.",
			skill: "Heal",
			spells: {
				3: "Bless",
				5: "Resist Energy",
				7: "Magic Circle Against Evil",
				9: "Remove Curse",
				11: "Flame Strike",
				13: "Greater Dispel Magic",
				15: "Banishment",
				17: "Sunburst",
				19: "Gate"
			},
			feats: [ "Dodge", " Extend Spell", " Iron Will", " Mobility", " Mounted Combat", " Ride-By Attack", " Skill Focus (Knowledge [religion])", "Weapon Finesse" ],
			arcana: "Whenever you cast a spell of the summoning subschool, the creatures summoned gain DR/evil equal to 1/2 your sorcerer level (minimum 1). This does not stack with any DR the creature might have.Bloodline Powers: Your celestial heritage grants you a great many powers, but they come at a price. The lords of the higher planes are watching you and your actions closely.",
			powers: {
				"Heavenly Fire": {
					description: "You can unleash a ray of heavenly fire as a standard action, targeting any foe within 30 feet as a ranged touch attack. Against evil creatures, this ray deals 1d4 points of damage + 1 for every two sorcerer levels you possess. This damage is divine and not subject to energy resistance or immunity. This ray heals good creatures of 1d4 points of damage + 1 for every two sorcerer levels you possess. A good creature cannot benefit from your heavenly fire more than once per day. Neutral creatures are neither harmed nor healed by this effect. You can use this ability a number of times per day equal to 3 + your Charisma modifier."
				},
				"Celestial Resistances": {
					description: "You gain resist acid $_0 and resist cold $_0.",
					3: {
						vals: [ "5" ]
					},
					9: {
						vals: [ "10" ]
					}
				},
				"Wings of Heaven": {
					9: "You can sprout feathery wings and fly for a number of minutes per day equal to your sorcerer level, with a speed of 60 feet and good maneuverability. This duration does not need to be consecutive, but it must be used in 1 minute increments."
				},
				"Conviction": {
					15: "You can reroll any one ability check, attack roll, skill check, or saving throw you just made. You must decide to use this ability after the die is rolled, but before the results are revealed by the GM. You must take the second result, even if it is worse. You can use this ability once per day."
				},
				"Ascension": {
					20: "You become infused with the power of the heavens. You gain immunity to acid, cold, and petrification. You also gain resist electricity 10, resist fire 10, and a +4 racial bonus on saves against poison. Finally, you gain unlimited use of the wings of heaven ability. Finally, you gain the ability to speak with any creature that has a language (as per the tongues spell)."
				}
			},
			_id: "qw61"
		},
		{
			name: "Destined",
			description: "Your family is destined for greatness in some way. Your birth could have been foretold in prophecy, or perhaps it occurred during an especially auspicious event, such as a solar eclipse. Regardless of your bloodline's origin, you have a great future ahead.",
			skill: "Knowledge (history)",
			spells: {
				3: "Alarm",
				5: "Blur",
				7: "Protection from Energy",
				9: "Freedom of Movement",
				11: "Break Enchantment",
				13: "Mislead",
				15: "Spell Turning",
				17: "Moment of Prescience",
				19: "Foresight"
			},
			feats: [ "Arcane Strike", "Diehard", "Endurance", "Leadership", "Lightning Reflexes", "Maximize Spell", "Skill Focus (Knowledge [history])", "Weapon Focus" ],
			arcana: "Whenever you cast a spell with a range of &quot;personal&quot;, you gain a luck bonus equal to the spell&apos;s level on all your saving throws for 1 round.",
			powers: {
				"Touch of Destiny": "At 1st level, you can touch a creature as a standard action, giving it an insight bonus on attack rolls, skill checks, ability checks, and saving throws equal to 1/2 your sorcerer level (minimum 1) for 1 round. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
				"Fated": "Starting at 3rd level, you gain a +1 luck bonus on all of your saving throws and to your AC during surprise rounds (see Chapter 8) and when you are otherwise unaware of an attack. At 7th level and every four levels thereafter, this bonus increases by +1, to a maximum of +5 at 19th level.",
				"It Was Meant To Be": "At 9th level, you may reroll any one attack roll, critical hit confirmation roll, or level check made to overcome spell resistance. You must decide to use this ability after the first roll is made but before the results are revealed by the GM. You must take the second result, even if it is worse. At 9th level, you can use this ability once per day. At 17th level, you can use this ability twice per day.",
				"Within Reach": "At 15th level, your ultimate destiny is drawing near. Once per day, when an attack or spell that causes damage would result in your death, you may attempt a DC 20 Will save. If successful, you are instead reduced to '1 hit points and are automatically stabilized. The bonus from your fated ability applies to this save.",
				"Destiny Realized": "At 20th level, your moment of destiny is at hand. Any critical threats made against you only confirm if the second roll results in a natural 20 on the die. Any critical threats you score with a spell are automatically confirmed. Once per day, you can automatically succeed at one caster level check made to overcome spell resistance. You must use this ability before making the roll."
			},
			_id: "qw63"
		},
		{
			name: "Draconic",
			description: "At some point in your family's history, a dragon interbred with your bloodline, and now its ancient power flows through your veins.",
			skill: "Perception",
			spells: {
				3: "Mage Armor",
				5: "Resist Energy",
				7: "Fly",
				9: "Fear",
				11: "Spell Resistance",
				13: "Form of the Dragon I",
				15: "Form of the Dragon II",
				17: "Form of the Dragon III",
				19: "Wish"
			},
			feats: [ "Blind-Fight", "Great Fortitude", "Improved Initiative", "Power Attack", "Quicken Spell", "Skill Focus (Fly)", "Skill Focus (Knowledge [arcana])", "Toughness" ],
			arcana: "Whenever you cast a spell with an energy descriptor that matches your draconic bloodline's energy type, that spell deals +1 point of damage per die rolled.",
			powers: {
				"Dragon Type": "The power of dragons flows through you and manifests in a number of ways. At 1st level, you must select one of the chromatic or metallic dragon types (see the Pathfinder RPG Bestiary). This choice cannot be changed. A number of your abilities grant resistances and deal damage based on your dragon type, as noted on the following table.<table><tr><th>Dragon Type </th><th>Energy Type </th><th>Breath Shape</th></tr><tr><td>Black </td><td>Acid </td><td>60-foot line</td></tr><tr><td>Blue </td><td>Electricity </td><td>60-foot line</td></tr><td>Green </td><td>Acid </td><td>30-foot cone</td><td>Red </td><td>Fire </td><td>30-foot cone</td><tr><td>White </td><td>Cold </td><td>30-foot cone</td></tr><tr><td>Brass </td><td>Fire </td><td>60-foot line</td></tr><tr><td>Bronze </td><td>Electricity </td><td>60-foot line</td></tr><tr><td>Copper </td><td>Acid </td><td>60-foot line</td></tr><tr><td>Gold </td><td>Fire </td><td>30-foot cone</td></tr><tr><td>Silver </td><td>Cold </td><td>30-foot cone</td></tr></table>",
				"Claws": {
					levels: {
						1: {
							description: "You can grow claws as a free action. These claws are treated as natural weapons, allowing you to make two claw attacks as a full attack action using your full base attack bonus. These attacks deal 1d4 points of damage each (1d3 if you are Small) plus your Strength modifier.",
							weapons: [ {
								name: "Claws",
								damage: "1d4/1d4",
								notes: "You can use your claws for a number of rounds per day equal to 3 + your Charisma modifier."
							} ]
						},
						5: {
							description: "Your claws are considered magic weapons for the purpose of overcoming DR."
						},
						7: {
							description: "Claw damage increases by one step to 1d6 points of damage (1d4 if you are Small).",
							weapons: [ {
								name: "Claws",
								damage: "1d6/1d6",
								notes: "You can use your claws for a number of rounds per day equal to 3 + your Charisma modifier."

							} ]
						},
						11: {
							description: "Your claws become flaming weapons, each dealing an additional 1d6 points of fire damage on a successful hit. This is a supernatural ability. You can use your claws for a number of rounds per day equal to 3 + your Charisma modifier.",
							weapons: [ {
								name: "Claws",
								damage: "1d6/1d6",
								notes: "You can use your claws for a number of rounds per day equal to 3 + your Charisma modifier."
							} ]
						}
					}
				},
				"Dragon Resistances": "At 3rd level, you gain resist 5 against your energy type and a +1 natural armor bonus. At 9th level, your energy resistance increases to 10 and natural armor bonus increases to +2. At 15th level, your natural armor bonus increases to +4.",
				"Breath Weapon": "At 9th level, you gain a breath weapon. This breath weapon deals 1d6 points of damage of your energy type per sorcerer level. Those caught in the area of the breath receive a Reflex save for half damage. The DC of this save is equal to 10 + 1/2 your sorcerer level + your Charisma modifier. The shape of the breath weapon depends on your dragon type (as indicated on the above chart). At 9th level, you can use this ability once per day. At 17th level, you can use this ability twice per day. At 20th level, you can use this ability three times per day.",
				"Wings": "At 15th level, leathery dragon wings grow from your back as a standard action, giving you a fly speed of 60 feet with average maneuverability. You can dismiss the wings as a free action.",
				"Power of Wyrms": "At 20th level, your draconic heritage becomes manifest. You gain immunity to paralysis, sleep, and damage of your energy type. You also gain blindsense 60 feet."
			},
			_id: "qa33"
		},
		{
			name: "Elemental",
			description: "The power of the elements resides in you, and at times you can hardly control its fury. This influence comes from an elemental outsider in your family history or a time when you or your relatives were exposed to a powerful elemental force.",
			skill: "Knowledge (planes)",
			spells: {
				3: "Burning hands*",
				5: "Scorching ray*",
				7: "Protection from Energy",
				9: "Elemental Body I",
				11: "Elemental Body II",
				13: "Elemental body III",
				15: "Elemental body IV",
				17: "Summon Monster VIII (elementals only)",
				19: "Elemental Swarm"
			},
			feats: [ "Dodge", "Empower Spell", "Great Fortitude", "Improved Initiative", "Lightning Reflexes", "Power Attack", "Skill Focus (Knowledge [planes])", "Weapon Finesse" ],
			arcana: "Whenever you cast a spell that deals energy damage, you can change the type of damage tomatch the type of your bloodline. This also changes the spell's type to match the type of your bloodline.",
			powers: {
				description: "One of the four elements infuses your being, and you can draw upon its power in times of need. At first level, you must select one of the four elements: air, earth, fire, or water. This choice cannot be changed. A number of your abilities grant resistances and deal damage based on your element, as noted below.<table><tr><th>Element </th><th>Energy Type </th><th>Elemental Movement</th></tr><tr><td>Air </td><td>Electricity </td><td>Fly 60 feet (average)</td></tr><tr><td>Earth </td><td>Acid </td><td>Burrow 30 feet</td></tr><tr><td>Fire </td><td>Fire </td><td>+30 feet base speed</td></tr><tr><td>Water </td><td>Cold </td><td>Swim 60 feet</td></tr></table>",
				"Elemental Ray": "Starting at 1st level, you can unleash an elemental ray as a standard action, targeting any foe within 30 feet as a ranged touch attack. This ray deals 1d6 points of damage of your energy type + 1 for every two sorcerer levels you possess. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
				"Elemental Resistance": "At 3rd level, you gain energy resistance 10 against your energy type. At 9th level, your energy resistance increases to 20.",
				"Elemental Blast": "At 9th level, you can unleash a blast of elemental power once per day. This 20-foot-radius burst does 1d6 points of damage of your energy type per sorcerer level. Those caught in the area of your blast receive a Reflex save for half damage. Creatures that fail their saves gain vulnerability to your energy type until the end of your next turn. The DC of this save is equal to 10 + 1/2 your sorcerer level + your Charisma modifier. At 9th level, you can use this ability once per day. At 17th level, you can use this ability twice per day. At 20th level, you can use this ability three times per day. This power has a range of 60 feet.",
				"Elemental Movement": "At 15th level, you gain a special movement type or bonus. This ability is based on your chosen element, as indicated on the above chart.",
				"Elemental Body": "At 20th level, elemental power surges through your body. You gain immunity to sneak attacks, critical hits, and damage from your energy type."
			},
			_id: "2w33"
		},
		{
			name: "Fey",
			description: "The capricious nature of the fey runs in your family due to some intermingling of fey blood or magic. You are more emotional than most, prone to bouts of joy and rage.",
			skill: "Knowledge (nature)",
			spells: {
				3: "Entangle",
				5: "Hideous Laughter",
				7: "Deep Slumber",
				9: "Poison",
				11: "Tree Stride",
				13: "Mislead",
				15: "Phase Door",
				17: "Irresistible Dance",
				19: "Shapechange"
			},
			feats: [ "Dodge", "Improved Initiative", "Lightning Reflexes", "Mobility", "Point Blank Shot", "Precise Shot", "Quicken Spell", "Skill Focus (Knowledge [nature])" ],
			arcana: "Whenever you cast a spell of the compulsion subschool, increase the spell's DC by +2.",
			powers: {
				"Laughing Touch": "At 1st level, you can cause a creature to burst out laughing for 1 round as a melee touch attack. A laughing creature can only take a move action but can defend itself normally. Once a creature has been affected by laughing touch, it is immune to its effects for 24 hours. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
				"Woodland Stride": "At 3rd level, you can move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at your normal speed and without taking damage or suffering any other impairment. Thorns, briars, and overgrown areas that have been magically manipulated to impede motion, however, still affect you.",
				"Fleeting Glance": "At 9th level, you can turn invisible for a number of rounds per day equal to your sorcerer level. This ability functions as greater invisibility. These rounds need not be consecutive.",
				"Fey Magic": "At 15th level, you may reroll any caster level check made to overcome spell resistance. You must decide to use this ability before the results are revealed by the GM. You must take the second result, even if it is worse. You can use this ability at will.",
				"Soul of the Fey": "At 20th level, your soul becomes one with the world of the fey. You gain immunity to poison and DR 10/cold iron. Creatures of the animal type do not attack you unless compelled to do so through magic. Once per day, you can cast shadow walk as a spell-like ability using your sorcerer level as your caster level."
			},
			_id: "7w33"
		},
		{
			name: "Infernal",
			description: "Somewhere in your family's history, a relative made a deal with a devil, and that pact has influenced your family line ever since. In you, it manifests in direct and obvious ways, granting you powers and abilities. While your fate is still your own, you can't help but wonder if your ultimate reward is bound to the Pit.",
			skill: "Diplomacy",
			spells: {
				3: "Protection from Good",
				5: "Scorching Ray",
				7: "Suggestion",
				9: "Charm Monster",
				11: "Dominate Person",
				13: "Planar Pinding (devils and creatures with the fiendish template only)",
				15: "Greater Teleport",
				17: "Power Word Stun",
				19: "Meteor Swarm"
			},
			feats: [ "Blind-Fight", "Combat Expertise", "Deceitful", "Extend Spell", "Improved Disarm", "Iron Will", "Skill Focus (Knowledge [planes])", "Spell Penetration" ],
			arcana: "Whenever you cast a spell of the charm subschool, increase the spell's DC by +2.",
			powers: {
				"Corrupting Touch": "At 1st level, you can cause a creature to become shaken (see page 568) as a melee touch attack. This effect persists for a number of rounds equal to 1/2 your sorcerer level (minimum 1). Creatures shaken by this ability radiate an aura of evil, as if they were an evil outsider (see detect evil). Multiple touches do not stack, but they do add to the duration. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
				"Infernal Resistances": "At 3rd level, you gain resist fire 5 and a +2 bonus on saving throws made against poison. At 9th level, your resistance to fire increases to 10 and your bonus on poison saving throws increases to +4.",
				"Hellfire": "At 9th level, you can call down a column of hellfire. This 10-foot-radius burst does 1d6 points of fire damage per sorcerer level. Those caught in the area of your blast receive a Reflex save for half damage. Good creatures that fail their saves are shaken for a number of rounds equal to your sorcerer level. The DC of this save is equal to 10 + 1/2 your sorcerer level + your Charisma modifier. At 9th level, you can use this ability once per day. At 17th level, you can use this ability twice per day. At 20th level, you can use this ability three times per day. This power has a range of 60 feet.",
				"On Dark Wings": "At 15th level, you can grow fearsome bat wings as a standard action, giving you a fly speed of 60 feet with average maneuverability. The wings can be dismissed as a free action.",
				"Power of the Pit": "At 20th level, your form becomes infused with vil power. You gain immunity to fire and poison. You also gain resistance to acid 10 and cold 10, and the ability to see perfectly in darkness of any kind to a range of 60 feet."
			},
			_id: "7233"
		},
		{
			name: "Undead",
			description: "The taint of the grave runs through your family. Perhaps one of your ancestors became a powerful lich or vampire, or maybe you were born dead before suddenly returning to life. Either way, the forces of death move through you and touch your every action.",
			skill: "Knowledge (religion)",
			spells: {
				3: "Chill Touch",
				5: "False Life",
				7: "Vampiric Touch",
				9: "Animate Dead",
				11: "Waves of Fatigue",
				13: "Undeath to Death",
				15: "Finger of Death",
				17: "Horrid Wilting",
				19: "Energy Drain"
			},
			feats: [ "Combat Casting", "Diehard", "Endurance", "Iron Will", "Skill Focus (Knowledge [religion])", "Spell Focus", "Still Spell", "Toughness" ],
			arcana: "Some undead are susceptible to your mind-affecting spells. Corporeal undead that were once humanoids are treated as humanoids for the purposes of determining which spells affect them.",
			powers: {
				"Grave Touch": " Starting at 1st level, you can make a melee touch attack as a standard action that causes a living creature to become shaken for a number of rounds equal to 1/2 your sorcerer level (minimum 1). If you touch a shaken creature with this ability, it becomes frightened  (see page 567) for 1 round if it has fewer Hit Dice than your sorcerer level. You can use this ability a number of times per day equal to 3 + your Charisma modifier.",
				"Death&apos;s Gift": " At 3rd level, you gain resist cold 5 and DR 5/&mdash; against nonlethal damage. At 9th level, your resistance to cold increases to 10 and your DR increases to 10/&mdash; against nonlethal damage.",
				"Grasp of the Dead": " At 9th level, you can cause a swarm of skeletal arms to burst from the ground to rip and tear at your foes. The skeletal arms erupt from the ground in a 20-foot-radius burst. Anyone in this area takes 1d6 points of slashing damage per sorcerer level. Those caught in the area receive a Reflex save for half damage. Those who fail the save are unable to move for 1 round. The DC of this save is equal to 10 + 1/2 your sorcerer level + your Charisma modifier. The skeletal arms disappear after 1 round. The arms must burst up from a solid surface. At 9th level, you can use this ability once per day. At 17th level, you can use this ability twice per day. At 20th level, you can use this ability three times per day. This power has a range of 60 feet.",
				"Incorporeal Form": " At 15th level, you can become incorporeal for 1 round per sorcerer level. While in this form, you gain the incorporeal subtype. You only take half damage from corporeal sources as long as they are magic (you take no damage from non-magic weapons and objects). Likewise, your spells deal only half damage to corporeal creatures. Spells and other effects that do not deal damage function normally. You can use this ability once per day.",
				"One of Us": " At 20th level, your form begins to rot (the appearance of this decay is up to you) and undead see you as one of them. You gain immunity to cold, nonlethal damage, paralysis, and sleep. You also gain DR 5/&mdash;. Unintelligent undead do not notice you unless you attack them. You receive a +4 morale bonus on saving throws made against spells and spell-like abilities cast by undead."
			},
			_id: "1w33"
		} ]);
