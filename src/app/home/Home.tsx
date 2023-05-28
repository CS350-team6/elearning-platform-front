// pages/Home.tsx

"use client"

import React from 'react';
import VideoCard from './VideoCard';
import { Container, Grid, Typography } from '@mui/material';

const Home: React.FC = () => {
  const handleSearch = (query: string) => {
    // Perform search functionality here
    console.log('Search query:', query);
  };

  const videos = [
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
    // Add more video data objects
  ];

  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{mt:3, mb:3}}>Recommended Lectures</Typography>
        <Grid container spacing={2}>
          {videos.map((video) => (
            <Grid item xs={12} sm={6} md={4} key={video.id}>
              <VideoCard
                title={video.title}
                thumbnailUrl={video.thumbnailUrl}
                views={video.views}
                duration={video.duration}
              />
            </Grid>
          ))}
        </Grid>
        <Typography variant="h4"  sx={{mt:5, mb:3}}>Recent Activity</Typography>
        {/* Display recent activity items */}
      </Container>
    </div>
  );
};

export default Home;