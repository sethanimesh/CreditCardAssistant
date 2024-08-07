import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';
import './styles/header.css';


export default function HeaderComponent(){
    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <nav className="nav-menu">
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/add-card">Add Card</Link>
                <Link to="/recommendations">Recommendations</Link>
                <Link to="/notifications">Notifications</Link>
                <Link to="/profile">Profile</Link>
            </nav>
            <div className="header-right">
                <div className="logout">
                    <Link to="/logout">Logout</Link>
                </div>
            </div>
        </header>
    );
}