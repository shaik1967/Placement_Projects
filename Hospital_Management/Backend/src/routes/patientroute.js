import express from "express"

import { loginpatient,registerpatient } from "../controllers/patientcontroller.js"

const patientRouter = express.Router()


patientRouter.post("/registerpatient",registerpatient)
patientRouter.post("loginpatient",loginpatient)

export default patientRouter;