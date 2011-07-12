var express = require('express'),
    app = express.createServer();
var fs = require('fs')

// app.configure("development", function(){
    app.use(express.bodyParser());
	app.use(express.logger());
	
	app.get('/character/:owner/:name', function(req, res) {
		console.log("in get");
		fs.readFile(req.params.owner + "_" + req.params.name, encoding='utf8', function(err, data) {
			if(err) {
				console.log(err);
			} else {
				res.send(data);
				console.log(data);
			}
		}); 
		
    });

	app.post('/character/:owner/:name', function(req, res){
		console.log("in put");
		console.log(req.params)		
		console.log("body:");
		console.log(req.body)		
		console.log("body.chardata");
		console.log(req.body.chardata)		
		fs.writeFile(req.params.owner + "_" + req.params.name, JSON.stringify(req.body), function(err) {
			if(err) {
				console.log(err);
			} else {
				console.log("The file was saved!");
			}
		}); 
		res.send(req.body);
	});

	app.use('/', express.static(__dirname));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
// });

app.listen(1860);
console.log('Express server started on port %s', app.address().port);


