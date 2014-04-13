function get_deities_for_alignment(alignment, good) {
	var criteria = {};
	if(alignment && good) {
		var align_range = [alignment];
		var goodness_range = [good]
		var good_idx = goodness({name: good}).first().index;
		var align_idx = alignments({name: alignment}).first().index;
		if(align_idx+1 < 3) {
			align_range.push(alignments().get()[align_idx + 1].name);
		}
		if(align_idx-1 > -1) {
			align_range.push(alignments().get()[align_idx - 1].name);
		}
		if(good_idx+1 < 3) {
			goodness_range.push(goodness().get()[good_idx + 1].name);
		}
		if(good_idx-1 > -1) {
			goodness_range.push(goodness().get()[good_idx - 1].name);
		}
		criteria = { alignment: align_range, goodness: goodness_range }
	}

	return deities(criteria).get();
}

var deities = TAFFY([ {
	name: "Erastil",
	alignment: "Lawful",
	goodness: "Good",
	portfolios: [ "farming", "hunting", "trade", "family" ],
	domains: [ "Animal", "Community", "Good", "Law", "Plant" ],
	weapon: "Longbow",
	tags: [ "pathfinder" ],
	type: "deity", _id: "6b19"
}, {
	name: "Iomedae",
	alignment: "Lawful",
	goodness: "Good",
	portfolios: [ "valor", "rulership", "justice", "honor" ],
	domains: [ "Glory", "Good", "Law", "Sun", "War" ],
	weapon: "Longsword",
	tags: [ "pathfinder" ],
	type: "deity", _id: "c7ce"
}, {
	name: "Torag",
	alignment: "Lawful",
	goodness: "Good",
	portfolios: [ "forge", "protection", "strategy" ],
	domains: [ "Artifice", "Earth", "Good", "Law", "Protection" ],
	weapon: "Warhammer",
	tags: [ "pathfinder" ],
	type: "deity", _id: "c272"
}, {
	name: "Sarenrae",
	alignment: "Neutral",
	goodness: "Good",
	portfolios: [ "sun", "redemption", "honesty", "healing" ],
	domains: [ "Fire", "Glory", "Good", "Healing", "Sun" ],
	weapon: "Scimitar",
	tags: [ "pathfinder" ],
	type: "deity", _id: "de44"
}, {
	name: "Shelyn",
	alignment: "Neutral",
	goodness: "Good",
	portfolios: [ "beauty", "art", "love", "music" ],
	domains: [ "Air", "Charm", "Good", "Luck", "Protection" ],
	weapon: "Glaive",
	tags: [ "pathfinder" ],
	type: "deity", _id: "6802"
}, {
	name: "Desna",
	alignment: "Chaotic",
	goodness: "Good",
	portfolios: [ "dreams", "stars", "travelers", "luck" ],
	domains: [ "Chaos", "Good", "Liberation", "Luck", "Travel" ],
	weapon: "Starknife",
	tags: [ "pathfinder" ],
	type: "deity", _id: "a1ac"
}, {
	name: "Cayden Cailean",
	alignment: "Chaotic",
	goodness: "Good",
	portfolios: [ "freedom", "ale", "wine", "bravery" ],
	domains: [ "Chaos", "Charm", "Good", "Strength", "Travel" ],
	weapon: "Rapier",
	tags: [ "pathfinder" ],
	type: "deity", _id: "fb51"
}, {
	name: "Abadar",
	alignment: "Lawful",
	goodness: "Neutral",
	portfolios: [ "cities", "wealth", "merchants", "law" ],
	domains: [ "Earth", "Law", "Nobility", "Protection", "Travel" ],
	weapon: "Light Crossbow",
	tags: [ "pathfinder" ],
	type: "deity", _id: "42ff"
}, {
	name: "Irori",
	alignment: "Lawful",
	goodness: "Neutral",
	portfolios: [ "history", "knowledge", "self-perfection" ],
	domains: [ "Healing", "Knowledge", "Law", "Rune", "Strength" ],
	weapon: "Unarmed Strike",
	tags: [ "pathfinder" ],
	type: "deity", _id: "1eac"
}, {
	name: "Gozreh",
	alignment: "Neutral",
	goodness: "Neutral",
	portfolios: [ "nature", "weather", "the sea" ],
	domains: [ "Air", "Animal", "Plant", "Water", "Weather" ],
	weapon: "Trident",
	tags: [ "pathfinder" ],
	type: "deity", _id: "691e"
}, {
	name: "Pharasma",
	alignment: "Neutral",
	goodness: "Neutral",
	portfolios: [ "fate", "death", "prophecy", "birth" ],
	domains: [ "Death", "Healing", "Knowledge", "Repose", "Water" ],
	weapon: "Dagger",
	tags: [ "pathfinder" ],
	type: "deity", _id: "942b"
}, {
	name: "Nethys",
	alignment: "Neutral",
	goodness: "Neutral",
	portfolios: [ "magic" ],
	domains: [ "Destruction", "Knowledge", "Magic", "Protection", "Rune" ],
	weapon: "Quarterstaff ",
	tags: [ "pathfinder" ],
	type: "deity", _id: "52ea"
}, {
	name: "Gorum",
	alignment: "Chaotic",
	goodness: "Neutral",
	portfolios: [ "strength", "battle", "weapons" ],
	domains: [ "Chaos", "Destruction", "Glory", "Strength", "War" ],
	weapon: "Greatsword",
	tags: [ "pathfinder" ],
	type: "deity", _id: "866c"
}, {
	name: "Calistria",
	alignment: "Chaotic",
	goodness: "Neutral",
	portfolios: [ "trickery", "lust", "revenge" ],
	domains: [ "Chaos", "Charm", "Knowledge", "Luck", "Trickery" ],
	weapon: "Whip",
	tags: [ "pathfinder" ],
	type: "deity", _id: "6751"
}, {
	name: "Asmodeus",
	alignment: "Lawful",
	goodness: "Evil",
	portfolios: [ "tyranny", "slavery", "pride", "contracts" ],
	domains: [ "Evil", "Fire", "Law", "Magic", "Trickery" ],
	weapon: "Mace",
	tags: [ "pathfinder" ],
	type: "deity", _id: "237b"
}, {
	name: "Zon-Kuthon",
	alignment: "Lawful",
	goodness: "Evil",
	portfolios: [ "envy", "pain", "darkness", "loss" ],
	domains: [ "Darkness", "Death", "Destruction", "Evil", "Law" ],
	weapon: "Spiked Chain",
	tags: [ "pathfinder" ],
	type: "deity", _id: "3ed6"
}, {
	name: "Urgathoa",
	alignment: "Neutral",
	goodness: "Evil",
	portfolios: [ "gluttony", "disease", "undeath" ],
	domains: [ "Death", "Evil", "Magic", "Strength", "War" ],
	weapon: "Scythe",
	tags: [ "pathfinder" ],
	type: "deity", _id: "cdd2"
}, {
	name: "Norgorber",
	alignment: "Neutral",
	goodness: "Evil",
	portfolios: [ "greed", "secrets", "poison", "murder" ],
	domains: [ "Charm", "Death", "Evil", "Knowledge", "Trickery" ],
	weapon: "Short Sword",
	tags: [ "pathfinder" ],
	type: "deity", _id: "ab92"
}, {
	name: "Lamashtu",
	alignment: "Chaotic",
	goodness: "Evil",
	portfolios: [ "madness", "monsters", "nightmares" ],
	domains: [ "Chaos", "Evil", "Madness", "Strength", "Trickery" ],
	weapon: "Falchion",
	tags: [ "pathfinder" ],
	type: "deity", _id: "5ec4"
}, {
	name: "Rovagug",
	alignment: "Chaotic",
	goodness: "Evil",
	portfolios: [ "wrath", "disaster", "destruction" ],
	domains: [ "Chaos", "Destruction", "Evil", "War", "Weather" ],
	weapon: "Greataxe",
	tags: [ "pathfinder" ],
	type: "deity", _id: "1339"
} ]);
