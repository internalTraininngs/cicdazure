const request = require("request");
const { response } = require("../../src/node_ci_cd_server");
const { expect } = require("chai");

it('testing / status', done => {
  request('http://localhost:3000', (err, res, body) =>{
    expect(res.statusCode).to.equal(200);
    done();
  });
});
it('testing / body', done => {
  request('http://localhost:3000', (err, res, body) =>{
    expect(body).to.equal("hey there i m running....<br> yaay!!!");
    done();
  });
});