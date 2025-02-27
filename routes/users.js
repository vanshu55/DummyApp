const mongoose = require("mongoose");
var express = require('express');

mongoose.connect("mongodb://127.0.0.1:27017/vanshu");

const userSchema = mongoose.Schema({
  name:String,
  username:String,
  email:String,
  age:Number,
  image:String,
  like:{
    type:Number,
    default:0
  }

})
module.exports = mongoose.model("user",userSchema);