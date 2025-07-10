"use client";
import Header from "@/component/header";
import Footer from "@/component/Footer";
import BannerCarousel from "@/component/BannerCarousel";
import * as framerMotion from "framer-motion";
import Image from "next/image";

const motion = framerMotion.motion;

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-24 font-sans bg-white">
        <div id="beranda">
        <BannerCarousel />

        {/* ============ Tentang Section =========== */}
        <section id="tentang" className="py-20 px-6 md:px-20 bg-white">
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
        <section id="visiMisi" className="py-20 px-6 md:px-20 bg-yellow-500">
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

                  {/* konten gambar */}
                  <div className='lg:w-1/2'>
                    <div className="rounded-lg overflow-hidden shadow-xl h-full">
                      <Image
                        src="/images/jaja_id.png"
                        alt="JajaID"
                        width={500}
                        height={500}
                        loading='lazy'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section id="our-services" className="relative w-full text-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 flex">
            <div className="w-1/2 bg-orange-400 clip-left-services" />
            <div className="w-1/2 bg-blue-500 clip-right-services" />
          </div>

          <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white text-gray-900 p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              <img src="/images/md.png" alt="Master Diskon" className="h-14 mb-4" />
              <p className="text-lg">Kamu suka Travelling?</p>
              <h2 className="text-2xl font-bold mb-4">Master Diskon Aja!</h2>
              <a
                href="https://masterdiskon.com/id-id"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
              >
                Cek Disini
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-blue-500 text-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              <img src="/images/eurekabook.png" alt="Eureka Bookhouse" className="h-14 mb-4" />
              <p className="text-lg">Mau cari buku? Yuk cek buruan</p>
              <h2 className="text-2xl font-bold mb-4">Eureka Bookhouse</h2>
              <a
                href="https://eurekabookhouse.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-700 transition"
              >
                Cek Disini
              </a>
            </motion.div>
          </div>
        </section>

        {/* Our Products */}
        <section
          id="our-products"
          className="py-24 bg-gray-100 text-center text-gray-900"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-12">
              Our Products
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
              {[
                "ultrav", "vougame", "art", "book", "cook", "digital",
                "game", "garden", "kpop", "musik", "pets", "toys",
              ].map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex flex-col items-center"
                >
                  <Image
                    src={`/images/${name}.png`}
                    alt={name}
                    width={64}
                    height={64}
                    className="rounded-full bg-white p-2 shadow"
                  />
                  <p className="mt-2 text-sm capitalize">{name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mitra Industri */}
        <section id="mitra" className="py-24 bg-gray-900 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#fdb739] mb-12">
              Mitra Industri
            </h2>
            <div className="flex justify-center gap-10 items-center flex-wrap">
              {["ebh", "logo", "jajato", "katarasa", "rajacepat", "eurekalogs", "masterdis"].map((logo, i) => (
                <motion.img
                  key={logo}
                  src={`/images/${logo}.png`}
                  alt={logo}
                  className="h-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Benefit Banner */}
        <section className="bg-gradient-to-r from-orange-400 via-yellow-400 to-yellow-300 py-10 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["truck", "Pengiriman Cepat"],
              ["ongkir", "Gratis Ongkir"],
              ["pembayaran", "Pembayaran Aman"],
              ["dijamin", "Dijamin 100% Ori"],
            ].map(([icon, label], i) => (
              <motion.div
                key={icon}
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="bg-white rounded-full p-3">
                  <img
                    src={`/images/${icon}.png`}
                    alt={label}
                    className="h-8 w-8"
                  />
                </div>
                <span className="font-semibold text-sm sm:text-base text-gray-800">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============ our services =========== */}
        <section id="blog" className="py-16 px-6 text-center">
          <h2 className="text-2xl font-bold text-[#fdb739] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600">Artikel dan berita terbaru</p>
          <p className="text-sm text-gray-400 mt-2">
            (Card artikel blog placeholder)
          </p>
        </section>
        </main>

      <Footer />
    </>
  );
}
