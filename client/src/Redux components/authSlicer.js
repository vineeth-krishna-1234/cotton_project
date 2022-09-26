import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
const initialStateValues = { authToken:sessionStorage.getItem('authToken') || "",userName:sessionStorage.getItem("userId") ||"" };

export const authSlice = createSlice({
  name: "authSlice",
  initialState: initialStateValues,
  reducers: {
    updateToken: (state, action) => {
      sessionStorage.setItem("authToken",action.payload)
      state.authToken = action.payload;
      return state;
    },
    deleteToken: (state) => {
      state.authToken = "";
      return state;
    },
    updateUser:(state,action)=>{
      sessionStorage.setItem("userId",action.payload)
      state.useName=action.payload;
      return state
    }
  },
});

export const { updateToken, deleteToken,updateUser } = authSlice.actions;

export default authSlice.reducer;
