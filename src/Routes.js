import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import UserState from "./contexts/UserState";
import Welcome from "./core/Welcome";
import SignIn from "./core/auth/SignIn";
import SignUp from "./core/auth/SignUp";
import SignInState from "./contexts/SignInState";
import MainPageState from "./contexts/MainPageState";
import Main from "./core/user/Main";
import CreatePost from "./core/user/CreatePost";
import Profile from './core/user/Profile'
import SearchUsers from "./core/user/SearchUsers";
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Welcome} />  
            <Route path="/signUp" exact component={SignUp} />  

            <SignInState>
            <Route path="/signIn" exact component={SignIn} />  
            </SignInState>
            
            </Switch>
            
            {/* private */}
            <Switch>
            <PrivateRoute path="/searchUsers" component={SearchUsers} />  
            <PrivateRoute path="/createPost" component={CreatePost} />  
            <UserState> 
            <PrivateRoute path="/profile" component={Profile} />  
            </UserState>
            </Switch>
            
            <Switch>
            <MainPageState>
            <PrivateRoute path="/main" component={Main} />  
            </MainPageState>
            </Switch>

        </BrowserRouter>
    );
};

export default Routes;
