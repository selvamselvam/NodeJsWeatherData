# Kraken WeatherData Example: Custom Middleware

An application to show the use of custom middleware for kraken.

## What we'll be doing

The simple application communicate with REST server for collecting the WeatherData and display in the client.

## Running this example

Clone this repo

Install the dependencies: `npm install`

Start the server: `npm start`



```javascript
module.exports = function (server) {

console.log('inside controller');

    server.get('/', function (req, res) {

        console.log('inside controller get function');

        var model = new IndexModel();

        res.render('index', model);
        
    });

};
```
This function will be invoked for every request to the server. Since we load things like scripts and images along with the page,
you may see this invoked multiple times per page load. Every time a request is received, we increment our counter by one
and print to the console



## Running the example
Start your server `npm start` and visit a page [http://localhost:8000](http://localhost:8000)



