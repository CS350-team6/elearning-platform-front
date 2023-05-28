'use client';
import "./upload.css"

import VideoBox from './videoBox';
import UploadBox from './uploadBox';
import SearchBox from './searchBox';

import React, { useState, useRef, useEffect } from 'react';
interface MyProps{
  getLectureData: (id: string, pw: string, title: string, desc: string) => Promise<{ result:boolean, title: string[] }>;
  getVideoData: (lecture: string) => Promise<{ result:boolean, video: string[]}>;
  uploadVideo: (video:File,  title:string, desc:string, lecture:string, year:string, semester:string)=> Promise<{result:boolean }>
  children?: React.ReactNode;
}

// const defaultTheme = createTheme();

export default function UploadMain({getLectureData, getVideoData, uploadVideo}:MyProps) {
  // video 띄울때 lecture : "A", "B", "C"   3중 하나로 
  return (
    <div className='videoUploadMain'>

      
      <SearchBox getLectureData={getLectureData} />
  
      <VideoBox getVideoData={getVideoData} />
      <UploadBox uploadVideo={uploadVideo}/>
      

      
    </div>
  );
}