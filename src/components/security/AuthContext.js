import {createContext, createState, useContext, useState} from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){

    const[isAuthenticated, setAuthenticated] = useState(false)

    function login(username, password){
        if ((username==="sethanimesh") && (password==="dummy")){
            setAuthenticated(true)
            return true
        }
        else{
            setAuthenticated(false)
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
    }

    const valueToBeShared = {isAuthenticated, setAuthenticated, login, logout}

    

    return (
        <AuthContext.Provider value = {valueToBeShared}>
            {children}
        </AuthContext.Provider>
    )
}