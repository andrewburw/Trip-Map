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
          
    constructor(props) {
      super(props);
      this.state = {
        slectedMenu: 'none'
          
        
        };
      }
selectedMenu = (e) => {

  this.setState({selectedMenu: e.target.id})
  

}

  render(){
       let render =  <Route path='/dashboard/viewtrips' component={ViewTrips } />
     
    if (this.state.selectedMenu !== undefined) {
     
      render =<Route path='/dashboard/viewtrips' component={(props) => ( <ViewTrips timestamp={new Date().toString()} {...props} />)}/>
    }
    
    return(
      <div className="container hero is-fullheight">
  
   <div className="columns ">
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
    <li><Link to={{ pathname: '/dashboard/viewtrips' , state: {sort: 'by boats'} }}>
      <span className={this.state.selectedMenu === 'boatMenu'? 'customMenuLbl': '' } id="boatMenu" onClick={this.selectedMenu}>Boat Trips</span>
      </Link></li>
    <li><Link to={{ pathname: '/dashboard/viewtrips' , state: {sort: 'by bicycle'} }}>
      <span className={this.state.selectedMenu === 'bikeMenu'? 'customMenuLbl': '' } id="bikeMenu" onClick={this.selectedMenu}>Bike Trips</span>
      </Link></li>

    <li><Link to={{ pathname: '/dashboard/viewtrips' , state: {sort: 'by walk'} }}>
      <span className={this.state.selectedMenu === 'walkMenu'? 'customMenuLbl': '' } id="walkMenu" onClick={this.selectedMenu}>Walk Trips</span>
      </Link></li>
    <li><Link to={{ pathname: '/dashboard/viewtrips' , state: {sort: 'plan'} }}>
      <span className={this.state.selectedMenu === 'planMenu'? 'customMenuLbl': '' } id="planMenu" onClick={this.selectedMenu}>Planed Trips</span>
      </Link></li>
    <li><Link to={{ pathname: '/dashboard/viewtrips' , state: {sort: 'complite'} }}>
      <span className={this.state.selectedMenu === 'complMenu'? 'customMenuLbl': '' } id="complMenu" onClick={this.selectedMenu}>Complited Trips</span>
      </Link></li>
    <li><Link to={{ pathname: '/dashboard/viewtrips' , state: {sort: 'all'} }}>
      <span className={this.state.selectedMenu === 'allMenu'? 'customMenuLbl': '' } id="allMenu" onClick={this.selectedMenu}>All Trips</span></Link></li>
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
     
      <Route path="/dashboard/viewmap" component={ViewMap} />
      {render}
    </Switch>
   
   </div> 
   </div>
  );
    }
}

export default  DashBoard;

/* 
 <Route path='/dashboard/viewtrips' component={ (props) => (
              <ViewTrips timestamp={new Date().toString()} {...props} />
             )}/>


*/