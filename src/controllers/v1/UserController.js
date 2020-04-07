const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 15);
    // Save hash to bd
    console.log('Password: ', hash);
    res.send({ Status: 'OK', message: 'User created' });
  } catch (error) {
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
