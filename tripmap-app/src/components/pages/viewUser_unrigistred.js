import React, { Component } from 'react';
import profilePic from './dash_board_pages/img/profilePic.png'
import tripPic from './dash_board_pages/img/tripIcon.png'
import tripPic2 from './dash_board_pages/img/tripIcon2.png'

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
         console.log(data)
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
              <span>My Lists</span>
            </a>
          </li>
          <li className='link is-active'>
            <a href="1">
              <span className='icon'>
                <i className='fa fa-thumbs-up'></i>
              </span>
              <span>My Likes</span>
            </a>
          </li>
          <li className='link'>
            <a href="1">
              <span className='icon'>
                <i className='fa fa-search'></i>
              </span>
              <span>My Searches</span>
            </a>
          </li>
          <li className='link'>
            <a href="1">
              <span className='icon'>
                <i className='fa fa-balance-scale'></i>
              </span>
              <span>Compare</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className='columns is-mobile'>
    { Array.from(props.data.tripsData || []).map((item, i) => {

return  (
   //<td><Link to={{ pathname: '/viewmap/' + props.data[i]._id, state: { data: props.data[i],recivedDataFromComponent: true} }} >{item['tripName']}</Link></td>
   
   <div key={i} className='column is-3-tablet is-6-mobile'>
     <div className='card'>
       <div className='card-image'>
         <figure className='image is-4by3'>
           <img alt='' src={tripPic} />
         </figure>
       </div>
       <div className='card-content'>
         <div className='content'>
           <span className='tag is-dark subtitle'>#{i+1}</span>
           <p> {item['tripDescrp']}</p>
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
   
 )})}
   </div>
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