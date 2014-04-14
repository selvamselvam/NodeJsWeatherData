'use strict';


var kraken = require('kraken-js'),
    serverparameters = require('./lib/serverparameters'),  
    db = require('./lib/proxy'),  
    app = {};

   

app.configure = function configure(nconf, next) {
    // Fired when an app configures itself
  db.config(nconf.get('proxyConfig'));
  next(null);
};


app.requestStart = function requestStart(server) {
    // Fired at the beginning of an incoming request

   
};


app.requestBeforeRoute = function requestBeforeRoute(server) {
    //server.use(proxy());
    server.use(serverparameters());    
    console.log('inside requestBeforeRoute');
   
};


app.requestAfterRoute = function requestAfterRoute(server) {
    // Fired after routing occurs

   
};

kraken.create(app).listen(function (err) {
    if (err) {
        console.error(err);
    }
});

module.exports = app;