import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Logo from '../images/trubridgelogo.png'


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div style={{ height: 90}}>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img src={Logo} style={{ height: 'auto', width: 130 }} />
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar style={{
              display: 'block',
              width: '90%',
              position: 'absolute',
              right: 0,
              top: 25,
              listStyle: 'none',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100%',
                textTransform: 'uppercase'
              }}>
                <NavItem style={{
                  padding: '5px 20px 5px 5px',
                }}>
                  <a href="#aboutus">About Us</a>
                </NavItem>
                <NavItem style={{
                  padding: '5px 20px 5px 5px',
                }}>
                  <a href="#services">Services</a>
                </NavItem>
                <NavItem style={{
                  padding: '5px 20px 5px 5px',
                }}>
                  <a href="#contact">Contact</a>
                </NavItem>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
