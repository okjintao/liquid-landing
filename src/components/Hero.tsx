import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  // Generate more equally spaced rings, white border, decreasing opacity
  const baseSize = 176; // px, roughly h-44/w-44
  const ringCount = 6;
  const ringGap = 20; // px between rings
  const rings = Array.from({ length: ringCount }, (_, i) => ({
    size: baseSize + i * ringGap,
    opacity: 60 - i * 10, // 60, 50, 40, 30, 20, 10
  }));

  return (
    <section className="py-24">
      {/* Hero Section Container */}
      <div className="section-container">
        <div className="px-[5%] text-center flex flex-col items-center justify-center min-h-[80vh]">
          {/* Animated Logo and Equally Spaced Concentric Rings */}
          <div className="relative w-80 h-80 mx-auto mb-6 flex items-center justify-center">
            <div className="absolute rounded-full w-full h-full bg-cyan-400 opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
              {rings.map((ring, i) => (
                <div
                  key={i}
                  style={{ width: ring.size, height: ring.size }}
                  className={`absolute rounded-full border border-white opacity-${ring.opacity}`}
                />
              ))}
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
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight font-playfair">
            There&apos;s Hype<br />There&apos;s Purr<br />Here&apos;s <span className="text-cyan-300">Liquid</span>
          </h1>
          {/* Subheading */}
          <p className="text-lg md:text-2xl text-gray-300 max-w-xl mx-auto mt-4 leading-relaxed font-playfair">
            The final piece of the Hyperliquid ecosystem — a pure store of value.
          </p>
          {/* Call to Action Buttons */}
          <div className="mt-12 mb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#docs"
              className="px-8 py-4 rounded-full font-bold text-black bg-gradient-to-r from-cyan-300 to-blue-200 shadow-lg hover:from-cyan-200 hover:to-blue-100 transition-colors font-playfair focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              Read the Docs
            </Link>
            <Link
              href="#get"
              className="px-8 py-4 rounded-full font-bold border border-cyan-300 text-cyan-300 bg-transparent hover:bg-cyan-300 hover:text-black transition-all duration-300 hover:scale-105 font-playfair focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              Get Liquid
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 