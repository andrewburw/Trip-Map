import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import DashBoard from './components/pages/dashBoard';
import MainPage from './components/pages/main';
import LoginPage from './components/pages/loginPage';
import RegisterPage from './components/pages/registerPage';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    

        <Router>
<Header />
          <Switch>

          <Route exact path="/">
            <MainPage />
          </Route>


          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/loginpage">
            <LoginPage />
          </Route>
          <Route path="/registerpage">
            <RegisterPage />
          </Route>
        </Switch>

        <Footer />
          </Router>
    
  );
}

export default App;
