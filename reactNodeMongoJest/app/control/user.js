module.exports.resgister = (req, res) => {
  const data = req.body;
  const User = require('./../models/User');
  res.json({user: User.verify(data)});
}