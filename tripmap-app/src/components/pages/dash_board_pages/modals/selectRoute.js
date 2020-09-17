import React, { Component } from 'react';
import configFetch from './../../../../fetch_config/config.js';



class SelectRoute extends Component {
    
       
           state = {
                data: ''               

           }
      
 
handleClickClose = () => {

  this.props.closeModal(false);
      // clossing modal

}


selected = (e) => {

   // return data to main "draw trip" component
  this.props.data(this.state.data.filter(x => x._id === e.target.getAttribute('mykeyvalue')))
  this.handleClickClose()
}
search = (e) =>{
   
   if (e.target.value.length > 1) {
    let data = {
      searchString: e.target.value
    }
    const auth = 'Bearer ' + localStorage.getItem('token');
  
  fetch(configFetch.config.modalSearchAdress, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': auth
      
    },
    body: JSON.stringify(data)
  
    }).then(response => response.json()
       
    ).then(data => {
      
    if (data.errorStatus === true) {
        console.log('error'+ data)
    
    }  else {
          // if everything is ok (no errors.)
   
        this.setState({data: data}); 
    
     
 
       }
    
 
 
    }).catch(err => {
       console.error(err)
   
    });
 
   
  }

  
}
render(){

    
      
    return(
        <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Select Existing Routes</p>
           </header>
          <section className="modal-card-body">
           
           <br />

           <div className="field">
             <label className="label">Search Route</label>
               <div className="control">
                 <input className="input" type="text" id="tripName" onChange={this.search} maxLength="30" placeholder="Please Type Trip Name" autoComplete="off"/>
                </div>
            </div>
              <p>Select Trip:</p>
              <hr />
            <table className="table is-fullwidth ">
          
             <tbody className=" classForHover">
            { Array.from(this.state.data || []).map((item, i) => {
  
return  (
   
  <tr onClick={this.selected}key={item['_id']}>
    <td mykeyvalue={item['_id']}>{item['tripName']}</td>
    <td mykeyvalue={item['_id']}>{item['tripDistance']} km</td>
  </tr>
    
 )})}
    </tbody>
    </table>
          </section>
          <footer className="modal-card-foot">
           
            <button className="button" onClick={this.handleClickClose}>Close</button>
          </footer>
        </div>
      </div>
  );
    }
}

export default SelectRoute;
