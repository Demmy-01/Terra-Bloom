import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Leaf, Recycle } from 'lucide-react';

const features = [
  'Hand-picked, certified USDA organic produce',
  '12–15 seasonal fruits & vegetables',
  'Farm to door within 48 hours',
  'Zero-waste, compostable packaging',
  'Cancel or skip anytime — no commitment',
];

const trustBadges = [
  { icon: CheckCircle, label: '4,200+ Subscribers' },
  { icon: Shield, label: '98% Satisfaction' },
  { icon: Leaf, label: 'USDA Organic' },
  { icon: Recycle, label: 'Zero Waste' },
];

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '0.875rem 1rem',
  borderRadius: '0.75rem',
  border: '1px solid rgba(27,77,62,0.15)',
  backgroundColor: 'white',
  fontSize: '0.9rem', color: '#1a1a1a',
  fontFamily: 'var(--font-sans)',
  outline: 'none',
};

export default function FreeBoxPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section style={{ minHeight: '100vh', backgroundColor: '#FDF8F3', paddingTop: '6rem' }}>
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="freebox-grid">
          {/* Left content */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="label-tag" style={{ backgroundColor: '#D4A853', color: '#1a1a1a', marginBottom: '1.25rem' }}>
              Limited Offer — Free First Box
            </span>
            <h1 style={{
              fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#1a1a1a',
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              lineHeight: 1.08, marginTop: '1rem', marginBottom: '1.25rem',
            }}>
              Your First Box{' '}
              <em style={{ color: '#1B4D3E' }}>Absolutely Free</em>
            </h1>
            <p style={{ color: '#5C5C5C', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              Claim your free organic produce box and discover why 4,200+ families make TerraBloom their weekly ritual. Plus, receive our exclusive{' '}
              <strong style={{ color: '#1B4D3E' }}>Free Organic Kitchen Guide</strong>{' '}
              — packed with seasonal recipes and nutrition tips.
            </p>

            {/* Features */}
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {features.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: '#1a1a1a', fontWeight: 500 }}>
                  <CheckCircle size={20} color="#1B4D3E" fill="#E8F5E9" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Trust badges */}
            <div className="trust-grid">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} style={{
                  padding: '1rem 0.75rem', borderRadius: '1rem',
                  backgroundColor: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textAlign: 'center',
                }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={18} color="#1B4D3E" strokeWidth={1.5} />
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1a1a1a', fontFamily: 'var(--font-label)' }}>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div style={{
              backgroundColor: 'white', borderRadius: '2rem',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              boxShadow: '0 20px 60px rgba(27,77,62,0.12)',
              border: '1px solid rgba(27,77,62,0.08)',
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#1B4D3E', marginBottom: '0.75rem' }}>
                    You're In!
                  </h2>
                  <p style={{ color: '#5C5C5C', lineHeight: 1.7 }}>
                    Check your email for your free box confirmation. Expect your first delivery within 5 business days.
                  </p>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.5rem' }}>
                      Claim Your Free Box
                    </h2>
                    <p style={{ fontSize: '0.875rem', color: '#5C5C5C' }}>No credit card required. Cancel anytime.</p>
                  </div>

                  <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-label)', fontSize: '0.8125rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '0.4rem' }}>Full Name</label>
                      <input required type="text" placeholder="Jane Smith" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-label)', fontSize: '0.8125rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '0.4rem' }}>Email Address</label>
                      <input required type="email" placeholder="jane@email.com" style={inputStyle} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'var(--font-label)', fontSize: '0.8125rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '0.4rem' }}>Phone</label>
                        <input type="tel" placeholder="+1 (555)..." style={inputStyle} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'var(--font-label)', fontSize: '0.8125rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '0.4rem' }}>ZIP Code</label>
                        <input required type="text" placeholder="94102" style={inputStyle} />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-label)', fontSize: '0.8125rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '0.4rem' }}>I'm interested in</label>
                      <select defaultValue="produce" style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
                        <option value="produce">Fresh Produce</option>
                        <option value="herbs">Herb Collection</option>
                        <option value="both">Both Boxes</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1rem', marginTop: '0.25rem' }}>
                      🌿 Get My Free Box Now
                    </button>
                    <p style={{ textAlign: 'center', fontSize: '0.775rem', color: '#5C5C5C' }}>
                      By signing up you agree to our Privacy Policy. Unsubscribe anytime.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
