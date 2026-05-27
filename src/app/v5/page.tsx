'use client'

import Image from 'next/image'
import { Shader, Glass, SolidColor, Swirl, Vignette, FilmGrain, ReflectivePlane, FloatingParticles, Marble } from 'shaders/react'
import { motion } from 'framer-motion'

const NOIRA_SDF = 'https://data.shaders.com/storage/v1/object/public/user-uploaded-images/user_3EFXpAyJVr1SfG6V0LgngQDNE5w/3xHVOSi-cR8i_sdf.bin'
const SHAY_SDF = 'https://data.shaders.com/storage/v1/object/public/user-uploaded-images/user_3EFXpAyJVr1SfG6V0LgngQDNE5w/XDRmZpzHc0TC_sdf.bin'

const reveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  viewport: { once: true, margin: '-100px' },
}

export default function V5() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-8 flex justify-between items-center mix-blend-difference">
        <p className="font-display text-sm tracking-[0.15em] uppercase text-white">O'Shay Lighten</p>
        <div className="flex gap-10 text-[11px] tracking-[0.15em] uppercase text-white/60">
          <a href="#noira" className="hover:text-white transition-colors">Noira</a>
          <a href="#shay" className="hover:text-white transition-colors">ShayVisuals</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* EDITORIAL HERO */}
      <section className="h-screen flex items-end pb-24 px-12 relative">
        <div className="absolute inset-0">
          <Shader className="w-full h-full">
            <SolidColor color="#000000" />
            <Marble colorA="#111111" colorB="#0a0a0a" colorC="#080808" scale={3} turbulence={0.5} speed={0.03} seed={42} />
            <FloatingParticles count={15} particleSize={0.3} particleSoftness={0.8} speed={0.03} twinkle={0.2} particleColor="#d4b99708" />
            <Vignette intensity={0.9} />
          </Shader>
        </div>
        <div className="relative z-10 max-w-5xl">
          <motion.p {...reveal} className="text-[#d4b996] text-[11px] tracking-[0.5em] uppercase mb-6">
            Noira LLC · ShayVisuals LLC
          </motion.p>
          <motion.h1 {...reveal} transition={{ ...reveal.transition, delay: 0.1 }} className="font-display text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] mb-4">
            O&apos;SHAY<br />
            <span className="font-light text-gray-400 tracking-[-0.02em]">LIGHTEN</span>
          </motion.h1>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.2 }} className="flex items-center gap-4">
            <div className="h-px w-20 bg-[#d4b996]" />
            <p className="text-gray-500 text-sm tracking-wider">FOUNDER & OPERATOR</p>
          </motion.div>
        </div>
      </section>

      {/* NOIRA */}
      <section id="noira" className="py-40 px-12 relative">
        <div className="absolute inset-0">
          <Shader className="w-full h-full">
            <SolidColor color="#020208" />
            <Swirl colorA="#060612" colorB="#020208" detail={1.5} speed={0.03} blend={6} />
            <Vignette intensity={0.5} />
          </Shader>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.p {...reveal} className="text-[#7c6df0] text-[11px] tracking-[0.5em] uppercase mb-8">01 — Noira LLC</motion.p>
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <motion.h2 {...reveal} className="font-display text-[clamp(2.5rem,6vw,7rem)] font-bold leading-[0.88] mb-10">
                Business<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c6df0] to-[#06b6d4]">Operator</span>
              </motion.h2>
              <motion.p {...reveal} transition={{ ...reveal.transition, delay: 0.1 }} className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Briefings, pipelines, clients, tools — nothing falls through the cracks. Full-stack operations from CRM to deployment.
              </motion.p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <div className="absolute inset-0">
                  <Shader className="w-full h-full">
                    <SolidColor color="#050510" />
                    <Glass cutout={true} scale={0.5} refraction={1.6} edgeSoftness={0.1} thickness={0.18} aberration={0.015} innerZoom={1.1} highlight={0.95} highlightColor="#ffc15c" fresnel={0.08} shapeSdfUrl={NOIRA_SDF}>
                      <Swirl colorA="#1a1040" colorB="#0a0620" detail={2.5} speed={0.08} blend={15} />
                    </Glass>
                    <ReflectivePlane distance={0.5} falloff={2.5} blur={3} blurDistance={0.1} edges="clamp" />
                    <FilmGrain bias={0.02} animated={true} />
                  </Shader>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-36 h-36">
                    <Image src="/logos/Noira.svg" alt="Noira" fill className="object-contain drop-shadow-[0_0_30px_rgba(255,193,92,0.2)]" priority />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-4 mt-20">
            {[
              { val: '$23K+', label: 'Revenue Tracked' },
              { val: '5', label: 'Active Clients' },
              { val: '386', label: 'Articles' },
              { val: '0', label: 'Missed' },
            ].map((s, i) => (
              <motion.div key={s.label} {...reveal} transition={{ ...reveal.transition, delay: i * 0.05 }} className="border-t border-white/[0.06] pt-6">
                <p className="font-display text-3xl font-bold text-[#d4b996]">{s.val}</p>
                <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SHAYVISUALS */}
      <section id="shay" className="py-40 px-12 relative">
        <div className="absolute inset-0">
          <Shader className="w-full h-full">
            <SolidColor color="#020202" />
            <Swirl colorA="#0a0505" colorB="#020202" detail={1.5} speed={0.03} blend={6} />
            <Vignette intensity={0.5} />
          </Shader>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.p {...reveal} className="text-[#f06383] text-[11px] tracking-[0.5em] uppercase mb-8">02 — ShayVisuals LLC</motion.p>
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <div className="absolute inset-0">
                  <Shader className="w-full h-full">
                    <SolidColor color="#050202" />
                    <Glass cutout={true} scale={0.5} refraction={1.6} edgeSoftness={0.1} thickness={0.18} aberration={0.015} innerZoom={1.1} highlight={0.95} highlightColor="#d4b996" fresnel={0.08} shapeSdfUrl={SHAY_SDF}>
                      <Swirl colorA="#201010" colorB="#100505" detail={2.5} speed={0.08} blend={15} />
                    </Glass>
                    <ReflectivePlane distance={0.5} falloff={2.5} blur={3} blurDistance={0.1} edges="clamp" />
                    <FilmGrain bias={0.02} animated={true} />
                  </Shader>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-36 h-36">
                    <Image src="/logos/ShayVisuals.svg" alt="ShayVisuals" fill className="object-contain drop-shadow-[0_0_30px_rgba(212,185,150,0.2)]" priority />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <motion.h2 {...reveal} className="font-display text-[clamp(2.5rem,6vw,7rem)] font-bold leading-[0.88] mb-10">
                Visual<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b996] to-[#f06383]">Storytelling</span>
              </motion.h2>
              <motion.p {...reveal} transition={{ ...reveal.transition, delay: 0.1 }} className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Music videos, corporate content, photo enhancement. Cinematic quality that captures your story and engages your audience.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-40 px-12 relative">
        <div className="absolute inset-0">
          <Shader className="w-full h-full">
            <SolidColor color="#000000" />
            <FloatingParticles count={10} particleSize={0.3} particleSoftness={0.8} speed={0.03} twinkle={0.2} particleColor="#d4b99708" />
            <Vignette intensity={0.85} />
          </Shader>
        </div>
        <div className="relative z-10 max-w-3xl">
          <motion.p {...reveal} className="text-[#d4b996] text-[11px] tracking-[0.5em] uppercase mb-4">03 — Contact</motion.p>
          <motion.h2 {...reveal} className="font-display text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.85] mb-8">
            Let&apos;s <span className="font-light text-gray-400">talk</span>
          </motion.h2>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
            <a href="mailto:oshay@noira.us" className="text-[#d4b996] text-xl tracking-wider hover:text-white transition-colors border-b border-[#d4b996]/30 hover:border-white/50 pb-1">
              oshay@noira.us
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="py-10 px-12 border-t border-white/[0.04]">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-[10px] tracking-[0.15em]">© 2026 O'SHAY LIGHTEN</p>
          <p className="text-gray-700 text-[10px] tracking-[0.15em]">OPERATED BY NOIRA</p>
        </div>
      </footer>
    </main>
  )
}