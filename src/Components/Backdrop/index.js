import React from 'react' 
import styled from 'styled-components' 
import PropTypes from 'prop-types'

const Backdrop = ({className, click}) => (
 <div className={className} onClick={click} />
)

Backdrop.propTypes = {
  className: PropTypes.string
}

const StyledBackdrop = styled(Backdrop)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`
StyledBackdrop.displayName = 'Backdrop'

export default StyledBackdrop;