import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="container py-20 min-h-screen flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                {/* Text Column */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight md:leading-[1.2] bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                        Hello, I'm Kanishk Mangal
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-slate-100 font-semibold mb-4">
                        Full Stack Developer
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 max-w-lg mb-8 leading-relaxed mx-auto md:mx-0">
                        Specializing in building exceptional digital experiences. I create accessible, pixel-perfect, and performant web applications.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4 w-full md:w-auto">
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all transform hover:scale-105"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-lg font-medium transition-all hover:bg-slate-800"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Image Column */}
                <div className="flex justify-center md:justify-end order-1 md:order-2">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <Image
                            src="/profile1.jpg"
                            alt="Kanishk Mangal - Full Stack Developer"
                            fill
                            className="object-cover rounded-full border-4 border-slate-800 shadow-2xl relative z-10"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
