import React from 'react';
import ReactDOM from 'react-dom';
import Navigation_NB from './Navigation_NB';
import Banner_NB from './Banner_NB';
import About_NB from './About_NB';
import Expertise_NB from './Expertise_NB';
import Work_NB from './Work_NB';
import Contact_NB from './Contact_NB';
import Footer_NB from './Footer_NB';

export default class NB_Portfolio extends React.Component {
  render() {
    return (
      <div>
        <Navigation_NB />
        <Banner_NB />
        <About_NB />
        <Expertise_NB />
        <Work_NB />
        <Contact_NB />
        <Footer_NB />
      </div>
    )
  }
}
