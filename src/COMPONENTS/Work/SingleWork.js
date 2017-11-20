import React from 'react';

export default class About extends React.Component {

  render() {

    var style = {
      backgroundImage: 'url(' + require('../../images/'+ this.props.photo + '.png') + ')'
    };
    return(
      <div className="single-work">
        <div className="work-picture" style={style}></div>
        <div className="work-text-container">
        <div className="work-title">{this.props.title}</div>
        <div className="work-description">{this.props.description}</div>
        <div className="work-button">Visit</div>
        </div>
      </div>
    )
  }
}
