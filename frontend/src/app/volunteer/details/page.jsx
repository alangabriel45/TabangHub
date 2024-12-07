"use client";

import Navbar from "../navbar/page";
import { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

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

  const handleJoin = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to join this event?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, join!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Joined!", "You have successfully joined the event.", "success");
      }
    });
  };

  return (
    <div className="min-h-full bg-gray-50">
      <div className="bg-white flex justify-center items-center min-h-[80vh]">
        <div className="pt-6 pb-16">
          {/* Layout for Carousel and Details */}
          <div className="mx-auto max-w-screen-xl lg:flex lg:space-x-8">
            {/* Image Carousel */}
            <div className="w-full lg:w-2/3">
              <div className="relative mx-auto max-w-full h-[500px]">
                <div className="overflow-hidden rounded-lg shadow-md h-full">
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

            {/* Event Details */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-900">Event Highlights</h2>
                <ul role="list" className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <span className="text-gray-600 font-medium">Location: </span>
                    <span className="ml-2 text-gray-800">Atua ni</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 font-medium">Date Start: </span>
                    <span className="ml-2 text-gray-800">Ugma</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 font-medium">Date End: </span>
                    <span className="ml-2 text-gray-800">Sunod Ugma</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 font-medium">Volunteers Needed: </span>
                    <span className="ml-2 text-gray-800">Isa ka baryohan</span>
                  </li>
                </ul>
              </div>

              {/* Event Description */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900">Event Description</h3>
                <p className="mt-4 text-base text-gray-700 leading-relaxed">
                  Tabang Build aims to help the local community by building homes efficiently and quickly. Your support as a volunteer will make a great difference in achieving this goal.
                </p>
              </div>

              {/* Join Button */}
              <div className="mt-6">
                <button
                  onClick={handleJoin}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
                >
                  Join Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
