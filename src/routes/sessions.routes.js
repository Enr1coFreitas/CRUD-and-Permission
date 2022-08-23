import { Router } from "express";
import login  from "../controllers/session.controller";
import schemaValidation from "../middlewares/schemaValidation.middleware";
import loginSchema from "../database/schemas/loginUser.schema";

const route = Router()

route.post('', schemaValidation(loginSchema), login)

export default route;