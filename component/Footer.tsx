export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Jaja.id */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Jaja.id</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Tentang Jaja</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Kebijakan Privasi</a></li>
            <li><a href="#">Syarat Layanan</a></li>
          </ul>
        </div>

        {/* Layanan Pelanggan */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Layanan Pelanggan</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Menanggapi Komplain</a></li>
            <li><a href="#">Pengembalian Dana & Barang</a></li>
            <li><a href="#">Bantuan</a></li>
            <li><a href="#">Mulai Jualan</a></li>
          </ul>
        </div>

        {/* Pengiriman & Pembayaran */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Pengiriman & Pembayaran</h3>
          <div className="flex flex-wrap gap-3">
            <img src="/images/jnt.png" alt="J&T" className="h-8" />
            <img src="/images/sicepat.png" alt="SiCepat" className="h-8" />
            <img src="/images/bca.png" alt="BCA" className="h-6" />
            <img src="/images/mandiri.png" alt="Mandiri" className="h-6" />
            <img src="/images/bni.png" alt="BNI" className="h-6" />
            <img src="/images/visa.png" alt="VISA" className="h-6" />
            <img src="/images/gopay.png" alt="GoPay" className="h-6" />
          </div>
        </div>

        {/* Sosial Media & Apps */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Ikuti Kami</h3>
          <div className="flex gap-4 mb-4">
            <a href="#"><img src="/icons/ig.svg" className="h-6" alt="Instagram" /></a>
            <a href="#"><img src="/icons/fb.svg" className="h-6" alt="Facebook" /></a>
            <a href="#"><img src="/icons/tiktok.svg" className="h-6" alt="TikTok" /></a>
            <a href="#"><img src="/icons/wa.svg" className="h-6" alt="WhatsApp" /></a>
          </div>
          <div className="flex gap-4">
            <img src="/icons/appstore.svg" className="h-10" alt="App Store" />
            <img src="/icons/playstore.svg" className="h-10" alt="Play Store" />
          </div>
        </div>
      </div>

      {/* Bawah */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Jaja.id. All rights reserved.
      </div>
    </footer>
  );
}
