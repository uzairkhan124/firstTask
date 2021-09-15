const express = require('express');
const app = express();
const fs = require('fs');
app.use("", (req,res)=>{
   const fileContent = fs.readFileSync('./index.html');
   res.end(fileContent);
})


console.log("server is running");
module.exports = app ;