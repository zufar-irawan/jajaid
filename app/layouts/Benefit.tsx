import * as FramerMotion from 'framer-motion'

const Benefit = () => {
    const motion = FramerMotion.motion

    const benefits = [
        {
            id: 1,
            judul: "Pengiriman Cepat",
            icon: (<i className="ri-truck-line"></i>),
            warna: "text-[#FBB338]"
        },
        {
            id: 2,
            judul: "Gratis Ongkir",
            icon: (<i className="ri-refund-2-line"></i>),
            warna: "text-[#55B4E5]"
        },
        {
            id: 3,
            judul: "Pembayaran Aman",
            icon: (<i className="ri-secure-payment-fill"></i>),
            warna: "text-[#FBB338]"
        },
        {
            id: 4,
            judul: "Dijamin 100% Ori",
            icon: (<i className="ri-verified-badge-fill"></i>),
            warna: "text-[#55B4E5]"
        },
    ]

    return (
        <section className="bg-gradient-to-r from-orange-400 via-yellow-400 to-yellow-300 py-20 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {benefits.map((benefit, i) => (
                    <motion.div
                        key={benefit.id}
                        className="flex px-5 py-10 hover:bg-[#55B4E5] text-gray-800 bg-white/30 backdrop-blur-sm border-white border-1 items-center justify-center gap-4 rounded-xl group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}>

                        <div className={`${benefit.warna} group-hover:text-white text-6xl`}>
                            {benefit.icon}
                        </div>

                        <span className="font-semibold text-sm sm:text-base">
                            {benefit.judul} <i className="ri-arrow-down-s-line"></i>
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>

    )
}

export default Benefit