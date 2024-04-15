import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  userName: "",
  email: "",
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    userInfoChangeEmail: (state: { email: any }, action: { payload: any }) => {
      state.email = action.payload;
    },
  },
});

export const { userInfoChangeEmail } = userInfoSlice.actions;

export type UserInfoState = typeof initialState;

export default userInfoSlice.reducer;
