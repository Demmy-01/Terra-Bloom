import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, CheckCircle, Truck, PauseCircle, Sprout, BookOpen, Globe, Sparkles, ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'When will my box arrive?', a: 'Deliveries are made weekly between Tuesday and Saturday. You can set your preferred delivery day in your account settings after subscribing.' },
  { q: 'Can I skip a week?', a: 'Absolutely! You can skip, pause, or modify your subscription anytime up to 48 hours before your next delivery date.' },
  { q: 'What if produce arrives damaged?', a: 'We have a 100% freshness guarantee. If any produce arrives damaged, contact us within 24 hours and we\'ll issue a full credit.' },
  { q: 'Can I customize what I receive?', a: 'Yes! With our preference settings, you can list items you don\'t enjoy and we\'ll substitute them with your favorites.' },
  { q: 'Is the packaging really eco-friendly?', a: 'Every component of our packaging is 100% compostable or recyclable — from the box to the ice packs.' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(27,77,62,0.1)' }}>
      <button onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 0', gap: '1rem' }}>
        <span style={{ fontFamily: 'var(--font-label)', fontWeight: 600, color: '#1a1a1a', textAlign: 'left' }}>{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ flexShrink: 0 }}>
          <ChevronDown size={20} color="#1B4D3E" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
            <p style={{ paddingBottom: '1.25rem', color: '#5C5C5C', lineHeight: 1.7 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#1B4D3E', paddingTop: '10rem', paddingBottom: '5rem', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
              Our <em style={{ color: '#D4A853' }}>Products</em>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '36rem', margin: '0 auto' }}>
              Fresh, certified organic, delivered to your door. Choose the subscription that fits your lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products detail */}
      <section className="section" style={{ backgroundColor: '#FDF8F3' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {/* Produce Box */}
          <motion.div id="produce" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="products-detail-grid">
            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', height: '22rem', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
              <img src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=800&q=80" alt="Organic produce box"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <span className="label-tag" style={{ backgroundColor: '#1B4D3E', color: 'white', marginBottom: '1rem' }}>Best Seller</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginTop: '0.75rem', marginBottom: '0.75rem' }}>Weekly Organic Produce Box</h2>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: '#1B4D3E' }}>$39.99</span>
                <span style={{ color: '#5C5C5C' }}>/week · cancel anytime</span>
              </div>
              <p style={{ color: '#5C5C5C', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Our flagship box delivers 12–15 seasonal fruits and vegetables, sourced from partner farms within 100 miles. Every box changes with the seasons, keeping your meals exciting and nutritionally diverse.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {[{ icon: Leaf, text: '12–15 items' }, { icon: CheckCircle, text: 'USDA Certified' }, { icon: Truck, text: 'Free Delivery' }, { icon: PauseCircle, text: 'Pause Anytime' }].map(({ icon: Icon, text }) => (
                  <span key={text} className="feat-pill"><Icon size={13} strokeWidth={2} />{text}</span>
                ))}
              </div>
              <Link to="/free-box" className="btn btn-primary">Start with a Free Box</Link>
            </div>
          </motion.div>

          <div style={{ height: '1px', backgroundColor: 'rgba(27,77,62,0.1)' }} />

          {/* Herb Collection */}
          <motion.div id="herbs" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="products-detail-grid">
            <div style={{ order: 2 }}>
              <span className="label-tag" style={{ backgroundColor: '#D4A853', color: '#1a1a1a', marginBottom: '1rem' }}>New</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginTop: '0.75rem', marginBottom: '0.75rem' }}>Gourmet Herb & Spice Collection</h2>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: '#1B4D3E' }}>$24.99</span>
                <span style={{ color: '#5C5C5C' }}>/month · flexible plan</span>
              </div>
              <p style={{ color: '#5C5C5C', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                A curated selection of 8–10 freshly harvested organic herbs and artisan spice mixes, paired with exclusive recipe cards from our culinary team. Elevate every meal with world-class flavors.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {[{ icon: Sprout, text: '8–10 varieties' }, { icon: Sparkles, text: 'Artisan Blends' }, { icon: BookOpen, text: 'Recipe Cards' }, { icon: Globe, text: 'Global Spices' }].map(({ icon: Icon, text }) => (
                  <span key={text} className="feat-pill"><Icon size={13} strokeWidth={2} />{text}</span>
                ))}
              </div>
              <Link to="/free-box" className="btn btn-primary">Get Started</Link>
            </div>
            <div style={{ order: 1, borderRadius: '1.5rem', overflow: 'hidden', height: '22rem', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
              <img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80" alt="Herb collection"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section" style={{ backgroundColor: '#F1F8F4' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', textAlign: 'center', marginBottom: '2.5rem' }}>Compare Plans</h2>
          <div style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th style={{ textAlign: 'center' }}>Produce Box</th>
                  <th style={{ textAlign: 'center' }}>Herb Collection</th>
                </tr>
              </thead>
              <tbody>
                {[['Price', '$39.99/week', '$24.99/month'], ['Items per box', '12–15', '8–10'], ['Frequency', 'Weekly', 'Monthly'], ['Free delivery', '✓', '✓'], ['Recipe cards', '—', '✓'], ['Pause/Skip', '✓', '✓'], ['USDA Certified', '✓', '✓'], ['Customizable', '✓', 'Coming soon']].map(([f, p, h]) => (
                  <tr key={f}><td style={{ fontWeight: 500, color: '#1a1a1a' }}>{f}</td><td>{p}</td><td>{h}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section" style={{ backgroundColor: 'white' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', fontWeight: 700, color: '#1a1a1a', textAlign: 'center', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          {faqs.map(f => <FAQItem key={f.q} {...f} />)}
        </div>
      </section>
    </>
  );
}
