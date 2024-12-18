const express = require('express');
const { register, login, getAllUsers, getUserById, updateUser, deleteUser } = require('../Controllers/userController');
const { protect } = require('../Middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', protect, getAllUsers);
router.get('/:id', protect, getUserById);
router.put('/:id', protect, updateUser);
router.delete('/:id', protect, deleteUser);

module.exports = router;


