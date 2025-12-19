import React from "react";

import gCrown from "../../assets/g-crown Image.jpeg";

export default function HomeMain() {
  return (
    <main className="bg-[#0f2d2a]">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh]  bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${gCrown})` }}
      >
        {/* Dark + blur overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        {/* Edge masking vignette (IMPORTANT) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

        {/* Glass content box */}
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h1
            className="font-cormorant text-3xl md:text-5xl font-serif mb-5 font-bold"
            style={{ color: "#CBA135" }}
          >
            Luxury Designed to <br /> Celebrate Your Glow
          </h1>
          <p className="text-gray-200 mb-6 mt-3">
            “Step into a world of refined detail and handcrafted brilliance{" "}
            <br />
            from G-Crown Jewellers”
          </p>
          <button
            className="
            w-74.75 h-16.25
            rounded-sm
    px-7 py-2.5 font-bold text-[#08221B]
    bg-linear-to-r
    from-[#B49148]
    via-[#F8E48F]
    to-[#BB9344]
    hover:scale-[1.03]
    transition-all duration-300
    mt-3
  "
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-12 bg-[#f8f5f0]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-5 font-bold text-[#08221B]">
            Explore Our Collection
          </h2>
          <div className="mx-auto w-[174px] h-[4px] bg-[#d4af37] mb-6" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Necklaces", "Earrings", "Rings", "Bracelets"].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 text-center"
              >
                <div className="h-32 bg-gray-200 rounded-xl mb-4" />
                <h3 className="font-medium">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Designs */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-10">
            Featured Designs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-[#133c38] rounded-2xl p-4 text-center hover:scale-105 transition"
              >
                <div className="h-48 bg-black/30 rounded-xl mb-4" />
                <h3 className="font-medium">Elegant Gold Set</h3>
                <p className="text-sm text-gray-300">₹ 48,999</p>
                <button className="mt-3 text-sm border border-[#d4af37] px-4 py-1 rounded-full hover:bg-[#d4af37] hover:text-black transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 bg-[#f8f5f0] text-black">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-4">
              Designed for Every Occasion
            </h2>
            <p className="text-gray-600 mb-6">
              From weddings to festive celebrations, find jewellery that defines
              your elegance.
            </p>
            <button className="bg-[#0f2d2a] text-white px-6 py-2 rounded-full hover:bg-[#133c38] transition">
              Shop Now
            </button>
          </div>
          <div className="h-64 bg-gray-300 rounded-2xl" />
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-serif text-center mb-10">
            New Arrivals
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-[#133c38] rounded-2xl p-4 text-center">
                <div className="h-40 bg-black/30 rounded-xl mb-3" />
                <h3 className="text-sm">Modern Bridal Set</h3>
                <p className="text-xs text-gray-300">₹ 62,499</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
