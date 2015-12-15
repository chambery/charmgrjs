lines = new File("new5.txt").readLines()
for(int i=1; i<lines.size(); i=i+3) {
	println lines[i]
}