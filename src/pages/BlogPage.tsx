import { motion } from 'framer-motion';

const posts = [
  { cat: 'Nutrition', catBg: '#E8F5E9', catColor: '#1B4D3E', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80', title: 'The 10 Most Nutrient-Dense Vegetables You Should Be Eating', excerpt: 'Not all vegetables are created equal. Discover which seasonal organic picks pack the most nutritional punch for you and your family.', author: 'Dr. Priya Sharma', date: 'March 5, 2026', readTime: '5 min read' },
  { cat: 'Recipes', catBg: '#FFF3D8', catColor: '#B8860B', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80', title: 'Spring Herb Pasta: A 20-Minute Farm-Fresh Delight', excerpt: 'Transform your herb collection into a vibrant, restaurant-quality pasta that celebrates the best of spring flavors.', author: 'Chef Marco Rossi', date: 'February 28, 2026', readTime: '3 min read' },
  { cat: 'Sustainable Living', catBg: '#E3F2FD', catColor: '#1565C0', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80', title: 'How Organic Farming Helps Fight Climate Change', excerpt: 'A deep dive into the science behind organic agriculture and its measurable impact on soil health and carbon sequestration.', author: 'James Okafor', date: 'February 20, 2026', readTime: '7 min read' },
  { cat: 'Recipes', catBg: '#FFF3D8', catColor: '#B8860B', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80', title: 'Winter Root Vegetable Soup: Warm, Hearty & Organic', excerpt: 'This warming, nutrient-packed soup makes the most of your weekly root vegetable delivery. Perfect for cold evenings.', author: 'Chef Marco Rossi', date: 'February 12, 2026', readTime: '4 min read' },
  { cat: 'Nutrition', catBg: '#E8F5E9', catColor: '#1B4D3E', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80', title: 'Why Seasonal Eating is Better for Your Health', excerpt: "Eating with the seasons isn't just trendy — it's scientifically proven to improve nutritional diversity and gut health.", author: 'Dr. Priya Sharma', date: 'February 3, 2026', readTime: '6 min read' },
  { cat: 'Sustainable Living', catBg: '#E3F2FD', catColor: '#1565C0', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80', title: 'Zero-Waste Kitchen: 15 Tips to Reduce Food Waste', excerpt: 'Our sustainability team shares practical habits that can cut your household food waste by up to 60% without sacrificing convenience.', author: 'David Lin', date: 'January 28, 2026', readTime: '8 min read' },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#1B4D3E', paddingTop: '10rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>
              The <em style={{ color: '#D4A853' }}>TerraBloom</em> Blog
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem' }}>Stories, recipes, and insights from farm to table.</p>
          </motion.div>
        </div>
      </section>

      {/* Category bar */}
      <div style={{ borderBottom: '1px solid rgba(27,77,62,0.1)', backgroundColor: 'white', position: 'sticky', top: 0, zIndex: 30 }}>
        <div className="container" style={{ display: 'flex', gap: '0.5rem', padding: '0.75rem 1.5rem', overflowX: 'auto' }}>
          {['All', 'Nutrition', 'Sustainable Living', 'Recipes'].map((cat, i) => (
            <button key={cat} style={{
              padding: '0.5rem 1.125rem', borderRadius: '9999px',
              fontSize: '0.875rem', fontWeight: 500, whiteSpace: 'nowrap',
              fontFamily: 'var(--font-label)',
              backgroundColor: i === 0 ? '#1B4D3E' : '#F1F8F4',
              color: i === 0 ? 'white' : '#5C5C5C',
              border: 'none', cursor: 'pointer', transition: 'all 0.2s',
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles */}
      <section className="section" style={{ backgroundColor: '#FDF8F3' }}>
        <div className="container">
          <div className="blog-grid">
            {posts.map(({ cat, catBg, catColor, image, title, excerpt, author, date, readTime }, i) => (
              <motion.article key={title}
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.12, duration: 0.6 }}
                className="card"
                style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '13rem', overflow: 'hidden' }}>
                  <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} loading="lazy"
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                  <span style={{
                    position: 'absolute', top: '0.75rem', left: '0.75rem',
                    padding: '0.3rem 0.7rem', borderRadius: '9999px',
                    fontSize: '0.75rem', fontWeight: 700,
                    backgroundColor: catBg, color: catColor,
                    fontFamily: 'var(--font-label)',
                  }}>{cat}</span>
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.625rem', lineHeight: 1.35, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}>{title}</h2>
                  <p style={{ color: '#5C5C5C', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1rem', flex: 1 }}>{excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.775rem', color: '#5C5C5C', fontFamily: 'var(--font-label)' }}>
                    <span>{author}</span>
                    <span>{date} · {readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ backgroundColor: '#1B4D3E', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>Get Fresh Stories Weekly</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>Join 12,000+ readers getting seasonal recipes, nutrition tips, and farm updates.</p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <input type="email" placeholder="Your email address" style={{
                flex: 1, padding: '0.875rem 1.25rem', borderRadius: '9999px',
                background: 'rgba(255,255,255,0.12)', color: 'white',
                border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.9rem',
                minWidth: 0,
              }} />
              <button type="submit" className="btn btn-gold">Subscribe</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
