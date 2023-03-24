const express = require("express");
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get('/',(req, res, next)=>{
  return res.status(200).json({
    statusCode: 200,
    message:"api test Technique Agence la fusée http://localhost:3005/"
  })
})



module.exports = app;