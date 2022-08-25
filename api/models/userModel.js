import mongoose from "mongoose";


const userModel = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    username : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    cell : {
        type : String,
        trim : true
    },
    gender : {
        type : String
    },
    age : {
        type : Number,
    },
    photo : {
        type : String,
    },
    isVerified:{
        type : Boolean,
        default : false
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    status : {
        type : Boolean,
        default : true
    },
    trash : {
        type : Boolean,
        default : false
    }
},{ timestamps : true })


export default mongoose.model('User', userModel)