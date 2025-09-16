"use client";
import { Box, Typography, Container, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", py: 4, mt: 6 }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="h6" fontWeight="bold">
          HANEL
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          © {new Date().getFullYear()} HANEL. All rights reserved.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
            Instagram
          </Link>
          <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
            Facebook
          </Link>
          <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
            Twitter
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
