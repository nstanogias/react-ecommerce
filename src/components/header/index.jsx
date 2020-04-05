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
  ${OptionStyles}
`;

const OptionsDiv = styled.div`
  ${OptionStyles}
`;
const Header = ({ currentUser, hidden, signOutStart }) => (
  <StyledHeader>
    <ContainerLink to="/">
      <Logo />
    </ContainerLink>
    <Options>
      <OptionsLink to="/shop">SHOP</OptionsLink>
      <OptionsLink to="/shop">CONTACT</OptionsLink>
      {currentUser ? (
        <OptionsDiv onClick={signOutStart}>SIGN OUT</OptionsDiv>
      ) : (
        <OptionsLink to="/signin">SIGN IN</OptionsLink>
      )}
      <CartIcon />
    </Options>
    {hidden ? null : <CartDropdown />}
  </StyledHeader>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
