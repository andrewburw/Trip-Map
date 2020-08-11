import React, { Component } from 'react';




class AddComment extends Component {
    constructor(props) {
        super(props);
           this.state = {
                 text: '',
                 editText: this.props.editData.comment,
                 modeEdit: false
                 

           }
      }
 handleClickClose = () => {

        this.props.closeModal('modalComment');
        // clossing modal
 }

 handleAddComment = () => {

  if (this.state.modeEdit === false) {
    this.props.data({text: this.state.text,
      id: '_' + Math.random().toString(36).substr(2, 9),
      edited: false });
  } else {
    this.props.data({text: this.state.editText,
      id: this.props.editData.id,
      edited: true });

  }
    
    this.handleClickClose()
 }


handleAddText = (e) => {
    this.setState({text: e.target.value});

}

hadleEditText = (e) => {

  this.setState({ editText: e.target.value});
  this.setState({ modeEdit: true}); // this needed to recognize if text is edited
}
  render(){
      let textAreaArea = <textarea className="textarea" value={this.state.text} onChange={this.handleAddText} maxLength="150"></textarea>

    if (this.props.editData.comment !== undefined) {
      textAreaArea = <textarea className="textarea" value={this.state.editText} onChange={this.hadleEditText} maxLength="150"></textarea>
    }
      
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
           {textAreaArea}
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
