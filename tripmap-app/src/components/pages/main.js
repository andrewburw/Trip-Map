import React, { Component } from 'react';
import { Link } from "react-router-dom";
import map_svg from "./svg_icons/map.svg";
import map_svg2 from "./svg_icons/map2.svg";
import bike_svg from "./svg_icons/bike.svg";
import user_svg from "./svg_icons/user.svg";
import map_img from "./img/draw_map.png";
import user2_svg from "./svg_icons/user2.svg";

class MainPage extends Component {

    


  render() {
      
    
    return(
      <div>
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
      <section className="section">
      <div className="container">
      <div className="features-title has-text-centered">
              <h1 className="title is-2 is-bold">Check Hundreds of Sources in One Search</h1>
              <p className="subtitle">Our powerful aggregated search makes everything simple</p>
             
             
              <br />
          </div>
       <div className="section">
          <div className="columns is-centered">

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
      <h3 className="title is-5">Government Registrars 3 </h3>
      <p>Check all 50 state departments (nationally) for existing business names, trademarks, and patents that may conflict.</p>
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
      <h3 className="title is-5">Government Registrars 3 </h3>
      <p>Check all 50 state departments (nationally) for existing business names, trademarks, and patents that may conflict.</p>
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
      <h3 className="title is-5">Government Registrars 3 </h3>
      <p>Check all 50 state departments (nationally) for existing business names, trademarks, and patents that may conflict.</p>
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
      <h3 className="title is-5">Government Registrars 3 </h3>
      <p>Check all 50 state departments (nationally) for existing business names, trademarks, and patents that may conflict.</p>
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
                   <p>Our powerful aggregated search makes everything simple</p>
                 <br />
              </div>



 <div className="section">
  <div className="container">
    <div className="columns is-centered">
               <div className="column is-5">
                  <div className="has-text-right"  >

                    <p className=""><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen boo</strong></p>
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
              <p>Unlock all the data surrounding your name</p>
          </div>
          <br />
          <div className="columns is-vcentered">
              <div className="column is-4 is-offset-2">
                  <div className="side-text">
                      <h3 className="title is-4 is-bold">Discover Our Pro Features</h3><br />
                      <p>
                      One time payment, no contracts or commitments. 100% money back guarantee if you are not satisfied.  
                      </p>
                      <br />
                      <p>
                      Every pro purchase comes with <strong>unlimited</strong> data access and updates for your company.
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
                          <h4>Formal Founder Pro</h4>
                          <h3>Pro Features</h3>
                          <h3>Pro Features</h3>
                      </div>
                      <br />
                      <button className="button is-primary">Test </button>
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
