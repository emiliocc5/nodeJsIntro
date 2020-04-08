const bcrypt = require('bcrypt');
const Users = require('../../models/user');
const jwt = require('jsonwebtoken');

const expiresIn = 60 * 5;

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

const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.send({ Status: 'OK', data: users });
  } catch (error) {
    res.status(500).send({ Status: 'Error', data: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { username, email, data, userId } = req.body;
    await Users.findByIdAndUpdate(userId, {
      username,
      email,
      data,
    });
    res.send({ Status: 'OK', message: 'User updated' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ Status: 'Error', message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (user) {
      const isOk = await bcrypt.compare(password, user.password);
      if (isOk) {
        const token = jwt.sign(
          { userId: user._id, permission: user.role },
          process.env.JWT_SECRET,
          { expiresIn },
        );
        res.send({ Status: 'OK', data: { token } });
      } else {
        res.status(400).send({ Status: 'INVALID_PASSWORD', message: '' });
      }
    } else {
      res.status(400).send({ Status: 'USER NOT FOUND', message: '' });
    }
  } catch (error) {
    res.status(500).send({ Status: 'ERROR', message: error.message });
  }
};

module.exports = {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
  login,
};
