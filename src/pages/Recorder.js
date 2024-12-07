import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import AudioCard from '../components/AudioCard'; // Corrected import path

const Recorder = () => {
  const [audioFiles, setAudioFiles] = useState([null, null, null]); // Store up to 3 uploaded audio files
  const [audioPlayers, setAudioPlayers] = useState([null, null, null]); // Store audio players for each file
  const [isPlaying, setIsPlaying] = useState([false, false, false]); // Track play status for each audio
  const [selectedAudio, setSelectedAudio] = useState([null, null, null]); // Track selected audio for each box

  // Handle file upload for each box
  const handleFileUpload = (event, index) => {
    const file = event.target.files[0]; // Get the first file
    const updatedAudioFiles = [...audioFiles];
    updatedAudioFiles[index] = file; // Update the respective audio file
    setAudioFiles(updatedAudioFiles);
    setSelectedAudio([...selectedAudio.slice(0, index), URL.createObjectURL(file), ...selectedAudio.slice(index + 1)]);
  };

  // Play audio for a specific box
  const playAudio = (index) => {
    const player = new Audio(selectedAudio[index]);
    const updatedAudioPlayers = [...audioPlayers];
    updatedAudioPlayers[index] = player;
    setAudioPlayers(updatedAudioPlayers);
    player.play();
    setIsPlaying([...isPlaying.slice(0, index), true, ...isPlaying.slice(index + 1)]);
    player.onended = () => {
      setIsPlaying([...isPlaying.slice(0, index), false, ...isPlaying.slice(index + 1)]); // Reset when audio ends
    };
  };

  // Stop audio for a specific box
  const stopAudio = (index) => {
    const player = audioPlayers[index];
    if (player) {
      player.pause();
      player.currentTime = 0; // Reset to the beginning
      setIsPlaying([...isPlaying.slice(0, index), false, ...isPlaying.slice(index + 1)]);
    }
  };

  return (
    <Container sx={{ paddingTop: '20px', maxWidth: '800px', width: '100%' }}>
      <Box sx={{ textAlign: 'center', padding: '20px' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Upload and Play Your Sounds
        </Typography>

        {/* Flexbox container to make the boxes side by side */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
          {/* Render three separate AudioCard components */}
          {[0, 1, 2].map((index) => (
            <AudioCard
              key={index}
              index={index}
              audioFiles={audioFiles}
              audioPlayers={audioPlayers}
              isPlaying={isPlaying}
              selectedAudio={selectedAudio}
              handleFileUpload={handleFileUpload}
              playAudio={playAudio}
              stopAudio={stopAudio}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Recorder;
