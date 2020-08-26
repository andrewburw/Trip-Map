import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Polyline,Marker, Popup} from 'react-leaflet'
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


class ViewMap extends Component {
   


  render(){
      
   
    
    return(
        <div className="column is-main-content" >
            <h1 className="title is-5" style={{'marginTop': '1rem'}}>View Map</h1>
          <hr />
          <div className="level">
  
  <div className="level-left">
    <div><span className="title is-5">{this.props.location.state.data.tripName} </span> 
    <small>@{this.props.location.state.data.tripAuthor} </small> <small>{this.props.location.state.data.dateAdded}</small>
   
    </div>
   
   
  </div>
  
 <div className="level-right">
 <p className="is-size-7 is-family-monospace">Length - <span className="has-text-weight-bold">{this.props.location.state.data.tripDistance}km </span>,
 Raiting - <span className="has-text-weight-bold">{this.props.location.state.data.tripRate} </span>,
 Transport - <span className="has-text-weight-bold">{this.props.location.state.data.tripBy}</span></p>

</div>
</div>
<span></span>
<div>

<Map
    center={this.props.location.state.data.tripRoute[0]}
    zoom={13}
   
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
   <Polyline key={124} positions={this.props.location.state.data.tripRoute} color={'red'} />

 { Array.from(this.props.location.state.data.tripStops).map((item, i) => {

return  (  <Marker key={Math.random()}  position={item['coordinates']}>
            <Popup>
            <div className="card">
 
  <div className="card-content">
    <div className="content">
      <h1 className="title is-4">{item['title']}</h1>
      <p className="has-text-weight-semibold">User Raiting: {item['raiting']}</p>
      <p className="has-text-weight-semibold">User Comment:</p>
      <p> {item['comment']}</p>
      <br />
      <time dateTime="2016-1-1">11:09 PM - 1 Jan 2020</time>
    </div>
  </div>
 
  </div>
            </Popup>
           </Marker>)

})  }
 { Array.from(this.props.location.state.data.tripComents).map((item, i) => {

return  (  <Marker key={Math.random()}  position={item['coordinates']}>
             <Popup> <div className="card">

             <div className="card-content">
                <div className="content">
                    <h1 className="title is-4">User Comment</h1>
                       <p> {item['comment']}</p>
                        <br />
                  
                </div>
              </div>

</div></Popup>
           </Marker>)

})}




</Map>
<br />

<p  className="is-size-6"> {this.props.location.state.data.tripDescrp}</p>
</div>

   </div> 
  );
    }
}

export default  ViewMap;
