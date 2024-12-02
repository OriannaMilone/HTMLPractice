//app.js --> main file of the application (launching point)
const express = require("express");
const app = express(); // app is an instance of express
const port = 3000;
const logger = require('morgan'); //import the logging library
const fs = require('fs'); //import the file system library

app.set('view engine', 'ejs'); // This sets the view engine to ejs
app.set('views', './src/views'); 

app.locals.title = "Mi Título de Aplicación GLOBAL"; //Stablishing a global var to be used in the views

//app.use(logger('common')); // Is the format when the project is in production stage 
app.use(logger('dev'));

// Middlewares y rutas
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//This is the way to serve static files in express

//Logging cutre
let requestReceived = function (req, res, next) {
    console.log('Request received');
    next();
}
app.use(requestReceived);

let indexRouter = require('./src/routes/index');
app.use('/', indexRouter);

// app.get('/', (req, res) => {
//     res.send('Hello Orianna Surviving!');
// });

//Starting/Launching the server (This is the last line of the file) 
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});