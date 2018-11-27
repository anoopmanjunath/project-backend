const mongoose = require("mongoose");
  const Schema = mongoose.Schema;


  const hallSchema=new Schema({
      name: {
          type:String,
          require:true
      },
      category: {
       type: Schema.Types.ObjectId,
       ref: "Category"
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

  module.exports ={
      Hall
  }