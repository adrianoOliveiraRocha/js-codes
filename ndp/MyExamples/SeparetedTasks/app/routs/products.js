module.exports = (application) => {
	application.get('/', (req, res) => {
		application.app.control.product.show(req, res, application);
	});
}