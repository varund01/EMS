import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

import '../App.css'
export const Nav = () => {
    
    return (
        <div className="navbar-styling">

            <ul className="w-75 nav-item d-flex flex-wrap justify-content-around">
                <NavLink exact to="/" activeClassName="active">
                    <li ><a href="#" s> Home  </a></li>
                </NavLink>
                <NavLink exact to="/articles" activeClassName="active">
                    <li> <a href="#"> Articles </a></li>
                </NavLink>  
                <NavLink exact to="/feedback" activeClassName="active">
                    <li> <a href="#"> Feedback </a></li>
                </NavLink>
                <NavLink exact to="/login" activeClassName="active">
                    <li> <a href="#">Login</a> </li>
                </NavLink>
                <NavLink exact to="/signup" activeClassName="active">
                <li style={{display:'block',float:'right'}}> <a href="#">Signup</a> </li>
                </NavLink>
                <NavLink exact to="/profile" activeClassName="active">
                <li> <a href="#">Profile</a> </li>
                </NavLink>
            </ul>
        </div>
    )
}
