import React from 'react';
import styled from 'styled-components';

// Styled components for the VideoCard
const VideoCardContainer = styled.div`
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px; /* Fixed width for better alignment */
`;

const VideoTitle = styled.h2`
  color: #333;
  font-size: 1.2rem;
  margin: 10px 0;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 180px; /* Adjust height for consistency */
  border-radius: 8px;
  border: none;
`;

const VideoDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

// VideoCard component that accepts a YouTube video ID as a prop
const VideoCard = ({ videoId, title, description }) => {
  return (
    <VideoCardContainer>
      {/* Embedding YouTube Video */}
      <VideoFrame 
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      />
      <VideoTitle>{title}</VideoTitle>
      <VideoDescription>{description}</VideoDescription>
    </VideoCardContainer>
  );
};

export default VideoCard;
