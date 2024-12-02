//app.js --> main file of the application (launching point)
const express = require("express");
const app = express(); // app is an instance of express
const port = 3000;
const logger = require('morgan'); //import the logging library
const fs = require('fs'); //import the file system library

app.set('view engine', 'ejs'); // This sets the view engine to ejs
app.set('views', './views'); 

// This checks the environment of the application and sets the logging format accordingly 
// process.env.NODE_ENV 
// if (app.get('env') == 'production') {
//     app.use(logger('common', {
//         skip: function (req, res) { return res.statusCode < 400 },
//         stream: __dirname + '/../morgan.log'
//     }));
// } else {
//     app.use(logger('dev'));
// }
//app.use(logger('common')); // Is the format when the project is in production stage 
app.use(logger('dev'));

//if we were using winston: 
// const logger = require('./utils/logger'); // Asegúrate de poner la ruta correcta
// const app = express();

// // Ejemplo de uso del logger
// app.get('/', (req, res) => {
//   logger.info('Solicitud GET a la ruta principal');
//   res.send('Hello World!');
// });

// app.listen(3000, () => {
//   logger.info('Servidor corriendo en http://localhost:3000');
// });


var requestReceived = function (req, res, next) {
    console.log('Request received');
    next();
}
app.use(requestReceived);


app.get('/', (req, res) => {
    res.send('Hello Orianna Surviving!');
});


//Starting the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});



//https://expressjs.com/en/4x/api.html#app.METHOD
