import React from 'react';

export default class Banner extends React.Component {
  render() {

    var style = {
      backgroundImage: 'url(' + require('../../images/desk-background.jpg') + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    };
    return(
      <div className="banner-section" style={style}>
        <div className="banner-container" >
          <div className="banner-description">
            Thanks for checking out some of my web design work.
          </div>
          <div className="banner-description">
            I'll try to keep it simple.
          </div>
        </div>
      </div>
    )
  }
}
