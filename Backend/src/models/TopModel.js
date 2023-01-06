import mongoose from "mongoose";


const TopSchema = new mongoose.Schema({
    title:{type:String,required:true},
    price:{type:String,required:true},
    desc:{type:String,required:true},
    img:{type:String,required:true},
    id:{type:Number,required:true},
    quantity:{type:Number,required:true},
},{
    versionKey:false,
    timestamps:true
})

const TopModel = mongoose.model('Top', TopSchema);

 export default TopModel