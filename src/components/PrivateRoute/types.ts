import {RouteProps} from "react-router-dom";

export interface IPrivateRouteProps extends RouteProps {
    authed: boolean,
}