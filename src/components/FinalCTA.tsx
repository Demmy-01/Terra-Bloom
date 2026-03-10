import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section style={{ backgroundColor: '#D4A853', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: '-8rem', right: '-8rem',
        width: '30rem', height: '30rem', borderRadius: '50%',
        backgroundColor: 'rgba(27,77,62,0.08)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-6rem', left: '-6rem',
        width: '22rem', height: '22rem', borderRadius: '50%',
        backgroundColor: 'rgba(27,77,62,0.06)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 5vw, 3.75rem)',
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '1.25rem',
            lineHeight: 1.1,
          }}
        >
          Ready to Eat Clean &amp; Live Green?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ fontSize: '1.1rem', color: 'rgba(26,26,26,0.75)', marginBottom: '2.5rem', maxWidth: '36rem', margin: '0 auto 2.5rem' }}
        >
          Join 4,200+ families already enjoying farm-fresh organic produce every week.
          Get your first box FREE — no strings attached!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/free-box"
            className="btn btn-primary"
            style={{ padding: '1.1rem 2.75rem', fontSize: '1.05rem' }}
          >
            Get My Free Box Now
            <ArrowRight size={22} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
