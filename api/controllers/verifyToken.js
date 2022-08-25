import jwt from 'jsonwebtoken'
import Token from '../models/Token.js'
import createError from './createError.js';

 const VerifyToken = async (req, res, next) => {

    const { token } = req.body

    try {
        const verify = jwt.verify(token, process.env.SECRET_KEY)

        // Get token data
        const token_data = await Token.findOneAndDelete({ token })
        
        if (verify && token_data) {
            res.status(200).json('Token is ok')
        } else {
            next(createError(404, 'Expire or Invalid URL'))
        }
    } catch (error) {
        next(error)
    }
}


export default VerifyToken