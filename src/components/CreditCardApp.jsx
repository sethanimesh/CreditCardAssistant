import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import HeaderComponent from "./HeaderComponent";
import AuthProvider, {useAuth } from "./security/AuthContext"
import WelcomeComponent from "./WelcomeComponent";


function AuthenticatedRoute({children}){

    const authContext = useAuth()
    if (authContext.isAuthenticated){
        return children
    }

    return <Navigate to="/"/>

    
}

export default function CreditCardApp(){
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path="/" element={<LoginComponent/>}/>
                        <Route path="/login" element={<LoginComponent/>}/>
                        <Route path="/welcome" element={
                            <AuthenticatedRoute>
                                <WelcomeComponent/>
                            </AuthenticatedRoute>}/>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}