import express from "express";
import { createuser, deleteuser, getAllusers, getSingleuser, userLogin, userRegister, updateuser, loggedInUser, verifyAccount, resentVerify } from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

// Router init
const router = express.Router()

// user auth router
router.post('/register', userRegister)
router.post('/login', userLogin)
router.get('/me', loggedInUser)
router.post('/verify', verifyAccount)
router.post('/resent-verify', resentVerify)

// Router REST API
router.route('/').get(authMiddleware, getAllusers).post(authMiddleware, createuser)
router.route('/:id').patch(authMiddleware, updateuser).delete(authMiddleware, deleteuser)
router.route('/:username').get(authMiddleware, getSingleuser)


// Export router
export default router;