import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const transparent = !scrolled;

  return (
    <>
      <header
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        style={{ paddingTop: 0 }}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{
              width: '2.25rem', height: '2.25rem',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backgroundColor: scrolled ? '#1B4D3E' : 'rgba(255,255,255,0.2)',
            }}>
              <Leaf size={17} color="white" />
            </div>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: 700, lineHeight: 1 }}>
              <span style={{ color: scrolled ? '#1B4D3E' : '#ffffff' }}>Terra</span>
              <span style={{ color: '#D4A853' }}>Bloom</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '0.25rem', flex: 1, justifyContent: 'center' }}
               className="desktop-nav">
            {navLinks.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-link ${active ? 'active' : transparent ? 'transparent' : 'solid'}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button aria-label="User account" className="icon-btn" style={{
              display: 'none', padding: '0.5rem', borderRadius: '50%',
              color: transparent ? 'white' : '#555',
              background: transparent ? 'rgba(255,255,255,0.12)' : 'transparent',
              transition: 'background 0.2s',
            }} id="user-btn">
              <User size={20} />
            </button>
            <button aria-label="Shopping cart" style={{
              padding: '0.5rem', borderRadius: '50%',
              color: transparent ? 'white' : '#555',
              background: transparent ? 'rgba(255,255,255,0.12)' : 'transparent',
              transition: 'background 0.2s', display: 'flex',
            }}>
              <ShoppingCart size={20} />
            </button>
            <Link to="/free-box" id="get-free-box-btn"
              style={{
                display: 'none',
                padding: '0.625rem 1.375rem',
                borderRadius: '9999px',
                background: scrolled ? '#1B4D3E' : 'rgba(255,255,255,0.18)',
                color: 'white',
                fontFamily: 'var(--font-label)',
                fontWeight: 600,
                fontSize: '0.875rem',
                border: scrolled ? 'none' : '1.5px solid rgba(255,255,255,0.4)',
                transition: 'all 0.25s',
                flexShrink: 0,
              }}
            >
              Get Free Box
            </Link>
            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              id="hamburger-btn"
              style={{
                padding: '0.5rem', borderRadius: '50%',
                color: transparent ? 'white' : '#444',
                background: transparent ? 'rgba(255,255,255,0.12)' : 'transparent',
                display: 'flex',
              }}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* Inline responsive styles */}
        <style>{`
          @media (min-width: 1024px) {
            .desktop-nav { display: flex !important; }
            #user-btn { display: flex !important; }
            #get-free-box-btn { display: flex !important; }
            #hamburger-btn { display: none !important; }
          }
        `}</style>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-menu"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem', height: '4.5rem' }}>
              <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Leaf size={16} color="white" />
                </div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 700 }}>
                  <span style={{ color: 'white' }}>Terra</span>
                  <span style={{ color: '#D4A853' }}>Bloom</span>
                </span>
              </Link>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu"
                style={{ padding: '0.5rem', color: 'rgba(255,255,255,0.8)', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }}>
                <X size={22} />
              </button>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, gap: '1.5rem' }}>
              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                  <Link to={link.href} style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'white', fontWeight: 500 }}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: navLinks.length * 0.08 }} style={{ marginTop: '1rem' }}>
                <Link to="/free-box" className="btn btn-gold" style={{ padding: '0.875rem 2.5rem', fontSize: '1.1rem' }}>
                  Get Free Box
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
