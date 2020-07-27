import React, { Component } from 'react';



class Footer extends Component {

    state={}


  render() {
      
    
    return(
        <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="is-active"><a href="/">Overview</a></li>
              <li><a href="/">Modifiers</a></li>
              <li><a href="/">Grid</a></li>
              <li><a href="/">Elements</a></li>
              <li><a href="/">Components</a></li>
              <li><a href="/">Layout</a></li>
            </ul>
          </div>
        </nav>
      </div>     
    
  );
  }
}

export default Footer;
