function myLog(severity) {
  return function(logText) {
    return `${severity}: ${logText}`;
  }
}

module.exports = myLog