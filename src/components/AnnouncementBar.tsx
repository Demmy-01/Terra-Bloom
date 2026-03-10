import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ width: '100%', backgroundColor: '#D4A853', overflow: 'hidden', position: 'relative', zIndex: 55 }}
        >
          <div style={{
            maxWidth: '1280px', margin: '0 auto',
            padding: '0.6rem 1.5rem',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
          }}>
            <div style={{ flex: 1 }} />
            <p style={{
              textAlign: 'center',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#1a1a1a',
              fontFamily: 'var(--font-label)',
              display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center',
            }}>
              🌿 Free delivery on your first box! Use code{' '}
              <span style={{ fontWeight: 700, background: 'rgba(0,0,0,0.12)', padding: '0 0.375rem', borderRadius: '0.25rem' }}>BLOOM25</span>
              {' '}at checkout.{' '}
              <a href="/free-box" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '2px', color: '#1a1a1a',
              }}>
                Claim Offer <ArrowRight size={13} />
              </a>
            </p>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setDismissed(true)}
                aria-label="Close announcement"
                style={{
                  padding: '0.25rem', borderRadius: '50%',
                  background: 'rgba(0,0,0,0.1)', color: '#1a1a1a',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
