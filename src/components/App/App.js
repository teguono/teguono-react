import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import MBVAlbumCover from '../../assets/images/mbv.jpg';
import LovelessAlbumCover from '../../assets/images/loveless.jpg';
import LovelessAudio from '../../assets/audio/loveless-audio.mp3';
import MBVAudio from '../../assets/audio/mbv-audio.mp3';
import CocteauTwins from './CocteauTwins';
import Slowdive from './Slowdive';
import ElliottSmith from './ElliottSmith';

function App() {
  const [isStyleChanged, setIsStyleChanged] = useState(false);
  const [showLovelessText, setShowLovelessText] = useState(false);
  const [showMBVText, setShowMBVText] = useState(false);
  const [isLovelessPlaying, setIsLovelessPlaying] = useState(false);
  const [isMBVPlaying, setIsMBVPlaying] = useState(false);

  const handleImageClick = (imageType) => {
    if (imageType === 'loveless') {
      setShowLovelessText((prevState) => !prevState);
      setIsLovelessPlaying(!isLovelessPlaying);
      setIsMBVPlaying(false); // Stop MBV audio
      setShowMBVText(false); // Hide MBV text
    } else if (imageType === 'mbv') {
      setShowMBVText((prevState) => !prevState);
      setIsMBVPlaying(!isMBVPlaying);
      setIsLovelessPlaying(false); // Stop Loveless audio
      setShowLovelessText(false); // Hide Loveless text
    }
    setIsStyleChanged(!isStyleChanged);
  };

  return (
    <Router>
      <div className={`App ${isStyleChanged ? 'style-changed' : ''}`}>
        <header className="App-header">
          <Navbar />
          <p>
            my bloody valentine.
          </p>
          <img
            src={LovelessAlbumCover}
            alt="Loveless Album"
            onClick={() => handleImageClick('loveless')}
            className={showLovelessText ? 'expanded-image' : ''}
          />
          {showLovelessText && <p>loveless</p>}
          <br />
          <img
            src={MBVAlbumCover}
            alt="MBV Album"
            onClick={() => handleImageClick('mbv')}
            className={showMBVText ? 'expanded-image' : ''}
          />
          {showMBVText && <p>mbv</p>}

          {/* Loveless Audio */}
          {isLovelessPlaying && (
            <audio autoPlay loop>
              <source src={LovelessAudio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}

          {/* MBV Audio */}
          {isMBVPlaying && (
            <audio autoPlay loop>
              <source src={MBVAudio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </header>
        <Routes>
          <Route path="/cocteau-twins" element={<CocteauTwins/>} />
          <Route path="/slowdive" component={<Slowdive/>} />
          <Route path="/elliott-smith" component={<ElliottSmith/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
