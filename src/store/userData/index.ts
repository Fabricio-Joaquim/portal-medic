import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserData {
    token: string;
    auth?: boolean;
}

export const initialState: IUserData = {
    token: '',
}

const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        cleanToken: (state) => {
            state.token = initialState.token;
        },
        getToken: (state) => {
            state.token
        },
        changeAuth: (state, action: PayloadAction<boolean>) => {
            state.auth = action.payload;
        },
        isAuth: (state) => {
            state.auth
        },
        cleanAuth: (state) => {
            state.auth = false;
        }
    }
})


export const { setToken, cleanToken, getToken, isAuth, changeAuth, cleanAuth } = userDataSlice.actions

export default userDataSlice.reducer
