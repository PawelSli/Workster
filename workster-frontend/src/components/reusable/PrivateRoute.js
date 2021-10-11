import React from 'react'
import {Redirect, Route} from 'react-router-dom';

export default function PrivateRoute({component: Component, ...rest}) {

    const isLoggedIn = false;

    return <Route
        {...rest}
        render={props =>
            isLoggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname: '/api/auth/signin', state: {from: props.location}}}/>
            )
        }
    />

}