import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Gift, ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);

  return (
    <section ref={ref} className="hero-section">
      {/* Parallax Background */}
      <motion.div style={{ y, position: 'absolute', inset: 0 }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        <div className="hero-overlay" />
      </motion.div>

      {/* Content */}
      <div className="hero-content" style={{ paddingTop: '8rem' }}>
        <div style={{ maxWidth: '640px' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              marginBottom: '1.5rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'white',
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.25)',
              fontFamily: 'var(--font-label)',
            }}
          >
            <span>🌱</span>
            <span>Certified Organic &amp; Sustainably Sourced</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.08,
              color: 'white',
              marginBottom: '1.5rem',
            }}
          >
            Fresh From the Farm,{' '}
            <em style={{ color: '#D4A853', fontStyle: 'italic' }}>
              Straight to Your Table
            </em>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.88)',
              marginBottom: '2.5rem',
            }}
          >
            TerraBloom Organics delivers hand-picked, certified organic produce boxes
            and gourmet herb collections directly to your door — every week, without compromise.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}
          >
            <Link to="/free-box" className="btn btn-gold" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
              <Gift size={20} />
              Get My Free Box
            </Link>
            <Link to="/products" className="btn btn-outline-white" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
              Explore Products
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Trust indicator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.25rem',
              padding: '0.875rem 1.5rem',
              borderRadius: '1rem',
              backgroundColor: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            {[{ text: 'USDA Certified' }, { text: '100% Organic' }].map(({ text }, i) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {i > 0 && <div style={{ width: 1, height: '1.25rem', background: 'rgba(255,255,255,0.3)' }} />}
                <CheckCircle size={18} color="#D4A853" />
                <span style={{ color: 'white', fontSize: '0.875rem', fontWeight: 600, fontFamily: 'var(--font-label)' }}>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.25rem',
          color: 'rgba(255,255,255,0.6)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, y: { repeat: Infinity, duration: 1.8, ease: 'easeInOut' } }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-label)' }}>Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
