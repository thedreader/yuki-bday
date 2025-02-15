'use client'
import { useEffect, useRef } from 'react';

const BackgroundMusic = ({ audioUrl, volume = 0.5, autoplay = true }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Audio can only be played after user interaction due to browser policies
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.volume = volume;
        audioRef.current.play().catch(error => {
          console.log("Audio playback failed:", error);
        });
      }
      // Remove the event listeners after first interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    // Add event listeners for user interaction
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    // Cleanup function
    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [volume]);

  return (
    <audio 
      ref={audioRef}
      src={audioUrl}
      loop
      preload="auto"
      style={{ display: 'none' }}
    />
  );
};

export default BackgroundMusic;