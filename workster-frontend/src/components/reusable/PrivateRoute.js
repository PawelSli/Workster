import React from 'react'
import {Redirect, Route} from 'react-router-dom';
import AuthService from "../../services/auth.service"


export default function PrivateRoute({component: Component, ...rest}) {

    const isLoggedIn = AuthService.isLogged();

    return <Route
        {...rest}
        render={props =>
            isLoggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
            )
        }
    />

}