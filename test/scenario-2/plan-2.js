const request = require('supertest');

var assert = require('assert')
const _mainDomain = "https://httpbin.org"

describe('GET /users', function() {
    it('responds with json', function(done) {
        request(_mainDomain)
            .get('/get')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                // assert(response.body.adf, 'foo@bar.com')
                if(typeof response.body.adf == "number")
                    throw new Error("error broh")
                done();
            })
            .catch(err => done(err));
    })  
})

