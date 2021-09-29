import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    let history = useHistory();
    const user = useSelector(state => state.user)
    useEffect(() => {
        // if (!(user && Object.keys(user).length)) {
        //     history.push("/LoginForm")
        // }
        if (!user.token) {
            history.push("/LoginForm")
        }
    }, [])
    return (
        <Route {...rest} render={props => (
            <Component {...props} />
        )} />
    );
};


export default PrivateRoute;
