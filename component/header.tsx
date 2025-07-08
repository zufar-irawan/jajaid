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
    <header className=" bg-blue-100 relative overflow-hidden">
      <div className={`transition-all duration-700 ease-in-out fixed z-50 p-1
        ${isScrolled
          ? 'left-4'
          : 'left-1/2 -translate-x-1/2'
        }`
      }>
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={70}
            height={70}
            className="rounded-full w-full h-full object-contain"
          />
        </Link>

        {/* <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </nav> */}

      </div>
    </header>
  )
}

export default Header