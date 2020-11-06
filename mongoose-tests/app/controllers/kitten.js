module.exports.kittenForm = (req, res) => {
  res.render('kitten-form.ejs')
}

module.exports.new = (req, res) => {
    
  const db = require('../../connect')
  const Kitten = require('../models/Kitten')

  db.on('error', () => {
    res.render('error.ejs', {
      message: 'Cannot connect. Please, message the programmer!'
    })
  })

  db.once('open', () => {
    console.log('connected!')
  })

  var fluffy = new Kitten({ name: req.body.name })

  fluffy.save((err, fluffy) => {
    // db.close()
    if (err) {
      res.render('error.ejs', {
        message: 'Cannot save'
      })
    } else {
      res.render('index.ejs', {
        message: fluffy.speak()
      })
    }

  })
}

module.exports.findAll = (req, res) => {
  
  const db = require('../../connect')
  const Kitten = require('../models/Kitten')

  db.on('error', () => {
    res.render('error.ejs', {
      message: 'Cannot connect. Please, message the programmer!'
    })
  })

  db.once('open', () => {
    console.log('find all connected!')
  })

  Kitten.find((err, kittens) => {
    // db.close()
    if (err) {
      res.render('error.ejs', {
        message: 'Cannot save'
      })
    } else {
      console.log(kittens)
      res.render('show-all.ejs', {
        kittens: kittens
      })
    }
  })

}