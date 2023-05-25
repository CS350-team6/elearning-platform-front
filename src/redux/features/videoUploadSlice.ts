import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VideoState {
  file: File | null;
}

const initialState: VideoState = { file: null };

export const videoUploadSlice = createSlice({
  name: "videoUpload",
  initialState,
  reducers: {
    reset: () => initialState,
    setFile : (state, action: PayloadAction<File>) => {
      state.file = action.payload
    }
    
  },
});

export const { reset, setFile } = videoUploadSlice.actions;
export default videoUploadSlice.reducer;
