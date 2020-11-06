const connect = require('./config');

let stm = 'select * from category';
connect().query(stm, (err, result) => {
  if (err) {
    console.error(err.sqlMessage);
  } else {
    getProducts(result);
  }
});

function getProducts(result) {
  result.forEach(category => {
    if (category.id == 4) {
      special(category);
    }   
  });
}

function special(category) {
  getProductsOFthisCategory(category.id);
}

function getProductsOFthisCategory(categoryId) {
  let stm = `select * from product where category = ${categoryId}`;
  connect().query(stm, (err, products) => {
    if (err) {
      console.error(`OOPS! ${err.sqlMessage}`);
    } else {
      if(Object.keys(products).length > 0) {
        products.forEach(product => {
          console.log(product.name);
        });
      } else {
        console.log('You have not products of this category');
      }      
    }
  });
}
