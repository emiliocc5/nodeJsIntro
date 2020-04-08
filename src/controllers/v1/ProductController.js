const Products = require('../../models/product');

const createProduct = async (req, res) => {
  const { title, description, price, images, userId } = req.body;
  try {
    const product = await Products.create({
      title,
      description,
      price,
      images,
      user: userId,
    });
    res.send({
      Status: 'OK',
      message: 'Product created succesfuly',
      data: product,
    });
  } catch (error) {
    res.status(500).send({ Status: 'Error', data: error.message });
  }
};

const deleteProduct = (req, res) => {};


const getProducts = async (req, res) => {
  try {
    const products = await Products.find({
      price: { $gt: 35800 }, // upper filter
    });
    res.send({ Status: 'OK', data: products });
  } catch (error) {
    res.status(500).send({ Status: 'Error', data: error.message });
  }
};

const getProductsByUser = async (req, res) => {
  try {
    const products = await Products.find({
      user: req.params.userId,
    }).select('title desc price');
    res.send({ Status: 'OK', data: products });
  } catch (error) {
    res.status(500).send({ Status: 'Error', data: error.message });
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  getProducts,
  getProductsByUser,
};
