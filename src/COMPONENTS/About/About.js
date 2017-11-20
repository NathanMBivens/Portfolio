import React from 'react';

export default class About extends React.Component {
  render() {

    var style = {
      backgroundImage: 'url(' + require('../../images/Headshot-nathan-1.jpeg') + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
    return(
      <div className="about-section">
        <div className="about-container">
          <div className="about-photo" style={style}></div>
          <div className="about-description-section">
            <div className="about-description">
            Hey there.
            </div>
            <div className="about-description">
            I am a web designer living in Huntsville, Alabama.
            </div>
            <div className="about-description">
            I have a passion for web design because it gives me the ability to build something from nothing.
            </div>

          </div>
        </div>
      </div>
    )
  }
}
