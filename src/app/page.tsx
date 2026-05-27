import { NoiraLogoShader, ShayVisualsLogoShader, AuroraBackground } from '../components/HeroShader'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <AuroraBackground />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl tracking-wider">
              O'SHAY<span className="text-amber-400">LIGHTEN</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm tracking-widest">
              <a href="#noira" className="text-gray-400 hover:text-white transition-colors">NOIRA</a>
              <a href="#shayvisuals" className="text-gray-400 hover:text-white transition-colors">SHAYVISUALS</a>
              <a href="#work" className="text-gray-400 hover:text-white transition-colors">WORK</a>
              <a href="#contact" className="px-6 py-2 bg-amber-400 text-black font-semibold hover:bg-amber-300 transition-colors">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-amber-400 text-sm tracking-[0.4em] uppercase mb-6">
            FOUNDER & OPERATOR
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-8">
            BUILDING THE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400">
              FUTURE
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Two companies. One vision. Delivering exceptional digital experiences through 
            marketing automation and visual storytelling.
          </p>
          
          {/* Company Logos */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-16">
            {/* Noira Logo */}
            <a href="#noira" className="group block">
              <div className="relative h-80 rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/50 transition-all duration-500">
                <NoiraLogoShader />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-1">Noira LLC</h3>
                  <p className="text-sm text-gray-400">Marketing & Web Development</p>
                </div>
              </div>
            </a>
            
            {/* ShayVisuals Logo */}
            <a href="#shayvisuals" className="group block">
              <div className="relative h-80 rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/50 transition-all duration-500">
                <ShayVisualsLogoShader />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-1">ShayVisuals LLC</h3>
                  <p className="text-sm text-gray-400">Video Production & Visual Content</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Noira Section */}
      <section id="noira" className="relative py-32 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-4">NOIRA LLC</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your Business <br />
                <span className="text-amber-400">Operator</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Noira handles briefings, runs pipelines, manages clients, and builds tools — 
                so you can focus on the work that pays. From CRM setup to full-stack web 
                development, Noira ensures nothing falls through the cracks.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-3xl font-bold text-amber-400 mb-2">$23K+</p>
                  <p className="text-sm text-gray-400">Revenue Tracked</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-3xl font-bold text-amber-400 mb-2">5</p>
                  <p className="text-sm text-gray-400">Active Clients</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-3xl font-bold text-amber-400 mb-2">386</p>
                  <p className="text-sm text-gray-400">Blog Posts Scraped</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-3xl font-bold text-amber-400 mb-2">0</p>
                  <p className="text-sm text-gray-400">Missed Follow-ups</p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10">
              <NoiraLogoShader />
            </div>
          </div>
        </div>
      </section>

      {/* ShayVisuals Section */}
      <section id="shayvisuals" className="relative py-32 px-6 border-t border-white/10 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10">
                <ShayVisualsLogoShader />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-4">SHAYVISUALS LLC</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Visual <br />
                <span className="text-amber-400">Excellence</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Professional video production and visual content creation. From music videos 
                to corporate content, ShayVisuals delivers cinematic quality that captures 
                your story and engages your audience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-amber-400 text-sm font-mono mt-1">01</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Music Videos</p>
                    <p className="text-sm text-gray-400">Cinematic storytelling for artists</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-amber-400 text-sm font-mono mt-1">02</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Corporate Content</p>
                    <p className="text-sm text-gray-400">Professional brand videos</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-amber-400 text-sm font-mono mt-1">03</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Photo Enhancement</p>
                    <p className="text-sm text-gray-400">Nano Banana pipeline processing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="relative py-32 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-4 text-center">PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Selected <span className="text-amber-400">Work</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Project Cards */}
            {[
              { name: 'Wilbers Law Firm', type: 'Web Development', desc: '386 blog posts, full site' },
              { name: 'Brothers & Co', type: 'Marketing + Web', desc: '$500/mo retainer' },
              { name: 'Complete Coverage Roofing', type: 'Web Development', desc: 'Full site + branding' },
              { name: 'Sundancer Lombok', type: 'Web + Branding', desc: 'Luxury hospitality' },
              { name: 'Keagan R', type: 'Music Video', desc: 'Visual production' },
              { name: 'SocialCues SGF', type: 'Event Platform', desc: 'Community hub' },
            ].map((project, idx) => (
              <div key={idx} className="group p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-amber-400/50 transition-all duration-500">
                <p className="text-amber-400 text-xs tracking-widest uppercase mb-3">{project.type}</p>
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-4">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Let's <span className="text-amber-400">Build</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Need a site, a system, or someone who'll actually handle your project start to finish? 
            Reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:oshay@noira.us" 
              className="px-8 py-4 bg-amber-400 text-black font-semibold text-sm tracking-widest hover:bg-amber-300 transition-colors"
            >
              OSHAY@NOIRA.US
            </a>
            <a 
              href="tel:+14176934630" 
              className="px-8 py-4 bg-white/5 text-white font-semibold text-sm tracking-widest border border-white/10 hover:border-amber-400/50 transition-colors"
            >
              (417) 693-4630
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-gray-500 text-xs tracking-wider">© 2026 O'SHAY LIGHTEN</p>
          </div>
          <div className="flex gap-8 text-xs tracking-widest text-gray-500">
            <a href="#noira" className="hover:text-white transition-colors">NOIRA</a>
            <a href="#shayvisuals" className="hover:text-white transition-colors">SHAYVISUALS</a>
            <a href="#work" className="hover:text-white transition-colors">WORK</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
