import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled, { css } from 'styled-components';

import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';
import { ReactComponent as Logo } from '../../images/shoe.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

const OptionStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;
const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  svg {
    height: 80px;
  }

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

const OptionsLink = styled(Link)`
  ${OptionStyles}
`;

const OptionsDiv = styled.div`
  ${OptionStyles}
`;
const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionsLink to="/shop">SHOP</OptionsLink>
      <OptionsLink to="/shop">CONTACT</OptionsLink>
      {currentUser ? (
        <OptionsDiv onClick={signOutStart}>SIGN OUT</OptionsDiv>
      ) : (
        <OptionsLink to="/signin">SIGN IN</OptionsLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
