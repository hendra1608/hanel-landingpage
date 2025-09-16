"use client";
import { Box, Typography, Button } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        bgcolor: "background.default",
        color: "text.primary",
        py: 8,
      }}
    >
      <Box component="img" src="/logo.png" alt="HANEL Logo" sx={{ height: 75, }} />
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Simplicity. Elegance. Confidence.
      </Typography>
      <Button variant="contained" color="secondary" size="large" sx={{ mt: 4 }}>
        Explore Collection
      </Button>
    </Box>
  );
}
