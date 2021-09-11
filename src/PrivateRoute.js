import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import decode from 'jwt-decode';

const isAuthenticated =  () => { 
  	  const token = localStorage.getItem('token');
  try {
    if(token){
        return true
    }
    else{
      return false;
    }
  } catch (error) {
    return false;
  }
}

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
         
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
            }}
          />
        )
      }
    />
  );
}