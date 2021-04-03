import React from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'

export const LoginRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            component={(props)=> (<Component {...props} />)}
        />
    );
};
