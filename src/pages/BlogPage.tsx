import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 'organic-health-benefits',
    cat: 'NUTRITION & HEALTH',
    catColor: '#1B4D3E',
    catBg: '#E8F5E9',
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=800&q=80',
    title: '5 Surprising Health Benefits of Eating Organic Food You Probably Didn\'t Know',
    excerpt: 'Most people switch to organic food for the obvious reasons — fewer pesticides. But the science reveals far more compelling benefits that go way beyond the label.',
    author: 'Dr. Maya Patel',
    date: 'Feb 10, 2026',
    readTime: '8 min read',
  },
  {
    id: 'sustainable-kitchen-guide',
    cat: 'SUSTAINABLE LIVING',
    catColor: '#1B4D3E',
    catBg: '#E8F5E9',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    title: 'How to Build a Sustainable Kitchen: A Practical Beginner\'s Guide for 2026',
    excerpt: 'Creating a zero-waste, eco-friendly kitchen doesn\'t require a complete renovation. Here\'s how to transform your kitchen into a sustainable sanctuary — step by step.',
    author: 'Elena Marsh',
    date: 'Feb 18, 2026',
    readTime: '9 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#1B4D3E', paddingTop: '9rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>
              The <em style={{ color: '#D4A853' }}>TerraBloom</em> Journal
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem' }}>
              Expert perspectives on organic living, nutrition science, and sustainable food.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2-card grid */}
      <section className="section" style={{ backgroundColor: '#FDF8F3' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {posts.map(({ id, cat, catColor, catBg, image, title, excerpt, author, date, readTime }, i) => (
              <motion.article
                key={id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="card"
                style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: '15rem', overflow: 'hidden', borderRadius: '1rem 1rem 0 0' }}>
                  <img src={image} alt={title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    loading="lazy"
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>

                {/* Body */}
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.3rem 0.75rem', borderRadius: '9999px',
                    backgroundColor: catBg, color: catColor,
                    fontFamily: 'var(--font-label)', fontSize: '0.7rem', fontWeight: 700,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    marginBottom: '1rem', alignSelf: 'flex-start',
                  }}>
                    🌿 {cat}
                  </div>

                  <h2 style={{
                    fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700,
                    color: '#1a1a1a', lineHeight: 1.35, marginBottom: '0.875rem', flex: 1,
                  }}>
                    {title}
                  </h2>

                  <p style={{ color: '#5C5C5C', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{excerpt}</p>

                  {/* Meta */}
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.775rem', color: '#5C5C5C', marginBottom: '1.25rem', flexWrap: 'wrap', fontFamily: 'var(--font-label)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><User size={12} />{author}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={12} />{date}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={12} />{readTime}</span>
                  </div>

                  <Link to={`/blog/${id}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
                      color: '#1B4D3E', fontWeight: 700, fontFamily: 'var(--font-label)',
                      fontSize: '0.875rem', textDecoration: 'none', alignSelf: 'flex-start',
                      transition: 'gap 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.gap = '0.625rem')}
                    onMouseLeave={e => (e.currentTarget.style.gap = '0.375rem')}
                  >
                    Read Article <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
