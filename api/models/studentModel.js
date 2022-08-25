import mongoose from "mongoose";


const studentModel = mongoose.Schema({
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
        required : true,
        trim : true
    },
    gender : {
        type : String
    },
    age : {
        type : Number,
        required : true
    },
    photo : {
        type : String,
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


export default mongoose.model('Student', studentModel)