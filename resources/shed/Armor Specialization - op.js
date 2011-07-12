var multis = [];
if(chardata.feats) {
	var armor_pro = chardata.feats.first({ feat_name: "Armor Proficiency (light)" });
	if(armor_pro) {
		multi.push(armor_pro);
	}
	armor_pro = chardata.feats.first({ feat_name: "Armor Proficiency (medium)" });
	if(armor_pro) {
		multi.push(armor_pro);
	}
	armor_pro = chardata.feats.first({ feat_name: "Armor Proficiency (heavy)" });
	if(armor_pro) {
		multi.push(armor_pro);
	}
}
return multis;