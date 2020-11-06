module.exports.index = function(req, res, application) {
  res.render('index.ejs')
}

module.exports.testAjax = function(req, res) {
  var d1 = new Date().getSeconds()
  var d2 = d1 * 2
  res.render('test_ajax.ejs', {
    'd1': d1,
    'd2': d2
  })
}