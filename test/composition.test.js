require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Composition = require('../lib/models/Composition');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can get all compositions', async() => {
    await Composition.create({
      year: '1945',
      duration: 'c. 5:30',
      difficulty: 'IV (see Ratings for explanation)',
      publisher: 'Masters Music',
      cost: 'Score and Parts - Out of print'
    });

    return request(app)
      .get('/api/v1/compositions')
      .then(res => {
        expect(res.body[0]).toEqual({
          year: expect.any(String),
          duration: expect.any(String),
          difficulty: expect.any(String),
          publisher: expect.any(String),
          cost: expect.any(String),
          _id: expect.any(String),
          __v: 0
        });
      });
  });
});
