

const Hero = () => {
    return (
        <div className="relative bg-[#48281A] text-white p-10 h-[600px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/coffee.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-2xl px-4">
                <h1 className="text-5xl font-bold">Welcome to Cafe Cultura</h1>
                <p className="text-lg">
                    Discover the perfect blend of tradition and taste at Cafe Cultura. A place where every cup of coffee tells a story, and every sip brings warmth.
                </p>
                <a
                    href="#"
                    className="px-8 py-3 bg-[#AB6832] text-white rounded-lg hover:bg-[#6C4625] transition duration-300 ease-in-out font-semibold"
                >
                    Explore Our Menu
                </a>
            </div>
        </div>

    )
}

export default Hero
