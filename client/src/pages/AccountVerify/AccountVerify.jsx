import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from '../../components/footer/Footer';

const AccountVerify = () => {

    const [ email, setEmail ] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault()
        axios.post('http://localhost:5050/api/user/resent-verify', { email }).then(res => {
            
            swal('Success', 'Verification link sent in your account', 'success')
            navigate(`/email-sent/account-verify/${ res.data.email }`)
        }).catch((error) => {
            swal('Wrong', error.response.data.message, 'warning')
        })
    }

    
  return (
    <div className='text-center my-5'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card my-5">
                        <div className="card-body px-5">
                            <VscAccount />
                            <h5 className='my-2'>Verify your account?</h5>
                            <p>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
                            <form onSubmit={ handleSubmit }>
                                <div className="my-3">
                                    <input onChange={ e => setEmail(e.target.value) } className='form-control' type="text" name="" id="" placeholder='Email, Phone or Username'/>
                                </div>
                                <button className='w-100 btn fw-bold text-white' type="submit">Send Verification Link</button>
                            </form>
                            <div className="divider">OR</div>
                            <Link className='font-wight' to="/signup">Create New Account</Link>
                        </div>
                        <div className="card-footer">
                            <Link className='font-wight' to="/login">Back To Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default AccountVerify