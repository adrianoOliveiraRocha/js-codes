module.exports.index = (req, res, application) => {
  const Person = application.app.models.Person;
  Person.getAllPersons(application, (err, result) => {
    if (err) {
      res.send(err.sqlMessage);
    } else {
      console.log(result);
      
      res.render('./core/index.ejs', {
        'allPersons': result
      });
    }
  });
  
}