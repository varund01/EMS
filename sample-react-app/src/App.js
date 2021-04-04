import React from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'


import Card from './Components/profile/Card'
import {Home} from './Components/home/Home'
import {Articles} from './Components/articles/Articles'
import Login from './Components/login/Login'
import {FeedBack} from './Components/FeedBack'
import {SingleArticle} from './Components/articles/SingleArticle'
import { NavRoute } from './NavRoute'
import { LoginRoute } from './LoginRoute'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
				  <NavRoute path="/home" exact component={Home}/>
				  <NavRoute path="/feedback" component={FeedBack}/>
          <NavRoute path="/articles" component={Articles}/>
				  <LoginRoute path="/login" component={Login}/>
				  <NavRoute path="/profile" component={Card}/>	
				  <NavRoute path="/single/:id" component={SingleArticle}/>		
			  </Switch>
      </Router>    
    </div>
  );
}

export default App;
