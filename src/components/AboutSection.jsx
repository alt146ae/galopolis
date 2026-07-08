import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import nosotros from '../assets/images/nosotros.jpeg';

const ABOUT_IMG = nosotros ;

export default function AboutSection() {
  const [ref, inView] = useInView(0.2);

  return (
    <section id="about" ref={ref} className="relative py-12 px-6 overflow-hidden grain">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={ABOUT_IMG}
                alt="Espresso artístico en ambiente vintage"
                className="w-full h-auto rounded-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
            </div>
            {/* Gold frame accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 rounded-sm -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            <p className="text-gold/70 text-sm tracking-[0.3em] uppercase mb-4">
              Nuestra historia
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-parchment font-semibold mb-8 leading-tight">
              Sobre
              <br />
              <span className="text-gold">Nosotros</span>
            </h2>
            <div className="w-16 h-px bg-gold/40 mb-8" />
            <p className="text-parchment/60 text-lg leading-relaxed mb-8">
              Galería Café Galópolis es un espacio cultural en Apizaco que combina
              cafetería, arte y una atmósfera inspirada en la tradición y la estética
              vintage. Un lugar diseñado para disfrutar conversaciones, exposiciones,
              café y momentos tranquilos rodeados de identidad visual única.
            </p>
            <div className="glass-light rounded-sm p-6">
              <p className="font-serif text-xl text-gold/80 italic leading-relaxed">
                "Donde cada taza cuenta una historia y cada rincón inspira una conversación."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}