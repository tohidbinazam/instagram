import studentModel from "../models/studentModel.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import createError from "./createError.js";

/**
 * @access Public 
 * @route /api/student
 * @method GET
 */

export const getAllStudents = async (req, res, next) => {

    try {
        const students = await studentModel.find()
        res.status(200).json(students)
    } catch (error) {
        next(error)
    }
}


/**
 * @access Public 
 * @route /api/student
 * @method POST
 */

export const createStudent = async (req, res, next) => {

    // Password hashing
    const password = await bcryptjs.hash(req.body.password, 12)

    try {
        await studentModel.create({ ...req.body, password })
        res.status(200).json('Student create successfully')
    } catch (error) {
        next(error)
    }
}


/**
 * @access Public 
 * @route /api/student/:username
 * @method GET
 */

export const getSingleStudent = async (req, res, next) => {

    // Get username
    const username = req.params.username

    try {
        let student = await studentModel.findOne({ username })
        student ? res.status(200).json(student) : next(createError(404, 'Student not found'))
    } catch (error) {
        next(error)
    }
}


/**
 * @access Public 
 * @route /api/student/:id
 * @method PATCH
 */

export const updateStudent = async (req, res, next) => {

    // Get student id
    const id = req.params.id

    // Password hashing
    const password = await bcryptjs.hash(req.body.password, 12)

    try {
        await studentModel.findByIdAndUpdate(id, { ...req.body, password }, { new: true })
        res.status(200).json('Update student successfully')
    } catch (error) {
        next(error)
    }
}


/**
 * @access Public 
 * @route /api/student/:id
 * @method DELETE
 */

export const deleteStudent = async (req, res, next) => {

    // Get student id
    const id = req.params.id

    try {
        await studentModel.findByIdAndDelete(id)
        res.status(200).json('Student delete successfully')
    } catch (error) {
        next(error)
    }
}


/**
 * @access Public 
 * @route /api/student/register
 * @method POST
 */

export const studentRegister = async (req, res, next) => {

    // Password hashing
    const password = await bcryptjs.hash(req.body.password, 12)

    try {
        await studentModel.create({ ...req.body, password })
        res.status(200).json('Student register successfully')
    } catch (error) {
        next(error)
    }
}

/**
 * @access Public 
 * @route /api/student/login
 * @method POST
 */

export const studentLogin = async (req, res, next) => {

    const { email, password } = req.body

    try {
        const student =  await studentModel.findOne({ email })

        if (student) {
            const login = await bcryptjs.compare(password, student.password)
            if (login) {
                const token = jwt.sign({ id: student._id, isAdmin: student.isAdmin, username: student.username}, process.env.SECRET_KEY, { expiresIn : '120d' })
                res.cookie('access_token', token).status(200).json({ token, student })
            } else {
                res.status(200).json('Wrong password')
            }
        } else {
            res.status(404).json('Student not found')
        }
    } catch (error) {
        next(error)
    }
}