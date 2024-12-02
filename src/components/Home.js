import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Home = () => {
  return (
    <Box 
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #1E1E2F, #282A36)',
        color: '#fff',
      }}
    >
      {/* Hero Section */}
      <Box 
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Echo
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Create. Record. Remix.
        </Typography>
        <Box sx={{ marginTop: 4 }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            sx={{ marginRight: 2 }}
          >
            Get Started
          </Button>
          <Button 
            variant="outlined" 
            color="primary" 
            size="large"
          >
            Explore SoundBoard
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <Box 
        sx={{
          textAlign: 'center',
          padding: '10px',
          backgroundColor: '#1E1E2F',
          borderTop: '1px solid #444',
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Echo. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
