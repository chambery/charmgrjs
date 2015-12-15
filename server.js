// var sqlite3 = require("sqlite3").verbose();
var express = require('express'),
    app = express();
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());
/* errs */
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

var dateFormat = require('dateformat');
var fs = require('fs');
var file = "../propmgmt.sqlite";
var exists = fs.existsSync(file);
console.log("file exists: " + exists);
// var db = new sqlite3.Database(file);
// console.log("db: " + db.toString());
YAML = require('yamljs');


function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something blew up!' });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}


function make_dir(path)
{
    try
    {
        fs.lstatSync(path);
    } catch (e)
    {
        fs.mkdirSync(path, 0755);
    }
}


app.get('/character/:owner/:name', function (req, res) {
    console.log("in get character");
    fs.readFile("users/" + req.params.owner + "/" + req.params.name + "/chardata", encoding = 'utf8', function (err, data) {
        if (err) {
            res.status(404).send(err);
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
            res.status(404).send(err);
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
            res.status(404).send(err);
            console.log(err);
        } else {
            console.log("Successfully read")
            chardata = data;
            console.log(data);
            console.log("renaming file");
            fs.rename("users/" + req.params.owner + "/" + req.params.name + "/chardata", "users/" + req.params.owner + "/" + req.params.name + "/chardata_" + parseInt((new Date()).getTime(), 16), function (err) {
                if (err) {
                    res.status(404).send(err);
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
    fs.writeFile("users/" + req.params.owner + "/" + req.params.name + "/chardata", JSON.stringify(req.body, null, 4), 'utf8', function (err) {
        if (err) {
            res.status(500).send(err);
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
    fs.writeFile("users/" + req.params.owner + "/" + req.body.char_name + "/" + req.body.id, JSON.stringify(req.body, null, 4), 'utf8', function (err) {
        if (err) {
            res.status(500).send(err);
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });
    res.send(req.body);
});

app.use('/', express.static(__dirname));

app.listen(1860);
console.log('Express server started on port 1860');
