'use strict';

const server= require('../server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('My API server',()=>{
  it('Not Found Request',async ()=>{
    const response =  await request.get('/abc');
    expect(response.status).toEqual(404);
  });

  it('Internal Server Error',async()=>{
    const response = await request.post('/bad');
    expect(response.status).toEqual(500);
  });

  it('Getting data form Data', async()=>{
    const response= await request.get('/data');
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('object');
  });

  it('Working route',async()=>{
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    console.log(response.text);
    expect(response.text).toEqual('Welcome World');
  });
});
