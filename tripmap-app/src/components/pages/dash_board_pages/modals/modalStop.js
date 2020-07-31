import React, { Component } from 'react';




class AddStop extends Component {
    constructor(props) {
        super(props);
           this.state = {
                 title: '',
                 raiting: '',
                 comment: '',
                 errorInField: null

           }
      }
handleClickClose = () => {

        this.props.closeModal('modalStop');
        // clossing modal
 }

checkInput = (val,field) => {
  
let result = {title: false};
  if (field === 'title') {
    
   // const reg =  /^\w+$/;
      const reg = /^[a-zA-Z0-9_\- ]{6,20}$/
    if(!reg.test(val) && val !=='') {

     result.title = true;
      console.log('error')
    } 
  }
 
 this.setState({'errorInField': result})
}


handleChangeRating = (e) => {

  this.setState({'raiting':e.target.value});

 }
handleAddText = (e) => {

  this.setState({'comment':e.target.value});

}
handleAddTitle = (e) => {

 this.checkInput(e.target.value.toString(),'title')
  this.setState({'title':e.target.value});

}
saveSpot = () => {






}
  render(){
// *********** INPUT ERRORS ***********************
    let inputClasserr,inputMessage;
    if (this.state.errorInField == null) {
      inputClasserr = 'input'
    } else if (this.state.errorInField.title === false) {
      inputClasserr = 'input is-success'
      inputMessage =<p className="help is-success">OK.</p>
    } else if(this.state.errorInField.title === true) {
      inputMessage = <p className="help is-danger">Sorry error in field.</p>
      inputClasserr = 'input is-danger'
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
    <div className="select">
      <select value={this.state.raitinf} onChange={this.handleChangeRating}>
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

<div className="field">
  <label className="label">Comment</label>
  <div className="control">
    <textarea className="textarea" value={this.state.value} onChange={this.handleAddText} maxLength="150" placeholder="Textarea"></textarea>
  </div>
</div>




          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={this.saveSpot}>Save changes</button>
            <button className="button" onClick={this.handleClickClose}>Cancel</button>
          </footer>
        </div>
      </div>
  );
    }
}

export default  AddStop;
