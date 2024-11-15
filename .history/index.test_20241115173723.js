// index.test.js
const request = require('supertest');

const http = require('http');

let server;

beforeAll((done) => {
  // Start the server on a specific port
  server = http.createServer(app).listen(3000, done);
});

afterAll((done) => {
  // Close the server after tests
  server.close(done);
});

describe('API Tests on Local Port', () => {
  it('GET /users should return a list of users', async () => {
    const response = await request('http://localhost:5001').get('/users');

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBe(2);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('name');
  });
});
