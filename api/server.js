import express from 'express'
import dotenv from 'dotenv'
import mongoDBConnect from './config/db.js';
import studentRouter from './routers/studentRouter.js'
import userRouter from './routers/userRouter.js'
import errorHandler from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import VerifyToken from './controllers/verifyToken.js';

// Express init
const app = express()

// Dot env config
dotenv.config()

// Dot env variable init
const port = process.env.SEVER_PORT || 5000
const server_name = process.env.SERVER_NAME

// Body init
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

// cookie parser init
app.use(cookieParser())
app.use(cors())

// Student router
app.use('/api/student', studentRouter)

// User router
app.use('/api/user', userRouter)

// Token verify
app.post('/api/verify-token', VerifyToken)

// Express error handler
app.use(errorHandler)

app.listen(port, () => {
    mongoDBConnect()
    console.log(`${server_name} server running on http://localhost:${port}`)
})
