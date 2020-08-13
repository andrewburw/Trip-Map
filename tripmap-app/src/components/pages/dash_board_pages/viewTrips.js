import React, { Component } from 'react';
import {Link} from "react-router-dom";



class ViewTrips extends Component {
  constructor(props) {
    super(props);
     this.state = {
          data: [{
             author: 'Andrew',
             title: 'Jurkalne - Gauja',
             rating: 6,
             by: 'boat',
             comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
             date: '2016-1-1',
             routeLength: 1.53,
             route: [[57.1431,384.6495],[57.134,384.6465],[57.1266,384.6426],[57.1197,384.6378],[57.1278,384.6132]],
             stopData: [{comment: "test test",coordinates: [57.1265, 384.6498],id: "_9cdqe9ks7", raiting: "4",
             title: "Test 1"},{comment: "test hxf",
             coordinates:  [57.1308, 384.6615],
             id: "_qe7ro7dpe",
             raiting: "5",
             title: "test 2 "},{comment: "test 4 test",
             coordinates:  [57.1293, 384.668],
             id: "_mognki453",
             raiting: "4",
             title: "test 5 "}],
             comentData: [{comment: "commnt test1",
             coordinates: [57.1377, 384.6575],
             id: "_piqxkzq2e"},{comment: "commnt test",
             coordinates:  [57.1568, 384.652],
             id: "_cqbie0r4c"}]


          }]


      }
  }


  render(){
      
    
    
    return(
        <div className="column is-main-content" >
            <h1 className="title is-5" style={{'marginTop': '1rem'}}>View All Trips</h1>
          <hr />
          { Array.from(this.state.data).map((item, i) => {

return  (<article className="media" key={Math.random()}>
<figure className="media-left">
  <p className="image is-64x64">
    <img src="https://bulma.io/images/placeholders/128x128.png" alt="test" />
  </p>
</figure>
<div className="media-content">
  <div className="content">
      <div>
        
      <span className="title is-5">{item['title']}</span> <small>@{item['author']}</small> <small>31m</small>
      <br />
      <span className="is-size-6 is-family-monospace">Raiting - {item['rating']}</span>
      <br />
      <span className="is-size-6 is-family-monospace">Length - {item['routeLength']}km</span>
      <br />
      <span className="is-size-6 is-family-monospace">By - {item['by']}</span>
      <br />
       
        <p style={{'marginTop':'0.5rem'}}> {item['comment']}</p>
      
     
    </div>
   
     
  </div>

</div>
<div className="media-right">
<Link to={{ pathname: '/dashboard/viewmap', state: { data: this.state.data[i]} }} ><button  className="button is-info is-small">Add New Trip</button></Link>
</div>
</article>
  )

})}
         
   </div> 
  );
    }
}
//to={{ pathname: '/route', state: { foo: 'bar'} }} position={item['coordinates']}
//to="/dashboard/viewmap"
export default  ViewTrips;
