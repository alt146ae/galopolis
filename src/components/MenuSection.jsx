import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Coffee, Snowflake, Sparkles, Cake, Croissant } from 'lucide-react';

/*calientes */ 
import xpreso from '../assets/images/caliente/xpreso.jpeg';
import maquinita from '../assets/images/caliente/maquinita.jpeg';
import galopeclasico from '../assets/images/caliente/galopeclasico.jpeg';
import quinque from '../assets/images/caliente/quinque.jpg';
import lienzo from '../assets/images/caliente/lienzo_charro.jpg';
import capuchino from '../assets/images/caliente/capuchino.jpeg';


/*frios */ 
/*especiales */ 
import escaramucera from '../assets/images/Especiales/escaramucera.jpeg';
import vaqueras from '../assets/images/Especiales/vaqueras.png';
import milAmores from '../assets/images/Especiales/mil-amores.png';
import chacorta from '../assets/images/Especiales/chacorta.jpeg';


/*postres */ 
import crepa from '../assets/images/postre/crepa.jpeg';
import pasteles from '../assets/images/postre/pasteles.png';
import helado from '../assets/images/postre/helado.jpg';
import rebanada from '../assets/images/postre/rebanada.jpeg';


/*snacks */ 

import snack1 from '../assets/images/snack/1.jpeg';
import snack2 from '../assets/images/snack/2.jpeg';
import snack3 from '../assets/images/snack/3.jpeg';
import snack4 from '../assets/images/snack/4.jpeg';
import snack5 from '../assets/images/snack/5.jpeg';
import ensalada from '../assets/images/snack/ensalada.jpeg';

const calientes = {
  'Espresso Antiguo': xpreso,
  'Maquinita': maquinita,
  'Galope Clasico': galopeclasico,
  'Quinque': quinque,
  'Lienzo Charro': lienzo,
  'Capuchino': capuchino,  
};

const frios = {
  'capuchino': capuchino,
  'xpreso': xpreso,
  
};

const SPECIAL_IMAGES = {
  'Mil Amores': milAmores,
  'Escaramucera': escaramucera,
  'Vaqueras': vaqueras,
  'Chacorta': chacorta,
};

const postres = {
  'Crepa': crepa,
  'Pasteles': pasteles,
  'Copa de Helado': helado,
  'Postre de la casa': rebanada,
};

const snacks = {
  'Snack1': snack1,
  'Snack2': snack2,
  'Tabla de queso': snack3,
  'Planchitas Antiguas': snack4,
  'Planchitas Antiguas Dulces': snack5,
  'Ensalada': ensalada,
};




const MENU_IMAGES = {
  hot: xpreso,
  cold: capuchino,
  desserts: crepa,
  snacks: snack1,
};

const categories = [
  { id: 'hot', label: 'Café caliente', icon: Coffee },
  { id: 'cold', label: 'Café frío', icon: Snowflake },
  { id: 'special', label: 'Especiales', icon: Sparkles },
  { id: 'desserts', label: 'Postres', icon: Cake },
  { id: 'snacks', label: 'Snacks', icon: Croissant },
];

const menuItems = {
  hot: ['Espresso Antiguo', 'Maquinita', 'Galope Clasico', 'Quinque', 'Lienzo Charro', 'Capuchino'],
  cold: ['Romana', 'Maquinita frio', 'El Alazan', 'El Baul'],
  special: ['Mil Amores', 'Escaramucera', 'Vaqueras', 'Chacorta'],
  desserts: ['Postre de la casa', 'Pasteles', 'Copa de Helado' ],
  snacks: ['Tabla de queso', 'Planchitas Antiguas', 'Planchitas Antiguas Dulces', 'Ensalada'],
};

export default function MenuSection() {
  const [active, setActive] = useState('hot');
  const [ref, inView] = useInView(0.1);
  const [selectedDrink, setSelectedDrink] = useState('Escaramucera');
  const [selectedHot, setSelectedHot] = useState('Espresso Antiguo');
  const [selectedDessert, setSelectedDessert] = useState('Pasteles');
  const [selectedSnack, setSelectedSnack] = useState('Ensalada');

  return (
    <section id="menu" ref={ref} className="relative py-32 px-6 overflow-hidden grain">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-charcoal/30 to-obsidian" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold/70 text-sm tracking-[0.3em] uppercase mb-4">
            Nuestra carta
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-parchment font-semibold mb-4">
            <span className="text-gold">Menú</span>
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto" />
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm tracking-wider uppercase transition-all duration-500 ${
                  active === cat.id
                    ? 'bg-wine text-parchment shadow-lg shadow-wine/20'
                    : 'glass text-parchment/50 hover:text-gold'
                }`}
              >
                <Icon size={16} />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Menu content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-sm">
              <img
                 src={
                     active === 'special'
                    ? SPECIAL_IMAGES[selectedDrink]
                    : active === 'desserts'
                    ? postres[selectedDessert]
                    : active === 'snacks'
                    ? snacks[selectedSnack]
                    : active === 'hot'
                    ? calientes[selectedHot]
                      : MENU_IMAGES[active]
                      
                        }
                        alt={categories.find(c => c.id === active)?.label}
                        className="w-full h-[400px] object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
            </div>

            {/* Items */}
            <div className="glass-light rounded-sm p-8 md:p-10">
              <h3 className="font-serif text-3xl text-gold mb-8">
                {categories.find(c => c.id === active)?.label}
              </h3>
              <div className="space-y-4">
                {menuItems[active].map((item, i) => (
  <motion.button
    key={item}
    onClick={() => {
      if (active === 'special') {
        setSelectedDrink(item);
      }
       if (active === 'desserts') {
    setSelectedDessert(item);
          }
        if (active === 'hot') {
    setSelectedHot(item);
          }
        if (active === 'snacks') {
          setSelectedSnack(item);
    }}  }
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay: i * 0.1 }}
    className={`flex items-center gap-4 group w-full text-left ${
      (active === 'special' && selectedDrink === item) ||
  (active === 'desserts' && selectedDessert === item) 
    || (active === 'snacks' && selectedSnack === item)
    || (active === 'hot' && selectedHot === item)
        ? 'text-gold'
        : ''
    }`}
  >
    <div
      className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
         (active === 'special' && selectedDrink === item) ||
        (active === 'desserts' && selectedDessert === item)
        || (active === 'snacks' && selectedSnack === item)
        || (active === 'hot' && selectedHot === item)
          ? 'bg-gold'
          : 'bg-gold/40'
      }`}
    />

    <span className="text-lg transition-colors duration-300">
      {item}
    </span>

    <div className="flex-1 border-b border-dotted border-gold/10" />
  </motion.button>
))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}