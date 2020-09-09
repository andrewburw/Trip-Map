import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Polyline,Marker, Popup} from 'react-leaflet'
import L from 'leaflet';
import configFetch from './../../fetch_config/config.js';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


class ViewMapUnregistred extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            serverError: false,
            serverMsg: ''

          };
        }





componentDidMount(){
   // ****
   // **** The idea is that when you come from userTrips component, do not make an new request to server. 
   // **** And if you go separately to a particular trip, then it makes a request to the server.
   // **** 
   
   const { id } = this.props.match.params
    

  if (this.props.location.state !== undefined) {
      this.setState({data: this.props.location.state.data})
      
  }else {
 
fetch(configFetch.config.viewMapUnregAdress + id, { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
      
    }
  
    }).then(response => response.json()
       
    ).then(data => {
      
         console.log(data)
     
      if (data.length === 0) {
        this.setState({serverError: true});
        this.setState({serverMsg: 'Trip not found!'});
       
      }
     



     if (data.errorStatus === true) {
      
      this.setState({serverError: true});
      this.setState({serverMsg: data.message});
  
  
         }  else {
           // if everything is ok (no errors.)
           this.setState({data: data[0]})
  
    }
    
 
    }).catch(err => {
       console.error(err)
       this.setState({serverError: true});
       this.setState({serverMsg: err.toString()});
    });

}

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
            <h1 className="title is-5" style={{'marginTop': '1rem'}}>View Map</h1>
          <hr />
          <div className="level">
  
  <div className="level-left">
    <div><span className="title is-5">{props.data.tripName} </span> 
    <small>@{props.data.tripAuthor} </small> <small>{props.data.dateAdded}</small>
   
    </div>
   
   
  </div>
  
 <div className="level-right">
 <p className="is-size-7 is-family-monospace">Length - <span className="has-text-weight-bold">{props.data.tripDistance}km </span>,
 Raiting - <span className="has-text-weight-bold">{props.data.tripRate} </span>,
 Transport - <span className="has-text-weight-bold">{props.data.tripBy}</span></p>

</div>
</div>
<span></span>
<div>

<Map
    center={props.data.tripRoute[0] || [56.953592, 24.226905]}
    zoom={13}
   
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />''
   <Polyline key={124} positions={props.data.tripRoute } color={'red'} />

 { Array.from(props.data.tripStops || []).map((item, i) => {

return  (  <Marker key={Math.random()}  position={item['coordinates']}>
            <Popup>
            <div className="card">
 
  <div className="card-content">
    <div className="content">
      <h1 className="title is-4">Trip Stop</h1>
      <p className="has-text-weight-semibold">Stop Name: {item['title']}</p>
      <p className="has-text-weight-semibold">User Raiting: {item['raiting']}</p>
      <p className="has-text-weight-semibold">User Comment:</p>
      <p> {item['comment']}</p>
     
    </div>
  </div>
 
  </div>
            </Popup>
           </Marker>)

})  }
 { Array.from(props.data.tripComents || []).map((item, i) => {

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

<p  className="is-size-6"> {props.data.tripDescrp}</p>
</div>
</div> 
     
 
    );    

  }
export default  ViewMapUnregistred;
