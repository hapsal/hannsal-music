'use client'

import { useEffect, useState } from 'react';

interface SpotifyEmbedProps {
  spotifyId: string;
  spotifyType: 'track' | 'album' | 'playlist';
}

export default function SpotifyEmbed({ spotifyId, spotifyType }: SpotifyEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  if (!loaded) {
    return (
      <div className="w-full h-[380px] bg-base-300 animate-pulse rounded-lg flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }
  
  // Construct the appropriate Spotify embed URL
  const spotifyUrl = 
    spotifyType === 'track' ? 
      `https://open.spotify.com/embed/track/${spotifyId}` :
    spotifyType === 'album' ? 
      `https://open.spotify.com/embed/album/${spotifyId}` :
      `https://open.spotify.com/embed/playlist/${spotifyId}`;
  
  return (
    <iframe 
      src={spotifyUrl}
      width="100%" 
      height="380" 
      frameBorder="0" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy"
      className="rounded-lg shadow-lg"
    ></iframe>
  );
}