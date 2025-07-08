import Header from "@/component/header";
import Footer from "@/component/Footer";
import Slider from 'react-slick';

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-24">
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
            <p className="text-md md:text-lg mb-6">
              Company Profile Theme Company Profile Theme
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a
                href="#"
                className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition"
              >
                READ MORE
              </a>
              <a
                href="#"
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                OUR WORK
              </a>
            </div>
          </div>
        </section>

        {/* Profil Section */}
        <section id="profil" className="py-16 px-6 md:px-20 bg-white">
          <h2 className="text-3xl font-bold text-center text-[#fdb739] mb-10">
            Profil Jaja.id
          </h2>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h3 className="font-bold text-lg mb-2">Visi</h3>
              <p>Mewujudkan lulusan berakhlak mulia dan siap kerja.</p>
              <h3 className="font-bold text-lg mt-4 mb-2">Misi</h3>
              <ul className="list-disc pl-5">
                <li>Meningkatkan kualitas pendidikan</li>
                <li>Menanamkan nilai karakter</li>
                <li>Menjalin kemitraan industri</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="/building.jpg"
                alt="Gedung SMK"
                className="rounded-lg shadow"
              />
            </div>
          </div>
        </section>

        {/* Guru Section */}
        <section id="guru" className="py-16 text-center">
          <h2 className="text-2xl font-bold text-[#fdb739] mb-2">
            Profil Guru
          </h2>
          <p className="text-gray-600 mb-6">
            Tenaga pengajar profesional dan berpengalaman
          </p>
          <p className="text-sm text-gray-400">(Slider placeholder)</p>
        </section>

        {/* Prestasi Section */}
        <section id="prestasi" className="py-16 text-center bg-gray-50">
          <h2 className="text-2xl font-bold text-[#fdb739] mb-2">
            Capaian Prestasi
          </h2>
          <p className="text-gray-600 mb-6">
            Prestasi membanggakan di tingkat nasional & internasional
          </p>
          <p className="text-sm text-gray-400">(Slider placeholder)</p>
        </section>

        {/*our serviess section*/}
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

        {/* Testimoni Alumni */}
        <section className="py-16 px-6 bg-gray-50 text-center">
          <h2 className="text-2xl font-bold text-[#fdb739] mb-2">
            Testimoni Alumni
          </h2>
          <p className="text-sm text-gray-400">(Slider Testimoni Alumni)</p>
        </section>

        {/* Blog */}
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
