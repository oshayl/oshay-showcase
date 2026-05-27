import Link from 'next/link'

export default function Home() {
  const variations = [
    {
      id: 'v1',
      name: 'Glass Monolith',
      desc: 'Vertical stack. Glass panels floating on void. Maximum whitespace.',
      path: '/v1',
    },
    {
      id: 'v2',
      name: 'Glass Split',
      desc: 'Two-column. Logos left, copy right. Glass divider wall.',
      path: '/v2',
    },
    {
      id: 'v3',
      name: 'Bento Glass',
      desc: 'Grid cards. Each module is a glass tile. Dense but clean.',
      path: '/v3',
    },
    {
      id: 'v4',
      name: 'Full Bleed Hero',
      desc: 'Massive glass hero that morphs into sections on scroll.',
      path: '/v4',
    },
    {
      id: 'v5',
      name: 'Dark Editorial',
      desc: 'Large type. Subtle glass accents. Magazine feel.',
      path: '/v5',
    },
    {
      id: 'v6',
      name: 'Glass Tunnel',
      desc: 'Walking through glass. Each section is a glass corridor.',
      path: '/v6',
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <p className="text-[#d4b996] text-xs tracking-[0.4em] uppercase mb-4">6 Variations</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 leading-[0.9]">
          Pick your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b996] to-[#ffc15c]">experience</span>
        </h1>
        <p className="text-gray-500 mb-16 text-lg">Minimalist. Glass-forward. Shader-powered.</p>

        <div className="grid gap-3">
          {variations.map((v) => (
            <Link
              key={v.id}
              href={v.path}
              className="group flex items-center justify-between p-6 rounded-xl border border-white/[0.06] hover:border-[#d4b996]/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
            >
              <div>
                <p className="text-[#d4b996] text-[10px] tracking-[0.3em] uppercase mb-1">{v.id}</p>
                <h2 className="font-display text-xl font-semibold text-white group-hover:text-[#d4b996] transition-colors">{v.name}</h2>
                <p className="text-gray-500 text-sm mt-1">{v.desc}</p>
              </div>
              <span className="text-gray-600 group-hover:text-[#d4b996] transition-colors text-2xl ml-4">→</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}