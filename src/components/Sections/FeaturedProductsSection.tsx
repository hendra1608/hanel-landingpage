"use client";
import React from "react";
import { Box, Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const FeaturedProductsSection = () => {
  const theme = useTheme();

  const products = [
    { id: 1, name: "HANEL Signature Jacket", price: "Rp 1.299.000", category: "OUTERWEAR", image: "https://champiro.id/wp-content/uploads/2024/09/5674224ff48fa8cdfc192cc841188b5b_result.webp" },
    { id: 2, name: "Urban Street Hoodie", price: "Rp 799.000", category: "STREETWEAR", image: "https://i.redd.it/my-take-on-classic-streetwear-fit-v0-1w0tgw7gj9dc1.jpg?width=1909&format=pjpg&auto=webp&s=a09c24b9dd19d1f485eb1a1e86a9c3eee405967f" },
    { id: 3, name: "Premium Cotton Shirt", price: "Rp 599.000", category: "ESSENTIALS", image: "https://www.mypersonalisedclothing.com/wp-content/uploads/2021/04/gd08_lifestyle_1.png" },
    { id: 4, name: "Denim Classic Pants", price: "Rp 899.000", category: "BOTTOM", image: "https://dynamic.zacdn.com/2TM8OYbZQpFh2IF-SJiztme5ZmA=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/riamiranda-4508-7431384-2.jpg" },
  ];

  return (
    <Box id="new" sx={{ py: 12, bgcolor: "#FFF9F0" }}>
      <Box
  display="flex"
  flexDirection="column"
  alignItems="center" // center horizontal
  textAlign="center" // text rata tengah
  mb={8} 
>
  <Typography
    variant="h3"
    sx={{
      fontWeight: 300,
      letterSpacing: 2, // memberi kesan modern
      lineHeight: 1.2,
    }}
  >
    Koleksi Terbaru
  </Typography>
</Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
        {products.map(product => (
          <Card key={product.id} sx={{ flex: "1 1 250px", borderRadius: 2, boxShadow: "0 4px 20px rgba(0,0,0,0.05)", transition: "0.3s", "&:hover": { transform: "translateY(-10px) scale(1.02)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" } }}>
            <Box sx={{ position: "relative", overflow: "hidden" }}>
              <CardMedia component="img" height="400" image={product.image} alt={product.name} sx={{ transition: "0.5s", "&:hover": { transform: "scale(1.05)" } }} />
              <Chip label={product.category} size="small" sx={{ position: "absolute", top: 16, left: 16, bgcolor: "white", fontWeight: 600, color: theme.palette.secondary.main }} />
            </Box>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>{product.name}</Typography>
              <Typography variant="body1" sx={{ fontWeight: 600, color: theme.palette.secondary.main }}>{product.price}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedProductsSection;
