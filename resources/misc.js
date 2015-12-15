alignments = TAFFY([{
    index: 0,
  name : 'Lawful'
}, {
    index: 1,
  name : 'Neutral'
}, {
    index: 2,
  name : 'Chaotic'
}]);
goodness = TAFFY([{
    index: 0,
  name : 'Good'
}, {
    index: 1,
  name : 'Neutral'
}, {
    index: 2,
  name : 'Evil'
}]);

draconic_types = TAFFY([{
  name : "Black",
  _id : "xxca1",
  breath : "Acid - 60ft line"
}, {
  name : "Blue",
  _id : "xxca2",
  breath : "Electricity - 60ft line"
}, {
  name : "Green",
  _id : "xxca3",
  breath : "Acid - 30ft cone"
}, {
  name : "Red",
  _id : "xxca4",
  breath : "Fire - 30ft cone"
}, {
  name : "White",
  _id : "xxca5",
  breath : "Cold - 30ft cone"
}, {
  name : "Brass",
  _id : "xxca6",
  breath : "Fire - 60ft line"
}, {
  name : "Bronze",
  _id : "xxca7",
  breath : "Electricity - 60ft line"
}, {
  name : "Copper",
  _id : "xxca8",
  breath : "Acid - 60ft line"
}, {
  name : "Gold",
  _id : "xxca9",
  breath : "Fire - 30ft cone"
}, {
  name : "Silver",
  _id : "xxcaa",
  breath : "Cold - 30ft cone"
}]);

spellcasters = ["Bard", "Cleric", "Druid", "Paladin", "Ranger", "Sorcerer", "Wizard"];
natural_spellcasters = ["Cleric", "Druid", "Paladin", "Ranger"];
spellpickers = ["Bard", "Sorcerer", "Wizard"];
armor_edit_data = ["bon", "acp", "note"];
shield_edit_data = ["bon", "acp", "note"];
grapple_size_mod = {
  "colossal" : 16,
  "gargantuan" : 12,
  "huge" : 8,
  "large" : 4,
  "medium" : 0,
  "small" : -4,
  "tiny" : -8,
  "diminutive" : -12,
  "fine" : -16
};
damage_reductions = ["fire", "cold", "acid", "pois", "elec", "base"];
save_against = ["pois", "petr"];
sizes = ["fine", "diminutive", "tiny", "small", "medium", "large", "huge", "gargantuan", "colossal"];
