import mongoose from "mongoose";
import bcrypt from 'bcrypt'


const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})

UserSchema.pre("save",async function (next){
    let salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt)
    return next()
})

const UserModel = mongoose.model('User', UserSchema);

export default UserModel