'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion'
import {
  Shader,
  Glass,
  SolidColor,
  Swirl,
  Blob,
  WaveDistortion,
  CursorRipples,
  FilmGrain,
  Dither,
  FallingLines,
  Pixelate,
  ReflectivePlane,
  Neon,
  Emboss,
  ChromaticAberration,
  Vignette,
  Blur,
  Aurora,
  Liquify,
} from 'shaders/react'

// ============================================
// CUSTOM CURSOR WITH SHADER TRAILS
// ============================================
export function ShaderCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [cursorX, cursorY])

  const background = useMotionTemplate`radial-gradient(150px circle at ${cursorXSpring}px ${cursorYSpring}px, rgba(212,185,150,0.15), transparent 80%)`

  return (
    <>
      {/* Glow follow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[9999] mix-blend-screen"
        style={{ background }}
      />
      
      {/* Shader trails */}
      <div className="pointer-events-none fixed inset-0 z-[9998]">
        <Shader className="w-full h-full">
          <CursorRipples
            chromaticSplit={4}
            decay={8}
            intensity={30}
            radius={1}
            visible={true}
          />
        </Shader>
      </div>

      {/* Custom cursor dot */}
      <motion.div
        className="pointer-events-none fixed z-[10000] w-4 h-4 -ml-2 -mt-2 rounded-full bg-amber-400 mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
      />
    </>
  )
}

// ============================================
// PARALLAX SHADER BACKGROUNDS
// ============================================
export function ParallaxShaderBackground({ section }: { section: 'hero' | 'noira' | 'shay' | 'work' | 'contact' }) {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -150])
  
  const springY1 = useSpring(y1, { damping: 30, stiffness: 100 })
  const springY2 = useSpring(y2, { damping: 30, stiffness: 100 })

  if (section === 'hero') {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div style={{ y: springY1 }} className="absolute inset-0">
          <Shader className="w-full h-full">
            <SolidColor color="#000000" />
            <Swirl
              blend={25}
              colorA="#1a1a2e"
              colorB="#0f0f1a"
              detail={4}
              speed={0.15}
            />
            <FallingLines
              angle={15}
              colorA="#d4b99633"
              colorB="#ffc15c22"
              density={40}
              rounding={0.5}
              speed={0.1}
              speedVariance={0.3}
              strokeWidth={0.5}
              trailLength={0.02}
            />
            <FilmGrain strength={0.04} visible={true} />
          </Shader>
        </motion.div>
        
        <motion.div style={{ y: springY2, opacity: 0.5 }} className="absolute inset-0">
          <Shader className="w-full h-full">
            <Blob
              blendMode="screen"
              center={{
                type: "mouse-position",
                reach: 0.8,
                originX: 0.5,
                originY: 0.5,
                momentum: 0.1,
                smoothing: 0.1
              }}
              colorA="#4f46e522"
              colorB="#06b6d411"
              deformation={0.5}
              size={0.4}
              softness={0.8}
            />
          </Shader>
        </motion.div>
      </div>
    )
  }

  if (section === 'noira') {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Shader className="w-full h-full">
          <SolidColor color="#050510" />
          <Swirl
            blend={30}
            colorA="#1e1e3f"
            colorB="#0f0f1a"
            detail={3.5}
            speed={0.2}
          />
          <Blob
            blendMode="linearDodge"
            center={{
              type: "mouse-position",
              reach: 0.5,
              originX: 0.5,
              originY: 0.5,
              momentum: 0.2,
              smoothing: 0.25
            }}
            colorA="#4f46e533"
            colorB="#06b6d422"
            deformation={0.7}
            size={0.3}
            softness={0.6}
          />
          <WaveDistortion
            angle={45}
            edges="mirror"
            frequency={4}
            speed={1.5}
            strength={0.08}
            visible={true}
          />
        </Shader>
      </div>
    )
  }

  if (section === 'shay') {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Shader className="w-full h-full">
          <SolidColor color="#0a0505" />
          <Swirl
            blend={35}
            colorA="#2a1a1a"
            colorB="#1a0f0f"
            detail={3}
            speed={0.25}
          />
          <FallingLines
            angle={-10}
            colorA="#d4b99644"
            colorB="#f0638333"
            density={50}
            rounding={0.3}
            speed={0.15}
            speedVariance={0.5}
            strokeWidth={0.6}
            trailLength={0.03}
          />
          <ChromaticAberration
            strength={0.12}
            visible={true}
          />
        </Shader>
      </div>
    )
  }

  if (section === 'work') {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Shader className="w-full h-full">
          <SolidColor color="#000000" />
          <Liquify
            intensity={0.5}
          />
          <Blob
            blendMode="overlay"
            center={{
              type: "mouse-position",
              reach: 0.6,
              originX: 0.5,
              originY: 0.5,
              momentum: 0.25,
              smoothing: 0.3
            }}
            colorA="#d4b99622"
            colorB="#ffc15c11"
            deformation={0.6}
            size={0.35}
            softness={0.7}
          />
          <Dither
            colorMode="source"
            pattern="bayer4"
            pixelSize={1.5}
          />
        </Shader>
      </div>
    )
  }

  if (section === 'contact') {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Shader className="w-full h-full">
          <SolidColor color="#000000" />
          <Neon
            color="#d4b996"
            intensity={0.5}
          />
          <Emboss
            lightAngle={135}
            lightIntensity={0.25}
            visible={true}
          />
          <Vignette intensity={0.5} visible={true} />
        </Shader>
      </div>
    )
  }

  return null
}

// ============================================
// 3D TILT CARD WITH SHADER INTERIOR
// ============================================
export function ShaderTiltCard({ 
  children, 
  className = '',
  shaderColor = 'amber'
}: { 
  children: React.ReactNode
  className?: string
  shaderColor?: 'amber' | 'blue' | 'purple'
}) {
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-1, 1], [8, -8])
  const rotateY = useTransform(x, [-1, 1], [-8, 8])
  
  const springConfig = { damping: 25, stiffness: 200 }
  const rotateXSpring = useSpring(rotateX, springConfig)
  const rotateYSpring = useSpring(rotateY, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const colors = {
    amber: { colorA: '#d4b99644', colorB: '#ffc15c22' },
    blue: { colorA: '#4f46e533', colorB: '#06b6d422' },
    purple: { colorA: '#7c3aed33', colorB: '#a855f722' },
  }

  return (
    <motion.div
      ref={ref}
      className={`relative perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Shader Background */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ transform: 'translateZ(-20px)' }}>
        <Shader className="w-full h-full">
          <SolidColor color="#111111" />
          <Swirl
            blend={25}
            colorA={colors[shaderColor].colorA}
            colorB={colors[shaderColor].colorB}
            detail={3}
            speed={0.3}
          />
          <Blob
            blendMode="linearDodge"
            center={{
              type: "mouse-position",
              reach: 0.7,
              originX: 0.5,
              originY: 0.5,
              momentum: 0.15,
              smoothing: 0.2
            }}
            colorA={colors[shaderColor].colorA}
            colorB={colors[shaderColor].colorB}
            deformation={0.8}
            size={0.4}
            softness={0.6}
          />
          <CursorRipples
            chromaticSplit={2.5}
            decay={6}
            intensity={20}
            radius={0.8}
            visible={true}
          />
        </Shader>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8" style={{ transform: 'translateZ(40px)' }}>
        {children}
      </div>
      
      {/* Glossy overlay */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          transform: 'translateZ(60px)',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
        }}
      />
    </motion.div>
  )
}

// ============================================
// LOGO SHADERS WITH LOGOS
// ============================================
export function NoiraLogoShader({ size = 'medium' }: { size?: 'small' | 'medium' | 'large' }) {
  const sizeClasses = {
    small: 'w-32 h-32',
    medium: 'w-48 h-48',
    large: 'w-64 h-64',
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black">
      <Shader className="absolute inset-0">
        <SolidColor color="#000000" />
        <Glass
          aberration={0}
          cutout={true}
          edgeSoftness={0.2}
          fresnel={0}
          fresnelSoftness={0}
          highlight={0.8}
          highlightColor="#ffc15c"
          innerZoom={1.2}
          refraction={2}
          scale={0.65}
          shapeSdfUrl="https://data.shaders.com/storage/v1/object/public/user-uploaded-images/user_3EFXpAyJVr1SfG6V0LgngQDNE5w/3xHVOSi-cR8i_sdf.bin"
          thickness={0.24}
        >
          <FallingLines
            angle={0}
            colorA="#dfc61e"
            colorB="#f06383"
            density={60}
            rounding={0}
            speed={0.25}
            speedVariance={0.8}
            strokeWidth={0.76}
            trailLength={0.03}
          />
          <Pixelate visible={true} />
        </Glass>
        <Dither
          colorMode="source"
          pattern="bayer2"
          pixelSize={2}
        />
        <ReflectivePlane
          blur={4.7}
          blurDistance={0.14}
          distance={0.59}
          falloff={1.91}
          height={0.75}
        />
      </Shader>
      
      <div className={`relative z-10 ${sizeClasses[size]}`}>
        <Image
          src="/logos/Noira.svg"
          alt="Noira"
          fill
          className="object-contain drop-shadow-[0_0_30px_rgba(255,193,92,0.5)]"
        />
      </div>
    </div>
  )
}

export function ShayVisualsLogoShader({ size = 'medium' }: { size?: 'small' | 'medium' | 'large' }) {
  const sizeClasses = {
    small: 'w-32 h-32',
    medium: 'w-48 h-48',
    large: 'w-64 h-64',
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black">
      <Shader className="absolute inset-0">
        <SolidColor color="#000000" />
        <Glass
          aberration={0}
          cutout={true}
          edgeSoftness={0.2}
          fresnel={0}
          fresnelSoftness={0}
          highlight={0.8}
          highlightColor="#d4b996"
          innerZoom={1.2}
          refraction={2}
          scale={0.65}
          shapeSdfUrl="https://data.shaders.com/storage/v1/object/public/user-uploaded-images/user_3EFXpAyJVr1SfG6V0LgngQDNE5w/XDRmZpzHc0TC_sdf.bin"
          thickness={0.24}
        >
          <FallingLines
            angle={0}
            colorA="#d4b996"
            colorB="#f06383"
            density={60}
            rounding={0}
            speed={0.25}
            speedVariance={0.8}
            strokeWidth={0.76}
            trailLength={0.03}
          />
          <Pixelate visible={true} />
        </Glass>
        <Dither
          colorMode="source"
          pattern="bayer2"
          pixelSize={2}
        />
        <ReflectivePlane
          blur={4.7}
          blurDistance={0.14}
          distance={0.59}
          falloff={1.91}
          height={0.75}
        />
      </Shader>
      
      <div className={`relative z-10 ${sizeClasses[size]}`}>
        <Image
          src="/logos/ShayVisuals.svg"
          alt="ShayVisuals"
          fill
          className="object-contain drop-shadow-[0_0_30px_rgba(212,185,150,0.5)]"
        />
      </div>
    </div>
  )
}

// ============================================
// CINEMATIC LOADING SEQUENCE
// ============================================
export function LoadingSequence({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800)
    const t2 = setTimeout(() => setPhase(2), 1600)
    const t3 = setTimeout(() => setPhase(3), 2400)
    const t4 = setTimeout(onComplete, 3200)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase >= 3 ? 0 : 1 }}
      transition={{ duration: 0.8 }}
    >
      <Shader className="w-full h-full">
        <SolidColor color="#000000" />
        <Liquify
          intensity={0.8}
        />
        <Neon
          color="#d4b996"
          intensity={1}
        />
        <ChromaticAberration
          strength={0.3}
          visible={true}
        />
        <FilmGrain strength={0.08} visible={true} />
      </Shader>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: phase >= 1 ? 1 : 0,
            scale: phase >= 1 ? 1 : 0.8,
          }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-amber-400 text-sm tracking-[0.5em] uppercase mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            O'Shay Lighten
          </motion.p>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: phase >= 2 ? 0 : 20,
              opacity: phase >= 2 ? 1 : 0,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">FOUNDER</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400">
              & OPERATOR
            </span>
          </motion.h1>

          <motion.div
            className="flex gap-2 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 1 : 0 }}
            transition={{ delay: 0.4 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-amber-400"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// ============================================
// ANIMATED STATS COUNTER
// ============================================
export function AnimatedStat({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [displayValue, setDisplayValue] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      if (progress > 0.5) {
        setDisplayValue(Math.floor(progress * value))
      }
    })

    return () => unsubscribe()
  }, [scrollYProgress, value])

  return (
    <div ref={ref} className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
      <motion.p 
        className="text-3xl md:text-4xl font-bold text-amber-400 mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {displayValue > 0 ? `${displayValue}${suffix}` : `0${suffix}`}
      </motion.p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  )
}

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 z-[9999] origin-left"
      style={{ scaleX }}
    />
  )
}
