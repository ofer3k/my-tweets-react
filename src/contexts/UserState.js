import React, {useReducer} from "react";
import {UserReducer} from '../reducers/User'
import UserContext from "./User-context";

const UserState = (props) => {
  const [userInfo,dispatch]=useReducer(UserReducer,{
    name:'',
    email:'',
    ProfilePic:'',
    about:'',
    createdAt:'',
    followers:'',
    following:'',
    _id:'',
  })

  return (
    <UserContext.Provider
      value={{
        userInfo,
        dispatch
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;