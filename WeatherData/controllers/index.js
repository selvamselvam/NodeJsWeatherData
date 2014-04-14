/**
 * User: selvam Ramasamy
 * Date: 27/March/2014
 * Controller for invking the REST Service
 */
'use strict';

var IndexModel = require('../models/index');

module.exports = function (server) {

console.log('inside controller');

    server.get('/', function (req, res) {

        console.log('inside controller get function');

        var model = new IndexModel();

        res.render('index', model);
        
    });

};
