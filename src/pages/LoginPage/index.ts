import LoginPage from "./LoginPage";
import {RootState} from "../../store/store";
import { login } from "../../store/reducers/auth";
import {connect, ConnectedProps} from "react-redux";

const mapDispatchToProps =  {
        login
}

const mapStateToProps = (state: RootState) => ({
    users: state.users.users,
    authed: state.auth.authed,
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export type LoginPageProps = ConnectedProps<typeof connector>

export default connector(LoginPage)