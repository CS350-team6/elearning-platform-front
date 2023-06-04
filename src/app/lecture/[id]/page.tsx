"use client"
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';

interface Comment {
  username: string;
  content: string;
  reactions: number;
  replies: Reply[];
}

interface Reply {
  username: string;
  content: string;
}

function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const handleCommentSubmit = () => {
    const comment: Comment = {
      username: 'User123',
      content: newComment,
      reactions: 0,
      replies: [],
    };

    setComments(prevComments => [...prevComments, comment]);
    setNewComment('');
  };

  const handleReplySubmit = (commentIndex: number, replyContent: string) => {
    const reply: Reply = {
      username: 'User456',
      content: replyContent,
    };

    setComments(prevComments => {
      const updatedComments = [...prevComments];
      updatedComments[commentIndex].replies.push(reply);
      return updatedComments;
    });
  };

  const handleReactionClick = (type: 'like' | 'dislike') => {
    if (type === 'like') {
      setLike(like + 1);
    } else if (type === 'dislike') {
      setDislike(dislike + 1);
    }
  };

  return (
    <Grid item xs={12} sm={6}>
      <div>
        <Button variant="contained" onClick={() => handleReactionClick('like')}>Like</Button>
        <span>{like}</span>
        <Button variant="contained" onClick={() => handleReactionClick('dislike')}>Dislike</Button>
        <span>{dislike}</span>
      </div>
      <div>
        <Typography variant="h5" component="h3">Comments</Typography>
        <div style={{ maxHeight: '400px', overflow: 'auto' }}>
        {comments.map((comment, index) => (
            <div key={index} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
              <Typography variant="body1" style={{ fontWeight: 'bold' }}>Username: {comment.username}</Typography>
              <Typography variant="body1">Comment: {comment.content}</Typography>
            </div>
          ))}
        </div>
        <div>
          <Typography variant="h6" component="h4">Add a Comment</Typography>
          <TextField
            multiline
            rows={4}
            fullWidth
            placeholder="Write your comment here"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button variant="contained" onClick={handleCommentSubmit}>Submit</Button>
        </div>
      </div>
    </Grid>
  );
}

function SoftwareEngineering() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Container maxWidth="lg" style={{ height: '100%' }}>
        <Grid container spacing={2} alignItems="center" style={{ height: '100%' }}>
          <Grid item xs={12} sm={6}>
            <video id="videoPlayer" controls style={{ width: '100%', height: '100%' }}>
              <source src="https://dj25xpdwcrupf.cloudfront.net/math_lecture4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Grid>
          <CommentSection />
        </Grid>
      </Container>
    </div>
  );
}

export default SoftwareEngineering;
