import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import HeaderComponent from "./HeaderComponent";

export default function CreditCardApp(){
    return (
        <>
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path="/" element={<LoginComponent/>}/>
                    <Route path="/login" element={<LoginComponent/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}