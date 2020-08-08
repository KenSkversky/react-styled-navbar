import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DrawerToggleButton = ({ className, click }) => (
  <button className={className} onClick={click}>
    <div className='line' />
    <div className='line' />
    <div className='line' />
  </button>
);

DrawerToggleButton.propTypes = {
  className: PropTypes.string,
};

const StyledDrawerToggleButton = styled(DrawerToggleButton)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 0.5rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  .line {
    width: 30px;
    height: 2px;
    background: white;
  }
`;
StyledDrawerToggleButton.displayName = 'DrawerToggleButton';

export default StyledDrawerToggleButton;
