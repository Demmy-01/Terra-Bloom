import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Leaf, Gift, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DisclaimerModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('tb_disclaimer_seen')) {
      const timer = setTimeout(() => setOpen(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem('tb_disclaimer_seen', '1');
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={dismiss}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              backgroundColor: 'rgba(15, 40, 30, 0.72)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
            }}
          />

          {/* Centering container — flex keeps the modal perfectly centred */}
          <div
            key="centering"
            style={{
              position: 'fixed', inset: 0, zIndex: 201,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '1rem',
              pointerEvents: 'none',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 24 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              style={{
                width: '100%', maxWidth: '620px',
                maxHeight: '90vh', overflowY: 'auto',
                borderRadius: '1.75rem',
                backgroundColor: '#ffffff',
                boxShadow: '0 40px 100px rgba(0,0,0,0.35)',
                display: 'flex', flexDirection: 'column',
                pointerEvents: 'auto',
              }}
            >
              {/* ── Green header ── */}
              <div style={{
                backgroundColor: '#1B4D3E',
                padding: '2rem 2rem 1.5rem',
                borderRadius: '1.75rem 1.75rem 0 0',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: '-3rem', right: '-3rem', width: '10rem', height: '10rem', borderRadius: '50%', backgroundColor: 'rgba(212,168,83,0.12)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', width: '7rem', height: '7rem', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />

                {/* Close */}
                <button onClick={dismiss} aria-label="Close"
                  style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    width: '2.25rem', height: '2.25rem', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.15)', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: 'none', cursor: 'pointer',
                  }}>
                  <X size={16} />
                </button>

                {/* Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Leaf size={17} color="white" />
                  </div>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700 }}>
                    <span style={{ color: 'white' }}>Terra</span>
                    <span style={{ color: '#D4A853' }}>Bloom</span>
                  </span>
                </div>

                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.375rem 0.875rem', borderRadius: '9999px',
                  backgroundColor: '#D4A853',
                  fontFamily: 'var(--font-label)', fontSize: '0.75rem', fontWeight: 700,
                  color: '#1a1a1a', marginBottom: '0.875rem',
                }}>
                  <Gift size={13} />
                  LIMITED OFFER — NEW MEMBERS ONLY
                </div>

                <h2 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.5rem, 4vw, 2.1rem)',
                  fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: '0.5rem',
                }}>
                  Welcome to TerraBloom!<br />
                  <em style={{ color: '#D4A853' }}>Your First Box is Free.</em>
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  Hand-picked, certified organic produce delivered straight to your door — no credit card required.
                </p>
              </div>

              {/* ── Body ── */}
              <div style={{ padding: '1.75rem 2rem 2rem' }}>
                {/* Disclaimer box */}
                <div style={{
                  padding: '1rem 1.25rem', borderRadius: '1rem',
                  backgroundColor: '#F1F8F4',
                  border: '1px solid rgba(27,77,62,0.1)',
                  marginBottom: '1.5rem',
                }}>
                  <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.725rem', fontWeight: 700, color: '#1B4D3E', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                    🌿 Important Disclaimer
                  </p>
                  <p style={{ fontSize: '0.82rem', color: '#5C5C5C', lineHeight: 1.65 }}>
                    TerraBloom Organics is a demonstration website built for portfolio purposes. All products, prices, subscriptions, and promotions shown are fictional. No real transactions or deliveries occur. By continuing, you acknowledge this is a portfolio project.
                  </p>
                </div>

                {/* Feature list */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.575rem', marginBottom: '1.75rem' }}>
                  {[
                    'USDA certified organic — lab tested for pesticides',
                    '12–15 seasonal fruits & vegetables per box',
                    'Farm-to-door within 48 hours of harvest',
                    'Zero-waste, 100% compostable packaging',
                    'Skip, pause, or cancel anytime — no penalties',
                  ].map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: '#1a1a1a' }}>
                      <CheckCircle size={17} color="#1B4D3E" fill="#E8F5E9" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <Link to="/free-box" onClick={dismiss} className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '0.975rem' }}>
                    🌿 Claim My Free Box Now
                  </Link>
                  <button onClick={dismiss} style={{
                    width: '100%', padding: '0.875rem', borderRadius: '9999px',
                    border: '1.5px solid rgba(27,77,62,0.2)', background: 'transparent',
                    color: '#5C5C5C', fontFamily: 'var(--font-label)', fontWeight: 500,
                    fontSize: '0.875rem', cursor: 'pointer',
                  }}>
                    I'll explore first — remind me later
                  </button>
                </div>

                <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#aaa', marginTop: '1rem', fontFamily: 'var(--font-label)' }}>
                  Use code <strong style={{ color: '#1B4D3E' }}>BLOOM25</strong> at checkout for free delivery.
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
