import React, {useReducer} from "react";
import {SignInReducer} from '../reducers/SignIn'
import SignInContext from "./SignIn-context";

const SignInState = (props) => {
  const [signInInfo,dispatch]=useReducer(SignInReducer,{
    name:'',
    email:''
  })

  return (
    <SignInContext.Provider
      value={{
        signInInfo,
        dispatch
      }}
    >
      {props.children}
    </SignInContext.Provider>
  );
};

export default SignInState;