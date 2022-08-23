import jwt from "jsonwebtoken"

const authorization = (request,response,next) =>{
    let token = request.headers.authorization

    if(!token){
        return response.status(401).json({
            message: "Missing authorization headers"
        })
    }

    token = token.split(" ")[1]

    jwt.verify(token, "dO*UJ@!U*E!(*D1s", (error, decoded)=>{
        if(error){
            return response.status(401).json({
                message: "Missing authorization headers"
            })
        }

        request.user = {
            uuid: decoded.sub,
            token: token
        }

        next()
    })

}

export default authorization