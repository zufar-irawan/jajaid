import Header from "@/component/header";
import Footer from "@/component/Footer";
import Slider from "react-slick";
import Image from "next/image";
import BannerCarousel from "@/component/BannerCarousel";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-24">
        {/* <BannerCarousel /> */}
        <section
          className="relative w-full h-screen flex items-center justify-center text-center"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/Banner2.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">JAJA ID</h1>
            <p className="text-xl mb-6">1st Marketplace For your Hobbies</p>

            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a
                href="#"
                className="bg-yellow-400 shadow-lg text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition"
              >
                Read More
              </a>
              <a
                href="#"
                className="bg-blue-600 shadow-lg text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Our Store
              </a>
            </div>
          </div>
        </section>

        {/* ============ Tentang Section =========== */}
        <section
          id="tentang"
          className="min-h-screen py-auto px-6 md:px-20 bg-white"
        >
          <div className="py-28">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-center text-blue-400 mb-16">
                  Tentang Kami
                </h2>
              </div>
            </div>

            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                  {/* konten teks */}
                  <div className="flex transition-all duration-500 ease-in-out transform hover:-translate-y-2">
                    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 space-y-11 h-full">
                      <div>
                        <p>
                          Jaja.id merupakan salah satu Marketplace pertama
                          Khusus Hobby di Indonesia yang menyediakan fasilitas
                          jual-beli dari konsumen ke konsumen. Semua orang dapat
                          membuka toko online di Jaja.id dan melayani pembeli
                          dari seluruh Indonesia untuk membantu memenuhi
                          kebutuhan hobby masyarakat Indonesia.
                        </p>
                        <p className="mt-4 mb-2">
                          Jaja memiliki slogan 1st Marketplace For your Hobbies
                          karena Jaja.id merupakan marketplace pertama khusus
                          hobby di Indonesia.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* konten gambar */}
                  <div className="lg:w-1/2">
                    <div className="rounded-lg overflow-hidden shadow-xl h-full">
                      <Image
                        src="/images/jaja_id.png"
                        alt="JajaID"
                        width={500}
                        height={500}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ Visi & Misi Section =========== */}
        <section id="visiMisi" className="py-auto px-6 md:px-20 bg-yellow-500">
          <div className="py-28">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-center text-white mb-16">
                  Visi & Misi
                </h2>
              </div>
            </div>

            <div className="container mx-auto px-4">
              <div className="mx-auto">
                <div className="flex lg:flex-row gap-10">
                  {/* visi */}
                  <div className="flex-1 transition-all duration-500 ease-in-out transform hover:-translate-y-2">
                    <div className="bg-yellow-400 text-white rounded-lg shadow-lg p-4 sm:p-8 space-y-11 h-full">
                      <div>
                        <p className="text-2xl text-right text-bold mb-6">
                          Visi
                        </p>
                        <p className="text-xl text-bold text-right mb-2">
                          Menjadi Marketplace Khusus Hobby Terbesar di Indonesia
                        </p>
                        <p className="text-sm mt-4 text-right mb-2">
                          Visi kami adalah menjadi marketplace khusus hobi
                          terbesar dan terpercaya di Indonesia dengan
                          menghadirkan platform yang menghubungkan para pecinta
                          hobi dari seluruh penjuru negeri. Kami berkomitmen
                          untuk menyediakan ekosistem yang lengkap, aman, dan
                          inspiratif bagi komunitas hobi—mulai dari koleksi,
                          peralatan, hingga layanan pendukung—sekaligus
                          mendorong pertumbuhan ekonomi kreatif dan
                          memberdayakan pelaku usaha lokal di berbagai bidang
                          hobi.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* misi */}
                  <div className="flex-1 transition-all duration-500 ease-in-out transform hover:-translate-y-2">
                    <div className="bg-yellow-400 text-white rounded-lg shadow-lg p-4 sm:p-8 space-y-11 h-full">
                      <div>
                        <p className='text-2xl text-bold mb-6'>
                          Misi</p>
                        <p className='text-xl text-bold mb-2'>
                          Merangkul komunitas-komunitas tiap hobby yang ada di Indonesia</p>
                        <p className="text-sm mt-4 mb-2">
                          Misi kami adalah merangkul dan memberdayakan komunitas
                          hobi di seluruh Indonesia dengan membangun ruang kolaboratif
                          di mana setiap penggemar hobi dapat terhubung, berbagi, dan
                          berkembang bersama.</p>
                        <p className='text-xl text-bold mb-2'>
                          Memenuhi semua kebutuhan hobby untuk semua kalangan</p>
                        <p className="text-sm mt-4 mb-2">
                          Misi kami adalah memenuhi seluruh kebutuhan hobi bagi semua
                          kalangan, tanpa memandang usia, latar belakang, atau tingkat
                          keahlian</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ our services =========== */}
        <section className="relative w-full h-auto text-white">
          <div className="absolute inset-0 z-0 flex">
            {/* Oranye kiri */}
            <div className="w-1/2 bg-orange-400 clip-left" />
            {/* Biru kanan */}
            <div className="w-1/2 bg-blue-500 clip-right" />
          </div>

          {/* Konten */}
          <div className="relative z-10 flex flex-col md:flex-row text-center md:text-left">
            <div className="flex-1 p-10 flex flex-col items-center justify-center text-gray-900">
              <img
                src="/images/md.png"
                alt="Master Diskon"
                className="h-14 mb-4" />
              <p className="text-lg">Kamu suka Travelling?</p>
              <h2 className="text-2xl font-bold mb-4">Master Diskon Aja!</h2>
              <a
                href="https://masterdiskon.com/id-id"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-800 px-4 py-2 text-sm font-semibold hover:bg-gray-100 transition">
                Cek Disini
              </a>
            </div>

            <div className="flex-1 p-10 flex flex-col items-center justify-center text-white">
              <img
                src="/images/eurekabook.png"
                alt="Eureka Bookhouse"
                className="h-14 mb-4"
              />
              <p className="text-lg">Mau cari buku? Yuk cek buruan</p>
              <h2 className="text-2xl font-bold mb-4">Eureka Bookhouse</h2>
              <a
                href="https://eurekabookhouse.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white px-4 py-2 text-sm font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                Cek Disini
              </a>
            </div>
          </div>
        </section>

        {/* ============ our products =========== */}
        <section id="product" className="py-16 px-6 md:px-20 bg-gray-900 text-white text-center">
          <h2 className="text-2xl font-bold text-[#fdb739] mb-6">
            Our Products
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-10 gap-x-6 justify-items-center">
            <div className="flex flex-col items-center transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              <img
                src="/images/ultrav.png"
                alt="Ultra Voucher"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm">Ultra Voucher</p>
            </div>
            <div className="flex flex-col items-center transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              <img
                src="/images/vougame.png"
                alt="Vouchers Game"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm text-center">Vouchers Game</p>
            </div>
            <div className="flex flex-col items-center transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              <img
                src="/images/art.png"
                alt="Art Shop"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm">Art Shop</p>
            </div>
            <div className="flex flex-col items-center transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              <img
                src="/images/book.png"
                alt="Books"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm">Books</p>
            </div>
            <div className="flex flex-col items-center transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              <img
                src="/images/cook.png"
                alt="Cooking"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm text-center">Cooking & Coffee</p>
            </div>
            <div className="flex flex-col items-center transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              <img
                src="/images/digital.png"
                alt="Digital"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm">Digital</p>
            </div>
            {/* Tambahkan item lain di bawah ini */}
            <div className="flex flex-col items-center transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              <img
                src="/images/game.png"
                alt="Games"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm">Games</p>
            </div>
            <div className="flex flex-col items-center transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              <img
                src="/images/garden.png"
                alt="Gardening"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm">Gardening</p>
            </div>
            <div className="flex flex-col items-center transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              <img
                src="/images/kpop.png"
                alt="K-POP"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm">K-POP</p>
            </div>
            <div className="flex flex-col items-center transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              <img
                src="/images/musik.png"
                alt="Musics"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm">Musics</p>
            </div>
            <div className="flex flex-col items-center transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              <img
                src="/images/pets.png"
                alt="Pets"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm">Pets</p>
            </div>
            <div className="flex flex-col items-center transition-all duration-500 ease-in-out transform hover:-translate-y-2">
              <img
                src="/images/toys.png"
                alt="Toys"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm">Toys</p>
            </div>
          </div>
        </section>

        {/* Mitra Industri section */}
        <section id="mitra" className="py-16 px-6 text-center bg-gray-900">
          <h2 className="text-2xl font-bold text-[#fdb739] mb-6">
            Mitra Industri
          </h2>
          <div className="flex justify-center gap-10 items-center flex-wrap">
            <img src="/images/ebh.png" alt="eurekabook" className="h-12 transition-all duration-500 ease-in-out transform hover:-translate-y-2" />
            <img src="/logo.png" alt="jaja.id" className="h-12 transition-all duration-500 ease-in-out transform hover:-translate-y-2" />
            <img src="/images/jajato.png" alt="jaja_auto" className="h-12 transition-all duration-500 ease-in-out transform hover:-translate-y-2" />
            <img src="/images/katarasa.png" alt="kata_rasa" className="h-12 transition-all duration-500 ease-in-out transform hover:-translate-y-2" />
            <img
              src="/images/rajacepat.png"
              alt="raja_cepat"
              className="h-12 transition-all duration-500 ease-in-out transform hover:-translate-y-2"
            />
            <img
              src="/images/eurekalogs.png"
              alt="eurekalogs"
              className="h-12 transition-all duration-500 ease-in-out transform hover:-translate-y-2"
            />
            <img
              src="/images/masterdis.png"
              alt="master_diskon"
              className="h-12 transition-all duration-500 ease-in-out transform hover:-translate-y-2"
            />
          </div>
        </section>

        {/* ============ service Section =========== */}
        <section id="layanan" className="bg-gradient-to-r from-orange-400 via-yellow-400 to-yellow-300 py-10 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="bg-white rounded-full p-3">
                <img
                  src="/images/truck.png"
                  alt="Pengiriman Cepat"
                  className="h-8 w-8"
                />
              </div>
              <span className="font-semibold text-sm sm:text-base text-gray-800">
                Pengiriman Cepat
              </span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-white rounded-full p-3">
                <img
                  src="/images/ongkir.png"
                  alt="Gratis Ongkir"
                  className="h-8 w-8"
                />
              </div>
              <span className="font-semibold text-sm sm:text-base text-gray-800">
                Gratis Ongkir
              </span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-white rounded-full p-3">
                <img
                  src="/images/pembayaran.png"
                  alt="Pembayaran Aman"
                  className="h-8 w-8"
                />
              </div>
              <span className="font-semibold text-sm sm:text-base text-gray-800">
                Pembayaran Aman
              </span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-white rounded-full p-3">
                <img
                  src="/images/dijamin.png"
                  alt="Dijamin 100% Ori"
                  className="h-8 w-8"
                />
              </div>
              <span className="font-semibold text-sm sm:text-base text-gray-800">
                Dijamin 100% Ori
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
