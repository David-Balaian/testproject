import { createAsyncThunk } from "@reduxjs/toolkit";
import { signIn, signOut } from "aws-amplify/auth";
import { userSlice } from "./slice";

export const TH_signin = createAsyncThunk(
    'user/signin',
    async (data) => {
      try {
        const response = await signIn(data);
        return response; 
      } catch (error) {
        throw error;
      }
    }
  );
  
export const TH_signout = createAsyncThunk(
    'user/signout',
    async (_, thunkApi) => {
      try {
        await signOut(true)
        thunkApi.dispatch(userSlice.actions.logout())
      } catch (error) {
        throw error;
      }
    }
  );
  

  
  ;