"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // Use Link for navigation
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar>
          {/* Left-aligned logo */}
          <Link href="/volunteer/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }}>
              TabangHub
            </Typography>
          </Link>

          {/* Center-aligned buttons */}
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <Button color="inherit">Skill Matched</Button>
            </Grid>
            <Grid item>
              <Button color="inherit">General</Button>
            </Grid>
          </Grid>

          {/* Right-aligned profile icon */}
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link href="/volunteer/profile">Profile</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/volunteer/donationhistory">Donation History</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/volunteer/manageevents">Manage Events</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <Link href="/login">Logout</Link></MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
