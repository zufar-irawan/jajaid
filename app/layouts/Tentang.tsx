import Image from "next/image"

const Tentang = () => {
    return (
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
    )
}

export default Tentang