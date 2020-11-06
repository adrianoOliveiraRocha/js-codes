//instance 0
const logger = require('./logger');
logger.log('This is an informational message. ');
logger.setState(true); // The instance 0 changed the state. It going to be shared with others instances
// instance 1
const logger1 = require('./logger');
logger1.log('Now, I create a new instance but the state is shared. ');
