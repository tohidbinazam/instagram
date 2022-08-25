import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";


const AuthMiddleware = ({ children }) => {

    // Get targeted page
    const file = children[1].type.name
    
    // This is authContext
    const { isLoggedIn } = useContext(AuthContext)
    
    if (file === 'Home') {
        return isLoggedIn ? children : <Navigate to='/login' />
    } else if ( file === 'Login' || file === 'SignUp') {
        return !isLoggedIn ? children : <Navigate to='/' />
    }
    
}

export default AuthMiddleware;