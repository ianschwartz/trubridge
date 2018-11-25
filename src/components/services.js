import React from 'react';
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
  return (<div style={style} className="container-fluid">
    <div class="col-xs-12">
      <h2>Services</h2>
    </div>
    <div className="col-sm-4 col-sm-offset-2">
      <ul style={ulStyle}>
        <li>
          <h4 style={h4Style}>Corporate Identity</h4>
          <small style={smallStyle}>Positioning and narrative</small>
        </li>
        <li>
          <h4 style={h4Style}>Corporate Branding</h4>
          <small style={smallStyle}>Naming and logo design</small>
        </li>
        <li>
          <h4 style={h4Style}>Graphic Design</h4>
          <small style={smallStyle}>Stationary, email and PowerPoint templates</small>
        </li>
      </ul>
    </div>
    <div className="col-sm-4">
      <ul style={ulStyle}>
        <li>
          <h4 style={h4Style}>Web Development</h4>
          <small style={smallStyle}>Website design, copywriting and programming</small>
        </li>
        <li>
          <h4 style={h4Style}>Investor Presentations</h4>
          <small style={smallStyle}>Graphics, copywriting and presentation caching</small>
        </li>
        <li>
          <h4 style={h4Style}>Investor Communications</h4>
          <small style={smallStyle}>Search, CRM and social media communications<br />
          Investor Presentations</small>
        </li>
      </ul>
    </div>
  </div>)
};

export default Services;
