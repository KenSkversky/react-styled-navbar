import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = ({ className, drawerHandler }) => (
  <header className={className}>
    <nav className='toolbar_nav'>
      <div className='toggle_button'>
        <DrawerToggleButton click={drawerHandler} />
      </div>
      <div
        className='toolbar_logo'
        style={{ fontFamily: 'Julius Sans One, sans-serif' }}
      >
        <a href='/'>
          <img
            src='ken-skversky.png'
            alt='ken skversky'
            style={{ height: '32px', marginRight: '14px' }}
          />
          <span
            style={{
              color: '#e96929',
              fontFamily: 'Julius Sans One, sans-serif',
              fontWeight: 'bold',
              fontSize: '36px',
            }}
          >
            k
          </span>
          <span
            style={{
              color: 'white',
              fontFamily: 'Julius Sans One, sans-serif',
              fontSize: '26px',
            }}
          >
            en
          </span>
          &nbsp;
          <span
            style={{
              color: '#e96929',
              fontFamily: 'Julius Sans One, sans-serif',
              fontWeight: 'bold',
              fontSize: '36px',
            }}
          >
            s
          </span>
          <span
            style={{
              color: 'white',
              fontFamily: 'Julius Sans One, sans-serif',
              fontSize: '26px',
            }}
          >
            kversky
          </span>
        </a>
        technology
      </div>
      <div className='spacer' />
      <div className='toolbar'>
        <ul>
          <li>
            <a href='/'>About us</a>
          </li>
          <li>
            <a href='/'>REGISTER</a>
          </li>
          <li>
            <a href='/'>LOGIN</a>
          </li>
          {/* <li>
            <a href='/'>Products</a>
          </li>
          <li>
            <a href='/'>Document</a>
          </li>
          <li>
            <a href='/'>Users</a>
          </li>
          <li>
            <a href='/'>Contact</a>
          </li> */}
        </ul>
      </div>
    </nav>
  </header>
);

Toolbar.propTypes = {
  className: PropTypes.string,
};

const StyledToolbar = styled(Toolbar)`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 56px;
  background: #521751;

  .toolbar_nav {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1.5rem;
  }

  .toolbar_logo {
    margin-left: 1rem;

    a {
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
    }
  }

  .spacer {
    flex: 1;
  }

  .toolbar ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .toolbar li {
    padding: 0 0.5rem;
  }

  .toolbar a {
    color: white;
    text-decoration: none;

    &:hover,
    &:active {
      color: #e96929;
      font-weight: bold;
    }
  }

  /* Mobile Screens */
  @media (max-width: 768px) {
    .toolbar {
      display: none;
    }
    .toolbar_logo img {
      display: none;
    }
  }

  /* Tablet and Desktop Screens */
  @media (min-width: 769px) {
    .toggle_button {
      display: none;
    }
    .toolbar_logo {
      margin-left: 1;
    }
  }
`;

StyledToolbar.displayName = 'Toolbar';

export default StyledToolbar;
