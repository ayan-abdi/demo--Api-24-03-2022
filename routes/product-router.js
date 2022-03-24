const productController = require('../contollers/product-controller');

const productRouter = require('express').Router();


productRouter.route('/')
    .get(productController.getAll)
    .post(productController.add);

productRouter.route('/:id([0-9]+)')
// On regroupe toute les methodes qu'on peut utliser pour manipuler un id du product
    .get(productController.getById)
    .put(productController.update)
    .delete(productController.delete);

productRouter.route('/name/:name')
    .get(productController.getByName);

module.exports = productRouter;