import { useState, useEffect } from 'react';
import { Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Switching to TerraBloom was the best decision for our family. The produce is incredibly fresh — nothing like supermarket veggies. My kids now actually love eating their greens!",
    name: 'Sarah Mitchell',
    location: 'San Francisco, CA',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
  },
  {
    quote: "The herb collection is absolutely phenomenal. I'm a chef and these herbs have transformed my home cooking. The quality rivals what I source professionally — at a fraction of the cost.",
    name: 'Marcus Chen',
    location: 'Austin, TX',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
  },
  {
    quote: "I've tried three other organic delivery services, and TerraBloom is in a league of its own. The packaging is eco-friendly, delivery is always on time, and produce lasts much longer.",
    name: 'Amara Osei',
    location: 'Atlanta, GA',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 50 : -50 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -50 : 50 }),
  };

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section className="section" style={{ backgroundColor: '#FDF8F3', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="label-tag" style={{ backgroundColor: '#E8F5E9', color: '#1B4D3E', marginBottom: '1rem' }}>
            Customer Love
          </span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>What Our Members Say</h2>
        </div>

        {/* Carousel */}
        <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ overflow: 'hidden' }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '1.5rem',
                  padding: '2.5rem',
                  border: '1px solid rgba(27,77,62,0.1)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                }}>
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={20} fill="#D4A853" color="#D4A853" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    fontStyle: 'italic',
                    color: '#1a1a1a',
                    lineHeight: 1.7,
                    marginBottom: '2rem',
                  }}>
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src={t.avatar} alt={t.name} style={{ width: '3rem', height: '3rem', borderRadius: '50%', objectFit: 'cover' }} />
                    <div>
                      <p style={{ fontWeight: 700, color: '#1a1a1a', fontFamily: 'var(--font-label)', fontSize: '0.95rem' }}>{t.name}</p>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.825rem', color: '#5C5C5C' }}>
                        <MapPin size={13} />{t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          {[-1, 1].map((dir) => (
            <button
              key={dir}
              onClick={() => go(dir)}
              aria-label={dir === -1 ? 'Previous' : 'Next'}
              style={{
                position: 'absolute',
                top: '50%',
                [dir === -1 ? 'left' : 'right']: '-3.5rem',
                transform: 'translateY(-50%)',
                width: '2.75rem', height: '2.75rem',
                borderRadius: '50%',
                backgroundColor: '#1B4D3E',
                color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(27,77,62,0.3)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(-50%)')}
            >
              {dir === -1 ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                height: '0.5rem',
                borderRadius: '9999px',
                width: i === current ? '2rem' : '0.5rem',
                backgroundColor: i === current ? '#1B4D3E' : '#CBD5E0',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
