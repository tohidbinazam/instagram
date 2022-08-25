import axios from 'axios';
import React, { useContext } from 'react'
import { useState } from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import cookie from 'js-cookie'
import swal from 'sweetalert'
import AuthContext from '../../context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {

    // AuthContext
    const { authDispatch } = useContext(AuthContext)

    // Input state
    const [input, setInput] = useState({})

    // Handle input state
    const handleAuth = (e) => {

        setInput((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (input.auth && input.password) {
                await axios.post('http://localhost:5050/api/user/login', {email: input.auth, password: input.password}).then(res => {

                    if (res.data.user.isVerified) {
                        cookie.set('token', res.data.token)
                        authDispatch({type: 'LOGGED_IN', payload : res.data.user})
                    }else{
                        toast.error('Please verify your account')
                    }
                })

            }else{
                swal('Info', 'All field are required', 'info')
            }
        } catch (error) {
            swal('Danger', 'Wrong email or password', 'error')
        }
    }

  return (
        <div className='auth-section'>
            <div className='auth'>
                <div className="auth-container">
                    <div className="auth-login-warper">
                        <div className='auth-login'>
                            <a href="https://"><img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" /></a>
                            <form onSubmit={ handleSubmit }>
                                <input type="text" name="auth" onChange={ handleAuth } placeholder='Phone number, username, or email' />
                                <input type="password" name="password" onChange={ handleAuth } placeholder='Password' />
                                <button type="submit"> Log In </button>
                            </form>
                            <div className="divider">OR</div>
                            <a className='login-with-fb' href="http://"><AiFillFacebook /> Log in with Facebook </a>
                            <Link className='forgot-pass' to="/forgot-password"> Forgot password? </Link>
                        </div>
                        <div className="sing-up-box">
                            Don't have an account? <Link className='text-color' to="/signup"> Sign up </Link>
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

export default Login