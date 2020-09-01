import React, { Component } from 'react';
import profilePic from './img/profilePic.png'


class DashMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data: '',
        selectedMenu: 'feed',
        serverError: false,
        serverMsg: '',
        modal: false,
        deleteId: '',
        pageTitle: ''
      
      };


  }
    
  componentDidMount () {
  
    const auth = 'Bearer ' + localStorage.getItem('token');
  
       fetch('http://localhost:3001/api/userprofile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': auth
  
        
      }
    
      }).then(response => response.json()
         
      ).then(data => {
      
        this.setState({data: data})
       if (data.errorStatus === true) {
        
       // this.setState({serverError: true});
     //   this.setState({serverMsg: data.messege});
    
    
           } 
      
   
      }).catch(err => {
         console.error(err)
      //   this.setState({serverError: true});
      //   this.setState({serverMsg: err.toString()});
      });
   
  }
  render() {
      
    
    return(
        
<div className="column is-main-content" >

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
            <span className='title is-bold'>{this.state.data.name}</span>
            <br />
            
          </p>
          <p className='tagline'>
          {this.state.data.bio}
          </p>
          <br />
          <p className='tagline'>
          <strong>Date register: </strong>{this.state.data.regData}
          </p>
        </div>
        <div className='column is-2-tablet is-4-mobile has-text-centered'>
          <p className='stat-val'>{this.state.data.tripsN}</p>
          <p className='stat-key'>Trips</p>
        </div>
        <div className='column is-2-tablet is-4-mobile has-text-centered'>
          <p className='stat-val'>{this.state.data.boatTrips}</p>
          <p className='stat-key'>Boat Trips</p>
        </div>
        
        <div className='column is-2-tablet is-4-mobile has-text-centered'>
          <p className='stat-val'>{this.state.data.otherTrips}</p>
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
             
            </a>
          </li>
          <li className='link is-active'>
            <a href="1">
              <span className='icon'>
                <i className='fa fa-thumbs-up'></i>
              </span>
             
            </a>
          </li>
          <li className='link'>
            <a href="1">
              <span className='icon'>
                <i className='fa fa-search'></i>
              </span>
             
            </a>
          </li>
          <li className='link'>
            <a href="1">
              <span className='icon'>
                <i className='fa fa-balance-scale'></i>
              </span>
             
            </a>
          </li>
        </ul>
      </div>
    </div>
 </div>

 </div>

    
  );
  }
}

export default DashMain;
