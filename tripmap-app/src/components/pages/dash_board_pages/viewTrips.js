import React, { Component } from 'react';
import {Link} from "react-router-dom";



class ViewTrips extends Component {
         


  render(){
      
    
    
    return(
        <div className="column is-main-content" >
            <h1 className="title is-5" style={{'marginTop': '1rem'}}>View All Trips</h1>
          <hr />
          <article className="media">
<figure className="media-left">
  <p className="image is-64x64">
    <img src="https://bulma.io/images/placeholders/128x128.png" alt="test" />
  </p>
</figure>
<div className="media-content">
  <div className="content">
      <div>
    
      <span className="title is-5">Jurkalne - Riga</span> <small>@johnsmith</small> <small>31m</small>
      <br />
      <span className="is-size-6 is-family-monospace">Raiting - 7</span>
      <br />
      <span className="is-size-6 is-family-monospace">Length - 20km</span>
      <br />
      <span className="is-size-6 is-family-monospace">By - Boat</span>
      <br />
       
        <p style={{'marginTop':'0.5rem'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque
           tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
         </p>
      
     
    </div>
   
     
  </div>

</div>
<div className="media-right">
<button  className="button is-info is-small">View Trip Map</button>
</div>
</article>
<article className="media">
<figure className="media-left">
  <p className="image is-64x64">
    <img src="https://bulma.io/images/placeholders/128x128.png" alt="test" />
  </p>
</figure>
<div className="media-content">
  <div className="content">
      <div>
    
      <span className="title is-5">Jurkalne - Riga</span> <small>@johnsmith</small> <small>31m</small>
      <br />
      <span className="is-size-6 is-family-monospace">Raiting - 7</span>
      <br />
      <span className="is-size-6 is-family-monospace">Length - 20km</span>
      <br />
      <span className="is-size-6 is-family-monospace">By - Boat</span>
      <br />
       
        <p style={{'marginTop':'0.5rem'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque
           tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
         </p>
      
     
    </div>
   
     
  </div>

</div>
<div className="media-right">
<button  className="button is-info is-small"><Link to={{ pathname: '/dashboard/viewmap', state: { foo: 'bar'} }} ><span className="customMenuLbl">Add New Trip</span></Link></button>
</div>
</article>

   </div> 
  );
    }
}
//to={{ pathname: '/route', state: { foo: 'bar'} }}
//to="/dashboard/viewmap"
export default  ViewTrips;
