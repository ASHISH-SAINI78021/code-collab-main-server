const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    name : {
        type : String ,
        required : true ,
        trim : true
    } ,
    email : {
        type : String ,
        unique : true
    } ,
    password : {
        type : String ,
        required : true ,
        trim : true
    } ,
    answer : {
        type : String ,
        required : true
    } ,
    role : {
        type : Number ,
        default : 0
    }
} , {timestamps : true});

const User = mongoose.model("User" , userSchema);
module.exports = User;