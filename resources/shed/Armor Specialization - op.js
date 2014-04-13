var multis = [];
if(chardata.feats) {
	var armor_pro = chardata.feats({ feat_name: "Armor Proficiency (light)" }).first();
	if(armor_pro) {
		multi.push(armor_pro);
	}
	armor_pro = chardata.feats({ feat_name: "Armor Proficiency (medium)" }).first();
	if(armor_pro) {
		multi.push(armor_pro);
	}
	armor_pro = chardata.feats({ feat_name: "Armor Proficiency (heavy)" }).first();
	if(armor_pro) {
		multi.push(armor_pro);
	}
}
return multis;
