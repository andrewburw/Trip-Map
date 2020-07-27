import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Polyline } from 'react-leaflet'
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
class DashMain extends Component {
    constructor() {
        super();
        this.state = {
            trip: []
        };
    }

clickMap = (e) =>{
    // draw line
    let coord = e.latlng;
    let lat = coord.lat;
    let lng = coord.lng;
    let temp = [...this.state.trip];

    temp.push([Number(lat.toFixed(4)),Number(lng.toFixed(4))])

    
    this.setState({'trip':temp})
}

buttonClickDelLine = () => {
    // delete last line 
    let temp = [...this.state.trip];
    temp.pop();
    this.setState({'trip':temp})
   
}

buttonClickCancel = () => {
   //delete all route
    this.setState({'trip':[]})


}
  render() {
  
  
 
    return(
        
<div className="column is-main-content" >
  <h1 className="title is-5" style={{'marginTop': '1rem'}}>Draw your trip</h1>
  
  <hr />
  <div className="level">
    <div className="level-left">
      <div className="buttons are-small">
        <button className="button is-success">Save Trip</button>
        <button onClick={this.buttonClickCancel} className="button is-link">Cancel</button>
      </div>
    </div>
   <div className="level-right">
     <div className="buttons are-small">
       <button className="button">Test</button>
       <button className="button">Sest</button>
       <button className="button">est</button>
       
       <button className="button">Normal</button>
       <button className="button is-danger" onClick={this.buttonClickDelLine }>Delet Last Line</button>
    </div>
  </div>
  </div>
 <div>
 
 <Map
      center={[57.1273,384.6539]}
      zoom={13}
      onClick={this.clickMap}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      
        <Polyline key={124} positions={this.state.trip}  />
      
    </Map>
    

 </div>
</div>



    
  );
  }
}

export default DashMain;
