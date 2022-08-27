import { useReducer } from "react";
import LoaderContext from "../context/LoaderContext";
import loaderReducer from "../reducers/loaderReducer";

// Initial state
const INITIAL_STATE = 0


const LoaderProvider = ({ children }) => {
    const [ loader_state, loaderDispatch ] = useReducer( loaderReducer, INITIAL_STATE  )

    return(
        <LoaderContext.Provider value={{ loader_state, loaderDispatch }}>
            { children }
        </LoaderContext.Provider>
    )

}

export default LoaderProvider