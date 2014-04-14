/**
 * User: selvam Ramasamy
 * Date: 27/March/2014
 * A custom library to read proxy 
 */
 'use strict';

var db = function () {
    return {
        config: function (conf) {
            console.log('Host:'+conf.host);
            console.log('Port:'+conf.port);
        }
    };
};

module.exports = db();