module.exports.show = (req, res, application) => {

	const Category = application.app.models.Category;
	const Product = application.app.models.Product;

	Category.getAll(application, (err, response) => {
		if(err) {
			res.send(err.sqlMessage);
		} else {
			getProducts(response);
		}
	});

	function getProducts(categories) {

		const categoriesAndProducts = {};
		var count = 0;
		for (const category of categories) {
			Product.getProductsOfThisCategory(application, category.id, (err, response) => {
				if(err) {
					console.log(`Oops! I have a error: ${err.sqlMessage}`);
				} else {
					categoriesAndProducts[category.id] = response;
					if(count == (Object.keys(categories).length - 1)) {
						showData(categoriesAndProducts);	
					}
					count ++;				
				}
			});			
		}
		
	}	

	function showData(data) {
		res.render('index.ejs', {
			data: data 
		});
	}
	
}