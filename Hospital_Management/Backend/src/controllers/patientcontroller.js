import patientModel from "../models/patientmodels.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET);
}
//login user

const loginpatient = async(req,res) => {
   const{email,password}=req.body;
   try{
    const patient=await patientModel.findOne({email});
    if(!patient){
        return res.json({success:false,message:"User Doesn't exist"})
    }
    const isMatch= await bcrypt.compare(password,patient.password);
    if(!isMatch){
        return res.json({success:false,message:"Invalid Credentials"})
    }
    const token =createToken(patient._id);
    res.json({success:true,token:token});
   }catch(error){
    console.log(error);
    res.json({success:false,message:error})
   }
}

//register user
const registerpatient = async(req,res) =>{
    const {name,email,address,DOB}=req.body;
     try{
        const exists=await patientModel.findOne({email}) 
        if(exists){
            return res.json({success:false,message:"User already exists"});
        }

        //validating email format and strong password
         if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter valid email"}); 
         }
         const newpatient=new patientModel({
            name:name,
            email:email,
            address:address,
            DOB:DOB,
         })
         const patient= await newpatient.save()
         const token=createToken(patient._id)
         res.json({success:true,token})
     }
     catch(error){
         console.log(error);
         res.json({succes:false,message:"Error"});
     }
}   

export {loginpatient,registerpatient}

