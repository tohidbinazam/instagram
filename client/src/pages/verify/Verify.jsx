import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';


const Verify = () => {

  const navigate = useNavigate()
  const [status, setStatus] = useState('')

  const { token } = useParams()

  axios.post('http://localhost:5050/api/verify-token', { token }).then(res => {

    // User verify update
    axios.post('http://localhost:5050/api/user/verify', { token, user_id: res.data }).then(res => {
      setStatus(res.data)
      localStorage.removeItem('email')
    })

  }).catch(() => {
    navigate('/invalid-link/account-verify')
  })
  
  return (
    <div>
        <div className='my-5 text-center'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
                            </div>
                            <div className="card-body">
                                <h6 className='my-3'>{ status }</h6>
                                <p className='my-2'>Now, After login you can access all feature in your account</p>
                                <Link className='btn btn-primary' to='/login'>Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Verify