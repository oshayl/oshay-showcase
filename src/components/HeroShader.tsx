'use client'

import Image from 'next/image'
import {
  Shader,
  Aurora,
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
} from 'shaders/react'

export function NoiraLogoShader() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black">
      {/* Background Shader Effects */}
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
      
      {/* Logo Image */}
      <div className="relative z-10 w-48 h-48">
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

export function ShayVisualsLogoShader() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black">
      {/* Background Shader Effects */}
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
      
      {/* Logo Image */}
      <div className="relative z-10 w-48 h-48">
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

export function AuroraBackground() {
  return (
    <Shader className="w-full h-full">
      <SolidColor color="#0a0a0a" />
      <Swirl
        blend={30}
        colorA="#4f46e5"
        colorB="#06b6d4"
        detail={3}
        speed={0.3}
      />
      <Blob
        blendMode="linearDodge"
        center={{
          type: "mouse-position",
          reach: 0.5,
          originX: 0.5,
          originY: 0.5,
          momentum: 0.3,
          smoothing: 0.3
        }}
        colorA="#d4b99633"
        colorB="#4f46e533"
        deformation={0.8}
        size={0.2}
        softness={0.6}
      />
      <FilmGrain strength={0.05} visible={true} />
    </Shader>
  )
}

export function CardBackgroundShader() {
  return (
    <Shader className="w-full h-full">
      <SolidColor color="#111111" />
      <Swirl
        blend={30}
        colorA="#1a1a2e"
        colorB="#0f0f1a"
        colorSpace="oklab"
        detail={3}
        speed={0.4}
      />
      <Blob
        blendMode="linearDodge"
        center={{
          type: "mouse-position",
          reach: 0.5,
          originX: 0.5,
          originY: 0.5,
          momentum: 0.3,
          smoothing: 0.3
        }}
        colorA="#4f46e533"
        colorB="#06b6d433"
        deformation={0.8}
        size={0.2}
        softness={0.6}
      />
      <CursorRipples
        chromaticSplit={1.5}
        decay={4}
        intensity={15}
        radius={0.6}
        visible={true}
      />
    </Shader>
  )
}
