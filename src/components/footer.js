import React from 'react';
import { blueColor } from "../services/colors.service";

const Footer = () => {
  const style = {
    background: blueColor,
    position: 'relative',
    padding: '30px 10px 30px 10%',
    color: 'white',
    textTransform: 'uppercase',
  };
  const starbucksStyle = {
    fontSize: '40%',
    width: '45%',
    position: 'absolute',
    right: 0,
    bottom: 20,
  }
  return (
    <div style={style} className="container-fluid">
      <div className="col-sm-6">
        <h2>Trubridge Health</h2>
        <h4>Dean Schwartz</h4>
        <div><a href="tel:646-389-4423">646-389-4423</a></div>
        <div><a href="mailto://dean@trubridgehealth.com" style={{
          color: 'white',
        }}>dean@trubridgehealth.com</a></div>
      </div>
      <div style={starbucksStyle} id='starbucks-disclaimer'>
        * Starbucks logo is a registered trademark of starbucks inc.
        Use does not imply any affiliation with or endoresement by Starbucks.
      </div>
    </div>
  )
}

export default Footer;
