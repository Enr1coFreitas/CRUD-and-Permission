import users from "../../database/index"

const deleteUserService = (userIndex) =>{
    users.splice(userIndex,1)

    return {message: "User deleted with success"}
}

export default deleteUserService