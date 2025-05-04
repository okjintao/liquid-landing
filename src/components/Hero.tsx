import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <main className="text-center max-w-4xl mx-auto" data-aos="fade-up">
      <div className="relative w-52 h-52 mx-auto mb-6 flex items-center justify-center">
        <div className="absolute rounded-full w-full h-full bg-cyan-400 opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
          <div className="absolute rounded-full border border-white/10 opacity-60 w-[12vw] h-[12vw]"></div>
          <div className="absolute rounded-full border border-white/10 opacity-50 w-[14vw] h-[14vw]"></div>
          <div className="absolute rounded-full border border-white/10 opacity-40 w-[16vw] h-[16vw]"></div>
        </div>
        <Image 
          src="https://i.imgur.com/gR06Bjt.png" 
          alt="Liquid Logo" 
          width={208}
          height={208}
          className="h-40 sm:h-52 shimmer animate-oscillate relative z-10"
          priority
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight">
      There&apos;s Hype<br />There&apos;s Purr<br />Here&apos;s <span className="text-cyan-300">Liquid</span>
      </h1>
      <p className="text-lg text-gray-300 max-w-xl mx-auto mt-4 leading-relaxed">
        The final piece of the Hyperliquid ecosystem — a pure store of value.
      </p>
      <div className="mt-12 mb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link 
          href="#docs" 
          className="px-6 py-2 bg-cyan-300 text-black font-semibold rounded-full shadow-lg hover:bg-cyan-200 transition-all duration-300 hover:scale-105"
        >
          Read the Docs
        </Link>
        <Link 
          href="#get" 
          className="px-6 py-2 border border-cyan-300 text-cyan-300 font-semibold rounded-full hover:bg-cyan-300 hover:text-black transition-all duration-300 hover:scale-105"
        >
          Get Liquid
        </Link>
      </div>
    </main>
  )
} 