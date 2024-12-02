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

