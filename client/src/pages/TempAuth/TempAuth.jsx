import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import 'bootstrap/js/dist/carousel'
import Footer from '../../components/footer/Footer';
import './TempAuth.scss'
import { Link } from 'react-router-dom';

const TempAuth = () => {
  return (
    <div className='auth-section'>
        <div className='auth'>
            <div className="auth-container">
                <div className="auth-slider">
                    <div className="carousel slider carousel-fade" data-bs-ride='carousel'>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" className="d-block " alt="" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png" className="d-block " alt="" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png" className="d-block " alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="auth-login-warper">
                    <div className='auth-login'>
                        <a href="https://"><img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" /></a>
                        <form>
                            <input type="text" name="" id="" placeholder='Phone number, username, or email' />
                            <input type="password" name="" id="" placeholder='Password' />
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

export default TempAuth