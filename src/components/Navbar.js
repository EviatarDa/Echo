import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#cfe2f3' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <video
              src={process.env.PUBLIC_URL + "/videos/Echo-logo.webm"}
              style={{ width: "120px", height: "60px", marginRight: "16px" }}
              muted
              autoPlay
              loop={false}
              onMouseOver={(e) => {
                e.target.play();
              }}
              aria-label="Echo Logo"
            />
          </Link>
        </Typography>
        <Button
          component={Link}
          to="/"
          sx={{
            backgroundColor: '#cfe2f3',
            color: '#9c27b0', // Text color
            fontWeight: 'bold', // Make the text bold
            '&:hover': {
              color: 'red', // Change text color to red on hover
            },
          }}
        >
          Home
        </Button>

        <Button
          component={Link}
          to="/instruments"
          sx={{
            backgroundColor: '#cfe2f3',
            color: '#9c27b0', // Text color
            fontWeight: 'bold', // Make the text bold
            '&:hover': {
              color: 'red', // Change text color to red on hover
            },
          }}
        >
          Instruments
        </Button>
        <Button
          component={Link}
          to="/recorder"
          sx={{
            backgroundColor: '#cfe2f3',
            color: '#9c27b0', // Text color
            fontWeight: 'bold', // Make the text bold
            '&:hover': {
              color: 'red', // Change text color to red on hover
            },
          }}
        >
          Recorder
        </Button>
        <Button
          component={Link}
          to="/"
          sx={{
            backgroundColor: '#cfe2f3',
            color: '#9c27b0', // Text color
            fontWeight: 'bold', // Make the text bold
            '&:hover': {
              color: 'red', // Change text color to red on hover
            },
          }}
        >
          My Music
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
