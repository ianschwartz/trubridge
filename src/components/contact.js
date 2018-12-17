import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { goldColor } from "../services/colors.service";

const Contact = () => {
  const style = {
    padding: '30px 10% 30px 10%',
    background: goldColor,
    textTransform: 'uppercase',
  }
  return (<div style={style} id='contact' className="container-fluid">
      <div className="col-sm-6"><h2>Get in Touch</h2>
      <Form action="https://formspree.io/dschwartz@trubridge.biz" method="POST">
        <FormGroup>
          <Input type="text" name="name" id="name" placeholder="NAME" />
        </FormGroup>
        <FormGroup>
          <Input type="text" name="company" id="company" placeholder="COMPANY" />
        </FormGroup>
        <FormGroup>
          <Input type="email" name="_replyto" id="_replyto" placeholder="EMAIL" />
        </FormGroup>
        <FormGroup>
          <Input type="tel" name="phone" id="phone" placeholder="PHONE" />
        </FormGroup>
        <div style={{
          textAlign: 'right'
        }}>
          <Button style={{
            background: '#556c8b',
            color: 'white',
            textTransform: 'uppercase',
            borderRadius: 0,
            padding: '5px 20px 5px 20px',
          }}>Submit</Button>
        </div>
      </Form>
      </div>
    <div className="col-sm-5 col-sm-offset-1">
      <h3>Start-up Branding Packages Include:</h3>
      <ul>
        <li>Corporate Positioning</li>
        <li>Identity Statement</li>
        <li>Logo Design</li>
        <li>
          Visual Identity
          <ul style={{
            listStyleType: "'>'",
          }}>
            <li style={{ paddingLeft: 3 }}>Stationary</li>
            <li style={{ paddingLeft: 3 }}>Powerpoint Template</li>
            <li style={{ paddingLeft: 3 }}>Email Template</li>
          </ul>
        </li>
        <li>Website</li>
        <li>eBrochure</li>
        <li>Style Guide</li>
      </ul>
    </div>
  </div>)
};

export default Contact;
