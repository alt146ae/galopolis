import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 bg-obsidian border-t border-gold/10 grain">
      <div className="max-w-6xl mx-auto text-center">
        {/* Large background logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="font-serif text-[12rem] md:text-[18rem] font-bold text-parchment/[0.02] select-none leading-none">
            G
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="font-serif text-3xl md:text-4xl text-gold mb-6 tracking-wider">
            Galópolis
          </h3>

          <div className="w-12 h-px bg-gold/30 mx-auto mb-6" />

          <p className="font-serif text-lg text-parchment/40 italic mb-10 max-w-md mx-auto">
            "Tradición, arte y café en un solo espacio."
          </p>

          {/* Social links */}
          {/* <div className="flex items-center justify-center gap-6 mb-10">
            <div className="w-8 h-px bg-gold/20" />
            <a href="#" className="text-parchment/30 hover:text-gold transition-colors duration-300" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <div className="w-px h-4 bg-gold/15" />
            <a href="#" className="text-parchment/30 hover:text-gold transition-colors duration-300" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <div className="w-px h-4 bg-gold/15" />
            <a href="#" className="text-parchment/30 hover:text-gold transition-colors duration-300" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
            <div className="w-8 h-px bg-gold/20" />
          </div> */}

          <p className="text-parchment/20 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Galería Café Galópolis — Apizaco, Tlaxcala
          </p>
        </div>
      </div>
    </footer>
  );
}