import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Palette, Music, Users, Sparkles, Lightbulb } from 'lucide-react';

const EVENTS_IMG = 'https://media.base44.com/images/public/69fe2b1edef0e9a0e49ee2f9/f8d9ea009_generated_f801943f.png';

const events = [
  { icon: Palette, title: 'Exposiciones', desc: 'Artistas locales y colecciones rotativas' },
  { icon: Music, title: 'Música en vivo', desc: 'Noches acústicas e íntimas' },
  { icon: Users, title: 'Eventos culturales', desc: 'Charlas, lecturas y debates' },
  { icon: Sparkles, title: 'Noches de arte', desc: 'Talleres creativos y arte en vivo' },
  { icon: Lightbulb, title: 'Reuniones creativas', desc: 'Networking y comunidad local' },
];

export default function EventsSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="events" ref={ref} className="relative py-32 px-6 overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-charcoal/20 to-obsidian" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold/70 text-sm tracking-[0.3em] uppercase mb-4">
            Vive la experiencia
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-parchment font-semibold mb-4">
            Eventos y <span className="text-gold">Cultura</span>
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto mb-8" />
          <p className="text-parchment/50 text-lg max-w-xl mx-auto">
            Un espacio abierto para el arte, la cultura y la creatividad local.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative rounded-sm overflow-hidden"
          >
            <img
              src={EVENTS_IMG}
              alt="Evento de música en vivo en Galería Café Galópolis"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-obsidian/20" />
          </motion.div>

          {/* Events list */}
          <div className="space-y-5">
            {events.map((event, i) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="glass-light rounded-sm p-5 flex items-start gap-4 group hover:border-gold/30 transition-all duration-500"
                >
                  <div className="p-3 rounded-sm bg-wine/20 text-gold group-hover:bg-wine/30 transition-colors duration-300">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-parchment mb-1">{event.title}</h3>
                    <p className="text-parchment/50 text-sm">{event.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}