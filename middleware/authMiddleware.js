var jwt = require('jsonwebtoken')
const { JWTKEY } = require('../application/config.js')


const authMiddleware = async (req, res, next) => {
    const token = req.get('Authorization');
    if (!token) {
        res.status(401).json({
            errors: "Unauthorized"
        }).end();
    } else {
        try {
            const decoded = jwt.verify(token, JWTKEY);
            next();
        } catch (error) {
            return res.status(401).json({
                errors: error.message
            }).end();            
        }
        


    }
}

module.exports = {

    authMiddleware

}