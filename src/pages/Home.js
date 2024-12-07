import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <Box
      sx={{
        // color: '#000000',
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
          <img
            src={process.env.PUBLIC_URL + "/videos/echo-gif.gif"}
            style={{ width: "400px", height: "300px", marginRight: "16px" }}
            aria-label="Echo gif"
          />
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Create. Record. Remix.
        </Typography>
        <Box sx={{ marginTop: 4 }}>
          <Button
            variant="contained"
            color="error" // This will apply Material-UI's default red color
            size="large"
            component={Link}
            to="/"
            sx={{ marginRight: 2 }}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            color="error" // This will apply Material-UI's default red color for the outlined button
            size="large"
            component={Link}
            to="/"
          >
            Explore SoundBoard
          </Button>
        </Box>

      </Box>
    </Box>

  );
};

export default Home;
