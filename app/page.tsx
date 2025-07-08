import Header from '@/component/header'
import Footer from '@/component/Footer'
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* ============ Beranda Section =========== */}
        <section
          className="relative w-full h-screen flex items-center justify-center text-center"
          style={{
            background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/Banner2.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>

          <div className="relative z-10 text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              JAJA ID
            </h1>
            <p className="text-xl mb-6">
              1st Marketplace For your Hobbies
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a
                href="#"
                className="bg-yellow-400 shadow-lg text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition">
                Read More
              </a>
              <a
                href="#"
                className="bg-blue-600 shadow-lg text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition">
                Our Store
              </a>
            </div>
          </div>
        </section>

        {/* ============ Tentang Section =========== */}
        <section id="tentang" className="py-auto px-6 md:px-20 bg-white">
          <div className="py-28">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-center text-blue-400 mb-16">Tentang Kami</h2>
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
                          Jaja.id merupakan salah satu Marketplace pertama Khusus Hobby di
                          Indonesia yang menyediakan fasilitas jual-beli dari konsumen ke
                          konsumen. Semua orang dapat membuka toko online di Jaja.id dan
                          melayani pembeli dari seluruh Indonesia untuk membantu memenuhi
                          kebutuhan hobby masyarakat Indonesia.</p>
                        <p className="mt-4 mb-2">
                          Jaja memiliki slogan 1st Marketplace For your Hobbies karena Jaja.id
                          merupakan marketplace pertama khusus hobby di Indonesia.</p>
                      </div>
                    </div>
                  </div>

                  {/* konten gambar */}
                  <div className='lg:w-1/2 transition-all duration-500 ease-in-out transform hover:-translate-y-2'>
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

        {/* ============ Visi & Misi Section =========== */}
        <section id="visiMisi" className="py-auto px-6 md:px-20 bg-yellow-500">
          <div className="py-28">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-center text-white mb-16">Visi & Misi</h2>
              </div>
            </div>

            <div className="container mx-auto px-4">
              <div className="mx-auto">
                <div className="flex lg:flex-row gap-10">
                  {/* visi */}
                  <div className="flex-1 transition-all duration-500 ease-in-out transform hover:-translate-y-2">
                    <div className="bg-yellow-400 text-white rounded-lg shadow-lg p-4 sm:p-8 space-y-11 h-full">
                      <div>
                        <p className='text-2xl text-right text-bold mb-6'>
                          Visi</p>
                        <p className='text-xl text-bold text-right mb-2'>
                          Menjadi Marketplace Khusus Hobby Terbesar di Indonesia</p>
                        <p className="text-sm mt-4 text-right mb-2">
                          Visi kami adalah menjadi marketplace khusus hobi terbesar dan
                          terpercaya di Indonesia dengan menghadirkan platform yang
                          menghubungkan para pecinta hobi dari seluruh penjuru negeri.
                          Kami berkomitmen untuk menyediakan ekosistem yang lengkap, aman,
                          dan inspiratif bagi komunitas hobi—mulai dari koleksi, peralatan,
                          hingga layanan pendukung—sekaligus mendorong pertumbuhan ekonomi
                          kreatif dan memberdayakan pelaku usaha lokal di berbagai bidang
                          hobi.</p>
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

        {/* ============ Prestasi Section =========== */}
        <section id="prestasi" className="py-16 text-center bg-gray-50">
          <h2 className="text-2xl font-bold text-orange-500 mb-2">Capaian Prestasi</h2>
          <p className="text-gray-600 mb-6">Prestasi membanggakan di tingkat nasional & internasional</p>
          <p className="text-sm text-gray-400">(Slider placeholder)</p>
        </section>

        {/* ============ Wisuda Section =========== */}
        <section className="py-16 px-6 md:px-20 bg-gray-900 text-white text-center">
          <h2 className="text-2xl font-bold text-orange-400 mb-6">Wisuda Sekolah Prestasi Prima 2025</h2>
          <img src="/graduation.jpg" alt="Wisuda" className="mx-auto rounded-lg shadow-lg mb-6" />
          <a href="#" className="inline-block bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded text-white font-semibold">Lihat Galeri</a>
        </section>

        {/* ============ Mitra Section =========== */}
        <section id="mitra" className="py-16 px-6 text-center bg-white">
          <h2 className="text-2xl font-bold text-orange-500 mb-6">Mitra Industri</h2>
          <div className="flex justify-center gap-10 items-center flex-wrap">
            <img src="/mitra1.png" alt="Mitra 1" className="h-12" />
            <img src="/mitra2.png" alt="Mitra 2" className="h-12" />
            <img src="/mitra3.png" alt="Mitra 3" className="h-12" />
          </div>
        </section>

        {/* ============ Testimoni Section =========== */}
        <section className="py-16 px-6 bg-gray-50 text-center">
          <h2 className="text-2xl font-bold text-orange-500 mb-2">Testimoni Alumni</h2>
          <p className="text-sm text-gray-400">(Slider Testimoni Alumni)</p>
        </section>

        {/* ============ Blog Section =========== */}
        <section id="blog" className="py-16 px-6 text-center">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Blog</h2>
          <p className="text-gray-600">Artikel dan berita terbaru</p>
          <p className="text-sm text-gray-400 mt-2">(Card artikel blog placeholder)</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
