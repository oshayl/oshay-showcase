'use client'

import Image from 'next/image'
import { Shader, Glass, SolidColor, Swirl, Vignette, FilmGrain, ReflectivePlane, FloatingParticles, FlowingGradient, Fog, Spiral } from 'shaders/react'
import { motion } from 'framer-motion'

const NOIRA_SDF = 'https://data.shaders.com/storage/v1/object/public/user-uploaded-images/user_3EFXpAyJVr1SfG6V0LgngQDNE5w/3xHVOSi-cR8i_sdf.bin'
const SHAY_SDF = 'https://data.shaders.com/storage/v1/object/public/user-uploaded-images/user_3EFXpAyJVr1SfG6V0LgngQDNE5w/XDRmZpzHc0TC_sdf.bin'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  viewport: { once: true, margin: '-50px' },
}

export default function V6() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-10 py-6 flex justify-between items-center bg-black/60 backdrop-blur-lg">
        <p className="font-display text-xs tracking-[0.25em] uppercase text-[#d4b996]">O&apos;Shay</p>
        <div className="flex gap-8 text-[10px] tracking-[0.25em] uppercase text-gray-600">
          <a href="#noira" className="hover:text-[#d4b996] transition-colors">Noira</a>
          <a href="#shay" className="hover:text-[#d4b996] transition-colors">Shay</a>
          <a href="#contact" className="hover:text-[#d4b996] transition-colors">Contact</a>
        </div>
      </nav>

      {/* HERO — Glass Tunnel Entrance */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Deep tunnel background */}
        <div className="absolute inset-0">
          <Shader className="w-full h-full">
            <SolidColor color="#000000" />
            <Spiral colorA="#0d0d0d" colorB="#050505" strokeWidth={0.15} strokeFalloff={0.8} softness={0.9} speed={0.06} scale={0.8} />
            <FloatingParticles count={30} particleSize={0.5} particleSoftness={0.6} speed={0.06} twinkle={0.3} particleColor="#d4b99712" />
            <Fog colorB="#050505" turbulence={0.5} detail={4} speed={0.04} />
            <Vignette intensity={0.9} />
            <FilmGrain bias={0.025} animated={true} />
          </Shader>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}>
            <p className="text-[#d4b996] text-[10px] tracking-[0.6em] uppercase mb-6">Enter the Experience</p>
            <h1 className="font-display text-7xl md:text-[130px] font-bold leading-[0.8] mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#d4b996] to-[#8b7355]">O&apos;SHAY</span>
            </h1>
            <p className="font-display text-2xl md:text-4xl font-light tracking-[0.3em] text-gray-500 mt-4">LIGHTEN</p>
            <div className="w-px h-20 bg-gradient-to-b from-[#d4b996]/60 to-transparent mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* NOIRA — Glass Corridor */}
      <section id="noira" className="min-h-screen flex items-center py-32 px-6 relative">
        <div className="absolute inset-0">
          <Shader className="w-full h-full">
            <SolidColor color="#020208" />
            <Swirl colorA="#080818" colorB="#020208" detail={2.5} speed={0.04} blend={8} />
            <Fog colorB="#080808" turbulence={0.3} detail={3} speed={0.03} />
            <Vignette intensity={0.7} />
          </Shader>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p {...fadeUp} className="text-[#7c6df0] text-[10px] tracking-[0.5em] uppercase mb-4">— Noira LLC</motion.p>
            <motion.h2 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }} className="font-display text-5xl lg:text-7xl font-bold leading-[0.88] mb-8">
              The<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c6df0] to-[#06b6d4]">Operator</span>
            </motion.h2>
            <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="text-gray-500 leading-relaxed max-w-md mb-10">
              Briefings, pipelines, clients, tools. Nothing falls through. Full-stack operations from CRM to deployment.
            </motion.p>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="flex gap-8">
              {[
                { val: '$23K+', label: 'Revenue' },
                { val: '5', label: 'Clients' },
                { val: '0', label: 'Missed' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-[#d4b996]">{s.val}</p>
                  <p className="text-[10px] text-gray-600 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="relative aspect-[3/4]">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <Shader className="w-full h-full">
                <SolidColor color="#050510" />
                <Glass cutout={true} scale={0.5} refraction={2} edgeSoftness={0.08} thickness={0.25} aberration={0.02} innerZoom={1.2} highlight={1} highlightColor="#ffc15c" fresnel={0.12} shapeSdfUrl={NOIRA_SDF}>
                  <FlowingGradient colorA="#1a1040" colorB="#0a0620" colorC="#180830" colorD="#0d0418" speed={0.06} distortion={0.3} seed={7} />
                </Glass>
                <ReflectivePlane distance={0.5} falloff={2.5} blur={3.5} blurDistance={0.1} edges="clamp" />
                <Fog colorB="#0a0a15" turbulence={0.2} detail={3} speed={0.03} />
                <FilmGrain bias={0.02} animated={true} />
              </Shader>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-40 h-40">
                <Image src="/logos/Noira.svg" alt="Noira" fill className="object-contain drop-shadow-[0_0_40px_rgba(255,193,92,0.2)]" priority />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transition — Glass tunnel divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#d4b996]/20 to-transparent" />

      {/* SHAYVISUALS — Glass Corridor */}
      <section id="shay" className="min-h-screen flex items-center py-32 px-6 relative">
        <div className="absolute inset-0">
          <Shader className="w-full h-full">
            <SolidColor color="#020202" />
            <Swirl colorA="#0f0808" colorB="#020202" detail={2.5} speed={0.04} blend={8} />
            <Fog colorB="#080808" turbulence={0.3} detail={3} speed={0.03} />
            <Vignette intensity={0.7} />
          </Shader>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp} className="relative aspect-[3/4] order-2 lg:order-1">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <Shader className="w-full h-full">
                <SolidColor color="#050202" />
                <Glass cutout={true} scale={0.5} refraction={2} edgeSoftness={0.08} thickness={0.25} aberration={0.02} innerZoom={1.2} highlight={1} highlightColor="#d4b996" fresnel={0.12} shapeSdfUrl={SHAY_SDF}>
                  <FlowingGradient colorA="#201010" colorB="#100508" colorC="#180810" colorD="#0a0408" speed={0.06} distortion={0.3} seed={12} />
                </Glass>
                <ReflectivePlane distance={0.5} falloff={2.5} blur={3.5} blurDistance={0.1} edges="clamp" />
                <Fog colorB="#100808" turbulence={0.2} detail={3} speed={0.03} />
                <FilmGrain bias={0.02} animated={true} />
              </Shader>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-40 h-40">
                <Image src="/logos/ShayVisuals.svg" alt="ShayVisuals" fill className="object-contain drop-shadow-[0_0_40px_rgba(212,185,150,0.2)]" priority />
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.p {...fadeUp} className="text-[#f06383] text-[10px] tracking-[0.5em] uppercase mb-4">— ShayVisuals LLC</motion.p>
            <motion.h2 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }} className="font-display text-5xl lg:text-7xl font-bold leading-[0.88] mb-8">
              The<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b996] to-[#f06383]">Storyteller</span>
            </motion.h2>
            <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="text-gray-500 leading-relaxed max-w-md mb-10">
              Music videos, corporate content, photo enhancement. Cinematic quality that captures your story.
            </motion.p>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="space-y-3">
              {['Music Videos', 'Corporate Content', 'Photo Enhancement'].map((s, i) => (
                <div key={s} className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="text-[#d4b996] font-mono text-xs">0{i + 1}</span>
                  {s}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transition */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#d4b996]/20 to-transparent" />

      {/* CONTACT — Glass Exit */}
      <section id="contact" className="py-40 px-6 relative">
        <div className="absolute inset-0">
          <Shader className="w-full h-full">
            <SolidColor color="#000000" />
            <Spiral colorA="#080808" colorB="#040404" strokeWidth={0.1} strokeFalloff={0.9} softness={0.95} speed={0.03} scale={0.6} />
            <FloatingParticles count={15} particleSize={0.3} particleSoftness={0.8} speed={0.04} twinkle={0.2} particleColor="#d4b99708" />
            <Fog colorB="#0a0a0a" turbulence={0.4} detail={4} speed={0.03} />
            <Vignette intensity={0.85} />
          </Shader>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <motion.p {...fadeUp} className="text-[#d4b996] text-[10px] tracking-[0.5em] uppercase mb-4">— Contact</motion.p>
          <motion.h2 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }} className="font-display text-6xl lg:text-8xl font-bold leading-[0.85] mb-8">
            Let&apos;s<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b996] to-[#ffc15c]">build</span>
          </motion.h2>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <a href="mailto:oshay@noira.us" className="text-[#d4b996] text-xl tracking-wider hover:text-white transition-colors border-b border-[#d4b996]/30 hover:border-white/50 pb-1">
              oshay@noira.us
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="py-10 px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-8" />
        <div className="flex justify-between items-center px-4">
          <p className="text-gray-700 text-[10px] tracking-[0.2em]">© 2026 O&apos;SHAY LIGHTEN</p>
          <p className="text-gray-700 text-[10px] tracking-[0.2em]">OPERATED BY NOIRA</p>
        </div>
      </footer>
    </main>
  )
}