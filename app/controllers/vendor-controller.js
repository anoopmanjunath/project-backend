const express = require('express');       
const router = express.Router();                      
                                          
const { Vendor } = require('../models/vendor');

                                          
//localhost:3000/vendor/              
//show all                                
router.get('/', (req, res) => {           
    Vendor.find().then((vendors) => { 
        res.send(vendors);              
    }).catch((err) => {                   
        res.send(err);                    
    });                                   
});                                       
                                          
                    
                                          
//To Post
router.post('/', (req, res) => {
    let body = req.body;
    let vendor = new Vendor(body);
    vendor.save().then((vendor) => {
        res.send(vendor );
    }).catch((err) => {
        res.send(err);
    })
})

//to Get One
router.get('/:id',(req,res)=>{
        let id = req.params.id;
        Vendor.findById(id).then((vendor)=>{
            res.send(vendor);
        }).catch((err)=>{
            res.send(err);
        })
    })

    
//delete url by id
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Vendor.findByIdAndRemove(id).then((vendor) => {
        if (vendor) {
            res.send(category);
        } else {
            res.send({
                notice: ' Not Found'
            });
        }
    }).catch((err) => {
        res.send(err);
    });
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    Vendor.findByIdAndUpdate({ _id:id }, { $set: body }).then((vendor) => {
        if (!vendor) {
            res.send({
                notice: 'Vendor Not Found'
            })
        }
        res.send({
            vendor,
            notice: 'Successfully Updated Vendor'
        }).catch((err) => {
            res.send(err);
        })
    });
});

module.exports = {
    vendorsController: router
}



