import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#323' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Echo
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/soundboard">Instruments</Button>
          <Button color="inherit" component={Link} to="/editor">Recorder</Button>
          <Button color="inherit" component={Link} to="/settings">My Music</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
