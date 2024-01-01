import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user: { name: "Shehab Ayman", email: "shehab@gmail.com", phone: "01067421381", role: 5173 },
};
export const users = createSlice({
   name: "users",
   initialState,
   reducers: {
      login: (state, { payload }) => {
         state.user = payload;
         return state;
      },
   },
});

export const { login } = users.actions;
