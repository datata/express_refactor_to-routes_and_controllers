const router = require('express').Router();

router.get('/products', (req, res) => { return res.send('Get Users')})

module.exports = router;