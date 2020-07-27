import React, { Component } from 'react';
import { Link } from "react-router-dom";


class MainPage extends Component {

    state={}


  render() {
      
    
    return(
        <section className="hero is-success is-fullheight-with-navbar  is-bold">
        <div className="hero-body bg-main">
          <div className="container has-text-centered ">
            <h1 className="title is-1">
             Welcome to Trip Map
            </h1>
            <h2 className="subtitle">
              Manage your Adventures
            </h2>
           
              <button className="button is-light is-outlined">Log in</button>
              <Link to="/dashboard"><button className="button is-link is-outlined">Join US</button></Link>
            
          </div>
        </div>
      </section>     
    
  );
  }
}

export default MainPage;
