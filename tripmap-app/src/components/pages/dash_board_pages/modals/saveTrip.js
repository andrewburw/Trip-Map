import React, { Component } from 'react';




class SaveTrip extends Component {
    constructor(props) {
        super(props);
           this.state = {
                 tripName: '',
                 tripBy: '',
                 tripDescrp: '',
                 tripRate: '',
                 errors: {
                    tripName: '',
                    tripBy: '',
                    tripDescrp: '',
                    tripRate: ''

                 },
                sendedDataSuccess: '',
                dataSending: true   // protect from multyply pressing btn send
                 

           }
      }
      
checkInput = (val,field) => {
  
        let result = {...this.state.errors};
          
        
          if (field === 'title') {
            
           // const reg =  /^\w+$/;
              const reg = /^[a-zA-Z0-9_\- ]{6,20}$/
            if(!reg.test(val)) {
        
             result.tripName = true;
             
            }else {
              result.tripName = false;
            } 
        } else if(field === 'tripBy'){

            val === 'def' ? result.tripBy = true : result.tripBy = false;
           
        } else if (field === 'tripDescrp'){

            val.length < 5 ?   result.tripDescrp = true : result.tripDescrp = false;
                  
        } else if (field === 'tripRate'){

            val === 'def' ? result.tripRate = true : result.tripRate = false;
                           
        }


    this.setState({errors: result})
}

 handleClickClose = () => {

        this.props.closeModal('saveTrip');
        // closeing modal
 }
 handleChange = (e) => {
     let id = e.target.id
    this.checkInput(e.target.value,id)
    this.setState({id : e.target.value});
  
}
 


handleSubmit = () => {
   this.setState({sendedDataSuccess: true})
   this.setState({dataSending: false})
    setTimeout(() => {
        this.handleClickClose()
    },3000);

}


  render(){

     // ************* ERRORS *******************
    let errorsViz = {
        inputSuccessclass : 'input is-success',
        messageSucces: <p className="help is-success">OK.</p>,
        inputErrorclass: 'input is-danger',
        messageError: <p className="help is-danger">Sorry error in field.</p>,
        selectSuccessCls: 'select is-success',
        textAreaSuccesCls: 'textarea is-success',
        textAreaErrorCls: 'textarea is-danger'
    }

    let titleClass = 'input';
    let titleMsg = <p className="help">Best practice: "Start route - End route"</p>;
    let tripByClass = 'select is-danger';
    let tripByMsg = <p className="help is-danger">Plz select.</p>;
    let textAreaClass = 'textarea';
    let textAreaMsg = '';
    let tipRateClass = 'select is-danger';
    let tripRateMsg = <p className="help is-danger">Plz select.</p>;
  // ******************* TRIP TITLE *********************   
    if(this.state.errors.tripName === true) {
        titleMsg = errorsViz.messageError;
        titleClass = errorsViz.inputErrorclass;
      }
     if(this.state.errors.tripName === false) {
        titleMsg = errorsViz.messageSucces;
        titleClass = errorsViz.inputSuccessclass;
    }
 // ******************* TRIP BY *************************  
    if(this.state.errors.tripBy === false) {
        tripByMsg  = errorsViz.messageSucces;
        tripByClass = errorsViz.selectSuccessCls;
    }
// ******************** TRIP DESCRIPTION ****************
    if(this.state.errors.tripDescrp === true) {
        textAreaMsg = errorsViz.messageError;
        textAreaClass = errorsViz.textAreaErrorCls;
    }
    if(this.state.errors.tripDescrp === false) {
        textAreaMsg = errorsViz.messageSucces;
        textAreaClass = errorsViz.textAreaSuccesCls;
    }
// ******************** TRIP RATE ***********************
if(this.state.errors.tripRate === false) {
    tripRateMsg  = errorsViz.messageSucces;
    tipRateClass = errorsViz.selectSuccessCls;
}
// ******************** BUTTON **************************
let btnSave = <button className="button is-success" disabled>Save changes</button>;
  
if (!Object.values(this.state.errors).includes(true) && !Object.values(this.state.errors).includes('') && this.state.dataSending) {
    btnSave = <button className="button is-success" onClick={this.handleSubmit}>Save changes</button>
}

// ******************** SENDED MSG **************************
let msg = '';
if (this.state.sendedDataSuccess) {
    msg = <div className="notification is-success">Data sended succesfully. </div>
}
if (this.state.sendedDataSuccess === false) {
    msg = <div className="notification is-danger">Error in data send. </div>
}  


    return(
        <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Save Your Trip</p>
            <button className="delete"  onClick={this.handleClickClose} aria-label="close"></button>
          </header>
          <section className="modal-card-body">
           <h1>Please fill in the input fields:</h1>
           <br />


           <div className="field">
  <label className="label">Your Trip Name</label>
  <div className="control">
    <input className={ titleClass} type="text" id="title" onChange={this.handleChange} maxLength="30" placeholder="Enter Trip Name" />
  </div>
  {titleMsg}
</div>



<div className="field">
  <label className="label">Tirp by</label>
  <div className="control">
    <div className={tripByClass}>
      <select id="tripBy" onChange={this.handleChange}>
        <option>Select dropdown</option>
        <option>by boats</option>
        <option>by walk</option>
        <option>by bicycle</option>
      </select>
    </div>
  </div>
  { tripByMsg}
</div>



<div className="field">
  <label className="label">Trip description</label>
  <div className="control">
    <textarea className={textAreaClass} id="tripDescrp" onChange={this.handleChange}  maxLength="150" placeholder="Enter msg, max length 150 sybols"></textarea>
  </div>
  { textAreaMsg}
</div>
 

<div className="field">
  <label className="label">Rate trip</label>
  <div className="control">
    <div  className={tipRateClass} >
      <select id="tripRate"  onChange={this.handleChange}>
        <option >Select dropdown</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
      </select>
    </div>
  </div>
  { tripRateMsg}
</div>

<div className="field">
  <label className="label">Trip Length</label>
  <div className="control">
    <p>{this.props.tripLength} km.</p>
  </div>
 
</div>
{msg}
          </section>
          <footer className="modal-card-foot">
            {btnSave}
            <button className="button" onClick={this.handleClickClose} >Cancel</button>
          </footer>
        </div>
      </div>
  );
    }
}

export default  SaveTrip ;
