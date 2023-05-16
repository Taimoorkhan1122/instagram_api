import { createContext } from "react";

export const AuthContext = createContext();
const initialState = {
    user: {
        isLoggedIn: false,
        profile: null
    }
}
export const AuthContextProvider = ({children}) => {
    return <AuthContext.Provider value={initialState} >
        {children}
    </AuthContext.Provider>
}