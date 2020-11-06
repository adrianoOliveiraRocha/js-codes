module.exports.index = (req, res, application) => {
  application.app.models.Product.getAll(application, 
    (errorProduct, products) => {
      application.config.connect().end()
      if(errorProduct) {
        res.send(errorProduct.sqlMessage)
      } else {
        let page = req.query.page
        paginator = application.app.helpers.paginator(products, page);
        res.render('index.ejs', {
          'products': products,
          'paginator': paginator
        })
      }
  })
  
}