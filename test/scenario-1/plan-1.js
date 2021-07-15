const request = require('supertest');
const assert = require('assert')
require('dotenv').config()

describe('GET /users', function() {
    it('responds with json', function(done) {
        request(process.env.API_HOST)
            .get('/get')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                // assert(response.body.adf, 'foo@bar.com')
                seq1 = response.body.url;
                throw new Error("error broh")
                done();
            })
            .catch(err => done(err));
    })

    // setInterval(()=>{
    //     console.log("seq1 ", seq1);
    // },3000)
    it('responds with json', function(done) {
        console.log("Seq 1 ", seq1)
        request(_mainDomain)
            .get('/get')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                // assert(response.body.adf, 'foo@bar.com')
                throw new Error("error broh")
                done();
            })
            .catch(err => done(err));
    })
})
