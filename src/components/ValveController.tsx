import Image from 'next/image'
import Link from 'next/link'

export default function ValveController() {
  return (
    <section className="py-24">
      {/* Valve Controller Section Container */}
      <div className="section-container">
        <div className="px-[5%] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Content (left on desktop) */}
          <div className="flex justify-center items-center order-1 md:order-none">
            <Image
              src="https://i.imgur.com/3xaPi32.png"
              alt="Valve Controller Illustration"
              width={220}
              height={220}
              className="object-contain rounded-xl shadow-lg"
              priority
            />
          </div>
          {/* Text Content (right on desktop) */}
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-playfair">Become a Valve Controller</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4 font-playfair max-w-xl">
              Valve Controllers let you earn a cut of protocol rewards by setting a commission. Open one by burning Liquid tokens forever.
            </p>
            <Link
              href="#"
              className="px-8 py-4 rounded-full font-bold text-black bg-gradient-to-r from-cyan-300 to-blue-200 shadow-lg hover:from-cyan-200 hover:to-blue-100 transition-colors font-playfair focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              Open a Valve
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 