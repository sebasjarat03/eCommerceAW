import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    user: null,
    showSignModal: false,
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
    setSignModal(state) {
      state.showSignModal = !state.showSignModal;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const loginActions = loginSlice.actions;

export const selectLogin = (state) => state.login.isLoggedIn;

export const selectUser = (state) => state.login.user;

export const selectShowSignModal = (state) => state.login.showSignModal;

export default loginSlice;
