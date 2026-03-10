import { Link } from 'react-router-dom';
import { Leaf, Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Our Story', href: '/about#story' },
    { label: 'Blog', href: '/blog' },
  ],
  products: [
    { label: 'Produce Box', href: '/products#produce' },
    { label: 'Herb Collection', href: '/products#herbs' },
    { label: 'Free First Box', href: '/free-box' },
    { label: 'Custom Orders', href: '/contact' },
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ', href: '/products#faq' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

const H4: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h4 style={{ fontFamily: 'var(--font-label)', fontWeight: 600, fontSize: '0.95rem', color: 'white', marginBottom: '1.25rem' }}>
    {children}
  </h4>
);

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li style={{ marginBottom: '0.625rem' }}>
    <Link
      to={href}
      style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', transition: 'color 0.2s' }}
      onMouseEnter={e => (e.currentTarget.style.color = 'white')}
      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
    >
      {children}
    </Link>
  </li>
);

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1B4D3E', color: 'white' }}>
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className="footer-grid" style={{ marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Leaf size={17} color="white" />
              </div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700 }}>
                <span style={{ color: 'white' }}>Terra</span>
                <span style={{ color: '#D4A853' }}>Bloom</span>
              </span>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Connecting local farms to family tables since 2020. Certified organic, sustainably delivered.
            </p>
            {[{ Icon: MapPin, text: '123 Farm Lane, Green Valley, CA 94102' }, { Icon: Phone, text: '+1 (555) 246-8000' }, { Icon: Mail, text: 'hello@terrabloom.com' }].map(({ Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                <Icon size={15} style={{ marginTop: '0.125rem', flexShrink: 0 }} />
                <span>{text}</span>
              </div>
            ))}
            <div style={{ display: 'flex', gap: '0.625rem', marginTop: '1.25rem' }}>
              {[{ Icon: Facebook, label: 'Facebook' }, { Icon: Instagram, label: 'Instagram' }, { Icon: Twitter, label: 'Twitter' }, { Icon: Linkedin, label: 'LinkedIn' }].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} style={{
                  width: '2.25rem', height: '2.25rem',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.75)',
                  transition: 'background 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <H4>Company</H4>
            <ul style={{ listStyle: 'none' }}>{footerLinks.company.map(l => <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>)}</ul>
          </div>
          <div>
            <H4>Products</H4>
            <ul style={{ listStyle: 'none' }}>{footerLinks.products.map(l => <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>)}</ul>
          </div>
          <div>
            <H4>Support</H4>
            <ul style={{ listStyle: 'none' }}>{footerLinks.support.map(l => <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>)}</ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '1.5rem',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem' }}>© 2026 TerraBloom Organics. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
              <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
