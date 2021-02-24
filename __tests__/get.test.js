const { app } = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);
const { chocolates } = require('../data.js');

it('should return the data', async (done) => {
  const expectation = {
    results: chocolates,
  };

  const response = await request.get('/data');

  expect(response.status).toBe(200);
  expect(response.body).toEqual(expectation);
  done();
});

it('should return a single data item', async (done) => {
  const expectation = {
    results: {
      id: 1,
      name: 'Kit-Kat',
      description: 'Milk Chocolate Wafers',
      category: 'candy',
      size: 'Regular',
      price: 1.79,
    },
  };

  const response = await request.get('/data/1');

  expect(response.status).toBe(200);
  expect(response.body).toEqual(expectation);
  done();
});
