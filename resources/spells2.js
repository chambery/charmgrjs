spells2 = [{
	name: "Alter Fortune",
	description: " Cause one creature to reroll any die roll.",
	school: "Div",
	composition: "V,X",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One creature",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	phb: "101",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 3,
		"Cleric": 3,
		"Druid": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>With a single utterance, you create a momentary distortion that engulfs and confounds your foe.</i><p>You change the flow of chance, causing the subject to immediately reroll any die roll it just made. It must abide by the second roll. <p class=sub><i>XP Cost:</i> 200 XP"
}, {
	name: "Animalistic Power",
	description: "undefined",
	school: "Trans",
	composition: "V,S,M",
	time: "1 a",
	range: "Touch",
	target: "Creature touched",
	duration: "1 minute/level",
	save: "Will negates (harmless)",
	sr: "Yes (harmless)",
	phb: "101",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 7,
		"Druid": 7,
		"Ranger": 3,
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>A sparkling nimbus of green light appears around the creature. As the light fades, the creature seems a shade larger and assumes a more animalistic, even feral countenance.</i><p>You imbue the subject with an aspect of the natural world. The subject gains a +2 enhancement bonus to Strength, Dexterity, and Constitution.<p class=sub><i>Material Component</i>: A bit of animal fur, feathers, or skin."
}, {
	name: "Animalistic Power, Mass",
	description: "undefined",
	school: "Trans",
	composition: "V,S,M",
	time: "1 a",
	range: "Touch",
	target: "One creature/level, no two of which are more than 30 ft. apart",
	duration: "1 minute/level",
	save: "Will negates (harmless)",
	sr: "Yes (harmless)",
	phb: "101",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 7,
		"Wizard": 7
	},
	detail: "This spell functions like animalistic power, except that it affects multiple creature. Targeted creatures must not be more than 30 ft. apart"
}, {
	name: "As the Frost",
	description: "undefined",
	school: "Trans",
	composition: "V,S,M",
	time: "1 a",
	range: "Touch",
	target: "You",
	duration: "1 minute/level",
	save: "Will negates (harmless)",
	sr: "Yes (harmless)",
	phb: "101",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Druid": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	detail: "<i>With a crystalline tinkling, your body transforms into a fi gure of ice and cold, your equipment melding into your new form. Your skin becomes brilliant blue and transparent, with glimpses of liquid beneath. Frost forms across your hands and arms, dripping down to form knife-like icicles. Your breath hisses white in the bitterly cold air surrounding you. Snow swirls about you as your presence freezes the air's moisture. Ice crystals spread from your footprints.</i><p>Your creature type changes to outsider. Unlike other outsiders, you can be brought back to life if you die in this form. You gain the following qualities and abilities:<ul><li>Immunity to cold</li><li>Damage reduction 10/magic and piercing.</li><li>At the beginning of your action, creatures within 15 feet of you take 2d6 points of cold damage per round. A creature that takes damage from this effect must make a Fortitude save (DC 17 + your key ability modifier) or be <i>slowed</i>, as the <i>slow</i> spell, for the remaining duration of <i>as the frost</i>.Spell resistance applies to this effect.<p class=sub><i>Material Component</i>: A chunk of ice or crystal."
}, {
	name: "Baleful Blink",
	description: "undefined",
	school: "Trans",
	composition: "V",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One creature",
	duration: "1 minute/level",
	save: "Fort negs",
	sr: "No",
	phb: "102",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	detail: "<i>You cause the creature to wink in and out of existence erratically, much to its chagrin.</i><p>You curse one creature to a frustrating existence on the edge of the Ethereal Plane. The subject shimmers between the Ethereal Plane and the Material Plane, has a 50% miss chance on any melee or ranged attacks (as if the target of the attack had total concealment), and there is a 50% chance that any spell she casts does not have an effect on the desired plane while she blinks between the planes.<p class=sub>Because the magic of the spell only causes the subject to blinkwhen attacking or casting, attackers have no miss chance against her, and spells cast against her affect her normally. Because the blinking is so rapid, she cannot attempt to blink through walls or move in the Ethereal Plane.<p class=sub>The subject of a <i>baleful blink</i> spell can cast spells on itself with impunity; in this case, it has no miss chance because the target of its spell (itself) travels along with the spell. The subject can also target creatures on the Ethereal Plane, but still has a 50% chance of failure on attacks and spells. Spells with the force descriptor are unaffected by the effect of <i>baleful blink</i>."
}, {
	name: "Bigby's Disrupting Hand",
	description: "undefined",
	school: "Evoc",
	composition: "V,S,F",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	effect: "One hand of force",
	duration: "1 minute",
	save: "-",
	sr: "Yes",
	phb: "102",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>A small, spectral human hand springs into existence before your target. It hovers in the air, ready to deliver a backhanded blow.</i><p>Like Bigby's interposing hand, this spell creates a magical construct in the form of a human hand. The hand targets a single opponent of your choice within range. You choose this opponent as you cast the spell. You can target a different opponent with this spell by taking a move action to do so.<p class=sub>When the subject of Bigby's disrupting hand attempts to cast a spell, the hand punches him. This attack causes no damage, but it forces the subject to make a Concentration check with a DC equal to this spell's save DC. If the subject fails the check, the hand's blow ruins his casting attempt.<p class=sub>The hand is about 1 foot long. It has hit points equal to half your full normal hit points, and its AC is 20 (+4 size, +6 natural). It makes saving throws using your total save bonuses and takes damage from spells and attacks as normal.<p class=sub><i>Focus:</i> A soft glove."
}, {
	name: "Bigby's Helpful Hand",
	description: "undefined",
	school: "Evoc",
	composition: "V,S,F",
	time: "1 a",
	range: "0 ft.",
	effect: "One hand of force",
	duration: "1 hour/level (D)",
	save: "-",
	sr: "No",
	phb: "102",
	tags: ["phb2"],
	type: "spell",
	classes: {},
	detail: "<i>A magical construct in the shape of a hand appears next to you. Its fingers open toward you, waiting for you to hand it an item.</i><p>This spell creates a hand of magical force that holds items for you, helps you complete long, involved tasks, and otherwise aids you. The spell grants you a +2 competence bonus on Craft, Disable Device, and Open Lock checks for the duration of the spell. It can hold a single object weighing up to 20 pounds. You can grasp the object that the hand carries or place an object in its grasp as a swift action. The hand remains in your square at all times. It matches your speed, and you can bring the hand and the object along with you if you use dimension door, teleport, and similar spells. You cannot order the hand to move away from you. If you are separated from the hand, the spell immediately ends.<p class=sub>The hand is about 1 foot long. It has hit points equal to half your full normal hit points, and its AC is 20 (+4 size, +6 natural). It makes saving throws using your total save bonuses and takes damage from spells and attacks as normal<p class=sub><i>Focus:</i> A soft glove."
}, {
	name: "Bigby's Striking Fist",
	description: "undefined",
	school: "Evoc",
	composition: "V,S,M",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	target: "One creature",
	duration: "Instantaneous",
	save: "Ref part",
	sr: "Yes",
	phb: "102",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>A large glowing fist, the size of a human torso, appears in front of the creature and slams into it with great force.</i><p>The attack bonus of this <i>striking fist </i>equals your caster level + your key ability modifier + 2 for the handÃ¢â‚¬â„¢s Strength score (14). The fist deals 1d6 points of nonlethal damage per two caster levels (maximum 5d6) and attempts a bull rush (PH 154). The fist has a bonus of +4 plus +1 per two caster levels on the bull rush attempt, and if successful it knocks the subject back in a direction of your choice. This movement does not provoke attacks of opportunity. A subject that succeeds on its Reflex save takes half damage and is not subject to the bull rush attempt.<p class=sub><i>Material Components:</i> Three glass beads"
}, {
	name: "Bigby's Tripping Hand",
	description: "undefined",
	school: "Evoc",
	composition: "V,S,M",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	target: "One creature",
	duration: "Instantaneous",
	save: "Ref negs",
	sr: "Yes",
	phb: "103",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 1,
		"Wizard": 1
	},
	detail: "<i>A large glowing hand, the size of a human torso, appears in front of the creature and sweeps at its legs.</i><p>The large hand sweeps at the target creatureÃ¢â‚¬â„¢s legs in a tripping maneuver (PH 158). This trip attempt does not provoke attacks of opportunity. Its attack bonus equals your caster level + your key ability modifi er + 2 for the handÃ¢â‚¬â„¢s Strength score (14). The hand has a bonus of +1 on the trip attempt for every three caster levels, to a maximum of +5 at 15th level..<p class=sub><i>Material Components:</i> Three glass beads"
}, {
	name: "Bigby's Warding Hand",
	description: "undefined",
	school: "Evoc",
	composition: "V,S,F",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	effect: "One hand of force",
	duration: "1 round/level (D)",
	save: "-",
	sr: "Yes",
	phb: "103",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>A spectral human hand springs into existence. It pushes into the target, forcing him back as he attempts to move.</i><p>This spell creates a hand of pure force that hinders the subject's ability to move. You designate a target when casting this spell. You can change the spell's target by taking a move action to do so. This spell has no effect on Huge or larger creatures.<p class=sub>If the target of the spell attempts to move, it must make a Strength check (DC 12 + your key ability modifier). If this check fails, the creature moves at half speed. The target must make a new check each round to overcome the hand's hindering force.<p class=sub>The hand is about 1 foot long. It has hit points equal to half your full normal hit points, and its AC is 20 (+4 size, +6 natural). It makes saving throws using your total save bonuses and takes damage from spells and attacks as normal.<p class=sub><i>Focus</i>: A soft glove."
}, {
	name: "Black Karma Curse",
	description: "undefined",
	school: "Ench",
	composition: "V,S",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One creature",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	phb: "103",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>With a word and a gesture, you compel the bewildered creature to attack itself.</i><p>If the target creature's saving throw fails, it immediately takes damage as if it had hit itself with its currently wielded weapon (or natural weapon). If the creature has more than one eligible attack form, it uses the one that deals the most damage."
}, {
	name: "Blade of Blood",
	description: "undefined",
	school: "Necro",
	composition: "V,S",
	time: "1 swift a",
	range: "Touch",
	target: "Weapon touched",
	duration: "1 round/level or until discharged",
	save: "-",
	sr: "No",
	phb: "103",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 1,
		"Sorceror": 1,
		"Wizard": 1
	},
	detail: "<i>Red blood erupts along the weapon's blade, bludgeon, or point. The blood drips to spatter in thick, viscous drops upon the ground.</i><p>This spell infuses the weapon touched with baleful energy. The next time this weapon strikes a living creature, blade of blood discharges. The spell deals an extra 1d6 points of damage against the target of the attack. You can voluntarily take 5 hit points of damage to empower the weapon to deal an extra 2d6 points of damage (for a total of 3d6 points of extra damage).<p class=sub>The weapon loses this property if its wielder drops it or otherwise loses contact with it."
}, {
	name: "Blade Brothers",
	description: "undefined",
	school: "Abjur",
	composition: "V,S",
	time: "1 a",
	range: "Touch",
	target: "Two willing creatures",
	duration: "1 minute/level or until discharged",
	save: "Will negs",
	sr: "Yes",
	phb: "103",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 2,
		"Cleric": 2
	},
	detail: "<i>You reach out and touch two creatures, and a sparkling tether of multicolored light briefly forms between them.</i><p>One time during the duration of this spell, when one subject of the spell attempts a saving throw, both recipients can roll and apply the more favorable result. When rolling, each subject useshis own save bonus and save modifiers. If both saving throws fail, both creatures suffer the consequences of a failed save, even if the effect that prompted the saving throw only affected one of the subjects. If the affected creatures move more than 120 feet away from each other after the spell is cast, the effect ends."
}, {
	name: "Bleakness",
	description: "undefined",
	school: "Evoc",
	composition: "V,S,DF",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	area: "20-ft.-radius emanation centered on a point in space",
	duration: "1 round/level (D)",
	save: "-",
	sr: "No",
	phb: "104",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	detail: "<i>A pulsing darkness bleeds from your body.</i><p>You conjure up a cloud of inky darkness laced with life-sucking energy from the Negative Energy Plane. Living creatures in the area take 1d6 points of damage each round, starting in the round when they enter the area and at the beginning of their turns each round they remain in the area. The damage can be prevented by any effect that protects against negative energy, such as <i>death ward</i>.<p class=sub>In addition, undead gain turn resistance +4 and fast healing 3 for as long as they remain in the area of the spell.<p class=sub><i>Bleakness</i> counters or dispels any light spell of equal or lower level."
}, {
	name: "Blessing of the Righteous",
	description: "undefined",
	school: "Evoc",
	composition: "V,S,DF",
	time: "1 a",
	range: "40 ft.",
	area: "All allies in a 40-ft.-radius burst centered on you",
	duration: "1 round/level (D)",
	save: "Will negs",
	sr: "Yes",
	phb: "104",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 4,
		"Paladin": 4
	},
	detail: "<i>A sudden burst of warm, radiant light engulfs you and your allies. The light fades quickly but lingers on the weapons of those affected.</i><p>You bless yourself and your allies. You and your allies' melee and ranged attacks deal an extra 1d6 points of holy damage and are considered good-aligned for the purpose of overcoming damage reduction."
}, {
	name: "Blinding Color Surge",
	description: "undefined",
	school: "Illus",
	composition: "V,S,F",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	duration: "1 round/level",
	save: "Will negs",
	sr: "Yes",
	phb: "104",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>You point at the target of this spell. The colors of your clothing, skin, and hair shine for a brief moment before they surge away from you, forming a multicolored ray that strikes your target. You disappear as the colors of your body and items leap from you into the beam. The target clutches his eyes and staggers.</i><p>You strip the color from your body and gear, turn it into a lance of energy, and hurl it at a target. When you cast this spell, you target a creature with the colors stripped from your form. The target must make a Will save or be blinded for 1 round.<p class=sub>You also gain the benefit of invisibility, for the duration of this spell, even if the target creature succeeds on its save or if its spell resistance protects it.<p class=sub><i>Focus:</i> A small prism."
}, {
	name: "Blood Creepers",
	description: "undefined",
	school: "Conj",
	composition: "V,S,DF",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	duration: "1 round/level",
	save: "Fort negs",
	sr: "Yes",
	phb: "104",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Druid": 5
	},
	detail: "<i>Thorny vines burst from the creature's body, punching through bone, flesh, and skin to enwrap its arms and legs and tether it to the ground.</i><p>The subject takes 1 point of piercing damage per caster level (maximum 15) as the creepers rip apart its body. In addition, the creepers entwine securely around it, trapping its legs and arms. The subject is immobilized (unable to move from its current location) and entangled.<p class=sub>Each round, the subject takes an extra 1 point of piercing damage per caster level (maximum 15) unless it is able to escape. A trapped creature can attempt to break free with a DC 20 Strength check or wriggle free with a DC 25 Escape Artist check, either of which ends the spell if successful. Other creatures can use the aid another action as normal on these checks. They can make attacks against these vines as if they were wooden objects with a thickness of 3 inches (see Smashing an Object, PH 185).<p class=sub>Despite its name, <i>blood creepers</i> is equally effective on living and non-living creatures."
}, {
	name: "Bones of the Earth",
	description: "undefined",
	school: "Conj",
	composition: "V,S,DF",
	time: "1 a",
	range: "60 ft.",
	effect: "One 5-ft.-diameter pillar of stone per round",
	duration: "1 round/2 levels (D)",
	save: "Ref negs",
	sr: "No",
	phb: "104",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Druid": 6
	},
	detail: "<i>A pillar of rock explodes upward from the ground.</i><p>Each round as a standard action, you conjure a pillar of rock that bursts from a stone or earthen surface anywhere within the spell's range. Each pillar fi lls a 5-foot square and grows to a height of 20 feet or until it hits a barrier such as a ceiling or wall. A Large or smaller creature in a square where a pillar erupts must succeed on a Refl ex save or be carried upward by the force of the pillar. If a pillar is created in a room with a ceiling height of 20 feet or less, the rock slams into the ceiling, dealing 4d6 points of damage to any creature atop it.<p class=sub>In a location with a ceiling height of more than 20 feet, a creature carried up by a pillar must succeed on a DC 20 Balance check or fall from the top of the pillar when it reaches its maximum height. On a failed check, the creature plummets to the ground, taking 2d6 points of damage from the fall.<p class=sub>You can also cause a pillar to erupt from a vertical surface, in which case any creatures in the pillar's path must succeed on their Refl ex saves or take 2d6 points of damage and be knocked prone.<p class=sub>The pillar created is permanent and has AC 3, hardness 8, and 900 hit points. A pillar can be climbed with a DC 20 Climb check."
}, {
	name: "Bright Worms",
	description: "undefined",
	school: "Conj",
	composition: "V,S,DF",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	area: "20-ft.-radius spread",
	duration: "1 round/level (D)",
	save: "Ref half",
	sr: "No",
	phb: "105",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	detail: "<i>With a loud pop, a nest of writhing worms of multicolored light appears in the air.</i><p>You create a knot of living light with wormlike tendrils extending out from the mass. The worms hang in the air as if suspended. The worms drift away from the paths of your allies, but they attack enemies that enter the area, lashing out with lightning speed and combusting creatures that they touch.<p class=sub>When you cast the spell, and in each later round at the beginning of your turn, the flaming worms deal 2d6 points of fire damage to any of your enemies in the area. The fire damage increases as you gain levels, to 3d6 per round for an 11th-level caster and 4d6 per round for a 15th-level caster.<p class=sub>Any area spell that deals cold damage eliminates the bright worms from its area."
}, {
	name: "Burning Rage",
	description: "undefined",
	school: "Trans",
	composition: "V,S",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One creature",
	duration: "1 round/level (D)",
	save: "Will negs",
	sr: "Yes",
	phb: "105",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 1,
		"Wizard": 1
	},
	detail: "<i>As you imbue an ally with this spell, a nimbus of shimmering blue flame surrounds him. He winces in pain as the flames scorch his flesh, but when the eldritch power flows into him, his muscles surge with might.</i><p>This spell imbues a creature with burning magical energy that enhances the subject's strength and endurance. The searing energy also burns and injures the subject.<p class=sub>The subject of this spell gains a +1 bonus on attack rolls, a +2 bonus on damage rolls, and damage reduction 2/magic. This spell's burning energy deals 4 points of fi re damage to the subject at the start of each of its turns until the spell's duration expires or you dismiss the effect."
}, {
	name: "Call of Stone",
	description: "undefined",
	school: "Trans",
	composition: "V,S",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	target: "One creature",
	duration: "1 round/2 level (D)",
	save: "Fort part",
	sr: "Yes",
	phb: "105",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Druid": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	detail: "<i>A beam of sickly gray energy strikes the target of this spell. He acquires an ashen tone to his skin. With each passing moment, the grayish tone becomes deeper in color as the target transforms into a stone statue.</i><p>This spell slowly transforms a creature into an inanimate stone statue. The target must make a Fortitude save each round for the duration of spell at the start of its turn or take a cumulative 10-foot penalty to speed and a Ã¢â‚¬â€œ2 penalty to Dexterity. If the target's speed drops to 0 feet, it cannot move. If the target fails four or more saves, it permanently transforms into a statue as if affected by fl esh to stone. Any effect or spell that reverses fl esh to stone also cures this condition."
}, {
	name: "Celerity",
	description: "undefined",
	school: "Trans",
	composition: "V",
	time: "1 imm a",
	range: "Personal",
	target: "You",
	duration: "Instantaneous",
	save: "Fort part",
	sr: "Yes",
	phb: "105",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	detail: "This spell works like lesser celerity, except that you pull even more time into the present. When you cast this spell, you can immediately take a standard action, as if you had readied an action. You can even interrupt another creature's turn when you cast this spell. However, after you take the standard action granted by this spell, you are dazed until the end of your next turn."
}, {
	name: "Celerity, Greater",
	description: "undefined",
	school: "Trans",
	composition: "V",
	time: "1 imm a",
	range: "Personal",
	target: "You",
	duration: "Instantaneous",
	save: "Fort part",
	sr: "Yes",
	phb: "105",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	detail: "This spell works like celerity, except upon casting this spell you can immediately take a full-round action (or a standard action plus a move action, or two move actions). After performing this action, you are dazed until the end of your next turn."
}, {
	name: "Celerity, Lesser",
	description: "undefined",
	school: "Trans",
	composition: "V",
	time: "1 imm a",
	range: "Personal",
	target: "You",
	duration: "Instantaneous",
	save: "Fort part",
	sr: "Yes",
	phb: "105",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>You borrow a slice of time from the future, pulling it into the present so that you can act.</i><p>Upon casting this spell, you can immediately take a move action. After performing this action, you are dazed until the end of your next turn."
}, {
	name: "Chain Dispel",
	description: "undefined",
	school: "Abjur",
	composition: "V,S,M/DF",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One or more creatures, no two of which are more than 30 ft. apart",
	duration: "Instantaneous",
	save: "None",
	sr: "No",
	phb: "105",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 8,
		"Sorceror": 8,
		"Wizard": 8
	},
	detail: "<i>A coruscating bolt rips through the air, humming with power as it strikes each targeted creature.</i><p>Each creature struck by this spell is affected as if by a targeted dispel magic, except that you can add your caster level to the dispel check, up to a maximum of 25.<p class=sub><i>Material Component:</i> A pair of bronze nails, each no less than 6 inches in length."
}, {
	name: "Channeled Divine Health",
	description: "undefined",
	school: "Conj",
	composition: "V,S",
	time: "See text",
	range: "See text",
	target: "One creature",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	phb: "106",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 4
	},
	detail: "<i>You bring forth a sphere of pure healing energy. You pour divine power into it, slowly building the energy it holds, until it is ready to mend an ally's wounds.</i><p>This spell allows you to heal an ally, or damage an undead creature, at a range greater than touch. When you cast this spell, you channel energy into it. You can choose how long to spend casting this spell.<p class=sub>If you cast this spell as a swift action, it has a range of touch, and you heal a single touched creature of 1d8 points of damage. An undead creature you touch takes this amount of damage instead of being healed.<p class=sub>If you cast this spell as a standard action, it has a range of close, and you heal a single creature within range of damage equal to 1d8 points + your caster level (maximum +10). An undead creature you designate within range takes this amount of damage instead of being healed.<p class=sub>If you cast this spell as a full-round casting this spell, it has a range of medium, and you heal a single creature within range of damage equal to 2d8 points + your caster level (maximum +15). An undead creature you designate within range takes this amount of damage instead of being healed.<p class=sub>If you spend 2 full rounds casting this spell, it has a range of long, and you heal a single creature within range of damage equal to 4d8 points + your caster level (maximum +20). An undead creature you designate within range takes this amount of damage instead of being healed.<p class=sub>You do not need to declare ahead of time how long you want to spend casting the spell. When you begin casting this spell, you decide that you are finished casting after the appropriate time has passed."
}, {
	name: "Channeled Divine Shield",
	description: "undefined",
	school: "Abjur",
	composition: "V,S",
	time: "See text",
	range: "Personal",
	target: "You",
	duration: "1 round/level",
	save: "undefined",
	sr: "undefined",
	phb: "106",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 3
	},
	detail: "<i>As you complete this spell, a shield crafted from divine energy appears before you. As you channel energy into the shield, it grows stronger and stronger.</i><p>This spell improves your defenses. The magnitude of this improvement depends on the amount of time you spend casting the spell.<p class=sub>If you cast this spell as a swift action, you gain damage reduction 2/evil for the duration of this spell.<p class=sub>If you cast this spell as a standard action, you gain damage reduction 5/evil.<p class=sub>If you cast this spell as a full-round action, you gain damage reduction 8/evil.<p class=sub>If you spend 2 rounds casting this spell, you gain damage reduction 10/evil.<p class=sub>The spell's duration does not begin until you finish casting the spell. You do not need to declare ahead of time how long you want to spend casting the spell. When you begin casting this spell, you decide that you are finished casting after the appropriate time has passed."
}, {
	name: "Channeled Pyroburst",
	description: "undefined",
	school: "Evoc",
	composition: "V,S",
	time: "See text",
	range: "Medium (100 ft. + 10 ft./level)",
	area: "See text",
	duration: "Instantaneous",
	save: "Ref half",
	sr: "Yes",
	phb: "106",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	detail: "<i>A sphere of fiery energy comes into being before you. You channel energy into it, causing it to bubble and seethe with power. When you have poured enough energy into the sphere, you send it fl ying into your foes.</i><p>This spell creates a bolt of fiery energy that blasts your enemies. The spell's strength depends on the amount of time you spend channeling energy into it.<p class=sub>If you cast this spell as a swift action, it deals 1d4 points of fire damage per two caster levels (maximum 10d4) against a single target of your choice.<p class=sub>If you cast this spell as a standard action, it deals 1d6 points of fire damage per caster level (maximum 10d6) to all creatures in a 10-foot-radius spread.<p class=sub>If you cast this spell as a full-round action, it deals 1d8 points of fire damage per caster level (maximum 10d8) to all creatures in a 15-foot-radius spread.<p class=sub>If you spend 2 rounds casting this spell, it deals 1d10 points of fire damage per caster level (maximum 10d10) to all creatures in a 20-foot-radius spread.<p class=sub>You do not need to declare ahead of time how long you want to spend casting the spell. When you begin casting this spell, you decide that you are finished casting after the appropriate time has passed."
}, {
	name: "Chasing Perfection",
	description: "undefined",
	school: "Trans",
	composition: "V,S,M",
	time: "1 a",
	range: "Touch",
	target: "Creature touched",
	duration: "1 minute/level",
	save: "Will neg",
	sr: "Yes",
	phb: "106",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 6,
		"Druid": 6,
		"Sorceror": 6,
		"Wizard": 6
	},
	detail: "<i>Energy courses through the creature touched. Its muscles grow and become more defined, it starts to move with greater alacrity and grace, and its bearing increases.</i><p>The subject improves in all ways. It gains a +4 enhancement bonus to each of its ability scores.<p class=sub><i>Material Component:</i> A statuette of a celestial or fiend worth 50 gp."
}, {
	name: "Cloud of Knives",
	description: "undefined",
	school: "Conj",
	composition: "V,S,M",
	time: "1 a",
	range: "Personal",
	target: "You",
	duration: "1 round/level",
	save: "undefined",
	sr: "undefined",
	phb: "107",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>You conjure a cloud of sharp knives around you. The knives float in the air around your upper body, pointing in the direction you look.</i><p>Each round as a free action at the beginning of your turn, you can release one of these knives at any target within 30 feet that you can see. This is a ranged attack that uses an attack bonus equal to your caster level + your key ability modifier. Each suc-cessful hit deals 1d6 points of damage +1 per three caster levels (maximum +5) and threatens a critical hit on a roll of 19Ã¢â‚¬â€œ20.<p class=sub>Damage reduction applies to knife attacks from this spell. The knives are treated as magic for the purpose of overcoming damage reduction.<p class=sub><i>Material Component:</i> A knife<p class=sub><i>Optional Material Component:</i> Using a silvered dagger (22 gp) in the casting of this spell allows the knives to overcome damage reduction as if they were both magic and silver, but the knives deal 1 less point of damage."
}, {
	name: "Condemnation",
	description: "undefined",
	school: "Abjur",
	composition: "V",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One outsider",
	duration: "1 round",
	save: "Will neg",
	sr: "Yes",
	phb: "107",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 5,
		"Sorceror": 4,
		"Wizard": 4
	},
	detail: "<i>You speak words of power, forcing the entity to shrink with horror.</i><p>The outsider targeted by this spell must succeed on a Will save or be stunned for 1 round and have its spell resistance reduced by 10."
}, {
	name: "Crown of Clarity",
	description: "undefined",
	school: "Div",
	composition: "V,S,F",
	time: "1 a",
	range: "Touch",
	target: "Creature touched",
	duration: "1 hour/level (D) or until discharged",
	save: "Will neg",
	sr: "Yes",
	phb: "107",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Druid": 3,
		"Ranger": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>A crown of magical energy appears upon your head. For a moment, your vision blurs and a slight buzz fills your ears. These distractions pass, leaving you with sharpened senses.</i><p>You create an arcane crown that grants the wearer a +2 competence bonus on Listen and Spot checks.<p class=sub>As an immediate action, the creature wearing a crown of clarity can discharge its magic to gain a +8 bonus on a single Spot or Listen check. The spell ends after the wearer uses the crown in this manner.<p class=sub>The crown occupies space on the body as a headband, hat, or helm. If the crown is removed, the spell immediately ends.<p class=sub><i>Focus:</i> A pewter hoop 6 inches in diameter."
}, {
	name: "Crown of the Grave",
	description: "undefined",
	school: "Necro",
	composition: "V,S,M,F",
	time: "1 a",
	range: "Touch",
	target: "Creature touched",
	duration: "1 hour/level (D) or until discharged",
	save: "Will neg",
	sr: "Yes",
	phb: "107",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>A ring of ghostly fog surrounds the target's head. With a swirl, the fog dissipates, leaving behind a crown made of human bones.</i><p>This spell creates a magic crown that grants its wearer the power to command undead. Once per minute, the crown's wearer can issue a one-word order to an undead creature, as per the command spell. The undead creature must make a Will save to resist this effect. Even though command is normally a mind-affecting spell, the crown channels holy or unholy energy (depending on your alignment; neutral casters choose one or the other) to compel obedience. In addition, a cleric who wears the crown can expend a use of his turn or rebuke undead ability to increase this ability's save DC by 4.<p class=sub>As an immediate action, the creature wearing a crown of the grave can dis-charge its magic to gain a +4 bonus on a single turn or rebuke undead attempt. The spell ends after the wearer uses the crown in this manner.<p class=sub>The crown occupies space on the body as a headband, hat, or helm. If the crown is removed, the spell immediately ends.<p class=sub><i>Material Component:</i> A pinch of grave dirt.<p class=sub><i>Focus:</i> A wooden hoop 6 inches in diameter."
}, {
	name: "Crown of Might",
	description: "undefined",
	school: "Trans",
	composition: "V,S,F",
	time: "1 a",
	range: "Touch",
	target: "Creature touched",
	duration: "1 hour/level (D) or until discharged",
	save: "Will neg",
	sr: "Yes",
	phb: "108",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>A crown of plain copper appears upon the recipient's head. The crown has a front piece fashioned to resemble a bull's head.</i><p>This spell creates a crown of magical energy that grants the spell's recipient a +2 enhancement bonus to Strength.<p class=sub>As an immediate action, the creature wearing a crown of might can discharge its magic to gain a +8 enhancement bonus to Strength for 1 round. The spell ends after the wearer uses the crown in this manner.<p class=sub>The crown occupies space on the body as a headband, hat, or helm. If the crown is removed, the spell immediately ends.<p class=sub><i>Focus:</i> A copper hoop 6 inches in diameter."
}, {
	name: "Crown of Protection",
	description: "undefined",
	school: "Trans",
	composition: "V,S,F",
	time: "1 a",
	range: "Touch",
	target: "Creature touched",
	duration: "1 hour/level (D) or until discharged",
	save: "Will neg",
	sr: "Yes",
	phb: "108",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>A shimmering crown of force appears upon the recipient's head. A barely visible shield of force projects forward from it, warding off attacks aimed at its wearer.</i><p>This spell creates a crown of magical energy that grants the spell's recipient a +1 deflection bonus to AC and a +1 resistance bonus on all saves.<p class=sub>As an immediate action, the creature wearing a crown of protection can discharge its magic to gain a +4 deflection bonus to AC or a +4 resistance bonus on saves for 1 round. The spell ends after the wearer uses the crown in this manner.<p class=sub>The crown occupies space on the body as a headband, hat, or helm. If the crown is removed, the spell immediately ends.<p class=sub><i>Focus:</i> A iron hoop 6 inches in diameter."
}, {
	name: "Crown of Smiting",
	description: "undefined",
	school: "Trans",
	composition: "V,S,F",
	time: "1 a",
	range: "Touch",
	target: "Creature touched",
	duration: "1 hour/level (D) or until discharged",
	save: "Will neg",
	sr: "Yes",
	phb: "108",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 3,
		"Paladin": 2
	},
	detail: "<i>A crown of divine energy appears upon the target's brow. The holy symbol of the caster's faith is set at the front of the crown.</i><p>You create a magic crown infused with divine energy harmful to enemies of your faith. Choose a single alignment (chaotic, evil, good, or lawful) when you cast this spell. Once per minute, the crown's wearer gains a +2 divine bonus on damage rolls on his next melee or ranged attack if his target has the designated alignment. The crown's wearer must decide to use this extra damage before making his attack. If he misses, the extra damage is lost.<p class=sub>As an immediate action, the creature wearing a crown of smiting can discharge its magic to gain a +8 divine bonus on damage on a single attack. The spell ends after the wearer uses the crown in this manner.<p class=sub>The crown occupies space on the body as a headband, hat, or helm. If the crown is removed, the spell immediately ends.<p class=sub><i>Focus:</i> A silver hoop 6 inches in diameter costing 25 gp."
}, {
	name: "Crown of Veils",
	description: "undefined",
	school: "Trans",
	composition: "V,S,F",
	time: "1 a",
	range: "Touch",
	target: "Creature touched",
	duration: "1 hour/level (D) or until discharged",
	save: "Will neg",
	sr: "Yes",
	phb: "108",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 2,
		"Sorceror": 4,
		"Wizard": 4
	},
	detail: "<i>A shimmering halo of energy surrounds the target's head like a crown. It flashes a spectrum of colors before fading away.</i><p>This spell creates a magic crown infused with illusion magic. The spell's recipient gains a +2 competence bonus on Disguise and Hide checks.<p class=sub>As an immediate action, the crea-ture wearing the crown of veils can discharge its magic to gain a +8 com-petence bonus on a single Disguise or Hide check. The spell ends after the wearer uses the crown in this manner.<p class=sub>The crown occupies space on the body as a headband, hat, or helm. If the crown is removed, the spell immediately ends.<p class=sub><i>Focus:</i> A brass hoop 6 inches in diameter."
}, {
	name: "Crushing Grip",
	description: "undefined",
	school: "Evoc",
	composition: "V,S",
	time: "1 round",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One creature",
	duration: "3 rounds",
	save: "Fort neg, see text",
	sr: "Yes",
	phb: "109",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	detail: "<i>You conjure a band of energy that slowly squeezes your opponent. As the band tightens, it restricts his movement and eventually holds him in place, rigid with paralysis.</i><p>This spell has one effect on an opponent when you begin casting it. At the beginning of your next turn, when you finish casting the spell, it has a second effect. When you start casting this spell, your target takes a Ã¢â‚¬â€œ2 penalty on attacks, checks, saves, and AC. He also takes a 20-foot penalty to speed. This effect does not allow a saving throw, but spell resistance applies. If you fail to overcome the target's spell resistance, you immediately stop cast-ing the spell, and the secondary effect does not take place.<p class=sub>When you complete the casting of this spell, your target must make a Fortitude saving throw or be paralyzed. Even if the target makes this saving throw, this spell's initial effect continues to affect him for the spell's duration.<p class=sub>This spell's duration begins after you have completed casting it."
}, {
	name: "Curse of Arrow Attraction",
	description: "undefined",
	school: "Trans",
	composition: "V,S,M",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	target: "One creature",
	duration: "1 round/level",
	save: "Will neg",
	sr: "Yes",
	phb: "109",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 3,
		"Ranger": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>You surround a creature in a nimbus of emerald light that seems to draw missiles toward it.</i><p>The subject is cursed so that missile weapons veer toward him and strike with extreme force. The subject takes a Ã¢â‚¬â€œ5 penalty to Armor Class against any ranged attack, including projectile weapons, thrown weapons, and ranged touch attacks. In addition, any critical threats on such attacks are automatically confirmed."
}, {
	name: "Dancing Blade",
	description: "undefined",
	school: "Trans",
	composition: "V,S,F",
	time: "1 a",
	range: "Touch",
	target: "Weapon touched",
	duration: "1 round/level",
	save: "-",
	sr: "No",
	phb: "109",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 5,
		"Sorceror": 5,
		"Wizard": 5
	},
	detail: "<i>With a word and a gesture, the sword in your hand leaps to life with a swooping salute.</i><p>This spell animates a melee weapon currently in your possession, causing it to fight your foes as you direct it. Once each round as a free action, you can direct the blade to attack an adjacent foe (a weapon with reach can attack a foe 10 feet away). The weapon's bonus on attack rolls is equal to your caster level + your key ability modifier, plus any enhancement bonus the weapon might have. It deals damage equal to the normal damage of the weapon, plus your key ability modi-fier and any enhancement bonus or other bonus on damage inherent in the weapon. The weapon attacks once per round. Despite the spell's name, it works on any melee weapon (not just blades).<p class=sub>While your weapon is dancing, it cannot make attacks of opportunity, and you are not considered armed with the weapon. It remains in your space and accompanies you everywhere, whether you move by physical or magical means. The weapon cannot be disarmed.<p class=sub>Focus: The melee weapon that serves as the target of the spell."
}, {
	name: "Deflect",
	description: "undefined",
	school: "Abjur",
	composition: "V",
	time: "1 imm a",
	range: "Personal",
	target: "You",
	duration: "1 round or until discharged",
	save: "undefined",
	sr: "undefined",
	phb: "109",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "This spell functions like lesser deflect, except that you gain a shield bonus to AC equal to 1/2 your caster level (round down) against the next attack made against you before the end of your next turn."
}, {
	name: "Deflect, Lesser",
	description: "undefined",
	school: "Abjur",
	composition: "V",
	time: "1 imm a",
	range: "Personal",
	target: "You",
	duration: "1 round or until discharged",
	save: "undefined",
	sr: "undefined",
	phb: "109",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 1,
		"Wizard": 1
	},
	detail: "<i>With a word, you evoke a barrier of invisible force.</i><p>You project a field of invisible force, creating a short-lived protective barrier. You gain a deflection bonus to your AC against a single attack; this bonus is equal to +1 per three caster levels (maximum +5).<p class=sub>You can cast this spell even when it's not your turn; however, you must cast it before your opponent makes his attack roll to gain the benefit."
}, {
	name: "Detonate",
	description: "undefined",
	school: "Evoc",
	composition: "V,S,M",
	time: "1 imm a",
	range: "Medium (100 ft. + 10 ft./level)",
	target: "One creature",
	duration: "Instantaneous",
	save: "Fort part",
	sr: "Yes",
	phb: "109",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	detail: "<i>The creature you point at explodes in a massive spray of fire.</i><p>If the target fails its saving throw, this spell slays the creature, and the explosion extends out to a 20-foot-radius burst around it. Creatures in this area take 1d6 points of fire damage per caster level (maximum 20d6), though they can attempt Reflex saves for half damage. The exploded creature's remains are scattered and vaporized, leaving nothing but dry ash.<p class=sub>If the target succeeds on its saving throw, it is wracked by a series of small explosions and takes 7d6 points of fire damage. If this damage kills the creature, it explodes as described above.<p class=sub>Detonate has no effect on creatures that have immunity to fire.<p class=sub><i>Material Component:</i> A tindertwig and a piece of string."
}, {
	name: "Dimension Hop",
	description: "undefined",
	school: "Conj",
	composition: "V",
	time: "1 a",
	range: "Touch",
	target: "Creature touched",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	phb: "110",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>Pale motes of light dance and swirl about your fingertips. When you touch the creature, it disappears, leaves a cloud of motes in its wake, and reappears somewhere nearby.</i><p>You instantly teleport the subject creature a distance of 5 feet per two caster levels. The destination must be an unoccupied space within line of sight."
}, {
	name: "Dimension Shuffle",
	description: "undefined",
	school: "Conj",
	composition: "V",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One creature/level, no two of which are more than 30 ft. apart",
	duration: "Instantaneous",
	save: "Will negs; see text",
	sr: "Yes",
	phb: "110",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 5,
		"Wizard": 5
	},
	detail: "<i>With a slight blue shimmer of energy and an audible pop, a number of creatures around you disappear and reappear in new positions.</i><p>You instantly transfer any subject creature from its current location to any other spot within 30 feet. You must have line of sight to its new location. An unwilling creature can make a Will saving throw to negate this effect. The creature must be placed on solid ground capable of supporting its weight. If you attempt to place a creature within a solid object or into a space where it cannot fit, the spell fails."
}, {
	name: "Dimension Step",
	description: "undefined",
	school: "Conj",
	composition: "V,S",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One willing creature/3 levels, no two of which are more than 30 ft. apart",
	duration: "Instantaneous",
	save: "Fort negs",
	sr: "Yes",
	phb: "110",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>All the creatures you target with this spell gain a dark, shimmering pattern of runes on their shoes and feet. The runes blaze with arcane light for a moment. Less than a second later, the targets have shifted position on the battlefield.</i><p>This spell allows your allies to make a short teleport. All creatures targeted by this spell can teleport a distance equal to their base land speed. A target can teleport to any square within its line of sight. This movement does not provoke attacks of opportunity. A creature can teleport up to a ledge, down to the base of a flight of stairs, and so forth as long as it observes the restrictions and limits given above."
}, {
	name: "Dispelling Touch",
	description: "undefined",
	school: "Abjur",
	composition: "V,S",
	time: "1 a",
	range: "Touch",
	target: "One touched creature, object, or spell effect",
	duration: "Instantaneous",
	save: "None",
	sr: "No",
	phb: "110",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>Your touch causes one spell to rip free of its source and dissipate into nothingness.</i><p>You can use dispelling touch to end an ongoing spell that has been cast on a creature or object, or a spell that has a noticeable ongoing effect. You make a dispel check (1d20 + your caster level, maximum +10) against the spell effect with the highest caster level. If that check fails, you make dispel checks against progressively weaker spells until you dispel one spell or until you fail all your checks. Magic items carried by a creature are not affected."
}, {
	name: "Divine Retaliation",
	description: "undefined",
	school: "Evoc",
	composition: "V,S,DF",
	time: "1 swift a",
	range: "0 ft.",
	effect: "Magic weapon of force",
	duration: "1 round",
	save: "None",
	sr: "No",
	phb: "110",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 3,
		"Paladin": 4
	},
	detail: "<i>A spectral weapon composed of pure force energy springs into existence next to you. Each time a foe strikes you, the weapon springs into action, chopping into your foe and dealing a grievous wound.</i><p>This spell creates a divine weapon that mimics your deity's favored weapon. Any time you are struck for damage by a melee attack, this weapon strikes at your foe. It has a base attack bonus equal to your caster level + your Str modifier or Wis modifier (your choice). It deals damage as per your deity's favored weapon, and is of a size equal to your current size. The weapon gains a bonus on damage rolls equal to 1-1/2 times your Str modifier or Wis modifier (your choice).<p class=sub>There is no limit to the number of attacks that this weapon can make. If a hydra bites at and hits you six times, this weapon in turn strikes at the hydra six times. The weapon has reach or range appropriate to its type. It shares a space with you. If you are Large or larger, it counts as occupying each square of the space you fill."
}, {
	name: "Doom Scarabs",
	description: "undefined",
	school: "Necro",
	composition: "V,S",
	time: "1 a",
	range: "60 ft.",
	area: "Cone-shaped burst",
	duration: "Instantaneous",
	save: "Will half",
	sr: "See text",
	phb: "110",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	detail: "<i>A swarm of scarabs surges from your outstretched hand. These insects rip and bite at all living creatures in the area, then return to you with life essence stolen from their victims.</i><p>This spell has two effects. It deals 1d6 points of damage per two caster levels (maximum 10d6) to all creatures in the area. Spell resistance does not apply to this damage. However, spell resistance does apply to the spell's secondary effect. If you overcome a creature's spell resistance, you gain 1d4 temporary hit points as the scarabs feast on the creature's arcane energy and bleed it back into you. You gain these temporary hit points for each creature whose spell resistance you overcome. You never gain temporary hit points from creatures that do not have spell resistance.<p class=sub>The temporary hit points gained from this spell last for up to 1 hour."
}, {
	name: "Dragonshape",
	description: "undefined",
	school: "Trans",
	composition: "V,S",
	time: "1 swift a",
	range: "Personal",
	target: "You",
	duration: "1 round/level (D)",
	save: "undefined",
	sr: "undefined",
	phb: "111",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	detail: "<i>You feel a fire burning deep within you. Crimson scales quickly grow over your body, a pair of great wings sprouts from your shoulders, and your body expands in size until you stand as tall as a house!</i><p>You take on the form and abilities of a mature adult red dragon (see below for your new statistics). You gain 150 temporary hit points, which disappear at the end of the spell's duration. You do not gain the normal spellcasting ability of your new form. See the description of the new polymorph subschool on page 95 for more details.<p><center><b>Mature Adult Red Dragon</b></center><p><b>Init</b> +0; <b>Senses</b> blindsense 60 ft., darkvision 120 ft., quadruple-strength low-light vision; Listen +32, Spot +32<p><b>Languages</b> as normal form<hr/><p><b>AC</b> 32, touch 8, flat-footed 32<p><b>hp </b>as normal form (+150 temporary hp); <b>DR</b> 10/magic<p><b>Resist</b> SR 23<p><b>Immune</b> fire<p><b>Fort</b> +20, <b>Ref</b> +14, <b>Will</b> +18<p><b>Weakness</b> vulnerability to cold<hr/><p><b>Speed</b> 40 ft., fly 150 ft. (poor); Flyby Attack<p><b>Melee</b> bite +34 (2d8+11/19Ã¢â‚¬â€œ20) and 2 claws +32 (2d6+5/19Ã¢â‚¬â€œ20) and 2 wings +32 (1d8+5/19Ã¢â‚¬â€œ20) and tail slap +32 (2d6+16/19Ã¢â‚¬â€œ20)<p><b>Space</b> 15 ft.<p><b>Reach</b> 10 ft. (15 ft. with bite)<p><b>Base Atk</b> +25; <b>Grp</b> +44<p><b>Atk Options</b> Cleave, Power Attack<p><b>Special Actions</b> breath weapon, crush<p><b>Spell-Like Abilities</b> (CL 9th): 7/day--<i>locate object</i><hr/><p><b>Abilities</b> Str 33, Dex 10, Con 23, Int 18, Wis 19, Cha 18<p><b>Feats</b> Cleave, Combat Reflexes, Flyby Attack, Improved Critical (bite, claw, tail slap, wing), Multiattack, Power Attack<p><b>Skills</b> Appraise +32, Bluff +32, Concentration +34, Diplomacy +34, Intimidate +34, Jump +39, Knowledge (arcana) +32, Listen +32, Search +32, Spot +32 <hr/><p><b>Breath Weapon (Su)</b> 50-ft. cone, 14d10 fire, Reflex DC 30 half.<p><b>Crush (Ex)</b> Area 15 ft. by 15 ft.; Small or smaller opponents take 2d8+16 points of bludgeoning damage, and must succeed on a DC 28 Reflex save or be pinned."
}, {
	name: "Drifts of the Shalm",
	description: "undefined",
	school: "Evoc",
	composition: "V,S",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	area: "One 5-ft. square/level (S)",
	duration: "1 round/level",
	save: "-",
	sr: "No",
	phb: "111",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Druid": 2
	},
	detail: "<i>You call upon the power of Obad-Hai and conjure forth a great drift of snow, leaves, or smoldering ash.</i><p>Druids of Obad-Hai routinely evoke the drifts of their lord to delay their enemies, to buy themselves time in the face of a sudden threat, and simply to decorate their groves.<p class=sub>You create drifts of snow, leaves, or ash 3 feet thick. It costs 2 squares of movement to enter a drift-covered square. Additional effects apply based on the type of drift.<p class=sub>A snow drift ripples with freezing energy. Anyone moving through or located in a snow drift takes 3 points of cold damage each round.<p class=sub>If any part of a leaf drift comes in contact with fire (anything from a torch to a fireball will do), the whole drift instantly ignites. The heat from the burning leaves deals 2d6 points of fire damage to anyone in the inferno. An ash drift smolders with dying embers. Anyone moving through or located in an ash drift takes 3 points of fire damage each round."
}, {
	name: "Electric Vengeance",
	description: "undefined",
	school: "Evoc",
	composition: "V,S",
	time: "1 imm a",
	range: "5 ft.",
	target: "One creature",
	duration: "Instantaneous",
	save: "-",
	sr: "Yes",
	phb: "111",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>As the creature strikes you, an arc of lightning springs from your body and blasts the creature in return.</i><p>You can cast this spell only when another creature has just dealt hit point damage to you with a melee attack. When you cast electric vengeance, a blast of lightning arcs from your body into the subject's; the arc deals 2d8 points of electricity damage +1 point per caster level (maximum +10)."
}, {
	name: "Electric Vengeance, Greater",
	description: "undefined",
	school: "Evoc",
	composition: "V,S",
	time: "1 imm a",
	range: "5 ft.",
	target: "One creature",
	duration: "Instantaneous",
	save: "Fort part",
	sr: "Yes",
	phb: "111",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 5,
		"Wizard": 5
	},
	detail: "This spell functions like <i>electric vengeance</i>, except as noted here.<p>This spell deals 5d8 points of damage +1 per caster level (maximum +15), and the target of the spell must succeed on a Fortitude save or be dazed until the end of your next turn."
}, {
	name: "Energy Aegis",
	description: "undefined",
	school: "Abjur",
	composition: "V,DF",
	time: "1 imm a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One creature",
	duration: "1 round",
	save: "Will negs",
	sr: "Yes",
	phb: "111",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>A nigh-invisible ripple of magical energy courses through the creature touched, granting it resistance against one type of energy specified by you during the casting the spell.</i><p>When you cast energy aegis, specify an energy type (acid, cold, electricity, fire, or sonic). Against the next attack using this energy type that targets the subject, it gains resistance 20."
}, {
	name: "Energy Surge",
	description: "undefined",
	school: "Trans",
	composition: "V",
	time: "1 swift a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One weapon",
	duration: "1 round",
	save: "Will negs",
	sr: "Yes",
	phb: "112",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "This spell functions like <i>lesser energy surge</i>, except that the attack deals an extra 2d6 points of energy damage."
}, {
	name: "Energy Surge, Greater",
	description: "undefined",
	school: "Trans",
	composition: "V",
	time: "1 swift a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One weapon",
	duration: "1 round",
	save: "Will negs",
	sr: "Yes",
	phb: "112",
	tags: ["phb2"],
	type: "spell",
	classes: {},
	detail: "This spell functions like <i>lesser energy surge</i>, except that the attack deals an extra 3d6 points of energy damage."
}, {
	name: "Energy Surge, Lesser",
	description: "undefined",
	school: "Trans",
	composition: "V",
	time: "1 swift a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One weapon",
	duration: "1 round",
	save: "Will negs",
	sr: "Yes",
	phb: "112",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>With a single utterance, you sheath the weapon in elemental energyÃ¢â‚¬â€dripping acid, vaporous ice, crackling electricity, smoking flame, or thunderous air.</i><p>You temporarily imbue a weapon with elemental energy. When you cast this spell, specify an energy type (acid, cold, electricity, fire, or sonic). This spell is a spell of that type, and the target weapon is sheathed in that energy. If the attack is successful, it deals an extra 1d6 points of damage of the specified energy type."
}, {
	name: "Energy Vulnerability",
	description: "undefined",
	school: "Abjur",
	composition: "V,S,M/DF",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One or more creatures within a 10-ft.-radius burst",
	duration: "1 round/level",
	save: "Will negs",
	sr: "Yes",
	phb: "112",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>Silvery tendrils erupt from your out-stretched arms and strike the creatures you choose. A lingering silvery aura engulfs them thereafter.</i><p>Energy vulnerability can affect a number of creatures with total Hit Dice equal to twice your caster level or lower. You select which creatures are affected.<p class=sub>When you cast this spell, specify an energy type (acid, cold, electricity, fire, or sonic). The affected creatures gain vulnerability to that energy type (they take +50% damage from that energy, even on a successful save).<p class=sub><i>Arcane Material Component:</i> A tiny wooden shield, which the caster snaps in half."
}, {
	name: "Etherealness, Swift",
	description: "undefined",
	school: "Trans",
	composition: "V,S",
	time: "1 swift a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One willing creature",
	duration: "1 round",
	save: "Will negs",
	sr: "Yes",
	phb: "113",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 5,
		"Sorceror": 5,
		"Wizard": 5
	},
	detail: "<i>With a single word and a quick wave of your hand, the creature disappears.</i><p>The subject becomes ethereal until the end of its next turn. If, at the end of the spell's duration, the subject creature rematerializes within a solid object or in an occupied space, it is shunted off to the nearest open space and takes 1d6 points of damage per 5 feet so traveled."
}, {
	name: "Evard's Menacing Tentacles",
	description: "undefined",
	school: "Trans",
	composition: "V,S,M",
	time: "1 a",
	range: "Personal",
	target: "You",
	duration: "1 round/level",
	save: "Will negs",
	sr: "Yes",
	phb: "113",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Druid": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>Two black tentacles sprout from your shoulder blades and arch over your shoulders.</i><p>The tentacles have 10-foot reach and are animate. Each round as a free action, starting on the turn when you cast the spell, you can direct each tentacle to attack one opponent within reach. The tentacles use your base attack bonus and Strength score, and each deals bludgeoning damage equal to 1d8 points + your Str modifier. The tentacles threaten the area within their reach, and each can make one attack of opportunity per round.<p class=sub>The tentacles also grant you a +4 bonus on Climb checks.<p class=sub><i>Material Component:</i> A piece of octopus, squid, or carrion crawler tentacle."
}, {
	name: "Explosive Rune Field",
	description: "undefined",
	school: "Conj",
	composition: "V,S,M",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	area: "20-ft.-radius burst",
	duration: "1 round/level",
	save: "Ref negs",
	sr: "No",
	phb: "113",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	detail: "<i>You infuse an area with arcane patterns that shift and slide along the ground. They seethe with arcane energy, and an occasional bolt of energy surges from them with a bright flash.</i><p>This spell creates a hazardous field of energy similar to that created by an explosive runes. spell. Unlike that spell, the runes created by this spell detonate when they come into contact with a living creature other than the caster. Any creature that begins its turn in the spell's area must attempt a Reflex save. On a failed save, the creature takes 4d6 points of fire damage.<p class=sub>Moving through the spell's area is hazardous at best. Creatures that move at their normal speed must succeed on Reflex saves to avoid the spell's explosive effects. Creatures that move at half speed through the spell's area can avoid the damage just as if they had succeeded on their saves.<p class=sub><i>Material Component:</i> A piece of parchment scribed with runes. The runes must be drawn with silver-flecked ink "
}, {
	name: "Field of Resistance",
	description: "undefined",
	school: "Abjur",
	composition: "V,S",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	area: "20-ft.-radius emanation centered on a point in space",
	duration: "1 round/level (D)",
	save: "None",
	sr: "No",
	phb: "113",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 5,
		"Wizard": 5
	},
	detail: "<i>The air in this spell's effect shimmers with arcane energy. A buzzing sound echoes in your mind as the flow of magic into the affected area chokes off and ends.</i><p>This spell creates a zone that impedes the flow of magic. The energy of this zone clings to creatures and objects, granting them a shield against spells. All creatures in the spell's area gain spell resistance of 11 + caster level for as long as they remain in the area. If a creature already has spell resistance higher than this amount, this spell does not affect it. Unlike personal spell resistance, this spell resistance cannot be voluntarily lowered. A creature loses this spell resistance when it leaves the spell's area, and gains it again if it returns."
}, {
	name: "Friend to Foe",
	description: "undefined",
	school: "Illus",
	composition: "V,S,M",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	target: "One living creature/level, none of which are more than 30 ft. apart",
	duration: "1 round/level (D); see text",
	save: "Will negs",
	sr: "Yes",
	phb: "114",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 5,
		"Sorceror": 5,
		"Wizard": 5
	},
	detail: "<i>Your enemies transform into what they each hate the most, suddenly turning against each other.</i><p>You overlay phantasmal images over your enemies, making them appear to each other as loathsome and despicable, implanting an urge to kill and destroy the object of their ire. Orcs might see each other as elves or dwarves, demons might see angels, and so on. All subjects receive a Will save to see through the phantasm. Each individual failing its save turns on the closest ally and attacks until the first time it deals damage, which causes the spell to end for that attacker.<p class=sub><i>Material Component:</i> A swatch of white silk."
}, {
	name: "Halt",
	description: "undefined",
	school: "Trans",
	composition: "V",
	time: "1 imm a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One creature",
	duration: "1 round",
	save: "Will negs",
	sr: "Yes",
	phb: "114",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>You utter the word Ã¢â‚¬Å“Halt!Ã¢â‚¬ï¿½ and, in that instant, the creature's feet stick to the floor.</i><p>The subject creature's feet (or whatever pass for its feet) become momentarily stuck to the floor. The creature must stop moving, and cannot move farther in its current turn. This spell has no effect on creatures that are not touching the ground (such as flying creatures), and the subject can still use a standard action (if it has one available in this round) to move by means of teleportation magic.<p class=sub>You can cast this spell even when it's not your turn; however, you must cast it before your opponent finishes its movement on its current turn to gain the benefit."
}, {
	name: "Healing Spirit",
	description: "undefined",
	school: "Conj",
	composition: "V,S",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	effect: "One conjured healing spirit",
	duration: "1 round/2 levels",
	save: "Will half; see text",
	sr: "Yes; see text",
	phb: "114",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 4,
		"Cleric": 4,
		"Druid": 4,
		"Paladin": 3
	},
	detail: "<i>A 1-foot-diamater ball of light appears and moves by your command, healing those it touches.</i><p>You conjure an incorporeal object of magical energy that appears in any square within range. This healing spirit resembles a 1-foot-diameter ball of light. It sheds bright illumination in a 10-foot radius and shadowy illumination for another 20 feet. A healing spirit cannot be affected by attacks or spells.<p class=sub>A healing spirit flies at a speed of 30 feet with perfect maneuverability. In the round you cast the spell and at the start of your turn once per round thereafter, you can direct the healing spirit to move and touch a creature by entering its space. The spirit's touch carries positive energy, healing a living creature of 1d8 points of damage.<p class=sub>Since undead are powered by nega-tive energy, a healing spirit damages them instead of healing them. The spirit can affect an unwilling target (such as an undead) by succeeding on an incorporeal touch attack, using your base attack bonus and a Strength bonus of +0. An undead creature hit by such an attack can use spell resistance against the effect and is allowed a Will save for half damage.<p class=sub>If a healing spirit travels farther from you than the spell's range, it winks out of existence and the spell ends."
}, {
	name: "Hesitate",
	description: "undefined",
	school: "Ench",
	composition: "V,S",
	time: "1 imm a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One living creature",
	duration: "1 round/levels (D); see text",
	save: "Will half; see text",
	sr: "Yes",
	phb: "114",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 3,
		"Cleric": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>In the eyes of your enemy, you seem large, powerful, and indomitable.</i><p>You fill a subject with doubts and misgivings, making it believe it is inferior to you. On a failed save, the subject can take no action other than a move action on its current turn. Hesitate confers no special bonuses for attackers attempt-ing to hit the subject; the subject still defends itself. If you attack the affected creature, the spell ends immediately.<p class=sub>Each round, as a swift action at the start of its turn, the subject can attempt a new saving throw to end the effect. If the save succeeds, the subject can then act normally.<p class=sub>You can cast this spell even when it's not your turn; however, you must cast it at the start of your opponent's turn to gain the benefit."
}, {
	name: "Hunter's Eye",
	description: "undefined",
	school: "Div",
	composition: "V,S",
	time: "1 swift a",
	range: "Personal",
	target: "You",
	duration: "1 round",
	save: "undefined",
	sr: "undefined",
	phb: "114",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Ranger": 3
	},
	detail: "<i>Your vision blurs for a moment. When it clears, you can see through your enemies' skin to spot their arteries, organs, and other vulnerable points.</i><p>Your slice into a foe with uncanny precision, allowing you to strike a foe's vulnerable points and deal extra damage. This spell grants you the sneak attack ability. You deal an extra 1d6 points of damage per three caster levels. If you already have the sneak attack ability, this damage stacks with it."
}, {
	name: "Incite Riot",
	description: "undefined",
	school: "Ench",
	composition: "V",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One creature/level, no two of which are more than 30 ft. apart",
	duration: "1 round",
	save: "Will negs",
	sr: "Yes",
	phb: "115",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 5,
		"Sorceror": 5,
		"Wizard": 5
	},
	detail: "<i>You sow discord among your enemies, spurring them to physical violence.</i><p>Each creature that fails its saving throw attacks the nearest creature on its next turn, whether friend or foe. An affected creature attacks with whatever weapon is in hand, or with natural weapons. An unarmed creature attacks with an unarmed strike. An affected creature not already adjacent to another creature will move or (if possible) charge the nearest creature; if the nearest creature is not within range of a charge, the subject moves toward the nearest creature along the most efficient route."
}, {
	name: "Increase Virulence",
	description: "undefined",
	school: "Trans",
	composition: "V,S,M",
	time: "1 min",
	range: "Touch",
	target: "Vial of poison or creature touched",
	duration: "1 minute/level",
	save: "-",
	sr: "No",
	phb: "115",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>Ribbons of green and black energy engulf your hand and pass into the vial or creature you touch. </i><p>You make the poison in a vial or a creature more lethal. The DCs for all saving throws against the poison increase by 2.<p class=sub><i>Material Component:</i> Licorice root."
}, {
	name: "Inevitable Defeat",
	description: "undefined",
	school: "Ench",
	composition: "V,S",
	time: "1 a",
	range: "Touch",
	target: "One creature",
	duration: "1 round/level",
	save: "None and Will negs; see text",
	sr: "Yes",
	phb: "115",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>You touch the creature with your hand, and it teeters on the edge of unconsciousness.</i><p>You draw a cloud over the subject's mind, dealing 3d6 points of nonlethal damage. No saving throw is allowed against this effect. Each round on its turn, the subject must succeed on a Will save or take another 3d6 points of nonlethal damage. If the saving throw is successful, the damage for that round is negated and the spell ends."
}, {
	name: "Insight of Good Fortune",
	description: "undefined",
	school: "Div",
	composition: "V,S,M",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One creature",
	duration: "1 minute/level or until discharged",
	save: "Will negs;",
	sr: "Yes",
	phb: "115",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 2,
		"Cleric": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>You toss a small golden die. It rolls toward the creature you choose, then disappears in a tiny golden flash of light.</i><p>The subject of the spell becomes unusually lucky. Once during the spell's duration, when he makes an attack roll, skill check, saving throw, or ability check, he rolls twice and takes the better result. He must choose to use this ability before the check is attempted, and the spell expires once the second die is rolled.<p class=sub><i>Material Component:</i> A gold die (worth 20 gp)."
}, {
	name: "Invest Heavy Protection",
	description: "undefined",
	school: "Conj",
	composition: "V,S",
	time: "1 a",
	range: "Touch",
	target: "Creature touched",
	duration: "Instantaneous; see text",
	save: "Will half;",
	sr: "Yes",
	phb: "115",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 5
	},
	detail: "This spell functions like invest <i>light protection</i>, except that it cures 5d4 points of damage +1 per two caster levels (maxi-mum +12) and grants damage reduction 5/evil. Undead creatures take an extra 5 points of damage from any weapon or physical attack capable of overcoming good damage reduction."
}, {
	name: "Invest Light Protection",
	description: "undefined",
	school: "Conj",
	composition: "V,S",
	time: "1 a",
	range: "Touch",
	target: "Creature touched",
	duration: "Instantaneous; see text",
	save: "Will half;",
	sr: "Yes",
	phb: "115",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 1
	},
	detail: "<i>You invest the target with an infusion of divine energy. His wounds knit shut, while the power you grant to him helps ward off future injuries.</i><p>You heal a living creature you touch of 1d4 points of damage +1 per two caster levels (maximum +3). In addition, the creature touched gains damage reduction 1/evil for 1 minute.<p class=sub>Like cure light wounds, this spell deals damage to undead creatures instead of curing them. In addition, on a failed save undead creatures take an extra 1 point of damage from any weapon or physical attack capable of overcoming good damage reduction for 1 minute."
}, {
	name: "Invest Moderate Protection",
	description: "undefined",
	school: "Conj",
	composition: "V,S",
	time: "1 a",
	range: "Touch",
	target: "Creature touched",
	duration: "Instantaneous; see text",
	save: "Will half;",
	sr: "Yes",
	phb: "115",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 3
	},
	detail: "This spell functions like invest <i>light protection</i>, except that it cures 3d4 points of damage +1 per two caster levels (maximum +6) and grants damage reduction 3/evil. Undead creatures take an extra 3 points of damage from any weapon or physical attack capable of overcoming good damage reduction."
}, {
	name: "Kelgore's Fire Bolt",
	description: "undefined",
	school: "Conj",
	composition: "V,S,M",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	target: "One creature",
	duration: "Instantaneous",
	save: "Ref half;",
	sr: "See text",
	phb: "116",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 1,
		"Wizard": 1
	},
	detail: "<i>You conjure a shard of red-hot rock and hurl it toward an opponent. As it streaks through the air, a nimbus of arcane energy crackles around it.</i><p>This spell conjures a small orb of rock and sheathes it in arcane energy. This spell deals 1d6 points of fire damage per caster level (maximum 5d6). If you fail to overcome the target's spell resistance, the spell still deals 1d6 points of fire damage from the heat and force of the conjured orb's impact.<p class=sub><i>Material Component:</i> A handful of ashes."
}, {
	name: "Kelgore's Grave Mist",
	description: "undefined",
	school: "Necro",
	composition: "V,S,M",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	area: "20-ft. radius spread, 20 ft. high",
	duration: "1 round/level",
	save: "-",
	sr: "See text",
	phb: "116",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>With a gesture, you create a cloud of clammy, thin mist. The light in the area seems to dim as the mist appears, and a slight wind washes over the area, sending a chill down your spine.</i><p>This spell creates a thin mist within the spell's area. The mist is too thin to have any effect on vision, but the necromantic energy infused within it hampers the living. All living creatures within the mist become fatigued and take 1d6 points of cold damage per round. If the spell fails to overcome a creature's spell resistance, the subject takes the cold damage but ignores the fatigue.<p class=sub><i>Material Component:</i> A handful of dirt taken from a graveyard or tomb."
}, {
	name: "Legion of Sentinels",
	description: "undefined",
	school: "Illus",
	composition: "V,S,M",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	area: "10-ft.-radius emanation centered on a point in space",
	duration: "1 round/level",
	save: "-",
	sr: "No",
	phb: "116",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>A phalanx of spectral swordfighters appears. Their blades are drawn, and they stand ready to strike.</i><p>A ghostly, incorporeal swordfighter appears in each square covered by this spell's area. A swordfighter can share a space with another creature or object. Each swordfighter threatens the squares adjacent to it and can make one attack of opportunity per round. The swordfighters do not hinder movement, block terrain, or block line of effect. They can flank an opponent with each other and with your allies.<p class=sub>Each swordfighter has hit points equal to twice your caster level and an Armor Class of 25. It makes saving throws or checks with a bonus equal to your caster level.<p class=sub><i>Material Component:</i> A pewter sword-fighter miniature figure."
}, {
	name: "Linked Perception",
	description: "undefined",
	school: "Div",
	composition: "V,DF",
	time: "1 a",
	range: "20 ft.",
	area: "20-ft.-radius emanation centered on you",
	duration: "1 minute/level",
	save: "Will negs",
	sr: "Yes",
	phb: "117",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Druid": 2,
		"Ranger": 1
	},
	detail: "<i>Your senses are muddied for a moment, but when they clear, your sight and hearing are improved.</i><p>This spell imparts to all allies in its area a shared awareness of their surround-ings. Each ally in the area (including yourself) gains a +2 bonus on Spot and Listen checks per each ally in the area. For example, if you and three allies are in the area, each of you gains a +6 bonus."
}, {
	name: "Longstrider, Mass",
	description: "undefined",
	school: "Trans",
	composition: "V",
	time: "1 swift a",
	range: "60 ft.",
	area: "60-ft.-radius emanation centered on you",
	duration: "1 hour/level",
	save: "Fort negs",
	sr: "Yes",
	phb: "117",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Druid": 5,
		"Ranger": 4
	},
	detail: "<i>Reality bends at your behest, speeding up your allies.</i><p>All allies in the area gain a +10-foot enhancement bonus to their speed scores."
}, {
	name: "Luminous Assassin",
	description: "undefined",
	school: "Trans",
	composition: "V",
	time: "1 swift a",
	range: "60 ft.",
	area: "60-ft.-radius emanation centered on you",
	duration: "1 hour/level",
	save: "Fort negs",
	sr: "Yes",
	phb: "117",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 5,
		"Wizard": 5
	},
	detail: "This spell functions like <i>lesser luminous assassin</i>, except that the assassin has the statistics provided below:<p><center><b>Luminous Assassin CR 3</b></center><p>Male human rogue 3<p>N Medium humanoid (human, extraplanar)<p><b>Init</b> +6; <b>Senses</b> Listen +6, Spot +6<p><b>Languages</b> Common, Dwarven, Elven<p><b>AC 16</b>, touch 12, flat-footed 14; Dodge, Mobility (+2 Dex, +3 armor, +1 shield)<p><b>hp</b> 16 (3 HD)<p><b>Resist</b> evasion<p><b>Fort</b> +3, <b>Ref</b> +6, <b>Will</b> +2<hr/><p><b>Speed</b> 30 ft. (6 squares)<p><b>Melee</b> mwk rapier +4 (1d6+1/18Ã¢â‚¬â€œ20)<p><b>Ranged</b> mwk shortbow +5 (1d6+1/Ãƒâ€”3)<p><b>Base Atk</b> +2; <b>Grp</b> +3<p><b>Atk Options</b> sneak attack +2d6<p><b>Combat Gear</b> <i>potion of cure moderate wounds</i>, <i>potion of darkvision</i><hr/><p><b>Abilities</b> Str 12, Dex 15, Con 13, Int 14, Wis 10, Cha 8<p><b>Feats</b> Dodge, Improved Initiative, Mobility<p><b>Skills</b> Appraise +8, Balance +8, Disable Device +8, Escape Artist +8, Hide +8, Listen +6, Move Silently +8, Open Lock +8, Search +8, Spot +6, Tumble +8<p><b>Possessions</b> combat gear plus masterwork studded leather armor, masterwork rapier, masterwork buckler, cloak of resistance +1, masterwork shortbow, 200 gp"
}, {
	name: "Magic Convalescence",
	description: "undefined",
	school: "Conj",
	composition: "V,S,M",
	time: "1 a",
	range: "20 ft.",
	area: "20-ft.-radius emanation centered on you",
	duration: "1 round/level",
	save: "-",
	sr: "No",
	phb: "118",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 5,
		"Cleric": 5,
		"Druid": 5
	},
	detail: "<i>You alter the flow of magic about your body so that spells heal you.</i><p>Whenever a creature, including you, casts a spell within the area of this spell, you heal 1 hit point per level of the spell cast. The effect of each spell cast is resolved prior to your receiving the healing.<p class=sub><i>Material Component:</i> A specially prepared, scented ointment."
}, {
	name: "Mana Flux",
	description: "undefined",
	school: "Abjur",
	composition: "V,S",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	area: "20-ft.-radius emanation centered on a point in space",
	duration: "1 round/level",
	save: "-",
	sr: "No",
	phb: "118",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 5,
		"Sorceror": 5,
		"Wizard": 5
	},
	detail: "<i>The air crackles and warps as you flood the area with unstable, disrupting magical energy. The light shed by a continual flame torch flutters wildly, while your magic items hum and vibrate.</i><p>This spell creates a field of unstable magical energy. Any creature trying to cast a spell, use a spell-like ability, activate a supernatural ability, or manifest a psionic power in the spell's area has a 20% chance of failure. Spell completion items, such as scrolls, also have this failure chance. If a creature within the spell's area has a spell failure chance due to some other source, such as wearing armor, check each source of spell failure chance separately. Feats and abilities that reduce the chance of spell failure due to armor have no effect on this field.<p class=sub>A failed spell uses up a spell slot or other resources as appropriate. Magic items do not have a chance of failure, since the power invested in them is too ingrained to be disrupted by this spell."
}, {
	name: "Mark of Doom",
	description: "undefined",
	school: "Necro",
	composition: "V,S, DF",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	target: "One creature",
	duration: "1 round/level",
	save: "-",
	sr: "No",
	phb: "118",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 3,
		"Paladin": 2
	},
	detail: "<i>With a mighty invocation to your deity, you mark a creature as a target of your holy judgment. The ground shakes, the air grows still, and all wild animals in the air become suddenly quiet and fearful as your deity passes judgment upon the target.</i><p>This spell marks an opponent as an enemy of your faith, one who must pay for his transgressions. As long as the subject insists on fighting, it suffers divine punishment from your deity. The subject of this spell takes 1d6 points of damage each time it casts a spell that causes damage or disables a creature, makes a melee or ranged attack, or uses spell-like or supernatural abilities to harm other creatures.<p class=sub>The subject of this spell must have an alignment that opposes yours on at least one axisÃ¢â‚¬â€evil if you are good, lawful if you are chaotic, and so on. For example, a chaotic good cleric can place a mark of doom upon a lawful good, lawful evil, or neutral evil opponent. A neutral caster can use this spell against any good, evil, lawful, or chaotic foe."
}, {
	name: "Mark of Judgment",
	description: "undefined",
	school: "Necro",
	composition: "V,S, DF",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	target: "One creature/3 levels, no two of which are more than 30 ft. apart",
	duration: "1 round/level",
	save: "Will negs",
	sr: "Yes",
	phb: "118",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 2
	},
	detail: "<i>You call upon your deity to mark your foes as enemies of the faith. Divine energy surges through the area, and for a brief moment a holy symbol of your deity shines from the forehead of each targeted creature.</i><p>You and your allies see the mark of judgment on a creature and know to strike it in preference over other unmarked targets. Whenever a creature succeeds on a melee or ranged attack against any subject of a mark of judgment spell, that attacker heals 2 points of damage.<p class=sub>The targets of this spell must have an alignment that opposes yours on at least one axisÃ¢â‚¬â€evil if you are good, lawful if you are chaotic, and so on. For example, a lawful good cleric can place a mark of judgment upon a chaotic good, chaotic neutral, lawful evil, neutral evil, or chaotic evil opponent. A neutral caster can use this spell against any good, evil, lawful, or chaotic foe."
}, {
	name: "Master's Touch",
	description: "undefined",
	school: "Div",
	composition: "V",
	time: "1 imm a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One creature",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	phb: "118",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 2,
		"Cleric": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>With a mere utterance, you grant the creature special insight into how best to complete a task at hand.</i><p>You cast this spell immediately before the target makes a skill check. The subject envisions how a master might accomplish the same task, gaining a +4 insight bonus on its skill check. Master's touch has no effect on skill checks that represent effort over more than 1 round of time (Craft checks, for example)."
}, {
	name: "Melf's Unicorn Arrow",
	description: "undefined",
	school: "Conj",
	composition: "V,S,F",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	target: "One creature or up to five creatures, no two of which are more than 15 ft. apart",
	duration: "Instantaneous",
	save: "-",
	sr: "No",
	phb: "118",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>The shimmering, transparent form of a unicorn flies forward, its corporeal horn lowered in a charge at its enemy.</i><p>A translucent unicorn shape appears in midair and speeds toward the target of this spell. If you succeed on a ranged touch attack, the horn slams into the target and deals 1d8+8 points of damage. In addition, the target is subject to a bull rush, and must make a Strength check (with appropriate modifiers for a bull rush) against a DC of 21. If the check is failed, the subject is pushed back 5 feet, plus 5 feet for every 5 points by which it failed the check.<p class=sub>You can conjure an additional uni-corn arrow for every three caster levels beyond 5th, up to five at 17th level. You can have them strike a single creature or several creatures, but each horn can strike only one creature. You must designate targets before you make your attack rolls. A creature struck by more than one horn is only required to make one Strength check to avoid the bull rush, but the DC of the check increases by 2 for each horn beyond the first that strikes it.<p class=sub><i>Focus:</i> An ivory replica of a unicorn (25 gp)."
}, {
	name: "Meteoric Strike",
	description: "undefined",
	school: "Trans",
	composition: "V,S",
	time: "1 swift a",
	range: "0 ft.",
	target: "Your melee weapon",
	duration: "1 round or until discharged",
	save: "None or Reflex half; see text",
	sr: "See text",
	phb: "120",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 5,
		"Druid": 4,
		"Paladin": 4
	},
	detail: "<i>Your melee weapon bursts into orange, red, and gold flames, and shining sparks trail in its wake.</i><p>Your next successful melee attack deals extra fire damage equal to 1d6 points + 1d6 points per four caster levels. In addition, the flames splash into all squares adjacent to the target. Any creatures standing in these squares take half damage from the explosion, with a Reflex save allowed to halve this again. If a creature has spell resistance, it applies to this splash effect.<p class=sub>You are not harmed by your own meteoric strike.<p class=sub>You can cast meteoric strike before you make an unarmed attack. If you do, your unarmed attack is considered armed."
}, {
	name: "Mirror Image, Greater",
	description: "undefined",
	school: "Illus",
	composition: "V,S",
	time: "1 imm a",
	range: "Personal; see text for mirror image (PH 254)",
	target: "You",
	duration: "1 minute/level (D)",
	save: "undefined",
	sr: "undefined",
	phb: "120",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	detail: "<i>Several illusory duplicates of you pop into being.</i><p>This spell functions like mirror image, except that an additional image is created in each round after the first, up to a maximum of eight concurrent images. If all images are destroyed, the spell ends.<p class=sub>This spell also differs from mirror image in that you can cast this spell even when it's not your turn."
}, {
	name: "Mystic Aegis",
	description: "undefined",
	school: "Abjur",
	composition: "V,DF",
	time: "1 imm a",
	range: "Personal",
	target: "You",
	duration: "Instantaneous",
	save: "undefined",
	sr: "undefined",
	phb: "120",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 4
	},
	detail: "<i>A mantle of scintillating, multicolored light appears around you to block the spell, then fades away.</i><p>You cast mystic aegis immediately when you are targeted by a hostile spell. You gain spell resistance equal to 12 + your caster level against that spell."
}, {
	name: "Mystic Surge",
	description: "undefined",
	school: "Univ",
	composition: "V",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One creature",
	duration: "1 round",
	save: "Will negs",
	sr: "Yes",
	phb: "120",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	detail: "<i>You utter a phrase, and magical power begins to swell within you.</i><p>The subject of mystic surge is able to channel a greater amount of magical energy into the next spell it casts before this spell's duration expires. That spell's save DC increases by 2, and its effective caster level increases by 1."
}, {
	name: "Overwhelm",
	description: "undefined",
	school: "Ench",
	composition: "V,S",
	time: "1 a",
	range: "Touch",
	target: "One creature",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	phb: "120",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 6,
		"Wizard": 6
	},
	detail: "<i>You grip the creature's head, and a surge of magical energy overwhelms its senses.</i><p>With a touch, you deal nonlethal damage to the subject equal to the creature's current hit point total."
}, {
	name: "Phantom Battle",
	description: "undefined",
	school: "Illus",
	composition: "V,S",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	area: "20-ft.-radius spread",
	duration: "1 round/level",
	save: "Will negs",
	sr: "Yes",
	phb: "120",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 3,
		"Sorceror": 4,
		"Wizard": 4
	},
	detail: "<i>You create an illusory horde of snarling ogres, fierce orcs, and proud knights in armor, all locked in battle. Creatures in the area move cautiously as they are caught up in the phantom melee.</i><p>This spell creates the illusion of a fierce battle. Your enemies move cautiously and pass up the opportunity to strike their foes, since the roar and confusion of the battle distracts them.<p class=sub>All creatures within the area of the spell that fail their saving throws cannot make attacks of opportunity. In addition, all creatures within the area are considered flanked. A creature ignores these effects when it leaves the spell's area. If a creature reenters the spell's area after leaving it, the creature can attempt another save to resist the spell if its initial save failed. A creature that enters the area for the first time after the spell is cast must also make a saving throw to resist the effect.<p class=sub>A phantom battle spell produces noise appropriate to a mob of creatures locked in battle. Anyone in the battle can plainly see that the conjured fighters are no threat, since they strike solely at other phantom warriors, but the din, tumult, and confusion make it difficult to focus on the true foes at hand. A creature that succeeds on its save can still see the spectral outline of the illusion, but is able to block out the distraction and fight as normal.<p class=sub>When you cast this spell, you can choose for it not to affect a number of allies you designate less than or equal to your caster level."
}, {
	name: "Plague",
	description: "undefined",
	school: "Necro",
	composition: "V,S",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One living creature/level, no two of which are more than 30 ft. apart",
	duration: "1 round/level",
	save: "Fort negs",
	sr: "Yes",
	phb: "121",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 7,
		"Druid": 7,
		"Sorceror": 8,
		"Wizard": 8
	},
	detail: "<i>Your skin crawls as you utter the words and complete the gestures of this spell. Suddenly, one or more of the target creatures seem overcome by a dreadful malady.</i><p>The subjects contract a disease selected from the table below, which strikes immediately (no incubation period). The dis-ease progresses rapidly; the subjects must attempt additional saves each round, instead of each day. Use plague's DC for all saves. See page 292 of the <i>Dungeon Master's Guide</i> for more information on these diseases.<table class=box><tr class=header><td>Disease</td><td>Damage</td></tr><tr><td>Blinding sickness</td><td>1d4 Str*</td></tr><tr><td>Cackle fever</td><td>1d6 Wis</td></tr><tr><td>Filth fever</td><td>1d3 Dex, 1d3 Con</td></tr><tr><td>Mindfire</td><td>1d4 Int</td></tr><tr><td>Red ache</td><td>1d6 Str</td></tr><tr><td>Shakes</td><td>1d8 Dex</td></tr><tr><td>Slimy doom </td><td>1d4 Con</td></tr></table><p>*Each time a victim takes 2 or more points of Strength damage from blinding sickness, he or she must make another Fortitude save (using the plague spell's save DC) or be permanently blinded."
}, {
	name: "Prismatic Mist",
	description: "undefined",
	school: "Evoc",
	composition: "V",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	area: "30-ft.-radius spread",
	duration: "1 minute/level",
	save: "See text",
	sr: "No",
	phb: "121",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>You call forth a thin, multihued mist that fills the area. Small incandescent lights, no brighter than candles, drift lazily throughout the mist.</i><p>The mist is too thin to obscure vision or provide concealment, but walking through it is hazardous. Each round, a creature that begins its turn in the area of the spell, or that enters the mist during its turn, is subject to one or more of the following effects based on the (randomly determined) color of the mist in the area around the creature.<p class=sub>Consult the table below to determine the color of the mist and its effect.<table class=box> <tr class=header><td>d8</td><td>Color</td><td>Effect</td></tr><td>1</td><td>Red</td><td>1d4 points fire damage</td><tr><td>2</td><td>Orange</td><td>1d6 points acid damage</td></tr><tr><td>3</td><td>Yellow</td><td>1d8 points electricity damage</td></tr><tr><td>4</td><td>Green</td><td>Poison; 1d4 points Str damage (Fort negates)</td></tr><tr><td>5</td><td>Blue</td><td>Slowed for 1 round (Will negates)</td></tr><tr><td>6</td><td>Indigo</td><td>Lesser confusion for 1 round (Will negates, mind-affecting)</td></tr><tr><td>7</td><td>Violet</td><td>Dazed for 1 round (Will negates)</td></tr><tr><td>8</td><td colspan=2>At the junction of two colors; roll twice more, ignoring any Ã¢â‚¬Å“8Ã¢â‚¬ï¿½ results</td></tr></table>"
}, {
	name: "Pulse of Hate",
	description: "undefined",
	school: "Necro",
	composition: "V,S,M/DF",
	time: "1 a",
	range: "20 ft.",
	area: "20-ft.-radius emanation centered on you",
	duration: "1 rounc/level",
	save: "Will half",
	sr: "Yes",
	phb: "122",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	detail: "<i>A red light pulses at your feet, sending malign waves of energy through the area that damage your enemies.</i><p>Starting in the round you cast it, pulse of hate deals 2d6 points of unholy damage per round, on your turn, to all enemies in the area.<p class=sub><i>Arcane Material Component:</i> A heart-shaped locket and a pin."
}, {
	name: "Radiance",
	description: "undefined",
	school: "Evoc",
	composition: "V,S,DF",
	time: "1 a",
	range: "60 ft.",
	area: "60-ft.-radius emanation centered on you",
	duration: "1 round/level (D); see text",
	save: "None",
	sr: "No",
	phb: "122",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 5,
		"Druid": 5,
		"Sorceror": 5,
		"Wizard": 5
	},
	detail: "<i>A bright, scintillating light shines from your body.</i><p>For the duration of this spell, you emanate a bright light that undead find uncomfortable. The illumination within the area is bright, the equivalent of a <i>daylight</i> spell. Undead in the area are dazzled for as long as they remain in the radius and for 1d6 rounds thereafter.<p class=sub><i>Radiance</i> counters or dispels any <i>darkness</i> spell of equal or lower level."
}, {
	name: "Ray of the Python",
	description: "undefined",
	school: "Evoc",
	composition: "V,S",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One creature",
	duration: "1 minute",
	save: "Ref negs; see below",
	sr: "Yes",
	phb: "122",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 2,
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>A ray of pulsing yellow light springs from your hand. It strikes your target and wraps around him like a snake, hampering his ability to move and attack.</i><p>This spell creates a ropey strand of arcane energy that restricts a creature's movements. A creature struck by this ray can only make one attack per round and cannot make attacks of opportunity. In addition, the creature's speed is reduced by 10 feet.<p class=sub>After the spell has been in effect for 1 round, at the start of its turn in each round thereafter, the subject is allowed a Reflex save to resist the spell's effects. If the save succeeds, the creature ignores the spell's effects for that round. It must make a new save each round, regardless of the result of a previous save."
}, {
	name: "Regroup",
	description: "undefined",
	school: "Conj",
	composition: "V,S",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One willing creature/level",
	duration: "Instantaneous",
	save: "None",
	sr: "No",
	phb: "122",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>You teleport your companions to your side.</i><p>Each subject of this spell teleports to a square adjacent to you. If those squares are occupied or cannot support the teleported creatures, the creatures appear as close to you as posible, on a surface that can support them, in an unoccupied square."
}, {
	name: "Renewed Vigor",
	description: "undefined",
	school: "Trans",
	composition: "V,S",
	time: "1 a",
	range: "30 ft.",
	effect: "30-ft.-radius burst centered on you",
	duration: "Instantaneous; see text",
	save: "Fort negs (harmless)",
	sr: "Yes (harmless)",
	phb: "123",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 5,
		"Cleric": 5,
		"Druid": 4
	},
	detail: "<i>With a word and a gesture, you suffuse an area with a soft golden light, bestowing a second wind to creatures within.</i><p>When you cast this spell, you remove the fatigued condition from any creature in the area and cause exhausted creatures to become fatigued. In addition, affected creatures gain a +2 bonus to Constitution for 1 round per caster level."
}, {
	name: "Righteous Burst",
	description: "undefined",
	school: "Evoc",
	composition: "V,S,M,DF",
	time: "1 a",
	range: "30 ft.",
	effect: "30-ft.-radius burst centered on you",
	duration: "Instantaneous; see text",
	save: "None or Will half; see text",
	sr: "Yes",
	phb: "123",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 7
	},
	detail: "<i>With a word and a gesture, you suffuse an area with a soft golden light, bestowing a second wind to creatures within.</i><p>This spell heals every ally in the area of 1d8 points of damage +1 per caster level (maximum +35). Every enemy in the area takes 1d8 points of damage +1 per caster level (maximum +35). <p class=sub>Enemies are allowed Will saves to halve the damage.<p class=sub><i>Material Component:</i> A handful of silver dust (worth 15 gp)."
}, {
	name: "Rouse",
	description: "undefined",
	school: "Ench",
	composition: "V,S",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	area: "10-ft.-radius burst",
	duration: "Instantaneous",
	save: "None",
	sr: "No",
	phb: "123",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 1,
		"Wizard": 1
	},
	detail: "<i>With a loud snap of your fingers, you cause any sleeping creatures in the spell's area to awaken.</i><p>This spell has no effect on creatures that are unconscious due to being reduced to negative hit points, or that have taken nonlethal damage in excess of their current hit points."
}, {
	name: "Scattering Trap",
	description: "undefined",
	school: "Conj",
	composition: "V,S,M",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	area: "One 5-ft. square/2 levels",
	duration: "1 round/level",
	save: "Ref negs",
	sr: "Yes",
	phb: "123",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>Areas you designate on the floor flare dimly.</i><p>This spell imbues a number of 5-foot squares you designate with a teleportation trap. A creatures moving through one of these squares and failing its saving throw is teleported 1d6 squares in a random direction (use the Missing with a Thrown Weapon diagram, PH158). If reaching the destination involves teleporting the subject into a solid space such as within a wall, the subject is forcibly shunted into the nearest open space and takes 1d6 points of damage.<p class=sub>When you cast this spell, the 5-foot squares you designate do not have to be adjacent but must all be within 30 feet of one another.<p class=sub><i>Material Component :</i> A pinch of dandelion seeds."
}, {
	name: "Seeking Ray",
	description: "undefined",
	school: "Evoc",
	composition: "V,S",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	effect: "Ray",
	duration: "Instantaneous; see text",
	save: "None",
	sr: "Yes",
	phb: "124",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>A ray of electricity springs from your hand. It snakes around obstacles, cover, and other impediments on its way toward your target.</i><p>You create a ray that deals 4d6 points of electricity damage if it strikes your target. While this ray requires a ranged touch attack to strike an opponent, it ignores concealment and cover (but not total concealment or total cover), and it does not take the standard penalty for firing into melee.<p class=sub>In addition to the damage it deals, the ray creates a link of energy between you and the subject. If this ray struck the target and dealt damage, you gain a +4 bonus on attacks you make with ray spells (including another casting of this one, if desired) against the subject for 1 round per caster level. If you cast seeking ray a second time on a creature that is still linked to you from a previous casting, the duration of the new link overlaps (does not stack with) the remaining duration of the previous one."
}, {
	name: "Share Talents",
	description: "undefined",
	school: "Trans",
	composition: "V,S,M",
	time: "1 round",
	range: "Touch",
	target: "Two willing creatures touched",
	duration: "10 minutes/level",
	save: "Will negs (harmless)",
	sr: "Yes (harmless)",
	phb: "124",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 1,
		"Cleric": 2,
		"Ranger": 3,
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>You touch two allies, and for a moment their features change so that they seem to blend their appearances into one new creature.</i><p>When you cast this spell on two subjects, you create a mystical link between them. For the duration of the spell, the subjects gain a +2 bonus on any skill checks they make, as long as at least one of the characters has 1 rank or more in the skill. In addition, if either character has ranks in a skill that is not normally usable by untrained characters (such as Tumble), the other character can make untrained checks using that skill.<p class=sub><i>Material Component:</i> A knotted rope."
}, {
	name: "Slashing Dispel",
	description: "undefined",
	school: "Abjur",
	composition: "V,S",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	target: "One creature or 20-ft.-radius burst",
	duration: "Instantaneous",
	save: "None",
	sr: "No",
	phb: "125",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	detail: "<i>You rip away the spell energy infused within a creature, turning it into a harmful burst of energy that burns into the creature before dissipating.</i><p>This spell functions like <i>dispel magic</i>(PH 223), except as noted here. Any creature that has a spell effect removed from it takes 2 points of damage per level of the dispelled effect. If a creature loses the effects of multiple spells, it takes damage for each one."
}, {
	name: "Sonic Shield",
	description: "undefined",
	school: "Evoc",
	composition: "V,S",
	time: "1 a",
	range: "Personal",
	target: "You",
	duration: "Instantaneous",
	save: "None",
	sr: "No",
	phb: "125",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 3,
		"Sorceror": 5,
		"Wizard": 5
	},
	detail: "<i>The air around you shifts and shimmers as a field of pure sonic energy forms before you. This shield repels all attacks with a blast of energy that sends the attacker stumbling backward.</i><p>This spell grants you a +4 deflection bonus to AC. In addition, anyone who successfully hits you with a melee attack takes 1d8 points of sonic damage and must make a Fortitude saving throw or be knocked 5 feet away from you into an unoccupied space of your choice. If no space of suf-ficient size is available for it to enter, it instead takes an extra 1d8 points of sonic damage."
}, {
	name: "Stand",
	description: "undefined",
	school: "Conj",
	composition: "V,S",
	time: "1 imm a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One willing prone creature",
	duration: "Instantaneous",
	save: "Will negs (harmless)",
	sr: "Yes (harmless)",
	phb: "125",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 1,
		"Wizard": 1
	},
	detail: "<i>With a swift upward gesture of your arms and a single clarion command (Ã¢â‚¬Å“Stand!Ã¢â‚¬ï¿½), you enable the prone creature to safely rise to its feet.</i><p>The subject creature immediately stands, without provoking attacks of opportunity."
}, {
	name: "Stay the Hand",
	description: "undefined",
	school: "Ench",
	composition: "V",
	time: "1 imm a",
	range: "Medium (100 ft. + 10 ft./level)",
	target: "One humanoid",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	phb: "126",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 1,
		"Cleric": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>Your words invoke compassion and mercy in the merciless.</i><p>If the target creature fails its save against stay the hand, it refrains from attacking you or targeting you with spells for the remainder of the current round.<p class=sub>You can cast this spell during an opponent's turn after the opponent announces its intention to attack you or target you with a spell. If the opponent becomes subject to this spell, it can choose a new target to attack, but it takes a Ã¢â‚¬â€œ4 circumstance penalty on its attack roll due to the sudden change of intentions at the last second. Likewise, the subject of this spell can redirect a spell that had been targeted on you, but it must succeed on a Concentration check (DC 15 + the spell's level) or the spell is wasted."
}, {
	name: "Stifle Spell",
	description: "undefined",
	school: "Abjur",
	composition: "V",
	time: "1 imm a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One creature casting a spell",
	duration: "Instantaneous",
	save: "See text",
	sr: "Yes",
	phb: "126",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	detail: "<i>As the creature casts a spell, you utter a simple magical phrase that momentarily confounds it.</i><p>You cast this spell to distract another creature as it attempts to cast a spell. The target must succeed on a Concen-tration check (DC equal to 14 + your key ability modifier + the level of the spell being cast) to ignore the distraction, or else it loses the spell."
}, {
	name: "Stretch Weapon",
	description: "undefined",
	school: "Trans",
	composition: "V",
	time: "1 swift a",
	range: "0 ft.",
	target: "Melee weapon wielded",
	duration: "One attack",
	save: "Will negates (harmless, object)",
	sr: "Yes (harmless, object)",
	phb: "126",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 2,
		"Cleric": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>With a single utterance, the weapon in your hand elongates without becoming awkward or weighty.</i><p>The affected weapon stretches, extending toward its target, though it can be wielded normally. The spell adds an additional 5 feet of reach to a melee weapon for a single attack."
}, {
	name: "Summon Golem",
	description: "undefined",
	school: "Conj",
	composition: "V,S,F",
	time: "1 round",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One summoned golem",
	duration: "1 minute/level",
	save: "None",
	sr: "No",
	phb: "126",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 9,
		"Sorceror": 9,
		"Wizard": 9
	},
	detail: "<i>You wave your hand over a lump of flesh, clay, stone, or iron while chanting a lengthy incantation. Moments later, a golem of similar substance appears in a flash of light to serve you.</i><p>You summon a flesh, clay, stone, or iron golem. The golem begins acting at the start of your next turn and follows your simple commands.<p class=sub>The golem disappears when it is destroyed or when the spell's duration expires.<p class=sub><i>Focus:</i> A small lump of preserved flesh, dried clay, unworked stone, or iron ore."
}, {
	name: "Sure Strike",
	description: "undefined",
	school: "Div",
	composition: "V",
	time: "1 swift a",
	range: "Personal",
	target: "You",
	duration: "1 round or until discharged",
	save: "undefined",
	sr: "undefined",
	phb: "126",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>You gain a fleeting glimpse into the future, enough to guide your impending attack.</i><p>You cast this spell immediately before you make an attack roll. You can see into the future for that attack, granting you a +1 insight bonus per three caster levels on your next attack roll."
}, {
	name: "Thunder Field",
	description: "undefined",
	school: "Evoc",
	composition: "V,S",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	area: "20-ft.-radius spread",
	duration: "1 round/level",
	save: "See text",
	sr: "Yes",
	phb: "126",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 4,
		"Druid": 6,
		"Sorceror": 6,
		"Wizard": 6
	},
	detail: "<i>The air around you crackles with the distant boom of thunder. A dome of translucent golden energy surrounds the spell's area. The dome shakes and rattles, while the muffled sounds of explosive blasts echoes from it. Any creature within the dome is knocked into the air by the powerful, ear-splitting blasts.</i><p>This spell creates an area of turbulent, sonic energy. For the duration of the spell, any creature that starts its turn in the spell's area must make a Fortitude save or take 1d8 points of sonic damage. In addition, affected creatures must make a Reflex save or be knocked prone. If a creature is already prone, failing this save has no effect on it."
}, {
	name: "Toxic Weapon",
	description: "undefined",
	school: "Conj",
	composition: "V,S",
	time: "1 a",
	range: "Touch",
	target: "Piercing or slashing weapon touched",
	duration: "1 hour or until discharged",
	save: "Fort negs; see text",
	sr: "No",
	phb: "126",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 5,
		"Wizard": 5
	},
	detail: "<i>You touch the weapon, and an oily liquid appears on its surface.</i><p>When you cast this spell, you coat the target weapon with poison. The next successful melee attack with that weapon delivers the poison. The poison deals 1d10 points of Constitution damage immediately and another 1d10 points of Constitution damage 1 minute later. Each instance of damage can be negated by a Fortitude save (DC equal to this spell's save DC).<p class=sub>If the weapon has not scored a successful hit after 1 hour, the poison becomes inert and evaporates."
}, {
	name: "Trollshape",
	description: "undefined",
	school: "Trans",
	composition: "V,S",
	time: "1 swift a",
	range: "Personal",
	target: "You",
	duration: "1 round/level (D)",
	save: "undefined",
	sr: "undefined",
	phb: "127",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	detail: "<i>Your muscles ripple, and you hear bones crackling underneath your now mottled green skin as your form reshapes to that of a horrid troll.</i><p>You take on the form and abilities of a troll (MM 247). You gain 30 temporary hit points, which disappear at the end of the spell's duration. See the description of the new polymorph subschool on page 95 for more details."
}, {
	name: "Vertigo",
	description: "undefined",
	school: "Illus",
	composition: "V,S",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One living creature",
	duration: "1 round/level (D)",
	save: "Will disbelief",
	sr: "No",
	phb: "127",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Bard": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>You cripple a target with sensations of falling.</i><p>The subject of this spell becomes dizzy as the ground seems to drop away beneath its feet. The subject must succeed on a DC 10 Balance check at the start of each turn to take a move action.If it fails, it cannot move. If it fails the check by 5 or more, it falls prone. While affected, the subject also takes a Ã¢â‚¬â€œ2 penalty on attack rolls and saving throws. Airborne creatures receive a +4 bonus on saves against this spell and do not need to make the Balance checks."
}, {
	name: "Vertigo Field",
	description: "undefined",
	school: "Illus",
	composition: "V,S",
	time: "1 a",
	range: "Medium (100 ft. + 10 ft./level)",
	area: "20-ft.-radius spread",
	duration: "1 round/level",
	save: "Fort partial; see text",
	sr: "Yes",
	phb: "128",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	detail: "<i>You create a field of swirling patterns of color, light, and motion. Creatures in the area stagger as the barrage of sensations overloads their senses and leaves them overcome with vertigo.</i><p>This spell creates a field of illusory magic that hampers the movement and senses of any creature that enters it. The area within the field counts as difficult terrain. Attacks made through or from inside the field have a 20% miss chance. A creature that begins its turn inside the field must make a Fortitude save or become nauseated for 1 round. Once a creature fails this save, it does not need to make another save against this effect.<p class=sub>When you cast this spell, you can choose for this nauseating effect not to apply to a number of allies you designate less than or equal to your caster level. Those allies still treat the vertigo field as difficult terrain and have the 20% miss chance on attacks."
}, {
	name: "Visions of the Future",
	description: "undefined",
	school: "Div",
	composition: "V,S",
	time: "10 minutes",
	range: "Personal",
	target: "You",
	duration: "1 hour/level or until discharged",
	save: "undefined",
	sr: "undefined",
	phb: "128",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Cleric": 8
	},
	detail: "You view events slightly before they happen, gaining time to react to them.</i><p>You gain a +2 sacred bonus on all saving throws and +2 dodge bonus to Armor Class. Once during the spell's duration, as an immediate action, you can choose to discharge the spell to gain a greater bonus. When you discharge the spell in this manner, you gain a sacred bonus on all saving throws and a dodge bonus to your Armor Class equal to 1/2 your caster level (maximum +25). This bonus lasts until the beginning of your next turn."
}, {
	name: "Whelm",
	description: "undefined",
	school: "Ench",
	composition: "V,S",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One living creature",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	phb: "128",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 1,
		"Wizard": 1
	},
	detail: "<i>You thrust one arm forward toward your foe, palm open and fingers splayed. The creature reels as an invisible surge of power invades its mind. </i><p>You launch a magical assault that wears at the target's mind, dealing 1d6 points of nonlethal damage if it fails its saving throw.<p class=sub>For every two caster levels beyond 1st, you deal an extra 1d6 points of nonlethal damage to the subject, to a maximum of 5d6 at 9th level."
}, {
	name: "Whelm, Mass",
	description: "undefined",
	school: "Ench",
	composition: "V,S",
	time: "1 a",
	range: "Close (25 ft. + 5 ft./2 levels)",
	target: "One living creature/level",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	phb: "128",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	detail: "<i>With a sweep of your arm, creatures reel as an invisible surge of magical power invades their minds.</i><p>This spell functions like whelm, except that it affects multiple targets and it deals 1d6 points of nonlethal damage per caster level to each subject, to a maximum of 10d6 at 10th level."
}, {
	name: "Whelming Blast",
	description: "undefined",
	school: "Ench",
	composition: "V,S",
	time: "1 a",
	range: "30 ft.",
	area: "Cone-shaped burst",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	phb: "128",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	detail: "<i>You stretch your arms before you, spread your hands wide, and unleash an invisible cone of magical power that assails the minds of the creatures within it.</i><p>You assail the mental faculties of crea-tures in the area, dealing 1d6 points of nonlethal damage per two caster levels (maximum 5d6 at 10th level) to each creature that fails its save."
}, {
	name: "Wrack Earth",
	description: "undefined",
	school: "Evoc",
	composition: "V,S,DF",
	time: "1 a",
	range: "30 ft.",
	area: "30-ft. line",
	duration: "Instantaneous",
	save: "Reflex half; see text",
	sr: "No",
	phb: "128",
	tags: ["phb2"],
	type: "spell",
	classes: {
		"Druid": 7
	},
	detail: "<i>You stomp your foot, causing a shockwave to shoot out from you.</i><p>When you cast this spell, earth and stone blast upward along a 30-foot line, smashing creatures and knocking them out of the way. This spell deals 1d6 points of bludgeoning damage per caster level (maximum 15d6) to every creature it contacts and creates a 5-foot-wide mound of stone and rubble along the path of the line. Creatures within the area that fail their Reflex saves are moved to a random side of the rubble. The rubble created is difficult terrain that requires 2 squares of movement to enter. Creatures that succeed on their saving throws take half damage and are not moved by the mound of rubble."
}];