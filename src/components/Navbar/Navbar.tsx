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
          <Button color="inherit" onClick={()=>handleScroll("Hero")}>Home</Button>
          <Button color="inherit" onClick={()=>handleScroll("brand-values")}>Values</Button>
          <Button color="inherit" onClick={()=>handleScroll("collection")}>Collection</Button>
          <Button color="inherit" onClick={()=>handleScroll("story")}>About</Button>
          <Button color="inherit" onClick={()=>handleScroll("sosmed")}>Contact</Button>
          <Button variant="contained" color="secondary" sx={{ ml: 2 }} href="https://shopee.co.id/hanelstore17">
            Shop Now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
