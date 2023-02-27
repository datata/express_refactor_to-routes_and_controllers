const router = require('express').Router();
const productRoutes = require('./views/productRoutes')
const categoriasRoutes =  require('./views/categoriasRoutes')

router.use('/products', productRoutes);
router.use('/categorias', categoriasRoutes);

module.exports = router;