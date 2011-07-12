summaries = [:]

new File("feat_summaries.txt").eachLine { line ->
	println line
	summaries[line.split("\t")[0]] = line.split("\t")[1]
}

new_feats = new File("new_feats-pf.js")
new_feats.write("")
feat = ""
new File("feats-pf.js").eachLine { line ->
	if(line.startsWith("},{")) {
		new_feats.append(",\ttags: [\"pathfinder\"],\n\ttype: \"feat\"\n")
	}
	if(line.startsWith("\tname")) {
		println line
		matcher = (line =~ /"(.*)"/)
		println matcher.getCount()
		feat = matcher[0][1]
	}
	if(line.startsWith("\ttype")) {
		new_feats.append("\t${summaries[feat]}\n")
	}
	if(!(line.startsWith("\ttags") || line.startsWith("\ttype"))) {
			new_feats.append("$line\n")
	}
}