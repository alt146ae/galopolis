import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img01 from '../assets/images/01.jpeg';
import img03 from '../assets/images/03.jpeg';
import img04 from '../assets/images/04.jpeg';
import img05 from '../assets/images/05.jpeg';
import img06 from '../assets/images/06.jpeg';

const galleryImages = [
  { src: img01, alt: 'Cámara Fotográfica' },
  { src: img03, alt: 'Arte y decoración cultural' },
  { src: img04, alt: 'Iluminación cálida del café' },
  { src: img05, alt: 'Detalles vintage y texturas' },
  { src: img06, alt: 'Arquitectura y ambiente cultural' },
];

export default function GallerySection() {

  const [ref, inView] = useInView(0.1);
  const swiperRef = useRef(null);
  

  return (

    <section
      id="gallery"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden grain"
    >

      <div className="max-w-6xl mx-auto">

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




<div className="relative">

  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    onSwiper={(swiper) => {
      swiperRef.current = swiper;
    }}
    pagination={{ clickable: true }}
    autoplay={{
      delay: 3500,
      disableOnInteraction: false,
    }}
    loop
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }}
  >
    {galleryImages.map((img) => (
      <SwiperSlide key={img.alt}>
        <div className="overflow-hidden rounded-lg border border-gold/20 bg-charcoal">
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Botón Izquierdo */}
  <button
    type="button"
    onClick={() => swiperRef.current?.slidePrev()}
    className="glass-button absolute -left-10 top-1/2 -translate z-50"
  >
    <ChevronLeft size={30} color="#111" />
  </button>

  {/* Botón Derecho */}
  <button
    type="button"
    onClick={() => swiperRef.current?.slideNext()}
    className="glass-button absolute -right-10 top-1/2 -translate z-50"
  >
    <ChevronRight size={30} color="#111" />
  </button>

</div>





      </div>

    </section>

  );

}