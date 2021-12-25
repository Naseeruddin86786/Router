import React from "react";
import {Link} from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Skills from './Skills';
// import App from '../App';
import './NavBar.css';

const NavBar = () => {
    return(
        <div className="navbar">
        <ul>
            <li>
            <Link exact to='/'>Home</Link>
            <Link to='/Skills'>Skills</Link>
            <Link to='/About'>About</Link>
        </li>
    </ul></div>
        
    );
}

export default NavBar;