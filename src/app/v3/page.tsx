'use client'

import Image from 'next/image'
import { Shader, Glass, SolidColor, Swirl, Vignette, FilmGrain, FloatingParticles, ReflectivePlane, Dither } from 'shaders/react'
import { motion } from 'framer-motion'

const NOIRA_SDF = 'https://data.shaders.com/storage/v1/object/public/user-uploaded-images/user_3EFXpAyJVr1SfG6V0LgngQDNE5w/3xHVOSi-cR8i_sdf.bin'
const SHAY_SDF = 'https://data.shaders.com/storage/v1/object/public/user-uploaded-images/user_3EFXpAyJVr1SfG6V0LgngQDNE5w/XDRmZpzHc0TC_sdf.bin'

const card = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
})

export default function V3() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex justify-between items-center bg-black/70 backdrop-blur-md border-b border-white/[0.04]">
        <p className="font-display text-xs tracking-[0.3em] uppercase text-[#d4b996]">O'SL</p>
        <div className="flex gap-6 text-[10px] tracking-[0.2em] uppercase text-gray-600">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="absolute inset-0">
          <Shader className="w-full h-full">
            <SolidColor color="#000000" />
            <Swirl colorA="#0a0a0a" colorB="#000000" detail={2} speed={0.06} blend={8} />
            <FloatingParticles count={30} particleSize={0.6} particleSoftness={0.5} speed={0.08} twinkle={0.5} particleColor="#d4b99720" />
            <Vignette intensity={0.85} />
          </Shader>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.p {...card(0)} className="text-[#d4b996] text-[10px] tracking-[0.5em] uppercase mb-4">O'Shay Lighten</motion.p>
          <motion.h1 {...card(0.15)} className="font-display text-7xl md:text-[120px] font-bold leading-[0.8] mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b996] via-white to-[#d4b996]">FOUNDER</span>
          </motion.h1>
          <motion.div {...card(0.3)} className="h-px w-12 bg-[#d4b996]/50 mx-auto my-6" />
          <motion.p {...card(0.4)} className="text-gray-500 text-sm tracking-wider">& OPERATOR</motion.p>
        </div>
      </section>

      {/* BENTO GRID */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Noira Logo - Large */}
            <motion.div {...card(0)} className="col-span-2 row-span-2 relative aspect-square rounded-2xl overflow-hidden border border-white/[0.06]">
              <div className="absolute inset-0">
                <Shader className="w-full h-full">
                  <SolidColor color="#050510" />
                  <Glass cutout={true} scale={0.55} refraction={1.8} edgeSoftness={0.12} thickness={0.22} aberration={0.02} innerZoom={1.15} highlight={0.9} highlightColor="#ffc15c" fresnel={0.08} shapeSdfUrl={NOIRA_SDF}>
                    <Swirl colorA="#1a1040" colorB="#0a0620" detail={3} speed={0.1} blend={18} />
                  </Glass>
                  <ReflectivePlane distance={0.55} falloff={2.2} blur={3.5} blurDistance={0.11} edges="clamp" />
                  <FilmGrain bias={0.025} animated={true} />
                </Shader>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 h-40">
                  <Image src="/logos/Noira.svg" alt="Noira" fill className="object-contain drop-shadow-[0_0_30px_rgba(255,193,92,0.25)]" priority />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-[#d4b996] text-[10px] tracking-[0.3em] uppercase">Noira LLC</p>
                <p className="text-white font-display text-2xl font-bold">Business Operator</p>
              </div>
            </motion.div>

            {/* Stat cards */}
            <motion.div {...card(0.1)} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] flex flex-col justify-end">
              <p className="text-4xl font-display font-bold text-[#d4b996]">$23K</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Revenue Tracked</p>
            </motion.div>

            <motion.div {...card(0.15)} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] flex flex-col justify-end">
              <p className="text-4xl font-display font-bold text-white">5</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Active Clients</p>
            </motion.div>

            <motion.div {...card(0.2)} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] flex flex-col justify-end">
              <p className="text-4xl font-display font-bold text-white">386</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Articles Scraped</p>
            </motion.div>

            <motion.div {...card(0.25)} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] flex flex-col justify-end">
              <p className="text-4xl font-display font-bold text-[#7c6df0]">0</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Missed Follow-ups</p>
            </motion.div>

            {/* ShayVisuals Logo - Large */}
            <motion.div {...card(0.3)} className="col-span-2 relative aspect-[2/1] rounded-2xl overflow-hidden border border-white/[0.06]">
              <div className="absolute inset-0">
                <Shader className="w-full h-full">
                  <SolidColor color="#050202" />
                  <Glass cutout={true} scale={0.55} refraction={1.8} edgeSoftness={0.12} thickness={0.22} aberration={0.02} innerZoom={1.15} highlight={0.9} highlightColor="#d4b996" fresnel={0.08} shapeSdfUrl={SHAY_SDF}>
                    <Swirl colorA="#201010" colorB="#100505" detail={3} speed={0.1} blend={18} />
                  </Glass>
                  <ReflectivePlane distance={0.55} falloff={2.2} blur={3.5} blurDistance={0.11} edges="clamp" />
                  <FilmGrain bias={0.025} animated={true} />
                </Shader>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <Image src="/logos/ShayVisuals.svg" alt="ShayVisuals" fill className="object-contain drop-shadow-[0_0_30px_rgba(212,185,150,0.25)]" priority />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-[#f06383] text-[10px] tracking-[0.3em] uppercase">ShayVisuals LLC</p>
                <p className="text-white font-display text-xl font-bold">Visual Storytelling</p>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div {...card(0.35)} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] col-span-2 lg:col-span-1">
              <p className="text-[10px] text-[#d4b996] tracking-[0.3em] uppercase mb-3">Services</p>
              <div className="space-y-2">
                {['Music Videos', 'Corporate Content', 'Web Development', 'CRM Automation'].map((s, i) => (
                  <p key={s} className="text-sm text-gray-300 flex items-center gap-2">
                    <span className="text-[#d4b996] text-[10px]">0{i + 1}</span> {s}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[#d4b996] text-[10px] tracking-[0.4em] uppercase mb-4">Contact</p>
          <h2 className="font-display text-5xl font-bold mb-6">LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b996] to-[#ffc15c]">BUILD</span></h2>
          <a href="mailto:oshay@noira.us" className="inline-block px-10 py-4 bg-[#d4b996] text-black text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#ffc15c] transition-colors">
            oshay@noira.us
          </a>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/[0.04]">
        <p className="text-gray-700 text-[10px] tracking-[0.2em] text-center">© 2026 O'SHAY LIGHTEN</p>
      </footer>
    </main>
  )
}