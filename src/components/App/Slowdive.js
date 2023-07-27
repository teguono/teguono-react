// Slowdive.js
import './Slowdive.css';
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SDAlbumCover from '../../assets/images/slowdive.jpg';
import SDAudio from '../../assets/audio/slowdive-audio.mp3';

function Slowdive() {
  const [isStyleChanged, setIsStyleChanged] = useState(false);
  const [showSDText, setShowSDText] = useState(false);
  const [isSDPlaying, setIsSDPlaying] = useState(false);

  const handleImageClick = () => {
    setShowSDText((prevState) => !prevState);
    setIsSDPlaying(!isSDPlaying);
    setIsStyleChanged(!isStyleChanged);
  };

  return (
    <div className={`Slowdive ${isStyleChanged ? 'style-changed' : ''}`}>
      <header className="Slowdive-header">
        <Navbar />
        <p>
          Slowdive
        </p>
        <img
          src={SDAlbumCover}
          alt="Slowdive Album"
          onClick={handleImageClick}
          className={showSDText ? 'expanded-image' : ''}
        />
        {showSDText && <p>Souvlaki</p>}

        {/* Slowdive Audio */}
        {isSDPlaying && (
          <audio autoPlay loop>
            <source src={SDAudio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </header>
    </div>
  );
}

export default Slowdive;
