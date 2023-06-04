// components/VideoCard.tsx
import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid
} from '@mui/material';
import { useRouter } from 'next/navigation';

interface VideoCardProps {
  id: number;
  title: string;
  thumbnailUrl: string;
  views: number;
  duration: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  thumbnailUrl,
  views,
  duration,
}) => {
    const router = useRouter();

    return (
    <Grid container justifyContent="left">
        <Card
          onClick={()=>router.push("/lecture")}>
            <CardMedia 
                component="img" 
                image={thumbnailUrl} 
                alt={title}
            />
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" color="textSecondary">
                    {views} views
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                    Duration: {duration}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    </Grid>
    );
};

export default VideoCard;