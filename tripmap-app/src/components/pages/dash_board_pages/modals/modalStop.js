import React, { Component } from 'react';




class AddStop extends Component {
    constructor(props) {
        super(props);
           this.state = {
                 text: ''

           }
      }
 handleClickClose = () => {

        this.props.closeModal('modalStop');
        // clossing modal
 }
 handleAddComment = () => {
    this.props.data(this.state.text);
    this.handleClickClose()
 }
handleAddText = (e) => {
    this.setState({text: e.target.value});

}
  render(){
      
    
    
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
    <input className="input is-success" type="text" placeholder="Text input"  />
    <span className="icon is-small is-left">
      <i className="fas fa-user"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </div>
  <p className="help is-success">This username is available</p>
</div>


<div className="field">
  <label className="label">Your Spot Raiting</label>
  <div className="control">
    <div className="select">
      <select>
        <option>Select</option>
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
</div>

<div className="field">
  <label className="label">Comment</label>
  <div className="control">
    <textarea className="textarea" placeholder="Textarea"></textarea>
  </div>
</div>



<div className="field">
  <div className="control">
    <label className="radio">
      <input type="radio" name="question" />
      Yes
    </label>
    <label className="radio">
      <input type="radio" name="question" />
      No
    </label>
  </div>
</div>

          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={this.handleAddComment}>Save changes</button>
            <button className="button" onClick={this.handleClickClose}>Cancel</button>
          </footer>
        </div>
      </div>
  );
    }
}

export default  AddStop;
