import React from 'react';

import SignIn from '../../components/sign-in';

import './sign-in-up.styles.scss';
import SignUp from '../../components/sign-up';

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;