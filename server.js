const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express(); 

const PORT = process.env.PORT || 3000; 

app.get('/',(req,res)=>{ 
    res.send('OOF'); });


app.listen(PORT,()=>{ console.log(`Listening on port:${PORT}`); })