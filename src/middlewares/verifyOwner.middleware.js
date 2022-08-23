import isAdmAuth from "./isAdmAuth.middleware"

const verifyOwner = (req,res, next)=>{
    const ownerId = req.user.uuid 
    const userId = req.params.uuid

    if(ownerId === userId){
        next()
    }

    isAdmAuth(req,res,next)
}

export default verifyOwner