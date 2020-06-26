const mongoose = require('mongoose');
// require bcrypt
const bcrypt = require('bcrypt');
// require @hapi/joi
const Joi = require('@hapi/joi');

// Create Schema
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // admin                root
    // normal               user
    role: {
        type: String,
        required: true
    },
    // 0 run
    // 1 stop
    state: {
        type: Number,
        default: 0
    }
})

// Create  UserModel
const User = mongoose.model('User', UserSchema);

// Verify the uesr
function validateUser(user){
    // Define the validate rules
    const schema = Joi.object({
        username: Joi.string().alphanum().min(2).max(12).required().error(new Error('Username does not meet verification rules')),
        email: Joi.string().email().required().error(new Error('Email does not meet verification rules')),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{2,12}$')).required().error(new Error('Password does not meet verification rules')),
        role: Joi.string().valid('normal', 'admin').required().error(new Error('Role does not meet verification rules')),
        state: Joi.number().valid(0, 1).required().error(new Error('Email does not meet verification rules'))
    })

    // validation the rules
    const { error, value } = schema.validate(user);

    return {error, value};
}

// Create user
async function createUser(user) {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(user.password, salt);

    const newUser = await User.create({
        username: user.username,
        password: pass,
        email: user.email,
        role: user.role,
        state: user.state
    });
    return newUser;
}

module.exports = {
    User,
    createUser,
    validateUser
}