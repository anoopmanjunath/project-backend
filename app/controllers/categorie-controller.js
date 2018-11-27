const express = require('express');       
const router = express.Router();                      
                                          
const { Category } = require('../models/category');

                                          
//localhost:3000/categories/              
//show all                                
router.get('/', (req, res) => {           
    Category.find().then((categories) => { 
        res.send(categories);              
    }).catch((err) => {                   
        res.send(err);                    
    });                                   
});                                       
                                          
                    
                                          
//To Post
router.post('/', (req, res) => {
    let body = req.body;
    let category = new Category(body);
    category.save().then((category) => {
        res.send(category );
    }).catch((err) => {
        res.send(err);
    })
})

//to Get One
router.get('/:id',(req,res)=>{
        let id = req.params.id;
        Category.findById(id).then((category)=>{
            res.send(category);
        }).catch((err)=>{
            res.send(err);
        })
    })

    
//delete url by id
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Category.findByIdAndRemove(id).then((category) => {
        if (category) {
            res.send(category);
        } else {
            res.send({
                notice: 'category not found'
            });
        }
    }).catch((err) => {
        res.send(err);
    });
});

//update
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    Category.findByIdAndUpdate({ _id:id }, { $set: body }).then((category) => {
        if (!category) {
            res.send({
                notice: 'category not found'
            })
        }
        res.send({
            category,
            notice: 'Successfully updated category'
        }).catch((err) => {
            res.send(err);
        })
    });
});




module.exports = {
    categoriesController: router
}



