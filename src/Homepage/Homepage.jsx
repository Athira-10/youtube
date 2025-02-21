import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { GlobalStyle } from "../GlobalStyle";
import VideoCard from "../VideoCard/VideoCard";
import YouTubeRow from "../content/content";
import styled from "styled-components";

function Dashboard() {
  // New YouTube video IDs
  const videoIds = [
    "RgKAFK5djSk", "Ffch7yJ31ak", "j59qQ7YWLxw", // Tech
    "VYOjWnS4cMY", "3tmd-ClpJxA", "LHCob76kigA", // Entertainment
    "mgmVOuLgFB0", "ZXsQAXx_ao0", "UBRl7zZ9WUY"  // Motivation
  ];

  return (
    <>
      <GlobalStyle />
      <DashboardContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>

        <MainContent>
          <Navbar />
          <ContentWrapper>
            {/* YouTube Row Section */}
            <Section>
              <SectionTitle>Trending Videos</SectionTitle>
              <YouTubeRow videoIds={videoIds.slice(0, 3)} /> {/* First 3 videos */}
            </Section>

            {/* Recommended Videos Section */}
            <Section>
              <SectionTitle>Recommended Videos</SectionTitle>
              <VideoGrid>
                {videoIds.slice(3).map((id, index) => (
                  <VideoCard
                    key={index}
                    videoId={id}
                    title={`Video ${index + 1}`}
                    description="A great video to watch!"
                  />
                ))}
              </VideoGrid>
            </Section>
          </ContentWrapper>
        </MainContent>
      </DashboardContainer>
    </>
  );
}

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: auto;
`;

const SidebarContainer = styled.div`
  width: 250px;
  background: #111;
  color: white;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
`;

const MainContent = styled.div`
  margin-left: 250px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  padding: 20px;
  margin-top: 60px;
  overflow-y: auto;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const VideoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
`;

export default Dashboard;
