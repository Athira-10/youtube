import React from "react";
import { FaHome, FaYoutube } from "react-icons/fa";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 250px;
  background: #111;
  color: white;
  height: 100vh;
  padding: 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #333;
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
    
      <Logo>
       
      </Logo>

      <MenuSection>
        <MenuItem>
          <FaHome />
          <span>Home</span>
        </MenuItem>
        <MenuItem>
          <FaHome />
          <span>Shorts</span>
        </MenuItem>
        <MenuItem>
          <FaHome />
          <span>Subscriptions</span>
        </MenuItem>
      </MenuSection>
    </SidebarContainer>
  );
}

export default Sidebar;
