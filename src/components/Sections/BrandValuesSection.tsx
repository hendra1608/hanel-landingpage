"use client";
import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import StarIcon from "@mui/icons-material/Star";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import { useTheme } from "@mui/material/styles";

const BrandValuesSection = () => {
  const theme = useTheme();

  const values = [
    {
      title: "KUALITAS PREMIUM",
      description: "Bahan pilihan terbaik dan jahitan presisi",
      icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 48, color: theme.palette.secondary.main }} />,
    },
    {
      title: "DESAIN EKSKLUSIF",
      description: "Karya orisinal mencerminkan identitas",
      icon: <StarIcon sx={{ fontSize: 48, color: theme.palette.secondary.main }} />,
    },
    {
      title: "RAMAH LINGKUNGAN",
      description: "Material eco-friendly dan proses berkelanjutan",
      icon: <AutorenewOutlinedIcon sx={{ fontSize: 48, color: theme.palette.secondary.main }} />,
    },
  ];

  return (
    <Box id="brand-values" sx={{ py: 12, bgcolor: "#F9FAFB" }}>
      <Box textAlign="center" mb={8}>
        <Typography variant="subtitle2" sx={{ textTransform: "uppercase", mb: 2 }}>Mengapa Hanel</Typography>
        <Typography variant="h3" sx={{ fontWeight: 300, mb: 4 }}>Nilai Brand Kami</Typography>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
        {values.map((value, idx) => (
          <Paper
            key={idx}
            elevation={0}
            sx={{
              flex: "1 1 300px",
              p: 5,
              textAlign: "center",
              bgcolor: "white",
              borderRadius: 2,
              border: "1px solid #E5E7EB",
              "&:hover": { borderColor: theme.palette.secondary.main, transform: "translateY(-4px)", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" },
            }}
          >
            <Box mb={3}>{value.icon}</Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>{value.title}</Typography>
            <Typography variant="body2" color="text.secondary">{value.description}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default BrandValuesSection;
