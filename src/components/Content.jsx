import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from "./Card";

const MainContent = () => {
    const slides = [
        {
            id:1,
            src:"/uefaa.webp",
            alt:"First image"
        },
        {
            id:2,
            src:"/real.jpeg",
            alt:"Second image"
        },
        {
            id:3,
            src:"/stadium.webp",
            alt:"Third image"
        }
    ];

    const[current, setCurrent] = useState(0);

    const nextSlide = () =>{
        setCurrent((prev) =>{
            return prev === slides.length -1? 0 : prev + 1;
        });
    }

    const prevSlide = () =>{
        setCurrent((prev) =>{
            return prev === 0? slides.length -1 : prev -1 ;
        })
    }
  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <img
              key={slide.id}
              src={slide.src}
              alt={slide.alt}
              className="w-full object-cover"
            />
          ))}
        </div>
      </div>

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        prev
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        next
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 mx-1 rounded-full ${
              index === current ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
      <div className="w-full h-auto flex flex-col p-8">
        <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-medium">Matches and Draws</h2>
        <button className="bg-inherit border text-blue-400 border-blue-400 rounded-full py-2 px-4 hover:bg-blue-500">see all</button>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default MainContent;
