import React from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import { Nav } from './components/nav'

export const NavRoute = ({ component: Component , ...rest})=>{
    return (
        <Route {...rest}  component={(props)=>(
            <div>
                <Nav /> {/* HEADER ALWAYS VISIBLE */}
                <Component {...props} />
            </div>
        )}
        />
    )
}

