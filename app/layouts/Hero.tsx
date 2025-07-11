"use client";

import React, { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import Image from 'next/image';

const HeroBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const imagesHobby = [
        "/images/hobby-painting.png",
        "/images/hobby-reading.png",
        "/images/hobby-cooking.png",
        "/images/hobby-gardening.png",
    ];

    useEffect(() => {
        setIsVisible(true);

        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % imagesHobby.length);
        }, 4000);

        return () => {
            clearInterval(imageInterval);
        };
    }, []);

    return (
        <section id="beranda" className="min-h-screen relative">
            <div className="bg-gradient-to-br from-[#55B4E5] via-[#ED5625] to-[#FBB338] overflow-hidden">

                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/images/banner.svg')] animate-pulse"></div>
                    <div className="absolute top-20 left-20 w-32 h-32 bg-[#FBB338]/30 rounded-full blur-xl animate-bounce"></div>
                    <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#ED5625]/20 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#55B4E5]/30 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Main Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center min-h-screen py-20 md:py-10">

                        {/* Left Content */}
                        <div className={`flex-1 text-white space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-medium">
                                <span className="mr-2">🚀</span>
                                1st marketplace for your hobby
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                    <span className="bg-gradient-to-r from-white to-[#FBB338] bg-clip-text text-transparent">
                                        Jaja.id
                                    </span>
                                </h1>
                                <h2 className="text-2xl md:text-3xl font-semibold text-[#FBB338]">
                                    Wujudkan Passion Hobby Anda
                                </h2>
                            </div>

                            <p className="text-xl text-yellow-100 leading-relaxed max-w-2xl">
                                Platform marketplace terpercaya untuk semua kebutuhan hobby Anda.
                                Dari gaming hingga seni, dari olahraga hingga koleksi - temukan semuanya di sini dengan harga terbaik!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-[#ED5625] hover:bg-[#c9451b] text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group">
                                    Mulai Berbelanja
                                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                                </button>
                                <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
                                    Jual Produk Anda
                                </button>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className={`md:block hidden flex-1 lg:ml-12 mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="relative w-full h-[400px] flex items-center justify-center">
                                {imagesHobby.map((src, index) => (
                                    <Image
                                        key={index}
                                        src={src}
                                        alt={`Hobby ${index}`}
                                        width={500}
                                        height={500}
                                        className={`absolute transition-opacity duration-700 ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
