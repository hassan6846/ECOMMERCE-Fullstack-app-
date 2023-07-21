//mongoose for creating a model e.g new user
const mongoose=require("mongoose");
//json web token for idk
const jwt =require("jsonwebtoken");
//bycrypt for salting  and hashing the password
const bycrypt=require("bcrypt")
//crypto for creating crytographic hash
const crypto =require("crypto")
//validator helps to validate the post and input fields
const validator=require("validator")

const UserSchema=new mongoose.Schema({
// name
username:{
    type:String,
    require:[true,"Please  Enter  your name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
},
email:{
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
},
password:{
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
},
avatar: {
    public_id: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
default:"https://randomuser.me/api/"
    }
  },

  role: {
    type: String,
    default: "user",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  VerifiedEmail: {
    type: String,
    default: "NO",
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,


})
// what is after this
// after this i had to made oop based or funcitonal based methods
module.exports = mongoose.model("User", UserSchema);
//generating reset password token
UserSchema.methods.getResetPasswordToken=function(){
//token
const resetToken=crypto.randomBytes(20).toString("hex")
this.resetPasswordToken=crypto
.createHash("sha256")
.update(resetToken)
.digest("hex");
this.resetPasswordExpire=Data.now()+15*60*1000
return resetToken
}