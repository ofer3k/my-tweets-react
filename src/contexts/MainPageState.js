import React, {useReducer} from "react";
import {MainPageReducer} from '../reducers/MainPage'
import MainPageContext from "./MainPage-context";

const MainPageState = (props) => {
  const [mainPageInfo,dispatch]=useReducer(MainPageReducer,{
    name:'',
    ProfilePic:'',
    about:'',
    createdAt:'',
    followers:'',
    following:'',
    _id:'',
  })

  return (
    <MainPageContext.Provider
      value={{
        mainPageInfo,
        dispatch
      }}
    >
      {props.children}
    </MainPageContext.Provider>
  );
};

export default MainPageState;