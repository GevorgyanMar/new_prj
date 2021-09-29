import React from "react";
import {
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import LoginForm from "../pages/LoginForm/LoginForm";
import Home from "../pages/Home/Home";
import Register from '../pages/LoginForm/Register';
import PrivateRoute from "./../componets/privateRout/privateRout";
import MainComponent from "../pages/MainComponent/MainComponent";

const Navigation = () => (
    <Switch>
        <Route exact path="/">
            <Redirect to='/LoginForm' />
        </Route>
        <PrivateRoute path="/LoginForm">
            <LoginForm />
        </PrivateRoute>
        <Route path="/Register">
            <Register />
        </Route>
        <MainComponent>
            <PrivateRoute path="/Home">
                <Home />
            </PrivateRoute>
        </MainComponent>
    </Switch>
);

export default Navigation;