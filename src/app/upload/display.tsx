'use client';
import "./upload.css"

import VideoBox from './videoBox';
// import UploadBox from './uploadBox';
import SearchBox from './searchBox';

import React, { useState, useRef, useEffect } from 'react';

// const defaultTheme = createTheme();

export default function UploadMain() {
  // video 띄울때 lecture : "A", "B", "C"   3중 하나로 
  return (
    <div className='videoUploadMain'>

      
      <SearchBox />
  
      <VideoBox  />
      {/* <UploadBox /> */}
      

      
    </div>
  );
}