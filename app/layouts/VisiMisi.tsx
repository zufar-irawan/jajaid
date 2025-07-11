const VisiMisi = () => {
    return (
        <section id="visiMisi" className={`py-20 px-6 md:px-20 bg-yellow-500`}>
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
                                    <div className="w-[90%] ml-auto">
                                        <p className="text-2xl text-right font-bold mb-6">
                                            Visi
                                        </p>
                                        <p className="text-xl font-bold text-right mb-2">
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
                            <div className="flex-1 transition-all duration-500 ease-in-out transform hover:-translate-y-2">
                                <div className="bg-yellow-400 text-white rounded-lg shadow-lg p-4 sm:p-8 space-y-11 h-full">
                                    <div className="w-[90%]">
                                        <p className="text-2xl text-left font-bold mb-6">
                                            Misi
                                        </p>
                                        <p className="text-xl font-bold text-left mb-2">
                                            Merangkul komunitas-komunitas tiap hobby yang ada di Indonesia
                                        </p>
                                        <p className="text-sm mt-4 text-left mb-2">
                                            Misi kami adalah mempersatukan komunitas-komunitas tiap hobby yang
                                            tersebar di seluruh Indonesia. Dengan teknologi digital, kami dapat
                                            se-efisien mungkin merangkul komunitas hobby dalam satu marketplace.
                                        </p>
                                        <p className="text-xl font-bold text-left mb-2">
                                            Memenuhi semua kebutuhan hobby untuk semua kalangan
                                        </p>
                                        <p className="text-sm mt-4 text-left mb-2">
                                            Misi kami selanjutnya yaitu memenuhi kebutuhan-kebutuhan seluruh
                                            hobby untuk seluruh kalangan tanpa melibatkan unsur SARA atau
                                            membedakan mereka yang kurang.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VisiMisi