import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IUser} from "./users";

interface IAuthState {
    authed: boolean,
    currentUser: IUser | null
}

const initialState = {
    authed: false,
    currentUser: null
} as IAuthState

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<IUser>) {
            state.authed = true
            state.currentUser = action.payload
        },
        logout(state) {
            state.authed = false
            state.currentUser = null
        },
    },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer