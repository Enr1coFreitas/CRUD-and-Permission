import users from "../database/index"

const isAdmAuth = (req,res,next) =>{
    const userId = req.user.uuid
    const user = users.find(element => element.uuid === userId)

    if(!user || !user.isAdm){
        return res.status(401).json({
            message: "Missing admin permissions"
        })
    }

    next()
}

export default isAdmAuth