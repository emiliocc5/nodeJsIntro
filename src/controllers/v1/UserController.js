const userService = require('../../services/userService');

const createUser = async (req, res) => {
  await userService.createUser(req, res);
  res.send({ Status: 'OK', message: 'User created' });
};

const deleteUser = (req, res) => {
  userService.deleteUser(req, res);
};

const getUsers = async (req, res) => {
  const users = await userService.getUsers(req, res);
  res.send({ Status: 'OK', data: users });
};

const updateUser = async (req, res) => {
  await userService.updateUser(req, res);
  res.send({ Status: 'OK', message: 'User updated' });
};

const login = async (req, res) => {
  const token = await userService.login(req, res);
  res.send({ Status: 'LOGIN_SUCCESFULL', data: token });
};

module.exports = {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
  login,
};
