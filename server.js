var express = require('express'),
    app = express.createServer();
var fs = require('fs')

// app.configure("development", function(){
    app.use(express.bodyParser());
	app.use(express.logger());
	
	app.get('/character/:owner/:name', function(req, res) {
		console.log("in get character");
		fs.readFile("users/" + req.params.owner + "_" + req.params.name, encoding='utf8', function(err, data) {
			if(err) {
				console.log(err);
			} else {
				res.send(data);
				console.log(data);
			}
		}); 
    });

    app.get('/log/:owner/:name/:entry_id', function(req, res) {
		console.log("in get log entry");
		fs.readFile("users/logs/" + req.params.entry_id, encoding='utf8', function(err, data) {
			if(err) {
				console.log(err);
			} else {
				res.send(data);
				console.log(data);
			}
		});     	
    }
    
	app.post('/character/:owner/:name', function(req, res){
		console.log(req.body)		
		fs.writeFile("users/" + req.params.owner + "_" + req.params.name, JSON.stringify(req.body), function(err) {
			if(err) {
				console.log(err);
			} else {
				console.log("The file was saved!");
			}
		}); 
		res.send(req.body);
	});

	app.post('/log/:owner/:name/', function(req, res){
		var log = JSON.parse(req.body);
		fs.writeFile("users/logs/" + log.entry_id, JSON.stringify(req.body), function(err) {
			if(err) {
				console.log(err);
			} else {
				console.log("The file was saved!");
			}
		}); 
		res.send(req.body);
	}
	
	app.use('/', express.static(__dirname));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
// });

app.listen(1860);
console.log('Express server started on port %s', app.address().port);


