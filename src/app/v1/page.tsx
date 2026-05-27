'use client'

import Image from 'next/image'
import { Shader, Glass, SolidColor, Swirl, Vignette, FilmGrain, FloatingParticles, ReflectivePlane, FallingLines, Dither } from 'shaders/react'
import { motion } from 'framer-motion'

const NOIRA_SDF = 'https://data.shaders.com/storage/v1/object/public/user-uploaded-images/user_3EFXpAyJVr1SfG6V0LgngQDNE5w/3xHVOSi-cR8i_sdf.bin'
const SHAY_SDF = 'https://data.shaders.com/storage/v1/object/public/user-uploaded-images/user_3EFXpAyJVr1SfG6V0LgngQDNE5w/XDRmZpzHc0TC_sdf.bin'

export default function V1() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* --- NAV --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center">
        <p className="font-display text-sm tracking-[0.2em] uppercase text-[#d4b996]">O'Shay Lighten</p>
        <div className="flex gap-8 text-xs tracking-[0.2em] uppercase text-gray-500">
          <a href="#noira" className="hover:text-white transition-colors">Noira</a>
          <a href="#shay" className="hover:text-white transition-colors">ShayVisuals</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* --- HERO --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Shader className="w-full h-full">
            <SolidColor color="#000000" />
            <Swirl colorA="#0d0d0d" colorB="#000000" detail={2} speed={0.08} blend={15} />
            <FloatingParticles count={40} particleSize={0.8} particleSoftness={0.4} speed={0.1} twinkle={0.6} particleColor="#d4b99733" />
            <Vignette intensity={0.8} />
          </Shader>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#d4b996] text-xs tracking-[0.5em] uppercase mb-8"
          >
            Founder & Operator
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] mb-6"
          >
            O'SHAY<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b996] to-[#ffc15c]">LIGHTEN</span>
          </motion.h1>
          <motion.div initial={{ width: 0 }} animate={{ width: 64 }} transition={{ duration: 0.8, delay: 0.8 }}
            className="h-px bg-[#d4b996] mx-auto mb-8"
          />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }}
            className="text-gray-400 text-lg max-w-md mx-auto"
          >
            Two companies. One vision.
          </motion.p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-px h-12 bg-gradient-to-b from-transparent to-[#d4b996]/50" />
        </div>
      </section>

      {/* --- NOIRA --- */}
      <section id="noira" className="relative min-h-screen flex items-center py-32 px-6">
        <div className="absolute inset-0">
          <Shader className="w-full h-full">
            <SolidColor color="#030308" />
            <Swirl colorA="#080818" colorB="#030308" detail={2} speed={0.06} blend={12} />
            <Vignette intensity={0.7} />
          </Shader>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[#d4b996] text-[10px] tracking-[0.4em] uppercase mb-4">Noira LLC</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] mb-8">
              BUSINESS<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c6df0] to-[#06b6d4]">OPERATOR</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-12 max-w-md">
              Briefings, pipelines, clients, tools. Nothing falls through the cracks. Full-stack operations from CRM to deployment.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '$23K+', label: 'Revenue Tracked' },
                { val: '5', label: 'Active Clients' },
                { val: '386', label: 'Articles Scraped' },
                { val: '0', label: 'Missed Follow-ups' },
              ].map((s) => (
                <div key={s.label} className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <p className="text-2xl font-display font-bold text-[#d4b996]">{s.val}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <Shader className="w-full h-full">
                <SolidColor color="#050510" />
                <Glass
                  cutout={true}
                  scale={0.6}
                  refraction={1.5}
                  edgeSoftness={0.15}
                  thickness={0.2}
                  aberration={0.02}
                  innerZoom={1.1}
                  highlight={0.9}
                  highlightColor="#ffc15c"
                  fresnel={0.1}
                  shapeSdfUrl={NOIRA_SDF}
                >
                  <Swirl colorA="#1a1040" colorB="#0a0620" detail={3} speed={0.12} blend={20} />
                </Glass>
                <ReflectivePlane distance={0.6} falloff={2} blur={3} blurDistance={0.12} edges="clamp" />
                <FilmGrain bias={0.03} animated={true} />
              </Shader>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48">
                <Image src="/logos/Noira.svg" alt="Noira" fill className="object-contain drop-shadow-[0_0_40px_rgba(255,193,92,0.3)]" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SHAYVISUALS --- */}
      <section id="shay" className="relative min-h-screen flex items-center py-32 px-6">
        <div className="absolute inset-0">
          <Shader className="w-full h-full">
            <SolidColor color="#050202" />
            <Swirl colorA="#120808" colorB="#050202" detail={2} speed={0.06} blend={12} />
            <Vignette intensity={0.7} />
          </Shader>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <Shader className="w-full h-full">
                <SolidColor color="#050202" />
                <Glass
                  cutout={true}
                  scale={0.6}
                  refraction={1.5}
                  edgeSoftness={0.15}
                  thickness={0.2}
                  aberration={0.02}
                  innerZoom={1.1}
                  highlight={0.9}
                  highlightColor="#d4b996"
                  fresnel={0.1}
                  shapeSdfUrl={SHAY_SDF}
                >
                  <Swirl colorA="#201010" colorB="#100505" detail={3} speed={0.12} blend={20} />
                </Glass>
                <ReflectivePlane distance={0.6} falloff={2} blur={3} blurDistance={0.12} edges="clamp" />
                <FilmGrain bias={0.03} animated={true} />
              </Shader>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48">
                <Image src="/logos/ShayVisuals.svg" alt="ShayVisuals" fill className="object-contain drop-shadow-[0_0_40px_rgba(212,185,150,0.3)]" priority />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-[#d4b996] text-[10px] tracking-[0.4em] uppercase mb-4">ShayVisuals LLC</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] mb-8">
              VISUAL<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b996] to-[#f06383]">STORYTELLING</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-12 max-w-md">
              Music videos, corporate content, photo enhancement. Cinematic quality that captures your story.
            </p>
            <div className="space-y-4">
              {[
                { num: '01', title: 'Music Videos', desc: 'Cinematic storytelling for artists' },
                { num: '02', title: 'Corporate Content', desc: 'Professional brand videos' },
                { num: '03', title: 'Photo Enhancement', desc: 'Nano Banana pipeline processing' },
              ].map((s) => (
                <div key={s.num} className="flex items-start gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <span className="text-[#d4b996] font-mono text-sm">{s.num}</span>
                  <div>
                    <p className="font-semibold text-white">{s.title}</p>
                    <p className="text-gray-500 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="relative py-32 px-6">
        <div className="absolute inset-0">
          <Shader className="w-full h-full">
            <SolidColor color="#000000" />
            <FloatingParticles count={25} particleSize={0.5} particleSoftness={0.6} speed={0.05} twinkle={0.4} particleColor="#d4b99715" />
            <Vignette intensity={0.9} />
          </Shader>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-[#d4b996] text-[10px] tracking-[0.4em] uppercase mb-4">Get in Touch</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8">
            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b996] to-[#ffc15c]">BUILD</span>
          </h2>
          <p className="text-gray-400 mb-12">Need a site, a system, or someone who'll handle it all? Reach out.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:oshay@noira.us" className="px-8 py-4 bg-[#d4b996] text-black text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#ffc15c] transition-colors">
              oshay@noira.us
            </a>
            <a href="tel:+14176934630" className="px-8 py-4 border border-white/10 text-white text-sm tracking-[0.2em] uppercase font-medium hover:border-[#d4b996]/30 transition-colors">
              (417) 693-4630
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative py-12 px-6 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-gray-600 text-xs tracking-[0.2em]">© 2026 O'SHAY LIGHTEN</p>
          <p className="text-gray-700 text-xs tracking-[0.2em]">OPERATED BY NOIRA</p>
        </div>
      </footer>
    </main>
  )
}