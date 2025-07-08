"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className=" bg-blue-100 fixed h-20 z-50 top-0 w-full overflow-hidden shadow-2xl rounded-b-4xl">
      <div
        className={`transition-all duration-700 ease-in-out fixed z-50 p-1
        ${isScrolled ? "left-4" : "left-1/2 -translate-x-1/2"}`}
      >
        <Link href={"#beranda"}>
        <Image
            src="/logo.png"
            alt="Logo Jaja"
            width={120}
            height={40}
            className={`transition-all duration-700 ease-in-out ${
              isScrolled ? "h-12" : "h-16"}`}
              />
        </Link>
      </div>

      <div
        className={`transition-all duration-700 ease-in-out fixed right-10 top-6
        ${isScrolled ? "opacity-100" : "opacity-0"}
        `}
      >
        <ul className="flex gap-6 font-medium text-gray-700">
          <li className="hover:text-blue-500 transition">
            <Link href={"#tentang"}>Tentang</Link>
          </li>
          <li className="hover:text-blue-500 transition">
            <Link href={"#our-services"}>Layanan</Link>
          </li>
          <li className="hover:text-blue-500 transition">
            <Link href={"#visi-misi"}>Visi & Misi</Link>
          </li>
          <li className="hover:text-blue-500 transition">
            <Link href={"#our-products"}>Produk</Link>
          </li>
          <li className="hover:text-blue-500 transition">
            <Link href={"#mitra"}>Industri</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
