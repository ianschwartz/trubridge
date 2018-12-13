import React from 'react';
var FA = require('react-fontawesome')

const Services = () => {
  const style = {
    padding: '30px 10% 30px 10%',
    textTransform: 'uppercase',
  }
  const ulStyle = {
    listStyle: 'none',
  };

  const h4Style = {
    marginBottom: 3,
  };

  const smallStyle = {
    textTransform: 'none',
  }
  return (<div style={style} id='services' className="container-fluid">
    <div className="col-xs-12">
      <h2>Services</h2>
    </div>
    <div className="col-sm-4 col-sm-offset-2">
      <ul style={ulStyle}>
        <li>
          <h4 style={h4Style}><FA name='flag'/> Corporate Identity</h4>
          <div style={smallStyle}>Positioning and narrative</div>
        </li>
        <li>
          <h4 style={h4Style}>Corporate Branding</h4>
          <div style={smallStyle}>Naming and logo design</div>
        </li>
        <li>
          <h4 style={h4Style}>Graphic Design</h4>
          <div style={smallStyle}>Stationary, email and PowerPoint templates</div>
        </li>
      </ul>
    </div>
    <div className="col-sm-4">
      <ul style={ulStyle}>
        <li>
          <h4 style={h4Style}>Web Development</h4>
          <div style={smallStyle}>Website design, copywriting and programming</div>
        </li>
        <li>
          <h4 style={h4Style}>Investor Presentations</h4>
          <div style={smallStyle}>Graphics, copywriting and presentation caching</div>
        </li>
        <li>
          <h4 style={h4Style}>Investor Communications</h4>
          <div style={smallStyle}>Search, CRM and social media communications<br />
          Investor Presentations</div>
        </li>
      </ul>
    </div>
  </div>)
};

export default Services;
