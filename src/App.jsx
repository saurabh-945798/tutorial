import React, { useState, useEffect } from 'react';
import Carousel from './components/Carousel,js/Carousel.jsx';
import AboutUs from './components/AboutUs.js/AboutUs.jsx';
import Hero from './components/Hero.js/Hero.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Fotter from './components/Fotter/Fotter.jsx';
import Features from './components/Features/Features.jsx';
import Login from './components/Login/Login.jsx';
import Gallery from './components/gallery/Gallery.jsx';
import Student from './components/Student/Student.jsx';
import Work from './components/Work/Work.jsx';
import { Team } from './components/Work/Team/Team.jsx';
import Call from './components/Call/Call.jsx';
import Testimonials from './components/Testimonial/Testimonial.jsx';
import Circulam from './components/Circulam/Circulam.jsx';
import Preloader from './components/Preloader/Preloader.jsx';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer); // Cleanup the timer if component unmounts
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <>
      <AboutUs />
      <Student />
      <Features />
       <Carousel />
      
      <Gallery  />
      <Call />
      
      <Work />
      <Circulam />
      <Team/>
      {/* <Hero /> */}
      <Testimonials/>
      <Login/>
      <Fotter /> 
        </>
      )}
    </div>
  );
};

export default App;
