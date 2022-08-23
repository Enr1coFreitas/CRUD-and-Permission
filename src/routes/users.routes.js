import { Router } from "express";
import { createUser, deleteUser, getUser, getUserProfile, updateUser } from "../controllers/user.controller";
import createUserSchema from "../database/schemas/createUser.schema";
import authorization from "../middlewares/authorization.middleware";
import schemaValidation from "../middlewares/schemaValidation.middleware";
import verifyUserExists from "../middlewares/userExists.middleware";
import verifyOwner from "../middlewares/verifyOwner.middleware";

const usersRouter = Router()

usersRouter.post('', schemaValidation(createUserSchema), createUser )
usersRouter.get('', authorization, getUser)
usersRouter.get('/profile', authorization, getUserProfile)
usersRouter.patch('/:uuid', authorization,verifyUserExists, verifyOwner, updateUser)
usersRouter.delete('/:uuid',authorization,verifyUserExists, verifyOwner, deleteUser)

export default usersRouter