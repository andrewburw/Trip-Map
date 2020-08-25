import React, { Component } from 'react';
import Logo from '../img/trip.png';

class LoginPage extends Component {
         


  render(){
      
    
    
    return(
        <div className="hero is-primary is-large">
      <div className="hero-body login-main  ">
        <h1 className="title has-text-centered is-size-2">Login</h1>
        <div className="columns is-centered ">
          <div className="column is-one-third">
            <div className="notification is-light">
              <figure className="image container is-96x96">
              <img src={Logo} alt="Manage your trips" width="50" height="50" />
              </figure>
              <div className="field">
                <label className="label">Name</label>
                <p className="control has-icons-left has-icons-right">
                  <input className="input" type="email" placeholder="Email" />
                  <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <label className="label">Password:</label>
                <p className="control has-icons-left">
                  <input className="input" type="password" placeholder="Password" />
                  <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>


              <div className="notification is-danger">Server Error</div>
              <a className="button is-info is-rounded is-outlined " href="1">Login</a>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
    }
}

export default  LoginPage;
