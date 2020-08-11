import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Polyline,Marker, Popup} from 'react-leaflet'
import L from 'leaflet';
import CommentInsert from './modals/modalComment';
import StopInsert from './modals/modalStop';
import getDistance from './custome_modules/getDistance'; // my custom module for calculating trip length

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
            activeComentCoordinates: '', // temprary coordinates while writing a comment,
            activeStopCoordinates: '',   // temprary coordinates while writing a stop camp,
            commentMainDATA:[],
            ifeditComment:'',
            stopMainDATA:[]
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
      this.setState({'activeStopCoordinates':[Number(lat.toFixed(4)),Number(lng.toFixed(4))]});
    }
   
}

reciveDataFromModalComent = (data) => {
  let temp = [...this.state.commentMainDATA];
  
  if (data.edited === false) {
    temp.push({
      coordinates: this.state.activeComentCoordinates,
      comment: data.text,
      id: data.id
  });
  } else {
     //if comment edited run this branch of code
    let objIndex = this.state.commentMainDATA.findIndex((obj => obj.id === data.id));
    temp[objIndex].comment = data.text
  }
   
    this.setState({'activeComentCoordinates': ''});
    this.setState({'commentMainDATA': temp});
    this.setState({'ifeditComment': ''}); // if comment is edited delete temp  data

}
reciveDataFromModalStop = (data) => {
  let temp = [...this.state.stopMainDATA];
  
   temp.push({
       coordinates: this.state.activeStopCoordinates,
       comment: data.comment,
       raiting: data.raiting,
       title: data.title
   });
    this.setState({'activeStopCoordinates': ''});
    this.setState({'stopMainDATA': temp});


}
buttonClickMenu = (e) =>{
  this.setState({'selectedMenu':e.target.value});
  

}

handleCloseModal = (value) =>{
 
  this.setState({'modal':''}); 
  if (value=== 'modalComment') {
    this.setState({'activeComentCoordinates': ''});
    this.setState({'ifeditComment': ''});
  } else if(value=== 'modalStop'){
    this.setState({'activeStopCoordinates': ''}); 


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
// ***************** POPUP BUTTONS *******************


buttonClickEditComment = (e) =>{
  
  this.setState({'modal':'comment'});
  this.setState({'ifeditComment': this.state.commentMainDATA.find(x => x.id === e.target.id)});
 
}

buttonClickDeleteComment = (e) => {
  let temp = [...this.state.commentMainDATA];

 //stayed here 

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
  {this.state.ifeditComment !== ''?  <CommentInsert closeModal={this.handleCloseModal} data={this.reciveDataFromModalComent} editData={this.state.ifeditComment }/> :""}
  {this.state.modal === 'comment' ? <CommentInsert closeModal={this.handleCloseModal} data={this.reciveDataFromModalComent} editData={this.state.ifeditComment} /> :""}
  {this.state.modal === 'stop' ? <StopInsert closeModal={this.handleCloseModal} data={this.reciveDataFromModalStop}/> : ""} 
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

     return  (  <Marker key={Math.random()}  position={item['coordinates']}>
                  <Popup> <div className="card">
 
 <div className="card-content">
   <div className="content">
     <h1 className="title is-4">User Comment</h1>
      <p> {item['comment']}</p>
     <br />
     <time dateTime="2016-1-1">11:09 PM - 1 Jan 2020</time>
   </div>
 </div>
 <footer className="card-footer">
   <button  className="link-button card-footer-item" id={item['id']} onClick={this.buttonClickEditComment} >Edit</button>
   <button  className="link-button card-footer-item" id={item['id']} onClick={this.buttonClickDeleteComment}>Delete</button>
 
 </footer>
 </div></Popup>
                </Marker>)

})}

{  Array.from(this.state.stopMainDATA).map((item, i) => {

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
  <footer className="card-footer">
    <a href="1" className="card-footer-item">Edit</a>
    <a href="1"className="card-footer-item">Delete</a>
  </footer>
  </div>
            </Popup>
           </Marker>)

})}




</Map>

<div><p className="is-size-7">Trip Distance: {getDistance(this.state.trip)} km</p></div>
 
 </div>
</div>



    
  );
  }
}

export default DashMain;
