import users from "../../database";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const loginUserService = (data) => {
    const user = users.find(elem => data.email === elem.email)

    if(!user){
        throw new Error("Email or password was incorrect")
    }

    const passwordMatch = bcrypt.compareSync(data.password, user.password);

    if(!passwordMatch){
        throw new Error("Email or password was incorrect")
    }

    const token = jwt.sign(user, "dO*UJ@!U*E!(*D1s", {expiresIn: "24h", subject: user.uuid});

    return {token};
}

export default loginUserService;