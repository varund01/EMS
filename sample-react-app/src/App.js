import React from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'


import Card from './components/profile/Card'
import {Home} from './components/home/Home'
import {Articles} from './components/articles/Articles'
import Login from './components/login/Login'
import {FeedBack} from './components/FeedBack'
import {SingleArticle} from './components/articles/SingleArticle'
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
