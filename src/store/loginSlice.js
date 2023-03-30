import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoggedIn: false,
        userName: ''
    },
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.userName = action.payload;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.userName = '';
        }
    }
});

export const loginActions = loginSlice.actions;

export const selectLogin = (state) => state.login.isLoggedIn;

export const selectUserName = (state) => state.login.userName;

export default loginSlice;