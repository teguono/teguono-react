// ElliottSmith.js
import './ElliottSmith.css';
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import ESAlbumCover from '../../assets/images/either-or.jpg';
import ESAudio from '../../assets/audio/elliott-smith-audio.mp3';

function ElliottSmith() {
  const [isStyleChanged, setIsStyleChanged] = useState(false);
  const [showESText, setShowESText] = useState(false);
  const [isESPlaying, setIsESPlaying] = useState(false);

  const handleImageClick = () => {
    setShowESText((prevState) => !prevState);
    setIsESPlaying(!isESPlaying);
    setIsStyleChanged(!isStyleChanged);
  };

  return (
    <div className={`ElliottSmith ${isStyleChanged ? 'style-changed' : ''}`}>
      <header className="ElliottSmith-header">
        <Navbar />
        <p>
          Elliott Smith
        </p>
        <img
          src={ESAlbumCover}
          alt="Elliott Smith Album"
          onClick={handleImageClick}
          className={showESText ? 'expanded-image' : ''}
        />
        {showESText && <p>Either/Or</p>}

        {/* Elliott Smith Audio */}
        {isESPlaying && (
          <audio autoPlay loop>
            <source src={ESAudio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </header>
    </div>
  );
}

export default ElliottSmith;
