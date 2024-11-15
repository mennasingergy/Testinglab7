// serve.test.js
const request = require('supertest');
const app = require('./server');
const getUsers = require('./getUsers');


// Mock the getUsers module
jest.mock('./getUsers');

let server;

beforeAll(async () => {
    server = app.listen(3000);
});

afterAll((done) => {
    server.close(done);
});

describe('API Tests on Local Port', () => {
    it('GET /users should return a list of users with the required properties', async () => {
        // Mock the implementation of getUsers to return dummy data
        getUsers.mockResolvedValue([
            { id: 1, name: 'Menna Singergy' },
            { id: 2, name: 'Nadeen Serag' }
        ]);

        const response = await request(server).get('/users');

        expect(response.status).toBe(200);

        expect(response.headers['content-type']).toMatch(/json/);

        expect(Array.isArray(response.body)).toBe(true);

        if (response.body.length > 0) {
            expect(response.body[0]).toHaveProperty('id');
            expect(response.body[0]).toHaveProperty('name');
        }
    });
});
