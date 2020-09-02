import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import DashBoard from './components/pages/dashBoard';
import MainPage from './components/pages/main';
import LoginPage from './components/pages/loginPage';
import RegisterPage from './components/pages/registerPage';
import Trips from './components/pages/viewAllUserTrips';
import ViewUnregistredMap from './components/pages/viewMap_unregistred';
import UserPage from './components/pages/viewUser_unrigistred';
import Header from './components/header';
import Footer from './components/footer';

import './App.css';


class App extends Component {
  state={
    authStatus: false
  
  }

   render(){
  return (
    

<Router>
   <Header auth={()=>{this.setState({authStatus: true})}} /> 
      <Switch>
          <Route exact path="/" component={MainPage} />
       {this.state.authStatus ?  <Route path="/dashboard" component={DashBoard} /> : '' }   
          <Route path="/loginpage" component={LoginPage} />
          <Route path="/registerpage" component={RegisterPage} />
          <Route path="/trips"  component={Trips} />
          <Route path="/viewmap/:id" component={ViewUnregistredMap} />
          <Route path="/user/:id" component={UserPage} />
     </Switch>
   <Footer />
</Router>
    
  );
  }
}

export default App;
