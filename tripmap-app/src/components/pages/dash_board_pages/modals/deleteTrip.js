import React, { Component } from 'react';




class DeleteTrip extends Component {
    constructor(props) {
        super(props);
           this.state = {
                test: 'test'                 

           }
      }
 
handleClickClose = () => {



  this.props.closeModal(false);
      // clossing modal

}

delete = () =>{
 
  this.props.daleteTrue(false)
}
render(){

    
      
    return(
        <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Delete Trip</p>
           </header>
          <section className="modal-card-body">
           <p>Are you sure you want to delete this trip ?</p>
           <br />
          
          </section>
          <footer className="modal-card-foot">
            <button className="button is-danger"  onClick={this.delete} >Delete</button>
            <button className="button" onClick={this.handleClickClose}>Cancel</button>
          </footer>
        </div>
      </div>
  );
    }
}

export default  DeleteTrip;
