'use client';
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setLectureList, setYear, setLecture, setSemester, setVideoList } from '@/redux/features/videoSearchSlice';
import { useGetLectureSearchResultsQuery, useGetVideoSearchResultsQuery } from '@/redux/services/searchApi';
import { styled } from '@mui/system';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
}));

const SearchBox = () => {
  const semester = useAppSelector((state) => state.searchReducer.semester);
  const year = useAppSelector((state) => state.searchReducer.year);
  const lecture = useAppSelector((state) => state.searchReducer.lecture);
  const lectureList = useAppSelector((state) => state.searchReducer.lectureList);
  const dispatch = useAppDispatch();

  const { data:lectureData, isLoading:lectureLoading, error:lectureError, refetch:lectureRefetch} = useGetLectureSearchResultsQuery({year:year, semester:semester});
  


  // lecture list 불러오기
  const handleClickLectureSearch = () =>{
    lectureRefetch();
    if (lectureData){
      dispatch(setLectureList(lectureData.title)); 
    }
  }


  
  return (
    <div className='searchBoxMain' style={{width : '110px'}}>
      <form>
        <FormControl variant="filled" style={{marginBottom: '15px', width:'100px', marginRight:"5px"}}>
          <InputLabel id="year-label">Year</InputLabel>
          <Select
            labelId="year-label"
            id="year"
            value={year}
            onChange={(e) => dispatch(setYear(e.target.value))}
          >
            <MenuItem value=""><em>Select a year</em></MenuItem>
            <MenuItem value={"2020"}>2020</MenuItem>
            <MenuItem value={"2021"}>2021</MenuItem>
            <MenuItem value={"2022"}>2022</MenuItem>
            <MenuItem value={"2023"}>2023</MenuItem>
          </Select>
        </FormControl>
        <br/>
        <FormControl variant="filled" style={{marginBottom: '15px', width:'100px', marginRight:"5px"}}>
          <InputLabel id="semester-label">Semester</InputLabel>
          <Select
            labelId="semester-label"
            id="semester"
            value={semester}
            onChange={(e) => dispatch(setSemester(e.target.value))}
          >
            <MenuItem value=""><em>Select a semester</em></MenuItem>
            <MenuItem value={"1"}>Spring</MenuItem>
            <MenuItem value={"2"}>Summer</MenuItem>
            <MenuItem value={"3"}>Fall</MenuItem>
            <MenuItem value={"4"}>Winter</MenuItem>
          </Select>
        </FormControl>
        <br/>
        <FormControl variant="filled" style={{marginBottom: '15px', width:'100px', marginRight:"5px"}}>
          <InputLabel id="lecture-label">Lecture</InputLabel>
          <Select
            labelId="lecture-label"
            id="lecture"
            value={lecture}
            onClick={handleClickLectureSearch}
            onChange={(e) => dispatch(setLecture(e.target.value))}
          >
            <MenuItem value=""><em>Select a Lecture</em></MenuItem>
            {lectureList.map((lecture, index) => (
              <MenuItem key={index} value={lecture}>
                {lecture}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    </div>
  );
};

export default SearchBox;
