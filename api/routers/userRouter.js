import express from "express";
import { createuser, deleteuser, getAllusers, getSingleuser, userLogin, userRegister, updateuser, loggedInUser, verifyAccount, resentVerify, forgotPassword, resetPassword, userLogout } from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

// Router init
const router = express.Router()

// user auth routers
router.post('/register', userRegister)
router.post('/login', userLogin)
router.delete('/logout', userLogout)
router.get('/me', loggedInUser)
router.post('/verify', verifyAccount)
router.post('/resent-verify', resentVerify)
router.post('/forgot-password', forgotPassword)
router.patch('/reset-password', resetPassword)

// Router REST API
router.route('/').get(authMiddleware, getAllusers).post(authMiddleware, createuser)
router.route('/:id').patch(authMiddleware, updateuser).delete(authMiddleware, deleteuser)
router.route('/:username').get(authMiddleware, getSingleuser)


// Export router
export default router;