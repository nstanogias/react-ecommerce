import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: ${props => (props.isGoogleSignIn ? '#4285f4' : 'black')};
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${props => (props.isGoogleSignIn ? '#357ae8' : 'white')};
    color: black;
    border: ${props => (props.isGoogleSignIn ? 'none' : '1px solid black')};
  }

  &.inverted {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
`;

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <StyledButton
    isGoogleSignIn={isGoogleSignIn}
    className={`${inverted ? 'inverted' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </StyledButton>
);

export default CustomButton;
