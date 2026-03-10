import { Sprout, Recycle, FlaskConical } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Sprout,
    title: 'Farm-to-Door Freshness',
    description: 'Harvested within 24–48 hours. No warehouses, no middlemen — just peak-freshness produce delivered straight to you.',
  },
  {
    icon: Recycle,
    title: 'Zero-Waste Packaging',
    description: '100% compostable, recycled materials. Our eco-conscious packaging and biofuel delivery fleet protect what we love most.',
  },
  {
    icon: FlaskConical,
    title: 'Certified & Lab-Tested',
    description: 'Third-party tested for pesticides and heavy metals. USDA Organic verified, so every bite is as safe as it is delicious.',
  },
];

export default function WhyTerraBloom() {
  return (
    <section className="section" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="label-tag" style={{ backgroundColor: '#D4A853', color: '#1a1a1a', marginBottom: '1rem' }}>
            Why TerraBloom?
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
            style={{ marginTop: '1rem', marginBottom: '1rem' }}
          >
            The Freshest Promise We Make
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="section-subtitle"
          >
            We don't just deliver food — we deliver peace of mind, paired with the vibrant flavors of nature.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="features-grid">
          {features.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card"
              style={{ padding: '2.5rem' }}
            >
              <div style={{
                width: '3.5rem', height: '3.5rem',
                borderRadius: '1rem',
                backgroundColor: '#E8F5E9',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem',
              }}>
                <Icon size={26} color="#1B4D3E" strokeWidth={1.5} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.75rem' }}>
                {title}
              </h3>
              <p style={{ color: '#5C5C5C', lineHeight: 1.75 }}>{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
