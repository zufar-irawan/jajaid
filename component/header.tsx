"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className=" bg-blue-100 fixed h-20 top-0 w-full overflow-hidden">
      <div className={`transition-all duration-700 ease-in-out fixed z-50 p-1
        ${isScrolled
          ? 'left-4'
          : 'left-1/2 -translate-x-1/2'
        }`
      }>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={70}
          height={70}
          className="rounded-full w-full h-full object-contain"
        />
      </div>

      <div className={`transition-all duration-700 ease-in-out fixed right-10 top-6
        ${isScrolled
          ? 'opacity-100'
          : 'opacity-0'
        }
        `}>
        <ul className="flex gap-6 font-medium text-gray-700">
          <li className="hover:text-blue-500 transition"><Link href={"#"}>Beranda</Link></li>
          <li className="hover:text-blue-500 transition"><Link href={"#"}>Tentang</Link></li>
          <li className="hover:text-blue-500 transition"><Link href={"#"}>Kontak</Link></li>
        </ul>
      </div>

    </nav>
  )
}

export default Header