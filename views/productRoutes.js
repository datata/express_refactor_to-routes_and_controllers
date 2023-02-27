const productController = require('../controllers/productController');

const router = require('express').Router();

router.get('/', productController.getProducts)
router.post('/', productController.createProducts)

module.exports = router;