const Logger = require('./logger');

const dbLogger = new Logger('DB');
dbLogger.info('This is a informational message');
const accessLogger = new Logger('ACCESS');
accessLogger.verbose('This is a verbose message');
