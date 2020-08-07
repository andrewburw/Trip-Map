import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Polyline,Marker, Popup} from 'react-leaflet'
import L from 'leaflet';
import CommentInsert from './modals/modalComment';
import StopInsert from './modals/modalStop';

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
            trip: [],
            selectedMenu: null,
            modal: '',
            activeComentCoordinates: '', // temprary coordinates while writing a comment 
            commentMainDATA:[]
        };
    }

clickMap = (e) =>{
    // Click on map set: comment, route , stop
    let coord = e.latlng;
    let lat = coord.lat;
    let lng = coord.lng;
    if (this.state.selectedMenu==='drawRoute') {
    
      let temp = [...this.state.trip];
  
      temp.push([Number(lat.toFixed(4)),Number(lng.toFixed(4))]);
  
      
      this.setState({'trip':temp});
    } else if(this.state.selectedMenu==='addComent'){
      this.setState({'modal':'comment'}) ;
      this.setState({'activeComentCoordinates':[Number(lat.toFixed(4)),Number(lng.toFixed(4))]});
    } else if (this.state.selectedMenu==='addStop' ) {

      this.setState({'modal':'stop'}) ;

    }
   
}

reciveDataFromModalComent = (data) => {
  let temp = [...this.state.commentMainDATA];

   temp.push({
       coordinates: this.state.activeComentCoordinates,
       comment: data
   });
    this.setState({'activeComentCoordinates': ''});
    this.setState({'commentMainDATA': temp});


}

buttonClickMenu = (e) =>{
  this.setState({'selectedMenu':e.target.value});
  

}

handleCloseModal = (value) =>{
  this.setState({'modal':''}); 
  if (value=== 'modalComment') {
    this.setState({'activeComentCoordinates': ''});
  } else if(value=== 'modalStop'){
      


  }
  
  
}


buttonClickDelLine = () => {
    // delete last line 
    let temp = [...this.state.trip];
    temp.pop();
    this.setState({'trip':temp});
   
}

buttonClickCancel = () => {
   //delete all route
    this.setState({'trip':[]});


}
openPopup (marker) {

  // opening popUp when  tank selected from table
  
  if (marker && marker.leafletElement) {
    window.setTimeout(() => {
      marker.leafletElement.openPopup();
    })
  }
}
  render() {
    //************ BUTTON MENU SELECTED***************
   
    let buttonSeleted = {}
      if (this.state.selectedMenu === 'drawRoute') {
        buttonSeleted.drawRoute = 'buttonMenuIndrawRoute';
      
      }
      if (this.state.selectedMenu === 'addComent') {
        buttonSeleted.addComent = 'buttonMenuIndrawRoute';
        
      }
      if (this.state.selectedMenu === 'addStop') {
        buttonSeleted.addStop = 'buttonMenuIndrawRoute';
      }

   
   

    return(
    
       

<div className="column is-main-content" >
  <h1 className="title is-5" style={{'marginTop': '1rem'}}>Draw your trip</h1>
  {this.state.modal === 'comment' ? <CommentInsert closeModal={this.handleCloseModal} data={this.reciveDataFromModalComent} /> :""}
  {this.state.modal === 'stop' ? <StopInsert closeModal={this.handleCloseModal} /> : ""} 
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
       <button className={'button '+ buttonSeleted.drawRoute || ''} value="drawRoute" onClick={this.buttonClickMenu }>Draw Route</button>
       <button className={'button '+ buttonSeleted.addComent || ''} value="addComent" onClick={this.buttonClickMenu }>Add Comment</button>
       <button className={'button '+  buttonSeleted.addStop || ''} value="addStop" onClick={this.buttonClickMenu }>Add Stop</button>
       
       <button className="button">test</button>
       <button className="button is-danger" onClick={this.buttonClickDelLine }>Delete Last Line</button>
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
     <Polyline key={124} positions={this.state.trip} color={'red'} />
    {  Array.from(this.state.commentMainDATA).map((item, i) => {

return  (  <Marker key={Math.random()} ref={this.openPopup} position={item['coordinates']}>


<Popup><h1>Comment:</h1><p>{item['comment']}</p></Popup>
</Marker>)

})}
      
    </Map>
    

 </div>
</div>



    
  );
  }
}

export default DashMain;
