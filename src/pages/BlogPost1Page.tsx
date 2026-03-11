import { Link } from 'react-router-dom';
import { User, Calendar, Clock, ArrowRight } from 'lucide-react';

// ─── Shared sidebar ─────────────────────────────────────────────────────────
function Sidebar({ otherTitle, otherId }: { otherTitle: string; otherId: string }) {
  return (
    <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', minWidth: 0 }}>
      {/* About author */}
      <div style={{ backgroundColor: 'white', borderRadius: '1.25rem', padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid rgba(27,77,62,0.08)' }}>
        <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.75rem', fontWeight: 700, color: '#1B4D3E', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          🌿 About the Author
        </p>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
          <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Dr. Maya Patel"
            style={{ width: '3.25rem', height: '3.25rem', borderRadius: '0.75rem', objectFit: 'cover', flexShrink: 0 }} />
          <div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: '#1a1a1a' }}>Dr. Maya Patel, PhD</p>
            <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.775rem', color: '#1B4D3E', fontWeight: 600, marginBottom: '0.5rem' }}>Head of Nutrition & Quality</p>
            <p style={{ fontSize: '0.825rem', color: '#5C5C5C', lineHeight: 1.6 }}>
              Nutritional scientist with a PhD from UC Davis. 12 years studying organic food quality and human health outcomes. Certified Integrative Nutritionist.
            </p>
          </div>
        </div>
      </div>

      {/* Free box CTA */}
      <div style={{ backgroundColor: 'white', borderRadius: '1.25rem', padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid rgba(27,77,62,0.08)' }}>
        <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.75rem', fontWeight: 700, color: '#1B4D3E', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          🎁 Get Your Free Box
        </p>
        <p style={{ fontSize: '0.85rem', color: '#5C5C5C', lineHeight: 1.6, marginBottom: '1rem' }}>
          Try TerraBloom today — your first certified organic produce box is completely free. No card required.
        </p>
        <Link to="/free-box" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.8rem', fontSize: '0.875rem' }}>
          Claim Free Box →
        </Link>
      </div>

      {/* More articles */}
      <div style={{ backgroundColor: 'white', borderRadius: '1.25rem', padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid rgba(27,77,62,0.08)' }}>
        <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.75rem', fontWeight: 700, color: '#1B4D3E', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          📚 More Articles
        </p>
        <Link to={`/blog/${otherId}`}
          style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#1B4D3E', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', marginBottom: '0.75rem', lineHeight: 1.4 }}>
          <ArrowRight size={13} style={{ flexShrink: 0 }} />
          {otherTitle} →
        </Link>
        <Link to="/blog" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#5C5C5C', fontSize: '0.875rem', textDecoration: 'none' }}>
          <ArrowRight size={13} style={{ flexShrink: 0 }} />
          View All Articles →
        </Link>
      </div>

      {/* Newsletter */}
      <div style={{ backgroundColor: 'white', borderRadius: '1.25rem', padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid rgba(27,77,62,0.08)' }}>
        <p style={{ fontFamily: 'var(--font-label)', fontSize: '0.75rem', fontWeight: 700, color: '#1B4D3E', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          📰 Newsletter
        </p>
        <p style={{ fontSize: '0.825rem', color: '#5C5C5C', marginBottom: '1rem', lineHeight: 1.6 }}>
          Weekly organic living tips, recipes, and exclusive offers.
        </p>
        <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '0.7rem 0.875rem', borderRadius: '0.625rem', border: '1px solid rgba(27,77,62,0.15)', fontSize: '0.85rem', marginBottom: '0.625rem', fontFamily: 'var(--font-sans)', outline: 'none', boxSizing: 'border-box' }} />
        <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem', fontSize: '0.875rem' }}>Subscribe</button>
      </div>
    </aside>
  );
}

const tags = ['organic food', 'health benefits', 'nutrition science', 'antioxidants', 'gut health'];

const blockquoteStyle: React.CSSProperties = {
  borderLeft: '3px solid #1B4D3E',
  paddingLeft: '1.25rem',
  margin: '1.5rem 0',
  backgroundColor: '#F1F8F4',
  padding: '1rem 1.25rem',
  borderRadius: '0 0.75rem 0.75rem 0',
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

export default function BlogPost1Page() {
  return (
    <section style={{ backgroundColor: '#FDF8F3', paddingTop: '6rem' }}>
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem', maxWidth: '1040px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}>
          {/* ─── ARTICLE ─────────────────────────────── */}
          <div className="blog-article-grid">
            <article>
              {/* Category */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.3rem 0.875rem', borderRadius: '9999px',
                backgroundColor: '#E8F5E9', color: '#1B4D3E',
                fontFamily: 'var(--font-label)', fontSize: '0.7rem', fontWeight: 700,
                letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1.25rem',
              }}>
                🌿 NUTRITION & HEALTH
              </div>

              {/* Title */}
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.15, marginBottom: '1.25rem' }}>
                5 Surprising Health Benefits of Eating Organic Food You Probably Didn't Know
              </h1>

              {/* Meta */}
              <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.85rem', color: '#5C5C5C', marginBottom: '1.25rem', flexWrap: 'wrap', fontFamily: 'var(--font-label)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><User size={14} /> Dr. Maya Patel, PhD Nutritional Science</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Calendar size={14} /> February 10, 2026</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Clock size={14} /> 8 min read</span>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {tags.map(t => (
                  <span key={t} style={{ padding: '0.3rem 0.75rem', borderRadius: '9999px', backgroundColor: 'white', border: '1px solid rgba(27,77,62,0.15)', fontSize: '0.775rem', color: '#5C5C5C', fontFamily: 'var(--font-label)' }}>{t}</span>
                ))}
              </div>

              {/* Hero image */}
              <div style={{ borderRadius: '1.25rem', overflow: 'hidden', marginBottom: '2rem' }}>
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80" alt="Organic vegetables"
                  className="blog-hero-img" style={{ borderRadius: '1.25rem' }} />
              </div>

              {/* Article body */}
              <p style={pStyle}>
                When most people think about switching to organic food, the first reason that comes to mind is pesticides. And yes, reducing pesticide exposure is a genuinely important reason to eat organic. But here's what surprises most of our new subscribers when they dive deeper into the science: the benefits of organic eating go far beyond what's <em>not</em> in your food.
              </p>
              <p style={pStyle}>
                As TerraBloom's Head of Nutrition and Quality, I've spent years reviewing peer-reviewed research on organic food consumption. What I consistently find is that educated consumers — people who understand the actual science — become the most enthusiastic advocates for organic living. So let me walk you through five findings that rarely make it into mainstream conversations about organic food.
              </p>

              <h2 style={h2Style}>1. Organic Produce Contains Significantly More Antioxidants</h2>
              <p style={pStyle}>
                A comprehensive 2014 meta-analysis published in the <em>British Journal of Nutrition</em> — one of the largest studies of its kind, reviewing 343 individual studies — found that organic crops contained up to 69% more antioxidants than conventionally grown counterparts. This includes polyphenols, flavonoids, and carotenoids — compounds that your body uses to neutralize free radicals and reduce cellular damage.
              </p>
              <p style={pStyle}>
                Why does this happen? When plants are grown without synthetic pesticides, they essentially have to produce their own chemical defenses against pests and environmental stressors. These defense compounds are the same antioxidants your body benefits from when you eat them. Conventionally grown plants, protected externally by pesticides, produce fewer of these self-defense compounds.
              </p>
              <div style={blockquoteStyle}>
                <p style={{ fontStyle: 'italic', color: '#3a3a3a', lineHeight: 1.7, margin: 0 }}>
                  "Switching the entire UK population to organic food would be equivalent to adding between 1 and 2 portions of fruit and vegetables a day to everyone's diet."<br />
                  <strong>— Newcastle University, 2014</strong>
                </p>
              </div>
              <p style={pStyle}>
                This is remarkable. It means eating organic isn't just about removing something harmful — it's about actively adding more of something extraordinarily beneficial to your diet.
              </p>

              <h2 style={h2Style}>2. Better Omega-3 Fatty Acid Profiles — Including in Dairy and Meat</h2>
              <p style={pStyle}>
                If you consume organic dairy or meat, you're getting a meaningfully different nutritional profile. Research has consistently shown that organically raised cows — which are required by law to graze on pasture — produce milk and meat with 50% higher omega-3 fatty acid levels compared to conventionally raised animals.
              </p>
              <p style={{ ...pStyle, color: '#1B4D3E', fontWeight: 500 }}>Omega-3 fatty acids are critical for:</p>
              <ul style={ulStyle}>
                <li>Cardiovascular health and reducing inflammation</li>
                <li>Brain development and cognitive function</li>
                <li>Reducing risks of depression and anxiety</li>
                <li>Eye health and vision preservation</li>
              </ul>
              <p style={pStyle}>
                The American Heart Association recommends eating foods rich in omega-3s regularly. If you're already doing that, making the switch to organic dairy can meaningfully amplify those benefits without changing what you eat — just how it was raised.
              </p>

              <h2 style={h2Style}>3. Organic Food Has Measurably Better Effects on Gut Microbiome Diversity</h2>
              <p style={pStyle}>
                This is one of the most fascinating emerging areas of research in organic food science. Your gut microbiome — the community of trillions of bacteria, fungi, and other microorganisms living in your digestive system — is now understood to be foundational to everything from immunity and metabolism to mood and mental health.
              </p>
              <p style={pStyle}>
                Here's the problem: glyphosate, the world's most widely used herbicide (brand name Roundup), has been shown to disrupt gut bacteria. Studies published in journals including <em>Environmental Health Perspectives</em> found that glyphosate acts as an antibiotic on gut flora, suppressing the growth of beneficial bacteria while allowing opportunistic bad bacteria to thrive.
              </p>
              <p style={pStyle}>
                Organic farming prohibits glyphosate entirely. Choosing organic produce, particularly leafy greens and grains, reduces your glyphosate exposure and helps preserve the diversity of beneficial gut bacteria. A 2020 Danish study found that after just 2 weeks on an organic diet, participants showed measurable improvements in gut microbiome diversity.
              </p>

              <h2 style={h2Style}>4. Lower Risk of Antibiotic-Resistant Bacteria Exposure</h2>
              <p style={pStyle}>
                Antibiotic resistance is considered by the World Health Organization to be one of the biggest threats to global health today. One major driver of this crisis is the routine use of antibiotics in conventional livestock farming — not to treat illness, but to promote faster growth in crowded facilities.
              </p>
              <p style={pStyle}>
                Organic certification standards in the United States explicitly prohibit the use of routine prophylactic antibiotics in livestock. This means organically raised animals harbor significantly lower levels of antibiotic-resistant bacteria — reducing your exposure every time you consume organic meat, poultry, or dairy.
              </p>
              <p style={pStyle}>
                A 2019 study published in <em>Environmental Health Perspectives</em> found that people who ate organic food regularly had lower urinary concentrations of antibiotic-resistant bacteria markers, suggesting meaningfully reduced systemic exposure.
              </p>

              <h2 style={h2Style}>5. Reduced Cumulative Pesticide Load — The "Cocktail Effect"</h2>
              <p style={pStyle}>
                You've probably heard that individual pesticide residues on conventional produce are "within safe limits." And technically, tested individually, that's often true. But here's what that framing misses: we don't eat individual pesticides. We eat food containing multiple residues simultaneously — and the combined "cocktail effect" of multiple pesticide compounds is still poorly understood and rarely tested for.
              </p>
              <p style={pStyle}>
                A 2020 analysis of USDA pesticide data found that 70% of U.S. produce contained at least one pesticide residue, and many contained multiple compounds. Strawberries were found to contain an average of 7.8 different pesticide residues. Each individual compound may be within "safe" limits, but the additive and synergistic effects of consuming dozens of these compounds daily over years — especially during critical developmental windows in children — are increasingly concerning to researchers.
              </p>
              <p style={pStyle}>
                Choosing organic dramatically reduces this cumulative load. Studies of people who switched to an organic diet consistently show significant reductions in urinary pesticide metabolites within just 3–7 days of changing their diet.
              </p>

              <h2 style={h2Style}>So, Is Organic Worth It?</h2>
              <p style={pStyle}>
                The science increasingly says yes — not just for what it removes, but for what it adds. Higher antioxidants, better omega-3 profiles, healthier gut flora, lower antibiotic resistance exposure, and reduced pesticide cocktail loads are all compelling, evidence-based benefits.
              </p>
              <p style={pStyle}>
                That said, we at TerraBloom also understand that cost is a real barrier for many families. Our subscription model is specifically designed to make certified organic eating more affordable and accessible — and our first box is always free so you can taste the difference for yourself before committing.
              </p>

              {/* Tip box */}
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
                <Link to="/free-box" className="btn btn-gold" style={{ padding: '0.875rem 2rem', fontSize: '0.9rem' }}>
                  Get It Free →
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <Sidebar
              otherTitle="How to Build a Sustainable Kitchen: A Beginner's Guide →"
              otherId="sustainable-kitchen-guide"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
