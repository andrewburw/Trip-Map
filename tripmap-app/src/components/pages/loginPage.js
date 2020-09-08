import React, { Component } from 'react';
import Logo from '../img/trip.png';
import {Redirect} from "react-router-dom";
import LoginContext from '../../loginContext'


class LoginPage extends Component {
            state = {
                    email: '',
                    pass: '',
                    emailError: null,
                    passError: null,
                    emailErroMsg: '',
                    passErrorMsg: '',
                    serverError: null,
                    serverMsg: '',
                    protectButtn: false,
                    loginSuccess: false
                   
           };

           static contextType =  LoginContext
 
 handleChange = (event) => {
       
      if (event.target.type === 'email') {
       this.checkInputData (event.target.value,'email');
       this.setState({email:event.target.value});

      } else {
       this.setState({pass:event.target.value});

      }
 }


checkInputData = (data,feild) => {
  
let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
if (feild === 'email') {
    if (data === '') {
      this.setState({emailError:true})
      this.setState({emailErroMsg: `Email cannot be empty.`})
    }else if (!regEmail.test(data)) {
      this.setState({emailError:true})
      this.setState({emailErroMsg: 'Not valid email adress.'})
    } else {
      this.setState({emailError:false});
    }
  
} else {


  data.length > 0 && data !== '' ?		 this.setState({passError:false}) : this.setState({passError:true});
 
}

} 


sendData = () => {


 this.checkInputData (this.state.email,'email');
 this.checkInputData (this.state.pass,'pass');


// ************** data send to server fnc *****************
setTimeout(() => { // without async bug (or problem whith state update) require two time press button login
  if (this.state.passError === false && this.state.emailError === false) {
   
    const dataToSend = {
      password: this.state.pass,
      email: this.state.email
       }
  
       
       
    fetch('http://localhost:3001/api/auth/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json;charset=utf-8'
     
   },
   body: JSON.stringify(dataToSend)
 
   }).then(response => response.json()
      
   ).then(data => {
        
           if ( data.loginError === true) {
      
     this.setState({serverError: true,serverMsg: data.message});
     


       }  else if (data.loginError === false){
        // *** if auth is successful ***
        const { user, setUser } = this.context
        const newUser = { name: 'Joe', loggedIn: true }

        setUser(newUser)
          localStorage.setItem('token', data.token);
          localStorage.setItem('user_name', data.userID);
          setTimeout(() => {
            this.setState({loginSuccess: true}); // redirect occurs after the message about successful registration
          }, 1000); 
     this.setState({serverError: false,serverMsg: 'Login Succes!',protectButtn: true});	
     }
     
    
     
      
                                           
    
   }).catch(err => {
     
      this.setState({serverError: true,serverMsg: err.toString()});
    
   });
 
  }

}, 1);
  
}
    
render(){

          // ********** login/pass check *******************
	// ---- email ----
	
  let showLoginEmailFeedClass = 'input';
  let emailMsg = null;
  let showLoginPassFeedClass = 'input';
  let passMsg = null;
  
   if (this.state.emailError) {
    showLoginEmailFeedClass = 'input is-danger';
    emailMsg = <p className="help is-danger">{this.state.emailErroMsg}</p>
   } else if(this.state.emailError === false) {
  	showLoginEmailFeedClass = 'input is-success';
   }

 // ---- password ----

 if (this.state.passError) {
  showLoginPassFeedClass = 'input is-danger';
  passMsg = <p className="help is-danger">Password cannot be empty.</p>
 }


   // ------- Btn CHECK ------- 
   let buttnSend =  <div className="button is-info is-rounded is-outlined" disabled>Log in</div>

   if (!this.state.protectButtn) { 
    buttnSend = <div className="button is-info is-rounded is-outlined " onClick={this.sendData}>Log in</div>	
 }
  // ------- SRV MSG -------
  let servErr = ''
  if (this.state.serverError) {
      servErr = <div className="notification is-danger">{this.state.serverMsg}</div>
  }
  if (this.state.serverError === false) {
      servErr = <div className="notification is-success">{this.state.serverMsg}</div>
  }
  // --------- redirect ------
  if (this.state.loginSuccess) {
      
    return <Redirect to='/dashboard' />
       
  }

    return(
        <div className="hero is-primary is-large">
      <div className="hero-body login-main  ">
        <h1 className="title has-text-centered is-size-2">Login</h1>
        <div className="columns is-centered ">
          <div className="column is-one-third">
            <div className="notification is-light">
              <figure className="image container is-96x96">
              <img src={Logo} alt="Manage your trips" />
              </figure>
              <div className="field">
                <label className="label">Name</label>
                <p className="control">
                  <input type="email"   onChange={this.handleChange} className={showLoginEmailFeedClass} id="email" placeholder="Email" />
                   
                </p>
                {emailMsg} 
              </div>


              <div className="field">
                <label className="label">Password:</label>
                <p className="control">
                  <input  type="password" onChange={this.handleChange} className={showLoginPassFeedClass}  id="password" placeholder="Password" />
                </p>
                {passMsg} 
              </div>
               {servErr}

              
              {buttnSend}
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
    }
}

export default  LoginPage;
