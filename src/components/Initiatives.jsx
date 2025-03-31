import React, { useState, useEffect } from 'react'
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import d1 from '../assets/RNR/Donate-1.png';
import d2 from '../assets/RNR/Donate-2.png';
// import nirmaan from '../assets/Initiatives/Nirmaan.png';
import gogreen from '../assets/Initiatives/Go-Green.png';
// import muskaan from '../assets/Initiatives/Muskaan.png';
import '../css/initiatives.css';

const Initiatives = () => {
  const isMobile = window.innerWidth <= 768;
  const [card, setCard] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.slow
  });
  
  // Add state to track auto-sliding
  const [autoSlide, setAutoSlide] = useState(true);
  
  // Add auto-sliding functionality with useEffect
  useEffect(() => {
    let interval;
    
    if (autoSlide) {
      interval = setInterval(() => {
        // Get the next slide index, circling back to 0 when reaching the end
        const nextSlide = (card.goToSlide + 1) % InCards.length;
        setCard({ ...card, goToSlide: nextSlide });
      }, 3000); // Change slide every 3 seconds
    }
    
    // Clean up interval on component unmount or when autoSlide changes
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [card.goToSlide, autoSlide]);
  
  // Pause auto-sliding when user interacts with carousel
  const pauseAutoSlide = () => {
    setAutoSlide(false);
    
    // Resume auto-sliding after 5 seconds of inactivity
    setTimeout(() => {
      setAutoSlide(true);
    }, 5000);
  };

  const InCards = [
    {
      key: uuidv4(),
      content: <img src={d1} alt="1" />,
      link: "https://swd.vit.edu/flagship/rr/rr.html"
    },
    {
      key: uuidv4(),
      content: <img src={d2} alt="2" />,
      link: "https://swd.vit.edu/flagship/utkrash/utkarsh.html"
    },
    // {
    //   key: uuidv4(),
    //   content: <img src={nirmaan} alt="3" />,
    //   link: "https://youtu.be/9xoo9GvsK5o?list=TLGGZyE3b9VU8G8yNDAyMjAyNA"
    // },
    {
      key: uuidv4(),
      content: <img src={gogreen} alt="4" />,
      link: "https://youtu.be/eifgT3ustW0?list=TLGGYDK2KB_YQJMyNDAyMjAyNA"
    },
    // {
    //   key: uuidv4(),
    //   content: <img src={muskaan} alt="5" />,
    //   link: "https://swd.vit.edu/flagship/blood-d/blood.html"
    // },
    {
      key: uuidv4(),
      content: <img src={d1} alt="1" />,
      link: "https://swd.vit.edu/flagship/rr/rr.html"
    },
    {
      key: uuidv4(),
      content: <img src={d2} alt="2" />,
      link: "https://swd.vit.edu/flagship/aatmabodh/aatmabodh.html"
    },
    // {
    //   key: uuidv4(),
    //   content: <img src={nirmaan} alt="3" />,
    //   link: "https://youtu.be/9xoo9GvsK5o?list=TLGGZyE3b9VU8G8yNDAyMjAyNA"
    // },
    {
      key: uuidv4(),
      content: <img src={gogreen} alt="4" />,
      link: "https://youtu.be/eifgT3ustW0?list=TLGGYDK2KB_YQJMyNDAyMjAyNA"
    },
    // {
    //   key: uuidv4(),
    //   content: <img src={muskaan} alt="5" />,
    //   link: "https://swd.vit.edu/flagship/blood-d/blood.html"
    // },
  ].map((slide, index) => {
    return {
      ...slide,
      onClick: () => {
        pauseAutoSlide(); // Pause auto-sliding when user clicks
        if (index === card.goToSlide) {
          // window.open(slide.link);
        }
        setCard({ ...card, goToSlide: index })
      }
    }
  });

  const onRight = () => {
    pauseAutoSlide(); // Pause auto-sliding when user clicks navigation
    setCard({ ...card, goToSlide: (card.goToSlide + 1) % InCards.length })
  }

  const onLeft = () => {
    pauseAutoSlide(); // Pause auto-sliding when user clicks navigation
    setCard({ ...card, goToSlide: (card.goToSlide - 1 + InCards.length) % InCards.length })
  }

  return (
    <div className="Initiatives">
      <br />
      <br />
      <div className="title">
        <h1><span>OUR</span> INITIATIVES</h1>
      </div>
      <div className="initiative-cards">
        <Carousel
          slides={InCards}
          goToSlide={card.goToSlide}
          offsetRadius={card.offsetRadius}
          showNavigation={card.showNavigation}
          animationConfig={card.config}
        />
      </div>

      <div className="arrows">
        <svg onClick={onLeft} xmlns="http://www.w3.org/2000/svg" width={isMobile?"30":"40"} height={isMobile?"30":"40"} fill="currentColor" className="leftarr bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg>
        <svg onClick={onRight} xmlns="http://www.w3.org/2000/svg" width={isMobile?"30":"40"}  height={isMobile?"30":"40"}  fill="currentColor" className="rightarr bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
        </svg>
      </div>
    </div>
  )
}

export default Initiatives