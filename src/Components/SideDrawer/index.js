import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const SideDrawer = ({ className }) => (
  <nav className={className}>
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
          <a href="/">Users</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li> */}
    </ul>
  </nav>
);

SideDrawer.propTypes = {
  className: PropTypes.string,
};

const StyledSideDrawer = styled(SideDrawer)`
  height: 100%;
  background: white;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;
  ${(props) =>
    props.show
      ? css`
          transform: translateX(0);
          transition: transform 0.3s ease-out;
        `
      : css`
          transform: translateX(-100%);
          transition: transform 0.3s ease-in;
        `}

  ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  li {
    margin: 0.5rem 0;
  }

  a {
    color: #521751;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover,
    &:active {
      color: #fa923f;
      font-weight: bold;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
StyledSideDrawer.displayName = 'SideDrawer';

export default StyledSideDrawer;
