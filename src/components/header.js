import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/trubridgelogo.png'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ margin: 0, flexGrow: 1 }}>
        <Link
          to="/"
          style={{
            color: '#637991',
            textDecoration: 'none',
          }}
        >
          <img src={Logo} />
        </Link>
      </div>

      <div style={{
        borderRight: 'solid 1px black',
        textTransform: 'uppercase',
        padding: '0 10px 0 10px',
        height: 30,
      }}>
        <Link
          to="/"
          style={{
            color: '#637991',
            textDecoration: 'none',
          }}
        >
          About Us
        </Link>
      </div>

      <div style={{
        borderRight: 'solid 1px black',
        textTransform: 'uppercase',
        padding: '0 10px 0 10px',
        height: 30,
      }}>
        <Link
          to="/"
          style={{
            color: '#637991',
            textDecoration: 'none',
          }}
        >
          Services
        </Link>
      </div>

      <div style={{
        textTransform: 'uppercase',
        padding: '0 10px 0 10px'
      }}>
        <Link
          to="/"
          style={{
            color: '#637991',
            textDecoration: 'none',
          }}
        >
          Contact
        </Link>
      </div>
    </div>
  </div>
)

export default Header
