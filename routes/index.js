const productRouter = require('./product-router');

const router = require('express').Router();

router.use('/product', productRouter);
// le /product c est  pour specifier que dans tte les routes ca cmmencera par /product
module.exports = router; 