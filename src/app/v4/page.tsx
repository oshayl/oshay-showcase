'use client'

import Image from 'next/image'
import { Shader, Glass, SolidColor, Swirl, Vignette, FilmGrain, FloatingParticles, ReflectivePlane, FlowingGradient, ChromaticAberration } from 'shaders/react'
import { motion } from 'framer-motion'

const NOIRA_SDF = 'https://data.shaders.com/storage/v1/object/public/user-uploaded-images/user_3EFXpAyJVr1SfG6V0LgngQDNE5w/3xHVOSi-cR8i_sdf.bin'
const SHAY_SDF = 'https://data.shaders.com/storage/v1/object/public/user-uploaded-images/user_3EFXpAyJVr1SfG6V0LgngQDNE5w/XDRmZpzHc0TC_sdf.bin'

export default function V4() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center">
        <p className="font-display text-sm tracking-[0.2em] uppercase text-[#d4b996]">O'Shay Lighten</p>
        <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase text-gray-600">
          <a href="#noira" className="hover:text-white transition-colors">Noira</a>
          <a href="#shay" className="hover:text-white transition-colors">Shay</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* FULL BLEED HERO */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Shader className="w-full h-full">
            <SolidColor color="#000000" />
            <Glass cutout={true} scale={0.35} refraction={2.5} edgeSoftness={0.08} thickness={0.35} aberration={0.04} innerZoom={1.3} highlight={1} highlightColor="#d4b996" fresnel={0.2} shapeSdfUrl={NOIRA_SDF}>
              <FlowingGradient colorA="#1a1040" colorB="#0d0620" colorC="#180830" colorD="#0a0418" speed={0.06} distortion={0.4} seed={7} />
            </Glass>
            <Glass cutout={true} scale={0.25} refraction={2} edgeSoftness={0.1} thickness={0.3} aberration={0.03} innerZoom={1.2} highlight={0.9} highlightColor="#ffc15c" fresnel={0.15} shapeSdfUrl={SHAY_SDF} blendMode="screen">
              <FlowingGradient colorA="#201010" colorB="#100508" colorC="#180810" colorD="#0a0408" speed={0.05} distortion={0.35} seed={12} />
            </Glass>
            <ReflectivePlane distance={0.5} falloff={2.5} blur={4} blurDistance={0.1} edges="clamp" />
            <FloatingParticles count={50} particleSize={0.6} particleSoftness={0.5} speed={0.08} twinkle={0.4} particleColor="#d4b99718" />
            <ChromaticAberration redOffset={0.001} greenOffset={0} blueOffset={-0.001} />
            <Vignette intensity={0.75} />
            <FilmGrain bias={0.03} animated={true} />
          </Shader>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="text-[#d4b996] text-[10px] tracking-[0.6em] uppercase mb-8">Founder & Operator</motion.p>
          <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, duration: 1 }}
            className="font-display text-8xl md:text-[160px] font-bold leading-[0.75] mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b996] via-white to-[#ffc15c]">O&apos;SHAY</span>
          </motion.h1>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
            className="font-display text-3xl md:text-5xl font-light tracking-[0.15em] text-gray-400">
            LIGHTEN
          </motion.h2>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <div className="w-px h-10 bg-gradient-to-b from-[#d4b996]/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* NOIRA */}
      <section id="noira" className="py-40 px-6 relative">
        <div className="absolute inset-0">
          <Shader className="w-full h-full">
            <SolidColor color="#020208" />
            <Swirl colorA="#060618" colorB="#020208" detail={2} speed={0.04} blend={8} />
            <Vignette intensity={0.6} />
          </Shader>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-[#7c6df0] text-[10px] tracking-[0.5em] uppercase mb-4">Noira LLC</p>
              <h2 className="font-display text-6xl lg:text-8xl font-bold leading-[0.85] mb-8">
                YOUR<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c6df0] to-[#06b6d4]">OPERATOR</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                From CRM to deployment, Noira handles briefings, runs pipelines, and manages clients — so nothing falls through.
              </p>
            </div>
            <div className="lg:col-span-2 relative aspect-square">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Shader className="w-full h-full">
                  <SolidColor color="#050510" />
                  <Glass cutout={true} scale={0.55} refraction={1.8} edgeSoftness={0.12} thickness={0.2} aberration={0.02} innerZoom={1.15} highlight={0.85} highlightColor="#ffc15c" fresnel={0.08} shapeSdfUrl={NOIRA_SDF}>
                    <Swirl colorA="#1a1040" colorB="#0a0620" detail={3} speed={0.1} blend={18} />
                  </Glass>
                  <ReflectivePlane distance={0.55} falloff={2} blur={3} blurDistance={0.12} edges="clamp" />
                  <FilmGrain bias={0.02} animated={true} />
                </Shader>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 h-40">
                  <Image src="/logos/Noira.svg" alt="Noira" fill className="object-contain drop-shadow-[0_0_40px_rgba(255,193,92,0.2)]" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHAYVISUALS */}
      <section id="shay" className="py-40 px-6 relative">
        <div className="absolute inset-0">
          <Shader className="w-full h-full">
            <SolidColor color="#020202" />
            <Swirl colorA="#0f0606" colorB="#020202" detail={2} speed={0.04} blend={8} />
            <Vignette intensity={0.6} />
          </Shader>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 relative aspect-square order-1">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Shader className="w-full h-full">
                  <SolidColor color="#050202" />
                  <Glass cutout={true} scale={0.55} refraction={1.8} edgeSoftness={0.12} thickness={0.2} aberration={0.02} innerZoom={1.15} highlight={0.85} highlightColor="#d4b996" fresnel={0.08} shapeSdfUrl={SHAY_SDF}>
                    <Swirl colorA="#201010" colorB="#100505" detail={3} speed={0.1} blend={18} />
                  </Glass>
                  <ReflectivePlane distance={0.55} falloff={2} blur={3} blurDistance={0.12} edges="clamp" />
                  <FilmGrain bias={0.02} animated={true} />
                </Shader>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 h-40">
                  <Image src="/logos/ShayVisuals.svg" alt="ShayVisuals" fill className="object-contain drop-shadow-[0_0_40px_rgba(212,185,150,0.2)]" priority />
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 order-2">
              <p className="text-[#f06383] text-[10px] tracking-[0.5em] uppercase mb-4">ShayVisuals LLC</p>
              <h2 className="font-display text-6xl lg:text-8xl font-bold leading-[0.85] mb-8">
                VISUAL<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b996] to-[#f06383]">STORYTELLING</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                Music videos, corporate content, photo enhancement. Cinematic quality that captures your story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-40 px-6 relative">
        <div className="absolute inset-0">
          <Shader className="w-full h-full">
            <SolidColor color="#000000" />
            <FloatingParticles count={20} particleSize={0.4} particleSoftness={0.7} speed={0.04} twinkle={0.3} particleColor="#d4b99710" />
            <Vignette intensity={0.8} />
          </Shader>
        </div>
        <div className="relative z-10 max-w-xl mx-auto text-center">
          <p className="text-[#d4b996] text-[10px] tracking-[0.5em] uppercase mb-4">Contact</p>
          <h2 className="font-display text-6xl font-bold mb-8">LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b996] to-[#ffc15c]">BUILD</span></h2>
          <a href="mailto:oshay@noira.us" className="inline-block px-12 py-5 bg-[#d4b996] text-black text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#ffc15c] transition-colors">
            oshay@noira.us
          </a>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/[0.04]">
        <p className="text-gray-700 text-[10px] tracking-[0.2em] text-center">© 2026 O'SHAY LIGHTEN — OPERATED BY NOIRA</p>
      </footer>
    </main>
  )
}