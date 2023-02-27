const router = require('express').Router();

router.get('/', (req, res) => { return res.send('Get Products')})
router.post('/', (req, res) => { return res.send('Create Products')})

module.exports = router;