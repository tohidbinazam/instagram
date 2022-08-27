import { useReducer } from "react";
import AuthContext from "../context/AuthContext";
import authReducer from "../reducers/authReducer";

// Initial state
const INITIAL_STATE = {
    isLoggedIn : false,
    user: null
}


// Create provider
const AuthProvider = ({ children }) => {

    const [ state,  authDispatch ] = useReducer( authReducer, INITIAL_STATE )

    // State destructure
    const { isLoggedIn, user } = state

    return(
        <AuthContext.Provider value={{ isLoggedIn, user, authDispatch }}>
            { children }
        </AuthContext.Provider>
    )

}


export default AuthProvider