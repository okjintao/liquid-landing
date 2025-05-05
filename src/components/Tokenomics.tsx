export default function Tokenomics() {
  return (
    <section className="py-24">
      {/* Tokenomics Section Container */}
      <div className="section-container">
        {/* Section Divider */}
        <hr className="border-t border-white/10 mb-16" />
        {/* Inset Content */}
        <div className="px-[5%]">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 pt-8 font-playfair">Tokenomics</h2>
          {/* Tokenomics Cards Grid */}
          <div className="pt-4 pb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl duration-200">
              <h3 className="text-2xl font-bold mb-3 font-playfair">Fixed Supply</h3>
              <p className="text-lg text-gray-300 leading-relaxed font-playfair">
                The total supply of Liquid was created at launch. No new tokens can ever be minted.
              </p>
            </div>
            {/* Card 2 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl duration-200">
              <h3 className="text-2xl font-bold mb-3 font-playfair">Protocol-Owned Liquidity</h3>
              <p className="text-lg text-gray-300 leading-relaxed font-playfair">
                All tokens were placed into a single trading pool owned by the protocol itself.
              </p>
            </div>
            {/* Card 3 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl duration-200">
              <h3 className="text-2xl font-bold mb-3 font-playfair">Dynamic Trading Tax</h3>
              <p className="text-lg text-gray-300 leading-relaxed font-playfair">
                A sell tax adjusts based on market activity — increasing with sells, decreasing with buys.
              </p>
            </div>
            {/* Card 4 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl duration-200">
              <h3 className="text-2xl font-bold mb-3 font-playfair">Exit Queue</h3>
              <p className="text-lg text-gray-300 leading-relaxed font-playfair">
                Users can convert Liquid to Hype with no tax through a short waiting period.
              </p>
            </div>
          </div>
        </div>
        {/* Section Divider */}
        <hr className="border-t border-white/10 mt-16" />
      </div>
    </section>
  )
} 