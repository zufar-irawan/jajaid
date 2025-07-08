"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const Header = () => {

    return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
            <Image 
              src="/images/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </nav>

      </div>
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
          <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
    </header>
  )
}

export default Header