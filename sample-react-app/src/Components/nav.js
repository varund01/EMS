import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

import '../App.css'
export const Nav = () => {
    const onLogoutHandler = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div className="navbar-styling">

            <ul className="w-75 nav-item d-flex flex-wrap justify-content-around">
                <li><img src="/sureify_logo.ico" className="logo" ></img><span>Sureify</span></li>
                
                <NavLink exact to="/home" activeClassName="active">
                    <li ><a href="#"> Home  </a></li>
                </NavLink>  
                <NavLink exact to="/articles" activeClassName="active">
                    <li> <a href="#"> Articles </a></li>
                </NavLink>  
                <NavLink exact to="/feedback" activeClassName="active">
                    <li> <a href="#"> Feedback </a></li>
                </NavLink>
                {/* <NavLink exact to="/login" activeClassName="active">
                    <li> <a href="#">Login</a> </li>
                </NavLink> */}
                <NavLink exact to="/profile" activeClassName="active">
                <li> <a href="#">Profile</a> </li>
                </NavLink>
                <p className="logout" onClick={onLogoutHandler}>Logout</p>
            </ul>
        </div>
    )
}
