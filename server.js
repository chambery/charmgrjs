var express = require('express'),
    app = express.createServer();
var fs = require('fs');

function make_dir(path) {
    try {
        fs.lstatSync(path);
    } catch (e) {
        fs.mkdirSync(path, 0755);
    }
}

app.use(express.bodyParser());
app.use(express.logger());

app.get('/character/:owner/:name', function (req, res) {
    console.log("in get character");
    fs.readFile("users/" + req.params.owner + "/" + req.params.name + "/chardata", encoding = 'utf8', function (err, data) {
        if (err) {
        	res.send(err, 404);
            console.log(err);
        } else {
            res.send(data);
            console.log(data);
        }
    });
});

app.get('/log/:owner/:name/:entry_id', function (req, res) {
    console.log("in get log entry");
    fs.readFile("users/" + req.params.owner + "/" + req.params.name + "/" + req.params.entry_id, encoding = 'utf8', function (err, data) {
        if (err) {
        	res.send(err, 404);
            console.log(err);
        } else {
            res.send(data);
            console.log(data);
        }
    });
});

app.get('/delete/:owner/:name', function (req, res) {
    console.log("in delete character");
    var chardata = "No character found with the name " + req.params.name + " (owner: " + req.params.owner + ")";
    console.log("reading file");
    fs.readFile("users/" + req.params.owner + "/" + req.params.name + "/chardata", encoding = 'utf8', function (err, data) {
        if (err) {
        	res.send(err, 404);
            console.log(err);
        } else {
        	console.log("Successfully read")
            chardata = data;
            console.log(data);
            console.log("renaming file");
            fs.rename("users/" + req.params.owner + "/" + req.params.name + "/chardata", "users/" + req.params.owner + "/" + req.params.name + "/chardata_" + parseInt((new Date()).getTime(), 16), function (err) {
				if (err) {
					res.send(err, 404);
					console.log(err);
				} else {
					console.log("Successfully renamed")
					res.send(chardata);
					console.log(chardata);
				}
			});	
        }
    });
});

app.post('/character/:owner/:name', function (req, res) {
    console.log(req.body);
    make_dir("users/");
    make_dir("users/" + req.params.owner);
    make_dir("users/" + req.params.owner + "/" + req.params.name);
    fs.writeFile("users/" + req.params.owner + "/" + req.params.name + "/chardata", JSON.stringify(req.body), 'utf8', function (err) {
        if (err) {
        	res.send(err, 500);
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });
    res.send(req.body);
});

app.post('/log/:owner/:name', function (req, res) {
    console.log("in post log: " + req.params.id);
    console.log(req.body);
    make_dir("users/");
    make_dir("users/" + req.params.owner);
    make_dir("users/" + req.params.owner + "/" + req.body.char_name);
    fs.writeFile("users/" + req.params.owner + "/" + req.body.char_name + "/" + req.body.id, JSON.stringify(req.body), 'utf8', function (err) {
        if (err) {
        	res.send(err, 500);
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });
    res.send(req.body);
});

app.use('/', express.static(__dirname));
app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
}));
app.listen(1860);
console.log('Express server started on port 1860');
