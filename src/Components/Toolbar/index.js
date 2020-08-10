import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import kenskversky from '../../images/kenskversky.png';

/********************     BEGIN STYLED COMPONENTS      ********************/

const BoldHeaderText = styled.span`
  font-family: Julius Sans One, sans-serif;
  font-weight: bold;
  font-size: 2.3rem;
  color: #e96929;
  text-transform: uppercase;
  text-decoration: none;
`;

const RegularHeaderText = styled.span`
  font-family: Julius Sans One, sans-serif;
  font-size: 1.6rem;
  color: #fff;
  text-transform: lowercase;
  text-decoration: none;
`;

const NavbarImage = styled.img`
  height: 32px;
  margin-right: 14px;
`;

/********************     END STYLED COMPONENTS      ********************/

const Toolbar = ({ className, drawerHandler }) => (
  <header className={className}>
    <nav className='toolbar_nav'>
      <div className='toggle_button'>
        <DrawerToggleButton click={drawerHandler} />
      </div>
      <div className='toolbar_logo' style={{ marginLeft: '0.8rem' }}>
        <a href='/'>
          <NavbarImage src={kenskversky} alt='kenskversky'></NavbarImage>
          <BoldHeaderText>k</BoldHeaderText>
          <RegularHeaderText>en </RegularHeaderText>

          <BoldHeaderText>s</BoldHeaderText>
          <RegularHeaderText>kversky</RegularHeaderText>
        </a>
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
    color: #fff;
    font-size: 1.1rem;
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
