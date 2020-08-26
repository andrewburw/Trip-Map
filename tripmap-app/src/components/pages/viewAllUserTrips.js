import React, { Component } from 'react';
import {Link,} from "react-router-dom";

class AllUserTrips extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ''
          
          };
  
  
      }



 componentDidMount () {
     fetch('http://localhost:3001/api/trips/null', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
      
    }
  
    }).then(response => response.json()
       
    ).then(data => {
      console.log(data)
      this.setState({data: data})
     if (data.errorStatus === true) {
      
     //  this.setState({serverError: true});
     //  this.setState({serverMsg: data.messege});
  
  
         }  else {
           // if everything is ok (no errors.)
 
     this.setState({serverError: false});
     this.setState({serverMsg: 'Register success!'});
     
 
 
 
       }
    
 
    }).catch(err => {
       console.error(err)
       this.setState({serverError: true});
       this.setState({serverMsg: err.toString()});
    });
 
}


  render() {
      
    
    return(
     <div className="container">
<div className="column is-main-content" >
            <h1 className="title is-5" style={{'marginTop': '1rem'}}>View All Trips</h1>
          <hr />
          { Array.from(this.state.data || []).map((item, i) => {

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
<Link to={{ pathname: '/viewmap/' + this.state.data[i]._id, state: { data: this.state.data[i],recivedDataFromComponent: true} }} ><button  className="button is-info is-small">View Map</button></Link>
</div>
</article>
  )

})}
         
   </div> 
   </div>
    
    
  );
  }
}

export default AllUserTrips ;