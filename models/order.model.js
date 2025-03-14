import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    items:{
        type:Array,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:Number,
        default:1
    },
    date:{
        type:Date,
        default:Date.now()
    },
    payment:{
        type:Boolean,
        default:false
    }
});

const Order=mongoose.model("orders",orderSchema);

export default Order