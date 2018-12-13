import React from 'react';
import {blueColor, goldColor} from "../services/colors.service";

const AboutUs = () => {
  const style = {
    padding: '30px 10% 30px 10%',
    background: '#f9f9f9',
  };
  return (<div style={style} id="aboutus" className="container-fluid">
    <div className="col-xs-12" style={{
      textAlign: 'center',
    }}>
      <h1 style={{ color: goldColor, fontSize: '4em' }}>We're Trubridge Health.</h1>
      <p style={{
        fontSize: '1.5em',
        textAlign: 'center',
        color: blueColor,
      }}>The branding specialists that help biotech and health startups win the hearts and minds of potential investors.</p>
    </div>
    <div className="col-sm-6">
      <p>
        We crystallize company and product strategy. Create powerful brand identity.
        And give a small company everything it needs to make a big impression:
        corporate narrative, visual and graphic identity including logo, PowerPoint
        design, corporate websites and videos.
      </p>
      <p>
        In short, we design the suit of clothes a startup can wear for the most important job of all: Raising capital.
      </p>
    </div>
    <div className="col-sm-6">
      <p>
        We eat, sleep and breathe branding. It's in our blood.
      </p>
      <p>
        And, we have special pricing packages for small companies with big plans for the future.
      </p>
      <p>
        Let's talk about what we can do for you.
      </p>
      <p>
        <span style={{ color: goldColor }}>Contact:</span><br/>
        Trubridge Health President and Chief Strategist brand Dean Schwartz <a href="#contact">here</a>.
      </p>
    </div>
  </div>);
}

export default AboutUs;
