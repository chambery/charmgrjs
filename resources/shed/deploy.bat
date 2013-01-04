
# create database
curl -i -X PUT -H 'Content-Type: application/json; charset=utf-8' $1/$2

# populate with data
for each file {
	for each object in file
		curl -i -X POST -H 'Content-Type: text/javascript; charset=utf-8' -d 'object_data' $1/$2
	}
}

# create views

con = (HttpURLConnection) new URL("http://localhost:5984/cm-test").openConnection();
con.setRequestMethod("PUT");
con.getOutputStream().write("");
System.out.println(con.getInputStream().getBytes());
