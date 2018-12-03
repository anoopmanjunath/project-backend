const express = require('express');       
const router = express.Router();        

const { Hall } = require('../models/hall')

const { Category } = require('../models/category');

router.post('/', (req, res) => {
    let body = req.body;
    let hall = new Hall(body);
    hall.save().then((hall) => {
        res.send(hall );
    }).catch((err) => {
        res.send(err);
    })
})

router.get('/:id',(req,res)=>{
    let id = req.params.id;
    Hall.findById(id).then((hall)=>{
        res.send(hall);
    }).catch((err)=>{
        res.send(err);
    })
})

router.get('/', (req, res) => {           
    Hall.find().then((halls) => { 
        res.send(halls);              
    }).catch((err) => {                   
        res.send(err);                    
    });                                   
}); 
// router.get('/categories/:id',(req,res) =>{
//     let categories = req.params.id;
//     Category.find({ category : categories })
//         .then((category) => {
//             res.send(category);
//         }).catch((err) => {
//             res.send(err);
//         });
// })


router.get('/:id',(req,res)=>{
    let id=req.params.id;
    Category.findById(id).populate('halls').then((category)=>{
        console.log(category);
        res.send(category);
    })
})

module.exports = {
    hallController: router
}
