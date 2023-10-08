const Joi = require('joi')

const registerUserValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().max(100).required(),
    name: Joi.string().max(100).required()
});

const loginUserValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().max(100).required()
});

const getUserValidation = Joi.string().email().required();


module.exports = {

    registerUserValidation,
    loginUserValidation,
    getUserValidation,

}