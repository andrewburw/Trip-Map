import React, { Component } from 'react';
import {Link,} from "react-router-dom";


class ViewTrips extends Component {
  constructor(props) {
    super(props);
     this.state = {
          data: this.props.data


      }
  }


  render(){
      
   
    
    return(
        <div className="column is-main-content" >
            <h1 className="title is-5" style={{'marginTop': '1rem'}}>View All Trips</h1>
          <hr />
          { Array.from(this.props.data || []).map((item, i) => {

return  (<article className="media" key={Math.random()}>
<figure className="media-left">
  <p className="image is-64x64">
    <img src="https://bulma.io/images/placeholders/128x128.png" alt="test" />
  </p>
</figure>
<div className="media-content">
  <div className="content">
      <div>
        
      <span className="title is-5">{item['tripName']}</span> <small>@{item['tripAuthor']}</small> <small>{item['dateAdded']}</small>
      <br />
      <span className="is-size-6 is-family-monospace">Raiting - {item['tripRate']}</span>
      <br />
      <span className="is-size-6 is-family-monospace">Length - {item['tripDistance']}km</span>
      <br />
      <span className="is-size-6 is-family-monospace">By - {item['tripBy']}</span>
      <br />
       
        <p style={{'marginTop':'0.5rem'}}> {item['tripDescrp']}</p>
      
     
    </div>
   
     
  </div>

</div>
<div className="media-right">
<Link to={{ pathname: '/viewmap', state: { data: 'test'} }} ><button  className="button is-info is-small">View Map</button></Link>
</div>
</article>
  )

})}
         
   </div> 
  );
    }
}
// <Link to={{ pathname: '/dashboard/viewmap', state: { data: this.props.data[i]} }} ><button  className="button is-info is-small">View Map</button></Link>
export default  ViewTrips;
