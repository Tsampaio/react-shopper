const express = require("express");
const products = require('./products.json');


module.exports = function getRoutes() {
  const router = express.Router();

  router.get('/products', getProducts);
  router.get('/products/:productId', getProduct);

  return router;
};

function getProducts(req, res) {
  res.status(200).json({ products })
}

function getProduct(req, res) {
  const { productId } = req.params;
  const product = products.find(product => product.id === productId);
  res.status(200).json({product});
}
