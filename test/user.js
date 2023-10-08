const supertest =  require('supertest');
const { PORT } = require('../application/config.js');
const request = supertest('localhost:'+PORT+'/');
const { expect } = require('chai');

const name = "Tes User "+Math.floor(Math.random()*999);
const email = "email"+Math.floor(Math.random()*999)+"@email.com";
const password = "password"+Math.floor(Math.random()*999);

describe('user', () => {
    var token = "";

    it('POST API Registrasi user:', () => {
        const data = {
            "name": name,
            "email": email,
            "password": password
        };
        return request
            .post('api/register')
            .send(data)
            .then((res) => {
                expect(200);
            });

    });

    it('POST API Login user', () => {
        const data = {
            "email": email,
            "password": password
        };
        return request
            .post('api/login')
            .send(data)
            .then((res) => {
                token= res.body.data.token
                expect(res.body.data.token).to.not.be.empty;
                expect(200);
            });

    });    

    it('GET data user:   ', () => {
        return request.get('api/me').set('Authorization', token).then((res) => {
            expect(res.body.data).to.not.be.empty;
            expect(200);
        });

    }); 



});