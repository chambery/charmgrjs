allfeats = null

build_feats_page = () ->
	set_links_part(2)

	# TODO - FIX ME!!
	char_classes = []
	char_classes.push(classname) for classname in chardata.classes
		
	# # console.group("build_feats_page")
	is_spellcaster = false
	for classname in chardata.classes
		if ~spellcasters.indexOf classname and classes.first( { name : classname }).spells_per_day[calc_current_level()][0] != '-'
			is_spellcaster = true
			break

	if not chardata.feats
		chardata.feats || new TAFFY( [])
	 
	feats_page_layout =
	 	"<div id='rogue_special_abilities'></div><div id='feats'>
			<table width=100% style='border: 1px solid #8DC3E9; border-collapse: collapse;'>
				<tr style='background: #8DC3E9;'><td style='text-align: left'>
					<span id='feats_available' style='float: right'>
						Base: <span id='feats_remaining'></span> 
						Bonus: <span id='bonus_feats_remaining'></span>
					</span>Feats</td>
				</tr>
			</table
			<table id='feats_table' style='border: 1px solid #D0D0D0; border-collapse: collapse; width: 100%;'></table></div>")
	$('#content').html(feats_page_layout)

	allfeats = new TAFFY(feats.get())
	allfeats.orderBy( (a, b) ->
		return (a.prereqs == null or a.prereqs.feats == null) and (a.name < b.name) ? -1 : 1
	})``pbpaste``
	
	temp_feats = allfeats.get()
	for  i in temp_feats
		removed = false
		# weed out the impossible feats
		# class features, eg "Channel Energy"
		prereqs = temp_feats[i].prereqs
		if(prereqs and prereqs.class_features) {
			for(classname in chardata.classes) {
				if(removed) { break }
				clazz = classes.first({ name: classname })
				for(l in prereqs.class_features) {
					if not ~clazz.class_features.indexOf(prereqs.class_features[l])
						allfeats.remove({ name: temp_feats[i].name })
						removed = true
						break

		# remove class-restricted feats
		if !removed and prereqs and prereqs.classes
			for classname in chardata.classes
				if !prereqs.classes[classname]
					allfeats.remove({ name: temp_feats[i].name })
					break

	allfeats.forEach( function(feat, n) {
		if !feat.hidden
			create_feat_listing(feat, 1)
	})
	# # console.groupEnd()

create_feat_listing = (feat, indent) ->
	# # console.group("create_feat_listing")
	# # console.log("feat: " + feat.name)
	count = indent = indent | 0
	if feat.prereqs and feat.prereqs.feats
		prereq = allfeats.first( {
			# if there are multiple prereqs, nest it under the first one
			name : feat.prereqs.feats[0]
		})
		indent = create_feat_listing(prereq, indent + 1) if prereq
			
	html = "<tr id='#{feat._id}' class='feat'>
				<td class='feat'>
					<input id='#{feat._id}' type='checkbox' class='feat' /></td>
				<td id='#{feat._id}' class='feat' valign='top'>
					<a id='#{feat._id}' class='fake_link'>#{feat.name}</a></td>
				<td class='feat' valign='top'>#{feat.summary}</td>
			</tr>"

	# ignore already printed feats
	if $("##{feat._id}").length == 0
		if feat.prereqs?.feats
			prereq = feats.first({	name : feat.prereqs.feats[0] })
			multi = if prereq.multi then "_sub_" else ""
			$("##{prereq._id}#{multi}").after(html)
			$("td[id='#{feat._id}']").css('padding-left', (10 * (indent - count)) + 'px')
		else
			$('#feats_table').append(html)
		
		$("a[id='#{feat._id}']").bind("click", {
			feat_id : feat._id
		}, function(e) {
			return show_item_detail(feats, e.data.feat_id)
		})

		if feat.multi and feat.multi != "count"
			$("input[id='#{feat._id}']").remove()

			db = feat.multi.db or feat.multi.type
			all_options = filter_options(feat, db)
			expand_bar = "<tr id='#{feat._id}_sub'>
							<td colspan='2'></td>
							<td style='width: 100%' bgcolor='#8DC3E9'>
								<a class='fake_link'>
									<span id='#{feat._id}_sub__expand_flag' style='float: right; vertical-align: middle;'><img src='images/collapsed.png' /></span>
									#{feat.name} options
								</a></td>
						</tr>"
			$("tr#" + feat._id).after(expand_bar)
			$("tr##{feat._id}_sub").bind('click', {
				feat_id : feat._id
			}, function(e) {
				toggle_visible(e.data.feat_id + "_sub_")
			})
			db = feat.multi.db or feat.multi.type
			create_selector_group(feat, "", all_options, db, 2, update_feat)
			$("##{feat._id}_sub_").hide()

			disable_feat(feat, true) if all_options.length == 0
				

		else
			$("input[id='#{feat._id}']").bind('click', {
				feat : feat
			}, function(e) {
				return update_feat(e.data.feat, $(this).attr('checked'))
			})
		}

	}

	# # console.groupEnd()
	return indent
}

populate_feats_page = () ->
	# # console.group("populate_feats_page")
	# apply class customizations
#	for classname in chardata.classes
#		clazz = classes.first({ name : classname })
#		if clazz.custom and clazz.custom.feats
#			for(feature in clazz.custom.feats) {
#				clazz.custom.feats[feature]()
#			}
#		}
#	}

	# TODO - before looping set up all class feats
	allfeats.forEach( function(feat, i) {
		# # console.log(feat.name)
		if feat.multi
			char_feat = chardata.feats?.first({ feat_name : feat.name })
			if feat.multi != "count"
				char_multi = if char_feat?.multi then char_feat.multi else []

				# put a check for each of the multi selections
				for i in [0..char_multi.length]
					multi_id = feat.multi.type.first( {
						name : char_multi[i]
					})._id
					$("input##{feat._id}_" + multi_id).attr('checked', true)
			else
				# count
				$("span##{feat._id}_count").text((char_feat ? char_feat.multi : 1))
				$("tr##{feat._id}_sub").toggle(checked)
			
		else
			checked = chardata.feats?.first({ feat_name : feat.name })

			#  class feats (something more efficient)
			if is_class_feat(feat.name)
				checked = true
				# prevent unchecking since an auto-added class feat
				disable_feat(feat, true)
			

			$("input[id='#{feat._id}']").attr('checked', checked)

			if checked and $("input[id='#{feat._id}']").attr('disabled')
				$("tr#" + feat._id).addClass('class_feat')
			
		
	})

	# TODO - Rogue Special Abilities
	# level = calc_current_level()
	# spec_abil_min_lvl = clazz.special_abilities_levels != null ? clazz.special_abilities_levels[0] : 0
	# if(clazz.name == 'Rogue' and (level >= spec_abil_min_lvl)) {
	# create_rogue_special_abilities( level, clazz)
	# }

	update_feats_remaining()

	calc_prereqs()

	# # console.groupEnd()
}

disable_feat = (feat, disabled) ->
	if disabled
		$("input[id='#{feat._id}']").attr("disabled", "disabled")

	else
		$("input[id='#{feat._id}']").removeAttr('disabled')
	}
	$("##{feat._id}").removeClass((if disabled then 'enabled' else 'disabled')).addClass((if disabled then 'disabled' else 'enabled'))
	# $('#' + feat._id + '_name').removeClass((disabled ? 'enabled' : 'disabled')).addClass((disabled ? 'disabled' :
	# 'enabled'))
	# $('#' + feat._id + '_desc').removeClass((disabled ? 'enabled' : 'disabled')).addClass((disabled ? 'disabled' :
	# 'enabled'))

	checked = $("input[id='#{feat._id}']").attr('checked')

	if feat.multi
		$("tr##{feat._id}_sub").toggle(feat.multi and not disabled)
	}
}

update_feats_remaining = () ->
	# # console.group("update_feats_remaining")
	count = calc_feats_remaining()
	$('#feats_remaining').text(count.base_feats_remaining)
	# if(count.bonus_feats.groups.length == 0 and count.bonus_feats.feats.length == 0) {
	# } else
	$('#bonus_feats_remaining').text(count.bonus_feats.count)
	# # console.groupEnd()
}

calc_prereqs = () ->
	# allfeats = feats.get()
	# TODO - move to recalc (don't loop over all)?
	# # console.group("calc_prereqs")
	allfeats.forEach( function( feat, i ) {
		# # console.log(allfeats[i].name)
		prereqs_met = false

		if not is_class_feat(feat.name)
			if(feat.prereqs) 
			# # # console.group("is_prereqs_met")
				prereqs_met = prereqs_met or is_prereqs_met(feats._id, feat.prereqs)
			else
				prereqs_met = true
			
			# # # console.groupEnd()
			disable_feat(feat, not prereqs_met)
		
		# if(allfeats[i].multi and allfeats[i].multi != "count") {
		# repopulate_multi(allfeats[i])
		# }

	})
	# # console.groupEnd()
}

/**
 * TODO - find a way around passing in the feat id
 */
is_prereqs_met = (feat_id, prereqs) ->
    char_feats = get_char_feats()
    prereqs_met = true
    # handle or's separately
    if prereqs.or
        # # console.group(" : or")
        for j in prereqs.or
            prereqs_met = is_prereqs_met(feat_id, prereqs.or[j])
            # # console.log(j + " : #{prereqs.or[j]} = " + prereqs_met)
            if prereqs_met
                # if we get one true, move on
                break
            }
        }
        # # console.groupEnd()
        if !prereqs_met
            # got through all without a match, fail
            return false
        }
    }
    # level
    if prereqs.level
        for i, clazz in chardata.classes
            if clazz.level < prereqs.level
                return false

    if prereqs.classes
        for i, clazz in chardata.classes
            if prereqs.classes[i] > clazz.level
                return false

    if prereqs.pick
        # # console.group(" : pick")
        if prereqs.pick.feats
            handle_pick(prereqs.pick.feats, prereqs.pick.count)

        if prereqs.pick.group
            group_feats = feats.get({
                group: {
                    has: prereqs.pick.group
                }
            })
            handle_pick(group_feats, prereqs.pick.count)
        }
    }

    # if feat prereqs contain another feat, and that feat has not been selected...
    if prereqs.feats
        for i, feat in prereqs.feats
            # if it's not a char feat or a class feat
            if ((chardata.feats == null or chardata.feats.first({
                feat_name: feat
            }) == false) and not is_class_feat(feat)) {
                # console.log("feat fail: " + prereqs.feats[k])
                return false

    if prereqs.multi
        for k in prereqs.multi
            for l in prereqs.multi[k]
                if (chardata.feats or !chardata.feats.first({
                    name: k
                }) or not (chardata.feats.first({
                    name: k
                }).multi.indexOf(prereqs.multi[k][l]) > -1)) {
                    # # console.log("multi fail: #{k} - " + prereqs.multi[k][l])
                    return false

    if prereqs.abilities
        for ability, score in prereqs.abilities
            if chardata.abilities[ability] < ability
                # # console.log("ability fail: #{chardata.abilities[k]} < " + prereqs.abilities[k])
                return false

    if prereqs.skills
        for skill, ranks in prereqs.skills
            char_skill = chardata.skills?.first({
                name: skill
            })
            if char_skill?.ranks < ranks
                # # console.log("skill fail: #{char_skill.ranks} < " + prereqs.skills[k])
                return false

    return true
}

calc_feats_remaining = () ->
	bonus = {
		count: 0,
		groups: {},
		feats: {}
	}
	# collect the number and constraints of the bonus feats
	for classname in chardata.classes
		clazz = classes.first({ name: classname })
		if clazz.custom and clazz.custom.feats
			for level in clazz.custom.feats
				if calc_current_level() >= level
					clazz.custom.feats[level].script(bonus)
						# $.merge(bonus_feats.groups, bonus.groups)
					# }
					# if bonus.feats
					# }
				else
					break
				}
			}
		}
	}

	char_feats = chardata.feats == null ? [] : chardata.feats.get()
	base_feats_remaining = calc_total_base_feats_count(chardata.race_name, chardata.xp)

	for i in char_feats
		feat = feats.first({
			name: char_feats[i].feat_name
		})
		if char_feats[i].multi
			if jQuery.isArray(char_feats[i].multi)
				# selectable
				if is_bonus_eligible(feat, bonus)
					bonus.count -= char_feats[i].multi.length
					if bonus.count < 0
						base_feats_remaining += bonus.count
						bonus.count = 0
					}
				else
					base_feats_remaining -= char_feats[i].multi.length
				}
			else
				# stackable count
				if is_bonus_eligible(feat, bonus)
					bonus.count -= parseInt(char_feats[i].multi)
				else
					base_feats_remaining -= parseInt(char_feats[i].multi)
				}
			}
		else
			# single
			if is_bonus_eligible(feat, bonus)
				bonus.count -= 1
			else
				base_feats_remaining -= 1
			}
		}
	}

	return {
		base_feats_remaining: base_feats_remaining,
		bonus_feats: bonus
	}
}

filter_options = (feat, options_db) ->
	# # console.group("filter_options")
	# # console.log("feat: " + feat.name)
	filtered_options = []
	# multi options are supplied by db or prereq feats
	if feat.multi.db
		filtered_options = filtered_options.concat(feat.multi.db.get(feat.multi.filter))
	}
	if feat.multi.feats
		for  i in feat.multi.feats
			multi_feat = feats.first( {
				name : feat.multi.feats[i]
			})
			char_feat = get_char_feats().first( {
				name : multi_feat.name
			})
			if multi_feat.collection
				if char_feat
					filtered_options = filtered_options.concat(multi_feat.collection.db.get(multi_feat.collection.filter))
				}
			# } else if multi_feat.multi.filter

			else
				# TODO - REFACTOR!!!!
				# multi_feat: Weapon Focus
				# chardata.feats [{Exotic Weapon Proficiency, multi: ["Battleaxe"]}]
				if char_feat and char_feat.multi != null and chardata.feats
					char_feat_ref = chardata.feats.first( {
						feat_name : multi_feat.name
					})
					for  j in char_feat_ref.multi
						# # console.group("options")
						option = feat.multi.type.first( {
							name : char_feat_ref.multi[j]
						})
						# # console.log(option.name)
						# if you're filtering the list of multis...
						if multi_feat.multi.filter
							for  k in multi_feat.multi.filter
								if option[k]
									filtered_options.push(option)
								}
							}
						else
							filtered_options.push(option)
						}
						# # console.groupEnd()
					}
				}
			}
		}
	}

	filtered_options.sort(function(a, b) {
		return a.name > b.name ? 1 : -1
	})

	# # console.groupEnd()
	return filtered_options
}

update_count = (feat) ->
	count = calc_feats_remaining()
	if count.base_feats_remaining == 0 and  !is_bonus_eligible(feat, count.bonus_feats)
		alert('No feat selections remaining.')
		return
	}
	char_feat = chardata.feats.first( {
		feat_name : feat_name
	})
	char_feat.multi += 1
	$("span[id='feat_#{feat_id}_count']").text(char_feat.multi)
	save_character()
	update_feats_remaining()
}

update_feat = (feat, is_selected, multi_item, multi_type) ->
	multi = multi_item ? "_" + multi_type.first( {
		name : multi_item
	})._id : ""
	count = calc_feats_remaining()
	total_feats_remaining = count.bonus_feats.count + count.base_feats_remaining
	char_feat = chardata.feats.first( {
		feat_name : feat.name
	})
	if is_selected
		# undo selection if none remaining
		# TODO - handle other classes (besides fighter)
		if total_feats_remaining == 0 or (count.base_feats_remaining == 0 and chardata.class_name == "Fighter" and !combat_feats.indexOf(feat.name) > -1)
			$("input[id='#{feat._id + multi}']").attr('checked', false)
			alert('No feat selections remaining.')
		else
			if !char_feat
				count = chardata.feats.insert( {
					feat_name : feat.name
				})
				char_feat = chardata.feats.first( {
					feat_name : feat.name
				})
			}
			if multi_item
				if char_feat.multi == null
					char_feat.multi = []
				}
				char_feat.multi.push(multi_item)
			}
		}
	else
		# remove
		# TODO - cascading remove
		if multi_item
			char_feat.multi.splice(char_feat.multi.indexOf(multi_item), 1)
			if char_feat.multi.length == 0
				chardata.feats.remove( {
					feat_name : feat.name
				})
			}
		else
			chardata.feats.remove( {
				feat_name : feat.name
			})
		}
	}

	save_character()

	inform_dependents(feat, multi_item)

	update_feats_remaining()
	# recalc prereqs to enable feats with this feat as a dependency
	calc_prereqs()
}

# TODO - should be a callback
inform_dependents = (feat) ->
	# # console.group("inform_dependents")
	# # console.log(feat.name)
	feats.get( {
		multi : {
			"!is" : null
		}
	}).forEach(function(dependent, i) {
		if ~dependent.multi.feats?.indexOf feat.name
			if dependent.multi and dependent.multi?.feats
				inform_dependents(dependent)

			db = dependent.multi.db or dependent.multi.type
			all_options = filter_options(dependent, db)
			hidden = $("#{dependent._id}).hasClass('disabled')
			# # console.log("dependent: #{$("#" + dependent._id}_sub_"))
			$("tr[id='#{dependent._id}_sub_']").html("")
			create_selector_group(dependent, "", all_options, db, 2, update_feat)
			$("##{dependent._id}_sub__expand_flag").text(hidden ? '+' : '-')
			$("##{dependent._id}_sub_").hide(hidden)
	})
	# # console.groupEnd()
}

create_rogue_special_abilities = (level, clazz) ->

	rogue_specials = []
	for i, special in rogue_special_abilities
		rogue_specials.push(special_abilities.first( {	name : special	}))

	# get the number of special abilities selectors
	count = 0
	for i in clazz.special_abilities_levels
		if level >= clazz.special_abilities_levels[i]
			count++
		
	special_html = ""
	$("#rogue_special_abilities").html("
		<table id='rogue_specials_table' style='border: 1px solid #D0D0D0' width='100%' border='0' margin='0'>
			<tr id='rogue_specials'>
				<td colspan='2' bgcolor='#8DC3E9'>
					<span id='rogue_specials_expand_flag' style='font-family: Monospace; float: right'>+</span><a class='fake_link'>Rogue Special Abilities</a>
				</td>
			</tr>"
				
	$("tr[id='rogue_specials']").bind("click", function(e) {
		return toggle_visibility("rogue_specials")
	})
	for i in [0..count]
		selected = chardata.rogue_special_abilities?[i]?.special_id
		selected_special = special_abilities.first( { name : selected } )
		special_html = "<tr class=data id='special_#{i}'>
							<td valign='top'>
								#{create_select1('special_' + i, rogue_specials, 'update_rogue_special_ability( ' + i + ')', selected)}
							</td>
							<td id='special_#{i}_description'>
								<a class='fake_link' onclick='show_item_detail(special_abilities, #{(if selected_special then selected_special._id else rogue_specials[i]._id)})'>
									#{(if selected_special then selected_special.description else rogue_specials[i].description)}
								</a></td></tr>"
		if (selected == "Skill Mastery") 
			# expand skill mastery bit
			special_html += create_skill_selection_matrix(i)

	special_html += "</tbody></table>"
	$('#rogue_special_abilities').html(special_html)
	$('#rogue_specials').hide()

}

handle_pick = (group, count) ->
	matches = 0
	for i, item in group
		if char_feats.first( { name : item } ) 
			# # console.log("match #{matches} of " + prereqs.pick.count)
			matches++
			if matches == count
				return true

				# # console.groupEnd()
	return false
}

find_match = (o1, o2) ->
	for(prop in o1) {
		if(o2[prop]) {
			return true
		}
	}
	return false
}

is_bonus_eligible = (feat, bonus_feats) ->
	return bonus_feats.count > 0 and (bonus_feats.feats[feat.name] or find_match(bonus_feats.groups, feat.groups))
}
