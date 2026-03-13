import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Leaf, CheckCircle } from 'lucide-react';

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

                <h2 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
                  fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: '0.5rem',
                }}>
                  Important Notice<br />
                  <em style={{ color: '#D4A853' }}>Educational Use Only</em>
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  Please read the following information regarding the purpose and nature of this website.
                </p>
              </div>

              {/* ── Body ── */}
              <div style={{ padding: '1.75rem 2rem 2rem' }}>
                {/* Feature list */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
                  {[
                    'The information provided on this website is intended for educational purposes only. While every effort has been made to ensure the accuracy and reliability of the content, the university does not guarantee its completeness or effectiveness. This website will be deactivated once the course is completed. Some images used on this site have been sourced from the internet and are included for educational and practice purposes only. If you are the copyright owner of any image and believe it has been used without proper attribution, please contact us, and we will make the necessary corrections.',
                    'The views expressed on this site do not necessarily reflect the official policies or positions of the university. The university is not responsible for any errors or omissions or the results obtained from using this information.',
                    'By using this website, you acknowledge and agree to these terms',
                  ].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: '#1a1a1a', lineHeight: 1.6 }}>
                      <CheckCircle size={20} color="#1B4D3E" fill="#E8F5E9" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <button onClick={dismiss} className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '0.975rem' }}>
                    I acknowledge and agree
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
