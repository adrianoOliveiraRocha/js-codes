module.exports.home = (req, res) => {
  let categoryId = null, pageNumber = 1;
  if(req.query.categoryId) categoryId = req.query.categoryId;
  if(req.query.page) pageNumber  = req.query.page; 

  const Pagination = require('./../../utils/Pagination');
  const pagination = new Pagination();
  
  const fs = require('fs')
  var config = fs.readFileSync('app/public/json/config.json')
  let logoName = JSON.parse(config).logoName
  let companyPhone = JSON.parse(config).companyPhone

  const Category = require('./../models/Category');
  const Product = require('./../models/Product');

  async function getTotalOfProducts() {
    return new Promise((resolve, reject) => {
      Product.getTotalOfProducts(categoryId, (error, result) => {
        error ? reject('error in getTotalOfProducts') : resolve(result[0].totalOfProducts);
      })
    })
  }

  async function getCurrentCategory() {
    return new Promise((resolve, reject) => {
      if(!categoryId) {
        resolve({name: "Todas as Categorias"});
      } else {
        Category.getById(categoryId, (error, result) => {
          error ? reject('error in getNameById') : resolve(result[0]);
        })
      }
    })
  }

  async function getCategpries() {
    return new Promise((resolve, reject) => {
      const Category = require('./../models/Category')
      Category.getAll((error, categories) => {
        error ? reject('error in getAll') : resolve(categories)
      })
    })
  }

  async function getPage() { //page
    return new Promise((resolve, reject) => {
      Product.getPage(pageNumber, pagination, categoryId, (error, page) => {
        error ? reject('error in getPage') : resolve(page)
      })
    })
  }

  Promise.all([getCurrentCategory(), getCategpries(), getPage(), 
    getTotalOfProducts()])
    .then(([currentCategory, categories, page, totalOfProducts]) => {
      res.render('core/index.ejs', { 
        logoName, companyPhone, categories, page, currentCategory, categoryId,
         pagination, page, totalOfProducts, pageNumber
       })
    })
    .catch((error) => {
      res.render('core/error.ejs', {
        errorMessage: error
      })
    })
    
}

module.exports.contact = function(req, res) {
  if(req.method == 'GET') {
    const fs = require('fs')
    var config = fs.readFileSync('app/public/json/config.json')
    let companyPhone = JSON.parse(config).companyPhone
    res.render('core/contact.ejs', { companyPhone })
  }
}

module.exports.register = (req, res) => {
  const connect = require('./../../config/connect')
  res.send('test')
}

module.exports.userVerify = (req, res) => {
  let data = req.body
  const UserFactory = require('./../models/UserFactory')
  const factory = new UserFactory()
  const admin = factory.createUser(1)

  admin.verify(data, ((err, result) => {
    if (err) {
      res.render('core/error.ejs', {
        errorMessage: "Tivemos um problema. Por favor, "
        +"contate o desenvolvedor via Whatsapp em (85)9-99473839. Agradecemos sua compreensão"
      })
    } else {

      try {
        if(result[0].admin == 1) {
          req.session.user = result[0]
          res.redirect('/admin')
        } else {
          res.send("omg")
        }
      } catch (error) { // user not found
        console.error(error)
        res.render('core/error.ejs', {
          errorMessage: "Usuário não encontrado"
        })
      }
    }

  }))

}

module.exports.productDetail = function(req, res) {
  let id = req.query.id
  const fs = require('fs')
  var config = fs.readFileSync('app/public/json/config.json')
  let companyPhone = JSON.parse(config).companyPhone
  const Product = require('./../models/Product')

  Product.getById(id, (error, result) => {
    if(error) {
      res.render('core/error.ejs', {
        errorMessage: "Não foi possível recuperar o produto"
      })
    } else {
      res.render('core/product.ejs', {
        product: result[0], 
        companyPhone
      })
    }
  })
}


