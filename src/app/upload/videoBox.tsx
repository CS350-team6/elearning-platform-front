'use client';
import React, { useState, useRef, useEffect } from 'react';



interface MyProps{
  getVideoData: (lecture: string) => Promise<{ result:boolean, video: string[] }>;

  year: string,
  semester: string,
  children?: React.ReactNode;
}

const VideoBox = ({getVideoData, year, semester}:MyProps) => {
  const lecture ="";
  const videoRef = useRef<HTMLVideoElement | null>(null);
  
  const [videoSource, setVideoSource] = useState<string[]>([]);
 
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response:{result: boolean, video:string[]} = await getVideoData(lecture);
        console.log("videoBox.tsx : ", response.video);
        if (response.result) {
          setVideoSource(response.video);
          
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
        
      }
    };

    fetchData();
    console.log("videoBox.tsx line33 : ", videoSource)
  }, [ lecture, year, semester]);

 
  return (
    <div className='videoListMain'>
      {videoSource && videoSource.map((source: string, index: number) => (
        <video key={index} controls>
          <source src={source} type="video/mp4" />
        </video>
      ))}
    </div>
  )
}
export default VideoBox;