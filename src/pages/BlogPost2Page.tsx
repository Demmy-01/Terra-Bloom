import { Link } from 'react-router-dom';
import { User, Calendar, Clock, ArrowRight } from 'lucide-react';

// ─── Shared sidebar (Elena Marsh version) ────────────────────────────────────
function Sidebar({ otherTitle, otherId }: { otherTitle: string; otherId: string }) {
  return (
    <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', minWidth: 0 }}>
      {/* About author */}
      <div style={{ backgroundColor: 'white', borderRadius: '1.25rem', padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid rgba(27,77,62,0.08)' }}>
        <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.75rem', fontWeight: 700, color: '#1B4D3E', marginBottom: '1rem' }}>✍️ About the Author</p>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
          <img src="https://randomuser.me/api/portraits/women/23.jpg" alt="Elena Marsh"
            style={{ width: '3.25rem', height: '3.25rem', borderRadius: '0.75rem', objectFit: 'cover', flexShrink: 0 }} />
          <div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: '#1a1a1a' }}>Elena Marsh</p>
            <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.775rem', color: '#1B4D3E', fontWeight: 600, marginBottom: '0.5rem' }}>Co-Founder & CEO</p>
            <p style={{ fontSize: '0.825rem', color: '#5C5C5C', lineHeight: 1.6 }}>
              Third-generation farmer and Stanford MBA. Elena writes about sustainable food systems, organic farming, and the future of how we eat. She grows her own vegetables in her Portland backyard.
            </p>
          </div>
        </div>
      </div>

      {/* Free box */}
      <div style={{ backgroundColor: 'white', borderRadius: '1.25rem', padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid rgba(27,77,62,0.08)' }}>
        <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.75rem', fontWeight: 700, color: '#1B4D3E', marginBottom: '0.75rem' }}>🎁 Get the Organic Kitchen Guide</p>
        <p style={{ fontSize: '0.85rem', color: '#5C5C5C', lineHeight: 1.6, marginBottom: '1rem' }}>
          30 seasonal recipes + zero-waste tips — free with your first TerraBloom box. No credit card needed.
        </p>
        <Link to="/free-box" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.8rem', fontSize: '0.875rem' }}>
          Get It Free →
        </Link>
      </div>

      {/* More articles */}
      <div style={{ backgroundColor: 'white', borderRadius: '1.25rem', padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid rgba(27,77,62,0.08)' }}>
        <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.75rem', fontWeight: 700, color: '#1B4D3E', marginBottom: '1rem' }}>📚 More Articles</p>
        <Link to={`/blog/${otherId}`}
          style={{ display: 'flex', alignItems: 'flex-start', gap: '0.375rem', color: '#1B4D3E', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', marginBottom: '0.75rem', lineHeight: 1.4 }}>
          <ArrowRight size={13} style={{ flexShrink: 0, marginTop: '0.15rem' }} />
          {otherTitle}
        </Link>
        <Link to="/blog" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#5C5C5C', fontSize: '0.875rem', textDecoration: 'none' }}>
          <ArrowRight size={13} style={{ flexShrink: 0 }} />
          View All Articles →
        </Link>
      </div>

      {/* Newsletter */}
      <div style={{ backgroundColor: 'white', borderRadius: '1.25rem', padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid rgba(27,77,62,0.08)' }}>
        <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.75rem', fontWeight: 700, color: '#1B4D3E', marginBottom: '0.5rem' }}>📰 Newsletter</p>
        <p style={{ fontSize: '0.825rem', color: '#5C5C5C', marginBottom: '1rem', lineHeight: 1.6 }}>
          Weekly organic living tips, recipes, and exclusive offers.
        </p>
        <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '0.7rem 0.875rem', borderRadius: '0.625rem', border: '1px solid rgba(27,77,62,0.15)', fontSize: '0.85rem', marginBottom: '0.625rem', fontFamily: 'var(--font-sans)', outline: 'none', boxSizing: 'border-box' }} />
        <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem', fontSize: '0.875rem' }}>Subscribe</button>
      </div>
    </aside>
  );
}

const tags = ['sustainable kitchen', 'zero waste', 'organic living', 'eco-friendly', 'food waste reduction'];

const blockquoteStyle: React.CSSProperties = {
  borderLeft: '3px solid #1B4D3E',
  backgroundColor: '#F1F8F4',
  padding: '1rem 1.25rem',
  borderRadius: '0 0.75rem 0.75rem 0',
  margin: '1.5rem 0',
};

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: 700,
  color: '#1a1a1a', marginTop: '2.25rem', marginBottom: '0.875rem', lineHeight: 1.25,
};

const pStyle: React.CSSProperties = {
  color: '#3a3a3a', lineHeight: 1.8, marginBottom: '1.1rem', fontSize: '1rem',
};

const ulStyle: React.CSSProperties = {
  paddingLeft: '1.25rem', color: '#3a3a3a', lineHeight: 1.8, marginBottom: '1.1rem',
};

export default function BlogPost2Page() {
  return (
    <section style={{ backgroundColor: '#FDF8F3', paddingTop: '6rem' }}>
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem', maxWidth: '1040px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 280px', gap: '2rem', alignItems: 'start' }}>
          <article>
            {/* Category */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.3rem 0.875rem', borderRadius: '9999px',
              backgroundColor: '#E8F5E9', color: '#1B4D3E',
              fontFamily: 'var(--font-label)', fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1.25rem',
            }}>
              🌿 SUSTAINABLE LIVING
            </div>

            {/* Title */}
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              How to Build a Sustainable Kitchen: A Practical Beginner's Guide for 2026
            </h1>

            {/* Meta */}
            <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.85rem', color: '#5C5C5C', marginBottom: '1.25rem', flexWrap: 'wrap', fontFamily: 'var(--font-label)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><User size={14} /> Elena Marsh, Co-Founder & CEO</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Calendar size={14} /> February 18, 2026</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Clock size={14} /> 9 min read</span>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
              {tags.map(t => (
                <span key={t} style={{ padding: '0.3rem 0.75rem', borderRadius: '9999px', backgroundColor: 'white', border: '1px solid rgba(27,77,62,0.15)', fontSize: '0.775rem', color: '#5C5C5C', fontFamily: 'var(--font-label)' }}>{t}</span>
              ))}
            </div>

            {/* Hero image */}
            <div style={{ borderRadius: '1.25rem', overflow: 'hidden', marginBottom: '2rem' }}>
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80"
                alt="A modern, sustainable kitchen with natural light and wooden elements"
                style={{ width: '100%', height: '22rem', objectFit: 'cover' }} />
            </div>

            {/* Intro */}
            <p style={pStyle}>
              The kitchen is the beating heart of every home. It's where nourishment is created, where families gather, and — whether we acknowledge it or not — where a significant portion of our household's environmental impact is generated. The good news? Transforming your kitchen into a more sustainable space doesn't require tearing down walls or spending thousands of dollars. It requires intention, and a few smart swaps made consistently over time.
            </p>
            <p style={pStyle}>
              I grew up in my grandmother's kitchen in rural Oregon, where nothing was wasted, everything was seasonal, and the compost bin was treated with the same reverence as the pantry. That spirit is exactly what led me to co-found TerraBloom Organics — and it's the spirit this guide is written in. Let's break it down into practical, actionable steps you can start today.
            </p>

            <h2 style={h2Style}>Step 1: Audit Your Food Sources and Shift Toward Organic and Local</h2>
            <p style={pStyle}>
              The most impactful thing you can do for a sustainable kitchen doesn't involve a single product purchase — it involves changing where your food comes from. Conventional industrial food production accounts for roughly 26% of global greenhouse gas emissions. The transportation, synthetic fertilizers, land clearing, and food waste involved in getting conventional produce from a factory farm to your supermarket shelf has an enormous environmental toll.
            </p>
            <p style={pStyle}>
              Eating seasonally and locally — ideally from certified organic sources — dramatically reduces that footprint. Organic farming sequesters more carbon in the soil, uses no synthetic nitrogen fertilizers (a major source of greenhouse gas), and promotes biodiversity instead of destroying it.
            </p>
            <p style={{ ...pStyle, fontWeight: 600, color: '#1a1a1a' }}>Practical starting points:</p>
            <ul style={ulStyle}>
              <li>Identify your local farmers' markets and visit at least once a month</li>
              <li>Subscribe to an organic produce delivery service (like TerraBloom!) to automate the habit</li>
              <li>Start with the "Dirty Dozen" — the 12 most pesticide-contaminated produce items — and go organic on those first</li>
              <li>Visit the Environmental Working Group (EWG) website each year for the updated Dirty Dozen list</li>
            </ul>

            <h2 style={h2Style}>Step 2: Eliminate Single-Use Plastics From Your Kitchen</h2>
            <p style={pStyle}>
              The average American household uses over 500 single-use plastic bags per year, not counting plastic wrap, takeout containers, and packaging that gets discarded from grocery shopping. Most of this plastic is not recyclable in standard curbside programs — meaning the vast majority ends up in landfills or, worse, in our waterways.
            </p>
            <p style={pStyle}>The sustainable kitchen operates almost entirely without single-use plastics. Here are the key swaps, in order of impact:</p>
            <p style={pStyle}><strong style={{ color: '#1a1a1a' }}>Reusable produce bags:</strong> Lightweight mesh or muslin bags replace plastic produce bags completely. They're washable, durable, and pay for themselves in weeks.</p>
            <p style={pStyle}><strong style={{ color: '#1a1a1a' }}>Beeswax wraps:</strong> These reusable cloth wraps coated in beeswax, tree resin, and jojoba oil can replace plastic wrap for covering bowls, wrapping cheese, and storing cut produce. They last up to a year with proper care.</p>
            <p style={pStyle}><strong style={{ color: '#1a1a1a' }}>Glass containers:</strong> Replace plastic storage containers with glass. Glass doesn't leach chemicals into your food, lasts indefinitely, and is 100% recyclable. Brands like Pyrex and Weck offer beautiful, long-lasting options.</p>
            <p style={pStyle}><strong style={{ color: '#1a1a1a' }}>Silicone food bags:</strong> For items where a container doesn't work well (freezing meat, storing snacks on-the-go), high-quality silicone bags like Stasher are an excellent durable alternative to zip-lock bags.</p>
            <div style={blockquoteStyle}>
              <p style={{ fontStyle: 'italic', color: '#3a3a3a', lineHeight: 1.7, margin: 0 }}>
                "We don't need a handful of people doing zero-waste perfectly. We need millions of people doing it imperfectly."<br />
                <strong>— Anne-Marie Bonneau, Zero-Waste Chef</strong>
              </p>
            </div>

            <h2 style={h2Style}>Step 3: Master the Art of Food Storage to Reduce Waste</h2>
            <p style={pStyle}>
              Here's a figure that should stop you cold: the average American family throws away $1,500 to $2,000 worth of food every year. Globally, food waste is responsible for 8–10% of greenhouse gas emissions. If food waste were a country, it would be the third largest emitter in the world, behind the United States and China.
            </p>
            <p style={pStyle}>The sustainable kitchen is a waste-minimizing kitchen. Most food waste happens not because of bad intentions, but because of poor storage practices. Here's what the science of food preservation tells us:</p>
            <ul style={ulStyle}>
              <li><strong>Herbs:</strong> Keep fresh herbs like cilantro and parsley in a glass of water in the fridge (like a bouquet). They'll last 1–2 weeks instead of 2–3 days in a bag.</li>
              <li><strong>Leafy greens:</strong> Wash and spin dry, then store in a container lined with a damp paper towel. They'll stay crisp for up to 10 days.</li>
              <li><strong>Fruit:</strong> Never store apples with other produce — they emit ethylene gas that accelerates ripening in everything around them.</li>
              <li><strong>Root vegetables:</strong> Store potatoes, onions, and garlic in a cool, dark, dry place — not the refrigerator, where they'll become starchy and sweet.</li>
              <li><strong>Freeze proactively:</strong> If you notice produce starting to turn, freeze it immediately for later use in soups, smoothies, or stocks.</li>
            </ul>

            <h2 style={h2Style}>Step 4: Compost What You Can't Use</h2>
            <p style={pStyle}>
              Even the most efficient sustainable kitchen generates some food scraps — onion skins, eggshells, coffee grounds, citrus peels. These scraps should never go into a landfill, where they'd decompose anaerobically and release methane (a greenhouse gas 25 times more potent than CO₂). Instead, they should be composted.
            </p>
            <p style={pStyle}>
              If you have outdoor space, a simple compost bin or pile is easy to set up and can save you money on garden fertilizer. If you're in an apartment, countertop composting bins with charcoal filters keep things odor-free, and many cities now offer curbside composting pickup services.
            </p>
            <p style={pStyle}>
              The scraps you compost from a TerraBloom produce box, for example, go back into the soil cycle — building healthy soil for the next crop. It's a beautiful closed loop that costs almost nothing to participate in.
            </p>

            <h2 style={h2Style}>Step 5: Rethink Your Cooking Energy Use</h2>
            <p style={pStyle}>
              How you cook is almost as important as what you cook when it comes to kitchen sustainability. If your home still runs on a gas stove, it might surprise you to know that gas flames can release nitrogen dioxide, carbon monoxide, and formaldehyde into your home — at levels sometimes exceeding EPA outdoor air quality standards.
            </p>
            <p style={pStyle}>
              Induction cooktops — now available for as little as $60 for a single-burner unit — are significantly more energy-efficient, emit no combustion byproducts, and heat food faster and more precisely than gas. Other energy-conscious cooking habits include using lids on pots to retain heat, matching pot size to burner size, using a pressure cooker (which reduces cooking time by 70%), and batch cooking once or twice a week.
            </p>

            <h2 style={h2Style}>Building Your Sustainable Kitchen — One Step at a Time</h2>
            <p style={pStyle}>
              The most important thing to remember is that a sustainable kitchen is not a destination — it's an ongoing practice. You don't need to implement all of these changes overnight. Start with one area that resonates most with you, build the habit, then add another layer when you're ready.
            </p>
            <p style={pStyle}>
              In our experience at TerraBloom, the single change that unlocks the most downstream sustainable behaviors is simply starting to eat more organic, local produce. When you connect with where your food comes from — when you open a box of vegetables harvested 48 hours ago and smell the difference — you start to care about the whole system in a new way.
            </p>
            <p style={{ ...pStyle, fontStyle: 'italic', color: '#1B4D3E', fontWeight: 500 }}>
              That caring is where every sustainable kitchen story begins.
            </p>

            {/* Tips box */}
            <div style={{ backgroundColor: '#F1F8F4', borderRadius: '1rem', padding: '1.5rem', marginTop: '2rem', border: '1px solid rgba(27,77,62,0.1)' }}>
              <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.775rem', fontWeight: 700, color: '#1B4D3E', marginBottom: '0.75rem' }}>🌿 Quick Sustainability Tips</p>
              <ul style={{ ...ulStyle, marginBottom: 0 }}>
                <li>♻️ Switch to glass storage containers this week</li>
                <li>🌿 Start composting food scraps — even just in a bowl</li>
                <li>🥦 Eat the Dirty Dozen organically first</li>
                <li>📦 Try an organic delivery box — less packaging, more freshness</li>
              </ul>
            </div>

            {/* CTA */}
            <div style={{ marginTop: '2.5rem', textAlign: 'center', backgroundColor: '#1B4D3E', borderRadius: '1.25rem', padding: '2rem' }}>
              <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.75rem', fontWeight: 700, color: '#D4A853', marginBottom: '0.5rem' }}>🎁 GET THE ORGANIC KITCHEN GUIDE</p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                30 seasonal recipes + zero-waste tips — free with your first TerraBloom box. No credit card needed.
              </p>
              <Link to="/free-box" className="btn btn-gold" style={{ padding: '0.875rem 2rem', fontSize: '0.9rem' }}>Get It Free →</Link>
            </div>
          </article>

          {/* Sidebar */}
          <Sidebar
            otherTitle="5 Surprising Health Benefits of Eating Organic Food →"
            otherId="organic-health-benefits"
          />
        </div>
      </div>
    </section>
  );
}
