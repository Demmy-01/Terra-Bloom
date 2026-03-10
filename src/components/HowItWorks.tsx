import { ShoppingBag, Sun, Package, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  { icon: ShoppingBag, title: 'Choose Your Box', description: 'Pick from our weekly produce or monthly herb collection based on your household needs.' },
  { icon: Sun, title: 'We Harvest Fresh', description: 'Our partner farms harvest your order within 24 hours of your delivery date.' },
  { icon: Package, title: 'Packed with Care', description: 'Hand-packed in compostable, insulated eco-boxes to lock in freshness.' },
  { icon: Home, title: 'Delivered to You', description: 'Arrives fresh at your doorstep, ready to cook into something delicious.' },
];

export default function HowItWorks() {
  return (
    <section className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="label-tag" style={{ backgroundColor: '#E8F5E9', color: '#1B4D3E', marginBottom: '1rem' }}>
            How It Works
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
            style={{ marginTop: '1rem' }}
          >
            Fresh Produce in 4 Easy Steps
          </motion.h2>
        </div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Connector line (desktop) */}
          <style>{`
            @media (min-width: 1024px) {
              .step-line-bg { display: block !important; }
              .step-line-fg { display: block !important; }
            }
          `}</style>
          <div className="step-line-bg" style={{
            display: 'none',
            position: 'absolute', top: '2.5rem', left: '12%', right: '12%',
            height: '2px', backgroundColor: '#E8F5E9', zIndex: 0,
          }} />
          <motion.div
            className="step-line-fg"
            initial={{ width: 0 }}
            whileInView={{ width: '76%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            style={{
              display: 'none',
              position: 'absolute', top: '2.5rem', left: '12%',
              height: '2px', backgroundColor: '#1B4D3E', zIndex: 1,
            }}
          />

          <div className="steps-grid">
            {steps.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.18, duration: 0.6 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 2 }}
              >
                <div style={{
                  position: 'relative',
                  width: '5rem', height: '5rem',
                  borderRadius: '50%',
                  backgroundColor: '#1B4D3E',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.25rem',
                  boxShadow: '0 8px 24px rgba(27,77,62,0.25)',
                }}>
                  <Icon size={28} color="white" strokeWidth={1.5} />
                  <span style={{
                    position: 'absolute', top: '-0.5rem', right: '-0.5rem',
                    width: '1.5rem', height: '1.5rem',
                    borderRadius: '50%',
                    backgroundColor: '#D4A853',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.7rem', fontWeight: 700, color: '#1a1a1a',
                    fontFamily: 'var(--font-label)',
                  }}>
                    {i + 1}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.75rem' }}>
                  {title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#5C5C5C', lineHeight: 1.7 }}>{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
