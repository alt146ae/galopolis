import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { MapPin, Clock, Phone, Instagram, Facebook, MessageCircle, Navigation, CalendarCheck } from 'lucide-react';

const infoItems = [
  {
    icon: MapPin,
    title: 'Ubicación',
    text: 'C. 5 de Febrero, Centro, 90300 Ciudad de Apizaco, Tlaxcala, México',
  },
  {
    icon: Clock,
    title: 'Horarios',
    text: 'Miercoles - Lunes: 1:00 PM - 9:00 PM\nMartes: Cerrado',
  },
  {
    icon: Phone,
    title: 'Teléfono',
    text: 'Contáctanos por WhatsApp',
  },
];

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', href: '#' },
];

export default function InfoSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="info" ref={ref} className="relative py-32 px-6 overflow-hidden grain">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold/70 text-sm tracking-[0.3em] uppercase mb-4">
            Encuéntranos
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-parchment font-semibold mb-4">
            Visita <span className="text-gold">Galópolis</span>
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {infoItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-light rounded-sm p-8 text-center group hover:border-gold/30 transition-all duration-500"
              >
                <div className="inline-flex p-4 rounded-full bg-wine/15 text-gold mb-5 group-hover:bg-wine/25 transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="font-serif text-xl text-parchment mb-3">{item.title}</h3>
                <p className="text-parchment/50 text-sm whitespace-pre-line leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-strong rounded-sm p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Social icons */}
            <div className="flex items-center gap-6">
              <span className="text-parchment/40 text-sm tracking-widest uppercase">Síguenos</span>
              <div className="w-px h-6 bg-gold/20" />
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    className="p-3 glass rounded-sm text-parchment/50 hover:text-gold hover:border-gold/30 transition-all duration-300"
                    aria-label={s.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-6 py-3 bg-wine hover:bg-wine/80 text-parchment text-sm tracking-wider uppercase rounded-sm transition-all duration-500 shadow-lg shadow-wine/20">
                <Navigation size={16} />
                Cómo llegar
              </button>
              <button className="flex items-center gap-2 px-6 py-3 glass text-gold hover:text-parchment text-sm tracking-wider uppercase rounded-sm transition-all duration-500">
                <CalendarCheck size={16} />
                Reservar
              </button>
              <button className="flex items-center gap-2 px-6 py-3 glass text-gold hover:text-parchment text-sm tracking-wider uppercase rounded-sm transition-all duration-500">
                <Instagram size={16} />
                Instagram
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}