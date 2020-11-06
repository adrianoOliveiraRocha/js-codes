class Product {
  static getConnection(name=null, category=null) {
    this._name = name;
    this._category = category;
  }

  static getProductsOfThisCategory(application, CategoryId, callback) {
    const stm = `select * from product where category = ${CategoryId}`;
    application.config.connect().query(stm, callback);
  }
}

module.exports = () => {
  return Product;
}