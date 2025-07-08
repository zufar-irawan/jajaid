import Header from "@/component/header";
import Footer from "@/component/Footer";
import Slider from 'react-slick'
import Image from 'next/image';
import BannerCarousel from '@/component/BannerCarousel';

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-24">
        <BannerCarousel />

        {/* ============ Tentang Section =========== */}
        <section id="tentang" className="py-20 px-6 md:px-20 bg-white">
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
                  <div className="flex">
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

        {/* ============ Visi & Misi Section =========== */}
        <section id="visiMisi" className="py-20 px-6 md:px-20 bg-yellow-500">
          <div className="py-28">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-center text-white mb-16">Visi & Misi</h2>
              </div>
            </div>

            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                  {/* konten teks */}
                  <div className="flex">
                    <div className="bg-yellow-500 text-white rounded-lg shadow-lg p-4 sm:p-8 space-y-11 h-full">
                      <div>
                        <p className='mb-2'>
                          Menjadi Marketplace Khusus Hobby Terbesar di Indoonesia</p>
                        <p className="mt-4 mb-2">
                          Jaja memiliki slogan 1st Marketplace For your Hobbies karena Jaja.id
                          merupakan marketplace pertama khusus hobby di Indonesia.</p>
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

        {/* ============ Prestasi Section =========== */}
        <section id="prestasi" className="py-16 text-center bg-gray-50">
          <h2 className="text-2xl font-bold text-[#fdb739] mb-2">
            Capaian Prestasi
          </h2>
          <p className="text-gray-600 mb-6">
            Prestasi membanggakan di tingkat nasional & internasional
          </p>
        </section>

        {/* ============ Wisuda Section =========== */}
        <section className="py-16 px-6 md:px-20 bg-gray-900 text-white text-center">
          <h2 className="text-2xl font-bold text-[#fdb739] mb-6">
            Our Services
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-10 gap-x-6 justify-items-center">
            <div className="flex flex-col items-center">
              <img
                src="/images/ultrav.png"
                alt="Ultra Voucher"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm">Ultra Voucher</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/vougame.png"
                alt="Vouchers Game"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm text-center">Vouchers Game</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/art.png"
                alt="Art Shop"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm">Art Shop</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/book.png"
                alt="Books"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm">Books</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/cook.png"
                alt="Cooking"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm text-center">Cooking & Coffee</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/digital.png"
                alt="Digital"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm">Digital</p>
            </div>
            {/* Tambahkan item lain di bawah ini */}
            <div className="flex flex-col items-center">
              <img
                src="/images/game.png"
                alt="Games"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm">Games</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/garden.png"
                alt="Gardening"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm">Gardening</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/kpop.png"
                alt="K-POP"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm">K-POP</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/musik.png"
                alt="Musics"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm">Musics</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/pets.png"
                alt="Pets"
                className="w-14 h-14 rounded-full bg-white p-2"
              />
              <p className="mt-2 text-sm">Pets</p>
            </div>
            <div className="flex flex-col items-center">
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
            <img src="/images/ebh.png" alt="eurekabook" className="h-12" />
            <img src="/logo.png" alt="jaja.id" className="h-12" />
            <img src="/images/jajato.png" alt="jaja_auto" className="h-12" />
            <img src="/images/katarasa.png" alt="kata_rasa" className="h-12" />
            <img
              src="/images/rajacepat.png"
              alt="raja_cepat"
              className="h-12"
            />
            <img
              src="/images/eurekalogs.png"
              alt="eurekalogs"
              className="h-12"
            />
            <img
              src="/images/masterdis.png"
              alt="master_diskon"
              className="h-12"
            />
          </div>
        </section>

        {/* ============ Testimoni Section =========== */}
        <section className="py-16 px-6 bg-gray-50 text-center">
          <h2 className="text-2xl font-bold text-[#fdb739] mb-2">
            Testimoni Alumni
          </h2>
          <p className="text-sm text-gray-400">(Slider Testimoni Alumni)</p>
        </section>

        {/* ============ Blog Section =========== */}
        <section id="blog" className="py-16 px-6 text-center">
          <h2 className="text-2xl font-bold text-[#fdb739] mb-4">Blog</h2>
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
