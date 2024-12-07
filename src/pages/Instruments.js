import React from 'react';
import { Button, Box } from '@mui/material';
import Slider from 'react-slick'; // Import react-slick

const Instruments = () => {
  const playSound = (instrument) => {
    // Logic for playing sound based on the instrument clicked
    console.log(`${instrument} sound played!`);
  };

  const instruments = [
    { name: 'Piano', color: '#f44336', image: '/images/echo.png' },
    { name: 'Drum Pad', color: '#2196f3', image: '/images/echo.png' },
    { name: 'Guitar', color: '#4caf50', image: '/images/echo.png' },
    { name: 'Violin', color: '#9c27b0', image: '/images/echo.png' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Slider {...settings}>
        {instruments.map((instrument, index) => (
          <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={process.env.PUBLIC_URL + instrument.image}
                alt={instrument.name}
                style={{
                  width: 'auto', 
                  height: '300px', 
                  maxWidth: '80%', 
                  marginBottom: '10px', 
                  objectFit: 'contain', // Ensures image scales properly
                }}
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: instrument.color,
                color: '#fff',
                fontSize: '18px',
                '&:hover': {
                  backgroundColor: `${instrument.color} !important`,
                },
              }}
              onClick={() => playSound(instrument.name)}
            >
              {instrument.name}
            </Button>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Instruments;
