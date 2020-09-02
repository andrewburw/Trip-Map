import React, { Component } from 'react';
import Logo from './img/trip-logo.png';
import { Link } from "react-router-dom";

class Header extends Component {
       
  constructor(props) {
    super(props);
    this.state = {
        authStatus: this.props.auth
      
      };


  }
    
      componentDidMount() {
        // check if user alrady loged in 
         const auth = 'Bearer ' + localStorage.getItem('token');
       
         fetch('http://localhost:3001/api/auth/check', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': auth
          },
          body: JSON.stringify({test: 'test'})
        
        }).then(response => response.json()
           
        ).then(data => {
            
           if (data.status) { // if logged in 
           
           
              this.props.auth(true)
              this.setState({authStatus: true});
            
             
           } else {
     
             this.setState({authStatus: false});
             localStorage.removeItem('token');
             localStorage.removeItem('user_name');
             
           }
         
         
        }).catch(err => {
           console.error(err)
           
        });
     
     }
   
   
   
   signOut = () => {
   
     localStorage.removeItem('token');
     window.location.reload();
   
   }
  render() {
       
        let loginBtn = <div className="buttons">  <Link to="/loginpage"><button className="button is-dark is-outlined">Login</button></Link></div>
      if (this.state.authStatus) {
        loginBtn = <div className="buttons"><button className="button is-dark is-outlined" onClick={this.signOut}> Log Out</button></div>
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
            <a className="navbar-item" href="/">
              item1
            </a>
            <a className="navbar-item" href="/">
              item2
            </a>
            <a className="navbar-item" href="/">
              item3
            </a>
          </div>
      
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/">
                Docs
              </a>
              <div className="navbar-dropdown is-right">
              <Link to="/registerpage"><div className="navbar-item" href="/">
                  Register
                </div></Link>
                <Link to="/trips"><div className="navbar-item" href="/">
                  View User Trips
                </div></Link>
                <Link to="/dashboard"><div className="navbar-item" href="/">
                  Dash Board
                </div></Link>
                <a className="navbar-item" href="/">
                  Layout
                </a>
                <a className="navbar-item" href="/">
                  Form
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/">
                  Elements
                </a>
                <a className="navbar-item is-active" href="/">
                  Components
                </a>
              </div>
             
             
            </div>
           {loginBtn}
          </div>
        </div>
      </nav> 
    
  );
  }
}

export default Header;
