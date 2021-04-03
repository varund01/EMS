import React from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Card from './components/profile/Card'
import {Nav} from './components/nav'
import {Index} from './components/home/Index'
import {Articles} from './components/articles/Articles'
import Login from './components/login/Login'
import {Signup} from './components/Signup'
import {FeedBack} from './components/FeedBack'

import './App.css';
import { NavRoute } from './NavRoute'
import { LoginRoute } from './LoginRoute'

function App() {
  return (
    <div className="App">
         <Router>

        
         <Switch>
				<NavRoute path="/home" exact component={Index}/>
				<NavRoute path="/feedback" component={FeedBack}/>
                <NavRoute path="/articles" component={Articles}/>
				<LoginRoute path="/login" component={Login}/>
				<NavRoute path="/signup" component={Signup}/>
				<NavRoute path="/profile" component={Card}/>		
			</Switch>
      </Router>    
    </div>
  );
}

export default App;
