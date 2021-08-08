'use strict';
const express = require('express');
const app =  express();

const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');

function start(port){
  app.listen(port,()=>console.log(`Running on port ${port}`));
}

app.get ('/',(req,res)=>{
  res.send('Welcome World');
});

app.post('/bad',(req,res)=>{
  let num = 12;
  num.forEach(element => console.log(element));
  res.send('this is a bad route');
});

app.get('/data',(req,res)=>{
  res.json({
    id:1,
    name:'test student',
    email:'test@test.com',
  });
});

app.use('*',notFoundHandler);
app.use(errorHandler);

module.exports={
  app:app,
  start:start,
};