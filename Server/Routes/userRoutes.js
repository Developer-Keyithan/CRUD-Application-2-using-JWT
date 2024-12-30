const express = require('express');
const { register, login, getAllUsers, getUserById, updateUser, deleteUser } = require('../Controllers/userController');
const { protect } = require('../Middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;


