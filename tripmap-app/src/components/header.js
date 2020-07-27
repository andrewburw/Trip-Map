import React, { Component } from 'react';
import Logo from './img/trip-logo.png';


class Header extends Component {

    state={}


  render() {
      
    
    return(
        <nav className="navbar is-transparent">
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
                <a className="navbar-item" href="/">
                  Overview
                </a>
                <a className="navbar-item" href="/">
                  Modifiers
                </a>
                <a className="navbar-item" href="/">
                  Columns
                </a>
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
            <div className="buttons"> <button className="button is-dark is-outlined">Login</button></div>
          </div>
        </div>
      </nav> 
    
  );
  }
}

export default Header;
