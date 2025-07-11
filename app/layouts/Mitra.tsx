import * as FramerMotion from 'framer-motion'

const Mitra = () => {
    const motion = FramerMotion.motion

    return (
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
    )
}

export default Mitra