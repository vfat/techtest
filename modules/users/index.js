const express = require('express');
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');
const { dbpool } = require('../../application/db.js')

const {validate}  = require("../../validation/validation.js")
const {getUserValidation, loginUserValidation, registerUserValidation}  = require("../../validation/userValidation.js")
const { JWTKEY } = require('../../application/config.js')
const { authMiddleware } = require('../../middleware/authMiddleware.js')

const router = express.Router();

router.post('/register', async(req,res)=>{
    try {
        const user = validate(registerUserValidation, req.body);

        var password = await bcrypt.hash(user.password, 10);

        dbpool.query('INSERT INTO "user" ("name", "email", "password") VALUES ($1, $2, $3) RETURNING id,name,email', [user.name, user.email, password], (error, results) => {
            if (error) {
                // throw error
                return res.status(500).json({info:"error", keterangan:error.message})
            }
            res.status(200).json({ message: "berhasil", success: true, data:results.rows[0] })
        })



    } catch (error) {
        res.status(500).json({info:"error", keterangan:error.message})
    }    
})


router.post('/login', async(req,res)=>{
    try {
        const user = validate(loginUserValidation, req.body);

        var getData = await dbpool.query('SELECT * FROM "user" WHERE "email"=$1',[user.email])

        if(getData){
            let hasil = await bcrypt.compare(user.password, getData.rows[0].password)

            if(hasil){
                let token = jwt.sign({ email: user.email }, JWTKEY)
                return res.status(200).json({ message: "Authentikasi berhasil", success: true, data:{token:token} })
            }
            else{
                return res.status(400).json({ message: "Password Salah", success: false })
            }
        }
        else{
            return res.status(400).json({ message: "Email Tidak ditemukan", success: false })
        }




    } catch (error) {
        res.status(500).json({info:"error", keterangan:error.message})
    }    
})

router.get('/me',authMiddleware, async(req,res)=>{
    try {
        const token = req.get('Authorization');
        const decoded = jwt.verify(token, JWTKEY);
        const email = validate(getUserValidation, decoded.email);

        var getData = await dbpool.query('SELECT * FROM "user" WHERE "email"=$1',[email])

        if(getData){
            return res.status(200).json({ message: "berhasil", success: true, data:getData.rows })
        }
        else{
            return res.status(400).json({ message: "Email Tidak ditemukan", success: false })
        }




    } catch (error) {
        res.status(500).json({info:"error", keterangan:error.message})
    }    
})

module.exports =router