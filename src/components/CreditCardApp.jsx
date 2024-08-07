import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./LoginComponent";

export default function CreditCardApp(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent/>}/>
                    <Route path="/login" element={<LoginComponent/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}