// VideoCard.js
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import image from "../utube.webp"
import ThreeDots from '../assets/ThreeDots';

// Import the GlobalStyle component

const BasicBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  background-color: transparent;
  padding: 0.4rem;
  cursor: pointer;
  border: "transparent"
  transition: 0.3s ease-out;

`;

const GlobalStyle = createGlobalStyle`
    * {
        margin:0px;
        
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: auto;
        scrollbar-color: #636363 transparent;
    }
    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 7px;
    }
    *::-webkit-scrollbar-track {
        background: transparent;
    }
    *::-webkit-scrollbar-thumb {
        background-color: #636363;
        border-radius: 10px;
        border: 0px none #ffffff;
    }
    body {
        min-width: 400px;
        display: flex;
        flex-direction: column;
    }
`;

// Styled components for the VideoCard
const VideoCardContainer = styled.div`
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    margin-left:200px;
`;

const VideoTitle = styled.h2`
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 10px;
`;
const VideoImage = styled.img`
    width: 200px;
    height: auto;
    border-radius: 8px 8px 0 0;
`;

const VideoDescription = styled.p`
    color: #666;
    font-size: 1rem;
`;

// VideoCard component
const VideoCard = () => {
    return (
        <>
         <VideoCardContainer>
                <VideoImage src={image} alt="YouTube" /> 
                <VideoTitle>Sample Video Title</VideoTitle>
                <VideoDescription>This is a sample video description.</VideoDescription>
              
            </VideoCardContainer>
        </>
    );
};

export default VideoCard;
