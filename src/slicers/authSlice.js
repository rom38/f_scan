import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'auth',
    initialState: { expire: null, accessToken: null },
    reducers: {
        setCredentials: (
            state,
            { payload: { expire, accessToken } }
        ) => {
            state.expire = expire
            state.accessToken = accessToken
        },
    },
})

export const { setCredentials } = slice.actions

export default slice.reducer

export const selectAuthExpire = (state) => state.auth.expire
