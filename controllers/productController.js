const productController = {}

productController.getProducts = (req, res) => { return res.send('Get Products')}

productController.createProducts = (req, res) => { return res.send('Create Products')}

module.exports = productController;