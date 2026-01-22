import React from "react";
import logo from './assets/chatgptimg6.png';
import './styling.css';
import { Link } from "react-router-dom";

function Navbars() {
    return (
        <>
            <div className="NavBarsection">
                <div className="left-img">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="left">
                    <h1>Career Guidance</h1>
                </div>
                <div className="right">
                    <nav>
                        <ul>
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/careerpath'}>Career Path</Link>
                            </li>
                            <li>
                                <Link to={'/govtpath'}>Govt path</Link>
                            </li>
                            <li>
                                <Link to={'/about'}>About</Link>
                            </li>
                            <li>
                                <Link to={'/login'}>Login</Link>
                            </li>
                            <li>
                                <Link to={'/registration'}>Register</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>

    )
}
export default Navbars;