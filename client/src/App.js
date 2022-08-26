import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import AuthMiddleware from './middlewares/AuthMiddleware';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import AuthContext from './context/AuthContext';
import Verify from './pages/verify/Verify';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import EmailSent from './pages/EmailSent/EmailSent';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import InvalidLink from './pages/InvalidLink/InvalidLink';
import AccountVerify from './pages/AccountVerify/AccountVerify';

function App() {

  const { authDispatch } = useContext(AuthContext)

  // Get token
  const token = Cookies.get('token')

  useEffect(() => {
    if (token) {
      try {
        axios.get('http://localhost:5050/api/user/me',{
          headers : {
            authorization : token
          }
          }).then(res => {
            authDispatch({type: 'LOGGED_IN', payload: res.data})
          })
          .catch(() => {
            authDispatch({type: 'LOGGED_OUT'})
          })
      } catch (error) {
        console.log(error);
      }
    }else{
      authDispatch({type: 'LOGGED_OUT'})
    }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[token])


  return (
    <div className="App">
        <ToastContainer />
      <Routes>
        <Route path='/' element={ <AuthMiddleware> <Home /> </AuthMiddleware> } />
        <Route path='/login' element={ <AuthMiddleware> <Login /> </AuthMiddleware> } />
        <Route path='/signup' element={ <AuthMiddleware> <SignUp /> </AuthMiddleware> } />
        <Route path='/:username' element={ <AuthMiddleware> <Profile /> </AuthMiddleware> } />
        <Route path='/verify-account/:token' element={ <Verify /> } />
        <Route path='/forgot-password' element={ <ForgotPassword /> } />
        <Route path='/reset-password/:token' element={ <ResetPassword /> } />
        <Route path='/email-sent/:main/:email' element={ <EmailSent /> } />
        <Route path='/invalid-link/:main' element={ <InvalidLink /> } />
        <Route path='/account-verify' element={ <AccountVerify /> } />
      </Routes>
    </div>
  );
}

export default App;
