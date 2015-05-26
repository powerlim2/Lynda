var http = require('http'),
	flights = require('./data'),
	app = require('./app')(flights);  // load data

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
