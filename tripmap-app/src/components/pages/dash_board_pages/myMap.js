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


class MyMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            serverError: false,
            serverMsg: ''

          };
        }





        componentDidMount () {
  
          const auth = 'Bearer ' + localStorage.getItem('token');
        
             fetch('http://localhost:3001/api/usertrips', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'Authorization': auth
        
              
            }
          
            }).then(response => response.json()
               
            ).then(data => {

             
              this.setState({data: data})
           
             if (data.errorStatus === true) {
              
              this.setState({serverError: true});
              this.setState({serverMsg: data.messege});
          
          
                 } 
            
         
            }).catch(err => {
               console.error(err)
               this.setState({serverError: true});
               this.setState({serverMsg: err.toString()});
            });
         
        }

  render(){
      
       let render = null;

       if (this.state.serverError) {
        render =  <div className="notification is-danger">{this.state.serverMsg}</div>
       } else if (this.state.data === '') {
        render =  <progress className="progress is-small is-info" max="100">60%</progress>
       } else {
      
         render = <MapRender data={this.state.data} />
       }

    return(
        <div className="container">
            {render }  
        </div> 
  );
    }
}


function MapRender(props) {


    return (
      
            <div className="column is-main-content" >
            <h1 className="title is-5" style={{'marginTop': '1rem'}}>View Trips on Map</h1>
          <hr />
          <div className="level">
      <p>All your trips in one map.</p>
   
    </div>
  


<div>

<Map
    center={props.data[0].tripRoute[0]}
    zoom={8}
   
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />''
   
)

 { Array.from(props.data || []).map((item, i) => {
   
return  ( <Polyline key={i} positions={item.tripRoute} color={item.tripColor || 'red'} />
)

})  }

{ Array.from(props.data || []).map((item, i) => {

return  (  <Marker key={Math.random()}  position={item.tripRoute[0]}>
             <Popup> <div className="card">

             <div className="card-content">
                <div className="content">
                    <h1 className="title is-5"> {item.tripName}</h1>
                    <p><strong>Trip length:</strong><span className="is-family-monospace" > {item.tripDistance} km</span>. </p>
                    <p><strong>Trip by:</strong><span className="is-family-monospace" > {item.tripBy}.</span></p>
                    <p><strong>Comment:</strong><span className="is-family-monospace" > {item.tripDescrp}</span></p>
                   
                  
                </div>
              </div>

</div></Popup>
           </Marker>)

})}



</Map>

</div>
</div> 
     
 
    );    

  }
export default  MyMap;
