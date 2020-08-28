import React, { Component } from 'react';


class UserPage extends Component {
         


  render(){
      
    
    
    return(
        <div className='columns'>
  <div className='container profile'>
    
    <div className='section profile-heading'>
      <div className='columns is-mobile is-multiline'>
        <div className='column is-2'>
          <span className='header-icon user-profile-image'>
            <img alt='' src='http://placehold.it/300x225' />
          </span>
        </div>
        <div className='column is-4-tablet is-10-mobile name'>
          <p>
            <span className='title is-bold'>Paul Miller</span>
            <br />
            
          </p>
          <p className='tagline'>
            The users profile bio would go here, of course. It could be two lines or more or whatever. We should probably limit the amount of characters to ~500 at most though.
          </p>
        </div>
        <div className='column is-2-tablet is-4-mobile has-text-centered'>
          <p className='stat-val'>30</p>
          <p className='stat-key'>Trips</p>
        </div>
        <div className='column is-2-tablet is-4-mobile has-text-centered'>
          <p className='stat-val'>10</p>
          <p className='stat-key'>Boat Trips</p>
        </div>
        <div className='column is-2-tablet is-4-mobile has-text-centered'>
          <p className='stat-val'>3</p>
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
   
  </div>
</div>

  );
    }
}

export default  UserPage;
