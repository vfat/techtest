const dotenv = require('dotenv')
const Joi = require('joi')

dotenv.config()

const envVarsSchema = Joi.object().keys({
  PORT: Joi.number().required(),
  DBPORT: Joi.required(),
  DBHOST: Joi.required(),
  DBNAME: Joi.required(),
  DBUSER: Joi.required(),
  DBPASSWORD: Joi.required(),
  JWTKEY: Joi.required(),
}).unknown()

const { value, error } = envVarsSchema.validate(process.env)

if (error) throw new Error(`File konfigurasi env error: ${error.message}`)

const { PORT, DBPORT, DBHOST, DBNAME, DBUSER, DBPASSWORD, JWTKEY } = value

module.exports = {

    PORT, 
    DBPORT, 
    DBHOST, 
    DBNAME, 
    DBUSER, 
    DBPASSWORD, 
    JWTKEY

}