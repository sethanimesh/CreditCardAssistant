import { useState } from "react"
import './styles/login.css'

export default function LoginComponent(){

    const[username, setUsername] = useState('sethanimesh')
    const[password, setPassword] = useState('')

    const[successMessage, setSuccessMessage] = useState(false)
    const[errorMessage, setErrorMessage] = useState(false)

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleSubmit(){
        if(username==="sethanimesh" && password==="dummy"){
            setSuccessMessage(true)
            setErrorMessage(false)
        }
        else{
            setErrorMessage(true)
            setSuccessMessage(false)
        }
    }

    function SuccessMessageComponent(){
        if (successMessage){
            return (
                <div className="successMessage">Authenticated Successfully</div>
            )
        }
    }


    function ErrorMessageComponent(){
        if (errorMessage){
            return (
                <div className="errorMessage">Authentication Failed</div>
            )
    }
}


    return (
        <div className="Login">
            <div className="LoginForm">
                <SuccessMessageComponent/>
                <ErrorMessageComponent/>
                <div className="group">
                    <input type="text" name="username" onChange={handleUsernameChange} />
                    <span className="highlight"></span><span className="bar"></span>
                    <label>Username</label>
                </div>
                <div className="group">
                    <input type="password" name="password" onChange={handlePasswordChange} />
                    <span className="highlight"></span><span className="bar"></span>
                    <label>Password</label>
                </div>
                <div>
                    <button type="button" className="button buttonBlue" name="login" onClick={handleSubmit}>
                        Login
                        <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
                    </button>
                </div>
            </div>
        </div>
    )
}