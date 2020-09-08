import React, { Component } from 'react';
import Logo from './img/trip-logo.png';
import { Link } from "react-router-dom";
import LoginContext from "../loginContext"


class Header extends Component {
       
  constructor(props) {
    super(props);
    this.state = {
        redirectLogout: false
       
      
      };
   

  }
  static contextType = LoginContext

  
   

   
   signOut = () => {
   
    localStorage.removeItem('token');
    window.location.reload()
    
   
   }
  

  render() {
    const user = this.context
    let burgerMenu =  <IsNotLogedMenu />

        let loginBtn = <div className="buttons">  <Link to="/loginpage"><button className="button is-dark is-outlined">Login</button></Link></div>
      if (user.user.loggedIn) {
        loginBtn = <div className="buttons"><button className="button is-dark is-outlined" onClick={this.signOut}> Log Out</button></div>
      } else if (localStorage.getItem('token') !== null){
        loginBtn = <div className="buttons"><button className="button is-dark is-outlined" onClick={this.signOut}> Log Out</button></div>

      }

     if (user.user.loggedIn) {
      burgerMenu = <IsLogedMenu />
     }else if (localStorage.getItem('token') !== null){

      burgerMenu = <IsLogedMenu />

     }
      
    return(
        <nav className="navbar is-transparent ">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={Logo} alt="Manage your trips" width="120" height="50" />
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>
            <a className="navbar-item" href="/" >
              Info
            </a>
            <Link  className="navbar-item" to="/trips"> 
              User Trips
            </Link>
           
          </div>
      
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link" >
                Menu
              </div>
              {burgerMenu}
             
            </div>
           {loginBtn}
          </div>
        </div>
      </nav> 
    
  );
  }
}

function IsNotLogedMenu () {



  return (
    <div className="navbar-dropdown is-right">
         <Link to="/trips"><div className="navbar-item" >
        View User Trips
      </div></Link>
      <Link to="/registerpage"><div className="navbar-item" >
        Register
      </div></Link>
      <Link to="/loginpage"><div className="navbar-item" >
        Login
      </div></Link>
    </div>
  )
  }
function IsLogedMenu() {



  return (
    <div className="navbar-dropdown is-right">
    <Link to="/trips"><div className="navbar-item" >
   View User Trips
 </div></Link>
 <Link to="/dashboard"><div className="navbar-item" >
   Dash Board
 </div></Link>
 
 </div>
  )
}






export default Header;
