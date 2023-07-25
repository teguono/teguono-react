import './CocteauTwins.css';
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import CTAlbumCover from '../../assets/images/cocteau-twins.jpg';
import CTAudio from '../../assets/audio/cocteau-twins-audio.mp3';

function CocteauTwins() {
  const [isStyleChanged, setIsStyleChanged] = useState(false);
  const [showCTText, setShowCTText] = useState(false);
  const [isCTPlaying, setIsCTPlaying] = useState(false);

  const handleImageClick = () => {
    setShowCTText((prevState) => !prevState);
    setIsCTPlaying(!isCTPlaying);
    setIsStyleChanged(!isStyleChanged);
  };

  return (
    <div className={`CocteauTwins ${isStyleChanged ? 'style-changed' : ''}`}>
      <header className="CocteauTwins-header">
        <Navbar />
        <p>
          Cocteau Twins
        </p>
        <img
          src={CTAlbumCover}
          alt="Cocteau Twins Album"
          onClick={handleImageClick}
          className={showCTText ? 'expanded-image' : ''}
        />
        {showCTText && <p>Heaven or Las Vegas</p>}

        {/* Cocteau Twins Audio */}
        {isCTPlaying && (
          <audio autoPlay loop>
            <source src={CTAudio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </header>
    </div>
  );
}

export default CocteauTwins;
