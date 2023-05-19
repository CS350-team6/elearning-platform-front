import { createSlice, PayloadAction} from '@reduxjs/toolkit';

type IDState = {
  value: string;
};

const initialState = {
  value: "",
} as IDState;


export const registerID = createSlice({
  name: 'id',
  initialState,
  reducers: {
    resetID: ()=> initialState,

    setRegisterID: (state, action: PayloadAction<string>) => {
        state.value = action.payload;
    },
  },
});


export const {  setRegisterID, resetID } = registerID.actions;
export default registerID.reducer;
