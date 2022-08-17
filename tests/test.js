const supertest = require('supertest');
const app = require('../src/app.js');

test('getCountries', done => {
    supertest(app)
        .get("/countries")
        .expect(200)
        .end((err, res) => {
            // we will deal with the response here
            if (err) {
                return done(err);
            } else {
                expect(res.statusCode).toBe(200)
                done();
            }
        });
});