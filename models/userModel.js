const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'user name required'],
        },
        email: {
            type: String,
            required: [true, 'user email required'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'user password required'],
            minlength: 8,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);
