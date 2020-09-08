import React, { Component } from 'react';
import Logo from './img/trip.png';


class Footer extends Component {

    state={}


  render() {
      
    
    return(
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
          <figure className="image container is-96x96 is-inline-block ">
              <img src={Logo} alt="Manage your trips" />
              </figure>
            <p>
           
            <a href="https://bulma.io">
                <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" />
                    </a> <br />
        
         <strong>Trip Map</strong> by Andrew (hornespill@gmail.com) 
         
         <br /> <strong> Logos &amp; banners</strong> by Andrew (hornespill@gmail.com) 
         
         <br /> Icons from <a href="https://materialdesignicons.com/" target="_blank" rel="noopener noreferrer"> Material Design Icons</a>.
      <br />
       COPYRIGHT Andrew  ® ALL RIGHT RESERVED
    </p>
    </div>
    </div>
    </footer>
    
  );
  }
}

export default Footer;
