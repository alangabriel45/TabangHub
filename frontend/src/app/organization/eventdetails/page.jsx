"use client";

import { useState } from "react";

export default function Details() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/images/balay.png", alt: "Building a house" },
    { src: "/images/bricks.png", alt: "Bricks for building" },
    { src: "/images/build.png", alt: "Building under construction" },
  ];

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-white flex justify-center items-center min-h-[80vh]">
        <div className="pt-6 pb-16">
          {/* Layout for Carousel and Details */}
          <div className="mx-auto max-w-screen-xl lg:flex lg:space-x-8">
            {/* Image Carousel - Full Width */}
            <div className="w-full lg:w-2/3">
              <div className="relative mx-auto max-w-full h-[500px]">
                <div className="overflow-hidden rounded-lg shadow-lg h-full">
                  <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Carousel Controls */}
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                >
                  &#9664;
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
                  onClick={nextSlide}
                  aria-label="Next Slide"
                >
                  &#9654;
                </button>
              </div>
            </div>

            {/* Event Details - Full Width */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Event Highlights</h2>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Edit Event
                  </button>
                </div>
                <ul role="list" className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <span className="text-gray-600">Location: </span>
                    <span className="ml-2 text-gray-800 font-medium">Atua ni</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600">Date Start: </span>
                    <span className="ml-2 text-gray-800 font-medium">Ugma</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600">Date End: </span>
                    <span className="ml-2 text-gray-800 font-medium">Sunod Ugma</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600">Volunteers Needed: </span>
                    <span className="ml-2 text-gray-800 font-medium">Isa ka baryohan</span>
                  </li>
                </ul>
              </div>

              {/* Event Description */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900">Event Description</h3>
                <p className="mt-4 text-base text-gray-600">
                  Tabang Build aims to help the local community by building homes efficiently and quickly. Your support as a volunteer will make a great difference in achieving this goal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
