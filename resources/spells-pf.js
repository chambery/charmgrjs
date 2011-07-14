spells = new TAFFY([{
	name: "Acid Arrow",
	School: "Conj",
	time: "1 a",
	components: "V, S, M (rhubarb leaf and an adder&emdash;s stomach), F (a dart)",
	range: "long (400 ft. + 40 ft./level)",
	effect: "one arrow of acid",
	duration: "1 round + 1 round per three levels",
	save: "-",			 
	sr: "no",
	classes: {
		Sorcerer: 2,
		Wizard: 2
	},
	description: "An arrow of acid springs from your hand and speeds to its target. You must succeed on a ranged touch attack to hit your target. The arrow deals 2d4 points of acid damage with no splash damage. For every three caster levels you possess, the acid, unless neutralized, lasts for another round (to a maximum of 6 additional rounds at 18th level), dealing another 2d4 points of damage in each round.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d7f4"
}, {
	name: "Acid Fog",
	summary: "Fog deals 2d6/rnd acid damage",
	school: "Conj",
	composition: "V, S, M (powdered peas and an animal hoof)",
	time: "1 a",
	range: "Medium",
	effect: "20-ft radius, 20-ft high",
	duration: "1 rnd/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "<i>Acid fog</i> creates a billowing mass of misty vapors similar to that produced by a solid fog spell (page 281). In addition to slowing creatures down and obscuring sight, this spell's vapors are highly acidic. Each round on your turn, starting when you cast the spell, the fog deals 2d6 points of acid damage to each creature and object within it.</p>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7c7e"
}, {
	name: "Acid Splash",
	summary: "Acid Missile 1d3 damage",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Acid missile",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 1,
		"Wizard": 1
	},
	description: "You fire a small orb of acid at the target. You must succeed on a ranged touch attack to hit your target. The orb deals 1d3 points of acid damage.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7f3"
}, {
	name: "Aid",
	summary: "+1 att,+1 fear saves,1d8 +1/lvl hps",
	school: "Ench",
	composition: "V, S, DF",
	time: "1 a",
	range: "Touch",
	effect: "One living creature",
	duration: "1 min/lvl",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 3
	},
	description: "<i>Aid</i> grants the target a +1 morale bonus on attack rolls and saves against fear effects, plus temporary hit points equal to 1d8 + caster level (to a maximum of 1d8+10 temporary hit points at caster level 10th).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d29d"
}, {
	name: "Air Walk",
	summary: "Target treads on air as if solid",
	school: "Trans",
	composition: "V, S, DF",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "10 min/lvl",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 5,
		"Druid": 5
	},
	description: "The subject can tread on air as if walking on solid ground. Moving upward is similar to walking up a hill. The maximum upward or downward angle possible is 45 degrees, at a rate equal to one-half the air walker's normal speed. <p class=sub>A strong wind (21+ mph) can push the subject along or hold it back. At the end of its turn each round, the wind blows the air walker 5 feet for each 5 miles per hour of wind speed. The creature can, at the DM's option, be subject to additional penalties in exceptionally strong or turbulent winds, such as loss of control over movement or physical damage from being buffeted about. <p class=sub>Should the spell duration expire while the subject is still aloft, the magic fails slowly. The subject floats downward 60 feet per round for 1d6 rounds. If it reaches the ground in that amount of time, it lands safely. If not, it falls the rest of the distance, taking 1d6 points of damage per 10 feet of fall. Since dispelling a spell effectively ends it, the subject also descends in this way if the <i>air walk</i> spell is dispelled, but not if it is negated by an <i>antimagic field</i>. <p class=sub>You can cast air walk on a specially trained mount so it can be ridden through the air. You can train a mount to move with the aid of <i>air walk</i> (counts as a trick; see page 74) with one week of work and a DC 25 Handle Animal check.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b01f"
}, {
	name: "Alarm",
	summary: "Wards an area for 2 hr/lvl",
	school: "Abjur",
	composition: "V, S, F/DF (A tiny bell and a piece of very fine silver wire)",
	time: "1 a",
	range: "Close",
	effect: "20-ft radius",
	duration: "2 hr/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 2,
		"Ranger": 1,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "<i>Alarm</i> sounds a mental or audible alarm each time a creature of Tiny or larger size enters the warded area or touches it. A creature that speaks the password (determined by you at the time of casting) does not set off the <i>alarm</i>. You decide at the time of casting whether the <i>alarm</i> will be mental or audible. <p class=sub><i>Mental Alarm</i>: A mental alarm alerts you (and only you) so long as you remain within 1 mile of the warded area. You note a single mental 'ping' that awakens you from normal sleep but does not otherwise disturb concentration. A <i>silence</i> spell has no effect on a mental <i>alarm</i>. <p class=sub><i>Audible Alarm</i>: An audible <i>alarm</i> produces the sound of a hand bell, and anyone within 60 feet of the warded area can hear it clearly. Reduce the distance by 10 feet for each interposing closed door and by 20 feet for each substantial interposing wall. <p class=sub>In quiet conditions, the ringing can be heard faintly as far as 180 feet away. The sound lasts for 1 round. Creatures within a <i>silence</i> spell cannot hear the ringing. <p class=sub>Ethereal or astral creatures do not trigger the alarm. <p class=sub><i>Alarm</i> can be made permanent with a <i>permanency</i> spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a514"
}, {
	name: "Align Weapon",
	summary: "Adds alignment to weapon",
	school: "Trans",
	composition: "V, S, DF",
	time: "1 a",
	range: "Touch",
	effect: "Weapon",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 3
	},
	description: "<i>Align weapon</i> makes a weapon good, evil, lawful, or chaotic, as you choose. A weapon that is aligned can bypass the damage reduction of certain creatures, usually outsiders of the opposite alignment. This spell has no effect on a weapon that already has an alignment, such as a holy sword. <p class=sub>You can't cast this spell on a natural weapon, such as an unarmed strike. <p class=sub>When you make a weapon good, evil, lawful, or chaotic, <i>align weapon</i> is a good, evil, lawful, or chaotic spell, respectively.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3e45"
}, {
	name: "Alter Self",
	summary: "Changes appearance",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Self",
	effect: "Caster, +10 disguise",
	duration: "10 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "You assume the form of a creature of the same type as your normal form (such as humanoid or magical beast). The new form must be within one size category of your normal size. The maximum HD of an assumed form is equal to your caster level, to a maximum of 5 HD at 5th level. You can change into a member of your own kind or even into yourself. <p class=sub>You retain your own ability scores. Your class and level, hit points, alignment, base attack bonus, and base save bonuses all remain the same. You retain all supernatural and spell-like special attacks and quali-ties of your normal form, except for those requiring a body part that the new form does not have (such as a mouth for a breath weapon or eyes for a gaze attack). You keep all extraordinary special attacks and qualities derived from class levels (such as a barbarian's rage ability), but you lose any from your normal form that are not derived from class levels (such as a dragon's frightful presence ability). <p class=sub>If the new form is capable of speech, you can communicate normally. You retain any spellcasting ability you had in your original form, but the new form must be able to speak intelligibly (that is, speak a language) to use verbal components and must have limbs capable of fine manipu-lation to use somatic or material components. <p class=sub>You acquire the physical qualities of the new form while retaining your own mind. Physical qualities include natural size, mundane movement capabilities (such as burrowing, climbing, walking, swimming, and flight with wings, to a maximum speed of 120 feet for flying or 60 feet for nonflying movement), natural armor bonus, natural weapons (such as claws, bite, and so on), racial skill bonuses, racial bonus feats, and any gross physical quali-ties (presence or absence of wings, number of extremities, and so forth). A body with extra limbs does not allow you to make more attacks (or more advantageous two-weapon attacks) than normal. <p class=sub>You do not gain any extraordinary special attacks or special qualities not noted above under physical qualities, such as darkvision, low-light vision, blindsense, blindsight, fast healing, regeneration, scent, and so forth. <p class=sub>You do not gain any supernatural special attacks, special qualities, or spell-like abilities of the new form. Your creature type and subtype (if any) remain the same regardless of your new form. You cannot take the form of any creature with a tem-plate, even if that template doesn't change the creature type or subtype. <p class=sub>You can freely designate the new form's minor physical qualities (such as hair color, hair texture, and skin color) within the normal ranges for a creature of that kind. <p class=sub>The new form's significant physical qualities (such as height, weight, and gender) are also under your control, but they must fall within the norms for the new form's kind. You are effectively disguised as an average member of the new form's race. If you use this spell to create a disguise, you get a +10 bonus on your Disguise check. <p class=sub>When the change occurs, your equipment, if any, either remains worn or held by the new form (if it is capable of wearing or holding the item), or melds into the new form and becomes nonfunctional. <p class=sub>When you revert to your true form, any objects previously melded into the new form reappear in the same location on your body they previously occupied and are once again functional. Any new items you wore in the assumed form and can't wear in your normal form fall off and land at your feet; any that you could wear in either form or carry in a body part common to both forms (mouth, hands, or the like) at the time of reversion are still held in the same way. Any part of the body or piece of equipment that is separated from the whole reverts to its true form.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d38e"
}, {
	name: "Analyze Dweomer",
	summary: "Reveals magical aspects of target",
	school: "Div",
	composition: "V, S, F (A tiny lens of ruby or sapphire set in a small golden loop. The gemstone must be worth at least 1,500 gp.)",
	time: "1 a",
	range: "Close",
	effect: "Item or creature/lvl",
	duration: "1 rnd/lvl (D)",
	save: "Will negs",
	sr: "-",
	classes: {
		"Bard": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "You discern all spells and magical proper-ties present in a number of creatures or objects. Each round, you may examine a single creature or object that you can see as a free action. In the case of a magic item, you learn its functions, how to activate its functions (if appropriate), and how many charges are left (if it uses charges). In the case of an object or creature with active spells cast upon it, you learn each spell, its effect, and its caster level. <p class='sub'>An attended object may attempt a Will save to resist this effect if its holder so desires. If the save succeeds, you learn nothing about the object except what you can discern by looking at it. An object that makes its save cannot be affected by any other <i>analyze dweomer</i> spells for 24 hours. <p class='sub'><i>Analyze dweomer</i> does not function when used on an artifact (see the <i>Dungeon Master's Guide</i> for descriptions on artifacts).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4c35"
}, {
	name: "Animal Growth",
	summary: "Animal/2 lvls increases size category",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "1 animal/2 lvls",
	duration: "1 min/lvl",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Druid": 6,
		"Ranger": 4,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "A number of animals grow to twice their normal size and eight times their normal weight. This alteration changes each animal's size category to the next largest (from Large to Huge, for example), grants it a +8 size bonus to Strength and a +4 size bonus to Constitution (and thus an extra 2 hit points per HD), and imposes a -2 size penalty to Dexterity. The creature's existing natural armor bonus increases by 2. The size change also affects the animal's modifier to AC and attack rolls and its base damage, as descriptioned on Table 2-2 in the <i>Dungeon Master's Guide</i>. The animal's space and reach change as indicated on Table 8-4: Creature Size and Scale (page 149), but its speed does not change. <p class=sub>The spell also grants each subject damage reduction 10/magic and a +4 resistance bonus on saving throws. <p class=sub>If insufficient room is available for the desired growth, the creature attains the maximum possible size and may make a Strength check (using its increased Strength) to burst any enclosures in the process. If it fails, it is constrained without harm by the materials enclosing it&emdash;the spell cannot be used to crush a creature by increasing its size. <p class=sub>All equipment worn or carried by an animal is similarly enlarged by the spell, though this change has no effect on the magical properties of any such equipment. Any enlarged item that leaves the enlarged creature's possession instantly returns to its normal size. <p class=sub>The spell gives no means of command or influence over the enlarged animals. <p class=sub>Multiple magical effects that increase size do not stack, which means (among other things) that you can't use a second casting of this spell to further increase the size of an animal that's still under the effect of the first casting.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "94ac"
}, {
	name: "Animal Messenger",
	summary: "Send a tiny animal to specific place",
	school: "Ench",
	composition: "V, S, M (A morsel of food the animal likes)",
	time: "1 a",
	range: "Close",
	effect: "One tiny animal",
	duration: "1 day/lvl",
	save: "-",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Druid": 3,
		"Ranger": 1
	},
	description: "You compel a Tiny animal to go to a spot you designate. The most common use for this spell is to get an animal to carry a message to your allies. The animal cannot be one tamed or trained by someone else, including such creatures as familiars and animal companions. <p class=sub>Using some type of food desirable to the animal as a lure, you call the animal to you. It advances and awaits your bidding. You can mentally impress on the animal a certain place well known to you or an obvious landmark (such as the peak of a distant mountain). The directions must be simple, because the animal depends on your knowledge and can't find a destination on its own. You can attach some small item or note to the messenger. The animal then goes to the designated location and waits there until the duration of the spell expires, whereupon it resumes its normal activities. <p class=sub>During this period of waiting, the messenger allows others to approach it and remove any scroll or token it carries. <p class=sub>Unless the intended recipient of a message is expecting a messenger in the form of a bird or other small animal, the carrier may be ignored. The intended recipient gains no special ability to communicate with the animal or read any attached message (if it's written in a language he or she doesn't know, for example).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "571c"
}, {
	name: "Animal Shapes",
	summary: "1 ally/lvl polymorphs into animal",
	school: "Trans",
	composition: "V, S, DF",
	time: "1 a",
	range: "Close",
	effect: "One creature/lvl",
	duration: "1 hr/lvl (D)",
	save: "-",
	sr: "Yes",
	classes: {
		"Druid": 9
	},
	description: "As <i>polymorph</i>, except you polymorph up to one willing creature per caster level into an animal of your choice; the spell has no effect on unwilling creatures. All creatures must take the same kind of animal form; for example, you can't turn one subject into a hawk and another into a dire wolf. Recipients remain in the animal form until the spell expires or until you dismiss it for all recipients. In addition, an individual subject may choose to resume its normal form as a full-round action; doing so ends the spell for that subject alone. The maximum HD of an assumed form is equal to the subject's HD or your caster level, whichever is lower, to a maximum of 20 HD at 20th level.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3254"
}, {
	name: "Animal Trance",
	summary: "Fascinates 2d6 HD of animals",
	school: "Ench",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Animals, Int 1 or 2",
	duration: "Conc",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Druid": 3
	},
	description: "Your swaying motions and music (or singing, or chanting) compel animals and magical beasts to do nothing but watch you. Only a creature with an Intelligence score of 1 or 2 can be fascinated by this spell. Roll 2d6 to determine the total number of HD worth of creatures that you fascinate. The closest targets are selected first until no more targets within range can be affected. For example, if Vadania affects 7 HD worth of animals and there are sev- eral 2 HD wolves within close range, only the three closest wolves are affected.<p>A magical beast, a dire animal, or an an- imal trained to attack or guard is allowed a saving throw; an animal not trained to attack or guard is not.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "16f4"
}, {
	name: "Animate Dead",
	summary: "Creates skeletons and zombies",
	school: "Necro",
	composition: "V, S, M (You must place a black onyx gem worth at least 25 gp per Hit Die of the undead into the mouth or eye socket of each corpse you intend to animate. The magic of the spell turns these gems into worthless, burned-out shells.)",
	time: "1 a",
	range: "Touch",
	effect: "Max 2HD/lvl",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 4,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "<p class=sub>This spell turns the bones or bodies of dead creatures into undead skeletons or zombies that follow your spoken commands. The undead can follow you, or they can remain in an area and attack any creature (or just a specific kind of creature) entering the place. They remain animated until they are destroyed. (A destroyed skeleton or zombie can't be animated again.) <p class=sub>Regardless of the type of undead you create with this spell, you can't create more HD of undead than twice your caster level with a single casting of <i>animate dead</i>. (The <i>desecrate</i> spell doubles this limit; see page 218.) <p class=sub>The undead you create remain under your control indefinitely. No matter how many times you use this spell, however, you can control only 4 HD worth of undead creatures per caster level. If you exceed this number, all the newly created creatures fall under your control, and any excess undead from previous castings become uncontrolled. (You choose which creatures are released.) If you are a cleric, any undead you might command by virtue of your power to command or rebuke undead do not count toward the limit. <p class=sub><i>Skeletons</i>: A skeleton can be created only from a mostly intact corpse or skeleton. The corpse must have bones, so creating a skeleton from a purple worm, for example, is not possible. If a skeleton is made from a corpse, the flesh falls off the bones. The statistics for a skeleton depend on its size; they do not depend on what abilities the creature may have had while alive. The Monster Manual has game statistics for skeletons. <p class=sub><i>Zombies</i>: A zombie can be created only from a mostly intact corpse. The corpse must be that of a creature with a true anatomy, so a dead gelatinous cube, for example, cannot be animated as a zombie. The statistics for a zombie depend on its size, not on what abilities the creature may have had while alive. The <i>Monster Manual</i> has game statistics for zombies.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "aefd"
}, {
	name: "Animate Objects",
	summary: "Items attack your foes",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "One small item/lvl",
	duration: "1 rnd/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 7,
		"Cleric": 7
	},
	description: "<p class=sub>You imbue inanimate objects with mobility and a semblance of life. Each such animated object then immediately attacks whomever or whatever you initially designate. An animated object can be of any nonmagical material&emdash;wood, metal, stone, fabric, leather, ceramic, glass, or the like.. You may animate one Small or smaller object (such as a chair) or an equivalent number of larger objects per caster level. A Medium object (such as a coat rack) counts as two Small or smaller objects, a Large object (such as a table) as four, a Huge object as eight, a Gargantuan object as sixteen, and a Colossal object as thirty-two. You can change the designated target or targets as a move action, as if directing an active spell. <p class=sub>The <i>Monster Manual</i> has game statistics for animated objects. <p class=sub>This spell cannot animate objects carried or worn by a creature. <p class=sub>Animate objects can be made permanent with a <i>permanency</i> spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2bb"
}, {
	name: "Animate Plants",
	summary: "Animated plant",
	school: "Trans",
	composition: "V",
	time: "1 a",
	range: "Close",
	effect: "1 plant/3lvls",
	duration: "1 rnd/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 8
	},
	description: "You imbue inanimate plants with mobility and a semblance of life. Each animated plant then immediately attacks whomever or whatever you initially designate as though it were an animated object of the appropriate size category. You may animate one Large or smaller plant (such as a tree), or an equivalent number of larger plants, per three caster levels. A Huge plant counts as two Large or smaller plants, a Gargantuan plant as four, and a Colossal plant as eight. You can change the designated target or targets as a move action, as if directing an active spell. Use the statistics for animated objects found in the <i>Monster Manual</i>, except that plants smaller than Large don't have hardness unless the DM rules otherwise for a given case. <i>Animate plants</i> cannot affect plant creatures (such as treants), nor does it affect nonliving vegetable material (such as a cotton tunic or hempen rope). <i>Entangle</i>: Alternatively, you may imbue all plants within range with a degree of mobility, which allows them to entwine around creatures in the area. This usage of the spell duplicates the effect of an <i>entangle</i> spell. Spell resistance does not keep creatures from being entangled. This effect lasts 1 hour per caster level.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a140"
}, {
	name: "Animate Rope",
	summary: "Rope moves at your command",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "1 ropelike item",
	duration: "1 rnd/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "You can animate a nonliving ropelike object, such as string, yarn, cord, line, rope, or even a cable. The maximum length assumes a rope with a 1-inch diameter. Reduce the maximum length by 50% for every additional inch of thickness, and increase it by 50% for each reduction of the rope's diameter by half. <p class=sub>The possible commands are 'coil' (form a neat, coiled stack), 'coil and knot,' 'loop,' 'loop and knot,' 'tie and knot,' and the opposites of all of the above ('uncoil,' and so forth). You can give one command each round as a move action, as if directing an active spell. <p class=sub>The rope can enwrap only a creature or an object within 1 foot of it&emdash;it does not snake outward&emdash;so it must be thrown near the intended target. Doing so requires a successful ranged touch attack roll (range increment 10 feet). A typical 1-inch-diameter hempen rope has 2 hit points, AC 10, and requires a DC 23 Strength check to burst it. The rope does not deal damage, but it can be used as a trip line or to cause a single opponent that fails a Reflex saving throw to become entangled. A creature capable of spellcasting that is bound by this spell must make a DC 15 Concentration check to cast a spell. An entangled creature can slip free with a DC 20 Escape Artist check. <p class=sub>The rope itself and any knots tied in it are not magical. <p class=sub>This spell grants a +2 bonus on any Use Rope checks you make when using the transmuted rope. <p class=sub>The spell cannot animate objects carried or worn by a creature.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c072"
}, {
	name: "Antilife Shell",
	summary: "10-ft field excludes living creatures",
	school: "Abjur",
	composition: "V, S, DF",
	time: "Round",
	range: "10-ft",
	effect: "10-ft radius",
	duration: "10 min/lvl (D)",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 7,
		"Druid": 7
	},
	description: "You bring into being a mobile, hemispherical energy field that prevents the entrance of most types of living creatures. The effect hedges out animals, aberrations, dragons, fey, giants, humanoids, magical beasts, monstrous humanoids, oozes, plants, and vermin, but not constructs, elementals, outsiders, or undead. See the <i>Monster Manual</i> for more about creature types.<p class='sub'>This spell may be used only defensively, not aggressively. Forcing an abjuration barrier against creatures that the spell keeps at bay collapses the barrier (see Abjuration, page 172).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6703"
}, {
	name: "Antimagic Field",
	summary: "Negates magic within 10-ft",
	school: "Abjur",
	composition: "V, S, M/DF (a pinch of powdered iron or iron filings))",
	time: "1 a",
	range: "10-ft",
	effect: "10-ft radius",
	duration: "10 min/lvl (D)",
	save: "-",
	sr: "Sp",
	classes: {
		"Cleric": 9,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "An invisible barrier surrounds you and moves with you. The space within this barrier is impervious to most magical effects, including spells, spell-like abilities, and supernatural abilities. Likewise, it prevents the functioning of any magic items or spells within its confines. <p class=sub>An <i>antimagic field</i> suppresses any spell or magical effect used within, brought into, or cast into the area, but does not dispel it. A <i>hasted</i> creature, for example, is not hasted while inside the field, but the spell resumes functioning when the creature leaves the field. Time spent within an <i>antimagic field</i> counts against the suppressed spell's duration. <p class=sub>Summoned creatures of any type and incorporeal undead wink out if they enter an <i>antimagic field</i>. They reappear in the same spot once the field goes away. Time spent winked out counts normally against the duration of the conjuration that is maintaining the creature. If you cast <i>antimagic field</i> in an area occupied by a summoned creature that has spell resistance, you must make a caster level check (1d20 + caster level) against the creature's spell resistance to make it wink out. (The effects of instantaneous conjurations, such as <i>create water</i>, are not affected by an <i>antimagic field</i> because the conjuration itself is no longer in effect, only its result.) <p class=sub>A normal creature (a normally encountered griffon rather than a conjured one, for instance) can enter the area, as can normal missiles. Furthermore, while a magic sword does not function magically within the area, it is still a sword (and a masterwork sword at that). The spell has no effect on golems and other constructs that are imbued with magic during their creation process and are thereafter self-supporting (unless they have been summoned, in which case they are treated like any other summoned creatures). Elementals, corporeal undead, and outsiders are likewise unaffected unless summoned. These creatures' spell-like or supernatural abilities, however, may be temporarily nullified by the field. <p class=sub><i>Dispel magic</i> does not remove the field. Two or more <i>antimagic fields</i> sharing any of the same space have no effect on each other. Certain spells, such as <i>wall of force</i>, <i>prismatic sphere</i>, and <i>prismatic wall</i>, remain unaffected by <i>antimagic field</i> (see the individual spell summarys). Artifacts and deities are unaffected by mortal magic such as this. (See the <i>Dungeon Master's Guide</i> for more about artifacts.) <p class=sub>Should a creature be larger than the area enclosed by the barrier, any part of it that lies outside the barrier is unaffected by the field.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6b8"
}, {
	name: "Antipathy",
	summary: "Item or location repels creatures",
	school: "Ench",
	composition: "V, S, M/DF (a lump of alum soaked in vinegar)",
	time: "1 hr",
	range: "Close",
	effect: "Location or item",
	duration: "2 hr/lvl (D)",
	save: "Will part",
	sr: "Yes",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "You cause an object or location to emanate magical vibrations that repel either a specific kind of intelligent creature or creatures of a particular alignment, as defined by you. The kind of creature to be affected must be named specifically&emdash;for example, red dragons, hill giants, wererats, lammasus, cloakers, or vampires. A creature subtype (such as goblinoid) is not specific enough. Likewise, the specific alignment to be repelled must be named&emdash;for example, chaotic evil, chaotic good, lawful neutral, or neutral. <p class=sub>Creatures of the designated kind or alignment feel an overpowering urge to leave the area or to avoid the affected item. <p class=sub>A compulsion forces them to abandon the area or item, shunning it and never willingly returning to it while the spell is in effect. A creature that makes a successful saving throw can stay in the area or touch the item but feels uncomfortable doing so. This distracting discomfort reduces the creature's Dexterity score by 4 points. <i>Antipathy</i> counters and dispels <i>sympathy</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6a9e"
}, {
	name: "Antiplant Shell",
	summary: "Barrier protects against plants",
	school: "Abjur",
	composition: "V, S,DF",
	time: "1 a",
	range: "10-ft",
	effect: "10-ft radius",
	duration: "10 min/lvl (D)",
	save: "-",
	sr: "Yes",
	classes: {
		"Druid": 5
	},
	description: "The antiplant shell spell creates an invisible, mobile barrier that keeps all creatures within the shell protected from attacks by plant creatures or animated plants. As with many abjuration spells, forcing the barrier against creatures that the spell keeps at bay strains and collapses the field (see Abjuration, page 172).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3344"
}, {
	name: "Arcane Eye",
	summary: "Floating eye, moves 30ft/rnd",
	school: "Div",
	composition: "V, S, M (a bit of bat fur)",
	time: "10 min",
	range: "Unlimited",
	effect: "Magical sensor",
	duration: "1 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "You create an invisible magical sensor that sends you visual information. You can create the <i>arcane eye</i> at any point you can see, but it can then travel outside your line of sight without hindrance. An <i>arcane eye</i> travels at 30 feet per round (300 feet per minute) if viewing an area ahead as a human would (primarily looking at the floor) or 10 feet per round (100 feet per minute) if examining the ceiling and walls as well as the floor ahead. It sees exactly as you would see if you were there. The eye can travel in any direction as long as the spell lasts. Solid barriers block its passage, but it can pass through a hole or space as small as 1 inch in diameter. The eye can't enter another plane of existence, even through a gate or similar magical portal. <p class=sub>You must concentrate to use an <i>arcane eye</i>. If you do not concentrate, the eye is inert until you again concentrate.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5ee1"
}, {
	name: "Arcane Lock",
	summary: "Magically locks a portal or chest",
	school: "Abjur",
	composition: "V, S, M",
	time: "1 a",
	range: "Touch",
	effect: "Size 30 sq ft/lvl",
	duration: "Permanent",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "An <i>arcane lock</i> spell cast upon a door, chest,or portal magically locks it. You can freely pass your own <i>arcane lock</i> without affecting it; otherwise, a door or object secured withthis spell can be opened only by breaking in or with a successful <i>dispel magic</i> or <i>knock spell</i>. Add 10 to the normal DC to break open a door or portal affected by this spell.(A <i>knock spell</i> does not remove an <i>arcane lock</i>; it only suppresses the effect for 10 minutes.)<p class=sub><i>Material Component</i>: Gold dust worth 25 gp.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d3ed"
}, {
	name: "Arcane Mark",
	summary: "Inscribes a personal rune",
	school: "Univ",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "Rune or mark",
	duration: "Permanent",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 1,
		"Wizard": 1
	},
	description: "This spell allows you to inscribe your personal rune or mark, which can consist of no more than six characters. The writing can be visible or invisible. An <i>arcane mark</i> spell enables you to etch the rune upon any substance (even stone or metal) without harm to the material upon which it is placed. If an invisible mark is made, a <i>detect magic</i> spell causes it to glow and be visible, though not necessarily understandable. See <i>invisibility</i>, <i>true seeing</i>, a <i>gem of seeing</i>, or a <i>robe of eyes</i> likewise allows the user to see an invisible <i>arcane mark</i>. A <i>read magic</i> spell reveals the words, if any. The mark cannot be dispelled, but it can be removed by the caster or by an erase spell. If an <i>arcane mark</i> is placed on a living being, normal wear gradually causes the effect to fade in about a month. <p class=sub><i>Arcane mark</i> must be cast on an object prior to casting <i>Drawmij's instant summons</i> on the same object (see that spell summary for descriptions).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6289"
}, {
	name: "Arcane Sight",
	summary: "See magic auras within 120-ft",
	school: "Div",
	composition: "V, S",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "This spell makes your eyes glow blue and allows you to see magical auras within 120 feet of you. The effect is similar to that of a <i>detect magic</i> spell, but <i>arcane sight</i> does not require concentration and discerns aura location and power more quickly. <p class=sub>You know the location and power of all magical auras within your sight. An aura's power depends on a spell's functioning level or an item's caster level, as noted in the summary of the <i>detect magic</i> spell (page 219). If the items or creatures bearing the auras are in line of sight, you can make Spellcraft skill checks to determine the school of magic involved in each. (Make one check per aura; DC 15 + spell level, or 15 + one-half caster level for a nonspell effect.) <p class=sub>If you concentrate on a specific creature within 120 feet of you as a standard action, you can determine whether it has any spellcasting or spell-like abilities, whether these are arcane or divine (spell-like abilities register as arcane), and the strength of the most powerful spell or spell-like ability the creature currently has available for use. In some cases, <i>arcane sight</i> may give a deceptively low reading&emdash;for example, when you use it on a spellcaster who has used up most of his or her daily spell allotment. <p class=sub><i>Arcane sight</i> can be made permanent with a <i>permanency</i> spell. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "143"
}, {
	name: "Arcane Sight, Greater",
	summary: "See magic auras within 120-ft",
	school: "Div",
	composition: "V, S",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "This spell functions like <i>arcane sight</i>, except that you automatically know which spells or magical effects are active upon any individual or object you see. Greater arcane sight doesn't let you identify magic items. <p class=sub>Unlike <i>arcane sight</i>, this spell cannot be made permanent with a <i>permanency</i> spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "fd7c"
}, {
	name: "Astral Projection",
	summary: "Projects you & company to astral plane",
	school: "Necro",
	composition: "V, S, M",
	time: "30 min",
	range: "Touch",
	effect: "You + 1 creat/2 lvls",
	duration: "Special",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 10,
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "By freeing your spirit from your physical body, this spell allows you to project an astral body onto another plane altogether. You can bring the astral forms of other willing creatures with you, provided that these subjects are linked in a circle with you at the time of the casting. These fellow travelers are dependent upon you and must accompany you at all times. If something happens to you during the journey, your companions are stranded wherever you left them. <p class='sub'>You project your astral self onto the Astral Plane, leaving your physical body behind on the Material Plane in a state of suspended animation. The spell projects an astral copy of you and all you wear or carry onto the Astral Plane. Since the Astral Plane touches upon other planes, you can travel astrally to any of these other planes as you will. To enter one, you leave the Astral Plane, forming a new physical body (and equipment) on the plane of existence you have chosen to enter. <p class='sub'>While you are on the Astral Plane, your astral body is connected at all times to your physical body by a silvery cord. If the cord is broken, you are killed, astrally and physically. Luckily, very few things can destroy a silver cord (see the <i>Dungeon Master's Guide</i> for more information). When a second body is formed on a different plane, the incorporeal silvery cord remains invisibly attached to the new body. If the second body or the astral form is slain, the cord simply returns to your body where it rests on the Material Plane, thereby reviving it from its state of suspended animation. <p class='sub'>Although astral projections are able to function on the Astral Plane, their actions affect only creatures existing on the Astral Plane; a physical body must be materialized on other planes. <p class='sub'>You and your companions may travel through the Astral Plane indefinitely. Your bodies simply wait behind in a state of suspended animation until you choose to return your spirits to them. The spell lasts until you desire to end it, or until it is terminated by some outside means, such as <i>dispel magic</i> cast upon either the physical body or the astral form, the breaking of the silver cord, or the destruction of your body back on the Material Plane (which kills you). <p class='sub'><i>Material Component</i>: A jacinth worth at least 1,000 gp, plus a silver bar worth 5 gp for each person to be affected.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "80b6"
}, {
	name: "Atonement",
	summary: "Removes burden of misleads",
	school: "Abjur",
	composition: "V, S, M (burning incense), F (a set of prayer beads (or other prayer device, such as a prayer wheel or prayer book) worth at least 500 gp), DF",
	time: "1 hr",
	range: "Touch",
	effect: "One living creature",
	duration: "Instantaneous",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 6,
		"Druid": 6
	},
	description: "This spell removes the burden of evil acts or misdeeds from the subject. The creature seeking atonement must be truly repentant and desirous of setting right its misdeeds. If the atoning creature committed the evil act unwittingly or under some form of compulsion, <i>atonement</i> operates normally at no cost to you. However, in the case of a creature atoning for deliberate misdeeds and acts of a knowing and willful nature, you must intercede with your deity (requiring you to expend 500 XP) in order to expunge the subject's burden. Many casters first assign a subject of this sort a quest (see <i>geas/quest</i>) or similar penance to determine whether the creature is truly contrite before casting the <i>atonement</i> spell on its behalf. <p class=sub><i>Atonement</i> may be cast for one of several purposes, depending on the version selected. <p class=sub><i>Reverse Magical Alignment Change</i>: If a creature has had its alignment magically changed, <i>atonement</i> returns its alignment to its original status at no cost in experience points. Restore Class: A paladin who has lost her class features due to committing an evil act may have her paladinhood restored to her by this spell. <p class=sub><i>Restore Cleric or Druid Spell Powers</i>: A cleric or druid who has lost the ability to cast spells by incurring the anger of his or her deity may regain that ability by seeking <i>atonement</i> from another cleric of the same deity or another druid. If the transgression was intentional, the casting cleric loses 500 XP for his intercession. If the transgression was unintentional, he does not lose XP. <p class=sub><i>Redemption or Temptation</i>: You may cast this spell upon a creature of an opposing alignment in order to offer it a chance to change its alignment to match yours. The prospective subject must be present for the entire casting process. Upon completion of the spell, the subject freely chooses whether it retains its original alignment or acquiesces to your offer and changes to your alignment. No duress, compulsion, or magical influence can force the subject to take advantage of the opportunity offered if it is unwilling to abandon its old alignment. This use of the spell does not work on outsiders or any creature incapable of changing its alignment naturally. <p class=sub>Though the spell summary refers to evil acts, <i>atonement</i> can also be used on any creature that has performed acts against its alignment, whether those acts are evil, good, chaotic, or lawful. <p class=sub><i>Note</i>: Normally, changing alignment is up to the player (for PCs) or the DM (for NPCs). This use of <i>atonement</i> simply offers a believable way for a character to change his or her alignment drastically, suddenly, and definitively.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f9d2"
}, {
	name: "Augury",
	summary: "Learns if an action is good or bad",
	school: "Div",
	composition: "V, S, M (incense worth at least 25 gp), F (a set of marked sticks, bones, or similar tokens of at least 25 gp value)",
	time: "1 min",
	range: "Self",
	effect: "Caster",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 3
	},
	description: "An <i>augury</i> can tell you whether a particular action will bring good or bad results for you in the immediate future. For example, if a character is considering destroying a weird seal that closes a portal, an augury might determine whether that act is a good idea. <p class=sub><i>The base chance for receiving a meaningful reply is 70% + 1% per caster level, to a maximum of 90%; the DM makes the roll secretly. The DM may determine that a question is so straightforward that a successful result is automatic, or so vague as to have no chance of success. If the <i>augury</i> succeeds, you get one of four results</i>:<ul><p class=sub><li>Weal (if the action will probably bring good results).</li><p class=sub><li>Woe (for bad results).</li><p class=sub><li>Weal and woe (for both).</li> <p class=sub><li>Nothing (for actions that don't have especially good or bad results).</li> <p class=sub></ul><p class=sub>If the spell fails, you get the 'nothing' result. A cleric who gets the 'nothing' result has no way to tell whether it was the consequence of a failed or successful augury. <p class=sub>The <i>augury</i> can see into the future only about half an hour, so anything that might happen after that does not affect the result. Thus, the result might not take into account the long-term consequences of a contemplated action. All <i>auguries</i> cast by the same person about the same topic use the same dice result as the first casting.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a2d7"
}, {
	name: "Awaken",
	summary: "Animal/tree gains human intellect",
	school: "Trans",
	composition: "V, S,DF,XP",
	time: "1 day",
	range: "Touch",
	effect: "Animal or tree",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Druid": 6
	},
	description: "You awaken a tree or animal to humanlike sentience. To succeed, you must make a Will save (DC 10 + the animal's current HD, or the HD the tree will have once awakened). <p class=sub>The <i>awakened animal</i> or tree is friendly toward you. You have no special empathy or connection with a creature you awaken, although it serves you in specific tasks or endeavors if you communicate your desires to it. <p class=sub>An awakened tree has characteristics as if it were an animated object (see the <i>Monster Manual</i>), except that it gains the plant type and its Intelligence, Wisdom, and Charisma scores are each 3d6. An awakened plant gains the ability to move its limbs, roots, vines, creepers, and so forth, and it has senses similar to a human's. <p class=sub>An awakened animal gets 3d6 Intelligence, +1d3 Charisma, and +2 HD. Its type becomes magical beast (augmented animal). An <i>awakened</i> animal can't serve as an animal companion, familiar, or special mount. <p class=sub>An <i>awakened</i> tree or animal can speak one language that you know, plus one additional language that you know per point of Intelligence bonus (if any). <p class=sub><i>XP Cost</i>: 250 XP.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9476"
}, {
	name: "Baleful Polymorph",
	summary: "Gives one target a harmless form",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "One creature",
	duration: "Permanent",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Druid": 6,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "As <i>polymorph</i>, except that you change the subject into a Small or smaller animal of no more than 1 HD (such as a dog, lizard, monkey, or toad). If the new form would prove fatal to the creature (for example, if you <i>polymorphed</i> a landbound target into a fish, or a flying target into a toad) the subject gets a +4 bonus on the save. <p class=sub>If the spell succeeds, the subject must also make a Will save. If this second save fails, the creature loses its extraordinary, supernatural, and spell-like abilities, loses its ability to cast spells (if it had the ability), and gains the alignment, special abilities, and Intelligence, Wisdom, and Charisma scores of its new form in place of its own. It still retains its class and level (or HD), as well as all benefits deriving therefrom (such as base attack bonus, base save bonuses, and hit points). It retains any class features (other than spellcasting) that aren't extraordinary, supernatural, or spell-like abilities. <p class=sub>Incorporeal or gaseous creatures are immune to being <i>polymorphed</i>, and a creature with the shapechanger subtype (such as a lycanthrope or a doppelganger) can revert to its natural form as a standard action.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e6f"
}, {
	name: "Bane",
	summary: "Enemies suffer -1 att, -1 vs fear",
	school: "Ench",
	composition: "V, S,DF",
	time: "1 a",
	range: "50-ft",
	effect: "Enemies in 50-ft",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 2
	},
	description: "<i>Bane</i> fills your enemies with fear and doubt. Each affected creature takes a -1 penalty on attack rolls and a -1 penalty on saving throws against fear effects. <p class=sub><i>Bane</i> counters and dispels bless.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "45be"
}, {
	name: "Banishment",
	summary: "Banishes 2 HD/lvl creatures",
	school: "Abjur",
	composition: "V, S,F",
	time: "1 a",
	range: "Close",
	effect: "Extraplanar creatures",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 7,
		"Druid": 3,
		"Ranger": 2,
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "A <i>banishment</i> spell is a more powerful version of the <i>dismissal</i> spell. It enables you to force extraplanar creatures out of your home plane. As many as 2 Hit Dice of creatures per caster level can be banished. You can improve the spell's chance of success by presenting at least one object or substance that the target hates, fears, or otherwise opposes. For each such object or substance, you gain a +1 bonus on your caster level check to overcome the target's spell resistance (if any), the saving throw DC increases by 2. For example, if this spell were cast on a demon that hated light and was vulnerable to holy water and cold iron weapons, you might use iron, holy water, and a torch in the spell. The three items would give you a +3 bonus on your check to overcome the demon's spell resistance and add 6 to the spell's save DC. <p class=sub>At the DM's option, certain rare items might work twice as well as a normal item for the purpose of the bonuses (each providing a +2 bonus on the caster level check against spell resistance and increasing the save DC by 4). <p class=sub><i>Arcane Focus</i>: Any item that is distasteful to the subject (optional, see above).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9df1"
}, {
	name: "Barkskin",
	summary: "+2 (+1/3lvls above 3rd) natural armou",
	school: "r Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "One living creature",
	duration: "10 min/lvl",
	save: "-",
	sr: "Yes",
	classes: {},
	description: "<i>Barkskin</i> toughens a creature's skin. The effect grants a +2 enhancement bonus tothe creature's existing natural armorbonus. This enhancement bonus increasesby 1 for every three caster levels above 3rd,to a maximum of +5 at caster level 12th. <p class=sub>The enhancement bonus provided bybarkskin stacks with the target's naturalarmor bonus, but not with other enhance-ment bonuses to natural armor. A creaturewithout natural armor has an effectivenatural armor bonus of +0, much as acharacter wearing only normal clothinghas an armor bonus of +0.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "158b"
}, {
	name: "Bear's Endurance",
	summary: "+4 Con",
	school: "Trans",
	composition: "V, S, DF",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 3,
		"Druid": 3,
		"Ranger": 2,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "The affected creature gains greater vitality and stamina. The spell grants the subject a +4 enhancement bonus to Constitution, which adds the usual benefits to hit points, Fortitude saves, Constitution checks, and so forth. <p class=sub>Hit points gained by a temporary increase in Constitution score are not temporary hit points. They go away when the subject's Constitution drops back to normal. They are not lost first as temporary hit points are (see page 146).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ff94"
}, {
	name: "Bear's Endurance, Mass",
	summary: "+4 Con to 1 creature/lvl",
	school: "Trans",
	composition: "V, S, DF",
	time: "1 a",
	range: "Close",
	effect: "Creature/lvl in 30-ft",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 7,
		"Druid": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "<i>Mass bear's endurance</i> works like <i>bear's endurance</i>, except that it affects multiple creatures.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b89f"
}, {
	name: "Beast Shape I",
	school: "Trans (polymorph)",
	classes: {
		Sorceror: 3,
		Wizard: 3
	},
	time: "1 a",
	composition: "V, S, M (a piece of the creature whose form you plan to assume)",
	range: "Self",
	effect: "Caster",
	duration: "1 min/lvl (D)",		
	description: "When you cast this spell, you can assume the form of any Small or Medium creature of the animal type. If the form you assume has any of the following abilities, you gain the listed ability: climb 30 feet, fly 30 feet (average maneuverability), swim 30 feet, darkvision 60 feet, low-light vision, and scent.<p class=sub><i>Small animal: </i>If the form you take is that of a Small animal, you gain a +2 size bonus to your Dexterity and a +1 natural armor bonus.<p class=sub><i>Medium animal: </i>If the form you take is that of a Medium animal, you gain a +2 size bonus to your Strength and a +2 natural armor bonus.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6c02"
}, {
	name: "Beast Shape II",
	school: "Trans (polymorph)",
	classes: {
		Sorceror: 4,						
		Wizard: 4
	},
	description: "This spell functions as beast shape I, except that it also allows you to assume the form of a Tiny or Large creature of the animal type. If the form you assume has any of the following abilities, you gain the listed ability: climb 60 feet, fly 60 feet (good maneuverability), swim 60 feet, darkvision 60 feet, low-light vision, scent, grab, pounce, and trip.<i>Tiny animal: </i>If the form you take is that of a Tiny animal, you gain a +4 size bonus to your Dexterity, a &emdash;2 penalty to your Strength, and a +1 natural armor bonus.<i>Large animal: </i>If the form you take is that of a Large animal, you gain a +4 size bonus to your Strength, a &emdash;2 penalty to your Dexterity, and a +4 natural armor bonus.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8275"
}, {
	name: "Beast Shape III",
	school: "Trans (polymorph)",
	classes: {
		Sorceror: 5,
		Wizard: 5
	},
	description: "This spell functions as <i>beast shape II</i>, except that it also allows you to assume the form of a Diminutive or Huge creature of the animal type. This spell also allows you to take on the form of a Small or Medium creature of the magical beast type. If the form you assume has any of the following abilities, you gain the listed ability: burrow 30 feet, climb 90 feet, fly 90 feet (good maneuverability), swim 90 feet, blindsense 30 feet, darkvision 60 feet, low-light vision, scent, constrict, ferocity, grab, jet, poison, pounce, rake, trample, trip, and web.<p class=sub><i>Diminutive animal: </i>If the form you take is that of a Diminutive animal, you gain a +6 size bonus to your Dexterity, a &emdash;4 penalty to your Strength, and a +1 natural armor bonus.<p class=sub><i>Huge animal: </i>If the form you take is that of a Huge animal, you gain a +6 size bonus to your Strength, a &emdash;4 penalty to your Dexterity, and a +6 natural armor bonus.<p class=sub><i>Small magical beast: </i>If the form you take is that of a Small magical beast, you gain a +4 size bonus to your Dexterity, and a +2 natural armor bonus.<p class=sub><i>Medium magical beast: </i>If the form you take is that of a Medium magical beast, you gain a +4 size bonus to your Strength, and a +4 natural armor bonus.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e9ef"
}, {
	name: "Beast Shape IV",
	school: "Trans (polymorph)",
	classes: {
		Sorceror: 6,
		Wizard: 6
	},
	description: "This spell functions as <i>beast shape III</i> except that it also allows you to assume the form of a Tiny or Large creature of the magical beast type. If the form you assume has any of the following abilities, you gain the listed ability: burrow 60 feet, climb 90 feet, fly 120 feet (good maneuverability), swim 120 feet, blindsense 60 feet, darkvision 90 feet, low-light vision, scent, tremorsense 60 feet, breath weapon, constrict, ferocity, grab, jet, poison, pounce, rake, rend, roar, spikes, trample, trip, and web. If the creature has immunity or resistance to any elements, you gain resistance 20 to those elements. If the creature has vulnerability to an element, you gain that vulnerability.<p class=sub><i>Tiny magical beast: </i>If the form you take is that of a Tiny magical beast, you gain a &emdash;2 penalty to your Strength, a +8 size bonus to your Dexterity, and a +3 natural armor bonus.<p class=sub><i>Large magical beast: </i>If the form you take is that of a Large magical beast, you gain a +6 size bonus to your Strength, a &emdash;2 penalty on your Dexterity, a +2 size bonus to your Constitution, and a +6 natural armor bonus.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f7c6"
}, {
	name: "Binding",
	summary: "Techniques to imprison a creature",
	school: "Ench",
	composition: "V, S, M",
	time: "1 min",
	range: "Close",
	effect: "One living creature",
	duration: "Special (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "A <i>binding</i> spell creates a magical restraint to hold a creature. The target gets an initial saving throw only if its Hit Dice equal at least one-half your caster level. <p class=sub>You may have as many as six assistants help you with the spell. For each assistant who casts <i>suggestion</i>, your caster level for this casting of <i>binding</i> increases by 1. For each assistant who casts <i>dominate animal</i>, <i>dominate person</i>, or <i>dominate monster</i>, your caster level for this casting of binding increases by a number equal to one-third of that assistant's level, provided that the spell's target is appropriate for a binding spell. Since the assistants' spells are cast simply to improve your caster level for the purpose of the <i>binding</i> spell, saving throws and spell resistance against the assistants' spells are irrelevant. Your caster level determines whether the target gets an initial Will saving throw and how long the binding lasts. All <i>binding</i> spells are dismissible. <p class=sub>Regardless of the version of binding you cast, you can specify triggering conditions that end the spell and release the creature whenever they occur. These triggers can be as simple or elaborate as you desire, but the DM must agree that the condition is reasonable and has a likelihood of coming to pass. The conditions can be based on a creature's name, identity, or alignment but otherwise must be based on observable actions or qualities. Intangibles such as level, class, Hit Dice, or hit points don't qualify. For example, a <i>bound</i> creature can be released when a lawful good creature approaches, but not when a paladin approaches. Once the spell is cast, its triggering conditions cannot be changed. Setting a release condition increases the save DC (assuming a saving throw is allowed) by 2. <p class=sub>If you are casting any of the first three versions of <i>binding</i> (those with limited durations), you may cast additional binding spells to prolong the effect, since the durations overlap. If you do so, the target gets a saving throw at the end of the first spell's duration, even if your caster level was high enough to disallow an initial saving throw. If the creature succeeds on this save, all the <i>binding</i> spells it has received are broken. <p class=sub>The <i>binding</i> spell has six versions. Choose one of the following versions when you cast the spell. <p class=sub><i>Chaining</i>: The subject is confined by restraints that generate an <i>antipathy</i> spell affecting all creatures who approach the subject, except you. The duration is one year per caster level. The subject of this form of <i>binding</i> is confined to the spot it occupied when it received the spell. <p class=sub><i>Slumber</i>: This version causes the subject to become comatose for as long as one year per caster level. The subject does not need to eat or drink while <i>slumbering</i>, nor does it age. This form of <i>binding</i> is more difficult to cast than <i>chaining</i>, making it slightly easier to resist. Reduce the spell's save DC by 1. <p class=sub><i>Bound Slumber</i>: This combination of <i>chaining</i> and <i>slumber</i> lasts for as long as one month per caster level. Reduce the save DC by 2. <p class=sub><i>Hedged Prison</i>: The subject is transported to or otherwise brought within a confined area (such as a labyrinth) from which it cannot wander by any means. The effect is permanent. Reduce the save DC by 3. <p class=sub><i>Metamorphosis</i>: The subject assumes gaseous form, except for its head or face. It is held harmless in a jar or other container, which may be transparent if you so choose. The creature remains aware of its surroundings and can speak, but it cannot leave the container, attack, or use any of its powers or abilities. The <i>binding</i> is permanent. The subject does not need to breathe, eat, or drink while metamorphosed, nor does it age. Reduce the save DC by 4. <p class=sub><i>Minimus Containment</i>: The subject is shrunk to a height of 1 inch or even less and held within some gem, jar, or similar object. The <i>binding</i> is permanent. The subject does not need to breathe, eat, or drink while <i>contained</i>, nor does it age. Reduce the save DC by 4. <p class=sub>You can't dispel a <i>binding</i> spell with <i>dispel magic</i> or a similar effect, though an <i>antimagic field</i> or <i>Mordenkainen's disjunction</i> affects it normally. A <i>bound</i> extraplanar creature cannot be sent back to its home plane due to <i>dismissal</i>, <i>banishment</i>, or a similar effect. <p class=sub><i>Components</i>: The components for a binding spell vary according to the version of the spell, but they always include a continuous chanting utterance read from the scroll or spellbook page containing the spell, somatic gestures, and materials appropriate to the form of binding used. These components can include such items as miniature chains of special metals (silver for lycanthropes, cold iron for demons, and so forth), soporific herbs of the rarest sort (for slumber bindings), a bell jar of the finest crystal, and the like. <p class=sub>In addition to the specially made props suited to the specific type of binding (cost500 gp), the spell requires opals worth atleast 500 gp for each HD of the target and avellum depiction or carved statuette of the subject to be captured.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c0aa"
}, {
	name: "Black Tentacles",
	school: "Conj (creation)",
	classes: {
		Sorceror: 4,
		Wizard: 4
	},
	time: "1 a",
	composition: "V, S, M (octopus or squid tentacle)",
	range: "medium (100 ft. + 10 ft./level)",
	effect: "20-ft.-radius spread",
	duration: "1 round/lvl (D)",
	save: "-", 
	sr: false,
	description: "This spell causes a field of rubbery black tentacles to appear, burrowing up from the floor and reaching for any creature in the area. <p class=sub>Every creature within the area of the spell is the target of a combat maneuver check made to grapple each round at the beginning of your turn, including the round that black tentacles is cast. Creatures that enter the area of effect are also automatically attacked. The tentacles do not provoke attacks of opportunity. When determining the tentacles&emdash; CMB, the tentacles use your caster level as their base attack bonus and receive a +4 bonus due to their Strength and a +1 size bonus. Roll only once for the entire spell effect each round and apply the result to all creatures in the area of effect.<p class=sub>If the tentacles succeed in grappling a foe, that foe takes 1d6+4 points of damage and gains the grappled condition. Grappled opponents cannot move without first breaking the grapple. All other movement is prohibited unless the creature breaks the grapple first. The black tentacles spell receives a +5 bonus on grapple checks made against opponents it is already grappling, but cannot move foes or pin foes. Each round that black tentacles succeeds on a grapple check, it deals an additional 1d6+4 points of damage. The CMD of black tentacles, for the purposes of escaping the grapple, is equal to 10 + its CMB.<p class=sub>The tentacles created by this spell cannot be damaged, but they can be dispelled as normal. The entire area of effect is considered difficult terrain while the tentacles last.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b6d4"
}, {
	name: "Blade Barrier",
	summary: "Blades deal 1d6 damage/lvl",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "Wall 20-ft long/lvl",
	duration: "1 min/lvl (D)",
	save: "Ref half",
	sr: "Yes",
	classes: {
		"Cleric": 7
	},
	description: "An immobile, vertical curtain of whirling blades shaped of pure force springs into existence. Any creature passing through the wall takes 1d6 points of damage per caster level (maximum 15d6), with a Reflex save for half damage. <p class=sub>If you evoke the barrier so that it appears where creatures are, each creature takes damage as if passing through the wall. Each such creature can avoid the wall (ending up on the side of its choice) and thus take no damage by making a successful Reflex save. <p class=sub>A <i>blade barrier</i> provides cover (+4 bonus to AC, +2 bonus on Reflex saves) against attacks made through it.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "de8e"
}, {
	name: "Blasphemy",
	summary: "Kills, paralyzes, weakens nonevil",
	school: "Evoc",
	composition: "V",
	time: "1 a",
	range: "30-ft",
	effect: "40-ft radius",
	duration: "Instantaneous",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 8
	},
	description: "Any nonevil creature within the area of a <i>blasphemy</i> spell suffers the following ill effects. <p class=sub><table><p class=sub><tr class=header><td>HD</td><td>Effect</td></tr> <p class=sub><tr><td>Equal to caster level</td><td>Dazed</td></tr><p class=sub><tr><td>Up to caster level -1</td><td>Weakened, dazed</td></tr><p class=sub><tr><td>Up to caster level -5</td><td>Paralyzed, weakened, dazed</td></tr><p class=sub><tr><td>Up to caster level -10</td><td>Killed, paralyzed, weakened, dazed</td></tr> <p class=sub>The effects are cumulative and concurrent. No saving throw is allowed against these effects. <p class=sub><i>Dazed</i>: The creature can take no actions for 1 round, though it defends itself normally. <p class=sub><i>Weakened</i>: The creature's Strength score decreases by 2d6 points for 2d4 rounds. Paralyzed: The creature is paralyzed and helpless for 1d10 minutes. <p class=sub><i>Killed</i>: Living creatures die. Undead creatures are destroyed. Furthermore, if you are on your home plane when you cast this spell, nonevil extraplanar creatures within the area are instantly banished back to their home planes. Creatures so banished cannot return for at least 24 hours. This effect takes place regardless of whether the creatures hear the blasphemy. The banishment effect allows a Will save (at a -4 penalty) to negate. <p class=sub>Creatures whose Hit Dice exceed your caster level are unaffected by blasphemy.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b32b"
}, {
	name: "Bleed",
	school: "Necro",
	classes: {
		Cleric: 0, 
		Sorceror: 0,
		Wizard: 0
	},
	time: "1 a",
	composition: "V, S",
	range: "close (25 ft. + 5 ft./2 levels)",
	effect: "One living creature",
	duration: "instantaneous",
	save: "Will negates", 
	sr: true,
	description: "You cause a living creature that is below 0 hit points but stabilized to resume dying. Upon casting this spell, you target a living creature that has &emdash;1 or fewer hit points. That creature begins dying, taking 1 point of damage per round. The creature can be stabilized later normally. This spell causes a creature that is dying to take 1 point of damage.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a4ed"
}, {
	name: "Bless",
	summary: "Allies gains +1 att, +1 vs fear",
	school: "Ench",
	composition: "V, S,DF",
	time: "1 a",
	range: "50-ft",
	effect: "Allies in 50-ft",
	duration: "1 min/lvl",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 2
	},
	description: "<i>Bless</i> fills your allies with courage. Each ally gains a +1 morale bonus on attack rolls and on saving throws against fear effects. <p class=sub><i>Bless</i> counters and dispels <i>bane</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e7be"
}, {
	name: "Bless Water",
	summary: "Make holy water",
	school: "Trans",
	composition: "V, S, M (5 pounds of powdered silver worth 25 gp)",
	time: "1 min",
	range: "Touch",
	effect: "Water flask",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 2,
		"Paladin": 1
	},
	description: "This transmutation imbues a flask (1 pint) of water with positive energy, turning it into holy water (page 128).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "37a5"
}, {
	name: "Bless Weapon",
	summary: "Blesses weapon against evil foes",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "Weapon",
	duration: "1 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Paladin": 1
	},
	description: "This transmutation makes a weapon strike true against evil foes. The weapon is treated as having a +1 enhancement bonus for the purpose of bypassing the damage reduction of evil creatures or striking evil incorporeal creatures (though the spell doesn't grant an actual enhancement bonus). The weapon also becomes good, which means it can bypass the damage reduction of certain creatures, particularly evil outsiders. (This effect overrides and suppresses any other alignment the weapon might have.) Individual arrows or bolts can be transmuted, but affected projectile weapons (such as bows) don't confer the benefit to the projectiles they shoot. <p class=sub>In addition, all critical hit rolls against evil foes are automatically successful, so every threat is a critical hit. This last effect does not apply to any weapon that already has a magical effect related to critical hits, such as a keen weapon or a vorpal sword.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a3c3"
}, {
	name: "Blight",
	summary: "Plant takes 1d6/lvl",
	school: "Necro",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "Plant",
	duration: "Instantaneous",
	save: "Fort half",
	sr: "Yes",
	classes: {
		"Druid": 5,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "This spell withers a single plant of any size. An affected plant creature takes 1d6 points of damage per level (maximum 15d6) and may attempt a Fortitude saving throw for half damage. A plant that isn't a creature (such as a tree or shrub) doesn't receive a save and immediately withers and dies. <p class=sub>This spell has no effect on the soil or surrounding plant life.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b518"
}, {
	name: "Blindness / Deafness",
	summary: "Makes target blind or deaf",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "One living creature",
	duration: "Permanent (D)",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Cleric": 4,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "You call upon the powers of unlife to render the subject blinded or deafened, as you choose.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "38fa"
}, {
	name: "Blink",
	summary: "Randomly vanish and reappear",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "Like a blink dog (see the <i>Monster Manual</i>), you 'blink' back and forth between the Material Plane and the Ethereal Plane. You look as though you're winking in and out of reality very quickly and at random. <p class=sub><i>Blinking</i> has several effects, as follows. <p class=sub>Physical attacks against you have a 50% miss chance, and the Blind-Fight feat doesn't help opponents, since you're ethereal and not merely invisible. If the attack is capable of striking ethereal creatures, the miss chance is only 20% (for concealment). If the attacker can see invisible creatures, the miss chance is also only 20%. (For an attacker who can both see and strike ethereal creatures, there is no miss chance.) Likewise, your own attacks have a 20% miss chance, since you sometimes go ethereal just as you are about to strike. <p class=sub>Any individually targeted spell has a 50% chance to fail against you while you're <i>blinking</i> unless your attacker can target invisible, ethereal creatures. Your own spells have a 20% chance to activate just as you go ethereal, in which case they typically do not affect the Material Plane. <p class=sub>While <i>blinking</i>, you take only half damage from area attacks (but full damage from those that extend onto the Ethereal Plane). You strike as an invisible creature (with a +2 bonus on attack rolls), denying your target any Dexterity bonus to AC. You take only half damage from falling, since you fall only while you are material. <p class=sub>While <i>blinking</i>, you can step through (but not see through) solid objects. For each 5 feet of solid material you walk through, there is a 50% chance that you become material. If this occurs, you are shunted off to the nearest open space and take 1d6 points of damage per 5 feet so traveled. You can move at only three-quarters speed (because movement on the Ethereal Plane is at half speed, and you spend about half your time there and half your time material.) <p class=sub>Since you spend about half your time on the Ethereal Plane, you can see and even attack ethereal creatures. You interact with ethereal creatures roughly the same way you interact with material ones. For instance, your spells against ethereal creatures are 20% likely to activate just as you go material and be lost. <p class=sub>An ethereal creature is invisible, incorporeal, and capable of moving in any direction, even up or down. As an incorporeal creature, you can move through solid objects, including living creatures. An ethereal creature can see and hear the Material Plane, but everything looks gray and insubstantial. Sight and hearing on the Material Plane are limited to 60 feet. Force effects (such as <i>magic missile</i> and <i>wall of force</i>) and abjurations affect you normally. Their effects extend onto the Ethereal Plane from the Material Plane, but not vice versa. An ethereal creature can't attack material creatures, and spells you cast while ethereal affect only other ethereal things. Certain material creatures or objects have attacks or effects that work on the Ethereal Plane (such as the basilisk and its gaze attack. Treat other ethereal creatures and objects as material.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9a73"
}, {
	name: "Blur",
	summary: "Attacks miss target 20% of time",
	school: "Illus",
	composition: "V",
	time: "1 a",
	range: "Touch",
	effect: "Concealment",
	duration: "1 min/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "The subject's outline appears blurred, shifting and wavering. This distortion grants the subject concealment (20% miss chance). <p class=sub>A see <i>invisibility</i> spell does not counteract the <i>blur</i> effect, but a <i>true seeing</i> spell does. <p class=sub>Opponents that cannot see the subject ignore the spell's effect (though fighting an unseen opponent carries penalties of its own; see page 151).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "dd87"
}, {
	name: "Break Enchantment",
	summary: "Frees target from enchantments",
	school: "Abjur",
	composition: "V, S",
	time: "1 min",
	range: "Close",
	effect: "Creature/lvl in 30-ft",
	duration: "Instantaneous",
	save: "Special",
	sr: "-",
	classes: {
		"Bard": 5,
		"Cleric": 6,
		"Paladin": 4,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "This spell frees victims from enchantments, transmutations, and curses. <i>Break enchantment</i> can reverse even an instantaneous effect, such as <i>flesh to stone</i>. For each such effect, you make a caster level check (1d20 + caster level, maximum +15) against a DC of 11 + caster level of the effect. Success means that the creature is free of the spell, curse, or effect. For a cursed magic item, the DC is 25. <p class=sub>If the spell is one that cannot be dispelled by <i>dispel magic</i>, <i>break enchantment</i> works only if that spell is 5th level or lower. For instance, <i>bestow curse</i> cannot be dispelled by <i>dispel magic</i>, but <i>break enchantment</i> can dispel it. <p class=sub>If the effect comes from some permanent magic item, such as a cursed sword, <i>break enchantment</i> does not remove the curse from the item, but it does frees the victim from the item's effects. For example, a cursed item can change the alignment of its user. <i>Break enchantment</i> allows the victim to be rid of the item and negates the alignment change, but the item's curse is intact and affects the next creature to pick up the item&emdash;even if it's the recent recipient of the <i>break enchantment</i> spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b1ba"
}, {
	name: "Breath of Life",
	school: "Conj (healing)",
	classes: {
		Cleric: 5
	},
	time: "1 a",
	composition: "V, S",
	range: "Touch",
	effect: "One creature",	
	save: "Will negs",
	sr: "Yes",
	duration: "instantaneous",
	description: "This spell cures 5d8 points of damage + 1 point per caster level (maximum +25). <p class=sub>Unlike other spells that heal damage, <i>breath of life</i> can bring recently slain creatures back to life. If cast upon a creature that has died within 1 round, apply the healing from this spell to the creature. If the healed creature&emdash;s hit point total is at a negative amount less than its Constitution score, it comes back to life and stabilizes at its new hit point total. If the creature&emdash;s hit point total is at a negative amount equal to or greater than its Constitution score, the creature remains dead. Creatures brought back to life through <i>breath of life</i> gain a temporary negative level that lasts for 1 day.<p class=sub>Creatures slain by death effects cannot be saved by <i>breath of life</i>.<p class=sub>Like cure spells, <i>breath of life</i> deals damage to undead creatures rather than curing them, and cannot bring them back to life.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1401"
}, {
	name: "Bull's Strength",
	summary: "+4 Str",
	school: "Trans",
	composition: "V, S, M/DF (A few hairs, or a pinch of dung, from a bull)",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 3,
		"Druid": 3,
		"Paladin": 2,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "The subject becomes stronger. The spell grants a +4 enhancement bonus to Strength, adding the usual benefits to melee attack rolls, melee damage rolls, and other uses of the Strength modifier.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c1d3"
}, {
	name: "Bull's Strength, Mass",
	summary: "+4 Str to 1 creature/lvl",
	school: "Trans",
	composition: "V, S, M/DF",
	time: "1 a",
	range: "Close",
	effect: "Creature/lvl in 30-ft",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 7,
		"Druid": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This spell functions like <i>bull's strength</i>, except that it affects multiple creatures.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "727d"
}, {
	name: "Burning Hands",
	summary: "1d4 fire dmg/lvl (5d4)",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "15-ft",
	effect: "Cone",
	duration: "Instantaneous",
	save: "Ref half",
	sr: "Yes",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "A cone of searing flame shoots from your fingertips. Any creature in the area of the flames takes 1d4 points of fire damage per caster level (maximum 5d4). Flammable materials, such as cloth, paper, parchment, and thin wood burn if the flames touch them. A character can extinguish burning items as a full-round action.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7e53"
}, {
	name: "Call Lightning",
	summary: "Lightning Bolt 3d6 (3d10 in storms)",
	school: "Evoc",
	composition: "V, S",
	time: "Round",
	range: "Medium",
	effect: "Vertical bolt/lvl (10)",
	duration: "1 min/lvl",
	save: "Ref half",
	sr: "Yes",
	classes: {
		"Druid": 4
	},
	description: "Immediately upon completion of the spell, and once per round thereafter, you may call down a 5-foot-wide, 30-foot-long, vertical bolt of lightning that deals 3d6 points of electricity damage. The bolt of lightning flashes down in a vertical stroke at whatever target point you choose within the spell's range (measured from your position at the time). Any creature in the target square or in the path of the bolt is affected. <p class=sub>You need not call a bolt of lightning immediately; other actions, even spell-casting, can be performed. However, each round after the first you may use a standard action (concentrating on the spell) to call a bolt. You may call a total number of bolts equal to your caster level (maximum 10 bolts). <p class=sub>If you are outdoors and in a stormy area&emdash;a rain shower, clouds and wind, hot and cloudy conditions, or even a tornado (including a whirlwind formed by a djinni or an air elemental of at least Large size; see the <i>Monster Manual</i>)&emdash;each bolt deals 3d10 points of electricity damage instead of 3d6. <p class=sub>This spell functions indoors or underground but not underwater.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "815b"
}, {
	name: "Call Lightning Storm",
	summary: "Lightning Bolt 5d6 (5d10 in storms)",
	school: "Evoc",
	composition: "V, S",
	time: "Round",
	range: "Long",
	effect: "Vertical bolt/lvl (15)",
	duration: "1 min/lvl",
	save: "Ref half",
	sr: "Yes",
	classes: {
		"Druid": 6
	},
	description: "This spell functions like <i>call lightning</i>, except that each bolt deals 5d6 points of electricity damage (or 5d10 if created outdoors in a stormy area), and you may call a maximum of 15 bolts.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f41f"
}, {
	name: "Calm Animals",
	summary: "Calms 2d4+1/lvl HD of animals etc.",
	school: "Ench",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Animals in 30-ft",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Druid": 2,
		"Ranger": 1
	},
	description: "This spell soothes and quiets animals, ren-dering them docile and harmless. Only ordinary animals (those with Intelligence scores of 1 or 2) can be affected by this spell. All the subjects must be of the same kind, and no two may be more than 30 feet apart. The maximum number of Hit Dice of animals you can affect is equal to 2d4 + caster level. A dire animal or an animal trained to attack or guard is allowed a saving throw; other animals are not. (A druid could calm a normal bear or wolf with little trouble, but it's more difficult to affect a trained guard dog.) <p class=sub>The affected creatures remain where they are and do not attack or flee. They are not helpless and defend themselves normally if attacked. Any threat (such as fire, a hungry predator, or an imminent attack) breaks the spell on the threatened creatures.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "fc5d"
}, {
	name: "Calm Emotions",
	summary: "Calms 1d6/lvl targets",
	school: "Ench",
	composition: "V, S,DF",
	time: "1 a",
	range: "Medium",
	effect: "20-ft radius",
	duration: "Conc, 1 rnd/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Cleric": 3
	},
	description: "This spell calms agitated creatures. You have no control over the affected creatures, but <i>calm emotions</i> can stop raging creatures from fighting or joyous ones from reveling. Creatures so affected cannot take violent actions (although they can defend themselves) or do anything destructive. Any aggressive action against or damage dealt to a calmed creature immediately breaks the spell on all calmed creatures. <p class=sub>This spell automatically suppresses (but does not dispel) any morale bonuses granted by spells such as <i>bless</i>, <i>good hope</i>, and <i>rage</i>, as well as negating a bard's ability to inspire courage or a barbarian's rage ability. It also suppresses any fear effects and removes the <i>confused</i> condition from all targets. While the spell lasts, a suppressed spell or effect has no effect. When the <i>calm emotions</i> spell ends, the original spell or effect takes hold of the creature again, provided that its duration has not expired in the meantime.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9a8f"
}, {
	name: "Cat's Grace",
	summary: "+4 Dex",
	school: "Trans",
	composition: "V, S, M (a pinch of cat fur)",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Druid": 3,
		"Ranger": 2,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "The transmuted creature becomes more graceful, agile, and coordinated. The spell grants a +4 enhancement bonus to Dexterity, adding the usual benefits to AC, Reflex saves, and other uses of the Dexterity modifier.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a0df"
}, {
	name: "Cat's Grace, Mass",
	summary: "+4 Dex to 1 creature/lvl",
	school: "Trans",
	composition: "V, S, M",
	time: "1 a",
	range: "Touch",
	effect: "Creature/lvl in 30-ft",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 7,
		"Druid": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This spell functions like cat<i>'s grace</i>, except <p class=sub>that it affects multiple creatures.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "dd75"
}, {
	name: "Cause Fear",
	summary: "Creature frightened or shaken 1 rnd",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "One living creature",
	duration: "1d4 rnds",
	save: "Will part",
	sr: "Yes",
	classes: {
		"Bard": 2,
		"Cleric": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "The affected creature becomes frightened. If the subject succeeds on a Will save, it is shaken for 1 round. Creatures with 6 or more Hit Dice are immune to this effect. <p class=sub><i>Cause fear</i> counters and dispels <i>remove fear</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "29a"
}, {
	name: "Chain Lightning",
	summary: "1d6 damage/level, secondary bolts",
	school: "Evoc",
	composition: "V, S, F (a bit of fur; a piece of amber, glass, or a crystal rod; plus one silver pin for each of your caster levels)",
	time: "1 a",
	range: "Long",
	effect: "Primary,secondary/lvl",
	duration: "Instantaneous",
	save: "Ref half",
	sr: "Yes",
	classes: {
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This spell creates an electrical discharge that begins as a single stroke commencing from your fingertips. Unlike <i>lightning bolt</i>, <i>chain lightning</i> strikes one object or creature initially, then arcs to other targets. <p class=sub>The bolt deals 1d6 points of electricity damage per caster level (maximum 20d6) to the primary target. After it strikes, lightning can arc to a number of secondary targets equal to your caster level (maximum 20). The secondary bolts each strike one target and deal half as much damage as the primary one did (rounded down). For example, a 19th-level sorcerer generates a primary bolt (19d6 points of damage) and as many as nineteen secondary bolts (each of which deals half as much as the primary bolt dealt). Each target can attempt a Reflex saving throw for half damage. You choose secondary targets as you like, but they must all be within 30 feet of the primary target, and no target can be struck more than once. You can choose to affect fewer secondary targets than the maximum (to avoid allies in the area, for example).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1d45"
}, {
	name: "Changestaff",
	summary: "Your staff becomes a treant",
	school: "Trans",
	composition: "V, S, F (the quarterstaff, which must be specially prepared)",
	time: "Round",
	range: "Touch",
	effect: "Staff",
	duration: "1 hr/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 8
	},
	description: "You change a specially prepared quarterstaff into a Huge treantlike creature, about 24 feet tall. When you plant the end of the staff in the ground and speak a special command to conclude the casting of the spell, your staff turns into a creature that looks and fights just like a treant (see the <i>Monster Manual</i>). The staff-treant defends you and obeys any spoken commands. However, it is by no means a true treant; it cannot converse with actual treants or control trees. If the staff-treant is reduced to 0 or fewer hit points, it crumbles to powder and the staff is destroyed. Otherwise, the staff returns to its normal form when the spell duration expires (or when the spell is dismissed), and it can be used as the focus for another casting of the spell. The staff-treant is always at full strength when created, despite any wounds it may have incurred the last time it appeared.  The staff must be a sound limb cut from an ash, oak, or yew, then cured, shaped, carved, and polished (a process requiring twenty-eight days). You cannot adventure or engage in other strenuous activity during the shaping and carving of the staff.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "81e7"
}, {
	name: "Chaos Hammer",
	summary: "Hammer deals 1d8/2lvl to law/ntrl",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "20-ft radius",
	duration: "Instantaneous",
	save: "Will part",
	sr: "Yes",
	classes: {},
	description: "You unleash chaotic power to smite your enemies. The power takes the form of a multicolored explosion of leaping, ricocheting energy. Only lawful and neutral (not chaotic) creatures are harmed by the spell. <p class=sub>The spell deals 1d8 points of damage per two caster levels (maximum 5d8) to lawful creatures (or 1d6 points of damage per caster level, maximum 10d6, to lawful outsiders) and slows them for 1d6 rounds. A slowed creature can take only a single standard action or move action on each of its turns, plus free actions as normal. In addition, it takes a -2 penalty to AC, attack rolls, damage rolls, and Reflex saves. A successful Will save reduces the damage by half and negates the slow effect. <p class=sub>The spell deals only half damage against creatures who are neither lawful nor chaotic, and they are not slowed. Such a creature can reduce the damage by half again (down to one-quarter) with a successful Will save.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e59d"
}, {
	name: "Charm Animal",
	summary: "Makes animal your friend",
	school: "Ench",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Person or animal",
	duration: "1 hr/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Druid": 2,
		"Ranger": 1
	},
	description: "This spell functions like <i>charm person</i>, except that it affects a creature of the animal type. See the <i>Monster Manual</i> for more information on creature types.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5ae6"
}, {
	name: "Charm Monster",
	summary: "Monster believes you are allied",
	school: "Ench",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "One living creature",
	duration: "1 day/lvl",
	save: "Will negs",
	sr: "Yes",
	phb: "209", tags: ["pathfinder"], _id: "3a84",   
	classes: {
		"Bard": 4,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "This spell functions like <i>charm person</i>, except that the effect is not restricted by creature type or size.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8a0"
}, {
	name: "Charm Monster, Mass",
	summary: "Monsters believe you are allied 2HD/lv",
	school: "Ench",
	composition: "V",
	time: "1 a",
	range: "Close",
	effect: "Creatures in 30-ft",
	duration: "1 day/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 7,
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "This spell functions like <i>charm monster</i>, except that <i>mass charm monster</i> affects a number of creatures whose combined HD do not exceed twice your level, or at least one creature regardless of HD. If there are more potential targets than you can affect, you choose them one at a time until you choose a creature with too many HD.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ff10"
}, {
	name: "Charm Person",
	summary: "Makes one person your friend",
	school: "Ench",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "1 person",
	duration: "1 hr/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "This charm makes a humanoid creature regard you as its trusted friend and ally (treat the target's attitude as friendly; see Influencing NPC Attitudes, page 72). If the creature is currently being threatened or attacked by you or your allies, however, it receives a +5 bonus on its saving throw. <p class=sub>The spell does not enable you to control the <i>charmed person</i> as if it were an automaton, but it perceives your words and actions in the most favorable way. You can try to give the subject orders, but you must win an opposed Charisma check to convince it to do anything it wouldn't ordinarily do. (Retries are not allowed.) An affected creature never obeys suicidal or obviously harmful orders, but a charmed fighter, for example, might believe you if you assured him that the only chance to save your life is for him to hold back an onrushing red dragon for 'just a few seconds.' Any act by you or your apparent allies that threatens the charmed person breaks the spell. You must speak the person's language to communicate your commands, or else be good at pantomiming.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "928c"
}, {
	name: "Chill Metal",
	summary: "Cold metal damages if touched",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Close",
	effect: "Creat/2 lvls / 25 lb/lvl",
	duration: "7 rounds",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Druid": 3
	},
	description: "<i>Chill metal</i> makes metal extremely cold. Unattended, nonmagical metal gets no saving throw. Magical metal is allowed a saving throw against the spell (Magic item's saving throws are covered in the <i>Dungeon Master's Guide</i>.) An item in a creature's possession uses the creature's saving throw bonus unless its own is higher. <p class=sub>A creature takes cold damage if its equipment is chilled. It takes full damage if its armor is affected or if it is holding, touching, wearing, or carrying metal weighing one-fifth of its weight. The creature takes minimum damage (1 point or 2 points; see the table) if it's not wearing metal armor and the metal that it's carrying weighs less than one-fifth of its weight. <p class=sub>On the first round of the spell, the metal becomes chilly and uncomfortable to touch but deals no damage. The same effect also occurs on the last round of the spell's duration. During the second (and also the next-to-last) round, icy coldness causes pain and damage. In the third, fourth, and fifth rounds, the metal is freezing cold, causing more damage, as shown on the table below. <p class=sub><table><p class=sub><tr class=header><td>Round</td><td>Metal Temperature</td><td>Damage</td></tr> <p class=sub><tr><td>1</td><td>Cold</td><td>None</td></tr> <p class=sub><tr><td>2</td><td>Icy</td><td>1d4 points</td></tr><p class=sub><tr><td>3-5</td><td>Freezing</td><td>2d4 points</td></tr> <p class=sub><tr><td>6</td><td>Icy</td><td>1d4 points</td></tr> <p class=sub><tr><td>7</td><td>Cold</td><td>None</td></tr> <p class=sub></table> <p class=sub>Any heat intense enough to damage the creature negates cold damage from the spell (and vice versa) on a point-for-point basis. For example, if the damage roll from a <i>chill metal</i> spell indicates 5 points of cold damage and the subject plunges through a <i>wall of fire </i>in the same round and takes 8 points of fire damage, it winds up taking no cold damage and only 3 points of fire damage. Underwater, <i>chill metal</i> deals no damage, but ice immediately forms around the affected metal, making it more buoyant. <p class=sub><i>Chill metal</i> counters and dispels <i>heat metal</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6867"
}, {
	name: "Chill Touch",
	summary: "1 touch/lvl deals 1d6 dmg, -1 Str",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature/lvl",
	duration: "Instantaneous",
	save: "Fort part",
	sr: "Yes",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "A touch from your hand, which glows with blue energy, disrupts the life force of living creatures. Each touch channels negative energy that deals 1d6 points of damage. The touched creature also takes 1 point of Strength damage unless it makes a successful Fortitude saving throw. You can use this melee touch attack up to one time per level. <p class=sub>An undead creature you touch takes no damage of either sort, but it must make a successful Will saving throw or flee as if panicked for 1d4 rounds +1 round per caster level.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "41e5"
}, {
	name: "Circle of Death",
	summary: "Kills 1d4 HD/level",
	school: "Necro",
	composition: "V, S, M (powder of a crushed black pearl with a minimum value of 500 gp)",
	time: "1 a",
	range: "Medium",
	effect: "40-ft radius",
	duration: "Instantaneous",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "A <i>circle of death</i> snuffs out the life force of living creatures, killing them instantly. <p class=sub>The spell slays 1d4 HD worth of living creatures per caster level (maximum 20d4). Creatures with the fewest HD are affected first; among creatures with equal HD, those who are closest to the burst's point of origin are affected first. No creature of 9 or more HD can be affected, and Hit Dice that are not sufficient to affect a creature are wasted.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5ae6"
}, {
	name: "Clairaudience / Clairvoyance",
	summary: "Hear or see at a distance, 1 min/lvl",
	school: "Div",
	composition: "V, S,F/DF",
	time: "10 min",
	range: "Long",
	effect: "Magical sensor",
	duration: "1 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "<i>Clairaudience/clairvoyance</i> creates an invisible magical sensor at a specific location that enables you to hear or see (your choice) almost as if you were there. You don't need line of sight or line of effect, but the locale must be known&emdash;a place familiar to you or an obvious one, such as behind a door, around a corner, or in a grove of trees. Once you have selected the locale, the sensor doesn't move, but you can rotate it in all directions to view the area as desired. Unlike other scrying spells, this spell does not allow magically or supernaturally enhanced senses to work through it. If the chosen locale is magically dark, you see nothing. If it is naturally pitch black, you can see in a 10-foot radius around the center of the spell's effect. Clairaudience/clairvoyance functions only on the plane of existence you are currently occupying. <p class=sub><i>Arcane Focus</i>: A small horn (for hearing) or a glass eye (for seeing).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "271f"
}, {
	name: "Clenched Fist",
	school: "Evoc [force]",
	composition: "V, S, F/DF (a leather glove)",
	classes: {
		Sorceror: 8,
		Wizard: 8
	},
	description: "This spell functions like <i>interposing hand</i>, except that the hand can also push or strike one opponent that you select. The floating hand can move as far as 60 feet and can attack in the same round. Since this hand is directed by you, its ability to notice or attack invisible or concealed creatures is no better than yours.<p class=sub>The hand attacks once per round, and its attack bonus equals your caster level + your Intelligence, Wisdom, or Charisma modifier (for a wizard, cleric, or sorcerer, respectively) + 11 for the hand&emdash;s Strength score (33), &emdash; 1 for being Large. The hand deals 1d8+11 points of damage on each attack, and any creature struck must make a Fortitude save (against this spell&emdash;s save DC) or be stunned for 1 round. Directing the spell to a new target is a move action.<p class=sub>The <i>clenched fist</i> can also interpose itself as <i>interposing hand</i> does, or it can bull rush an opponent as <i>forceful hand</i> does. Its CMB for bull rush checks uses your caster level in place of its base attack bonus, with a +11 bonus for its Strength score and a +1 bonus for being Large.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "487a"
}, {
	name: "Cloak of Chaos",
	summary: "+4 AC, +4 rest, SR 25 vs lawful",
	school: "Abjur",
	composition: "V, S, F (a tiny reliquary containing some sacred relic, such as a scrap of parchment from a chaotic text)",
	time: "1 a",
	range: "20-ft",
	effect: "1/lvl in 20-ft radius",
	duration: "1 rnd/lvl (D)",
	save: "Special",
	sr: "Yes",
	classes: {
		"Cleric": 9
	},
	description: "A random pattern of color surrounds the subjects, protecting them from attacks, granting them resistance to spells cast by lawful creatures, and causing lawful creatures that strike the subjects to become confused. This abjuration has four effects. <p class=sub>First, each warded creature gains a +4 deflection bonus to AC and a +4 resistance bonus on saves. Unlike <i>protection from law</i>, the benefit of this spell applies against all attacks, not just against attacks by lawful creatures. <p class=sub>Second, each warded creature gains spell resistance 25 against lawful spells and spells cast by lawful creatures. <p class=sub>Third, the abjuration blocks possession and mental influence, just as <i>protection from law</i> does. <p class=sub>Finally, if a lawful creature succeeds on a melee attack against a warded creature, the offending attacker is <i>confused</i> for 1 round (Will save negates, as with the <i>confusion</i> spell, but against the save DC of <i>cloak of chaos</i>).  The reliquary costs at least 500 gp.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "835e"
}, {
	name: "Clone",
	summary: "Clone awakens when original dies",
	school: "Necro",
	composition: "V, S, M (the piece of flesh and various laboratory supplies: cost 1,000 gp), F (special laboratory equipment: cost 500 gp)",
	time: "10 min",
	range: "0 ft",
	effect: "One clone",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "This spell makes an inert duplicate of a creature. If the original individual has been slain, its soul immediately transfers to the clone, creating a replacement (provided that the soul is free and willing to return; see Bringing Back the Dead, page 171). The original's physical remains, should they still exist, become inert and cannot thereafter be restored to life. If the original creature has reached the end of its natural life span (that is, it has died of natural causes), any cloning attempt fails. <p class=sub>To create the duplicate, you must have a piece of flesh (not hair, nails, scales, or the like) with a volume of at least 1 cubic inch that was taken from the original creature's living body. The piece of flesh need not be fresh, but it must be kept from rotting (for example, by the <i>gentle repose</i> spell). Once the spell is cast, the duplicate must be grown in a laboratory for 2d4 months. <p class=sub>When the clone is completed, the original's soul enters it immediately, if that creature is already dead. The clone is physically identical with the original and possesses the same personality and memories as the original. In other respects, treat the clone as if it were the original character raised from the dead, including the loss of one level or 2 points of Constitution (if the original was a 1st-level character). If this Constitution adjustment would give the clone a Constitution score of 0, the spell fails. If the original creature has lost levels since the flesh sample was taken and died at a lower level than the clone would otherwise be, the clone is one level below the level at which the original died. <p class=sub>The spell duplicates only the original's body and mind, not its equipment. <p class=sub>A duplicate can be grown while the original still lives, or when the original soul is unavailable, but the resulting body is merely a soulless bit of inert flesh, which rots if not preserved.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "63a6"
}, {
	name: "Cloudkill",
	summary: "Kills 1-3 HD, 4-6 HD Fort save / die",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "20-ft radius",
	duration: "1 min/lvl",
	save: "Special",
	sr: "No",
	classes: {
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "This spell generates a bank of fog, similar to a <i>fog cloud</i>, except that its vapors are yellowish green and poisonous. These vapors automatically kill any living creature with 3 or fewer HD (no save). A living creature with 4 to 6 HD is slain unless it succeeds on a Fortitude save (in which case it takes 1d4 points of Constitution damage on your turn each round while in the cloud). A living creature with 6 or more HD takes 1d4 points of Constitution damage on your turn each round while in the cloud (a successful Fortitude save halves this damage). Holding one's breath doesn't help, but creatures immune to poison are unaffected by the spell. <p class=sub>Unlike a <i>fog cloud</i>, the <i>cloudkill</i> moves away from you at 10 feet per round, rolling along the surface of the ground. Figure out the cloud's new spread each round based on its new point of origin, which is 10 feet farther away from the point of origin where you cast the spell. <p class=sub>Because the vapors are heavier than air, they sink to the lowest level of the land, even pouring down den or sinkhole openings; thus, the spell is ideal for slaying hives of giant ants, for example. It cannot penetrate liquids, nor can it be cast underwater.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d559"
}, {
	name: "Color Spray",
	summary: "Knocks unconscious etc. 1d6 creats",
	school: "Illus",
	composition: "V, S, M (pinch each of powder or sand that is colored red, yellow, and blue)",
	time: "1 a",
	range: "15-ft",
	effect: "Cone",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",				  
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "A vivid cone of clashing colors springs forth from your hand, causing creatures to become stunned, perhaps also blinded, and possibly knocking them unconscious. Each creature within the cone is affected according to its Hit Dice. <p class=sub><i>2 HD or less</i>: The creature is unconscious, blinded, and stunned for 2d4 rounds, then blinded and stunned for 1d4 rounds, and then stunned for 1 round. (Only living creatures are knocked unconscious.) <p class=sub><i>3 or 4 HD</i>: The creature is blinded and stunned for 1d4 rounds, then stunned for 1 round. <p class=sub><i>5 or more HD</i>: The creature is stunned for 1 round. <p class=sub>Sightless creatures are not affected by <i>color spray</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "95e9"
}, {
	name: "Command",
	summary: "One target obeys command 1 rnd",
	school: "Ench",
	composition: "V",
	time: "1 a",
	range: "Close",
	effect: "One living creature",
	duration: "1 round",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 2
	},
	description: "You give the subject a single command, which it obeys to the best of its ability at its earliest opportunity. You may select from the following options. <p class=sub><i>Approach</i>: On its turn, the subject moves toward you as quickly and directly as possible for 1 round. The creature may do nothing but move during its turn, and it provokes attacks of opportunity for this movement as normal. <p class=sub><i>Drop</i>: On its turn, the subject drops whatever it is holding. It can't pick up any dropped item until its next turn. <p class=sub><i>Fall</i>: On its turn, the subject falls to the ground and remains prone for 1 round. It may act normally while prone but takes any appropriate penalties. <p class=sub><i>Flee</i>: On its turn, the subject moves away from you as quickly as possible for 1 round. It may do nothing but move during its turn, and it provokes attacks of opportunity for this movement as normal. <p class=sub><i>Halt</i>: The subject stands in place for 1 round. It may not take any actions but is not considered helpless. <p class=sub>If the subject can't carry out your command on its next turn, the spell automatically fails.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f9ce"
}, {
	name: "Command, Greater",
	summary: "One target obeys command 1 rnd",
	school: "Ench",
	composition: "V",
	time: "1 a",
	range: "Close",
	effect: "Creature/lvl in 30-ft",
	duration: "1 rnd/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 6
	},
	description: "This spell functions like <i>command</i>, except that up to one creature per level may be affected, and the activities continue beyond 1 round. At the start of each commanded creature's action after the first, it gets another Will save to attempt to break free from the spell. Each creature must receive the same command.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "df45"
}, {
	name: "Command Plants",
	summary: "Plants animate and entangle",
	school: "Trans",
	composition: "V",
	time: "1 a",
	range: "Close",
	effect: "2 HD/lvl in 30-ft",
	duration: "1 day/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Druid": 5,
		"Ranger": 3
	},
	description: "This spell allows you some degree of control over one or more plant creatures. Affected plant creatures can understand you, and they perceive your words and actions in the most favorable way (treat their attitude as friendly). They will not attack you while the spell lasts. You can try to give a subject orders, but you must win an opposed Charisma check to convince it to do anything it wouldn't ordinarily do. (Retries are not allowed.) A commanded plant never obeys suicidal or obviously harmful orders, but it might be convinced that something very dangerous is worth doing (see charm person). <p class=sub>You can affect a number of plant creatures whose combined level or HD do not exceed twice your level.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8d4a"
}, {
	name: "Command Undead",
	summary: "Control undead creatures",
	school: "Necro",
	composition: "V, S, M (shred of raw meat and a splinter of bone)",
	time: "1 a",
	range: "Close",
	effect: "One undead creature",
	duration: "1 day/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "This spell allows you some degree of control over an undead creature. Assuming the subject is intelligent, it perceives your words and actions in the most favorable way (treat its attitude as friendly). It will not attack you while the spell lasts. You can try to give the subject orders, but you must win an opposed Charisma check to convince it to do anything it wouldn't ordinarily do. (Retries are not allowed.) An intelligent commanded undead never obeys suicidal or obviously harmful orders, but it might be convinced that something very dangerous is worth doing (see <i>charm person</i>). <p class=sub>A nonintelligent undead creature (such as a skeleton or zombie) gets no saving throw against this spell. When you control a mindless being, you can communicate only basic commands, such as 'come here,' 'go there,' 'fight,' 'stand still,' and so on. Nonintelligent undead won't resist suicidal or obviously harmful orders. <p class=sub>Any act by you or your apparent allies that threatens the commanded undead (regardless of its Intelligence) breaks the spell. <p class=sub>Your commands are not telepathic. The undead creature must be able to hear you.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7acd"
}, {
	name: "Commune",
	summary: "Deity answers 1 y/n-question/level",
	school: "Div",
	composition: "V, S, M (Holy (or unholy) water and incense), DF, XP (100 XP)",
	time: "P 10 min",
	range: "Self",
	effect: "Caster",
	duration: "1 rnd/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 6
	},
	description: "You contact your deity&emdash;or agents thereof &emdash;and ask questions that can be answered by a simple yes or no. (A cleric of no particular deity contacts a philosophically allied deity.) You are allowed one such question per caster level. The answers given are correct within the limits of the entity's knowledge. 'Unclear' is a legitimate answer, because powerful beings of the Outer Planes are not necessarily omniscient. In cases where a one-word answer would be misleading or contrary to the deity's interests, the DM should give a short phrase (five words or less) as an answer instead. <p class=sub>The spell, at best, provides information to aid character decisions. The entities contacted structure their answers to further their own purposes. If you lag, discuss the answers, or go off to do anything else, the spell ends.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d3c3"
}, {
	name: "Commune with Nature",
	summary: "Learn about terrain for 1 mile/level",
	school: "Div",
	composition: "V, S",
	time: "10 min",
	range: "Self",
	effect: "Caster",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 6,
		"Ranger": 4
	},
	description: "You become one with nature, attaining knowledge of the surrounding territory. You instantly gain knowledge of as many as three facts from among the following subjects: the ground or terrain, plants, minerals, bodies of water, people, general animal population, presence of woodland creatures, presence of powerful unnatural creatures, or even the general state of the natural setting. For example, you could determine the location of any powerful undead creatures, the location of all major sources of safe drinking water, and the location of any buildings (which register as blind spots). <p class=sub>In outdoor settings, the spell operates in a radius of 1 mile per caster level. In natural underground settings&emdash;caves, caverns, and the like&emdash;the radius is limited to 100 feet per caster level. The spell does not function where nature has been replaced by construction or settlement, such as in dungeons and towns.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1ecc"
}, {
	name: "Comprehend Languages",
	summary: "Understands all languages",
	school: "Div",
	composition: "V, S, M/DF (pinch of soot and a few grains of salt)",
	time: "1 a",
	range: "Self",
	effect: "250 words/min",
	duration: "10 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 2,
		"Cleric": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "You can understand the spoken words of creatures or read otherwise incomprehensible written messages. In either case, you must touch the creature or the writing. The ability to read does not necessarily impart insight into the material, merely its literal meaning. The spell enables you to understand or read an unknown language, not speak or write it. <p class=sub>Written material can be read at the rate of one page (250 words) per minute. Magical writing cannot be read, though the spell reveals that it is magical, but <i>comprehend languages</i> is often useful when deciphering treasure maps. This spell can be foiled by certain warding magic (such as the <i>secret page</i> and <i>illusory script</i> spells). It does not decipher codes or reveal messages concealed in otherwise normal text. <p class=sub><i>Comprehend languages</i> can be made permanent with a permanency spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ab0c"
}, {
	name: "Cone of Cold",
	summary: "1d6 cold damage/lvl (15d6)",
	school: "Evoc",
	composition: "V, S, M/DF (a very small crystal or glass cone)",
	time: "1 a",
	range: "60-ft",
	effect: "Cone",
	duration: "Instantaneous",
	save: "Ref half",
	sr: "Yes",
	classes: {
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "<i>Cone of cold</i> creates an area of extreme cold, originating at your hand and extending outward in a cone. It drains heat, dealing 1d6 points of cold damage per caster level (maximum 15d6).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d939"
}, {
	name: "Confusion",
	summary: "Targets become confused, 1 rnd/lvl",
	school: "Ench",
	composition: "V, S, M/DF (set of three nut shells)",
	time: "1 a",
	range: "Medium",
	effect: "Creatures in 15-ft",
	duration: "1 rnd/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 4,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "This spell causes the targets to become <i>confused</i>, making them unable to independently determine what they will do. <p class=sub>Roll on the following table at the beginning of each subject's turn each round to see what the subject does in that round. <table><tr class=header><td>d%</td><td>Behavior</td></tr><tr><td>01-10</td><td>Attack caster with melee or ranged weapons (or close with caster if attack is not possible).</td></tr><tr><td>11-20</td><td>Act normally.</td></tr><tr><td>21-50</td><td>Do nothing but babble incoherently.</td></tr><tr><td>51-70</td><td>Flee away from caster at top possible speed.</td></tr><tr><td>71-100</td><td>Attack nearest creature (for this purpose, a familiar counts as part of the subject's self).</td></tr></table><p class=sub>A <i>confused</i> character who can't carry out the indicated action does nothing but babble incoherently. Attackers are not at any special advantage when attacking a <i>confused</i> character. Any confused character who is attacked automatically attacks its attackers on its next turn, as long as it is still <i>confused</i> when its turn comes. Note that a <i>confused</i> character will not make attacks of opportunity against any creature that it is not already devoted to attacking (either because of its most recent action or because it has just been attacked).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b24"
}, {
	name: "Confusion, Lesser",
	summary: "Target becomes confused, 1 rnd/lvl",
	school: "Ench",
	composition: "V, S,DF",
	time: "1 a",
	range: "Close",
	effect: "One living creature",
	duration: "1 round",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 2
	},
	description: "This spell causes a single creature to become <i>confused</i> for 1 round. See the <i>confusion</i> spell, above, to determine the exact effect on the subject.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b066"
}, {
	name: "Consecrate",
	summary: "Fill area with positive energy",
	school: "Evoc",
	composition: "V, S, M, DF (vial of holy water and 25 gp worth (5 pounds) of silver dust, all of which must be sprinkled around the area)",
	time: "1 a",
	range: "Close",
	effect: "20-ft radius",
	duration: "2 hr/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 3
	},
	description: "This spell blesses an area with positive energy. Each Charisma check made to turn undead within this area gains a +3 sacred bonus. Every undead creature entering a consecrated area suffers minor disruption, giving it a -1 penalty on attack rolls, damage rolls, and saves. Undead cannot be created within or summoned into a consecrated area. <p class=sub>If the consecrated area contains an altar, shrine, or other permanent fixture dedicated to your deity, pantheon, or aligned higher power, the modifiers given above are doubled (+6 sacred bonus on turning checks, -2 penalties for undead in the area). You cannot consecrate an area with a similar fixture of a deity other than your own patron. <p class=sub>If the area does contain an altar, shrine, or other permanent fixture of a deity, pantheon, or higher power other than your patron, the <i>consecrate</i> spell instead curses the area, cutting off its connection with the associated deity or power. This secondary function, if used, does not also grant the bonuses and penalties relating to undead, as given above. <p class=sub>Consecrate counters and dispels <i>desecrate</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ebac"
}, {
	name: "Contact Other Plane",
	summary: "Ask question of extraplanar entity",
	school: "Div",
	composition: "V",
	time: "10 min",
	range: "Self",
	effect: "Caster",
	duration: "Concentrate",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "You send your mind to another plane of existence (an Elemental Plane or some plane farther removed) in order to receive advice and information from powers there. (See the accompanying table for possible consequences and results of the attempt.) The powers reply in a language you understand, but they resent such contact and give only brief answers to your questions. (The DM answers all questions with 'yes,' 'no,' 'maybe,' 'never,' 'irrelevant,' or some other one-word answer.) You must concentrate on maintaining the spell (a standard action) in order to ask questions at the rate of one per round. A question is answered by the power during the same round. For every two caster levels, you may ask one question. <p class=sub>Contact with minds far removed from your home plane increases the probability that you will incur a decrease to Intelligence and Charisma, but the chance of the power knowing the answer, as well as the probability of the entity answering correctly, are likewise increased by moving to distant planes. Once the Outer Planes are reached, the power of the deity contacted determines the effects. (Random results obtained from the table are subject to DM changes, the personalities of individual deities, and so on.) <p class=sub>On rare occasions, this divination may be blocked by an act of certain deities or forces.<table><tr class=header><td>Plane Contacted</td><td>Avoid Int/Cha Decrease</td><td>True Answer</td><td>Don't Know</td><td>Lie</td><td>Random Answer</td></tr><tr><td>Elemental Plane</td><td>DC 7/1 week</td><td>01-34</td><td>35-62</td><td>63-83</td> <td>84-100</td></tr> <tr><td>(appropriate)</td><td>(DC 7/1 week)</td><td>(01-68)</td><td>(69-75)</td><td>(76-98)</td><td>(99-100)</td></tr> <tr><td>Positive/Negative Energy Plane</td><td>DC 8/1 week</td><td>01-39</td><td>40-65</td><td>66-86</td><td>87-100</td></tr> <tr><td>Astral Plane</td><td>DC 9/1 week</td><td>01-44</td><td>45-67</td><td>68-88</td><td>89-100</td></tr> <tr><td>Outer Plane, demideity</td><td>DC 10/2 weeks</td><td>01-49</td><td>50-70</td><td>71-91</td><td>92-100</td></tr> <tr><td>Outer Plane, lesser deity</td><td>DC 12/3 weeks</td><td>01-60</td><td>61-75</td><td>76-95</td><td>96-100</td></tr> <tr><td>Outer Plane, intermediate deity</td><td>DC 14/4 weeks</td><td>01-73</td><td>74-81</td><td>82-98</td><td>99-100</td></tr> <tr><td>Outer Plane, greater deity</td><td>DC 16/5 weeks</td><td>01-88</td><td>89-90</td><td>91-99</td><td>100</td></tr></table> <p class=sub><i>Avoid Int/Cha Decrease</i>: You must succeed on an Intelligence check against this DC to avoid a decrease in Intelligence and Charisma. If the check fails, your Intelligence and Charisma scores each fall to 8 for the stated duration, and you become unable to cast arcane spells. If you lose Intelligence and Charisma, the effect strikes as soon as the first question is asked, and no answer is received. (The entries in parentheses are for questions that pertain to the appropriate Elemental Plane.) <p class=sub><b>Results of a Successful Contact</b>: d% is rolled for the result shown on the table: <p class=sub><i>True Answer</i>: You get a true, one-word answer. Questions that cannot be answered in this way are answered randomly. <p class=sub><i>Don't Know</i>: The entity tells you that it doesn't know. <p class=sub><i>Lie</i>: The entity intentionally lies to you. <p class=sub><i>Random Answer</i>: The entity tries to lie but doesn't know the answer, so it makes one up.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "46f4"
}, {
	name: "Contagion",
	summary: "Infects with chosen disease",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One living creature",
	duration: "Instantaneous",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Cleric": 4,
		"Druid": 4,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "The subject contracts a disease selected from the table below, which strikes immediately (no incubation period). The DC noted is for the subsequent saves (use contagion's normal save DC for the initial saving throw). <p class=sub><sup>1</sup> Each time a victim takes 2 or more points of Strength damage from blinding sickness, he or she must make another Fortitude save (using the disease's save DC) or be permanently blinded.<p><p class=sub>See the <i>Dungeon Master's Guide</i> for summarys of each disease, as well as for the general effects of disease.<table><tr class=header><td>Disease</td><td>DC</td><td>Damage</td></tr> <tr><td>Blinding sickness</td><td>16</td><td>1d4 Str<sup>1</sup></td></tr><tr><td>Cackle fever</td><td>16</td><td>1d6 Wis</td></tr> <tr><td>Filth fever</td><td>12</td><td>1d3 Dex and 1d3 Con</td></tr><tr><td>Mindfire</td><td>12</td><td>1d4 Int</td></tr> <tr><td>Red ache</td><td>15</td><td>1d6 Str</td></tr> <tr><td>Shakes</td><td>13</td><td>1d8 Dex</td></tr> <tr><td>Slimy doom</td><td>14</td><td>1d4 Con</td></tr> </table>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ec39"
}, {
	name: "Contingency",
	summary: "Sets trigger condition for spell",
	school: "Evoc",
	composition: "V, S, M (that of the companion spell, plus quicksilver and an eyelash of an ogre mage, rakshasa, or similar spell-using creature), F ( statuette of you carved from elephant ivory and decorated with gems (worth at least 1,500 gp). You must carry the focus for the contingency to work.)" ,
	time: "10 min",
	range: "Self",
	effect: "Caster",
	duration: "1 day/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "You can place another spell upon your person so that it comes into effect under some condition you dictate when casting <i>contingency</i>. The <i>contingency</i> spell and the companion spell are cast at the same time. The 10-minute casting time is the minimum total for both castings; if the companion spell has a casting time longer than 10 minutes, use that instead. <p class=sub>The spell to be brought into effect by the contingency must be one that affects your person (<i>feather fall</i>, <i>levitate</i>, <i>fly</i>, <i>teleport</i>, and so forth) and be of a spell level no higher than one-third your caster level (rounded down, maximum 6th level). <p class=sub>The conditions needed to bring the spell into effect must be clear, although they can be general. For example, a <i>contingency</i> cast with <i>water breathing</i> might prescribe that any time you are plunged into or otherwise engulfed in water or similar liquid, the <i>water breathing</i> spell instantly comes into effect. Or a <i>contingency</i> could bring a <i>feather fall</i> spell into effect any time you fall more than 4 feet. In all cases, the <i>contingency</i> immediately brings into effect the companion spell, the latter being 'cast' instantaneously when the prescribed circumstances occur. If complicated or convoluted conditions are prescribed, the whole spell combination (<i>contingency</i> and the companion magic) may fail whencalled on. The companion spell occurs based solely on the stated conditions, regardless of whether you want it to. <p class=sub>You can use only one contingency spell at a time; if a second is cast, the first one (if still active) is dispelled.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1eea"
}, {
	name: "Continual Flame",
	summary: "Permanent and heatless torch",
	school: "Evoc",
	composition: "V, S, M (you sprinkle ruby dust (worth 50 gp) on the item that is to carry the flame)",
	time: "1 a",
	range: "Touch",
	effect: "Magical flame",
	duration: "Permanent",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 4,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesn't use oxygen. A continual flame can be covered and hidden but not smothered or quenched. <p class=sub>Light spells counter and dispel darkness spells of an equal or lower level.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3600"
}, {
	name: "Control Plants",
	summary: "Talk and control plants and fungi",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Close",
	effect: "2 HD of plants/lvl",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "-",
	classes: {
		"Druid": 9
	},
	description: "This spell enables you to control the actions of one or more plant creatures for a short period of time. You command the creatures by voice and they understand you, no matter what language you speak. Even if vocal communication is impossible (in the area of a <i>silence</i> spell, for instance), the controlled plants do not attack you. At the end of the spell, the subjects revert to their normal behavior. <p class=sub>Suicidal or self-destructive commands are simply ignored.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b4f1"
}, {
	name: "Control Undead",
	summary: "Command undead creatures",
	school: "Necro",
	composition: "V, S, M (a small piece of bone and a small piece of raw meat)",
	time: "1 a",
	range: "Close",
	effect: "2 HD of undead/lvl",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "This spell enables you to command undead creatures for a short period of time. You command them by voice and they understand you, no matter what language you speak. Even if vocal communication is impossible (in the area of a silence spell, for instance), the controlled undead do not attack you. At the end of the spell, the subjects revert to their normal behavior. Intelligent undead creatures remember that you controlled them.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "dd45"
}, {
	name: "Control Water",
	summary: "Raises, lowers or parts water",
	school: "Trans",
	composition: "V, S, M/DF (a drop of water (for <i>raise water</i>) or a pinch of dust (for <i>lower water</i>))",
	time: "1 a",
	range: "Long",
	effect: "10ftx10ftx2ft/lvl",
	duration: "10 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 5,
		"Druid": 5,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "Depending on the version you choose, the <i>control water</i> spell raises or lowers water. <p class=sub><i>Lower Water</i>: This causes water or similar liquid to reduce its depth by as much as 2 feet per caster level (to a minimum depth of 1 inch). The water is lowered within a squarish depression whose sides are up to caster level Ã&emdash; 10 feet long. In extremely large and deep bodies of water, such as a deep ocean, the spell creates a whirlpool that sweeps ships and similar craft downward, putting them at risk and rendering them unable to leave by normal movement for the duration of the spell. When cast on water elementals and other water-based creatures, this spell acts as a slow spell (Will negates). The spell has no effect on other creatures. <p class=sub><i>Raise Water</i>: This causes water or similar liquid to rise in height, just as the lower water version causes it to lower. Boats raised in this way slide down the sides of the hump that the spell creates. If the area affected by the spell includes riverbanks, a beach, or other land nearby, the water can spill over onto dry land. <p class=sub>With either version, you may reduce one horizontal dimension by half and double the other horizontal dimension.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e802"
}, {
	name: "Control Weather",
	summary: "Changes weather in local area",
	school: "Trans",
	composition: "V, S",
	time: "10 min",
	range: "2 miles",
	effect: "2 mile radius",
	duration: "4d12 hours",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 8,
		"Druid": 8,
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "You change the weather in the local area. It takes 10 minutes to cast the spell and an additional 10 minutes for the effects to manifest. The current, natural weather conditions are determined by the DM. You can call forth weather appropriate to the climate and season of the area you are in. <p class=sub><table><p class=sub><tr class=header><td>Season</td><td>Possible Weather</td></tr> <p class=sub><tr><td>Spring</td><td>Tornado, thunderstorm, sleet storm, or hot weather</td></tr> <p class=sub><tr><td>Summer</td><td>Torrential rain, heat wave, or hailstorm</td></tr> <p class=sub><tr><td>Autumn</td><td>Hot or cold weather, fog, or sleet</td></tr> <p class=sub><tr><td>Winter</td><td>Frigid cold, blizzard, or thaw</td></tr> <p class=sub><tr><td>Late winter</td><td>Hurricane-force winds or early spring (coastal area)</td></tr> <p class=sub></table> <p class=sub>You control the general tendencies of the weather, such as the direction and intensity of the wind. You cannot control specific applications of the weather&emdash;where lightning strikes, for example, or the exact path of a tornado. When you select a certain weather condition to occur, the weather assumes that condition 10 minutes later (changing gradually, not abruptly). The weather continues as you left it for the duration, or until you use a standard action to designate a new kind of weather (which fully manifests itself 10 minutes later). Contradictory conditions are not possible simultaneously&emdash;fog and strong wind, for example. <p class=sub><i>Control weather</i> can do away with atmospheric phenomena (naturally occurring or otherwise) as well as create them. <p class=sub>A druid casting this spell doubles the duration and affects a circle with a 3-mile radius.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b792"
}, {
	name: "Control Winds",
	summary: "Change wind direction and speed",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "40-ft/lvl",
	effect: "40-ft/lvl radius",
	duration: "10 min/lvl",
	save: "Fort negs",
	sr: "-",
	classes: {
		"Druid": 6
	},
	description: "You alter wind force in the area surrounding you. You can make the wind blow in a certain direction or manner, increase its strength, or decrease its strength. The new wind direction and strength persist until the spell ends or until you choose to alter your handiwork, which requires concentration. You may create an 'eye' of calm air up to 80 feet in diameter at the center of the area if you so desire, and you may choose to limit the area to any cylindrical area less than your full limit (for example, a 20-foot-diameter tornado centered 100 feet away). <p class=sub><i>Wind Direction</i>: You may choose one of four basic wind patterns to function over the spell's area.<ul><li>A downdraft blows from the center outward in equal strength in all directions. <li>An updraft blows from the outer edges in toward the center in equal strength from all directions, veering upward before impinging on the eye in the center. <li>A rotation causes the winds to circle the center in clockwise or counter-clockwise fashion. <li>A blast simply causes the winds to blow in one direction across the entire area from one side to the other. </ul><p class=sub><i>Wind Strength</i>: For every three caster levels, you can increase or decrease wind strength by one level. (The categories of wind strength are briefly described below, with more description to be found in the <i>Dungeon Master's Guide</i>.) Each round on your turn, a creature in the wind must make a Fortitude save or suffer the effect of being in the windy area. <p class=sub>Strong winds (21+ mph) make sailing difficult. <p class=sub>A severe wind (31+ mph) causes minor ship and building damage. <p class=sub>A windstorm (51+ mph) drives most flying creatures from the skies, uproots small trees, knocks down light wooden structures, tears off roofs, and endangers ships. <p class=sub>Hurricane force winds (75+ mph) destroy wooden buildings, sometimes uproot even large trees, and cause most ships to founder. <p class=sub>A tornado (175+ mph) destroys all non-fortified buildings and often uproots large trees.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "fdfc"
}, {
	name: "Create Food and Water",
	summary: "Feeds 3 humans (or horse) / level",
	school: "Conj",
	composition: "V, S",
	time: "10 min",
	range: "Close",
	effect: "Food and water",
	duration: "24 hours",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 4
	},
	description: "The food that this spell creates is simple fare of your choice&emdash;highly nourishing, if rather bland. Food so created decays and becomes inedible within 24 hours, although it can be kept fresh for another 24 hours by casting a p<i>urify food and water</i> spell on it. The water created by this spell is just like clean rain water, and it doesn't go bad as the food does.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "95ae"
}, {
	name: "Create Greater Undead",
	summary: "Mummy, spectre, vampire, ghost",
	school: "Necro",
	composition: "V, S, M",
	time: "1 hr",
	range: "Close",
	effect: "One dead creature",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 9,
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "This spell functions like <i>create undead</i>, except that you can create more powerful and intelligent sorts of undead: shadows, wraiths, spectres, and devourers (see the <i>Monster Manual</i> for more information on all types of undead). The type or types of undead you can create is based on your caster level, as shown on the table below.<table> <tr class=header><td>Caster Level</td><td>Undead Created</td></tr><tr><td>15th or lower</td><td>Shadow</td></tr> <tr><td>16th-17th</td><td>Wraith</td></tr> <tr><td>18th-19th</td><td>Spectre</td></tr> <tr><td>20th or higher</td><td>Devourer</td></tr> </table>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f898"
}, {
	name: "Create Undead",
	summary: "Ghoul, shadow, ghast, wight, wraith",
	school: "Necro",
	composition: "V, S, M (a clay pot filled with grave dirt and another filled with brackish water. The spell must be cast on a dead body. You must place a black onyx gem worth at least 50 gp per HD of the undead to be created into the mouth or eye socket of each corpse. The magic of the spell turns these gems into worthless shells.)",
	time: "1 hr",
	range: "Close",
	effect: "One dead creature",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "A much more potent spell than <i>animate dead</i>, this evil spell allows you to create more powerful sorts of undead: ghouls, ghasts, mummies, and mohrgs (see the <i>Monster Manual</i> for more information on all types of undead). The type or types of undead you can create is based on your caster level, as shown on the table below.<table><tr class=header><td>Caster Level</td><td>Undead Created</td></tr> <tr><td>11th or lower</td><td>Ghoul</td></tr> <tr><td>12th-14th</td><td>Ghast</td></tr> <tr><td>15th-17th</td><td>Mummy</td></tr><tr><td>18th or higher</td><td>Mohrg</td></tr></table><p class=sub>You may create less powerful undead than your level would allow if you choose. For example, at 16th level you could decide to create a ghoul or a ghast instead of a mummy. Doing this may be a good idea, because created undead are not automatically under the control of their animator. If you are capable of commanding undead, you may attempt to command the undead creature as it forms (see Turn or Rebuke Undead, page 159). <p class=sub>This spell must be cast at night.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5e3"
}, {
	name: "Create Water",
	summary: "Creates 2 gallons/lvl of pure water",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Up to 2 gallons/lvl",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 1,
		"Paladin": 1
	},
	description: "This spell generates wholesome, drinkable water, just like clean rain water. Water can be created in an area as small as will actually contain the liquid, or in an area three times as large&emdash;possibly creating a downpour or filling many small receptacles. <p class=sub><i>Note</i>: Conjuration spells can't create substances or objects within a creature. Water weighs about 8 pounds per gallon. One cubic foot of water contains roughly 8 gallons and weighs about 60 pounds.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e228"
}, {
	name: "Creeping Doom",
	summary: "Carpet of insects at your command",
	school: "Conj",
	composition: "V, S",
	time: "Round",
	range: "Close",
	effect: "One swarm/2lvl",
	duration: "1 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 8
	},
	description: "When you utter the spell of <i>creeping doom</i>, you call forth a mass of centipede swarms (one per two caster levels, to a maximum of ten swarms at 20th level), which need not appear adjacent to one another. (See the <i>Monster Manual</i> for descriptions on centipede swarms.) <p class=sub>You may summon the centipede swarms so that they share the area of other creatures. The swarms remain stationary, attacking any creatures in their area, unless you command the creeping doom to move (a standard action). As a standard action, you can command any number of the swarms to move toward any prey within 100 feet of you. You cannot command any swarm to move more than 100 feet away from you, and if you move more than 100 feet from any swarm, that swarm remains stationary, attacking any creatures in its area (but it can be commanded again if you move within 100 feet).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e859"
}, {
	name: "Crushing Despair",
	summary: "-2 Att, save, abilities, skills, damage",
	school: "Ench",
	composition: "V, S, M (a vial of tears)",
	time: "1 a",
	range: "30-ft",
	effect: "Cone",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 4,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "An invisible cone of despair causes great sadness in the subjects. Each affected creature takes a -2 penalty on attack rolls, saving throws, ability checks, skill checks, and weapon damage rolls. <p class=sub><i>Crushing despair</i> counters and dispels <i>good hope</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ad2e"
}, {
	name: "Crushing Hand",
	school: "Evoc",
	classes: {
		Sorceror: 9,
		Wizard: 9
	},
	description: "This spell functions as <i>interposing hand</i>, except that it can also grapple one opponent as <i>grasping hand</i>. Its CMB and CMD for grapple checks use your caster level in place of its base attack bonus, with a +12 bonus for its Strength score (35) and a +1 bonus for being Large (its Dexterity is 10, granting no bonus to the CMD). A <i>crushing hand</i> deals 2d6+12 points of damage on each successful grapple check against an opponent. The <i>crushing hand</i> can instead be directed to bull rush a target (as <i>forceful hand</i>), using the same bonuses outlined above, or it can be directed to interpose itself, as <i>interposing hand</i> does.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ec9a"
}, {
	name: "Cure Critical Wounds",
	summary: "Cures 4d8+1/lvl (+20)",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Will half",
	sr: "Yes",
	classes: {
		"Bard": 5,
		"Cleric": 5,
		"Druid": 6
	},
	description: "This spell functions like <i>cure light wounds</i>, except that it cures 4d8 points of damage +1 point per caster level (maximum +20).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "46f0"
}, {
	name: "Cure Critical Wounds, Mass",
	summary: "Cures 4d8+1/lvl (+40)",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Creature/lvl in 30-ft",
	duration: "Instantaneous",
	save: "Will half",
	sr: "Yes",
	classes: {
		"Cleric": 9
	},
	description: "This spell functions like <i>mass cure light wounds</i>, except that it cures 4d8 points of damage +1 point per caster level (maximum +40).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "80d1"
}, {
	name: "Cure Light Wounds",
	summary: "Cures 1d8+1/lvl (+5)",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Will half",
	sr: "Yes",
	classes: {
		"Bard": 2,
		"Cleric": 2,
		"Druid": 2,
		"Paladin": 1,
		"Ranger": 2
	},
	description: "When laying your hand upon a living creature, you channel positive energy that cures 1d8 points of damage +1 point per caster level (maximum +5).<p class=sub>Since undead are powered by negative energy, this spell deals damage to them instead of curing their wounds. An undead creature can apply spell resistance, and can attempt a Will save to take half damage.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8a27"
}, {
	name: "Cure Light Wounds, Mass",
	summary: "Cures 1d8+1/lvl (+25)",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Creature/lvl in 30-ft",
	duration: "Instantaneous",
	save: "Will half",
	sr: "Yes",
	classes: {
		"Bard": 6,
		"Cleric": 6,
		"Druid": 7
	},
	description: "You channel positive energy to cure 1d8 points of damage +1 point per caster level (maximum +25) in each selected creature. <p class=sub>Like other <i>cure</i> spells, <i>mass cure light wounds</i> deals damage to undead in its area rather than curing them. Each affected undead may attempt a Will save for half damage.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5181"
}, {
	name: "Cure Moderate Wounds",
	summary: "Cures 2d8+1/lvl (+10)",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Will half",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Cleric": 3,
		"Druid": 4,
		"Paladin": 3,
		"Ranger": 3
	},
	description: "This spell functions like <i>cure light wounds</i>, except that it cures 2d8 points of damage +1 point per caster level (maximum +10).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ee26"
}, {
	name: "Cure Moderate Wounds, Mass",
	summary: "Cures 2d8+1/lvl (+30)",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Creature/lvl in 30-ft",
	duration: "Instantaneous",
	save: "Will half",
	sr: "Yes",
	classes: {
		"Bard": 7,
		"Cleric": 7,
		"Druid": 8
	},
	description: "This spell functions like <i>mass cure light wounds</i>, except that it cures 2d8 points of damage +1 point per caster level (maximum +30).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "772a"
}, {
	name: "Cure Serious Wounds",
	summary: "Cures 3d8+1/lvl (+15)",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Will half",
	sr: "Yes",
	classes: {
		"Bard": 4,
		"Cleric": 4,
		"Druid": 5,
		"Paladin": 4,
		"Ranger": 4
	},
	description: "This spell functions like <i>cure light wounds</i>, except that it cures 3d8 points of damage +1 point per caster level (maximum +15).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9e56"
}, {
	name: "Cure Serious Wounds, Mass",
	summary: "Cures 3d8+1/lvl (+35)",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Creature/lvl in 30-ft",
	duration: "Instantaneous",
	save: "Will half",
	sr: "Yes",
	classes: {
		"Cleric": 8
	},
	description: "This spell functions like <i>mass cure light wounds</i>, except that it cures 3d8 points of damage +1 point per caster level (maximum +35).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1f40"
}, {
	name: "Curse Water",
	summary: "Make unholy water",
	school: "Necro",
	composition: "V, S, M (5 pounds of powdered silver worth 25 gp)",
	time: "1 min",
	range: "Touch",
	effect: "Water flask",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 2
	},
	description: "This spell imbues a flask (1 pint) of water with negative energy, turning it into unholy water. Unholy water damages good outsiders the way holy water damages undead and evil outsiders.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3818"
}, {
	name: "Dancing Lights",
	summary: "Figment torches or other lights",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "10-ft radius",
	duration: "1 min (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 1,
		"Sorceror": 1,
		"Wizard": 1
	},
	description: "Depending on the version selected, you create up to four lights that resemble lanterns or torches (and cast that amount of light), or up to four glowing spheres of light (which look like will-o'-wisps), or one faintly glowing, vaguely humanoid shape. The <i>dancing lights</i> must stay within a 10-foot-radius area in relation to each other but otherwise move as you desire (no concentration required): forward or back, up or down, straight or turning corners, or the like. The lights can move up to 100 feet per round. A light winks out if the distance between you and it exceeds the spell's range.<p class=sub><i>Dancing lights</i> can be made permanent with a permanency spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6add"
}, {
	name: "Darkness",
	summary: "Supernatural darkness",
	school: "Evoc",
	composition: "V, M/DF (a bit of bat fur and either a drop of pitch or a piece of coal)",
	time: "1 a",
	range: "Touch",
	effect: "Item 20-ft radius",
	duration: "10 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 3,
		"Cleric": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "This spell causes an object to radiate shadowy illumination out to a 20-foot radius. All creatures in the area gain concealment (20% miss chance). Even creatures that can normally see in such conditions (such as with darkvision or low-light vision) have the miss chance in an area shrouded in magical <i>darkness</i>. Normal lights (torches, candles, lanterns, and so forth) are incapable of brightening the area, as are light spells of lower level (such as <i>light</i> or <i>dancing lights</i>). Higher level light spells (such as <i>daylight</i>) are not affected by <i>darkness</i>. <p class=sub>If <i>darkness</i> is cast on a small object that is then placed inside or under a lightproof covering, the spell's effect is blocked until the covering is removed. <p class=sub><i>Darkness</i> counters or dispels any light spell of equal or lower spell level.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c83e"
}, {
	name: "Darkvision",
	summary: "See 60-ft in total darkness",
	school: "Trans",
	composition: "V, S, M (either a pinch of dried carrot or an agate)",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 hr/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Ranger": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "The subject gains the ability to see 60 feet even in total darkness. <i>Darkvision</i> is black and white only but otherwise like normal sight. Darkvision does not grant one the ability to see in magical darkness. <p class=sub><i>Darkvision</i> can be made permanent with a <i>permanency</i> spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7853"
}, {
	name: "Daylight",
	summary: "60-ft radius of bright light",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "Item 60-ft radius",
	duration: "10 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 4,
		"Cleric": 4,
		"Druid": 4,
		"Paladin": 3,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "The object touched sheds light as bright as full daylight in a 60-foot radius, and dim light for an additional 60 feet beyond that. Creatures that take penalties in bright light also take them while within the radius of this magical light. Despite its name, this spell is not the equivalent of daylight for the purposes of creatures that are damaged or destroyed by bright light (such as vampires). If daylight is cast on a small object that is then placed inside or under a light-proof covering, the spell'seffects are blocked until the covering is removed. <p class=sub><i>Daylight</i> brought into an area of magical darkness (or vice versa) is temporarily negated, so that the otherwise prevailing light conditions exist in the overlapping areas of effect. <p class=sub><i>Daylight</i> counters or dispels any darkness spell of equal or lower level, such as <i>darkness</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ef7d"
}, {
	name: "Daze",
	summary: "Humanoid loses next action",
	school: "Ench",
	composition: "V, S, M (a pinch of wool or similar substance)",
	time: "1 a",
	range: "Close",
	effect: "1 humanoid to 4 HD",
	duration: "1 rnd",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 1,
		"Sorceror": 1,
		"Wizard": 1
	},
	description: "This enchantment clouds the mind of a humanoid creature with 4 or fewer Hit Dice so that it takes no actions. Humanoids of 5 or more HD are not affected. A dazed subject is not stunned, so attackers get no special advantage against it.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e90d"
}, {
	name: "Daze Monster",
	summary: "Creature loses next action",
	school: "Ench",
	composition: "V, S, M",
	time: "1 a",
	range: "Medium",
	effect: "One creature to 6 HD",
	duration: "1 rnd",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "This spell functions like <i>daze</i>, but <i>daze monster</i> can affect any one living creature of any type. Creatures of 7 or more HD are not affected.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e4d3"
}, {
	name: "Death Knell",
	summary: "Gain 1d8 temp hp, +2 Str, +1 level",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One living creature",
	duration: "10 min / creat HD",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 3
	},
	description: "You draw forth the ebbing life force of a creature and use it to fuel your own power. Upon casting this spell, you touch a living creature that has -1 or fewer hit points. If the subject fails its saving throw, it dies, and you gain 1d8 temporary hit points and a +2 bonus to Strength. Additionally, your effective caster level goes up by +1, improving spell effects dependent on caster level. (This increase in effective caster level does not grant you access to more spells.) These effects last for 10 minutes per HD of the subject creature.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8bab"
}, {
	name: "Death Ward",
	summary: "Immunity to death spells/effects",
	school: "Necro",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "One living creature",
	duration: "10 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 5,
		"Druid": 6,
		"Paladin": 4
	},
	description: "The subject is immune to all death spells, magical death effects, energy drain, and any negative energy effects (such as from <i>inflict</i> spells or <i>chill touch</i>). <p class=sub>This spell doesn't remove negative levels that the subject has already gained, nor does it affect the saving throw necessary 24 hours after gaining a negative level. <p class=sub><i>Death ward</i> does not protect against other sorts of attacks, such as hit point loss, poison, or petrification, even if those attacks might be lethal. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "902b"
}, {
	name: "Deathwatch",
	summary: "Sees how wounded targets are",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "30-ft",
	effect: "Cone",
	duration: "10 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 2
	},
	description: "Using the foul sight granted by the powers of unlife, you can determine the condition of creatures near death within the spell's range. You instantly know whether each creature within the area is dead, fragile (alive and wounded, with 3 or fewer hit points left), fighting off death (alive with 4 or more hit points), undead, or neither alive nor dead (such as a construct). Deathwatch sees through any spell or ability that allows creatures to feign death.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3ede"
}, {
	name: "Deep Slumber",
	summary: "Put 10 HD of creatures into slumber",
	school: "Ench",
	composition: "V, S, M",
	time: "Round",
	range: "Close",
	effect: "10-ft radius",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "This spell functions like sleep, except that it affects 10 HD of creatures.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "44b4"
}, {
	name: "Deeper Darkness",
	summary: "Supernatural darkness",
	school: "Evoc",
	composition: "V,M/DF",
	time: "1 a",
	range: "Touch",
	effect: "Item 60-ft radius",
	duration: "1 day/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 4
	},
	description: "This spell functions like <i>darkness</i>, except that the object radiates shadowy illumination in a 60-foot radius and the <i>darkness</i> lasts longer. <p class=sub><i>Daylight</i> brought into an area of deeper darkness (or vice versa) is temporarily negated, so that the otherwise prevailing light conditions exist in the overlapping areas of effect. <p class=sub><i>Deeper darkness</i> counters and dispels any light spell of equal or lower level, including <i>daylight</i> and <i>light</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "44d5"
}, {
	name: "Delay Poison",
	summary: "Stops poison from harming target",
	school: "Conj",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 hr/lvl",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Cleric": 3,
		"Druid": 3,
		"Paladin": 2,
		"Ranger": 1
	},
	description: "The subject becomes temporarily immune to poison. Any poison in its system or any poison to which it is exposed during the spell's duration does not affect the subject until the spell's duration has expired. Delay poison does not cure any damage that poison may have already done.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f38b"
}, {
	name: "Delayed Blast Fireball",
	summary: "1d6 dmg/lvl, 20-ft radius, 5 rnds",
	school: "Evoc",
	composition: "V, S, M",
	time: "1 a",
	range: "Long",
	effect: "1d6/lvl, max 10d6",
	duration: "Instantaneous",
	save: "Ref half",
	sr: "Yes",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "This spell functions like <i>fireball</i>, except that it is more powerful and can detonate up to 5 rounds after the spell is cast. The burst of flame deals 1d6 points of fire damage per caster level (maximum 20d6). <p class=sub>The glowing bead created by <i>delayed blast fireball</i> can detonate immediately if you desire, or you can choose to delay the burst for as many as 5 rounds. You select the amount of delay upon completing the spell, and that time cannot change once it has been set unless someone touches the bead (see below). If you choose a delay, the glowing bead sits at its destination until it detonates. A creature can pick up and hurl the bead as a thrown weapon (range increment 10 feet). If a creature handles and moves the bead within 1 round of its detonation, there is a 25% chance that the bead detonates while being handled.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7cd5"
}, {
	name: "Demand",
	summary: "Send a message with a suggestion",
	school: "Evoc",
	composition: "V, S, M/DF (a short piece of copper wire and some small part of the subject--a hair, a bit of nail, or the like)",
	time: "10 min",
	range: "Special",
	effect: "One creature",
	duration: "1 round",
	save: "Will part",
	sr: "Yes",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "This spell functions like <i>sending</i>, but the message can also contain a <i>suggestion</i> (see the <i>suggestion</i> spell), which the subject does its best to carry out. A successful Will save negates the <i>suggestion</i> effect but not the contact itself. The <i>demand</i>, if received, is understood even if the subject's Intelligence score is as low as 1. If the message is impossible or meaningless according to the circumstances that exist for the subject at the time the <i>demand</i> is issued, the message is understood but the <i>suggestion</i> is ineffective. <p class=sub>The <i>demand</i>'s message to the creature must be twenty-five words or less, including the <i>suggestion</i>. The creature can also give a short reply immediately.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a32d"
}, {
	name: "Desecrate",
	summary: "Fill area with negative energy",
	school: "Evoc",
	composition: "V, S, M (a vial of unholy water and 25 gp worth (5 pounds) of silver dust, all of which must be sprinkled around the area), DF",
	time: "1 a",
	range: "Close",
	effect: "20-ft radius",
	duration: "2 hr/lvl",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 3
	},
	description: "This spell imbues an area with negative energy. Each Charisma check made to turn undead within this area takes a -3 profane penalty, and every undead creature entering a <i>desecrated</i> area gains a +1 profane bonus on attack rolls, damage rolls, and saving throws. An undead creature created within or summoned into such an area gains +1 hit points per HD. <p class=sub>If the <i>desecrated</i> area contains an altar, shrine, or other permanent fixture dedicated to your deity or aligned higher power, the modifiers given above are doubled (-6 profane penalty on turning checks, +2 profane bonus and +2 hit points per HD for undead in the area). Furthermore, anyone who casts <i>animate dead</i> within this area may create as many as double the normal amount of undead (that is, 4 HD per caster level rather than 2 HD per caster level). <p class=sub>If the area contains an altar, shrine, or other permanent fixture of a deity, pantheon, or higher power other than your patron, the <i>desecrate</i> spell instead curses the area, cutting off its connection with the associated deity or power. This secondary function, if used, does not also grant the bonuses and penalties relating to undead, as given above. <p class=sub><i>Desecrate</i> counters and dispels <i>consecrate</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b9c6"
}, {
	name: "Destruction",
	summary: "Kill target, destroy remains or 10d6",
	school: "Necro",
	composition: "V, S, F (a special holy (or unholy) symbol of silver marked with verses of anathema (cost 500 gp))",
	time: "1 a",
	range: "Close",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Fort part",
	sr: "Yes",
	classes: {
		"Cleric": 8
	},
	description: "This spell instantly slays the subject and consumes its remains (but not its equipment and possessions) utterly. If the target's Fortitude saving throw succeeds, it instead takes 10d6 points of damage. The only way to restore life to a character who has failed to save against this spell is to use <i>true resurrection</i>, a carefully worded <i>wish</i> spell followed by <i>resurrection</i>, or <i>miracle</i>. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d05e"
}, {
	name: "Detect Animals or Plants",
	summary: "Detects special animals or plant",
	school: "Div",
	composition: "V, S",
	time: "1 a",
	range: "Long",
	effect: "Cone",
	duration: "Conc, 10 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 2,
		"Ranger": 1
	},
	description: "You can detect a particular kind of animal or plant in a cone emanating out from you in whatever direction you face. You must think of a kind of animal or plant when using the spell, but you can change the animal or plant kind each round. The amount of information revealed depends on how long you search a particular area or focus on a specific kind of animal or plant. <p class=sub><i>1st Round</i>: Presence or absence of that kind of animal or plant in the area. <p class=sub><i>2nd Round</i>: Number of individuals of the specified kind in the area, and the condition of the healthiest specimen. <p class=sub><i>3rd Round</i>: The condition (see below) and location of each individual present. If an animal or plant is outside your line of sight, then you discern its direction but not its exact location. <p class=sub><i>Conditions</i>: For purposes of this spell, the categories of condition are as follows: <p class=sub><i>Normal</i>: Has at least 90% of full normal hit points, free of disease. <p class=sub><i>Fair</i>: 30% to 90% of full normal hit points remaining. <p class=sub><i>Poor</i>: Less than 30% of full normal hit points remaining, afflicted with a disease, or suffering from a debilitating injury. <p class=sub><i>Weak</i>: 0 or fewer hit points remaining, afflicted with a disease in the terminal stage, or crippled. <p class=sub>If a creature falls into more than one category, the spell indicates the weaker of the two. <p class=sub>Each round you can turn to detect a kind of animal or plant in a new area. The spell can penetrate barriers, but 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt blocks it. <p class=sub>The DM decides if a specific kind of animal or plant is present.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5c80"
}, {
	name: "Detect Chaos",
	summary: "Reveals creatures, spells or items",
	school: "Div",
	composition: "V, S,DF",
	time: "1 a",
	range: "60-ft",
	effect: "Cone",
	duration: "Conc, 10 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 2
	},
	description: "This spell functions like <i>detect evil</i>, except that it detects the auras of chaotic creatures, clerics of chaotic deities, chaotic spells, and chaotic magic items, and you are vulnerable to an overwhelming chaotic aura if you are lawful.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4076"
}, {
	name: "Detect Evil",
	summary: "Reveals creatures, spells or items",
	school: "Div",
	composition: "V, S,DF",
	time: "1 a",
	range: "60-ft",
	effect: "Cone",
	duration: "Conc, 10 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 2
	},
	description: "<p class=sub>You can sense the presence of evil. The amount of information revealed depends on how long you study a particular area or subject. <p class=sub><i>1st Round</i>: Presence or absence of evil. <p class=sub><i>2nd Round</i>: Number of evil auras (creatures, objects, or spells) in the area and the power of the most potent evil aura present. If you are of good alignment, and the strongest evil aura's power is overwhelming (see below), and the HD or level of the aura's source is at least twice your character level, you are stunned for 1 round and the spell ends. <p class=sub><i>3rd Round</i>: The power and location of each aura. If an aura is outside your line of sight, then you discern its direction but not its exact location. <p class=sub><i>Aura Power</i>: An evil aura's power depends on the type of evil creature or object that you're detecting and its HD, caster level, or (in the case of a cleric) class level; see the accompanying table. If an aura falls into more than one strength category, the spell indicates the stronger of the two. <p class=sub>For example, as indicated on the table, an evil outsider with 12 HD has an overwhelming aura of evil. A good cleric who casts this spell and directs it at the location of such a creature for longer than 1 round loses the spell and is stunned for 1 round if his character level is 6th or lower. <table><tr class=header><td></td><td colspan=4>&emdash;&emdash;&emdash;&emdash; Aura Power &emdash;&emdash;&emdash;&emdash;</td></tr><tr class=header><td>Creature/Object</td><td>Faint</td><td>Moderate</td><td>Strong</td><td>Overwhelming</td></tr><tr><td>Evil creature<sup>1</sup> (HD)</td><td>10 or lower</td><td>11-25</td><td>26-50</td><td>51 or higher</td></tr><tr><td>Undead (HD)</td><td>2 or lower</td><td>3-8</td><td>9-20</td><td>21 or higher</td></tr> <tr><td>Evil outsider (HD)</td><td>1 or lower</td><td>2-4</td><td>5-10</td><td>11 or higher</td></tr> <tr><td>Cleric of an evil deity<sup>2</sup> (class levels)</td><td>1</td><td>2-4</td><td>5-10</td><td>11 or higher</td></tr><tr><td>Evil magic item or spell (caster level)</td><td>2nd or lower</td><td>3rd-8th</td><td>9th-20th</td><td>21st or higher</td></tr></table><p><sup>1</sup> Except for undead and outsiders, which have their own entries on the table.<p><sup>2</sup> Some characters who are not clerics may radiate an aura of equivalent power. The class summary will indicate whether this applies.<p class=sub><i>Lingering Aura</i>: An evil aura lingers after its original source dissipates (in the case of a spell) or is destroyed (in the case of a creature or magic item). If <i>detect evil</i> is cast and directed at such a location, the spell indicates an aura strength of dim (even weaker than a faint aura). How long the aura lingers at this dim level depends on its original power: <table><tr class=header><td>Original Strength</td><td>Duration of Lingering Aura</td></tr><tr><td>Faint</td><td>1d6 rounds</td></tr><tr><td>Moderate</td><td>1d6 minutes</td></tr><tr><td>Strong</td><td>1d6x10 minutes</td></tr><tr><td>Overwhelming</td><td>1d6 days</td></tr></table> <p class=sub>Animals, traps, poisons, and other potential perils are not evil, and as such this spell does not detect them. <p class=sub>Each round, you can turn to detect evil in a new area. The spell can penetrate barriers, but 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt blocks it.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a893"
}, {
	name: "Detect Good",
	summary: "Reveals creatures, spells or items",
	school: "Div",
	composition: "V, S,DF",
	time: "1 a",
	range: "60-ft",
	effect: "Cone",
	duration: "Conc, 10 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 2
	},
	description: "This spell functions like <i>detect evil</i>, except that it detects the auras of good creatures, clerics or paladins of good deities, good spells, and good magic items, and you are vulnerable to an overwhelming good aura if you are evil. Healing potions, antidotes, and similar beneficial items are not good.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "552"
}, {
	name: "Detect Law",
	summary: "Reveals creatures, spells or items",
	school: "Div",
	composition: "V, S,DF",
	time: "1 a",
	range: "60-ft",
	effect: "Cone",
	duration: "Conc, 10 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 2
	},
	description: "This spell functions like <i>detect evil</i>, except that it detects the auras of lawful creatures, clerics of lawful deities, lawful spells, and lawful magic items, and you are vulnerable to an overwhelming lawful aura if you are chaotic.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "edba"
}, {
	name: "Detect Magic",
	summary: "Detects spells and magic items",
	school: "Div",
	composition: "V, S",
	time: "1 a",
	range: "60-ft",
	effect: "Cone",
	duration: "Conc, 1 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 1,
		"Cleric": 1,
		"Druid": 1,
		"Sorceror": 1,
		"Wizard": 1
	},
	description: "You detect magical auras. The amount of information revealed depends on how long you study a particular area or subject. <p class=sub><i>1st Round</i>: Presence or absence of magical auras. <p class=sub><i>2nd Round</i>: Number of different magical auras and the power of the most potent aura. <p class=sub><i>3rd Round</i>: The strength and location of each aura. If the items or creatures bearing the auras are in line of sight, you can make Spellcraft skill checks to determine the school of magic involved in each. (Make one check per aura; DC 15 + spell level, or 15 + half caster level for a nonspell effect.) <p class=sub>Magical areas, multiple types of magic, or strong local magical emanations may distort or conceal weaker auras. <p class=sub><i>Aura Strength</i>: An aura's power depends on a spell's functioning spell level or an item's caster level. If an aura falls into more than one category, <i>detect magic</i> indicates the stronger of the two.<table><tr class=header><td></td><td colspan=4>&emdash;&emdash;&emdash;&emdash; Aura Power &emdash;&emdash;&emdash;&emdash;</td></tr><tr class=header><td>Spell or Object</td><td>Faint</td><td>Moderate</td><td>Strong</td><td>Overwhelming</td></tr><tr><td>Functioning spell (spell level)</td><td>3rd or lower</td><td>4th-6th</td><td>7th-9th</td><td>10th+ (deity-level)</td></tr><tr><td>Magic item (caster level)</td><td>5th or lower</td><td>6th-11th</td><td>12th-20th</td><td>21st+ (artifact)</td></tr></table><p class=sub><i>Lingering Aura</i>: A magical aura lingers after its original source dissipates (in the case of a spell) or is destroyed (in the case of a magic item). If <i>detect magic</i> is cast and directed at such a location, the spell indicates an aura strength of dim (even weaker than a faint aura). How long the aura lingers at this dim level depends on its original power: <table><tr class=header><td>Original Strength</td><td>Duration of Lingering Aura</td></tr><tr><td>Faint</td><td>1d6 rounds</td></tr><tr><td>Moderate</td><td>1d6 minutes</td></tr><tr><td>Strong</td><td>1d6x10 minutes</td></tr><tr><td>Overwhelming</td><td>1d6 days</td></tr></table><p class=sub>Outsiders and elementals are not magical in themselves, but if they are summoned, the conjuration spell registers. <p class=sub>Each round, you can turn to detect magic in a new area. The spell can penetrate barriers, but 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt blocks it. <p class=sub><i>Detect magic</i> can be made permanent with a <i>permanency</i> spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "aef9"
}, {
	name: "Detect Poison",
	summary: "Detects poison in creature or item",
	school: "Div",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Creat,obj or 5-ft cube",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 1,
		"Druid": 1,
		"Paladin": 1,
		"Ranger": 1,
		"Sorceror": 1,
		"Wizard": 1
	},
	description: "You determine whether a creature, object, or area has been poisoned or is poisonous. <p class=sub>You can determine the exact type of poison with a DC 20 Wisdom check. A character with the Craft (alchemy) skill may try a DC 20 Craft (alchemy) check if the Wisdom check fails, or may try the Craft (alchemy) check prior to the Wisdom check. <p class=sub>The spell can penetrate barriers, but 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt blocks it.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8f9a"
}, {
	name: "Detect Scrying",
	summary: "Alerts of magical eavesdropping",
	school: "Div",
	composition: "V, S, M (a small piece of mirror and a miniature brass hearing trumpet)",
	time: "1 a",
	range: "40-ft",
	effect: "40-ft radius",
	duration: "24 hours",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 5,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "You immediately become aware of any attempt to observe you by means of a divination (scrying) spell or effect. The spell's area radiates from you and moves as you move. You know the location of every magical sensor within the spell's area. <p class=sub>If the scrying attempt originates within the area, you also know its location; otherwise, you and the scrier immediately make opposed caster level checks (1d20 + caster level). If you at least match the scrier's result, you get a visual image of the scrier and an accurate sense of his or her direction and distance from you.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3853"
}, {
	name: "Detect Secret Doors",
	summary: "Reveals hidden doors within 60-ft",
	school: "Div",
	composition: "V, S",
	time: "1 a",
	range: "60-ft",
	effect: "Cone",
	duration: "Conc, 1min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "You can detect secret doors, compartments, caches, and so forth. Only passages, doors, or openings that have been specifically constructed to escape detection are detected by this spell&emdash;an ordinary trapdoor underneath a pile of crates would not be detected. The amount of information revealed depends on how long you study a particular area or subject. <p class=sub><i>1st Round</i>: Presence or absence of secret doors. <p class=sub><i>2nd Round</i>: Number of secret doors and the location of each. If an aura is outside your line of sight, then you discern its direction but not its exact location. <p class=sub><i>Each Additional Round</i>: The mechanism or trigger for one particular secret portal closely examined by you. <p class=sub>Each round, you can turn to detect secret doors in a new area. The spell can penetrate barriers, but 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt blocks it.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6d61"
}, {
	name: "Detect Snares and Pits",
	summary: "Reveals natural or primitive traps",
	school: "Div",
	composition: "V, S",
	time: "1 a",
	range: "60-ft",
	effect: "Cone",
	duration: "Conc, 10 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 2,
		"Ranger": 1
	},
	description: "You can detect simple pits, deadfalls, and snares as well as mechanical traps constructed of natural materials. The spell does not detect complex traps, including trapdoor traps. <p class=sub><i>Detect snares and pits</i> does detect certain natural hazards&emdash;quicksand (a snare), a sinkhole (a pit), or unsafe walls of natural rock (a deadfall). However, it does not reveal other potentially dangerous conditions, such as a cavern that floods during rain, an unsafe construction, or a naturally poisonous plant. The spell does not detect magic traps (except those that operate by pit, deadfall, or snaring; see the spell <i>snare</i>), nor mechanically complex ones, nor those that have been rendered safe or inactive. The amount of information revealed depends on how long you study a particular area. <p class=sub><i>1st Round</i>: Presence or absence of hazards. <p class=sub><i>2nd Round</i>: Number of hazards and the location of each. If a hazard is outside your line of sight, then you discern its direction but not its exact location. <p class=sub><i>Each Additional Round</i>: The general type and trigger for one particular hazard closely examined by you. <p class=sub>Each round, you can turn to detect snares and pits in a new area. The spell can penetrate barriers, but 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt blocks it.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "599f"
}, {
	name: "Detect Thoughts",
	summary: "Detect surface thoughts",
	school: "Div",
	composition: "V, S,F/DF",
	time: "1 a",
	range: "60-ft",
	effect: "Cone",
	duration: "Conc, 1 min/lvl (D)",
	save: "Will negs",
	sr: "-",
	classes: {
		"Bard": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "You detect surface thoughts. The amount of information revealed depends on how long you study a particular area or subject. <p class=sub><i>1st Round</i>: Presence or absence of thoughts (from conscious creatures with Intelligence scores of 1 or higher). <p class=sub><i>2nd Round</i>: Number of thinking minds and the Intelligence score of each. If the highest Intelligence is 26 or higher (and at least 10 points higher than your own Intelligence score), you are stunned for 1 round and the spell ends. This spell does not let you determine the location of the thinking minds if you can't see the creatures whose thoughts you are detecting. <p class=sub><i>3rd Round</i>: Surface thoughts of any mind in the area. A target's Will save prevents you from reading its thoughts, and you must cast <i>detect thoughts</i> again to have another chance. Creatures of animal intelligence (Int 1 or 2) have simple, instinctual thoughts that you can pick up. <p class=sub>Each round, you can turn to detect thoughts in a new area. The spell can penetrate barriers, but 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt blocks it. <p class=sub><i>Arcane Focus</i>: A copper piece.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "eb0f"
}, {
	name: "Detect Undead",
	summary: "Reveals undead within 60-ft",
	school: "Div",
	composition: "V, S, M/DF (a bit of earth from a grave)",
	time: "1 a",
	range: "60-ft",
	effect: "Cone",
	duration: "Conc, 1min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 2,
		"Paladin": 1,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "You can detect the aura that surrounds undead creatures. The amount of information revealed depends on how long you study a particular area. <p class=sub><i>1st Round</i>: Presence or absence of undead auras. <p class=sub><i>2nd Round</i>: Number of undead auras in the area and the strength of the strongest undead aura present. If you are of good alignment, and the strongest undead aura's strength is overwhelming (see below), and the creature has HD of at least twice your character level, you are stunned for 1 round and the spell ends. <p class=sub><i>3rd Round</i>: The strength and location of each undead aura. If an aura is outside your line of sight, then you discern its direction but not its exact location. <p class=sub><i>Aura Strength</i>: The strength of an undead aura is determined by the HD of the undead creature, as given on the following table:<table><tr class=header><td>HD</td><td>Strength</td></tr> <tr><td>1 or lower</td><td>Faint</td></tr> <tr><td>2-4</td><td>Moderate</td></tr> <tr><td>5-10</td><td>Strong</td></tr> <tr><td>11 or higher</td><td>Overwhelming</td></tr> </table> <p class=sub><i>Lingering Aura</i>: An undead aura lingers after its original source is destroyed. If detect undead is cast and directed at such a location, the spell indicates an aura strength of dim (even weaker than a faint aura). How long the aura lingers at this dim level depends on its original power: <table> <tr class=header><td>Original Strength</td><td>Duration of Lingering Aura</td></tr> <tr><td>Faint</td><td>1d6 rounds</td></tr> <tr><td>Moderate</td><td>1d6 minutes</td></tr> <tr><td>Strong</td><td>1d6Ã&emdash;10 minutes</td></tr> <tr><td>Overwhelming</td><td>1d6 days</td></tr> </table> <p class=sub>Each round, you can turn to detect undead in a new area. The spell can penetrate barriers, but 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt blocks it.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "eec4"
}, {
	name: "Dictum",
	summary: "Kills, paralyzes, weakens nonlawful",
	school: "Evoc",
	composition: "V",
	time: "1 a",
	range: "40-ft",
	effect: "40-ft radius",
	duration: "Instantaneous",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 8
	},
	description: "Any nonlawful creature within the area of a <i>dictum</i> spell suffers the following ill effects. <table><tr class=header><td>HD</td><td>Effect</td></tr> <tr><td>Equal to caster level</td><td>Deafened</td></tr> <tr><td>Up to caster level -1</td><td><i>Slowed</i>, deafened</td></tr> <tr><td>Up to caster level -5</td><td>Paralyzed, <i>slowed</i>, deafened</td></tr> <tr><td>Up to caster level -10</td><td>Killed, paralyzed, <i>slowed</i>, deafened</td></tr> </table> <p class=sub>The effects are cumulative and concurrent. No saving throw is allowed against these effects. <p class=sub><i>Deafened</i>: The creature is deafened for 1d4 rounds. <p class=sub><i>Slowed</i>: The creature is slowed, as by the slow spell, for 2d4 rounds. <p class=sub><i>Paralyzed</i>: The creature is paralyzed and helpless for 1d10 minutes. <p class=sub><i>Killed</i>: Living creatures die. Undead creatures are destroyed. <p class=sub>Furthermore, if you are on your home plane when you cast this spell, nonlawful extraplanar creatures within the area are instantly banished back to their home planes. Creatures so banished cannot return for at least 24 hours. This effect takes place regardless of whether the creatures hear the <i>dictum</i>. The banishment effect allows a Will save (at a -4 penalty) to negate. <p class=sub>Creatures whose HD exceed your caster level are unaffected by dictum.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6b50"
}, {
	name: "Dimension Door",
	summary: "Teleports you and up to max load",
	school: "Conj",
	composition: "V",
	time: "1 a",
	range: "Long",
	effect: "Caster and touched",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 5,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "You instantly transfer yourself from your current location to any other spot within range. You always arrive at exactly the spot desired&emdash;whether by simply visualizing the area or by stating direction, such as '900 feet straight downward,' or 'upward to the northwest, 45-degree angle, 1,200 feet.' After using this spell, you can't take any other actions until your next turn. You can bring along objects as long as their weight doesn't exceed your maximum load. You may also bring one additional willing Medium or smaller creature (carrying gear or objects up to its maxi-mum load) or its equivalent per three caster levels. A Large creature counts as two Medium creatures, a Huge creature counts as two Large creatures, and so forth. All creatures to be transported must be in contact with one another, and at least one of those creatures must be in contact with you. <p class=sub>If you arrive in a place that is already occupied by a solid body, you and each creature traveling with you take 1d6 points of damage and are shunted to a random open space on a suitable surface within 100 feet of the intended location. If there is no free space within 100 feet, you and each creature traveling with you take an additional 2d6 points of damage and are shunted to a free space within 1,000 feet. If there is no free space within 1,000 feet, you and each creature travelling with you take an additional 4d6 points of damage and the spell simply fails.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c762"
}, {
	name: "Dimensional Anchor",
	summary: "Stops extradimensional movement",
	school: "Abjur",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "Ray",
	duration: "1 min/lvl",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 5,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "A green ray springs from your outstretched hand. You must make a ranged touch attack to hit the target. Any creature or object struck by the ray is covered with a shimmering emerald field that completely blocks extradimensional travel. Forms of movement barred by a <i>dimensional anchor</i> include <i>astral projection</i>, <i>blink</i>, <i>dimension door</i>, <i>ethereal jaunt</i>, <i>etherealness</i>, <i>gate</i>, <i>maze</i>, <i>plane shift</i>, <i>shadow walk</i>, <i>teleport</i>, and similar spell-like or psionic abilities. The spell also prevents the use of a <i>gate</i> or <i>teleportation circle</i> for the duration of the spell. <p class=sub>A <i>dimensional anchor</i> does not interfere with the movement of creatures already in ethereal or astral form when the spell is cast, nor does it block extradimensional perception or attack forms, such as a basilisk's gaze. Also, dimensional anchor does not prevent summoned creatures from disappearing at the end of a summoning spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "eae2"
}, {
	name: "Dimensional Lock",
	summary: "Stops extradimensional movement",
	school: "Abjur",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "20-ft radius",
	duration: "1 day/lvl",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 9,
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "You create a shimmering emerald barrier that completely blocks extradimensional travel. Forms of movement barred include <i>astral projection</i>, <i>blink</i>, <i>dimension door</i>, <i>ethereal jaunt</i>, <i>etherealness</i>, <i>gate</i>, <i>maze</i>, <i>plane shift</i>, <i>shadow walk</i>, <i>teleport</i>, and similar spell-like or psionic abilities. Once <i>dimensional lock</i> is in place, extradimensional travel into or out of the area is not possible. <p class=sub>A <i>dimensional lock</i> does not interfere with the movement of creatures already in ethereal or astral form when the spell is cast, nor does it block extradimensional perception or attack forms, such as a basilisk's gaze. Also, the spell does not prevent summoned creatures from disappearing at the end of a summoning spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e4f2"
}, {
	name: "Diminish Plants",
	summary: "Reduces size of plants",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Special",
	effect: "Special",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 4,
		"Ranger": 3
	},
	description: "This spell has two versions. <p class=sub><i>Prune Growth</i>: This version causes normal vegetation (grasses, briars, bushes, creepers, hedges, thistles, trees, vines, and so forth) within long range (400 feet + 40 feet per level) to shrink to about one-third of their normal size, becoming untangled and less bushy. The affected vegetation appears to have been carefully pruned and trimmed. <p class=sub>At your option, the area can be a 100-foot-radius circle, a 150-foot-radius semi-circle, or a 200-foot-radius quarter-circle. You may also designate portions of the area that are not affected. <p class=sub><i>Stunt Growth</i>: This version targets normal plants within a range of 1/2 mile, reducing their potential productivity over the course of the following year to one-third below normal. <p class=sub><i>Diminish plants</i> counters <i>plant growth</i>. This spell has no effect on plant creatures.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "71e7"
}, {
	name: "Discern Lies",
	summary: "Reveals deliberate falsehoods",
	school: "Div",
	composition: "V, S,DF",
	time: "1 a",
	range: "Close",
	effect: "Creature/lvl in 30-ft",
	duration: "Conc, 1 rnd/lvl",
	save: "Will negs",
	sr: "-",
	classes: {
		"Cleric": 5,
		"Paladin": 3
	},
	description: "Each round, you concentrate on one subject, who must be within range. You knowif the subject deliberately and knowinglyspeaks a lie by discerning disturbances inits aura caused by lying. The spell does notreveal the truth, uncover unintentionainaccuracies, or necessarily reveal evasions.Each round, you may concentrate on different subject.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "26b0"
}, {
	name: "Discern Location",
	summary: "Exact location of creature or item",
	school: "Div",
	composition: "V, S,DF",
	time: "10 min",
	range: "Unlimited",
	effect: "One creature or item",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 9,
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "A <i>discern location</i> spell is among the most powerful means of locating creatures or objects. Nothing short of a <i>mind blank</i> spell or the direct intervention of a deity keeps you from learning the exact location of a single individual or object. <i>Discern location</i> circumvents normal means of protection from scrying or location. The spell reveals the name of the creature or object's location (place, name, business name, building name, or the like), community, county (or similar political division), country, continent, and the plane of existence where the target lies. <p class=sub>To find a creature with the spell, you must have seen the creature or have some item that once belonged to it. To find an object, you must have touched it at least once.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8459"
}, {
	name: "Disguise Self",
	summary: "Change appearance, +10 Disguise",
	school: "Illus",
	composition: "V, S",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "10 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "You make yourself&emdash;including clothing, armor, weapons, and equipment&emdash;look different. You can seem 1 foot shorter or taller, thin, fat, or in between. You cannot change your body type. For example, a human caster could look human, humanoid, or like any other human-shaped bipedal creature. Otherwise, the extent of the apparent change is up to you. You could add or obscure a minor feature or look like an entirely different person. <p class=sub>The spell does not provide the abilities or mannerisms of the chosen form, nor does it alter the perceived tactile (touch) or audible (sound) properties of you or your equipment. A battleaxe made to look like a dagger still functions as a battleaxe. <p class=sub>If you use this spell to create a disguise, you get a +10 bonus on the Disguise check. <p class=sub>A creature that interacts with the glamer gets a Will save to recognize it as an illusion. For example, a creature that touched you and realized that the tactile sensation did not match the visual one would be entitled to such a save.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "156d"
}, {
	name: "Disintegrate",
	summary: "Disintegrates creat/obj or 5d6 dmg",
	school: "Trans",
	composition: "V, S, M (a lodestone and a pinch of dust)",
	time: "1 a",
	range: "Medium",
	effect: "Ray, 10-ft cube",
	duration: "Instantaneous",
	save: "Fort part",
	sr: "Yes",
	classes: {
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "A thin, green ray springs from your pointing finger. You must make a successful ranged touch attack to hit. Any creature struck by the ray takes 2d6 points of damage per caster level (to a maximum of 40d6). Any creature reduced to 0 or fewer hit points by this spell is entirely disintegrated, leaving behind only a trace of fine dust. A disintegrated creature's equipment is unaffected. <p class=sub>When used against an object, the ray simply disintegrates as much as one 10-foot cube of nonliving matter. Thus, the spell disintegrates only part of any very large object or structure targeted. The ray affects even objects constructed entirely of force, such as <i>Bigby's forceful hand</i> or a <i>wall of force</i>, but not magical effects such as a <i>globe of invulnerability</i> or an <i>antimagic field</i>. <p class=sub>A creature or object that makes a successful Fortitude save is partially affected, taking only 5d6 points of damage. If this damage reduces the creature or object to 0 or fewer hit points, it is entirely disintegrated. <p class=sub>Only the first creature or object struck can be affected; that is, the ray affects only one target per casting.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b580"
}, {
	name: "Dismissal",
	summary: "Force creature back to native plane",
	school: "Abjur",
	composition: "V, S,DF",
	time: "1 a",
	range: "Close",
	effect: "Extraplanar creature",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 5,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "This spell forces an extraplanar creature back to its proper plane if it fails a special Will save (DC = spell's save DC - creature's HD + your caster level). If the spell is successful, the creature is instantly whisked away, but there is a 20% chance of actually sending the subject to a plane other than its own.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b952"
}, {
	name: "Dispel Chaos",
	summary: "+4 AC against chaotic attackers, banish",
	school: "Abjur",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "Special",
	duration: "1 rnd/lvl or till used",
	save: "Special",
	sr: "Sp",
	classes: {
		"Cleric": 6,
		"Paladin": 4
	},
	description: "This spell functions like <i>dispel evil</i>, except that you are surrounded by constant, blue, lawful energy, and the spell affects chaotic creatures and spells rather than evil ones.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1af5"
}, {
	name: "Dispel Evil",
	summary: "+4 AC against evil attackers, banish",
	school: "Abjur",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "Special",
	duration: "1 rnd/lvl or till used",
	save: "Special",
	sr: "Sp",
	classes: {
		"Cleric": 6,
		"Paladin": 4
	},
	description: "Shimmering, white, holy energy surrounds you. This power has three effects. <p class=sub>First, you gain a +4 deflection bonus to AC against attacks by evil creatures. <p class=sub>Second, on making a successful melee touch attack against an evil creature from another plane, you can choose to drive that creature back to its home plane. The creature can negate the effects with a successful Will save (spell resistance applies). This use discharges and ends the spell. <p class=sub><i>Third, with a touch you can automatically dispel any one enchantment spell cast by an evil creature or any one evil spell. <i>Exception</i></i>: Spells that can't be dispelled by <i>dispel magic</i> also can't be dispelled by <i>dispel evil</i>. Saving throws and spell resistance do not apply to this effect. This use discharges and ends the spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9325"
}, {
	name: "Dispel Good",
	summary: "+4 AC against good attackers, banish",
	school: "Abjur",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "Special",
	duration: "1 rnd/lvl or till used",
	save: "Special",
	sr: "Sp",
	classes: {
		"Cleric": 6
	},
	description: "This spell functions like <i>dispel evil</i>, except that you are surrounded by dark, wavering, unholy energy, and the spell affects good creatures and spells rather than evil ones.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ee97"
}, {
	name: "Dispel Law",
	summary: "+4 AC against lawful attackers, banish",
	school: "Abjur",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "Special",
	duration: "1 rnd/lvl or till used",
	save: "Special",
	sr: "Sp",
	classes: {
		"Cleric": 6
	},
	description: "This spell functions like <i>dispel evil</i>, except that you are surrounded by flickering, yellow, chaotic energy, and the spell affects lawful creatures and spells rather than evil ones.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4feb"
}, {
	name: "Dispel Magic",
	summary: "Cancels magical effects (+10)",
	school: "Abjur",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "Special",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 4,
		"Cleric": 4,
		"Druid": 5,
		"Paladin": 3,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "Because magic is so powerful, so too is the ability to dispel magic. You can use <i>dispel magic</i> to end ongoing spells that have been cast on a creature or object, to temporarily suppress the magical abilities of a magic item, to end ongoing spells (or at least their effects) within an area, or to counter another spellcaster's spell. A dispelled spell ends as if its duration had expired. Some spells, as descriptioned in their summarys, can't be defeated by dispel magic. <i>Dispel magic</i> can dispel (but not counter) spell-like effects just as it does spells. <p class=sub><i>Note</i>: The effect of a spell with an instantaneous duration can't be dispelled, because the magical effect is already over before the <i>dispel magic</i> can take effect. Thus, you can't use <i>dispel magic</i> to repair damage caused by a <i>fireball</i> or to turn a petrified character back to flesh. In these cases, the magic has departed, leaving only burned flesh or perfectly normal stone in its wake. <p class=sub><i>You choose to use <i>dispel magic</i> in one of three ways</i>: a targeted dispel, an area dispel, or a counterspell: <p class=sub><i>Targeted Dispel</i>: One object, creature, or spell is the target of the <i>dispel magic</i> spell. You make a dispel check (1d20 + your caster level, maximum +10) against the spell or against each ongoing spell currently in effect on the object or creature. The DC for this dispel check is 11 + the spell's caster level. <p class=sub>For example, Mialee, at 5th level, targets <i>dispel magic</i> on a drow who is under the effects of <i>haste</i>, <i>mage armor</i>, and <i>bull's strength</i>. All three spells were cast on the drow by a 7th-level wizard. Mialee makes a dispel check (1d20 + 5 against DC 18) three times, once each for the <i>haste</i>, <i>mage armor</i>, and <i>bull's strength</i> effects. If she succeeds on a particular check, that spell is dispelled (the drow's spell resistance doesn't help him); if she fails, that spell remains in effect. <p class=sub>If you target an object or creature that is the effect of an ongoing spell (such as a monster summoned by <i>monster summoning</i>), you make a dispel check to end the spell that conjured the object or creature. <p class=sub><i>If the object that you target is a magic item, you make a dispel check against the item's caster level. If you succeed, all the item's magical properties are suppressed for 1d4 rounds, after which the item recovers on its own. A suppressed item becomes nonmagical for the duration of the effect. An interdimensional interface (such as a <i>bag of holding</i>) is temporarily closed. A magic item's physical properties are unchanged</i>: A suppressed magic sword is still a sword (a masterwork sword, in fact). Artifacts and deities are unaffected by mortal magic such as this. <p class=sub>You automatically succeed on your dispel check against any spell that you cast yourself. <p class=sub><i>Area Dispel</i>: When <i>dispel magic</i> is used in this way, the spell affects everything within a 20-foot radius. <p class=sub>For each creature within the area that is the subject of one or more spells, you make a dispel check against the spell with the highest caster level. If that check fails, you make dispel checks against progressively weaker spells until you dispel one spell (which discharges the <i>dispel magic</i> spell so far as that target is concerned) or until you fail all your checks. The creature's magic items are not affected. <p class=sub>For each object within the area that is the target of one or more spells, you make dispel checks as with creatures. Magic items are not affected by an area dispel. <p class=sub>For each ongoing area or effect spell whose point of origin is within the area of the <i>dispel magic</i> spell, you can make a dispel check to dispel the spell. <p class=sub>For each ongoing spell whose area overlaps that of the <i>dispel magic</i> spell, you can make a dispel check to end the effect, but only within the overlapping area. <p class=sub>If an object or creature that is the effect of an ongoing spell (such as a monster summoned by <i>monster summoning</i>) is in the area, you can make a dispel check to end the spell that conjured that object or creature (returning it whence it came) in addition to attempting to dispel spells targeting the creature or object. <p class=sub>You may choose to automatically succeed on dispel checks against any spell that you have cast. <p class=sub><i>Counterspell</i>: When <i>dispel magic</i> is used in this way, the spell targets a spellcaster and is cast as a counterspell (page 170). Unlike a true counterspell, however, <i>dispel magic</i> may not work; you must make a dispel check to counter the other spellcaster's spell. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1c71"
}, {
	name: "Dispel Magic, Greater",
	summary: "Cancels magical effects (+20)",
	school: "Abjur",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "Special",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 6,
		"Cleric": 7,
		"Druid": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This spell functions like <i>dispel magic</i>, except that the maximum caster level on your dispel check is +20 instead of +10. Additionally, <i>greater dispel magic</i> has a chance to dispel any effect that <i>remove curse</i> can remove, even if <i>dispel magic</i> can't dispel that effect.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1378"
}, {
	name: "Displacement",
	summary: "Attacks miss target 50% of time",
	school: "Illus",
	composition: "V, M (a small strip of leather made from displacer beast hide, twisted into a loop)",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 rnd/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "Emulating the natural ability of the displacer beast (see the <i>Monster Manual</i>), the subject of this spell appears to be about 2 feet away from its true location. The creature benefits from a 50% miss chance as if it had total concealment. However, unlike actual total concealment, <i>displacement</i> does not prevent enemies from targeting the creature normally. <i>True seeing</i> reveals its true location.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6582"
}, {
	name: "Disrupt Undead",
	summary: "Deals 1d6 damage to one undead",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Ray",
	duration: "Instantaneous",
	save: "-",
	sr: "Yes",
	classes: {
		"Sorceror": 1,
		"Wizard": 1
	},
	description: "You direct a ray of positive energy. You must make a ranged touch attack to hit, and if the ray hits an undead creature, it deals 1d6 points of damage to it.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2240"
}, {
	name: "Disrupting Weapon",
	summary: "Undead save vs lvl or be destroyed",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One weapon",
	duration: "1 rnd/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 6
	},
	description: "This spell makes a melee weapon deadly to undead. Any undead creature with HD equal to or less than your caster level must succeed on a Will save or be destroyed utterly if struck in combat with this weapon. Spell resistance does not apply against the destruction effect.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d3e5"
}, {
	name: "Divination",
	summary: "Provides useful advice for actions",
	school: "Div",
	composition: "V, S, M (incense and a sacrificial offering appropriate to your religion, together worth at least 25 gp)",
	time: "10 min",
	range: "Self",
	effect: "Caster",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 5
	},
	description: "Similar to <i>augury</i> but more powerful, a <i>divination</i> spell can provide you with a useful piece of advice in reply to a question concerning a specific goal, event, or activity that is to occur within one week. The advice can be as simple as a short phrase, or it might take the form of a cryptic rhyme or omen. <p class=sub><i>For example, suppose the question is \"Will we do well if we venture into the ruined temple of Erythnul?\" The DM knows that a terrible troll guarding 10,000 gp and a <i>+1 shield</i> lurks near the entrance but estimates that your party could beat the troll after a hard fight. Therefore the <i>divination</i> response might be</i>: \"Ready oil and open flame light your way to wealth.\" In all cases, the DM controls what information you receive. If your party doesn't act on the information, the conditions may change so that the information is no longer useful. (For example, the troll could move away and take the treasure with it.) <p class=sub>The base chance for a correct <i>divination</i> is 70% + 1% per caster level, to a maximum of 90%. The DM adjusts the chance if unusual circumstances require it (if, for example, unusual precautions against divination spells have been taken). If the dice roll fails, you know the spell failed, unless specific magic yielding false information is at work. <p class=sub>As with <i>augury</i>, multiple <i>divinations</i> about the same topic by the same caster use the same dice result as the first <i>divination</i> spell and yield the same answer each time.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c775"
}, {
	name: "Divine Favor",
	summary: "You gain att, dmg bonus +1/3 lvls",
	school: "Evoc",
	composition: "V, S,DF",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 min",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 2,
		"Paladin": 1
	},
	description: "Calling upon the strength and wisdom of a deity, you gain a +1 luck bonus on attack and weapon damage rolls for every three caster levels you have (at least +1, maximum +6). The bonus doesn't apply to spell damage.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "62f8"
}, {
	name: "Divine Power",
	summary: "+lvl as Att bonus, +6 Str, 1 hp/lvl",
	school: "Evoc",
	composition: "V, S,DF",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 rnd/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 5
	},
	description: "Calling upon the divine power of your patron, you imbue yourself with strength and skill in combat. Your base attack bonus becomes equal to your character level (which may give you additional attacks), you gain a +6 enhancement bonus to Strength, and you gain 1 temporary hit point per caster level.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f7d4"
}, {
	name: "Dominate Animal",
	summary: "Animal obeys mental commands",
	school: "Ench",
	composition: "V, S",
	time: "Round",
	range: "Close",
	effect: "One animal",
	duration: "1 rnd/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Druid": 4
	},
	description: "You can enchant an animal and direct it with simple commands such as \"Attack,\" \"Run,\" and \"Fetch.\" Suicidal or self-destructive commands (including an order to attack a creature two or more size categories larger than the <i>dominated</i> animal) are simply ignored. <p class=sub><i>Dominate animal</i> establishes a mental link between you and the subject creature. The animal can be directed by silent mental command as long as it remains in range. You need not see the creature to control it. You do not receive direct sensory input from the creature, but you know what it is experiencing. Because you are directing the animal with your own intelligence, it may be able to undertake actions normally beyond its own comprehension. You need not concentrate exclusively on controlling the creature unless you are trying to direct it to do something it normally couldn't do. Changing your instructions or giving a dominated creature a new command is the equivalent of redirecting a spell, so it is a move action.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6870"
}, {
	name: "Dominate Monster",
	summary: "Control creature telepathically",
	school: "Ench",
	composition: "V, S",
	time: "Round",
	range: "Close",
	effect: "One creature",
	duration: "1 day/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "This spell functions like <i>dominate person</i>, except that the spell is not restricted by creature type.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ee27"
}, {
	name: "Dominate Person",
	summary: "Control humanoid telepathically",
	school: "Ench",
	composition: "V, S",
	time: "Round",
	range: "Close",
	effect: "One humanoid",
	duration: "1 day/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 5,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "You can control the actions of any humanoid creature through a telepathic link that you establish with the subject's mind. If you and the subject have a common language, you can generally force the subject to perform as you desire, within the limits of its abilities. If no common language exists, you can communicate only basic commands, such as \"Come here,\" \"Go there,\" \"Fight,\" and \"Stand still.\" You know what the subject is experiencing, but you do not receive direct sensory input from it, nor can it communicate with you telepathically. <p class=sub>Once you have given a <i>dominated</i> creature a command, it continues to attempt to carry out that command to the exclusion of all other activities except those necessary for day-to-day survival (such as sleeping, eating, and so forth). Because of this limited range of activity, a Sense Motive check against DC 15 (rather than DC 25) can determine that the subject's behavior is being influenced by an enchantment effect (see the Sense Motive skill summary, page 81). <p class=sub>Changing your instructions or giving a dominated creature a new command is the equivalent of redirecting a spell, so it is a move action. <p class=sub>By concentrating fully on the spell (a standard action), you can receive full sensory input as interpreted by the mind of the subject, though it still can't communicate with you. You can't actually see through the subject's eyes, so it's not as good as being there yourself, but you still get a good idea of what's going on (the subject is walking through a smelly courtyard, the subject is talking to a guard, the guard looks suspicious, and so forth). <p class=sub>Subjects resist this control, and any subject forced to take actions against its nature receives a new saving throw with a +2 bonus. Obviously self-destructive orders are not carried out. Once control is established, the range at which it can be exercised is unlimited, as long as you and the subject are on the same plane. You need not see the subject to control it.<p class=sub>If you don't spend at least 1 round concentrating on the spell each day, the subject receives a new saving throw to throw off the domination. <p class=sub><i>Protection from evil</i> or a similar spell can prevent you from exercising control or using the telepathic link while the subject is so warded, but such an effect neither prevents the establishment of dominationnor dispels it.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "acdb"
}, {
	name: "Doom",
	summary: "-2 on attacks, dmg, saves, skills",
	school: "Necro",
	composition: "V, S,DF",
	time: "1 a",
	range: "Medium",
	effect: "One living creature",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 2
	},
	description: "This spell fills a single subject with a feeling of horrible dread that causes it to become shaken.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c2a0"
}, {
	name: "Dream",
	summary: "Sends message to anyone sleeping",
	school: "Illus",
	composition: "V, S",
	time: "1 min",
	range: "Unlimited",
	effect: "One living creature",
	duration: "Special",
	save: "-",
	sr: "Yes",
	classes: {
		"Bard": 6,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "You, or a messenger touched by you, sends a phantasmal message to others in the form of a dream. At the beginning of the spell, you must name the recipient or identify him or her by some title that leaves no doubt as to identity. The messenger then enters a trance, appears in the intended recipient's dream, and delivers the message. The message can be of any length, and the recipient remembers it perfectly upon waking. The communication is one-way. The recipient cannot ask questions or offer information, nor can the messenger gain any information by observing the dreams of the recipient. Once the message is delivered, the messenger's mind returns instantly to its body. The duration of the spell is the time required for the messenger to enter the recipient's dream and deliver the message. <p class=sub>If the recipient is awake when the spell begins, the messenger can choose to wake up (ending the spell) or remain in the trance. The messenger can remain in the trance until the recipient goes to sleep, then enter the recipient's dream and deliver the message as normal. A messenger that is disturbed during the trance comes awake, ending the spell. <p class=sub>Creatures who don't sleep (such as elves, but not half-elves) or don't dream cannot be contacted by this spell. <p class=sub>The messenger is unaware of its own surroundings or of the activities around it while in the trance. It is defenseless both physically and mentally (always fails any saving throw) while in the trance.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "73e9"
}, {
	name: "Eagle's Splendor",
	summary: "+4 Cha",
	school: "Trans",
	composition: "V, S, M/DF (a few feathers or a pinch of droppings from an eagle)",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Cleric": 3,
		"Paladin": 2,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "The transmuted creature becomes more poised, articulate, and personally forceful. The spell grants a +4 enhancement bonus to Charisma, adding the usual benefits to Charisma-based skill checks and other uses of the Charisma modifier. Sorcerers and bards (and other spellcasters who rely on Charisma) affected by this spell do not gain any additional bonus spells for the increased Charisma, but the save DCs for spells they cast while under this spell's effect do increase",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5b91"
}, {
	name: "Eagle's Splendor, Mass",
	summary: "+4 Cha to 1 creature/lvl",
	school: "Trans",
	composition: "V, S, M/DF",
	time: "1 a",
	range: "Close",
	effect: "Creature/lvl in 30-ft",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 7,
		"Cleric": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This spell functions like <i>eagle's splendor</i>, except that it affects multiple creatures.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "72ec"
}, {
	name: "Earthquake",
	summary: "Intense tremor shakes 5-ft/lvl rad",
	school: "Evoc",
	composition: "V, S,DF",
	time: "1 a",
	range: "Long",
	effect: "80-ft/lvl radius",
	duration: "1 rnd",
	save: "Special",
	sr: "-",
	classes: {
		"Cleric": 9
	},
	description: "When you cast <i>earthquake</i>, an intense but highly localized tremor rips the ground. The shock knocks creatures down, collapses structures, opens cracks in the ground, and more. The effect lasts for 1 round, during which time creatures on the ground can't move or attack. A spellcaster on the ground must make a Concentration check (DC 20 + spell level) or lose any spell he or she tries to cast. The earthquake affects all terrain, vegetation, structures, and creatures in the area. The specific effect of an <i>earthquake</i> spell depends on the nature of the terrain where it is cast. <p class=sub><i>Cave, Cavern, or Tunnel</i>: The spell collapses the roof, dealing 8d6 points of bludgeoning damage to any creature caught under the cave-in (Reflex DC 15 half ) and pinning that creature beneath the rubble (see below). An earthquake cast on the roof of a very large cavern could also endanger those outside the actual area but below the falling debris. <p class=sub><i>Cliffs</i>: <i>Earthquake</i> causes a cliff to crumble, creating a landslide that travels horizontally as far as it fell vertically. An earthquake cast at the top of a 100-foot cliff would sweep debris 100 feet outward from the base of the cliff. Any creature in the path takes 8d6 points of bludgeoning damage (Reflex DC 15 half ) and is pinned beneath the rubble (see below). <p class=sub><i>Open Ground</i>: Each creature standing in the area must make a DC 15 Reflex save or fall down. Fissures open in the earth, and every creature on the ground has a 25% chance to fall into one (Reflex DC 20 to avoid a fissure). At the end of the spell, all fissures grind shut, killing any creatures still trapped within. <p class=sub><i>Structure</i>: Any structure standing on open ground takes 100 points of damage, enough to collapse a typical wooden or masonry building, but not a structure built of stone or reinforced masonry. Hardness does not reduce this damage, nor is it halved as damage dealt to objects normally is (See the <i>Dungeon Master's Guide</i> for information on hit points for walls and the like.) Any creature caught inside a collapsing structure takes 8d6 points of bludgeoning damage (Reflex DC 15 half ) and is pinned beneath the rubble (see below). <p class=sub><i>River, Lake, or Marsh</i>: Fissures open underneath the water, draining away the water from that area and forming muddy ground. Soggy marsh or swampland becomes quicksand for the duration of the spell, sucking down creatures and structures. Each creature in the area must make a DC 15 Reflex save or sink down in the mud and quicksand. At the end of the spell, the rest of the body of water rushes in to replace the drained water, possibly drowning those caught in the mud. <p class=sub><i>Pinned beneath Rubble</i>: Any creature pinned beneath rubble takes 1d6 points of nonlethal damage per minute while pinned. If a pinned character falls unconscious, he or she must make a DC 15 Constitution check or take 1d6 points of lethal damage each minute thereafter until freed or dead.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "83d5"
}, {
	name: "Elemental Body I",
	school: "Trans (polymorph)",
	classes: {
		Sorceror: 4,
		Wizard: 4
	},
	time: "1 a",
	composition: "V, S, M (the element you plan to assume)",
	range: "Self",
	effect: "Caster",
	duration: "1 min/lvl (D)",
	description: "when you cast this spell, you can assume the form of a Small air, earth, fire, or water elemental (see the <i>Pathfinder RPG Bestiary</i>). The abilities you gain depend upon the type of elemental into which you change. Elemental abilities based on size, such as burn, vortex, and whirlwind, use the size of the elemental you transform into to determine their effect.<p class=sub><i>Air elemental: </i>If the form you take is that of a Small air elemental, you gain a +2 size bonus to your Dexterity and a +2 natural armor bonus. You also gain fly 60 feet (perfect), darkvision 60 feet, and the ability to create a whirlwind.<p class=sub><i>Earth elemental: </i>If the form you take is that of a Small earth elemental, you gain a +2 size bonus to your Strength and a +4 natural armor bonus. You also gain darkvision 60 feet, the push ability, and the ability to earth glide.			<p class=sub><i>Fire elemental: </i>If the form you take is that of a Small fire elemental, you gain a +2 size bonus to your Dexterity and a +2 natural armor bonus. You gain darkvision 60 feet, resist fire 20, vulnerability to cold, and the burn ability.<p class=sub><i>Water elemental: </i>If the form you take is that of a Small  water elemental, you gain a +2 size bonus to your Constitution and a +4 natural armor bonus. You also gain swim 60 feet, darkvision 60 feet, the ability to create a vortex, and the ability to breathe water.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "de74"
}, {
	name: "Elemental Body II",
	school: "Trans (polymorph)",
	classes: {
		Sorceror: 5,
		Wizard: 5
	},
	description: "This spell functions as <i>elemental body I</i>, except that it also allows you to assume the form of a Medium air, earth, fire, or water elemental. The abilities you gain depend upon the elemental.<p class=sub>Air elemental: As <i>elemental body I</i> except that you gain a +4 size bonus to your Dexterity and a +3 natural armor bonus. <p class=sub>Earth elemental: As <i>elemental body I</i> except that you gain a +4 size bonus to your Strength and a +5 natural armor bonus. <p class=sub>Fire elemental: As <i>elemental body I</i> except that you gain a +4 size bonus to your Dexterity and a +3 natural armor bonus.<p class=sub>Water elemental: As <i>elemental body I</i> except that you gain a +4 size bonus to your Constitution and a +5 natural armor bonus.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "aac"
}, {
	name: "Elemental Body III",
	school: "Trans (polymorph)",
	classes: {
		Sorceror: 6,
		Wizard: 6
	},
	description: "This spell functions as <i>elemental body II,</i> except that it also allows you to assume the form of a Large air, earth, fire, or water elemental. The abilities you gain depend upon the type of elemental into which you change. You are also immune to critical hits and sneak attacks while in elemental form.<p class=sub><i>Air elemental</i> As <i>elemental body I</i> except that you gain a +2 size bonus to your Strength, +4 size bonus to your Dexterity, and a +4 natural armor bonus. <p class=sub><i>Earth elemental</i> As <i>elemental body I</i> except that you gain a +6 size bonus to your Strength, a &emdash;2 penalty on your Dexterity, a +2 size bonus to your Constitution, and a +6 natural armor bonus. <p class=sub><i>Fire elemental</i> As <i>elemental body I</i> except that you gain a +4 size bonus to your Dexterity, a +2 size bonus to your Constitution, and a +4 natural armor bonus.<p class=sub><i>Water elemental</i> As <i>elemental body I</i> except that you gain a +2 size bonus to your Strength, a &emdash;2 penalty on your Dexterity, a +6 size bonus to your Constitution, and a +6 natural armor bonus.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1364"
}, {
	name: "Elemental Body IV",
	school: "Trans (polymorph)",
	classes: {
		Sorceror: 7,
		Wizard: 7
	},
	description: "This spell functions as <i>elemental body III,</i> except that it also allows you to assume the form of a Huge air, earth, fire, or water elemental. The abilities you gain depend upon the type of elemental into which you change. You are also immune to critical hits and sneak attacks while in elemental form and gain DR 5/&emdash;.<p class=sub><i>Air elemental</i> As <i>elemental body I</i> except that you gain a +4 size bonus to your Strength, +6 size bonus to your Dexterity, and a +4 natural armor bonus. You also gain fly 120 feet (perfect).<p class=sub><i>Earth elemental</i> As <i>elemental body I</i> except that you gain a +8 size bonus to your Strength, a &emdash;2 penalty on your Dexterity, a +4 size bonus to your Constitution, and a +6 natural armor bonus. <p class=sub><i>Fire elemental</i> As <i>elemental body I</i> except that you gain a +6 size bonus to your Dexterity, a +4 size bonus to your Constitution, and a +4 natural armor bonus.<p class=sub><i>Water elemental</i> As <i>elemental body I</i> except that you gain a +4 size bonus to your Strength, a &emdash;2 penalty on your Dexterity, a +8 size bonus to your Constitution, and a +6 natural armor bonus. You also gain swim 120 feet.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "90ff"
}, {
	name: "Elemental Swarm",
	summary: "Summons 2d4 Large, 1d4 Huge",
	school: "Conj",
	composition: "V, S",
	time: "10 min",
	range: "Medium",
	effect: "2+ creatures",
	duration: "10 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 10
	},
	description: "This spell opens a portal to an Elemental Plane and summons elementals from it. A druid can choose the plane (Air, Earth, Fire, or Water); a cleric opens a portal to the plane matching his domain. <p class=sub>When the spell is complete, 2d4 Large elementals appear. Ten minutes later, 1d4 Huge elementals appear. Ten minutes after that, one greater elemental appears. Each elemental has maximum hit points per HD. Once these creatures appear, they serve you for the duration of the spell. <p class=sub>The elementals obey you explicitly and never attack you, even if someone else manages to gain control over them. You do not need to concentrate to maintain control over the elementals. You can dismiss them singly or in groups at any time. <p class=sub>When you use a summoning spell to summon an air, earth, fire, or water creature, it is a spell of that type. For example, <i>elemental swarm</i> is a fire spell when you cast it to summon fire elementals and a water spell when you use it to summon water elementals.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b40b"
}, {
	name: "Endure Elements",
	summary: "Protected in extreme temperatures",
	school: "Abjur",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "24 hours",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 2,
		"Druid": 2,
		"Paladin": 1,
		"Ranger": 1,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "A creature protected by <i>endure elements</i> suffers no harm from being in a hot or cold environment. It can exist comfortably in conditions between '50 and 140 degrees Fahrenheit without having to make Fortitude saves (as described in the <i>Dungeon Master's Guide</i>). The creature's equipment is likewise protected. <p class=sub><i>Endure elements</i> doesn't provide any protection from fire or cold damage, nor does it protect against other environmental hazards such as smoke, lack of air, and so forth.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b2af"
}, {
	name: "Energy Drain",
	summary: "Target gains 2d4 negative levels",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Negative energy ray",
	duration: "Instantaneous",
	save: "Fort part",
	sr: "Yes",
	classes: {
		"Cleric": 10,
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "This spell functions like <i>enervation</i>, except that the creature struck gains 2d4 negative levels, and the negative levels last longer. <p class=sub>There is no saving throw to avoid gaining the negative levels, but 24 hours after gaining them, the subject must make a Fortitude saving throw (DC = <i>energy drain</i> spell's save DC) for each negative level. If the save succeeds, that negative level is removed. If it fails, the negative level also goes away, but one of the subject's character levels is permanently drained. <p class=sub>An undead creature struck by the ray gains 2d4×5 temporary hit points for 1 hour.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6b9e"
}, {
	name: "Enervation",
	summary: "Target gains 1d4 negative levels",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Negative energy ray",
	duration: "Instantaneous",
	save: "-",
	sr: "Yes",
	classes: {
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "You point your finger and utter the incantation, releasing a black ray of crackling negative energy that suppresses the life force of any living creature it strikes. You must make a ranged touch attack to hit. If the attack succeeds, the subject gains 1d4 negative levels. <p class=sub>If the subject has at least as many negative levels as HD, it dies. Each negative level gives a creature a '1 penalty on attack rolls, saving throws, skill checks, ability checks, and effective level (for determining the power, duration, DC, and other descriptions of spells or special abilities). Additionally, a spellcaster loses one spell or spell slot from his or her highest available level. Negative levels stack. <p class=sub>Assuming the subject survives, it regains lost levels after a number of hours equal to your caster level (maximum 15 hours). Usually, negative levels have a chance of permanently draining the victim's levels, but the negative levels from <i>enervation</i> don't last long enough to do so. <p class=sub>An undead creature struck by the ray gains 1d4×5 temporary hit points for 1 hour.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1605"
}, {
	name: "Enlarge Person",
	summary: "+2 Str, -2 Dex, -1 Att, -1 AC",
	school: "Trans",
	composition: "V, S, M (a pinch of powdered iron)",
	time: "Round",
	range: "Close",
	effect: "One humanoid",
	duration: "1 min/lvl (D)",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "This spell causes instant growth of a humanoid creature, doubling its height and multiplying its weight by 8. This increase changes the creature's size category to the next larger one. The target gains a +2 size bonus to Strength, a '2 size penalty to Dexterity (to a minimum of 1), and a '1 penalty on attack rolls and AC due to its increased size. <p class=sub>A humanoid creature whose size increases to Large has a space of 10 feet and a natural reach of 10 feet. This spell does not change the target's speed. <p class=sub>If insufficient room is available for the desired growth, the creature attains the maximum possible size and may make a Strength check (using its increased Strength) to burst any enclosures in the process. If it fails, it is constrained without harm by the materials enclosing it&emdash;the spell cannot be used to crush a creature by increasing its size. <p class=sub>All equipment worn or carried by a creature is similarly enlarged by the spell. Melee and projectile weapons affected by this spell deal more damage (see Table 2'2 in the <i>Dungeon Master's Guide</i>). Other magical properties are not affected by this spell. Any <i>enlarged</i> item that leaves an <i>enlarged</i> creature's possession (including a projectile or thrown weapon) instantly returns to its normal size. This means that thrown weapons deal their normal damage, and projectiles deal damage based on the size of the weapon that fired them. Magical properties of <i>enlarged</i> items are not increased by this spell&emdash;an <i>enlarged</i> +1 sword still has only a +1 enhancement bonus, a staff-sized wand is still only capable of its normal functions, a giant-sized potion merely requires a greater fluid intake to make its magical effects operate, and so on. <p class=sub>Multiple magical effects that increase size do not stack, which means (among other things) that you can't use a second casting of this spell to further increase the size of a humanoid that's still under the effect of the first casting. <p class=sub><i>Enlarge person</i> counters and dispels <i>reduce person</i>. <p class=sub><i>Enlarge person</i> can be made permanent with a <i>permanency</i> spell",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "794b"
}, {
	name: "Enlarge Person, Mass",
	summary: "+2 Str, -2 Dex, -1 Att, -1 AC",
	school: "Trans",
	composition: "V, S, M",
	time: "Round",
	range: "Close",
	effect: "Humanoid/lvl in 30-ft",
	duration: "1 min/lvl (D)",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "This spell functions like <i>enlarge person</i>, except that it affects multiple creatures.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4252"
}, {
	name: "Entangle",
	summary: "Plants entangle",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Long",
	effect: "40-ft radius",
	duration: "1 min/lvl (D)",
	save: "Ref part",
	sr: "-",
	classes: {
		"Druid": 2,
		"Ranger": 1
	},
	description: "Grasses, weeds, bushes, and even trees wrap, twist, and entwine about creatures in the area or those that enter the area, holding them fast and causing them to become entangled. The creature can break free and move half its normal speed by using a full-round action to make a DC 20 Strength check or a DC 20 Escape Artist check. A creature that succeeds on a Reflex save is not entangled but can still move at only half speed through the area. Each round on your turn, the plants once again attempt to entangle all creatures that have avoided or escaped entanglement. <p class=sub><i>Note</i>: The DM may alter the effects of the spell somewhat, based on the nature of the entangling plants.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "fd4e"
}, {
	name: "Enthrall",
	summary: "Captivates all within medium range",
	school: "Ench",
	composition: "V, S",
	time: "Round",
	range: "Medium",
	effect: "Creatures in range",
	duration: "Up to 1 hour",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Cleric": 3
	},
	description: "If you have the attention of a group of creatures, you can use this spell to hold them spellbound. To cast the spell, you must speak or sing without interruption for 1 full round. Thereafter, those affected give you their undivided attention, ignoring their surroundings. They are considered to have an attitude of friendly while under the effect of the spell (see the <i>Dungeon Master's Guide</i> for information about NPC attitudes). Any potentially affected creature of a race or religion unfriendly to yours gets a +4 bonus on the saving throw. <p class=sub>A creature with 4 or more HD or with a Wisdom score of 16 or higher remains aware of its surroundings and has an attitude of indifferent. It gains a new saving throw if it witnesses actions that it opposes. <p class=sub>The effect lasts as long as you speak or sing, to a maximum of 1 hour. Those enthralled by your words take no action while you speak or sing and for 1d3 rounds thereafter while they discuss the topic or performance. Those entering the area during the performance must also successfully save or become enthralled. The speech ends (but the 1d3-round delay still applies) if you lose concentration or do anything other than speak or sing. <p class=sub>If those not <i>enthralled</i> have unfriendly or hostile attitudes toward you, they can collectively make a Charisma check to try to end the spell by jeering and heckling. For this check, use the Charisma bonus of the creature with the highest Charisma in the group; others may make Charisma checks to assist (as described in Aid Another, page 65). The heckling ends the spell if this check result beats your Charisma check result. Only one such challenge is allowed per use of the spell. <p class=sub>If any member of the audience is attacked or subjected to some other overtly hostile act, the spell ends and the previously <i>enthralled</i> members become immediately unfriendly toward you. Each creature with 4 or more HD or with a Wisdom score of 16 or higher becomes hostile.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "feb7"
}, {
	name: "Entropic Shield",
	summary: "20% miss chance on ranged attacks",
	school: "Abjur",
	composition: "V, S",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 2
	},
	description: "A magical field appears around you, glowing with a chaotic blast of multicolored hues. This field deflects incoming arrows, rays, and other ranged attacks. Each ranged attack directed at you for which the attacker must make an attack roll (including arrows, magic arrows, <i>Melf's acid arrow</i>, <i>ray of enfeeblement</i>, and so forth) has a 20% miss chance (similar to the effects of concealment). Other attacks that simply work at a distance, such as a dragon's breath weapon, are not affected.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1d18"
}, {
	name: "Erase",
	summary: "Mundane or magical writing vanishes",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "1 scroll or 2 pages",
	duration: "Instantaneous",
	save: "Special",
	sr: "-",
	classes: {
		"Bard": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "Erase removes writings of either magical or mundane nature from a scroll or from one or two pages of paper, parchment, or similar surfaces. With this spell, you can remove <i>explosive runes</i>, a <i>glyph of warding</i>, a <i>sepia snake sigil</i>, or an <i>arcane mark</i>, but not <i>illusory script</i> or a <i>symbol</i> spell. Nonmagical writing is automatically erased if you touch it and no one else is holding it. Otherwise, the chance of erasing nonmagical writing is 90%. <p class=sub>Magic writing must be touched to be erased, and you also must succeed on a caster level check (1d20 + caster level) against DC 15. (A natural 1 or 2 is always a failure on this check.) If you fail to erase <i>explosive runes</i>, a <i>glyph of warding</i>, or a <i>sepia snake sigil</i>, you accidentally activate that writing instead.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "15dc"
}, {
	name: "Ethereal Jaunt",
	summary: "Become ethereal for 1 round/level",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 8,
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "You become ethereal, along with your equipment. For the duration of the spell, you are in a place called the Ethereal Plane, which overlaps the normal, physical, Material Plane. When the spell expires, you return to material existence. <p class=sub>An ethereal creature is invisible, insubstantial, and capable of moving in any direction, even up or down, albeit at half normal speed. As an insubstantial creature, you can move through solid objects, including living creatures. An ethereal creature can see and hear on the Material Plane, but everything looks gray and ephemeral. Sight and hearing onto the Material Plane are limited to 60 feet. Force effects (such as <i>magic missile</i> and <i>wall of force</i>) and abjurations affect an ethereal creature normally. Their effects extend onto the Ethereal Plane from the Material Plane, but not vice versa. An ethereal creature can't attack material creatures, and spells you cast while ethereal affect only other ethereal things. Certain material creatures or objects have attacks or effects that work on the Ethereal Plane (such as a basilisk's gaze attack). Treat other ethereal creatures and ethereal objects as if they were material. <p class=sub>If you end the spell and become material while inside a material object (such as a solid wall), you are shunted off to the nearest open space and take 1d6 points of damage per 5 feet that you so travel.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ce8"
}, {
	name: "Etherealness",
	summary: "Become ethereal with companions",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "You + creature/3lvls",
	duration: "1 min/lvl (D)",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 10,
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "This spell functions like <i>ethereal jaunt</i>, except that you and other willing creatures joined by linked hands (along with their equipment) become ethereal. Besides yourself, you can bring one creature per three caster levels to the Ethereal Plane. Once ethereal, the subjects need not stay together. <p class=sub>When the spell expires, all affected creatures on the Ethereal Plane return to material existence.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4914"
}, {
	name: "Expeditious Retreat",
	summary: "Increase speed by 30-ft/rnd",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "This spell increases your base land speed by 30 feet. (This adjustment is treated as an enhancement bonus.) There is no effect on other modes of movement, such as burrow, climb, fly, or swim. As with any effect that increases your speed, this spell affects your jumping distance (see the Jump skill, page 77). <p class=sub>This spell need not be used as part of a retreat; the name of the spell merely hints at the typical wizard's attitude towards combat.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4e8"
}, {
	name: "Explosive Runes",
	summary: "Deals 6d6 damage when read",
	school: "Abjur",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "10lb item",
	duration: "Till used (D)",
	save: "Special",
	sr: "Yes",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "You trace these mystic runes upon a book, map, scroll, or similar object bearing written information. The <i>runes</i> detonate when read, dealing 6d6 points of force damage. Anyone next to the <i>runes</i> (close enough to read them) takes the full damage with no saving throw; any other creature within 10 feet of the <i>runes</i> is entitled to a Reflex save for half damage. The object on which the runes were written also takes full damage (no saving throw). <p class=sub>You and any characters you specifically instruct can read the protected writing without triggering the <i>runes</i>. Likewise, you can remove the <i>runes</i> whenever desired. Another creature can remove them with a successful <i>dispel magic</i> or <i>erase</i> spell, but attempting to dispel or erase the runes and failing to do so triggers the explosion. <p class=sub><i>Note</i>: Magic traps such as <i>explosive runes</i> are hard to detect and disable. A rogue (only) can use the Search skill to find the <i>runes</i> and Disable Device to thwart them. The DC in each case is 25 + spell level, or 28 for <i>explosive runes</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b72d"
}, {
	name: "Eyebite",
	summary: "Charm, fear, sicken or sleep target",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "One living creature",
	duration: "1 rnd/3 lvls",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Bard": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "Each round, you may target a single living creature, striking it with waves of evil power. Depending on the target's HD, this attack has as many as three effects. <table><tr class=header><td>HD</td><td>Effect</td></tr> <tr><td align=center>10 or more</td><td>Sickened</td></tr> <tr><td align=center>5'9</td><td>Panicked, sickened</td></tr> <tr><td align=center>4 or less</td><td>Comatose, panicked, sickened</td></tr></table> <p class=sub>The effects are cumulative and concurrent. <p class=sub><i>Sickened</i>: Sudden pain and fever sweeps over the subject's body. A sickened creature takes a '2 penalty on attack rolls, weapon damage rolls, saving throws, skill checks, and ability checks. A creature affected by this spell remains sickened for 10 minutes per caster level. The effects cannot be negated by a <i>remove disease</i> or <i>heal</i> spell, but a <i>remove curse</i> is effective. <p class=sub><i>Panicked</i>: The subject becomes panicked for 1d4 rounds. Even after the panic ends, the creature remains shaken for 10 minutes per caster level, and it automatically becomes panicked again if it comes within sight of you during that time. This is a fear effect. <p class=sub><i>Comatose</i>: The subject falls into a catatonic coma for 10 minutes per caster level. During this time, it cannot be awakened by any means short of dispelling the effect. This is not a <i>sleep</i> effect, and thus elves are not immune to it. <p class=sub>The spell lasts for 1 round per three caster levels. You must spend a move action each round after the first to target a foe.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "233"
}, {
	name: "Fabricate",
	summary: "Transform raw material into items",
	school: "Trans",
	composition: "V, S, M (the original material, which costs the same amount as the raw materials required to craft the item to be created.)",
	time: "Special",
	range: "Close",
	effect: "Up to 10 cu ft/lvl",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "You convert material of one sort into a product that is of the same material. Thus, you can fabricate a wooden bridge from a clump of tress, a rope from a patch of hemp, clothes from flax or wool, and so forth. Creatures or magic items cannot be created or transmuted by the fabricate spell. The quality of items made by this spell is commensurate with the quality of material used as the basis for the new fabrication. If you work with a mineral, the target is reduced to 1 cubic foot per level instead of 10 cubic feet. <p class=sub>You must make an appropriate Craft check to fabricate articles requiring a high degree of craftsmanship (jewelry, swords, glass, crystal, and the like). <p class=sub>Casting requires 1 round per 10 cubic feet (or 1 cubic foot) of material to be affected by the spell",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1f51"
}, {
	name: "Faerie Fire",
	summary: "Outlines target with light",
	school: "Evoc",
	composition: "V, S,DF",
	time: "1 a",
	range: "Long",
	effect: "Creatures in 5-ft",
	duration: "1 min/lvl (D)",
	save: "-",
	sr: "Yes",
	classes: {
		"Druid": 2
	},
	description: "A pale glow surrounds and outlines the subjects. Outlined subjects shed light as candles. Outlined creatures do not benefit from the concealment normally provided by darkness (though a 2nd-level or higher magical <i>darkness</i> effect functions normally), <i>blur</i>, displacement, invisibility, or similar effects. The light is too dim to have any special effect on undead or dark-dwelling creatures vulnerable to light. The <i>faerie fire</i> can be blue, green, or violet, according to your choice at the time of casting. The <i>faerie fire</i> does not cause any harm to the objects or creatures thus outlined.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d9cf"
}, {
	name: "False Life",
	summary: "1d10 + 1/lvl temporary HPs",
	school: "Necro",
	composition: "V, S, M (a small amount of alcohol or distilled spirits, which you use to trace certain sigils on your body during casting. These sigils cannot be seen once the alcohol or spirits evaporate.)",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 hr/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "You harness the power of unlife to grant yourself a limited ability to avoid death. While this spell is in effect, you gain temporary hit points equal to 1d10 +1 per caster level (maximum +10)",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f929"
}, {
	name: "False Vision",
	summary: "Fools scrying with an illusion",
	school: "Illus",
	composition: "V, S, M (the ground dust of a piece of jade worth at least 250 gp, which is sprinkled into the air when the spell is cast)",
	time: "1 a",
	range: "Touch",
	effect: "40-ft radius",
	duration: "1 hr/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 6,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "Any divination (scrying) spell used to view anything within the area of this spell instead receives a false image (as the <i>major image</i> spell), as defined by you at the time of casting. As long as the duration lasts, you can concentrate to change the image as desired. While you aren't concentrating, the image remains static",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c03d"
}, {
	name: "Fear",
	summary: "Targets panic for 1 rnd/lvl",
	school: "Necro",
	composition: "V, S, M (either the heart of a hen or a white feather)",
	time: "1 a",
	range: "30-ft",
	effect: "Cone",
	duration: "1 rnd/lvl",
	save: "Will part",
	sr: "Yes",
	classes: {
		"Bard": 4,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "An invisible cone of terror causes each living creature in the area to become panicked unless it succeeds on a Will save. If cornered, a panicked creature begins cowering. (See the <i>Dungeon Master's Guide</i> for more information on fear-panicked creatures.) If the Will save succeeds, the creature is shaken for 1 round",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ff5d"
}, {
	name: "Feather Fall",
	summary: "Items or creatures fall slowly",
	school: "Trans",
	composition: "V",
	time: "Free",
	range: "Close",
	effect: "Creature/lvl in 20-ft",
	duration: "Land or 1 rnd/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "The affected creatures or objects fall slowly, though faster than feathers typically do. <i>Feather fall</i> instantly changes the rate at which the targets fall to a mere 60 feet per round (equivalent to the end of a fall from a few feet), and the subjects take no damage upon landing while the spell is in effect. However, when the spell duration expires, a normal rate of falling resumes. <p class=sub><i>The spell affects one or more Medium or smaller creatures (including gear and carried objects up to each creature's maximum load) or objects, or the equivalent in larger creatures</i>: A Large creature or object counts as two Medium creatures or objects, a Huge creature or object counts as two Large creatures or objects, and so forth. <p class=sub>You can cast this spell with an instant utterance, quickly enough to save yourself if you unexpectedly fall. Casting the spell is a free action, like casting a quickened spell, and it counts toward the normal limit of one quickened spell per round. You may even cast this spell when it isn't your turn. <p class=sub>This spell has no special effect on ranged weapons unless they are falling quite a distance. If the spell is cast on a falling item, such as a boulder dropped from the top of a castle wall, the object does half normal damage based on its weight, with no bonus for the height of the drop. (See the <i>Dungeon Master's Guide</i> for information on falling objects.) <p class=sub><i>Feather fall</i> works only upon free-falling objects. It does not affect a sword blow or a charging or flying creature.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ac95"
}, {
	name: "Feeblemind",
	summary: "Targets Int and Cha drop to 1",
	school: "Ench",
	composition: "V, S, M (a handful of clay, crystal, glass, or mineral spheres)",
	time: "1 a",
	range: "Medium",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "If the target creature fails a Will saving throw, its Intelligence and Charisma scores each drop to 1, giving it roughly the intellect of a lizard. The affected creature is unable to use Intelligence- or Charisma-based skills, cast spells, understand language, or communicate coherently. Still, it knows who its friends are and can follow them and even protect them. The subject remains in this state until a <i>heal</i>, <i>limited wish</i>, <i>miracle</i>, or <i>wish</i> spell is used to cancel the effect of the <i>feeblemind</i>. A creature that can cast arcane spells, such as a sorcerer or a wizard, takes a '4 penalty on its saving throw",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4a10"
}, {
	name: "Find the Path",
	summary: "Shows most direct way to location",
	school: "Div",
	composition: "V, S, F (a set of divination counters of the sort you favor&emdash;bones, ivory counters, sticks, carved runes, or the like)",
	time: "3 rnds",
	range: "Touch",
	effect: "One creature",
	duration: "10 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 7,
		"Cleric": 7,
		"Druid": 7
	},
	description: "The recipient of this spell can find the shortest, most direct physical route to a specified destination, be it the way into or out of a locale. The locale can be outdoors, underground, or even inside a <i>maze</i> spell. Find the path works with respect to locations, not objects or creatures at a locale. Thus, the subject could not find the way to \"a forest where a green dragon lives\" or \"a hoard of platinum pieces,\" but it could find the exit to a labyrinth. The location must be on the same plane as you are at the time of casting. <p class=sub>The spell enables the subject to sense the correct direction that will eventually lead it to its destination, indicating at appropriate times the exact path to follow or physical actions to take. For example, the spell enables the subject to sense trip wires or the proper word to bypass a <i>glyph of warding</i>. The spell ends when the destination is reached or the duration expires, whichever comes first. Find the path can be used to remove the subject and its companions from the effect of a <i>maze</i> spell in a single round. <p class=sub>This divination is keyed to the recipient, not its companions, and its effect does not predict or allow for the actions of creatures (including guardians). ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5e1d"
}, {
	name: "Find Traps",
	summary: "Notice traps as rogue does",
	school: "Div",
	composition: "V, S",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 3
	},
	description: "You gain intuitive insight into the workings of traps. You can use the Search skill to detect traps just as a rogue can. In addition, you gain an insight bonus equal to one-half your caster level (maximum +10) on Search checks made to find traps while the spell is in effect. <p class=sub>Note that <i>find traps</i> grants no ability to disable the traps that you may find.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a381"
}, {
	name: "Finger of Death",
	summary: "Kills target else does 3d6+1/lvl dmg",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "One living creature",
	duration: "Instantaneous",
	save: "Fort part",
	sr: "Yes",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "You can slay any one living creature within range. The target is entitled to a Fortitude saving throw to survive the attack. If the save is successful, the creature instead takes 3d6 points of damage +1 point per caster level (maximum +25). The subject might die from damage even if it succeeds on its saving throw.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "bf65"
}, {
	name: "Fire Seeds",
	summary: "Acorn and berries become bombs",
	school: "Conj",
	composition: "V, S, M (the acorns or holly berries)",
	time: "1 a",
	range: "Touch",
	effect: "1-4 acorns/1-8berries",
	duration: "10 min/lvl",
	save: "Ref half",
	sr: "-",
	classes: {
		"Druid": 7
	},
	description: "Depending on the version of <i>fire seeds</i> you choose, you turn acorns into splash weapons that you or another character can throw, or you turn holly berries into bombs that you can detonate on command. <p class=sub><i>Acorn Grenades</i>: As many as four acorns turn into special splash weapons that can be hurled as far as 100 feet. A ranged touch attack roll is required to strike the intended target. Together, the acorns are capable of dealing 1d6 points of fire damage per caster level (maximum 20d6), divided up among the acorns as you wish. For example, a 20th-level druid could create one 20d6 missile, two 10d6 missiles, one 11d6 and three 3d6 missiles, or any other combination totalling up to four acorns and 20d6 points of damage. <p class=sub>Each acorn explodes upon striking any hard surface. In addition to its regular fire damage, it deals 1 point of splash damage per die, and it ignites any combustible materials within 10 feet. A creature within this area that makes a successful Reflex saving throw takes only half damage; a creature struck directly is not allowed a saving throw. <p class=sub><i>Holly Berry Bombs</i>: You turn as many as eight holly berries into special bombs. The holly berries are usually placed by hand, since they are too light to make effective thrown weapons (they can be tossed only 5 feet). If you are within 200 feet and speak a word of command, each berry instantly bursts into flame, causing 1d8 points of fire damage +1 point per caster level to every creature in a 5-foot-radius burst and igniting any combustible materials within 5 feet. A creature in the area that makes a successful Reflex saving throw takes only half damage",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2ac1"
}, {
	name: "Fire Shield",
	summary: "Creatures attacking take 1d6+1/lvl",
	school: "Evoc",
	composition: "V, S, M/DF (a bit of phosphorus for the <i>warm</i> shield; a live firefly or glowworm or the tail portions of four dead ones for the <i>chill</i> shield)",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "This spell wreathes you in flame and causes damage to each creature that attacks you in melee. The flames also protect you from either cold- or fire-based attacks (your choice). <p class=sub>Any creature striking you with its body or a handheld weapon deals normal damage, but at the same time the attacker takes 1d6 points of damage +1 point per caster level (maximum +15). This damage is either cold damage (if the <i>shield</i> protects against fire-based attacks) or fire damage (if the <i>shield</i> protects against cold-based attacks). If the attacker has spell resistance, it applies to this effect. Creatures wielding weapons with exceptional reach are not subject to this damage if they attack you. <p class=sub>When casting this spell, you appear to immolate yourself, but the flames are thin and wispy, giving off light equal to only half the illumination of a normal torch (10 feet). The color of the flames is determined randomly (50% chance of either color)&emdash;blue or green if the <i>chill shield</i> is cast, violet or blue if the <i>warm shield</i> is employed. The special powers of each version are as follows. <p class=sub><i>Warm Shield</i>: The flames are warm to the touch. You take only half damage from cold-based attacks. If such an attack allows a Reflex save for half damage, you take no damage on a successful save. <p class=sub><i>Chill Shield</i>: The flames are cool to the touch. You take only half damage from fire-based attacks. If such an attack allows a Reflex save for half damage, you take no damage on a successful save",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a625"
}, {
	name: "Fire Storm",
	summary: "Deals 1d6 damage/lvl (20d6)",
	school: "Evoc",
	composition: "V, S",
	time: "Round",
	range: "Medium",
	effect: "2 10-ft cubes/level",
	duration: "Instantaneous",
	save: "Ref half",
	sr: "Yes",
	classes: {
		"Cleric": 9,
		"Druid": 8
	},
	description: "When a <i>fire storm</i> spell is cast, the whole area is shot through with sheets of roaring flame. The raging flames do not harm natural vegetation, ground cover, and any plant creatures in the area that you wish to exclude from damage. Any other creature within the area takes 1d6 points of fire damage per caster level (maximum 20d6).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "561c"
}, {
	name: "Fire Trap",
	summary: "Opened item deals 1d4+1/lvl",
	school: "Abjur",
	composition: "V, S, M (a half-pound of gold dust (cost 25 gp) sprinkled on the warded object)",
	time: "10 min",
	range: "Touch",
	effect: "One item",
	duration: "Till used",
	save: "Ref half",
	sr: "Yes",
	classes: {
		"Druid": 3,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "<i>Fire trap</i> creates a fiery explosion when an intruder opens the item that the trap protects. A <i>fire trap</i> can ward any object that can be opened and closed (book, box, bottle, chest, coffer, coffin, door, drawer, and so forth). <p class=sub>When casting <i>fire trap</i>, you select a point on the object as the spell's center. When someone other than you opens the object, a fiery explosion fills the area within a 5-foot radius around the spell's center. The flames deal 1d4 points of fire damage +1 point per caster level (maximum +20). The item protected by the trap is not harmed by this explosion. <p class=sub>A <i>fire trapped</i> item cannot have a second closure or warding spell placed on it. <p class=sub>A <i>knock</i> spell does not bypass a <i>fire trap</i>. An unsuccessful <i>dispel magic</i> spell does not detonate the spell. <p class=sub>Underwater, this ward deals half damage and creates a large cloud of steam. <p class=sub>You can use the <i>fire trapped</i> object without discharging it, as can any individual to whom the object was specifically attuned when cast. Attuning a <i>fire trapped</i> object to an individual usually involves setting a password that you can share with friends. <p class=sub><i>Note</i>: Magic traps such as <i>fire trap</i> are hard to detect and disable. A rogue (only) can use the Search skill to find a <i>fire trap</i> and Disable Device to thwart it. The DC in each case is 25 + spell level (DC 27 for a druid's <i>fire trap</i> or DC 29 for the arcane version)",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c3f6"
}, {
	name: "Fireball",
	summary: "1d6 dmg/lvl fire burst (10d6)",
	school: "Evoc",
	composition: "V, S, M (a tiny ball of bat guano and sulfur)",
	time: "1 a",
	range: "Long",
	effect: "20-ft radius",
	duration: "Instantaneous",
	save: "Ref half",
	sr: "Yes",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "A <i>fireball</i> spell is an explosion of flame that detonates with a low roar and deals 1d6 points of fire damage per caster level (maximum 10d6) to every creature within the area. Unattended objects also take this damage. The explosion creates almost no pressure. <p class=sub>You point your finger and determine the range (distance and height) at which the fireball is to burst. A glowing, pea-sized bead streaks from the pointing digit and, unless it impacts upon a material body or solid barrier prior to attaining the prescribed range, blossoms into the fireball at that point. (An early impact results in an early detonation.) If you attempt to send the bead through a narrow passage, such as through an arrow slit, you must \"hit\" the opening with a ranged touch attack, or else the bead strikes the barrier and detonates prematurely. <p class=sub>The <i>fireball</i> sets fire to combustibles and damages objects in the area. It can melt metals with low melting points, such as lead, gold, copper, silver, and bronze. If the damage caused to an interposing barrier shatters or breaks through it, the <i>fireball</i> may continue beyond the barrier if the area permits; otherwise it stops at the barrier just as any other spell effect does",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d2f3"
}, {
	name: "Flame Arrow",
	summary: "Projectiles +1d6 fire damage",
	school: "Trans",
	composition: "V, S, M",
	time: "1 a",
	range: "Close",
	effect: "+1d6 fire damage",
	duration: "10 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "You turn ammunition (such as arrows, bolts, shuriken, and stones) into fiery projectiles. Each piece of ammunition deals an extra 1d6 points of fire damage to any target it hits. A flaming projectile can easily ignite a flammable object or structure, but it won't ignite a creature it strikes. <p class=sub><i>Material Component</>: A drop of oil and a small piece of flint.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5a2"
}, {
	name: "Flame Blade",
	summary: "Blade deals 1d8+1/2lvls",
	school: "Evoc",
	composition: "V, S,DF",
	time: "1 a",
	range: "0-ft",
	effect: "Swordlike Beam",
	duration: "1 min/lvl (D)",
	save: "-",
	sr: "Yes",
	classes: {
		"Druid": 3
	},
	description: "A 3-foot-long, blazing beam of red-hot fire springs forth from your hand. You wield this bladelike beam as if it were a scimitar. Attacks with the <i>flame blade</i> are melee touch attacks. The blade deals 1d8 points of fire damage +1 point per two caster levels (maximum +10). Since the blade is immaterial, your Strength modifier does not apply to the damage. A <i>flame blade</i> can ignite combustible materials such as parchment, straw, dry sticks, and cloth. <p class=sub>The spell does not function underwater.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d8d6"
}, {
	name: "Flame Strike",
	summary: "Smites foes with divine fire 1d6/lvl (15)",
	school: "Evoc",
	composition: "V, S,DF",
	time: "1 a",
	range: "Medium",
	effect: "10-ft radius",
	duration: "Instantaneous",
	save: "Ref half",
	sr: "Yes",
	classes: {
		"Cleric": 6,
		"Druid": 5
	},
	description: "A <i>flame strike</i> produces a vertical column of <p class=sub>divine fire roaring downward. The spell <p class=sub>deals 1d6 points of damage per caster level <p class=sub>(maximum 15d6). Half the damage is fire <p class=sub>damage, but the other half results directly <p class=sub>from divine power and is therefore not <p class=sub>subject to being reduced by resistance to <p class=sub>fire-based attacks, such as that granted by <p class=sub><i>protection from energy (fire), fire shield (chill <p class=sub>shield)</i>, and similar magic.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a536"
}, {
	name: "Flaming Sphere",
	summary: "Burning globe, 2d6 dmg, 30-ft move",
	school: "Evoc",
	composition: "V, S, M/DF",
	time: "1 a",
	range: "Medium",
	effect: "5-ft sphere",
	duration: "1 rnd/lvl",
	save: "Ref negs",
	sr: "Yes",
	classes: {
		"Druid": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "A burning globe of fire rolls in whichever direction you point and burns those it strikes. It moves 30 feet per round. As part of this movement, it can ascend or jump up to 30 feet to strike a target. If it enters a space with a creature, it stops moving for the round and deals 2d6 points of fire damage to that creature, though a successful Reflex save negates that damage. A flaming sphere rolls over barriers less than 4 feet tall, such as furniture and low walls. It ignites flammable substances it touches and illuminates the same area as a torch would. <p class=sub>The sphere moves as long as you actively direct it (a move action for you); otherwise, it merely stays at rest and burns. It can be extinguished by any means that would put out a normal fire of its size. The surface of the sphere has a spongy, yielding consistency and so does not cause damage except by its flame. It cannot push aside unwilling creatures or batter down large obstacles. A <i>flaming sphere</i> winks out if it exceeds the spell's range. <p class=sub><b>Arcane Material Component</b>: A bit of tallow, a pinch of brimstone, and a dusting of powdered iron.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2cd9"
}, {
	name: "Flare",
	summary: "Dazzles 1 creature (-1 attack)",
	school: "Evoc",
	composition: "V",
	time: "1 a",
	range: "Close",
	effect: "Burst of light",
	duration: "Inst (1 min)",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Bard": 1,
		"Druid": 1,
		"Sorceror": 1,
		"Wizard": 1
	},
	description: "This cantrip creates a burst of light. If you cause the light to burst directly in front of a single creature, that creature is dazzled for 1 minute unless it makes a successful Fortitude save. Sightless creatures, as well as creatures already dazzled, are not affected by <i>flare</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2325"
}, {
	name: "Flesh to Stone",
	summary: "Turns target into stone",
	school: "Trans",
	composition: "V, S, M (lime, water, and earth)",
	time: "1 a",
	range: "Medium",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "The subject, along with all its carried gear, turns into a mindless, inert statue. If the statue resulting from this spell is broken or damaged, the subject (if ever returned to its original state) has similar damage or deformities. The creature is not dead, but it does not seem to be alive either when viewed with spells such as <i>deathwatch</i>. Only creatures made of flesh are affected by this spell",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "dbd"
}, {
	name: "Floating Disk",
	school: "Evoc",
	classes: {
		Sorceror: 1,
		Wizard: 1
	},
	time: "1 a",
	composition: "V, S, M (a drop of mercury)",
	range: "close (25 ft. + 5 ft./2 levels)",
	effect: "3-ft.-diameter disk of force",
	duration: "1 hour/lvl",
	save: "-",
	sr: "no",
	description: "You create a slightly concave, circular plane of force that follows you about and carries loads for you. The disk is 3 feet in diameter and 1 inch deep at its center. It can hold 100 pounds of weight per caster level. If used to transport a liquid, its capacity is 2 gallons. The disk floats approximately 3 feet above the ground at all times and remains level. It floats along horizontally within spell range and will accompany you at a rate of no more than your normal speed each round. If not otherwise directed, it maintains a constant interval of 5 feet between itself and you. The disk winks out of existence when the spell duration expires. The disk also winks out if you move beyond its range or try to take the disk more than 3 feet away from the surface beneath it. When the disk winks out, whatever it was supporting falls to the surface beneath it.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3c2"
}, {
	name: "Fly",
	summary: "Target flies at 60-ft/round",
	school: "Trans",
	composition: "V, S,F/DF",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "The subject can fly at a speed of 60 feet (or 40 feet if it wears medium or heavy armor, or if it carries a medium or heavy load). It can ascend at half speed and descend at double speed, and its maneuverability is good. Using a <i>fly</i> spell requires only as much concentration as walking, so the subject can attack or cast spells normally. The subject of a <i>fly</i> spell can charge but not run, and it cannot carry aloft more weight than its maximum load, plus any armor it wears. <p class=sub>Should the spell duration expire while the subject is still aloft, the magic fails slowly. The subject floats downward 60 feet per round for 1d6 rounds. If it reaches the ground in that amount of time, it lands safely. If not, it falls the rest of the distance, taking 1d6 points of damage per 10 feet of fall. Since dispelling a spell effectively ends it, the subject also descends in this way if the <i>fly</i> spell is dispelled, but not if it is negated by an <i>antimagic field</i>. <p class=sub><i>Arcane Focus</i>: A wing feather from any bird.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7cbf"
}, {
	name: "Fog Cloud",
	summary: "Fog limits vision to 5-ft",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "20-ft radius",
	duration: "10 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "A bank of fog billows out from the point you designate. The fog obscures all sight, including darkvision, beyond 5 feet. A creature within 5 feet has concealment (attacks have a 20% miss chance). Creatures farther away have total concealment (50% miss chance, and the attacker can't use sight to locate the target). <p class=sub>A moderate wind (11+ mph) disperses the fog in 4 rounds; a strong wind (21+ mph) disperses the fog in 1 round. <p class=sub>The spell does not function underwater.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "25f6"
}, {
	name: "Forbiddance",
	summary: "Prevents planar travel inside",
	school: "Abjur",
	composition: "V, S, M (a sprinkling of holy water and rare incenses worth at least 1,500 gp, plus 1,500 gp per 60-foot cube. If a password is desired, this requires the burning of additional rare incenses worth at least 1,000 gp, plus 1,000 gp per 60-foot cube), DF",
	time: "6 rnds",
	range: "Medium",
	effect: "60-ft cube/level",
	duration: "Permanent",
	save: "Special",
	sr: "Yes",
	classes: {
		"Cleric": 7
	},
	description: "<i>Forbiddance</i> seals an area against all planar travel into or within it. This includes all teleportation spells (such as <i>dimension door</i> and <i>teleport</i>), <i>plane shifting</i>, astral travel, ethereal travel, and all summoning spells. Such effects simply fail automatically. <p class=sub>In addition, it damages entering creatures whose alignments are different from yours. The effect on those attempting to enter the warded area is based on their alignment relative to yours (see below). A creature inside the area when the spell is cast takes no damage unless it exits the area and attempts to reenter, at which time it is affected as normal. <p class=sub><i>Alignments identical</i>: No effect. The creature may enter the area freely (although not by planar travel). <p class=sub><i>Alignments different with respect to either law/chaos or good/evil</i>: The creature takes 6d6 points of damage. A successful Will save halves the damage, and spell resistance applies. <p class=sub><i>Alignments different with respect to both law/chaos and good/evil</i>: The creature takes 12d6 points of damage. A successful Will save halves the damage, and spell resistance applies. <p class=sub>At your option, the abjuration can include a password, in which case creatures of alignments different from yours can avoid the damage by speaking the password as they enter the area. You must select this option (and the password) at the time of casting. <p class=sub><i>Dispel magic</i> does not dispel a <i>forbiddance</i> effect unless the dispeller's level is at least as high as your caster level. <p class=sub>You can't have multiple overlapping <i>forbiddance</i> effects. In such a case, the more recent effect stops at the boundary of the older effect",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1efd"
}, {
	name: "Forcecage",
	summary: "Cube of force imprisons all inside",
	school: "Evoc",
	composition: "V, S, M (ruby dust worth 1,500 gp, which is tossed into the air and disappears when you cast the spell)",
	time: "1 a",
	range: "Close",
	effect: "20-ft cube/10-ft cube",
	duration: "2 hr/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "This powerful spell brings into being an immobile, invisible cubical prison composed of either bars of force or solid walls of force (your choice). <p class=sub>Creatures within the area are caught and contained unless they are too big to fit inside, in which case the spell automatically fails. Teleportation and other forms of astral travel provide a means of escape, but the force walls or bars extend into the Ethereal Plane, blocking ethereal travel. <p class=sub>Like a <i>wall of force</i> spell, a <i>forcecage</i> resists <i>dispel magic</i>, but it is vulnerable to a <i>disintegrate</i> spell, and it can be destroyed by a <i>sphere of annihilation</i> or a <i>rod of cancellation</i>. <p class=sub><i>Barred Cage</i>: This version of the spell produces a 20-foot cube made of bands of force (similar to a <i>wall of force</i> spell) for bars. The bands are a half-inch wide, with half-inch gaps between them. Any creature capable of passing through such a small space can escape; others are confined. You can't attack a creature in a barred cage with a weapon unless the weapon can fit between the gaps. Even against such weapons (including arrows and similar ranged attacks), a creature in the barred cage has cover. All spells and breath weapons can pass through the gaps in the bars. <p class=sub><i>Windowless Cell</i>: This version of the spell produces a 10-foot cube with no way in and no way out. Solid walls of force form its six sides",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "64ce"
}, {
	name: "Forceful Hand",
	school: "Evoc",
	classes: {
		Sorceror: 6,
		Wizard: 6
	},
	description: "This spell functions as <i>interposing hand</i>, except that it can also pursue and bull rush one opponent you select. The <i>forceful hand</i> gets one bull rush attack per round. This attack does not provoke an attack of opportunity. Its CMB for bull rush checks uses your caster level in place of its base attack bonus, with a +8 bonus for its Strength score (27), and a +1 bonus for being Large. The hand always moves with the opponent to push them back as far as possible. It has no movement limit for this purpose. Directing the spell to a new target is a move action. <i>Forceful hand</i> prevents the opponent from moving closer to you without first succeeding on a bull rush attack, moving both the <i>forceful hand</i> and the target closer to you. The <i>forceful hand</i> can instead be directed to interpose itself, as <i>interposing hand</i> does.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3b94"
}, {
	name: "Foresight",
	summary: "6th sense warns of danger",
	school: "Div",
	composition: "V, S, M/DF (a hummingbird&apos;s feather)",
	time: "1 a",
	range: "Prsl,touch",
	effect: "Special",
	duration: "10 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "This spell grants you a powerful sixth sense in relation to yourself or another. Once <i>foresight</i> is cast, you receive instantaneous warnings of impending danger or harm to the subject of the spell. Thus, if you are the subject of the spell, you would be warned in advance if a rogue were about to attempt a sneak attack on you, or if a creature were about to leap out from a hiding place, or if an attacker were specifically targeting you with a spell or ranged weapon. You are never surprised or flat-footed. In addition, the spell gives you a general idea of what action you might take to best protect yourself&emdash;duck, jump right, close your eyes, and so on&emdash;and gives you a +2 insight bonus to AC and Reflex saves. This insight bonus is lost whenever you would lose a Dexterity bonus to AC. <p class=sub>When another creature is the subject of the spell, you receive warnings about that creature. You must communicate what you learn to the other creature for the warning to be useful, and the creature can be caught unprepared in the absence of such a warning. Shouting a warning, yanking a person back, and even telepathically communicating (via an appropriate spell) can all be accomplished before some danger befalls the subject, provided you act on the warning without delay. The subject, however, does not gain the insight bonus to AC and Reflex saves",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d542"
}, {
	name: "Form of the Dragon I",
	school: "Trans (polymorph)",
	classes: {
		Sorceror: 6,
		Wizard: 6
	},
	time: "1 a",
	composition: "V, S, M (a scale of the dragon type you plan to assume)",
	range: "Self",
	effect: "Caster",
	duration: "1 min/lvl (D)",
	save: "see below",
	sr: false,
	description: "You become a Medium chromatic or metallic dragon (see the  <i>Pathfinder RPG Bestiary</i>). You gain a +4 size bonus to Strength, a  +2 size bonus to Constitution, a +4 natural armor bonus, fly 60  feet (poor), darkvision 60 feet, a breath weapon, and resistance  to one element. You also gain one bite (1d8), two claws (1d6),  and two wing attacks (1d4). Your breath weapon and resistance  depend on the type of dragon. You can only use the breath  weapon once per casting of this spell. All breath weapons deal  6d8 points of damage and allow a Reflex save for half damage. In  addition, some of the dragon types grant additional abilities, as  noted below. <p class=sub><i>Black dragon</i> 60-foot line of acid, resist acid 20, swim 60 feet <p class=sub><i>Blue dragon</i> 60-foot line of electricity, resist electricity 20,  burrow 20 feet <p class=sub><i>Green dragon</i> 30-foot cone of acid, resist acid 20, swim 40 feet <p class=sub><i>Red dragon</i> 30-foot cone of fire, resist fire 30, vulnerability to cold <p class=sub><i>White dragon</i> 30-foot cone of cold, resist cold 20, swim 60 feet,  vulnerability to fire <p class=sub><i>Brass dragon</i> 60-foot line of fire, resist fire 20, burrow 30 feet,  vulnerability to cold <p class=sub><i>Bronze dragon</i> 60-foot line of electricity, resist electricity 20,  swim 60 feet <p class=sub><i>Copper dragon</i> 60-foot line of acid, resist acid 20, <i>spider climb</i>  (always active) <p class=sub><i>Gold dragon</i> 30-foot cone of fire, resist fire 20, swim 60 feet <p class=sub><i>Silver dragon</i> 30-foot cone of cold, resist cold 30, vulnerability  to fire.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f860"
}, {
	name: "Form of the Dragon II",
	school: "Trans (polymorph)",
	classes: {
		Sorceror: 7,
		Wizard: 7
	},
	description: "This spell functions as <i>form of the dragon I</i>except that it also allows you to assume the form of a Large chromatic or metallic dragon. You gain the following abilities: a +6 size bonus to Strength, a +4 size bonus to Constitution, a +6 natural armor bonus, fly 90 feet (poor), darkvision 60 feet, a breath weapon, DR 5/magic, and resistance to one element. You also gain one bite (2d6), two claws (1d8), two wing attacks (1d6), and one tail slap attack (1d8). You can only use the breath weapon twice per casting of this spell, and you must wait 1d4 rounds between uses. All breath weapons deal 8d8 points of damage and allow a Reflex save for half damage. Line breath weapons increase to 80-foot lines and cones increase to 40-foot cones.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b343"
}, {
	name: "Form of the Dragon III",
	school: "Trans (polymorph)",
	classes: {
		Sorceror: 8,
		Wizard: 8
	},
	description: "This spell functions as <i>form of the dragon II</i>save that it also allows you to take the form of a Huge chromatic or metallic dragon. You gain the following abilities: a +10 size bonus to Strength, a +8 size bonus to Constitution, a +8 natural armor bonus, fly 120 feet (poor), blindsense 60 feet, darkvision 120 feet, a breath weapon, DR 10/magic, frightful presence (DC equal to the DC for this spell), and immunity to one element (of the same type <i>form of the dragon I</i>grants resistance to). You also gain one bite (2d8), two claws (2d6), two wing attacks (1d8), and one tail slap attack (2d6). You can use the breath weapon as often as you like, but you must wait 1d4 rounds between uses. All breath weapons deal 12d8 points of  damage and allow a Reflex save for half damage. Line breath weapons increase to 100-foot lines and cones increase to 50-foot cones.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e578"
}, {
	name: "Fox's Cunning",
	summary: "+4 Int",
	school: "Trans",
	composition: "V, S, M/DF (a few hairs, or a pinch of dung, from a fox)",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "The transmuted creature becomes smarter. The spell grants a +4 enhancement bonus to Intelligence, adding the usual benefits to Intelligence-based skill checks and other uses of the Intelligence modifier. Wizards (and other spellcasters who rely on Intelligence) affected by this spell do not gain any additional bonus spells for the increased Intelligence, but the save DCs for spells they cast while under this spell's effect do increase. This spell doesn't grant <p class=sub>extra skill points",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1a0b"
}, {
	name: "Fox's Cunning, Mass",
	summary: "+4 Int to 1 creature/lvl",
	school: "Trans",
	composition: "V, S, M/DF",
	time: "1 a",
	range: "Close",
	effect: "Creature/lvl in 30-ft",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This spell functions like fox's cunning, except that it affects multiple creatures.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "83ae"
}, {
	name: "Freedom",
	summary: "Freed from movement restrictions",
	school: "Abjur",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "The subject is freed from spells and effects that restrict its movement, including <i>binding</i>, <i>entangle</i>, grappling, <i>imprisonment</i>, <i>maze</i>, paralysis, <i>petrification</i>, pinning, <i>sleep</i>, <i>slow</i>, stunning, <i>temporal stasis</i>, and <i>web</i>. To free a creature from <i>imprisonment</i> or <i>maze</i>, you must know its name and background, and you must cast this spell at the spot where it was entombed or banished into the <i>maze</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1b28"
}, {
	name: "Freedom of Movement",
	summary: "Target moves and attacks normally",
	school: "Abjur",
	composition: "V, S, M,DF (a leather thong, bound around the arm or a similar appendage)",
	time: "1 a",
	range: "Prsl,touch",
	effect: "One creature",
	duration: "10 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 5,
		"Cleric": 5,
		"Druid": 5,
		"Ranger": 4
	},
	description: "This spell enables you or a creature you touch to move and attack normally for the duration of the spell, even under the influence of magic that usually impedes movement, such as paralysis, <i>solid fog</i>, <i>slow</i>, and <i>web</i>. The subject automatically succeeds on any grapple check made to resist a grapple attempt, as well as on grapple checks or Escape Artist checks made to escape a grapple or a pin. <p class=sub>The spell also allows the subject to move and attack normally while underwater, even with slashing weapons such as axes and swords or with bludgeoning weapons such as flails, hammers, and maces, provided that the weapon is wielded in the hand rather than hurled. The <i>freedom of movement</i> spell does not, however, allow water breathing",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "bfba"
}, {
	name: "Freezing Sphere",
	school: "Evoc",
	classes: {
		Sorceror: 6,
		Wizard: 6
	},
	time: "1 a",
	composition: "V, S, F (a small crystal sphere)",
	range: "long (400 ft. + 40 ft./level)",
	effect: "see text",
	duration: "instantaneous or 1 round/lvl; see text",
	save: "Reflex half; see text",
	sr: "yes",
	description: "<i>Freezing sphere</i> creates a frigid globe of cold energy that streaks from your fingertips to the location you select, where it explodes in a 40-foot-radius burst, dealing 1d6 points of cold damage per caster level (maximum 15d6) to each creature in the area. A creature of the water subtype instead takes 1d8 points of cold damage per caster level (maximum 15d8) and is staggered for 1d4 rounds.<p class=sub>If the <i>freezing sphere</i> strikes a body of water or a liquid that is principally water (not including water-based creatures), it freezes the liquid to a depth of 6 inches in a 40-foot radius. This ice lasts for 1 round per caster level. Creatures that were swimming on the surface of a targeted body of water become trapped in the ice. Attempting to break free is a full-round action. A trapped creature must make a DC 25 Strength check or a DC 25 Escape Artist check to do so.<p class=sub>You can refrain from firing the globe after completing the spell, if you wish. Treat this as a touch spell for which you are holding the charge. You can hold the charge for as long as 1 round per level, at the end of which time the <i>freezing sphere</i> bursts centered on you (and you receive no saving throw to resist its effect). Firing the globe in a later round is a standard action.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1afd"
}, {
	name: "Gaseous Form",
	summary: "Become insubstantial, 10 dmg reduct",
	school: "Trans",
	composition: "S, M/DF (a bit of gauze and a wisp of smoke)",
	time: "1 a",
	range: "Touch",
	effect: "Touch",
	duration: "2 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "The subject and all its gear become insubstantial, misty, and translucent. Its material armor (including natural armor) becomes worthless, though its size, Dexterity, deflection bonuses, and armor bonuses from force effects (for example, from the mage armor spell) still apply. The subject gains damage reduction 10/magic and becomes immune to poison and critical hits. It can't attack or cast spells with verbal, somatic, material, or focus components while in gaseous form. (This does not rule out the use of certain spells that the subject may have prepared using the feats Silent Spell, Still Spell, and Eschew Materials.) The subject also loses supernatural abilities while in gaseous form. If it has a touch spell ready to use, that spell is discharged harmlessly when the gaseous form spell takes effect. <p class=sub>A gaseous creature can't run, but it can fly at a speed of 10 feet (maneuverability perfect). It can pass through small holes or narrow openings, even mere cracks, with all it was wearing or holding in its hands, as long as the spell persists. The creature is subject to the effects of wind, and it can't enter water or other liquid. It also can't manipulate objects or activate items, even those carried along with its gaseous form. Continuously active items remain active, though in some cases their effects may be moot (such as those that supply armor or natural armor bonuses)",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3f7c"
}, {
	name: "Gate",
	summary: "Connects two planes for travel",
	school: "Conj",
	composition: "V, S,XP",
	time: "1 a",
	range: "Medium",
	effect: "Special",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 10,
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "Casting a <i>gate</i> spell has two effects. First, it creates an interdimensional connection between your plane of existence and a plane you specify, allowing travel between those two planes in either direction. <p class=sub>Second, you may then call a particular individual or kind of being through the gate. The <i>gate</i> itself is a circular hoop or disk from 5 to 20 feet in diameter (caster's choice), oriented in the direction you desire when it comes into existence (typically vertical and facing you). It is a two-dimensional window looking into the plane you specified when casting the spell, and anyone or anything that moves through is shunted instantly to the other side. <p class=sub>A <i>gate</i> has a front and a back. Creatures moving through the gate from the front are transported to the other plane; creatures moving through it from the back are not. <p class=sub><i>Planar Travel</i>: As a mode of planar travel, a <i>gate</i> spell functions much like a <i>plane shift</i> spell, except that the <i>gate</i> opens precisely at the point you desire (a creation effect). Deities and other beings who rule a planar realm can prevent a <i>gate</i> from opening in their presence or personal demesnes if they so desire. Travelers need not join hands with you&emdash;anyone who chooses to step through the portal is transported. A <i>gate</i> cannot be opened to another point on the same plane; the spell works only for interplanar travel. <p class=sub>You could position a <i>gate</i> in a hallway in order to absorb any attack or force coming at you by shunting it to another plane. Whether the denizens of that plane appreciate this tactic is, of course, another matter. <p class=sub>You may hold the gate open only for a brief time (no more than 1 round per caster level), and you must concentrate on doing so, or else the interplanar connection is severed. <p class=sub><i>Calling Creatures</i>: The second effect of the gate spell is to call an extraplanar creature to your aid (a calling effect). By naming a particular being or kind of being as you cast the spell, you cause the gate to open in the immediate vicinity of the desired creature and pull the subject through, willing or unwilling. Deities and unique beings are under no compulsion to come through the gate, although they may choose to do so of their own accord. This use of the spell creates a gate that remains open just long enough to transport the called creatures. This use of the spell has an XP cost (see below). <p class=sub>If you choose to call a kind of creature instead of a known individual&emdash;for instance, a bearded devil or a ghaele eladrin&emdash;you may call either a single creature (of any HD) or several creatures. You can call and control several creatures as long as their HD total does not exceed your caster level. In the case of a single creature, you can control it if its HD do not exceed twice your caster level. A single creature with more HD than twice your caster level can't be controlled. Deities and unique beings cannot be controlled in any event. An uncontrolled being acts as it pleases, making the calling of such creatures rather dangerous. An uncontrolled being may return to its home plane at any time. <p class=sub><i>A controlled creature can be commanded to perform a service for you. Such services fall into two categories</i>: immediate tasks and contractual service. Fighting for you in a single battle or taking any other actions that can be accomplished within 1 round per caster level counts as an immediate task; you need not make any agreement or pay any reward for the creature's help. The creature departs at the end of the spell. <p class=sub>If you choose to exact a longer or more involved form of service from a called creature, you must offer some fair trade in return for that service. The service exacted must be reasonable with respect to the promised favor or reward; see the lesser planar ally spell for appropriate rewards. (Some creatures may want their payment in \"livestock\" rather than in coin, which could involve complications.) Immediately upon completion of the service, the being is transported to your vicinity, and you must then and there turn over the promised reward. After this is done, the creature is instantly freed to return to its own plane. <p class=sub>Failure to fulfill the promise to the letter results in your being subjected to service by the creature or by its liege and master, at the very least. At worst, the creature or its kin may attack you. <p class=sub><i>Note</i>: When you use a calling spell such as gate to call an air, chaotic, earth, evil, fire, good, lawful, or water creature, it becomes a spell of that type. For example, gate is a chaotic and evil spell when you cast it to call a demon. <p class=sub><i>XP Cost</i>: 1,000 XP (only for the calling creatures function).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "77a4"
}, {
	name: "Geas, Lesser",
	summary: "Command up to 7HD creature",
	school: "Ench",
	composition: "V",
	time: "1 a",
	range: "Close",
	effect: "One living creature",
	duration: "1 day/lvl or till used (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 4,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "A <i>lesser geas </i> places a magical command on a creature to carry out some service or to refrain from some action or course of activity, as desired by you. The creature must have 7 or fewer Hit Dice and be able to understand you. While a <i>geas</i> cannot compel a creature to kill itself or perform acts that would result in certain death, it can cause almost any other course of activity. The <i>geased</i> creature must follow the given instructions until the <i>geas</i> is completed, no matter how long it takes. <p class=sub><i>If the instructions involve some open-ended task that the recipient cannot complete through his own actions (such as \"Wait here\" or \"Defend this area against attack\"), the spell remains in effect for a maximum of one day per caster level. A clever recipient can subvert some instructions</i>: For example, if you order the recipient to protect you from all harm, it might place you in a nice, safe dungeon for the duration of the spell. <p class=sub>If the subject is prevented from obeying the <i>lesser geas</i> for 24 hours, it takes a '2 penalty to each of its ability scores. Each day, another '2 penalty accumulates, up to a total of '8. No ability score can be reduced to less than 1 by this effect. The ability score penalties are removed 24 hours after the subject resumes obeying the <i>lesser geas</i>. <p class=sub>A <i>lesser geas</i> (and all ability score penalties) can be ended by <i>break enchantment</i>, <i>limited wish</i>, <i>remove curse</i>, <i>miracle</i>, or <i>wish</i>. <i>Dispel magic</i> does not affect a <i>lesser geas</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e3d4"
}, {
	name: "Geas / Quest",
	summary: "Command any creature",
	school: "Ench",
	composition: "V",
	time: "10 min",
	range: "Close",
	effect: "One living creature",
	duration: "1 day/lvl or till used (D)",
	save: "-",
	sr: "Yes",
	classes: {
		"Bard": 7,
		"Cleric": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This spell functions similarly to <i>lesser geas</i>, except that it affects a creature of any HD and allows no saving throw. <p class=sub>Instead of taking penalties to ability scores (as with <i>lesser geas</i>), the subject takes 3d6 points of damage each day it does not attempt to follow the <i>geas/quest</i>. Additionally, each day it must make a Fortitude saving throw or become sickened. These effects end 24 hours after the creature attempts to resume the <i>geas/ quest</i>. <p class=sub>A <i>remove curse</i> spell ends a <i>geas/quest</i> spell only if its caster level is at least two higher than your caster level. <i>Break enchantment</i> does not end a <i>geas/quest</i>, but <i>limited wish</i>, <i>miracle</i>, and <i>wish</i> do. <p class=sub>Bards, sorcerers, and wizards usually refer to this spell as <i>geas</i>, while clerics call the same spell <i>quest</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1dac"
}, {
	name: "Gentle Repose",
	summary: "Preserves one corpse",
	school: "Necro",
	composition: "V, S, M/DF (a pinch of salt, and a copper piece for each of the corpse&apos;s eyes)",
	time: "1 a",
	range: "Touch",
	effect: "One dead creature",
	duration: "1 day/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 3,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "You preserve the remains of a dead creature so that they do not decay. Doing so effectively extends the time limit on raising that creature from the dead (see <i>raise dead</i>). Days spent under the influence of this spell don't count against the time limit. Additionally, this spell makes transporting a fallen comrade more pleasant. <p class=sub>The spell also works on severed body parts and the like",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7642"
}, {
	name: "Ghost Sound",
	summary: "Figment sounds",
	school: "Illus",
	composition: "V, S, M (a bit of wool or a small lump of wax)",
	time: "1 a",
	range: "Close",
	effect: "Noise of 4humans/lvl",
	duration: "1 rnd/lvl (D)",
	save: "Will dsblf",
	sr: "-",
	classes: {
		"Bard": 1,
		"Sorceror": 1,
		"Wizard": 1
	},
	description: "<i>Ghost sound</i> allows you to create a volume of sound that rises, recedes, approaches, or remains at a fixed place. You choose what type of sound ghost sound creates when casting it and cannot thereafter change the sounds basic character. <p class=sub>The volume of sound created depends on your level. You can produce as much noise as four normal humans per caster level (maximum twenty humans). Thus, talking, singing, shouting, walking, marching, or running sounds can be created. The noise a <i>ghost sound</i> spell produces can be virtually any type of sound within the volume limit. A horde of rats running and squeaking is about the same volume as eight humans running and shouting. A roaring lion is equal to the noise from sixteen humans, while a roaring dire tiger is equal to the noise from twenty humans. <p class=sub><i>Ghost sound</i> can enhance the effectiveness of a silent image spell. <p class=sub><i>Ghost sound</i> can be made permanent with a permanency spell",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8439"
}, {
	name: "Ghoul Touch",
	summary: "Paralyzes one target",
	school: "Necro",
	composition: "V, S, M (a small scrap of cloth taken from clothing worn by a ghoul, or a pinch of earth from a ghoul&apos;s lair)",
	time: "1 a",
	range: "Touch",
	effect: "Stench 10-ft radius",
	duration: "1d6+2 rnds",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},																					 
	description: "Imbuing you with negative energy, this spell allows you to paralyze a single living humanoid for the duration of the spell with a successful melee touch attack. <p class=sub>Additionally, the paralyzed subject exudes a carrion stench that causes all living creatures (except you) in a 10-foot-radius spread to become sickened (Fortitude negates). A <i>neutralize poison</i> spell removes the effect from a sickened creature, and creatures immune to poison are unaffected by the stench",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2f63"
}, {
	name: "Giant Form I",
	school: "Trans (polymorph)",
	classes: {
		Sorceror: 7,
		Wizard: 7
	},
	time: "1 a",
	composition: "V, S, M (a piece of the creature whose form you plan to assume)",
	range: "Self",
	effect: "Caster",
	duration: "1 min/lvl (D)",
	description: "When you cast this spell you can assume the form of any Large humanoid creature of the giant subtype (see the <i>Pathfinder RPG Bestiary</i>). Once you assume your new form, you gain the following abilities: a +6 size bonus to Strength, a &emdash;2 penalty to Dexterity, a +4 size bonus to Constitution, a +4 natural armor bonus, and low-light vision. If the form you assume has any of the following abilities, you gain the listed ability: darkvision 60 feet, rend (2d6 damage), regeneration 5, rock catching, and rock throwing (range 60 feet, 2d6 damage). If the creature has immunity or resistance to any elements, you gain resistance 20 to those elements. If the creature has vulnerability to an element, you gain that vulnerability.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "94d2"
}, {
	name: "Giant Form II",
	school: "Trans (polymorph)",
	classes: {
		Sorceror: 8,
		Wizard: 8
	},
	description: "This spell functions as <i>giant form I</i> except that it also allows you to assume the form of any Huge creature of the giant type. You gain the following abilities: a +8 size bonus to Strength, a &emdash;2 penalty to Dexterity, a +6 size bonus to Constitution, a +6 natural armor bonus, low-light vision, and a +10 foot enhancement bonus to your speed. If the form you assume has any of the following abilities, you gain the listed ability: swim 60 feet, darkvision 60 feet, rend (2d8 damage), regeneration 5, rock catching, and rock throwing (range 120 feet, 2d10 damage). If the creature has immunity or resistance to one element, you gain that immunity or resistance. If the creature has vulnerability to an element, you gain that vulnerability.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9197"
}, {
	name: "Giant Vermin",
	summary: "Turn insects into giant vermin",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Close",
	effect: "1-3 vermin in 30-ft",
	duration: "1 min/lvl",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 5,
		"Druid": 5
	},
	description: "You turn three normal-sized centipedes, two normal-sized spiders, or a single normal-sized scorpion into larger forms. Only one type of vermin can be transmuted (so a single casting cannot affect both a centipede and a spider), and all must be grown to the same size. The size to which the vermin can be grown depends on your level; see the table below. The Monster Manual has game statistics for centipedes, spiders, and scorpions, as well as other kinds of vermin. <p class=sub>Any giant vermin created by this spell do not attempt to harm you, but your control of such creatures is limited to simple commands (\"Attack,\" \"Defend,\" \"Stop,\" and so forth). Orders to attack a certain creature when it appears or guard against a particular occurrence are too complex for the vermin to understand. Unless commanded to do otherwise, the giant vermin attack whoever or whatever is near them. <p class=sub>The DM can extend this spell's effects to other kinds of insects, arachnids, or other vermin, such as ants, bees, beetles, praying mantises, and wasps, if he so chooses.<table><tr class=header><td>Caster Level</td><td>Vermin Size</td></tr> <tr><td>9th or lower</td><td>Medium</td></tr> <tr><td>10th'13th</td><td>Large</td></tr> <td>14th'17th</td><td>Huge</td> <tr><td>18th'19th</td><td>Gargantuan</td></tr> <tr><td>20th or higher</td><td>Colossal</td></tr></table>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c1f4"
}, {
	name: "Glibness",
	summary: "Fluent and believable +30 Bluff",
	school: "Trans",
	composition: "S",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "10 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 4
	},
	description: "Your speech becomes fluent and more believable. You gain a +30 bonus on Bluff checks made to convince another of the truth of your words. (This bonus doesn't apply to other uses of the Bluff skill, such as feinting in combat, creating a diversion to hide, or communicating a hidden message via innuendo.) <p class=sub>If a divination is attempted against you that would detect your lies or force you to speak the truth (such as <i>discern lies</i> or <i>zone of truth</i>), the caster of the divination must succeed on a caster level check (1d20 + caster level) against a DC of 15 + your caster level to succeed. Failure means the divination does not detect your lies or force you to speak only the truth.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1328"
}, {
	name: "Glitterdust",
	summary: "Blinds creatures, outlines invisible",
	school: "Conj",
	composition: "V, S, M (ground mica)",
	time: "1 a",
	range: "Medium",
	effect: "Creatures in 10-ft",
	duration: "1 rnd/lvl",
	save: "Will negs",
	sr: "-",
	classes: {
		"Bard": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "A cloud of golden particles covers everyone and everything in the area, causing creatures to become blinded and visibly outlining invisible things for the duration of the spell. All within the area are covered by the dust, which cannot be removed and continues to sparkle until it fades. <p class=sub>Any creature covered by the dust takes a -40 penalty on Hide checks",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "47a3"
}, {
	name: "Globe of Invulnerability",
	summary: "Stops 1-4 level spell effects",
	school: "Abjur",
	composition: "V, S, M",
	time: "1 a",
	range: "10-ft",
	effect: "10-ft radius sphere",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This spell functions like <i>lesser globe of invulnerability</i>, except that it also excludes 4th-level spells and spell-like effects.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c3e9"
}, {
	name: "Globe of Invulnerability, Lesser",
	summary: "Stops 1-3 level spell effects",
	school: "Abjur",
	composition: "V, S, M (a glass or crystal bead that shatters at the expiration of the spell)",
	time: "1 a",
	range: "10-ft",
	effect: "10-ft radius sphere",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "An immobile, faintly shimmering magical sphere surrounds you and excludes all spell effects of 3rd level or lower. The area or effect of any such spells does not include the area of the <i>lesser globe of invulnerability</i>. Such spells fail to affect any target located within the globe. Excluded effects include spell-like abilities and spells or spell-like effects from items. However, any type of spell can be cast through or out of the magical globe. Spells of 4th level and higher are not affected by the globe, nor are spells already in effect when the globe is cast. The globe can be brought down by a targeted <i>dispel magic</i> spell, but not by an area <i>dispel magic</i>. You can leave and return to the globe without penalty. <p class=sub>Note that spell effects are not disrupted unless their effects enter the globe, and even then they are merely suppressed, not dispelled. For example, creatures inside the globe would still see a <i>mirror image</i> created by a caster outside the globe. If that caster then entered the globe, the images would wink out, to reappear when the caster exited the globe. Likewise, a caster standing in the area of a <i>light</i> spell would still receive sufficient illumination for vision, even though that part of the <i>light</i> spell's area that lies within the globe would not be luminous. <p class=sub>If a given spell has more than one level depending on which character class is casting it, use the level appropriate to the caster to determine whether <i>lesser globe of invulnerability</i> stops it",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "89bd"
}, {
	name: "Glyph of Warding",
	summary: "Symbol harms activater 1d8/2lvl (5)",
	school: "Abjur",
	composition: "V, S, M",
	time: "10 min",
	range: "Touch",
	effect: "Item / 5 sq ft/lvl",
	duration: "Till used (D)",
	save: "Special",
	sr: "Yes",
	classes: {
		"Cleric": 4
	},
	description: "This powerful inscription harms those who enter, pass, or open the warded area or object. A <i>glyph of warding</i> can guard a bridge or passage, ward a portal, trap a chest or box, and so on. <p class=sub>You set the conditions of the ward. Typically, any creature entering the warded area or opening the warded object without speaking a password (which you set when casting the spell) is subject to the magic it stores. Alternatively or in addition to a password trigger, <i>glyphs</i> can be set according to physical characteristics (such as height or weight) or creature type, subtype, or kind (such as aberration, drow, or red dragon). <i>Glyphs</i> can also be set with respect to good, evil, law, or chaos, or to pass those of your religion. They cannot be set according to class, Hit Dice, or level. Glyphs respond to invisible creatures normally but are not triggered by those who travel past them ethereally. Multiple <i>glyphs</i> cannot be cast on the same area. However, if a cabinet has three drawers, each can be separately warded. <p class=sub>When casting the spell, you weave a tracery of faintly glowing lines around the warding sigil. A <i>glyph</i> can be placed to conform to any shape up to the limitations of your total square footage. When the spell is completed, the <i>glyph</i> and tracery become nearly invisible. <p class=sub><i>Glyphs</i> cannot be affected or bypassed by such means as physical or magical probing, though they can be dispelled. <i>Mislead</i>, <i>polymorph</i>, and <i>nondetection</i> (and similar magical effects) can fool a <i>glyph</i>, though non-magical disguises and the like can't. <p class=sub><i>Read magic</i> allows you to identify a <i>glyph of warding</i> with a DC 13 Spellcraft check. Identifying the <i>glyph</i> does not discharge it and allows you to know the basic nature of the <i>glyph</i> (version, type of damage caused, what spell is stored). <p class=sub>The DM may decide that the exact <i>glyphs</i> available to you depend on your deity. He or she might also make new <i>glyphs</i> available according to the magical research rules in the <i>Dungeon Master's Guide</i>. <p class=sub><i>Note</i>: Magic traps such as <i>glyph of warding</i> are hard to detect and disable. A rogue (only) can use the Search skill to find the glyph and Disable Device to thwart it. The DC in each case is 25 + spell level, or 28 for <i>glyph of warding</i>. <p class=sub>Depending on the version selected, a <i>glyph</i> either blasts the intruder or activates a spell. <p class=sub><i>Blast Glyph</i>: A <i>blast glyph</i> deals 1d8 points of damage per two caster levels (maximum 5d8) to the intruder and to all within 5 feet of him or her. This damage is acid, cold, fire, electricity, or sonic (caster's choice, made at time of casting). Each creature affected can attempt a Reflex save to take half damage. Spell resistance applies against this effect. <p class=sub><i>Spell Glyph</i>: You can store any harmful spell of 3rd level or lower that you know. All level-dependent features of the spell are based on your caster level at the time of casting the <i>glyph</i>. If the spell has a target, it targets the intruder. If the spell has an area or an amorphous effect (such as a cloud), the area or effect is centered on the intruder. If the spell summons creatures, they appear as close as possible to the intruder and attack. Saving throws and spell resistance operate as normal, except that the DC is based on the level of the spell stored in the <i>glyph</i>.<p class=sub><i>Material Component</i>: You trace the <i>glyph</i> with incense, which must first be sprinkled with powdered diamond worth at least 200 gp.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9d76"
}, {
	name: "Glyph of Warding, Greater",
	summary: "Symbol harms activaters 1d8/2lvl (10)",
	school: "Abjur",
	composition: "V, S, M (You trace the <i>glyph</i> with incense, which must first be sprinkled with powdered diamond worth at least 400 gp)",
	time: "10 min",
	range: "Touch",
	effect: "Item / 5 sq ft/lvl",
	duration: "Till used (D)",
	save: "Special",
	sr: "Yes",
	classes: {
		"Cleric": 7
	},
	description: "This spell functions like <i>glyph of warding</i>, except that a <i>greater blast glyph</i> deals up to 10d8 points of damage, and a <i>greater spell glyph</i> can store a spell of 6th level or lower",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4a40"
}, {
	name: "Goodberry",
	summary: "2d4 berries each cure 1 hp",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "2d4 fresh berries",
	duration: "1 day/lvl",
	save: "-",
	sr: "Yes",
	classes: {
		"Druid": 2
	},
	description: "Casting <i>goodberry</i> upon a handful of freshly picked berries makes 2d4 of them magical. You (as well as any other druid of 3rd or higher level) can immediately discern which berries are affected. Each transmuted berry provides nourishment as if it were a normal meal for a Medium creature. The berry also cures 1 point of damage when eaten, subject to a maximum of 8 points of such curing in any 24-hour period.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8939"
}, {
	name: "Good Hope",
	summary: "Morale bonus, +2 save bonus",
	school: "Ench",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "One living creature/lvl",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 4
	},
	description: "This spell instills powerful hope in the subjects. Each affected creature gains a +2 morale bonus on saving throws, attack rolls, ability checks, skill checks, and weapon damage rolls. <p class=sub><i>Good hope</i> counters and dispels <i>crushing despair</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "14fc"
}, {
	name: "Grasping Hand",
	school: "Evoc",
	classes: {
		Sorceror: 7,
		Wizard: 7
	},
	description: "This spell functions as <i>interposing hand</i>, except that it can also grapple one opponent you select. The <i>grasping hand</i> gets one grapple attack per round. This attack does not provoke an attack of opportunity. Its CMB and CMD for grapple checks use your caster level in place of its base attack bonus, with a +10 bonus for its Strength (31) score and a +1 bonus for being Large (its Dexterity is 10, granting no bonus on the Combat Maneuver Defense). The hand holds but does not harm creatures that it grapples. Directing the spell to a new target is a move action. The grasping hand can instead be directed to bull rush a target, using the same bonuses outlined above, or it can be directed to interpose itself, as <i>interposing hand</i> does.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "86c4"
}, {
	name: "Grease",
	summary: "Makes 10-ft square or item slippery",
	school: "Conj",
	composition: "V, S, M (a bit of pork rind or butter)",
	time: "1 a",
	range: "Close",
	effect: "Obj or 10ft x 10ft sq",
	duration: "1 rnd/lvl (D)",
	save: "Special",
	sr: "-",
	classes: {
		"Bard": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "A <i>grease</i> spell covers a solid surface with a layer of slippery grease. Any creature in the area when the spell is cast must make a successful Reflex save or fall. This save is repeated on your turn each round that the creature remains within the area. A creature can walk within or through the area of grease at half normal speed with a DC 10 Balance check. Failure means it can't move that round (and must then make a Reflex save or fall), while failure by 5 or more means it falls (see the Balance skill for descriptions). <p class=sub>The DM should adjust saving throws by circumstance. For example, a creature charging down an incline that is suddenly <i>greased</i> has little chance to avoid the effect, but its ability to exit the affected area is almost assured (whether it wants to or not). <p class=sub>The spell can also be used to create a greasy coating on an item&emdash;a rope, ladder rungs, or a weapon handle, for instance. Material objects not in use are always affected by this spell, while an object wielded or employed by a creature receives a Reflex saving throw to avoid the effect. If the initial saving throw fails, the creature immediately drops the item. A saving throw must be made in each round that the creature attempts to pick up or use the greased item. A creature wearing <i>greased</i> armor or clothing gains a +10 circumstance bonus on Escape Artist checks and on grapple checks made to resist or escape a grapple or to escape a pin",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "93e1"
}, {
	name: "Guards and Wards",
	summary: "Magical effects protect area",
	school: "Abjur",
	composition: "V, S, M (burning incense, a small measure of brimstone and oil, a knotted string, and a small amount of blood), F (a small silver rod)",
	time: "30 min",
	range: "Special",
	effect: "Up to 200 sq ft/lvl",
	duration: "2 hr/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This powerful spell is primarily used to defend your stronghold. The ward protects 200 square feet per caster level. The warded area can be as much as 20 feet high, and shaped as you desire. You can ward several stories of a stronghold by dividing the area among them; you must be somewhere within the area to be warded to cast the spell. The spell creates the following magical effects within the warded area. <p class=sub><i>Fog</i>: Fog fills all corridors, obscuring all sight, including darkvision, beyond 5 feet. A creature within 5 feet has concealment (attacks have a 20% miss chance). Creatures farther away have total concealment (50% miss chance, and the attacker cannot use sight to locate the target). 	Saving Throw: None. Spell Resistance: No. <p class=sub><i>Arcane Locks</i>: All doors in the warded area are arcane locked. Saving Throw: None. Spell Resistance: No. <p class=sub><i>Webs</i>: Webs fill all stairs from top to bottom. These strands are identical with those created by the web spell, except that they regrow in 10 minutes if they are burned or torn away while the guards and wards spell lasts. Saving Throw: Reflex negates, see text for web. Spell Resistance: No. <p class=sub><i>Confusion</i>: Where there are choices in direction&emdash;such as a corridor intersection or side passage&emdash;a minor <i>confusion</i>-type effect functions so as to make it 50% probable that intruders believe they are going in the opposite direction from the one they actually chose. This is an enchantment, mind-affecting effect. 	Saving Throw: None. Spell Resistance: Yes. <p class=sub><i>Lost Doors</i>: One door per caster level is covered by a silent image to appear as if it were a plain wall. Saving Throw: Will disbelief (if interacted with). Spell Resistance: No. <p class=sub>In addition, you can place your choice of one of the following five magical effects. <p class=sub><i>1. <i>Dancing lights</i> in four corridors. You can designate a simple program that causes the lights to repeat as long as the <i>guards and wards</i> spell lasts. Saving Throw: None. Spell Resistance: No. <p class=sub><i>2. A <i>magic mouth</i> in two places. Saving Throw: None. Spell Resistance: No. <p class=sub><i>3. A <i>stinking cloud</i> in two places. The vapors appear in the places you designate, they return within 10 minutes if dispersed by wind while the <i>guards and wards</i> spell lasts. Saving Throw: Fortitude negates; see text for <i>stinking cloud</i>. Spell Resistance: No. <p class=sub><i>4. A <i>gust of wind</i> in one corridor or room. Saving Throw: Fortitude negates. Spell Resistance: Yes. <p class=sub><i>5. A <i>suggestion</i> in one place. You select an area of up to 5 feet square, and any creature who enters or passes through the area receives the <i>suggestion</i> mentally. Saving Throw: Will negates. Spell Resistance: Yes. <p class=sub>The whole warded area radiates strong magic of the abjuration school. A <i>dispel magic</i> cast on a specific effect, if successful, removes only that effect. A successful <i>Mordenkainen's disjunction</i> destroys the entire <i>guards and wards</i> effect",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4d83"
}, {
	name: "Guidance",
	summary: "+1 on 1 attack roll, save or check",
	school: "Div",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 min or till used",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 1,
		"Druid": 1
	},
	description: "This spell imbues the subject with a touch of divine guidance. The creature gets a +1 competence bonus on a single attack roll, saving throw, or skill check. It must choose to use the bonus before making the roll to which it applies.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5e46"
}, {
	name: "Gust of Wind",
	summary: "Blows away or knocks down creats",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "60-ft",
	effect: "Blast of air",
	duration: "1 min or till used",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Druid": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "This spell creates a severe blast of air (approximately 50 mph) that originates from you, affecting all creatures in its path. A Tiny or smaller creature on the ground is knocked down and rolled 1d4×10 feet, taking 1d4 points of nonlethal damage per 10 feet. If flying, a Tiny or smaller creature is blown back 2d6×10 feet and takes 2d6 points of nonlethal damage due to battering and buffeting. <p class=sub>Small creatures are knocked prone by the force of the wind, or if flying are blown back 1d6×10 feet. <p class=sub>Medium creatures are unable to move forward against the force of the wind, or if flying are blown back 1d6×5 feet. <p class=sub>Large or larger creatures may move normally within a <i>gust of wind</i> effect. <p class=sub>A <i>gust of wind</i> can't move a creature beyond the limit of its range. <p class=sub>Any creature, regardless of size, takes a -4 penalty on ranged attacks and Listen checks in the area of a <i>gust of wind.</i> <p class=sub>The force of the gust automatically extinguishes candles, torches, and similar unprotected flames. It causes protected flames, such as those of lanterns, to dance wildly and has a 50% chance to extinguish those lights. <p class=sub>In addition to the effects noted, a <i>gust of wind</i> can do anything that a sudden blast of wind would be expected to do. It can create a stinging spray of sand or dust, fan a large fire, overturn delicate awnings or hangings, heel over a small boat, and blow gases or vapors to the edge of its range. <p class=sub><i>Gust of wind</i> can be made permanent with a permanency spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "791b"
}, {
	name: "Hallow",
	summary: "Designates location as holy",
	school: "Evoc",
	composition: "V, S, M (herbs, oils, and incense worth at least 1,000 gp, plus 1,000 gp per level of the spell to be included in the <i>hallowed</i> area), DF",
	time: "1 day",
	range: "Touch",
	effect: "40-ft radius",
	duration: "Instantaneous",
	save: "Special",
	sr: "Sp",
	classes: {
		"Cleric": 6,
		"Druid": 6
	},
	description: "<i>Hallow</i> makes a particular site, building, orstructure a holy site. This has four major effects. <p class=sub>First, the site or structure is guarded by a <i>magic circle against evil</i> effect. <p class=sub>Second, all Charisma checks made to turn undead gain a +4 sacred bonus, and Charisma checks to command undead take a '4 penalty. Spell resistance does not apply to this effect. (This provision does not apply to the druid version of the spell.) <p class=sub>Third, any dead body interred in a <i>hallowed</i> site cannot be turned into an undead creature. <p class=sub>Finally, you may choose to fix a single spell effect to the hallowed site. The spell effect lasts for one year and functions throughout the entire site, regardless of the normal duration and area or effect. You may designate whether the effect applies to all creatures, creatures who share your faith or alignment, or creatures who adhere to another faith or alignment. For example, you may create a bless effect that aids all creatures of your alignment or faith in the area, or a bane effect that hinders creatures of the opposed alignment or an enemy faith. At the end of the year, the chosen effect lapses, but it can be renewed or replaced simply by casting <i>hallow</i> again. <p class=sub>Spell effects that may be tied to a <i>hallowed</i> site include <i>aid, bane, bless, cause fear, darkness, daylight, death ward, deeper darkness, detect evil, detect magic, dimensional anchor, discern lies, dispel magic, endure elements, freedom of movement, invisibility purge, protection from energy, remove fear, resist energy, silence, tongues, and zone of truth</i>. Saving throws and spell resistance might apply to these spells' effects. (See the individual spell summarys for descriptions.) An area can receive only one <i>hallow</i> spell (and its associated spell effect) at a time. <p class=sub><i>Hallow</i> counters but does not dispel <i>unhallow</i>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5b50"
}, {
	name: "Hallucinatory Terrain",
	summary: "Changes natural terrain's appearance",
	school: "Illus",
	composition: "V, S, M (a stone, a twig, and a bit of green plant)",
	time: "10 min",
	range: "Long",
	effect: "One 30-ft cube/lvl",
	duration: "2 hr/lvl (D)",
	save: "Will dsblf",
	sr: "-",
	classes: {
		"Bard": 5,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "You make natural terrain look, sound, and smell like some other sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Structures, equipment, and creatures within the area are not hidden or changed in appearance",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ddf4"
}, {
	name: "Halt Undead",
	summary: "Immobilizes undead for 1 rnd/lvl",
	school: "Necro",
	composition: "V, S, M (a pinch of sulfur and powdered garlic)",
	time: "1 a",
	range: "Medium",
	effect: "1-3 undead in 30-ft",
	duration: "1 rnd/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "This spell renders as many as three undead creatures immobile. A nonintelligent undead creature (such as a skeleton or zombie) gets no saving throw; an intelligent undead creature does. If the spell is successful, it renders the undead creature immobile for the duration of the spell (similar to the effect of hold person on a living creature). The effect is broken if the halted creatures are attacked or take damage",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9bc8"
}, {
	name: "Harm",
	summary: "10/lvl damage (150)",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Will half",
	sr: "Yes",
	classes: {
		"Cleric": 7
	},
	description: "Harm charges a subject with negative energy that deals 10 points of damage per caster level (to a maximum of 150 points at 15th level). If the creature successfully saves, <i>harm</i> deals half this amount, but it cannot reduce the target's hit points to less than 1. <p class=sub>If used on an undead creature, <i>harm</i> acts like heal.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "45b5"
}, {
	name: "Haste",
	summary: "Extra att, +1 AC, +1 ref save, +30-ft m",
	school: "Trans",
	composition: "V, S, M (a shaving of licorice root)",
	time: "1 a",
	range: "Close",
	effect: "One creature/lvl",
	duration: "1 rnd/lvl",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Bard": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "The transmuted creatures move and act more quickly than normal. This extra speed has several effects. When making a full attack action, a <i>hasted</i> creature may make one extra attack with any weapon he is holding. The attack is made using the creature's full base attack bonus, plus any modifiers appropriate to the situation. (This effect is not cumulative with similar effects, such as that provided by a weapon of speed, nor does it actually grant an extra action, so you can't use it to cast a second spell or otherwise take an extra action in the round.) <p class=sub>A <i>hasted</i> creature gains a +1 bonus on attack rolls and a +1 dodge bonus to AC and Reflex saves. Any condition that makes you lose your Dexterity bonus to Armor Class (if any) also makes you lose dodge bonuses. <p class=sub>All of the <i>hasted</i> creature's modes of movement (including land movement, burrow, climb, fly, and swim) increase by 30 feet, to a maximum of twice the subject's normal speed using that form of movement. This increase counts as an enhancement bonus, and it affects the creature's jumping distance as normal for increased speed. <p class=sub>Multiple <i>haste</i> effects don't stack. <i>Haste</i> dispels and counters <i>slow</i>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6aa"
}, {
	name: "Heal",
	summary: "Cures 10/lvl (150)",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 7,
		"Druid": 8
	},
	description: "<i>Heal</i> enables you to channel positive energy into a creature to wipe away injury and afflictions. It immediately ends any and all of the following adverse conditions affecting the Target: ability damage, blinded, <i>confused</i>, dazed, dazzled, deafened, diseased, exhausted, fatigued, <i>feebleminded</i>, insanity, nauseated, sickened, stunned, and poisoned. It also cures 10 hit points of damage per level of the caster, to a maximum of 150 points at 15th level. Heal does not remove negative levels, restore permanently drained levels, or restore permanently drained ability score points. <p class=sub>If used against an undead creature, <i>heal</i> instead acts like <i>harm</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "281b"
}, {
	name: "Heal, Mass",
	summary: "Cures 10/lvl (250)",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Any in 30-ft",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 10
	},
	description: "This spell functions like <i>heal</i>, except as noted above. The maximum number of hit points restored to each creature is 250.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "bd92"
}, {
	name: "Heal Mount",
	summary: "Heals paladin's special mount",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "Mount",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Paladin": 3
	},
	description: "This spell functions like <i>heal</i>, but it affects only the paladin's special mount (typically a warhorse).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3e04"
}, {
	name: "Heat Metal",
	summary: "Hot metal damages if touched",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Close",
	effect: "Creat/2 lvls / 25 lb/lvl",
	duration: "7 rounds",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Druid": 3
	},
	description: "<i>Heat metal</i> makes metal extremely warm. Unattended, nonmagical metal gets no saving throw. Magical metal is allowed a saving throw against the spell. (Magic item's saving throws are covered in the <i>Dungeon Master's Guide</i>.) An item in a creature's possession uses the creature's saving throw bonus unless its own is higher. <p class=sub>A creature takes fire damage if its equipment is heated. It takes full damage if its armor is affected or if it is holding, touching, wearing, or carrying metal weighing one-fifth of its weight. The creature takes minimum damage (1 point or 2 points; see the table) if it's not wearing metal armor and the metal that it's carrying weighs less than one-fifth of its weight. On the first round of the spell, the metal becomes warm and uncomfortable to touch but deals no damage. The same effect also occurs on the last round of the spell's duration. During the second (and also the next-to-last) round, intense heat causes pain and damage. In the third, fourth, and fifth rounds, the metal is searing hot, causing more damage, as shown on the table below.<table><tr class=header><td>Round</td><td>Metal Temperature</td><td>Damage</td></tr><tr><td>1</td><td>Warm</td><td>None</td></tr><tr><td>2</td><td>Hot</td><td>1d4 points</td></tr><tr><td>3'5</td><td>Searing</td><td>2d4 points</td></tr><tr><td>6</td><td>Hot</td><td>1d4 points</td></tr><tr><td>7</td><td>Warm</td><td>None</td></tr></table> <p class=sub>Any cold intense enough to damage the creature negates fire damage from the spell (and vice versa) on a point-for-point basis. For example, if the damage roll from a <i>heat metal</i> spell indicates 2 points of fire damage and the subject is hit by a <i>ray of frost</i> in the same round and takes 3 points of cold damage, it winds up taking no fire damage and only 1 point of cold damage. If cast underwater, <i>heat metal</i> deals half damage and boils the surrounding water. <p class=sub><i>Heat metal</i> counters and dispels <i>chill metal</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "67a5"
}, {
	name: "Helping Hand",
	summary: "Ghostly hand leads target to you",
	school: "Evoc",
	composition: "V, S,DF",
	time: "1 a",
	range: "5 miles",
	effect: "Ghostly hand",
	duration: "1 hr/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 4
	},
	description: "You create the ghostly image of a hand, which you can send to find a creature within 5 miles. The hand then beckons to that creature and leads it to you if the creature is willing to follow. <p class=sub>When the spell is cast, the hand appears in front of you. You then specify a person (or any creature) by physical summary, which can include race, gender, and appearance but not ambiguous factors such as level, alignment, or class. When the summary is complete, the hand streaks off in search of a subject that fits the summary. The amount of time it takes to find the subject depends on how far away she is. <p class=sub><table><tr class=header><td>Distance</td><td>Time to Locate</td></tr><tr><td>100 ft. or less</td><td>1 round</td></tr><tr><td>1,000 ft.</td><td>1 minute</td></tr><tr><td>1 mile</td><td>10 minutes</td></tr><tr><td>2 miles</td><td>1 hour</td></tr><tr><td>3 miles</td><td>2 hours</td></tr><tr><td>4 miles</td><td>3 hours</td></tr><tr><td>5 miles</td><td>4 hours</td></tr></table><p class=sub>Once the hand locates the subject, it beckons the creature to follow it. If the subject does so, the hand points in your direction, indicating the most direct feasible route. The hand hovers 10 feet in front of the subject, moving before it at a speed of as much as 240 feet per round. Once the hand leads the subject back to you, it disappears. <p class=sub>The subject is not compelled to follow the hand or act in any particular way toward you. If the subject chooses not to follow, the hand continues to beckon for the duration of the spell, then disappears. If the spell expires while the subject is en route to you, the hand disappears; the subject must then rely on her own devices to locate you. <p class=sub>If more than one subject in a 5-mile radius meets the summary, the hand locates the closest creature. If that creature refuses to follow the hand, the hand does not seek out a second subject. <p class=sub>If, at the end of 4 hours of searching, the hand has found no subject that matches the summary within 5 miles, it returns to you, displays an outstretched palm (indicating that no such creature was found), and disappears. <p class=sub>The ghostly hand has no physical form. It is invisible to anyone except you and a potential subject. It cannot engage in combat or execute any other task aside from locating a subject and leading it back to you. The hand can't pass through solid objects but can ooze through small cracks and slits. The hand cannot travel more than 5 miles from the spot it appeared when you cast the spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3096"
}, {
	name: "Heroes' Feast",
	summary: "Food for 1 creat/lvl cures & blesses",
	school: "Conj",
	composition: "V, S,DF",
	time: "10 min",
	range: "Close",
	effect: "One living creature/lvl",
	duration: "1 hr + 12 hr",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 7,
		"Cleric": 7
	},
	description: "You bring forth a great feast, including a magnificent table, chairs, service, and food and drink. The feast takes 1 hour to consume, and the beneficial effects do not set in until this hour is over. Every creature partaking of the feast is cured of all diseases, sickness, and nausea; becomes immune to poison for 12 hours; and gains 1d8 temporary hit points +1 point per two caster levels (maximum +10) after imbibing the nectar-like beverage that is part of the feast. The ambrosial food that is consumed grants each creature that partakes a +1 morale bonus on attack rolls and Will saves and immunity to fear effects for 12 hours. <p class=sub>If the feast is interrupted for any reason, the spell is ruined and all effects of the spell are negated.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ca09"
}, {
	name: "Heroism",
	summary: "+2 Attack, Save and skill checks",
	school: "Ench",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "10 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "This spell imbues a single creature with great bravery and morale in battle. The target gains a +2 morale bonus on attack rolls, saves, and skill checks.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6fdf"
}, {
	name: "Heroism, Greater",
	summary: "+4 Attack, Save and skill checks",
	school: "Ench",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 6,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This spell functions like <i>heroism</i>, except the creature gains a +4 morale bonus on attack rolls, saves, and skill checks, immunity to fear effects, and temporary hit points equal to your caster level (maximum 20).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "31c0"
}, {
	name: "Hide from Animals",
	summary: "Indiscernible to animals",
	school: "Abjur",
	composition: "S,DF",
	time: "1 a",
	range: "Touch",
	effect: "One creature/lvl",
	duration: "10 min/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Druid": 2,
		"Ranger": 1
	},
	description: "Animals cannot see, hear, or smell the warded creatures. Even extraordinary or supernatural sensory capabilities, such as blindsense, blindsight, scent, and tremorsense, cannot detect or locate warded creatures. Animals simply act as though the warded creatures are not there. Warded creatures could stand before the hungriest of lions and not be molested or even noticed. If a warded character touches an animal or attacks any creature, even with a spell, the spell ends for all recipients.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "190e"
}, {
	name: "Hide from Undead",
	summary: "Indiscernible to undead",
	school: "Abjur",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "One creature/lvl",
	duration: "10 min/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 2
	},
	description: "Undead cannot see, hear, or smell the warded creatures. Even extraordinary or supernatural sensory capabilities, such as blindsense, blindsight, scent, and tremorsense, cannot detect or locate warded creatures. Nonintelligent undead creatures are automatically affected and act as though the warded creatures are not there. <p class=sub>An intelligent undead creature gets a single Will saving throw. If it fails, the subject can't see any of the warded creatures. However, if it has reason to believe unseen opponents are present, it can attempt to find or strike them. <p class=sub>If a warded creature attempts to turn or command undead, touches an undead creature, or attacks any creature (even with a spell), the spell ends for all recipients.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2b23"
}, {
	name: "Hideous Laughter",
	school: "Ench (compulsion) [mind-affecting]",
	classes: {
		Bard: 1, 
		Sorceror: 2,
		Wizard: 2
	},
	time: "1 a",
	composition: "V, S, M (tiny fruit tarts and a feather)",
	range: "close (25 ft. + 5 ft./2 levels)",
	effect: "one creature; see text",
	duration: "1 round/lvl",
	save: "Will negates",
	sr: "yes",
	description: "This spell afflicts the subject with uncontrollable laughter. It  collapses into gales of manic laughter, falling prone. The subject  can take no actions while laughing, but is not considered helpless.  After the spell ends, it can act normally. On the creature&emdash;s next  turn, it may attempt a new saving throw to end the effect. This is  a full round action that does not provoke attacks of opportunity.  If this save is successful, the effect ends. If not, the creature  continues laughing for the entire duration. <p class=sub>A creature with an Intelligence score of 2 or lower is not affected.  A creature whose type is different from the caster&emdash;s receives a +4 bonus on its saving throw, because humor doesn't 'translate' well.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "16a5"
}, {
	name: "Hold Animal",
	summary: "Target becomes paralyzed",
	school: "Ench",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "One animal",
	duration: "1 rnd/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Druid": 3,
		"Ranger": 2
	},
	description: "This spell functions like <i>hold person</i>, except that it affects an animal instead of a humanoid",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "140f"
}, {
	name: "Hold Monster",
	summary: "Target becomes paralyzed",
	school: "Ench",
	composition: "V, S, M/DF (one hard metal bar or rod, which can be as small as a three-penny nail)",
	time: "1 a",
	range: "Medium",
	effect: "One living creature",
	duration: "1 rnd/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 5,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "This spell functions like <i>hold person</i>, except that it affects any living creature that fails its Will save",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8376"
}, {
	name: "Hold Monster, Mass",
	summary: "Targets become paralyzed",
	school: "Ench",
	composition: "V, S, M/DF",
	time: "1 a",
	range: "Medium",
	effect: "Any in 30-ft",
	duration: "1 rnd/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "This spell functions like <i>hold person</i>, except that it affects multiple creatures and holds any living creature that fails its Will save.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ff26"
}, {
	name: "Hold Person",
	summary: "Target becomes paralyzed",
	school: "Ench",
	composition: "V, S,F/DF",
	time: "1 a",
	range: "Medium",
	effect: "One humaniod",
	duration: "1 rnd/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Cleric": 3,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "The subject becomes paralyzed and freezes in place. It is aware and breathes normally but cannot take any actions, even speech. Each round on its turn, the subject may attempt a new saving throw to end the effect. (This is a full-round action that does not provoke attacks of opportunity.) <p class=sub>A winged creature who is paralyzed cannot flap its wings and falls. A swimmer can't swim and may drown. <p class=sub><i>Arcane Focus</i>: A small, straight piece of iron.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2d86"
}, {
	name: "Hold Person, Mass",
	summary: "Targets become paralyzed",
	school: "Ench",
	composition: "V, S,F/DF",
	time: "1 a",
	range: "Medium",
	effect: "All humanoids in 30-ft",
	duration: "1 rnd/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "This spell functions like <i>hold person</i>, except as noted above.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a49d"
}, {
	name: "Hold Portal",
	summary: "Holds door shut",
	school: "Abjur",
	composition: "V",
	time: "1 a",
	range: "Medium",
	effect: "Door to 20 sq ft/lvl",
	duration: "1 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "This spell magically holds shut a door, gate, window, or shutter of wood, metal, or stone. The magic affects the portal just as if it were securely closed and normally locked. A <i>knock</i> spell or a successful <i>dispel magic</i> spell can negate a <i>hold portal</i> spell. For a portal affected by this spell, add 5 to the normal DC for forcing open the portal.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9ece"
}, {
	name: "Holy Aura",
	summary: "+4 AC, +4 res, SR 25 vs evil",
	school: "Abjur",
	composition: "V, S, F (a tiny reliquary containing some sacred relic, such as a scrap of cloth from a saint's robe or a piece of parchment from a holy text)",
	time: "1 a",
	range: "20-ft",
	effect: "1/lvl in 20-ft radius",
	duration: "1 rnd/lvl (D)",
	save: "Special",
	sr: "Yes",
	classes: {
		"Cleric": 9
	},
	description: "A brilliant divine radiance surrounds the subjects, protecting them from attacks, granting them resistance to spells cast by evil creatures, and causing evil creatures to become blinded when they strike the subjects. This abjuration has four effects. <p class=sub>First, each warded creature gains a +4 deflection bonus to AC and a +4 resistance bonus on saves. Unlike <i>protection from evil</i>, this benefit applies against all attacks, not just against attacks by evil creatures. <p class=sub>Second, each warded creature gains spell resistance 25 against evil spells and spells cast by evil creatures. <p class=sub>Third, the abjuration blocks possession and mental influence, just as <i>protection from evil</i> does. <p class=sub>Finally, if an evil creature succeeds on a melee attack against a warded creature, the offending attacker is blinded (Fortitude save negates, as <i>blindness/deafness</i>, but against <i>holy aura</i>'s save DC).  The reliquary costs at least 500 gp.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "481a"
}, {
	name: "Holy Smite",
	summary: "Deals 1d8/2lvl to evil, half to neutral",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "20-ft radius",
	duration: "Instantaneous",
	save: "Will part",
	sr: "Yes",
	classes: {},
	description: "You draw down holy power to smite your enemies. Only evil and neutral creatures are harmed by the spell; good creatures are unaffected. <p class=sub>The spell deals 1d8 points of damage per two caster levels (maximum 5d8) to each evil creature in the area (or 1d6 points of damage per caster level, maximum 10d6, to an evil outsider) and causes it to become blinded for 1 round. A successful Will saving throw reduces damage to half and negates the blinded effect. <p class=sub>The spell deals only half damage to creatures who are neither good nor evil, and they are not blinded. Such a creature can reduce that damage by half (down to one-quarter of the roll) with a successful Will save.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b148"
}, {
	name: "Holy Sword",
	summary: "+5 Holy weapon, +2d6 dmg vs evil",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "Weapon",
	duration: "1 rnd/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Paladin": 4
	},
	description: "This spell allows you to channel holy power into your sword, or any other melee weapon you choose. The weapon acts as a +5 <i>holy weapon</i> (+5 enhancement bonus on attack and damage rolls, extra 2d6 damage against evil opponents). It also emits a <i>magic circle against evil</i> effect (as the spell). If the <i>magic circle</i> ends, the sword creates a new one on your turn as a free action. The spell is automatically canceled 1 round after the weapon leaves your hand. You cannot have more than one <i>holy sword</i> at a time. <p class=sub>If this spell is cast on a magic weapon, the powers of the spell supersede any that the weapon normally has, rendering the normal enhancement bonus and powers of the weapon inoperative for the duration of the spell. This spell is not cumulative with <i>bless weapon</i> or any other spell that might modify the weapon in any way. <p class=sub>This spell does not work on artifacts. <p class=sub><i>Note</i>: A masterwork weapon's bonus to attack does not stack with an enhancement bonus to attack.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5799"
}, {
	name: "Holy Word",
	summary: "Kills, paralyzes, weakens nongood",
	school: "Evoc",
	composition: "V",
	time: "1 a",
	range: "40-ft",
	effect: "40-ft radius",
	duration: "Instantaneous",
	save: "Special",
	sr: "Yes",
	classes: {
		"Cleric": 8
	},
	description: "Any nongood creature within the area that hears the <i>holy word</i> suffers the following ill effects.<table> <tr class=header><td>HD</td><td>Effect</td></tr> <tr class=description><td>Equal to caster level</td><td>Deafened</td></tr> <tr class=description><td>Up to caster level '1</td><td>Blinded, deafened</td></tr> <tr class=description><td>Up to caster level '5</td><td>Paralyzed, blinded, deafened</td></tr> <tr class=description><td>Up to caster level '10</td><td>Killed, paralyzed, blinded, deafened</td></tr> </table> <p class=sub>The effects are cumulative and concurrent. No saving throw is allowed against these effects. <p class=sub><i>Deafened</i>: The creature is deafened for 1d4 rounds. <p class=sub><i>Blinded</i>: The creature is blinded for 2d4 rounds. <p class=sub><i>Paralyzed</i>: The creature is paralyzed and helpless for 1d10 minutes. <p class=sub><i>Killed</i>: Living creatures die. Undead creatures are destroyed. <p class=sub>Furthermore, if you are on your home plane when you cast this spell, nongood extraplanar creatures within the area are instantly banished back to their home planes. Creatures so banished cannot return for at least 24 hours. This effect takes place regardless of whether the creatures hear the <i>holy word</i>. The banishment effect allows a Will save (at a '4 penalty) to negate. <p class=sub>Creatures whose HD exceed your caster level are unaffected by <i>holy word</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "aff7"
}, {
	name: "Horrid Wilting",
	summary: "1d6 dmg/lvl (20d6) in 60-ft",
	school: "Necro",
	composition: "V, S, M/DF (a bit of sponge)",
	time: "1 a",
	range: "Long",
	effect: "Living creatures",
	duration: "Instantaneous",
	save: "Fort half",
	sr: "Yes",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "This spell evaporates moisture from the body of each subject living creature, dealing 1d6 points of damage per caster level (maximum 20d6). This spell is especially devastating to water elementals and plant creatures, which instead take 1d8 points of damage per caster level (maximum 20d8)",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6520"
}, {
	name: "Hypnotic Pattern",
	summary: "Fascinates 2d4+1 HD/lvl creatures",
	school: "Illus",
	composition: "V or S, M (a glowing stick of incense or a crystal rod filled with phosphorescent material)",
	time: "1 a",
	range: "Medium",
	effect: "10-ft radius",
	duration: "Conc +2 rnds",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "A twisting pattern of subtle, shifting colors weaves through the air, fascinating creatures within it. Roll 2d4 and add your caster level (maximum 10) to determine the total number of Hit Dice of creatures affected. Creatures with the fewest HD are affected first; and, among creatures with equal HD, those who are closest to the spell's point of origin are affected first. Hit Dice that are not sufficient to affect a creature are wasted. Affected creatures become fascinated by the pattern of colors. Sightless creatures are not affected. <p class=sub>A wizard or sorcerer need not utter a sound to cast this spell, but a bard must sing, play music, or recite a rhyme as a verbal component",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ca36"
}, {
	name: "Hypnotism",
	summary: "Fascinates 2d4 HD of creatures in 30-ft",
	school: "Ench",
	composition: "V, S",
	time: "Round",
	range: "Close",
	effect: "Living creatures",
	duration: "2d4 rnds (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "Your gestures and droning incantation fascinate nearby creatures, causing them to stop and stare blankly at you. In addition, you can use their rapt attention to make your suggestions and requests seem more plausible. Roll 2d4 to see how many total Hit Dice of creatures you affect. Creatures with fewer HD are affected before creatures with more HD. Only creatures that can see or hear you are affected, but they do not need to understand you to be fascinated. <p class=sub>If you use this spell in combat, each target gains a +2 bonus on its saving throw. If the spell affects only a single creature not in combat at the time, the saving throw has a penalty of '2. <p class=sub>While the subject is fascinated by this spell, it reacts as though it were two steps more friendly in attitude (see Influencing NPC Attitudes, page 72). This allows you to make a single request of the affected creature (provided you can communicate with it). The request must be brief and reasonable. Even after the spell ends, the creature retains its new attitude toward you, but only with respect to that particular request.<p class=sub>A creature that fails its saving throwdoes not remember that you enspelled it.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "10a8"
}, {
	name: "Ice Storm",
	summary: "Hail does 3d6 bludgeon, 2d6 cold",
	school: "Evoc",
	composition: "V, S, M/DF (a pinch of dust and a few drops of water)",
	time: "1 a",
	range: "Long",
	effect: "20-ft radius",
	duration: "1 round",
	save: "-",
	sr: "Yes",
	classes: {
		"Druid": 5,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "Great magical hailstones pound down for 1 full round, dealing 3d6 points of bludgeoning damage and 2d6 points of cold damage to every creature in the area. A -4 penalty applies to each Listen check made within the <i>ice storm</i>'s effect, and all land movement within its area is at half speed. At the end of the duration, the hail disappears, leaving no aftereffects (other than the damage dealt)",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f74f"
}, {
	name: "Identify",
	summary: "Determines all features of magic item",
	school: "Div",
	composition: "V, S, M/DF (a pearl of at least 100 gp value, crushed and stirred into wine with an owl feather; the infusion must be drunk prior to spellcasting)",
	time: "1 hr",
	range: "Touch",
	effect: "One item",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "The spell determines all magic properties of a single magic item, including how to activate those functions (if appropriate), and how many charges are left (if any). <p class=sub><i>Identify</i> does not function when used on an artifact (see the <i>Dungeon Master's Guide</i> for descriptions on artifacts)",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "995b"
}, {
	name: "Illusory Script",
	summary: "Only designated can decipher",
	school: "Illus",
	composition: "V, S, M (a lead-based ink (cost of not less than 50 gp)",
	time: "Special",
	range: "Touch",
	effect: "Weight 10 lb",
	duration: "1 day/level (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "You write instructions or other information on parchment, paper, or any suitable writing material. The <i>illusory script</i> appears to be some form of foreign or magical writing. Only the person (or people) designated by you at the time of the casting are able to read the writing; it's unintelligible to any other character, although an illusionist recognizes it as <i>illusory script</i>. <p class=sub>Any unauthorized creature attempting to read the script triggers a potent illusory effect and must make a saving throw. A successful saving throw means the creature can look away with only a mild sense of disorientation. Failure means the creature is subject to a suggestion implanted in the script by you at the time the illusory script spell was cast. The suggestion lasts only 30 minutes. Typical suggestions include \"Close the book and leave,\" \"Forget the existence of the book,\" and so forth. If successfully dispelled by <i>dispel magic</i>, the <i>illusory script</i> and its secret message disappear. The hidden message can be read by a combination of the <i>true seeing</i> spell with the <i>read magic</i> or <i>comprehend languages</i> spell. <p class=sub>The casting time depends on how long a message you wish to write, but it is always at least 1 minute",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c90b"
}, {
	name: "Illusory Wall",
	summary: "Wall, floor or ceiling looks real",
	school: "Illus",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "1 x 10 x 10-ft",
	duration: "Permanent",
	save: "Will dsblf",
	sr: "-",
	classes: {
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "This spell creates the illusion of a wall, floor, ceiling, or similar surface. It appears absolutely real when viewed, but physical objects can pass through it without difficulty. When the spell is used to hide pits, traps, or normal doors, any detection abilities that do not require sight work normally. Touch or a probing search reveals the true nature of the surface, though such measures do not cause the illusion to disappear.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "792d"
}, {
	name: "Imbue with Spell Ability",
	summary: "Transfer spells to target",
	school: "Evoc",
	composition: "V, S,DF",
	time: "10 min",
	range: "Touch",
	effect: "One creature",
	duration: "Till used",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 5
	},
	description: "You transfer some of your currently prepared spells, and the ability to cast them, to another creature. Only a creature with an Intelligence score of at least 5 and a Wisdom score of at least 9 can receive this bestowal. Only cleric spells from the schools of abjuration, divination, and conjuration (healing) can be transferred. The number and level of spells that the subject can be granted depends on its Hit Dice; even multiple castings of <i>imbue with spell ability</i> can't exceed this limit. <table> <tr class=header><td>HD of Recipient</td><td>Spells Imbued</td></tr> <tr class=description><td>2 or lower</td><td>One 1st-level spell</td></tr> <tr class=description><td>3-4</td><td>One or two 1st-level spells</td></tr> <tr class=description><td>5 or higher</td><td>One or two 1st-level spells and one 2nd-level spell</td></tr> </table><p class=sub>The transferred spell's variable characteristics (range, duration, area, and the like) function according to your level, not the level of the recipient. <p class=sub>Once you cast <i>imbue with spell ability</i>, you cannot prepare a new 4th-level spell to replace it until the recipient uses the imbued spells or is slain, or until you dismiss the <i>imbue with spell ability</i> spell. In the meantime, you remain responsible to your deity or your principles for the use to which the spell is put. If the number of 4th-level spells you can cast decreases, and that number drops below your current number of active <i>imbue with spell ability</i> spells, the more recently cast imbued spells are dispelled. <p class=sub>To cast a spell with a verbal component, the subject must be able to speak. To cast a spell with a somatic component, it must have humanlike hands. To cast a spell with a material component or focus, it must have the materials or focus.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6a1e"
}, {
	name: "Implosion",
	summary: "Kills one creature/round",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "1 corporeal creat/rnd",
	duration: "Conc, up to 4 rnds",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Cleric": 10
	},
	description: "You create a destructive resonance in a corporeal creature's body. For each round you concentrate, you cause one creature to collapse in on itself, killing it. (This effect, being instantaneous, cannot be dispelled.) <p class=sub>You can target a particular creature only once with each casting of the spell. <p class=sub><i>Implosion</i> has no effect on creatures in gaseous form or on incorporeal creatures.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8431"
}, {
	name: "Imprisonment",
	summary: "Entombs target beneath the earth",
	school: "Abjur",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "When you cast <i>imprisonment</i> and touch a creature, it is entombed in a state of suspended animation (see the <i>temporal stasis</i> spell) in a small sphere far beneath the surface of the earth. The subject remains there unless a <i>freedom</i> spell is cast at the locale where the imprisonment took place. Magical search by a <i>crystal ball</i>, a <i>locate object</i> spell, or some other similar divination does not reveal the fact that a creature is imprisoned, but <i>discern location</i> does. A <i>wish</i> or <i>miracle</i> spell will not free the recipient, but will reveal where it is entombed. If you know the target's name and some facts about its life, the target takes a -4 penalty on its save.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9c10"
}, {
	name: "Incendiary Cloud",
	summary: "Cloud deals 4d6 fire damage/round",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "20-ft radius",
	duration: "1 rnd/lvl",
	save: "Relf half",
	sr: "-",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "An <i>incendiary cloud</i> spell creates a cloud of roiling smoke shot through with white-hot embers. The smoke obscures all sight as a <i>fog cloud</i> does. In addition, the white-hot embers within the cloud deal 4d6 points of fire damage to everything within the cloud on your turn each round. All targets can make Reflex saves each round to take half damage. <p class=sub>As with a <i>cloudkill</i> spell, the smoke moves away from you at 10 feet per round. Figure out the smoke's new spread each round based on its new point of origin, which is 10 feet farther away from where you were when you cast the spell. By concentrating, you can make the cloud (actually its point of origin) move as much as 60 feet each round. Any portion of the cloud that would extend beyond your maximum range dissipates harmlessly, reducing the remainder's spread thereafter. <p class=sub>As with <i>fog cloud</i>, wind disperses the smoke, and the spell can't be cast underwater.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2a6c"
}, {
	name: "Inflict Critical Wounds",
	summary: "Deal 4d8+1/lvl dmg (+20)",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Will half",
	sr: "Yes",
	classes: {
		"Cleric": 5
	},
	description: "This spell functions like <i>inflict light wounds</i>, except that you deal 4d8 points of damage +1 point per caster level (maximum +20).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d511"
}, {
	name: "Inflict Critical Wounds, Mass",
	summary: "Deal 4d8+1/lvl dmg (+40)",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Creature/lvl in 30-ft",
	duration: "Instantaneous",
	save: "Will half",
	sr: "Yes",
	classes: {
		"Cleric": 9
	},
	description: "This spell functions like <i>mass inflict light wounds</i>, except that it deals 4d8 points of damage +1 point per caster level (maximum +40).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "56f0"
}, {
	name: "Inflict Light Wounds",
	summary: "Deal 1d8+1/lvl dmg (+5)",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Will half",
	sr: "Yes",
	classes: {
		"Cleric": 2
	},
	description: "When laying your hand upon a creature, you channel negative energy that deals 1d8 points of damage +1 point per caster level (maximum +5). <p class=sub>Since undead are powered by negative energy, this spell cures such a creature of a like amount of damage, rather than harming it.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "23bc"
}, {
	name: "Inflict Light Wounds, Mass",
	summary: "Deal 1d8+1/lvl dmg (+25)",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Creature/lvl in 30-ft",
	duration: "Instantaneous",
	save: "Will half",
	sr: "Yes",
	classes: {
		"Cleric": 6
	},
	description: "Negative energy spreads out in all directions from the point of origin, dealing 1d8 points of damage +1 point per caster level (maximum +25) to nearby living enemies. <p class=sub>Like other <i>inflict</i> spells, <i>mass inflict light wounds</i> cures undead in its area rather than damaging them. A cleric capable of spontaneously casting <i>inflict</i> spells can also spontaneously cast <i>mass inflict</i> spells.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e6aa"
}, {
	name: "Inflict Moderate Wounds",
	summary: "Deal 2d8+1/lvl dmg (+10)",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Will half",
	sr: "Yes",
	classes: {
		"Cleric": 3
	},
	description: "This spell functions like <i>inflict light wounds</i>, except that you deal 2d8 points of damage +1 point per caster level (maximum +10).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a34f"
}, {
	name: "Inflict Moderate Wounds, Mass",
	summary: "Deal 2d8+1/lvl dmg (+30)",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Creature/lvl in 30-ft",
	duration: "Instantaneous",
	save: "Will half",
	sr: "Yes",
	classes: {
		"Cleric": 7
	},
	description: "This spell functions like <i>mass inflict light wounds</i>, except that it deals 2d8 points of damage +1 point per caster level (maximum +30).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4438"
}, {
	name: "Inflict Serious Wounds",
	summary: "Deal 3d8+1/lvl dmg (+15)",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Will half",
	sr: "Yes",
	classes: {
		"Cleric": 4
	},
	description: "This spell functions like <i>inflict light wounds</i>, except that you deal 3d8 points of damage +1 point per caster level (maximum +15). ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "987d"
}, {
	name: "Inflict Serious Wounds, Mass",
	summary: "Deal 3d8+1/lvl dmg (+35)",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Creature/lvl in 30-ft",
	duration: "Instantaneous",
	save: "Will half",
	sr: "Yes",
	classes: {
		"Cleric": 8
	},
	description: "This spell functions like <i>mass inflict light wounds</i>, except that it deals 3d8 points of damage +1 point per caster level (maximum +35).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "90e0"
}, {
	name: "Insanity",
	summary: "Target suffer continuous confusion",
	school: "Ench",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "One living creature",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "The affected creature suffers from a continuous <i>confusion</i> effect, as the spell. <p class=sub><i>Remove curse</i> does not remove <i>insanity</i>. <i>Greater restoration, heal, limited wish, miracle</i>, or <i>wish</i> can restore the creature.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b3d5"
}, {
	name: "Insect Plague",
	summary: "Insect swarm",
	school: "Conj",
	composition: "V, S,DF",
	time: "Round",
	range: "Long",
	effect: "1 swarm/3lvls",
	duration: "1 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 6,
		"Druid": 6
	},
	description: "You summon a number of swarms of locusts (one per three levels, to a maximum of six swarms at 18th level). The swarms must be summoned so that each one is adjacent to at least one other swarm (that is, the swarms must fill one contiguous area). You may summon the locust swarms so that they share the area of other creatures. Each swarm attacks any creatures occupying its area. The swarms are stationary after being summoned, and won't pursue creatures that flee. <p class=sub>See the <i>Monster Manual</i> for descriptions on locust swarms.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1daf"
}, {
	name: "Interposing Hand",
	school: "Evoc  [force]",	
	classes: {
		Sorceror: 5,
		Wizard: 5
	},
	time: "1 a",
	composition: "V, S, F (a soft glove)",
	range: "medium (100 ft. + 10 ft./level)",
	effect: "10-ft. hand",
	duration: "1 round/lvl (D)",
	save: "-",
	sr: "yes",
	description: "<i>Interposing hand</i> creates a Large magic hand that appears between  you and one opponent. This floating, disembodied hand then  moves to remain between the two of you, regardless of where  you move or how the opponent tries to get around it, providing  cover (+4 AC) for you against that opponent. Nothing can fool the  hand&emdash;it sticks with the selected opponent in spite of <i>darkness</i>,  invisibility, polymorphing, or any other attempt at hiding or  disguise. The hand does not pursue an opponent, however. <p class=sub>An <i>interposing hand</i> is 10 feet long and about that wide with  its fingers outstretched. It has as many hit points as you do when  you're undamaged, and is AC 20 (-1 size, +11 natural). It takes  damage as a normal creature, but most magical effects that don't  cause damage do not affect it. <p class=sub>The hand never provokes attacks of opportunity from opponents.  It cannot push through a <i>wall of force</i> or enter an <i>antimagic field</i>, but  it suffers the full effect of a <i>prismatic wall</i> or <i>prismatic sphere</i>. The  hand makes saving throws as its caster. <p class=sub><i>Disintegrate</i> or a successful <i>dispel magic</i> destroys it. <p class=sub>Any creature weighing 2,000 pounds or less that tries to push  past the hand is slowed to half its normal speed. The hand cannot  reduce the speed of a creature weighing more than 2,000 pounds,  but it still affects the creature's attacks.  <p class=sub>Directing the spell to a new target is a move action.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "59c"
}, {
	name: "Invisibility",
	summary: "Invisible until attacks",
	school: "Illus",
	composition: "V, S, M/DF (an eyelash encased in a bit of gum arabic)",
	time: "1 a",
	range: "Prsl,touch",
	effect: "Touch",
	duration: "1 min/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "The creature or object touched becomes invisible, vanishing from sight, even from darkvision. If the recipient is a creature carrying gear, that vanishes, too. If you cast the spell on someone else, neither you nor your allies can see the subject, unless you can normally see invisible things or you employ magic to do so. <p class=sub>Items dropped or put down by an invisible creature become visible; items picked up disappear if tucked into the clothing or pouches worn by the creature. Light, however, never becomes invisible, although a source of light can become so (thus, the effect is that of a light with no visible source). Any part of an item that the subject carries but that extends more than 10 feet from it becomes visible, such as a trailing rope. <p class=sub>Of course, the subject is not magically silenced, and certain other conditions can render the recipient detectable (such as stepping in a puddle). The spell ends if the subject attacks any creature. For purposes of this spell, an attack includes any spell targeting a foe or whose area or effect includes a foe. (Exactly who is a foe depends on the invisible character's perceptions.) Actions directed at unattended objects do not break the spell. Causing harm indirectly is not an attack. Thus, an invisible being can open doors, talk, eat, climb stairs, summon monsters and have them attack, cut the ropes holding a rope bridge while enemies are on the bridge, remotely trigger traps, open a portcullis to release attack dogs, and so forth. If the subject attacks directly, however, it immediately becomes visible along with all its gear. Spells such as bless that specifically affect allies but not foes are not attacks for this purpose, even when they include foes in their area. <p class=sub><i>See Table 8-5</i>: Attack Roll Modifiers and Table 8-6: Armor Class Modifiers, page 151, for the effects of invisibility on combat. <p class=sub><i>Invisibility</i> can be made permanent (on objects only) with a <i>permanency</i> spell",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4e89"
}, {
	name: "Invisibility, Greater",
	summary: "Invisible (even if attacks)",
	school: "Illus",
	composition: "V, S, M/DF",
	time: "1 a",
	range: "Prsl,touch",
	effect: "One creature",
	duration: "1 min/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 5,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "This spell functions like <i>invisibility</i>, except that it doesn't end if the subject attacks.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5d38"
}, {
	name: "Invisibility, Mass",
	summary: "Invisible until anyone attacks",
	school: "Illus",
	composition: "V, S, M (an eyelash encased in a bit of gum arabic)",
	time: "1 a",
	range: "Long",
	effect: "Any in 180-ft",
	duration: "1 min/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "This spell functions like <i>invisibility</i>, except that the effect is mobile with the group and is broken when anyone in the group attacks. Individuals in the group cannot see each other. The spell is broken for any individual who moves more than 180 feet from the nearest member of the group. (If only two individuals are affected, the one moving away from the other one loses its invisibility. If both are moving away from each other, they both become visible when the distance between them exceeds 180 feet.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "54db"
}, {
	name: "Invisibility Purge",
	summary: "Dispels invisibility within 5-ft/level",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 4
	},
	description: "You surround yourself with a sphere of power with a radius of 5 feet per caster level that negates all forms of invisibility. Anything invisible becomes visible while in the area.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b73e"
}, {
	name: "Invisibility Sphere",
	summary: "Invisibility to all within 10-ft",
	school: "Illus",
	composition: "V, S, M",
	time: "1 a",
	range: "Prsl,touch",
	effect: "10-ft radius",
	duration: "1 min/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "This spell functions like <i>invisibility</i>, except that this spell confers invisibility upon all creatures within 10 feet of the recipient. The center of the effect is mobile with the recipient. <p class=sub>Those affected by this spell can see each other and themselves as if unaffected by the spell. Any affected creature moving out of the area becomes visible, but creatures moving into the area after the spell is cast do not become invisible. Affected creatures (other than the recipient) who attack negate the invisibility only for themselves. If the spell recipient attacks, the <i>invisibility sphere</i> ends.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "43a5"
}, {
	name: "Iron Body",
	summary: "Body becomes iron, Dmg reduction 15",
	school: "Trans",
	composition: "V, S, M/DF (a small piece of iron that was once part of either an iron golem, a hero's armor, or a war machine)",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "This spell transforms your body into living iron, which grants you several powerful resistances and abilities. <p class=sub>You gain damage reduction 15/adamantine. You are immune to blindness, critical hits, ability score damage, deafness, disease, drowning, electricity, poison, stunning, and all spells or attacks that affect your physiology or respiration, because you have no physiology or respiration while this spell is in effect. You take only half damage from acid and fire of all kinds. However, you also become vulnerable to all special attacks that affect iron golems. <p class=sub>You gain a +6 enhancement bonus to your Strength score, but you take a -6 penalty to Dexterity as well (to a minimum Dexterity score of 1), and your speed is reduced to half normal. You have an arcane spell failure chance of 50% and a -8 armor check penalty, just as if you were clad in full plate armor. You cannot drink (and thus can't use potions) or play wind instruments. <p class=sub>Your unarmed attacks deal damage equal to a club sized for you (1d4 for Small characters or 1d6 for Medium characters), and you are considered armed when making unarmed attacks. <p class=sub>Your weight increases by a factor of ten, causing you to sink in water like a stone. However, you could survive the crushing pressure and lack of air at the bottom of the ocean&emdash;at least until the spell duration expires",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "fdf2"
}, {
	name: "Ironwood",
	summary: "Magical wood is strong as steel",
	school: "Trans",
	composition: "V, S, M (Wood shaped into the form of the intended ironwood object)",
	time: "1 m/lb",
	range: "0-ft",
	effect: "5 lb of wood/lvl",
	duration: "1 day/level (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 7
	},
	description: "<i>Ironwood</i> is a magical substance created by druids from normal wood. While remaining natural wood in almost every way, <i>ironwood</i> is as strong, heavy, and resistant to fire as steel. Spells that affect metal or iron (such as <i>heat metal</i>) do not function on ironwood. Spells that affect wood (such as wood shape) do affect <i>ironwood</i>, although ironwood does not burn. Using this spell with <i>wood shape</i> or a wood-related Craft check, you can fashion wooden items that function as steel items. Thus, wooden plate armor and wooden swords can be created that are as durable as their normal steel counterparts. These items are freely usable by druids. <p class=sub>Further, if you make only half as much ironwood as the spell would normally allow, any weapon, shield, or suit of armor so created is treated as a magic item with a +1 enhancement bonus.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9c29"
}, {
	name: "Irresistible Dance",
	school: "Ench (compulsion) [mind-affecting]",
	time: "1 a",
	composition: "V",
	range: "touch",
	effect: "living creature touched",
	duration: "1d4+1 rounds",
	save: "Will partial",
	sr: "yes",
	classes: {
		Bard: 6, 
		Sorcerer: 8,
		Wizard: 8
	},
	description: "<p class=sub>The subject feels an undeniable urge to dance and begins doing so,  complete with foot shuffling and tapping. The spell effect makes  it impossible for the subject to do anything other than caper and  prance in place. The effect imposes a -4 penalty to Armor Class and  a -10 penalty on Reflex saves, and it negates any AC bonus granted  by a shield the target holds. The dancing subject provokes attacks of  opportunity each round on its turn. A successful Will save reduces  the duration of this effect to 1 round.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5c09"
}, {
	name: "Jump",
	summary: "+10 jump checks,+20/5th, +30/9th",
	school: "Trans",
	composition: "V, S, M (a grasshopper's hind leg, which you break when the spell is cast)",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 min/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Druid": 2,
		"Ranger": 1,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "The subject gets a +10 enhancement bonus on Jump checks. The enhancement bonus increases to +20 at caster level 5th, and to +30 (the maximum) at caster level 9th",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a4ff"
}, {
	name: "Keen Edge",
	summary: "Doubles weapon's threat range",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Weapon or 50 proj.",
	duration: "10 min/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "This spell makes a weapon magically keen, improving its ability to deal telling blows. This transmutation doubles the threat range of the weapon. A threat range of 20 becomes 19-20, a threat range of 19-20 becomes 17-20, and a threat range of 18-20 becomes 15-20. The spell can be cast only on piercing or slashing weapons. If cast on arrows or crossbow bolts, the keen edge on a particular projectile ends after one use, whether or not the missile strikes its intended target. (Treat shuriken as arrows, rather than as thrown weapons, for the purpose of this spell.) <p class=sub>Multiple effects that increase a weapon's threat range (such as the <i>keen edge</i> spell and the Improved Critical feat) don't stack. You can't cast this spell on a natural weapon, such as a claw.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3dd5"
}, {
	name: "Knock",
	summary: "Open locked or magic sealed doors",
	school: "Trans",
	composition: "V",
	time: "1 a",
	range: "Medium",
	effect: "Up to 10 sq ft/lvl",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "The <i>knock</i> spell opens stuck, barred, locked, <i>held</i>, or <i>arcane locked</i> doors. It opens secret doors, as well as locked or trick-opening boxes or chests. It also loosens welds, shackles, or chains (provided they serve to hold closures shut). If used to open a <i>arcane locked</i> door, the spell does not remove the <i>arcane lock</i> but simply suspends its functioning for 10 minutes. In all other cases, the door does not relock itself or become stuck again on its own. <i>Knock</i> does not raise barred gates or similar impediments (such as a portcullis), nor does it affect ropes, vines, and the like. The effect is limited by the area. A 3rd-level caster can cast a <i>knock</i> spell on a door of 30 square feet or less (for example, a standard 4-foot-by-7-foot door). Each spell can undo as many as two means of preventing egress. Thus if a door is locked, barred, and held, or quadruple locked, opening it requires two <i>knock</i> spells.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "357e"
}, {
	name: "Know Direction",
	summary: "You discern North",
	school: "Div",
	composition: "V, S",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 1,
		"Druid": 1
	},
	description: "You instantly know the direction of north from your current position. The spell is effective in any environment in which \"north\" exists, but it may not work in extraplanar settings. Your knowledge of north is correct at the moment of casting, but you can get lost again within moments if you don't find some external reference point to help you keep track of direction.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "84eb"
}, {
	name: "Legend Lore",
	summary: "Learn tales about person or place",
	school: "Div",
	composition: "V, S, M (incense worth at least 250 gp), F (four strips of ivory worth 50 gp each formed into a rectangle)",
	time: "Special",
	range: "Self",
	effect: "Caster",
	duration: "Special",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 5,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "<i>Legend lore</i> brings to your mind legends about an important person, place, or thing. If the person or thing is at hand, or if you are in the place in question, the casting time is only 1d4×10 minutes. If you have only descriptioned information on the person, place, or thing, the casting time is 1d10 days, and the resulting lore is less complete and specific (though it often provides enough information to help you find the person, place, or thing, thus allowing a better <i>legend lore</i> result next time). If you know only rumors, the casting time is 2d6 weeks, and the resulting lore is vague and incomplete (though it often directs you to more descriptioned information, thus allowing a better <i>legend lore</i> result next time). <p class=sub><i>During the casting, you cannot engage in other than routine activities</i>: eating, sleeping, and so forth. When completed, the divination brings legends (if any) about the person, place, or things to your mind. These may be legends that are still current, legends that have been forgotten, or even information that has never been generally known. If the person, place, or thing is not of legendary importance, you gain no information. As a rule of thumb, characters who are 11th level and higher are \"legendary,\" as are the sorts of creatures they contend with, the major magic items they wield, and the places where they perform their key deeds. <p class=sub>Examples of <i>legend lore</i> results include the following. <p class=sub><i>A divination about a mysterious magic axe you have at hand</i>: \"Woe to the evildoer whose hand touches the axe, for even the haft chops the hand of the evil ones. Only a true Son or Daughter of Stone, one who loves Moradin and whom Moradin loves, may awaken the true powers of the axe, and only with the sacred word '<i>Rudnogg</i>' on the lips.\" <p class=sub><i>A divination about a legendary paladin about whom you know many descriptions</i>: \"Vanashon has been denied the glory of death and the duty of life. He waits patiently beneath the Forbidden Mountain.\" (The paladin has been turned to stone in the caverns under the mountain.) <p class=sub><i>A divination about ancient ruins about which you have only a passing reference in a partially damaged tome</i>: \"The sorcerer who called herself Ryth built a library without words and a temple without gods. Those tho read and those who pray tore it down in a night and a day.\" (These clues may be enough for you to find out more and get descriptions you need to cast a better <i>legend lore</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "714c"
}, {
	name: "Levitate",
	summary: "Target moves up/down",
	school: "Trans",
	composition: "V, S, F (either a small leather loop or a piece of golden wire bent into a cup shape with a long shank on one end)",
	time: "1 a",
	range: "Prsl,close",
	effect: "100 lb/lvl, 20-ft/rnd",
	duration: "10 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "<i>Levitate</i> allows you to move yourself, another creature, or an object up and down as you wish. A creature must be willing to be levitated, and an object must be unattended or possessed by a willing creature. You can mentally direct the recipient to move up or down as much as 20 feet each round; doing so is a move action. You cannot move the recipient horizontally, but the recipient could clamber along the face of a cliff, for example, or push against a ceiling to move laterally (generally at half its base land speed). <p class=sub>A <i>levitating</i> creature that attacks with a melee or ranged weapon finds itself increasingly unstable; the first attack has a -1 penalty on attack rolls, the second -2, and so on, to a maximum penalty of -5. A full round spent stabilizing allows the creature to begin again at -1. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7350"
}, {
	name: "Light",
	summary: "Item shines like a torch 20-ft glow",
	school: "Evoc",
	composition: "V, M/DF (a firefly or a piece of phosphorescent moss)",
	time: "1 a",
	range: "Touch",
	effect: "One item",
	duration: "10 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 1,
		"Cleric": 1,
		"Druid": 1,
		"Sorceror": 1,
		"Wizard": 1
	},
	description: "This spell causes an object to glow like a torch, shedding bright light in a 20-foot-radius (and dim light for an additional 20 feet) from the point you touch. The effect is immobile, but it can be cast on a movable object. Light taken into an area of <i>magical</i> darkness does not function. <p class=sub>A light spell (one with the light descriptor) counters and dispels a <i>darkness</i> spell (one with the darkness descriptor) of an equal or lower level",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "93dc"
}, {
	name: "Lightning Bolt",
	summary: "Electricity deals 1d6 dmg/lvl (10)",
	school: "Evoc",
	composition: "V, S, M (a bit of fur and an amber, crystal, or glass rod)",
	time: "1 a",
	range: "120-ft",
	effect: "120-ft line",
	duration: "Instantaneous",
	save: "Ref half",
	sr: "Yes",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "You release a powerful stroke of electrical energy that deals 1d6 points of electricity damage per caster level (maximum 10d6) to each creature within its area. The bolt begins at your fingertips. <p class=sub>The <i>lightning bolt</i> sets fire to combustibles and damages objects in its path. It can melt metals with a low melting point, such as lead, gold, copper, silver, or bronze. If the damage caused to an interposing barrier shatters or breaks through it, the bolt may continue beyond the barrier if the spell's range permits; otherwise, it stops at the barrier just as any other spell effect does",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2008"
}, {
	name: "Limited Wish",
	summary: "Duplicates lower level spell",
	school: "Univ",
	composition: "V, S,XP",
	time: "1 a",
	range: "Special",
	effect: "Special",
	duration: "Special",
	save: "Special",
	sr: "Yes",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "A <i>limited wish</i> lets you create nearly any type of effect. For example, a <i>limited wish</i> can do any of the following things. <p class=sub><ul><p class=sub><li> Duplicate any sorcerer/wizard spell of 6th level or lower, provided the spell is not of a school prohibited to you. <p class=sub><li> Duplicate any other spell of 5th level or lower, provided the spell is not of a school prohibited to you. <p class=sub><li> Duplicate any sorcerer/wizard spell of 5th level or lower, even if it's of a prohibited school. <p class=sub><li> Duplicate any other spell of 4th level or lower, even if it's of a prohibited school. <p class=sub><li> Undo the harmful effects of many spells, such as <i>geas/quest</i> or <i>insanity</i>. <p class=sub><li> Produce any other effect whose power level is in line with the above effects, such as a single creature automatically hitting on its next attack or taking a -7 penalty on its next saving throw. <p class=sub></ul> <p class=sub>A duplicated spell allows saving throws and spell resistance as normal (but the save DC is for a 7th-level spell). When a <i>limited wish</i> duplicates a spell that has an XP cost, you must pay that cost or 300 XP, whichever is more. When a <i>limited wish</i> spell duplicates a spell with a material component that costs more than 1,000 gp, you must provide that component. <p class=sub><i>XP Cost</i>: 300 XP or more (see above).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "fdac"
}, {
	name: "Liveoak",
	summary: "Oak becomes treant guardian",
	school: "Trans",
	composition: "V, S",
	time: "10 min",
	range: "Touch",
	effect: "Tree",
	duration: "1 day/level (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 7
	},
	description: "This spell turns an oak tree into a protector or guardian. The spell can be cast on only a single tree at a time; while <i>liveoak</i> is in effect, you can't cast it again on another tree. The tree on which the spell is cast must be within 10 feet of your dwelling place, within a place sacred to you, or within 300 feet of something that you wish to guard or protect. <p class=sub><i>Liveoak</i> must be cast on a healthy, Huge oak. A triggering phrase of up to one word per caster level is placed on the targeted oak. For instance, \"Attack any persons who come near without first saying 'sacred mistletoe'\" is an eleven-word trigger phrase that you could use at 11th level or higher. The liveoak spell triggers the tree into animating as a treant (see the <i>Monster Manual</i>). At the DM's option, you can extrapolate statistics for a smaller tree from the treant statistics if you cast <i>likeoak</i> on a smaller oak. <p class=sub>If <i>liveoak</i> is dispelled, the tree takes root immediately, wherever it happens to be. If released by you, the tree tries to return to its original location before taking root.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "759b"
}, {
	name: "Locate Creature",
	summary: "Senses direction of familiar creature",
	school: "Div",
	composition: "V, S, M (a bit of fur from a bloodhound)",
	time: "1 a",
	range: "Long",
	effect: "400-ft+40-ft/lvl rad",
	duration: "10 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 5,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "This spell functions like <i>locate object</i>, except this spell locates a known or familiar creature. <p class=sub>You slowly turn and sense when you are facing in the direction of the creature to be located, provided it is within range. You also know in which direction the creature is moving, if any. <p class=sub>The spell can locate a creature of a specific kind (such as a human or a unicorn) or a specific creature known to you. It cannot find a creature of a certain type (such as humanoid or animal). To find a kind of creature, you must have seen such a creature up close (within 30 feet) at least once. <p class=sub>Running water blocks the spell. It cannot detect objects. It can be fooled by <i>mislead</i>, <i>nondetection</i>, and <i>polymorph</i> spells",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "55f2"
}, {
	name: "Locate Object",
	summary: "Senses direction of item",
	school: "Div",
	composition: "V, S,F/DF",
	time: "1 a",
	range: "Long",
	effect: "400-ft+40-ft/lvl rad",
	duration: "1 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 3,
		"Cleric": 4,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "You sense the direction of a well-known or clearly visualized object. The spell locates such objects as apparel, jewelry, furniture, tools, weapons, or even a ladder. You can search for general items such as a stairway, a sword, or a jewel, in which case you locate the nearest one of its kind if more than one is within range. Attempting to find a certain item, such as a particular piece of jewelry, requires a specific and accurate mental image; if the image is not close enough to the actual object, the spell fails. You cannot specify a unique item (such as \"Baron Vulden's signet ring\") unless you have observed that particular item firsthand (not through divination). <p class=sub>The spell is blocked by even a thin sheet of lead. Creatures cannot be found by this spell. <i>Polymorph any object</i> fools it. <p class=sub><i>Arcane Focus</i>: A forked twig.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "85cd"
}, {
	name: "Longstrider",
	summary: "Movement increases +10-ft/rnd",
	school: "Trans",
	composition: "V, S, M (a pinch of dirt)",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 hr/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 2,
		"Ranger": 1
	},
	description: "This spell increases your base land speed by 10 feet. (This adjustment counts as an enhancement bonus.) It has no effect on other modes of movement, such as burrow, climb, fly, or swim",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a6aa"
}, {
	name: "Lullaby",
	summary: "Become drowsy -5 listen and spot",
	school: "Ench",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "Living in 10-ft radius",
	duration: "Conc +1 rnd/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 1
	},
	description: "Any creature within the area that fails a Will save becomes drowsy and inattentive, taking a -5 penalty on Listen and Spot checks and a -2 penalty on Will saves against sleep effects while the <i>lullaby</i> is in effect. <i>Lullaby</i> lasts for as long as the caster concentrates, plus up to 1 round per caster level thereafter. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8303"
}, {
	name: "Mage Armor",
	summary: "Give target +4 AC",
	school: "Conj",
	composition: "V, S,F",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 hr/lvl (D)",
	save: "Will negs",
	sr: "-",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "An invisible but tangible field of force surrounds the subject of a <i>mage armor</i> spell, providing a +4 armor bonus to AC. Unlike mundane armor, <i>mage armor</i> entails no armor check penalty, arcane spell failure chance, or speed reduction. Since <i>mage armor</i> is made of force, incorporeal creatures can't bypass it the way they do normal armor. <p class=sub><i>Focus</i>: A piece of cured leather",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c7a5"
}, {
	name: "Mage Hand",
	summary: "Telekinesis of 5-lb item",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Nonmagical Item",
	duration: "Concentrate",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 1,
		"Sorceror": 1,
		"Wizard": 1
	},
	description: "You point your finger at an object and can lift it and move it at will from a distance. As a move action, you can propel the object as far as 15 feet in any direction, though the spell ends if the distance between you and the object ever exceeds the spell's range.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b1b1"
}, {
	name: "Mage's Disjunction",
	school: "Abjur",
	classes: {
		Sorceror: 9,
		Wizard: 9
	},
	time: "1 a",
	composition: "V",
	range: "close (25 ft. + 5 ft./2 levels)",
	effect:  "all magical effects and magic items within a 40-ft.-radius burst, or one magic item (see text)",
	duration: "1 minute/lvl",
	save: "Will negates (object)",
	sr: "no",
	description: "All magical effects and magic items within the radius of the  spell, except for those that you carry or touch, are disjoined.  That is, spells and spell-like effects are unraveled and destroyed  completely (ending the effect as a <i>dispel magic</i> spell does), and  each permanent magic item must make a successful Will save  or be turned into a normal item for the duration of this spell.  An item in a creatures possession uses its own Will save bonus  or its possessor's Will save bonus, whichever is higher. If an  item's saving throw results in a natural 1 on the die, the item is  destroyed instead of being suppressed. <p class=sub>You also have a 1% chance per caster level of destroying an  <i>antimagic field</i>. If the <i>antimagic field</i> survives the disjunction, no  items within it are disjoined. <p class=sub>You can also use this spell to target a single item. The item gets a  Will save at a -5 penalty to avoid being permanently destroyed. Even  artifacts are subject to <i>mage's disjunction</i>, though there is only a 1%  chance per caster level of actually affecting such powerful items. If  successful, the artifact's power unravels, and it is destroyed (with no  save). If an artifact is destroyed, you must make a DC 25 Will save  or permanently lose all spellcasting abilities. These abilities cannot  be recovered by mortal magic, not even <i>miracle</i> or <i>wish</i>. Destroying  artifacts is a dangerous business, and it is 95% likely to attract  the attention of some powerful being who has an interest in or  connection with the device.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "62c6"
}, {
	name: "Mage&apos;s Faithful Hound",
	school: "Conj (creation)",
	classes: {
		Sorceror: 5,
		Wizard: 5
	},
	time: "1 a",
	composition: "V, S, M (a tiny silver whistle, a piece of bone, and a thread)",
	range: "close (25 ft. + 5 ft./2 levels)",
	effect: "phantom watchdog",
	duration: "1 hour/caster level or until discharged, then 1 round/caster level; see text",
	save: "-",
	sr: "no",
	description: "You conjure up a phantom watchdog that is invis ble to everyone  but yourself. It then guards the area where it was conjured (it does  not move). The hound immediately starts barking loudly if any  Small or larger creature approaches within 30 feet of it. (Those  within 30 feet of the hound when it is conjured may move about  in the area, but if they leave and return, they activate the barking.)  The hound sees invisible and ethereal creatures. It does not react  to figments, but it does react to shadow illusions. <p class=sub>If an intruder approaches to within 5 feet of the hound, the dog  stops barking and delivers a vicious bite (+10 attack bonus, 2d6+3  points of piercing damage) once per round. The dog also gets the  bonuses appropriate to an invisible creature (see <i>invisibility</i>). <p class=sub>The dog is considered ready to bite intruders, so it delivers its  first bite on the intruder&apos;s turn. Its bite is the equivalent of a magic  weapon for the purpose of damage reduction. The hound cannot be  attacked, but it can be dispelled. <p class=sub>The spell lasts for 1 hour per caster level, but once the hound  begins barking, it lasts only 1 round per caster level. If you are ever  more than 100 feet distant from the hound, the spell ends.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c8cd"	
}, {
	name: "Mage&apos;s Lucubration",
	school: "Trans",
	classes: {
		Wizard: 6
	},
	time: "1 a",
	composition: "V, S",
	range: "Self",
	effect: "you",
	duration: "instantaneous",
	description: "You instantly prepare any one spell of 5th level or lower that you  have used during the past 24 hours. The spell must have been  actually cast during that period. The chosen spell is stored in your  mind as through prepared in the normal fashion. <p class=sub>If the recalled spell requires material components, you must  provide them. The recovered spell is not usable until the material  components are available.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8eb"
}, {
	name: "Mage's Magnificent Mansion",
	school: "Conj (creation)",
	classes: {
		Sorceror: 7,
		Wizard: 7
	},
	time: "1 a",
	composition: "V, S, F (a miniature ivory door, a piece of polished marble, and a silver spoon, each worth 5 gp)",
	range: "close (25 ft. + 5 ft./2 levels)",
	effect: "extradimensional mansion, up to three 10-ft. cubes/level (S)",
	duration: "2 hours/lvl (D)",
	save: "-",
	sr: "no",
	description: "You conjure up an extradimensional dwelling that has a single  entrance on the plane from which the spell was cast. The entry  point looks like a faint shimmering in the air that is 4 feet  wide and 8 feet high. Only those you designate may enter the  mansion, and the portal is shut and made invisible behind you  when you enter. You may open it again from your own side at  will. Once observers have passed beyond the entrance, they are  in a magnificent foyer with numerous chambers beyond. The  atmosphere is clean, fresh, and warm. <p class=sub>You can create any floor plan you desire to the limit of the spell's  effect. The place is furnished and contains sufficient foodstuffs to  serve a nine-course banquet to a dozen people per caster level.  A staff of near-transparent servants (as many as two per caster  level), liveried and obedient, wait upon all who enter. The servants  function as <i>unseen servant</i> spells except that they are visible and can  go anywhere in the mansion. <p class=sub>Since the place can be entered only through its special portal,  outside conditions do not affect the mansion, nor do conditions  inside it pass to the plane beyond.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4a1f"
}, {	
	name: "Mage's Private Sanctum",
	school: "Abjur",	
	classes: {
		Sorceror: 5,
		Wizard: 5
	},
	time: "10 minutes",
	composition: "V, S, M (a sheet of lead, a piece of glass, a wad of cotton, and powdered chrysolite)",
	range: "close (25 ft. + 5 ft./2 levels)",
	effect: "30-ft. cube/level (S)",
	duration: "24 hours (D)",
	save: "-",
	sr: "no",
	description: "This spell ensures privacy. Anyone looking into the area from  outside sees only a dark, foggy mass. Darkvision cannot  penetrate it. No sounds, no matter how loud, can escape the  area, so nobody can eavesdrop from outside. Those inside can  see out normally. <p class=sub>Divination (scrying) spells cannot perceive anything within the  area, and those within are immune to <i>detect thoughts</i>. The ward  prevents speech between those inside and those outside (because it  blocks sound), but it does not prevent other communication, such  as a <i>sending</i> or message spell, or telepathic communication, such as  that between a wizard and her familiar. <p class=sub>The spell does not prevent creatures or objects from moving into  and out of the area. <p class=sub><i>Mage's private sanctum</i> can be made permanent with a  <i>permanency</i> spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a81c"
}, {	
	name: "Mage's Sword",
	school: "Evoc",
	classes: {
		Sorceror: 7,
		Wizard: 7
	},
	time: "1 a",
	composition: "V, S, F (a miniature platinum sword worth 250 gp)",
	range: "close (25 ft. + 5 ft./2 levels)",
	effect: "one sword",
	duration: "1 round/lvl (D)",
	save: "-",
	sr: "yes",
	description: "This spell brings into being a shimmering, sword-like plane of  force. The sword strikes at any opponent within its range, as you  desire, starting in the round that you cast the spell. The sword  attacks its designated target once each round on your turn. Its  attack bonus is equal to your caster level + your Intelligence bonus  or your Charisma bonus (for wizards or sorcerers, respectively)  with an additional +3 enhancement bonus. As a force effect,  it can strike ethereal and incorporeal creatures. It deals 4d6+3  points of force damage, with a threat range of 19-20 and a critical  multiplier of x2. <p class=sub>The sword always strikes from your direction. It does not get a  bonus for flanking or help a combatant get one. If the sword goes  beyond the spell range from you, goes out of your sight, or you are  not directing it, it returns to you and hovers. <p class=sub>Each round after the first, you can use a standard action to switch  the sword to a new target. If you do not, the sword continues to  attack the previous round&emdash;s target. <p class=sub>The sword cannot be attacked or harmed by physical attacks,  but <i>dispel magic</i>, <i>disintegrate</i>, a <i>sphere of annihilation</i>, or a <i>rod of  cancellation</i> affects it. The sword's AC is 13 (10, +0 size bonus for  Medium object, +3 deflection bonus). <p class=sub>If an attacked creature has spell resistance, the resistance  is checked the first time <i>mage's sword</i> strikes it. If the sword is  successfully resisted, the spell is dispelled. If not, the sword has its  normal full effect on that creature for the duration of the spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8892"
}, {	
	name: "Mage's Sword",
	school: "Evoc",
	classes: {
		Sorceror: 7,
		Wizard: 7
	},
	time: "1 a",
	composition: "V, S, F (a miniature platinum sword worth 250 gp)",
	range: "close (25 ft. + 5 ft./2 levels)",
	effect: "one sword",
	duration: "1 round/lvl (D)",
	save: "-",
	sr: "yes",
	description: "This spell brings into being a shimmering, sword-like plane of force. The sword strikes at any opponent within its range, as you desire, starting in the round that you cast the spell. The sword attacks its designated target once each round on your turn. Its attack bonus is equal to your caster level + your Intelligence bonus or your Charisma bonus (for wizards or sorcerers, respectively) with an additional +3 enhancement bonus. As a force effect, it can strike ethereal and incorporeal creatures. It deals 4d6+3 points of force damage, with a threat range of 19-20 and a critical multiplier of x2.<p class=sub>The sword always strikes from your direction. It does not get a bonus for flanking or help a combatant get one. If the sword goes beyond the spell range from you, goes out of your sight, or you are not directing it, it returns to you and hovers.<p class=sub>Each round after the first, you can use a standard action to switch the sword to a new target. If you do not, the sword continues to attack the previous round&emdash;s target.<p class=sub>The sword cannot be attacked or harmed by physical attacks, but <i>dispel magic</i>, <i>disintegrate</i>, a <i>sphere of annihilation</i>, or a <i>rod of cancellation</i> affects it. The sword's AC is 13 (10, +0 size bonus for Medium object, +3 deflection bonus).<p class=sub>If an attacked creature has spell resistance, the resistance is checked the first time <i>mage's sword</i> strikes it. If the sword is successfully resisted, the spell is dispelled. If not, the sword has its normal full effect on that creature for the duration of the spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b07a"	
}, {
	name: "Magic Aura",
	school: "Illus",
	classes: {
		Bard: 1, 
		Sorceror: 1,
		Wizard: 1
	},
	time: "1 a",
	composition: "V, S, F (a small square of silk that must be passed over the object that receives the aura)",
	range: "touch",
	effect: "one touched object weighing up to 5 lbs./level",
	duration: "1 day/lvl (D)",
	save: "none; see text",
	sr: "no",
	description: "You alter an item's aura so that it registers to detect spells (and spells with similar capabilities) as though it were nonmagical, or a magic item of a kind you specify, or the subject of a spell you specify. If the object bearing <i>magic aura</i> has <i>identify</i> cast on it or is similarly examined, the examiner recognizes that the aura is false and detects the object's actual qualities if he succeeds on a Will save. Otherwise, he believes the aura and no amount of testing reveals what the true magic is.<p class=sub>If the targeted item's own aura is exceptionally powerful (if it is an artifact, for instance), <i>magic aura</i> doesn't work.<p class=sub><i>Note</i> A magic weapon, shield, or suit of armor must be a masterwork item, so a sword of average make, for example, looks suspicious if it has a magical aura.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2d88"	
}, {
	name: "Magic Circle against Chaos",
	summary: "Non-lawful creatures cannot enter",
	school: "Abjur",
	composition: "V, S, M/DF",
	time: "1 a",
	range: "Touch",
	effect: "10-ft radius",
	duration: "10 min/lvl",
	save: "Will negs",
	sr: "-",
	classes: {
		"Cleric": 4,
		"Paladin": 3,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "This spell functions like <i>magic circle against evil</i>, except that it is similar to <i>protection from chaos</i> instead of <i>protection from evil</i>, and it can imprison a nonlawful called creature.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "12c6"
}, {
	name: "Magic Circle against Evil",
	summary: "Non-good creatures cannot enter",
	school: "Abjur",
	composition: "V, S, M/DF (a little powdered silver with which you trace a 3-foot-diameter circle on the floor (or ground) around the creature to be warded)",
	time: "1 a",
	range: "Touch",
	effect: "10-ft radius",
	duration: "10 min/lvl",
	save: "Will negs",
	sr: "-",
	classes: {
		"Cleric": 4,
		"Paladin": 3,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "All creatures within the area gain the effects of a <i>protection from evil</i> spell, and no nongood summoned creatures can enter the area either. You must overcome a creature's spell resistance in order to keep it at bay (as in the third function of <i>protection from evil</i>), but the deflection and resistance bonuses and the protection from mental control apply regardless of enemies' spell resistance. <p class=sub>This spell has an alternative version that you may choose when casting it. A <i>magic circle against evil</i> can be focused inward rather than outward. When focused inward, the spell binds a nongood called creature (such as those called by the <i>lesser planar binding</i>, <i>planar binding</i>, and <i>greater planar binding</i> spells) for a maximum of 24 hours per caster level, provided that you cast the spell that calls the creature within 1 round of casting the <i>magic circle</i>. The creature cannot cross the circle's boundaries. If a creature too large to fit into the spell's area is the subject of the spell, the spell acts as a normal <i>protection from evil</i> spell for that creature only. <p class=sub>A <i>magic circle</i> leaves much to be desired as a trap. If the circle of powdered silver laid down in the process of spellcasting is broken, the effect immediately ends. The trapped creature can do nothing that disturbs the circle, directly or indirectly, but other creatures can. If the called creature has spell resistance, it can test the trap once a day. If you fail to overcome its spell resistance, the creature breaks free, destroying the circle. A creature capable of any form of dimensional travel (<i>astral projection</i>, <i>blink</i>, <i>dimension door</i>, <i>etherealness</i>, <i>gate</i>, <i>plane shift</i>, <i>shadow walk</i>, <i>teleport</i>, and similar abilities) can simply leave the circle through that means. You can prevent the creature's extradimensional escape by casting a <i>dimensional anchor</i> spell on it, but you must cast the spell before the creature acts. If you are successful, the <i>anchor</i> effect lasts as long as the <i>magic circle</i> does. The creature cannot reach across the <i>magic circle</i>, but its ranged attacks (ranged weapons, spells, magical abilities, and the like) can. The creature can attack any target it can reach with its ranged attacks except for the circle itself. <p class=sub>You can add a special diagram (a two-dimensional bounded figure with no gaps along its circumference, augmented with various magical sigils) to make the <i>magic circle</i> more secure. Drawing the diagram by hand takes 10 minutes and requires a DC 20 Spellcraft check. The DM makes this check secretly. If the check fails, the diagram is ineffective. You can take 10 (see page 65) when drawing the diagram if you are under no particular time pressure to complete the task. This task also takes 10 full minutes. If time is no factor at all, and you devote 3 hours and 20 minutes to the task, you can take 20. <p class=sub>A successful diagram allows you to cast a <i>dimensional anchor</i> spell on the <i>magic circle</i> during the round before casting any summoning spell. The <i>anchor</i> holds any called creatures in the <i>magic circle</i> for 24 hours per caster level. A creature cannot use its spell resistance against a <i>magic circle</i> prepared with a diagram, and none of its abilities or attacks can cross the diagram. If the creature tries a Charisma check to break free of the trap (see the <i>lesser planar binding</i> spell), the DC increases by 5. The creature is immediately released if anything disturbs the diagram&emdash;even a straw laid across it. However, the creature itself cannot disturb the diagram either directly or indirectly, as noted above. <p class=sub>This spell is not cumulative with <i>protection from evil</i> and vice versa",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "cceb"
}, {
	name: "Magic Circle against Good",
	summary: "Non-evil creatures cannot enter",
	school: "Abjur",
	composition: "V, S, M/DF",
	time: "1 a",
	range: "Touch",
	effect: "10-ft radius",
	duration: "10 min/lvl",
	save: "Will negs",
	sr: "-",
	classes: {
		"Cleric": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "This spell functions like <i>magic circle against evil</i>, except that it is similar to <i>protection from good</i> instead of <i>protection from evil</i>, and it can imprison a nonevil called creature.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "413a"
}, {
	name: "Magic Circle against Law",
	summary: "Non-chaotic creatures cannot enter",
	school: "Abjur",
	composition: "V, S, M/DF",
	time: "1 a",
	range: "Touch",
	effect: "10-ft radius",
	duration: "10 min/lvl",
	save: "Will negs",
	sr: "-",
	classes: {
		"Cleric": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "This spell functions like <i>magic circle against evil</i>, except that it is similar to <i>protection from law</i> instead of <i>protection from evil</i>, and it can imprison a nonchaotic called creature.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "54b3"
}, {
	name: "Magic Fang",
	summary: "Natural weapon +1 att/dmg",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "One living creature",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Druid": 2,
		"Ranger": 1
	},
	description: "<i>Magic fang</i> gives one natural weapon of the subject a +1 enhancement bonus on attack and damage rolls. The spell can affect a slam attack, fist, bite, or other natural weapon. (The spell does not change an unarmed strike's damage from nonlethal damage to lethal damage.) <p class=sub><i>Magic fang</i> can be made permanent with a <i>permanency</i> spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7de6"
}, {
	name: "Magic Fang, Greater",
	summary: "Natural weapon +1/4lvl att/dmg (5)",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Close",
	effect: "One living creature",
	duration: "1 hr/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Druid": 4,
		"Ranger": 3
	},
	description: "This spell functions like <i>magic fang</i>, except that the enhancement bonus on attack and damage rolls is +1 per four caster levels (maximum +5). <p class=sub>Alternatively, you may imbue all of the creature's natural weapons with a +1 enhancement bonus (regardless of your caster level). <p class=sub><i>Greater magic fang</i> can be made permanent with a <i>permanency</i> spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1dd9"
}, {
	name: "Magic Jar",
	summary: "Enables possession of creature",
	school: "Necro",
	composition: "V, S, F (a gem or crystal worth at least 100 gp)",
	time: "1 a",
	range: "Medium",
	effect: "One creature",
	duration: "1 hr/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "By casting <i>magic jar</i>, you place your soul in a gem or large crystal (known as the <i>magic jar</i>), leaving your body lifeless. Then you can attempt to take control of a nearby body, forcing its soul into the <i>magic jar</i>. You may move back to the jar (thereby returning the trapped soul to its body) and attempt to possess another body. The spell ends when you send your soul back to your own body, leaving the receptacle empty. <p class=sub>To cast the spell, the <i>magic jar</i> must be within spell range and you must know where it is, though you do not need line of sight or line of effect to it. When you transfer your soul upon casting, your body is, as near as anyone can tell, dead. <p class=sub>While in the <i>magic jar</i>, you can sense and attack any life force within 10 feet per caster level (and on the same plane of existence). You do need line of effect from the jar to the creatures. You cannot determine the exact creature types or positions of these creatures. In a group of life forces, you can sense a difference of 4 or more Hit Dice between one creature and another and can determine whether a life force is powered by positive or negative energy. (Undead creatures are powered by negative energy. Only sentient undead creatures have, or are, souls.) <p class=sub>For example, if two 10th-level characters are attacking a hill giant (12 HD) and four ogres (4 HD), you could determine that there are three stronger and four weaker life forces within the range, all powered by positive energy. You could choose to take over either a stronger or a weaker creature, but which particular stronger or weaker creature you attempt to possess is determined randomly. <p class=sub>Attempting to possess a body is a full-round action. It is blocked by <i>protection from evil</i> or a similar ward. You possess the body and force the creature's soul into the magic jar unless the subject succeeds on a Will save. Failure to take over the host leaves your life force in the <i>magic jar</i>, and the target automatically succeeds on further saving throws if you attempt to possess its body again. <p class=sub>If you are successful, your life force occupies the host body, and the host's life force is imprisoned in the <i>magic jar</i>. You keep your Intelligence, Wisdom, Charisma, level, class, base attack bonus, base save bonuses, alignment, and mental abilities. The body retains its Strength, Dexterity, Constitution, hit points, natural abilities, and automatic abilities. For example, a fish's body breathes water and a troll's body regenerates. A body with extra limbs does not allow you to make more attacks (or more advantageous two-weapon attacks) than normal. You can't choose to activate the body's extraordinary or supernatural abilities. The creature's spells and spell-like abilities do not stay with the body. <p class=sub>As a standard action, you can shift freely from a host to the <i>magic jar</i> if within range, sending the trapped soul back to its body. The spell ends when you shift from the jar to your own body. <p class=sub>If the host body is slain, you return to the <i>magic jar</i>, if within range, and the life force of the host departs (it is dead). If the host body is slain beyond the range of the spell, both you and the host die. Any life force with nowhere to go is treated as slain. If the spell ends while you are in the <i>magic jar</i>, you return to your body (or die if your body is out of range or destroyed). If the spell ends while you are in a host, you return to your body (or die, if it is out of range of your current position), and the soul in the <i>magic jar</i> returns to its body (or dies if it is out of range). Destroying the receptacle ends the spell, and the spell can be dispelled at either the <i>magic jar</i> or at the host's location. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1165"
}, {
	name: "Magic Missile",
	summary: "1d4+1 dmg, +1 missile lvls 3,5,7,9",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "Max 15-ft apart",
	duration: "Instantaneous",
	save: "-",
	sr: "Yes",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "A missile of magical energy darts forth from your fingertip and strikes its target, dealing 1d4+1 points of force damage. <p class=sub>The missile strikes unerringly, even if the target is in melee combat or has less than total cover or total concealment. Specific parts of a creature can't be singled out. Inanimate objects are not damaged by the spell. <p class=sub>For every two caster levels beyond 1st, you gain an additional missile&emdash;two at 3rd level, three at 5th, four at 7th, and the maximum of five missiles at 9th level or higher. If you shoot multiple missiles, you can have them strike a single creature or several creatures. A single missile can strike only one creature. You must designate targets before you check for spell resistance or roll damage.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "fcac"
}, {
	name: "Magic Mouth",
	summary: "Speaks once when triggered",
	school: "Illus",
	composition: "V, S, M (a small bit of honeycomb and jade dust worth 10 gp)",
	time: "1 a",
	range: "Close",
	effect: "Creature or item",
	duration: "Till used",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 2,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "This spell imbues the chosen object or creature with an enchanted mouth that suddenly appears and speaks its message the next time a specified event occurs. The message, which must be twenty-five or fewer words long, can be in any language known by you and can be delivered over a period of 10 minutes. The mouth cannot utter verbal components, use command words, or activate magical effects. It does, however, move according to the words articulated; if it were placed upon a statue, the mouth of the statue would move and appear to speak. Of course, <i>magic mouth</i> can be placed upon a tree, rock, or any other object or creature. <p class=sub><i>The spell functions when specific conditions are fulfilled according to your command as set in the spell. Commands can be as general or as descriptioned as desired, although only visual and audible triggers can be used, such as the following</i>: \"Speak only when a venerable female human carrying a sack sits cross-legged within a distance of one foot.\" Triggers react to what appears to be the case. Disguises and illusions can fool them. Normal darkness does not defeat a visual trigger, but magical <i>darkness</i> or <i>invisibility</i> does. Silent movement or magical <i>silence</i> defeats audible triggers. Audible triggers can be keyed to general types of noises (footsteps, metal clanking) or to a specific noise or spoken word (when a pin drops, or when anyone says \"Boo\"). Actions can serve as triggers if they are visible or audible. For example, \"Speak when any creature touches the statue\" is an acceptable command if the creature is visible. A <i>magic mouth</i> cannot distinguish alignment, level, Hit Dice, or class except by external garb. <p class=sub>The range limit of a trigger is 15 feet per caster level, so a 6th-level caster can command a <i>magic mouth</i> to respond to triggers as far as 90 feet away. Regardless of range, the mouth can respond only to visible or audible triggers and actions in line of sight or within hearing distance. <p class=sub><i>Magic mouth</i> can be made permanent with a <i>permanency</i> spell",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "cda5"
}, {
	name: "Magic Stone",
	summary: "+1 att,1d6+1 dmg, 2d6+2 vs undead",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "1-3 Stones",
	duration: "30 min or till used",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 2,
		"Druid": 2
	},
	description: "You transmute as many as three pebbles, which can be no larger than sling bullets, so that they strike with great force when thrown or slung. If hurled, they have a range increment of 20 feet. If slung, treat them as sling bullets (range increment 50 feet). The spell gives them a +1 enhancement bonus on attack and damage rolls. The user of the stones makes a normal ranged attack. Each stone that hits deals 1d6+1 points of damage (including the spell's enhancement bonus), or 2d6+2 points against undead.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ab4b"
}, {
	name: "Magic Vestment",
	summary: "Armor/shield gains +1/4lvls",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "Armor/shield",
	duration: "1 hr/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 4
	},
	description: "You imbue a suit of armor or a shield with an enhancement bonus of +1 per four caster levels (maximum +5 at 20th level). An outfit of regular clothing counts as armor that grants no AC bonus for the purpose of this spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "52ce"
}, {
	name: "Magic Weapon",
	summary: "Weapon gets +1 att/dmg",
	school: "Trans",
	composition: "V, S,F,DF",
	time: "1 a",
	range: "Touch",
	effect: "Weapon",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 2,
		"Paladin": 1,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "<i>Magic weapon</i> gives a weapon a +1 enhancement bonus on attack and damage rolls. (An enhancement bonus does not stack with a masterwork weapon's +1 bonus on attack rolls.) <p class=sub>You can't cast this spell on a natural weapon, such as an unarmed strike (instead, see <i>magic fang</i>). A monk's unarmed strike is considered a weapon, and thus it can be enhanced by this spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "34fd"
}, {
	name: "Magic Weapon, Greater",
	summary: "Weapon gets +1/4 lvl att/dmg (5)",
	school: "Trans",
	composition: "V, S, F, M/DF (powdered lime and carbon)",
	time: "1 a",
	range: "Close",
	effect: "Weapon or 50 proj.",
	duration: "1 hr/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 5,
		"Paladin": 3,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "This spell functions like <i>magic weapon</i>, except that it gives a weapon an enhancement bonus on attack and damage rolls of +1 per four caster levels (maximum +5). <p class=sub>Alternatively, you can affect as many as fifty arrows, bolts, or bullets. The projectiles must be of the same kind, and they have to be together (in the same quiver or other container). Projectiles, but not thrown weapons, lose their transmutation when used. (Treat shuriken as projectiles, rather than as thrown weapons, for the purpose of this spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7c7f"
}, {
	name: "Major Creation",
	summary: "Create stone or metal item",
	school: "Conj",
	composition: "V, S, M",
	time: "10 min",
	range: "Close",
	effect: "Item, 1 cu ft/lvl",
	duration: "Special",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "This spell functions like minor creation, except that you can also create an object of mineral nature: stone, crystal, metal, or the like. The duration of the created item varies with its relative hardness and rarity, as indicated on the following table. <table><tr class=header><td>Hardness and RarityExamples</td><td>Duration</td></tr> <tr><td>Vegetable matter</td><td>2 hr./level</td></tr> <tr><td>Stone, crystal, base metals</td><td>1 hr./level</td></tr> <tr><td>Precious metals</td><td>20 min./level</td></tr> <tr><td>Gems</td><td>10 min./level</td></tr> <tr><td>Rare metal<sup>1</sup></td><td>1 round/level</td></tr> </table><p class=sub><sup>1</sup> Includes adamantine, alchemical silver, and mithral. You can't use major creation to create a cold iron item. See the <i>Dungeon Master's Guide</i> for descriptions",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f296"
}, {
	name: "Major Image",
	summary: "Illusion with sound, smell, heat",
	school: "Illus",
	composition: "V, S,F",
	time: "1 a",
	range: "Long",
	effect: "4 10-ft cubes+1/lvl",
	duration: "Concentrate +3 rnd",
	save: "Will dsblf",
	sr: "-",
	classes: {
		"Bard": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "This spell functions like <i>silent image</i>, except that sound, smell, and thermal illusions are included in the spell effect. While concentrating, you can move the image within the range. <p class=sub>The image disappears when struck by an opponent unless you cause the illusion to react appropriately.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c3c5"
}, {
	name: "Make Whole",
	summary: "Completely repairs of item",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Item, 10 cu ft/lvl",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 3
	},
	description: "This spell functions like <i>mending</i>, except that <i>make whole</i> completely repairs an object made of any substance, even one with multiple breaks, to be as strong as new. The spell does not restore the magical abilities of a broken magic item made whole, and it cannot mend broken magic rods, staffs, or wands. The spell does not repair items that have been warped, burned, disintegrated, ground to powder, melted, or vaporized, nor does it affect creatures (including constructs).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "20fd"
}, {
	name: "Mark of Justice",
	summary: "Designates act that triggers curse",
	school: "Necro",
	composition: "V, S,DF",
	time: "10 min",
	range: "Touch",
	effect: "One creature",
	duration: "Permanent",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 6,
		"Paladin": 4
	},
	description: "When moral persuasion fails to win a criminal over to right conduct, you can use m<i>ark of justice</i> to encourage the miscreant to walk the straight and narrow path. <p class=sub>You draw an indelible mark on the subject and state some behavior on the part of the subject that will activate the mark. When activated, the mark curses the subject. Typically, you designate some sort of criminal behavior that activates the mark, but you can pick any act you please. The effect of the mark is identical with the effect of <i>bestow curse</i>. <p class=sub>Since this spell takes 10 minutes to cast and involves writing on the target, you can cast it only on a creature that is willing or restrained. <p class=sub>Like the effect of <i>bestow curse</i>, a <i>mark of justice</i> cannot be dispelled, but it can be removed with a <i>break enchantment</i>, <i>limited wish</i>, <i>miracle</i>, <i>remove curse</i>, or <i>wish</i> spell. <i>Remove curse</i> works only if its caster level is equal to or higher than your <i>mark of justice</i> caster level. These restrictions apply regardless of whether the mark has activate",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1a94"
}, {
	name: "Maze",
	summary: "Traps target in extradimensional space",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "One creature",
	duration: "Special",
	save: "-",
	sr: "Yes",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "You banish the subject into an extradimensional labyrinth of force planes. Each round on its turn, it may attempt a DC 20 Intelligence check to escape the labyrinth as a full-round action. If the subject doesn't escape, the maze disappears after 10 minutes, forcing the subject to leave. <p class=sub>On escaping or leaving the maze, the subject reappears where it had been when the <i>maze</i> spell was cast. If this location is filled with a solid object, the subject appears in the nearest open space. <p class=sub>Spells and abilities that move a creature within a plane, such as <i>teleport</i> and <i>dimension door</i>, do not help a creature escape a <i>maze</i> spell, although a <i>plane shift</i> spell allows it to exit to whatever plane is designated in that spell. Minotaurs are not affected by this spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f9d8"
}, {
	name: "Meld into Stone",
	summary: "You and possessions meld into stone",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "10 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 4,
		"Druid": 4
	},
	description: "<i>Meld into stone</i> enables you to meld your body and possessions into a single block of stone. The stone must be large enough to accommodate your body in all three dimensions. When the casting is complete, you and not more than 100 pounds of nonliving gear merge with the stone. If either condition is violated, the spell fails and is wasted. <p class=sub>While in the stone, you remain in contact, however tenuous, with the face of the stone through which you melded. You remain aware of the passage of time and can cast spells on yourself while hiding in the stone. Nothing that goes on outside the stone can be seen, but you can still hear what happens around you. Minor physical damage to the stone does not harm you, but its partial destruction (to the extent that you no longer fit within it) expels you and deals you 5d6 points of damage. The stone's complete destruction expels you and slays you instantly unless you make a DC 18 Fortitude save. <p class=sub>Any time before the duration expires, you can step out of the stone through the surface that you entered. If the spell's duration expires or the effect is dispelled before you voluntarily exit the stone, you are violently expelled and take 5d6 points of damage. <p class=sub><i>The following spells harm you if cast upon the stone that you are occupying</i>: <i>Stone to flesh</i> expels you and deals you 5d6 points of damage. <i>Stone shape</i> deals you 3d6 points of damage but does not expel you. <i>Transmute rock to mud</i> expels you and then slays you instantly unless you make a DC 18 Fortitude save, in which case you are merely expelled. Finally, <i>passwall</i> expels you without damage.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3077"
}, {
	name: "Mending",
	summary: "Makes minor repairs of item",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "10-ft",
	effect: "Item, 1 lb",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 1,
		"Cleric": 1,
		"Druid": 1,
		"Sorceror": 1,
		"Wizard": 1
	},
	description: "<i>Mending</i> repairs small breaks or tears in objects (but not warps, such as might be caused by a warp wood spell). It will weld broken metallic objects such as a ring, a chain link, a medallion, or a slender dagger, providing but one break exists. Ceramic or wooden objects with multiple breaks can be invisibly rejoined to be as strong as new. A hole in a leather sack or a wineskin is completely healed over by mending. The spell can repair a magic item, but the item's magical abilities are not restored. (For restoring a broken magic item's abilities, see the item creation feats in Chapter 5: Feats.) The spell cannot mend broken magic rods, staffs, or wands, nor does it affect creatures (including constructs).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "757e"
}, {
	name: "Message",
	summary: "Whispered conversation at distance",
	school: "Trans",
	composition: "V, S, F (a short piece of copper wire)",
	time: "1 a",
	range: "Medium",
	effect: "One creature/lvl",
	duration: "10 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 1,
		"Sorceror": 1,
		"Wizard": 1
	},
	description: "You can whisper messages and receive whispered replies with little chance of being overheard. You point your finger at each creature you want to receive the message. When you whisper, the whispered message is audible to all targeted creatures within range. Magical <i>silence</i>, 1 foot of stone, 1 inch of common metal (or a thin sheet of lead), or 3 feet of wood or dirt blocks the spell. The message does not have to travel in a straight line. It can circumvent a barrier if there is an open path between you and the subject, and the path's entire length lies within the spell's range. The creatures that receive the message can whisper a reply that you hear. The spell transmits sound, not meaning. It doesn't transcend language barriers. <p class=sub><i>Note</i>: To speak a message, you must mouth the words and whisper, possibly allowing observers the opportunity to read your lips. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "51f8"
}, {
	name: "Meteor Swarm",
	summary: "4 Spheres doing 2d6 + 6d6 fire burst",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "Long",
	effect: "40-ft radius",
	duration: "Instantaneous",
	save: "-/ Ref half",
	sr: "Yes",
	classes: {
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "<i>Meteor swarm</i> is a very powerful and spectacular spell that is similar to <i>fireball</i> in many aspects. When you cast it, four 2-foot-diameter spheres spring from your outstretched hand and streak in straight lines to the spots you select. The meteor spheres leave a fiery trail of sparks. <p class=sub>If you aim a sphere at a specific creature, you may make a ranged touch attack to strike the target with the meteor. Any creature struck by one of these spheres takes 2d6 points of bludgeoning damage (no save) and receives no saving throw against the sphere's fire damage (see below). If a targeted sphere misses its target, it simply explodes at the nearest corner of the target's space. You may aim more than one meteor at the same target. <p class=sub>Once a sphere reaches its destination, it explodes in a 40-foot-radius spread, dealing 6d6 points of fire damage to each creature in the area. If a creature is within the area of more than one sphere, it must save separately against each. (Fire resistance applies to each sphere's damage individually.)",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "da94"
}, {
	name: "Mind Blank",
	summary: "Resist mind effecting magic",
	school: "Abjur",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "One creature",
	duration: "1 day",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "The subject is protected from all devices and spells that detect, influence, or read emotions or thoughts. This spell protects against all mind-affecting spells and effects as well as information gathering by divination spells or effects. <i>Mind blank</i> even foils <i>limited wish</i>, <i>miracle</i>, and <i>wish</i> spells when they are used in such a way as to affect the subject's mind or to gain information about it. <p class=sub>In the case of scrying that scans an area the creature is in, such as <i>arcane eye</i>, the spell works but the creature simply isn't detected. Scrying attempts that are targeted specifically at the subject do not work at all.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "54d6"
}, {
	name: "Mind Fog",
	summary: "Fog target's minds, -10 Wis/Will save",
	school: "Ench",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "20-ft radius",
	duration: "30 min + 2d6 rnds",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 6,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "<i>Mind fog</i> produces a bank of thin mist that weakens the mental resistance of those caught in it. Creatures in the mind fog take a -10 competence penalty on Wisdom checks and Will saves. (A creature that successfully saves against the fog is not affected and need not make further saves even if it remains in the fog.) Affected creatures take the penalty as long as they remain in the fog and for 2d6 rounds thereafter. The fog is stationary and lasts for 30 minutes (or until dispersed by wind). <p class=sub>A moderate wind (11+ mph) disperses the fog in four rounds; a strong wind (21+ mph) disperses the fog in 1 round. <p class=sub>The fog is thin and does not significantly hamper vision.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "fe0e"
}, {
	name: "Minor Creation",
	summary: "Creates one cloth or wood item",
	school: "Conj",
	composition: "V, S, M (a tiny piece of matter of the same sort of item you plan to create with <i>minor creation</i>&emdash;a bit of twisted hemp to create rope, and so forth)",
	time: "1 min",
	range: "0 ft",
	effect: "Item, 1 cu ft/lvl",
	duration: "1 hr/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "You create a nonmagical, unattended object of nonliving, vegetable matter&emdash;linen clothes, a hemp rope, a wooden ladder, and so forth. The volume of the item created cannot exceed 1 cubic foot per caster level. You must succeed on an appropriate skill check to make a complex item, such as Craft (bowmaking) check to make straight arrow shafts. <p class=sub>Attempting to use any created object as a material component causes the spell to fail",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "af33"
}, {
	name: "Minor Image",
	summary: "Minor illusion with some sound",
	school: "Illus",
	composition: "V, S,F",
	time: "1 a",
	range: "Long",
	effect: "4 10-ft cubes + 1/lvl",
	duration: "Conc +2 rounds",
	save: "Will dsblf",
	sr: "-",
	classes: {
		"Bard": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "This spell functions like <i>silent image</i>, except that <i>minor image</i> includes some minor sounds but not understandable speech.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7af1"
}, {
	name: "Miracle",
	summary: "Requests miracle from diety",
	school: "Evoc",
	composition: "V, S,XP",
	time: "1 a",
	range: "Special",
	effect: "Special",
	duration: "Special",
	save: "Special",
	sr: "Yes",
	classes: {
		"Cleric": 10
	},
	description: "You don't so much cast a <i>miracle</i> as request one. You state what you would like to have happen and request that your deity (or the power you pray to for spells) intercede. The DM then determines the particular effect of the miracle. <p class=sub>A <i>miracle</i> can do any of the following things.<ul><li> Duplicate any cleric spell of 8th level or lower (including spells to which you have access because of your domains). <li> Duplicate any other spell of 7th level or lower. <li> Undo the harmful effects of certain spells, such as <i>feeblemind</i> or <i>insanity</i>. <li> Have any effect whose power level is in line with the above effects. </ul> If the <i>miracle</i> has any of the above effects, casting it has no experience point cost. <p class=sub>Alternatively, a cleric can make a very powerful request. Casting such a <i>miracle</i> costs the cleric 5,000 XP because of the powerful divine energies involved. Examples of especially powerful <i>miracles</i> of this sort could include the following. <ul><li> Swinging the tide of a battle in your favor by raising fallen allies to continue fighting. <li> Moving you and your allies, with all your and their gear, from one plane to another through planar barriers to a specific locale with no chance of error. <li> Protecting a city from an earthquake, volcanic eruption, flood, or other major natural disaster. </ul> <p class=sub>In any event, a request that is out of line with the deity's (or alignment's) nature is refused. <p class=sub>A duplicated spell allows saving throws and spell resistance as normal, but the save DCs are as for a 9th-level spell. When a miracle duplicates a spell that has an XP cost, you must pay that cost. When a miracle spell duplicates a spell with a material component that costs more than 100 gp, you must provide that component. <p class=sub><i>XP Cost</i>: 5,000 XP (for some uses of the miracle spell; see above).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "df66"
}, {
	name: "Mirage Arcana",
	summary: "Changes natural terrain's appearance",
	school: "Illus",
	composition: "V, S",
	time: "1 a",
	range: "Long",
	effect: "One 20-ft cube/lvl",
	duration: "Conc +1 hr/lvl (D)",
	save: "Will dsblf",
	sr: "-",
	classes: {
		"Bard": 6,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "This spell functions like <i>hallucinatory terrain</i>, except that it enables you to make any area appear to be something other than it is. The illusion includes audible, visual, tactile, and olfactory elements. Unlike <i>hallucinatory terrain</i>, the spell can alter the appearance of structures (or add them where none are present). Still, it can't disguise, conceal, or add creatures (though creatures within the area might hide themselves within the illusion just as they can hide themselves within a real location).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3f96"
}, {
	name: "Mirror Image",
	summary: "1d4 + 1/3 lvls caster images (8)",
	school: "Illus",
	composition: "V, S",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "Several illusory duplicates of you pop into being, making it difficult for enemies to know which target to attack. The figments stay near you and disappear when struck. <p class=sub><i>Mirror image</i> creates 1d4 images plus one image per three caster levels (maximum eight images total). These figments separate from you and remain in a cluster, each within 5 feet of at least one other figment or you. You can move into and through a <i>mirror image</i>. When you and the <i>mirror image</i> separate, observers can't use vision or hearing to tell which one is you and which the image. The figments may also move through each other. The figments mimic your actions, pretending to cast spells when you cast a spell, drink potions when you drink a potion, levitate when you levitate, and so on. <p class=sub>Enemies attempting to attack you or cast spells at you must select from among indistinguishable targets. Generally, roll randomly to see whether the selected target is real or a figment. Any successful attack against an image destroys it. An image's AC is 10 + your size modifier + your Dex modifier. Figments seem to react normally to area spells (such as looking like they're burned or dead after being hit by a <i>fireball</i>). <p class=sub>While moving, you can merge with and split off from figments so that enemies who have learned which image is real are again confounded. <p class=sub>An attacker must be able to see the images to be fooled. If you are invisible or an attacker shuts his or her eyes, the spell has no effect. (Being unable to see carries the same penalties as being blinded.)",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6154"
}, {
	name: "Misdirection",
	summary: "Misdirect information from divinations",
	school: "Illus",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Item, 10-ft cube",
	duration: "1 hr/lvl",
	save: "Will negs",
	sr: "-",
	classes: {
		"Bard": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "By means of this spell, you misdirect the information from divination spells that reveal auras (<i>detect evil</i>, <i>detect magic</i>, <i>discern lies</i>, and the like). On casting the spell, you choose another object within range. For the duration of the spell, the subject of <i>misdirection</i> is detected as if it were the other object. (Neither the subject nor the other object gets a saving throw against this effect.) Detection spells provide information based on the second object rather than on the actual target of the detection unless the caster of the detection succeeds on a Will save. For instance, you could make yourself detect as a tree if one were within range at casting: not evil, not lying, not magical, neutral in alignment, and so forth. This spell does not affect other types of divination magic (<i>augury</i>, <i>detect thoughts</i>, <i>clairaudience/clairvoyance</i>, and the like).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "380"
}, {
	name: "Mislead",
	summary: "Improved invisiblity and creates illusion",
	school: "Illus",
	composition: "S",
	time: "1 a",
	range: "Close",
	effect: "Caster / illusory double",
	duration: "1 rnd/lvl (D), Conc +3 rnds",
	save: "Will dsblf",
	sr: "-",
	classes: {
		"Bard": 6,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "You become invisible (as <i>improved invisibility</i>, a glamer), and at the same time, an illusory double of you (as <i>major image</i>, a figment) appears. You are then free to go elsewhere while your double moves away. The double appears within range but thereafter moves as you direct it (which requires concentration beginning on the first round after the casting). You can make the figment appear superimposed perfectly over your own body so that observers don't notice an image appearing and you turning invisible. You and the figment can then move in different directions. The double moves at your speed and can talk and gesture as if it were real, but it cannot attack or cast spells, though it can pretend to do so. <p class=sub>The illusory double lasts as long as you concentrate upon it, plus 3 additional rounds. After you cease concentration, the illusory double continues to carry out the same activity (for instance, fleeing down a hallway) until the duration expires. The <i>improved invisibility</i> lasts for 1 round per level, regardless of concentration.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4d73"
}, {
	name: "Mnemonic Enhancer",
	school: "Trans",
	classes: {
		wizard: 4
	},
	time: "10 minutes",
	composition: "V, S, M (a piece of string, and ink consisting of squid secretion mixed with black dragon&emdash;s blood), F (an ivory plaque worth 50 gp)",
	range: "Self",
	effect: "personal",
	duration: "instantaneous",
	description: "Casting this spell allows you to prepare additional spells or retain spells recently cast. Pick one of these two versions when the spell is cast.<p class=sub><i>Prepare</i> You prepare up to three additional levels of spells. A cantrip counts as 1/2 level for this purpose. You prepare and cast these spells normally.<p class=sub><i>Retain</i> You retain any spell of 3rd level or lower that you had cast up to 1 round before you started casting the <i>mnemonic enhancer</i>. This restores the previously cast spell to your mind.<p class=sub>In either event, the spell or spells prepared or retained fade after 24 hours (if not cast).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a014"
}, {
	name: "Modify Memory",
	summary: "Changes 5 minutes of memories",
	school: "Ench",
	composition: "V, S",
	time: "Round",
	range: "Close",
	effect: "One living creature",
	duration: "Permanent",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 5
	},
	description: "You reach into the subject's mind and modify as many as 5 minutes of its memories in one of the following ways. <ul><li> Eliminate all memory of an event the subject actually experienced. This spell cannot negate charm, geas/quest, suggestion, or similar spells. <li> Allow the subject to recall with perfect clarity an event it actually experienced. For instance, it could recall every word from a 5-minute conversation or every description from a passage in a book. <li> Change the descriptions of an event the subject actually experienced. <li> Implant a memory of an event the subject never experienced. </ul> Casting the spell takes 1 round. If the subject fails to save, you proceed with the spell by spending as much as 5 minutes (a period of time equal to the amount of memory time you want to modify) visualizing the memory you wish to modify in the subject. If your concentration is disturbed before the visualization is complete, or if the subject is ever beyond the spell's range during this time, the spell is lost. <p class=sub>A modified memory does not necessarily affect the subject's actions, particularly if it contradicts the creature's natural inclinations. An illogical modified memory, such as the subject recalling how much it enjoyed drinking poison, is dismissed by the creature as a bad dream or a memory muddied by too much wine. More useful applications of <i>modify memory</i> include implanting memories of friendly encounters with you (inclining the subject to act favorably toward you), changing the descriptions of orders given to the subject by a superior, or causing the subject to forget that it ever saw you or your party. The DM reserves the right to decide whether a modified memory is too nonsensical to significantly affect the subject.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "615c"
}, {
	name: "Moment of Prescience",
	summary: "Reroll or AC check with +lvl as bonus",
	school: "Div",
	composition: "V, S",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 hr/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "This spell grants you a powerful sixth sense in relation to yourself. Once during the spell's duration, you may choose to use its effect. This spell grants you an insight bonus equal to your caster level (maximum +25) on any single attack roll, opposed ability or skill check, or saving throw. Alternatively, you can apply the insight bonus to your AC against a single attack (even if flat-footed). Activating the effect doesn't take an action; you can even activate it on another character's turn if needed. You must choose to use the <i>moment of prescience</i> before you make the roll it is to modify. Once used, the spell ends.<p class=sub>You can't have more than one <i>moment of prescience</i> active on you at the same time",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d569"
}, {
	name: "Mount",
	summary: "Summons riding horse or pony",
	school: "Conj",
	composition: "V, S, M (a bit of horse hair)",
	time: "Round",
	range: "Close",
	effect: "One mount",
	duration: "2 hr/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "You summon a light horse or a pony (your choice) to serve you as a mount. The steed serves willingly and well. The mount comes with a bit and bridle and a riding saddle",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1984"
}, {
	name: "Move Earth",
	summary: "Digs trenches and builds hills",
	school: "Trans",
	composition: "V, S, M (a mixture of soils (clay, loam, and sand) in a small bag, and an iron blade)",
	time: "Special",
	range: "Long",
	effect: "750-ft sq, 10-ft deep",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "Move earth moves dirt (clay, loam, sand), possibly collapsing embankments, moving hillocks, shifting dunes, and so forth. However, in no event can rock formations be collapsed or moved. The area to be affected determines the casting time. For every 150-foot square (up to 10 feet deep), casting takes 10 minutes. The maximum area, 750 feet by 750 feet, takes 4 hours and 10 minutes to move. <p class=sub>This spell does not violently break the surface of the ground. Instead, it creates wavelike crests and troughs, with the earth reacting with glacierlike fluidity until the desired result is achieved. Trees, structures, rock formations, and such are mostly unaffected except for changes in elevation and relative topography. <p class=sub>The spell cannot be used for tunneling and is generally too slow to trap or bury creatures. Its primary use is for digging or filling moats or for adjusting terrain contours before a battle. <p class=sub>This spell has no effect on earth creatures",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d5b7"
}, {
	name: "Neutralize Poison",
	summary: "Detoxifies venom in or on target",
	school: "Conj",
	composition: "V, S, M/DF (a bit of charcoal)",
	time: "1 a",
	range: "Touch",
	effect: "Creat / obj 1 cu ft/lvl",
	duration: "10 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 5,
		"Cleric": 5,
		"Druid": 4,
		"Paladin": 4,
		"Ranger": 3
	},
	description: "You detoxify any sort of venom in the creature or object touched. A poisoned creature suffers no additional effects from the poison, and any temporary effects are ended, but the spell does not reverse instantaneous effects, such as hit point damage, temporary ability damage, or effects that don't go away on their own. For example, if a poison has dealt 3 points of Constitution damage to a character and threatens to deal more damage later, this spell prevents the future damage but does not repair the damage already done. <p class=sub>The creature is immune to any poison it is exposed to during the duration of the spell. Unlike with <i>delay poison</i>, such effects aren't postponed until after the duration &emdash;the creature need not make any saves against poison effects applied to it during the length of the spell. <p class=sub>This spell can instead neutralize the poison in a poisonous creature or object for the duration of the spell, at the caster's option",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f4eb"
}, {
	name: "Nightmare",
	summary: "Restless sleep dealing 1d10 damage",
	school: "Illus",
	composition: "V, S",
	time: "10 min",
	range: "Unlimited",
	effect: "One living creature",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 6,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "You send a hideous and unsettling phantasmal vision to a specific creature that you name or otherwise specifically designate. The <i>nightmare</i> prevents restful sleep and causes 1d10 points of damage. The <i>nightmare</i> leaves the subject fatigued and unable to regain arcane spells for the next 24 hours. <p class=sub>The difficulty of the save depends on how well you know the subject and what sort of physical connection (if any) you have to that creature. <table> <tr class=header><td>Knowledge</td><td>Will Save Modifier</td></tr> <tr><td>None<sup>1</sup></td><td>+10</td></tr> <tr><td>Secondhand (you have heard of the subject)</td><td>+5</td></tr> <tr><td>Firsthand (you have met the subject)</td><td>+0</td></tr> <tr><td>Familiar (you know the subject well)</td><td>'5</td></tr> </table><p><sup>1</sup> You must have some sort of connection to a creature you have no knowledge of. <p class=sub><table> <tr class=header><td>Connection</td><td>Will Save Modifier</td></tr> <tr><td>Likeness or picture</td><td>'2</td></tr> <tr><td>Possession or garment</td><td>'4</td></tr> <tr><td>Body part, lock of hair, bit of nail, etc.</td><td>'10</td></tr> </table> <p class=sub><i>Dispel evil</i> cast on the subject while you are casting the spell dispels the <i>nightmare</i> and causes you to be stunned for 10 minutes per caster level of the <i>dispel evil</i>. <p class=sub>If the recipient is awake when the spell begins, you can choose to cease casting (ending the spell) or to enter a trance until the recipient goes to sleep, whereupon you become alert again and complete the casting. If you are disturbed during the trance, you must succeed on a Concentration check as if you were in the midst of casting a spell (see page 69) or the spell ends. <p class=sub>If you choose to enter a trance, you are not aware of your surroundings or the activities around you while in the trance. You are defenseless, both physically and mentally, while in the trance. (You always fail any saving throw, for example.) <p class=sub>Creatures who don't sleep (such as elves, but not half-elves) or dream are immune to this spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "835c"
}, {
	name: "Nondetection",
	summary: "Masks target to scrying and divination",
	school: "Abjur",
	composition: "V, S, M (a pinch of diamond dust worth 50 gp)",
	time: "1 a",
	range: "Touch",
	effect: "Creature or item",
	duration: "1 hr/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Ranger": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "The warded creature or object becomes difficult to detect by divination spells such as <i>clairaudience/clairvoyance</i>, <i>locate object</i>, and <i>detect</i> spells. <i>Nondetection</i> also prevents location by such magic items as <i>crystal balls</i>. If a divination is attempted against the warded creature or item, the caster of the divination must succeed on a caster level check (1d20 + caster level) against a DC of 11 + the caster level of the spellcaster who cast <i>nondetection</i>. If you cast <i>nondetection</i> on yourself or on an item currently in your possession, the DC is 15 + your caster level. <p class=sub>If cast on a creature, <i>nondetection</i> wards the creature's gear as well as the creature itself",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3d2a"
}, {
	name: "Obscure Object",
	summary: "Masks item to scrying and divination",
	school: "Abjur",
	composition: "V, S, M/DF (a piece of chameleon skin)",
	time: "1 a",
	range: "Touch",
	effect: "Item to 100 lb/lvl",
	duration: "8 hours",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 2,
		"Cleric": 4,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "This spell hides an object from location by divination (scrying) effects, such as the <i>scrying</i> spell or a <i>crystal ball</i>. Such an attempt automatically fails (if the divination is targeted on the object) or fails to perceive the object (if the divination is targeted on a nearby location, object, or person)",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c1a3"
}, {
	name: "Obscuring Mist",
	summary: "Fog surrounds you, visibility 5-ft",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "20-ft",
	effect: "20-ft radius",
	duration: "1 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 2,
		"Druid": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "A misty vapor arises around you. It is stationary once created. The vapor obscures all sight, including darkvision, beyond 5 feet. A creature 5 feet away has concealment (attacks have a 20% miss chance). Creatures farther away have total concealment (50% miss chance, and the attacker cannot use sight to locate the target). <p class=sub>A moderate wind (11+ mph), such as from a <i>gust of wind</i> spell, disperses the fog in 4 rounds. A strong wind (21+ mph) disperses the fog in 1 round. A <i>fireball</i>, <i>flame strike</i>, or similar spell burns away the fog in the explosive or fiery spell's area. A wall of fire burns away the fog in the area into which it deals damage. <p class=sub>This spell does not function underwater.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4c61"
}, {
	name: "Open / Close",
	summary: "Opens/closes small or light things",
	school: "Trans",
	composition: "V, S, F (a brass key)",
	time: "1 a",
	range: "Close",
	effect: "Item to 30 lbs",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 1,
		"Sorceror": 1,
		"Wizard": 1
	},
	description: "You can open or close (your choice) a door, chest, box, window, bag, pouch, bottle, barrel, or other container. If anything resists this activity (such as a bar on a door or a lock on a chest), the spell fails. In addition, the spell can only open and close things weighing 30 pounds or less. Thus, doors, chests, and similar objects sized for enormous creatures may be beyond this spell's ability to affect. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "95b4"
}, {
	name: "Order's Wrath",
	summary: "Deals 1d8/2lvl to evil, half to neutral",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "30-ft cube",
	duration: "Instantaneous",
	save: "Will part",
	sr: "Yes",
	classes: {},
	description: "You channel lawful power to smite enemies. The power takes the form of a three-dimensional grid of energy. Only chaotic and neutral (not lawful) creatures are harmed by the spell. <p class=sub>The spell deals 1d8 points of damage per two caster levels (maximum 5d8) to chaotic creatures (or 1d6 points of damage per caster level, maximum 10d6, to chaotic outsiders) and causes them to be dazed for 1 round. A successful Will save reduces the damage to half and negates the daze effect. <p class=sub>The spell deals only half damage to creatures who are neither chaotic nor lawful, and they are not dazed. They can reduce the damage in half again (down to one-quarter of the roll) with a successful Will save.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5771"
}, {
	name: "Overland Flight",
	summary: "Target flies at 40-ft/round",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 hr/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "This spell functions like a <i>fly</i> spell, except you can fly at a speed of 40 feet (30 feet if wearing medium or heavy armor, or if carrying a medium or heavy load) with average maneuverability. When using this spell for long-distance movement, you can hustle without taking nonlethal damage (a forced march still requires Constitution checks). This means you can cover 64 miles in an eight-hour period of flight (or 48 miles at a speed of 30 feet). See page 164 for more on overland movement.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4505"
}, {
	name: "Owl's Wisdom",
	summary: "+4 Wis",
	school: "Trans",
	composition: "V, S, M/DF (a few feathers, or a pinch of droppings, from an owl)",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 3,
		"Druid": 3,
		"Paladin": 2,
		"Ranger": 2,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "The transmuted creature becomes wiser. The spell grants a +4 enhancement bonus to Wisdom, adding the usual benefit to Wisdom-related skills. Clerics, druids, paladins, and rangers (and other Wisdom-based spellcasters) who receive owl's wisdom do not gain any additional bonus spells for the increased Wisdom, but the save DCs for their spells increase",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "10dc"
}, {
	name: "Owl's Wisdom, Mass",
	summary: "+4 Wis to 1 creature/lvl",
	school: "Trans",
	composition: "V, S, M/DF",
	time: "1 a",
	range: "Close",
	effect: "Creature/lvl in 30-ft",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 7,
		"Druid": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This spell functions like <i>owl's wisdom</i>, except that it affects multiple creatures.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b09c"
}, {
	name: "Passwall",
	summary: "Passage appears in wooden, stone wall",
	school: "Trans",
	composition: "V, S, M (a pinch of sesame seeds)",
	time: "1 a",
	range: "Touch",
	effect: "5x8-ft, 10-ft+5-ft/3lvl deep",
	duration: "1 hr/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "You create a passage through wooden, plaster, or stone walls, but not through metal or other harder materials. The passage is 10 feet deep plus an additional 5 feet deep per three caster levels above 9th (15 feet at 12th, 20 feet at 15th, and a maximum of 25 feet deep at 18th level). If the wall's thickness is more than the depth of the passage created, then a single <i>passwall</i> simply makes a niche or short tunnel. Several <i>passwall</i> spells can then form a continuing passage to breach very thick walls. When <i>passwall</i> ends, creatures within the passage are ejected out the nearest exit. If someone dispels the <i>passwall</i> or you dismiss it, creatures in the passage are ejected out the far exit, if there is one, or out the sole exit if there is only one",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e184"
}, {
	name: "Pass without Trace",
	summary: "Leave no tracks, trail or scent",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "One creature/lvl",
	duration: "1 hr/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Druid": 2,
		"Ranger": 1
	},
	description: "The subject or subjects can move through any type of terrain&emdash;mud, snow, dust, or the like&emdash;and leave neither footprints nor scent. Tracking the subjects is impossible by nonmagical means.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1164"
}, {
	name: "Permanency",
	summary: "Make permanent certain spells",
	school: "Univ",
	composition: "V, S,XP",
	time: "2 rnds",
	range: "Special",
	effect: "Special",
	duration: "Special",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "This spell makes certain other spells permanent. Depending on the spell, you must be of a minimum caster level and must expend a number of XP. <p class=sub>You can make the following spells permanent in regard to yourself. <p class=sub><table><tr class=header><td>Spell</td><td>Minimum Caster Level</td><td>XP Cost</td></tr> <tr><td><i>Arcane sight</i></td><td align=center>11th</td><td align=right>1,500</td></tr> <tr><td><i>Comprehend languages</i></td><td align=center>9th</td><td align=right>500</td></tr><tr><td><i>Darkvision</i></td><td align=center>10th</td><td align=right>1,000</td></tr> <tr><td><i>Detect magic</i></td><td align=center>9th</td><td align=right>500</td></tr><tr><td><i>Read magic</i></td><td align=center>9th</td><td align=right>500</td></tr><tr><td><i>See invisibility</i></td><td align=center>10th</td><td align=right>1,000</td></tr><tr><td><i>Tongues</i></td><td align=center>11th</td><td align=right>1,500</td></tr></table> <p class=sub>You cast the desired spell and then follow it with the <i>permanency</i> spell. You cannot cast these spells on other creatures. This application of <i>permanency</i> can be dispelled only by a caster of higher level than you were when you cast the spell. <p class=sub>In addition to personal use, <i>permanency</i> can be used to make the following spells permanent on yourself, another creature, or an object (as appropriate). <p class=sub><table><tr class=header><td>Spell</td><td>Minimum Caster Level</td><td>XP Cost</td></tr><tr><td><i>Enlarge person</i></td><td align=center>9th</td><td align=right>500</td></tr><tr><td><i>Magic fang</i></td><td align=center>9th</td><td align=right>500</td></tr><tr><td><i>Magic fang, greater</i></td><td align=center>11th</td><td align=right>1,500</td></tr><tr><td><i>Rary's telepathic bond</i><sup>1</sup></td><td align=center>13th</td><td align=right>2,500</td></tr><tr><td><i>Reduce person</i></td><td align=center>9th</td><td align=right>500</td></tr><tr><td><i>Resistance</i></td><td align=center>9th</td><td align=right>500</td></tr></table><p class=sub><p><sup>1</sup> Only bonds two creatures per casting of <i>permanency</i>. <p class=sub>Additionally, the following spells can be cast upon objects or areas only and rendered permanent. <p class=sub><table><tr class=header><td>Spell</td><td>Minimum Caster Level</td><td>XP Cost</td></tr> <tr><td><i>Alarm</i></td><td align=center>9th</td><td align=right>500</td></tr><tr><td><i>Animate objects</i></td><td align=center>14th</td><td align=right>3,000</td></tr><tr><td><i>Dancing lights</i></td><td align=center>9th</td><td align=right>500</td></tr><tr><td><i>Ghost sound</i></td><td align=center>9th</td><td align=right>500</td></tr><tr><td><i>Gust of wind</i></td><td align=center>11th</td><td align=right>1,500</td></tr><tr><td><i>Invisibility</i></td><td align=center>10th</td><td align=right>1,000</td></tr><tr><td><i>Magic mouth</i></td><td align=center>10th</td><td align=right>1,000</td></tr><tr><td><i>Mordenkainen's private sanctum</i></td><td align=center>13th</td><td align=right>2,500</td></tr> <tr><td><i>Phase door</i></td><td align=center>15th</td><td align=right>3,500</td></tr><tr><td><i>Prismatic sphere</i></td><td align=center>17th</td><td align=right>4,500</td></tr><tr><td><i>Prismatic wall</i></td><td align=center>16th</td><td align=right>4,000</td></tr><tr><td><i>Shrink item</i></td><td align=center>11th</td><td align=right>1,500</td></tr><tr><td><i>Solid fog</i></td><td align=center>12th</td><td align=right>2,000</td></tr><tr><td><i>Stinking cloud</i></td><td align=center>11th</td><td align=right>1,500</td></tr><tr><td><i>Symbol of death</i></td><td align=center>16th</td><td align=right>4,000</td></tr><tr><td><i>Symbol of fear</i></td><td align=center>14th</td><td align=right>3,000</td></tr><tr><td><i>Symbol of insanity</i></td><td align=center>16th</td><td align=right>4,000</td></tr><tr><td><i>Symbol of pain</i></td><td align=center>13th</td><td align=right>2,500</td></tr><tr><td><i>Symbol of persuasion</i></td><td align=center>14th</td><td align=right>3,000</td></tr><tr><td><i>Symbol of sleep</i></td><td align=center>16th</td><td align=right>4,000</td></tr><tr><td><i>Symbol of stunning</i></td><td align=center>15th</td><td align=right>3,500</td></tr><tr><td><i>Symbol of weakness</i></td><td align=center>15th</td><td align=right>3,500</td></tr><tr><td><i>Teleportation circle</i></td><td align=center>17th</td><td align=right>4,500</td></tr><tr><td><i>Wall of fire</i></td><td align=center>12th</td><td align=right>2,000</td></tr><tr><td><i>Wall of force</i></td><td align=center>13th</td><td align=right>2,500</td></tr><tr><td><i>Web</i></td><td align=center>10th</td><td align=right>1,000</td></tr></table><p class=sub>Spells cast on other creatures, objects, or locations (not on you) are vulnerable to <i>dispel magic</i> as normal. <p class=sub>The DM may allow other selected spells to be made permanent. Researching this possible application of a spell costs as much time and money as independently researching the selected spell (see the <i>Dungeon Master's Guide</i> for descriptions). If the DM has already determined that the application is not possible, the research automatically fails. Note that you never learn what is possible except by the success or failure of your research. <p class=sub><i>XP Cost</i>: See tables above.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "12db"
}, {
	name: "Permanent Image",
	summary: "Creates static illusionary scene",
	school: "Illus",
	composition: "V, S, F (a bit of fleece plus powdered jade worth 100 gp)",
	time: "1 a",
	range: "Long",
	effect: "20-ft cube+10-ft cube/lvl",
	duration: "Permanent (D)",
	save: "Will dsblf",
	sr: "-",
	classes: {
		"Bard": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This spell functions like <i>silent image</i>, except that the figment includes visual, auditory, olfactory, and thermal elements, and the spell is permanent. By concentrating, you can move the image within the limits of the range, but it is static while you are not concentrating",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "931"
}, {
	name: "Persistent Image",
	summary: "Creates repeating illusionary scene",
	school: "Illus",
	composition: "V, S, F (a bit of fleece and several grains of sand)",
	time: "1 a",
	range: "Long",
	effect: "4 10-ft cubes+1/lvl",
	duration: "1 min/lvl (D)",
	save: "Will dsblf",
	sr: "-",
	classes: {
		"Bard": 6,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "This spell functions like <i>silent image</i>, except that the figment includes visual, auditory, olfactory, and thermal components, and the figment follows a script determined by you. The figment follows that script without your having to concentrate on it. The illusion can include intelligible speech if you wish. For instance, you could create the illusion of several orcs playing cards and arguing, culminating in a fistfight",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "bb63"
}, {
	name: "Phantasmal Killer",
	summary: "Illusion kills else does 3d6 dmg",
	school: "Illus",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "One living creature",
	duration: "Instantaneous",
	save: "Will dsblf, Fort part",
	sr: "Yes",
	classes: {
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "You create a phantasmal image of the most fearsome creature imaginable to the subject simply by forming the fears of the subject's subconscious mind into something that its conscious mind can visualize: this most horrible beast. Only the spell's subject can see the phantasmal killer. You see only a vague shape. The target first gets a Will save to recognize the image as unreal. If that save fails, the phantasm touches the subject, and the subject must succeed on a Fortitude save or die from fear. Even if the Fortitude save is successful, the subject takes 3d6 points of damage. <p class=sub>If the subject of a <i>phantasmal killer</i> attack succeeds in disbelieving and is wearing a <i>helm of telepathy</i>, the beast can be turned upon you. You must then disbelieve it or become subject to its deadly fear attack.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ef47"
}, {
	name: "Phantom Steed",
	summary: "Horselike creature, AC18, HP 7+1/lvl",
	school: "Conj",
	composition: "V, S",
	time: "10 min",
	range: "0 ft",
	effect: "One creature",
	duration: "1 hr/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "You conjure a Large, quasi-real, horselike creature. The steed can be ridden only by you or by the one person for whom you specifically created the mount. A phantom steed has a black head and body, gray mane and tail, and smoke-colored, insubstantial hooves that make no sound. It has what seems to be a saddle, bit, and bridle. It does not fight, but animals shun it and refuse to attack it. <p class=sub>The mount has an AC of 18 (-1 size, +4 natural armor, +5 Dex) and 7 hit points +1 hit point per caster level. If it loses all its hit points, the phantom steed disappears. A phantom steed has a speed of 20 feet per caster level, to a maximum of 240 feet. It can bear its rider's weight plus up to 10 pounds per caster level. <p class=sub>These mounts gain certain powers according to caster level. A mount's abilities include those of mounts of lower caster levels. Thus, a mount created by a 12th-level caster has the 8th, 10th, and 12th caster level abilities. <p class=sub><i>8th Level</i>: The mount can ride over sandy, muddy, or even swampy ground without difficulty or decrease in speed. <p class=sub><i>10th Level</i>: The mount can use <i>water walk</i> at will (as the spell, no action required to activate this ability). <p class=sub><i>12th Level</i>: The mount can use <i>air walk</i> at will (as the spell, no action required to activate this ability) for up to 1 round at a time, after which it falls to the ground.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ee67"
}, {
	name: "Phantom Trap",
	school: "Illus",
	classes: {
		Sorceror: 2,
		Wizard: 2
	},
	time: "1 a",
	composition: "V, S, M (special dust worth 50 gp)",
	range: "touch",
	effect: "object touched",
	duration: "permanent (D)",
	save: "-",
	sr: "no",
	description: "This spell makes a lock or other small mechanism seem to be trapped to anyone who can detect traps. You place the spell upon any small mechanism or device, such as a lock, hinge, hasp, cork, cap, or ratchet. Any character able to detect traps, or who uses any spell or device enabling trap detection, is certain a real trap exists. Of course, the effect is illusory and nothing happens if the trap is &quot;sprung&qout; its primary purpose is to frighten away thieves or make them waste precious time.<p class=sub>If another <i>phantom trap</i> is active within 50 feet when the spell is cast, the casting fails.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f4e3"	
}, {
	name: "Phase Door",
	summary: "Passage appears in wooden, stone wall",
	school: "Conj",
	composition: "V",
	time: "1 a",
	range: "0-ft",
	effect: "5x8 ft, 10-ft+5-ft/3lvl deep",
	duration: "1 usage/2 lvls",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "This spell creates an ethereal passage through wooden, plaster, or stone walls, but not other materials. The <i>phase door</i> is invisible and inaccessible to all creatures except you, and only you can use the passage. You disappear when you enter the <i>phase door</i> and appear when you exit. If you desire, you can take one other creature (Medium or smaller) through the door. This counts as two uses of the door. The door does not allow light, sound, or spell effects through it, nor can you see through it without using it. Thus, the spell can provide an escape route, though certain creatures, such as phase spiders, can follow with ease. A <i>gem of true seeing</i> or similar magic reveals the presence of a <i>phase door</i> but does not allow its use. <p class=sub>A <i>phase door</i> is subject to <i>dispel magic</i>. If anyone is within the passage when it is dispelled, he is harmlessly ejected just as if he were inside a <i>passwall</i> effect. <p class=sub>You can allow other creatures to use the <i>phase door</i> by setting some triggering condition for the door. Such conditions can be as simple or elaborate as you desire. They can be based on a creature's name, identity, or alignment, but otherwise must be based on observable actions or qualities. Intangibles such as level, class, Hit Dice, and hit points don't qualify. <p class=sub><i>Phase door</i> can be made permanent with a <i>permanency</i> spell. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2a5"
}, {
	name: "Planar Ally",
	summary: "Outsider (12 HD) exchanges services",
	school: "Conj",
	composition: "V, S,DF,XP",
	time: "10 min",
	range: "Close",
	effect: "1-2 creatures",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 7
	},
	description: "This spell functions like <i>lesser planar ally</i>, except you may call a single creature of 12 HD or less, or two creatures of the same kind whose Hit Dice total no more than 12. The creatures agree to help you and request your return payment together. <p class=sub><i>XP Cost</i>: 250 XP.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7898"
}, {
	name: "Planar Ally, Greater",
	summary: "Outsider (18 HD) exchanges services",
	school: "Conj",
	composition: "V, S,DF,XP",
	time: "10 min",
	range: "Close",
	effect: "1-3 creatures",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 9
	},
	description: "This spell functions like <i>lesser planar ally</i>, except that you may call a single creature of 18 HD or less, or up to three creatures of the same kind whose Hit Dice total no more than 18. The creatures agree to help you and request your return payment together. <p class=sub><i>XP Cost</i>: 500 XP",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "65f3"
}, {
	name: "Planar Ally, Lesser",
	summary: "Outsider (6 HD) exchanges services",
	school: "Conj",
	composition: "V, S,DF,XP",
	time: "10 min",
	range: "Close",
	effect: "One creature",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 5
	},
	description: "By casting this spell, you request your deity to send you an elemental or outsider (of 6 HD or less) of the deity's choice. If you serve no particular deity, the spell is a general plea answered by a creature sharing your philosophical alignment. If you know an individual creature's name, you may request that individual by speaking the name during the spell (though you might get a different creature anyway). <p class=sub>You may ask the creature to perform one task in exchange for a payment from you. Tasks might range from the simple (fly us across the chasm, help us fight a battle) to the complex (spy on our enemies, protect us on our foray into the dungeon). You must be able to communicate with the creature called in order to bargain for its services. <p class=sub>The creature called requires a payment for its services. This payment can take a variety of forms, from donating gold or magic items to an allied temple, to a gift given directly to the creature, to some other action on your part that matches the creature's alignment and goals. Regardless, this payment must be made before the creature agrees to perform any services. The bargaining takes at least 1 round, so any actions by the creature begin in the round after it arrives. <p class=sub>A task taking up to 1 minute per caster level requires a payment of 100 gp per HD of the creature called. For a task taking up to 1 hour per caster level, the creature requires a payment of 500 gp per HD. A long-term task, one requiring up to one day per caster level, requires a payment of 1,000 gp per HD. <p class=sub>A nonhazardous task requires only half the indicated payment, while an especially hazardous task might require a greater gift. Few if any creatures will accept a task that seems suicidal (remember, a called creature actually dies when it is killed, unlike a summoned creature). However, if the task is strongly aligned with the creature's ethos, the DM may halve or even waive the payment. For instance, a celestial creature called to battle demons might require a gift of only half the normal value. <p class=sub>At the end of its task, or when the duration bargained for expires, the creature returns to its home plane (after reporting back to you, if appropriate and possible). <p class=sub><i>Note</i>: When you use a calling spell that calls an air, chaotic, earth, evil, fire, good, lawful, or water creature, it is a spell of that type. For example, a <i>lesser planar ally</i> is a fire spell when it calls a fire elemental. <p class=sub><i>XP Cost</i>: 100 XP.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c49b"
}, {
	name: "Planar Binding",
	summary: "Traps outsider for task (12 HD)",
	school: "Conj",
	composition: "V, S",
	time: "10 min",
	range: "Close",
	effect: "1-3 creatures",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This spell functions like <i>lesser planar binding</i>, except that you may call a single creature of 12 HD or less, or up to three creatures of the same kind whose Hit Dice total no more than 12. Each creature gets a save, makes an independent attempt to escape, and must be individually persuaded to aid you.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "95b8"
}, {
	name: "Planar Binding, Greater",
	summary: "Traps outsider for task (18 HD)",
	school: "Conj",
	composition: "V, S",
	time: "10 min",
	range: "Close",
	effect: "1-3 creature",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "This spell functions like <i>lesser planar binding</i>, except that you may call a single creature of 18 HD or less, or up to three creatures of the same kind whose Hit Dice total no more than 18. Each creature gets a saving throw, makes independent attempts to escape, and must be persuaded to aid you individually.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ce55"
}, {
	name: "Planar Binding, Lesser",
	summary: "Traps outsider for task (6 HD)",
	school: "Conj",
	composition: "V, S",
	time: "10 min",
	range: "Close",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "Casting this spell attempts a dangerous act: to lure a creature from another plane to a specifically prepared trap, which must lie within the spell's range. The called creature is held in the trap until it agrees to perform one service in return for its freedom. <p class=sub>To create the trap, you must use a <i>magic circle</i> spell, focused inward. The kind of creature to be bound must be known and stated. If you wish to call a specific individual, you must use that individual's proper name in casting the spell. <p class=sub>The target creature is allowed a Will saving throw. If the saving throw succeeds, the creature resists the spell. If the saving throw fails, the creature is immediately drawn to the trap (spell resistance does not keep it from being called). The creature can escape from the trap with by successfully pitting its spell resistance against your caster level check, by dimensional travel, or with a successful Charisma check (DC 15 + 1/2 your caster level + your Cha modifier). It can try each method once per day. If it breaks loose, it can flee or attack you. A <i>dimensional anchor</i> cast on the creature prevents its escape via dimensional travel. You can also employ a calling diagram (see <i>magic circle against evil</i>, page 246) to make the trap more secure. <p class=sub>If the creature does not break free of the trap, you can keep it bound for as long as you dare. You can attempt to compel the creature to perform a service by describing the service and perhaps offering some sort of reward. You make a Charisma check opposed by the creature's Charisma check. The DM assigns your check a bonus of +0 to +6 based on the nature of the service and the reward. If the creature wins the opposed check, it refuses service. New offers, bribes, and the like can be made or the old ones reoffered every 24 hours. This process can be repeated until the creature promises to serve, until it breaks free, or until you decide to get rid of it by means of some other spell. Impossible demands or unreasonable commands are never agreed to. If you roll a 1 on the Charisma check, the creature breaks free of the binding and can escape or attack you. Once the requested service is completed, the creature need only so inform you to be instantly sent back whence it came. The creature might later seek revenge. If you assign some open-ended task that the creature cannot complete though its own actions (such as \"Wait here\" or \"Defend this area against attack\"), the spell remains in effect for a maximum of one day per caster level, and the creature gains an immediate chance to break free. Note that a clever recipient can subvert some instructions. <p class=sub>When you use a calling spell to call an air, chaotic, earth, evil, fire, good, lawful, or water creature, it is a spell of that type. For example, <i>lesser planar binding</i> is a water spell when you cast it to call a water elemental.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "696f"
}, {
	name: "Plane Shift",
	summary: "Targets travel to another plane",
	school: "Conj",
	composition: "V, S, F (a small, forked metal rod)",
	time: "1 a",
	range: "Touch",
	effect: "1-8 willing creatures",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 6,
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "You move yourself or some other creature to another plane of existence or alternate dimension. If several willing persons link hands in a circle, as many as eight can be affected by the <i>plane shift</i> at the same time. Precise accuracy as to a particular arrival location on the intended plane is nigh impossible. From the Material Plane, you can reach any other plane, though you appear 5 to 500 miles (5d%) from your intended destination. <p class=sub><i>Note</i>: <i>Plane shift</i> transports creatures instantaneously and then ends. The creatures need to find other means if they are to travel back.  The size and metal type dictates to which plane of existence or alternate dimension the spell sends the affected creatures. Forked rods keyed to certain planes or dimensions may be difficult to come by, as decided by the DM.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b65"
}, {
	name: "Plant Growth",
	summary: "Grows vegetation, improves crops",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Special",
	effect: "Special",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 4,
		"Ranger": 3
	},
	description: "<i>Plant growth</i> has different effects depending on the version chosen. <p class=sub><i>Overgrowth</i>: This effect causes normal vegetation (grasses, briars, bushes, creepers, thistles, trees, vines) within long range (400 feet + 40 feet per caster level) to become thick and overgrown. The plants entwine to form a thicket or jungle that creatures must hack or force a way through. Speed drops to 5 feet, or 10 feet for Large or larger creatures. (The DM may allow faster movement for very small or very large creatures.) The area must have brush and trees in it for this spell to take effect. <p class=sub>At your option, the area can be a 100-foot-radius circle, a 150-foot-radius semi-circle, or a 200-foot-radius quarter circle. You may designate places within the area that are not affected. <p class=sub><i>Enrichment</i>: This effect targets plants within a range of one-half mile, raising their potential productivity over the course of the next year to one-third above normal. <p class=sub><i>Plant growth</i> counters <i>diminish plants</i>. <p class=sub>This spell has no effect on plant creatures.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "de17"
}, {
	name: "Plant Shape I",
	school: "Trans (polymorph)",
	classes: {
		Sorceror: 5,
		Wizard: 5
	},
	time: "1 a",
	composition: "V, S, M (a piece of the creature whose form you plan to assume)",
	range: "Self",
	effect: "personal",
	duration: "1 min/lvl (D)",
	description: "When you cast this spell you can assume the form of any Small or Medium creature of the plant type (see the <i>Pathfinder RPG Bestiary</i>). If the form you assume has any of the following abilities, you gain the listed ability: darkvision 60 feet, low-light vision, constrict, grab, and poison. If the form you assume does not possess the ability to move, your speed is reduced to 5 feet and you lose all other forms of movement. If the creature has vulnerability to an element, you gain that vulnerability.<p class=sub><i>Small plant</i> If the form you take is that of a Small plant, you gain a +2 size bonus to your Constitution and a +2 natural armor bonus.<p class=sub><i>Medium plant</i> If the form you take is that of a Medium plant, you gain a +2 size bonus to your Strength, a +2 enhancement bonus to your Constitution, and a +2 natural armor bonus.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6395"
}, {	
	name: "Plant Shape II",
	school: "Trans (polymorph)",
	classes: {
		Sorceror: 6,
		Wizard: 6
	},
	description: "This spell functions as <i>plant shape I</i> except that it also allows you to assume the form of a Large creature of the plant type. If the creature has immunity or resistance to any elements, you gain resistance 20 to those elements. If the creature has vulnerability to an element, you gain that vulnerability.<p class=sub><i>Large plant</i> If the form you take is that of a Large plant, you gain a +4 size bonus to your Strength, a +2 size bonus to your Constitution, and a +4 natural armor bonus.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3b38"
}, {
	name: "Plant Shape III",
	school: "Trans (polymorph)",
	classes: {
		Sorceror: 7,
		Wizard: 7
	},
	description: "This spell functions as <i>plant shape II</i> except that it also allows you to assume the form of a Huge creature of the plant type. If the form you assume has any of the following abilities, you gain the listed ability: DR, regeneration 5, and trample. <p class=sub><i>Huge plant</i> If the form you take is that of a Huge plant, you gain a +8 size bonus to your Strength, a &emdash;2 penalty to your Dexterity, a +4 size bonus to your Constitution, and a +6 natural armor bonus.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e69c"
}, {
	name: "Poison",
	summary: "Touch 1d10 Con dmg, repeats 1min",
	school: "Necro",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "One living creature",
	duration: "Instantaneous",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Cleric": 5,
		"Druid": 4
	},
	description: "Calling upon the venomous powers of natural predators, you infect the subject with a horrible poison by making a successful melee touch attack. The poison deals 1d10 points of temporary Constitution damage immediately and another 1d10 points of temporary Constitution damage 1 minute later. Each instance of damage can be negated by a Fortitude save (DC 10 + 1/2 your caster level + your Wis modifier).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7c50"
}, {
	name: "Polar Ray",
	summary: "1d6 cold dmg/lvl",
	school: "Evoc",
	composition: "V, S, F (a small, white ceramic cone or prism)",
	time: "1 a",
	range: "Close",
	effect: "Ray",
	duration: "Instantaneous",
	save: "-",
	sr: "Yes",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "A blue-white ray of freezing air and ice springs from your hand. You must succeed on a ranged touch attack with the ray to deal damage to a target. The ray deals 1d6 points of cold damage per caster level (maximum 25d6).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "91d4"
}, {
	name: "Polymorph Any Object",
	summary: "Transform target into new form",
	school: "Trans",
	composition: "V, S, M/DF (mercury, gum arabic, and smoke)",
	time: "1 a",
	range: "Close",
	effect: "Creat/obj 100 cu.ft/lvl",
	duration: "Special",
	save: "-",
	sr: "Yes",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "This spell functions like <i>polymorph</i>, except that it changes one object or creature into another. The duration of the spell depends on how radical a change is made from the original state to its enchanted state. The DM determines the duration by using the following guidelines.<table><tr class=header><td>Changed Subject Is:</td><td>Increase to Duration Factor<sup>1</sup></td></tr><tr><td>Same kingdom (animal, vegetable, mineral)</td><td align=center>+5</td></tr> <tr><td>Same class (mammals, fungi, metals, etc.)</td><td align=center>+2</td></tr> <tr><td>Same size</td><td align=center>+2</td></tr> <tr><td>Related (twig is to tree, wolf fur is to wolf, etc.)</td><td align=center>+2</td></tr> <tr><td>Same or lower Intelligence</td><td align=center>+2</td></tr> </table><p class=sub><p><sup>1</sup> Add all that apply. Look up the total on the next table.<table> <tr class=header><td>Duration Factor</td><td>Duration</td><td>Example</td></tr> <tr><td>0</td><td>20 minutes</td><td>Pebble to human</td></tr> <tr><td>2</td><td>1 hour</td><td>Marionette to human</td></tr> <tr><td>4</td><td>3 hours</td><td>Human to marionette</td></tr> <tr><td>5</td><td>12 hours</td><td>Lizard to manticore</td></tr> <tr><td>6</td><td>2 days</td><td>Sheep to wool coat</td></tr> <td>7</td><td>1 week</td><td>Shrew to manticore</td> <tr><td>9+</td><td>Permanent</td><td>Manticore to shrew</td></tr> </table> <p class=sub>Unlike <i>polymorph</i>, <i>polymorph any object</i> does grant the creature the Intelligence score of its new form. If the original form didn't have a Wisdom or Charisma score, it gains those scores as appropriate for the new form. <p class=sub>Damage taken by the new form can result in the injury or death of the poly-morphed creature. For example, it is pos-sible to polymorph a creature into rock and then grind it to dust, causing damage, perhaps even death. If the creature was changed to dust to start with, more creative methods to damage it would be needed. Perhaps you could use a gust of wind spell to scatter the dust far and wide. In general, damage occurs when the new form is changed through physical force, although the DM must adjudicate many of these situations. <p class=sub>A nonmagical object cannot be made into a magic item with this spell. Magic items aren't affected by this spell. This spell cannot create material of great intrinsic value, such as copper, silver, gems, silk, gold, platinum, mithral, or adamantine. It also cannot reproduce the special properties of cold iron in order to overcome the damage reduction of certain creatures. <p class=sub>This spell can also be used to duplicate the effects of <i>polymorph, flesh to stone, stone to flesh, transmute mud to rock, transmute water to dust</i>, or <i>transmute rock to mud</i>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e8de"
}, {
	name: "Polymorph",
	summary: "Transform willing target to new form",
	school: "Trans",
	composition: "V, S, M (an empty cocoon)",
	time: "1 a",
	range: "Touch",
	effect: "One living creature",
	duration: "1 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "This spell functions like <i>alter self</i>, except that you change the willing subject into another form of living creature. The new form may be of the same type as the subject or any of the following types aberration, animal, dragon, fey, giant, humanoid, magical beast, monstrous humanoid, ooze, plant, or vermin. The assumed form can't have more Hit Dice than your caster level (or the subject's HD, whichever is lower), to a maximum of 15 HD at 15th level. You can't cause a subject to assume a form smaller than Fine, nor can you cause a subject to assume an incorporeal or gaseous form. The subject's creature type and subtype (if any) change to match the new form (see the <i>Monster Manual</i> for more information). <p class=sub>Upon changing, the subject regains lost hit points as if it had rested for a night (though this healing does not restore temporary ability damage and provide other benefits of resting; and changing back does not heal the subject further). If slain, the subject reverts to its original form, though it remains dead. <p class=sub>The subject gains the Strength, Dexterity, and Constitution scores of the new form but retains its own Intelligence, Wisdom, and Charisma scores. It also gains all extraordinary special attacks possessed by the form (such as constrict, improved grab, and poison) but does not gain the extraordinary special qualities possessed by the new form (such as blindsense, fast healing, regeneration, and scent) or any supernatural or spell-like abilities. <p class=sub>Incorporeal or gaseous creatures are immune to being <i>polymorphed</i>, and a creature with the shapechanger subtype (such as a lycanthrope or a doppelganger) can revert to its natural form as a standard action",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "dbea"
}, {
	name: "Polymorph, Greater",
	school: "Trans (polymorph)",
	classes: {
		Sorceror: 7,
		Wizard: 7
	},
	description: "This spell functions as <i>polymorph</i> except that it allows the creature to take on the form of a dragon or plant creature. If you use this spell to cause the target to take on the form of an animal or magical beast, it functions as <i>beast shape IV</i>. If the form is that of an elemental, the spell functions as <i>elemental body III.</i> If the form is that of a humanoid, the spell functions as alter self. If the form is that of a plant, the spell functions as <i>plant shape II</i>. If the form is that of a dragon, the spell functions as <i>form of the dragon I.</i>The subject may choose to resume its normal form as a full-round action; doing so ends the spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "38f3"
}, {
	name: "Power Word, Blind",
	summary: "Blinds one target less than 200 hps",
	school: "Ench",
	composition: "V",
	time: "1 a",
	range: "Close",
	effect: "One creature",
	duration: "Special",
	save: "-",
	sr: "Yes",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "You utter a single word of power that causes one creature of your choice to become blinded, whether the creature can hear the word or not. The duration of the spell depends on the target's current hit point total. Any creature that currently has 201 or more hit points is unaffected by <i>power word blind</i>. <table><tr class=header><td>Hit Points</td><td>Duration</td></tr> <tr><td>50 or less</td><td>Permanent</td></tr> <tr><td>51-100</td><td>1d4+1 minutes</td></tr> <tr><td>101-200</td><td>1d4+1 rounds</td></tr> </table>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4d17"
}, {
	name: "Power Word, Kill",
	summary: "Kills one target less than 100 hps",
	school: "Ench",
	composition: "V",
	time: "1 a",
	range: "Close",
	effect: "One living creature",
	duration: "Instantaneous",
	save: "-",
	sr: "Yes",
	classes: {
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "You utter a single word of power that instantly kills one creature of your choice, whether the creature can hear the word or not. Any creature that currently has 101 or more hit points is unaffected by <i>power word kill</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "59ee"
}, {
	name: "Power Word, Stun",
	summary: "Stuns one target less than 150 hps",
	school: "Ench",
	composition: "V",
	time: "1 a",
	range: "Close",
	effect: "One creature",
	duration: "Special",
	save: "-",
	sr: "Yes",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "You utter a single word of power that instantly causes one creature of your choice to become stunned, whether the creature can hear the word or not. The duration of the spell depends on the target's current hit point total. Any creature that currently has 151 or more hit points is unaffected by <i>power word stun</i>.<table><tr class=header><td>Hit Points</td><td>Duration</td></tr><tr><td>50 or less</td><td>4d4 rounds</td></tr> <tr><td>51-100</td><td>2d4 rounds</td></tr> <tr><td>101-150</td><td>1d4 rounds</td></tr> </table>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6786"
}, {
	name: "Prayer",
	summary: "Allies+1 att,dmg,save,skill, Enemies -1",
	school: "Ench",
	composition: "V, S,DF",
	time: "1 a",
	range: "40-ft",
	effect: "40-ft radius",
	duration: "1 rnd/lvl",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 4,
		"Paladin": 3
	},
	description: "You bring special favor upon yourself and your allies while bringing disfavor to your enemies. You and your each of your allies gain a +1 luck bonus on attack rolls, weapon damage rolls, saves, and skill checks, while each of your foes takes a -1 penalty on such rolls. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2dad"
}, {
	name: "Prestidigitation",
	summary: "Performs minor tricks",
	school: "Univ",
	composition: "V, S",
	time: "1 a",
	range: "10-ft",
	effect: "1 lb, 1 cu. Ft",
	duration: "1 hr",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 1,
		"Sorceror": 1,
		"Wizard": 1
	},
	description: "Prestidigitations are minor tricks that novice spellcasters use for practice. Once cast, a <i>prestidigitation</i> spell enables you to perform simple magical effects for 1 hour. The effects are minor and have severe lim-itations. A prestidigitation can slowly lift 1 pound of material. It can color, clean, or soil items in a 1-foot cube each round. It can chill, warm, or flavor 1 pound of non-living material. It cannot deal damage or affect the concentration of spellcasters. <i>Prestidigitation</i> can create small objects, but they look crude and artificial. The materials created by a <i>prestidigitation</i> spell are extremely fragile, and they cannot be used as tools, weapons, or spell compo-nents. Finally, a <i>prestidigitation</i> lacks the power to duplicate any other spell effects. Any actual change to an object (beyond just moving, cleaning, or soiling it) persists only 1 hour. <p class=sub>Characters typically use <i>prestidigitation</i> spells to impress common folk, amuse children, and brighten dreary lives. Common tricks with <i>prestidigitations</i> include producing tinklings of ethereal music, brightening faded flowers, creating glowing balls that float over your hand, generating puffs of wind to flicker candles, spicing up aromas and flavors of bland food, and making little whirlwinds to sweep dust under rugs.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f861"
}, {
	name: "Prismatic Sphere",
	summary: "Surrounds on all sides with effects",
	school: "Abjur",
	composition: "V",
	time: "1 a",
	range: "10-ft",
	effect: "10-ft radius",
	duration: "10 min/lvl",
	save: "Special",
	sr: "Sp",
	classes: {
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "This spell functions like <i>prismatic wall</i>, except you conjure up an immobile, opaque globe of shimmering, multicolored light that surrounds you and protects you from all forms of attack. The sphere flashes in all colors of the visible spectrum. <p class=sub>The sphere's <i>blindness</i> effect on creatures with less than 8 HD lasts 2d4×10 minutes. You can pass into and out of the <i>prismatic sphere</i> and remain near it without harm. However, when you're inside it, the sphere blocks any attempt to project something through the sphere (including spells). Other creatures that attempt to attack you or pass through suffer the effects of each color, one at a time. <p class=sub>Typically, only the upper hemisphere of the globe will exist, since you are at the center of the sphere, so the lower half is usually excluded by the floor surface you are standing on. <p class=sub>The colors of the sphere have the same effects as the colors of a <i>prismatic wall</i>. <p class=sub><i>Prismatic sphere</i> can be made permanent with a <i>permanency</i> spell",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8b2a"
}, {
	name: "Prismatic Spray",
	summary: "Rays hit with random effects",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Cone",
	duration: "Instantaneous",
	save: "Special",
	sr: "Yes",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "This spell causes seven shimmering, intertwined, multicolored beams of light to spray from your hand. Each beam has a different power. Creatures in the area of the spell with 8 HD or less are automatically blinded for 2d4 rounds. Every creature in the area is randomly struck by one or more beams, which have additional effects. <table> <tr class=header><td>1d8</td><td>Color of Beam</td><td>Effect</td></tr> <tr><td>1</td><td>Red</td><td>20 points fire damage (Reflex half)</td></tr> <tr><td>2</td><td>Orange</td><td>40 points acid damage (Reflex half)</td></tr> <tr><td>3</td><td>Yellow</td><td>80 points electricity damage (Reflex half)</td></tr> <tr><td>4</td><td>Green</td><td>Poison (Kills; Fortitude partial, take 1d6 points of Con damage instead)</td></tr> <tr><td>5</td><td>Blue</td><td>Turned to stone (Fortitude negates)</td></tr> <tr><td>6</td><td>Indigo</td><td>Insane, as <i>insanity</i> spell (Will negates)</td></tr> <tr><td>7</td><td>Violet</td><td>Sent to another plane (Will negates)</td></tr> <tr><td>8</td><td></td><td>Struck by two rays; roll twice more, ignoring any \"8\" results.</td></tr> </table>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6381"
}, {
	name: "Prismatic Wall",
	summary: "Wall's colours have array of effects",
	school: "Abjur",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "4 ft/lvl wide,2/lvl high",
	duration: "10 min/lvl",
	save: "Special",
	sr: "Sp",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "<i>Prismatic wall</i> creates a vertical, opaque wall&emdash;a shimmering, multicolored plane of light that protects you from all forms of attack. The wall flashes with seven colors, each of which has a distinct power and purpose. The wall is immobile, and you can pass through and remain near the wall without harm. However, any other creature with less than 8 HD that is within 20 feet of the wall is blinded for 2d4 rounds by the colors if it looks at the wall. <p class=sub>The wall's maximum proportions are 4 feet wide per caster level and 2 feet high per caster level. A prismatic wall spell cast to materialize in a space occupied by a creature is disrupted, and the spell is wasted. <p class=sub>Each color in the wall has a special effect. The accompanying table shows the seven colors of the wall, the order in which they appear, their effects on creatures trying to attack you or pass through the wall, and the magic needed to negate each color. <p class=sub>The wall can be destroyed, color by color, in consecutive order, by various magical effects; however, the first color must be brought down before the second can be affected, and so on. A <i>rod of cancellation</i> or a <i>Mordenkainen's disjunction</i> spell destroys a <i>prismatic wall</i>, but an <i>antimagic field</i> fails to penetrate it. <i>Dispel magic</i> and <i>greater dispel magic</i> cannot dispel the wall or anything beyond it. Spell resistance is effective against a <i>prismatic wall</i>, but the caster level check must be repeated for each color present. <i>Prismatic wall</i> can be made permanent with a <i>permanency</i> spell. <table> <tr class=header><td>Color</td><td>Order</td><td>Effect of Color</td><td>Negated By</td></tr> <tr><td>Red</td><td>1st</td><td>Stops nonmagical ranged weapons. Deals 20 points of fire damage (Reflex half).</td><td><i>Cone of cold</i></td></tr> <tr><td>Orange</td><td>2nd</td><td>Stops magical ranged weapons. Deals 40 points of acid damage (Reflex half).</td><td><i>Gust of wind</i></td></tr> <tr><td>Yellow</td><td>3rd</td><td>Stops poisons, gases, and petrification. Deals 80 points of electricity damage (Reflex half).</td><td><i>Disintegrate</i></td></tr> <tr><td>Green</td><td>4th</td><td>Stops breath weapons. Poison (Kills; Fortitude partial for 1d6 points of Con damage instead).</td><td><i>Passwall</i></td></tr> <tr><td>Blue</td><td>5th</td><td>Stops divination and mental attacks. Turned to stone (Fortitude negates).</td><td><i>Magic missile</i></td></tr> <tr><td>Indigo</td><td>6th</td><td>Stops all spells. Will save or become insane (as insanity spell).</td><td>Daylight</td></tr> <tr><td>Violet</td><td>7th</td><td>Energy field destroys all objects and effects.<sup>1</sup> Creatures sent to another plane (Will negates).</td><td><i>Dispel magic</i></td></tr> </table><p class=sub><p><sup>1</sup> The violet effect makes the special effects of the other six colors redundant, but these six effects are included here because certain magic items can create prismatic effects one color at a time, and spell resistance might render some colors ineffective (see above).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7238"
}, {
	name: "Produce Flame",
	summary: "1d6+1/lvl damage (5)",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "0-ft",
	effect: "Flame in hand",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "Yes",
	classes: {
		"Druid": 2
	},
	description: "Flames as bright as a torch appear in your open hand. The flames harm neither you nor your equipment. <p class=sub>In addition to providing illumination, the flames can be hurled or used to touch enemies. You can strike an opponent with a melee touch attack, dealing fire damage equal to 1d6 +1 point per caster level (maximum +5). Alternatively, you can hurl the flames up to 120 feet as a thrown weapon. When doing so, you attack with a ranged touch attack (with no range penalty) and deal the same damage as with the melee attack. No sooner do you hurl the flames than a new set appears in your hand. Each attack you make reduces the remaining duration by 1 minute. If an attack reduces the remaining duration to 0 minutes or less, the spell ends after the attack resolves. <p class=sub>This spell does not function underwater.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d7e"
}, {
	name: "Programmed Image",
	summary: "Event triggered illusionary scene",
	school: "Illus",
	composition: "V, S, F (a bit of fleece and jade dust worth 25 gp)",
	time: "1 a",
	range: "Long",
	effect: "20-ft cube+1 10-ft cube/lvl",
	duration: "Till used",
	save: "Will dsblf",
	sr: "-",
	classes: {
		"Bard": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This spell functions like <i>silent image</i>, except that this spell's figment activates when a specific condition occurs. The figment includes visual, auditory, olfactory, and thermal elements, including intelligible speech. <p class=sub>You set the triggering condition (which may be a special word) when casting the spell. The event that triggers the illusion can be as general or as specific and descriptioned as desired but must be based on an audible, tactile, olfactory, or visual trigger. The trigger cannot be based on some quality not normally obvious to the senses, such as alignment. (See <i>magic mouth</i> for more descriptions about such triggers.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "28f2"
}, {
	name: "Project Image",
	summary: "Illusory double can talk, cast spells",
	school: "Illus",
	composition: "V, S, M (a small replica of you (a doll), which costs 5 gp to create)",
	time: "1 a",
	range: "Medium",
	effect: "Shadow duplicate",
	duration: "1 rnd/lvl (D)",
	save: "Will dsblf",
	sr: "-",
	classes: {
		"Bard": 7,
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "You tap energy from the Plane of Shadow to create a quasi-real, illusory version of yourself. The projected image looks, sounds, and smells like you but is intangible. The projected image mimics your actions (including speech) unless you direct it to act differently (which is a move action).<p class=sub>You can see through its eyes and hear through its ears as if you were standing where it is, and during your turn you can switch from using its senses to using your own, or back again, as a free action. While you are using its senses, your body is considered blinded and deafened. <p class=sub>If you desire, any spell you cast whose range is touch or greater can originate from the projected image instead of from you. The projected image can't cast any spells on itself except for illusion spells. The spells affect other targets normally, despite originating from the projected image. <p class=sub>Objects are affected by the projected image as if they had succeeded on their Will save. <p class=sub>You must maintain line of effect to the projected image at all times. If your line of effect is obstructed, the spell ends. If you use dimension door, teleport, plane shift, or a similar spell that breaks your line of effect, even momentarily, the spell ends",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "72d"
}, {
	name: "Protection from Arrows",
	summary: "Ranged damage reduction 10/magic absorbs 10/lvl (100)",
	school: "Abjur",
	composition: "V, S, F (a piece of shell from a tortoise or a turtle)",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 hr/lvl or till used",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "The warded creature gains resistance to ranged weapons. The subject gains damage reduction 10/magic against ranged weapons. (This spell doesn't grant you the ability to damage creatures with similar damage reduction.) Once the spell has prevented a total of 10 points of damage per caster level (maximum 100 points), it is discharged. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b8d3"
}, {
	name: "Protection from Chaos",
	summary: "+2 AC and saves vs chaotic creatures",
	school: "Abjur",
	composition: "V, S, M/DF",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 min/lvl (D)",
	save: "Will negs",
	sr: "-",
	classes: {
		"Cleric": 2,
		"Paladin": 1,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "This spell functions like <i>protection from evil</i>, except that the deflection and resistance bonuses apply to attacks from chaotic creatures, and chaotic summoned creatures cannot touch the subject.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "523"
}, {
	name: "Protection from Energy",
	summary: "Absorbs 12 energy dmg/lvl (120)",
	school: "Abjur",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "10 min/lvl or till used",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Cleric": 4,
		"Druid": 4,
		"Ranger": 2,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "<i>Protection from energy</i> grants temporary immunity to the type of energy you specify when you cast it (acid, cold, electricity, fire, or sonic). When the spell absorbs 12 points per caster level of energy damage (to a maximum of 120 points at 10th level), it is discharged. <p class=sub><i>Note</i>: <i>Protection from energy</i> overlaps (and does not stack with) <i>resist energy</i>. If a character is warded by <i>protection from energy</i> and <i>resist energy</i>, the protection spell absorbs damage until its power is exhausted.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9fc4"
}, {
	name: "Protection from Evil",
	summary: "+2 AC and saves vs evil creatures",
	school: "Abjur",
	composition: "V, S, M/DF (a little powdered silver with which you trace a 3-foot-diameter circle on the floor (or ground) around the creature to be warded)",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 min/lvl (D)",
	save: "Will negs",
	sr: "-",
	classes: {
		"Cleric": 2,
		"Paladin": 1,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "This spell wards a creature from attacks by evil creatures, from mental control, and from summoned creatures. It creates a magical barrier around the subject at a distance of 1 foot. The barrier moves with the subject and has three major effects. <p class=sub>First, the subject gains a +2 deflection bonus to AC and a +2 resistance bonus on saves. Both these bonuses apply against attacks made or effects created by evil creatures. <p class=sub>Second, the barrier blocks any attempt to possess the warded creature (by a magic jar attack, for example) or to exercise mental control over the creature (including enchantment (charm) effects and enchantment (compulsion) effects that grant the caster ongoing control over the subject, such as <i>dominate</i> person). The <i>protection</i> does not prevent such effects from targeting the protected creature, but it suppresses the effect for the duration of the <i>protection from evil</i> effect. If the <i>protection from evil</i> effect ends before the effect granting mental control does, the would-be controller would then be able to mentally command the controlled creature. Likewise, the barrier keeps out a possessing life force but does not expel one if it is in place before the spell is cast. This second effect works regardless of alignment. <p class=sub>Third, the spell prevents bodily contact by summoned creatures. This causes the natural weapon attacks of such creatures to fail and the creatures to recoil if such attacks require touching the warded creature. Good summoned creatures are immune to this effect. The protection against contact by summoned creatures ends if the warded creature makes an attack against or tries to force the barrier against the blocked creature. Spell resistance can allow a creature to overcome this protection and touch the warded creature",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5bc2"
}, {
	name: "Protection from Good",
	summary: "+2 AC and saves vs good creatures",
	school: "Abjur",
	composition: "V, S, M/DF",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 min/lvl (D)",
	save: "Will negs",
	sr: "-",
	classes: {
		"Cleric": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "This spell functions like <i>protection from evil</i>, except that the deflection and resistance bonuses apply to attacks from good creatures, and good summoned creatures cannot touch the subject.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2e77"
}, {
	name: "Protection from Law",
	summary: "+2 AC and saves vs lawful creatures",
	school: "Abjur",
	composition: "V, S, M/DF",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 min/lvl (D)",
	save: "Will negs",
	sr: "-",
	classes: {
		"Cleric": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "This spell functions like <i>protection from evil</i>, except that the deflection and resistance bonuses apply to attacks from lawful creatures, and lawful summoned creatures cannot touch the subject.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "aeec"
}, {
	name: "Protection from Spells",
	summary: "+8 resistance bonus to saves",
	school: "Abjur",
	composition: "V, S, M (a diamond of at least 500 gp value),F (one 1,000 gp diamond per creature to be granted the protection. Each subject must carry the gem for the duration of the spell. If a subject loses the gem, the spell ceases to affect him)",
	time: "1 a",
	range: "Touch",
	effect: "One creature/4lvls",
	duration: "10 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "The subject gains a +8 resistance bonus on saving throws against spells and spell-like abilities (but not against supernatural and extraordinary abilities)",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e60b"
}, {
	name: "Prying Eyes",
	summary: "Sensors sees 120-ft all around",
	school: "Div",
	composition: "V, S, M (a handful of crystal marbles)",
	time: "1 min",
	range: "1 mile",
	effect: "1d4 + 1/lvl eyes",
	duration: "1 hr/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "You create a number of semitangible, visible magical orbs (called \"eyes\") equal to 1d4 + your caster level. These eyes move out, scout around, and return as you direct them when casting the spell. Each eye can see 120 feet (normal vision only) in all directions. <p class=sub>While the individual eyes are quite fragile, they're small and difficult to spot. Each eye is a Fine construct, about the size of a small apple, that has 1 hit point, AC 18 (+8 bonus for its size), flies at a speed of 30 feet with perfect maneuverability, and has a +16 Hide modifier. It has a Spot modifier equal to your caster level (maximum +15) and is subject to illusions, darkness, fog, and any other factors that would affect your ability to receive visual information about your surroundings. An eye traveling through darkness must find its way by touch. <p class=sub>When you create the eyes, you specify instructions you want them to follow in a command of no more than twenty-five words. Any knowledge you possess is known by the eyes as well, so if you know, for example, what a typical merchant looks like, the eyes do as well. <p class=sub><i>A sample command</i>: \"Surround me at a range of four hundred feet and return if you spot any dangerous creatures.\" The phrase \"Surround me\" directs the eyes to form an equally spaced, horizontal ring at whatever range you indicate, and then move with you. As eyes return or are destroyed, the rest automatically space themselves to compensate. In the case of this sample command, an eye returns only if it spots a creature you would regard as dangerous. A \"peasant\" that is actually a shapechanged dragon wouldn't trigger an eye's return. Ten eyes can form a ring with a radius of 400 feet and between themselves see everything that crosses the ring. <p class=sub><i>Another sample command</i>: \"Spread out and search the town for Arweth. Follow him for three minutes, staying out of sight, and then return.\" The phrase \"Spread out\" directs the eyes to move away from you in all directions. In this case, each eye would separately follow Arweth for three minutes once it spots him. <p class=sub>Other commands that might be useful include having eyes form a line in a certain manner, making them move at random within a certain range, or having them follow a certain type of creature. The DM is the final judge of the suitability of your directions. <p class=sub>In order to report their findings, the eyes must return to your hand. Each replays in your mind all it has seen during its existence. It takes an eye 1 round to replay 1 hour of recorded images. After relaying its findings, an eye disappears. <p class=sub>If an eye ever gets more than 1 mile away from you, it instantly ceases to exist. However, your link with the eye is such that you won't know if the eye was destroyed because it wandered out of range or because of some other event. <p class=sub>The eyes exist for up to 1 hour per caster level or until they return to you. <i>Dispel magic</i> can destroy eyes. Roll separately for each eye caught in an area dispel. Of course, if an eye is sent into darkness, it could hit a wall or similar obstacle and destroy itself",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a9e9"
}, {
	name: "Prying Eyes, Greater",
	summary: "Sensors true seeing 120-ft all around",
	school: "Div",
	composition: "V, S, M",
	time: "1 min",
	range: "1 mile",
	effect: "1d4 + 1/lvl eyes",
	duration: "1 hr/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "This spell functions like <i>prying eyes</i>, except that the eyes can see all things as they actually are, just as if they had <i>true seeing</i> with a range of 120 feet. Thus, they can navigate darkened areas at full normal speed. Also, a greater prying eye's maximum Spot modifier is +25 instead of +15.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a2f3"
}, {
	name: "Purify Food and Drink",
	summary: "Purifies 1 cu ft/lvl of food or water",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "10-ft",
	effect: "1 cu ft/lvl",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 1,
		"Druid": 1
	},
	description: "This spell makes spoiled, rotten, poisonous, or otherwise contaminated food and water pure and suitable for eating and drinking. This spell does not prevent subsequent natural decay or spoilage. Unholy water and similar food and drink of significance is spoiled by <i>purify food and drink</i>, but the spell has no effect on creatures of any type nor upon magic potions. <p class=sub><i>Note</i>: Water weighs about 8 pounds per gallon. One cubic foot of water contains roughly 8 gallons and weighs about 60 pounds.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f2b4"
}, {
	name: "Pyrotechnics",
	summary: "Fire into blinding light or smoke",
	school: "Trans",
	composition: "V, S, M (the spell uses one <p class=sub>fire source, which is immediately extinguished. A fire so large that it exceeds a 20-foot cube is only partly extinguished. Magical fires are not extinguished, although a fire-based creature (such as a fire elemental) used as a source takes 1 point of damage per caster level)",
	time: "1 a",
	range: "Long",
	effect: "Up to 20-ft cube",
	duration: "1d4+1 rnds",
	save: "Special",
	sr: "Sp",
	classes: {
		"Bard": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "<i>Pyrotechnics</i> turns a fire into either a burst of blinding fireworks or a thick cloud of choking smoke, depending on the version you choose. <p class=sub><i>Fireworks</i>: The fireworks are a flashing, fiery, momentary burst of glowing, colored aerial lights. This effect causes creatures within 120 feet of the fire source to become blinded for 1d4+1 rounds (Will negates). These creatures must have line of sight to the fire to be affected. Spell resistance can prevent blindness. <p class=sub><i>Smoke Cloud</i>: A writhing stream of smoke billows out from the source, form-ing a choking cloud. The cloud spreads 20 feet in all directions and lasts for 1 round per caster level. All sight, even darkvision, is ineffective in or through the cloud. All within the cloud take -4 penalties to Strength and Dexterity (Fortitude negates). These effects last for 1d4+1 rounds after the cloud dissipates or after the creature leaves the area of the cloud. Spell resistance does not apply",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b6a3"
}, {
	name: "Quench",
	summary: "Extinguishes fire",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Medium",
	effect: "Up to 20-ft cube/lvl",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Druid": 4
	},
	description: "<i>Quench</i> is often used to put out forest fires and other conflagrations. It extinguishes all nonmagical fires in its area. The spell also dispels any fire spells in its area, though you must succeed on a dispel check (1d20 +1 per caster level, maximum +15) against each spell to dispel it. The DC to dispel such spells is 11 + the caster level of the fire spell. <p class=sub>Each elemental (fire) creature within the area of a <i>quench</i> spell takes 1d6 points of damage per caster level (maximum 15d6, no save allowed). <p class=sub>Alternatively, you can target the spell on a single magic item that creates or controls flame, such as a <i>wand of fireball</i> or a <i>flaming burst</i> sword. The item loses all its fire-basedmagical abilities for 1d4 hours unless it succeeds on a Will save. (Artifacts are immune to this effect.)",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "91ca"
}, {
	name: "Rage",
	summary: "+2 Str, Con, +1 Will, -2 AC",
	school: "Ench",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "One living creature/3lvls",
	duration: "Conc +1 rnd/lvl (D)",
	save: "-",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "Each affected creature gains a +2 morale bonus to Strength and Constitution, a +1 morale bonus on Will saves, and a -2 penalty to AC. The effect is otherwise identical with a barbarian's rage (see page 25), except that the subjects aren't fatigued at the end of the rage.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "75b4"
}, {
	name: "Rainbow Pattern",
	summary: "Prevent 24 HD creatures attacking",
	school: "Illus",
	composition: "V or S, M (a piece of phosphor), F A crystal prism	",
	time: "F 1 a",
	range: "Medium",
	effect: "20-ft radius",
	duration: "Conc +1 rnd/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 5,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "A glowing, rainbow-hued pattern of interweaving colors fascinates those within it. <i>Rainbow pattern</i> fascinates a maximum of 24 Hit Dice of creatures. Creatures with the fewest HD are affected first. Among creatures with equal HD, those who are closest to the spell's point of origin are affected first. An affected creature that fails its saves is fascinated by the pattern. <p class=sub>With a simple gesture (a free action), you can make the rainbow pattern move up to 30 feet per round (moving its effective point of origin). All fascinated creatures follow the moving rainbow of light, trying to get or remain within the effect. Fascinated creatures who are restrained and removed from the pattern still try to follow it. If the pattern leads its subjects into a dangerous area (through flame, off a cliff, or the like), each fascinated creature gets a second save. If the view of the lights is completely blocked (by an <i>obscuring mist</i> spell, for instance), creatures who can't see them are no longer affected. <p class=sub>The spell does not affect sightless creatures. <p class=sub><i>Verbal Component</i>: A wizard or sorcerer need not utter a sound to cast this spell, but a bard must sing, play music, or recite a rhyme as a verbal component",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c749"
}, {
	name: "Raise Dead",
	summary: "Restores life to target within 1 day/lvl",
	school: "Conj",
	composition: "V, S, M (diamonds worth a total of least 5,000 gp), DF",
	time: "1 min",
	range: "Touch",
	effect: "One dead creature",
	duration: "Instantaneous",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 6
	},
	description: "You restore life to a deceased creature. You can raise a creature that has been dead for no longer than one day per caster level. In addition, the subject's soul must be free and willing to return (see Bringing Back the Dead, page 171). If the subject's soul is not willing to return, the spell does not work; therefore, a subject that wants to return receives no saving throw. <p class=sub>Coming back from the dead is an ordeal. The subject of the spell loses one level (or 1 Hit Die) when it is raised, just as if it had lost a level or a Hit Die to an energy-draining creature. If the subject is 1st level, it loses 2 points of Constitution instead (if this would reduce its Con to 0 or less, it can't be raised). This level/HD loss or Constitution loss cannot be repaired by any means. A character who died with spells prepared has a 50% chance of losing any given spell upon being raised, in addition to losing spells for losing a level. A spellcasting creature that doesn't prepare spells (such as a sorcerer) has a 50% chance of losing any given unused spell slot as if it had been used to cast a spell, in addition to losing spell slots for losing a level. <p class=sub>A raised creature has a number of hit points equal to its current Hit Dice. Any ability scores damaged to 0 are raised to 1. Normal poison and normal disease are cured in the process of raising the subject, but magical diseases and curses are not undone. While the spell closes mortal wounds and repairs lethal damage of most kinds, the body of the creature to be raised must be whole. Otherwise, missing parts are still missing when the creature is brought back to life. None of the dead creature's equipment or possessions are affected in any way by this spell. <p class=sub>A creature who has been turned into an undead creature or killed by a death effect can't be raised by this spell. Constructs, elementals, outsiders, and undead creatures can't be raised. The spell cannot bring back a creature that has died of old age",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "afd8"
}, {
	name: "Ray of Enfeeblement",
	summary: "Reduces Str by 1d6+1/2lvls (+5)",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Ray",
	duration: "1 min/lvl",
	save: "-",
	sr: "Yes",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "A coruscating ray springs from your hand. You must succeed on a ranged touch attack to strike a target. The subject takes a penalty to Strength equal to 1d6+1 per two caster levels (maximum 1d6+5). The subject's Strength score cannot drop below 1.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "35bd"
}, {
	name: "Ray of Exhaustion",
	summary: "Target becomes exhausted",
	school: "Necro",
	composition: "V, S, M (a drop of sweat)",
	time: "1 a",
	range: "Close",
	effect: "Ray",
	duration: "1 min/lvl",
	save: "Fort part",
	sr: "Yes",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "A black ray projects from your pointing finger. You must succeed on a ranged touch attack with the ray to strike a target. The subject is immediately exhausted for the spell's duration. A successful Fortitude save means the creature is only fatigued. A character that is already fatigued instead becomes exhausted. <p class=sub>This spell has no effect on a creature that is already exhausted. Unlike normal exhaustion or fatigue, the effect ends as soon as the spell's duration expires",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3d2"
}, {
	name: "Ray of Frost",
	summary: "1d3 cold damage",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Ray",
	duration: "Instantaneous",
	save: "-",
	sr: "Yes",
	classes: {
		"Sorceror": 1,
		"Wizard": 1
	},
	description: "A ray of freezing air and ice projects from your pointing finger. You must succeed on a ranged touch attack with the ray to deal damage to a target. The ray deals 1d3 points of cold damage.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "480"
}, {
	name: "Read Magic",
	summary: "Read scrolls and spellbooks",
	school: "Div",
	composition: "V, S, F (a clear crystal or mineral prism)",
	time: "1 a",
	range: "Self",
	effect: "250 words/min",
	duration: "10 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 1,
		"Cleric": 1,
		"Druid": 1,
		"Paladin": 1,
		"Ranger": 1,
		"Sorceror": 1,
		"Wizard": 1
	},
	description: "By means of <i>read magic</i>, you can decipher magical inscriptions on objects&emdash;books, scrolls, weapons, and the like&emdash;that would otherwise be unintelligible. This deciphering does not normally invoke the magic contained in the writing, although it may do so in the case of a cursed scroll. Furthermore, once the spell is cast and you have read the magical inscription, you are thereafter able to read that particular writing without recourse to the use of read magic. You can read at the rate of one page (250 words) per minute. The spell allows you to identify a <i>glyph of warding</i> with a DC 13 Spellcraft check, a <i>greater glyph of warding</i> with a DC 16 Spellcraft check, or any <i>symbol</i> spell with a Spellcraft check (DC 10 + spell level). <p class=sub><i>Read magic</i> can be made permanent with a <i>permanency</i> spell. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "cec0"
}, {
	name: "Reduce Animal",
	summary: "Animal decreases one size category",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One willing animal",
	duration: "1 hr/lvl (D)",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Druid": 3,
		"Ranger": 3
	},
	description: "This spell functions like <i>reduce person</i>, except that it affects a single willing animal (not one with which you are engaged in combat, for instance). This decrease in size allows the animal to fit better into tight spaces, such as the typical dungeon room or subterranean passage. Reduce the damage dealt by the animal's natural attacks as shown on Table 2-3 in the <i>Dungeon Master's Guide</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1dcc"
}, {
	name: "Reduce Person",
	summary: "-2 Str, +2 Dex, +1 Att, +1 AC",
	school: "Trans",
	composition: "V, S, M (a pinch of powdered iron)",
	time: "Round",
	range: "Close",
	effect: "One humaniod",
	duration: "1 min/lvl",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "This spell causes instant diminution of a humanoid creature, halving its height, length, and width and dividing its weight by 8. This decrease changes the creature's size category to the next smaller one. The target gains a +2 size bonus to Dexterity, a -2 size penalty to Strength (to a minimum of 1), and a +1 bonus on attack rolls and AC due to its reduced size. <p class=sub>A Small humanoid creature whose size decreases to Tiny has a space of 2-1/2 feet and a natural reach of 0 feet (meaning that it must enter an opponent's square to attack). A Large humanoid creature whose size decreases to Medium has a space of 5 feet and a natural reach of 5 feet. This spell doesn't change the target's speed. <p class=sub>All equipment worn or carried by a creature is similarly reduced by the spell. Melee and projectile weapons deal less damage (see Table 2-3 in the Dungeon Master's Guide). Other magical properties are not affected by this spell. Any <i>reduced</i> item that leaves the <i>reduced</i> creature's possession (including a projectile or thrown weapon) instantly returns to its normal size. This means that thrown weapons deal their normal damage (projectiles deal damage based on the size of the weapon that fired them). <p class=sub>Multiple magical effects that reduce size do not stack, which means (among other things) that you can't use a second casting of this spell to further reduce the size of as humanoid that's still under the effect of the first casting. <p class=sub><i>Reduce person</i> counters and dispels <i>enlarge person</i>.<p class=sub><i>Reduce person</i> can be made permanent with a <i>permanency</i> spell",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5c9d"
}, {
	name: "Reduce Person, Mass",
	summary: "-2 Str, +2 Dex, +1 Att, +1 AC",
	school: "Trans",
	composition: "V, S, M",
	time: "Round",
	range: "Close",
	effect: "Humaniod/lvl in 30-ft",
	duration: "1 min/lvl",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "This spell functions like <i>reduce person</i>, except that it affects multiple creatures. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9929"
}, {
	name: "Refuge",
	summary: "Transport item's possessor to you",
	school: "Conj",
	composition: "V, S, M (the specially prepared object, whose construction requires gems worth 1,500 gp)",
	time: "1 a",
	range: "Touch",
	effect: "Item",
	duration: "Till used",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 8,
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "You create powerful magic in some specially prepared object&emdash;a statuette, a jeweled rod, a gem, or the like. This object contains the power to instantly transport its possessor across any distance within the same plane to your abode. Once the item is transmuted, you must give it willingly to a creature and at the same time inform it of a command word to be spoken when the item is used. To make use of the item, the subject speaks the command word at the same time that it rends or breaks the item (a standard action). When this is done, the individual and all objects it is wearing and carrying (to a maximum of the character's heavy load) are instantly transported to your abode. No other creatures are affected (aside from a familiar that is touching the subject). <p class=sub>You can alter the spell when casting it so that it transports you to within 10 feet of the possessor of the item when it is broken and the command word spoken. You will have a general idea of the location and situation of the item possessor at the time the refuge spell is discharged, but once you decide to alter the spell in this fashion, you have no choice whether or not to be transported",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b2c"
}, {
	name: "Regenerate",
	summary: "Target's severed limbs grow back",
	school: "Conj",
	composition: "V, S,DF",
	time: "3 rnds",
	range: "Touch",
	effect: "One living creature",
	duration: "Instantaneous",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Cleric": 8
	},
	description: "The subject's severed body members (fingers, toes, hands, feet, arms, legs, tails, or even heads of multiheaded creatures), broken bones, and ruined organs grow back. After the spell is cast, the physical regeneration is complete in 1 round if the severed members are present and touching the creature. It takes 2d10 rounds otherwise. <p class=sub><i>Regenerate</i> also cures 4d8 points of damage +1 point per caster level (maximum +35), rids the subject of exhaustion and/or fatigue, and eliminates all nonlethal damage the subject has taken. It has no effect on nonliving creatures (including undead).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4096"
}, {
	name: "Reincarnate",
	summary: "Dead subject back in random body",
	school: "Trans",
	composition: "V, S, M (rare oils and unguents worth a total of least 1,000 gp, spread over the remains), DF",
	time: "10 min",
	range: "Touch",
	effect: "Dead willing creature",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 5
	},
	description: "With this spell, you bring back a dead creature in another body, provided that its death occurred no more than one week before the casting of the spell and the subject's soul is free and willing to return (see Bringing Back the Dead, page 171). If the subject's soul is not willing to return, the spell does not work; therefore, a subject that wants to return receives no saving throw. <p class=sub>Since the dead creature is returning in a new body, all physical ills and afflictions are repaired. The condition of the remains is not a factor. So long as some small portion of the creature's body still exists, it can be reincarnated, but the portion receiving the spell must have been part of the creature's body at the time of death. The magic of the spell creates an entirely new young adult body for the soul to inhabit from the natural elements at hand. This process takes 1 hour to complete. When the body is ready, the subject is reincarnated. <p class=sub>A reincarnated creature recalls the majority of its former life and form. It retains any class abilities, feats, or skill ranks it formerly possessed. Its class, base attack bonus, base save bonuses, and hit points are unchanged. Strength, Dexterity, and Constitution scores depend partly on the new body. First eliminate the subject's racial adjustments (since it is no longer of his previous race) and then apply the adjustments found below to its remaining ability scores. The subject's level (or Hit Dice) is reduced by 1. If the subject was 1st level, its new Constitution score is reduced by 2. (If this reduction would put its Con at 0 or lower, it can't be reincarnated). This level/HD loss or Constitution loss cannot be repaired by any means. <p class=sub>It's possible for the change in the subject's ability scores to make it difficult for it to pursue its previous character class. If this is the case, the subject is well advised to become a multiclass character. <p class=sub>For a humanoid creature, the new incarnation is determined using the following table. For nonhumanoid creatures, the DM should create a similar table of creatures of the same type or simply choose the new form. <p class=sub>A creature that has been turned into an undead creature or killed by a death effect can't be returned to life by this spell. Constructs, elementals, outsiders, and undead creatures can't be reincarnated. The spell cannot bring back a creature who has died of old age. <table><tr class=header><td>d%</td><td>Incarnation</td><td>Str</td><td>Dex</td><td>Con</td></tr> <tr><td>01</td><td>Bugbear</td><td>+4</td><td>+2</td><td>+2</td></tr> <tr><td>02'13</td><td>Dwarf</td><td>+0</td><td>+0</td><td>+2</td></tr> <tr><td>14'25</td><td>Elf</td><td>+0</td><td>+2</td><td>'2</td></tr> <tr><td>26</td><td>Gnoll</td><td>+4</td><td>+0</td><td>+2</td> </tr><tr><td>27'38</td><td>Gnome</td><td>'2</td><td>+0</td><td>+2</td></tr> <tr><td>39'42</td><td>Goblin</td><td>'2</td><td>+2</td><td>+0</td></tr> <tr><td>43'52</td><td>Half-elf</td><td>+0</td><td>+0</td><td>+0</td></tr> <tr><td>53'62</td><td>Half-orc</td><td>+2</td><td>+0</td><td>+0</td></tr> <tr><td>63'74</td><td>Halfling</td><td>'2</td><td>+2</td><td>+0</td></tr> <tr><td>75'89</td><td>Human</td><td>+0</td><td>+0</td><td>+0</td></tr> <tr><td>90'93</td><td>Kobold</td><td>'4</td><td>+2</td><td>'2</td></tr> <tr><td>94</td><td>Lizardfolk</td><td>+2</td><td>+0</td><td>+2</td></tr> <tr><td>95'98</td><td>Orc</td><td>+4</td><td>+0</td><td>+0</td></tr> <tr><td>99</td><td>Troglodyte</td><td>+0</td><td>'2</td><td>+4</td></tr> <tr><td>100</td><td>Other (DM's choice)</td><td>?</td><td>?</td><td>?</td></tr> </table><p class=sub>The reincarnated creature gains all abilities associated with its new form, including forms of movement and speeds, natural armor, natural attacks, extraordinary abilities, and the like, but it doesn't automatically speak the language of the new form. Refer to the <i>Monster Manual </i>for descriptions. <p class=sub>A <i>wish</i> or a <i>miracle</i> spell can restore a reincarnated character to his or her original form",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d1f5"
}, {
	name: "Remove Blindness / Deafness",
	summary: "Cure normal or magical conditions",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Cleric": 4,
		"Paladin": 3
	},
	description: "<i>Remove blindness/deafness</i> cures blindness or deafness (your choice), whether the effect is normal or magical in nature. The spell does not restore ears or eyes that have been lost, but it repairs them if they are damaged. <p class=sub><i>Remove blindness/deafness</i> counters and dispels <i>blindness/deafness</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9771"
}, {
	name: "Remove Curse",
	summary: "Frees item or person from curse",
	school: "Abjur",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "Creature or item",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 4,
		"Cleric": 4,
		"Paladin": 3,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "<i>Remove curse</i> instantaneously removes all curses on an object or a creature. <i>Remove curse</i> does not remove the curse from a cursed shield, weapon, or suit of armor, although the spell typically enables the creature afflicted with any such cursed item to remove and get rid of it. Certain special curses may not be countered by this spell or may be countered only by a caster of a certain level or higher. <p class=sub><i>Remove curse</i> counters and dispels <i>bestow curse</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6c9e"
}, {
	name: "Remove Disease",
	summary: "Cures all diseases affecting target",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Cleric": 4,
		"Druid": 4,
		"Ranger": 3
	},
	description: "<i>Remove disease</i> cures all diseases that the subject is suffering from. The spell also kills parasites, including green slime and others. Certain special diseases may not be countered by this spell or may be countered only by a caster of a certain level or higher. <p class=sub><i>Note</i>: Since the spell's duration is instantaneous, it does not prevent reinfection after a new exposure to the same disease at a later date.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ec4a"
}, {
	name: "Remove Fear",
	summary: "+4 on fear saves",
	school: "Abjur",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "One creature +1/4lvls",
	duration: "10 min",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 2,
		"Cleric": 2
	},
	description: "You instill courage in the subject, granting it a +4 morale bonus against fear effects for 10 minutes. If the subject is under the influence of a fear effect when receiving the spell, that effect is suppressed for the duration of the spell. <p class=sub><i>Remove fear</i> counters and dispels <i>cause fear.</i> ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "91ed"
}, {
	name: "Remove Paralysis",
	summary: "Frees creats from parlys/hold/slow",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "4 creatures in 30-ft",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 3,
		"Paladin": 2
	},
	description: "You can free one or more creatures from the effects of any temporary paralysis or related magic, including a ghoul's touch or a slow spell. If the spell is cast on one creature, the paralysis is negated. If cast on two creatures, each receives another save with a +4 resistance bonus against the effect that afflicts it. If cast on three or four creatures, each receives another save with a +2 resistance bonus. <p class=sub>The spell does not restore ability scores reduced by penalties, damage, or drain.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7c96"
}, {
	name: "Repel Metal or Stone",
	summary: "Repel metal or stone at 40-ft/round",
	school: "Abjur",
	composition: "V, S",
	time: "1 a",
	range: "60-ft",
	effect: "60-ft line",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 9
	},
	description: "Like <i>repel wood</i>, this spell creates waves of invisible and intangible energy that roll forth from you. All metal or stone objects in the path of the spell are pushed away from you to the limit of the range. Fixed metal or stone objects larger than 3 inches in diameter and loose objects weighing more than 500 pounds are not affected. Anything else, including animated objects, small boulders, and creatures in metal armor, moves back. Fixed objects 3 inches in diameter or smaller bend or break, and the pieces move with the wave of energy. Objects affected by the spell are repelled at the rate of 40 feet per round. <p class=sub>Objects such as metal armor, swords, and the like are pushed back, dragging their bearers with them. Even magic items with metal components are repelled, although an <i>antimagic field</i> blocks the effects. <p class=sub>The waves of energy continue to sweep down the set path for the spell's duration. After you cast the spell, the path is set, and you can then do other things or go elsewhere without affecting the spell's power.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ccf9"
}, {
	name: "Repel Vermin",
	summary: "An invisible barrier holds back vermin.",
	school: "Abjur",
	composition: "V, S,DF",
	time: "1 a",
	range: "10 ft.",
	effect: "10-ft.-radius emanation centered on you",
	duration: "10 min./level (D)",
	save: "None or Will negates; see text",
	sr: "Yes",
	phb: "271", tags: ["pathfinder"], _id: "20c2",
	classes: {
	  "Bard": 5,
	  "Cleric": 5,
	  "Druid": 5,
	  "Ranger": 4
	},
	description: "An invisible barrier holds back vermin. A vermin with Hit Dice of less than one-third your level cannot penetrate the barrier. A vermin with Hit Dice of one-third your level or more can penetrate the barrier if it succeeds on a Will save. Even so, crossing the barrier deals the vermin 2d6 points of damage, and pressing against the barrier causes pain, which deters most vermin.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d79d"
}, {
	name: "Repel Wood",
	summary: "Pushes away wooden items",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "60-ft",
	effect: "60-ft line",
	duration: "1 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 7
	},
	description: "Waves of energy roll forth from you, moving in the direction that you determine, causing all wooden objects in the path of the spell to be pushed away from you to the limit of the range. Wooden objects larger than 3 inches in diameter that are fixed firmly are not affected, but loose objects are. Objects 3 inches in diameter or smaller that are fixed in place splinter and break, and the pieces move with the wave of energy. Objects affected by the spell are repelled at the rate of 40 feet per round. <p class=sub>Objects such as wooden shields, spears, wooden weapon shafts and hafts, and arrows and bolts are pushed back, dragging those carrying them along. (A creature being dragged by an item it is carrying can let go. A creature being dragged by a shield can loose it as a move action and drop it as a free action.) If a spear is planted (set) to prevent this forced movement, it splinters. Even magic items with wooden sections are repelled, although an <i>antimagic field</i> blocks the effects. <p class=sub>The waves of energy continue to sweep down the set path for the spell's duration. After you cast the spell, the path is set, and you can then do other things or go elsewhere without affecting the spell's power.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "131a"
}, {
	name: "Repulsion",
	summary: "Creatures cannot approach you",
	school: "Abjur",
	composition: "V, S,F/DF",
	time: "1 a",
	range: "10-ft/lvl",
	effect: "10-ft radius/lvl",
	duration: "1 rnd/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 8,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "An invisible, mobile field surrounds you and prevents creatures from approaching you. You decide how big the field is at the time of casting (to the limit your level allows). Any creature within or entering the field must attempt a save. If it fails, it becomes unable to move toward you for the duration of the spell. Repelled creatures' actions are not otherwise restricted. They can fight other creatures and can cast spells and attack you with ranged weapons. If you move closer to an affected creature, nothing happens. (The creature is not forced back.) The creature is free to make melee attacks against you if you come within reach. If a repelled creature moves away from you and then tries to turn back toward you, it cannot move any closer if it is still within the spell's area. <p class=sub><i>Arcane Focus</i>: A pair of small iron bars attached to two small canine statuettes, one black and one white, the whole array worth 50 gp.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a1d9"
}, {
	name: "Resilient Sphere",
	school: "Evoc",
	classes: {
		Sorceror: 4,
		Wizard: 4
	},
	time: "1 a",
	composition: "V, S, F (a crystal sphere)",
	range: "close (25 ft. + 5 ft./2 levels)",
	effect: "1-ft.-diameter/level sphere, centered around a creature",
	duration: "1 min/lvl (D)",
	save: "Reflex negates",
	sr: "yes",
	description: "A globe of shimmering force encloses a creature, provided the creature is small enough to fit within the diameter of the sphere. The sphere contains its subject for the spell's duration. The sphere functions as a <i>wall of force</i>, except that it can be negated by <i>dispel magic</i>. A subject inside the sphere can breathe normally. The sphere cannot be physically moved either by people outside it or by the struggles of those within.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "49fb"
}, {
	name: "Resistance",
	summary: "Target gains +1 on saves",
	school: "Abjur",
	composition: "V, S, M/DF (a miniature cloak)",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 min",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 1,
		"Cleric": 1,
		"Druid": 1,
		"Paladin": 1,
		"Sorceror": 1,
		"Wizard": 1
	},
	description: "You imbue the subject with magical energy that protects it from harm, granting it a +1 resistance bonus on saves. <i>Resistance</i> can be made permanent with a <i>permanency</i> spell",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "692e"
}, {
	name: "Resist Energy",
	summary: "Ignores 10 energy dmg/rnd",
	school: "Abjur",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "10 min/lvl",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Cleric": 3,
		"Druid": 3,
		"Paladin": 2,
		"Ranger": 1,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "This abjuration grants a creature limited protection from damage of whichever one of five energy types you select: acid, cold, electricity, fire, or sonic. The subject gains energy resistance 10 against the energy type chosen, meaning that each time the creature is subjected to such damage (whether from a natural or magical source), that damage is reduced by 10 points before being applied to the creature's hit points. The value of the energy resistance granted increases to 20 points at 7th level and to a maximum of 30 points at 11th level. The spell protects the recipient's equipment as well. <p class=sub><i>Resist energy</i> absorbs only damage. The subject could still suffer unfortunate side effects, such as drowning in acid (since drowning damage comes from lack of oxygen) or becoming encased in ice. <p class=sub><i>Note</i>: <i>Resist energy</i> overlaps (and does not stack with) <i>protection from energy</i>. If a character is warded by <i>protection from energy</i> and <i>resist energy</i>, the <i>protection</i> spell absorbs damage until its power is exhausted.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "50c3"
}, {
	name: "Restoration",
	summary: "Restores ability, neg lvls, one exp lvl",
	school: "Conj",
	composition: "V, S, M (diamond dust worth 100 gp that is sprinkled over the target)",
	time: "3 rnds",
	range: "Touch",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 5,
		"Paladin": 4
	},
	description: "This spell functions like <i>lesser restoration</i>, except that it also dispels negative levels and restores one experience level to a creature who has had a level drained. The drained level is restored only if the time since the creature lost the level is equal to or less than one day per caster level. Thus, if a 10th-level character has been struck by a wight and drained to 9th level, <i>restoration</i> brings the character up to exactly the minimum number of experience points necessary to restore him to 10th level (45,000 XP), gaining him an additional Hit Die and level functions accordingly. <p class=sub><i>Restoration</i> cures all temporary ability damage, and it restores all points permanently drained from a single ability score (your choice if more than one is drained). It also eliminates any fatigue or exhaustion suffered by the target. <p class=sub><i>Restoration</i> does not restore levels or Constitution points lost due to death",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "91c5"
}, {
	name: "Restoration, Greater",
	summary: "Restores ability, neg lvls, all exp lvls",
	school: "Conj",
	composition: "V, S,XP",
	time: "10 min",
	range: "Touch",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 8
	},
	description: "This spell functions like <i>lesser restoration</i>, except that it dispels all negative levels afflicting the healed creature. This effect also reverses level drains by a force or creature, restoring the creature to the highest level it had previously attained. The drained levels are restored only if the time since the creature lost the level is no more than one week per caster level. <p class=sub><i>Greater restoration</i> also dispels all magical effects penalizing the creature's abilities, cures all temporary ability damage, and restores all points permanently drained from all ability scores. It also eliminates fatigue and exhaustion, and removes all forms of insanity, <i>confusion</i>, and similar mental effects. <i>Greater restoration</i> does not restore levels or Constitution points lost due to death. <p class=sub><i>XP Cost</i>: 500 XP.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3078"
}, {
	name: "Restoration, Lesser",
	summary: "Restores ability scores",
	school: "Conj",
	composition: "V, S, M (a sprinkle of holy water and diamonds worth a total of at least 10,000 gp)",
	time: "3 rnds",
	range: "Touch",
	effect: "One creature",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 3,
		"Druid": 3,
		"Paladin": 1
	},
	description: "This spell functions like raise dead, except that you are able to restore life and complete strength to any deceased creature. The condition of the remains is not a factor. So long as some small portion of the creature's body still exists, it can be resurrected, but the portion receiving the spell must have been part of the creature's body at the time of death. (The remains of a creature hit by a <i>disintegrate</i> spell count as a small portion of its body.) The creature can have been dead no longer than 10 years per caster level. <p class=sub>Upon completion of the spell, the creature is immediately restored to full hit points, vigor, and health, with no loss of prepared spells. However, the subject loses one level, or 2 points of Constitution if the subject was 1st level. (If this reduction would bring its Con to 0 or lower, it can't be resurrected). This level loss or Constitution loss cannot be repaired by any means. <p class=sub>You can resurrect someone killed by a death effect or someone who has been turned into an undead creature and then destroyed. You cannot resurrect someone who has died of old age. Constructs, elementals, outsiders, and undead creatures can't be resurrected",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "975"
}, {
	name: "Resurrection",
	summary: "Restores life to target",
	school: "Conj",
	composition: "V, S, M,DF",
	time: "10 min",
	range: "Touch",
	effect: "One dead creature",
	duration: "Instantaneous",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 8
	},
	description: "This spell functions like <i>raise dead</i>, except that you are able to restore life and complete strength to any deceased creature. The condition of the remains is not a factor. So long as some small portion of the creature's body still exists, it can be resurrected, but the portion receiving the spell must have been part of the creature's body at the time of death. (The remains of a creature hit by a <i>disintegrate</i> spell count as a small portion of its body.) The creature can have been dead no longer than 10 years per caster level. <p class=sub>Upon completion of the spell, the creature is immediately restored to full hit points, vigor, and health, with no loss of prepared spells. However, the subject loses one level, or 2 points of Constitution if the subject was 1st level. (If this reduction would bring its Con to 0 or lower, it can't be resurrected). This level loss or Constitution loss cannot be repaired by any means. <p class=sub>You can resurrect someone killed by a death effect or someone who has been turned into an undead creature and then destroyed. You cannot resurrect someone who has died of old age. Constructs, elementals, outsiders, and undead creatures can't be resurrected.<p class=sub><i>Material Component</i>: A sprinkle of holy water and diamonds worth a total of at least 10,000 gp.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9c2c"
}, {
	name: "Reverse Gravity",
	summary: "Items and creatures fall upward",
	school: "Trans",
	composition: "V, S, M/DF (a lodestone and iron filings)",
	time: "1 a",
	range: "Medium",
	effect: "10-ft cube/2 lvls",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "This spell reverses gravity in an area, causing all unattached objects and creatures within that area to fall upward and reach the top of the area in 1 round. If some solid object (such as a ceiling) is encountered in this fall, falling objects and creatures strike it in the same manner as they would during a normal downward fall. If an object or creature reaches the top of the area without striking anything, it remains there, oscillating slightly, until the spell ends. At the end of the spell duration, affected objects and creatures fall downward. <p class=sub>Provided it has something to hold onto, a creature caught in the area can attempt a Reflex save to secure itself when the spell strikes. Creatures who can fly or levitate can keep themselves from falling",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4eb6"
}, {
	name: "Righteous Might",
	summary: "Your size increases, Str +4 etc.",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 6
	},
	description: "Your height immediately doubles, and your weight increases by a factor of eight. This increase changes your size category to the next larger one, and you gain a +8 size bonus to Strength and a +4 size bonus to Constitution. You gain a +4 enhancement bonus to your natural armor. You gain damage reduction 5/evil (if you normally channel positive energy) or damage reduction 5/good (if you normally channel negative energy). At 12th level this damage reduction becomes 10/evil or 10/good, and at 15th level it becomes 15/evil or 15/good (the maximum). Your size modifier for AC and attacks changes as appropriate to your new size category (if your original size was Diminutive, Tiny, Small, Medium, or Large, the modifier decreases by 1; otherwise see Size Modifier, page 134). <p class=sub><i>Use Table 8-4</i>: Creature Size and Scale to determine your new space and reach. This spell doesn't change your speed. <p class=sub>If insufficient room is available for the desired growth, you attain the maximum possible size and may make a Strength check (using your increased Strength) to burst any enclosures in the process. If you fail, you are constrained without harm by the materials enclosing you&emdash;the spell cannot crush you by increasing your size. <p class=sub>All equipment you wear or carry is similarly enlarged by the spell. Melee and projectile weapons deal more damage (see Table 2-2 in the <i>Dungeon Master's Guide</i>). Other magical properties are not affected by this spell. Any enlarged item that leaves your possession (including a projectile or thrown weapon) instantly returns to its normal size. This means that thrown weapons deal their normal damage (projectiles deal damage based on the size of the weapon that fired them). <p class=sub>Multiple magical effects that increase size do not stack, which means (among other things) that you can't use a second casting of this spell to further increase your size while you are still under the effect of the first casting.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6342"
}, {
	name: "Rope Trick",
	summary: "Extradimensioal space for 8 creatures",
	school: "Trans",
	composition: "V, S, M (powdered corn extract and a twisted loop of parchment)",
	time: "1 a",
	range: "Touch",
	effect: "Rope",
	duration: "1 hr/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "When this spell is cast upon a piece of rope from 5 to 30 feet long, one end of the rope rises into the air until the whole rope hangs perpendicular to the ground, as if affixed at the upper end. The upper end is, in fact, fastened to an extradimensional space that is outside the multiverse of extradimensional spaces (\"planes\"). Creatures in the extradimensional space are hidden, beyond the reach of spells (including divinations), unless those spells work across planes. The space holds as many as eight creatures (of any size). Creatures in the space can pull the rope up into the space, making the rope \"disappear.\" In that case, the rope counts as one of the eight creatures that can fit in the space. The rope can support up to 16,000 pounds. A weight greater than that can pull the rope free. <p class=sub>Spells cannot be cast across the extra-dimensional interface, nor can area effects cross it. Those in the extradimensional space can see out of it as if a 3-foot-by- 5-foot window were centered on the rope. The window is present on the Material Plane, but it's invisible, and even creatures that can see the window can't see through it. Anything inside the extradimensional space drops out when the spell ends. The rope can be climbed by only one person at a time. The <i>rope trick</i> spell enables climbers to reach a normal place if they do not climb all the way to the extradimensional space. <p class=sub><i>Note</i>: It is hazardous to create an extradimensional space within an existing extradimensional space or to take an extradimensional space into an existing one",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3ba9"
}, {
	name: "Rusting Grasp",
	summary: "Your touch corrodes iron and alloys",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "Ferrous obj/creat",
	duration: "1 rnd/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 5
	},
	description: "Any iron or iron alloy item you touch becomes instantaneously rusted, pitted, and worthless, effectively destroyed. If the item is so large that it cannot fit within a 3-foot radius (a large iron door or a wall of iron), a 3-foot-radius volume of the metal is rusted and destroyed. Magic items made of metal are immune to this spell. <p class=sub>You may employ rusting grasp in combat with a successful melee touch attack. Rusting grasp used in this way instantaneously destroys 1d6 points of Armor Class gained from metal armor (to the maximum amount of protection the armor offered) through corrosion. For example, full plate armor (AC +8) could be reduced to +7 or as low as +2 in protection, depending on the die roll. <p class=sub>Weapons in use by an opponent targeted by the spell are more difficult to grasp. You must succeed on a melee touch attack against the weapon. A metal weapon that is hit is destroyed. <p class=sub><i>Note</i>: Striking at an opponent's weapon provokes an attack of opportunity. Also, you must touch the weapon and not the other way around. <p class=sub>Against a ferrous creature, <i>rusting grasp</i> instantaneously deals 3d6 points of damage +1 per caster level (maximum +15) per successful attack. The spell lasts for 1 round per level, and you can make one melee touch attack per round.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f79a"
}, {
	name: "Sanctuary",
	summary: "Opponents cannot attack you",
	school: "Abjur",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 rnd/lvl",
	save: "Will negs",
	sr: "-",
	classes: {
		"Cleric": 2
	},
	description: "Any opponent attempting to strike or otherwise directly attack the warded creature, even with a targeted spell, must attempt a Will save. If the save succeeds, the opponent can attack normally and is unaffected by that casting of the spell. If the save fails, the opponent can't follow through with the attack, that part of its action is lost, and it can't directly attack the warded creature for the duration of the spell. Those not attempting to attack the subject remain unaffected. This spell does not prevent the warded creature from being attacked or affected by area or effect spells. The subject cannot attack without breaking the spell but may use nonattack spells or otherwise act. This allows a warded cleric to heal wounds, for example, or to cast a <i>bless</i> spell, perform an <i>augury</i>, summon creatures, and so on.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2b94"
}, {
	name: "Scare",
	summary: "Panics creatures up to 5 HD",
	school: "Necro",
	composition: "V, S, M (a bit of bone from an undead skeleton, zombie, ghoul, ghast, or mummy)",
	time: "1 a",
	range: "Medium",
	effect: "One living creature/3lvls in 30-ft",
	duration: "1 rnd/lvl",
	save: "Will part",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "This spell functions like <i>cause fear</i>, except that it causes all targeted creatures of less than 6 HD to become frightened",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5590"

}, {
	name: "Scintillating Pattern",
	summary: "Stun, confuse lvl in HD of creatures",
	school: "Illus",
	composition: "V, S, M (a small crystal prism)",
	time: "1 a",
	range: "Close",
	effect: "20-ft radius",
	duration: "Conc +2 rounds",
	save: "-",
	sr: "Yes",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "A twisting pattern of discordant, coruscating colors weaves through the air, affecting creatures within it. The spell affects a total number of Hit Dice of creatures equal to your caster level (maximum 20). Creatures with the fewest HD are affected first; and, among creatures with equal HD, those who are closest to the spell's point of origin are affected first. Hit Dice that are not sufficient to affect a creature are wasted. The spell affects each subject according to its Hit Dice. <p class=sub><i>6 or less</i>: Unconscious for 1d4 rounds, then stunned for 1d4 rounds, and then confused for 1d4 rounds. (Treat an unconscious result as stunned for nonliving creatures.) <p class=sub><i>7 to 12</i>: Stunned for 1d4 rounds, then confused for 1d4 rounds. <p class=sub><i>13 or more</i>: Confused for 1d4 rounds. <p class=sub>Sightless creatures are not affected by scintillating pattern",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "380e"

}, {
	name: "Scorching Ray",
	summary: "Ray +1/4lvls, 4d6 fire damage",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Rays",
	duration: "Instantaneous",
	save: "-",
	sr: "Yes",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "You blast your enemies with fiery rays. You may fire one ray, plus one additional ray for every four levels beyond 3rd (to a maximum of three rays at 11th level). Each ray requires a ranged touch attack to hit and deals 4d6 points of fire damage. The rays may be fired at the same or different targets, but all bolts must be aimed at targets within 30 feet of each other and fired simultaneously.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a966"
}, {
	name: "Screen",
	summary: "Hides area from vision, scrying",
	school: "Illus",
	composition: "V, S",
	time: "10 min",
	range: "Close",
	effect: "30-ft cube/lvl",
	duration: "1 day",
	save: "Will dsblf",
	sr: "-",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "This spell combines several elements to create a powerful protection from scrying and direct observation. When casting the spell, you dictate what will and will not be observed in the spell's area. The illusion created must be stated in general terms. Thus, you could specify the illusion of yourself and another character playing chess for the duration of the spell, but you could not have the illusory chess players take a break, make dinner, and then resume their game. You could have a crossroads appear quiet and empty even while an army is actually passing through the area. You could specify that no one be seen (including passing strangers), that your troops be undetected, or even that every fifth person or unit should be visible. Once the conditions are set, they cannot be changed. <p class=sub>Attempts to scry the area automatically detect the image stated by you with no save allowed. Sight and sound are appropriate to the illusion created. A band of people standing in a meadow could be concealed as an empty meadow with birds chirping, for instance. <p class=sub>Direct observation may allow a save (as per a normal illusion), if there is cause to disbelieve what is seen. Certainly onlookers in the area would become suspicious if a marching army disappeared at one point to reappear at another. Even entering the area does not cancel the illusion or necessarily allow a save, assuming that hidden beings take care to stay out of the way of those affected by the illusion.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "26b0"
}, {
	name: "Scrying",
	summary: "Spies on target from a distance",
	school: "Div",
	composition: "V, S, M/DF (a pool of water), F (a silver mirror worth 1,000 gp)",
	time: "1 hr",
	range: "Special",
	effect: "Magical sensor",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 4,
		"Cleric": 6,
		"Druid": 5,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "You can see and hear some creature, which may be at any distance. If the subject succeeds on a Will save, the scrying attempt simply fails. The difficulty of the save depends on how well you know the subject and what sort of physical connection (if any) you have to that creature. Furthermore, if the subject is on another plane, it gets a +5 bonus on its Will save. <table><tr class=header><td>Knowledge</td><td>Will Save Modifier</td></tr> <tr><td>None<sup>1</sup></td><td>+10</td></tr> <tr><td>Secondhand (you have heard of the subject)</td><td>+5</td></tr> <tr><td>Firsthand (you have met the subject)</td><td>+0</td></tr> <tr><td>Familiar (you know the subject well)</td><td>-5</td></tr> </table><p class=sub><p><sup>1</sup> You must have some sort of connection to a creature you have no knowledge of. <table> <tr class=header><td>Connection</td><td>Will Save Modifier</td></tr> <tr><td>Likeness or picture</td><td>-2</td></tr> <tr><td>Possession or garment</td><td>-4</td></tr> <tr><td>Body part, lock of hair, bit of nail, etc.</td><td>-10</td></tr> </table> <p class=sub>If the save fails, you can see and hear the subject and the subject's immediate surroundings (approximately 10 feet in all directions of the subject). If the subjectmoves, the sensor follows at a speed of up to 150 feet. <p class=sub><i>As with all divination (scrying) spells, the sensor has your full visual acuity, including any magical effects. In addition, the following spells have a 5% chance per caster level of operating through the sensor</i>: <i>detect chaos, detect evil, detect good, detect law, detect magic,</i> and <i>message</i>. <p class=sub>If the save succeeds, you can't attempt to scry on that subject again for at least 24 hours",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e85a"
}, {
	name: "Scrying, Greater",
	summary: "Spies on target from a distance",
	school: "Div",
	composition: "V, S, M/DF,F",
	time: "1 a",
	range: "Special",
	effect: "Magical sensor",
	duration: "1 hr/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 7,
		"Cleric": 8,
		"Druid": 8,
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "This spell functions like <i>scrying</i>, except as noted above. Additionally, all of the following spells function reliably through the sensor: <i>detect chaos, detect evil, detect good, detect law, detect magic, message, read magic,</i> and <i>tongues</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "38a3"
}, {
	name: "Sculpt Sound",
	summary: "Creates new or masking sounds",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "One creat or obj/lvl",
	duration: "1 hr/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 4
	},
	description: "You change the sounds that creatures or objects make. You can create sounds where none exist (such as making trees sing), deaden sounds (such as making a party of adventurers silent), or transform sounds into other sounds (such as making a caster's voice sound like a pig snorting). All affected creatures or objects must be transmuted in the same way. Once the transmutation is made, you cannot change it. <p class=sub>You can change the qualities of sounds but cannot create words with which you are unfamiliar yourself. For instance, you can't change your voice so that it sounds as though you are giving the command word to activate a magic item unless you know that command word. <p class=sub>A spellcaster whose voice is changed dramatically (such as into that of the aforementioned snorting pig) is unable to cast spells with verbal components.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1c39"
}, {
	name: "Searing Light",
	summary: "Dmg 1d8/2 lvls,undead 1d6/1d8/lvl",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "Ray",
	duration: "Instantaneous",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 4
	},
	description: "Focusing divine power like a ray of the sun, you project a blast of light from your open palm. You must succeed on a ranged touch attack to strike your target. A creature struck by this ray of light takes 1d8 points of damage per two caster levels (maximum 5d8). An undead creature takes 1d6 points of damage per caster level (maximum 10d6), and an undead creature particularly vulnerable to bright light, such as a vampire, takes 1d8 points of damage per caster level (maximum 10d8). A construct or inanimate object takes only 1d6 points of damage per two caster levels (maximum 5d6).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "af5c"
}, {
	name: "Secret Chest",
	school: "Conj (summoning)",
	classes: {
		Sorceror: 5,
		Wizard: 5
	},
	time: "10 minutes",
	composition: "V, S, F (the chest and its replica)",
	range: "see text",
	effect: "one chest and up to 1 cu. ft. of goods/caster level",
	duration: "60 days or until discharged",
	save: "-",
	sr: "no",
	description: "You hide a chest on the Ethereal Plane for as long as 60 days and can retrieve it at will. The chest can contain up to 1 cubic foot of material per caster level (regardless of the chest&emdash;s actual size, which is about 3 feet by 2 feet by 2 feet). If any living creatures are in the chest, there is a 75% chance that the spell simply fails. Once the chest is hidden, you can retrieve it by concentrating (a standard action), and it appears next to you.<p class=sub>The chest must be exceptionally well crafted and expensive, constructed for you by master crafters. The cost of such a chest is never less than 5,000 gp. Once it is constructed, you must make a tiny replica (of the same materials and perfect in every detail) so that the miniature of the chest appears to be a perfect copy. (The replica costs 50 gp.) The chests are nonmagical and can be fitted with locks, wards, and so on, just as any normal chest can be.<p class=sub>To hide the chest, you cast the spell while touching both the chest and the replica. The chest vanishes into the Ethereal Plane. You need the replica to recall the chest. After 60 days, there is a cumulative chance of 5% per day that the chest is irretrievably lost. If the miniature of the chest is lost or destroyed, there is no way, even with a <i>wish</i> spell, that the large chest can be summoned back, although an extraplanar expedition might be mounted to find it.<p class=sub>Living things in the chest eat, sleep, and age normally, and they die if they run out of food, air, water, or whatever they need to survive.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1e59"
}, {
	name: "Secret Page",
	summary: "Changes page to hide real content",
	school: "Trans",
	composition: "V, S, M ((powdered herring scales and will-o'-wisp essence)",
	time: "10 min",
	range: "Touch",
	effect: "Up to 3 sq ft",
	duration: "Permanent",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "<i>Secret page</i> alters the contents of a page so that they appear to be something entirely different. Thus, a map can be changed to become a treatise on burnishing ebony walking sticks. The text of a spell can be changed to show a ledger page or even another spell. <i>Explosive runes</i> or <i>sepia snake</i> sigil can be cast upon the <i>secret page</i>. <p class=sub>A <i>comprehend languages</i> spell alone cannot reveal a <i>secret page</i>'s contents. You are able to reveal the original contents by speaking a special word. You can then peruse the actual page, and return it to its secret page form at will. You can also remove the spell by double repetition of the special word. A <i>detect magic</i> spell reveals dim magic on the page in question but does not reveal its true contents. <i>True seeing</i> reveals the presence of the hidden material but does not reveal the contents unless cast in combination with comprehend languages. A <i>secret page</i> spell can be dispelled, and the hidden writings can be destroyed by <p class=sub>means of an <i>erase</i> spell",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5521"
}, {
	name: "Secure Shelter",
	school: "Conj (creation)",
	classes: {
		Bard: 4, 
		Sorceror: 4,
		Wizard: 4
	},              
	time: "10 minutes",
	composition: "V, S, M (a chip of stone, sand, a drop of water, and a wood splinter)",
	range: "close (25 ft. + 5 ft./2 levels)",
	effect: "20-ft.-square structure",
	duration: "2 hours/lvl (D)",
	save: "-",
	sr: "no",
	description: "You conjure a sturdy cottage or lodge made of material that is common in the area where the spell is cast. The floor is level, clean, and dry. The lodging resembles a normal cottage, with a sturdy door, two shuttered windows, and a small fireplace.<p class=sub>The shelter must be heated as a normal dwelling, and extreme heat adversely affects it and its occupants. The dwelling does, however, provide considerable security otherwise&emdash;it is as strong as a normal stone building, regardless of its material composition. The dwelling resists flames and fire as if it were stone. It is impervious to normal missiles (but not the sort cast by siege engines or giants).<p class=sub>The door, shutters, and even chimney are secure against intrusion, the former two being secured with <i>arcane lock</i> and the latter by an iron grate at the top and a narrow flue. In addition, these three areas are protected by an alarm spell. Finally, an <i>unseen servant</i> is conjured to provide service to you for the duration of the shelter.<p class=sub>The <i>secure shelter</i> contains crude furnishings&emdash;eight bunks, a trestle table, eight stools, and a writing desk.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "dbd5"
}, {
	name: "See Invisibility",
	summary: "See invisible creatures or items",
	school: "Div",
	composition: "V, S, M (a pinch of talc and a small sprinkling of powdered silver)",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "10 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 4,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "You can see any objects or beings that are invisible within your range of vision, as well as any that are ethereal, as if they were normally visible. Such creatures are visible to you as translucent shapes, allowing you easily to discern the difference between visible, invisible, and ethereal creatures. <p class=sub>The spell does not reveal the method used to obtain invisibility. It does not reveal illusions or enable you to see through opaque objects. It does not reveal creatures who are simply hiding, concealed, or otherwise hard to see. <p class=sub><i>See invisibility</i> can be made permanent with a <i>permanency</i> spell",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4118"
}, {
	name: "Seeming",
	summary: "Change appearance of creatures",
	school: "Illus",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "One creature/2 lvls",
	duration: "12 hr",
	save: "Special",
	sr: "Sp",
	classes: {
		"Bard": 6,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "This spell functions like <i>disguise self</i>, except that you can change the appearance of other people as well. Affected creatures resume their normal appearances if slain. <p class=sub>Unwilling targets can negate the spell's effect on them by making Will saves or with spell resistance.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4725"
}, {
	name: "Sending",
	summary: "Delivers short message anywhere",
	school: "Evoc",
	composition: "V, S, M/DF (a short piece of fine copper wire)",
	time: "10 min",
	range: "Special",
	effect: "One creature",
	duration: "1 round",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 5,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "You contact a particular creature with which you are familiar and send a short message of twenty-five words or less to the subject. The subject recognizes you if it knows you. It can answer in like manner immediately. A creature with an Intelligence score as low as 1 can understand the sending, though the subject's ability to react is limited as normal by its Intelligence score. Even if the <i>sending</i> is received, the subject is not obligated to act upon it in any manner. <p class=sub>If the creature in question is not on the same plane of existence as you are, there is a 5% chance that the <i>sending</i> does not arrive. (Local conditions on other planes may worsen this chance considerably, at the option of the DM.)",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "fde3"
}, {
	name: "Sepia Snake Sigil",
	summary: "Immobilizes reader for 1d4+1day/lvl",
	school: "Conj",
	composition: "V, S, M (500 gp worth of powdered amber, a scale from any snake, and a pinch of mushroom spores)",
	time: "10 min",
	range: "Touch",
	effect: "Book or written work",
	duration: "Till used",
	save: "Ref negs",
	sr: "-",
	classes: {
		"Bard": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "When you cast <i>sepia snake sigil</i>, a small symbol appears in the text of one written work such as a book, scroll, or map. The text containing the symbol must be at least twenty-five words long. When anyone reads the text containing the symbol, the <i>sepia snake</i> springs into being and strikes the reader, provided there is line of effect between the symbol and the reader. Simply seeing the enspelled text is not sufficient to trigger the spell; the subject must deliberately read it. The target is entitled to a save to evade the snake's strike. If it succeeds, the sepia snake dissipates in a flash of brown light accompanied by a puff of dun-colored smoke and a loud noise. If the target fails its save, it is engulfed in a shimmering amber field of force and immobilized until released, either at your command or when 1d4 days + one day per caster level have elapsed. <p class=sub>While trapped in the amber field of force, the subject does not age, breathe, grow hungry, sleep, or regain spells. It is preserved in a state of suspended animation, unaware of its surroundings. It can be damaged by outside forces (and perhaps even killed), since the field provides no protection against physical injury. However, a dying subject does not lose hit points or become stable until the spell ends. <p class=sub>The hidden sigil cannot be detected by normal observation, and <i>detect magic</i> reveals only that the entire text is magical. A <i>dispel magic</i> can remove the sigil. An <i>erase</i> spell destroys the entire page of text. <i>Sepia snake sigil</i> can be cast in combination with other spells that hide or garble text, such as <i>secret page</i>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c544"
}, {
	name: "Sequester",
	summary: "Target invisible to sight & scrying",
	school: "Abjur",
	composition: "V, S, M (a basilisk eyelash, gum arabic, and a dram of whitewash)",
	time: "1 a",
	range: "Touch",
	effect: "Willing creature or item",
	duration: "1 day/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "When cast, this spell not only prevents divination spells from working to detect or locate the creature or object affected by sequester, it also renders the affected creature or object invisible to any form of sight or seeing (as the <i>invisibility</i> spell). Thus, sequester can mask a secret door, a treasure vault, or anything similar. The spell does not prevent the subject from being discovered through tactile means or through the use of devices (such as a <i>robe of eyes</i> or a <i>gem of seeing</i>). Creatures affected by <i>sequester</i> become comatose and are effectively in a state of suspended animation until the spell wears off or is dispelled. <p class=sub><i>Note</i>: The Will save prevents an attended or magical object from being <i>sequestered</i>. There is no save to see the <i>sequestered</i> creature or object or to detect it with a divination spell",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b09"
}, {
	name: "Shades",
	summary: "Mimics conjuring up to 8th level",
	school: "Illus",
	composition: "V, S",
	time: "1 a",
	range: "Special",
	effect: "Special",
	duration: "Special",
	save: "Special",
	sr: "Yes",
	classes: {
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "This spell functions like <i>shadow conjuration</i>, except that it mimics sorcerer and wizard conjuration spells of 8th level or lower. The illusory conjurations created deal four-fifths (80%) damage to nonbelievers, and nondamaging effects are 80% likely to work against nonbelievers.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "497"
}, {
	name: "Shadow Conjuration",
	summary: "Mimics conjuring up to 3rd level",
	school: "Illus",
	composition: "V, S",
	time: "1 a",
	range: "Special",
	effect: "Special",
	duration: "Special",
	save: "Special",
	sr: "Yes",
	classes: {
		"Bard": 5,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "You use material from the Plane of Shadow to shape quasi-real illusions of one or more creatures, objects, or forces. Shadow conjuration can mimic any sorcerer or wizard conjuration (summoning) or conjuration (creation) spell of 3rd level or lower. <i>Shadow conjurations</i> are actually one-fifth (20%) as strong as the real things, though creatures who believe the <i>shadow conjurations</i> to be real are affected by them at full strength. <p class=sub>Any creature that interacts with the conjured object, force, or creature can make a Will save to recognize its true nature. <p class=sub>Spells that deal damage, such as <i>Melf's acid arrow</i>, have normal effects unless the affected creature succeeds on a Will save. Each disbelieving creature takes only one-fifth (20%) damage from the attack. If the disbelieved attack has a special effect other than damage, that effect is only 20% likely to occur. Regardless of the result of the save to disbelieve, an affected creature is also allowed any save that the spell being simulated allows, but the save DC is set according to <i>shadow conjuration</i>'s level (5th) rather than the spell's normal level. In addition, any effect created by <i>shadow conjuration</i> allows spell resistance, even if the spell it is simulating does not. <p class=sub>Shadow objects or substances, such as <i>obscuring mist</i>, have normal effects except against those who disbelieve them. Against disbelievers, they are 20% likely to work. <p class=sub>A shadow creature has one-fifth the hit points of a normal creature of its kind (regardless of whether it's recognized as shadowy). It deals normal damage and has all normal abilities and weaknesses. Against a creature that recognizes it as a shadow creature, however, the shadow creature's damage is one-fifth (20%) normal, and all special abilities that do not deal lethal damage are only 20% likely to work. (Roll for each use and each affected character separately.) Furthermore, the shadow creature's AC bonuses are one-fifth as large (so a +7 bonus resulting in AC 17 would change to a +1 total bonus for a new AC of 11). <p class=sub>A creature that succeeds on its save sees the <i>shadow conjurations</i> as transparent images superimposed on vague, shadowy forms. <p class=sub>Objects automatically succeed on their Will saves against this spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c58d"
}, {
	name: "Shadow Conjuration, Greater",
	summary: "Mimics conjuring up to 6th level",
	school: "Illus",
	composition: "V, S",
	time: "1 a",
	range: "Special",
	effect: "Special",
	duration: "Special",
	save: "Special",
	sr: "Yes",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "This spell functions like <i>shadow conjuration</i>, except that it can duplicate any sorcerer or wizard conjuration (summoning) or conjuration (creation) spell of 6th level or lower. The illusory conjurations created deal three-fifths (60%) damage to non-believers, and nondamaging effects are 60% likely to work against nonbelievers.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "bb87"
}, {
	name: "Shadow Evocation",
	summary: "Mimics evocation up to 4th level",
	school: "Illus",
	composition: "V, S",
	time: "1 a",
	range: "Special",
	effect: "Special",
	duration: "Special",
	save: "Special",
	sr: "Yes",
	classes: {
		"Bard": 6,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "You tap energy from the Plane of Shadow to cast a quasi-real, illusory version of a sorcerer or wizard evocation spell of 4th level or lower. (For a spell with more than one level, use the best one applicable to you.) <p class=sub>Spells that deal damage, such as <i>lightning bolt</i>, have normal effects unless an affected creature succeeds on a Will save. Each disbelieving creature takes only one-fifth damage from the attack. If the disbelieved attack has a special effect other than damage, that effect is one-fifth as strong (if applicable) or only 20% likely to occur. If recognized as a <i>shadow evocation</i>, a damaging spell deals only one-fifth (20%) damage. Regardless of the result of the save to disbelieve, an affected creature is also allowed any save (or spell resistance) that the spell being simulated allows, but the save DC is set according to <i>shadow evocation</i>'s level (5th) rather than the spell's normal level. <p class=sub>Nondamaging effects, such as <i>gust of wind</i>, have normal effects except against those who disbelieve them. Against disbelievers, they have no effect. <p class=sub>Objects automatically succeed on their Will saves against this spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3eab"
}, {
	name: "Shadow Evocation, Greater",
	summary: "Mimics evocation up to 7th level",
	school: "Illus",
	composition: "V, S",
	time: "1 a",
	range: "Special",
	effect: "Special",
	duration: "Special",
	save: "Special",
	sr: "Yes",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "This spell functions like <i>shadow evocation</i>, except that it enables you to create partially real, illusory versions of sorcerer or wizard evocation spells of 7th level or lower. If recognized as a <i>greater shadow evocation</i>, a damaging spell deals only three-fifths (60%) damage.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2b8d"
}, {
	name: "Shadow Walk",
	summary: "Step into shadow to travel rapidly",
	school: "Illus",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature/level",
	duration: "1 hr/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 6,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "To use the <i>shadow walk</i> spell, you must be in an area of shadowy illumination. You and any creature you touch are then transported along a coiling path of shadowstuff to the edge of the Material Plane where it borders the Plane of Shadow. The effect is largely illusory, but the path is quasi-real. You can take more than one creature along with you (subject to your level limit), but all must be touching each other. <p class=sub>In the region of shadow, you move at a rate of 50 miles per hour, moving normally on the borders of the Plane of Shadow but much more rapidly relative to the Material Plane. Thus, you can use this spell to travel rapidly by stepping onto the Plane of Shadow, moving the desired distance, and then stepping back onto the Material Plane. <p class=sub>Because of the blurring of reality between the Plane of Shadow and the Material Plane, you can't make out descriptions of the terrain or areas you pass over during transit, nor can you predict perfectly where your travel will end. It's impossible to judge distances accurately, making the spell virtually useless for scouting or spying. Furthermore, when the spell effect ends, you are shunted 1d10×100 feet in a random horizontal direction from your desired endpoint. If this would place you within a solid object, you are shunted 1d10×1,000 feet in the same direction. If this would still place you within a solid object, you (and any creatures with you) are shunted to the nearest empty space available, but the strain of this activity renders each creature fatigued (no save). <p class=sub><i>Shadow walk</i> can also be used to travel to other planes that border on the Plane of Shadow, but this usage requires the transit of the Plane of Shadow to arrive at a border with another plane of reality. The transit of the Plane of Shadow requires 1d4 hours. <p class=sub>Any creatures touched by you when shadow walk is cast also make the transition to the borders of the Plane of Shadow. They may opt to follow you, wander off through the plane, or stumble back into the Material Plane (50% chance for either of the latter results if they are lost or abandoned by you). Creatures unwilling to accompany you into the Plane of Shadow receive a Will saving throw, negating the effect if successful.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9172"
}, {
	name: "Shambler",
	summary: "Summon 1d4+2 (11HD) shamblers",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "3+ shamblers",
	duration: "7 days/months (D)",
	save: "-",
	sr: "-",
	classes: {},
	description: "The <i>shambler</i> spell creates 1d4+2 shambling mounds with 11 HD each. (See the <i>Monster Manual </i>for descriptions about shambling mounds.) The creatures willingly aid you in combat or battle, perform a specific mission, or serve as bodyguards. The creatures remain with you for seven days unless you dismiss them. If the shamblers are created only for guard duty, however, the duration of the spell is seven months. In this case, the shamblers can only be ordered to guard a specific site or location. Shamblers summoned to guard duty cannot move outside the spell's range, which is measured from the point where each first appeared. <p class=sub>The shamblers have resistance to fire as normal shambling mounds do only if the terrain is rainy, marshy, or damp.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7431"
}, {
	name: "Shapechange",
	summary: "Transform into new form",
	school: "Trans",
	composition: "V, S, F (a jade circlet worth no less than 1,500 gp, which you must place on your head when casting the spell)",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "10 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "This spell functions like <i>polymorph</i>, except that it enables you to assume the form of any single nonunique creature (of any type) from Fine to Colossal size. The assumed form cannot have more than your caster level in Hit Dice (to a maximum of 25 HD). Unlike <i>polymorph</i>, this spell allows incorporeal or gaseous forms to be assumed. <p class=sub>You gain all extraordinary and supernatural abilities (both attacks and qualities) of the assumed form, but you lose your own supernatural abilities. You also gain the type of the new form (for example, dragon or magical beast) in place of your own. The new form does not disorient you. Parts of your body or pieces of equipment that are separated from you do not revert to their original forms. <p class=sub>You can become just about anything you are familiar with. You can change form once each round as a free action. The change takes place either immediately before your regular action or immediately after it, but not during the action. For example, you are in combat and assume the form of a will-o'-wisp. When this form is no longer useful, you change into a stone golem and walk away. When pursued, you change into a flea, which hides on a horse until it can hop off. From there, you can become a dragon, an orc, or just about anything else yo are familiar with. <p class=sub>If you use this spell to create a disguise, you get a +10 bonus on your Disguise check.  (The focus melds into your new form when you change shape.)",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4cef"
}, {
	name: "Shatter",
	summary: "Sonic vibration damages items",
	school: "Evoc",
	composition: "V, S, M/DF (a chip of mica)",
	time: "1 a",
	range: "Close",
	effect: "5-ft radius, 1 lb/lvl",
	duration: "Instantaneous",
	save: "Special",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Cleric": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "<i>Shatter</i> creates a loud, ringing noise that breaks brittle, nonmagical objects; sunders a single solid, nonmagical object; or damages a crystalline creature. <p class=sub>Used as an area attack, <i>shatter</i> destroys nonmagical objects of crystal, glass, ceramic, or porcelain, such as vials, bottles, flasks, jugs, windows, mirrors, and so forth. All such objects within a 5-foot radius of the point of origin are smashed into dozens of pieces by the spell. Objects weighing more than 1 pound per your level are not affected, but all other objects of the appropriate composition are shattered. <p class=sub>Alternatively, you can target <i>shatter</i> against a single solid object, regardless of composition, weighing up to 10 pounds per caster level. <p class=sub>Targeted against a crystalline creature (of any weight), <i>shatter</i> deals 1d6 points of sonic damage per caster level (maximum 10d6), with a Fortitude save for half damage",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a7a2"
}, {
	name: "Shield",
	summary: "Negates magic missiles, +4 AC",
	school: "Abjur",
	composition: "V, S",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "<i>Shield</i> creates an invisible, tower shield-sized mobile disk of force that hovers in front of you. It negates magic missile attacks directed at you. The disk also provides a +4 shield bonus to AC. This bonus applies against incorporeal touch attacks, since it is a force effect. The <i>shield</i> has no armor check penalty or arcane spell failure chance. Unlike with a normal tower shield, you can't use the <i>shield</i> spell for cover.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7922"
}, {
	name: "Shield of Faith",
	summary: "+2 AC +1/6lvls",
	school: "Abjur",
	composition: "V, S, M (a small parchment with a bit of holy text written upon it)",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 2
	},
	description: "This spell creates a shimmering, magical field around the touched creature that averts attacks. The spell grants the subject a +2 deflection bonus to AC, with an additional +1 to the bonus for every six levels you have (maximum +5 deflection bonus at 18th level)",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3997"

}, {
	name: "Shield of Law",
	summary: "+4 AC, +4 res, SR 25 vs chaotic",
	school: "Abjur",
	composition: "V, S, F (a tiny reliquary containing some sacred relic, such as a scrap of parchment from a lawful text)",
	time: "1 a",
	range: "20-ft",
	effect: "One creature/lvl in 20-ft radius",
	duration: "1 rnd/lvl (D)",
	save: "Special",
	sr: "Yes",
	classes: {
		"Cleric": 9
	},
	description: "A dim, blue glow surrounds the subjects, protecting them from attacks, granting them resistance to spells cast by chaotic creatures, and <i>slowing</i> chaotic creatures when they strike the subjects. This abjuration has four effects. <p class=sub>First, each warded creature gains a +4 deflection bonus to AC and a +4 resistance bonus on saves. Unlike protection from chaos, this benefit applies against all attacks, not just against attacks by chaotic creatures. <p class=sub>Second, a warded creature gains spell resistance 25 against chaotic spells and spells cast by chaotic creatures. Third, the abjuration blocks possession and mental influence, just as <i>protection from chaos</i> does. <p class=sub>Finally, if a chaotic creature succeeds on a melee attack against a warded creature, the attacker is slowed (Will save negates, as the <i>slow</i> spell, but against <i>shield of law</i>'s save DC).  The reliquary costs at least 500 gp.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4d33"
}, {
	name: "Shield Other",
	summary: "Target +1 AC, save, half dmg to caster",
	school: "Abjur",
	composition: "V, S, F (a pair of platinum rings worth at least 50 gp each, worn by both you and the warded creature",
	time: "1 a",
	range: "Close",
	effect: "One creature",
	duration: "1 hr/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 3,
		"Paladin": 2
	},
	description: "This spell wards the subject and creates a mystic connection between you and the subject so that some of its wounds are transferred to you. The subject gains a +1 deflection bonus to AC and a +1 resistance bonus on saves. Additionally, the subject takes only half damage from all wounds and attacks (including that dealt by special abilities) that deal hit point damage. The amount of damage not taken by the warded creature is taken by you. Forms of harm that do not involve hit points, such as charm effects, temporary ability damage, level draining, and death effects, are not affected. If the subject suffers a reduction of hit points from a lowered Constitution score, the reduction is not split with you because it is not hit point damage. When the spell ends, subsequent damage is no longer divided between the subject and you, but damage already split is not reassigned to the subject. <p class=sub>If you and the subject of the spell move out of range of each other, the spell ends.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "37a2"
}, {
	name: "Shillelagh",
	summary: "Weapon +1 att, damage 1d10+1",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "Oak club/quarterstaff",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Druid": 2
	},
	description: "Your own nonmagical club or quarterstaff becomes a weapon with a +1 enhancement bonus on attack and damage rolls. (A quarterstaff gains this enhancement for both ends of the weapon.) It deals damage as if it were two size categories larger (a Small club or quarterstaff so transmuted deals 1d8 points of damage, a Medium 2d6, and a Large 3d6), +1 for its enhancement bonus. These effects only occur when the weapon is wielded by you. If you do not wield it, the weapon behaves as if unaffected by this spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "95a3"
}, {
	name: "Shocking Grasp",
	summary: "1d6 dmg/lvl electricity (5d6)",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One creature or item",
	duration: "Instantaneous",
	save: "-",
	sr: "Yes",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "Your successful melee touch attack deals 1d6 points of electricity damage per caster level (maximum 5d6). When delivering the jolt, you gain a +3 bonus on attack rolls if the opponent is wearing metal armor (or made out of metal, carrying a lot of metal, or the like).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d25d"
}, {
	name: "Shout",
	summary: "5d6 sonic dmg, deaf 2d6 rounds",
	school: "Evoc",
	composition: "V",
	time: "1 a",
	range: "30-ft",
	effect: "Cone",
	duration: "Instantaneous",
	save: "Fort part, Ref negs",
	sr: "Yes",
	classes: {
		"Bard": 5,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "You emit an ear-splitting yell that deafens and damages creatures in its path. Any creature within the area is deafened for 2d6 rounds and takes 5d6 points of sonic damage. A successful save negates the deafness and reduces the damage by half. Any exposed brittle or crystalline object or crystalline creature takes 1d6 points of sonic damage per caster level (maximum 15d6). An affected creature is allowed a Fortitude save to reduce the damage by half, and a creature holding fragile objects can negate damage to them with a successful Reflex save. <p class=sub>A <i>shout</i> spell cannot penetrate a <i>silence</i> spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5d2"
}, {
	name: "Shout, Greater",
	summary: "10d6 sonic dmg, deaf 4d6 rounds, stunned 1 round",
	school: "Evoc",
	composition: "V, S,F",
	time: "1 a",
	range: "60-ft",
	effect: "Cone",
	duration: "Instantaneous",
	save: "Fort part, Ref negs",
	sr: "Yes",
	classes: {
		"Bard": 7,
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "This spell functions like <i>shout</i>, except that the cone deals 10d6 points of sonic damage (or 1d6 points of sonic damage per caster level, maximum 20d6, against exposed brittle or crystalline objects or crystalline creatures). It also causes creatures to be stunned for 1 round and deafened for 4d6 rounds. A creature in the area of the cone can negate the stunning and halve both the damage and the duration of the deafness with a successful Fortitude save. A creature holding vulnerable objects can attempt a Reflex save to negate the damage to those objects. <p class=sub><i>Arcane Focus</i>: A small metal or ivory horn.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "eab"
}, {
	name: "Shrink Item",
	summary: "Item shrinks to 1/16th normal size",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "Obj up to 2 cu ft/lvl",
	duration: "1 day/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "You are able to shrink one nonmagical item (if it is within the size limit) to 1/16 of its normal size in each dimension (to about 1/4,000 the original volume and mass). This change effectively reduces the object's size by four categories (for instance, from Large to Diminutive). Optionally, you can also change its now-shrunken composition to a clothlike one. Objects changed by a <i>shrink item</i> spell can be returned to normal composition and size merely by tossing them onto any solid surface or by a word of command from the original caster. Even a burning fire and its fuel can be shrunk by this spell. Restoring the shrunken object to its normal size and composition ends the spell. <p class=sub><i>Shrink item</i> can be made permanent with a <i>permanency</i> spell, in which case the affected object can be shrunk and expanded an indefinite number of times, but only by the original caster.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c128"
}, {
	name: "Silence",
	summary: "All sound is stopped",
	school: "Illus",
	composition: "V, S",
	time: "1 a",
	range: "Long",
	effect: "20-ft radius",
	duration: "1 min/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Cleric": 3
	},
	description: "Upon the casting of this spell, complete silence prevails in the affected area. All sound is stopped Conversation is impossible, spells with verbal components cannot be cast, and no noise whatsoever issues from, enters, or passes through the area. The spell can be cast on a point in space, but the effect is stationary unless cast on a mobile object. The spell can be centered on a creature, and the effect then radiates from the creature and moves as it moves. An unwilling creature can attempt a Will save to negate the spell and can use spell resistance, if any. Items in a creature's possession or magic items that emit sound receive the benefits of saves and spell resistance, but unattended objects and points in space do not. This spell provides a defense against sonic or language-based attacks, such as command, a harpy's captivating song, a horn of blasting, and the like.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "18a6"
}, {
	name: "Silent Image",
	summary: "Creates minor illusion of item",
	school: "Illus",
	composition: "V, S, F (a bit of fleece)",
	time: "1 a",
	range: "Long",
	effect: "4 10-ft cubes+1 10-ft cube/lvl",
	duration: "Concentrate",
	save: "Will dsblf",
	sr: "-",
	classes: {
		"Bard": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "This spell creates the visual illusion of an object, creature, or force, as visualized by you. The illusion does not create sound, smell, texture, or temperature. You can move the image within the limits of the size of the effect. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "922b"
}, {
	name: "Simulacrum",
	summary: "Partially real double of creature",
	school: "Illus",
	composition: "V, S, M  (ice sculpture of the target plus powdered rubies worth 500 gp per HD of the simulacrum)",
	time: "12 hr",
	range: "0 ft",
	effect: "One duplicate",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "<i>Simulacrum</i> creates an illusory duplicate of any creature. The duplicate creature is partially real and formed from ice or snow. It appears to be the same as the original, but it has only one-half of the real creature's levels or Hit Dice (and the appropriate hit points, feats, skill ranks, and special abilities for a creature of that level or HD). You can't create a simulacrum of a creature whose Hit Dice or levels exceed twice your caster level. You must make a Disguise check when you cast the spell to determine how good the likeness is. A creature familiar with the original might detect the ruse with a successful Spot check (opposed by the caster's Disguise check) or a DC 20 Sense Motive check. <p class=sub>At all times the simulacrum remains under your absolute command. No special telepathic link exists, so command must be exercised in some other manner. A simulacrum has no ability to become more powerful. It cannot increase its level or abilities. If reduced to 0 hit points or otherwise destroyed, it reverts to snow and melts instantly into nothingness. A complex process requiring at least 24 hours, 100 gp per hit point, and a fully equipped magical laboratory can repair damage to a simulacrum",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "244c"
}, {
	name: "Slay Living",
	summary: "Kills target else 3d6 + 1/lvl dmg",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One living creature",
	duration: "Instantaneous",
	save: "Fort part",
	sr: "Yes",
	classes: {
		"Cleric": 6
	},
	description: "You can slay any one living creature. You must succeed on a melee touch attack to touch the subject, and it can avoid death with a successful Fortitude save. If it succeeds, it instead takes 3d6 points of damage +1 point per caster level. (Of course, the subject might die from damage even if it succeeds on its save.)",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d063"
}, {
	name: "Sleep",
	summary: "Puts 4 HD of creatures into slumber",
	school: "Ench",
	composition: "V, S, M (a pinch of fine sand, rose petals, or a live cricket)",
	time: "Round",
	range: "Medium",
	effect: "Living in 10-ft radius",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "A <i>sleep</i> spell causes a magical slumber to come upon 4 Hit Dice of creatures. Creatures with the fewest HD are affected first. Among creatures with equal HD, those who are closest to the spell's point of origin are affected first. Hit Dice that are not sufficient to affect a creature are wasted. <p class=sub>For example, Mialee casts <i>sleep</i> at one rat (1/4 HD), one kobold (1 HD), two gnolls (2 HD), and an ogre (4 HD). The rat, the kobold, and one gnoll are affected (1/4 + 1 + 2 = 3-1/4 HD). The remaining 3/4 HD is not enough to affect the last gnoll or the ogre. Mialee can't choose to have sleep affect the ogre or the two gnolls. <p class=sub>Sleeping creatures are helpless. Slapping or wounding awakens an affected creature, but normal noise does not. Awakening a creature is a standard action (an application of the aid another action). <p class=sub>Sleep does not target unconscious creatures, constructs, or undead creatures",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2d1f"

}, {
	name: "Sleet Storm",
	summary: "Hampers vision and movement",
	school: "Conj",
	composition: "V, S, M/DF (a pinch of dust and a few drops of water)",
	time: "1 a",
	range: "Long",
	effect: "40-ft radius",
	duration: "1 rnd/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "Driving sleet blocks all sight (even darkvision) within it and causes the ground in the area to be icy. A creature can walk within or through the area of sleet at half normal speed with a DC 10 Balance check. Failure means it can't move in that round, while failure by 5 or more means it falls (see the Balance skill for descriptions). <p class=sub>The sleet extinguishes torches and small fires",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6e69"

}, {
	name: "Slow",
	summary: "Make only single move or standard action",
	school: "Trans",
	composition: "V, S, M (a drop of molasses)",
	time: "1 a",
	range: "Close",
	effect: "One creature/lvl in 30-ft",
	duration: "1 rnd/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "An affected creature moves and attacks at a drastically slowed rate. A slowed creature can take only a single move action or standard action each turn, but not both (nor may it take full-round actions). Additionally, it takes a '1 penalty on attack rolls, AC, and Reflex saves. A <i>slowed</i> creature moves at half its normal speed (round down to the next 5-foot increment), which affects the creature's jumping distance as normal for decreased speed. <p class=sub>Multiple <i>slow</i> effects don't stack. <i>Slow</i> counters and dispels <i>haste</i>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4420"

}, {
	name: "Snare",
	summary: "Creates magical booby trap",
	school: "Trans",
	composition: "V, S,DF",
	time: "3 rnds",
	range: "Touch",
	effect: "Vine, rope or thong",
	duration: "Until triggered",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 4,
		"Ranger": 2
	},
	description: "This spell enables you to make a snare that functions as a magic trap. The snare can be made from any supple vine, a thong, or a rope. When you cast <i>snare</i> upon it, the cordlike object blends with its surroundings (Search DC 23 for a character with the Trapfinding ability to locate). One end of the snare is tied in a loop that contracts around one or more of the limbs of any creature stepping inside the circle. (The head of a worm or a snake could be thus ensnared, for example.) <p class=sub>If a strong and supple tree is nearby, the snare can be fastened to it. The spell causes the tree to bend and then straighten when the loop is triggered, dealing 1d6 points of damage to the creature trapped and lifting it off the ground by the trapped limb or limbs. If no such tree is available, the cordlike object tightens around the creature, dealing no damage but causing it to be entangled. <p class=sub>The snare is magical. To escape, a trapped creature must make a DC 23 Escape Artist check or a DC 23 Strength check that is a full-round action. The snare has AC 7 and 5 hit points. A successful escape from the snare breaks the loop and ends the spell.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1eb2"
}, {
	name: "Soften Earth and Stone",
	summary: "Stone to clay or dirt to sand/mud",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Close",
	effect: "10-ft sq/lvl",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 3
	},
	description: "When this spell is cast, all natural, undressed earth or stone in the spell's area is softened. Wet earth becomes thick mud, dry earth becomes loose sand or dirt, and stone becomes soft clay that is easily molded or chopped. You affect a 10-foot-square area to a depth of 1 to 4 feet, depending on the toughness or resilience of the ground at that spot (DM's option). Magical, enchanted, dressed, or worked stone cannot be affected. Earth or stone creatures are not affected. <p class=sub>A creature in mud must succeed on a Reflex save or be caught for 1d2 rounds and unable to move, attack, or cast spells. A creature that succeeds on its save can move through the mud at half speed, and it can't run or charge. <p class=sub>Loose dirt is not as troublesome as mud, but all creatures in the area can move at only half their normal speed and can't run or charge over the surface. <p class=sub>Stone softened into clay does not hinder movement, but it does allow characters to cut, shape, or excavate areas they may not have been able to affect before. For example, a party of adventurers trying to break out of a cavern might use this spell to soften a wall. While <i>soften earth and stone</i> does not affect dressed or worked stone, cavern ceilings or vertical surfaces such as cliff faces can be affected. Usually, this causes a moderate collapse or landslide as the loosened material peels away from the face of the wall or roof and falls. <p class=sub>A moderate amount of structural damage can be dealt to a manufactured structure (such as a wall or a tower) by softening the ground beneath it, causing it to settle. However, most well-built structures will only be damaged by this spell, not destroyed.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9cb3"
}, {
	name: "Solid Fog",
	summary: "Fog limits vision & movement to 5-ft",
	school: "Conj",
	composition: "V, S, M (a pinch of dried, powdered peas combined with powered animal hoof)",
	time: "1 a",
	range: "Medium",
	effect: "20-ft radius",
	duration: "1 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "This spell functions like <i>fog cloud</i>, but in addition to obscuring sight, the <i>solid fog</i> is so thick that any creature attempting to move through it progresses at a speed of 5 feet, regardless of its normal speed, and it takes a '2 penalty on all melee attack and melee damage rolls. The vapors prevent effective ranged weapon attacks (except for magic rays and the like). A creature or object that falls into <i>solid fog</i> is slowed, so that each 10 feet of vapor that it passes through reduces falling damage by 1d6. A creature can't take a 5-foot step while in <i>solid fog</i>. <p class=sub>However, unlike normal fog, only a severe wind (31+ mph) disperses these vapors, and it does so in 1 round. <p class=sub><i>Solid fog</i> can be made permanent with a <i>permanency</i> spell. A permanent <i>solid fog</i> dispersed by wind reforms in 10 minutes",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c566"

}, {
	name: "Song of Discord",
	summary: "50% chance of attacking nearest friend",
	school: "Ench",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "20-ft radius",
	duration: "1 rnd/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 6
	},
	description: "This spell causes those within the area to turn on each other rather than attack their foes. Each affected creature has a 50% chance to attack the nearest target each round. (Roll to determine each creature's behavior every round at the beginning of its turn.) A creature that does not attack its nearest neighbor is free to act normally for that round. <p class=sub>Creatures forced by a <i>song of discord</i> to attack their fellows employ all methods at their disposal, choosing their deadliest spells and most advantageous combat tactics. They do not, however, harm targets that have fallen unconscious.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "bba1"
}, {
	name: "Soul Bind",
	summary: "Traps soul to prevent resurrection",
	school: "Necro",
	composition: "V, S, F (a black sapphire of at least 1,000 gp value for every Hit Die possessed by the creature whose soul is to be bound)",
	time: "1 a",
	range: "Close",
	effect: "One dead creature",
	duration: "Permanent",
	save: "Will negs",
	sr: "-",
	classes: {
		"Cleric": 10,
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "You draw the soul from a newly dead body and imprison it in a black sapphire gem. The subject must have been dead no more than 1 round per caster level. The soul, once trapped in the gem, cannot be returned through <i>clone</i>, <i>raise dead</i>, <i>reincarnation</i>, <i>resurrection</i>, <i>true resurrection</i>, or even a <i>miracle</i> or a <i>wish</i>. Only by destroying the gem or dispelling the spell on the gem can one free the soul (which is then still dead).  If the gem is not valuable enough, it shatters when the binding is attempted. (While creatures have no concept of level or Hit Dice as such, the value of the gem needed to trap an individual can be researched. Remember that this value can change over time as creatures gain more Hit Dice.)",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5ec8"
}, {
	name: "Sound Burst",
	summary: "1d8 sonic damage, may stun 1 round",
	school: "Evoc",
	composition: "V, S,F/DF",
	time: "1 a",
	range: "Close",
	effect: "10-ft radius",
	duration: "Instantaneous",
	save: "Fort part",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Cleric": 3
	},
	description: "You blast an area with a tremendous cacophony. Every creature in the area takes 1d8 points of sonic damage and must succeed on a Fortitude save to avoid being stunned for 1 round. Creatures that cannot hear are not stunned but are still damaged.<p class=sub>Arcane Focus: A musical instrument.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "41aa"
}, {
	name: "Speak with Animals",
	summary: "Communicate with animals",
	school: "Div",
	composition: "V, S",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 4,
		"Druid": 2,
		"Ranger": 1
	},
	description: "You can comprehend and communicate with animals. You are able to ask questions of and receive answers from animals, although the spell doesn't make them any more friendly or cooperative than normal. Furthermore, wary and cunning animals are likely to be terse and evasive, while the more stupid ones make inane comments. If an animal is friendly toward you, it may do some favor or service for you (as determined by the DM).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "396b"
}, {
	name: "Speak with Dead",
	summary: "Corpse answers one question/2 lvls",
	school: "Necro",
	composition: "V, S,DF",
	time: "10 min",
	range: "10-ft",
	effect: "One dead creature",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "-",
	classes: {
		"Cleric": 4
	},
	description: "You grant the semblance of life and intellect to a corpse, allowing it to answer several questions that you put to it. You may ask one question per two caster levels. Unasked questions are wasted if the duration expires. The corpse's knowledge is limited to what the creature knew during life, including the languages it spoke (if any). Answers are usually brief, cryptic, or repetitive. If the creature's alignment was different from yours, the corpse gets a Will save to resist the spell as if it were alive. <p class=sub>If the corpse has been subject to <i>speak with dead</i> within the past week, the new spell fails. You can cast this spell on a corpse that has been deceased for any amount of time, but the body must be mostly intact to be able to respond. A damaged corpse may be able to give partial answers or partially correct answers, but it must at least have a mouth in order to speak at all. <p class=sub>This spell does not let you actually speak to the person (whose soul has departed). It instead draws on the imprinted knowledge stored in the corpse. The partially animated body retains the imprint of the soul that once inhabited it, and thus it can speak with all the knowledge that the creature had while alive. The corpse, however, cannot learn new information. Indeed, it can't even remember being questioned. <p class=sub>This spell does not affect a corpse that has been turned into an undead creature.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "db3f"
}, {
	name: "Speak with Plants",
	summary: "Talk to plants and plant creatures",
	school: "Div",
	composition: "V, S",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 5,
		"Druid": 4,
		"Ranger": 2
	},
	description: "You can comprehend and communicate with plants, including both normal plants and plant creatures. You are able to ask questions of and receive answers from plants. A regular plant's sense of its surroundings is limited, so it won't be able to give (or recognize) descriptioned summarys of creatures or answer questions about events outside its immediate vicinity. <p class=sub>The spell doesn't make plant creatures any more friendly or cooperative than normal. Furthermore, wary and cunning plant creatures are likely to be terse and evasive, while the more stupid ones may make inane comments. If a plant creature is friendly toward you, it may do some favor or service for you (as determined by the DM).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "81a8"
}, {
	name: "Spectral Hand",
	summary: "+2 on touch attack",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "One spectral hand",
	duration: "1 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "A ghostly, glowing hand shaped from your life force materializes and moves as you desire, allowing you to deliver low-level, touch range spells at a distance. On casting the spell, you lose 1d4 hit points that return when the spell ends (even if it is dispelled), but not if the hand is destroyed. (The hit points can be healed as normal.) For as long as the spell lasts, any touch range spell of 4th level or lower that you cast can be delivered by the <i>spectral hand</i>. The spell gives you a +2 bonus on your melee touch attack roll, and attacking with the hand counts normally as an attack. The hand always strikes from your direction. The hand cannot flank targets like a creature can. After it delivers a spell, or if the hand goes beyond the spell range, goes out of your sight, the hand returns to you and hovers. <p class=sub>The hand is incorporeal and thus cannot be harmed by normal weapons. It has improved evasion (half damage on a failed Reflex save and no damage on a successful save), your save bonuses, and an AC of at least 22. Your Intelligence modifier applies to the hand's AC as if it were the hand's Dexterity modifier. The hand has 1 to 4 hit points, the same number that you lost in creating it.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "235b"
}, {
	name: "Spell Immunity",
	summary: "Immune to a 1-4 level spell/4levels",
	school: "Abjur",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "10 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 5
	},
	description: "The warded creature is immune to the effects of one specified spell for every four levels you have. The spells must be of 4th level or lower. The warded creature effectively has unbeatable spell resistance regarding the specified spell or spells. Naturally, that immunity doesn't protect a creature from spells for which spell resistance doesn't apply. <i>Spell immunity</i> protects against spells, spell-like effects of magic items, and innate spell-like abilities of creatures. It does not protect against supernatural or extraordinary abilities, such as breath weapons or gaze attacks. Only a particular spell can be protected against, not a certain domain or school of spells or a group of spells that are similar in effect. Thus, a creature given immunity to <i>lightning bolt</i> is still vulnerable to <i>shocking grasp</i> or <i>chain lightning</i>. <p class=sub>A creature can have only one <i>spell immunity</i> or <i>greater spell immunity</i> spell in effect on it at a time.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4bc"
}, {
	name: "Spell Immunity, Greater",
	summary: "Immune to a 1-8 level spell/4levels",
	school: "Abjur",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "10 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 9
	},
	description: "This spell functions like <i>spell immunity</i>, except the immunity applies to spells of 8th level or lower. <p class=sub>A creature can have only one <i>spell immunity</i> or <i>greater spell immunity</i> spell in effect on it at a time. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5ded"
}, {
	name: "Spell Resistance",
	summary: "Target gains SR 12+level",
	school: "Abjur",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 6
	},
	description: "The creature gains spell resistance equal to 12 + your caster level.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2de5"
}, {
	name: "Spellstaff",
	summary: "Stores one spell in quarterstaff",
	school: "Trans",
	composition: "V, S, F (the staff that stores the spell)",
	time: "10 min",
	range: "Touch",
	effect: "Wooden Quarterstaff",
	duration: "Till used (D)",
	save: "Will neg",
	sr: "Yes",
	classes: {
		"Druid": 7
	},
	description: "You store one spell that you can normally cast in a wooden quarterstaff. Only one such spell can be stored in a staff at a given time, and you cannot have more than one spellstaff at any given time. You can cast a spell stored within a staff just as though it were among those you had prepared, but it does not count against your normal allotment for a given day. You use up any applicable material components required to cast the spell when you store it in the <i>spellstaff</i>. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "19e3"
}, {
	name: "Spell Turning",
	summary: "Reflects 1d4+6 spell levels back",
	school: "Abjur",
	composition: "V, S, M/DF (a small silver mirror)",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "10min/lvl or till used",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "Spells and spell-like effects targeted on you are turned back upon the original caster. The abjuration turns only spells that have you as a target. Effect and area spells are not affected. <i>Spell turning</i> also fails to stop touch range spells. Thus, a <i>charm person</i> spell cast at you could be turned back upon the caster and possibly enable you to use the <i>charm</i> effect on that individual, but a <i>fireball</i> could not be turned back, and neither could inflict critical wounds. <p class=sub>From seven to ten (1d4+6) spell levels are affected by the turning. The DM secretly rolls the exact number. When a spell is turned, the DM subtracts its level from the amount of spell turning left. <p class=sub>When you are targeted by a spell of higher level than the amount of spell turning you have left, that spell is partially turned. The subtract the amount of spell turning left from the spell level of the incoming spell, then divide the result by the spell level of the incoming spell to see what fraction of the effect gets through. <p class=sub>For damaging spells, you and the caster each take a fraction of the damage. For nondamaging spells, each of you has a proportional chance to be affected. For example, if you had three levels of spell turning left and were targeted by an <i>inflict critical wounds</i> spell (a 4th-level spell), you would turn three-fourths of the spell back at the caster. You would take one-forth of the damage, while the caster takes three-fourths of the damage. If you were targeted by a wizard's fear spell (also a 4th-level spell) in the same situation, you would have a one in four (25%) chance to be affected by the spell, while the caster would have a three in four (75%) chance to be affected. <p class=sub>Roll randomly to determine the result. <table class=box><tr class=header><td>d%</td><td>Effect</td></tr> <tr><td>01'70</td> <td>Spell drains away without effect.</td></tr> <tr><td>71'80</td><td>Spell affects both of you equally at full effect.</td></tr> <tr><td>81'97</td><td>Both turning effects are rendered nonfunctional for 1d4 minutes.</td></tr> <tr><td>98'100</td><td>Both of you go through a rift into another plane.</td></tr> </table",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3b19"

}, {
	name: "Spider Climb",
	summary: "Walk on walls/ceiling as a spider",
	school: "Trans",
	composition: "V, S, M (a drop of bitumen and a live spider, both of which must be eaten by the subject)",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "10 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Druid": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "The subject can climb and travel on vertical surfaces or even traverse ceilings as well as a spider does. The affected creature must have its hands free to climb in this manner. The subject gains a climb speed of 20 feet; furthermore, it need not make Climb checks to traverse a vertical or horizontal surface (even upside down). A <i>spider climbing</i> creature retains its Dexterity bonus to Armor Class (if any) while climbing, and opponents get no special bonus to their attacks against it. It cannot, however, use the run action while climbing",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "30c1"

}, {
	name: "Spike Growth",
	summary: "1d4 dmg/5-ft moved, may be slowed",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Medium",
	effect: "20-ft square/level",
	duration: "1 hr/lvl (D)",
	save: "Ref part",
	sr: "Yes",
	classes: {
		"Druid": 4,
		"Ranger": 2
	},
	description: "Any ground-covering vegetation in the spell's area becomes very hard and sharply pointed without changing its appearance. In areas of bare earth, roots and rootlets act in the same way. Typically, <i>spike growth</i> can be cast in any outdoor setting except open water, ice, heavy snow, sandy desert, or bare stone. Any creature moving on foot into or through the spell's area takes 1d4 points of piercing damage for each 5 feet of movement through the spiked area. <p class=sub>Any creature that takes damage from this spell must also succeed on a Reflex save or suffer injuries to its feet and legs that slow its land speed by one-half. This speed penalty lasts for 24 hours or until the injured creature receives a <i>cure</i> spell (which also restores lost hit points). Another character can remove the penalty by taking 10 minutes to dress the injuries and succeeding on a Heal check against the spell's save DC. <p class=sub><i>Spike growth</i> can't be disabled with the Disable Device skill. <p class=sub><i>Note</i>: Magic traps such as <i>spike growth</i> are hard to detect. A rogue (only) can use the Search skill to find a <i>spike growth</i>. The DC is 25 + spell level, or DC 28 for <i>spike growth</i> (or DC 27 for <i>spike growth</i> cast by a ranger).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b1a7"
}, {
	name: "Spike Stones",
	summary: "1d8 dmg/5-ft moved, may be slowed",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Medium",
	effect: "20-ft square/level",
	duration: "1 hr/lvl (D)",
	save: "Ref part",
	sr: "Yes",
	classes: {
		"Druid": 5
	},
	description: "Rocky ground, stone floors, and similar surfaces shape themselves into long, sharp points that blend into the background. Spike stones impede progress through an area and deal damage. Any creature moving on foot into or through the spell's area moves at half speed. <p class=sub>In addition, each creature moving through the area takes 1d8 points of piercing damage for each 5 feet of movement through the spiked area. <p class=sub>Any creature that takes damage from this spell must also succeed on a Reflex save to avoid injuries to its feet and legs. A failed save causes the creature's speed to be reduced to half normal for 24 hours or until the injured creature receives a cure spell (which also restores lost hit points). Another character can remove the penalty by taking 10 minutes to dress the injuries and succeeding on a Heal check against the spell's save DC. <p class=sub><i>Spike stones</i> is a magic trap that can't be disabled with the Disable Device skill. <p class=sub><i>Note</i>: Magic traps such as <i>spike stones</i> are hard to detect. A rogue (only) can use the Search skill to find <i>spike stones</i>. The DC is 25 + spell level, or DC 29 for <i>spike stones</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8570"
}, {
	name: "Spiritual Weapon",
	summary: "1d8 +1/3lvls damage, attacks by itself",
	school: "Evoc",
	composition: "V, S,DF",
	time: "1 a",
	range: "Medium",
	effect: "Magical weapon",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 3
	},
	description: "A weapon made of pure force springs into existence and attacks opponents at a distance, as you direct it, dealing 1d8 force damage per hit, +1 point per three caster levels (maximum +5 at 15th level). The weapon takes the shape of a weapon favored by your deity or a weapon with some spiritual significance or symbolism to you (see below) and has the same threat range and critical multipliers as a real weapon of its form. It strikes the opponent you designate, starting with one attack in the round the spell is cast and continuing each round thereafter on your turn. It uses your base attack bonus (possibly allowing it multiple attacks per round in subsequent rounds) plus your Wisdom modifier as its attack bonus. It strikes as a spell, not as a weapon, so, for example, it can damage creatures that have damage reduction. As a force effect, it can strike incorporeal creatures without the normal miss chance associated with incorporeality. The weapon always strikes from your direction. It does not get a flanking bonus or help a combatant get one. Your feats (such as Weapon Focus) or combat actions (such as charge) do not affect the weapon. If the weapon goes beyond the spell range, if it goes out of your sight, or if you are not directing it, the weapon returns to you and hovers. <p class=sub>Each round after the first, you can use a move action to redirect the weapon to a new target. If you do not, the weapon continues to attack the previous round's target. On any round that the weapon switches targets, it gets one attack. Subsequent rounds of attacking that target allow the weapon to make multiple attacks if your base attack bonus would allow it to. Even if the <i>spiritual weapon</i> is a ranged weapon, use the spell's range, not the weapon's normal range increment, and switching targets still is a move action. <p class=sub>A <i>spiritual weapon</i> cannot be attacked or harmed by physical attacks, but <i>dispel magic</i>, <i>disintegrate</i>, a <i>sphere of annihilation</i>, or a <i>rod of cancellation</i> affects it. A <i>spiritual weapon</i>'s AC against touch attacks is 12 (10 + size bonus for Tiny object). <p class=sub>If an attacked creature has spell resistance, you make a caster level check (1d20 + caster level) against that spell resistance the first time the <i>spiritual weapon</i> strikes it. If the weapon is successfully resisted, the spell is dispelled. If not, the weapon has its normal full effect on that creature for the duration of the spell. <p class=sub>The weapon that you get is often a force replica of your deity's own personal weapon, many of which have individual names. A cleric without a deity gets a weapon based on his alignment. A neutral cleric without a deity can create a <i>spiritual weapon</i> of any alignment, provided he is acting at least generally in accord with that alignment at the time. The weapons associated with each deity or alignment are as follows. <p class=sub><i>Boccob</i>: Quarterstaff, \"Staff of Boccob\" <p class=sub><i>Corellon Larethian</i>: Longsword, \"Sahandrian\" <p class=sub><i>Ehlonna</i>: Longsword, \"Jenevier\" <p class=sub><i>Erythnul</i>: Morningstar, \"Agony\" <p class=sub><i>Fharlanghn</i>: Quarterstaff, \"Traveler's Friend\" <p class=sub><i>Garl Glittergold</i>: Battleaxe, \"Arumdina\" <p class=sub><i>Gruumsh</i>: Spear, \"Bloodspear\" <p class=sub><i>Heironeous</i>: Longsword, \"Justice-bringer\" <p class=sub><i>Hextor</i>: Flail, \"Executioner\" <p class=sub><i>Kord</i>: Greatsword, \"Kelmar\" <p class=sub><i>Moradin</i>: Warhammer, \"Soulhammer\" <p class=sub><i>Nerull</i>: Scythe, \"Lifecutter\" <p class=sub><i>Obad-Hai</i>: Quarterstaff, \"Stormstouch\" <p class=sub><i>Olidammarra</i>: Rapier, \"Swiftstrike\" <p class=sub><i>Pelor</i>: Heavy Mace, \"Sunscepter\" <p class=sub><i>St. Cuthbert</i>: Heavy Mace, \"The Mace of Cuthbert\" <p class=sub><i>Vecna</i>: Dagger, \"Afterthought\" <p class=sub><i>Wee Jas</i>: Dagger, \"Discretion\" <p class=sub><i>Yondalla</i>: Short sword, \"Hornblade\" <p class=sub><i>Chaos</i>: Battleaxe, \"The Blade of Change\" <p class=sub><i>Evil</i>: Light flail, \"The Scourge of Souls\" <p class=sub><i>Good</i>: Warhammer, \"The Hammer of Justice\" <p class=sub><i>Law</i>: Sword, \"The Sword of Truth\"",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "29b6"
}, {
	name: "Stabilize",
	school: "Conj (healing)",
	classes: {
		Cleric: 0, 
		Druid: 0
	},
	time: "1 a",
	composition: "V, S",
	range: "close (25 ft. + 5 ft./2 levels)",
	effect: "one living creature",
	duration: "instantaneous",
	save: "Will negates (harmless)", 
	sr: "yes",
	description: "Upon casting this spell, you target a living creature that has -1 or fewer hit points. That creature is automatically stabilized and does not lose any further hit points. If the creature later takes damage, it continues dying normally.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "249"
}, {
	name: "Statue",
	summary: "Target can become statue at will",
	school: "Trans",
	composition: "V, S, M (lime, sand, and a drop of water stirred by an iron bar, such as a nail or spike)",
	time: "Round",
	range: "Touch",
	effect: "One creature",
	duration: "1 hr/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "A <i>statue</i> spell turns the subject to solid stone, along with any garments and equipment worn or carried. In statue form, the subject gains hardness 8. The subject retains its own hit points. <p class=sub>The subject can see, hear, and smell normally, but it does not need to eat or breathe. Feeling is limited to those sensations that can affect the granite-hard substance of the individual's body. Chipping is equal to a mere scratch, but breaking off one of the statue's arms constitutes serious damage. <p class=sub>The subject of a statue spell can return to its normal state, act, and then return instantly to the statue state (a free action) if it so desires, as long as the spell duration is in effect",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "91e2"

}, {
	name: "Status",
	summary: "Monitors condition, position of allies",
	school: "Div",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One living creature/3 lvls",
	duration: "1 hr/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 3
	},
	description: "When you need to keep track of comrades who may get separated, status allows you to mentally monitor their relative positions and general condition. You are aware of direction and distance to the creatures and any conditions affecting them: unharmed, wounded, disabled, staggered, unconscious, dying, nauseated, panicked, stunned, poisoned, diseased, <i>confused</i>, or the like. Once the spell has been cast upon the subjects, the distance between them and the caster does not affect the spell as long as they are on the same plane of existence. If a subject leaves the plane, or if it dies, the spell ceases to function for it.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "fb0e"
}, {
	name: "Stinking Cloud",
	summary: "Living creatures become nauseated",
	school: "Conj",
	composition: "V, S, M (a rotten egg or several skunk cabbage leaves)",
	time: "1 a",
	range: "Medium",
	effect: "20-ft radius",
	duration: "1 rnd/lvl",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "<i>Stinking cloud</i> creates a bank of fog like that created by <i>fog cloud</i>, except that the vapors are nauseating. Living creatures in the cloud become nauseated. This condition lasts as long as the creature is in the cloud and for 1d4+1 rounds after it leaves. (Roll separately for each nauseated character.) Any creature that succeeds on its save but remains in the cloud must continue to save each round on your turn. <p class=sub><i>Stinking cloud</i> can be made permanent with a <i>permanency</i> spell. A permanent stinking cloud dispersed by wind reforms in 10 minutes",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4f4f"

}, {
	name: "Stone Shape",
	summary: "Sculpts stone into any form",
	school: "Trans",
	composition: "V, S, M/DF (soft clay, which must be worked into roughly the desired shape of the stone object and then touched to the stone while the verbal component is uttered)",
	time: "1 a",
	range: "Touch",
	effect: "10 cu ft + 1 cu ft/lvl",
	duration: "Instantaneous",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 4,
		"Druid": 4,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "You can form an existing piece of stone into any shape that suits your purpose. For example, you can make a stone weapon, a special trapdoor, or a crude idol. <i>Stone shape</i> also permits you to reshape a stone door to make an exit where one didn't exist or to seal a door shut. While it's possible to make crude coffers, doors, and so forth with <i>stone shape</i>, fine description isn't possible. There is a 30% chance that any shape including moving parts simply doesn't work",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "77af"

}, {
	name: "Stoneskin",
	summary: "Damage reduction 10/adamantine",
	school: "Abjur",
	composition: "V, S, M (granite and 250 gp worth of diamond dust sprinkled on the target's skin)",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "10 min/lvl or till used",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Druid": 6,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "The warded creature gains resistance to blows, cuts, stabs, and slashes. The subject gains damage reduction 10/adamantine. (It ignores the first 10 points of damage each time it takes damage from a weapon, though an adamantine weapon bypasses the reduction.) Once the spell has prevented a total of 10 points of damage per caster level (maximum 150 points), it is discharged",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d999"
}, {
	name: "Stone Tell",
	summary: "Talk to natural or worked stone",
	school: "Div",
	composition: "V, S,DF",
	time: "10 min",
	range: "Self",
	effect: "Caster",
	duration: "1 min/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 7
	},
	description: "You gain the ability to speak with stones, which relate to you who or what has touched them as well as revealing what is covered or concealed behind or under them. The stones relate complete summarys if asked. A stone's perspective, perception, and knowledge may prevent the stone from providing the descriptions you are looking for (as determined by the DM). You can speak with natural or worked stone.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "630c"
}, {
	name: "Stone to Flesh",
	summary: "Restores petrified creature",
	school: "Trans",
	composition: "V, S, M (a pinch of earth and a drop of blood)",
	time: "1 a",
	range: "Medium",
	effect: "1-3 ft diam,10-ft long",
	duration: "Instantaneous",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This spell restores a petrified creature to its normal state, restoring life and goods. The creature must make a DC 15 Fortitude save to survive the process. Any petrified creature, regardless of size, can be restored. <p class=sub>The spell also can convert a mass of stone into a fleshy substance. Such flesh is inert and lacking a vital life force unless a life force or magical energy is available. (For example, this spell would turn a stone golem into a flesh golem, but an ordinary statue would become a corpse.) You can affect an object that fits within a cylinder from 1 foot to 3 feet in diameter and up to 10 feet long or a cylinder of up to those dimensions in a larger mass of stone",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2a48"
}, {
	name: "Storm of Vengeance",
	summary: "Storm rains acid, lightning, hail",
	school: "Conj",
	composition: "V, S",
	time: "Round",
	range: "Long",
	effect: "360-ft radius",
	duration: "Conc, 10 rnds (D)",
	save: "Special",
	sr: "Yes",
	classes: {
		"Cleric": 10
	},
	description: "This spell creates an enormous black storm cloud. Lightning and crashing claps of thunder appear within the storm. Each creature beneath the cloud must succeed on a Fortitude save or be deafened for 1d4×10 minutes. <p class=sub>If you do not maintain concentration on the spell after casting it, the spell ends. If you continue to concentrate, the spell generates additional effects in each following round, as noted below. Each effect occurs during your turn. <p class=sub><i>2nd Round</i>: Acid rains down in the area, dealing 1d6 points of acid damage (no save). <p class=sub><i>3rd Round</i>: You call six bolts of lightning down from the cloud. You decide where the bolts strike. No two bolts may be directed at the same target. Each bolt deals 10d6 points of electricity damage. A creature struck can attempt a Reflex save for half damage. <p class=sub><i>4th Round</i>: Hailstones rain down in the area, dealing 5d6 points of bludgeoning damage (no save). <p class=sub><i>5th through 10th Rounds</i>: Violent rain and wind gusts reduce visibility. The rain obscures all sight, including darkvision, beyond 5 feet. A creature 5 feet away has concealment (attacks have a 20% miss chance). Creatures farther away have total concealment (50% miss chance, and the attacker cannot use sight to locate the target). Speed is reduced by three-quarters. Ranged attacks within the area of the storm are impossible. Spells cast within the area are disrupted unless the caster succeeds on a Concentration check against a DC equal to the <i>storm of vengeance</i>'s save DC + the level of the spell the caster is trying to cast.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e3e5"
}, {
	name: "Suggestion",
	summary: "Influences targets actions",
	school: "Ench",
	composition: "V, M (a snake's tongue and either a bit of honeycomb or a drop of sweet oil)",
	time: "1 a",
	range: "Close",
	effect: "One living creature",
	duration: "1 hr/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 3,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "You influence the actions of the target creature by suggesting a course of activity (limited to a sentence or two). The suggestion must be worded in such a manner as to make the activity sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act automatically negates the effect of the spell. However, a <i>suggestion</i> that a pool of acid is actually pure water and that a quick dip would be refreshing is another matter. Urging a red dragon to stop attacking your party so that the dragon and party could jointly loot a rich treasure elsewhere is a likewise reasonable use of the spell's power. <p class=sub>The suggested course of activity can continue for the entire duration, such as in the case of the red dragon mentioned above. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do. You can instead specify conditions that will trigger a special activity during the duration. For example, you might suggest that a noble knight give her warhorse to the first beggar she meets. If the condition is not met before the spell duration expires, the activity is not performed. <p class=sub>A very reasonable <i>suggestion</i> causes the save to be made with a penalty (such as -1 or -2) at the discretion of the DM",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "145a"
}, {
	name: "Suggestion, Mass",
	summary: "Influences targets actions",
	school: "Ench",
	composition: "V,M",
	time: "1 a",
	range: "Medium",
	effect: "One creature/lvl in 30-ft",
	duration: "1 hr/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 6,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This spell functions like <i>suggestion</i>, except that it can affect more creatures. The same <i>suggestion</i> applies to all these creatures.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a76c"
}, {
	name: "Summon Instrument",
	summary: "Calls a handheld instrument for you",
	school: "Conj",
	composition: "V, S",
	time: "Round",
	range: "0 ft",
	effect: "One instrument",
	duration: "1 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 1
	},
	description: "This spell summons one handheld musical instrument of your choice. This instrument appears in your hands or at your feet (your choice). The instrument is typical for its type. Only one instrument appears per casting, and it will play only for you. You can't summon an instrument too large to be held in two hands (such as a harp, piano, harpsichord, alphorn, or pipe organ).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "271d"
}, {
	name: "Summon Monster I",
	summary: "Calls outsider to fight for you",
	school: "Conj",
	composition: "V, S,F/DF",
	time: "Round",
	range: "Close",
	effect: "One creature",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 2,
		"Cleric": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "This spell summons an extraplanar creature (typically an outsider, elemental, or magical beast native to another plane). It appears where you designate and acts immediately, on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it not to attack, to attack particular enemies, or to perform other actions. <p class=sub>The spell conjures one of the creatures from the 1st-level list on the accompanying Summon Monster table. You choose which kind of creature to summon, and you can change that choice each time you cast the spell. Information on these creatures can be found in the <i>Monster Manual</i>. <p class=sub>A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. For instance, a celestial porpoise may only be summoned in an aquatic environment. <p class=sub>When you use a summoning spell to summon an air, chaotic, earth, evil, fire, good, lawful, or water creature, it is a spell of that type. For example, a <i>summon monster I</i> is a lawful and evil spell when cast to summon a fiendish dire rat. <p class=sub><i>Arcane Focus</i>: A tiny bag and a small (not necessarily lit) candle.<table><tr><td colspan=2><b>1st Level</b></td></tr> <tr><td>Celestial dog</td><td>LG</td></tr> <tr><td>Celestial owl</td><td>LG</td></tr> <tr><td>Celestial giant fire beetle</td><td>NG</td></tr> <tr><td>Celestial porpoise<sup>1</sup></td><td>NG</td></tr> <tr><td>Celestial badger</td><td>CG</td></tr> <tr><td>Celestial monkey</td><td>CG</td></tr> <tr><td>Fiendish dire rat</td><td>LE</td></tr> <tr><td>Fiendish raven</td><td>LE</td></tr> <tr><td>Fiendish monstrous centipede, Medium</td><td>NE</td></tr> <tr><td>Fiendish monstrous scorpion, Small</td><td>NE</td></tr> <tr><td>Fiendish hawk</td><td>CE</td></tr> <tr><td>Fiendish monstrous spider, Small</td><td>CE</td></tr> <tr><td>Fiendish octopus<sup>1</sup></td><td>CE</td></tr> <tr><td>Fiendish snake, Small viper</td><td>CE</td></tr> <tr><td colspan=2><b>2nd Level</b></td></tr> <tr><td>Celestial giant bee</td><td>LG</td></tr> <tr><td>Celestial giant bombardier beetle</td><td>NG</td></tr> <tr><td>Celestial riding dog</td><td>NG</td></tr> <tr><td>Celestial eagle</td><td>CG</td></tr> <tr><td>Lemure (devil)</td><td>LE</td></tr> <tr><td>Fiendish squid<sup>1</sup></td><td>LE</td></tr> <tr><td>Fiendish wolf</td><td>LE</td></tr> <tr><td>Fiendish monstrous centipede, Large</td><td>NE</td></tr> <tr><td>Fiendish monstrous scorpion, Medium</td><td>NE</td></tr> <tr><td>Fiendish shark, Medium<sup>1</sup></td><td>NE</td></tr> <tr><td>Fiendish monstrous spider, Medium</td><td>CE</td></tr> <tr><td>Fiendish snake, Medium viper</td><td>CE</td></tr> <tr><td colspan=2><b>3rd Level</b></td></tr> <tr><td>Celestial black bear</td><td>LG</td></tr> <tr><td>Celestial bison</td><td>NG</td></tr> <tr><td>Celestial dire badger</td><td>CG</td></tr> <tr><td>Celestial hippogriff</td><td>CG</td></tr> <tr><td>Elemental, Small (any)</td><td>N </td></tr><tr><td>Fiendish ape</td><td>LE</td></tr> <tr><td>Fiendish dire weasel</td><td>LE</td></tr> <tr><td>Hell hound</td><td>LE</td></tr> <tr><td>Fiendish snake, constrictor</td><td>LE</td></tr> <tr><td>Fiendish boar</td><td>NE</td></tr> <tr><td>Fiendish dire bat</td><td>NE</td></tr> <tr><td>Fiendish monstrous centipede, Huge</td><td>NE</td></tr> <tr><td>Fiendish crocodile</td><td>CE</td></tr> <tr><td>Dretch (demon)</td><td>CE</td></tr><tr><td>Fiendish snake, Large viper</td><td>CE</td></tr> <tr><td>Fiendish wolverine</td><td>CE</td></tr> <tr><td colspan=2><b>4th Level</b></td></tr> <tr><td>Archon, lantern</td><td>LG</td></tr> <tr><td>Celestial giant owl</td><td>LG</td></tr> <tr><td>Celestial giant eagle</td><td>CG</td></tr> <tr><td>Celestial lion</td><td>CG</td></tr> <tr><td>Mephit (any)</td><td>N </td></tr><tr><td>Fiendish dire wolf</td><td>LE</td></tr> <tr><td>Fiendish giant wasp</td><td>LE</td></tr> <tr><td>Fiendish giant praying mantis</td><td>NE</td></tr> <tr><td>Fiendish shark, Large<sup>1</sup></td><td>NE</td></tr> <tr><td>Yeth hound</td><td>NE</td></tr> <tr><td>Fiendish monstrous spider, Large</td><td>CE</td></tr> <tr><td>Fiendish snake, Huge viper</td><td>CE</td></tr> <tr><td>Howler</td><td>CE</td></tr> <tr><td colspan=2><b>5th Level</b></td></tr> <tr><td>Archon, hound</td><td>LG</td></tr> <tr><td>Celestial brown bear</td><td>LG</td></tr> <tr><td>Celestial giant stag beetle</td><td>NG</td></tr> <tr><td>Celestial sea cat<sup>1</sup></td><td>NG</td></tr> <tr><td>Celestial griffon</td><td>CG</td></tr> <tr><td>Elemental, Medium (any)</td><td>N </td></tr><tr><td>Achaierai</td><td>LE</td></tr> <tr><td>Devil, bearded</td><td>LE</td></tr> <tr><td>Fiendish deinonychus</td><td>LE</td></tr> <tr><td>Fiendish dire ape</td><td>LE</td></tr> <tr><td>Fiendish dire boar</td><td>NE</td></tr> <tr><td>Fiendish shark, Huge</td><td>NE</td></tr> <tr><td>Fiendish monstrous scorpion, Large</td><td>NE</td></tr> <tr><td>Shadow mastiff</td><td>NE</td></tr> <tr><td>Fiendish dire wolverine</td><td>CE</td></tr> <tr><td>Fiendish giant crocodile</td><td>CE</td></tr> <tr><td>Fiendish tiger</td><td>CE</td></tr> <tr><td colspan=2><b>6th Level</b></td></tr> <tr><td>Celestial polar bear</td><td>LG</td></tr> <tr><td>Celestial orca whale<sup>1</sup></td><td>NG</td></tr> <tr><td>Bralani (eladrin)</td><td>CG</td></tr> <tr><td>Celestial dire lion</td><td>CG</td></tr> <tr><td>Elemental, Large (any)</td><td>N </td></tr><tr><td>Janni (genie)</td><td>N </td></tr><tr><td>Chaos beast</td><td>CN</td></tr> <tr><td>Devil, chain</td><td>LE</td></tr> <tr><td>Xill</td><td>LE</td></tr> <tr><td>Fiendish monstrous centipede, Gargantuan</td><td>NE</td></tr> <tr><td>Fiendish rhinoceros</td><td>NE</td></tr> <tr><td>Fiendish elasmosaurus<sup>1</sup></td><td>CE</td></tr><tr><td>Fiendish monstrous spider, Huge</td><td>CE</td></tr> <tr><td>Fiendish snake, giant constrictor</td><td>CE</td></tr> <tr><td colspan=2><b>7th Level</b></td></tr> <tr><td>Celestial elephant</td><td>LG</td></tr> <tr><td>Avoral (guardinal)</td><td>NG</td></tr> <tr><td>Celestial baleen whale<sup>1</sup></td><td>NG</td></tr> <tr><td>Djinni (genie)</td><td>CG</td></tr> <tr><td>Elemental, Huge (any)</td><td>N </td></tr><tr><td>Invisible stalker</td><td>N </td></tr><tr><td>Slaad, red</td><td>CN</td></tr> <tr><td>Devil, bone</td><td>LE</td></tr> <tr><td>Fiendish megaraptor</td><td>LE</td></tr> <tr><td>Fiendish monstrous scorpion, Huge</td><td>NE</td></tr> <tr><td>Babau (demon)</td><td>CE</td></tr> <tr><td>Fiendish giant octopus<sup>1</sup></td><td>CE</td></tr> <tr><td>Fiendish girallon</td><td>CE</td></tr> <tr><td colspan=2><b>8th Level</b></td></tr> <tr><td>Celestial dire bear</td><td>LG</td></tr> <tr><td>Celestial cachalot whale<sup>1</sup></td><td>NG</td></tr> <tr><td>Celestial triceratops</td><td>NG</td></tr> <tr><td>Lillend</td><td>CG</td></tr> <tr><td>Elemental, greater (any)</td><td>N </td></tr><tr><td>Slaad, blue</td><td>CN</td></tr> <tr><td>Fiendish giant squid<sup>1</sup></td><td>LE</td></tr> <tr><td>Hellcat</td><td>LE</td></tr> <tr><td>Fiendish monstrous centipede, Colossal</td><td>NE</td></tr> <tr><td>Fiendish dire tiger</td><td>CE</td></tr> <tr><td>Fiendish monstrous spider, Gargantuan</td><td>CE</td></tr> <tr><td>Fiendish tyrannosaurus</td><td>CE</td></tr> <tr><td>Vrock (demon)</td><td>CE</td></tr> <tr><td colspan=2><b>9th Level</b></td></tr> <tr><td>Couatl</td><td>LG</td></tr> <tr><td>Leonal (guardinal)</td><td>NG</td></tr> <tr><td>Celestial roc</td><td>CG</td></tr> <tr><td>Elemental, elder (any)</td><td>N </td></tr><tr><td>Slaad, green</td><td>CN</td></tr> <tr><td>Devil, barbed</td><td>LE</td></tr> <tr><td>Fiendish dire shark<sup>1</sup></td><td>NE</td></tr> <tr><td>Fiendish monstrous scorpion, Gargantuan</td><td>NE</td></tr> <tr><td>Night hag</td><td>NE</td></tr> <tr><td>Bebilith (demon)</td><td>CE</td></tr> <tr><td>Fiendish monstrous spider, Colossal</td><td>CE</td></tr> <tr><td>Hezrou (demon)</td><td>CE</td></tr> </table> <p><sup>1</sup> May be summoned only into an aquatic or watery environment.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e35b"
}, {
	name: "Summon Monster II",
	summary: "Calls outsider to fight for you",
	school: "Conj",
	composition: "V, S,F/DF",
	time: "Round",
	range: "Close",
	effect: "2:1 1:1d3",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 3,
		"Cleric": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "This spell functions like <i>summon monster I</i>, except that you can summon one creature from the 2nd-level list or 1d3 creatures of the same kind from the 1st-level list. <p class=sub>See <i>summon monster I</i> for the complete list of monsters.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6f11"
}, {
	name: "Summon Monster III",
	summary: "Calls outsider to fight for you",
	school: "Conj",
	composition: "V, S,F/DF",
	time: "Round",
	range: "Close",
	effect: "3:1 2:1d3 1:1d4+1",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 4,
		"Cleric": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "This spell functions like <i>summon monster I</i>, except that you can summon one creature from the 3rd-level list, 1d3 creatures of the same kind from the 2nd-level list, or 1d4+1 creatures of the same kind from the 1st-level list. <p class=sub>See <i>summon monster I</i> for the complete list of monsters.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "baf0"
}, {
	name: "Summon Monster IV",
	summary: "Calls outsider to fight for you",
	school: "Conj",
	composition: "V, S,F/DF",
	time: "Round",
	range: "Close",
	effect: "4:1 3:1d3 2-1:1d4+1",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 5,
		"Cleric": 5,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "This spell functions like <i>summon monster I</i>, except that you can summon one creature from the 4th-level list, 1d3 creatures of the same kind from the 3rd-level list, or 1d4+1 creatures of the same kind from a lower-level list.<p class=sub>See <i>summon monster I</i> for the complete list of monsters.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4d80"
}, {
	name: "Summon Monster V",
	summary: "Calls outsider to fight for you",
	school: "Conj",
	composition: "V, S,F/DF",
	time: "Round",
	range: "Close",
	effect: "5:1 4:1d3 1-3:1d4+1",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 6,
		"Cleric": 6,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "This spell functions like <i>summon monster I</i>, except that you can summon one creature from the 5th-level list, 1d3 creatures of the same kind from the 4th-level list, or 1d4+1 creatures of the same kind from a lower-level list. <p class=sub>See <i>summon monster I</i> for the complete list of monsters.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4cfa"
}, {
	name: "Summon Monster VI",
	summary: "Calls outsider to fight for you",
	school: "Conj",
	composition: "V, S,F/DF",
	time: "Round",
	range: "Close",
	effect: "6:1 5:1d3 1-4:1d4+1",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 7,
		"Cleric": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This spell functions like <i>summon monster I</i>, except you can summon one creature from the 6th-level list, 1d3 creatures of the same kind from the 5th-level list, or 1d4+1 creatures of the same kind from a lower-level list. <p class=sub>See <i>summon monster I</i> for the complete list of monsters.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d2fb"
}, {
	name: "Summon Monster VII",
	summary: "Calls outsider to fight for you",
	school: "Conj",
	composition: "V, S,F/DF",
	time: "Round",
	range: "Close",
	effect: "7:1 6:1d3 1-5:1d4+1",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 8,
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "This spell functions like <i>summon monster I</i>, except that you can summon one creature from the 7th-level list, 1d3 creatures of the same kind from the 6th-level list, or 1d4+1 creatures of the same kind from a lower-level list<p class=sub>See <i>summon monster I</i> for the complete list of monsters.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "73b0"
}, {
	name: "Summon Monster VIII",
	summary: "Calls outsider to fight for you",
	school: "Conj",
	composition: "V, S,F/DF",
	time: "Round",
	range: "Close",
	effect: "8:1 7:1d3 1-6:1d4+1",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 9,
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "This spell functions like <i>summon monster I</i>, except that you can summon one creature from the 8th-level list, 1d3 creatures of the same kind from the 7th-level list, or 1d4+1 creatures of the same kind from a lower-level list. <p class=sub>See <i>summon monster I</i> for the complete list of monsters.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e6de"
}, {
	name: "Summon Monster IX",
	summary: "Calls outsider to fight for you",
	school: "Conj",
	composition: "V, S,F/DF",
	time: "Round",
	range: "Close",
	effect: "9:1 8:1d3 1-7:1d4+1",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Cleric": 10,
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "This spell functions like <i>summon monster I</i>, except that you can summon one creature from the 9th-level list, 1d3 creatures of the same kind from the 8th-level list, or 1d4+1 creatures of the same kind from a lower-level list. <p class=sub>See <i>summon monster I</i> for the complete list of monsters.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7f7b"
}, {
	name: "Summon Nature's Ally I",
	summary: "Calls creature to fight for you",
	school: "Conj",
	composition: "V, S,DF",
	time: "Round",
	range: "Close",
	effect: "One creature",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 2,
		"Ranger": 1
	},
	description: "This spell summons a natural creature. It appears where you designate and acts immediately, on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it not to attack, to attack particular enemies, or to perform other actions. <p class=sub>A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. For instance, a porpoise may only be summoned in an aquatic environment. <p class=sub>The spell conjures one of the creatures from the 1st-level list on the accompanying Summon Nature's Ally table. You choose which kind of creature to summon, and you can change that choice each time you cast the spell. All the creatures on the table are neutral unless otherwise noted.<table><tr><td><b>1st Level</b></td><td><b>5th Level</b></td></tr> <tr><td>Dire rat</td><td>Arrowhawk, adult</td></tr> <tr><td>Eagle (animal)</td><td>Bear, polar (animal)</td></tr> <tr><td>Monkey (animal)</td><td>Dire lion</td></tr> <tr><td>Octopus<sup>1</sup> (animal)</td><td>Elasmosaurus<sup>1</sup> (dinosaur)</td></tr> <tr><td>Owl (animal)</td><td>Elemental, Large (any)</td></tr> <tr><td>Porpoise<sup>1</sup> (animal)</td><td>Griffon</td></tr> <tr><td>Snake, Small viper (animal)</td><td>Janni (genie)</td></tr> <tr><td>Wolf (animal)</td><td>Rhinoceros (animal)</td></tr> <tr><td></td><td>Satyr [CN; with pipes]</td></tr> <tr><td><b>2nd Level</b></td><td>Snake, giant constrictor (animal)</td></tr> <tr><td>Bear, black (animal)</td><td>Nixie (sprite)</td></tr> <tr><td>Crocodile (animal)</td><td>Tojanida, adult<sup>1</sup></td></tr><tr><td>Dire badger</td><td>Whale, orca<sup>1</sup> (animal)</td></tr> <tr><td>Dire bat</td><td></td></tr> <tr><td>Elemental, Small (any)</td><td><b>6th Level</b></td></tr> <tr><td>Hippogriff</td><td>Dire bear</td></tr> <tr><td>Shark, Medium<sup>1</sup> (animal)</td><td>Elemental, Huge (any)</td></tr> <tr><td>Snake, Medium viper (animal)</td><td>Elephant (animal)</td></tr> <tr><td>Squid<sup>1</sup> (animal)</td><td>Girallon</td></tr> <tr><td>Wolverine (animal)</td><td>Megaraptor (dinosaur)</td></tr> <tr><td></td><td>Octopus, giant<sup>1</sup> (animal)</td></tr> <tr><td><b>3rd Level</b></td><td>Pixie* (sprite) [NG; no special arrows]</td></tr> <tr><td>Ape (animal)</td><td>Salamander, average [NE]</td></tr> <tr><td>Dire weasel</td><td>Whale, baleen<sup>1</sup></td></tr> <tr><td>Dire wolf</td><td>Xorn, average</td></tr> <tr><td>Eagle, giant [NG]</td><td>* Can't cast Otto's irresistible dance</td></tr><tr><td>Lion</td><td></td></tr> <tr><td>Owl, giant [NG]</td><td><b>7th Level</b></td></tr> <tr><td>Satyr [CN; without pipes]</td><td>Arrowhawk, elder</td></tr> <tr><td>Shark, Large<sup>1</sup> (animal)</td><td>Dire tiger</td></tr> <tr><td>Snake, constrictor (animal)</td><td>Elemental, greater (any)</td></tr> <tr><td>Snake, Large viper (animal)</td><td>Djinni (genie) [NG]</td></tr> <tr><td>Thoqqua</td><td>Invisible stalker</td></tr> <tr><td></td><td>Pixie* (sprite) [NG; with sleep arrows]</td></tr> <tr><td><b>4th Level</b></td><td>Squid, giant<sup>1</sup> (animal)</td></tr> <tr><td>Arrowhawk, juvenile</td><td>Triceratops (dinosaur)</td></tr><tr><td>Bear, brown (animal)</td><td>Tyrannosaurus (dinosaur)</td></tr> <tr><td>Crocodile, giant (animal)</td><td>Whale, cachalot<sup>1</sup> (animal)</td></tr> <tr><td>Deinonychus (dinosaur)</td><td>Xorn, elder</td></tr> <tr><td>Dire ape</td><td>* Can't cast Otto's irresistible dance</td></tr> <tr><td>Dire boar</td><td></td></tr> <tr><td>Dire wolverine</td><td><b>8th Level</b></td></tr> <tr><td>Elemental, Medium (any)</td><td>Dire shark<sup>1</sup></td></tr> <tr><td>Salamander, flamebrother [NE]</td><td>Roc</td></tr> <tr><td>Sea cat<sup>1</sup></td><td>Salamander, noble [NE]</td></tr> <tr><td>Shark, Huge<sup>1</sup> (animal)</td><td>Tojanida, elder</td></tr> <tr><td>Snake, Huge viper (animal)</td><td></td></tr> <tr><td>Tiger (animal)</td><td><b>9th Level</b></td></tr> <tr><td>Tojanida, juvenile<sup>1</sup></td><td>Elemental, elder </td></tr><tr><td>Unicorn [CG]</td><td>Grig [NG; with fiddle] (sprite)</td></tr> <tr><td>Xorn, minor</td><td>Pixie* (sprite) [NG; with sleep and memory loss arrows]</td></tr> <tr><td></td><td>Unicorn, celestial charger</td></tr> <tr><td></td><td>* Can cast Otto's irresistible dance</td></tr></table><sup>1</sup> May be summoned only into an aquatic or watery environment. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ee6a"
}, {
	name: "Summon Nature's Ally II",
	summary: "Calls creature to fight for you",
	school: "Conj",
	composition: "V, S,DF",
	time: "Round",
	range: "Close",
	effect: "2:1 1:1d3",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 3,
		"Ranger": 2
	},
	description: "This spell functions like <i>summon nature's ally I</i>, except that you can summon one 2nd-level creature or 1d3 1st-level creatures of the same kind.<p class=sub>See <i>summon nature's ally I</i> for the complete list of creatures.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6e54"
}, {
	name: "Summon Nature's Ally III",
	summary: "Calls creature to fight for you",
	school: "Conj",
	composition: "V, S,DF",
	time: "Round",
	range: "Close",
	effect: "3:1 2:1d3 1:1d4+1",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 4,
		"Ranger": 3
	},
	description: "This spell functions like <i>summon nature's ally I</i>, except that you can summon one 3rd-level creature, 1d3 2nd-level creatures of the same kind, or 1d4+1 1st-level creatures of the same kind. <p class=sub>When you use a summoning spell to summon an air, chaotic, earth, evil, fire, good, lawful, or water creature, it is a spell of that type. For example, <i>summon nature's ally III</i> is an evil and fire spell when you cast it to summon a salamander.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3d49"
}, {
	name: "Summon Nature's Ally IV",
	summary: "Calls creature to fight for you",
	school: "Conj",
	composition: "V, S,DF",
	time: "Round",
	range: "Close",
	effect: "4:1 3:1d3 2-1:1d4+1",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 5,
		"Ranger": 4
	},
	description: "This spell functions like <i>summon nature's ally I</i>, except that you can summon one 4th-level creature, 1d3 3rd-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind. <p class=sub>When you use a summoning spell to summon an air, chaotic, earth, evil, fire, good, lawful, or water creature, it is a spell of that type.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3049"
}, {
	name: "Summon Nature's Ally V",
	summary: "Calls creature to fight for you",
	school: "Conj",
	composition: "V, S,DF",
	time: "Round",
	range: "Close",
	effect: "5:1 4:1d3 1-3:1d4+1",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 6
	},
	description: "This spell functions like <i>summon nature's ally I</i>, except that you can summon one 5th-level creature, 1d3 4th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind. <p class=sub>When you use a summoning spell to summon an air, chaotic, earth, evil, fire, good, lawful, or water creature, it is a spell of that type.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "76e"
}, {
	name: "Summon Nature's Ally VI",
	summary: "Calls creature to fight for you",
	school: "Conj",
	composition: "V, S,DF",
	time: "Round",
	range: "Close",
	effect: "6:1 5:1d3 1-4:1d4+1",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 7
	},
	description: "This spell functions like <i>summon nature's ally I</i>, except that you can summon one 6th-level creature, 1d3 5th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind. <p class=sub>When you use a summoning spell to summon an air, chaotic, earth, evil, fire, good, lawful, or water creature, it is a spell of that type.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f15e"
}, {
	name: "Summon Nature's Ally VII",
	summary: "Calls creature to fight for you",
	school: "Conj",
	composition: "V, S,DF",
	time: "Round",
	range: "Close",
	effect: "7:1 6:1d3 1-5:1d4+1",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 8
	},
	description: "This spell functions like <i>summon nature's ally I</i>, except that you can summon one 7th-level creature, 1d3 6th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind. <p class=sub>When you use a summoning spell to summon an air, chaotic, earth, evil, fire, good, lawful, or water creature, it is a spell of that type.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "bdd9"
}, {
	name: "Summon Nature's Ally VIII",
	summary: "Calls creature to fight for you",
	school: "Conj",
	composition: "V, S,DF",
	time: "Round",
	range: "Close",
	effect: "8:1 7:1d3 1-6:1d4+1",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 9
	},
	description: "This spell functions like <i>summon nature's ally I</i>, except that you can summon one 8th-level creature, 1d3 7th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.<p class=sub>When you use a summoning spell to summon an air, chaotic, earth, evil, fire, good, lawful, or water creature, it is a spell of that type.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "876b"
}, {
	name: "Summon Nature's Ally IX",
	summary: "Calls creature to fight for you",
	school: "Conj",
	composition: "V, S,DF",
	time: "Round",
	range: "Close",
	effect: "9:1 8:1d3 1-7:1d4+1",
	duration: "1 rnd/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 10
	},
	description: "This spell functions like <i>summon nature's ally I</i>, except that you can summon one 9th-level creature, 1d3 8th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.<p class=sub>When you use a summoning spell to summon an air, chaotic, earth, evil, fire, good, lawful, or water creature, it is a spell of that type.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "24bc"
}, {
	name: "Summon Swarm",
	summary: "Swarm of small creatures",
	school: "Conj",
	composition: "V, S, M/DF (a square of red cloth)",
	time: "Round",
	range: "Close",
	effect: "See MM for effect",
	duration: "Conc + 2 rnds",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 3,
		"Druid": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "You summon a swarm of bats, rats, or spiders (your choice), which attacks all other creatures within its area. (You may summon the swarm so that it shares the area of other creatures.) If no living creatures are within its area, the swarm attacks or pursues the nearest creature as best it can. The caster has no control over its target or direction of travel. <p class=sub>See the <i>Monster Manual</i> for descriptions of bat, rat, and spider swarms",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9219"

}, {
	name: "Sunbeam",
	summary: "Blinds, 4d6 dmg, 1 beam/3 lvls (6)",
	school: "Evoc",
	composition: "V, S,DF",
	time: "1 a",
	range: "60-ft",
	effect: "Line from hand",
	duration: "1 rnd/lvl or till used",
	save: "Ref part",
	sr: "Yes",
	classes: {
		"Druid": 8
	},
	description: "For the duration of this spell, you can use a standard action to evoke a dazzling beam of intense light each round. You can call forth one beam per three caster levels (maximum six beams at 18th level). The spell ends when its duration runs out or your allotment of beams is exhausted. <p class=sub>Each creature in the beam is blinded and takes 4d6 points of damage. Any creatures to which sunlight is harmful or unnatural take double damage. A successful Reflex save negates the blindness and reduces the damage by half. <p class=sub>An undead creature caught within the beam takes 1d6 points of damage per caster level (maximum 20d6), or half damage if a Reflex save is successful. In addition, the beam results in the destruction of any undead creature specifically harmed by bright light (such as a vampire) if it fails its save. <p class=sub>The ultraviolet light generated by the spell deals damage to fungi, mold, oozes, and slimes just as if they were undead creatures.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3e27"
}, {
	name: "Sunburst",
	summary: "Blinds all within, 6d6 damage",
	school: "Evoc",
	composition: "V, S, M/DF",
	time: "1 a",
	range: "Long",
	effect: "80-ft radius",
	duration: "Instantaneous",
	save: "Ref part",
	sr: "Yes",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "<i>Sunburst</i> causes a globe of searing radiance to explode silently from a point you select. All creatures in the globe are blinded and take 6d6 points of damage. A creature to which sunlight is harmful or unnatural takes double damage. A successful Reflex save negates the blindness and reduces the damage by half. <p class=sub>An undead creature caught within the globe takes 1d6 points of damage per caster level (maximum 25d6), or half damage if a Reflex save is successful. In addition, the burst results in the destruction of any undead creature specifically harmed by bright light (such as a vampire) if it fail its save. <p class=sub>The ultraviolet light generated by the spell deals damage to fungi, mold, oozes, and slimes just as if they were undead creatures. <p class=sub><i>Sunburst</i> dispels any <i>darkness</i> spells of lower than 9th level within its area.<p class=sub><i>Arcane Material Component</i>: A piece of sunstone and a naked flame.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8259"
}, {
	name: "Symbol of Death",
	summary: "Slays all, combined hps <150",
	school: "Necro",
	composition: "V, S, M (mercury and phosphorus, plus powdered diamond and opal with a total value of at least 5,000 gp each)",
	time: "10 min",
	range: "0 ft",
	effect: "60-ft radius",
	duration: "Special",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Cleric": 9,
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "This spell allows you to scribe a potent rune of power upon a surface. When triggered, a <i>symbol of death</i> slays one or more creatures within 60 feet of the symbol (treat as a burst) whose combined total current hit points do not exceed 150. The <i>symbol of death</i> affects the closest creatures first, skipping creatures with too many hit points to affect. Once triggered, the symbol becomes active and glows, lasting for 10 minutes per caster level or until it has affected 150 hit points' worth of creatures, whichever comes first. Any creature that enters the area while the <i>symbol of death</i> is active is subject to its effect, whether or not that creature was in the area when it was triggered. A creature need save against the symbol only once as long as it remains within the area, though if it leaves the area and returns while the symbol is still active, it must save again. <p class=sub>Until it is triggered, the <i>symbol of death</i> is inactive (though visible and legible at a distance of 60 feet). To be effective, a <i>symbol of death</i> must always be placed in plain sight and in a prominent location. Covering or hiding the rune renders the symbol of death ineffective, unless a creature removes the covering, in which case the symbol of death works normally. <p class=sub><i>As a default, a <i>symbol of death</i> is triggered whenever a creature does one or more of the following, as you select</i>: looks at the rune; reads the rune; touches the rune; passes over the rune; or passes through a portal bearing the rune. Regardless of the trigger method or methods chosen, a creature more than 60 feet from a <i>symbol of death</i> can't trigger it (even if it meets one or more of the triggering conditions, such as reading the rune). Once the spell is cast, a <i>symbol of death</i>'s triggering conditions cannot be changed. <p class=sub>In this case, &quot;reading&quot; the rune means any attempt to study it, identify it, or fathom its meaning. Throwing a cover over a <i>symbol of death</i> to render it inoperative triggers it if the symbol reacts to touch. You can't use a <i>symbol of death</i> offensively; for instance, a touch-triggered symbol of death remains untriggered if an item bearing the <i>symbol of death</i> is used to touch a creature. Likewise, a <i>symbol of death</i> cannot be placed on a weapon and set to activate when the weapon strikes a foe. <p class=sub>You can also set special triggering limitations of your own. These can be as simple or elaborate as you desire. Special conditions for triggering a <i>symbol of death</i> can be based on a creature's name, identity, or alignment, but otherwise must be based on observable actions or qualities. Intangibles such as level, class, Hit Dice, and hit points don't qualify. For example, a <i>symbol of death</i> can be set to activate when a lawful good creature approaches, but not when a paladin approaches. <p class=sub>When scribing a <i>symbol of death</i>, you can specify a password or phrase that prevents a creature using it from triggering the effect. Anyone using the password remains immune to that particular rune's effects so long as the creature remains within 60 feet of the rune. If the creature leaves the radius and returns later, it must use the password again. <p class=sub>You also can attune any number of creatures to the <i>symbol of death</i>, but doing this can extend the casting time. Attuning one or two creatures takes negligible time, and attuning a small group (as many as ten creatures) extends the casting time to 1 hour. Attuning a large group (as many as twenty-five creatures) takes 24 hours. Attuning larger groups takes proportionately longer, as the DM sees fit. Any creature attuned to a <i>symbol of death</i> cannot trigger it and is immune to its effects, even if within its radius when triggered. You are automatically considered attuned to your own symbols of death, and thus always ignore the effects and cannot inadvertently trigger them. <p class=sub><i>Read magic</i> allows you to identify a <i>symbol of death</i> with a DC 19 Spellcraft check. Of course, if the <i>symbol of death</i> is set to be triggered by reading it, this will trigger the symbol. <p class=sub>A <i>symbol of death</i> can be removed by a successful <i>dispel magic</i> targeted solely on the rune. An <i>erase</i> spell has no effect on a <i>symbol of death</i>. Destruction of the surface where a <i>symbol of death</i> is inscribed destroys the symbol but also triggers it. <p class=sub>Symbol of death can be made permanent with a <i>permanency</i> spell. A permanent <i>symbol of death</i> that is disabled or that has affected its maximum number of hit points becomes inactive for 10 minutes, then can be triggered again as normal. <p class=sub><i>Note</i>: Magic traps such as <i>symbol of death</i> are hard to detect and disable. A rogue (only) can use the Search skill to find a <i>symbol of death</i> and Disable Device to thwart it. The DC in each case is 25 + spell level, or 33 for <i>symbol of death</i>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9174"

}, {
	name: "Symbol of Fear",
	summary: "Panics all for 1 rnd/lvl",
	school: "Necro",
	composition: "V, S, M (mercury and phosphorus, plus powdered diamond and opal with a total value of at least 1,000 gp)",
	time: "10 min",
	range: "0 ft",
	effect: "60-ft radius",
	duration: "Special",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This spell functions like <i>symbol of death</i>, except that all creatures within 60 feet of the symbol of fear instead become panicked for 1 round per caster level. <p class=sub><i>Note</i>: Magic traps such as <i>symbol of fear</i> are hard to detect and disable. A rogue (only) can use the Search skill to find a symbol of fear and Disable Device to thwart it. The DC in each case is 25 + spell level, or 31 for <i>symbol of fear</i>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2f16"

}, {
	name: "Symbol of Insanity",
	summary: "All become insane",
	school: "Necro",
	composition: "V, S, M (mercury and phosphorus, plus powdered diamond and opal with a total value of at least 5,000 gp)",
	time: "10 min",
	range: "0 ft",
	effect: "60-ft radius",
	duration: "Special",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 9,
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "This spell functions like <i>symbol of death</i>, except that all creatures within the radius of the <i>symbol of insanity</i> instead become permanently insane (as the <i>insanity</i> spell). Unlike <i>symbol of death</i>, <i>symbol of insanity</i> has no hit point limit; once triggered, a <i>symbol of insanity</i> simply remains active for 10 minutes per caster level. <p class=sub><i>Note</i>: Magic traps such as <i>symbol of insanity</i> are hard to detect and disable. A rogue (only) can use the Search skill to find a <i>symbol of insanity</i> and Disable Device to thwart it. The DC in each case is 25 + spell level, or 33 for <i>symbol of insanity</i>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e05c"

}, {
	name: "Symbol of Pain",
	summary: "Suffer -4 att, skill & ability checks",
	school: "Necro",
	composition: "V, S, M (mercury and phosphorus, plus powdered diamond and opal with a total value of at least 1,000 gp)",
	time: "10 min",
	range: "0 ft",
	effect: "60-ft radius",
	duration: "Special",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Cleric": 6,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "This spell functions like <i>symbol of death</i>, except that each creature within the radius of a <i>symbol of pain</i> instead suffers wracking pains that impose a -4 penalty on attack rolls, skill checks, and ability checks. These effects last for 1 hour after the creature moves farther than 60 feet from the symbol. <p class=sub>Unlike <i>symbol of death</i>, <i>symbol of pain</i> has no hit point limit; once triggered, a <i>symbol of pain</i> simply remains active for 10 minutes per caster level. <p class=sub><i>Note</i>: Magic traps such as <i>symbol of pain</i> are hard to detect and disable. A rogue (only) can use the Search skill to find a symbol of pain and Disable Device to thwart it. The DC in each case is 25 + spell level, or 30 for <i>symbol of pain</i>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4d8f"

}, {
	name: "Symbol of Persuasion",
	summary: "All become charmed",
	school: "Necro",
	composition: "V, S, M (mercury and phosphorus, plus powdered diamond and opal with a total value of at least 5,000 gp)",
	time: "10 min",
	range: "0 ft",
	effect: "60-ft radius",
	duration: "Special",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This spell functions like <i>symbol of death</i>, except that all creatures within the radius of a <i>symbol of persuasion</i> instead become charmed by the caster (as the <i>charm monster</i> spell) for 1 hour per caster level. Unlike <i>symbol of death</i>, <i>symbol of persuasion</i> has no hit point limit; once triggered, a <i>symbol of persuasion</i> simply remains active for 10 minutes per caster level. <p class=sub><i>Note</i>: Magic traps such as <i>symbol of persuasion</i> are hard to detect and disable. A rogue (only) can use the Search skill to find a symbol of persuasion and Disable Device to thwart it. The DC in each case is 25 + spell level, or 31 for <i>symbol of persuasion</i>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "74"

}, {
	name: "Symbol of Sleep",
	summary: "All <10HD sleep for 3d6x10 minutes",
	school: "Necro",
	composition: "V, S, M (mercury and phosphorus, plus powdered diamond and opal with a total value of at least 1,000 gp)",
	time: "10 min",
	range: "0 ft",
	effect: "60-ft radius",
	duration: "Special",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 6,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "This spell functions like <i>symbol of death</i>, except that all creatures of 10 HD or less within 60 feet of the symbol of sleep instead fall into a catatonic slumber for 3d6×10 minutes. Unlike with the <i>sleep</i> spell, sleeping creatures cannot be awakened by nonmagical means before this time expires. <p class=sub>Unlike <i>symbol of death</i>, <i>symbol of sleep</i> has no hit point limit; once triggered, a <i>symbol of sleep</i> simply remains active for 10 minutes per caster level. <p class=sub><i>Note</i>: Magic traps such as <i>symbol of sleep</i> are hard to detect and disable. A rogue (only) can use the Search skill to find a symbol of sleep and Disable Device to thwart it. The DC in each case is 25 + spell level, or 30 for <i>symbol of sleep</i>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ae5d"
}, {
	name: "Symbol of Stunning",
	summary: "All become stunned for 1d6 rounds",
	school: "Necro",
	composition: "V, S, M (mercury and phosphorus, plus powdered diamond and opal with a total value of at least 5,000 gp)",
	time: "10 min",
	range: "0 ft",
	effect: "60-ft radius",
	duration: "Special",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 8,
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "This spell functions like <i>symbol of death</i>, except that all creatures within 60 feet of a <i>symbol of stunning</i> instead become stunned for 1d6 rounds. <p class=sub><i>Note</i>: Magic traps such as <i>symbol of stunning</i> are hard to detect and disable. A rogue (only) can use the Search skill to find a <i>symbol of stunning</i> and Disable Device to thwart it. The DC in each case is 25 + spell level, or 32 for <i>symbol of stunning</i>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "15fb"
}, {
	name: "Symbol of Weakness",
	summary: "Weakness deals 3d6 Str dmg",
	school: "Necro",
	composition: "V, S, M (mercury and phosphorus, plus powdered diamond and opal with a total value of at least 5,000 gp)",
	time: "10 min",
	range: "0 ft",
	effect: "60-ft radius",
	duration: "Special",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 8,
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "This spell functions like <i>symbol of death</i>, except that every creature within 60 feet of a <i>symbol of weakness</i> instead suffers crippling weakness that deals 3d6 points of Strength damage. <p class=sub>Unlike <i>symbol of death</i>, <i>symbol of weakness</i> has no hit point limit; once triggered, a <i>symbol of weakness</i> simply remains active for 10 minutes per caster level. <p class=sub><i>Note</i>: Magic traps such as <i>symbol of weakness</i> are hard to detect and disable. A rogue (only) can use the Search skill to find a symbol of weakness and Disable Device to thwart it. The DC in each case is 25 + spell level, or 32 for <i>symbol of weakness</i>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8349"
}, {
	name: "Sympathetic Vibration",
	summary: "2d10/rnd dmg to freestanding structure",
	school: "Evoc",
	composition: "V, S, F (a tuning fork)",
	time: "10 min",
	range: "Touch",
	effect: "Structure",
	duration: "1 rnd/lvl",
	save: "-",
	sr: "Yes",
	classes: {
		"Bard": 7
	},
	description: "By attuning yourself to a freestanding structure such as a building, bridge, or dam, you can create a damaging vibration within it. Once it begins, the vibration deals 2d10 points of damage per round to the target structure. (Hardness has no effect on the spell's damage.) You can choose at the time of casting to limit the duration of the spell; otherwise it lasts for 1 round/ level. If the spell is cast upon a target that is not freestanding the surrounding stone dissipates the effect and no damage occurs. <p class=sub><i>Sympathetic vibration</i> cannot affect creatures (including constructs). Since a structure is an unattended object, it gets no saving throw to resist the effect. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9c64"
}, {
	name: "Sympathy",
	summary: "Attracts certain type of creatures",
	school: "Ench",
	composition: "V, S, M (1,500 gp worth of crushed pearls and a drop of honey)",
	time: "1 hr",
	range: "Close",
	effect: "Location or item",
	duration: "2 hr/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "You cause an object or location to emanate magical vibrations that attract either a specific kind of intelligent creature or creatures of a particular alignment, as defined by you. The particular kind of creature to be affected must be named specifically&emdash;for example, red dragons, hill giants, wererats, lammasus, or vampires. A creature subtype (such as goblinoid) is not specific enough. Likewise, the specific alignment must be named&emdash;for example, chaotic evil, chaotic good, lawful neutral, or neutral. <p class=sub>Creatures of the specified kind or alignment feel elated and pleased to be in the area or desire to touch or to possess the object. The compulsion to stay in the area or touch the object is overpowering. If the save is successful, the creature is released from the enchantment, but a subsequent save must be made 1d6×10 minutes later. If this save fails, the affected creature attempts to return to the area or object. <p class=sub><i>Sympathy</i> counters and dispels <i>antipathy</i>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "cfae"

}, {
	name: "Telekinesis",
	summary: "Lifts or moves 25 lb/lvl, long range",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Long",
	effect: "Special",
	duration: "Conc (spec) or Inst",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "You move objects or creatures by concentrating on them. Depending on the version selected, the spell can provide a gentle, sustained force, perform a variety of combat maneuvers, or exert a single short, violent thrust.<p class=sub><i><p class=sub><i>Sustained Force</i>: </i>A sustained force moves an object weighing no more than 25 pounds per caster level (maximum 375 pounds at 15th level) up to 20 feet per round. A creature can negate the effect on an object it possesses with a successful Will save or with spell resistance.<p class=sub><p class=sub>This version of the spell can last 1 round per caster level, but it ends if you cease concentration. The weight can be moved vertically, horizontally, or in both directions. An object cannot be moved beyond your range. The spell ends if the object is forced beyond the range. If you cease concentration for any reason, the object falls or stops.<p class=sub><p class=sub>An object can be telekinetically manipulated as if with one hand. For example, a lever or rope can be pulled, a key can be turned, an object rotated, and so on, if the force required is within the weight limitation. You might even be able to untie simple knots, though delicate activities such as these require Intelligence checks.<p class=sub><i><p class=sub><i>Combat Maneuver</i>: </i>Alternatively, once per round, you can use <i>telekinesis </i>to perform a bull rush, disarm, grapple (including pin), or trip. Resolve these attempts as normal, except that they don't provoke attacks of opportunity, you use your caster level in place of your base attack bonus (for disarm and grapple), you use your Intelligence modifier (if a wizard) or Charisma modifier (if a sorcerer) in place of your Strength or Dexterity modifier, and a failed attempt doesn't allow a reactive attempt by the target (such as for disarm or trip). No save is allowed against these attempts, but spell resistance applies normally. This version of the spell can last 1 round per caster level, but it ends if you cease concentration.<p class=sub><i><p class=sub><i>Violent Thrust</i>: </i>Alternatively, the spell energy can be spent in a single round. You can hurl one object or creature per caster level (maximum 15) that are within range and all within 10 feet of each other toward any target within 10 feet per level of all the objects. You can hurl up to a total weight of 25 pounds per caster level (maximum 375 pounds at 15th level).<p class=sub><p class=sub>You must succeed on attack rolls (one per creature or object thrown) to hit the target with the items, using your base attack bonus + your Intelligence modifier (if a wizard) or Charisma modifier (if a sorcerer). Weapons cause standard damage (with no Strength bonus; note that arrows or bolts deal damage as daggers of their size when used in this manner). Other objects cause damage ranging from 1 point per 25 pounds (for less dangerous objects) to 1d6 points of damage per 25 pounds (for hard, dense objects).<p class=sub><p class=sub>Creatures who fall within the weight capacity of the spell can be hurled, but they are allowed Will saves (and spell resistance) to negate the effect, as are those whose held possessions are targeted by the spell. If a telekinesed creature is hurled against a solid surface, it takes damage as if it had fallen 10 feet (1d6 points).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8d68"
}, {
	name: "Telekinetic Sphere",
	school: "Evoc",
	classes: {
		Sorceror: 8,
		Wizard: 8
	},
	time: "1 a",
	composition: "V, S, M (a crystal sphere and a pair of small magnets)",
	range: "close (25 ft. + 5 ft./2 levels)",
	effect: "1-ft.-diameter/level sphere, centered around creatures or objects",
	duration: "1 min/lvl (D)",
	save: "Reflex negates (object)",
	sr: "yes (object)",
	description: "This spell functions like <i>resilient sphere</i>, but the creatures or objects caught inside the globe created by the spell are made nearly weightless. Anything contained within a telekinetic sphere weighs only one-sixteenth of its normal weight. You can telekinetically lift anything in the sphere that normally weighs 5,000 pounds or less. The telekinetic control extends from you out to medium range (100 feet + 10 feet per caster level) after the sphere has succeeded in encapsulating its contents.<p class=sub>You can move the sphere, along with the objects and creatures it contains that weigh a total of 5,000 pounds or less, by concentrating on the sphere. You can begin moving a sphere in the round after casting the spell. If you concentrate on doing so (a standard action), you can move the sphere as much as 30 feet in a round. If you cease concentrating, the sphere does not move in that round (if on a level surface) or descends at its falling rate (if aloft) until it reaches a level surface. You can resume concentrating on your next turn or any later turn during the spell's duration.<p class=sub>The sphere falls at a rate of only 60 feet per round, which is not fast enough to cause damage to the contents of the sphere.<p class=sub>You can move the sphere telekinetically even if you are in it.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3d9"
}, {
	name: "Telepathic Bond",
	school: "Div",
	classes: {
		Sorceror: 5,
		Wizard: 5
	},
	time: "1 a",
	composition: "V, S, M (two eggshells from two different creatures)",
	range: "close (25 ft. + 5 ft./2 levels)",
	effect: "you plus one willing creature per three levels, no two of which can be more than 30 ft. apart",
	duration: "10 min/lvl (D)",
	save: "-",
	sr: "no",
	description: "You forge a telepathic bond among yourself and a number of willing creatures, each of which must have an Intelligence score of 3 or higher. Each creature included in the link is linked to all the others. The creatures can communicate telepathically through the bond regardless of language. No special power or influence is established as a result of the bond. Once the bond is formed, it works over any distance (although not from one plane to another).<p class=sub>If desired, you may leave yourself out of the telepathic bond forged. This decision must be made at the time of casting.<p class=sub><i>Telepathic bond</i> can be made permanent with a <i>permanency</i> spell, though it only bonds two creatures per casting of <i>permanency</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "21d0"
}, {
	name: "Teleport",
	summary: "Instantly teleport one creature/lvl",
	school: "Conj",
	composition: "V",
	time: "1 a",
	range: "Prsl,touch",
	effect: "100 miles/lvl",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "This spell instantly transports you to a designated destination, which may be as distant as 100 miles per caster level. Interplanar travel is not possible. You can bring along objects as long as their weight doesn't exceed your maximum load. You may also bring one additional willing Medium or smaller creature (carrying gear or objects up to its maximum load) or its equivalent (see below) per three caster levels. A Large creature counts as two Medium creatures, a Huge creature counts as two Large creatures, and so forth. All creatures to be transported must be in contact with one another, and at least one of those creatures must be in contact with you. As with all spells where the range is personal and the target is you, you need not make a saving throw, nor is spell resistance applicable to you. Only objects held or in use (attended) by another person receive saving throws and spell resistance. <p class=sub>You must have some clear idea of the location and layout of the destination. Youcan't simply teleport to the warlord's tent if you don't know where that tent is, what it looks like, or what's in it. The clearer your mental image, the more likely the teleportation works. Areas of strong physical or magical energy may make teleportation more hazardous or even impossible. <p class=sub>To see how well the teleportation works, roll d% and consult the Teleport table. Refer to the following information for definitions of the terms on the table. <p class=sub><i>Familiarity</i>: &quot;Very familiar&quot; is a place where you have been very often and where you feel at home. &quot;Studied carefully&quot; is a place you know well, either because you can currently see it, you've been there often, or you have used other means (such as scrying) to study the place for at least one hour. &quot;Seen casually&quot; is a place that you have seen more than once but with which you are not very familiar. &quot;Viewed once&quot; is a place that you have seen once, possibly using magic. <p class=sub>&quot;False destination&quot; is a place that does not truly exist, such as if you scryed on a enemy's sanctum but instead viewed a <i>false vision</i>, or if you are teleporting to an otherwise familiar location that no longer exists as such or has been so completely altered as to no longer be familiar to you (for instance, a home that has burned to the ground). When traveling to a false destination, roll 1d20+80 to obtain results on the table, rather than rolling d%, since there is no real destination for you to hope to arrive at or even be off target from. <p class=sub><i>On Target</i>: You appear where you want to be. <p class=sub><i>Off Target</i>: You appear safely a random distance away from the destination in a random direction. Distance off target is 1d10×1d10% of the distance that was to be traveled. For example, if you tried to travel 120 miles, landed off target, and rolled 5 and 3 on the two d10s, then you would be 15% off target. That's 18 miles, in this case. The DM determines the direction off target randomly, such as by rolling 1d8 and designating 1 as north, 2 as northeast, and so forth. If you were teleporting to a coastal city and would up 18 miles out at sea, you could be in trouble. <p class=sub><i>Similar Area</i>: You wind up in an area that's visually or thematically similar to the target area. A wizard heading for her home laboratory might wind up in another wizard's laboratory or in an alchemy supply shop that has many of the same tools and implements as in her laboratory. Generally, you appear in the closest similar place within range. If the DM determines no such area exists within the spell's range, the spell simply fails instead. <p class=sub><i>Mishap</i>: You and anyone else teleporting with you have gotten &quot;scrambled.&quot; You each take 1d10 points of damage, and you reroll on the chart to see where you wind up. For these rerolls, roll 1d20+80. Each time &quot;Mishap&quot; comes up, the characters take more damage and must reroll.<table><tr class=header><td>Familiarity</td><td>On Target</td><td>Off Target</td><td>Similar Area</td><td>Mishap</td></tr> <tr><td>Very familiar</td><td>01'97</td><td>98'99</td><td>100 &emdash;</td></tr> <tr><td>Studied carefully</td><td>01'94</td><td>95'97</td><td>98'99</td> <td>100</td></tr> <tr><td>Seen casually</td><td>01'88</td><td>89'94</td><td>95'98</td><td>99'100</td></tr> <tr><td>Viewed once</td><td>01'76</td><td>77'88</td><td>89'96</td><td> 97'100</td></tr> <tr><td>False destination</td><td>(1d20+80)</td><td>&emdash;</td><td>&emdash;</td><td>81'92</td><td>93'100</td></tr></table>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "4d75"
}, {
	name: "Teleport Object",
	summary: "Instantly teleport 50 lbs/lvl",
	school: "Conj",
	composition: "V",
	time: "1 a",
	range: "Touch",
	effect: "100 miles/lvl",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "This spell functions like <i>teleport</i>, except that it teleports an object, not you. Creadtures and magical forces (such as a delayed blast fireball bead) cannot be teleported. <p class=sub>If desired, the target object can be sent to a distant location on the Ethereal Plane. In this case, the point from which the object was teleported remains faintly magical until the item is retrieved. A successful targeted <i>dispel magic</i> spell cast on that point brings the vanished item back from the Ethereal Plane<p class=sub>See <i>teleport</i> for a table of chances for success.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6acb"
}, {
	name: "Teleport, Greater",
	summary: "Instantly teleport one creature/lvl",
	school: "Conj",
	composition: "V",
	time: "1 a",
	range: "Prsl,touch",
	effect: "Unlimited",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "This spell functions like <i>teleport</i>, except that there is no range limit and there is no chance you arrive off target. In addition, you need not have seen the destination, but in that case you must have at least a reliable summary of the place to which you are teleporting (such as a descriptioned summary from someone else or a particularly precise map). If you attempt to teleport with insufficient information (or with misleading information), you disappear and simply reappear in your original location. Interplanar travel is not possible.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6a4c"
}, {
	name: "Teleportation Circle",
	summary: "Teleports all to designated spot",
	school: "Conj",
	composition: "V, M (amber dust to cover the area of the circle (cost 1,000 gp)",
	time: "10 min",
	range: "0 ft",
	effect: "Circle 5-ft radius",
	duration: "10 min/lvl (D)",
	save: "-",
	sr: "Yes",
	classes: {
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "You create a circle on the floor or other horizontal surface that teleports, as greater teleport, any creature who stands on it to a designated spot. Once you designate the destination for the circle, you can't change it. The spell fails if you attempt to set the circle to teleport creatures into a solid object, to a place with which you are not familiar and have no clear summary, or to another plane. <p class=sub>The circle itself is subtle and nearly impossible to notice. If you intend to keep creatures from activating it accidentally, you need to mark the circle in some way, such as by placing it on a raised platform. <p class=sub><i>Teleportation circle</i> can be made permanent with a <i>permanency</i> spell. A permanent teleportation circle that is disabled becomes inactive for 10 minutes, then can be triggered again as normal. <p class=sub><i>Note</i>: Magic traps such as <i>teleportation circle</i> are hard to detect and disable. A rogue (only) can use the Search skill to find the circle and Disable Device to thwart it. The DC in each case is 25 + spell level, or 34 in the case of <i>teleportation circle</i>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b8cc"
}, {
	name: "Temporal Stasis",
	summary: "Target placed in suspended animation",
	school: "Trans",
	composition: "V, S, M (a powder composed of diamond, emerald, ruby, and sapphire dust with a total value of at least 5,000 gp)",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "Permanent",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "<p class=sub>You must succeed on a melee touch attack. You place the subject into a state of suspended animation. For the creature, time ceases to flow and its condition becomes fixed. The creature does not grow older. Its body functions virtually cease, and no force or effect can harm it. This state persists until the magic is removed (such as by a successful <i>dispel magic</i> spell or a <i>freedom</i> spell)",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "794c"

}, {
	name: "Time Stop",
	summary: "You act freely for 1d4+1 rounds",
	school: "Trans",
	composition: "V",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1d4+1 rounds",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "This spell seems to make time cease to flow for everyone but you. In fact, you speed up so greatly that all other creatures seem frozen, though they are actually still moving at their normal speeds. You are free to act for 1d4+1 rounds of apparent time. Normal and magical fire, cold, gas, and the like can still harm you. While the <i>time stop</i> is in effect, other creatures are invulnerable to your attacks and spells; you cannot target such creatures with any attack or spell. A spell that affects an area and has a duration longer than the remaining duration of the time stop (such as <i>cloudkill</i>) have their normal effects on other creatures once the <i>time stop</i> ends. Most spellcasters use the additional time to improve their defenses, summon allies, or flee from combat. <p class=sub>You cannot move or harm items held, carried, or worn by a creature stuck in normal time, but you can affect any item that is not in another creature's possession. <p class=sub>You are undetectable while <i>time stop</i> lasts. You cannot enter an area protected by an <i>antimagic field</i> while under the effect of <i>time stop</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8d8"
}, {
	name: "Tiny Hut",
	school: "Evoc",
	classes: {
		Bard: 3, 
		Sorceror: 3,
		Wizard: 3
	},
	time: "1 a",
	composition: "V, S, M (a small crystal bead)",
	range: "20 ft.",
	effect: "20-ft.-radius sphere centered on your location",
	duration: "2 hours/lvl (D)",
	save: "-",
	sr: "no",
	description: "You create an unmoving, opaque sphere of force of any color you desire around yourself. Half the sphere projects above the ground, and the lower hemisphere passes through the ground. As many as nine other Medium creatures can fit into the field with you; they can freely pass into and out of the hut without harming it. However, if you remove yourself from the hut, the spell ends.<p class=sub>The temperature inside the hut is 70&deg;F if the exterior temperature is between 0&deg; and 100&deg;F. An exterior temperature below 0&deg; or above 100&deg; lowers or raises the interior temperature on a 1-degree-for-1 basis. The hut also provides protection against the elements, such as rain, dust, and sandstorms. The hut withstands any wind of less than hurricane force, but a hurricane (75+ mph wind speed) or greater force destroys it.<p class=sub>The interior of the hut is a hemisphere. You can illuminate it dimly upon command or extinguish the light as desired. Although the force field is opaque from the outside, it is transparent from within. Missiles, weapons, and most spell effects can pass through the hut without affecting it, although the occupants cannot be seen from outside the hut (they have total concealment).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f67c"
}, {
	name: "Tongues",
	summary: "Speak and understand any language",
	school: "Div",
	composition: "V, M/DF (a small clay model of a ziggurat, which shatters when the verbal component is pronounced)",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "10 min/lvl",
	save: "Will negs",
	sr: "-",
	classes: {
		"Bard": 3,
		"Cleric": 5,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "This spell grants the creature touched the ability to speak and understand the language of any intelligent creature, whether it is a racial tongue or a regional dialect. The subject can speak only one language at a time, although it may be able to understand several languages. <i>Tongues</i> does not enable the subject to speak with creatures who don't speak. The subject can make itself understood as far as its voice carries. This spell does not predispose any creature addressed toward the subject in any way. <p class=sub><i>Tongues</i> can be made permanent with a <i>permanency</i> spell",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a40c"

}, {
	name: "Touch of Fatigue",
	summary: "Target becomes fatigued",
	school: "Necro",
	composition: "V, S, M (a drop of sweat)",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 rnd/lvl",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Sorceror": 1,
		"Wizard": 1
	},
	description: "You channel negative energy through your touch, fatiguing the target. You must succeed on a touch attack to strike a target. <p class=sub>The subject is immediately fatigued for the spell's duration. <p class=sub>This spell has no effect on a creature that is already fatigued. Unlike with normal fatigue, the effect ends as soon as the spell's duration expires",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7b48"

}, {
	name: "Touch of Idiocy",
	summary: "1d6 dmg to Int, Wis, Cha",
	school: "Ench",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One living creature",
	duration: "10 min/lvl",
	save: "-",
	sr: "Yes",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "With a touch, you reduce the target's mental faculties. Your successful melee touch attack applies a 1d6 penalty to the target's Intelligence, Wisdom, and Charisma scores. This penalty can't reduce any of these scores below 1. <p class=sub>This spell's effect may make it impossible for the target to cast some or all of its spells, if the requisite ability score drops below the minimum required to cast spells of that level.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a28d"
}, {
	name: "Transformation",
	school: "Trans",
	classes: {
		Sorceror: 6,
		Wizard: 6
	},
	time: "1 a",
	composition: "V, S, M (a <i>potion of bull's strength</i>, which you drink and whose effects are subsumed by the spell effects)",
	range: "Self",
	effect: "personal",
	duration: "1 round/lvl",
	description: "You become a fighting machine&emdash;stronger, tougher, faster, and more skilled in combat. Your mindset changes so that you relish combat and you can't cast spells, even from magic items.<p class=sub>You gain a +4 enhancement bonus to Strength, Dexterity, and Constitution, a +4 natural armor bonus to AC, a +5 competence bonus on Fortitude saves, and proficiency with all simple and martial weapons. Your base attack bonus equals your character level.<p class=sub>You lose your spellcasting ability, including your ability to use spell activation or spell completion magic items, just as if the spells were no longer on your class list.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "23c1"
}, {
	name: "Transmute Metal to Wood",
	summary: "All metal becomes wood",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Long",
	effect: "40-ft radius",
	duration: "Instantaneous",
	save: "-",
	sr: "Yes",
	classes: {
		"Druid": 8
	},
	description: "This spell enables you to change all metal objects within its area to wood. Weapons, armor, and other metal objects carried by creatures are affected as well. A magic object made of metal effectively has spell resistance equal to 20 + its caster level against this spell. Artifacts cannot be transmuted. Weapons converted from metal to wood take a -2 penalty on attack and damage rolls. The armor bonus of any armor converted from metal to wood is reduced by 2. Weapons changed by this spell splinter and break on any natural attack roll of 1 or 2, and armor changed by this spell loses an additional point of armor bonus every time it is struck with a natural attack roll of 19 or 20. <p class=sub>Only <i>limited wish</i>, <i>miracle</i>, <i>wish</i>, or similar magic can restore a transmuted object to its metallic state. Otherwise, for example, a metal door changed to wood is forevermore a wooden door.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "370"
}, {
	name: "Transmute Mud to Rock",
	summary: "Transforms sand or mud to soft stone",
	school: "Trans",
	composition: "V, S, M/DF (sand, lime, and water)",
	time: "1 a",
	range: "Medium",
	effect: "2 10-ft cubes/lvl",
	duration: "Permanent",
	save: "Special",
	sr: "-",
	classes: {
		"Druid": 6,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "This spell transforms normal mud or quicksand of any depth into soft stone (sandstone or a similar mineral) permanently. Any creature in the mud is allowed a Reflex save to escape before the area is hardened to stone. <p class=sub><i>Transmute mud to rock</i> counters and dispels <i>transmute rock to mud</i>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5d48"

}, {
	name: "Transmute Rock to Mud",
	summary: "Transforms unworked stone to mud",
	school: "Trans",
	composition: "V, S, M/DF (clay and water)",
	time: "1 a",
	range: "Medium",
	effect: "2 10-ft cubes/lvl",
	duration: "Permanent",
	save: "Special",
	sr: "-",
	classes: {
		"Druid": 6,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "This spell turns natural, uncut or unworked rock of any sort into an equal volume of mud. If the spell is cast upon a boulder, for example, the boulder collapses into mud. Magical stone is not affected by the spell. The depth of the mud created cannot exceed 10 feet. A creature unable to levitate, fly, or otherwise free itself from the mud sinks until hip- or chest-deep, reducing its speed to 5 feet and causing a -2 penalty on attack rolls and AC. Brush thrown atop the mud can support creatures able to climb on top of it. Creatures large enough to walk on the bottom can wade through the area at a speed of 5 feet. <p class=sub>If <i>transmute rock to mud</i> is cast upon the ceiling of a cavern or tunnel, the mud falls to the floor and spreads out in a pool at a depth of 5 feet. For example, a 10th-level caster could convert twenty 10-foot cubes into mud. Pooling on the floor, this mud would cover an area of forty 10-foot squares to a depth of 5 feet. The falling mud and the ensuing cave-in deal 8d6 points of bludgeoning damage to anyone caught directly beneath the area, or half damage to those who succeed on Reflex saves. <p class=sub>Castles and large stone buildings are generally immune to the effect of the spell, since <i>transmute rock to mud</i> can't affect worked stone and doesn't reach deep enough to undermine such buildings' foundations. However, small buildings or structures often rest upon foundations shallow enough to be damaged or even partially toppled by this spell. <p class=sub>The mud remains until a successful <i>dispel magic</i> or <i>transmute mud to rock</i> spell restores its substance&emdash;but not necessarily its form. Evaporation turns the mud to normal dirt over a period of days. The exact time depends on exposure to the sun, wind, and normal drainage",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b30c"

}, {
	name: "Transport via Plants",
	summary: "Move instantly from plant to plant",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Unlimited",
	effect: "Willing creatures",
	duration: "1 round",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 7
	},
	description: "You can enter any normal plant (Medium or larger) and pass any distance to a plant of the same kind in a single round, regardless of the distance separating the two. The entry plant must be alive. The destination plant need not be familiar to you, but it also must be alive. If you are uncertain of the location of a particular kind of destination plant, you need merely designate direction and distance (&quot;an oak tree one hundred miles due north of here&quot;), and the <i>transport via plants</i> spell moves you as close as possible to the desired location. If a particular destination plant is desired (the oak tree outside your druid grove, for instance), but the plant is not living, the spell fails and you are ejected from the entry plant. <p class=sub><i>You can bring along objects as long as their weight doesn't exceed your maximum load. You may also bring one additional willing Medium or smaller creature (carrying gear or objects up to its maximum load) or its equivalent per three caster levels. Use the following equivalents to determine the maximum number of larger creatures you can bring along</i>: A Large creature counts as two Medium creatures, a Huge creature counts as two Large creatures, and so forth. All creatures to be transported must be in contact with one another, and at least one of those creatures must be in contact with you. <p class=sub>You can't use this spell to travel through plant creatures such as shambling mounds and treants. <p class=sub>The destruction of an occupied plant slays you and any creatures you have brought along, and ejects the bodies and all carried objects from the tree.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "9b7"
}, {
	name: "Trap the Soul",
	summary: "Imprisons target within gem",
	school: "Conj",
	composition: "V, S, M or F (before the actual casting of trap the soul, you must procure a gem of at least 1,000 gp value for every Hit Die possessed by the creature to be trapped (for example, it requires a gem of 10,000 gp value to trap a 10 HD creature)",
	time: "1 a",
	range: "Close",
	effect: "One creature",
	duration: "Permanent",
	save: "Special",
	sr: "Yes",
	classes: {
		"Sorceror": 9,
		"Wizard": 9
	},
	description: "<i>Trap the soul</i> forces a creature's life force (and its material body) into a gem. <p class=sub>The gem holds the trapped entity indefinitely or until the gem is broken and the life force is released, which allows the material body to reform. If the trapped creature is a powerful creature from another plane (which could mean a character trapped by an inhabitant of another plane when the character is not on the Material Plane), it can be required to perform a service immediately upon being freed. Otherwise, the creature can go free once the gem imprisoning it is broken. <p class=sub>Depending on the version selected, the spell can be triggered in one of two ways. <p class=sub><i>Spell Completion</i>: First, the spell can be completed by speaking its final word as a standard action as if you were casting a regular spell at the subject. This allows spell resistance (if any) and a Will save to avoid the effect. If the creature's name is spoken as well, any spell resistance is ignored and the save DC increases by 2. If the save or spell resistance is successful, the gem shatters. <p class=sub><i>Trigger Object</i>: The second method is far more insidious, for it tricks the subject into accepting a trigger object inscribed with the final spell word, automatically placing the creature's soul in the trap. To use this method, both the creature's name and the trigger word must be inscribed on the trigger object when the gem is enspelled. A <i>sympathy</i> spell can also be placed on the trigger object. As soon as the subject picks up or accepts the trigger object, its life force is automatically transferred to the gem without the benefit of spell resistance or a save",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d85b"
}, {
	name: "Tree Shape",
	summary: "You look exactly like tree",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 hr/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 3,
		"Ranger": 3
	},
	description: "By means of this spell, you are able to assume the form of a Large living tree or shrub or a Large dead tree trunk with a small number of limbs. The closest inspection cannot reveal that the tree in question is actually a magically concealed creature. To all normal tests you are, in fact, a tree or shrub, although a <i>detect magic</i> spell reveals a faint transmutation on the tree. While in tree form, you can observe all that transpires around you just as if you were in your normal form, and your hit points and save bonuses remain unaffected. You gain a +10 natural armor bonus to AC but have an effective Dexterity score of 0 and a speed of 0 feet. You are immune to critical hits while in tree form. All clothing and gear carried or worn changes with you. <p class=sub>You can dismiss tree shape as a free action (instead of as a standard action).",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "1613"
}, {
	name: "Tree Stride",
	summary: "Step from tree to another tree",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "1 hr/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 6,
		"Ranger": 4
	},
	description: "You gain the ability to enter trees and move from inside one tree to inside another tree. The first tree you enter and all others you enter must be of the same kind, must be living, and must have girth at least equal to yours. By moving into an oak tree (for example), you instantly know the location of all other oak trees within transport range (see below) and may choose whether you want to pass into one or simply step back out of the tree you moved into. You may choose to pass to any tree of the appropriate kind within the transport range as shown on the following table.<table> <tr class=header><td>Type of Tree</td><td>Transport Range</td></tr> <tr><td>Oak, ash, yew</td><td>3,000 feet</td></tr> <td><td>Elm, linden</td><td>2,000 feet</td></td> <tr><td>Other deciduous</td><td>1,500 feet</td></tr> <tr><td>Any coniferous</td><td>1,000 feet</td></tr> <tr><td>All other trees</td><td>500 feet</td></tr> </table> <p class=sub>You may move into a tree up to one time per caster level (passing from one tree to another counts only as moving into one tree). The spell lasts until the duration expires or you exit a tree. This means that in a thick oak forest, a 10th-level druid could make ten transports over the course of 10 rounds, traveling as far as 30,000 feet (about 6 miles) in doing so. Each transport is a full-round action. <p class=sub>You can, at your option, remain within a tree without transporting yourself, but you are forced out when the spell ends. If the tree in which you are concealed is chopped down or burned, you are slain if you do not exit before the process is complete.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8cf8"
}, {
	name: "True Resurrection",
	summary: "Resurrect target within 10 years/lvl",
	school: "Conj",
	composition: "V, S, M (a sprinkle of holy water and diamonds worth a total of at least 25,000 gp), DF",
	time: "10 min",
	range: "Touch",
	effect: "Dead creature",
	duration: "Instantaneous",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 10
	},
	description: "This spell functions like <i>raise dead</i>, except that you can resurrect a creature that has been dead for as long as 10 years per caster level. This spell can even bring back creatures whose bodies have been destroyed, provided that you unambiguously identify the deceased in some fashion (reciting the deceased's time and place of birth or death is the most common method). <p class=sub>Upon completion of the spell, the creature is immediately restored to full hit points, vigor, and health, with no loss of level (or Constitution points) or prepared spells. <p class=sub>You can revive someone killed by a death effect or someone who has been turned into an undead creature and then destroyed. This spell can also resurrect elementals or outsiders, but it can't resurrect constructs or undead creatures. <p class=sub>Even <i>true resurrection</i> can't restore to life a creature who has died of old age",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "12fd"

}, {
	name: "True Seeing",
	summary: "See all things as they really are",
	school: "Div",
	composition: "V, S, M (an ointment for the eyes that costs 250 gp and is made from mushroom powder, saffron, and fat)",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 6,
		"Druid": 8,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "You confer on the subject the ability to see all things as they actually are. The subject sees through normal and magical darkness, notices secret doors hidden by magic, sees the exact locations of creatures or objects under <i>blur</i> or <i>displacement</i> effects, sees invisible creatures or objects normally, sees through illusions, and sees the true form of polymorphed, changed, or transmuted things. Further, the subject can focus its vision to see into the Ethereal Plane (but not into extradimensional spaces). The range of true seeing conferred is 120 feet. <p class=sub><i>True seeing</i>, however, does not penetrate solid objects. It in no way confers X-ray vision or its equivalent. It does not negate concealment, including that caused by fog and the like. <i>True seeing</i> does not help the viewer see through mundane disguises, spot creatures who are simply hiding, or notice secret doors hidden by mundane means. In addition, the spell effects cannot be further enhanced with known magic, so one cannot use true seeing through a <i>crystal ball</i> or in conjunction with <i>clairaudience/ clairvoyance</i>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "327a"

}, {
	name: "True Strike",
	summary: "Adds +20 to your next attack",
	school: "Div",
	composition: "V, F (a small wooden replica of an archery target)",
	time: "1a",
	range: "Self",
	effect: "Caster",
	duration: "1 rnd",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "You gain temporary, intuitive insight into the immediate future during your next attack. Your next single attack roll (if it is made before the end of the next round) gains a +20 insight bonus. Additionally, you are not affected by the miss chance that applies to attackers trying to strike a concealed target. ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "da06"
}, {
	name: "Undeath to Death",
	summary: "Destroys 1d4 HD/level undead",
	school: "Necro",
	composition: "V, S, M/DF (the powder of a crushed diamond worth at least 500 gp)",
	time: "1 a",
	range: "Medium",
	effect: "40-ft radius",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "This spell functions like <i>circle of death</i>, except that it destroys undead creatures as noted above",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a721"

}, {
	name: "Undetectable Alignment",
	summary: "Conceals alignment for 24 hours",
	school: "Abjur",
	composition: "V, S,",
	time: "1 a",
	range: "Close",
	effect: "One creat or item",
	duration: "24 hours",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 2,
		"Cleric": 3,
		"Paladin": 2
	},
	description: "An <i>undetectable alignment</i> spell conceals the alignment of an object or a creature from all forms of divination.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8bc8"
}, {
	name: "Unhallow",
	summary: "Unholy local, magic circle, -4 turning",
	school: "Evoc",
	composition: "V, S, M (herbs, oils, and incense worth at least 1,000 gp, plus 1,000 gp per level of the spell to be tied to the unhallowed area)",
	time: "1 day",
	range: "Touch",
	effect: "40-ft/lvl radius",
	duration: "Instantaneous",
	save: "Special",
	sr: "Sp",
	classes: {
		"Cleric": 6,
		"Druid": 6
	},
	description: "<i>Unhallow</i> makes a particular site, building, or structure an unholy site. This has three major effects. <p class=sub>First, the site or structure is guarded by a <i>magic circle against good</i> effect. Second, all turning checks made to turn undead take a -4 penalty, and turning checks to rebuke undead gain a +4 profane bonus. Spell resistance does not apply to this effect. (This provision does not apply to the druid version of the spell.) <p class=sub>Finally, you may choose to fix a single spell effect to the <i>unhallowed</i> site. The spell effect lasts for one year and functions throughout the entire site, regardless of its normal duration and area or effect. You may designate whether the effect applies to all creatures, creatures that share your faith or alignment, or creatures that adhere to another faith or alignment. For example, you may create a <i>bless</i> effect that aids all creatures of like alignment or faith in the area, or a bane effect that hinders creatures of the opposite alignment or an enemy faith. At the end of the year, the chosen effect lapses, but it can be renewed or replaced simply by casting <i>unhallow</i> again. <p class=sub>Spell effects that may be tied to an <i>unhallowed</i> site include <i>aid, bane, bless, cause fear, darkness, daylight, death ward, deeper darkness, detect magic, detect good, dimensional anchor, discern lies, dispel magic, endure elements, freedom of movement, invisibility purge, protection from energy, remove fear, resist energy, silence, tongues,</i> and <i>zone of truth</i>. Saving throws and spell resistance might apply to these spells' effects. (See the individual spell summarys for descriptions.) <p class=sub>An area can receive only one unhallow spell (and its associated spell effect) at a time. <p class=sub><i>Unhallow</i> counters but does not <i>dispel hallow</i>",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "eb9f"

}, {
	name: "Unholy Aura",
	summary: "+4 AC, +4 resistance, SR 25 vs good",
	school: "Abjur",
	composition: "V, S, F (a tiny reliquary containing some sacred relic, such as a piece of parchment from an unholy text)",
	time: "1 a",
	range: "20-ft",
	effect: "One creature/lvl",
	duration: "1 rnd/lvl (D)",
	save: "Special",
	sr: "Yes",
	classes: {
		"Cleric": 9
	},
	description: "A malevolent darkness surrounds the subjects, protecting them from attacks, granting them resistance to spells cast by good creatures, and weakening good creatures when they strike the subjects. This abjuration has four effects. <p class=sub>First, each warded creature gains a +4 deflection bonus to AC and a +4 resistance bonus on saves. Unlike the effect of protection from good, this benefit applies against all attacks, not just against attacks by good creatures. <p class=sub>Second, a warded creature gains spell resistance 25 against good spells and spells cast by good creatures. <p class=sub>Third, the abjuration blocks possession and mental influence, just <i>as protection from good</i> does. <p class=sub>Finally, if a good creature succeeds on a melee attack against a warded creature, the offending attacker takes 1d6 points of temporary Strength damage (Fortitude negates).  The reliquary costs at least 500 gp.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "118c"
}, {
	name: "Unholy Blight",
	summary: "Deals 1d8/2lvl to good half to neutral",
	school: "Evoc",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "20-ft radius",
	duration: "Instantaneous",
	save: "Will part",
	sr: "Yes",
	classes: {
		"Cleric": 9
	},
	description: "You call up unholy power to smite your enemies. The power takes the form of a cold, cloying miasma of greasy darkness. Only good and neutral (not evil) creatures are harmed by the spell. <p class=sub>The spell deals 1d8 points of damage per two caster levels (maximum 5d8) to a good creature (or 1d6 per caster level, maximum 10d6, to a good outsider) and causes it to be sickened for 1d4 rounds. A successful Will save reduces damage to half and negates the sickened effect. The effects cannot be negated by <i>remove disease</i> or <i>heal</i>, but <i>remove curse</i> is effective. <p class=sub>The spell deals only half damage to creatures who are neither evil nor good, and they are not sickened. Such a creature can reduce the damage in half again (down to one-quarter) with a successful Will save.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6055"
}, {
	name: "Unseen Servant",
	summary: "Str 2, 15-ft move",
	school: "Conj",
	composition: "V, S, M (a piece of string and a bit of wood)",
	time: "1 a",
	range: "Close",
	effect: "Invisible servant",
	duration: "1 hr/lvl",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "An <i>unseen servant</i> is an invisible, mindless, shapeless force that performs simple tasks at your command. It can run and fetch things, open unstuck doors, and hold chairs, as well as clean and mend. The servant can perform only one activity at a time, but it repeats the same activity over and over again if told to do so, thus allowing you to command it to clean the floor and then turn your attention elsewhere as long as you remain within range. It can open only normal doors, drawers, lids, and the like. It has an effective Strength score of 2 (so it can lift 20 pounds or drag 100 pounds). It can trigger traps and such, but it can exert only 20 pounds of force, which is not enough to activate certain pressure plates and other devices. It can't perform any task that requires a skill check with a DC higher than 10 or that requires a check using a skill that can't be used untrained. Its speed is 15 feet. <p class=sub>The servant cannot attack in any way; it is never allowed an attack roll. It cannot be killed, but it dissipates if it takes 6 points of damage from area attacks. (It gets no saves against attacks.) If you attempt to send it beyond the spell's range (measured from your current position), the servant ceases to exist",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "8ac"

}, {
	name: "Vampiric Touch",
	summary: "Deals 1d6/2 lvls (10), caster gains hps",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "Touch",
	effect: "One living creature",
	duration: "Inst / 1 hr",
	save: "-",
	sr: "Yes",
	classes: {
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "You must succeed on a melee touch attack. Your touch deals 1d6 points of damage per two caster levels (maximum 10d6). You gain temporary hit points equal to the damage you deal. However, you can't gain more than the subject's current hit points +10, which is enough to kill the subject. The temporary hit points disappear 1 hour later.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "a1fe"
}, {
	name: "Veil",
	summary: "Change appearance of creatures",
	school: "Illus",
	composition: "V, S",
	time: "1 a",
	range: "Long",
	effect: "Creatures in 30-ft",
	duration: "Conc +1 hr/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Bard": 7,
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "You instantly change the appearance of the subjects and then maintain that appearance for the spell's duration. You can make the subjects appear to be anything you wish. A party might be made to resemble a mixed band of sprites led by a treant. The subjects look, feel, and smell just like the creatures the spell makes them resemble. Affected creatures resume their normal appearances if slain. You must succeed on a Disguise check to duplicate the appearance of a specific individual. This spell gives you a +10 bonus on the check. <p class=sub>Unwilling targets can negate the spell's effect on them by making Will saves or with spell resistance. Those who interact with the subjects can attempt Will disbelief saves to see through the glamer, but spell resistance doesn't help.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "77ad"
}, {
	name: "Ventriloquism",
	summary: "Throw voice",
	school: "Illus",
	composition: "V, F (a parchment rolled up into a small cone)",
	time: "1 a",
	range: "Close",
	effect: "Usually speech",
	duration: "1 min/lvl (D)",
	save: "Will dsblf",
	sr: "-",
	classes: {
		"Bard": 2,
		"Sorceror": 2,
		"Wizard": 2
	},
	description: "You can make your voice (or any sound that you can normally make vocally) seem to issue from someplace else, such as from another creature, a statue, from behind a door, down a passage, etc. You can speak in any language you know. With respect to such voices and sounds, anyone who hears the sound and rolls a successful save recognizes it as illusory (but still hears it). ",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "88a0"
}, {
	name: "Virtue",
	summary: "Target gains 1 temporary hp",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "One creature",
	duration: "1 min",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Cleric": 1,
		"Druid": 1,
		"Paladin": 1
	},
	description: "The subject gains 1 temporary hit point.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ac06"
}, {
	name: "Vision",
	summary: "Learn tales about person or place",
	school: "Div",
	composition: "V, S, M,F",
	time: "1 a",
	range: "Self",
	effect: "Caster",
	duration: "Special",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "This spell functions like <i>legend lore</i>, except that it works more quickly but produces some strain on you. You pose a question about some person, place, or object, then cast the spell. If the person or object is at hand or if you are in the place in question, you receive a vision about it by succeeding on a caster level check (1d20 +1 per caster level; maximum +25) against DC 20. If only descriptioned information on the person, place, or object is known, the DC is 25, and the information gained is incomplete. If only rumors are known, the DC is 30, and the information gained is vague. <p class=sub><i>XP Cost</i>: 100 XP.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "afe8"
}, {
	name: "Wail of the Banshee",
	summary: "Kills one living creature/level",
	school: "Necro",
	composition: "V",
	time: "1 a",
	range: "Close",
	effect: "Living in 40-ft radius",
	duration: "Instantaneous",
	save: "Fort negs",
	sr: "Yes",
	classes: {
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "You emit a terrible scream that kills creatures that hear it (except for yourself). Creatures closest to the point of origin are affected first.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d6c"
}, {
	name: "Wall of Fire",
	summary: "2d4 dmg within 10-ft, 1d4 within 20-ft",
	school: "Evoc",
	composition: "V, S, M/DF (a small piece of phosphorus)",
	time: "1 a",
	range: "Medium",
	effect: "20-ft/lvl or 5-ft/2 lvls",
	duration: "Conc + 1 rnd/lvl",
	save: "-",
	sr: "Yes",
	classes: {
		"Druid": 6,
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "An immobile, blazing curtain of shimmering violet fire springs into existence. One side of the wall, selected by you, sends forth waves of heat, dealing 2d4 points of fire damage to creatures within 10 feet and 1d4 points of fire damage to those past 10 feet but within 20 feet. The wall deals this damage when it appears and on your turn each round to all creatures in the area. In addition, the wall deals 2d6 points of fire damage +1 point of fire damage per caster level (maximum +20) to any creature passing through it. The wall deals double damage to undead creatures. <p class=sub>If you evoke the wall so that it appears where creatures are, each creature takes damage as if passing through the wall. <p class=sub>If any 5-foot length of wall takes 20 points of cold damage or more in 1 round, that length goes out. (Do not divide cold damage by 4, as normal for objects.) <p class=sub><i>Wall of fire</i> can be made permanent with a <i>permanency</i> spell. A permanent wall of fire that is extinguished by cold damage becomes inactive for 10 minutes, then reforms at normal strength",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "d259"

}, {
	name: "Wall of Force",
	summary: "Immovable wall immune to all dmg",
	school: "Evoc",
	composition: "V, S, M (a pinch of powder made from a clear gem)",
	time: "1 a",
	range: "Close",
	effect: "10-ft sq/lvl",
	duration: "1 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "A <i>wall of force</i> spell creates an invisible wall of force. The wall cannot move, it is immune to damage of all kinds, and it is unaffected by most spells, including <i>dispel magic</i>. However, <i>disintegrate</i> immediately destroys it, as does a <i>rod of cancellation</i>, a <i>sphere of annihilation</i>, or a <i>Mordenkainen's disjunction</i> spell. Breath weapons and spells cannot pass through the wall in either direction, although <i>dimension door</i>, <i>teleport</i>, and similar effects can bypass the barrier. It blocks ethereal creatures as well as material ones (though ethereal creatures can usually get around the wall by floating under or over it through material floors and ceilings). Gaze attacks can operate through a <i>wall of force</i>. <p class=sub>The caster can form the wall into a flat, vertical plane whose area is up to one 10- foot square per level. The wall must be continuous and unbroken when formed. If its surface is broken by any object or creature, the spell fails. <p class=sub><i>Wall of force</i> can be made permanent with a <i>permanency</i> spell",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "dedc"

}, {
	name: "Wall of Ice",
	summary: "Ice wall with 3 HP/lvl",
	school: "Evoc",
	composition: "V, S, M (a small piece of quartz or similar rock crystal)",
	time: "1 a",
	range: "Medium",
	effect: "10-ft sq/lvl or 3+1/lvl",
	duration: "1 min/lvl",
	save: "Ref negs",
	sr: "Yes",
	classes: {
		"Sorceror": 5,
		"Wizard": 5
	},
	description: "This spell creates an anchored plane of ice or a hemisphere of ice, depending on the version selected. A <i>wall of ice</i> cannot form in an area occupied by physical objects or creatures. Its surface must be smooth and unbroken when created. Any creature adjacent to the wall when it is created may attempt a Reflex save to disrupt the wall as it is being formed. A successful save indicates that the spell automatically fails. Fire, including a <i>fireball</i> spell and red dragon breath, can melt a wall of ice, and it deals full damage to the wall (instead of the normal half damage taken by objects). Suddenly melting a <i>wall of ice</i> creates a great cloud of steamy fog that lasts for 10 minutes. <p class=sub><i>Ice Plane</i>: A sheet of strong, hard ice appears. The wall is 1 inch thick per caster level. It covers up to a 10-foot-square area per caster level (so a 10th-level wizard can create a wall of ice 100 feet long and 10 feet high, a wall 50 feet long and 20 feet high, or some other combination of length and height that does not exceed 1,000 square feet). The plane can be oriented in any fashion as long as it is anchored. A vertical wall need only be anchored on the floor, while a horizontal or slanting wall must be anchored on two opposite sides. <p class=sub>The wall is primarily defensive in nature and is used to stop pursuers from following you and the like. Each 10-foot square of wall has 3 hit points per inch of thickness. Creatures can hit the wall automatically. A section of wall whose hit points drop to 0 is breached. If a creature tries to break through the wall with a single attack, the DC for the Strength check is 15 + caster level. <p class=sub>Even when the ice has been broken through, a sheet of frigid air remains. Any creature stepping through it (including the one who broke through the wall) takes 1d6 points of cold damage +1 point per caster level (no save). <p class=sub><i>Hemisphere</i>: The wall takes the form of a hemisphere whose maximum radius is 3 feet + 1 foot per caster level. Thus, a 7th-level caster can create a hemisphere 10 feet in radius. The hemisphere is as hard to break through as the <i>ice plane</i> form, but it does not deal damage to those who go through a breach",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b8b9"

}, {
	name: "Wall of Iron",
	summary: "Iron wall with 30 hp/4 levels",
	school: "Conj",
	composition: "V, S, M (a small piece of sheet iron plus gold dust worth 50 gp (1 pound of gold dust)",
	time: "1 a",
	range: "Medium",
	effect: "5-ft sq/lvl",
	duration: "Instantaneous",
	save: "Special",
	sr: "-",
	classes: {
		"Sorceror": 7,
		"Wizard": 7
	},
	description: "You cause a flat, vertical iron wall to spring into being. This wall can be used to seal off a passage or close a breach, for the wall inserts itself into any surrounding nonliving material if its area is sufficient to do so. The wall cannot be conjured so that it occupies the same space as a creature or another object. It must always be a flat plane, though you can shape its edges to fit the available space. <p class=sub>A <i>wall of iron</i> is 1 inch thick per four caster levels. You can double the wall's area by halving its thickness. Each 5-foot square of the wall has 30 hit points per inch of thickness and hardness 10. A section of wall whose hit points drop to 0 is breached. If a creature tries to break through the wall with a single attack, the DC for the Strength check is 25 + 2 per inch of thickness. <p class=sub>If you desire, the wall can be created vertically resting on a flat surface but not attached to the surface, so that it can be tipped over to fall on and crush creatures beneath it. The wall is 50% likely to tip in either direction if left unpushed. Creatures can push the wall in one direction rather than letting it fall randomly. A creature must make a DC 40 Strength check to push the wall over. Creatures with room to flee the falling wall may do so by making successful Reflex saves. Any Large or smaller creature that fails takes 10d6 points of damage. The wall cannot crush Huge and larger creatures. <p class=sub>Like any iron wall, this wall is subject to rust, perforation, and other natural phenomena",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c0be"
}, {
	name: "Wall of Stone",
	summary: "Stone wall with 15 hp/4 levels",
	school: "Conj",
	composition: "V, S, M/DF (a small block of granite)",
	time: "1 a",
	range: "Medium",
	effect: "5-ft sq/lvl",
	duration: "Instantaneous",
	save: "Special",
	sr: "-",
	classes: {
		"Cleric": 6,
		"Druid": 7,
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "This spell creates a wall of rock that merges into adjoining rock surfaces. It is typically employed to close passages, portals, and breaches against opponents. A wall of stone is 1 inch thick per four caster levels and composed of up to one 5-foot square per level. You can double the wall's area by halving its thickness. The wall cannot be conjured so that it occupies the same space as a creature or another object. <p class=sub>Unlike a <i>wall of iron</i>, you can create a <i>wall of stone</i> in almost any shape you desire. The wall created need not be vertical, nor rest upon any firm foundation; however, it must merge with and be solidly supported by existing stone. It can be used to bridge a chasm, for instance, or as a ramp. For this use, if the span is more than 20 feet, the wall must be arched and buttressed. This requirement reduces the spell's area by half. Thus, a 20th-level caster can create span with a surface area of ten 5-foot squares. The wall can be crudely shaped to allow crenellations, battlements, and so forth by likewise reducing the area. <p class=sub>Like any other stone wall, this one can be destroyed by a <i>disintegrate</i> spell or by normal means such as breaking and chipping. Each 5-foot square of the wall has 15 hit points per inch of thickness and hardness 8. A section of wall whose hit points drop to 0 is breached. If a creature tries to break through the wall with a single attack, the DC for the Strength check is 20 + 2 per inch of thickness. <p class=sub>It is possible, but difficult, to trap mobile opponents within or under a <i>wall of stone</i>, provided the wall is shaped so it can hold the creatures. Creatures can avoid entrapment with successful Reflex saves",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "69bd"

}, {
	name: "Wall of Thorns",
	summary: "Thorns dmg moving creatures 25-AC",
	school: "Conj",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "10-ft cube/lvl",
	duration: "10 min/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Druid": 6
	},
	description: "A <i>wall of thorns</i> spell creates a barrier of very tough, pliable, tangled brush bearing needle-sharp thorns as long as a human's finger. Any creature forced into or attempting to move through a wall of thorns takes slashing damage per round of movement equal to 25 minus the creature's AC. Dexterity and dodge bonuses to AC do not count for this calculation. (Creatures with an Armor Class of 25 or higher, without considering Dexterity and dodge bonuses, take no damage from contact with the wall.) <p class=sub>You can make the wall as thin as 5 feet thick, which allows you to shape the wall as a number of 10-by-10-by-5-foot blocks equal to twice your caster level. This has no effect on the damage dealt by the thorns, but any creature attempting to break through takes that much less time to force its way through the barrier.<p class=sub>Creatures can force their way slowly through the wall by making a Strength check as a full-round action. For every 5 points by which the check exceeds 20, a creature moves 5 feet (up to a maximum distance equal to its normal land speed). For example, a creature that rolled 25 on its Strength check could move 5 feet in a round. Of course, moving or attempting to move through the thorns incurs damage as described above. A creature trapped in the thorns can choose to remain motionless in order to avoid taking any more damage. <p class=sub>Any creature within the area of the spell when it is cast takes damage as if it had moved into the wall and is caught inside. In order to escape, it must attempt to push its way free, or it can wait until the spell ends. Creatures with the ability to pass through overgrown areas unhindered can pass through a wall of thorns at normal speed without taking damage. <p class=sub>A <i>wall of thorns</i> can be breached by slow work with edged weapons. Chopping away at the wall creates a safe passage 1 foot deep for every 10 minutes of work. Normal fire cannot harm the barrier, but magical fire burns it away in 10 minutes. <p class=sub>Despite its appearance, a <i>wall of thorns</i> is not actually a living plant, and thus is unaffected by spells that affect plants.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2821"
}, {
	name: "Warp Wood",
	summary: "Bends wooden item within 20-ft",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "Close",
	effect: "Small item/lvl",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Druid": 3
	},
	description: "You cause wood to bend and warp, permanently destroying its straightness, form, and strength. A warped door springs open (or becomes stuck, requiring a Strength check to open, at your option). A boat or ship springs a leak. Warped ranged weapons are useless. A warped melee weapon causes a -4 penalty on attack rolls. <p class=sub>You may warp one Small or smaller object (such as a wagon wheel or a human's crossbow) or its equivalent per caster level. A Medium object (such as an oar or a human's spear) counts as two Small objects, a Large object (such as a rowboat or a hill giant's greatclub) as four, a Huge object (such as a wagon or a cloud giant's morningstar) as eight, a Gargantuan object (such as a keelboat) as sixteen, and a Colossal object (such as a sailing ship) as thirty-two. <p class=sub>Alternatively, you can unwarp wood (effectively warping it back to normal) with this spell, straightening wood that has been warped by this spell or by other means. <i>Make whole</i>, on the other hand, does no good in repairing a warped item. <p class=sub>You can combine multiple consecutive warp wood spells to warp (or unwarp) an object that is too large for you to warp with a single spell. <p class=sub>Until the object is completely warped, it suffers no ill effects.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "2ba"
}, {
	name: "Water Breathing",
	summary: "Targets can breath underwater",
	school: "Trans",
	composition: "V, S, M/DF (a short reed or piece of straw)",
	time: "1 a",
	range: "Touch",
	effect: "Living creatures",
	duration: "2 hr/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 4,
		"Druid": 4,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "The transmuted creatures can breathe water freely. Divide the duration evenly among all the creatures you touch. <p class=sub>The spell does not make creatures unable to breathe air",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e059"

}, {
	name: "Water Walk",
	summary: "Target treads on water as if solid",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "One creature/lvl",
	duration: "10 min/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 4,
		"Ranger": 3
	},
	description: "The transmuted creatures can tread on any liquid as if it were firm ground. Mud, oil, snow, quicksand, running water, ice, and even lava can be traversed easily, since the subjects' feet hover an inch or two above the surface. (Creatures crossing molten lava still take damage from the heat because they are near it.) The subjects can walk, run, charge, or otherwise move across the surface as if it were normal ground. <p class=sub>If the spell is cast underwater (or while the subjects are partially or wholly submerged in whatever liquid they are in), the subjects are borne toward the surface at 60 feet per round until they can stand on it.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "5600"
}, {
	name: "Waves of Exhaustion",
	summary: "All living creatures become exhausted",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "60-ft",
	effect: "Cone",
	duration: "Instantaneous",
	save: "-",
	sr: "Yes",
	classes: {
		"Sorceror": 8,
		"Wizard": 8
	},
	description: "Waves of negative energy cause all living creatures in the spell's area to become exhausted. This spell has no effect on a creature that is already exhausted.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "6bae"
}, {
	name: "Waves of Fatigue",
	summary: "All living creatures become fatigued",
	school: "Necro",
	composition: "V, S",
	time: "1 a",
	range: "30-ft",
	effect: "Cone",
	duration: "Instantaneous",
	save: "-",
	sr: "Yes",
	classes: {
		"Sorceror": 6,
		"Wizard": 6
	},
	description: "Waves of negative energy render all living creatures in the spell's area fatigued. This spell has no effect on a creature that is already fatigued.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "3e11"
}, {
	name: "Web",
	summary: "Sticky webs trap creatures",
	school: "Conj",
	composition: "V, S, M (a bit of spider web)",
	time: "1 a",
	range: "Medium",
	effect: "20-ft radius",
	duration: "10 min/lvl (D)",
	save: "Ref negs",
	sr: "-",
	classes: {
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "<i>Web</i> creates a many-layered mass of strong, sticky strands. These strands trap those caught in them. The strands are similar to spider webs but far larger and tougher. These masses must be anchored to two or more solid and diametrically opposed points&emdash;floor and ceiling, opposite walls, or the like&emdash;or else the web collapses upon itself and disappears. Creatures caught within a web become entangled among the gluey fibers. Attacking a creature in a web won't cause you to become entangled. <p class=sub>Anyone in the effect's area when the spell is cast must make a Reflex save. If this save succeeds, the creature is entangled, but not prevented from moving, though moving is more difficult than normal for being entangled (see below). If the save fails, the creature is entangled and can't move from its space, but can break loose by spending 1 round and making a DC 20 Strength check or a DC 25 Escape Artist check. Once loose (either by making the initial Reflex save or a later Strength check or Escape Artist check), a creature remains entangled, but may move through the <i>web</i> very slowly. Each round devoted to moving allows the creature to make a new Strength check or Escape Artist check. The creature moves 5 feet for each full 5 points by which the check result exceeds 10. <p class=sub>If you have at least 5 feet of web between you and an opponent, it provides cover. If you have at least 20 feet of web between you, it provides total cover (see Cover, page 150). <p class=sub>The strands of a <i>web</i> spell are flammable. <p class=sub>A magic <i>flaming</i> sword can slash them away as easily as a hand brushes away cobwebs. Any fire&emdash;a torch, burning oil, a flaming sword, and so forth&emdash;can set the webs alight and burn away 5 square feet in 1 round. All creatures within flaming webs take 2d4 points of fire damage from the flames. <p class=sub><i>Web</i> can be made permanent with a <i>permanency</i> spell. A permanent web that is damaged (but not destroyed) regrows in 10 minutes",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "b79a"

}, {
	name: "Weird",
	summary: "Illusion kills else does 3d6 dmg 1d4 Str",
	school: "Illus",
	composition: "V, S",
	time: "1 a",
	range: "Medium",
	effect: "Creatures in 30-ft",
	duration: "Instantaneous",
	save: "Will dsblf, Fort part",
	sr: "Yes",
	classes: {
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "This spell functions like <i>phantasmal killer</i>, except it can affect more than one creature. Only the affected creatures see the phantasmal creatures attacking them, though you see the attackers as shadowy shapes. <p class=sub>If a subject's Fortitude save succeeds, it still takes 3d6 points of damage and is stunned for 1 round. The subject also takes 1d4 points of temporary Strength damage.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f30e"
}, {
	name: "Whirlwind",
	summary: "Cyclone 1d8 dmg, picks up creatures",
	school: "Evoc",
	composition: "V, S,DF",
	time: "1 a",
	range: "Long",
	effect: "10-30-ft wide, 30 tall",
	duration: "1 rnd/lvl (D)",
	save: "Ref negs",
	sr: "Yes",
	classes: {},
	description: "This spell creates a powerful cyclone of raging wind that moves through the air, along the ground, or over water at a speed of 60 feet per round. You can concentrate on controlling the cyclone's every movement or specify a simple program., such as move straight ahead, zigzag, circle, or the like. Directing the cyclone's movement or changing its programmed movement is a standard action for you. The cyclone always moves during your turn. If the cyclone exceeds the spell's range, it moves in a random, uncontrolled fashion for 1d3 rounds&emdash;possibly endangering you or your allies&emdash;and then dissipates. (You can't regain control of the cyclone, even if comes back within range.) <p class=sub>Any Large or smaller creature that comes in contact with the spell effect must succeed on a Reflex save or take 3d6 points of damage. A Medium or smaller creature that fails its first save must succeed on a second one or be picked up bodily by the cyclone and held suspended in its powerful winds, taking 1d8 points of damage each round on your turn with no save allowed. You may direct the cyclone to eject any carried creatures whenever you wish, depositing the hapless souls wherever the cyclone happens to be when they are released.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "78"
}, {
	name: "Whispering Wind",
	summary: "Sends a spoken message",
	school: "Trans",
	composition: "V, S",
	time: "1 a",
	range: "1 mile/lvl",
	effect: "10-ft radius",
	duration: "1 hr/lvl or till used",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 3,
		"Sorceror": 3,
		"Wizard": 3
	},
	description: "You send a message or sound on the wind to a designated spot. The <i>whispering wind</i> travels to a specific location within range that is familiar to you, provided that it can find a way to the location. (It can't pass through walls, for instance.) A <i>whispering wind</i> is as gentle and unnoticed as a zephyr until it reaches the location. It then delivers its whisper-quiet message or other sound. Note that the message is delivered regardless of whether anyone is present to hear it. The wind then dissipates. You can prepare the spell to bear a message of no more than twenty-five words, cause the spell to deliver other sounds for 1 round, or merely have the <i>whispering wind</i> seem to be a faint stirring of the air. You can likewise cause the <i>whispering wind</i> to move as slowly as 1 mile per hour or as quickly as 1 mile per 10 minutes. When the spell reaches its objective, it swirls and remains in place until the message is delivered. As with <i>magic mouth</i>, <i>whispering wind</i> cannot speak verbal components, use command words, or activate magical effects.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "890d"
}, {
	name: "Wind Walk",
	summary: "Become vapours and move at 60 mph",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "You +1 creat/3 lvls",
	duration: "1 hr/lvl (D)",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 7,
		"Druid": 8
	},
	description: "You alter the substance of your body to a cloudlike vapor (as the gaseous form spell) and move through the air, possibly at great speed. You can take other creatures with you, each of which acts independently. <p class=sub>Normally, a <i>wind walker</i> flies at a speed of 10 feet with perfect maneuverability. If desired by the subject, a magical wind wafts a <i>wind walker</i> along at up to 600 feet per round (60 mph) with poor maneuverability. <i>Wind walkers</i> are not invisible but rather appear misty and translucent. If fully clothed in white, they are 80% likely to be mistaken for clouds, fog, vapors, or the like. <p class=sub>A <i>wind walker</i> can regain its physical form as desired and later resume the cloud form. Each change to and from vaporous form takes 5 rounds, which counts toward the duration of the spell (as does any time spent in physical form). As noted above, you can dismiss the spell, and you can even dismiss it for individual wind walkers and not others. <p class=sub>For the last minute of the spell's duration, a wind walker in cloud form automatically descends 60 feet per round (for a total of 600 feet), though it may descend faster if it wishes. This descent serves as a warning that the spell is about to end.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "f840"
}, {
	name: "Wind Wall",
	summary: "Deflects arrows, small creatures, gases",
	school: "Evoc",
	composition: "V, S, M/DF (a tiny fan and a feather of exotic origin)",
	time: "1 a",
	range: "Medium",
	effect: "10/lvl long,5/lvl high",
	duration: "1 rnd/lvl",
	save: "-",
	sr: "Yes",
	classes: {
		"Cleric": 4,
		"Druid": 4,
		"Ranger": 2,
		"Sorceror": 4,
		"Wizard": 4
	},
	description: "An invisible vertical curtain of wind appears. It is 2 feet thick and of considerable strength. It is a roaring blast sufficient to blow away any bird smaller than an eagle, or tear papers and similar materials from unsuspecting hands. (A Reflex save allows a creature to maintain its grasp on an object.) Tiny and Small flying creatures cannot pass through the barrier. Loose materials and cloth garments fly upward when caught in a wind wall. Arrows and bolts are deflected upward and miss, while any other normal ranged weapon passing through the wall has a 30% miss chance. (A giant-thrown boulder, a siege engine projectile, and other massive ranged weapons are not affected.) Gases, most gaseous breath weapons, and creatures in gaseous form cannot pass through the wall (although it is no barrier to incorporeal creatures). <p class=sub>While the wall must be vertical, you can shape it in any continuous path along the ground that you like. It is possible to create cylindrical or square wind walls to enclose specific points. A 5th-level caster can create a wall up to 50 feet long and up to 25 feet high, sufficient to form a cylinder of wind 15 feet in diameter",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "c76a"

}, {
	name: "Wish",
	summary: "Alters reality",
	school: "Univ",
	composition: "V, S, M (diamond worth 25,000 gp)",
	time: "1 a",
	range: "Special",
	effect: "Special",
	duration: "Special",
	save: "Special",
	sr: "Yes",
	classes: {
		"Sorceror": 10,
		"Wizard": 10
	},
	description: "<i>Wish</i> is the mightiest spell a wizard or sorcerer can cast. By simply speaking aloud, you can alter reality to better suit you. Even <i>wish</i>, however, has its limits. <p class=sub>A <i>wish</i> can produce any one of the following effects. <p class=sub><ul><p class=sub><li>Duplicate any wizard or sorcerer spell of 8th level or lower, provided the spell is not of a school prohibited to you. <p class=sub><li>Duplicate any other spell of 6th level or lower, provided the spell is not of a school prohibited to you. <p class=sub><li>Duplicate any wizard or sorcerer spell of 7th level or lower even if it's of a prohibited school. <p class=sub><li>Duplicate any other spell of 5th level or lower even if it's of a prohibited school. <p class=sub><li>Undo the harmful effects of many other spells, such as <i>geas/quest</i> or <i>insanity</i>. <p class=sub><li>Create a nonmagical item of up to 25,000 gp in value. <p class=sub><li>Create a magic item, or add to the powers of an existing magic item. <p class=sub><i><li>Grant a creature a +1 inherent bonus to an ability score. Two to five wish spells cast in immediate succession can grant a creature a +2 to +5 inherent bonus to an ability score (two wishes for a +2 inherent bonus, three for a +3 inherent bonus, and so on). Inherent bonuses are instantaneous, so they cannot be dispelled. Note</i>: An inherent bonus may not exceed +5 for a single ability score, and inherent bonuses to a particular ability score do not stack, so only the best one applies. <p class=sub><li>Remove injuries and afflictions. A single wish can aid one creature per caster level, and all subjects are cured of the same kind of affliction. For example, you could heal all the damage you and your companions have taken, or remove all poison effects from everyone in the party, but not do both with the same wish. A wish can never restore the experience point loss from casting a spell or the level or Constitution loss from being raised from the dead. <p class=sub><li>Revive the dead. A <i>wish</i> can bring a dead creature back to life by duplicating a resurrection spell. A <i>wish</i> can revive a dead creature whose body has been destroyed, but the task takes two wishes, one to recreate the body and another to infuse the body with life again. A <i>wish</i> cannot prevent a character who was brought back to life from losing an experience level. <p class=sub><li>Transport travelers. A wish can lift one creature per caster level from anywhere on any plane and place those creatures anywhere else on any plane regardless of local conditions. An unwilling target gets a Will save to negate the effect, and spell resistance (if any) applies. <p class=sub><li>Undo misfortune. A <i>wish</i> can undo a single recent event. The <i>wish</i> forces a reroll of any roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a wish could undo an opponent's successful save, a foe's successful critical hit (either the attack roll or the critical roll), a friend's failed save, and so on. The reroll, however, may be as bad as or worse than the original roll. An unwilling target gets a Will save to negate the effect, and spell resistance (if any) applies. <p class=sub></ul> <p class=sub>You may try to use a <i>wish</i> to produce greater effects than these, but doing so is dangerous. Such a <i>wish</i> gives the DM the opportunity to fulfil your request without fulfilling it completely. (The <i>wish</i> may pervert your intent into a literal but undesirable fulfillment or only a partial fulfillment.) For example, wishing for a <i>staff of the magi</i> might get you instantly transported to the presence of the staff's current owner. Wishing to be immortal could get you imprisioned in a hidden extradimensional space (as by an <i>imprisonment</i> spell), where you could &quot;live&quot; indefinitely. <p class=sub>Duplicated spells allow saves and spell resistance as normal (but save DCs are for 9th-level spells)",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "bba4"

}, {
	name: "Wood Shape",
	summary: "Shape wooden items",
	school: "Trans",
	composition: "V, S,DF",
	time: "1 a",
	range: "Touch",
	effect: "10 cu ft + 1 cu ft/lvl",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Druid": 3
	},
	description: "<i>Wood shape</i> enables you to form one existing piece of wood into any shape that suits your purpose. For example, you can make a wooden weapon, fashion a special trapdoor, or sculpt a crude idol. This spell also permits you to reshape a wood door to make an exit where one didn't exist or to seal a door shut. While it is possible to make crude coffers, doors, and so forth, fine description isn't possible. There is a 30% chance that any shape that includes moving parts simply doesn't work.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "7a61"
}, {
	name: "Word of Chaos",
	summary: "Kills, confuses, stuns nonchaotic",
	school: "Evoc",
	composition: "V",
	time: "1 a",
	range: "40-ft",
	effect: "40-ft radius",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 8
	},
	description: "Any nonchaotic creature within the area who hears the <i>word of chaos</i> suffers the following ill effects. <p class=sub>The effects are cumulative and concurrent. No saving throw is allowed against these effects. <p class=sub><i>Deafened</i>: The creature is deafened for 1d4 rounds. <p class=sub><i>Stunned</i>: The creature is stunned for 1 round. <p class=sub><i>Confused</i>: The creature is <i>confused</i>, as by the <i>confusion</i> spell, for 1d10 minutes. This is a mind-affecting enchantment effect. <p class=sub><i>Killed</i>: Living creatures die. Undead creatures are destroyed. <p class=sub><table><tr class=header><td>HD</td><td>Effect</td></tr> <tr><td>Equal to caster level</td><td>Deafened</td></tr> <tr><td>Up to caster level -1</td><td>Stunned, deafened</td></tr> <tr><td>Up to caster level -5</td><td>Confused, stunned, deafened</td></tr> <tr><td>Up to caster level -10</td><td>Killed, confused, stunned, deafened</td></tr></table> <p class=sub>Furthermore, if you are on your home plane when you cast this spell, nonchaotic extraplanar creatures within the area are instantly banished back to their home planes. Creatures so banished cannot return for at least 24 hours. This effect takes place regardless of whether the creatures hear the <i>word of chaos</i>. The banishment effect allows a Will save (at a -4 penalty) to negate. <p class=sub>Creatures whose HD exceed your caster level are unaffected by <i>word of chaos</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "e9db"
}, {
	name: "Word of Recall",
	summary: "Teleports you to designated place",
	school: "Trans",
	composition: "V",
	time: "1 a",
	range: "Unlimited",
	effect: "Willing creatures",
	duration: "Instantaneous",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 7
	},
	description: "<i>Word of recall</i> teleports you instantly back to your sanctuary when the word is uttered. You must designate the sanctuary when you prepare the spell, and it must be a very familiar place. The actual point of arrival is a designated area no larger than 10 feet by 10 feet. You can be transported any distance within a plane but cannot travel between planes. You can transport, in addition to yourself, any objects you carry, as long as their weight doesn't exceed your maximum load. You may also bring one additional willing Medium or smaller creature (carrying gear or objects up to its maximum load) or its equivalent per three caster levels. A Large creature counts as two Medium creatures, a Huge creature counts as two Large creatures, and so forth. All creatures to be transported must be in contact with one another, and at least one of those creatures must be in contact with you. Exceeding this limit causes the spell to fail. <p class=sub>An unwilling creature can't be teleported by <i>word of recall</i>. Likewise, a creature's Will save (or spell resistance) prevents items in its possession from being teleported. Unattended, nonmagical objects receive no saving throw.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "35d5"
}, {
	name: "Zone of Silence",
	summary: "Silence isolates internal and external",
	school: "Illus",
	composition: "V, S",
	time: "Round",
	range: "Self",
	effect: "5-ft radius",
	duration: "1 hr/lvl (D)",
	save: "-",
	sr: "-",
	classes: {
		"Bard": 5
	},
	description: "By casting <i>zone of silence</i>, you manipulate sound waves in your immediate vicinity so that you and those within the spell's area can converse normally, yet no one outside can hear your voices or any other noises from within, including language-dependent or sonic spell effects (such as <i>command</i> or <i>shout</i>). This effect is centered on you and moves with you. Anyone who enters the zone immediately becomes subject to its effects, but those who leave are no longer affected. Note, however, that a successful Spot check to read lips can still reveal what's said inside a <i>zone of silence</i>.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "44a8"
}, {
	name: "Zone of Truth",
	summary: "Targets within area cannot lie",
	school: "Ench",
	composition: "V, S,DF",
	time: "1 a",
	range: "Close",
	effect: "20-ft radius",
	duration: "1 min/lvl",
	save: "Will negs",
	sr: "Yes",
	classes: {
		"Cleric": 3,
		"Paladin": 2
	},
	description: "Creatures within the emanation area (or those who enter it) can't speak any deliberate and intentional lies. Each potentially affected creature is allowed a save to avoid the effects when the spell is cast or when the creature first enters the emanation area. Affected creatures are aware of this enchantment. Therefore, they may avoid answering questions to which they would normally respond with a lie, or they may be evasive as long as they remain within the boundaries of the truth. Creatures who leave the area are free to speak as they choose.",
	type: "spell", phb: "196", tags: ["pathfinder"], _id: "ba1f"
}]);