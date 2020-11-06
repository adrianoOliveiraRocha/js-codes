var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongooseTest', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }  
)
var db = mongoose.connection
module.exports = db