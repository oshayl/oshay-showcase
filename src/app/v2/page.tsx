'use client'

import Image from 'next/image'
import { Shader, Glass, SolidColor, Swirl, Vignette, FilmGrain, FloatingParticles, ReflectivePlane, FlowingGradient, Dither } from 'shaders/react'
import { motion } from 'framer-motion'

const NOIRA_SDF = 'https://data.shaders.com/storage/v1/object/public/user-uploaded-images/user_3EFXpAyJVr1SfG6V0LgngQDNE5w/3xHVOSi-cR8i_sdf.bin'
const SHAY_SDF = 'https://data.shaders.com/storage/v1/object/public/user-uploaded-images/user_3EFXpAyJVr1SfG6V0LgngQDNE5w/XDRmZpzHc0TC_sdf.bin'

export default function V2() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/[0.04]">
        <p className="font-display text-sm tracking-[0.2em] uppercase text-[#d4b996]">O'Shay</p>
        <div className="flex gap-8 text-[10px] tracking-[0.3em] uppercase text-gray-500">
          <a href="#noira">Noira</a>
          <a href="#shay">ShayVisuals</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO - split layout */}
      <section className="h-screen flex items-stretch">
        {/* Left: Glass logo */}
        <div className="hidden lg:flex w-1/2 items-center justify-center relative">
          <div className="absolute inset-0">
            <Shader className="w-full h-full">
              <SolidColor color="#000000" />
              <Glass
                cutout={true}
                scale={0.45}
                refraction={2}
                edgeSoftness={0.12}
                thickness={0.3}
                aberration={0.03}
                innerZoom={1.2}
                highlight={1}
                highlightColor="#d4b996"
                fresnel={0.15}
                shapeSdfUrl={NOIRA_SDF}
              >
                <FlowingGradient colorA="#1a1040" colorB="#0a0620" colorC="#160830" colorD="#0d0418" speed={0.08} distortion={0.3} seed={42} />
              </Glass>
              <ReflectivePlane distance={0.55} falloff={2.5} blur={4} blurDistance={0.1} edges="clamp" />
              <Vignette intensity={0.7} />
            </Shader>
          </div>
          <div className="relative z-10 w-64 h-64">
            <Image src="/logos/Noira.svg" alt="Noira" fill className="object-contain drop-shadow-[0_0_50px_rgba(212,185,150,0.25)]" priority />
          </div>
        </div>

        {/* Right: Copy */}
        <div className="w-full lg:w-1/2 flex items-center px-8 lg:px-16 relative">
          <div className="absolute inset-0">
            <Shader className="w-full h-full">
              <SolidColor color="#020205" />
              <FloatingParticles count={20} particleSize={0.4} particleSoftness={0.7} speed={0.06} twinkle={0.3} particleColor="#d4b99710" />
              <Vignette intensity={0.6} />
            </Shader>
          </div>
          <div className="relative z-10 max-w-lg">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-[#d4b996] text-[10px] tracking-[0.5em] uppercase mb-6">Founder & Operator</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="font-display text-5xl lg:text-7xl font-bold leading-[0.85] mb-6">
              O'SHAY<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b996] to-[#ffc15c]">LIGHTEN</span>
            </motion.h1>
            <motion.div initial={{ width: 0 }} animate={{ width: 48 }} transition={{ delay: 0.8, duration: 0.6 }}
              className="h-px bg-[#d4b996] mb-6" />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
              className="text-gray-400 leading-relaxed">
              Noira LLC — marketing automation & web development.<br />
              ShayVisuals LLC — video production & visual content.
            </motion.p>
          </div>
        </div>
      </section>

      {/* NOIRA SECTION - Reversed split */}
      <section id="noira" className="min-h-screen flex items-stretch">
        <div className="w-full lg:w-1/2 flex items-center px-8 lg:px-16 relative order-2 lg:order-1">
          <div className="absolute inset-0">
            <Shader className="w-full h-full">
              <SolidColor color="#030308" />
              <Swirl colorA="#080820" colorB="#030308" detail={2} speed={0.05} blend={10} />
              <Vignette intensity={0.5} />
            </Shader>
          </div>
          <div className="relative z-10 max-w-lg">
            <p className="text-[#7c6df0] text-[10px] tracking-[0.4em] uppercase mb-4">Noira LLC</p>
            <h2 className="font-display text-5xl lg:text-6xl font-bold leading-[0.9] mb-8">
              YOUR BUSINESS<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c6df0] to-[#06b6d4]">OPERATOR</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-12">
              Briefings, pipelines, clients, tools — so you can focus on the work that pays.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: '$23K+', label: 'Revenue' },
                { val: '5', label: 'Clients' },
                { val: '386', label: 'Articles' },
                { val: '0', label: 'Missed' },
              ].map((s) => (
                <div key={s.label} className="p-4 border border-white/[0.06] rounded-lg bg-white/[0.02]">
                  <p className="text-xl font-display font-bold text-[#d4b996]">{s.val}</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex w-1/2 items-center justify-center relative order-1 lg:order-2">
          <div className="absolute inset-0">
            <Shader className="w-full h-full">
              <SolidColor color="#050510" />
              <Glass cutout={true} scale={0.55} refraction={1.8} edgeSoftness={0.1} thickness={0.25} aberration={0.02} innerZoom={1.15} highlight={0.85} highlightColor="#7c6df0" fresnel={0.1} shapeSdfUrl={NOIRA_SDF}>
                <Swirl colorA="#1a1040" colorB="#0a0620" detail={3} speed={0.1} blend={18} />
              </Glass>
              <ReflectivePlane distance={0.55} falloff={2} blur={3} blurDistance={0.12} edges="clamp" />
            </Shader>
          </div>
          <div className="relative z-10 w-56 h-56">
            <Image src="/logos/Noira.svg" alt="Noira" fill className="object-contain drop-shadow-[0_0_40px_rgba(124,109,240,0.3)]" priority />
          </div>
        </div>
      </section>

      {/* SHAYVISUALS SECTION */}
      <section id="shay" className="min-h-screen flex items-stretch">
        <div className="hidden lg:flex w-1/2 items-center justify-center relative">
          <div className="absolute inset-0">
            <Shader className="w-full h-full">
              <SolidColor color="#050202" />
              <Glass cutout={true} scale={0.55} refraction={1.8} edgeSoftness={0.1} thickness={0.25} aberration={0.02} innerZoom={1.15} highlight={0.85} highlightColor="#d4b996" fresnel={0.1} shapeSdfUrl={SHAY_SDF}>
                <Swirl colorA="#201010" colorB="#100505" detail={3} speed={0.1} blend={18} />
              </Glass>
              <ReflectivePlane distance={0.55} falloff={2} blur={3} blurDistance={0.12} edges="clamp" />
            </Shader>
          </div>
          <div className="relative z-10 w-56 h-56">
            <Image src="/logos/ShayVisuals.svg" alt="ShayVisuals" fill className="object-contain drop-shadow-[0_0_40px_rgba(212,185,150,0.3)]" priority />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center px-8 lg:px-16 relative">
          <div className="absolute inset-0">
            <Shader className="w-full h-full">
              <SolidColor color="#030202" />
              <Swirl colorA="#0f0808" colorB="#030202" detail={2} speed={0.05} blend={10} />
              <Vignette intensity={0.5} />
            </Shader>
          </div>
          <div className="relative z-10 max-w-lg">
            <p className="text-[#f06383] text-[10px] tracking-[0.4em] uppercase mb-4">ShayVisuals LLC</p>
            <h2 className="font-display text-5xl lg:text-6xl font-bold leading-[0.9] mb-8">
              VISUAL<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b996] to-[#f06383]">STORYTELLING</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Music videos, corporate content, photo enhancement. Cinematic quality.
            </p>
            <div className="space-y-3">
              {[
                { num: '01', title: 'Music Videos' },
                { num: '02', title: 'Corporate Content' },
                { num: '03', title: 'Photo Enhancement' },
              ].map((s) => (
                <div key={s.num} className="flex items-center gap-4 p-3 border border-white/[0.04] rounded-lg">
                  <span className="text-[#d4b996] font-mono text-xs">{s.num}</span>
                  <span className="text-white text-sm font-medium">{s.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[#d4b996] text-[10px] tracking-[0.4em] uppercase mb-4">Contact</p>
          <h2 className="font-display text-5xl font-bold mb-6">LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b996] to-[#ffc15c]">TALK</span></h2>
          <p className="text-gray-500 mb-10">Need something built? Reach out.</p>
          <a href="mailto:oshay@noira.us" className="inline-block px-10 py-4 bg-[#d4b996] text-black text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#ffc15c] transition-colors">
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