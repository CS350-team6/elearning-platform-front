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
import Link from '@mui/material/Link';
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
    <div className="container mx-auto flex py-8">
        <div className="w-2/4 pr-8">
            <img src={playlist.thumbnail} alt={playlist.title} className="w-full rounded shadow" />
            <h1 className="text-3xl font-bold mb-4">{playlist.title}</h1>
        </div>
      
      
        <div className="w-1/4">
        <Link href="/lecture/software-engineering">
          {playlist.videos.map((video) => (
            <div key={video.id} className="bg-white p-4 rounded shadow mb-4">
              <img src={video.thumbnail} alt={video.title} className="w-full mb-4 rounded" />
              <h2 className="text-lg font-bold mb-2">{video.title}</h2>
              <button
                className={`px-4 py-2 rounded ${
                  bookmarkedVideos.includes(video.id) ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                }`}
                onClick={() => toggleBookmark(video.id)}
              >
                {bookmarkedVideos.includes(video.id) ? 'Unbookmark' : 'Bookmark'}
              </button>
            </div>
          ))}
        </Link>
        </div>
      

    </div>
  );
};

export default PlaylistPage;