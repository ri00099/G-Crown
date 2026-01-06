import React from "react";

// Assets
import gCrown from "../../assets/g-crown Image.jpeg";
import kaashiRings1 from "../../assets/homePage/kaashRings.jpg";
import kaashiRings2 from "../../assets/homePage/kaashiRings2.png";
import Icon1 from "../../assets/homePage/Icon1.png";
import Icon2 from "../../assets/homePage/Icon2.png";
import Icon3 from "../../assets/homePage/Icon3.png";
import Icon4 from "../../assets/homePage/Icon4.png";
import Earing from "../../assets/homePage/earings.png";
import WomenImg from "../../assets/homePage/Women.png";
import MenImg from "../../assets/homePage/Men.png";
import KidImg from "../../assets/homePage/Kids.png";
import Necklace from "../../assets/homePage/necklace.png";

// --- Configuration Data ---
const COLLECTIONS = [
  {
    title: "Engagement Rings",
    subtitle: "From engagement to eternity",
    image: kaashiRings1,
    isNew: true,
  },
  {
    title: "Wedding Bands",
    subtitle: "Handcrafted for your big day",
    image: kaashiRings2,
    isNew: true,
  },
  {
    title: "Classic Solitaire",
    subtitle: "Timeless brilliance",
    image: kaashiRings1,
    isNew: true,
  },
  {
    title: "Vintage Bands",
    subtitle: "Refined heritage pieces",
    image: kaashiRings1,
    isNew: true,
  },
];

const FEATURES = [
  {
    icon: Icon1,
    title: "Lifetime Service",
    desc: "Complimentary cleaning, polishing, and maintenance for life.",
  },
  {
    icon: Icon2,
    title: "Easy Exchange",
    desc: "30-day exchange policy and buyback options for satisfaction.",
  },
  {
    icon: Icon3,
    title: "Certified Authentic",
    desc: "Every piece comes with BIS hallmark and authenticity guarantee.",
  },
  {
    icon: Icon4,
    title: "Secure Delivery",
    desc: "Fully insured shipping with real-time tracking to your door.",
  },
];

const CURATED = [
  { title: "WOMEN", image: WomenImg },
  { title: "MEN", image: MenImg },
  { title: "KIDS", image: KidImg },
];

// --- Shared Components ---

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-5xl font-cormorant font-bold text-[#08221B]">
      {title}
    </h2>
    <div className="mx-auto mt-4 mb-6 w-24 h-1 bg-[#CBA135]" />
    {subtitle && (
      <p className="text-[#08221B] text-xl md:text-2xl font-light max-w-2xl mx-auto italic">
        {subtitle}
      </p>
    )}
  </div>
);

const ProductCard = () => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow">
    <div className="relative">
      <img
        src={Earing}
        alt="Product"
        className="w-full h-72 object-cover transition-transform group-hover:scale-105"
      />
      <span className="absolute top-3 left-3 bg-[#CBA135] text-white text-[10px] px-3 py-1 rounded-sm">
        BESTSELLER
      </span>
      <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-[#CBA135] hover:text-white transition-colors">
        ♡
      </button>
    </div>
    <div className="p-6">
      <div className="flex text-[#CBA135] text-sm mb-2">
        ★★★★★ <span className="text-gray-400 ml-2">(248)</span>
      </div>
      <h3 className="font-cormorant font-bold text-xl text-[#08221B] mb-2">
        Eternal Sparkle Ring
      </h3>
      <div className="flex items-center gap-3 mb-4">
        <span className="font-bold text-[#08221B]">₹2,45,000</span>
        <span className="text-xs line-through text-gray-400">₹2,75,000</span>
      </div>
      <button className="w-full bg-[#08221B] text-white py-3 rounded text-sm font-bold tracking-widest hover:bg-[#0F3A30] transition-colors">
        ADD TO CART
      </button>
    </div>
  </div>
);

export default function HomeMain() {
  return (
    <main className="bg-[#FFF8E8] overflow-x-hidden">
      {/* 1. HERO SECTION */}
<section
  className="relative h-[85vh] min-h-[600px] flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${gCrown})` }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Blur layer */}
  <div className="absolute inset-0 backdrop-blur-[7.5px]" />

  {/* Noise texture */}
  <div className="noise-overlay" />

  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-4xl">
    <h1 className="font-cormorant text-4xl md:text-7xl font-bold text-[#CBA135] leading-tight mb-6">
      Luxury Designed to <br className="hidden md:block" /> Celebrate Your Glow
    </h1>

    <p className="text-gray-200 text-lg md:text-xl font-light mb-10 tracking-wide italic">
      “Step into a world of refined detail and handcrafted brilliance”
    </p>

    <button className="px-16 py-4 bg-gradient-to-r from-[#B49148] via-[#F8E48F] to-[#BB9344] text-[#08221B] font-bold text-lg rounded-sm hover:scale-105 transition-transform shadow-2xl">
      SHOP NOW
    </button>
  </div>
</section>

      {/* 2. EXPLORE COLLECTIONS */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <SectionHeader title="Explore Our Collections" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {COLLECTIONS.map((item, i) => (
            <div
              key={i}
              className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08221B]/90 via-[#08221B]/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-cormorant font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">{item.subtitle}</p>
                <div className="flex items-center gap-2 text-[#CBA135] text-sm font-bold tracking-tighter group-hover:gap-4 transition-all uppercase">
                  Shop Now <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TRUST & FEATURES BAR */}
      <section className="bg-[#0F2D2A] py-20 border-y-8 border-[#CBA135]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="bg-[#183B32] p-10 rounded-xl text-center flex flex-col items-center border border-white/5 hover:bg-[#1d463c] transition-colors"
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-[#CBA135] flex items-center justify-center shadow-lg">
                  <img
                    src={f.icon}
                    alt={f.title}
                    className="w-8 h-8 object-bottom-right"
                  />
                </div>
                <h3 className="text-white font-cormorant text-xl mb-3 font-semibold">
                  {f.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center pt-10 border-t border-white/10">
            {[
              ["25+", "Years in Business"],
              ["10K+", "Happy Customers"],
              ["50+", "Master Artisans"],
              ["100%", "Satisfaction"],
            ].map(([val, lab], i) => (
              <div key={i}>
                <p className="text-[#CBA135] text-3xl font-bold mb-1">{val}</p>
                <p className="text-gray-400 text-xs tracking-widest uppercase font-medium">
                  {lab}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED MASTERPIECES */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <SectionHeader title="Featured Masterpieces" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[...Array(6)].map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="px-12 py-4 bg-[#08221B] text-white font-bold tracking-widest rounded shadow-xl hover:bg-[#0F3A30] transition-colors">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </section>

      {/* 5. CURATED FOR YOU */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <SectionHeader title="Curated For You" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CURATED.map((cat, i) => (
            <div
              key={i}
              className="group relative h-[500px] overflow-hidden rounded-3xl cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="h-full w-full object- transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-8 left-1/2 -translate-x-1/2 font-cormorant text-3xl font-bold tracking-[0.2em] text-[#F4C430] drop-shadow-lg">
                {cat.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. USER STORIES (Fixed Styling) */}
      <section className="py-24 bg-[#F9F6EE]">
        <SectionHeader
          title="User Stories"
          subtitle="“Stories of elegance, confidence, and the shine Graphura brings to every occasion.”"
        />
        <div className="relative mx-auto max-w-6xl h-[600px] flex items-center justify-center overflow-hidden md:overflow-visible">
          {/* Professional stack effect using relative positions */}
          <div className="hidden lg:block absolute left-0 w-64 h-[400px] bg-[#F4F0E6] rounded-xl border border-gray-200 opacity-40 -rotate-6 z-0" />
          <div className="hidden md:block absolute left-10 md:left-24 w-80 h-[500px] bg-[#F4F0E6] rounded-xl border border-gray-200 shadow-xl -rotate-3 z-10" />

          {/* Main Card */}
          <div className="relative w-[350px] md:w-[450px] h-[600px] bg-white rounded-2xl shadow-2xl z-20 border border-[#CBA135]/20 p-8 flex flex-col justify-center text-center">
            <div className="text-[#CBA135] text-4xl mb-4 font-serif">“</div>
            <p className="text-[#08221B] text-lg italic mb-6">
              "The craftsmanship is unlike anything I've ever seen. My
              engagement ring from G-Crown is a daily reminder of elegance."
            </p>
            <h4 className="font-bold text-[#08221B] font-cormorant text-2xl">
              — Sarah J.
            </h4>
          </div>

          <div className="hidden md:block absolute right-10 md:right-24 w-80 h-[500px] bg-[#F4F0E6] rounded-xl border border-gray-200 shadow-xl rotate-3 z-10" />
          <div className="hidden lg:block absolute right-0 w-64 h-[400px] bg-[#F4F0E6] rounded-xl border border-gray-200 opacity-40 rotate-6 z-0" />
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="py-24 px-4 flex justify-center">
        <div
          className="relative max-w-7xl w-full h-[350px] rounded-2xl overflow-hidden flex items-center px-10 md:px-20"
          style={{
            background:
              "radial-gradient(146% 146% at 146% -25%, #4A9874 0%, #1C3A2C 100%)",
          }}
        >
          <div className="max-w-xl z-10">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-[#E6C36A] leading-tight mb-8">
              Elevate Your Elegance <br /> with G-Crown Jewellers
            </h2>
            <button className="px-10 py-4 bg-gradient-to-r from-[#C9A14A] via-[#E6C36A] to-[#B8903D] text-[#08221B] font-bold text-xl rounded-lg hover:scale-105 transition-transform shadow-xl">
              Contact Us
            </button>
          </div>
          <img
            src={Necklace}
            alt="Luxury"
            className="absolute right-0 top-0 h-[110%] w-auto object-contain hidden lg:block opacity-90 translate-y-[-5%]"
          />
        </div>
      </section>
    </main>
  );
}
