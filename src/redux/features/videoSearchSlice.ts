import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface VideoSearchState {
  lectureList: string[];
  lecture: string;
  year:string;
  semester:string
}

const initialState: VideoSearchState = {
  lectureList: [],
  lecture: "",
  year:"",
  semester:""
};


export const videoSearchSlice = createSlice({
  name: "videoSearch",
  initialState,
  reducers: {
    reset: () => initialState,
    setLectureList : (state, action: PayloadAction<string[]>) => {
      state.lectureList = action.payload
    },
    setLecture : (state, action: PayloadAction<string>) => {
      state.lecture = action.payload
    },
    setYear: (state, action: PayloadAction<string>)=>{
      state.year = action.payload
    },
    setSemester : (state, action: PayloadAction<string>)=>{
      state.semester = action.payload
    }
    
  },
});

export const { reset, setLectureList, setLecture, setYear, setSemester } = videoSearchSlice.actions;
export default videoSearchSlice.reducer;