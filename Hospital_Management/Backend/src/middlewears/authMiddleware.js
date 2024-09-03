import jwt from "jsonwebtoken"

const authMiddleware = async (req,res,next) => {
    try{
        const token =req.headers["authorization"].split(" ")[1];
        jwt.verify(token,process.env.JWT_SECRET,(err, decode) => {
            if(err){
                return res.json({
                    message:"Auth Failed",
                    success:false
                })
            }
            else{
                req.body.userID=decode.id,
                next()
            }
        })
    }
    catch(error){
        console.log(error),
        res.json({
            message:"Auth Failed",
            success:false
        });
    }
}

export default authMiddleware