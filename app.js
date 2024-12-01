//app.js --> main file of the application (launching point)
const express = require("express");
const app = express(); // app is an instance of express
const port = 3000; 
const logger = require('morgan'); //import the logging library

//app.use(logger('common')); // Is the format when the project is in production stage 
app.use(logger('dev')); 

var requestReceived = function (req, res, next) {
    console.log('Request received');
    next();
}


app.get('/', (req, res) => {
    res.send('Hello Orianna Surviving!');
});  

app.use(requestReceived);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});



//https://expressjs.com/en/4x/api.html#app.METHOD
  