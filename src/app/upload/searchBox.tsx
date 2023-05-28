'use client';
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setLectureList, setYear, setLecture, setSemester } from '@/redux/features/videoSearchSlice';

interface MyProps{
  getLectureData: (id: string, pw: string, title: string, desc: string) => Promise<{ result:boolean, title: string[] }>;
  children?: React.ReactNode;
}

const SearchBox = ({getLectureData}:MyProps ) => {
  const semester = useAppSelector((state) => state.searchReducer.semester);
  const year = useAppSelector((state) => state.searchReducer.year);
  const lecture = useAppSelector((state) => state.searchReducer.lecture);
  const lectureList = useAppSelector((state) => state.searchReducer.lectureList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data_ = await getLectureData("1", "2", "3", "4");
        
        dispatch(setLectureList(data_.title))
       
      } catch (error) {
        console.error("Error fetching data:", error);
        
      }
    };
  
    fetchData();
  }, []);

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 선택된 정보를 이용하여 원하는 동작 수행
    console.log('Year:', year);
    console.log('Semester:', semester);
    console.log('lecture', lecture)
    dispatch(setYear(''));
    dispatch(setSemester(''));
    dispatch(setLecture(''));
  };

  return (
    <div className='searchBoxMain'>
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="year">year:</label>
        <select id="year" name="year" value={year} onChange={(e) => dispatch(setYear(e.target.value))}>
          <option value="">Select a year</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
        <br />
        <label htmlFor="semester">semester:</label>
        <select id="semester" value={semester} onChange={(e) => dispatch(setSemester(e.target.value))}>
          <option value="">Select a semester</option>
          <option value="1">Spring</option>
          <option value="2">Summer</option>
          <option value="3">Fall</option>
          <option value="1">Winter</option>
        </select>
        <br />
        <label htmlFor="lecture">lecture:</label>
        <select id="lecture" value={lecture} onChange={(e) => dispatch(setLecture(e.target.value))}>
          <option value="">Select a Lecture</option>
          {lectureList.map((lecture) => (
            <option key={lecture} value={lecture}>
              {lecture}
            </option>
          ))}
        </select>
        <button type="submit">Search</button>
      
      </form>
        
    </div>
  );
};

export default SearchBox;
