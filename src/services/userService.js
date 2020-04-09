const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Users = require('../models/user');

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
  } catch (error) {
    console.log(error.message);
    if (error.code && error.code === 11000) {
      res.status(400).send({
        Status: 'DUPLICATED_VALUES',
        message: error.keyValue,
      });
    }
    res.status(500).send({ Status: 'Error', message: error.message });
  }
};

const deleteUser = (req, res) => {};

const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    return users;
  } catch (error) {
    res.status(500).send({ Status: 'Error', data: error.message });
  }
  return 0;
};

const updateUser = async (req, res) => {
  try {
    const { username, email, data, userId } = req.body;
    await Users.findByIdAndUpdate(userId, {
      username,
      email,
      data,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ Status: 'Error', message: error.message });
  }
};

const login = async (req, res) => {
  let statusString;
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
        return token;
      }
      statusString = 'INVALID_PASSWORD';
    } else {
      statusString = 'USER_NOT_FOUND';
    }
    res.status(400).send({ Status: statusString, message: '' });
  } catch (error) {
    res.status(500).send({ Status: 'ERROR', message: error.message });
  }
  return 0;
};

module.exports = {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
  login,
};
