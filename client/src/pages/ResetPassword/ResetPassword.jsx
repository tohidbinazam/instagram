import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import swal from 'sweetalert'

const ResetPassword = () => {

    const { token } = useParams()
    const navigate = useNavigate()

    // Password input state
    const [ pass, setPass ] = useState('')

    // User id variable
    let user_id

    // Token validation function
    axios.post('http://localhost:5050/api/verify-token', { token }).then((res) => {
        user_id = res.data
    }).catch(() => {
      navigate('/invalid-link/account-verify')
    })
    
    // Password submit form controller
    const handleSubmit = (e) => {
        e.preventDefault()
        if (pass.password === pass.cPassword) {
            
            // Reset password api call
            axios.patch('http://localhost:5050/api/user/reset-password', {token, user_id, pass: pass.password }).then(res => {
                swal('Success', res.data, 'success')
                navigate('/login')
            })
        } else {
            swal('Warning', 'Password and Conform password Don\'t mach', 'warning')
        }

    }

    //Password input check and mach 
    const handlePass = (e) => {
        setPass((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

  return (
    <div>
        <div className='my-5'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header text-center">
                                <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
                            </div>
                            <div className="card-body">
                                <form onSubmit={ handleSubmit }>
                                    <div className="my-3">
                                        <label htmlFor="new-pass">New password:</label>
                                        <input onChange={ handlePass } className='form-control' type="password" name="password" id="new-pass" />
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="con-new-pass">New password confirmation:</label>
                                        <input onChange={ handlePass } className='form-control' type="password" name="cPassword" id="con-new-pass" />
                                    </div>
                                    <button className='btn w-100 fw-bold text-white' type="submit">Reset Password</button>
                                </form>
                            </div>
                            <div className="card-footer">
                                <p className='alert alert-danger d-flex justify-content-between'>Create a password at least 6 characters long. <button data-bs-dismiss='alert' className='btn-close'></button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ResetPassword