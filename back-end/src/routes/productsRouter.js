const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productsController');

router.get('/', productControllers.listProduct);

module.exports = router;