"use client";

interface Video {
    id: string;
    title: string;
    thumbnail: string;
}
  
interface Playlist {
    id: string;
    title: string;
    videos: Video[];
}

import { useEffect, useState } from 'react';
import { Container, Grid, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';


interface PlaylistPageProps {
  playlistId: string;
}

const playlist = {
    id: "1",
    title: "Software Design Patterns",
    description: "Learn about software design patterns in this course.",
    instructor: "Instructor #1",
    thumbnail: "https://dj25xpdwcrupf.cloudfront.net/design-patterns-logo-2.png",
    videos: [
        {
            id: "1",
            title: "Introduction",
            thumbnail: "https://dj25xpdwcrupf.cloudfront.net/software-engineering.jpeg",
            url: "https://dj25xpdwcrupf.cloudfront.net/math_lecture4.mp4",
        },
        {
            id: "2",
            title: "Creational Patterns: Factory",
            thumbnail: "https://dj25xpdwcrupf.cloudfront.net/software-engineering.jpeg",
            url: "https://dj25xpdwcrupf.cloudfront.net/math_lecture4.mp4",
        },
        {
            id: "3",
            title: "Creational Patterns: Singleton",
            thumbnail: "https://dj25xpdwcrupf.cloudfront.net/software-engineering.jpeg",
            url: "https://dj25xpdwcrupf.cloudfront.net/math_lecture4.mp4",
        },
        {
            id: "4",
            title: "Structural Patterns: Adapter",
            thumbnail: "https://dj25xpdwcrupf.cloudfront.net/software-engineering.jpeg",
            url: "https://dj25xpdwcrupf.cloudfront.net/math_lecture4.mp4",
        },
        {
            id: "5",
            title: "Structural Patterns: Decorator",
            thumbnail: "https://dj25xpdwcrupf.cloudfront.net/software-engineering.jpeg",
            url: "https://dj25xpdwcrupf.cloudfront.net/math_lecture4.mp4",
        },
    ]
}

const PlaylistPage: React.FC<PlaylistPageProps> = ({ playlistId }) => {
//   const [playlist, setPlaylist] = useState<Playlist | null>(null);
//   const p
  const [bookmarkedVideos, setBookmarkedVideos] = useState<string[]>([]);

//   useEffect(() => {
//     // Fetch the playlist data from an API or any data source
//     const fetchPlaylist = async () => {
//       try {
//         const response = await fetch(`/api/playlists/${playlistId}`);
//         const playlistData = await response.json();
//         setPlaylist(playlistData);
//       } catch (error) {
//         console.error('Error fetching playlist:', error);
//       }
//     };

//     fetchPlaylist();
//   }, [playlistId]);

  const toggleBookmark = (videoId: string) => {
    setBookmarkedVideos((prevBookmarkedVideos) => {
      if (prevBookmarkedVideos.includes(videoId)) {
        return prevBookmarkedVideos.filter((id) => id !== videoId);
      } else {
        return [...prevBookmarkedVideos, videoId];
      }
    });
  };

  if (!playlist) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <img src={playlist.thumbnail} alt={playlist.title} style={{ width: '80%', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
          <Typography variant="h5" sx={{ mt: 2 }}>{playlist.title}</Typography>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>Instructor: {playlist.instructor}</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>{playlist.description}</Typography>
          <Button variant="contained" color="primary" sx={{ mt: 4 }}>Play All</Button>
        </Grid>
        <Grid item xs={12} md={4}>
          {playlist.videos.map((video) => (
            <Card key={video.id} sx={{ mb: 4 }}>
                <CardMedia component="img" src={video.thumbnail} alt={video.title} />
                <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>{video.title}</Typography>
                <Button
                    variant={bookmarkedVideos.includes(video.id) ? 'contained' : 'outlined'}
                    color={bookmarkedVideos.includes(video.id) ? 'error' : 'primary'}
                    onClick={() => toggleBookmark(video.id)}
                >
                    {bookmarkedVideos.includes(video.id) ? 'Unbookmark' : 'Bookmark'}
                </Button>
                </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default PlaylistPage;