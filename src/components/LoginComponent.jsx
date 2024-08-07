import { useState, useEffect } from "react"
import $ from 'jquery';
import './styles/login.css'
import { useAuth } from "./security/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function LoginComponent(){

    const[username, setUsername] = useState('sethanimesh')
    const[password, setPassword] = useState('')

    const[successMessage, setSuccessMessage] = useState(false)
    const[errorMessage, setErrorMessage] = useState(false)


    const navigate = useNavigate();
    const authContext = useAuth()

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }


    function handleSubmit(){
        if(authContext.login(username, password)){
            navigate(`/welcome`)
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

useEffect(() => {
    $('input').blur(function() {
        var $this = $(this);
        if ($this.val())
            $this.addClass('used');
        else
            $this.removeClass('used');
    });

    var $ripples = $('.ripples');

    $ripples.on('click.Ripples', function(e) {
        var $this = $(this);
        var $offset = $this.parent().offset();
        var $circle = $this.find('.ripplesCircle');

        var x = e.pageX - $offset.left;
        var y = e.pageY - $offset.top;

        $circle.css({
            top: y + 'px',
            left: x + 'px'
        });

        $this.addClass('is-active');
    });

    $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
        $(this).removeClass('is-active');
    });
}, []);

    return (
        
        <div className="Login">
            <SuccessMessageComponent/>
            <ErrorMessageComponent/>
            <div className="LoginForm">
                
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