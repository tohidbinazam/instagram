import React from 'react'
import './ForgotPassword.scss'
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom'
import { FiLock } from 'react-icons/fi';

const ForgotPassword = () => {
  return (
    <div className='forgot-password text-center my-5'>
        <div class="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card my-5">
                        <div className="card-body px-5">
                            <FiLock />
                            <h5 className='my-2'>Trouble Logging In?</h5>
                            <p>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
                            <form>
                                <div className="my-3">
                                    <input className='form-control' type="text" name="" id="" placeholder='Email, Phone or Username'/>
                                </div>
                                <button className='w-100 btn fw-bold text-white' type="submit">Send Login Link</button>
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

export default ForgotPassword