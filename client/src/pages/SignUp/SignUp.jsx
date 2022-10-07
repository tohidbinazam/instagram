import React, { useState } from 'react'
import { AiFillFacebook } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { toast } from 'react-toastify';
import Footer from '../../components/footer/Footer';
import '../TempAuth/TempAuth.scss'
import './SignUp.scss'
import swal from 'sweetalert';

const SignUp = () => {

    const navigate = useNavigate()

    // Input state
    const [input, setInput] = useState({})

    // eslint-disable-next-line no-useless-escape
    const email_pattern = /^[^\.-/][a-z0-9-_\.]{1,}@[a-z0-9-]{1,}\.[a-z\.]{2,}$/;
    const number_pattern = /^(\+8801|8801|01)[0-9]{9}$/;

    // Handle input state
    const handleInputs = (e) => {

        setInput((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (input.info && input.name && input.username && input.password) {

            if (email_pattern.test(input.info)) {

                await axios.post('http://localhost:5050/api/user/register', {...input, email:input.info}).then(res => {
                    localStorage.setItem('email', input.info)
                    swal('Success', 'Your account created successfully', 'success')
                    navigate('/account-verify/email-sent')
                }).catch((error) => {
                    toast.error(error.response.data.message)
                })

            }else if (number_pattern.test(input.info)) {

                await axios.post('http://localhost:5050/api/user/register', {...input, number:input.info}).then(res => {
                    localStorage.setItem('number', input.info)
                    swal('Success', 'Your account created successfully', 'success')
                    navigate('/account-verify/otp-sent')
                }).catch((error) => {
                    toast.error(error.response.data.message)
                })
                
            } else {
                toast.error("Set a Valid Email or Number")
            }   

        }else{
            toast.error("All fields are required")
        }
    }
    

  return (
    <div className='auth-section'>
        <div className='auth auth-sign'>
            <div className="auth-container">
                <div className="auth-login-warper">
                    <div className='auth-login'>
                        <a href="https://"><img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" /></a>
                        <h5> Sign up to see photos and videos from your friends. </h5>
                        <a className='login-with-fb-sign' href="https://"> <AiFillFacebook /> Log in with Facebook </a>
                        <div className="divider">OR</div>
                        <form onSubmit={ handleSubmit }>
                            <input type="text" name="info" onChange={ handleInputs } placeholder='Mobile Number or Email' />
                            <input type="text" name="name" onChange={ handleInputs } placeholder='Full Name' />
                            <input type="text" name="username" onChange={ handleInputs } placeholder='Username' />
                            <input type="password" name="password" onChange={ handleInputs } placeholder='Password' />
                            <p>People who use our service may have uploaded your contact information to Instagram. Learn More </p>
                            <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy.</p>
                            <button type="submit"> Sign up </button>
                        </form>
                    </div>
                    <div className="sing-up-box">
                        Have an account? <Link className='text-color' to="/login"> Log in </Link>
                    </div>
                    <div className="get-app">
                        Get the app.
                        <div className="app-logo">
                            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" />
                            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer />
    </div>
  )
}

export default SignUp