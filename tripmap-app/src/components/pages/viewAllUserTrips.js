import React, { Component } from 'react';
import {Link,} from "react-router-dom";




class AllUserTrips extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            selectedMenu: 'feed',
            serverError: false,
            serverMsg: ''
          
          };
  
  
      }
buttonClickMenu = (e) =>{
        this.setState({'selectedMenu':e.target.value});
        
      
}

 componentDidMount () {
     fetch('http://localhost:3001/api/trips/null', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
      
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


  render() {
    let render = null;

    if (this.state.serverError) {
     render =  <div className="notification is-danger">{this.state.serverMsg}</div>
    } else if (this.state.data === '') {
     render =  <progress className="progress is-small is-info" max="100">60%</progress>
    } else {
      render = this.state.selectedMenu === 'feed' ? <Feed data={this.state.data}/> : <Table data={this.state.data} />
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
<div className="column is-main-content" >
            <h1 className="title is-5" style={{'marginTop': '1rem'}}>View All Trips</h1>
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
      <td><Link to={{ pathname: '/viewmap/' + props.data[i]._id, state: { data: props.data[i],recivedDataFromComponent: true} }} >{item['tripName']}</Link></td>
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


return ( <div>
  { Array.from(props.data || []).map((item, i) => {

    return  (<article className="media" key={Math.random()}>
    <figure className="media-left">
      <p className="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="test" />
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
           
            <p style={{'marginTop':'0.5rem'}}> {item['tripDescrp']}</p>
          
         
        </div>
       
         
      </div>
    
    </div>
    <div className="media-right">
    <Link to={{ pathname: '/viewmap/' + props.data[i]._id, state: { data: props.data[i],recivedDataFromComponent: true} }} ><button  className="button is-info is-small">View Map</button></Link>
    </div>
    </article>
      )
    
    })}


  






</div>)





}






export default AllUserTrips ;