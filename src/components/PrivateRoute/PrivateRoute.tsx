import * as React from 'react'
import {Redirect, Route} from "react-router-dom";
import {IPrivateRouteProps} from "./types";

const PrivateRoute = ({authed, children, ...rest}: IPrivateRouteProps) => {
    return (
        <Route
            {...rest}
            render={(props) => authed
                ? children
                : <Redirect to={{pathname: '/', state: {from: props.location}}}/>}
        />
    )
}

export default PrivateRoute