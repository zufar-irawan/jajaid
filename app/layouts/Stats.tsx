import 'remixicon/fonts/remixicon.css'

const Stats = () => {
    const heroStats = [
        { number: "50K+", label: "Produk Hobby", icon: "ri-inbox-unarchive-line" },
        { number: "25K+", label: "Pengguna Aktif", icon: "ri-user-line" },
        { number: "1000+", label: "Seller Terpercaya", icon: "ri-shield-check-line" },
        { number: "4.8/5", label: "Rating Platform", icon: "ri-star-line" }
    ]

    return (
        <section id="stats" className="py-10 bg-gradient-to-bl from-blue-600 via-purple-600 to-indigo-600">
            <div className="relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/images/banner.svg')] animate-pulse"></div>
                    <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-bounce"></div>
                    <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-300/20 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    {heroStats.map((stat, index) => (
                        <div key={index} className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105">
                            <i className={`${stat.icon} text-2xl text-blue-200 mb-2`}></i>
                            <div className="text-2xl font-bold text-white">{stat.number}</div>
                            <div className="text-sm text-blue-200">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Stats