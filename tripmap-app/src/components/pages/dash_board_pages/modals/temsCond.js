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
            <p className="modal-card-title">Terms and conditions.</p>
           </header>
          <section className="modal-card-body" style={{'color': 'black'}}>
           <p className="title is-5" style={{'color': 'black'}}>Generic Terms of Service Template</p>
           <p>Please read these terms of service ("terms", "terms of service") carefully before using Trip Map website (the "service") operated by Andrew ("us", 'we", "our").</p>
           <br />
           <p className="title is-5" style={{'color': 'black'}}>Conditions of Use</p>
           <p>We will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this website, use its services or make a purchase, you accept the following conditions. This is why we urge you to read them carefully.</p>
           <br />
           <p className="title is-5" style={{'color': 'black'}}>Privacy Policy</p>
           <p>Before you continue using our website we advise you to read our privacy policy [link to privacy policy] regarding our user data collection. It will help you better understand our practices.</p>
           <br />
           <p className="title is-5" style={{'color': 'black'}}>Copyright</p>
           <p>Content published on this website (digital downloads, images, texts, graphics, logos) is the property of Andrew and/or its content creators and protected by international copyright laws. The entire compilation of the content found on this website is the exclusive property of Andrew, with copyright authorship for this compilation by Andrew.</p>
           <br />
           <p className="title is-5" style={{'color': 'black'}}>Communications</p>
           <p>The entire communication with us is electronic. Every time you send us an email or visit our website, you are going to be communicating with us. 
               You hereby consent to receive communications from us. If you subscribe to the news on our website, you are going to receive regular emails from us. 
               We will continue to communicate with you by posting news and notices on our website and by sending you emails. You also agree that all notices, disclosures, 
               agreements and other communications we provide to you electronically meet the legal requirements that such communications be in writing.</p>
           <br />
           <p className="title is-5" style={{'color': 'black'}}>Applicable Law</p>
           <p>By visiting this website, you agree that the laws of the [your location], without regard to principles of conflict laws, will govern these terms of service, or any dispute of any sort that might come between Andrew and you, or its business partners and associates.</p>
           <br />
           <p className="title is-5" style={{'color': 'black'}}>Disputes</p>
           <p>Any dispute related in any way to your visit to this website or to products you purchase from us shall be arbitrated by state or federal court [your location] and you consent to exclusive jurisdiction and venue of such courts.</p>
           <br />
           <p className="title is-5" style={{'color': 'black'}}>Comments, Reviews, and Emails</p>
           <p>Visitors may post content as long as it is not obscene, illegal, defamatory, threatening, infringing of intellectual property rights, 
               invasive of privacy or injurious in any other way to third parties. Content has to be free of software viruses, political campaign, and commercial solicitation.
               We reserve all rights (but not the obligation) to remove and/or edit such content. When you post your content, you grant Andrew non-exclusive, 
               royalty-free and irrevocable right to use, reproduce, publish, modify such content throughout the world in any media.</p>
           <br />
           <p className="title is-5" style={{'color': 'black'}}>License and Site Access</p>
           <p>We grant you a limited license to access and make personal use of this website. You are not allowed to download or modify it. This may be done only with written consent from us.</p>
           <br />
           <p className="title is-5" style={{'color': 'black'}}>User Account</p>
           <p>If you are an owner of an account on this website, you are solely responsible for maintaining the confidentiality of your private user details (username and password). You are responsible for all activities that occur under your account or password.
              We reserve all rights to terminate accounts, edit or remove content and cancel orders in their sole discretion..</p>
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
