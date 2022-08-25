import express from "express";
import { createStudent, deleteStudent, getAllStudents, getSingleStudent, studentLogin, studentRegister, updateStudent } from "../controllers/studentController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

// Router init
const router = express.Router()

// Router REST API
router.route('/').get(authMiddleware, getAllStudents).post(authMiddleware, createStudent)
router.route('/:id').patch(authMiddleware, updateStudent).delete(authMiddleware, deleteStudent)
router.route('/:username').get(authMiddleware, getSingleStudent)

// Student auth router
router.post('/register', studentRegister)
router.post('/login', studentLogin)

// Export router
export default router;