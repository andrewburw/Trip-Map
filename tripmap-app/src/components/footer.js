import React, { Component } from 'react';



class Footer extends Component {

    state={}


  render() {
      
    
    return(
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
        <a href="https://bulma.io"><img src="logomark11.png?dca2290ed90fba8f1d416fe42b52ce06" alt="Made with Bulma" width="64" /></a> <br /> <strong>Bulma Pro Theme
      </strong> by
      <a href="http://mubaidr.github.com" target="_blank"> Muhammad Ubaid Raza
      </a> <br /> Logos &amp; banners by <a href="https://github.com/jbeguna04">Jibbie R. Eguna</a> <br /> Icons from
      <a href="http://fontawesome.io/" target="_blank">Font Awesome
      </a>.
      <br /> The source code is licensed under
      <a href="http://opensource.org/licenses/mit-license.php" target="_blank">MIT
      </a>.
    </p>
    </div>
    </div>
    </footer>
    
  );
  }
}

export default Footer;
