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
    constructor(props) {
        super(props);
         this.state = {
              data: [{
                 author: 'Andrew',
                 route: [[57.1431,384.6495],[57.134,384.6465],[57.1266,384.6426],[57.1197,384.6378],[57.1278,384.6132]],



              }]


          }
      }


  render(){
      
    console.log(this.props.location.state)
    
    return(
        <div className="column is-main-content" >
            <h1 className="title is-5" style={{'marginTop': '1rem'}}>View Map</h1>
          <hr />
          <div className="level">
  
  <div className="level-left">
  <div><span className="title is-5">Jurkalne - Riga</span> <small>@johnsmith</small> <small>31m</small></div>
  </div>
 <div className="level-right">
 <span className="is-size-6 is-family-monospace">Length - 20km</span>
</div>
</div>
<div>

<Map
    center={[57.1273,384.6539]}
    zoom={13}
   
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
 
</Map>



</div>

   </div> 
  );
    }
}

export default  ViewMap;
