const mongoose = require("mongoose");
  const Schema = mongoose.Schema;
  const {Category} = require('../models/category');


  const hallSchema=new Schema({
      name: {
          type:String,
          require:true
      },
      category: {
       type: Schema.Types.ObjectId,
       ref: 'Category'
      },
      description: {
          type:String,
          require:true,
          maxlength:1000,
          minlength:60
      },
      ceremonies:[],
      
      yearOfExperience: {
          type: Number,
          require: true
      },
      capacity:{
          type: Number,
            require: true
      },
      parking:{
          type:Boolean,
          default:false
      },
      basePrice:{
          type:Number,
          require:true
      }
  });

  let Hall = mongoose.model("Hall",hallSchema);

hallSchema.post('save',function(next){
    let hallId = this._id;
    console.log(hallId);
    let categoryId= this.category;
console.log(categoryId);
    Category.findById(categoryId).populate('halls').then((category)=>{
console.log(category)
        category.halls.push(hallId);
        category.save();
    })
})


  module.exports ={
      Hall
  }