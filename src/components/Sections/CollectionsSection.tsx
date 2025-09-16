"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CollectionsSection = () => {
  const theme = useTheme();
  const collections = [
    { title: "STREETWEAR", subtitle: "Urban Culture", image: "https://champiro.id/wp-content/uploads/2024/09/5674224ff48fa8cdfc192cc841188b5b_result.webp", count: "24 Items" },
    { title: "FORMAL", subtitle: "Business Elegance", image: "https://champiro.id/wp-content/uploads/2024/09/5674224ff48fa8cdfc192cc841188b5b_result.webp", count: "18 Items" },
    { title: "CASUAL", subtitle: "Daily Comfort", image: "https://champiro.id/wp-content/uploads/2024/09/5674224ff48fa8cdfc192cc841188b5b_result.webp", count: "32 Items" },
  ];

  return (
    <Box id="collection" sx={{ py: 12, bgcolor: "white" }}>
      <Box textAlign="center" mb={8}>
        <Typography variant="subtitle2" sx={{ textTransform: "uppercase", mb: 2 }}>Explore</Typography>
        <Typography variant="h3" sx={{ fontWeight: 300 }}>Our Products</Typography>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
        {collections.map((c, idx) => (
          <Box key={idx} sx={{ position: "relative", width: 350, cursor: "pointer" }}>
            <Box component="img" src={c.image} alt={c.title} sx={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 2, transition: "0.5s", "&:hover": { transform: "scale(1.05)" } }} />
            <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, bgcolor: "rgba(0,0,0,0.6)", color: "white", p: 3, borderRadius: "0 0 8px 8px" }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>{c.title}</Typography>
              <Typography variant="body2">{c.subtitle}</Typography>
              <Typography variant="caption">{c.count}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CollectionsSection;
