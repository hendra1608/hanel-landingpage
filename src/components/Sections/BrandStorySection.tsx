"use client";
import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const BrandStorySection = () => {
  const theme = useTheme();
  return (
    <Box sx={{ py: 12, bgcolor: "#F3F4F6" }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ flex: "1 1 400px", position: "relative" }}>
          <Box component="img" src="/hanel.jpeg" alt="HANEL Story" sx={{ width: "90%", borderRadius: 100, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} />
          <Box sx={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, bgcolor: theme.palette.secondary.main, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold", fontSize: "1.2rem", textAlign: "center" }}>
            EST.<br />2020
          </Box>
        </Box>

        <Box sx={{ flex: "1 1 400px" }}>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>Tentang Kami</Typography>
          <Typography variant="h3" sx={{ mb: 4 }}>The HANEL Story</Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ lineHeight: 1.8 }}>
            HANEL lahir dari passion terhadap fashion yang tidak hanya mengikuti trend, tetapi menciptakan identitas.
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ lineHeight: 1.8 }}>
            Setiap koleksi kami dirancang dengan detail tinggi, menggabungkan estetika modern dengan kenyamanan maksimal.
          </Typography>
          <Stack direction="row" spacing={4} sx={{ mt: 4 }}>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: theme.palette.secondary.main }}>500+</Typography>
              <Typography variant="body2" color="text.secondary">Desain Eksklusif</Typography>
            </Box>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: theme.palette.secondary.main }}>50K+</Typography>
              <Typography variant="body2" color="text.secondary">Pelanggan Setia</Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default BrandStorySection;
