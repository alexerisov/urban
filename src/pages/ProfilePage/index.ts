import ProfilePage from "./ProfilePage";
import { RootState } from "../../store/store";
import { logout } from "../../store/reducers/auth";
import {connect, ConnectedProps} from "react-redux";

const mapDispatchToProps = {
        logout
}

const mapStateToProps = (state: RootState) => ({
    user: state.auth.currentUser,
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export type ProfilePageProps = ConnectedProps<typeof connector>

export default connector(ProfilePage)