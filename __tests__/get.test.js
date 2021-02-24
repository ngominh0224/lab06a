const { app } = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

it('gets the test endpoint', async (done) => {
  const myData = [
    {
      id: 2,
      name: 'spot',
    },
    {
      id: 3,
      name: 'jeep',
    },
  ];
  const response = await request.get('/test');

  expect(response.status).toBe(200);
  expect(response.body.message).toEqual(myData);
  done();
});
