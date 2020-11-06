class Person {

  static getAllPersons(application, callback) {
    var stm = "select * from person";
    application.config.connect().query(stm, callback);
  }

}

module.exports = () => {
  return Person;
}