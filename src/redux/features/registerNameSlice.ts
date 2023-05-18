import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios,{AxiosError} from 'axios';

type NameState = {
    value: string;
  };
  
  const initialState = {
    value: "",
  } as NameState;
  

export const registerName = createSlice({
  name: 'name',
  initialState,
  reducers: {
    resetName: ()=> initialState,
    setRegisterName: (state, action: PayloadAction<string>) => {
        state.value = action.payload;
    },
  },
});



export const {  setRegisterName, resetName } = registerName.actions;
export default registerName.reducer;