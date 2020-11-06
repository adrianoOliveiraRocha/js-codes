// This module modify the module logger
require('./logger').customMessage = () => {
  console.log('This is a new functionality');
};