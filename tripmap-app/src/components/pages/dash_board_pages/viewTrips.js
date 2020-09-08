import React, { Component} from 'react';
import {Link,} from "react-router-dom";
import ModalDelete from './modals/deleteTrip'
import TripIcons from './img/tripicon2.png'
class AllUserTrips extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            selectedMenu: 'feed',
            serverError: false,
            serverMsg: '',
            modal: false,
            deleteId: '',
            pageTitle: '',
            shareLinkModal: false,
            shareLink: ''
          
          };
  
  
      }
buttonClickMenu = (e) =>{
  this.setState({'selectedMenu':e.target.value});
        
      
}
 sortSelected = (data) => { 
    
      let sortParam = null
      if (this.props.location.state=== undefined ) {
        sortParam = 'all'
      } else {
        sortParam = this.props.location.state.sort

      }
     // if(data === '' || this.props.location.state=== undefined ){ sortParam = 'all'}
     let result = '';
     let menu = ''; // for Page Title 

     result = data.sort((x)=>{ return new Date(x.dateAdded ) - new Date() }) // sort for newes trips in up
     if (sortParam === 'all') {
      result = data
      menu = 'View All Trips';
     } else if(sortParam === 'complite') {
      result = data.filter(x => x.tripStatus ==='Complited');
      menu = 'View Complited Trips';
     }else if(sortParam === 'plan') {
      result = data.filter(x => x.tripStatus ==='Planed');
      menu = 'View Planned Trips';
     } else if(sortParam === 'by boats') {
      result = data.filter(x => x.tripBy === 'by boats')
      menu = 'View Boats Trips';
     } else if(sortParam === 'by walk') {
      result = data.filter(x => x.tripBy === 'by walk')
      menu = 'View Walk Trips';
     } else if(sortParam === 'by bicycle') {
      result = data.filter(x => x.tripBy === 'by bicycle')
      menu = 'View Bicycle Trips';
     }


   
  this.setState({data: result,pageTitle: menu})



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
     
     this.sortSelected(data) // filter by dashboard menu (on the left side menu)
      //this.setState({data: data})
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

deletTrip = () => {
  this.setState({modal: false})

  let dataToSend = {
    deleteID: this.state.deleteId
  }

 const auth = 'Bearer ' + localStorage.getItem('token');

 fetch('http://localhost:3001/api/usertrips/deletetrip', {
method: 'DELETE',
headers: {
  'Content-Type': 'application/json;charset=utf-8',
  'Authorization': auth,
  

  
},
  body: JSON.stringify(dataToSend)

}).then(response => response.json()
   
).then(data => {
 
   
 if (data.errorStatus === true) {
    
     } else {
      alert('Trip Deleted')
     window.location.reload()
     }
  

}).catch(err => {
   console.error(err)
   this.setState({serverError: true});
   this.setState({serverMsg: err.toString()});
});

}

  render() {
    let render = null;

    if (this.state.serverError) {
     render =  <div className="notification is-danger">{this.state.serverMsg}</div>
    } else if (this.state.data === '') {
     render =  <progress className="progress is-small is-info" max="100">60%</progress>
    } else {
      render = this.state.selectedMenu === 'feed' ? <Feed data={this.state.data} shareLink={(ab)=>{this.setState({shareLinkModal:true,shareLink:ab})}} callBackTrriger={(ab)=>{this.setState({modal:true,deleteId:ab})}}/> : <Table data={this.state.data} />
    }


    let buttonSeleted = {}
    
    if (this.state.selectedMenu === 'feed') {
      buttonSeleted.feed = 'buttonMenuIndrawRoute';
    
    }
    if (this.state.selectedMenu === 'table') {
      buttonSeleted.table = 'buttonMenuIndrawRoute';
      
    }
    
    return(
     <div className="container">
       {this.state.modal ? <ModalDelete closeModal={()=>{this.setState({modal:false})}} daleteTrue={this.deletTrip}/> : ''}
       {this.state.shareLinkModal ? <ModalShareLink closeModal={()=>{this.setState({shareLinkModal:false})}} dataLink={this.state.shareLink}/> : ''}
<div className="column is-main-content" >
            <h1 className="title is-5" style={{'marginTop': '1rem'}}>{this.state.pageTitle}</h1>
          <hr />
         
          <div className="level-right">
          <div className="buttons are-small">
       <button className={'button '+ buttonSeleted.feed || ''} value="feed" onClick={this.buttonClickMenu }>Feed</button>
       <button className={'button '+ buttonSeleted.table || ''} value="table" onClick={this.buttonClickMenu }>Table</button>
       
    
    </div>
    </div>
    <hr />
     {render}
   </div> 
   </div>
    
    
  );
  }
}

function Table (props) {



return (

<table className="table is-fullwidth">
  <thead>
    <tr>
      <th>N</th>
      <th>Trip Name</th>
      <th>Author</th>
      <th>Date</th>
      <th>Rate</th>
      <th>Distance</th>
      <th>Trip by</th>
      <th>Comment</th>
     
    </tr>
  </thead>
  <tbody>
    { Array.from(props.data || []).map((item, i) => {

return  (
 
  <tr key={i}>
      <th>{i}</th>
      <td><Link to={{ pathname: '/dashboard/viewmap/', state: { data: props.data[i],recivedDataFromComponent: true} }} >{item['tripName']}</Link></td>
      <td>{item['tripAuthor']}</td>
      <td>{item['dateAdded']}</td>
      <td>{item['tripRate']}</td>
      <td>{item['tripDistance']} km</td>
      <td>{item['tripBy']}</td>
      <td>{item['tripDescrp']}</td>
      
      
    </tr>
    
 )})}
    </tbody>
    </table>





)







}


function Feed (props) {
  
 
    function deletTrip(e) {
 
     props.callBackTrriger(e.target.id)
    }

    function onClickShare(e) {
   
    props.shareLink(e.target.value)
    }



return ( <div>
  { Array.from(props.data || []).map((item, i) => {

    return  (<article className="media" key={Math.random()}>
    <figure className="media-left">
      <p className="image is-64x64">
        <img src={TripIcons} alt="test" />
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
          <span className="is-size-6 is-family-monospace">Status - {item['tripStatus']}</span>
          <br />
           
            <p style={{'marginTop':'0.5rem'}}> {item['tripDescrp']}</p>
            
        </div>
        
         
      </div>
      
    </div>

    <div className="media-right">
      <div className="buttons">
        <button onClick={onClickShare } value ={props.data[i]._id} className="button is-small is-light">Share Link</button>
        <Link to={{ pathname: '/dashboard/viewmap/' , state: { data: props.data[i]} }} ><button  className="button is-info is-small">View Map</button></Link>
        <button  className="button is-danger is-small" onClick={deletTrip} id={props.data[i]._id} style={{marginLeft: '0.5rem'}}>Delete Trip</button>
      </div>
    </div>
    
    </article>
      )
    
    })}
</div>)

}


function ModalShareLink(props) {

  function copyToClipboard (e){
    alert('Copied!')
    props.closeModal()
    navigator.clipboard.writeText('adress/api/trip' + props.dataLink)

  }
 

return ( <div className="modal is-active">
<div className="modal-background"></div>
<div className="modal-card">
  <header className="modal-card-head">
    <p className="modal-card-title">Share Trip</p>
   </header>
  <section className="modal-card-body">
   <p>Share this link</p>
   <br />
   <div className="level">
     <input className="input is-small" type="text" defaultValue={'adress/api/trip' + props.dataLink} />
     <button className="button is-small is-dark " onClick={copyToClipboard}>Copy To Clipboard</button>
   </div>
  </section>
  <footer className="modal-card-foot">
    
      <button className="button" onClick={props.closeModal}>Cancel</button>
  </footer>
</div>
</div>)



}



export default AllUserTrips ;