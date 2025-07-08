'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  pauseOnHover: false    
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
        <div className="text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">JAJA ID</h1>
          <p className="text-md md:text-lg mb-6">Company Profile Theme</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 pointer-events-auto">
            <a href="#" className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition">
              READ MORE!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
