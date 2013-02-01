###
src/character.coffee
###
if typeof(exports) == "object"
	TAFFY = require "taffydb"
	$ = require "jquery"
	_ = require "underscore"
	common = require "./common"
	classes = require("./resources/classes").classes
	armors = require("./resources/armors").armors
	shields = require("./resources/shields").shields
	weapons = require("./resources/weapons").weapons
	feats = require("./resources/feats").feats
	skills = require("./resources/skills").skills
	races = require("./resources/races").races
	alignments = require("./resources/alignments").alignments
	goodness = require("./resources/alignments").goodness

class Character

	constructor : (data) ->
		data = data or {}
		unless TAFFY.isObject(data)
			log_data = null
			log_separator = data.indexOf("``")
			if log_separator > 0
				log_data = data.substring(data.indexOf("``") + 2)
				data = data.substring(0, data.indexOf("``"))
			data = JSON.parse(unescape(data)) or {}
		@name = data.name or ""
		@race_name = data.race_name or races().first().name
		@abilities = data.abilities or {}
		default_class = classes().first().name
		if data.classes
			@classes = data.classes
		else
			@classes[default_class] = { level: 0 }
		@alignment = data.alignment or alignments[0]
		@goodness = data.goodness or goodness[0]
		@languages = []
		@equipment_benefits = {}

		if data.skills
			@skills = parse_taffy_data(data.skills)
		else
			@skills = new TAFFY([])

		if data.feats
			@feats = parse_taffy_data(data.feats)
		else
			@feats = new TAFFY([])

		if log_data
			log_entries = log_data.split("`")
			i = 0

			while i < log_entries.length
				entry = JSON.parse(unescape(log_entries[i]))
				sav entry, "log_" + data.name + "_" + entry.id
				i++
		console.log "Character(data): #{JSON.stringify(data, null, 2)}"



	name : ""
	race_name : ""

	abilities :
		"Str" : 0
		"Int" : 0
		"Dex" : 0
		"Cha" : 0
		"Con" : 0
		"Wis" : 0

	###
		"Fighter":
			"level": 3
		"Wizard":
			"level": 4
	###
	classes : { }
	alignment : alignments[0]
	goodness : goodness[0]
	languages : []
	equipment_benefits : {}
	feats : new TAFFY([])
	# this.classes[classes().first().name] = { "level" : 0 }
	# armors : { }
	# weapons : {	}
	# shields : {	}

	###
	Returns the count of base feats provided by the character's classes for the current class levels
	###
	total_base_feats_count : () ->
		console.log "\ntotal_base_feats_count"
		base_feat_count = (if @race_name == "Human" then 1 else 0)
		base_feats = [ 0, 2, 5, 8, 11, 14, 17 ]

		for classname, classdata of @classes
			for level in [0..classdata.level]
				base_feat_count += (if ~base_feats.indexOf(level) then 1 else 0)

		base_feat_count

	###
	Returns the count of (bonus?) feats provided by the character's classes for the current class levels
	###
	total_class_feats_count : () ->
		console.log "\ntotal_class_feats_count"
		class_feat_count = 0
		for classname, classdata of @classes
			class_feats = classes(name: classname).first().bonus_feats_levels

			for level in [0..classdata.level]
				class_feat_count += (if ~class_feats.indexOf(level) then 1 else 0)

		class_feat_count

	###
	Returns the Armor Class Penalty for all worn armor
	###
	armor_acp : () ->
		console.log "\narmor_acp"
		acp = 0
		@armors?( is_worn: true ).each (armor) ->
			acp += armors(name: armor.armor_name).first().acp
			console.log "\t#{armor.armor_name}: #{armors(name: armor.armor_name).first().acp} (#{armor.is_worn})"
		acp

	###
	Returns the Armor Class Penalty for all worn shields
	###
	shield_acp : () ->
		console.log "\nshield_acp"
		acp = 0
		@shields?( is_worn: true ).each (shield) ->
			acp += shields(name: shield.shield_name).first().acp
			console.log "\t#{shield.shield_name}: #{shields(name: shield.shield_name).first().acp} (#{shield.is_worn})"
		acp

	###
	Returns the DC for the supplied skill (subtype) taking all factors into consideration.
	###
	calc_skill_mod : (skill, subtype) ->
		console.log "\ncalc_skill_mod"
		mods  = {}
		acp = acp | 0
		char_skill_points = 0

		char_skill = @skills?({ skill_name: skill.name }).first()
		console.log "\tchar_skill: #{char_skill?.skill_name}"
		if subtype
			console.log "\t\tsubtype: #{subtype} : #{char_skill?.subtypes[subtype]}"
			char_skill_points = char_skill.subtypes?[subtype]
		else
			console.log "\t\tranks: #{char_skill.ranks}"
			char_skill_points = char_skill.ranks


		console.log "\tchar_skill_points: #{char_skill_points}"
		race = races(name: @race_name).first()
		feat_mod = 0
		for i, char_feat of this.get_all_char_feats()
			console.log "\tevaluating #{char_feat.name}"
			feat = feats(name: char_feat.name).first()
			# we need to check character feats to get the multi selections
			if feat?.skills?.mod
				feat_mod += feat.skills.mod(skill, subtype, char_skill_points, feat_mod, @feats)
			console.log "\tmod: #{feat_mod}"
			acp = feat.mobility(acp)	if skill.mobility and feat.mobility

		race_mod = race.skills[skill.name] | 0
		ranks = this.ranks(skill, subtype)
		console.log """
			\tskill - #{skill.name} #{if subtype then "(" + subtype + ")"}
			\tskill points - #{char_skill_points} : #{ranks}
			\trace - #{race.name} : #{race_mod}
			\tranks: #{ranks}
			\tfeat mod : #{feat_mod}
			\tability mod : #{this.ability_modifier(skill.ability)}
			"""
		ranks + this.ability_modifier(skill.ability) + race_mod + feat_mod + (if skill.mobility then acp else 0) + parseInt(@equip_benes?["skill:#{skill.name}"] | 0) | 0

	###
	Returns the ability score (not mod) modified by race and equipment
	###
	ability_score : (ability) ->
		# console.log "\nability_score"
		race = races(name: @race_name).first()
		race_mod = race.abilities?[ability] | 0
		ability_score = @abilities[ability] | 0
		equip_bene = @equip_benes?["ability:#{ability}"] | 0
		# console.log "\tequip_benes for #{ability}: #{parseInt(equip_bene)}"
		# console.log "\trace_mod: #{race_mod}   ability_score: #{ability_score}"
		# console.log "\n"

		parseInt ability_score + parseInt race_mod + parseInt equip_bene

	###
	Returns the modifier for the supplied ability
	###
	ability_modifier : (ability) ->
		# console.log "\nability_modifier"
		# console.log "\t#{ability} : #{common.pos(Math.ceil(this.ability_score(ability) - 11) / 2)}"
		# console.log "\n"
		calc_ability_modifier this.ability_score(ability)
	###
	Returns true if the supplied skill (or subtype, if applicable) contains any of the supplied character classes.
	###
	is_class_skill : (skill, subtype) ->
		console.log "\nis_class_skill"
		for classname of @classes
			if skill?.skill_classes?.indexOf(classname) > -1
				console.log "\t#{skill.name} #{skill.skill_classes} : #{classname}"
				return true
			if skill?.subtypes?[subtype]?.indexOf(classname) > -1
				console.log "\t#{skill.name} (#{subtype}) #{skill.subtypes[subtype]} : #{classname}"
				return true

		false

	###
	Returns the class-modified ranks for the supplied skill and skill points, or the max ranks for the character's level, whichever is lower.
	###
	ranks : (skill, subtype) ->
		console.log "\nranks"
		is_class_skill = this.is_class_skill(skill, subtype)
		console.log "\t#{skill.name} (#{subtype}) - #{if is_class_skill then "class" else "cross-class"}"
		multiplier = (if is_class_skill then 1 else .5)

		level = 0
		for classname, clazz of @classes
			level += (clazz.level + 1)


		points = 0
		char_skill = @skills(skill_name: skill.name).first()
		if char_skill
			if char_skill.subtypes
				points = char_skill.subtypes[subtype] | 0
			else if char_skill.ranks
				points = char_skill.ranks

		ranks = multiplier * points
		console.log "\tranks: #{multiplier} * #{points} = #{ranks}"
		max_ranks = multiplier * (level + 3)
		console.log "\tmax ranks: #{multiplier} * #{level + 3} = #{max_ranks}"

		Math.min(Math.floor(max_ranks), ranks)

	###
	Returns an array of feat names collected from class feats of the supplied character classes.
	###
	get_class_feat_names : () ->
		console.log "\nget_class_feat_names"
		class_feats = []
		for classname, char_class of @classes
			clazz = classes(name: classname).first()
			for level, these_class_feats of clazz.feats
				$.each(these_class_feats, (i, feat_name) ->
					class_feats.push feat_name if char_class.level >= level && class_feats.indexOf(feat_name) == -1
				)

		class_feats

	###
	Returns true feat name is found in the list of feats compiled from character classes.
	###
	is_class_feat: (feat_name) ->
		~this.get_class_feat_names().indexOf(feat_name)

	###
	Returns a Taffy db of feat objects for this character's chosen feats. Does not include class-supplied feats.
	###
	get_feats : () ->
		console.log "\tget_feats"
		char_feats = TAFFY([])
		if @feats
			@feats().each (feat) ->
				full_feat = feats(name: feat.feat_name).first()
				$.extend(full_feat, feat)
				char_feats.insert feat

		# char_feats.insert this.get_class_feats()
		char_feats


	###
	Returns an Taffy db of the class feats collected from the supplied character classes. Does not include character feat selections.
	###
	get_class_feats : () ->
		console.log "\nget_class_feats"
		class_feats = TAFFY([])
		feat_names = this.get_class_feat_names()
		console.log "\t#{feat_names}"
		for i, name of feat_names
			feat = feats(name: name).first()
			class_feats.insert feat

		# console.log "\t#{class_feats}"
		class_feats

	###
	Returns a Taffy db of the class feats collected from the supplied character classes and character-selected feats.
	###
	get_all_char_feats : () ->
		console.log "\nget_all_char_feats"
		all_char_feats = this.get_class_feats()
		console.log "\tall count: #{all_char_feats().count()}"
		char_feats = new TAFFY(chardata.feats().get())
		console.log "\tchar feats count: #{char_feats().count()}"
		all_char_feats?().each (feat) ->
			char_feat = chardata.feats(name: feat.name).first()
			if not char_feat
				char_feats.insert feat

		# console.log "\tall_char_feats count: #{all_char_feats.length}"
		all_char_feats().each (feat) ->
			console.log "\t#{feat.name}"

		char_feats

	###
	Returns the initiative modifier calculated from all relevant factors:
		feats
		dexterity
	###
	init : () ->
		console.log "init"
		init = 0
		char_feats = this.get_char_feats()
		console.log "\tinit feats: #{char_feats( "init" : isNull : false ).count()}"
		char_feats( init : isFunction : true ).each (feat) ->
			init = feat.init(init)
			init

		this.ability_modifier("Dex") + init

	# TODO - inline
	dr : (dr) ->
		@equip_benes?[dr]| 0

	###
	Returns the AC for all relevant factors:
		feats
		armor/shields
		classes
		race
		abilities
	###
	ac : () ->
		console.log "\nac - src"
		ac = 0
		char_feats = this.get_char_feats()
		char_feats(ac: isFunction: true).each (feat, i) ->
			ac = feat.ac(ac)
			ac
		armor_bonus = common.calc_armor_bonus(@armors, armors, "armor")
		console.log "\tarmor bonus: #{armor_bonus?.bonus} (#{armor_bonus?.max_dex_bonus})"
		shield_bonus = common.calc_armor_bonus(@shields, shields, "shield")
		console.log "\tshield bonus: #{shield_bonus?.bonus}"
		# TODO - generalize
		monk_mod = (if @classes["Monk"]? then classes.first(name: "Monk").ac_bonus[common.level()] else 0)
		dex_bonus = this.ability_modifier("Dex")
		if armor_bonus.max_dex_bonus != "-"
			dex_bonus = Math.min(armor_bonus.max_dex_bonus, dex_bonus)
		console.log """
			\tbase: 10
			\tarmor bonus: #{armor_bonus?.bonus} (#{armor_bonus?.max_dex_bonus})
			\tshield bonus: #{shield_bonus?.bonus} (#{shield_bonus?.max_dex_bonus})
			\tability (Dex): #{this.ability_modifier("Dex")}
			\tmin(max dex bonus, dex): #{Math.min(this.ability_modifier("Dex"), (common.is_number(armor_bonus.max_dex_bonus) | 0)) }
			\tsize mod: #{this.size_mod(@race_name)}
			\tequip bene: #{(@equip_bene?("other:ac") | 0)}
			\tfeat modified: #{ac}
			"""
		10 +
		armor_bonus.bonus +
		shield_bonus.bonus +
		dex_bonus +
		this.size_mod(@race_name) +
		monk_mod +
		(@equip_bene?("other:ac") | 0) +
		ac

	###
	Returns the touch ac for all relevant factors:
		dexterity
		race
		feats
	###
	touch_ac : () ->
		console.log "\ntouch_ac"
		# TODO - need to know what/how feats affect touch ac
		# ac = 0
		# for i, char_feat of this.get_all_char_feats()
		# 	console.log "\tevaluating #{char_feat.name}"
		# 	feat = feats(name: char_feat.name).first()
		# 	# we need to check character feats to get the multi selections
		# 	if feat?.ac
		# 		feat_mod += feat.ac(feat_mod, @armors, @shields)
		# 	console.log "\ac: #{ac}"
		console.log """
			\tdex mod: #{this.ability_modifier(@abilities["Dex"])}
			\tsize mod: #{this.size_mod(@race_name) }
		"""
		10 + this.ability_modifier("Dex") + this.size_mod(@race_name)

	###
	Returns the flat-footed ac for all relevant factors:
		armor
	###
	flat_footed_ac : () ->
		10 + common.calc_armor_bonus(@armors, armors, "armor").bonus

	###
	Returns the modifier for this character's size
	###
	size_mod : () ->
		console.log "\nsize_mod"
		size = races(name: @race_name).first().size
		console.log "\t#{@race_name} - #{size}"
		console.log "\n"
		(if size == "small" then 1 else 0)

	###
	Returns the reflex save DC
	###
	ref : () ->
		console.log "\nref"
		class_ref_score = this.save("ref")
		ref = 0
		equip_mod = @equip_benes["other:Ref"] | 0

		this.get_char_feats()( ref: isFunction: true ).each (feat) ->
			ref = feat.ref(ref)
			ref
		console.log "\tDex mod: #{this.ability_modifier("Dex")}"
		console.log "\tclass ref: #{class_ref_score}"
		console.log "\tfeat mod: #{ref}"
		console.log "\tequip_benes: #{equip_mod} "
		console.log "\n"
		this.ability_modifier("Dex") + class_ref_score + ref + equip_mod

	###
	Returns the will save DC
	###
	will : () ->
		class_will_score = this.save("will")
		feat_mod = 0
		this.get_char_feats()( will: isFunction: true ).each (feat) ->
			feat_mod = feat.will(feat_mod)
			feat_mod

		this.ability_modifier("Wis") + class_will_score + feat_mod + (@equip_benes["other:Will"] | 0)

	###
	Returns the fortitude save DC
	###
	fort : () ->
		class_fort_score = this.save("fort")
		feat_mod = 0
		this.get_char_feats()(fort: isFunction: true).each (feat) ->
			feat_mod = feat.fort(feat_mod)
			feat_mod

		this.ability_modifier("Con") + class_fort_score + feat_mod + (@equip_benes["other:Fort"] | 0)

	###
	Returns the base attack bonus as an array of integers
	###
	base_attack_bonus : () ->
		console.log "\nbase_attack_bonus"
		bab = []
		for classname, clazz of @classes
			class_babs = classes(name: classname).first().base_attack_bonus
			console.log "\t#{classname} : #{class_babs[clazz.level]}"
			attacks = class_babs[clazz.level].split("/")
			i = 0

			while i < attacks.length
				bab[i] = (bab[i] | 0) + parseInt(attacks[i])
				i++
		console.log "\n"
		bab

	###
	Returns the Combat M Bonus
	###
	# TODO - should the babs be cached?
	# TODO - removed other_mod
	cmb : () ->
		console.log "\ncmb"
		# other_mod = (if other_mod then parseInt(other_mod) else 0)
		console.log "\tbase attack bonus: #{this.base_attack_bonus()}"
		babs = this.base_attack_bonus().map((x) =>
			common.pos(x + this.ability_modifier("Str") + this.size_mod() + (@equip_benes["other:Att"] | 0))
		)
		console.log "\t#{babs}"
		babs.join "/"

	###
	Returns the Combat M Defense
	###
	# TODO - should the babs be cached?
	# TODO - removed other_mod
	cmd : () ->
		console.log "\ncmd"
		# other_mod = (if other_mod then parseInt(other_mod) else 0)
		console.log "\tbase attack bonus: #{this.base_attack_bonus()}"
		babs = this.base_attack_bonus().map((x) =>
			common.pos(x + this.ability_modifier("Str") + this.ability_modifier("Dex") + this.size_mod() + 10)
		)

		console.log "\t#{babs}"
		babs.join "/"


	###
	Returns an array of attacks for the supplied
	###
	# TODO - should the babs be cached?
	# TODO - removed other_mod
	attack : (char_weapon) ->
		console.log "\nattack"
		console.log "\tchar_weapon: #{char_weapon.weapon_name}"
		weapon_bonus = parseInt(char_weapon.att)	| 0
		weapon = weapons( name: char_weapon.weapon_name ).first()
		attacks =
			weapon_proficiency: -4
			acp: 0

		attacks.acp = this.armor_acp() + this.shield_acp()
		this.get_all_char_feats()( attack: isFunction: true ).each (feat) ->
			console.log "\t#{feat.name}"
			attacks = feat.attack(attacks, weapon, feat)
			attacks

		attacks.weapon = weapon?.att(@abilities)

		attacks.base = this.base_attack_bonus().map (x) =>
			console.log "\tbase: #{x}"
			console.log "\tability mod: #{attacks.weapon}"
			console.log "\toverride: #{weapon_bonus}"
			console.log "\tsize mod: #{this.size_mod()}"
			console.log "\tweapon_proficiency: #{attacks.weapon_proficiency}"
			console.log "\tacp: #{attacks.acp}"
			console.log "\tequip_benes: #{(@equip_benes["Att"] | 0)}"
			x + attacks.weapon + weapon_bonus + this.size_mod() + attacks.weapon_proficiency + attacks.acp + (@equip_benes["Att"] | 0)

		# attacks.base.join "/"

	spell_resistance : ->
		console.log "\nspell_resistance"
		sr = sr: 0
		for classname, char_class of @classes
			clazz = classes(name: classname).first()
			clazz?.sr?(sr, char_class)

		class_sr_score = this.save("sr")
		feat_mod = 0

		this.get_char_feats()( sr: isFunction: true ).each (feat) ->
			feat_mod = feat.fort(feat_mod)
			feat_mod
		console.log "\tequip_benes: #{(@equip_benes["other:SR"] | 0)}"
		sr.sr + class_sr_score + feat_mod + (@equip_benes["other:SR"] | 0)

	###
	Returns the class save DC for the supplied save type
	###
	save : (type) ->
		console.log "\nsave"
		type = type + "_save"
		save = 0
		for classname, clazz of @classes
			save += classes(name: classname).first()[type][clazz.level]	if classes(name: classname).first()[type]
		console.log "\n"
		save

	###
	Returns calculated damage for the supplied character weapon, considering all factors:
		weapon
		ability
		race
		feats
		equipment
	###
	damage : (char_weapon) ->
		console.log "\ndamage"
		damages = []
		weapon = $.extend({}, weapons( name: char_weapon.weapon_name ).first(), char_weapon)
		weapon_damage = if typeof weapon.dam == 'function' then weapon.dam() else weapon.dam

		for i, weapon_dam of weapon_damage.split("/")
			dam_components = weapon_dam.split(/\+|-/)
			die = dam_components[0]
			weapon_mod = (if dam_components.length > 1 then parseInt(dam_components[1]) else 0)
			damages.push
				die: die
				mod: weapon_mod
		console.log "\tdamages: #{damages}"
		this.get_char_feats()( damage: isFunction: true ).each (feat) ->
			damages = feat.damage(damages, weapon, feat)
			damages

		console.log "\tability mod: #{weapon.ability(@abilities)}"
		damage = ""
		# TODO - missing parseInt($("#damage_mod").text())
		for i, dmg of damages
			mod = common.pos(weapon.ability(@abilities) + dmg.mod + (@equip_benes["Dam"] | 0))
			console.log "\tmod: #{mod}"
			damage += dmg.die + (if mod then mod else "")
			console.log "\tdamage: #{damage}"
			damage += (if parseInt(i) + 1 < damages.length then "/" else "")

		damage

	###
	Returns the current level calculated from character class levels.
	###
	level : ->
		curr_level = 0
		for classname, clazz of @classes
			curr_level += clazz.level
		curr_level

	calc_equip_mod : (key) ->
		parseInt(equipment_benefits[key] == null ? 0 : equipment_benefits[key])

if typeof(exports) == "object"
	this.Character = Character
