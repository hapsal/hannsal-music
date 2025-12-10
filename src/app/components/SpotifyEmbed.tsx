import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

interface SpotifyEmbedProps {
  spotifyId: string;
  spotifyType: 'album' | 'artist' | 'playlist' | 'track' | 'show' | 'episode';
  className?: string;
  title?: string;
  artist?: string;
  imageUrl?: string; // Add this prop for album art
}

const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({
  spotifyId,
  spotifyType,
  className = '',
  title = 'Listen on Spotify',
  artist = '',
  imageUrl, // Accept image URL
}) => {
  if (!spotifyId || !spotifyType) {
    return null;
  }

  // Direct link to Spotify
  const spotifyUrl = `https://open.spotify.com/${spotifyType}/${spotifyId}`;
  const { t, language } = useLanguage();
  
  return (
    <div 
      className={`spotify-embed bg-[#1a2e3b] rounded-xl p-4 ${className}`} 
      style={{ color: 'white', border: 'none', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)' }}
    >
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="spotify-art w-full md:w-40 h-40 relative rounded-md overflow-hidden">
          {imageUrl ? (
            <Image 
              src={imageUrl} 
              alt={title} 
              fill 
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-black/30 flex items-center justify-center">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="white">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </div>
          )}
        </div>
        
        <div className="spotify-info flex-1">
          <h3 className="font-bold text-xl">{title}</h3>
          {artist && <p className="text-gray-300">{artist}</p>}
          
          <Link 
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold py-2 px-4 rounded-full"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            {t.listenOnSpotify}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpotifyEmbed;