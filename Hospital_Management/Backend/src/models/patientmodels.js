import mongoose from "mongoose"

const patientSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    address:{
       type:String,
       required:true,
    },
    DOB:{
        type:String,
        required:true,
    }
})

const patientModel=mongoose.models.patient||mongoose.model("patient",patientSchema);

export default patientModel;