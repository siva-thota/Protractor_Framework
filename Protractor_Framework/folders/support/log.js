var winston = require('winston');

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
    colorize: true,
    prettyPrint: true,
    timestamp: true});
winston.add(winston.transports.File, {filename: 'winston.log', json:false});
module.exports = winston;