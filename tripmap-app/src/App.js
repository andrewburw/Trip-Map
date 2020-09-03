import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch
 
} from "react-router-dom";

import MainPage from './components/pages/main';
import LoginPage from './components/pages/loginPage';
import RegisterPage from './components/pages/registerPage';
import Trips from './components/pages/viewAllUserTrips';
import ViewUnregistredMap from './components/pages/viewMap_unregistred';
import UserPage from './components/pages/viewUser_unrigistred';
import Header from './components/header';
import Footer from './components/footer';
import PrivateRoute from './components/pages/privateRoute';
import PublicRoute from './components/pages/publicRoute';
import './App.css';


class App extends Component {

  
   render(){
     
   


  return (
   

<Router>
   <Header /> 
      <Switch>
      <PublicRoute restricted={false} component={RegisterPage} path="/registerpage" exact />
      <PublicRoute restricted={false} component={ViewUnregistredMap} path="/viewmap/:id" exact />
      <PublicRoute restricted={false} component={UserPage} path="/user/:id" exact />
      <PublicRoute restricted={false} component={Trips} path="/trips" exact />
      <PublicRoute restricted={false}  component={LoginPage} path="/loginpage" exact />
      <PublicRoute restricted={false} component={MainPage} path="/" exact />
      <PrivateRoute   path="/dashboard"   /> 
     </Switch>
     
   <Footer />
</Router>
    
  );
  }
}

export default App;





/*

 <Switch>
          <Route exact path="/" component={MainPage} />
       {this.state.authStatus ?  <Route path="/dashboard" component={DashBoard} /> : '' }   
          <Route path="/loginpage">
              <LoginPage  auth={()=>{this.setState({authStatus: true})}}/>
          </Route>
          <Route path="/registerpage" component={RegisterPage} />
          <Route path="/trips"  component={Trips} />
          <Route path="/viewmap/:id" component={ViewUnregistredMap} />
          <Route path="/user/:id" component={UserPage} />
     </Switch>

*/