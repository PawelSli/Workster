import AuthService from "../../services/auth.service";
import {Redirect, Route} from "react-router-dom";
import React from "react";

export default function RecruiterRoute({component: Component, ...rest}) {

    const isAllowedAsRecruiter = AuthService.isLogged();

    return <Route
        {...rest}
        render={props =>
            isLoggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname: '/', state: {from: props.location}}}/>
            )
        }
    />
}