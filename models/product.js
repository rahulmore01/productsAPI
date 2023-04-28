// here we are defining our api object structure / Schema.
const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{ 
        type:String,
        required:true,//name is the first field of product it should be mandatory
    },
    price:{ 
        type:Number,
        required:[true,"price must be provided"],//we can write msg on filure
    },
    featured:{ //its like showing some sample products on top
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.9,//hardcoded value for all the products
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{//enum means company name cant be out of the listed companies else itll through the messege
            values:["apple", "samsung", "dell", "mi"],
            message:`{VALUE} is not supported`,
        }
    },
});

module.exports = mongoose.model("Product", productSchema);