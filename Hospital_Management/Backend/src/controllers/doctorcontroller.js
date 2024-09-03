import doctormodel from "../models/doctormodels.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'});
}
//login doctor

const logindoctor = async(req,res) => {
   const{email,password}=req.body;
   try{
    const doctor=await doctormodel.findOne({email});
    if(!doctor){
        return res.json({success:false,message:"User Doesn't exist"})
    }
    const isMatch= await bcrypt.compare(password,doctor.password);
    if(!isMatch){
        return res.json({success:false,message:"Invalid Credentials"})
    }
    const token =createToken({id:doctor._id});
    res.json({success:true,token:token});
   }catch(error){
    console.log(error);
    res.json({success:false,message:error})
   }
}

//register doctor
const registerdoctor = async(req,res) =>{
    const {name,email,password,Specialization}=req.body;
     try{
        const exists=await doctormodel.findOne({email}) 
        if(exists){
            return res.json({success:false,message:"User already exists"});
        }

        //validating email format and strong password
         if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter valid email"}); 
         }
         if(password.length<8){
            return res.json({success:false,message:"Please enter strong password"})
         }

         //hashing user password
 
         const salt=await bcrypt.genSalt(10);
         const hashedPassword=await bcrypt.hash(password,salt);
         const newdoctor=new doctormodel({
            name:name,
            email:email,
            password:hashedPassword,
            Specialization:Specialization
         })
         const doctor= await newdoctor.save()
         const token=createToken({id:doctor._id})
         res.json({success:true,token})
     }
     catch(error){
         console.log(error);
         res.json({succes:false,message:"Error"});
     }
}   

const authController =async (req,res) =>{
    try{
        const doctor= await doctormodel.findone({_id:req.body.userId})
        if(!user){
            return res.json({
                message:"user not found",
                success:false
            });
        }
        else{
            res.status.send(200).send({
                success:true,
                name:doctor.name,
                email:doctor.email
            });
        }
    }
    catch(error){
        console.log(error)
        res.json({
            message:"auth error",
            success:false,
        })
    }
}
export {logindoctor,registerdoctor,authController}