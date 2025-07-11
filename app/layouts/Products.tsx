import * as FramerMotion from 'framer-motion'
import 'remixicon/fonts/remixicon.css'

const Products = () => {
    const motion = FramerMotion.motion

    const products = [
        {
            id: 1,
            nama: "Art",
            icon: (<i className="ri-brush-fill"></i>),
            fill: "hover:bg-red-500"
        },
        {
            id: 2,
            nama: "Books",
            icon: (<i className="ri-book-shelf-fill"></i>),
            fill: "hover:bg-blue-500"
        },
        {
            id: 3,
            nama: "Kitchen",
            icon: (<i className="ri-knife-fill"></i>),
            fill: "hover:bg-yellow-400"
        },
        {
            id: 4,
            nama: "Game",
            icon: (<i className="ri-chess-fill"></i>),
            fill: "hover:bg-blue-500"
        },
        {
            id: 5,
            nama: "Gardening",
            icon: (<i className="ri-leaf-fill"></i>),
            fill: "hover:bg-green-500"
        },
        {
            id: 6,
            nama: "Music",
            icon: (<i className="ri-music-fill"></i>),
            fill: "hover:bg-blue-500"
        },
        {
            id: 7,
            nama: "Pets",
            icon: (<i className="ri-baidu-line"></i>),
            fill: "hover:bg-yellow-500"
        },
        {
            id: 8,
            nama: "Photography",
            icon: (<i className="ri-camera-3-fill"></i>),
            fill: "hover:bg-blue-500"
        },
        {
            id: 9,
            nama: "Sports",
            icon: (<i className="ri-basketball-fill"></i>),
            fill: "hover:bg-orange-500"
        },
        {
            id: 10,
            nama: "Toys",
            icon: (<i className="ri-bear-smile-fill"></i>),
            fill: "hover:bg-yellow-500"
        },
    ]

    return (
        <section id="products" className="py-24 bg-gray-100 text-center text-gray-900">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold text-primary mb-12">
                    Kategori
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-6">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="flex flex-col items-center">

                            <div className={`
                                px-5 py-4 rounded-2xl transition-all 
                                text-black hover:text-white hover:scale-110
                                shadow-xl h-[200px] text-[3.5rem] ${product.fill}
                            w-[70%]`}>

                                {product.icon}

                                <p className="mt-8 text-sm">{product.nama}</p>
                            </div>


                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products