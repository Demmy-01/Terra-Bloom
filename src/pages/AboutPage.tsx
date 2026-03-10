import { motion } from 'framer-motion';
import { CheckCircle, Heart, Leaf, Sprout } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

const timeline = [
  { year: '2020', event: 'TerraBloom founded in Green Valley, CA with 3 partner farms and 50 subscribers.' },
  { year: '2021', event: 'Expanded to 150 subscribers. USDA Organic certification received.' },
  { year: '2022', event: 'Launched the Gourmet Herb Collection. Reached 500 happy families.' },
  { year: '2023', event: 'Introduced biofuel delivery fleet. 8 partner farms onboarded.' },
  { year: '2024', event: '2,000+ subscribers. Launched zero-waste packaging initiative.' },
  { year: '2025', event: 'Expanded to 12 partner farms. 4,200+ families served across 8 states.' },
];

const values = [
  { icon: Leaf, title: 'Mission', text: 'To make farm-fresh, certified organic produce accessible to every household — delivered with care and minimal environmental impact.' },
  { icon: Heart, title: 'Vision', text: 'A world where families thrive on clean food, local farmers prosper, and our planet flourishes through sustainable agriculture.' },
  { icon: CheckCircle, title: 'Values', text: 'Transparency. Sustainability. Community. Every box we deliver is a commitment to these principles and to the health of future generations.' },
];

const team = [
  { name: 'Ige Priscilla', role: 'Co-Founder & CEO', img: 'https://randomuser.me/api/portraits/women/23.jpg' },
  { name: 'James Okafor', role: 'Head of Sourcing', img: 'https://randomuser.me/api/portraits/men/54.jpg' },
  { name: 'Priya Sharma', role: 'Chief Operations Officer', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { name: 'David Lin', role: 'Head of Sustainability', img: 'https://randomuser.me/api/portraits/men/41.jpg' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        position: 'relative', minHeight: '55vh',
        display: 'flex', alignItems: 'center',
        backgroundColor: '#1B4D3E', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15,
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '8rem', paddingBottom: '5rem', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="label-tag" style={{ backgroundColor: '#D4A853', color: '#1a1a1a', marginBottom: '1.5rem' }}>
              <Sprout size={14} style={{ display: 'inline', marginRight: 6 }} /> Our Story
            </span>
            <h1 style={{
              fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700, color: 'white', lineHeight: 1.1, marginTop: '1rem', marginBottom: '1.25rem',
            }}>
              Growing Good Food &amp;<br />
              <em style={{ color: '#D4A853' }}>Better Communities</em>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '38rem', margin: '0 auto', lineHeight: 1.7 }}>
              Since 2020, we've been bridging the gap between local organic farms and the families who love them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="section" style={{ backgroundColor: '#FDF8F3' }}>
        <div className="container">
          <div className="story-grid">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80" alt="Organic farm"
                style={{ width: '100%', height: '22rem', objectFit: 'cover', borderRadius: '1.5rem', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '1.25rem' }}>How It All Began</h2>
              {['TerraBloom was born out of frustration. Our founders, Elena and James, were tired of supermarket produce that looked perfect but tasted like nothing. After visiting a local organic farm, they realized the problem: grocery stores prioritize shelf life over flavor.',
                'The solution was simple — bridge the gap directly. Starting with just 3 partner farms and 50 subscribers, TerraBloom has grown into a thriving community of 4,200+ families across 8 states.',
                "Every box is a promise: the freshest organic produce, ethically sourced, delivered with love."
              ].map((p, i) => (
                <p key={i} style={{ color: '#5C5C5C', lineHeight: 1.75, fontSize: '1.0625rem', marginBottom: '1rem' }}>{p}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="section" style={{ backgroundColor: '#F1F8F4' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 700, color: '#1a1a1a' }}>Our Foundation</h2>
          </div>
          <div className="values-grid">
            {values.map(({ icon: Icon, title, text }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }}
                style={{ backgroundColor: 'white', borderRadius: '1.5rem', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '1rem', backgroundColor: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Icon size={24} color="#1B4D3E" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: '#5C5C5C', lineHeight: 1.7, fontSize: '0.95rem' }}>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 700, color: '#1a1a1a' }}>Our Journey</h2>
          </div>
          <div className="timeline">
            {timeline.map(({ year, event }, i) => (
              <motion.div key={year} className="timeline-item"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <div className="timeline-dot">{year.slice(2)}</div>
                <div style={{ paddingTop: '0.5rem', paddingBottom: '1rem' }}>
                  <p style={{ fontFamily: 'var(--font-label)', fontWeight: 700, fontSize: '0.8rem', color: '#D4A853', marginBottom: '0.375rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{year}</p>
                  <p style={{ color: '#5C5C5C', lineHeight: 1.7 }}>{event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section" style={{ backgroundColor: '#FDF8F3' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 700, color: '#1a1a1a' }}>Meet the Team</h2>
          </div>
          <div className="team-grid">
            {team.map(({ name, role, img }, i) => (
              <motion.div key={name}
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }}
                style={{ textAlign: 'center' }}>
                <div style={{ width: '10rem', height: '10rem', borderRadius: '1.5rem', overflow: 'hidden', margin: '0 auto 1rem', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
                  <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.25rem' }}>{name}</h4>
                <p style={{ fontSize: '0.875rem', color: '#5C5C5C', fontFamily: 'var(--font-label)' }}>{role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
