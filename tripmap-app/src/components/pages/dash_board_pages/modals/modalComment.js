import React, { Component } from 'react';




class AddComment extends Component {
    constructor(props) {
        super(props);
           this.state = {
                 text: ''

           }
      }
 handleClickClose = () => {

        this.props.closeModal('modalComment');
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
            <p className="modal-card-title">Add comment</p>
            <button className="delete"  onClick={this.handleClickClose} aria-label="close"></button>
          </header>
          <section className="modal-card-body">
           <h1>Add your comment for this spot:</h1>
           <br />
           <textarea className="textarea" value={this.state.value} onChange={this.handleAddText} maxLength="150"></textarea>
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

export default  AddComment;
