import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const carouselItems = [
  {
    id: 1,
    title: 'Annual Sports Day',
    description:"Celebrating Excellence in Sports: Where Every Athlete Shines",
    image: 'https://plus.unsplash.com/premium_photo-1661605523899-f97ec76e9e98?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    id: 2,
    title: 'Science Exhibition',
    description: 'Showcasing Student Innovations: Igniting Curiosity, Inspiring Tomorrow',
    image: 'https://plus.unsplash.com/premium_photo-1683140790296-6815a1675b75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    id: 3,
    title: 'Cultural Fest',
    description: 'Embracing Diversity and Creativity: Unity in Diversity, Expression in Art',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto play functionality using useEffect and setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change the interval duration as needed (in milliseconds)

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []); // Run effect only once on mount

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  return (
    <div className="px-4 lg:px-6 py-10 bg-white">
      <div className="relative">
        <div className="relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)] bg-black rounded-2xl dark:bg-neutral-800">
          <div className="absolute top-0 bottom-0 left-0 flex transition-transform duration-700">
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex-shrink-0 w-full h-full flex flex-col bg-cover bg-center bg-no-repeat`}
                style={{ backgroundImage: `url(${item.image})`, transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="mt-auto w-2/3 md:max-w-lg pl-5 pb-5 md:pl-10 md:pb-10">
                  <span className="block text-white">{item.title}</span>
                  <span className="block text-white text-xl md:text-3xl">{item.description}</span>
                  <div className="mt-5">
                    <a
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100"
                      href={item.link}
                    >
                     Admission Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute inset-y-0 left-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-l-2xl focus:outline-none focus:bg-white/20"
          aria-label="Previous slide"
        >
          <span className="text-2xl" aria-hidden="true">
            &lt;
          </span>
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute inset-y-0 right-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-r-2xl focus:outline-none focus:bg-white/20"
          aria-label="Next slide"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            &gt;
          </span>
        </button>
        {/* End Arrows */}
      </div>
    </div>
  );
};

export default Carousel;
