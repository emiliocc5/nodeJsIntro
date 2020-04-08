const Products = require('../../models/product')

const createProduct = async (req, res) => {
  const { title, description, price, images, userId } = req.body;
  try {
    const product = await Products.create({ title, description, price, images, user: userId });
    res.send({ Status: 'OK', message: 'Product created succesfuly', data: product });
  } catch (error) {
    res.status(500).send({ Status: 'Error', data: error.message });
  }
};

const deleteProduct = (req, res) => {};

const getProducts = (req, res) => {};

module.exports = {
  createProduct,
  deleteProduct,
  getProducts,
};
