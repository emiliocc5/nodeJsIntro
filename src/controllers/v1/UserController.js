const bcrypt = require('bcrypt');
const Users = require('../../models/user');

const createUser = async (req, res) => {
  const { username, email, password, data } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 15);
    await Users.create({
      username,
      email,
      password: hashPassword,
      data,
    });
    res.send({ Status: 'OK', message: 'User created' });
  } catch (error) {
    if (error.code && error.code === 11000) {
      res.status(400).send({
        Status: 'Business error',
        message: error.keyValue,
      });
      return;
    }
    res.status(500).send({ Status: 'Error', message: error.message });
  }
};

const deleteUser = (req, res) => {};

const getUsers = (req, res) => {};

const updateUser = (req, res) => {};

module.exports = {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
};
