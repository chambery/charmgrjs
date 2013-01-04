import au.com.bytecode.opencsv.*

CSVReader reader = new CSVReader(new FileReader("Pathfinder feats.csv")); 
String[] nextLine = []
feats = [:]
reader.readNext()
while ((nextLine = reader.readNext()) != null) {
	if(nextLine[1] != "Monster") {
		println nextLine
		feats[nextLine[0]] = ['prereqs': nextLine[2], 'summary': nextLine[3]]
		if(nextLine[1] != "General") {
			feats[nextLine[0]]['groups'] = [nextLine[1]]
		}
	}
}

lines = new File("all_pf_feats.txt").readLines()
for(i=0; i<lines.size; i++) {
	if(lines[i].trim().length() > 0) {
		name = lines[i]
		matcher = (lines[i] =~ /(.+?) \((.*)\)/)
		if(matcher.matches()) {
			println "\tfound a match: ${matcher}"
			name = matcher.group(1)
			println "\t$name"
			matcher.group(2).split(", ").each {
				println "\t\t$it"
				if(!feats[name]['groups'].contains(it)) {
					feats[name]['groups'] << it
				}
			}
		}
		println "${name} = ${feats[name]}"
		feats[name]['description'] =  lines[++i]
				println "${name}."
	}
}

feats.keySet().sort().each { name ->
	println "},{"
	groups = ""
	if(feats[name]['groups']) {
		groups = ",\n\tgroups: [\"${feats[name]['groups'].join('\",\"')}\"]"
	}
	print"\tname: \"${name}\",\n"
	print"\tsummary: \"${feats[name]['summary']}\",\n"
	print"\tdescription: \"${feats[name]['description']}\",\n\tprereqs: {},\n\tbenefit: {}$groups,\n\ttype: \"feat\",\n\ttags: [\"pathfinder\"]"
	println ""
}
