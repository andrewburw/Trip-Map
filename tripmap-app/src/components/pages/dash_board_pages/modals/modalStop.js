import React, { Component } from 'react';




class AddStop extends Component {
    constructor(props) {
        super(props);
           this.state = {
                 title: '',
                 raiting: '',
                 comment: '',
                 errorInField: {title:null,
                                raiting: null,
                                text: null},
                btnSendStatus: false

           }
      }
handleClickClose = () => {

        this.props.closeModal('modalStop');
        // clossing modal
 }

checkInput = (val,field) => {
  
let result = {...this.state.errorInField};
  

  if (field === 'title') {
    
   // const reg =  /^\w+$/;
      const reg = /^[a-zA-Z0-9_\- ]{6,20}$/
    if(!reg.test(val)) {

     result.title = true;
      console.log('error')
    }else {
      result.title = false;
    } 


  } else if(field === 'raiting'){
    if (val === 'def') {
      result.raiting = true;
    } else {
      result.raiting = false;
    }


  } else if (field === 'text'){
    if(val.length < 5){
      result.text = true;
    } else {
      result.text = false;
    }

  }
 
 this.setState({'errorInField': result})
}


handleChangeRating = (e) => {
  this.checkInput(e.target.value,'raiting')
  this.setState({'raiting':e.target.value});
  
 }
handleAddText = (e) => {
  this.checkInput(e.target.value,'text')
  this.setState({'comment':e.target.value});

}
handleAddTitle = (e) => {

 this.checkInput(e.target.value.toString(),'title')
  this.setState({'title':e.target.value});

}
saveSpot = () => {

  
    this.props.data({
      title: this.state.title,
      raiting: this.state.raiting,
      comment: this.state.comment
    });
    this.handleClickClose()
 
}




  render(){
       console.log(this.state.errorInField);
// *********** INPUT ERRORS ***********************
    let inputClasserr,
        inputMessage,
        ratingMessage,
        raitingClassErr,
        textMessage,
        textClassErr,
        btnStatus = <button className="button is-success" onClick={this.saveSpot} disabled>Save changes</button>;
    // ****** title ******
    if (this.state.errorInField.title == null) {
      inputClasserr = 'input';
    } 
    if (this.state.errorInField.title === false) {
      inputClasserr = 'input is-success';
      inputMessage =<p className="help is-success">OK.</p>
    } 
    if(this.state.errorInField.title === true) {
      inputMessage = <p className="help is-danger">Sorry error in field.</p>
      inputClasserr = 'input is-danger';
    }
    // ****** raiting ******
    if (this.state.errorInField.raiting === null) {
      raitingClassErr = 'select';
    }
    if(this.state.errorInField.raiting === true) {
      ratingMessage = <p className="help is-danger">Sorry error in field.</p>
      raitingClassErr = 'select is-danger';
    } 
    if (this.state.errorInField.raiting === false) {
      ratingMessage = <p className="help is-success">Ok.</p>
      raitingClassErr = 'select is-success';
    }
    // ****** text ******
    if (this.state.errorInField.text === null) {
      textClassErr = 'textarea'
    
    }
    if (this.state.errorInField.text === true) {
      textClassErr = 'textarea is-danger'
      textMessage =  <p className="help is-danger">Text must be from 5 to 150 symbols.</p>
    }
    if (this.state.errorInField.text === false) {
      textClassErr = 'textarea is-success'
      textMessage =  <p className="help is-success">OK.</p>
    }
    // ****** button ******
    if (!Object.values(this.state.errorInField).includes(true) && !Object.values(this.state.errorInField).includes(null)) {
      btnStatus = <button className="button is-success" onClick={this.saveSpot}>Save changes</button>
    }


    return(
        <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add Stop/Camp</p>
            <button className="delete"  onClick={this.handleClickClose} aria-label="close"></button>
          </header>
          <section className="modal-card-body">
      
<div className="field">
  <label className="label">Spot Title</label>
  <div className="control has-icons-left has-icons-right">
    <input className={inputClasserr} type="text"  maxLength="30" onChange={this.handleAddTitle} placeholder="Title input"  />
    <span className="icon is-small is-left">
      <i className="fas fa-user"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </div>
</div>
 {inputMessage}

<div className="field">
  <label className="label">Your Spot Raiting</label>
  <div className="control">
    <div className={raitingClassErr}>
      <select value={this.state.raiting} onChange={this.handleChangeRating}>
        <option value="def">Select</option>
        <option value = "1">1</option>
        <option value = "2">2</option>
        <option value = "3">3</option>
        <option value = "4">4</option>
        <option value = "5">5</option>
        <option value = "6">6</option>
        <option value = "7">7</option>
        <option value = "8">8</option>
      </select>
    </div>
  </div>
</div>
{ratingMessage}
<div className="field">
  <label className="label">Comment</label>
  <div className="control">
    <textarea className={ textClassErr} value={this.state.value} onChange={this.handleAddText} maxLength="150" placeholder="Textarea"></textarea>
  </div>
</div>
{textMessage}



          </section>
          <footer className="modal-card-foot">
          {btnStatus}
            <button className="button" onClick={this.handleClickClose}>Cancel</button>
          </footer>
        </div>
      </div>
  );
    }
}

export default  AddStop;
