import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Echo
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
      <h1>Hello!~!</h1>
    </div>
  );
}

export default App;