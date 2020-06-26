// const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');

// const saltRounds = 10;
// bcrypt.genSalt(saltRounds, function(err, salt){
//     bcrypt.hash('123456', salt, function(err, hash){
//         if(err){
//             console.log(err.message)
//         }else{
//             console.log(hash);
//         }
//     })
// })

const schema = Joi.object({
    username: Joi.string().alphanum().min(2).max(20).required().error(new Error('username does not meet verification rules')),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{2,20}$')).required(),
    email: Joi.string().email({minDomainSegments: 2, tlds: {allow : ['com', 'net']}})
})

// const schema = Joi.object({
//     a : Joi.string()
// })

// const {error, value} = schema.validate({a : 'a string'});

const {error, value} = schema.validate({
    
    password: '123456',
   
})

console.log('error: ', error, 'value: ', value);
