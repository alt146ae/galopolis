import { useState, useEffect, useRef } from 'react';

export function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // 1. Sanitizamos el valor: si no es finito, volvemos a 0.1
    const safeThreshold = Number.isFinite(threshold) ? threshold : 0.1;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: safeThreshold } // <-- Usamos el valor seguro
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}