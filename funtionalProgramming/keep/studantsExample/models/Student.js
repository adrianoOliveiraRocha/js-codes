const db = require('../db/db');
const Student = {
  showStudant(ssn) {
    return db.get(ssn);
  }
}

module.exports = Student;