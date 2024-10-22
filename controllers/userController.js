const bcrypt = require('bcryptjs');

const User = require(`./../models/userModel`);

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find()

        res.status(200).json({
            data: users,
        });
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
}

exports.signUp = async (req, res, next) => {
    const { name, email, password } = req.body;

    let user;
    try {
        user = await User.findOne({ email });
    } catch (err) {
        return console.log(err.message);
    }

    if (user) {
        return res.status(400).json({
            msg: 'The User Already exists'
        })
    }

    const hashPassword = await bcrypt.hash(password, 8);
    const newUser = await User.create({
        name, 
        email, 
        password: hashPassword
    });

    res.status(201).json({user: newUser});
}

exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    let user;
    try {
        user = await User.findOne({email});
    } catch (err) {
        return console.log(err.message);
    }

    if (!user) {
        return res.status(404).json({msg: 'You have no email address! please Sign up'});
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(404).json({msg: 'Incorrect password'})
    }

    res.status(200).json({msg: 'Login successful'})
}
