const router = require('express').Router();

router.get('/categorias', (req, res) => {return res.send('Get Categorias')})

module.exports = router;