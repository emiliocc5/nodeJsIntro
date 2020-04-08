const express = require('express');

const productsController = require('../../controllers/v1/ProductController');

const router = express.Router();

router.post('/create', productsController.createProduct);
router.delete('/delete/:id', productsController.deleteProduct);
router.get('/get-all', productsController.getProducts);

module.exports = router;
