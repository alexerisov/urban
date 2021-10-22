import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface IUser {
    login: string,
    password: string,
}

interface IUsersState {
    users: Array<IUser>
}

const initialState = {
    users: [
        {
            login: "developer21",
            password: "123456"
        }
    ]
} as IUsersState

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        createUser(state, action: PayloadAction<IUser>) {
            state.users.push(action.payload)
        },
        removeUser(state, action: PayloadAction<IUser>) {
            state.users.filter(user => user.login !== action.payload.login)
        },
    },
})

export const {createUser, removeUser} = usersSlice.actions
export default usersSlice.reducer