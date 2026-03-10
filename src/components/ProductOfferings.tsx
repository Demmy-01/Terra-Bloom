import { Link } from 'react-router-dom';
import { Leaf, CheckCircle, Truck, PauseCircle, Sprout, BookOpen, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'produce',
    badge: 'Best Seller',
    badgeBg: '#1B4D3E',
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=800&q=80',
    price: '$39.99',
    period: '/week',
    note: 'cancel anytime',
    title: 'Weekly Organic Produce Box',
    description: '12–15 seasonal fruits and vegetables sourced from local farms within 100 miles of your doorstep.',
    pills: [
      { icon: Leaf, text: '12–15 items' },
      { icon: CheckCircle, text: 'Certified Organic' },
      { icon: Truck, text: 'Free Delivery' },
      { icon: PauseCircle, text: 'Pause Anytime' },
    ],
  },
  {
    id: 'herbs',
    badge: 'New',
    badgeBg: '#D4A853',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80',
    price: '$24.99',
    period: '/month',
    note: 'flexible plan',
    title: 'Gourmet Herb & Spice Collection',
    description: '8–10 varieties of freshly harvested organic herbs and artisan spice mixes curated by expert growers.',
    pills: [
      { icon: Sprout, text: '8–10 varieties' },
      { icon: Sparkles, text: 'Artisan Blends' },
      { icon: BookOpen, text: 'Recipe Cards' },
      { icon: Globe, text: 'Global Spices' },
    ],
  },
];

export default function ProductOfferings() {
  return (
    <section className="section" style={{ backgroundColor: '#F1F8F4' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="label-tag" style={{ backgroundColor: '#E8F5E9', color: '#1B4D3E', marginBottom: '1rem' }}>
            Our Offerings
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
            style={{ marginTop: '1rem' }}
          >
            Choose Your Perfect Box
          </motion.h2>
        </div>

        {/* Product Cards */}
        <div className="products-grid">
          {products.map(({ id, badge, badgeBg, image, price, period, note, title, description, pills }, i) => (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="card"
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '16rem', overflow: 'hidden' }}>
                <img
                  src={image}
                  alt={title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  loading="lazy"
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.25), transparent)' }} />
                <span style={{
                  position: 'absolute', top: '1rem', left: '1rem',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: badgeBg === '#D4A853' ? '#1a1a1a' : 'white',
                  backgroundColor: badgeBg,
                  fontFamily: 'var(--font-label)',
                }}>
                  {badge}
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: '2rem' }}>
                {/* Price */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', fontWeight: 700, color: '#1B4D3E' }}>
                    {price}
                  </span>
                  <span style={{ color: '#5C5C5C', fontWeight: 500 }}>{period}</span>
                  <span style={{ color: '#5C5C5C', fontSize: '0.875rem' }}>· {note}</span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.75rem' }}>
                  {title}
                </h3>
                <p style={{ color: '#5C5C5C', lineHeight: 1.7, marginBottom: '1.5rem' }}>{description}</p>

                {/* Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                  {pills.map(({ icon: Icon, text }) => (
                    <span key={text} className="feat-pill">
                      <Icon size={13} strokeWidth={2} />
                      {text}
                    </span>
                  ))}
                </div>

                <Link to={`/products#${id}`} className="btn btn-outline-green">
                  Learn More
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
