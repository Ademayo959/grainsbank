import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-green-950 rounded-[2rem] px-8 mt-2 pt-10 pb-4 md:px-16 md:py-16 text-white w-full flex flex-col justify-between min-h-80">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold tracking-widest text-white">GRAINSBANK</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-[250px]">
            Connecting agriculture from farm to market.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[#d3f37a] text-sm font-medium mb-2">Explore</h3>
          <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base w-fit">Marketplace</a>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base w-fit">About</Link>
          <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base w-fit">Ecosystem</a>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base w-fit">Contact</Link>
        </div>
        {/* Column 3: Contact Info */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[#d3f37a] text-sm font-medium mb-2">Contact</h3>
          <a href="tel:+2348000000000" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base w-fit">+234 800 000 0000</a>
          <a href="mailto:hello@grainsbank.com" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base w-fit">hello@grainsbank.com</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base w-fit">WhatsApp</a>
        </div>

      </div>
      {/* Bottom Section: Copyright & RC Number */}
      <div className="mt-8 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-gray-400 text-xs md:text-sm w-full">
        <p>© 2026 Grainsbank Digital Agribusiness Limited · Nigeria</p>
        <p>RC 0000000</p>
      </div>
    </footer>
  );
}