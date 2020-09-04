import React, { Component } from 'react';




class WarningSave extends Component {
   
handleClickClose = () => {



  this.props.closeModal(false);
      // clossing modal

}


render(){

    
      
    return(
        <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Warning!</p>
           </header>
          <section className="modal-card-body">
           <p className="title is-5">Please draw a trip! (Minimum two waypoints).</p>
           <br />
          
          </section>
          <footer className="modal-card-foot">
            <button className="button" onClick={this.handleClickClose}>Close</button>
          </footer>
        </div>
      </div>
  );
    }
}

export default  WarningSave;
