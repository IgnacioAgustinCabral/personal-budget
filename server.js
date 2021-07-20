const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express(); 
const apiRouter = require('./api.js');

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use('/api',apiRouter)
const PORT = process.env.PORT || 3000; 


app.listen(PORT,()=>{ console.log(`Listening on port:${PORT}`); })