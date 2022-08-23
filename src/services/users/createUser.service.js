import users from "../../database/index"
import * as bcrypt from "bcrypt"
import { v4 as uuidv4 } from "uuid"

const createUserService = async (data) =>{
    const userAlreadyExists = users.find(user => user.email === data.email)

    if(userAlreadyExists){
        throw new Error("E-mail already registered")
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)

    const newUser = {
        ...data,
        password: hashedPassword,
        createdOn: new Date(),
        updatedOn: new Date(),
        uuid: uuidv4()
    }

    users.push(newUser)

   const {name, email, isAdm, createdOn, updatedOn, uuid} = newUser

    return {name, email, isAdm, createdOn, updatedOn, uuid}
}

export default createUserService