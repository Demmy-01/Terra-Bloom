import { useEffect, useRef, useState } from 'react';
import { Users, Smile, Tractor, Clock } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { icon: Users, value: 4200, suffix: '+', label: 'Happy Customers' },
  { icon: Smile, value: 98, suffix: '%', label: 'Satisfaction Rate' },
  { icon: Tractor, value: 12, suffix: '', label: 'Partner Farms' },
  { icon: Clock, value: 48, suffix: 'h', label: 'Farm to Door' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (2000 / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="stats-grid">
        {stats.map(({ icon: Icon, value, suffix, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          >
            <div style={{
              width: '3rem', height: '3rem', borderRadius: '50%',
              background: 'rgba(255,255,255,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '0.75rem',
            }}>
              <Icon size={22} color="white" />
            </div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '0.25rem',
              tabularNums: 'tabular-nums',
            } as React.CSSProperties}>
              <AnimatedCounter target={value} suffix={suffix} />
            </div>
            <div style={{ fontFamily: 'var(--font-label)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
              {label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
