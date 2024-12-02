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

//Para evaluar en el simu:
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configura EJS como motor de plantillas
app.set('view engine', 'ejs');

// Middleware para parsear JSON
app.use(bodyParser.json());

// Carpeta de vistas
app.set('views', './views');

// Ruta para mostrar la página de registro
app.get('/register', (req, res) => {
    res.render('register'); // Se renderiza la plantilla EJS
});

// Ruta para mostrar la página de login
app.get('/login', (req, res) => {
    res.render('login'); // Se renderiza la plantilla EJS
});

// RUTA: Registro de usuario
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username y password son requeridos' });
    }

    // Leer los usuarios del archivo JSON
    const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

    // Verificar si el usuario ya existe
    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.status(409).json({ message: 'Usuario ya existe' });
    }

    // Agregar el nuevo usuario
    users.push({ username, password });
    fs.writeFileSync('users.json', JSON.stringify(users, null, 2));

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
});

// RUTA: Inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username y password son requeridos' });
    }

    // Leer los usuarios del archivo JSON
    const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

    // Buscar al usuario
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    res.status(200).json({ message: `Bienvenido, ${username}` });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
