import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { MdOutlineVerifiedUser } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from '../../components/footer/Footer';

const SmsOtpSent = () => {

    const [ sms_otp, setSmsOtp ] = useState('')
    const number = localStorage.getItem('number')

    const navigate = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault()
        axios.post('http://localhost:5050/api/user/verify-code', { number, sms_otp }).then(res => {
            
            localStorage.removeItem('number')
            swal('Success', res.data, 'success')
            navigate('/login')
        }).catch((error) => {
            swal('Wrong', error.response.data.message, 'error')
        })
    }

    
  return (
    <div className='text-center my-5'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card my-5">
                        <div className="card-body px-5">
                            <MdOutlineVerifiedUser />
                            <h5 className='my-2'>Verify your account?</h5>
                            <p>We have sent a verification code to your { number } mobile number</p>
                            <form onSubmit={ handleSubmit }>
                                <div className="my-3">
                                    <input onChange={ e => setSmsOtp(e.target.value) } className='form-control' type="number" placeholder='Verification code'/>
                                </div>
                                <button className='w-100 btn fw-bold text-white' type="submit">Verify</button>
                            </form>
                            <div className="divider">OR</div>
                            <Link className='font-wight' to="/signup">Resend SMS</Link>
                        </div>
                        <div className="card-footer">
                            <Link className='font-wight' to="/login">Change Number</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default SmsOtpSent