import React from 'react';

export default class About extends React.Component {
  render() {

    return(
      <div className="expertise-section">
      <div className="expertise-title">Expertise</div>

        <div className="expertise-grid">
            <div className="expertise-container">
              <div className="expertise-icon fa fa-3x fa-bolt" aria-hidden="true"></div>
              <div className="expertise-description-title">Vision</div>
              <div className="expertise-description">You need something to shift. We'll figure out what that is, come to a distinct plan of action, and I'll begin work on that vision. That includes concepts, wireframing, and brand adherence. </div>
            </div>
            <div className="expertise-container">
              <div className="expertise-icon fa fa-3x fa-code" aria-hidden="true"></div>
              <div className="expertise-description-title">Code</div>
              <div className="expertise-description">From HTML, CSS, and the Javascript ecosystem, I will code your website to fit your vision. I like coding from scratch, but can use frameworks such as Bootstrap and Materialize as well.</div>
            </div>
            <div className="expertise-container">
              <div className="expertise-icon fa fa-3x fa-photo" aria-hidden="true"></div>
              <div className="expertise-description-title">Media</div>
              <div className="expertise-description">With years of film production and photography experience, I supplement your website with high quality media, giving you the edge that will take your vision to the next level.</div>
            </div>
          </div>
      </div>

    )
  }
}
