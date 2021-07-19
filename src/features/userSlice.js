import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

export const  userSlice= createSlice( {
  name:"user",
  initialState: {
      user:null,
  },
   reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value=action.payload;
    },
    logout: (state, action) => {
      state.user=null;
    },
  },
});

export const {login, logout} = userSlice.actions

export const selectUser =(state)=> state.user;

export default userSlice.reducer;
