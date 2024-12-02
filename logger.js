// const winston = require('winston');

// const logger = winston.createLogger({
//   level: 'info',  // Nivel mínimo de logs que se registrarán.
//   format: winston.format.json(),  // Los logs se registrarán en formato JSON.
//   defaultMeta: { service: 'user-service' },  // Metadatos por defecto en cada log.
//   transports: [
//     new winston.transports.File({ filename: 'error.log', level: 'error' }),  // Logs de error en `error.log`.
//     new winston.transports.File({ filename: 'combined.log' })  // Todos los logs en `combined.log`.
//   ],
// });

// // Si no es producción, añade la consola como transporte adicional.
// if (process.env.NODE_ENV !== 'production') {
//   logger.add(new winston.transports.Console({
//     format: winston.format.simple(),  // Formato simple para la consola.
//   }));
// }

// module.exports = logger;



//THIS IS SUPPOSE TO BE IN THE APP.JS

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


