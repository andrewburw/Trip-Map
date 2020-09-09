import React, { Component} from 'react';
import { Link } from "react-router-dom";
import map_svg from "./svg_icons/map.svg";
import map_svg2 from "./svg_icons/map2.svg";
import bike_svg from "./svg_icons/bike.svg";
import user_svg from "./svg_icons/user.svg";
import map_img from "./img/draw_map.png";
import user2_svg from "./svg_icons/user2.svg";
import LogoWhite from '../img/tripWhite.png';


class MainPage extends Component {
  
   scroll = () => {
    const section = document.querySelector( '#info' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
  render() {
      
    
    return(
      <div>
        <section className="hero is-success is-fullheight  is-bold">
        <div className="hero-body bg-main">
          <div className="container has-text-centered ">
          <figure className="image container is-96x96 is-inline-block imageLogoWhite">
              <img src={LogoWhite} alt="Manage your trips" />
              </figure>
            <h1 className="title is-1">
             Welcome to Trip Map
            </h1>
            <h2 className="subtitle">
              Manage your Adventures
            </h2>
           <div className="buttons is-centered">
          
              <button className="button is-light is-outlined" onClick={this.scroll} >View Info</button>
              <Link to="/registerpage"><button className="button is-light is-outlined">Join US</button></Link>
              </div>
          </div>
        </div>
      </section>   
      <section className="section">
      <div className="container">
      <div className="features-title has-text-centered">
              <h1 className="title is-2 is-bold">Check Hundreds of Trip Reports in one place</h1>
              <p className="subtitle">Our simple service allows you to quickly find a trip</p>
             
             
              <br />
          </div>
       <div className="section">
          <div id="info" className="columns is-centered">

<div className="column is-5">
  
  <div className="box">

    <div className="card-content">
    <div className="media">
    <div className="media-left">
    <div className="card-image ">
    
      <figure className="image is-128x128">
      <img src={map_svg} alt="React Logo" />
      </figure>
    </div>
      </div>
      <div className="media-content">
      <h3 className="title is-5">Trips</h3>
      <p>Draw a map of your adventures. Mark the areas with the most interesting places. Mark the best camping sites.</p>
      </div>
    </div>
    </div>
  </div>
</div>


<div className="column is-5">
  
  <div className="box">

    <div className="card-content">
    <div className="media">
    <div className="media-left">
    <div className="card-image ">
    
      <figure className="image is-128x128">
      <img src={map_svg2} alt="React Logo" />
      </figure>
    </div>
      </div>
      <div className="media-content">
      <h3 className="title is-5">Maps </h3>
      <p>Plan your trip. Mark your stops and overnight stays. Share your plans with your friends.</p>
      </div>
    </div>
    </div>
  </div>
</div>
</div>




<div className="columns is-centered">
<div className="column is-5">
  
  <div className="box">

    <div className="card-content">
    <div className="media">
    <div className="media-left">
    <div className="card-image ">
    
      <figure className="image is-128x128">
      <img src={bike_svg} alt="React Logo" />
      </figure>
    </div>
      </div>
      <div className="media-content">
      <h3 className="title is-5">Equipment</h3>
      <p>Choose the inventory with which you make your travels. It can be a boat or a bike or just a walk.</p>
      </div>
    </div>
    </div>
  </div>
</div>


<div className="column is-5">
  
  <div className="box">

    <div className="card-content">
    <div className="media">
    <div className="media-left">
    <div className="card-image ">
    
      <figure className="image is-128x128">
      <img src={user_svg} alt="React Logo" />
      </figure>
    </div>
      </div>
      <div className="media-content">
      <h3 className="title is-5">Users </h3>
      <p>Check out the trips of other users. Perhaps you will find those that you would like to take.Share your own trips.</p>
      </div>
    </div>
    </div>
  </div>
</div>
</div>

       </div>

     </div>
     
  </section>  
  <section className="section">
      <div className="container">
              <div className="features-title has-text-centered">
                 <h1 className="title is-2 is-bold">Try It Yourself</h1>
                   <p>Our Draw Map function makes everything simple</p>
                 <br />
              </div>



 <div className="section">
  <div className="container">
    <div className="columns is-centered">
               <div className="column is-5">
                  <div className="has-text-right"  >

                    <p className=""><strong>Just click draw and draw a line of your route. Click to mark the stop that you liked. 
                      Or I will comment on an interesting place. Save and share with your friends.Check the length of the route is it too short?</strong></p>
                  </div>
               </div>


       <div className="column is-5">
          <figure className="image">
             <img src={map_img} alt="Map" />
          </figure>

        </div>
    </div>
  </div>
</div>
</div>
     
  </section>  


   <section className="section">

   <div className="pricing" id="pro">
          <div className="pricing-title has-text-centered">
              <h3 className="title is-3 is-bold">It's Free, but there's more...</h3>
              <p>Discover all the best places for adventure</p>
          </div>
          <br />
          <div className="columns is-vcentered">
              <div className="column is-4 is-offset-2">
                  <div className="side-text">
                      <h3 className="title is-4 is-bold">Discover New Features</h3><br />
                      <p>
                      Stop wasting time looking for useless route information.Get instant results with our free service..  
                      </p>
                      <br />
                      <p>
                      Stop writing your <strong>Plans</strong> down on paper, saving screenshots from your screen.
                      </p>
                  </div>
              </div>
              <div className="column  is-4">
                  <div className="box has-text-centered">
                    <div className="box-content" style={{ 'justifyContent': 'center'}}>
                    
                  <figure className="image  is-inline-block is-128x128">
                     <img src={user2_svg} alt="React Logo" />
                    </figure>

                      <div className="list">
                          <h4><strong>Register</strong></h4>
                          <h3><strong>Draw</strong></h3>
                          <h3><strong>Share</strong></h3>
                      </div>
                      <br />
                      <Link to="/registerpage">   <button className="button is-primary"> Register an account</button></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
   </section>


</div>

  );
  }
}

export default MainPage;
