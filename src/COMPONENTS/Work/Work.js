import React from 'react';
import SingleWork from './SingleWork';

export default class Work extends React.Component {
  render() {


    return(
      <div className="work-section">
        <div className="work-section-title">Work</div>
        <div className="work-container">
          <SingleWork title="Sporta" description="A sports therapy website concept or theme." photo="Sporta_Mockup" />
          <SingleWork title="Leadership Conference 2018" description="A single-page conference website concept." photo="LeadershipConference_Mockup" />
          <SingleWork title="Mocha Bokeh" description="A single-page coffeehouse website concept." photo="MochaBokeh_Mockup"/>
        </div>
      </div>
    )
  }
}
