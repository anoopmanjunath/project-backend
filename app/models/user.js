const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        minLength : 3,
        maxLength : 15

    
    },
    // email : {
    //   type: String,
    //   required: true,
    //   unique: true
    // },
    // mobile : {
    //     type : Number,
    //      max: 10,
    //      required : true
    //  },
    //  password : {
    //      type: String
    //  }
  
});


const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}

