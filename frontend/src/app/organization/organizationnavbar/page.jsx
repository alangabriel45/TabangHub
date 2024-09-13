"use client";

import { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Box } from "@mui/material";
import { Dashboard, Event, Report, History, Menu, Close } from "@mui/icons-material";

export default function OrganizationNavbar() {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      {/* AppBar for the Toggle Button */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        edge="start"
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <Menu />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div>
          {/* Logo and Close Icon */}
          <div className="flex items-center justify-between p-4">
            <img src="/images/logo.png" alt="Logo" style={{ width: '120px' }} />
            <IconButton
              color="inherit"
              aria-label="close drawer"
              onClick={toggleDrawer}
            >
              <Close />
            </IconButton>
          </div>

          <Divider />

          {/* Navigation Links */}
          <List>
            <ListItem button>
              <ListItemIcon><Dashboard /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><Event /></ListItemIcon>
              <ListItemText primary="Manage Events" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><Report /></ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><History /></ListItemIcon>
              <ListItemText primary="History" />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>

      {/* Content area to shift with drawer */}
      <main
        style={{
          marginLeft: open ? 240 : 0,
          transition: 'margin 0.3s',
          padding: '20px'
        }}
      >
        {/* Add your main content here */}
      </main>
    </div>
  );
}
