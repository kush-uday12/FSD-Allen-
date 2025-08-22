import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { userContext } from "../context/globalContext";

function NavBar(){
    const navigate = useNavigate();
    const { userName, logout } = useContext(userContext)
    const handleLogout = ()=>{
        logout()
    };
    return(
            <nav className="navbar bg-dark navbar-expand-md navbar-dark">
            <Link to="#" className="navbar-brand">
            <img src="/images/Leonida_Keys_04.jpg" width="80px" alt="" />
            </Link>

            <button className="navbar-toggler" data-toggle="collapse" data-target="#myDiv">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="myDiv">
            <ul className="navbar-nav">
            
                <li className="nav-item"><Link className="nav-link" to="/dash/home">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/dash/about">About Us</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/dash/view">Show Users</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/dash/add">Add User</Link></li>

                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#">Hooks Demo</Link>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/dash/hook1">Hook Demo 1</Link>
                        <Link className="dropdown-item" to="/dash/hook2">Hook Demo 2</Link>
                        <Link className="dropdown-item" to="/dash/hook3">Hook Demo 3</Link>
                        <Link className="dropdown-item" to="/dash/hook4">Hook Demo 4</Link>
                        <Link className="dropdown-item" to="/dash/hook5">Hook Demo 5</Link>   
                        <Link className="dropdown-item" to="/dash/hook6">Hook Demo 6</Link>
                        <Link className="dropdown-item" to="/dash/hook7">Hook Demo 7</Link>                      
                    </div>
                </li>
            </ul>
            <span className="navbar-text ml-auto">
                Welcome <b>{ userName }</b> | <button onClick={handleLogout} className="btn btn-sm btn-warning">Logout</button>
            </span>
            </div>
        </nav>
    )
}

export default NavBar