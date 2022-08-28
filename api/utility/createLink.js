import Token from "../models/Token.js";
import { createJWT } from "./createJWT.js";



const createLink = async (id, reason, jwt_exp ) => {

    // Create token
    const token = createJWT({ id }, jwt_exp)

    // Previous token remove
    await Token.findOneAndRemove({ userId:id, reason })

    // Sent token
    await Token.create({ userId : id, reason, token })

    // Send activation email
    return `${process.env.APP_URL}/${reason}/${token}`

}

export default createLink