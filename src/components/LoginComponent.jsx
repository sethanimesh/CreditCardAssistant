import { useState } from "react"

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
        if(username=="sethanimesh" && password=="dummy"){
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
                <div>
                    <label>Username</label>
                    <input type="text" name="username" onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}