"use client";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Navbar() {

    const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box component="img" src="/logo.png" alt="HANEL Logo" sx={{ height: 40 }} />
        <Box>
          <Button color="inherit" onClick={()=>handleScroll("Home")}>Home</Button>
          <Button color="inherit" onClick={()=>handleScroll("Collection")}>Collection</Button>
          <Button color="inherit" onClick={()=>handleScroll("About")}>About</Button>
          <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
            Shop Now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
