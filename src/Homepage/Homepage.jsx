import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { AppShell } from "../Sidebar/Sidebarstyle";
import { GlobalStyle } from "../GlobalStyle";
import VideoCard from "../VideoCard/VideoCard";
import YouTubeRow from "../content/content"; // Importing YouTubeRow component
import styled from "styled-components";

function Dashboard() {
  // Sample YouTube video IDs (replace with real ones)
  const videoIds = ["dQw4w9WgXcQ", "3JZ_D3ELwOQ", "L_jWHffIx5E"];

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <AppShell>
        <Sidebar />
        <MainContent>
          {/* YouTube Videos Row */}
          <SectionTitle>YouTube Videos</SectionTitle>
          <YouTubeRow videoIds={videoIds} />

          {/* VideoCard Grid */}
          <SectionTitle>Recommended Videos</SectionTitle>
          <VideoGrid>
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </VideoGrid>
        </MainContent>
      </AppShell>
    </>
  );
}

// Styled Components
const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  margin-left: 250px; /* Adjust according to sidebar width */
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive */
  gap: 20px;
`;

export default Dashboard;
