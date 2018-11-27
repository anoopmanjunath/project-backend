const express = require('express');       
const router = express.Router();        

const { Hall } = require('../models/hall')



router.post('/', (req, res) => {
    let body = req.body;
    let hall = new Hall(body);
    hall.save().then((hall) => {
        res.send(hall );
    }).catch((err) => {
        res.send(err);
    })
})


// router.get('/categories/:id',(req,res) =>{
//     let categories = req.params.id;
//     Category.find({ category : categories })
//         .then((category) => {
//             res.send(category);
//         }).catch((err) => {
//             res.send(err);
//         });
// })


// router.get('/hall/:id',(req,res) =>  {
//  let categories = req.params.id;
//  Category.find({ category :  }).then((category) => {
//      res.send(category);
//  }).catch((err) =>{
//     res.send(err);
//  })
// })



module.exports = {
    hallController: router
}
