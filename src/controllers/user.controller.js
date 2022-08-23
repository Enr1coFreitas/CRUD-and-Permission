import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import getUserService from "../services/users/getUser.service";
import getUserProfileService from "../services/users/getUserProfile.service";
import updateUserService from "../services/users/updateUser.service";

export const createUser = async (request, response) =>{
    try {
        const data = request.body
        const createdUser = await createUserService(data)
    
        return response.status(201).json(createdUser)   
           
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export const getUser = (request,response) =>{
    try {
        const users = getUserService(request.user.uuid)
    
        return response.status(200).json(users)     
    } catch (error) {
        return response.status(401).json({
            message: error.message
        })
    }
}

export const getUserProfile = (request, response) =>{
    const userId = request.user.uuid
    const user = getUserProfileService(userId)

    return response.status(200).json(user)
}

export const updateUser = (request, response) =>{
    try {
        const userIndex = request.userIndex
        const data = request.body
        const newUser = updateUserService(data, userIndex)
    
        return response.status(200).json(newUser)
    } catch (error) {
       return response.status(401).json({
           message: error.message
       }) 
    }   
}

export const deleteUser = (request, response) =>{
    const deletedUser = deleteUserService(request.userIndex)

    return response.status(200).json(deletedUser)
}