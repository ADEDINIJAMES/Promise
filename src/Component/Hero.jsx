import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../assets/logo.png";
import logistics from "../assets/Logistics.jpg";
import agrob from "../assets/agrob.jpeg";
import vet from "../assets/vet.webp";
import hotel from "../assets/hotel.jpg";
import property from "../assets/buysell.jpeg";
import build from "../assets/build.jpeg";
import { Link } from "react-router-dom";

function Hero() {
  const [effect, setEffect] = useState("fade"); // Choose effect dynamically

  const animationEffects = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1 }, // Increased duration for slower effect
    },
    zoomIn: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 1 },
    },
    slideFromLeft: {
      initial: { x: "-100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 1 },
    },
    flip: {
      initial: { rotateY: 90, opacity: 0 },
      animate: { rotateY: 0, opacity: 1 },
      transition: { duration: 1 },
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Increased speed for slower transition
    fade: effect === "fade", // Activate fade only if fade effect is selected
    arrows: true, // Enable arrows for navigation
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const services = [
    {
      title: " Welcome to PROMISE LAND GLOBAL RESOURCES",
      image: logo,
      description: "Let's do business together.",
      link: "/about",
    },
    {
      title: "Hotel and Hospitality",
      image: hotel,
      description: "Experience the best hospitality services.",
      link: "/services",
    },
    {
      title: "Agro-Business",
      image: agrob,
      description: "Providing quality agricultural products.",
      link: "/services",
    },
    {
      title: "Building Consultancy",
      image: build,
      description: "Expert consultancy services for construction.",
      link: "/services",
    },
    {
      title: "Logistics and Transportation",
      image: logistics,
      description: "Reliable logistics and transportation solutions.",
      link: "/services",
    },
    {
      title: "Animal Care & Consultancy",
      image: vet,
      description: "Professional animal care services.",
      link: "/services",
    },
    {
      title: "Property Agent",
      image: property,
      description: "We provide expert property and land consultancy.",
      link: "/services",
    },
  ];

  return (
    <div className=" w-full">
      <Slider {...settings} className="relative w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative w-full h-[600px]"
            {...animationEffects[effect]} // Apply the chosen effect dynamically
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover rounded-lg "
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-lg mb-4">{service.description}</p>
              <Link to={service.link}>
                <button className="bg-gray-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg">
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
}

// Custom next arrow component
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer bg-transparent opacity-50 hover:opacity-100 transition-opacity duration-300"
      onClick={onClick}
    >
      &#9654; {/* Right arrow symbol */}
    </div>
  );
};

// Custom previous arrow component
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer bg-transparent opacity-50 hover:opacity-100 transition-opacity duration-300"
      onClick={onClick}
    >
      &#9664; {/* Left arrow symbol */}
    </div>
  );
};

export default Hero;
