import React from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Card from './components/profile/Card'
import {Nav} from './components/nav'
import {Index} from './components/home/Index'
import {Articles} from './components/articles/Articles'
import {Login} from './components/Login'
import {Signup} from './components/Signup'
import {FeedBack} from './components/FeedBack'
import {SingleArticle} from './components/articles/SingleArticle'
import './App.css';

function App() {
  return (
    <div className="App">
         <Router>

      <Nav />  
         <Switch>
				<Route path="/" exact component={Index}/>
				<Route path="/feedback" component={FeedBack}/>
        <Route path="/articles" component={Articles}/>
				<Route path="/login" component={Login}/>
				<Route path="/signup" component={Signup}/>
				<Route path="/profile" component={Card}/>	
        
				<Route path="/single/:id" component={SingleArticle}/>		
			</Switch>
      </Router>    
    </div>
  );
}

export default App;
