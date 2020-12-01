module.exports.home = (req, res) => {
  res.render('home.ejs');
}

module.exports.getJsonResponse = (req, res) => {
  res.json({"message": "My response"});
}

module.exports.receiveValues = (req, res) => {
  const data = req.body;
  res.json({"data": data});
}

module.exports.register = (req, res) => {
  const data = req.body;
  res.json({
    name: data.name,
    age: data.age
  });
}