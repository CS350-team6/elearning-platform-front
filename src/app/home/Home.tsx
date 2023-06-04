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
      title: 'Engineering Math: Differential Equations and Linear Algebra',
      instructor: 'Gilbert Strang',
      thumbnailUrl: 'https://dj25xpdwcrupf.cloudfront.net/advanced_math.jpeg',
      views: 1000,
      duration: '5:30',
    },
    {
      id: 2,
      title: 'Introduction to Software Engineering',
      instructor: 'Nancy Leveson',
      thumbnailUrl: 'https://dj25xpdwcrupf.cloudfront.net/software-engineering.jpeg',
      views: 2000,
      duration: '7:45',
    },
    {
        id: 3,
        title: 'Introduction to Topology',
        instructor: 'James Munkres',
        thumbnailUrl: 'https://dj25xpdwcrupf.cloudfront.net/Topology.jpeg',
        views: 1000,
        duration: '5:30',
      },
      {
        id: 4,
        title: 'Foundations of Software Engineering',
        instructor: 'Kevin Amaratunga',
        thumbnailUrl: 'https://dj25xpdwcrupf.cloudfront.net/software_engineering.jpeg',
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
                id={video.id}
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