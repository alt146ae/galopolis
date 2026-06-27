import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import img01 from '../assets/images/01.jpeg';
import img03 from '../assets/images/03.jpeg';
import img04 from '../assets/images/04.jpeg';
import img05 from '../assets/images/05.jpeg';
import img06 from '../assets/images/06.jpeg';

const galleryImages = [
  { src: img01, alt: 'Camara Fotografica', span: 'row-span-2' },
/*  { src: img01, alt: 'Café servido artísticamente', span: 'row-span-2' },*/
  { src: img03, alt: 'Arte y decoración cultural', span: 'row-span-2' },
  { src: img04, alt: 'Iluminación cálida del café', span: 'row-span-2'  },
  { src: img05, alt: 'Detalles vintage y texturas', span: '' },
  { src: img06, alt: 'Arquitectura y ambiente cultural', span: 'row-span-2' },
];

export default function GallerySection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="gallery" ref={ref} className="relative py-32 px-6 overflow-hidden grain">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold/70 text-sm tracking-[0.3em] uppercase mb-4">
            Nuestro espacio
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-parchment font-semibold mb-4">
            La <span className="text-gold">Galería</span>
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto" />
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-sm ${img.span}`}
            >
              <div className="relative overflow-hidden border border-gold/10 rounded-sm">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full min-h-[250px] object-contain transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/40 transition-all duration-500" />
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="glass-light rounded-sm px-4 py-2">
                    <p className="text-parchment/90 text-sm">{img.alt}</p>
                  </div>
                </div>
                {/* Gold border on hover */}
                <div className="w-full h-[100px] object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}