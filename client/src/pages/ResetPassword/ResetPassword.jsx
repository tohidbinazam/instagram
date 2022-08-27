import React from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import tokenValidate from '../../utility/tokenValidate';

const ResetPassword = () => {

    const { token } = useParams()

    // Token validation function
    tokenValidate(token)
    
    const handleSubmit = (e) => {
        e.preventDefault()

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
                                        <input className='form-control' type="password" name="" id="new-pass" />
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="con-new-pass">New password confirmation:</label>
                                        <input className='form-control' type="password" name="" id="con-new-pass" />
                                    </div>
                                    <button className='btn w-100 fw-bold text-white' type="submit">Reset Password</button>
                                </form>
                            </div>
                            <div className="card-footer">
                                <p className='alert alert-danger d-flex justify-content-between'>Create a password at least 6 characters long. <button className='btn-close'></button></p>
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