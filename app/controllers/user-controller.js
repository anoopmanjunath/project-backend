const express = require('express');       
const router = express.Router();                      
                                          
const { User } = require('../models/user');

                                          
//localhost:3000/users/              
//show all                                
router.get('/', (req, res) => {           
    User.find().then((users) => { 
        res.send(users);              
    }).catch((err) => {                   
        res.send(err);                    
    });                                   
});                                       
                                          
                    
                                          
//To Post
router.post('/', (req, res) => {
    let body = req.body;
    let user = new User(body);
    user.save().then((user) => {
        res.send(user );
    }).catch((err) => {
        res.send(err);
    })
})

//to Get One
router.get('/:id',(req,res)=>{
        let id = req.params.id;
        User.findById(id).then((user)=>{
            res.send(user);
        }).catch((err)=>{
            res.send(err);
        })
    })

    
//delete url by id
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    User.findByIdAndRemove(id).then((user) => {
        if (user) {
            res.send(user);
        } else {
            res.send({
                notice: 'user not found'
            });
        }
    }).catch((err) => {
        res.send(err);
    });
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    User.findByIdAndUpdate({ _id:id }, { $set: body }).then((user) => {
        if (!user) {
            res.send({
                notice: 'user not found'
            })
        }
        res.send({
            user,
            notice: 'Successfully updated user'
        }).catch((err) => {
            res.send(err);
        })
    });
});
module.exports = {
    usersController: router
}



