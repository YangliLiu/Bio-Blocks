import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import LoadA from './alanine';
import LoadR from './arginine';
import LoadN from './asparagine';
import LoadD from './aspartic acid';
import LoadC from './cysteine';
import LoadQ from './glutamine';
import LoadE from './glutamic acid';
import LoadG from './glycine';
import LoadH from './histidine';
import LoadI from './isoleucine';
import LoadL from './leucine';
import LoadK from './lysine';
import LoadM from './methionine';
import LoadF from './phenylalanine';
import LoadP from './proline';
import LoadS from './serine';
import LoadT from './threonine';
import LoadW from './tryptophan';
import LoadY from './tyrosine';
import LoadV from './valine ';


const images = [
  '/alanine.png',
  '/arginine.png',
  '/asparagine.png',
  '/acideaspartique.png',
  '/cysteine.png',
  '/glutamine.png',
  '/acideglutamique.png',
  '/glycine.png',
  '/histidine.png',
  '/isoleucine.png',
  '/leucine.png',
  '/lysine.png',
  '/methionine.png',
  '/phenylalanine.png',
  '/proline.png',
  '/serine.png',
  '/threonine.png',
  '/tryptophane.png',
  '/tyrosine.png',
  '/valine.png'
];

const imagesPerPage = 4;
const totalPages = Math.ceil(images.length / imagesPerPage);

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [darkScreen, setDarkScreen] = useState(true);
  const [showTitle, setShowTitle] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [loadAlanine, setLoadAlanine] = useState(false);
  const [loadArginine, setLoadArginine] = useState(false);
  const [loadAsparagine, setLoadAsparagine] = useState(false);
  const [loadAsparticacid, setLoadAsparticacid] = useState(false);
  const [loadCysteine, setLoadCysteine] = useState(false);
  const [loadGlutamine, setLoadGlutamine] = useState(false);
  const [loadGlutamicacid, setLoadGlutamicacid] = useState(false);
  const [loadGlycine, setLoadGlycine] = useState(false);
  const [loadHistidine, setLoadHistidine] = useState(false);
  const [loadIsoleucine, setLoadIsoleucine] = useState(false);
  const [loadLeucine, setLoadLeucine] = useState(false);
  const [loadLysine, setLoadLysine] = useState(false);
  const [loadMethionine, setLoadMethionine] = useState(false);
  const [loadPhenylalanine, setLoadPhenylalanine] = useState(false);
  const [loadProline, setLoadProline] = useState(false);
  const [loadSerine, setLoadSerine] = useState(false);
  const [loadThreonine , setLoadThreonine] = useState(false);
  const [loadTryptophan, setLoadTryptophan] = useState(false);
  const [loadTyrosine, setLoadTyrosine] = useState(false);
  const [loadValine, setLoadValine] = useState(false);
  
  

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDarkScreen(false);
      setShowTitle(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      const delta = event.deltaY;
      const newPage = delta > 0 ? currentPage + 1 : currentPage - 1;

      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
        window.scrollTo({ top: (newPage - 1) * window.innerHeight, behavior: 'smooth' });
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentPage]);

  const titleAnimation = useSpring({
    opacity: showTitle ? 1 : 0,
    transform: `translate3d(0, ${showTitle ? 0 : -50}px, 0)`,
  });

  const imageGridAnimation = useSpring({
    opacity: showImages ? 1 : 0,
  });

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    if (index === 0) {
      setLoadAlanine(true);
      setShowTitle(false);
    }
    if (index === 1) {
      setLoadArginine(true);
      setShowTitle(false);
    }
    if (index === 2) {
      setLoadAsparagine(true);
      setShowTitle(false);
    }
    if (index === 3) {
      setLoadAsparticacid(true);
      setShowTitle(false);
    }
    if (index === 4) {
      setLoadCysteine(true);
      setShowTitle(false);
    }
    if (index === 5) {
      setLoadGlutamine(true);
      setShowTitle(false);
    }
    if (index === 6) {
      setLoadGlutamicacid(true);
      setShowTitle(false);
    }
    if (index === 7) {
      setLoadGlycine(true);
      setShowTitle(false);
    }
    if (index === 8) {
      setLoadHistidine(true);
      setShowTitle(false);
    }
    if (index === 9) {
      setLoadIsoleucine(true);
      setShowTitle(false);
    }
    if (index === 10) {
      setLoadLeucine(true);
      setShowTitle(false);
    }
    if (index === 11) {
      setLoadLysine(true);
      setShowTitle(false);
    }
    if (index === 12) {
      setLoadMethionine(true);
      setShowTitle(false);
    }
    if (index === 13) {
      setLoadPhenylalanine(true);
      setShowTitle(false);
    }
    if (index === 14) {
      setLoadProline(true);
      setShowTitle(false);
    }
    if (index === 15) {
      setLoadSerine(true);
      setShowTitle(false);
    }
    if (index === 16) {
      setLoadThreonine(true);
      setShowTitle(false);
    }
    if (index === 17) {
      setLoadTryptophan(true);
      setShowTitle(false);
    }
    if (index === 18) {
      setLoadTyrosine(true);
      setShowTitle(false);
    }
    if (index === 19) {
      setLoadValine(true);
      setShowTitle(false);
    }
   
    
  };
  
  const handleBackToAminoAcidList = () => {
    setLoadAlanine(false);
    setLoadArginine(false);
    setLoadAsparagine(false);
    setLoadAsparticacid(false);
    setLoadCysteine(false);
    setLoadGlutamine(false);
    setLoadGlutamicacid(false);
    setLoadHistidine(false);
    setLoadGlycine(false);
    setLoadIsoleucine(false);
    setLoadLeucine(false);
    setLoadLysine(false);
    setLoadMethionine(false);
    setLoadPhenylalanine(false);
    setLoadProline(false);
    setLoadSerine(false);
    setLoadThreonine(false);
    setLoadTryptophan(false);
    setLoadTyrosine(false);
    setLoadValine(false);

    setShowTitle(true);
    setSelectedImageIndex(null);
  };

  useEffect(() => {
    // Show images 2 seconds after the title appears
    if (showTitle) {
      const timeoutId = setTimeout(() => {
        setShowImages(true);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [showTitle]);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`app-container ${darkScreen ? 'dark-screen' : ''}`}>
      <animated.h1 style={titleAnimation} className="title">
        Bio Blocks
      </animated.h1>

      <animated.div style={imageGridAnimation} className="image-grid">
        {showTitle && !loadAlanine && !loadArginine && !loadAsparagine && !loadAsparticacid && !loadCysteine 
        && !loadGlutamine && !loadGlutamicacid && !loadGlycine && !loadHistidine && !loadIsoleucine
        && !loadLeucine && !loadLysine && !loadMethionine && !loadPhenylalanine && !loadProline
        && !loadSerine && !loadThreonine && !loadTryptophan && !loadTyrosine&& !loadValine
        &&images.slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage).map((imageUrl, index) => (
          <div key={index + (currentPage - 1) * imagesPerPage} className={`image-container ${index < 2 ? 'top' : 'bottom'}`} onClick={() => handleImageClick(index + (currentPage - 1) * imagesPerPage)}>
            <img src={imageUrl} alt={`Image ${index + (currentPage - 1) * imagesPerPage}`} />
          </div>
        ))}
      </animated.div>

      <div className="pagination">
        {[...Array(totalPages).keys()].map((page) => (
          <button key={page + 1} onClick={() => setCurrentPage(page + 1)} className={page + 1 === currentPage ? 'active' : ''}>
            {page + 1}
          </button>
        ))}
      </div>

      {loadAlanine && <LoadA onBackClick={handleBackToAminoAcidList}/>}
      {loadArginine && <LoadR onBackClick={handleBackToAminoAcidList}/>}
      {loadAsparagine && <LoadN onBackClick={handleBackToAminoAcidList}/>}
      {loadAsparticacid && <LoadD onBackClick={handleBackToAminoAcidList}/>}
      {loadCysteine && <LoadC onBackClick={handleBackToAminoAcidList}/>}
      {loadGlutamine && <LoadQ onBackClick={handleBackToAminoAcidList}/>}
      {loadGlutamicacid && <LoadE onBackClick={handleBackToAminoAcidList}/>}
      {loadGlycine && <LoadG onBackClick={handleBackToAminoAcidList}/>}
      {loadHistidine && <LoadH onBackClick={handleBackToAminoAcidList}/>}
      {loadIsoleucine && <LoadI onBackClick={handleBackToAminoAcidList}/>}
      {loadLeucine && <LoadL onBackClick={handleBackToAminoAcidList}/>}
      {loadLysine&& <LoadK onBackClick={handleBackToAminoAcidList}/>}
      {loadMethionine && <LoadM onBackClick={handleBackToAminoAcidList}/>}
      {loadPhenylalanine && <LoadF onBackClick={handleBackToAminoAcidList}/>}
      {loadProline && <LoadP onBackClick={handleBackToAminoAcidList}/>}
      {loadSerine && <LoadS onBackClick={handleBackToAminoAcidList}/>}
      {loadThreonine && <LoadT onBackClick={handleBackToAminoAcidList}/>}
      {loadTryptophan && <LoadW onBackClick={handleBackToAminoAcidList}/>}
      {loadTyrosine && <LoadY onBackClick={handleBackToAminoAcidList}/>}
      {loadValine && <LoadV onBackClick={handleBackToAminoAcidList}/>}
    </div>
  );
};

export default App;