import React from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();


    return (
        <div className="navbar">
            <img src={logo} alt="" width="130px" height="60" />
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/jobs">Jobs</NavLink>
                </li>
            </ul>
            <button onClick={() => navigate("/contact", { replace: true })}>Get Started</button>
        </div>
    )
}

export default Navbar