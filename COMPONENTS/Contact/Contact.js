import React from 'react';

export default class Contact extends React.Component {
  render() {

    var style = {
      width: "400px"
    }
    return(
      <form id="nb-form" className="contact-section" action="mailto:nathanmbivens@gmail.com">
        <div className="contact-container">
          <div className="contact-header">Interested in working with me?</div>
          <div className="contact-text-section">
          <div className="contact-subheader">Drop me a line about your project, and what you hope to accomplish.</div>
          </div>
          <div className="contact-item">
            <input type="submit" className="submit-button" value="Send Email" />
          </div>
        </div>
    </form>
    )
  }
}
