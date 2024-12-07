import React from 'react';
import { Box, Typography, Input } from '@mui/material';

const AudioCard = ({
  index,
  audioFiles,
  audioPlayers,
  isPlaying,
  selectedAudio,
  handleFileUpload,
  playAudio,
  stopAudio,
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '350px', // Increase max width for a bigger card
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '24px', // Add more padding for spacious design
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '10px', // Optional: adds space between cards
      }}
    >
      <Typography variant="h6" gutterBottom>
        Sound {index + 1}
      </Typography>

      {/* File Upload */}
      <Input
        type="file"
        onChange={(e) => handleFileUpload(e, index)}
        sx={{ marginBottom: '20px', width: '100%' }} // Ensure the upload button is wide
      />

      {/* Audio Player Display */}
      {selectedAudio[index] && (
        <audio controls src={selectedAudio[index]} style={{ width: '100%', marginBottom: '20px' }} />
      )}
    </Box>
  );
};

export default AudioCard;
