import React, { Component } from 'react';
import {
  
  Switch,
  Route,Link
 
} from "react-router-dom";
import DashMain from './dash_board_pages/dashMain';
import Mymap from './dash_board_pages/myMap';
import DrawTrip from './dash_board_pages/drawTrip';
import ViewTrips from './dash_board_pages/viewTrips';
import ViewMap from './dash_board_pages/viewMap';

class DashBoard extends Component {
         


  render(){
      
    
    
    return(
      <div className="container">
  
   <div className="columns is-fullheight">
     <div className="column is-2 is-sidebar-menu is-hidden-mobile">
      <aside className="menu ">
  <p className="menu-label">
    General
  </p>
  <ul className="menu-list">
    <li><Link to="/dashboard">Dashboard</Link></li>
    <li><Link to="/dashboard/mymap">My Map</Link></li>
  </ul>
  <p className="menu-label">My trips</p>


  <ul className="menu-list">
    <li><a href="/">Boat Trips</a></li>
    <li><a href="/">Walk Trips</a></li>
    <li><Link to="/dashboard/viewtrips">All Trips</Link></li>
  </ul>
  <p className="menu-label">
    New trip
  </p>
  <ul className="menu-list">
    <li><Link to="/dashboard/drawtrip"><span className="customMenuLbl">Add New Trip</span></Link></li>
    <li><a href="/">Payments</a></li>
    <li><a href="/">Transfers</a></li>
    <li><a href="/">Balance</a></li>
  </ul>
</aside>
</div>
   <Switch>
      <Route exact path="/dashboard" component={DashMain} />
      <Route path="/dashboard/mymap" component={Mymap} />
      <Route path="/dashboard/drawtrip" component={DrawTrip} />
      <Route path="/dashboard/viewtrips" component={ViewTrips} />
      <Route path="/dashboard/viewmap" component={ViewMap} />
    </Switch>
   </div>
   </div> 
  );
    }
}

export default  DashBoard;
