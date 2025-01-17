import React, { Component } from 'react';
import Logo from '../img/trip.png';
import {Redirect} from "react-router-dom";
import TermsCond from "./dash_board_pages/modals/temsCond"
import configFetch from './../../fetch_config/config.js';



class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          pass1: '', 
          pass2: '',
          name: '',
          about: '',
          checkBox: '',
          errorsInField: {
              email:null,
              password1:null,
              password2:null,
              passMatchEror: null,
              name: null,
              about: null,
              checkBox: null
           },
          serverError: null,
          serverMsg: '',
          protectButtn: false,
          registerSuccess: false,
          termsCondModal: false
          
          };
  
  
      }

handleSubmit = () => {

     

  // ************** data send to server fnc *****************
  
  const dataToSend = {
   password: this.state.pass1,
   email: this.state.email,
   name: this.state.name,
   about: this.state.about,
   registerData: new Date().toLocaleDateString()
    }
   
    this.setState({'serverError':null}); // turn off massage "Good, password match!"
    this.setState({protectButtn: true}) // protect button register from multiply press


   
    fetch(configFetch.config.registerPageAdress, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json;charset=utf-8'
     
   },
   body: JSON.stringify(dataToSend)
 
   }).then(response => response.json()
      
   ).then(data => {
    
    if (data.errorStatus === true) {
      this.setState({protectButtn: false})  
      this.setState({serverError: true});
      this.setState({serverMsg: data.messege});
 
 
        } else if(typeof data.errors === "object" ) {
      
        let temp = [];
      this.setState({serverError: true});
      this.setState({protectButtn: false}) ; 
           
      Array.from(data.errors).map((item, i) => { 
            
        temp.push(item['msg']);
        return '';
      })

      this.setState({serverMsg: temp});



      } else {
          // if everything is ok (no errors.)

    this.setState({serverError: false});
    this.setState({serverMsg: 'Register success!'});
    
    setTimeout(() => {
      this.setState({registerSuccess: true}); // redirect occurs after the message about successful registration
    }, 1500);



      }
   

   }).catch(err => {
      console.error(err)
      this.setState({serverError: true});
      this.setState({serverMsg: err.toString()});
   });


}

handleChange = (e) =>{
  
  const id = e.target.id;
    if (id === 'checkBox') {
      this.setState(state => ({
        checkBox: !state.checkBox
      }));
      
      this.checkInputData(this.state.checkBox,id) 
    } else {
  
  this.setState({[id] : e.target.value});
       this.checkInputData(e.target.value,e.target.id) 
    }
}

checkInputData = (data,feild) => {
	let erorsData = {...this.state.errorsInField};
	let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	let rePass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
	let reName = /^(\w{6,15})$/;

	


	if (feild === 'email') {
		
		regEmail.test(data)  ?	erorsData['email'] = false : erorsData['email'] = true;
	
	} else if(feild === 'pass1' || feild === 'pass2'){
	     
		// at least one number, one lowercase and one uppercase letter
		// at least six characters
		if (feild==='pass1') {
     
			rePass.test(data)  ?	erorsData['password1'] = false : erorsData['password1'] = true;
			
			
		} else if(feild==='pass2'){
			rePass.test(data)  ?	erorsData['password2'] = false : erorsData['password2'] = true;
    
		}
		  // check if both passwords match
		  setTimeout(() => {
	         //without async problem with pass comparison
		
			if (this.state.pass1 !== this.state.pass2  ) {
				
				 // value is saved to errorsInFields -> if passwords do not match value set true (has errors)
				 erorsData['passMatchEror'] = true ;
			  this.setState({'serverMsg':"Password do not match"});
			  this.setState({'serverError':true});
		
			} else {
				erorsData['passMatchEror'] = false;
			  this.setState({'serverMsg':"Good! password match!"});
			  this.setState({'serverError':false});
			} 
	
		  }, 1); 
		 
		 
	  
	} else if(feild === 'name'){
    
	 reName.test(data)  ?	erorsData['name'] = false : erorsData['name'] = true;
	   
        
	} else if (feild === 'about') {
    
    data.length > 5 ? erorsData['about'] = false : erorsData['about'] = true;


  } else if (feild === 'checkBox') {
     
      !data  ? erorsData['checkBox'] = false : erorsData['checkBox'] = true;


  } 
	this.setState({errorsInField:erorsData});
} 


  render(){
      
     // ------- PASS CHECK -------
    let passClassErr = 'input';
    let passMsg = '';
    if (this.state.errorsInField.password1 ) {
        passClassErr = 'input is-danger';
        passMsg = <p className="help is-danger">Contains at least one digit, at least one lowercase character,at least one uppercase character, max length 20, min length 6</p>
    } else if(this.state.errorsInField.password1 === false) {
        passClassErr = 'input is-success';
        passMsg = <p className="help is-success">Ok</p>
    }

    // ------- SRV MSG -------
    let servErr = ''
    if (this.state.serverError) {
        servErr = <div className="notification is-danger">{this.state.serverMsg}</div>
    }
    if (this.state.serverError === false) {
        servErr = <div className="notification is-success">{this.state.serverMsg}</div>
    }
    
     // ------- NAME CHECK -------

     let nameClassErr = 'input';
     let nameMsg = '';
     if (this.state.errorsInField.name ) {
        nameClassErr = 'input is-danger';
        nameMsg = <p className="help is-danger">Please enter valid Name.Username cannot be blank! Username must contain only letters, numbers and underscores! min length 6, max length 15</p>
     } 

     if(this.state.errorsInField.name === false ){
        nameClassErr = 'input is-success';
        nameMsg =  <p className="help is-success">Username is ok</p>
     }
    // ------- EMAIL CHECK -------
     let emailClassErr = 'input';
     let emailMsg = '';
     if (this.state.errorsInField.email ) {
        emailClassErr = 'input is-danger';
        emailMsg = <p className="help is-danger">Please enter valid email</p>

     } else if(this.state.errorsInField.email === false ){
        emailClassErr = 'input is-success';
        emailMsg =  <p className="help is-success">Email is ok</p>
     }

    // ------- Btn CHECK ------- 
	let buttnSend =  <div className="button is-info is-rounded is-outlined" disabled>Register</div>

    if (Object.values(this.state.errorsInField).indexOf(true) < 0 && Object.values(this.state.errorsInField).indexOf(null) < 0 && !this.state.protectButtn) { 
		buttnSend = <div className="button is-info is-rounded is-outlined " onClick={this.handleSubmit}>Register</div>	
  }
  // ------- ABOUT CHECK -------

  let aboutClassErr = 'textarea';
  let aboutMsg = '';
  if (this.state.errorsInField.about ) {
    aboutClassErr = 'textarea is-danger';
    aboutMsg = <p className="help is-danger">Min length 6, max length 150</p>
  } 
  // --------- redirect of siccess login ---

   if (this.state.registerSuccess) {
      
    return <Redirect to='/loginpage' />
    
     
   }

  // --------- Terms & Cond -----------------
  let termsClassErr = 'checkbox';
  let termsMsg = '';
  if (this.state.errorsInField.checkBox ) {
    termsClassErr = 'checkbox is-danger';
    termsMsg = <p className="help is-danger">Must be checked</p>
  } 
     let renderTCModal = ''
   if (this.state.termsCondModal) {
    renderTCModal = <TermsCond closeModal={()=>{this.setState({termsCondModal: false})}}/>
   }
    return(
        <div className="hero is-primary is-large">
      {renderTCModal}
      <div className="hero-body reg-main">
      
        <h1 className="title has-text-centered is-size-2">Register your account</h1>
        <div className="columns is-centered">
         
          <div className="column is-one-third">
            <div className="notification is-light">
              
              <figure className="image container is-96x96">
              <img src={Logo} alt="Manage your trips" width="50" height="50" />
              </figure>
              <p> Please fill out the form below to create a new account.</p>
              <div className="field">
                <label className="label">Name:</label>
                <p className="control">
                  <input className={ nameClassErr} id="name" onChange={this.handleChange} type="text" placeholder="Name" />
                </p>
                 {nameMsg}
              </div>
              <div className="field">
                <label className="label">E-mail:</label>
                <p className="control">
                  <input className={emailClassErr} id="email" onChange={this.handleChange} type="email" placeholder="Email" />
                  
                </p>
                {emailMsg}
              </div>
              <div className="field">
                <label className="label">Password:</label>
                <p className="control">
                  <input className={passClassErr} id="pass1" onChange={this.handleChange} type="password" placeholder="Password" />
                 
                </p>
                { passMsg}
              </div>

              <div className="field">
                <label className="label">Repeat Password:</label>
                <p className="control">
                  <input className={passClassErr} id="pass2" onChange={this.handleChange} type="password" placeholder="Password" />
                 
                </p>
              </div>

              <div className="field">
                <label className="label">About you</label>
                  <div className="control">
                    <textarea className={aboutClassErr} id="about" onChange={this.handleChange}  maxLength="150" placeholder="Enter msg, max length 150 sybols"></textarea>
                  </div>
                   {aboutMsg}  
             </div>

              <div className="field">
                <div className="control">
                  <label className="checkbox">
                    <input type="checkbox" id="checkBox" className={termsClassErr} onChange={this.handleChange} />
                         I agree to the <b><button  className="link-button" onClick={()=>{this.setState({termsCondModal:true})}}>terms and conditions</button></b>.
                     </label>
                 </div>
                 {termsMsg}
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

export default  RegisterPage;
