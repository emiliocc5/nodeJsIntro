const express = require('express');

const userController = require('../../controllers/v1/UserController');

const router = express.Router();

router.post('/create', userController.createUser);
router.put('/update', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);
router.get('/get-all', userController.getUsers);

module.exports = router;
