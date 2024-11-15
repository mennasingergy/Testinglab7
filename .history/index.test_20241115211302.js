const request = require('supertest');
const app = require('./index'); // Import the app directly

// No need for creating server manually, use the app instance directly
describe('API Tests on Local Port', () => {
    it('GET /users should return a list of users', async () => {
        const response = await request(app).get('/users');

        // Test for successful status code
        expect(response.status).toBe(200);

        // Ensure response is an array
        expect(response.body).toBeInstanceOf(Array);

        // Test if Content-Type is JSON
        expect(response.headers['content-type']).toMatch(/json/);

        // Validate the length and properties of the response
        expect(response.body.length).toBe(2);
        expect(response.body[0]).toHaveProperty('id');
        expect(response.body[0]).toHaveProperty('name');
    });
});
