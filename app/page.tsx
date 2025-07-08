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
        </div>

        {/* Tentang Kami */}
        <section id="tentang" className="py-24 bg-[#f5f5f5]">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-primary text-center mb-12"
            >
              Tentang Kami
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-gray-700 space-y-6 text-lg"
              >
                <p>
                  Jaja.id merupakan salah satu marketplace pertama khusus hobby di
                  Indonesia. Semua orang dapat membuka toko online dan menjangkau
                  pembeli dari seluruh Indonesia untuk memenuhi kebutuhan hobby.
                </p>
                <p>
                  Slogan kami "1st Marketplace For Your Hobbies" menunjukkan komitmen
                  kami membangun komunitas hobby terbesar.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/jaja_id.png"
                  alt="Tentang Kami"
                  width={500}
                  height={500}
                  className="rounded-xl shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Visi & Misi */}
        <section id="visi-misi" className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Visi & Misi</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[#f4a100] rounded-lg p-8 shadow-md"
              >
                <h3 className="text-2xl font-bold mb-4">Visi</h3>
                <p className="text-base">
                  Menjadi marketplace hobi terbesar dan terpercaya di Indonesia dengan
                  platform aman, lengkap, dan menginspirasi bagi komunitas hobi.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#f4a100] rounded-lg p-8 shadow-md"
              >
                <h3 className="text-2xl font-bold mb-4">Misi</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Merangkul komunitas hobi di seluruh Indonesia.</li>
                  <li>Memenuhi kebutuhan hobi semua kalangan.</li>
                  <li>Memberdayakan pelaku usaha kreatif.</li>
                </ul>
              </motion.div>
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
      </main>

      <Footer />
    </>
  );
}
