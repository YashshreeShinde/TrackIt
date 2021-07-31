import React, { Component } from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import WildFire from './Wildfire'
import Weather from './Weather'
 require('dotenv').config()
 

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Weather}/>
      <Route path='/wildfire' component={WildFire}/>
     
     
      </Switch>
       
      </div>
      </BrowserRouter>
    )
  }
}



export default App;