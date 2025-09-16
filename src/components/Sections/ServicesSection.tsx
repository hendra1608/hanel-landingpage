"use client";
import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "@mui/icons-material/MusicNote"; // TikTok pakai ikon musik
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Shopee
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Styled Icon Button dengan hover efek
const SocialIconButton = styled(IconButton)(({ theme }) => ({
  width: 90,
  height: 90,
  bgcolor: "white",
  color: theme.palette.secondary.main,
  transition: "all 0.3s ease",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  "&:hover": {
    transform: "scale(1.15)",
    bgcolor: theme.palette.secondary.main,
    color: "white",
    boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
  },
}));

const socials = [
  { name: "Instagram", icon: <InstagramIcon sx={{ fontSize: 40 }} />, url: "https://instagram.com/username" },
  { name: "TikTok", icon: <TikTokIcon sx={{ fontSize: 40 }} />, url: "https://www.tiktok.com/@username" },
  { name: "Shopee", icon: <ShoppingCartIcon sx={{ fontSize: 40 }} />, url: "https://shopee.co.id/username" },
  { name: "WhatsApp", icon: <WhatsAppIcon sx={{ fontSize: 40 }} />, url: "https://wa.me/08123456789" },
];

const ServicesSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 16, bgcolor: "#F3F4F6" }}>
      <Box textAlign="center" mb={10}>
        <Typography variant="subtitle2" sx={{ textTransform: "uppercase", mb: 2, color: theme.palette.secondary.main }}>
          Follow & Shop
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 300, letterSpacing: 1 }}>
          Social Media & Online Shop
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", gap: { xs: 4, md: 8 }, flexWrap: "wrap" }}>
        {socials.map((social, idx) => (
          <Box key={idx} sx={{ textAlign: "center" }}>
            <Box
  component="a"
  href={social.url}
  target="_blank"
  rel="noopener noreferrer"
>               <SocialIconButton>{social.icon}</SocialIconButton>
              
            </Box>
            <Typography variant="body1" sx={{ mt: 2, fontWeight: 500 }}>
              {social.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesSection;
