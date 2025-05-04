import Image from 'next/image'

export default function WhyLiquid() {
  return (
    <section className="py-24">
      {/* Why Liquid Section Container */}
      <div className="section-container">
        <div className="px-[5%] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Content */}
          <div className="flex justify-center items-center">
            <Image
              src="https://i.imgur.com/S9Fxd79.png"
              alt="Why Liquid Illustration"
              width={280}
              height={280}
              className="object-contain"
              priority
            />
          </div>
          {/* Text Content */}
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-playfair">Why Liquid?</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4 font-playfair max-w-xl">
              Liquid is a store of value designed to reward long-term conviction. It is trustless, transparent, and intentionally under-engineered.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-playfair max-w-xl">
              There are no team tokens, no venture allocation, and no roadmaps — only belief and participation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 