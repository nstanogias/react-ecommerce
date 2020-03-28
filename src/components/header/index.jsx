import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../images/shoe.svg';

const StyledHeader = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
const ContainerLink = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  svg {
    height: 80px;
  }
`;

const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OptionsLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

const OptionsDiv = styled.div`
  padding: 10px 15px;
  cursor: pointer;
`;
const Header = ({ currentUser }) => (
  <StyledHeader>
    <ContainerLink to="/">
      <Logo />
    </ContainerLink>
    <Options>
      <OptionsLink to="/shop">SHOP</OptionsLink>
      <OptionsLink to="/shop">CONTACT</OptionsLink>
      {currentUser ? (
        <OptionsDiv onClick={() => auth.signOut()}>SIGN OUT</OptionsDiv>
      ) : (
        <OptionsLink to="/signin">SIGN IN</OptionsLink>
      )}
    </Options>
  </StyledHeader>
);

export default Header;
