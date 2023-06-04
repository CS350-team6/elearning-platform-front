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
    instructor: "Instructor #1",
    thumbnail: "https://dj25xpdwcrupf.cloudfront.net/design-patterns-logo-2.png",
    videos: [
        {
            id: "1",
            title: "Introduction to Software Engineering",
            thumbnail: "https://dj25xpdwcrupf.cloudfront.net/software-engineering.jpeg",
            url: "https://dj25xpdwcrupf.cloudfront.net/math_lecture4_AnQZf9p.mov",
        },
        {
            id: "2",
            title: "Introduction to Software Engineering",
            thumbnail: "https://dj25xpdwcrupf.cloudfront.net/software-engineering.jpeg",
            url: "https://dj25xpdwcrupf.cloudfront.net/math_lecture4_AnQZf9p.mov",
        },
        {
            id: "3",
            title: "Introduction to Software Engineering",
            thumbnail: "https://dj25xpdwcrupf.cloudfront.net/software-engineering.jpeg",
            url: "https://dj25xpdwcrupf.cloudfront.net/math_lecture4_AnQZf9p.mov",
        },
        {
            id: "4",
            title: "Introduction to Software Engineering",
            thumbnail: "https://dj25xpdwcrupf.cloudfront.net/software-engineering.jpeg",
            url: "https://dj25xpdwcrupf.cloudfront.net/math_lecture4_AnQZf9p.mov",
        },
        {
            id: "5",
            title: "Introduction to Software Engineering",
            thumbnail: "https://dj25xpdwcrupf.cloudfront.net/software-engineering.jpeg",
            url: "https://dj25xpdwcrupf.cloudfront.net/math_lecture4_AnQZf9p.mov",
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
      <Typography variant="h3" sx={{ mb: 4 }}>{playlist.title}</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia component="img" src={playlist.thumbnail} alt={playlist.title} />
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
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