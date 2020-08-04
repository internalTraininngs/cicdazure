var app = require('../index');
const request = require('request');
const { expect } = require('chai');

describe('testing all /', () => {
  it('/ status', done => {
    request('http://localhost:3000', (err, res, body) =>{
      if (err) return console.error(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});