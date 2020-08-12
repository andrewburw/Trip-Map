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
            activeCommentData: '', 
            activeStopData: '',  
            commentMainDATA:[],
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
      // open module comment

      this.setState({'modal':'comment'}) ;
      this.setState({'activeCommentData':{
       coordinates: [Number(lat.toFixed(4)),Number(lng.toFixed(4))],
       comment: '',
       modyfy: false,
       id:  '_' + Math.random().toString(36).substr(2, 9) // generate small ID

      }});
    } else if (this.state.selectedMenu==='addStop' ) {
       // open module addStop
      this.setState({'modal':'stop'}) ;
      this.setState({'activeStopData':{
        coordinates: [Number(lat.toFixed(4)),Number(lng.toFixed(4))],
        title: '',
        raiting: 0,
        comment: '',
        modyfy: false,
        id:  '_' + Math.random().toString(36).substr(2, 9) // generate small ID

      }})
    }
   
}

reciveDataFromModalComent = (data) => {
  let temp = [...this.state.commentMainDATA];
   
  if (data.modyfy === false) {
    temp.push({
      coordinates: data.coordinates,
      comment: data.comment,
      id: data.id
  });
  } else {
     //if comment edited run this branch of code
     temp.splice(temp.findIndex(item => item.id === data.id), 1)
     temp.push({
      coordinates: data.coordinates,
      comment: data.comment,
      id: data.id
  });
  }
   
    this.setState({'activeCommentData': ''});
    this.setState({'commentMainDATA': temp});
 

}
reciveDataFromModalStop = (data) => {
 
  let temp = [...this.state.stopMainDATA];
  if (data.modeModyfy === false ) {
    temp.push({
      coordinates: data.coordinates,
      comment: data.comment,
      raiting: data.raiting,
      title: data.title,
      id: data.id
  });
  } else {
    // if mode edit on
    temp.splice(temp.findIndex(item => item.id === data.id), 1)
    temp.push({
      coordinates: data.coordinates,
      comment: data.comment,
      raiting: data.raiting,
      title: data.title
  });

  }
  
    this.setState({'activeStopData': ''});
    this.setState({'stopMainDATA': temp});


}
buttonClickMenu = (e) =>{
  this.setState({'selectedMenu':e.target.value});
  

}

handleCloseModal = (value) =>{
 
  this.setState({'modal':''}); 
  if (value=== 'modalComment') {
    this.setState({'activeCommentData': ''});
    
  } else if(value=== 'modalStop'){
    this.setState({'activeStopData': ''}); 


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
// ***************** POPUP BUTTONS  COMMENT *******************


buttonClickEditComment = (e) =>{
  let temp = this.state.commentMainDATA.find(x => x.id === e.target.id)
  temp.modyfy = true;
 
  this.setState({'activeCommentData': temp});
  this.setState({'modal':'comment'});
}

buttonClickDeleteComment = (e) => {
  let temp = [...this.state.commentMainDATA];
 
  temp.splice(temp.findIndex(item => item.id === e.target.id), 1)

  this.setState({'commentMainDATA': temp});
}
// ***************** POPUP BUTTONS  ADD STOP *******************

buttonClickEditStop = (e) => {
  
  let temp = this.state.stopMainDATA.find(x => x.id === e.target.id)
   temp.modyfy = true
  
  this.setState({'activeStopData': temp});
  this.setState({'modal':'stop'});
} 

buttonClickDeleteStop = (e) => {
  let temp = [...this.state.stopMainDATA];
 
  temp.splice(temp.findIndex(item => item.id === e.target.id), 1)

  this.setState({'stopMainDATA': temp});

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
  {this.state.modal === 'comment' ? <CommentInsert closeModal={this.handleCloseModal} data={this.reciveDataFromModalComent} dataEdit={this.state.activeCommentData} /> :""}
  {this.state.modal === 'stop' ? <StopInsert closeModal={this.handleCloseModal} data={this.reciveDataFromModalStop} dataEdit={this.state.activeStopData}/> : ""} 
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

{   Array.from(this.state.stopMainDATA).map((item, i) => {

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
    <button  className="link-button card-footer-item" id={item['id']} onClick={this.buttonClickEditStop} >Edit</button>
    <button  className="link-button card-footer-item" id={item['id']} onClick={this.buttonClickDeleteStop }>Delete</button>

  </footer>
  </div>
            </Popup>
           </Marker>)

})  }




</Map>

<div><p className="is-size-7">Trip Distance: {getDistance(this.state.trip)} km</p></div>
 
 </div>
</div>



    
  );
  }
}

export default DashMain;
