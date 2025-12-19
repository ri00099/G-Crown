import {
  Search,
  Heart,
  ShoppingCart,
  MapPin,
  User,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  /* ---------------- Scroll hide / show ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (Math.abs(currentY - lastScrollY.current) < 10) return;

      if (currentY > lastScrollY.current && currentY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/*  NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-[#0F231C]
          transition-transform duration-300 ease-out
          ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-10">
          <div className="relative flex h-22 items-center justify-between">
            {/* MOBILE LEFT (Menu) */}
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden rounded-md p-2 text-white hover:bg-white/10"
            >
              <Menu size={26} />
            </button>

            {/* DESKTOP SEARCH */}
            <div className="hidden lg:flex w-[320px] xl:w-105 items-center rounded-full bg-[#FBF6EA] px-4 py-2">
              <Search size={18} className="text-gray-500 shrink-0" />
              <input
                type="text"
                placeholder="Search"
                className="ml-3 w-full bg-transparent text-sm text-gray-500 outline-none placeholder:text-lg placeholder:text-center"
              />
            </div>

            {/* LOGO */}
            <div
              className="
                      absolute left-1/2
                      top-1/2
                      -translate-x-1/2 -translate-y-1/2
                      lg:top-3/4
                    "
            >
              <img
                src={Logo}
                alt="Graphura Jewellery"
                className="h-16 md:h-18 lg:h-22 w-auto"
              />
            </div>

            {/* MOBILE RIGHT ICONS */}
            <div className="flex items-center gap-2 lg:hidden">
              <IconButton Icon={Heart} />
              <IconButton Icon={ShoppingCart} />
            </div>

            {/* DESKTOP ICONS */}
            <div className="hidden lg:flex items-center gap-3">
              {[Heart, ShoppingCart, MapPin, User].map((Icon, i) => (
                <IconButton key={i} Icon={Icon} />
              ))}
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center justify-between pb-4 text-base xl:text-lg ">
            <div className="flex gap-30 xl:gap-40">
              <NavLink label="Home" href="/" />
              <NavLink label="About Us" href="/about" />
              <NavLink label="Collections" href="/collections" />
            </div>
            <div className="flex gap-30 xl:gap-40">
              <NavLink label="Occasions" href="/occasions" />
              <NavLink label="New Arrivals" href="/new-arrivals" />
              <NavLink label="Store" href="/store" />
            </div>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[85%] max-w-[320px]
          bg-[#0F231C] text-white transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 h-22">
          <img src={Logo} alt="Logo" className="h-10" />
          <button onClick={() => setMenuOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="px-6 pt-6 space-y-6 text-lg">
          {[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "Collections", href: "/collections" },
            { label: "Occasions", href: "/occasions" },
            { label: "New Arrivals", href: "/new-arrivals" },
            { label: "Store", href: "/store" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-[#CBA135] hover:text-white transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Drawer Footer */}
        <div className="absolute bottom-6 left-0 w-full px-6">
          <div className="flex justify-between">
            <MobileAction Icon={Heart} label="Wishlist" />
            <MobileAction Icon={ShoppingCart} label="Cart" />
            <MobileAction Icon={User} label="Account" />
          </div>
        </div>
      </aside>
    </>
  );
}

/* ---------------- Reusable Components ---------------- */

function IconButton({ Icon }) {
  return (
    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FBF6EA] text-[#0F231C]">
      <Icon size={18} />
    </button>
  );
}

function MobileAction({ Icon, label }) {
  return (
    <button className="flex flex-col items-center gap-1 text-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FBF6EA] text-[#0F231C]">
        <Icon size={20} />
      </div>
      <span className="text-[#CBA135]">{label}</span>
    </button>
  );
}

function NavLink({ label, href }) {
  return (
    <a
      href={href}
      className="relative text-[#CBA135] transition hover:text-white
        after:absolute after:left-0 after:-bottom-1 after:h-0.5
        after:w-0 after:bg-[#CBA135]
        after:transition-all hover:after:w-full"
    >
      {label}
    </a>
  );
}
  