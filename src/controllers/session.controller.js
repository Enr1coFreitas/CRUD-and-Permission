import loginUserService from "../services/sessions/loginUser.service";

const login = (request, response) => {
    try{
        const user = request.body
        const loggedUser = loginUserService(user)

        return response.status(200).json(loggedUser);

    } catch(error){
        return response.status(401).json({
            message: "Wrong email/password"
        })
    }
}

export default login;