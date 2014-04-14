/**
 * User: selvam Ramasamy
 * Date: 27/March/2014
 * Page counter and Server Request middleware component
 */
'use strict';

module.exports = function () {
    var requestsServed = 0;

    return function (req, res, next) {
        requestsServed += 1;
        console.log('Request counter:'+ requestsServed);
        console.log(req);
        next();
    };
};
