import React from "react";
import {
    Switch,
    Redirect,
    Route
} from "react-router-dom";

import MainComponent from "../MainComponent/MainComponent";
import Company from "../pages/Company/Company";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import LoginForm from "../pages/LoginForm/LoginForm";
import Register from "../pages/LoginForm/Register";


const Navigation = () => (
    <Switch>
        <Route exact path="/">
            <Redirect to='/LoginForm' />
        </Route>
        <Route path="/LoginForm">
            <LoginForm />
        </Route>
        <MainComponent >
            <Route path="/Home">
                <Home />
            </Route>
            <Route path="/Company">
                <Company />
            </Route>
            <Route path="/Register">
                <Register />
            </Route>
            <Route path="/Contact">
                <Contact />
            </Route>

        </MainComponent>

    </Switch>
);

export default Navigation;