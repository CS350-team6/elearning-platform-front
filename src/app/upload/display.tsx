'use client';


import VideoBox from './videoBox';
import UploadBox from './uploadBox';
import SearchBox from './searchBox';

import React, { useState, useRef, useEffect } from 'react';
interface MyProps{
  getLectureData: (id: string, pw: string, title: string, desc: string) => Promise<{ result:boolean, title: string[] }>;
  getVideoData: (lecture: string) => Promise<{ result:boolean, video: string[]}>;
  children?: React.ReactNode;
}

// const defaultTheme = createTheme();

export default function UploadMain({getLectureData, getVideoData}:MyProps) {
  const [lecture, setLecture] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [semester, setSemester] = useState<string>('');

  // video 띄울때 lecture : "A", "B", "C"   3중 하나로 
  return (
    <div>

{/*       
      <SearchBox 
        getLectureData={getLectureData} 
        lecture={lecture} setLecture={setLecture}
        year={year} setYear={setYear}
        semester={semester} setSemester={setSemester}
      />
  
      <VideoBox getVideoData={getVideoData} lecture={lecture} year={year} semester={semester}/>
      <UploadBox/> */}
      
      {/* <SearchBox 
        getLectureData={getLectureData} 
        lecture={lecture} setLecture={setLecture}
        year={year} setYear={setYear}
        semester={semester} setSemester={setSemester}
      />
  
      <VideoBox getVideoData={getVideoData} lecture={lecture} year={year} semester={semester}/>
      <UploadBox/>
       */}
      
      
    </div>
  );
}