import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios,{AxiosError} from 'axios';

type EmailState = {
  value: string;
};

const initialState = {
  value: "",
} as EmailState;


export const registerEmail = createSlice({
  name: 'email',
  initialState,
  reducers: {
    resetEmail: ()=> initialState,

    setRegisterEmail: (state, action: PayloadAction<string>) => {
        state.value = action.payload;
    },
  },
});


export const {  setRegisterEmail, resetEmail } = registerEmail.actions;
export default registerEmail.reducer;
