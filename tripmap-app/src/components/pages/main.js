import React, { Component } from 'react';
import { Link } from "react-router-dom";


class MainPage extends Component {

    


  render() {
      
    
    return(
        <section className="hero is-success is-fullheight  is-bold">
        <div className="hero-body bg-main">
          <div className="container has-text-centered ">
            <h1 className="title is-1">
             Welcome to Trip Map
            </h1>
            <h2 className="subtitle">
              Manage your Adventures
            </h2>
           <div className="buttons is-centered">
              <button className="button is-light is-outlined">Log in</button>
              <Link to="/dashboard"><button className="button is-light is-outlined">Join US</button></Link>
              </div>
          </div>
        </div>
      </section>     
    
  );
  }
}

export default MainPage;
