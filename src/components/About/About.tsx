"use client";

import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const PurpleBorder = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 12,
  backgroundColor: '#9333EA',
});

const DiamondShape = styled(Box)({
  width: 24,
  height: 24,
  backgroundColor: '#000000',
  transform: 'rotate(45deg)',
  position: 'absolute',
  top: 64,  
  left: 128,
});

const ProductCard = styled(Paper)({
  width: 224,
  height: 320,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  borderRadius: 8,
});

const About = () => {
  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Purple border at top */}
      <PurpleBorder />
      
      {/* Main container */}
      <Box sx={{ display: 'flex', height: '100vh' }}>
        {/* Left side - Beige background with text */}
        <Box 
          sx={{ 
            width: '50%', 
            bgcolor: '#D4D4AA',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          
          {/* Content container */}
          <Box sx={{ maxWidth: 600, px: 8 }}>
            <Box component="img" src="/logo.png" alt="HANEL Logo" sx={{ height: 75, my:10 }} />

            
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: '1.25rem',
                lineHeight: 1.8,
                color: '#1F2937',
                fontFamily: 'sans-serif'
              }}
            >
              Brand HANEL lahir dari keinginan untuk mengekspresikan semangat jiwa muda yang dinamis dalam bentuk fashion.
            </Typography>
          </Box>
        </Box>
        
        {/* Right side - White background with image */}
        <Box 
          sx={{ 
            width: '50%',
            bgcolor: '#F3F4F6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          {/* Product cards container */}
          <Box sx={{ position: 'relative', width: 384, height: 256 }}>
            {/* First card */}
            <ProductCard
              elevation={10}
              sx={{
                bgcolor: '#374151',
                left: 0,
                top: 0,
                transform: 'rotate(-12deg)',
              }}
            >
              <Box sx={{ transform: 'rotate(-12deg)' }}>
                <Box 
                  sx={{ 
                    border: '2px solid #9CA3AF',
                    px: 2,
                    py: 0.5,
                    display: 'inline-block'
                  }}
                >
                  <Typography 
                    sx={{ 
                      color: '#D1D5DB',
                      fontSize: '1.25rem',
                      letterSpacing: '0.1em'
                    }}
                  >
                    HANEL
                  </Typography>
                </Box>
              </Box>
            </ProductCard>
            
            {/* Second card */}
            <ProductCard
              elevation={10}
              sx={{
                bgcolor: '#111827',
                right: 0,
                top: 32,
                transform: 'rotate(12deg)',
              }}
            >
              <Box sx={{ textAlign: 'center', transform: 'rotate(6deg)' }}>
                <Typography 
                  sx={{ 
                    color: 'white',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    mb: 1
                  }}
                >
                  PRESTIGE • PLACE
                </Typography>
                <Box 
                  sx={{
                    width: 80,
                    height: 80,
                    border: '4px solid white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 1
                  }}
                >
                  <Typography 
                    sx={{ 
                      color: 'white',
                      fontSize: '2.5rem',
                      fontWeight: 'bold'
                    }}
                  >
                    H
                  </Typography>
                </Box>
                <Typography 
                  sx={{ 
                    color: 'white',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em'
                  }}
                >
                  HANEL
                </Typography>
              </Box>
            </ProductCard>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;