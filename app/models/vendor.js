const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
    userName: {
        type: String,
        required: true,
        minLength : 3,
        maxLength : 15

    
    },
    companyName : {
        type: String,
        required: true,
    },
    email : {
      type: String,
      required: true,
      unique: true
    },
    
    address: {
        type: String,
        required: true
    }

    
});


const Vendor = mongoose.model('Vendor', VendorSchema);

module.exports = {
    Vendor
}

