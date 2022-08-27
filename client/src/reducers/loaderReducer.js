


const loaderReducer = (state,  type) => {

    switch (type) {
        case 'START':
            return 100
            
        case 'END':
            return 0
            
        default:
            return state
           
    }
}


export default loaderReducer