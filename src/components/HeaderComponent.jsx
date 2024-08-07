import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';
import './styles/header.css';
import { useAuth } from "./security/AuthContext";


export default function HeaderComponent(){

    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    function logout(){
        authContext.setAuthenticated(false)
    }

    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <nav className="nav-menu">
                {isAuthenticated && <Link to="/welcome">Home</Link>}
                {isAuthenticated &&<Link to="/dashboard">Dashboard</Link>}
                {isAuthenticated &&<Link to="/add-card">Add Card</Link>}
                {isAuthenticated &&<Link to="/recommendations">Recommendations</Link>}
                {isAuthenticated &&<Link to="/notifications">Notifications</Link>}
                {isAuthenticated &&<Link to="/profile">Profile</Link>}
            </nav>
            <div className="header-right">
                <div className="logout">
                    {isAuthenticated &&<Link to="/logout" onClick={logout}>Logout</Link>}
                </div>
            </div>
        </header>
    );
}