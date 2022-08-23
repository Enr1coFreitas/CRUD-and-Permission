import users from "../../database/index"
import * as bcrypt from "bcrypt"

const updateUserService = (data, userIndex) =>{
    if(data.isAdm || data.uuid || data.createdOn){
        throw new Error("isAdm and id is cannot updated")
    }

    if(data.password){
        data.password = bcrypt.hashSync(data.password, 10)
    }

    const newUser = {
        ...users[userIndex],
        updatedOn: new Date(),
        ...data
    }

    users[userIndex] = newUser
    const {name,email,uuid,createdOn,updatedOn,isAdm} = newUser

    return {name,email,uuid,createdOn,updatedOn,isAdm}
}

export default updateUserService