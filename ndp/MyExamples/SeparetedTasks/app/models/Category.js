class Category {

  constructor(name=null) {
    this._name = name;
  }

  static getAll(application, callback) {
    const stm = 'select * from category';
    application.config.connect().query(stm, callback);
  }

}

module.exports = () => {
  return Category;
}