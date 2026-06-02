'use client';

import { useEffect, useRef, useState } from 'react';

/* ───────────────────────────
   DATA
   ─────────────────────────── */

const NOIRA_SERVICES = [
  {
    title: 'Websites',
    desc: 'Landing pages, multi-page sites, e-commerce. Designed around your workflow, not a template.',
    icon: 'monitor',
  },
  {
    title: 'Automation',
    desc: 'Lead notifications, follow-up sequences, pipeline tracking. Your business runs even when you\'re not watching.',
    icon: 'zap',
  },
  {
    title: 'Lead Forms',
    desc: 'Multi-step forms that capture the right info and pipe it straight to where you need it.',
    icon: 'clipboard',
  },
  {
    title: 'CRM',
    desc: 'Client tracking, project management, invoicing. Zero subscription fees. Fully yours.',
    icon: 'users',
  },
  {
    title: 'Photo Pipeline',
    desc: 'Send iPhone photos. Get enhanced variations back. AI-powered with your style guardrails baked in.',
    icon: 'camera',
  },
  {
    title: 'Creative',
    desc: 'Film, video, ad management, content scraping. The full creative stack for businesses that need someone who shows up.',
    icon: 'play',
  },
];

const SHAY_SERVICES = [
  {
    title: 'UI/UX Design',
    desc: 'Interfaces built around how people actually use them. Not pretty for the sake of it.',
    icon: 'layout',
  },
  {
    title: 'Brand Identity',
    desc: 'Logos, visual systems, style guides. Your brand, consistent across everything.',
    icon: 'feather',
  },
  {
    title: 'Video Production',
    desc: 'Directing, editing, color grading, motion design. From concept to final cut.',
    icon: 'film',
  },
  {
    title: 'Photo Enhancement',
    desc: 'iPhone shots to polished visuals. Fast turnaround, consistent quality.',
    icon: 'aperture',
  },
  {
    title: 'Merchandise',
    desc: 'Product design and mockups. Apparel, packaging, print.',
    icon: 'package',
  },
  {
    title: 'Content Strategy',
    desc: 'SEO, social, copy. The stuff that gets eyeballs on the work you already do.',
    icon: 'pen-tool',
  },
];

/* ───────────────────────────
   ICONS (inline SVG, Phosphor Bold style)
   ─────────────────────────── */

function Icon({ name, size = 24, className = '' }: { name: string; size?: number; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    monitor: <svg width={size} height={size} viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"><rect x="32" y="48" width="192" height="144" rx="16"/><line x1="80" y1="224" x2="176" y2="224"/><line x1="128" y1="192" x2="128" y2="224"/></svg>,
    zap: <svg width={size} height={size} viewBox="0 0 256 256" fill="currentColor"><polygon points="152,32 48,144 120,144 104,224 208,112 136,112" /></svg>,
    clipboard: <svg width={size} height={size} viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"><rect x="56" y="56" width="144" height="152" rx="8"/><line x1="96" y1="56" x2="96" y2="40"/><line x1="160" y1="56" x2="160" y2="40"/><line x1="80" y1="112" x2="176" y2="112"/><line x1="80" y1="144" x2="176" y2="144"/><line x1="80" y1="176" x2="136" y2="176"/></svg>,
    users: <svg width={size} height={size} viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"><circle cx="96" cy="96" r="40"/><path d="M32 224a64 64 0 0 1 128 0"/><circle cx="176" cy="104" r="32"/><path d="M200 224a56 56 0 0 0-48-55.3"/></svg>,
    camera: <svg width={size} height={size} viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"><path d="M48 208h160a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16h-28.7a8 8 0 0 1-7.2-4.4l-8.6-17.2A8 8 0 0 0 147.7 40H107.3a8 8 0 0 0-7.2 3.6L79.9 59.6A8 8 0 0 1 72.7 64H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16z"/><circle cx="128" cy="132" r="36"/></svg>,
    play: <svg width={size} height={size} viewBox="0 0 256 256" fill="currentColor"><path d="M240 128a16 16 0 0 1-8.1 13.9l-152 88A16 16 0 0 1 56 216V40a16 16 0 0 1 23.9-13.9l152 88A16 16 0 0 1 240 128z"/></svg>,
    layout: <svg width={size} height={size} viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"><rect x="40" y="40" width="176" height="176" rx="12"/><line x1="40" y1="104" x2="216" y2="104"/><line x1="128" y1="104" x2="128" y2="216"/></svg>,
    feather: <svg width={size} height={size} viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"><path d="M216 40a8 8 0 0 0-11.3 0L168 76.7l-17.4-17.4a8 8 0 0 0-11.3 0l-31.7 31.7A106.9 106.9 0 0 0 76 168c0 1.2 0 2.4.1 3.6L28.7 219.3a8 8 0 0 0 0 11.3 8.2 8.2 0 0 0 11.3 0l47.6-48.1c1.2 0 2.4.1 3.6.1a106.9 106.9 0 0 0 76.9-31.6L200 118.6a8 8 0 0 0 0-11.3L182.6 90l36.7-36.7a8 8 0 0 0 0-11.3z"/></svg>,
    film: <svg width={size} height={size} viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"><rect x="40" y="40" width="176" height="176" rx="8"/><line x1="76" y1="40" x2="76" y2="216"/><line x1="180" y1="40" x2="180" y2="216"/><line x1="40" y1="76" x2="216" y2="76"/><line x1="40" y1="180" x2="216" y2="180"/></svg>,
    aperture: <svg width={size} height={size} viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round"><circle cx="128" cy="128" r="88"/><line x1="61.1" y1="168" x2="194.9" y2="88"/><line x1="61.1" y1="88" x2="194.9" y2="168"/><line x1="128" y1="40" x2="128" y2="216"/><line x1="40" y1="128" x2="216" y2="128"/></svg>,
    package: <svg width={size} height={size} viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"><path d="M224 77.2v101.6a8 8 0 0 1-4.1 7l-88 49.5a8 8 0 0 1-7.8 0l-88-49.5a8 8 0 0 1-4.1-7V77.2a8 8 0 0 1 4.1-7l88-49.5a8 8 0 0 1 7.8 0l88 49.5a8 8 0 0 1 4.1 7z"/><polyline points="128,128 128,230"/><line x1="128" y1="128" x2="222.9" y2="74.1"/><line x1="33.1" y1="74.1" x2="128" y2="128"/></svg>,
    'pen-tool': <svg width={size} height={size} viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"><path d="M247.1 75.7L180.3 8.9a8 8 0 0 0-11.3 0L123.3 54.6a8 8 0 0 0 0 11.3l5.8 5.8L24.7 176.1a8.1 8.1 0 0 0-2.3 5.2L16 232a8 8 0 0 0 8 8h.7l50.7-6.4a8.1 8.1 0 0 0 5.2-2.3L184.3 126.9l5.8 5.8a8 8 0 0 0 11.3 0L247.1 87a8 8 0 0 0 0-11.3z"/><circle cx="128" cy="128" r="12" fill="currentColor"/></svg>,
    arrowUpRight: <svg width={size} height={size} viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"><line x1="64" y1="192" x2="192" y2="64"/><polyline points="112 64 192 64 192 144"/></svg>,
    phone: <svg width={size} height={size} viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"><path d="M222.4 145.6l-46.9-18.8a16 16 0 0 0-15.2 2.1l-24.2 18.2A126.9 126.9 0 0 1 111 100.9l18.2-24.2a16 16 0 0 0 2.1-15.2L112.4 14.5A16 16 0 0 0 97.6 4L42.4 17.2A16 16 0 0 0 32 32c0 106 86 192 192 192a16 16 0 0 0 14.8-10.4l13.2-55.2A16 16 0 0 0 242.4 144a16 16 0 0 0-20-1.6z"/></svg>,
    mail: <svg width={size} height={size} viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"><rect x="32" y="56" width="192" height="144" rx="8"/><polyline points="224,56 128,144 32,56"/></svg>,
  };
  return <span className={`inline-flex items-center justify-center ${className}`}>{icons[name] || null}</span>;
}

/* ───────────────────────────
   REVEAL / ANIMATION
   ─────────────────────────── */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) { setInView(true); return; }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView, mounted };
}

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView, mounted } = useInView(0.1);
  // Content is always visible for SSR/initial paint.
  // After JS mounts, we apply the reveal animation: starts hidden, animates in when scrolled into view.
  // This prevents the "blank page" problem if JS is slow or blocked.
  const animating = mounted && !inView;
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${animating ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'} ${className}`}
      style={animating ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/* ───────────────────────────
   NAV
   ─────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]' : 'bg-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-[-0.02em] text-[var(--color-charcoal)]">
          O&apos;Shay<span className="text-[var(--color-accent)]">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#noira" className="text-[13px] font-medium tracking-[0.04em] uppercase text-[var(--color-charcoal-soft)] hover:text-[var(--color-accent)] transition-colors duration-200">Noira</a>
          <a href="#shayvisuals" className="text-[13px] font-medium tracking-[0.04em] uppercase text-[var(--color-charcoal-soft)] hover:text-[var(--color-accent)] transition-colors duration-200">ShayVisuals</a>
          <a href="#services" className="text-[13px] font-medium tracking-[0.04em] uppercase text-[var(--color-charcoal-soft)] hover:text-[var(--color-accent)] transition-colors duration-200">Services</a>
          <a href="#contact" className="btn-primary text-[12px] !px-5 !py-2">Get in touch</a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-5 h-0.5 bg-[var(--color-charcoal)] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[var(--color-charcoal)] transition-all duration-300 mt-[7px] ${menuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[var(--color-border-soft)] px-6 py-6 flex flex-col gap-4">
          <a href="#noira" onClick={() => setMenuOpen(false)} className="text-[13px] font-medium tracking-[0.04em] uppercase text-[var(--color-charcoal)]">Noira</a>
          <a href="#shayvisuals" onClick={() => setMenuOpen(false)} className="text-[13px] font-medium tracking-[0.04em] uppercase text-[var(--color-charcoal)]">ShayVisuals</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-[13px] font-medium tracking-[0.04em] uppercase text-[var(--color-charcoal)]">Services</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary text-[12px] w-fit">Get in touch</a>
        </div>
      )}
    </nav>
  );
}

/* ───────────────────────────
   PAGE
   ─────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main">
        {/* ── HERO ──
            Left-aligned, O'Shay intro first.
            Two brand logos/cards below as a visual bridge.
        */}
        <section className="min-h-[100dvh] flex items-center section-light pt-16">
          <div className="max-w-[1200px] mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <Reveal>
                <p className="eyebrow">Serial Entrepreneur</p>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="heading-hero text-[var(--color-charcoal)]">
                  O&apos;Shay<br />
                  <span className="text-[var(--color-accent)]">Lighten</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-[var(--color-charcoal-soft)] text-lg mt-6 max-w-xl leading-relaxed">
                  Two companies. One standard. <strong className="text-[var(--color-charcoal)]">Noira</strong> handles operations, automation, and AI so nothing falls through. <strong className="text-[var(--color-charcoal)]">ShayVisuals</strong> handles design, film, and brand identity so the work looks right.
                </p>
              </Reveal>
              <Reveal delay={350}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a href="#noira" className="btn-primary">Explore Noira</a>
                  <a href="#shayvisuals" className="btn-secondary-light">Explore ShayVisuals</a>
                </div>
              </Reveal>
            </div>

            {/* Two brand cards side by side below the hero text */}
            <Reveal delay={500}>
              <div className="mt-16 grid md:grid-cols-2 gap-4">
                <a href="#noira" className="group card-dark p-6 md:p-8 block" style={{ textDecoration: 'none' }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] tracking-[0.1em] text-[var(--color-gold)] uppercase font-semibold">Noira LLC</span>
                    <Icon name="arrowUpRight" size={14} className="text-[var(--color-cream-dim)] group-hover:text-[var(--color-gold)] transition-colors duration-200" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-semibold text-[var(--color-surface)] tracking-[-0.01em] leading-tight">AI operations<br />for businesses that move</h3>
                  <p className="text-[13px] text-[var(--color-cream-dim)] mt-3 leading-relaxed">Websites. Automation. CRM. Lead forms. The system behind the work.</p>
                </a>
                <a href="#shayvisuals" className="group card-light p-6 md:p-8 block" style={{ textDecoration: 'none' }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] tracking-[0.1em] text-[var(--color-accent)] uppercase font-semibold">ShayVisuals LLC</span>
                    <Icon name="arrowUpRight" size={14} className="text-[var(--color-charcoal-soft)] group-hover:text-[var(--color-accent)] transition-colors duration-200" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-semibold text-[var(--color-charcoal)] tracking-[-0.01em] leading-tight">Creative direction<br />from concept to cut</h3>
                  <p className="text-[13px] text-[var(--color-charcoal-soft)] mt-3 leading-relaxed">UI/UX. Brand identity. Film. Photo pipeline. Every pixel intentional.</p>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="py-16 md:py-20 px-6 section-light border-t border-[var(--color-border-soft)]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {[
                { value: '2', label: 'Companies' },
                { value: '10+', label: 'Years experience' },
                { value: '100+', label: 'Projects shipped' },
                { value: '1', label: 'Standard' },
              ].map((stat) => (
                <Reveal key={stat.label}>
                  <div className="text-center p-4 md:p-6">
                    <div className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[var(--color-accent)]">{stat.value}</div>
                    <div className="text-[11px] tracking-[0.1em] text-[var(--color-charcoal-soft)] uppercase font-medium mt-2">{stat.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── NOIRA SECTION (dark) ── */}
        <section id="noira" className="py-24 md:py-32 px-6 section-dark relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,var(--color-burnt)/0.06,transparent_50%)] pointer-events-none" />
          <div className="relative z-10 max-w-[1200px] mx-auto">
            <Reveal>
              <p className="eyebrow">Noira LLC</p>
              <h2 className="heading-h2 text-[var(--color-surface)] mt-4">
                AI operations for<br />businesses that move
              </h2>
              <p className="text-[var(--color-cream-dim)] mt-4 max-w-xl leading-relaxed">
                Noira briefs you every morning, tracks your pipeline, manages your clients, and builds your tools. The system behind the work.
              </p>
            </Reveal>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {NOIRA_SERVICES.map((svc, i) => (
                <Reveal key={svc.title} delay={80 + i * 60}>
                  <div className="card-dark p-7 md:p-8 group h-full">
                    <div className="w-10 h-10 flex items-center justify-center bg-[var(--color-burnt)]/10 text-[var(--color-burnt)] mb-4 group-hover:bg-[var(--color-burnt)]/20 transition-colors duration-300">
                      <Icon name={svc.icon} size={20} />
                    </div>
                    <h3 className="text-[15px] font-semibold text-[var(--color-surface)] mb-2 group-hover:text-[var(--color-gold)] transition-colors duration-200">{svc.title}</h3>
                    <p className="text-[13px] text-[var(--color-cream-dim)] leading-relaxed">{svc.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={400}>
              <div className="mt-10">
                <a href="https://noira.us" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--color-gold)] text-[13px] font-semibold tracking-[0.06em] uppercase hover:text-[var(--color-surface)] transition-colors duration-200">
                  Visit noira.us
                  <Icon name="arrowUpRight" size={14} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── SHAYVISUALS SECTION (light) ── */}
        <section id="shayvisuals" className="py-24 md:py-32 px-6 section-light">
          <div className="max-w-[1200px] mx-auto">
            <Reveal>
              <p className="eyebrow">ShayVisuals LLC</p>
              <h2 className="heading-h2 text-[var(--color-charcoal)] mt-4">
                Creative direction<br />from concept to cut
              </h2>
              <p className="text-[var(--color-charcoal-soft)] mt-4 max-w-xl leading-relaxed">
                UI/UX design, brand identity, film, video, photo pipeline. Every frame intentional, every pixel placed with purpose.
              </p>
            </Reveal>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SHAY_SERVICES.map((svc, i) => (
                <Reveal key={svc.title} delay={80 + i * 60}>
                  <div className="card-light p-7 md:p-8 group h-full">
                    <div className="w-10 h-10 flex items-center justify-center bg-[var(--color-accent-soft)] text-[var(--color-accent)] mb-4 group-hover:bg-[var(--color-accent-medium)] transition-colors duration-300">
                      <Icon name={svc.icon} size={20} />
                    </div>
                    <h3 className="text-[15px] font-semibold text-[var(--color-charcoal)] mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-200">{svc.title}</h3>
                    <p className="text-[13px] text-[var(--color-charcoal-soft)] leading-relaxed">{svc.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={400}>
              <div className="mt-10">
                <a href="https://shayvisuals.net" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--color-accent)] text-[13px] font-semibold tracking-[0.06em] uppercase hover:text-[var(--color-charcoal)] transition-colors duration-200">
                  Visit shayvisuals.net
                  <Icon name="arrowUpRight" size={14} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contact" className="py-24 md:py-32 px-6 section-dark">
          <div className="max-w-[800px] mx-auto text-center">
            <Reveal>
              <p className="eyebrow">Let&apos;s work</p>
              <h2 className="heading-h2 text-[var(--color-surface)] mt-4">
                One call handles it all
              </h2>
              <p className="text-[var(--color-cream-dim)] text-lg mt-4 max-w-lg mx-auto leading-relaxed">
                Need a site, a system, a brand, or a video? Reach out. No runaround, no surprise charges.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+14176934630" className="btn-primary text-[13px] !px-8 !py-3.5">
                  <Icon name="phone" size={16} />
                  (417) 693-4630
                </a>
                <a href="mailto:oshay@noira.us" className="btn-secondary-dark text-[13px] !px-8 !py-3.5">
                  <Icon name="mail" size={16} />
                  oshay@noira.us
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-6 bg-[var(--color-ink)] border-t border-[var(--color-ink-border)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <p className="text-lg font-semibold text-[var(--color-surface)] tracking-[-0.02em]">
                O&apos;Shay Lighten<span className="text-[var(--color-accent)]">.</span>
              </p>
              <p className="text-[13px] text-[var(--color-cream-dim)] mt-2">Serial entrepreneur. Digital solutions.</p>
            </div>
            <div className="flex gap-12">
              <div>
                <p className="text-[11px] tracking-[0.1em] text-[var(--color-gold)] uppercase font-semibold mb-3">Noira</p>
                <a href="https://noira.us" target="_blank" rel="noopener noreferrer" className="block text-[13px] text-[var(--color-cream-dim)] hover:text-[var(--color-surface)] transition-colors duration-200">noira.us</a>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.1em] text-[var(--color-accent)] uppercase font-semibold mb-3">ShayVisuals</p>
                <a href="https://shayvisuals.net" target="_blank" rel="noopener noreferrer" className="block text-[13px] text-[var(--color-cream-dim)] hover:text-[var(--color-surface)] transition-colors duration-200">shayvisuals.net</a>
              </div>
            </div>
          </div>
          <div className="border-t border-[var(--color-ink-border)] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[12px] text-[var(--color-cream-dim)]">&copy; {new Date().getFullYear()} O&apos;Shay Lighten. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-[12px] text-[var(--color-cream-dim)] hover:text-[var(--color-surface)] transition-colors duration-200">Privacy</a>
              <a href="#" className="text-[12px] text-[var(--color-cream-dim)] hover:text-[var(--color-surface)] transition-colors duration-200">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}