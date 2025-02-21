import React from 'react'
import { SideBarStyle, AppShell } from './Sidebarstyle';
import { MenuSection, MenuDevider, MenuItem } from './Menusection';
import Home from '../assets/Home';


function Sidebar() {
    return (
        <SideBarStyle>
            <MenuSection>
                <MenuItem>
                <Home />

                <span style={{ color: "white" }}>Home</span>
                </MenuItem>
                <MenuItem>
                <Home />

                <span style={{ color: "white" }}>Shorts</span>
                </MenuItem>
                <MenuItem>
                <Home />

                <span style={{ color: "white" }}>Subscriptions</span>
                </MenuItem>
                
            </MenuSection>
        </SideBarStyle>
    )
}

export default Sidebar
