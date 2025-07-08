import Header from '@/component/header'
import Footer from '@/component/Footer';

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative w-full h-screen">
          <img
            src="/logo.png"
            alt="SMK Prestasi Prima"
            className="w-full h-full objectcover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 text-white z-10">
            <h3 className="text-sm uppercase tracking-wide">Selamat datang di situs resmi</h3>
            <h1 className="text-5xl font-extrabold text-orange-400 my-4">SMK Prestasi Prima</h1>
            <p className="max-w-xl mb-6">
              Sekolah unggulan berbasis teknologi dan karakter.
            </p>
            <a
              href="#profil"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded text-white font-semibold"
            >
              Lihat Profil →
            </a>
          </div>
        </section>

        {/* Profil Section */}
        <section id="profil" className="py-16 px-6 md:px-20 bg-white">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">Profil SMK Prestasi Prima</h2>
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
              <img src="/building.jpg" alt="Gedung SMK" className="rounded-lg shadow" />
            </div>
          </div>
        </section>

        {/* Guru Section */}
        <section id="guru" className="py-16 text-center">
          <h2 className="text-2xl font-bold text-orange-500 mb-2">Profil Guru</h2>
          <p className="text-gray-600 mb-6">Tenaga pengajar profesional dan berpengalaman</p>
          <p className="text-sm text-gray-400">(Slider placeholder)</p>
        </section>

        {/* Prestasi Section */}
        <section id="prestasi" className="py-16 text-center bg-gray-50">
          <h2 className="text-2xl font-bold text-orange-500 mb-2">Capaian Prestasi</h2>
          <p className="text-gray-600 mb-6">Prestasi membanggakan di tingkat nasional & internasional</p>
          <p className="text-sm text-gray-400">(Slider placeholder)</p>
        </section>

        {/* Wisuda */}
        <section className="py-16 px-6 md:px-20 bg-gray-900 text-white text-center">
          <h2 className="text-2xl font-bold text-orange-400 mb-6">Wisuda Sekolah Prestasi Prima 2025</h2>
          <img src="/graduation.jpg" alt="Wisuda" className="mx-auto rounded-lg shadow-lg mb-6" />
          <a href="#" className="inline-block bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded text-white font-semibold">Lihat Galeri</a>
        </section>

        {/* Mitra Industri */}
        <section id="mitra" className="py-16 px-6 text-center bg-white">
          <h2 className="text-2xl font-bold text-orange-500 mb-6">Mitra Industri</h2>
          <div className="flex justify-center gap-10 items-center flex-wrap">
            <img src="/mitra1.png" alt="Mitra 1" className="h-12" />
            <img src="/mitra2.png" alt="Mitra 2" className="h-12" />
            <img src="/mitra3.png" alt="Mitra 3" className="h-12" />
          </div>
        </section>

        {/* Testimoni Alumni */}
        <section className="py-16 px-6 bg-gray-50 text-center">
          <h2 className="text-2xl font-bold text-orange-500 mb-2">Testimoni Alumni</h2>
          <p className="text-sm text-gray-400">(Slider Testimoni Alumni)</p>
        </section>

        {/* Blog */}
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