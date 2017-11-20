import React from 'react';

export default class SocialIcon extends React.Component {
  render() {

    var className = "social-icon fa fa-2x fa-" + this.props.photo + "";
    return(
      <div className="social-section">
        <a className={className} href={this.props.link}></a>
      </div>
    )
  }
}
