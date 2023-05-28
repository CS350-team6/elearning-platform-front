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

interface VideoCardProps {
  title: string;
  thumbnailUrl: string;
  views: number;
  duration: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  thumbnailUrl,
  views,
  duration,
}) => {
    return (
    <Grid container justifyContent="left">
        <Card>
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
