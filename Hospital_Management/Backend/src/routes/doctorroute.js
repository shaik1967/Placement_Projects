import express from "express"
import { logindoctor, registerdoctor, authController } from "../controllers/doctorcontroller.js";
import authMiddleware from "../middlewears/authMiddleware.js";

const doctorRouter = express.Router()

doctorRouter.post('/logindoctor',logindoctor);
doctorRouter.post('/registerdoctor',registerdoctor);
doctorRouter.post('/getdoctordata',authMiddleware,authController);

export default doctorRouter;