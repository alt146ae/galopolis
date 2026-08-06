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
import img02 from '../assets/images/11.JPG';
import img03 from '../assets/images/03.jpeg';
import img04 from '../assets/images/04.jpeg';
import img05 from '../assets/images/05.jpeg';
import img06 from '../assets/images/06.jpeg';
import img07 from '../assets/images/07.jpeg';
import img08 from '../assets/images/08.jpeg';
import img09 from '../assets/images/09.jpeg';
import img10 from '../assets/images/10.jpeg';
import img11 from '../assets/images/11.JPG';
import img12 from '../assets/images/12.jpg';
import img13 from '../assets/images/13.jpg';
import img14 from '../assets/images/14.jpg';
import img15 from '../assets/images/15.jpg';
import img16 from '../assets/images/16.jpg';
import img17 from '../assets/images/17.jpg';
import img18 from '../assets/images/18.jpg';
import img19 from '../assets/images/19.jpg';
import img20 from '../assets/images/20.jpg';
import img21 from '../assets/images/21.jpg';
import img22 from '../assets/images/22.jpg';
import img23 from '../assets/images/23.jpg';
import img24 from '../assets/images/24.jpg';





const galleryImages = [
  { src: img01, alt: 'Cámara Fotográfica' },
  { src: img03, alt: 'Arte y decoración cultural' },
  { src: img04, alt: 'Iluminación cálida del café' },
  { src: img05, alt: 'Detalles vintage y texturas' },
  { src: img06, alt: 'Arquitectura y ambiente cultural' },
  { src: img07, alt: 'Interiores acogedores' },
  { src: img08, alt: 'Arte contemporáneo' },
  { src: img09, alt: 'Cultura local' },
  { src: img10, alt: 'Experiencias únicas' },
  { src: img11, alt: 'Naturaleza y entornos' },
  { src: img12, alt: 'Arquitectura moderna' },
  { src: img13, alt: 'Tecnología y diseño' },
  { src: img14, alt: 'Moda y estilo' },
  { src: img15, alt: 'Comida y gastronomía' },
  { src: img16, alt: 'Música y entretenimiento' },
  { src: img17, alt: 'Deportes y actividades' },
  { src: img18, alt: 'Viajes y aventuras' },  
  { src: img19, alt: 'Arte callejero' },
  { src: img20, alt: 'Cultura urbana' },
  { src: img21, alt: 'Paisajes naturales' },
  { src: img22, alt: 'Arquitectura histórica' },
  { src: img23, alt: 'Eventos y festivales' },
  { src: img24, alt: 'Fotografía artística' },
];

export default function GallerySection() {

  const [ref, inView] = useInView(0.1);
  const swiperRef = useRef(null);
  

  return (

    <section
      id="gallery"
      ref={ref}
      className="relative py-12 px-6 overflow-hidden grain"
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