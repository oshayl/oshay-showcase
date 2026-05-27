'use client'

import { useState } from 'react'
import { ShaderCursor, ParallaxShaderBackground, ShaderTiltCard, NoiraLogoShader, ShayVisualsLogoShader, LoadingSequence, AnimatedStat, ScrollProgress } from '../components/Experience'

export default function Home() {
  const [loading, setLoading] = useState(true)

  if (loading) {
    return <LoadingSequence onComplete={() => setLoading(false)} />
  }

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <ScrollProgress />
      <ShaderCursor />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <ParallaxShaderBackground section="hero" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <p className="text-amber-400 text-xs md:text-sm tracking-[0.5em] uppercase mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_3.2s_forwards]">
            FOUNDER & OPERATOR
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-[0.85] mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_3.4s_forwards]">
            <span className="block">BUILDING THE</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 animate-gradient bg-[length:200%_auto]">
              FUTURE
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_3.6s_forwards]">
            Two companies. One vision. Delivering exceptional digital experiences through 
            marketing automation and visual storytelling.
          </p>
          
          {/* Company Logos - Interactive */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-24">
            {/* Noira */}
            <ShaderTiltCard shaderColor="amber" className="group">
              <div className="relative h-96 rounded-2xl overflow-hidden border border-white/10 group-hover:border-amber-400/50 transition-all duration-500">
                <NoiraLogoShader size="large" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-white mb-2">Noira LLC</h3>
                  <p className="text-gray-400 mb-4">Marketing Automation & Web Development</p>
                  <a href="#noira" className="inline-flex items-center text-amber-400 text-sm tracking-widest uppercase hover:text-amber-300 transition-colors">
                    Explore →
                  </a>
                </div>
              </div>
            </ShaderTiltCard>
            
            {/* ShayVisuals */}
            <ShaderTiltCard shaderColor="amber" className="group">
              <div className="relative h-96 rounded-2xl overflow-hidden border border-white/10 group-hover:border-amber-400/50 transition-all duration-500">
                <ShayVisualsLogoShader size="large" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-white mb-2">ShayVisuals LLC</h3>
                  <p className="text-gray-400 mb-4">Video Production & Visual Content</p>
                  <a href="#shayvisuals" className="inline-flex items-center text-amber-400 text-sm tracking-widest uppercase hover:text-amber-300 transition-colors">
                    Explore →
                  </a>
                </div>
              </div>
            </ShaderTiltCard>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-60">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500">Scroll</p>
          <div className="w-px h-16 bg-gradient-to-b from-amber-400 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ===== NOIRA SECTION ===== */}
      <section id="noira" className="relative min-h-screen py-32 px-6 overflow-hidden">
        <ParallaxShaderBackground section="noira" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-6">NOIRA LLC</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[0.9]">
                YOUR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">BUSINESS OPERATOR</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl">
                Noira handles briefings, runs pipelines, manages clients, and builds tools — 
                so you can focus on the work that pays. From CRM setup to full-stack web 
                development, Noira ensures nothing falls through the cracks.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <AnimatedStat value={23000} label="Revenue Tracked" suffix="K+" />
                <AnimatedStat value={5} label="Active Clients" />
                <AnimatedStat value={386} label="Blog Posts Scraped" />
                <AnimatedStat value={0} label="Missed Follow-ups" />
              </div>
            </div>
            
            {/* Logo Display */}
            <div className="relative">
              <div className="relative h-[700px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-amber-400/10">
                <NoiraLogoShader size="large" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 p-6 bg-amber-400/10 backdrop-blur-xl rounded-2xl border border-amber-400/20">
                <p className="text-amber-400 text-3xl font-bold">$2K</p>
                <p className="text-xs text-amber-400/60 uppercase tracking-wider">Monthly Retainer</p>
              </div>
              
              <div className="absolute -bottom-8 -left-8 p-6 bg-blue-400/10 backdrop-blur-xl rounded-2xl border border-blue-400/20">
                <p className="text-blue-400 text-3xl font-bold">5</p>
                <p className="text-xs text-blue-400/60 uppercase tracking-wider">Integrations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SHAYVISUALS SECTION ===== */}
      <section id="shayvisuals" className="relative min-h-screen py-32 px-6 overflow-hidden">
        <ParallaxShaderBackground section="shay" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Logo Display */}
            <div className="relative order-2 lg:order-1">
              <div className="relative h-[700px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-amber-400/10">
                <ShayVisualsLogoShader size="large" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -left-8 p-6 bg-pink-400/10 backdrop-blur-xl rounded-2xl border border-pink-400/20">
                <p className="text-pink-400 text-3xl font-bold">4K</p>
                <p className="text-xs text-pink-400/60 uppercase tracking-wider">Resolution</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-6">SHAYVISUALS LLC</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[0.9]">
                VISUAL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-400">EXCELLENCE</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl">
                Professional video production and visual content creation. From music videos 
                to corporate content, ShayVisuals delivers cinematic quality that captures 
                your story and engages your audience.
              </p>
              
              {/* Services */}
              <div className="space-y-6">
                {[
                  { num: '01', title: 'Music Videos', desc: 'Cinematic storytelling for artists' },
                  { num: '02', title: 'Corporate Content', desc: 'Professional brand videos' },
                  { num: '03', title: 'Photo Enhancement', desc: 'Nano Banana pipeline processing' },
                ].map((service, idx) => (
                  <div key={idx} className="group flex items-start gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/30 transition-all duration-500">
                    <span className="text-amber-400 font-mono text-lg">{service.num}</span>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-amber-400 transition-colors">{service.title}</h4>
                      <p className="text-gray-400 text-sm">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO SECTION ===== */}
      <section id="work" className="relative min-h-screen py-32 px-6 overflow-hidden">
        <ParallaxShaderBackground section="work" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-6">PORTFOLIO</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">WORK</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Wilbers Law Firm', type: 'Web Development', desc: '386 blog posts, full site', color: 'blue' },
              { name: 'Brothers & Co', type: 'Marketing + Web', desc: '$500/mo retainer', color: 'amber' },
              { name: 'Complete Coverage Roofing', type: 'Web Development', desc: 'Full site + branding', color: 'green' },
              { name: 'Sundancer Lombok', type: 'Web + Branding', desc: 'Luxury hospitality', color: 'purple' },
              { name: 'Keagan R', type: 'Music Video', desc: 'Visual production', color: 'pink' },
              { name: 'SocialCues SGF', type: 'Event Platform', desc: 'Community hub', color: 'cyan' },
            ].map((project, idx) => (
              <ShaderTiltCard 
                key={idx} 
                shaderColor={project.color as any || 'default'}
                className="group"
              >
                <div className="p-8 rounded-2xl border border-white/10 group-hover:border-amber-400/50 transition-all duration-500 h-full">
                  <p className="text-amber-400 text-xs tracking-widest uppercase mb-4">{project.type}</p>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{project.name}</h3>
                  <p className="text-gray-400 text-sm">{project.desc}</p>
                </div>
              </ShaderTiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="relative min-h-screen py-32 px-6 overflow-hidden">
        <ParallaxShaderBackground section="contact" />
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-6">GET IN TOUCH</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">BUILD</span>
          </h2>
          <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Need a site, a system, or someone who'll actually handle your project start to finish? 
            Reach out.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:oshay@noira.us" 
              className="group relative px-10 py-5 bg-amber-400 text-black font-semibold text-sm tracking-widest overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">OSHAY@NOIRA.US</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            <a 
              href="tel:+14176934630" 
              className="group relative px-10 py-5 bg-white/5 text-white font-semibold text-sm tracking-widest border border-white/10 overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-amber-400 transition-colors duration-300">(417) 693-4630</span>
              <div className="absolute inset-0 bg-amber-400/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-gray-500 text-xs tracking-wider">© 2026 O'SHAY LIGHTEN</p>
            <p className="text-gray-600 text-xs tracking-wider mt-1">OPERATED BY NOIRA</p>
          </div>
          <div className="flex gap-12 text-xs tracking-widest text-gray-500">
            <a href="#noira" className="hover:text-amber-400 transition-colors">NOIRA</a>
            <a href="#shayvisuals" className="hover:text-amber-400 transition-colors">SHAYVISUALS</a>
            <a href="#work" className="hover:text-amber-400 transition-colors">WORK</a>
          </div>
        </div>
      </footer>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </main>
  )
}
