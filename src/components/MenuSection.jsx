import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Coffee, Snowflake, Sparkles, Cake, Croissant } from 'lucide-react';

/*calientes */ 
import capuchino from '../assets/images/caliente/capuchino.jpeg';
import xpreso from '../assets/images/caliente/xpreso.jpeg';
import xpreso6 from '../assets/images/caliente/xpreso6.jpeg';

/*frios */ 
/*especiales */ 
import escaramucera from '../assets/images/Especiales/escaramucera.jpeg';
import vaqueras from '../assets/images/Especiales/vaqueras.png';
import milAmores from '../assets/images/Especiales/mil-amores.png';

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
  'capuchino': capuchino,
  'xpreso': xpreso,
  'xpreso6': xpreso6,
};

const frios = {
  'capuchino': capuchino,
  'xpreso': xpreso,
  'xpreso6': xpreso6,
};

const SPECIAL_IMAGES = {
  'Mil Amores': milAmores,
  'Escaramucera': escaramucera,
  'Vaqueras': vaqueras,
};

const postres = {
  'Crepa': crepa,
  'Pasteles': pasteles,
  'Helado': helado,
  'Rebanada de Zarzamora': rebanada,
};

const snacks = {
  'Snack1': snack1,
  'Snack2': snack2,
  'Snack3': snack3,
  'Snack4': snack4,
  'Snack5': snack5,
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
  hot: ['Espresso', 'Americano', 'Cappuccino', 'Latte', 'Mocha'],
  cold: ['Cold Brew', 'Iced Latte', 'Frappé de café'],
  special: ['Mil Amores', 'Escaramucera', 'Vaqueras'],
  desserts: ['Crepa', 'Pasteles', 'Helado', 'Rebanada de Zarzamora'],
  snacks: ['Snack1', 'Snack2', 'Snack3', 'Snack4', 'Snack5', 'Ensalada'],
};

export default function MenuSection() {
  const [active, setActive] = useState('hot');
  const [ref, inView] = useInView(0.1);
  const [selectedDrink, setSelectedDrink] = useState('Escaramucera');
  const [caliente, setcaliente] = useState('xpreso');
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
            El <span className="text-gold">Menú</span>
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
        ? 'text-gold'
        : ''
    }`}
  >
    <div
      className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
         (active === 'special' && selectedDrink === item) ||
        (active === 'desserts' && selectedDessert === item)
        || (active === 'snacks' && selectedSnack === item)
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