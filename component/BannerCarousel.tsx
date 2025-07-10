"use client";
import Header from "@/component/header";
import Footer from "@/component/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as framerMotion from "framer-motion";
import Image from "next/image";

const motion = framerMotion.motion;

const BannerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  const banners = [
    '/Banner1.jpeg',
    '/Banner2.jpeg',
    '/Banner3.jpeg'
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings} className="h-full">
        {banners.map((banner, index) => (
          <div key={index}>
            <div
              className="w-full h-screen bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        ))}
      </Slider>

      <div className="absolute inset-0 flex items-center justify-center text-center z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            JAJA ID
          </h1>
          <p className="text-lg md:text-2xl mb-6 font-medium drop-shadow">
            1st Marketplace For your Hobbies
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 pointer-events-auto">
            <a
              href="#tentang"
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition-transform hover:scale-105 shadow-lg"
            >
              Read More
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BannerCarousel;
