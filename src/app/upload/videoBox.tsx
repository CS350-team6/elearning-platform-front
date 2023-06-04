'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setLectureList, setYear, setLecture, setSemester } from '@/redux/features/videoSearchSlice';
import { useGetLectureSearchResultsQuery, useGetVideoSearchResultsQuery } from '@/redux/services/searchApi';
import VideoCard from '../home/VideoCard';
import { Container, Grid, Typography } from '@mui/material';
type typeVideoData = {
  id:number;
  title:string;
  thumbnailUrl:string;
  views:number;
  duration:string;
}

const VideoBox = () => {
  const semester = useAppSelector((state) => state.searchReducer.semester);
  const year = useAppSelector((state) => state.searchReducer.year);
  const lecture = useAppSelector((state) => state.searchReducer.lecture);
  const lectureList = useAppSelector((state) => state.searchReducer.lectureList);
  const dispatch = useAppDispatch();

  
  const [videoSource, setVideoSource] = useState<typeVideoData[]>([]);
  const { data:videoData, isLoading:videoLoading, error:videoError, refetch:videoRefetch} = useGetVideoSearchResultsQuery({year:year, semester:semester, lecture:lecture});
  
  // video list 불러오기, videodata 형식 지정
  useEffect(() => {
    
    // videoRefetch();
    // console.log("videoBox ", videoData);
    const videoData = [
      {
        id: 1,
        title: 'Video 1',
        thumbnailUrl: 'https://static.vecteezy.com/system/resources/previews/003/399/771/original/youtube-icon-editorial-free-vector.jpg', // thumbnail
        views: 1000,
        duration: '5:30',
      },
      {
        id: 2,
        title: 'Video 2',
        thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhIJEDvdETH3nroo6h9UQKkvq472n1b4XWiU3QN-EHsHzQRj1AzWqpjpsgVGKMBsZO71o&usqp=CAU', // thumbnail
        views: 2000,
        duration: '7:45',
      },
      {
        id: 3,
        title: 'Video 3',
        thumbnailUrl: 'https://static.vecteezy.com/system/resources/previews/003/399/771/original/youtube-icon-editorial-free-vector.jpg', // thumbnail
        views: 1000,
        duration: '5:30',
      },
      {
        id: 4,
        title: 'Video 4',
        thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhIJEDvdETH3nroo6h9UQKkvq472n1b4XWiU3QN-EHsHzQRj1AzWqpjpsgVGKMBsZO71o&usqp=CAU', // thumbnail
        views: 1000,
        duration: '5:30',
      },
    ]
    if(videoData){
      setVideoSource(videoData);
    }  
    
  }, [ lecture, year, semester]);

  return (
    <div className='videoListMain'>
      
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {videoSource && videoSource.map((video) => (
            <Grid item xs={8} sm={4} md={3} key={video.id}>
              <VideoCard
                title={video.title}
                thumbnailUrl={video.thumbnailUrl}
                views={video.views}
                duration={video.duration}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>


  

  )
}
export default VideoBox;