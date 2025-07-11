import * as FramerMotion from 'framer-motion'

const Services = () => {
    const motion = FramerMotion.motion

    return (
        <section id="services" className="relative w-full text-white py-20 overflow-hidden">
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
    )
}

export default Services