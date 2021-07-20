const express = require('express'); 
const envelopeRouter = express.Router();
const totalBudget = 50500;
const envelopes = [
    {
    "id": 1,
    "name": "grocery",
    "amount": 10323
    },
    {
    "id": 2,
    "name": "rent",
    "amount": 9987
    }
    ]
    //GET
    envelopeRouter.get('/',(req,res)=>{
        res.json(envelopes);
    });
    //GET ID
    envelopeRouter.get('/:id',(req,res)=>{
        const envNum = req.params.id;
        res.json(envelopes[envNum-1].name);
    });
    //POST
    envelopeRouter.post('/',(req,res)=>{
        const envelopeToPost = req.body;
        envelopes.push(envelopeToPost);
        
        res.status(201).json(`Envelope added`);
    });
    //PUT
    envelopeRouter.put('/:id',(req,res)=>{
        
    });
    
module.exports = envelopeRouter;