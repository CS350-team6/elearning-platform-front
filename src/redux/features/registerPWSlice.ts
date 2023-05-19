import { createSlice, PayloadAction} from '@reduxjs/toolkit';

type PWState = {
    value: string;
  };
  
  const initialState = {
    value: "",
  } as PWState;
  

export const registerPW = createSlice({
  name: 'pw',
  initialState,
  reducers: {
    resetPW: ()=> initialState,
    setRegisterPW: (state, action: PayloadAction<string>) => {
        state.value = action.payload;
    },
  },
});



export const {  setRegisterPW, resetPW } = registerPW.actions;
export default registerPW.reducer;