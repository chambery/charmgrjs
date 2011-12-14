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
	feats = require("./resources/feats").feats
	skills = require("./resources/skills").skills
	races = require("./resources/races").races
	alignments = require("./resources/alignments").alignments
	goodness = require("./resources/alignments").goodness

class Character

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
	# classes : { }
	# armors : { }
	# weapons : {	}
	# shields : {	}

	calc_total_base_feats_count : () ->
		base_feat_count = (if @race_name == "Human" then 1 else 0)
		base_feats = [ 0, 2, 5, 8, 11, 14, 17 ]

		for classname, classdata of @classes
			for level in [0..classdata.level]
				base_feat_count += (if base_feats.indexOf(level) > -1 then 1 else 0)

		base_feat_count
	
	calc_total_class_feats_count : () ->
		class_feat_count = 0
		for classname, classdata of @classes
			class_feats = classes(name: classname).first().bonus_feats_levels
			
			for level in [0..classdata.level]
				class_feat_count += (if ~class_feats.indexOf(level) then 1 else 0)
				
		class_feat_count

	calc_armor_acp : (char_armors) ->
		acp = 0
		for i, armor of char_armors
			acp += armors(name: armor.armor_name).first().acp
		acp

	calc_shield_acp : (char_shields) ->
		acp = 0
		for i, shield of char_shields
			acp += shields(name: shield.shield_name).first().acp
		acp

	###
	Returns the DC for the supplied skill (subtype) taking all factors into consideration.
	###
	calc_skill_mod : (skill, subtype) ->
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
		for i, char_feat of this.get_all_char_feats(@feats, @classes)
			console.log "\tevaluating #{char_feat.name}"
			feat = feats(name: char_feat.name).first()
			# we need to check character feats to get the multi selections
			if feat?.skills?.mod?
				feat_mod += feat.skills.mod(skill, subtype, char_skill_points, feat_mod, @feats)
			console.log "\tmod: #{feat_mod}"
			acp = feat.mobility(acp)	if skill.mobility and feat.mobility
		
		race_mod = race.skills[skill.name] | 0
		ranks = this.calc_ranks(skill, subtype)
		skill_ability_score = @abilities[skill.ability] | 0
		console.log """
			\tskill - #{skill.name} #{if subtype then "(" + subtype + ")"}
			\tskill points - #{char_skill_points} : #{ranks}
			\trace - #{race.name} : #{race_mod}
			\tranks: #{ranks}		
			\tfeat mod : #{feat_mod}
			\tability mod : #{common.calc_ability_modifier(parseInt(skill_ability_score))}
			"""
		ranks + common.calc_ability_modifier(parseInt(skill_ability_score)) + race_mod + feat_mod + (if skill.mobility then acp else 0) + parseInt(@equip_benes?["skill:#{skill.name}"] | 0) | 0

	###
	Returns the ability score (not mod) modified by race and equipment
	###
	calc_ability_score : (ability) ->
		console.log "calc_ability_score - src"
		race = races(name: @race_name).first()
		race_mod = race.abilities[ability] | 0
		ability_score = @abilities[ability] | 0
		equip_bene = @equip_benes?["ability:#{ability}"] | 0
		console.log "\tequip_benes for #{ability}: #{parseInt(equip_bene)}"
		console.log "\trace_mod: #{race_mod}   ability_score: #{ability_score}"

		parseInt ability_score + parseInt race_mod + parseInt equip_bene

	###
	Returns true if the supplied skill (or subtype, if applicable) contains any of the supplied character classes.
	###
	is_class_skill : (skill, subtype) ->
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
	calc_ranks : (skill, subtype) ->
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
	get_class_feat_names : (char_classes) ->
		console.log "get_class_feat_names - src"
		class_feats = []
		for classname, char_class of char_classes
			clazz = classes(name: classname).first()
			for level, these_class_feats of clazz.feats
				# console.log "#{level} : #{class_feats}"
				$.each(these_class_feats, (i, feat_name) ->
					console.log "\t- #{feat_name} : #{i}"
					class_feats.push feat_name if char_class.level >= level && class_feats.indexOf(feat_name) == -1
				)

		class_feats

	###
	Returns an array of the class feats collected from the supplied character classes.
	###
	get_class_feats : (char_classes) ->
		console.log "get_class_feats - src"
		class_feats = []
		feat_names = this.get_class_feat_names(char_classes)
		console.log feat_names
		for i, name of feat_names
			feat = feats(name: name).first()
			console.log "\t+ #{i} : #{feat.name}"
			if class_feats.indexOf(feat) == -1
				class_feats.push feats(name: name).first()
			console.log "\t+ length: #{class_feats.length}"

		console.log "#{class_feats}"
		class_feats

	###
	Returns an array of the class feats collected from the supplied character classes and character-selected feats.
	###
	get_all_char_feats : (char_feats, char_classes) ->
		console.log "get_all_char_feats - src"
		all_char_feats = this.get_class_feats(char_classes)
		char_feats?().each (char_feat, i) ->
			feat = feats(name: char_feat.feat_name).first()
			if all_char_feats.indexOf(feat) == -1
				console.log "adding \"#{feat.name}\""
				all_char_feats.push feat
		
		console.log "\tall_char_feats count: #{all_char_feats.length}"
		for i, feat of all_char_feats
			console.log "\t#{feat.name}"

		all_char_feats

if typeof(exports) == "object"
	this.Character = Character