const Joi = require('joi')
const validate = require('./validate')
const registerSchema = Joi.object({
    userName: Joi.string().trim().required(),
    password: Joi.string().trim().required().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
    userEmail: Joi.string().email({tlds:false}),
    confirmPassword: Joi.string().valid(Joi.ref('password')).trim()
    .required().strip()
});

exports.validateRegister = validate(registerSchema)


const loginSchema = Joi.object ({
    userName: Joi.string().required(),
    password: Joi.string().required(),
})

exports.validateLogin = validate(loginSchema)