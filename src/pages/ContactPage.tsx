import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+1 (555) 246-8000' },
  { icon: Mail, label: 'Email', value: 'hello@terrabloom.com' },
  { icon: MapPin, label: 'Address', value: '123 Farm Lane, Green Valley, CA 94102' },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri: 8am–6pm · Sat: 9am–2pm' },
];

const quickAnswers = [
  { q: 'When will my box arrive?', a: 'Deliveries happen Tuesday through Saturday. Your scheduled day is set in account preferences.' },
  { q: 'Can I skip a week?', a: 'Yes! Pause or skip up to 48 hours before your next delivery via your account dashboard.' },
  { q: 'How do I change my address?', a: 'Update your delivery address any time in Account → Delivery Settings.' },
  { q: 'How do I cancel?', a: 'You can cancel anytime with no penalties through Account → Subscription → Cancel.' },
];

function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(27,77,62,0.1)' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0', gap: '1rem' }}>
        <span style={{ fontFamily: 'var(--font-label)', fontWeight: 600, fontSize: '0.875rem', color: '#1a1a1a', textAlign: 'left' }}>{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ flexShrink: 0 }}>
          <ChevronDown size={18} color="#1B4D3E" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
            <p style={{ paddingBottom: '1rem', color: '#5C5C5C', fontSize: '0.875rem', lineHeight: 1.7 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '0.875rem 1rem',
  borderRadius: '0.75rem',
  border: '1px solid rgba(27,77,62,0.15)',
  backgroundColor: 'white',
  fontSize: '0.9rem', color: '#1a1a1a',
  fontFamily: 'var(--font-sans)',
  outline: 'none',
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section style={{ backgroundColor: '#1B4D3E', paddingTop: '10rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>
              Get in <em style={{ color: '#D4A853' }}>Touch</em>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem' }}>We love hearing from our community. Reach out any time.</p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#FDF8F3' }}>
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '2rem' }}>Send Us a Message</h2>
              {submitted ? (
                <div style={{ padding: '3rem', borderRadius: '1.5rem', textAlign: 'center', backgroundColor: '#E8F5E9' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✉️</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: '#1B4D3E', marginBottom: '0.75rem' }}>Message Sent!</h3>
                  <p style={{ color: '#5C5C5C' }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1a1a1a', fontFamily: 'var(--font-label)', marginBottom: '0.5rem' }}>Name</label>
                      <input required type="text" placeholder="Your name" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1a1a1a', fontFamily: 'var(--font-label)', marginBottom: '0.5rem' }}>Email</label>
                      <input required type="email" placeholder="you@email.com" style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1a1a1a', fontFamily: 'var(--font-label)', marginBottom: '0.5rem' }}>Phone (optional)</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1a1a1a', fontFamily: 'var(--font-label)', marginBottom: '0.5rem' }}>Subject</label>
                    <select required style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
                      <option value="">Select a subject</option>
                      {['Order issue', 'Subscription change', 'Delivery question', 'Partnership', 'General inquiry'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1a1a1a', fontFamily: 'var(--font-label)', marginBottom: '0.5rem' }}>Message</label>
                    <textarea required rows={5} placeholder="How can we help?" style={{ ...inputStyle, resize: 'none' }} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1rem' }}>Send Message</button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.12 }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '2rem' }}>Contact Information</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', borderRadius: '1rem', backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', backgroundColor: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={17} color="#1B4D3E" />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.7rem', fontWeight: 700, color: '#5C5C5C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>{label}</p>
                      <p style={{ fontWeight: 500, fontSize: '0.9rem', color: '#1a1a1a' }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ borderRadius: '1.5rem', overflow: 'hidden', height: '14rem', marginBottom: '2rem', border: '1px solid rgba(27,77,62,0.1)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d-122.41941!3d37.77493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSan+Francisco!5e0!3m2!1sen!2sus!4v1"
                  style={{ width: '100%', height: '100%', border: 0 }}
                  allowFullScreen loading="lazy" title="TerraBloom Location"
                />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.75rem' }}>Quick Answers</h3>
              {quickAnswers.map(qa => <Accordion key={qa.q} {...qa} />)}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
