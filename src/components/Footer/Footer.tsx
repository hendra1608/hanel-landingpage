"use client";
import React from "react";
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import { Instagram, WhatsApp, MusicNote, ShoppingCart } from "@mui/icons-material";
import { useTheme, styled } from "@mui/material/styles";

// Styled social icon buttons
const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: "white",
  bgcolor: "transparent",
  transition: "all 0.3s ease",
  "&:hover": {
    color: theme.palette.secondary.main,
    transform: "scale(1.2)",
  },
}));

const Footer = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.primary.main, color: "white", py: 1, mt: 10 }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        {/* Brand Name */}
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, letterSpacing: 1 }}>
          HANEL
        </Typography>

        {/* Social Media */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 3 }}>
          <SocialIcon href="https://www.instagram.com/hanelstore" target="_blank">
            <Instagram />
          </SocialIcon>
          <SocialIcon href="https://www.tiktok.com/@hanelstore" target="_blank">
            <MusicNote />
          </SocialIcon>
          <SocialIcon href="https://wa.me/+6285880282557" target="_blank">
            <WhatsApp />
          </SocialIcon>
          <SocialIcon href="https://shopee.co.id/username" target="_blank">
            <ShoppingCart />
          </SocialIcon>
        </Box>

        {/* Copyright */}
        <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
          © {new Date().getFullYear()} HANEL. All rights reserved.
        </Typography>

        {/* Fun credit */}
        <Typography 
          variant="caption" 
          sx={{
            display: "block",
            fontWeight: 500,
            fontStyle: "italic",
            mt: 1,
            letterSpacing: 0.5
          }}
        >
          🌟 Website dibuat dengan ❤️ oleh Hendra
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
