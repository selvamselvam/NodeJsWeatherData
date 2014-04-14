/**
 * User: selvam Ramasamy
 * Date: 27/March/2014
 * model for connect the websevrice and collect the data 
 */
'use strict';
var Client = require('node-rest-client').Client;

// Create new hash 
var cityStateHash = {}; 
cityStateHash['CA'] = 'Campbell';
cityStateHash['NE'] = "Omaha";
cityStateHash['TX'] = 'Austin';
cityStateHash['MD'] = 'Timonium';


var temp_array = new Array();
var i=0;


var postRequest = function(callback) {

    console.log('inside Model  CallBack');

    var Client = require('node-rest-client').Client;

    // configure proxy
    var options_proxy={
        proxy:{
            host:"xxxxxxx.com",
            port:8080,
            tunnel:false // use direct request to proxy
        }
    };

    var client = new Client(options_proxy);

    // show the values stored
    for (var k in cityStateHash) {

        // use hasOwnProperty to filter out keys from the Object.prototype
        if (cityStateHash.hasOwnProperty(k)) {
            var url = "http://api.wunderground.com/api/579836cf9ab156a5/conditions/q/" + k+ "/" + cityStateHash[k] + ".json";

             // registering remote methods
            client.registerMethod("jsonMethod",url, "GET");
             var responseData = {};
             client.methods.jsonMethod(function(data,response){
                    var json = JSON.parse(data);
                    responseData = json.current_observation.temp_c;
                    callback(responseData);
                 });
         }
    }
};



var responsecall = postRequest(function(response) {
    
    console.log('inside Model  postRequest');

   temp_array[i] = response;
   i=i+1;
});



//export 
module.exports = function IndexModel() {

console.log('inside Model  IndexModel');

var JSONWeatherObj = {};
var weatherdata = {names: []};
var temp_c ;

//responsecall();


i=0;
// show the values stored
for (var k in cityStateHash) {

    // use hasOwnProperty to filter out keys from the Object.prototype
    if (cityStateHash.hasOwnProperty(k) && isNaN(temp_array[i])==false ) {
        weatherdata.names.push({
            "state" : k,
            "city"  : cityStateHash[k],
            "weather"       : temp_array[i].toString()
            });
        i = i+1;
    } // end if
    
} // end for

 return weatherdata
};
