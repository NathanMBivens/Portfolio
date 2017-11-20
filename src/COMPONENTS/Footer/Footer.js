import React from 'react';
import SocialIcon from '../SocialIcons/SocialIcon';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-section">
        <div className="footer-container">
          <div className="footer-description">
            Homemade Southern Code.
          </div>
          <div className="footer-sub-description">
          That means, yes, I made this from scratch. © 2017
          </div>
          <div className="footer-social-icons">
            <SocialIcon photo="instagram" link="https://www.instagram.com/nathanmbivens"/>
            <SocialIcon photo="linkedin" link="https://www.linkedin.com/in/nathanbivens/"/>
            <SocialIcon photo="github" link="https://github.com/NathanMBivens"/>
          </div>
        </div>
      </div>
    )
  }
}
