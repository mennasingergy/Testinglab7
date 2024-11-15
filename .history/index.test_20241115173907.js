const request = require('supertest'); // Import Supertest
const app = require('./index'); // Import the Express app

describe('API Tests for /users endpoint', () => {
  it('GET /users should return a list of users', async () => {
    // Make a GET request to the /users endpoint
    const response = await request(app).get('/users');

    // Assertions
    expect(response.status).toBe(200); // Verify the status code is 200
    expect(response.body).toBeInstanceOf(Array); // Verify the response body is an array
    expect(response.body.length).toBe(2); // Verify there are 2 users in the response
    expect(response.body[0]).toHaveProperty('id', 1); // Verify the first user has an id of 1
    expect(response.body[0]).toHaveProperty('name', 'Menna Singergy'); // Verify the first user's name
    expect(response.body[1]).toHaveProperty('id', 2); // Verify the second user has an id of 2
    expect(response.body[1]).toHaveProperty('name', 'Nadeen Serag'); // Verify the second user's name
  });
});

// app.test.js
const request = require('supertest');
const app = require('./index'); // Import the app without starting the server
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
    const response = await request('http://localhost:3000').get('/users');

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBe(2);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('name');
  });
});
