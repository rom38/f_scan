import { createSlice } from '@reduxjs/toolkit'
import { useLocalStorage } from '../hooks/useLocalStorage'

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
            localStorage.setItem('expire', JSON.stringify(expire))
            localStorage.setItem('accessToken', JSON.stringify(accessToken))
        },
        resetCredentials: (  state ) => {
            state.expire = null;
            state.accessToken = null;
            localStorage.removeItem('expire');
            localStorage.removeItem('accessToken');
            localStorage.clear();

        },
    },
})

export const { setCredentials, resetCredentials } = slice.actions

export default slice.reducer

export const selectAuthExpire = (state) => state.auth.expire
export const selectAuthAccessToken = (state) => state.auth.accessToken
