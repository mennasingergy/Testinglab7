// index.test.js
const request = require('supertest');
const app = require('./index');
const getUsers = require('./getUsers'); // Import the function we are going to mock

jest.mock('./getUsers');  // Mock the getUsers module

let server;

beforeAll(async () => {
    server = app.listen(3001);
});

afterAll((done) => {
    server.close(done);
});

describe('API Tests on Local Port', () => {
    it('GET /users should return a list of users with the required properties', async () => {
        // Mock the implementation of getUsers to return dummy data
        getUsers.mockResolvedValue([
            { id: 1, name: 'Menna Singergy' },
            { id: 2, name: 'Bob' }
        ]);

        const response = await request(server).get('/users');

        // Check for a successful status code
        expect(response.status).toBe(200);

        // Check the response Content-Type
        expect(response.headers['content-type']).toMatch(/json/);

        // Ensure the response is an array of objects
        expect(Array.isArray(response.body)).toBe(true);

        // Validate that each user in the array has the expected properties
        if (response.body.length > 0) {
            expect(response.body[0]).toHaveProperty('id');
            expect(response.body[0]).toHaveProperty('name');
        }
    });
});
