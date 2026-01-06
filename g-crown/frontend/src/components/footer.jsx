import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import FooterBg from "../assets/footerAssests/background.png";

export default function Footer() {
  return (
    <footer
      className="relative w-full text-[#CBA135] bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(212.33deg, rgba(28,58,44,0.2) 19.6%, rgba(28,58,44,0.4) 43.5%, rgba(28,58,44,0.6) 56.62%, #1C3A2C 79.92%),
          linear-gradient(137.54deg, rgba(28,58,44,0.15) 33.64%, rgba(28,58,44,0.18) 46.33%, rgba(28,58,44,0.37) 53.61%, rgba(28,58,44,0.73) 62.4%),
          url(${FooterBg})
        `,
      }}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* ABOUT */}
          <div>
            <h2 className="mb-4 text-base font-semibold tracking-wide ">
              G-CROWN JEWELLERS BY GRAPHURA
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-[#EFDFB7]">
              Crafting timeless elegance since 2024. We bring together
              traditional artistry and contemporary design to create jewelry
              that tells your unique story.
            </p>

            <div className="flex items-center gap-3">
              <SocialIcon Icon={FaFacebookF} />
              <SocialIcon Icon={FaInstagram} />
              <SocialIcon Icon={FaTwitter} />
            </div>
          </div>

          {/* SHOP */}
          <FooterColumn
            title="Shop"
            links={[
              "New Arrivals",
              "Rings",
              "Necklaces",
              "Earrings",
              "Bracelets",
              "Collections",
            ]}
          />

          {/* INFORMATION */}
          <FooterColumn
            title="Information"
            links={[
              "About Us",
              "Our Story",
              "Newsletter",
            ]}
          />

          {/* CUSTOMER CARE */}
          <FooterColumn
            title="Customer Care"
            links={[
              "Contact Us",
              "Track Order",
              "FAQs",
            ]}
          />
        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-[#CBA135]/30 pt-6 text-center  ">
          <p className="text-xs sm:text-sm text-[#FFF9EA]  tracking-wide">
            © 2025 Graphura India Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Reusable Components ---------------- */

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase">
        {title}
      </h3>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-[#EFDFB7] transition-colors duration-200 hover:text-white focus:outline-none focus:text-white"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ Icon }) {
  return (
    <a
      href="#"
      aria-label="Social link"
      className="flex h-9 w-9 items-center justify-center rounded-full
        bg-[#0F231C] text-[#FAF7F2]
        transition-all duration-200
        hover:bg-[#CBA135] hover:text-[#0F231C]"
    >
      <Icon size={15} />
    </a>
  );
}