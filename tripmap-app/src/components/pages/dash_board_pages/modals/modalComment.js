import React, { Component } from 'react';




class AddComment extends Component {
    constructor(props) {
        super(props);
           this.state = {
                 text: this.props.dataEdit.comment,
                 modeEdit: false
                 

           }
      }
      /*

On the page draw a trip, an object with empty fields is created, it is sent to the add comment module, 
it is modified and returned back to the page draw a trip.
this allows you to simultaneously use the ability to add new data as well as modify data.
*/
 handleClickClose = () => {

        this.props.closeModal('modalComment');
        // closeing modal
 }

 handleAddComment = () => {

   
    this.props.data({comment: this.state.text,
                    id: this.props.dataEdit.id,
                    modeEdit: this.props.dataEdit.modyfy,
                    coordinates: this.props.dataEdit.coordinates
                    })
     
    
    this.handleClickClose()
 }


handleAddText = (e) => {
    this.setState({text: e.target.value});

}


  render(){

    console.log(this.props.dataEdit)
      
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
           <textarea className="textarea" value={this.state.text|| ''} onChange={this.handleAddText} maxLength="150"></textarea>
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
