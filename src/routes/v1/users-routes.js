
const express = require('express');

const userController = require('../../controllers/v1/users-controller');

const router = express.Router();

router.post('/create', userController.createUser);
router.post('/update', userController.updateUser);
router.post('/delete', userController.deleteUser);
router.get('/get-all', userController.getUsers);

module.exports = router;
