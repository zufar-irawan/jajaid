"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
    const navlink = [
        {
            id: 1,
            nama: "Beranda",
            href: "#beranda"
        },
        {
            id: 2,
            nama: "Tentang",
            href: "#tentang"
        },
        {
            id: 3,
            nama: "Visi&Misi",
            href: "#visiMisi"
        },
        {
            id: 4,
            nama: "Kategori",
            href: "#products"
        },
        {
            id: 5,
            nama: "Mitra Industri",
            href: "#mitra"
        },
    ]

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    return (
        <header className={`w-full fixed bg-white overflow-hidden p-4 z-50 transition-all ${isScrolled ? 'top-0 shadow-2xl ' : '-top-25'}`}>
            <div className="flex justify-between">
                <Link href={"/"} className="my-auto">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={120}
                        height={120}
                        className="ml-20"
                    />
                </Link>

                <nav className="my-auto">
                    <ul className="flex gap-3 text-md font-medium mr-20">
                        {navlink.map((nav) => (
                            <li key={nav.id}>
                                <Link href={nav.href} className="text-gray-700 transition-colors hover:text-white rounded-4xl px-8 py-5 hover:bg-[#FBB338]">
                                    {nav.nama}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header