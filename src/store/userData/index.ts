import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserData {
    token: string;
}

const initialState: IUserData = {
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
        }

    }
})


export const { setToken, cleanToken, getToken } = userDataSlice.actions

export default userDataSlice.reducer
