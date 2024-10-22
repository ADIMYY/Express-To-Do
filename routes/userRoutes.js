const express = require('express');

const {
    getAllUsers,
    signUp,
    loginUser,
} = require(`./../controllers/userController`);

const router = express.Router();


router.get('/', getAllUsers);
router.post('/signup', signUp);
router.post('/login', loginUser);

module.exports = router;
