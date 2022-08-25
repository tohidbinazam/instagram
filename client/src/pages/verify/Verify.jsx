import React, { useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import TokenValidate from '../../utility/TokenValidate';


const Verify = () => {


  const [status, setStatus] = useState('')

  const { token } = useParams()

  // TokenValidate if right the token then return user id
  const user_id =  TokenValidate(token, '/account-verify')

  // User verify update
  axios.post('http://localhost:5050/api/user/verify', { user_id }).then(res => {
    setStatus(res.data)
  }).catch(() => {
    setStatus('Invalid verify URL')
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
                                <p>Now, After login you can access all feature in your account</p>
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