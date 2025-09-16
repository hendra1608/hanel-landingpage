"use client";
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false); // close drawer on click
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Values", id: "brand-values" },
    { label: "Collection", id: "collection" },
    { label: "About", id: "brand-story" },
    { label: "Contact", id: "sosmed" },
  ];

  return (
    <>
      <AppBar position="sticky" color="default" elevation={0}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box component="img" src="/logo.png" alt="HANEL Logo" sx={{ height: 40 }} />

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            {navItems.map((item) => (
              <Button key={item.id} color="inherit" onClick={() => handleScroll(item.id)}>
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              color="secondary"
              sx={{ ml: 2 }}
              href="https://shopee.co.id/hanelstore17"
              target="_blank"
            >
              Shop Now
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            edge="start"
            sx={{ display: { md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ sx: { width: 250 } }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => handleScroll(item.id)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="https://shopee.co.id/hanelstore17"
              target="_blank"
            >
              <ListItemText primary="Shop Now" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
