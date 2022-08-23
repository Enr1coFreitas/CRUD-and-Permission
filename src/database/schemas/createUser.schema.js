import * as yup from "yup";

const userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email(),
    password: yup.string().required(),
    isAdm: yup.boolean().required()
})

export default userSchema