"use client";

import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import InstagramEmbed from "../Instagram/Instagram";

const instagramPosts = [
  {
    id: 1,
    link: "https://www.instagram.com/p/B8SVeAQgW6S",
  },
  {
    id: 2,
    link: "https://www.instagram.com/p/DEeZ8xkTel9",
  },
  {
    id: 3,
    link: "https://www.instagram.com/p/CJhyA7yHEIt",
  },
  {
    id: 4,
    link: "https://www.instagram.com/p/DB9g3K1zlnY",
  },
  {
    id: 5,
    link: "https://www.instagram.com/p/DA-iFeuSQ_V/",
  },
];

export default function Collection() {
  return (
    <Box
    id="instagram"
  sx={{
    py: 8,
    width: "100vw",          // full width viewport
    mx: "calc(-50vw + 50%)", // center di viewport
    background: "linear-gradient(135deg, #fdf6f0 0%, #f0f0f0 100%)",
  }}
>
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        Our Instagram
      </Typography>

      {/* Horizontal scroll container */}
      <Box
  sx={{
    display: "flex",
    overflowX: "auto",
    gap: 2,
    mt: 4,
    px: 2, // padding horizontal agar card tidak nempel ke tepi
    scrollSnapType: "x mandatory", // aktifkan snapping
    "&::-webkit-scrollbar": { display: "none" },
  }}
>
  {instagramPosts.map((post) => (
    <Card
      key={post.id}
      sx={{
        minWidth: 300,
        flex: "0 0 auto",
        scrollSnapAlign: "start",
      }}
    >
      <InstagramEmbed url={post.link} />
    </Card>
  ))}
</Box>
    </Box>
  );
}
