import React, {Component} from 'react';
import LoginContext from '../../loginContext'
import { Redirect } from 'react-router-dom';
import DashBoard from './dashBoard';



class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loggedIn: null
        };
      }

      static contextType =  LoginContext
    componentDidMount() {
      

        const auth = 'Bearer ' + localStorage.getItem('token');
   
    fetch('http://localhost:3001/api/auth/check', {
     method: 'POST',
     headers: {
     'Content-Type': 'application/json;charset=utf-8',
     'Authorization': auth
     },
     body: JSON.stringify({test: 'test'})
   
   }).then(response => response.json()
      
   ).then(data => {
      
      if (data.status) { // if logged in 
      
        this.setState({loggedIn: true})
        const {  setUser } = this.context
        const newUser = { name: 'Joe', loggedIn: true }

        setUser(newUser)
        
      } else {
        const {  setUser } = this.context
        const newUser = { name: 'Joe', loggedIn: false }

        setUser(newUser)
     
        localStorage.removeItem('token');
        localStorage.removeItem('user_name');
      
        this.setState({loggedIn:false})
        
      }
    
    
   }).catch(err => {
      console.error(err)
      
   });
  }
  
    render(){


        if(this.state.loggedIn === null) return null;

    return (this.state.loggedIn ? <DashBoard /> :  <Redirect to="/loginpage" />);    
    }
  }
  

export default Wrapper;