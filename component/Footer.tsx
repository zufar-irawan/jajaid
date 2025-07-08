"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-[#fdb739] relative overflow-hidden px-4 sm:px-8 md:px-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Image src="/logo.png" alt="Logo Jaja" width={120} height={40} />
          </div>

          <div>
            <h3 className="text-lg font-semibold uppercase mb-4">Jaja.id</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-[#fdb739]">Tentang Jaja</Link></li>
              <li><Link href="#" className="hover:text-[#fdb739]">Blog</Link></li>
              <li><Link href="#" className="hover:text-[#fdb739]">Kebijakan Privasi</Link></li>
              <li><Link href="#" className="hover:text-[#fdb739]">Syarat Layanan</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold uppercase mb-4">Layanan Pelanggan</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-[#fdb739]">Menanggapi Komplain</Link></li>
              <li><Link href="#" className="hover:text-[#fdb739]">Pengembalian Dana & Barang</Link></li>
              <li><Link href="#" className="hover:text-[#fdb739]">Bantuan</Link></li>
              <li><Link href="#" className="hover:text-[#fdb739]">Mulai Jualan</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold uppercase mb-4">Pengiriman & Pembayaran</h3>
            <div className="flex flex-wrap gap-3">
              <Image src="/images/jnt.png" alt="J&T" width={50} height={24} />
              <Image src="/images/sicepat.png" alt="SiCepat" width={50} height={24} />
              <Image src="/images/bca.png" alt="BCA" width={40} height={20} />
              <Image src="/images/mandiri.png" alt="Mandiri" width={40} height={20} />
              <Image src="/images/bni.png" alt="BNI" width={40} height={20} />
              <Image src="/images/visa.png" alt="VISA" width={40} height={20} />
              <Image src="/images/gopay.png" alt="GoPay" width={40} height={20} />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold uppercase mb-4">Sosial Media</h3>
          <div className="flex justify-center gap-4 mb-8">
            <Link href="#"><Image src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" width={32} height={32} /></Link>
            <Link href="#"><Image src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width={32} height={32} /></Link>
            <Link href="#"><Image src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width={32} height={32} /></Link>
            <Link href="#"><Image src="https://cdn-icons-png.flaticon.com/512/3046/3046122.png" alt="TikTok" width={32} height={32} /></Link>
          </div>

          <h3 className="text-lg font-semibold uppercase mb-4">Download Apps</h3>
          <div className="flex justify-center gap-4">
            <Image src="/images/appstore.png" alt="App Store" width={150} height={45} />
            <Image src="/images/playstore.png" alt="Play Store" width={150} height={45} />
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Jaja.id. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
