"use client";

// import komponen & section
import Footer from "./components/Footer";
import Beranda from "./layouts/Beranda";
import Tentang from "./layouts/Tentang";
import VisiMisi from "./layouts/VisiMisi";
import Services from "./layouts/Services";
import Products from "./layouts/Products";
import Mitra from "./layouts/Mitra";
import Benefit from "./layouts/Benefit";
import HeroBanner from "./layouts/Hero";
import Stats from "./layouts/Stats";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-white">

        {/* Beranda */}
        <HeroBanner />

        {/* Benefit */}
        <Benefit />

        {/* Tentang */}
        <Tentang />

        {/* Visi & Misi Section */}
        <VisiMisi />

        {/* Products */}
        <Products />

        {/* Iklan */}
        <Services />

        {/* Mitra Industri */}
        <Mitra />

      </main>

      <Footer />
    </>
  );
}
