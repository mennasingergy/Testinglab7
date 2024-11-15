
const request = require('supertest');
const app = require('./index');


let server;

beforeAll((done) => {
    server = app.listen(3000);
});

afterAll((done) => {
    server.close(done);
});

describe('API Tests on Local Port', () => {
    it('GET /users should return a list of users', async () => {
        const response = await request('http://localhost:3000').get('/users');

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBe(2);
        expect(response.body[0]).toHaveProperty('id');
        expect(response.body[0]).toHaveProperty('name');
    });
});
