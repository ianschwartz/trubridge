import React from 'react';

const Footer = () => {
  const style = {
    background: '#556c8b',
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
    <div style={style}>
      <h2>Trubridge Health</h2>
      <h4>Dean Schwartz</h4>
      <div>917-222-2222</div>
      <div>dean@trubridgehealth.com</div>
      <div>122 Address St, NYC, 10011</div>
      <div style={starbucksStyle} id='starbucks-disclaimer'>
        * Starbucks logo is a registered trademark of starbucks inc.
        Use does not imply any affiliation with or endoresement by Starbucks.
      </div>
    </div>
  )
}

export default Footer;
