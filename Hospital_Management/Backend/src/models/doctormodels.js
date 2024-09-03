import mongoose from "mongoose"

const doctorSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    Specialization:{
        type:String,
        required:true
    }
})

const doctormodel=mongoose.models.doctor||mongoose.model("doctor",doctorSchema);

export default doctormodel;