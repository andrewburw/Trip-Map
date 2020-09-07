import React, { Component } from 'react';
import profilePic from './dash_board_pages/img/profilePic.png';

import {Link,} from "react-router-dom";

class UserPage extends Component {
         
  constructor(props) {
    super(props);
    this.state = {
        data: '',
        selectedMenu: 'feed',
        serverError: false,
        serverMsg: 'asdadasd',
        modal: false,
        deleteId: '',
        pageTitle: ''
      
      };


  }

  componentDidMount () {
  
    const { id } = this.props.match.params
      //5f4e448becd2f82694d0326b
       fetch(`http://localhost:3001/api/user/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
            
      }
    
      }).then(response => response.json()
         
      ).then(data => {
         
        this.setState({data: data})
       if (data.errorStatus === true) {
       
        
        this.setState({serverError: true});
       this.setState({serverMsg: data.message});
          
      } 
     
   
      }).catch(err => {
         
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
      render = <UserProfile data={this.state.data} />
    }
    
    return(
       
          
          <section className="column is-main-content">
            <div className="container">

          {render}
          </div>
          </section>
          
        

  );
    }
}


function UserProfile(props) {




  return ( 
  <div className='container profile'>
    
  <div className='section profile-heading'>
      <div className='columns is-mobile is-multiline'>
        <div className='column is-2'>
          <span className='header-icon user-profile-image'>
          <img alt='' src={profilePic} />
          </span>
        </div>
        <div className='column is-4-tablet is-10-mobile name'>
          <p>
            <span className='title is-bold'>{props.data.name}</span>
            <br />
            
          </p>
          <p className='tagline'>
          {props.data.bio}
          </p>
          <br />
          <p className='tagline'>
          <strong>Date register: </strong>{props.data.regData}
          </p>
        </div>
        <div className='column is-2-tablet is-4-mobile has-text-centered'>
          <p className='stat-val'>{props.data.tripsN}</p>
          <p className='stat-key'>Trips</p>
        </div>
        <div className='column is-2-tablet is-4-mobile has-text-centered'>
          <p className='stat-val'>{props.data.boatTrips}</p>
          <p className='stat-key'>Boat Trips</p>
        </div>
        
        <div className='column is-2-tablet is-4-mobile has-text-centered'>
          <p className='stat-val'>{props.data.otherTrips}</p>
          <p className='stat-key'>Other Trips</p>
        </div>
      </div>
    </div>
    <div className='profile-options is-fullwidth'>
      <div className='tabs is-fullwidth is-medium'>
        <ul>
          <li className='link'>
            <a href="1">
              <span className='icon'>
                <i className='fa fa-list'></i>
              </span>
              <span>Boat trips</span>
            </a>
          </li>
          <li className='link'>
            <a href="1">
              <span className='icon'>
                <i className='fa fa-thumbs-up'></i>
              </span>
              <span>Bike trips</span>
            </a>
          </li>
          <li className='link'>
            <a href="1">
              <span className='icon'>
                <i className='fa fa-search'></i>
              </span>
              <span>Walk Trips</span>
            </a>
          </li>
          <li className='link is-active'>
            <a href="1">
              <span className='icon'>
                <i className='fa fa-balance-scale'></i>
              </span>
              <span>All Trips</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
   
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
      <th>Map</th>
     
    </tr>
  </thead>
  <tbody>
    { Array.from(props.data.tripsData || []).map((item, i) => {

return  (
 
  <tr key={i}>
      <th>{i}</th>
      <td>{item['tripName']}</td>
      <td>{item['tripAuthor']}</td>
      <td>{item['dateAdded']}</td>
      <td>{item['tripRate']}</td>
      <td>{item['tripDistance']} km</td>
      <td>{item['tripBy']}</td>
      <td>{item['tripDescrp']}</td>
      <td><Link to={{ pathname: '/viewmap/'+item['id'], state: { data: props.data.tripsData[i],recivedDataFromComponent: true} }} >View Map</Link></td>
      
    </tr>
    
 )})}
    </tbody>
    </table>
   </div>
    
   
  )




}







export default  UserPage;
/*  
    <div className='columns is-mobile'>
      <div className='column is-3-tablet is-6-mobile'>
        <div className='card'>
          <div className='card-image'>
            <figure className='image is-4by3'>
              <img alt='' src='http://placehold.it/300x225' />
            </figure>
          </div>
          <div className='card-content'>
            <div className='content'>
              <span className='tag is-dark subtitle'>#1</span>
              <p>Personal Notes on the Property (can be edited and saved automatically by clicking in and clicking out of text area) - these are unique to the user - they will show up as part of a saved listings' info here - but adding notes to a property does not automatically create a saved listing. Likewise, removing this proeprty from saved listings does not auto remove the notes.</p>
            </div>
          </div>
          <footer className='card-footer'>
            <a className='card-footer-item' href="1">Compare</a>
            <a className='card-footer-item' href="1">Share</a>
            <a className='card-footer-item' href="1">Delete</a>
          </footer>
        </div>
        <br />
      </div>
      <div className='column is-3-tablet is-6-mobile'>
        <div className='card'>
          <div className='card-image'>
            <figure className='image is-4by3'>
              <img alt='' src='http://placehold.it/300x225' />
            </figure>
          </div>
          <div className='card-content'>
            <div className='content'>
              <span className='tag is-dark subtitle'>#2</span>
              <p>Personal Notes on the Property (can be edited and saved automatically by clicking in and clicking out of text area) - these are unique to the user - they will show up as part of a saved listings' info here - but adding notes to a property does not automatically create a saved listing. Likewise, removing this proeprty from saved listings does not auto remove the notes.</p>
            </div>
          </div>
          <footer className='card-footer'>
            <a className='card-footer-item' href="1">Compare</a>
            <a className='card-footer-item' href="1">Share</a>
            <a className='card-footer-item' href="1">Delete</a>
          </footer>
        </div>
        <br />
      </div>
      <div className='column is-3'>
        <div className='card'>
          <div className='card-image'>
            <figure className='image is-4by3'>
              <img alt='' src='http://placehold.it/300x225' />
            </figure>
          </div>
          <div className='card-content'>
            <div className='content'>
              <span className='tag is-dark subtitle'>#3</span>
              <p>Personal Notes on the Property (can be edited and saved automatically by clicking in and clicking out of text area) - these are unique to the user - they will show up as part of a saved listings' info here - but adding notes to a property does not automatically create a saved listing. Likewise, removing this proeprty from saved listings does not auto remove the notes.</p>
            </div>
          </div>
          <footer className='card-footer'>
            <a className='card-footer-item' href="1">Compare</a>
            <a className='card-footer-item' href="1">Share</a>
            <a className='card-footer-item' href="1">Delete</a>
          </footer>
        </div>
        <br />
      </div>
      <div className='column is-3'>
        <div className='card'>
          <div className='card-image'>
            <figure className='image is-4by3'>
              <img alt='' src='http://placehold.it/300x225' />
            </figure>
          </div>
          <div className='card-content'>
            <div className='content'>
              <span className='tag is-dark subtitle'>#4</span>
              <p>Personal Notes on the Property (can be edited and saved automatically by clicking in and clicking out of text area) - these are unique to the user - they will show up as part of a saved listings' info here - but adding notes to a property does not automatically create a saved listing. Likewise, removing this proeprty from saved listings does not auto remove the notes.</p>
            </div>
          </div>
          <footer className='card-footer'>
            <a className='card-footer-item' href="1">Compare</a>
            <a className='card-footer-item' href="1">Share</a>
            <a className='card-footer-item' href="1">Delete</a>
          </footer>
        </div>
        <br />
      </div>
      </div>
      
      */