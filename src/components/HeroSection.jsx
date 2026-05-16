import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HERO_IMG = 'https://media.base44.com/images/public/69fe2b1edef0e9a0e49ee2f9/b1654888f_generated_c36a86a2.png';

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Interior de Galería Café Galópolis con iluminación cálida y ambiente vintage"
          className="w-full h-full object-cover scale-105"
        />
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/50 to-obsidian/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-obsidian/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Gold decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="w-24 h-px bg-gold/60 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gold/80 text-sm md:text-base tracking-[0.4em] uppercase mb-6"
        >
          Arte • Café • Cultura
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-parchment leading-tight mb-8"
        >
          Galería Café
          <br />
          <span className="text-gold">Galópolis</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-parchment/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Un espacio donde el café, el arte y la tradición se encuentran
          en una experiencia cálida y auténtica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo('#menu')}
            className="px-8 py-3.5 bg-wine hover:bg-wine/80 text-parchment font-sans text-sm tracking-widest uppercase rounded-sm transition-all duration-500 shadow-lg shadow-wine/20"
          >
            Explorar menú
          </button>
          <button
            onClick={() => scrollTo('#info')}
            className="px-8 py-3.5 glass text-gold hover:text-parchment text-sm tracking-widest uppercase rounded-sm transition-all duration-500"
          >
            Visítanos
          </button>
        </motion.div>

        {/* Gold decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="w-24 h-px bg-gold/60 mx-auto mt-12"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5 text-gold/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}