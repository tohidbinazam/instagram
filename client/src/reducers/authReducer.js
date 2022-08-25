
const authReducer = (state, { type, payload }) => {


    switch (type) {
        case 'LOGGED_IN':
            return {
                    isLoggedIn: true,
                    user: payload 
                }

        case 'LOGGED_OUT':
            return { isLoggedIn: false }
            
        default:
            return state
            
    }
}


export default authReducer